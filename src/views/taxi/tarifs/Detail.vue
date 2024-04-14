<template>
    <Layout>
        <PageHeader :title="tarif.name" pageTitle="Ta'riflar" />

        <div class="checkout-tabs">
            <BCard no-body>
                <BCardBody>
                    <h5 class="fw-semibold">Batafsil ma'lumot</h5>

                    <div class="table-responsive">
                        <BTableSimple class="table-bordered">
                            <BTbody>
                                <BTr>
                                    <BTh scope="row">ID</BTh>
                                    <BTd>
                                        <BBadge variant="primary">#{{ tarif.id }}</BBadge>
                                    </BTd>
                                </BTr>
                                <BTr>
                                    <BTh scope="col">Nomi</BTh>
                                    <BTd>{{ tarif.name }}</BTd>
                                </BTr>
                                <BTr>
                                    <BTh scope="col">Bepul kutish vaqti</BTh>
                                    <BTd>{{ tarif.free_wait_time }} DAQ </BTd>
                                </BTr>
                                <BTr>
                                    <BTh scope="col">Ikon</BTh>
                                    <BTd>{{ tarif.icon }}</BTd>
                                </BTr>
                                <BTr>
                                    <BTh scope="col">Shaxar ichida narxi</BTh>
                                    <BTd>{{ tarif.in_city_summa }} UZS </BTd>
                                </BTr>
                                <BTr>
                                    <BTh scope="col">Minimal km</BTh>
                                    <BTd>{{ tarif.min_km }} KM </BTd>
                                </BTr>
                                <BTr>
                                    <BTh scope="col">Minimal narxi(06:00 - 18:00)</BTh>
                                    <BTd>{{ tarif.min_summa_1 }} UZS </BTd>
                                </BTr>
                                <BTr>
                                    <BTh scope="col">Minimal narxi(18:00 - 06:00)</BTh>
                                    <BTd>{{ tarif.min_summa_2 }} UZS </BTd>
                                </BTr>
                                <BTr>
                                    <BTh scope="col">Shaxar tashqarisida narxi</BTh>
                                    <BTd>{{ tarif.out_city_summa }} UZS </BTd>
                                </BTr>
                                <BTr>
                                    <BTh scope="col">Kutish vaqti narxi</BTh>
                                    <BTd>{{ tarif.wait_time_summa }} UZS </BTd>
                                </BTr>
                                <BTr>
                                    <BTh scope="col">Xizmat foizi</BTh>
                                    <BTd>{{ tarif.driver_percent }} % </BTd>
                                </BTr>
                                <BTr>
                                    <BTh scope="col">Ball summa</BTh>
                                    <BTd>{{ tarif.ball_summa }} UZS </BTd>
                                </BTr>
                            </BTbody>
                        </BTableSimple>
                    </div>
                </BCardBody>
            </BCard>
        </div>
    </Layout>
</template>

<script>
import Layout from "@/layouts/main";
import PageHeader from "@/components/page-header";

export default {
    data() {
        return {
            tarif: {
                id: 1,
                name: "Standart",
                free_wait_time: 2,
                icon: null,
                in_city_summa: 2000,
                min_km: 2,
                min_summa_1: 1000,
                min_summa_2: 1500,
                out_city_summa: 3000,
                wait_time_summa: 1000,
                driver_percent: 3,
                ball_summa: 100,
            },
        };
    },
    components: {
        Layout,
        PageHeader,
    },
};
</script>
