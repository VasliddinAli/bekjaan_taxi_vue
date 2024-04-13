<template>
  <Layout>
    <PageHeader :title="'ID: ' + order.id" pageTitle="Buyurtmalar" />

    <div class="checkout-tabs">
      <BTabs pills vertical nav-class="p-0" nav-wrapper-class="col-xl-2 col-md-3 col-sm-12 col-12" content-class="w-100"
        class="ecommerce-checkout-tabs">
        <BTab active>
          <template v-slot:title>
            <i class="bx bxs-card d-block check-nav-icon mt-4 mb-2"></i>
            <p class="fw-bold mb-4">Buyurtma</p>
          </template>
          <BRow>
            <BCol xxl="6" lg="6">
              <BCard no-body>
                <BCardBody>
                  <h5 class="fw-semibold">Buyurtma ma'lumotlari</h5>

                  <div class="table-responsive">
                    <BTableSimple>
                      <BTbody>
                        <BTr>
                          <BTh scope="row">ID</BTh>
                          <BTd>
                            <BBadge variant="primary">#{{ order.id }}</BBadge>
                          </BTd>
                        </BTr>
                        <BTr>
                          <BTh scope="col">Buyurtmachi</BTh>
                          <BTd scope="col">{{ order.client.fullname }}</BTd>
                        </BTr>
                        <BTr>
                          <BTh scope="col">Telefon raqami</BTh>
                          <BTd scope="col">{{ order.client.phone }}</BTd>
                        </BTr>
                        <BTr>
                          <BTh scope="col">Ta'rifi</BTh>
                          <BTd scope="col">{{ order.tarif.name }}</BTd>
                        </BTr>
                        <BTr>
                          <BTh scope="col">Manzil</BTh>
                          <BTd scope="col">{{ order.address.name }}</BTd>
                        </BTr>
                        <BTr>
                          <BTh scope="col">Location</BTh>
                          <BTd scope="col" class="text-danger">{{ order.address.lat_lng }}</BTd>
                        </BTr>
                        <BTr>
                          <BTh scope="col">Izohi</BTh>
                          <BTd scope="col">{{ order.comment }}</BTd>
                        </BTr>
                        <BTr>
                          <BTh scope="col">Boshlang'ich narx</BTh>
                          <BTd scope="col">{{ order.start_summ }}</BTd>
                        </BTr>
                        <BTr>
                          <BTh scope="col">Statusi</BTh>
                          <BTd scope="col">{{ order.status }}</BTd>
                        </BTr>
                        <BTr>
                          <BTh scope="col">Turi</BTh>
                          <BTd scope="col">{{ order.order_type }}</BTd>
                        </BTr>
                        <BTr>
                          <BTh scope="col">Yaratilgan vaqti</BTh>
                          <BTd scope="col">{{ order.created_date }}</BTd>
                        </BTr>
                        <BTr>
                          <BTh scope="col">Tahrirlangan vaqti</BTh>
                          <BTd scope="col">{{ order.updated_date }}</BTd>
                        </BTr>
                        <BTr>
                          <BTh scope="col">Yaratdi</BTh>
                          <BTd scope="col">{{ order.client.fullname }}</BTd>
                        </BTr>
                        <BTr>
                          <BTh scope="col">Tahrirladi</BTh>
                          <BTd scope="col">{{ order.driver.fullname }}</BTd>
                        </BTr>
                      </BTbody>
                    </BTableSimple>
                  </div>
                </BCardBody>
              </BCard>
            </BCol>
            <BCol xxl="6" lg="6">
              <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" class="img-fluid"
                alt="Responsive image" />
            </BCol>
          </BRow>
        </BTab>
        <BTab>
          <template v-slot:title>
            <i class="bx bx-cog d-block check-nav-icon mt-4 mb-2"></i>
            <p class="fw-bold mb-4">Buyurtma xizmatlari</p>
          </template>

          <BCard no-body>
            <BCardBody>
              <h5 class="fw-semibold">Buyurtma xizmatlari</h5>

              <div class="table-responsive">
                <BTableSimple v-if="order.servises.length > 0"
                  class="align-middle dt-responsive nowrap w-100 table-check table-bordered" id="job-list">
                  <BThead>
                    <BTr>
                      <BTh scope="col">Xizmat nomi</BTh>
                      <BTh scope="col">Xizmat narxi</BTh>
                    </BTr>
                  </BThead>

                  <BTbody>
                    <BTr v-for="servise in order.servises" :key="servise.id">
                      <BTh> {{ servise.name }} </BTh>
                      <BTd> {{ servise.price }} so'm</BTd>
                    </BTr>
                  </BTbody>
                </BTableSimple>
                <h5 v-else class="text-center">Xizmatlar mavjud emas</h5>
              </div>
            </BCardBody>
          </BCard>
        </BTab>
        <BTab>
          <template v-slot:title>
            <i class="bx bx-history d-block check-nav-icon mt-4 mb-2"></i>
            <p class="fw-bold mb-4">Buyurtma tarixi</p>
          </template>

          <BCard no-body>
            <BCardBody>
              <h5 class="fw-semibold"> Buyurtma tarixi</h5>

              <div class="table-responsive">
                <BTableSimple>
                  <BTbody>
                    <BTr>
                      <BTh scope="row">Haydovchi</BTh>
                      <BTd>{{ order.driver.fullname }}</BTd>
                    </BTr>
                    <BTr>
                      <BTh scope="col">Ta'rifi</BTh>
                      <BTd scope="col">{{ order.tarif.name }}</BTd>
                    </BTr>
                    <BTr>
                      <BTh scope="col">Qabul qilingan vaqti</BTh>
                      <BTd scope="col">{{ order.accepted_date }}</BTd>
                    </BTr>
                    <BTr>
                      <BTh scope="col">Yo'lovchi oldiga kelgan vaqti</BTh>
                      <BTd scope="col">{{ order.come_in_date }}</BTd>
                    </BTr>
                    <BTr>
                      <BTh scope="col">Yo'lovchini olgan vaqti</BTh>
                      <BTd scope="col">{{ order.started_date }}</BTd>
                    </BTr>
                    <BTr>
                      <BTh scope="col">Yakunlangan vaqti</BTh>
                      <BTd scope="col">{{ order.ended_date }}</BTd>
                    </BTr>
                    <BTr>
                      <BTh scope="col">Kutish vaqti</BTh>
                      <BTd scope="col">{{ order.waiting_time }}</BTd>
                    </BTr>
                    <BTr>
                      <BTh scope="col">Jami yo'lga ketgan vaqti</BTh>
                      <BTd scope="col">{{ order.in_way_time }}</BTd>
                    </BTr>
                    <BTr>
                      <BTh scope="col">Kutish summasi</BTh>
                      <BTd scope="col">{{ order.waiting_price }} so'm</BTd>
                    </BTr>
                    <BTr>
                      <BTh scope="col">Narxi</BTh>
                      <BTd scope="col">{{ order.total_price }} so'm</BTd>
                    </BTr>
                    <BTr>
                      <BTh scope="col">Masofasi</BTh>
                      <BTd scope="col">{{ order.distance }} metr</BTd>
                    </BTr>
                    <BTr>
                      <BTh scope="col">Statusi</BTh>
                      <BTd scope="col">{{ order.status }}</BTd>
                    </BTr>
                  </BTbody>
                </BTableSimple>
              </div>
            </BCardBody>
          </BCard>
        </BTab>
      </BTabs>
    </div>
  </Layout>
