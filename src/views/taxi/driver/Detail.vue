<template>
    <Layout>
        <PageHeader title="Haydovchi haqida" pageTitle="Haydovchilar" />

        <div class="checkout-tabs">
            <BTabs pills vertical nav-class="p-0" nav-wrapper-class="col-xl-2 col-md-3 col-sm-12 col-12"
                content-class="w-100" class="ecommerce-checkout-tabs">
                <BTab active>
                    <template v-slot:title>
                        <i class="bx bx-money d-block check-nav-icon mt-4 mb-2"></i>
                        <p class="fw-bold mb-4">Balansi</p>
                    </template>
                    <BCard no-body>
                        <BCardBody>
                            <h3 class="text-center">«BEHZODBEK ODILOV » ning hozirgi balansi</h3>
                            <h1 class="text-center text-dark">27 470,00 soʻm</h1>

                        </BCardBody>
                    </BCard>
                </BTab>
                <BTab>
                    <template v-slot:title>
                        <i class="bx bxs-user-detail d-block check-nav-icon mt-4 mb-2"></i>
                        <p class="fw-bold mb-4">Asosiy ma'lumotlar</p>
                    </template>
                    <BRow>
                        <BCol xxl="6" lg="6">
                            <BCard no-body>
                                <BCardBody>
                                    <h5 class="fw-semibold">Asosiy ma'lumotlar</h5>

                                    <div class="table-responsive">
                                        <BTableSimple>
                                            <BTbody>
                                                <BTr>
                                                    <BTh scope="row">ID</BTh>
                                                    <BTd><span class="badge badge-soft-info">#7</span></BTd>
                                                </BTr>
                                                <BTr>
                                                    <BTh scope="col">Telefon raqam</BTh>
                                                    <BTd scope="col">+998 94 444 60 50</BTd>
                                                </BTr>
                                                <BTr>
                                                    <BTh scope="col">Ism</BTh>
                                                    <BTd scope="col">BEHZODBEK</BTd>
                                                </BTr>
                                                <BTr>
                                                    <BTh scope="col">Familya</BTh>
                                                    <BTd scope="col">ODILOV</BTd>
                                                </BTr>
                                                <BTr>
                                                    <BTh scope="col">Tug'ilgan sanasi</BTh>
                                                    <BTd scope="col">8-fev, 1998</BTd>
                                                </BTr>
                                                <BTr>
                                                    <BTh scope="col">Jinsi</BTh>
                                                    <BTd scope="col">Erkak</BTd>
                                                </BTr>
                                                <BTr>
                                                    <BTh scope="col">Turi</BTh>
                                                    <BTd scope="col">Haydovchi</BTd>
                                                </BTr>
                                                <BTr>
                                                    <BTh scope="col">Statusi</BTh>
                                                    <BTd scope="col">Tasdiqlangan</BTd>
                                                </BTr>
                                                <BTr>
                                                    <BTh scope="col">Har bir zakazdan foiz</BTh>
                                                    <BTd scope="col">0 %</BTd>
                                                </BTr>
                                                <BTr>
                                                    <BTh scope="col">Step</BTh>
                                                    <BTd scope="col">COMPLETED</BTd>
                                                </BTr>
                                                <BTr>
                                                    <BTh scope="col">Is Completed</BTh>
                                                    <BTd scope="col">Ha</BTd>
                                                </BTr>
                                                <BTr>
                                                    <BTh scope="col">Yaratilgan vaqti</BTh>
                                                    <BTd scope="col">mar 15, 2024y 17:07:31</BTd>
                                                </BTr>
                                                <BTr>
                                                    <BTh scope="col">Tahrirlangan vaqti</BTh>
                                                    <BTd scope="col">mar 16, 2024y 14:41:24</BTd>
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
                        <BCol xxl="6" lg="6">
                            <BCard no-body>
                                <BCardBody>
                                    <h5 class="fw-semibold">Qo'shimcha ma'lumotlar</h5>

                                    <div class="table-responsive">
                                        <BTableSimple>
                                            <BTbody>
                                                <BTr>
                                                    <BTh scope="row">ID</BTh>
                                                    <BTd><span class="badge badge-soft-info">#7</span></BTd>
                                                </BTr>
                                                <BTr>
                                                    <BTh scope="col">Avtomobil identifikatori</BTh>
                                                    <BTd scope="col">Cobalt</BTd>
                                                </BTr>
                                                <BTr>
                                                    <BTh scope="col">Avtomobil raqami</BTh>
                                                    <BTd scope="col">60S062BB</BTd>
                                                </BTr>
                                                <BTr>
                                                    <BTh scope="col">Rangi</BTh>
                                                    <BTd scope="col">Oq</BTd>
                                                </BTr>
                                                <BTr>
                                                    <BTh scope="col">Pozitsiya</BTh>
                                                    <BTd scope="col">4</BTd>
                                                </BTr>
                                                <BTr>
                                                    <BTh scope="col">Texnik o'tish raqami</BTh>
                                                    <BTd scope="col">25881___</BTd>
                                                </BTr>
                                                <BTr>
                                                    <BTh scope="col">Yaratilgan vaqti</BTh>
                                                    <BTd scope="col">mar 15, 2024y 17:07:31</BTd>
                                                </BTr>
                                                <BTr>
                                                    <BTh scope="col">Tahrirlangan vaqti</BTh>
                                                    <BTd scope="col">mar 16, 2024y 14:41:24</BTd>
                                                </BTr>
                                            </BTbody>
                                        </BTableSimple>
                                    </div>
                                </BCardBody>
                            </BCard>
                        </BCol>
                    </BRow>
                </BTab>
                <BTab>
                    <template v-slot:title>
                        <i class="bx bxs-credit-card d-block check-nav-icon mt-4 mb-2"></i>
                        <p class="fw-bold mb-4">Pul oldi-berdi</p>
                    </template>
                    <BCard no-body>
                        <BCardBody>
                            <div>
                                <BCardTitle>Pul oldi-berdi</BCardTitle>
                                <p class="card-title-desc">Maydonni to'ldiring</p>

                                <BTableSimple class="align-middle dt-responsive nowrap w-100 table-check" id="job-list">
                                    <BThead>
                                        <BTr>
                                            <BTh scope="col">ID</BTh>
                                            <BTh scope="col">Turi</BTh>
                                            <BTh scope="col">Qiymati</BTh>
                                            <BTh scope="col">Sababi</BTh>
                                            <BTh scope="col">Yaratilgan vaqti</BTh>
                                        </BTr>
                                    </BThead>

                                    <BTbody>
                                        <BTr v-for="pay in payments" :key="pay.id">
                                            <BTh scope="row"> {{ pay.id }} </BTh>
                                            <BTd> {{ pay.type }} </BTd>
                                            <BTd> {{ pay.price }} so'm</BTd>
                                            <BTd> {{ pay.status }} </BTd>
                                            <BTd> {{ pay.date }} </BTd>
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
import { Img1, Img7 } from "@/assets/images/product/data"
import { formFields, paymentOptions } from "./data"

