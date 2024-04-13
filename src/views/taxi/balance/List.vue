<template>
    <Layout>
        <PageHeader title="Balans" pageTitle="Dashboard" />


        <BModal v-model="deleteModal" title-class="text-black font-18" body-class="px-4 py-5 text-center" hide-header
            hide-footer class="v-modal-custom" size="sm" centered>

            <BButton type="button" class="btn-close position-absolute end-0 top-0 m-3"
                @click="deleteModal = !deleteModal">
            </BButton>

            <div class="avatar-sm mb-4 mx-auto">
                <div class="avatar-title bg-primary text-primary bg-opacity-10 font-size-20 rounded-3">
                    <i class="mdi mdi-trash-can-outline"></i>
                </div>
            </div>
            <p class="text-muted font-size-16 mb-4">O'chirilgan malumotlar qaytarilmaydi!</p>

            <div class="hstack gap-2 justify-content-center mb-0">
                <BButton variant="danger" @click="deleteModal = !deleteModal">O'chirish</BButton>
                <BButton variant="secondary" type="button" class="btn btn-secondary"
                    @click="deleteModal = !deleteModal">
                    Bekor qilish</BButton>
            </div>
        </BModal>

        <BRow>
            <BCol lg="12">
                <BCard no-body>
                    <BCardBody class="border-bottom">
                        <BRow class="g-3">
                            <BCol xxl="8" lg="6">
                                <BButton variant="primary" :to="{ name: 'balance_create' }">
                                    Hisobni to'ldirish
                                </BButton>
                            </BCol>
                            <BCol xxl="4" lg="6">
                                <BFormInput type="text" class="form-control search me-1" placeholder="Qidirish ..."
                                    v-model="searchQuery" />
                            </BCol>
                        </BRow>
                    </BCardBody>


                    <BCardBody>
                        <div class="table-responsive">
                            <BTableSimple class="align-middle dt-responsive nowrap w-100 table-check table-bordered"
                                id="job-list">
                                <BThead>
                                    <BTr>
                                        <BTh scope="col">ID</BTh>
                                        <BTh scope="col">Haydovchi</BTh>
                                        <BTh scope="col">Turi</BTh>
                                        <BTh scope="col">Qiymati</BTh>
                                        <BTh scope="col">Sababi</BTh>
                                        <BTh scope="col">To'langan vaqti</BTh>
                                        <BTh scope="col"></BTh>
                                    </BTr>
                                </BThead>

                                <BTbody>
                                    <BTr v-for="payment in payments" :key="payment.id">
                                        <BTh scope="row"> {{ payment.id }} </BTh>
                                        <BTd> ({{ payment.driver.id }}) {{ payment.driver.fullname }} </BTd>
                                        <BTd>{{ payment.type }}</BTd>
                                        <BTd> {{ payment.summa }} so'm</BTd>
                                        <BTd> {{ payment.status }} </BTd>
                                        <BTd> {{ payment.added_date }} </BTd>
                                        <BTd>
                                            <ul class="list-unstyled hstack gap-1 mb-0">
                                                <li data-bs-toggle="tooltip" data-bs-placement="top" aria-label="View">
                                                    <router-link :to="{ name: 'balance_detail', params: { id: 1 } }"
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
            payments: [
                {
                    id: 1,
                    driver: {
                        id: 23,
                        fullname: "Maxammadaziz Davranov"
                    },
                    type: "Chiqim",
                    summa: "860,00",
                    status: "Buyurtma uchun to'lov",
                    added_date: "apr 08, 2024y 21:12:27",
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
