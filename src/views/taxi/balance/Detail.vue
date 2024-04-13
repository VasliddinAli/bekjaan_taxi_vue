<template>
    <Layout>
        <PageHeader :title="'Balans ID: ' + balance.id" pageTitle="Balans" />

        <div class="checkout-tabs">
            <BRow>
                <BCol xl-6 style="min-height: 30vh; display: flex; align-items: center; justify-content: center">
                    <div>
                        <h3 class="text-center">Hozirgi balansi</h3>
                        <h1 class="text-center">{{ balance.driver.balance }} so'm</h1>
                    </div>
                </BCol>
                <BCol xl-6>
                    <BCard no-body>
                        <BCardBody>
                            <h5 class="fw-semibold">Batafsil ma'lumot</h5>

                            <div class="table-responsive">
                                <BTableSimple class="table-bordered">
                                    <BTbody>
                                        <BTr>
                                            <BTh scope="row">ID</BTh>
                                            <BTd><span class="badge badge-soft-info">#{{ balance.id }}</span></BTd>
                                        </BTr>
                                        <BTr>
                                            <BTh scope="col">Haydovchi</BTh>
                                            <BTd scope="col">{{ balance.driver.fullname }}</BTd>
                                        </BTr>
                                        <BTr>
                                            <BTh scope="col">Turi</BTh>
                                            <BTd scope="col">{{ balance.type }}</BTd>
                                        </BTr>
                                        <BTr>
                                            <BTh scope="col">Qiymati</BTh>
                                            <BTd scope="col">{{ balance.summa }}</BTd>
                                        </BTr>
                                        <BTr>
                                            <BTh scope="col">Umumiy</BTh>
                                            <BTd scope="col">{{ balance.driver.balance }}</BTd>
                                        </BTr>
                                        <BTr>
                                            <BTh scope="col">Sababi</BTh>
                                            <BTd scope="col">{{ balance.status }}</BTd>
                                        </BTr>
                                        <BTr>
                                            <BTh scope="col">Buyurtma uchun</BTh>
                                            <BTd scope="col">-</BTd>
                                        </BTr>
                                        <BTr>
                                            <BTh scope="col">Yaratilgan vaqti</BTh>
                                            <BTd scope="col">{{ balance.added_date }}</BTd>
                                        </BTr>
                                        <BTr>
                                            <BTh scope="col">Tahrirlangan vaqti</BTh>
                                            <BTd scope="col">{{ balance.updated_date }}</BTd>
                                        </BTr>
                                    </BTbody>
                                </BTableSimple>
                            </div>
                        </BCardBody>
                    </BCard>
                </BCol>
            </BRow>
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
