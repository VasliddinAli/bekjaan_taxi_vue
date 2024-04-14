<template>
    <Layout>
        <PageHeader :title="car.name" pageTitle="Ta'riflar" />

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
                                        <BBadge variant="primary">#{{ car.id }}</BBadge>
                                    </BTd>
                                </BTr>
                                <BTr>
                                    <BTh scope="col">Ta'rifi</BTh>
                                    <BTd>{{ car.tarif.name }}</BTd>
                                </BTr>
                                <BTr>
                                    <BTh scope="col">Nomi</BTh>
                                    <BTd>{{ car.name }}</BTd>
                                </BTr>
                                <BTr>
                                    <BTh scope="col">Statusi</BTh>
                                    <BTd>{{ car.status }}</BTd>
                                </BTr>
                                <BTr>
                                    <BTh scope="col">Yaratilgan vaqti</BTh>
                                    <BTd>{{ car.created_date }}</BTd>
                                </BTr>
                                <BTr>
                                    <BTh scope="col">Tahrirlangan vaqti</BTh>
                                    <BTd>{{ car.updated_date }}</BTd>
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
            car: {
                id: 1,
                name: "Matiz",
                tarif: {
                    id: 1,
                    name: "Standart"
                },
                created_date: "15-mar, 2024",
                updated_date: "17-mar, 2024",
                status: "Faol",
                tarif_id: 1,
            },
        };
    },
    components: {
        Layout,
        PageHeader,
    },
};
</script>
