<script>
import axios from "axios";
import { avatar3, avatar4, avatar1 } from "@/assets/images/users/data"
import { useAuthStore } from '@/state/pinia'
const auth = useAuthStore()

import i18n from "../i18n";

/**
 * Nav-bar Component
 */
export default {
  data() {
    return {
      lang: "en",
      lan: i18n.locale,
      text: null,
      flag: null,
      value: null,
      avatar3, avatar4, avatar1,
      languages: [
        {
          flag: require("@/assets/images/flags/us.jpg"),
          language: "en",
          title: "English",
        },
        {
          flag: require("@/assets/images/flags/french.jpg"),
          language: "fr",
          title: "French",
        },
        {
          flag: require("@/assets/images/flags/spain.jpg"),
          language: "es",
          title: "Spanish",
        },
        {
          flag: require("@/assets/images/flags/chaina.png"),
          language: "zh",
          title: "Chinese",
        },
        {
          flag: require("@/assets/images/flags/arabic.png"),
          language: "ar",
          title: "Arabic",
        },
      ],
      locales: ["fr", "en", "ar"]
    };
  },
  mounted() {
    if (process.env.VUE_APP_I18N_LOCALE) {
      this.flag = this.$i18n.locale || process.env.VUE_APP_I18N_LOCALE;
      this.languages.forEach((item) => {
        if (item.language == this.flag) {
          document.getElementById("header-lang-img")?.setAttribute("src", item.flag);
        }
      });
    }
  },
  computed: {
    currentUser() {
      return auth.currentUser
    }
  },
  methods: {
    toggleMenu() {
      this.$parent.toggleMenu();
    },
    toggleRightSidebar() {
      this.$parent.toggleRightSidebar();
    },
    initFullScreen() {
      document.body.classList.toggle("fullscreen-enable");
      if (
        !document.fullscreenElement &&
        /* alternative standard method */ !document.mozFullScreenElement &&
        !document.webkitFullscreenElement
      ) {
        // current working methods
        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
          document.documentElement.webkitRequestFullscreen(
            Element.ALLOW_KEYBOARD_INPUT
          );
        }
      } else {
        if (document.cancelFullScreen) {
          document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        }
      }
    },

    setLanguage(locale, country, flag) {
      this.lan = locale;
      this.text = country;
      this.flag = flag;
      document.getElementById("header-lang-img").setAttribute("src", flag);
      this.$i18n.locale = locale
    },

    logoutUser() {
      // eslint-disable-next-line no-unused-vars
      axios.get("http://127.0.0.1:8000/api/logout").then((res) => {
        this.$router.push({
          name: "default",
        });
      });
    },
  },
};
</script>

<template>
  <header id="page-topbar">
    <div class="navbar-header">
      <div class="d-flex">
        <!-- LOGO -->
        <div class="navbar-brand-box">
          <router-link to="/" class="logo logo-dark">
            <span class="logo-sm">
              <img src="@/assets/images/logo.svg" alt height="22" />
            </span>
            <span class="logo-lg">
              <img src="@/assets/images/logo-dark.png" alt height="17" />
            </span>
          </router-link>

          <router-link to="/" class="logo logo-light">
            <span class="logo-sm">
              <img src="@/assets/images/logo-light.svg" alt height="22" />
            </span>
            <span class="logo-lg">
              <img src="@/assets/images/logo-light.png" alt height="19" />
            </span>
          </router-link>
        </div>

        <BButton variant="white" id="vertical-menu-btn" type="button" class="btn btn-sm px-3 font-size-16 header-item"
          @click="toggleMenu">
          <i class="fa fa-fw fa-bars"></i>
        </BButton>
      </div>

      <div class="d-flex">


        <div class="dropdown d-none d-lg-inline-block ms-1">
          <BButton variant="white" type="button" class="btn header-item noti-icon" @click="initFullScreen">
            <i class="bx bx-fullscreen"></i>
          </BButton>
        </div>


        <BDropdown right variant="black" toggle-class="header-item" menu-class="dropdown-menu-end">
          <template v-slot:button-content>
            <img class="rounded-circle header-profile-user" :src="avatar1" alt="Header Avatar" />
            <span class="d-none d-xl-inline-block ms-1">
              <div v-if="currentUser">
                Admin
              </div>
              <div v-else>Admin</div>
            </span>
            <i class="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
          </template>
          <BDropdownItem>
            <router-link to="/profile" v-slot="{ navigate }">
              <span @click="navigate" @keypress.enter="navigate" class="text-body">
                <i class="bx bx-user font-size-16 align-middle me-1"></i>
                Profil
              </span>
            </router-link>
          </BDropdownItem>
          <BDropdownDivider></BDropdownDivider>
          <a href="/logout" class="dropdown-item text-danger">
            <i class="bx bx-power-off font-size-16 align-middle me-1 text-danger"></i>
            Chiqish
          </a>
        </BDropdown>

        <!-- <div class="dropdown d-inline-block">
          <BButton variant="white" type="button" class="btn header-item noti-icon right-bar-toggle toggle-right"
            @click="toggleRightSidebar">
            <i class="bx bx-cog bx-spin toggle-right"></i>
          </BButton>
        </div> -->
      </div>
    </div>
  </header>
</template>