</template>

<script>
import Layout from "@/layouts/main";
import PageHeader from "@/components/page-header";

export default {
  components: {
    Layout,
    PageHeader,
  },
  data() {
    return {
      order: {
        id: 1,
        client: {
          fullname: "Zafarbek Ergashev",
          phone: "+998 97 188 41 72",
        },
        tarif: {
          id: 1,
          name: "Standart",
        },
        address: {
          id: 1,
          name: "Buloqboshi",
          lat_lng: "40.63134600 72.50294740",
        },
        comment: "",
        start_summ: "4 000,00",
        status: "Yakunlangan",
        order_type: "Mobil dastur",
        created_date: "mar 31, 2024y 03:43:05",
        updated_date: "mar 31, 2024y 04:37:50",
        driver: {
          id: 12,
          fullname: "XASANBOY Xayitov",
        },
        accepted_date: "mar 31, 2024y 03:43:18",
        come_in_date: "mar 31, 2024y 04:37:44",
        started_date: "mar 31, 2024y 04:37:45",
        ended_date: "mar 31, 2024y 04:37:50",
        waiting_time: 0,
        in_way_time: "27 minutes, 1 second",
        waiting_price: "0,00",
        total_price: "41 600,00",
        distance: "18 222",
        servises: [
          {
            id: 1,
            name: "Konditsioner",
            price: 2000
          },
          {
            id: 2,
            name: "Musiqa",
            price: 2000
          },
        ],
      },
      payments: [
        {
          id: 1,
          type: "Kirim",
          price: "50 000,00",
          status: "Admin tomonidan to'ldirildi",
          date: "mar 16, 2024y 14:03:56",
        },
        {
          id: 2,
          type: "Chiqim",
          price: "560,00",
          status: "Buyurtma uchun to'lov",
          date: "mar 18, 2024y 12:56:20",
        },
      ],
    };
  },
};
</script>
