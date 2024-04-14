<template>
    <Layout>
        <PageHeader title="Moshina qo'shish" pageTitle="Moshinalar" />

        <BRow>
            <BCol cols="12">
                <BForm @submit.prevent="carAdd">
                    <BRow>
                        <BCol sm="6">
                            <BCard>
                                <BCard no-body>
                                    <div class="mb-3">
                                        <label for="car">Tarif</label>
                                        <BFormSelect id="car" v-model="car.tarif_id" class="form-select">
                                            <BFormSelectOption :value="null" disabled>Tanlanmagan</BFormSelectOption>
                                            <BFormSelectOption :value="tarif.id" v-for="tarif in tarifs"
                                                :key="tarif.id">{{
                                                    tarif.name }}</BFormSelectOption>
                                        </BFormSelect>
                                    </div>
                                    <div class="mb-3">
                                        <label for="name">Nomi</label>
                                        <input id="name" v-model="car.name" type="text" class="form-control" :class="{
                                            'is-invalid': submitted && v$.form.name.$error,
                                            'is-valid': submitted && !v$.form.name.$error,
                                        }" />
                                        <div v-if="submitted && v$.form.name.$error" class="invalid-feedback">
                                            <span v-if="v$.form.name.required.$message">
                                                {{ v$.form.name.required.$message }}
                                            </span>
                                        </div>
                                    </div>
                                </BCard>
                                <div class="mt-2">
                                    <BButton variant="primary" class="me-1">
                                        Qo'shish
                                    </BButton>
                                </div>
                            </BCard>
                        </BCol>
                        <BCol sm="6">
                        </BCol>
                    </BRow>
                </BForm>
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
            car: {
                name: null,
                tarif_id: null,
            },
            tarifs: [
                {
                    id: 1,
                    name: "Standart"
                }
            ],
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
        carAdd() {
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