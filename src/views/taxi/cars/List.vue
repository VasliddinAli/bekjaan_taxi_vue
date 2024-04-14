<template>
    <Layout>
        <PageHeader title="Moshinalar" pageTitle="Dashboard" />


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
                                <BButton variant="primary" :to="{ name: 'car_create' }">
                                    Moshina qo'shish
                                </BButton>
                            </BCol>
                            <BCol xxl="4" lg="6">
                            </BCol>
                        </BRow>
                    </BCardBody>


                    <BCardBody>
                        <div class="table-responsive">
                            <BTableSimple class="align-middle dt-responsive nowrap w-100 table-check table-bordered"
                                id="job-list">
                                <BThead>
                                    <BTr>
                                        <BTh scope="col" style="min-width: 50px;">ID</BTh>
                                        <BTh scope="col" style="min-width: 150px;">Nomi</BTh>
                                        <BTh scope="col" style="min-width: 150px;">Ta'rifi</BTh>
                                        <BTh scope="col" style="min-width: 100px;">Yaratilgan vaqti</BTh>
                                        <BTh scope="col" style="min-width: 160px;">Status</BTh>
                                        <BTh scope="col" style="min-width: 100px;">Boshqarish</BTh>
                                    </BTr>
                                </BThead>

                                <BTbody>
                                    <BTr v-for="car in cars" :key="car.id">
                                        <BTh scope="row"> {{ car.id }} </BTh>
                                        <BTh scope="row">
                                            <router-link :to="{ name: 'car_detail', params: { id: car.id } }">
                                                {{ car.name }}
                                            </router-link>
                                        </BTh>
                                        <BTh scope="row"> {{ car.tarif.name }} </BTh>
                                        <BTh scope="row"> {{ car.created_date }} </BTh>
                                        <BTh scope="row"> {{ car.status }} </BTh>
                                        <BTd>
                                            <ul class="list-unstyled hstack gap-1 mb-0">
                                                <li data-bs-toggle="tooltip" data-bs-placement="top" aria-label="View">
                                                    <router-link :to="{ name: 'car_detail', params: { id: car.id } }"
                                                        class="btn btn-sm btn-soft-primary"><i
                                                            class="mdi mdi-eye-outline"></i></router-link>
                                                </li>
                                                <li data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Edit">
                                                    <Blink href="#" class="btn btn-sm btn-soft-info"><i
                                                            class="mdi mdi-pencil-outline"></i>
                                                    </Blink>
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

export default {
    components: {
        Layout,
        PageHeader,
        pagination
    },
    data() {
        return {
            searchQuery: null,
            checkboxActive: true,
            page: 1,
            perPage: 1,
            filter: {
                name: null,
                car_group_id: null,
            },
            car_groups: [
                {
                    id: 1,
                    name: "Buloqboshi"
                },
                {
                    id: 2,
                    name: "Andijon"
                },
            ],

            cars: [
                {
                    id: 1,
                    name: "Matiz",
                    tarif: {
                        id: 1,
                        name: "Standart"
                    },
                    created_date: "15-mar, 2024",
                    status: "Faol",
                    tarif_id: 1,
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
