<template>
    <Layout>
        <PageHeader title="Ta'riflar" pageTitle="Dashboard" />


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
                                <BButton variant="primary" :to="{ name: 'tarif_create' }">
                                    Ta'rif qo'shish
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
                                        <BTh scope="col" style="min-width: 150px;">Bepul kutish vaqti</BTh>
                                        <BTh scope="col" style="min-width: 100px;">Ikon</BTh>
                                        <BTh scope="col" style="min-width: 160px;">Shaxar ichida narxi</BTh>
                                        <BTh scope="col" style="min-width: 120px;">Minimal km</BTh>
                                        <BTh scope="col" style="min-width: 220px;">Minimal narxi(06:00 - 18:00)</BTh>
                                        <BTh scope="col" style="min-width: 220px;">Minimal narxi(18:00 - 06:00)</BTh>
                                        <BTh scope="col" style="min-width: 200px;">Shaxar tashqarisida narxi</BTh>
                                        <BTh scope="col" style="min-width: 150px;">Kutish vaqti narxi</BTh>
                                        <BTh scope="col" style="min-width: 110px;">Xizmat foizi</BTh>
                                        <BTh scope="col" style="min-width: 110px;">Ball summa</BTh>
                                        <BTh scope="col" style="min-width: 100px;">Boshqarish</BTh>
                                    </BTr>
                                </BThead>

                                <BTbody>
                                    <BTr v-for="tarif in tarifs" :key="tarif.id">
                                        <BTd scope="row"> {{ tarif.id }} </BTd>
                                        <BTd scope="row"> {{ tarif.name }} </BTd>
                                        <BTd scope="row"> {{ tarif.free_wait_time }} DAQ </BTd>
                                        <BTd scope="row"> {{ tarif.icon }} </BTd>
                                        <BTd scope="row"> {{ tarif.in_city_summa }} UZS </BTd>
                                        <BTd scope="row"> {{ tarif.min_km }} KM </BTd>
                                        <BTd scope="row"> {{ tarif.min_summa_1 }} UZS </BTd>
                                        <BTd scope="row"> {{ tarif.min_summa_2 }} UZS </BTd>
                                        <BTd scope="row"> {{ tarif.out_city_summa }} UZS </BTd>
                                        <BTd scope="row"> {{ tarif.wait_time_summa }} UZS </BTd>
                                        <BTd scope="row"> {{ tarif.driver_percent }} % </BTd>
                                        <BTd scope="row"> {{ tarif.ball_summa }} UZS </BTd>
                                        <BTd>
                                            <ul class="list-unstyled hstack gap-1 mb-0">
                                                <li data-bs-toggle="tooltip" data-bs-placement="top" aria-label="View">
                                                    <router-link
                                                        :to="{ name: 'tarif_detail', params: { id: tarif.id } }"
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
                tarif_group_id: null,
            },
            tarif_groups: [
                {
                    id: 1,
                    name: "Buloqboshi"
                },
                {
                    id: 2,
                    name: "Andijon"
                },
            ],

            tarifs: [
                {
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
