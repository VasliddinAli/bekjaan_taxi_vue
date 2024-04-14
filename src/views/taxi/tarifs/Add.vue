<template>
    <Layout>
        <PageHeader title="Tarif qo'shish" pageTitle="Tariflar" />

        <BRow>
            <BCol cols="12">
                <BCard>
                    <BCard no-body>
                        <BForm @submit.prevent="tarifAdd">
                            <BRow>
                                <BCol sm="4">
                                    <div class="mb-3">
                                        <label for="name">Nomi</label>
                                        <input id="name" v-model="tarif.name" type="text" class="form-control" :class="{
                                            'is-invalid': submitted && v$.form.name.$error,
                                            'is-valid': submitted && !v$.form.name.$error,
                                        }" />
                                        <div v-if="submitted && v$.form.name.$error" class="invalid-feedback">
                                            <span v-if="v$.form.name.required.$message">
                                                {{ v$.form.name.required.$message }}
                                            </span>
                                        </div>
                                    </div>
                                </BCol>
                                <BCol sm="4">
                                    <div class="mb-3">
                                        <label for="free_wait_time">Bepul kutish vaqti</label>
                                        <input id="free_wait_time" v-model="tarif.free_wait_time" type="text"
                                            class="form-control" />
                                    </div>
                                </BCol>
                                <BCol sm="4">
                                    <div class="mb-3">
                                        <label for="icon">Ikon</label>
                                        <input id="icon" v-model="tarif.icon" type="text" class="form-control" />
                                    </div>
                                </BCol>
                                <BCol sm="4">
                                    <div class="mb-3">
                                        <label for="in_city_summa">Shaxar ichida narxi</label>
                                        <input id="in_city_summa" v-model="tarif.in_city_summa" type="text"
                                            class="form-control" />
                                    </div>
                                </BCol>
                                <BCol sm="4">
                                    <div class="mb-3">
                                        <label for="min_km">Minimal km</label>
                                        <input id="min_km" v-model="tarif.min_km" type="text" class="form-control" />
                                    </div>
                                </BCol>
                                <BCol sm="4">
                                    <div class="mb-3">
                                        <label for="min_summa_1">Minimal narxi(06:00 - 18:00)</label>
                                        <input id="min_summa_1" v-model="tarif.min_summa_1" type="text"
                                            class="form-control" />
                                    </div>
                                </BCol>
                                <BCol sm="4">
                                    <div class="mb-3">
                                        <label for="min_summa_2">Minimal narxi(18:00 - 06:00)</label>
                                        <input id="min_summa_2" v-model="tarif.min_summa_2" type="text"
                                            class="form-control" />
                                    </div>
                                </BCol>
                                <BCol sm="4">
                                    <div class="mb-3">
                                        <label for="out_city_summa">Shaxar tashqarisida narxi</label>
                                        <input id="out_city_summa" v-model="tarif.out_city_summa" type="text"
                                            class="form-control" />
                                    </div>
                                </BCol>
                                <BCol sm="4">
                                    <div class="mb-3">
                                        <label for="wait_time_summa">Kutish vaqti narxi</label>
                                        <input id="wait_time_summa" v-model="tarif.wait_time_summa" type="text"
                                            class="form-control" />
                                    </div>
                                </BCol>
                                <BCol sm="4">
                                    <div class="mb-3">
                                        <label for="driver_percent">Xizmat foizi</label>
                                        <input id="driver_percent" v-model="tarif.driver_percent" type="text"
                                            class="form-control" />
                                    </div>
                                </BCol>
                                <BCol sm="4">
                                    <div class="mb-3">
                                        <label for="ball_summa">Ball summa</label>
                                        <input id="ball_summa" v-model="tarif.ball_summa" type="text"
                                            class="form-control" />
                                    </div>
                                </BCol>
                            </BRow>
                            <div class="mt-2">
                                <BButton variant="primary" class="me-1">
                                    Qo'shish
                                </BButton>
                            </div>
                        </BForm>
                    </BCard>
                </BCard>
            </BCol>
        </BRow>
    </Layout>
</template>


<script>
// import axios from "axios";
import { required, helpers } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";


import Layout from '@/layouts/main'
import PageHeader from "@/components/page-header";

export default {
    setup() {
        return { v$: useVuelidate() };
    },
    components: {
        Layout,
        PageHeader,
    },
    data() {
        return {
            tarif: {
                id: null,
                name: null,
                free_wait_time: null,
                icon: null,
                in_city_summa: null,
                min_km: null,
                min_summa_1: null,
                min_summa_2: null,
                out_city_summa: null,
                wait_time_summa: null,
                driver_percent: null,
                ball_summa: null,
            },
            submitted: false,
        };
    },
    validations: {
        tarif: {
            name: {
                required: helpers.withMessage("Name is required", required),
            },
        },
    },
    methods: {
        tarifAdd() {
            this.submitted = true;
            this.v$.$touch();

            if (this.v$.$invalid) {
                return;
            } else {
                console.log(1234);
            }
        },
    },
};
</script>