export default {
    components: {
        Layout,
        PageHeader
    },
    data() {
        return {
            formFields, paymentOptions,
            stateValue: null,
            countryValue: null,
            Img1, Img7,
            stateOptions: [
                "Alaska",
                "Hawaii",
                "California",
                "Nevada",
                "Oregon",
                "Washington",
                "Arizona",
                "Colorado",
                "Idaho",
                "Montana",
                "Nebraska",
                "New Mexico",
                "North Dakota",
                "Utah",
                "Wyoming",
                "Alabama",
                "Arkansas",
                "Illinois",
                "Iowa",
            ],
            countryOptions: [
                "Afghanistan",
                "Albania",
                "Algeria",
                "American Samoa",
                "Andorra",
                "Angola",
                "Anguilla",
                "Antarctica",
                "Argentina",
                "Hawaii",
                "California",
                "Colombia",
                "Congo",
                "Dominica",
                "Denmark",
                "Nevada",
                "Oregon",
                "Washington",
                "Ecuador",
                "Idaho",
                "Montana",
                "Namibia",
                "Nauru",
                "Nepal",
                "Netherlands",
                "Nicaragua",
                "New Caledonia",
                "North Dakota",
                "Tonga",
                "Tunisia",
                "Thailand",
                "Turkey",
                "Illinois",
                "Tuvalu",
                "Uganda",
                "Uruguay",
                "United Arab Emirates",
                "United Kingdom",
                "Venezuela",
                "Zimbabwe",
                "Uruguay",
            ],
            payments: [
                {id: 1, type: "Kirim", price: "50 000,00", status: "Admin tomonidan to'ldirildi", date: "mar 16, 2024y 14:03:56"},
                {id: 2, type: "Chiqim", price: "560,00", status: "Buyurtma uchun to'lov", date: "mar 18, 2024y 12:56:20"},
            ],
        };
    },
};
</script>
