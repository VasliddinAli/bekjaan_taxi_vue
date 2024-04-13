<template>
    <Layout>
        <PageHeader title="Balans to'ldirish" pageTitle="Balans" />

        <BRow>
            <BCol cols="6">
                <BCard>
                    <BCard no-body>
                        <BForm @submit.prevent="productAdd">
                            <BRow>
                                <BCol sm="12">
                                    <div class="mb-3">
                                        <label for="phone">Haydovchi</label>
                                        <BFormSelect v-model="balance.driver_id" class="form-select">
                                            <BFormSelectOption disabled :value="null">Haydovchini tanlang</BFormSelectOption>
                                            <BFormSelectOption v-for="driver in drivers" :key="driver.id" :value="driver.id">
                                                ID: {{ driver.id }} | {{ driver.fullname }}
                                            </BFormSelectOption>
                                        </BFormSelect>
                                    </div>
                                </BCol>
                                <BCol sm="12">
                                    <div class="mb-3">
                                        <label for="summa">Pul miqdori</label>
                                        <input id="summa" v-model="balance.summa" name="name" type="number"
                                            class="form-control" placeholder="" />
                                    </div>
                                </BCol>
                            </BRow>
                            <div class="mt-2">
                                <BButton variant="primary" class="me-1">
                                    Hisobni to'ldirish
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
import axios from "axios";

// import { ref } from "vue";


import { required, helpers } from "@vuelidate/validators";
// import useVuelidate from "@vuelidate/core";

import Layout from '@/layouts/main'
import PageHeader from "@/components/page-header";

/**
 * Add-product component
 */
export default {
    setup() {
    },
    components: {
        Layout,
        PageHeader,
    },
    data() {
        return {
            value: null,
            value1: null,
            balance: {
                driver_id: null,
                summa: 0,
            },
            formData: new FormData(),
            submitted: false,
            drivers: [
                {id: 1, fullname: "BEHZODBEK ODILOV"},
                {id: 2, fullname: "Asadbek Turg'unboyev"},
                {id: 3, fullname: "Shaxzodbek Nematov"},
                {id: 4, fullname: "Shaxriyor Djalolov"},
            ],
            image: "",
            file: "",
        };
    },
    validations: {
        product: {
            name: {
                required: helpers.withMessage("Name is required", required),
            },
            manufacture_name: {
                required: helpers.withMessage("manufacture name is required", required),
            },
            manufacture_brand: {
                required: helpers.withMessage(
                    "Manufacture brand is required",
                    required
                ),
            },
            price: {
                required: helpers.withMessage("Price is required", required),
            },
        },
    },
    methods: {
        onAccept(file) {
            this.image = file.name;
            this.file = file;
        },
        productAdd() {
            this.submitted = true;
            // stop here if form is invalid
            this.v$.$touch();

            if (this.v$.$invalid) {
                return;
            } else {
                let formData = new FormData();
                formData.append("name", this.product.name);
                formData.append("manufacture_name", this.product.manufacture_name);
                formData.append("manufacture_brand", this.product.manufacture_brand);
                formData.append("price", this.product.price);
                formData.append("image", this.file, this.image);

                //** Add product in api using post method *//
                axios
                    .post(`http://localhost:8000/api/products`, formData)
                    .then((res) => {
                        return res;
                    })
                    .catch((err) => {
                        return err;
                    });
            }
        },
    },
};
</script>