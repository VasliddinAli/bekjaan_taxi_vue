<template>
    <Layout>
        <PageHeader title="Dispetcher qo'shish" pageTitle="Dispetcherlar" />

        <BRow>
            <BCol cols="12">
                <BCard>
                    <BCard no-body>
                        <BForm @submit.prevent="productAdd">
                            <BRow>
                                <BCol sm="6">
                                    <div class="mb-3">
                                        <label for="phone">Telefon raqami</label>
                                        <input id="phone" v-model="phone" name="name" type="text"
                                            class="form-control" placeholder="" />
                                    </div>
                                </BCol>
                                <BCol sm="6">
                                    <div class="mb-3">
                                        <label for="firstname">Ismi</label>
                                        <input id="firstname" v-model="firstname" name="name" type="text"
                                            class="form-control" placeholder="" />
                                    </div>
                                </BCol>
                                <BCol sm="6">
                                    <div class="mb-3">
                                        <label for="lastname">Familiyasi</label>
                                        <input id="lastname" v-model="lastname" name="name" type="text"
                                            class="form-control" placeholder="" />
                                    </div>
                                </BCol>
                                <BCol sm="6">
                                    <div class="mb-3">
                                        <label for="password">Parol</label>
                                        <input id="password" v-model="password" name="name" type="password"
                                            class="form-control" placeholder="" />
                                    </div>
                                </BCol>
                            </BRow>
                            <div class="mt-2">
                                <BButton variant="primary" class="me-1">
                                    Saqlash
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
            product: {
                name: "",
                manufacture_name: "",
                manufacture_brand: "",
                price: null,
            },
            formData: new FormData(),
            submitted: false,
            options: [
                "Alaska",
                "Hawaii",
                "California",
                "Nevada",
                "Oregon",
                "Washington",
                "Arizona",
                "Colorado",
                "Idaho",
                "Montana",
                "Nebraska",
                "New Mexico",
                "North Dakota",
                "Utah",
                "Wyoming",
                "Alabama",
                "Arkansas",
                "Illinois",
                "Iowa",
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