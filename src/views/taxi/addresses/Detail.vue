<template>
    <Layout>
        <PageHeader :title="address.name" pageTitle="Manzil guruhlari" />

        <div class="checkout-tabs">
            <BRow>
                <BCol cols="4">
                    <BCard no-body>
                        <BCardBody>
                            <h5 class="fw-semibold">Batafsil ma'lumot</h5>

                            <div class="table-responsive">
                                <BTableSimple class="table-bordered">
                                    <BTbody>
                                        <BTr>
                                            <BTh scope="row">ID</BTh>
                                            <BTd><span class="badge badge-soft-info">#{{ address.id }}</span></BTd>
                                        </BTr>
                                        <BTr>
                                            <BTh scope="col">Address Category Id</BTh>
                                            <BTd scope="col">
                                                <router-link
                                                    :to="{ name: 'address_category_detail', params: { id: address.address_group_id } }">
                                                    {{ address.address_group.name }}
                                                </router-link>
                                            </BTd>
                                        </BTr>
                                        <BTr>
                                            <BTh scope="col">Nomi</BTh>
                                            <BTd scope="col">{{ address.name }}</BTd>
                                        </BTr>
                                        <BTr>
                                            <BTh scope="col">Latitude (40)</BTh>
                                            <BTd scope="col">{{ address.lat }}</BTd>
                                        </BTr>
                                        <BTr>
                                            <BTh scope="col">Longitude (72)</BTh>
                                            <BTd scope="col">{{ address.lng }}</BTd>
                                        </BTr>
                                        <BTr>
                                            <BTh scope="col">Statusi</BTh>
                                            <BTd scope="col">{{ address.status }}</BTd>
                                        </BTr>
                                        <BTr>
                                            <BTh scope="col">Yaratilgan vaqti</BTh>
                                            <BTd scope="col">{{ address.created_date }}</BTd>
                                        </BTr>
                                        <BTr>
                                            <BTh scope="col">Tahrirlangan vaqti</BTh>
                                            <BTd scope="col">{{ address.updated_date }}</BTd>
                                        </BTr>
                                    </BTbody>
                                </BTableSimple>
                            </div>
                        </BCardBody>
                    </BCard>
                </BCol>
                <BCol cols="8">
                    <BCard no-body>
                        <BCardTitle class="p-3"><i class="fas fa-map text-primary"></i> Xarita</BCardTitle>
                        <div style="height:450px; width:100%">
                            <l-map ref="map" :zoom="12" :center="coord_center">
                                <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" layer-type="base"
                                    name="OpenStreetMap"></l-tile-layer>
                                <l-marker v-if="coord_center != null" :lat-lng="coord_center"></l-marker>
                            </l-map>
                        </div>
                    </BCard>
                </BCol>
            </BRow>
        </div>
    </Layout>
</template>

<script>
import Layout from "@/layouts/main";
import PageHeader from "@/components/page-header";
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";

export default {
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
            address: {
                id: 1,
                address_group_id: 1,
                address_group: {
                    id: 1,
                    name: "Buloqboshi"
                },
                name: "Lazzat milliy taomlari",
                lat: "40.6262",
                lng: "72.5007",
                status: "Faol",
                created_date: "mar 15, 2024y 14:35:57",
                updated_date: "apr 09, 2024y 00:50:16",
            },
        };
    },
};
</script>
