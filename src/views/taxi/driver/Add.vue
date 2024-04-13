<template>
    <Layout>
        <PageHeader title="Haydovchi qo'shish" pageTitle="Haydovchilar" />

        <BRow>
            <BCol cols="12">
                <BCard>
                    <BCard no-body>
                        <BForm @submit.prevent="driverAdd">
                            <BRow>
                                <BCol sm="4">
                                    <div class="mb-3">
                                        <label for="firstname">Ismi</label>
                                        <input id="firstname" v-model="driver.firstname" type="text"
                                            class="form-control" placeholder="" />
                                    </div>
                                </BCol>
                                <BCol sm="4">
                                    <div class="mb-3">
                                        <label for="lastname">Familiyasi</label>
                                        <input id="lastname" v-model="driver.lastname" type="text" class="form-control"
                                            placeholder="" />
                                    </div>
                                </BCol>
                                <BCol sm="4">
                                    <div class="mb-3">
                                        <label for="phone">Telefon raqami</label>
                                        <input id="phone" v-model="driver.phone" type="tel" class="form-control"
                                            placeholder="" />
                                    </div>
                                </BCol>
                                <BCol sm="3">
                                    <div class="mb-3">
                                        <label for="birthday">Tug'ilgan sanasi</label>
                                        <input id="birthday" v-model="driver.birthday" type="date" class="form-control"
                                            placeholder="" />
                                    </div>
                                </BCol>
                                <BCol sm="3">
                                    <div class="mb-3">
                                        <label for="jinsi">Jinsi</label>
                                        <BFormSelect id="jinsi" v-model="driver.jinsi" class="form-select">
                                            <BFormSelectOption value="man">Erkak</BFormSelectOption>
                                            <BFormSelectOption value="woman">Ayol</BFormSelectOption>
                                        </BFormSelect>
                                    </div>
                                </BCol>
                                <BCol sm="3">
                                    <div class="mb-3">
                                        <label for="car">Avtomobil identifikatori</label>
                                        <BFormSelect id="car" v-model="driver.car_id" class="form-select">
                                            <BFormSelectOption :value="null">Tanlanmagan</BFormSelectOption>
                                            <BFormSelectOption :value="car.id" v-for="car in cars" :key="car.id">{{
                            car.name }}</BFormSelectOption>
                                        </BFormSelect>
                                    </div>
                                </BCol>
                                <BCol sm="3">
                                    <div class="mb-3">
                                        <label for="position">Pozitsiya</label>
                                        <input id="position" v-model="driver.position" type="text" class="form-control"
                                            placeholder="" />
                                    </div>
                                </BCol>
                                <BCol sm="4">
                                    <div class="mb-3">
                                        <label for="tex_number">Texnik o'tish raqami</label>
                                        <input id="tex_number" v-model="driver.tex_number" type="number"
                                            class="form-control" placeholder="" />
                                    </div>
                                </BCol>
                                <BCol sm="4">
                                    <div class="mb-3">
                                        <label for="car_number">Avtomobil raqami</label>
                                        <input id="car_number" v-model="driver.car_number" type="number"
                                            class="form-control" placeholder="" />
                                    </div>
                                </BCol>
                                <BCol sm="4">
                                    <div class="mb-3">
                                        <label for="order_percent">Har bir zakazdan foiz</label>
                                        <input id="order_percent" v-model="driver.order_percent" type="number"
                                            class="form-control" placeholder="" />
                                    </div>
                                </BCol>
                                <BCol sm="4">
                                    <div class="mb-3">
                                        <label for="color">Rangi</label>
                                        <BFormSelect id="color" v-model="driver.color" class="form-select">
                                            <BFormSelectOption :value="color.id" v-for="color in colors"
                                                :key="color.id">{{ color.name }}</BFormSelectOption>
                                        </BFormSelect>
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
 * Add-driver component
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
            driver: {
                firstname: null,
                lastname: null,
                phone: null,
                birthday: null,
                jinsi: 'man',
                car_id: null,
                position: null,
                tex_number: null,
                car_number: null,
                order_percent: 0,
                color: "Oq",
                is_add: null,
            },
            cars: [
                {
                    id: 1,
                    name: "Matiz"
                },
                {
                    id: 2,
                    name: "Damas"
                },
            ],
            colors: [
                { id: "Oq", name: "Oq" },
                { id: "Qora", name: "Qora" },
                { id: "Stalnoy", name: "Stalnoy" },
                { id: "Ko'k", name: "Ko'k" },
                { id: "Sariq", name: "Sariq" },
                { id: "Qizil", name: "Qizil" },
                { id: "To'q yashil", name: "To'q yashil" },
                { id: "Molochniy", name: "Molochniy" },
                { id: "Jigarrang", name: "Jigarrang" },
            ],
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
        driver: {
            name: {
                required: helpers.withMessage("Name is required", required),
            },
        },
    },
    methods: {
        onAccept(file) {
            this.image = file.name;
            this.file = file;
        },
        driverAdd() {
            this.submitted = true;
            // stop here if form is invalid
            this.v$.$touch();

            if (this.v$.$invalid) {
                return;
            } else {
                let formData = new FormData();
                formData.append("name", this.driver.name);
                formData.append("manufacture_name", this.driver.manufacture_name);
                formData.append("manufacture_brand", this.driver.manufacture_brand);
                formData.append("price", this.driver.price);
                formData.append("image", this.file, this.image);

                //** Add driver in api using post method *//
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