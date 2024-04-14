<template>
    <Layout>
        <PageHeader title="Xizmat qo'shish" pageTitle="Xizmatlar" />

        <BRow>
            <BCol cols="12">
                <BForm @submit.prevent="serviseAdd">
                    <BRow>
                        <BCol sm="6">
                            <BCard>
                                <BCard no-body>
                                    <div class="mb-3">
                                        <label for="name">Nomi</label>
                                        <input id="name" v-model="servise.name" type="text" class="form-control" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="name">Narxi</label>
                                        <input id="name" v-model="servise.cost" type="number" class="form-control" />
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
            servise: {
                name: null,
                cost: null,
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
        serviseAdd() {
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