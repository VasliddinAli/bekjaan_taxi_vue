<template>
    <Layout>
        <PageHeader title="Buyurtmalar" pageTitle="Bosh sahifa" />

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <BCardBody>
                        <div class="table-responsive">
                            <BTableSimple class="align-middle dt-responsive nowrap w-100 table-check table-bordered"
                                id="job-list">
                                <BThead>
                                    <BTr>
                                        <BTh scope="col">ID</BTh>
                                        <BTh scope="col">Telefon raqami </BTh>
                                        <BTh scope="col">Ta'rifi</BTh>
                                        <BTh scope="col">Manzil</BTh>
                                        <BTh scope="col">Haydovchi</BTh>
                                        <BTh scope="col">Status</BTh>
                                        <BTh scope="col">Yaratilgan vaqti</BTh>
                                        <BTh scope="col"></BTh>
                                    </BTr>
                                </BThead>

                                <BTbody>
                                    <BTr>
                                        <BTh><input v-model="filter.id" type="text" style="max-width: 50px;"
                                                class="form-control"></BTh>
                                        <BTd><input v-model="filter.phone" type="text" style="max-width: 150px;"
                                                class="form-control"></BTd>
                                        <BTd>
                                            <BFormSelect v-model="filter.tarif" style="max-width: 170px;"
                                                class="form-select">
                                                <BFormSelectOption :value="null"></BFormSelectOption>
                                                <BFormSelectOption v-for="tarif in tarifs" :value="tarif.id"
                                                    :key="tarif.id">{{ tarif.name }}</BFormSelectOption>
                                            </BFormSelect>
                                        </BTd>
                                        <BTd>
                                            <BFormSelect v-model="filter.address" style="max-width: 170px;"
                                                class="form-select">
                                                <BFormSelectOption :value="null">Manzillar</BFormSelectOption>
                                                <BFormSelectOption v-for="address in addresses" :value="address.id"
                                                    :key="address.id">{{ address.name }}</BFormSelectOption>
                                            </BFormSelect>
                                        </BTd>
                                        <BTd>
                                            <BFormSelect v-model="filter.driver"
                                                class="form-select">
                                                <BFormSelectOption :value="null">Haydovchilar</BFormSelectOption>
                                                <BFormSelectOption v-for="driver in drivers" :value="driver.id"
                                                    :key="driver.id">{{ driver.fullname }}</BFormSelectOption>
                                            </BFormSelect>
                                        </BTd>
                                        <BTd>
                                            <BFormSelect v-model="filter.status" style="max-width: 200px;"
                                                class="form-select">
                                                <BFormSelectOption :value="null"></BFormSelectOption>
                                                <BFormSelectOption v-for="status in statuses" :value="status.id"
                                                    :key="status.id">{{ status.name }}</BFormSelectOption>
                                            </BFormSelect>
                                        </BTd>
                                        <BTd>
                                            <BFormSelect v-model="filter.created_date"
                                                class="form-select">
                                                <BFormSelectOption :value="null"></BFormSelectOption>
                                                <BFormSelectOption v-for="date in dates" :value="date.id"
                                                    :key="date.id">{{ date.name }}</BFormSelectOption>
                                            </BFormSelect>
                                        </BTd>
                                        <BTd></BTd>
                                    </BTr>
                                    <BTr v-for="order in orders" :key="order.id">
                                        <BTh scope="row"> {{ order.id }} </BTh>
                                        <BTd> {{ order.driver.phone }} </BTd>
                                        <BTd>{{ order.tarif.name }}</BTd>
                                        <BTd> {{ order.addess }} </BTd>
                                        <BTd> {{ order.driver.fullname }} </BTd>
                                        <BTd> {{ order.status }} </BTd>
                                        <BTd> {{ order.added_date }} </BTd>
                                        <BTd>
                                            <ul class="list-unstyled hstack gap-1 mb-0">
                                                <li data-bs-toggle="tooltip" data-bs-placement="top" aria-label="View">
                                                    <router-link
                                                        :to="{ name: 'order_detail', params: { id: order.id } }"
                                                        class="btn btn-sm btn-soft-primary"><i
                                                            class="mdi mdi-eye-outline"></i></router-link>
                                                </li>
                                            </ul>
                                        </BTd>
                                    </BTr>
                                </BTbody>
                            </BTableSimple>
                        </div>

                        <BRow class="justify-content-between align-items-center">
                            <BCol class="col-auto me-auto">
                                <p class="text-muted mb-0">Showing <b>1</b> to <b>12</b> of <b>45</b> entries</p>
                            </BCol>
                            <BCol class="col-auto">
                                <BCard no-body class="d-inline-block ms-auto mb-0">
                                    <BCardBody class="p-2">
                                        <nav aria-label="Page navigation example" class="mb-0">
                                            <pagination />
                                        </nav>
                                    </BCardBody>
                                </BCard>
                            </BCol>
                        </BRow>

                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
    </Layout>
</template>

<script>
import Layout from '@/layouts/main'
import PageHeader from "@/components/page-header";
import pagination from "@/components/common/pagination";

import { jobslist } from '@/views/jobs/joblistData';
export default {
    components: {
        Layout,
        PageHeader,
        pagination
    },
    data() {
        return {
            jobslist,
            value1: null,
            status1: null,
            searchQuery: null,
            checkboxActive: true,
            defaultDateConfig: {
                dateFormat: "d M, Y",
                defaultDate: "25 Dec, 2021",
            },
            page: 1,
            perPage: 1,
            filter: { id: null, phone: null, tarif: null, address: null, driver: null },
            tarifs: [
                { id: 1, name: "Standart" },
                { id: 2, name: "Damas" },
            ],
            addresses: [
                { id: 1, name: "Buloqboshi" },
                { id: 2, name: "Quva" },
            ],
            drivers: [
                { id: 1, fullname: "Baxromjon Mo'ydinov" },
                { id: 2, fullname: "Shoxruxbek Adixamov" },
            ],
            statuses: [
                { id: 1, name: "Boshlang'ich" },
                { id: 2, name: "Yaqin haydovchilar uchun" },
                { id: 3, name: "Reklamali haydovchilar uchun" },
                { id: 4, name: "Hamma uchun" },
                { id: 5, name: "Davom etmoqda" },
                { id: 6, name: "Yakunlangan" },
                { id: 7, name: "Bekor qilingan" },
            ],
            dates: [
                { id: 1, name: "Bugun" },
                { id: 2, name: "Kecha" },
                { id: 3, name: "Oxirgi 7 kun" },
                { id: 4, name: "Oxirgi 30 kun" },
                { id: 5, name: "Shu oy" },
                { id: 6, name: "Oxirgi oy" },
            ],
            orders: [
                {
                    id: 1,
                    driver: {
                        fullname: "Xojimurod Tirkashxojiyev",
                        phone: "+998 77 004 90 23",
                    },
                    tarif: {
                        name: "Damas",
                    },
                    addess: "Buloqboshi , Markaz",
                    status: "Yakunlangan",
                    added_date: "apr 08, 2024y 18:26:04",
                }
            ],
            deleteModal: false,
        }
    },

    watch: {
        searchQuery(newVal) {
            console.log(newVal);
        }
    },
    computed: {
        displayedPosts() {
            return this.jobslist
        },
    },
    methods: {
        paginate(jobgrid) {
            let page = this.page;
            let perPage = this.perPage;
            let from = page * perPage - perPage;
            let to = page * perPage;
            return jobgrid.slice(from, to);
        }
    }
};
</script>
