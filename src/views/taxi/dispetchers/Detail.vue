<template>
    <Layout>
        <PageHeader title="Dispetcher haqida" pageTitle="Dispetcherlar" />

        <div class="checkout-tabs">
            <BTabs pills vertical nav-class="p-0" nav-wrapper-class="col-xl-2 col-md-3 col-sm-12 col-12"
                content-class="w-100" class="ecommerce-checkout-tabs">
                <BTab active>
                    <template v-slot:title>
                        <i class="bx bxs-user-detail d-block check-nav-icon mt-4 mb-2"></i>
                        <p class="fw-bold mb-4">Batafsil ma'lumot</p>
                    </template>
                    <BCard no-body>
                        <BCardBody>
                            <h5 class="fw-semibold">Batafsil ma'lumot</h5>

                            <div class="table-responsive">
                                <BTableSimple>
                                    <BTbody>
                                        <BTr>
                                            <BTh scope="row">ID</BTh>
                                            <BTd><span class="badge badge-soft-info">#7</span></BTd>
                                        </BTr>
                                        <BTr>
                                            <BTh scope="col">Ism</BTh>
                                            <BTd scope="col">Magento</BTd>
                                        </BTr>
                                        <BTr>
                                            <BTh scope="col">Familya</BTh>
                                            <BTd scope="col">Developer</BTd>
                                        </BTr>
                                        <BTr>
                                            <BTh scope="col">Telefon raqam</BTh>
                                            <BTd scope="col">+998 94 444 60 50</BTd>
                                        </BTr>
                                        <BTr>
                                            <BTh scope="col">Turi</BTh>
                                            <BTd scope="col">Dispetcher</BTd>
                                        </BTr>
                                        <BTr>
                                            <BTh scope="col">Statusi</BTh>
                                            <BTd scope="col">Tasdiqlangan</BTd>
                                        </BTr>
                                        <BTr>
                                            <BTh scope="col">Yaratilgan vaqti</BTh>
                                            <BTd scope="col">mar 16, 2024y 14:13:23</BTd>
                                        </BTr>
                                        <BTr>
                                            <BTh scope="col">Tahrirlangan vaqti</BTh>
                                            <BTd scope="col">mar 28, 2024y 23:34:17</BTd>
                                        </BTr>
                                    </BTbody>
                                </BTableSimple>
                            </div>
                            <!-- <div class="hstack gap-2">
                                <BButton variant="soft-primary" class="w-100">Apply Now</BButton>
                                <BButton variant="soft-danger" class="w-100">Contact Us</BButton>
                            </div> -->
                        </BCardBody>
                    </BCard>
                </BTab>
                <BTab>
                    <template v-slot:title>
                        <i class="bx bx-key d-block check-nav-icon mt-4 mb-2"></i>
                        <p class="fw-bold mb-4">Parolni almashtirish</p>
                    </template>
                    <BCard no-body>
                        <BCardBody>
                            <div>
                                <BCardTitle>Parolni almashtirish</BCardTitle>
                                <p class="card-title-desc">Maydonni to'ldiring</p>

                                <BForm>
                                    <BFormGroup id="input-group-2" label="Parol kiriting" label-for="input-card"
                                        class="mb-0">
                                        <BFormInput id="input-card" placeholder="••••••••" type="text"></BFormInput>
                                    </BFormGroup>

                                    <BButton class="mt-2" variant="primary">O'zgartirish</BButton>
                                </BForm>
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
        };
    },
};
</script>
