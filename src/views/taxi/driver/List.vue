<template>
    <Layout>
        <PageHeader title="Haydovchilar" pageTitle="Dashboard" />


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
                            <BCol xxl="6" lg="6">
                                <BButton variant="primary" :to="{ name: 'driver_create' }">
                                    Haydovchi qo'shish
                                </BButton>
                            </BCol>
                            <BCol xxl="3" lg="6">
                                <BFormSelect v-model="search.status" class="form-select">
                                    <BFormSelectOption :value="null">Status</BFormSelectOption>
                                    <BFormSelectOption value="1">O'chirilgan</BFormSelectOption>
                                    <BFormSelectOption value="2">Tasdiqlanmagan</BFormSelectOption>
                                    <BFormSelectOption value="3">Tasdiqlangan</BFormSelectOption>
                                </BFormSelect>
                            </BCol>
                            <BCol xxl="3" lg="6">
                                <BFormInput type="text" class="form-control search me-1" placeholder="Qidirish ..."
                                    v-model="search.query" />
                            </BCol>
                        </BRow>
                    </BCardBody>


                    <BCardBody>
                        <div class="table-responsive">
                            <BTableSimple class="align-middle dt-responsive nowrap w-100 table-check table-bordered" id="job-list">
                                <BThead>
                                    <BTr>
                                        <BTh scope="col">ID</BTh>
                                        <BTh scope="col">Ism</BTh>
                                        <BTh scope="col">Familiya</BTh>
                                        <BTh scope="col">Telefon raqam</BTh>
                                        <BTh scope="col">Balans</BTh>
                                        <BTh scope="col">Status</BTh>
                                        <BTh scope="col">Step</BTh>
                                        <BTh scope="col">Boshqaruv</BTh>
                                    </BTr>
                                </BThead>

                                <BTbody>
                                    <BTr v-for="driver in drivers" :key="driver.id">
                                        <BTh scope="row"> {{ driver.id }} </BTh>
                                        <BTd> {{ driver.firstname }} </BTd>
                                        <BTd>{{ driver.lastname }}</BTd>
                                        <BTd> {{ driver.phone }} </BTd>
                                        <BTd> {{ driver.balance }} so'm</BTd>
                                        <BTd> {{ driver.status }} </BTd>
                                        <BTd> {{ driver.step }} </BTd>
                                        <BTd>
                                            <ul class="list-unstyled hstack gap-1 mb-0">
                                                <li data-bs-toggle="tooltip" data-bs-placement="top" aria-label="View">
                                                    <router-link :to="{ name: 'driver_detail', params: { id: 1 } }"
                                                        class="btn btn-sm btn-soft-primary"><i
                                                            class="mdi mdi-eye-outline"></i></router-link>
                                                </li>
                                                <!-- <li data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Edit">
                                                    <Blink href="#" class="btn btn-sm btn-soft-info"><i
                                                            class="mdi mdi-pencil-outline"></i>
                                                    </Blink>
                                                </li> -->
                                                <li data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Delete"
                                                    class="mt-2">
                                                    <BFormCheckbox v-model="checkboxActive" class="mb-3"
                                                        id="flexSwitchCheckCheckedDisabled" switch>
                                                    </BFormCheckbox>
                                                </li>
                                                <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                    aria-label="Delete">
                                                    <Blink @click="deleteModal = true"
                                                        class="btn btn-sm btn-soft-danger"><i
                                                            class="mdi mdi-delete-outline"></i></Blink>
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
            search: { status: null, query: null },
            drivers: [
                {
                    id: 1,
                    firstname: "BEHZODBEK",
                    lastname: "ODILOV",
                    phone: "+998 90 172 10 57",
                    balance: "50 000,00",
                    status: "TASDIQLANGAN",
                    step: "COMPLETED",
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
