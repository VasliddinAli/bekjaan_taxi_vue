<template>
    <Layout>
        <PageHeader :title="service.name" pageTitle="Xizmatlar" />

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
                                        <BBadge variant="primary">#{{ service.id }}</BBadge>
                                    </BTd>
                                </BTr>
                                <BTr>
                                    <BTh scope="col">Nomi</BTh>
                                    <BTd>{{ service.name }}</BTd>
                                </BTr>
                                <BTr>
                                    <BTh scope="col">Narxi</BTh>
                                    <BTd>{{ service.cost }} UZS</BTd>
                                </BTr>
                                <BTr>
                                    <BTh scope="col">Status</BTh>
                                    <BTd>{{ service.status }}</BTd>
                                </BTr>
                                <BTr>
                                    <BTh scope="col">Yaratilgan vaqti</BTh>
                                    <BTd>{{ service.created_date }}</BTd>
                                </BTr>
                                <BTr>
                                    <BTh scope="col">Tahrirlangan vaqti</BTh>
                                    <BTd>{{ service.updated_date }}</BTd>
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
            service: {
                id: 1,
                name: "Konditsioner",
                cost: "2000",
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
