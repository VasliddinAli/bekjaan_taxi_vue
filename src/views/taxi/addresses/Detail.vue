<template>
    <Layout>
        <PageHeader :title="group.name" pageTitle="Manzil guruhlari" />

        <div class="checkout-tabs">
            <BCard no-body>
                <BCardBody>
                    <h5 class="fw-semibold">Batafsil ma'lumot</h5>

                    <div class="table-responsive">
                        <BTableSimple class="table-bordered">
                            <BTbody>
                                <BTr>
                                    <BTh scope="row">ID</BTh>
                                    <BTd><span class="badge badge-soft-info">#{{ group.id }}</span></BTd>
                                </BTr>
                                <BTr>
                                    <BTh scope="col">Nomi</BTh>
                                    <BTd scope="col">{{ group.name }}</BTd>
                                </BTr>
                                <BTr>
                                    <BTh scope="col">Statusi</BTh>
                                    <BTd scope="col">{{ group.status }}</BTd>
                                </BTr>
                                <BTr>
                                    <BTh scope="col">Yaratilgan vaqti</BTh>
                                    <BTd scope="col">{{ group.created_date }}</BTd>
                                </BTr>
                                <BTr>
                                    <BTh scope="col">Tahrirlangan vaqti</BTh>
                                    <BTd scope="col">{{ group.updated_date }}</BTd>
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
    components: {
        Layout,
        PageHeader
    },
    data() {
        return {
            group: {
                id: 1,
                name: "Buloqboshi",
                status: "Faol",
                created_date: "mar 15, 2024y 14:35:57",
                updated_date: "apr 09, 2024y 00:50:16",
            },
            balance: {
                id: 1,
                driver: {
                    fullname: "Sanjarbek Sharipov",
                    balance: "23 660,00"
                },
                type: "Kirim",
                summa: "3 000,00",
                status: "Admin tomonidan to'ldirildi",
                added_date: "apr 09, 2024y 00:50:16",
                updated_date: "apr 09, 2024y 00:50:16",
            }
        };
    },
};
</script>
