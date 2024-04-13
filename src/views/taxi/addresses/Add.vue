<template>
    <Layout>
        <PageHeader title="Manzil guruhi yaratish" pageTitle="Manzil guruhlari" />

        <BRow>
            <BCol cols="4">
                <BCard>
                    <BCard no-body>
                        <BForm @submit.prevent="productAdd">
                            <BRow>
                                <BCol sm="12">
                                    <div class="mb-3">
                                        <label for="summa">Manzil guruhi</label>
                                        <BFormSelect v-model="address.address_group_id" class="form-select">
                                            <BFormSelectOption :value="null" disabled>Tanlang</BFormSelectOption>
                                            <BFormSelectOption v-for="address_group in address_groups"
                                                :value="address_group.id" :key="address_group.id">{{ address_group.name
                                                }}</BFormSelectOption>
                                        </BFormSelect>
                                    </div>
                                </BCol>
                                <BCol sm="12">
                                    <div class="mb-3">
                                        <label for="summa">Nomi</label>
                                        <input id="summa" v-model="address.name" name="name" type="text"
                                            class="form-control" placeholder="" />
                                    </div>
                                </BCol>
                                <BCol sm="12">
                                    <div class="mb-3">
                                        <label for="summa">Longitude (72)</label>
                                        <input id="summa" v-model="address.lng" name="name" type="text"
                                            class="form-control" placeholder="" />
                                    </div>
                                </BCol>
                                <BCol sm="12">
                                    <div class="mb-3">
                                        <label for="summa">Latitude (40)</label>
                                        <input id="summa" v-model="address.lat" name="name" type="text"
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
            <BCol cols="8">
                <BCard no-body>
                    <BCardTitle class="p-3"><i class="fas fa-map text-primary"></i> Xarita</BCardTitle>
                    <div style="height:450px; width:100%">
                        <l-map ref="map" :zoom="12" :center="coord_center" @click="clickedMap">
                            <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" layer-type="base"
                                name="OpenStreetMap"></l-tile-layer>
                            <l-marker v-if="coord != null" :draggable="true" @drag="clickedMap"
                                :lat-lng="coord"></l-marker>
                        </l-map>
                    </div>
                </BCard>
            </BCol>
        </BRow>
    </Layout>
</template>


<script>
import axios from "axios";

import { required, helpers } from "@vuelidate/validators";
// import useVuelidate from "@vuelidate/core";
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";

import Layout from '@/layouts/main'
import PageHeader from "@/components/page-header";
export default {
    setup() {
    },
    components: {
        Layout,
        PageHeader,
        LMap,
        LTileLayer,
        LMarker,
    },
    data() {
        return {
            coord_center: [40.633267, 72.50463],
            coord: null,
            address_groups: [
                {
                    id: 1,
                    name: "Buloqboshi"
                },
                {
                    id: 2,
                    name: "Andijon"
                },
            ],
            address: {
                address_group_id: null,
                name: null,
                lat: null,
                lng: null,
            },
            formData: new FormData(),
            submitted: false,
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
        clickedMap(data) {
            console.log(data.latlng);
            this.coord = data.latlng;
            this.address.lat = data.latlng ? data.latlng.lat : null;
            this.address.lng = data.latlng ? data.latlng.lng : null;
        },
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