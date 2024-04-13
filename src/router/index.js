import { createWebHistory, createRouter } from "vue-router";
import { useAuthStore } from "@/state/pinia";
import routes from "./routes";
import appConfig from "../app.config.json";

const router = createRouter({
  history: createWebHistory(),
  routes,
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});

router.beforeEach((routeTo, routeFrom, next) => {
  const auth = useAuthStore();

  if (process.env.VUE_APP_DEFAULT_AUTH === "firebase") {
    const authRequired = routeTo.matched.some(
      (route) => route.meta.authRequired
    );

    if (!authRequired) return next();

    if (auth.loggedIn) {
      return auth.validate().then((validUser) => {
        validUser ? next() : redirectToLogin();
      });
    }

    redirectToLogin();

    // eslint-disable-next-line no-inner-declarations
    function redirectToLogin() {
      next({ name: "login", query: { redirectFrom: routeTo.fullPath } });
    }
  } else {
    const publicPages = ["/login", "/register", "/forgot-password"];
    const authpage = !publicPages.includes(routeTo.path);
    const loggeduser = localStorage.getItem("user");

    if (authpage && !loggeduser) {
      return next("/login");
    }

    next();
  }
});

router.beforeResolve(async (routeTo, routeFrom, next) => {
  try {
    for (const route of routeTo.matched) {
      await new Promise((resolve, reject) => {
        if (route.meta && route.meta.beforeResolve) {
          route.meta.beforeResolve(routeTo, routeFrom, (...args) => {
            if (args.length) {
              next(...args);
              reject(new Error("Redirected"));
            } else {
              resolve();
            }
          });
        } else {
          resolve();
        }
      });
    }
  } catch (error) {
    return;
  }

  document.title = routeTo.meta.title + " | " + appConfig.title;
  next();
});

export default router;
