<template>
    <Layout>
        <PageHeader title="Dispetcher" pageTitle="Dispetcher" />

        <BCard>
            <BRow>
                <BCol xl="2">
                    <BAlert :model-value="true" variant="primary" class="text-center m-0 p-1" style="cursor: pointer;">
                        <i class="fas fa-phone-alt"></i> +998 94 444 60 50
                    </BAlert>
                </BCol>
            </BRow>
        </BCard>
        <BRow>
            <BCol xl="6">
                <BCard no-body>
                    <BCardTitle class="h5 p-3">
                        <i class="fas fa-taxi text-warning h4 p-0 m-0"></i> Buyurtmalar oynasi
                    </BCardTitle>
                    <hr class="p-0 m-0">
                    <BRow class="p-3">
                        <BCol xl="6" class="py-1">
                            <input type="text" v-model="order.phone" class="form-control" placeholder="Telefon raqami">
                        </BCol>
                        <BCol xl="6" class="py-1">
                            <input type="text" v-model="order.fullname" class="form-control text-center" disabled
                                placeholder="Ism va familiya">
                        </BCol>
                        <BCol xl="6" class="py-1">
                            <BFormSelect v-model="order.region_id" class="form-select">
                                <BFormSelectOption :value="null" disabled>Manzil guruhlari</BFormSelectOption>
                                <BFormSelectOption :value="region.id" v-for="region in regions" :key="region.id">
                                    {{ region.name }}
                                </BFormSelectOption>
                            </BFormSelect>
                        </BCol>
                        <BCol xl="6" class="py-1">
                            <input type="text" v-model="order.price" class="form-control text-center" disabled
                                placeholder="Qo'shimcha narx">
                        </BCol>
                        <BCol xl="6" class="py-1">
                            <BFormSelect v-model="order.location_id" class="form-select">
                                <BFormSelectOption :value="null" disabled>Manzillar</BFormSelectOption>
                                <BFormSelectOption :value="loc.id" v-for="loc in locations" :key="loc.id">
                                    {{ loc.name }}
                                </BFormSelectOption>
                            </BFormSelect>
                        </BCol>
                        <BCol xl="6" class="py-1">
                        </BCol>
                        <BCol xl="6" class="py-1">
                            <BFormSelect v-model="order.tarif_id" class="form-select">
                                <BFormSelectOption :value="null" disabled>Tarif</BFormSelectOption>
                                <BFormSelectOption :value="tarif.id" v-for="tarif in tarifs" :key="tarif.id">
                                    {{ tarif.name }}
                                </BFormSelectOption>
                            </BFormSelect>
                        </BCol>
                    </BRow>
                    <BRow class="px-3">
                        <BCol xl="4" v-for="service in servise_list" :key="service.id">
                            <input class="orderServiseInput" type="checkbox" v-model="service.have" :name="service.id"
                                :value="service.have" :id="service.id" />
                            <label class="orderServiseLabel" :for="service.id">
                                {{ service.name }}
                            </label>
                        </BCol>
                    </BRow>
                    <div class="p-3">
                        <textarea v-model="order.comment" class="form-control"
                            placeholder="Qo'shimcha ma'lumot"></textarea>
                    </div>
                    <div class="px-3 pb-3">
                        <BButton variant="outline-primary" class="w-100">Qo'shish</BButton>
                    </div>
                </BCard>
            </BCol>
            <BCol xl-6>
                <BCard no-body class="py-2">
                    <div style="height:450px; width:100%">
                        <l-map ref="map" zoom="12" :center="coord2">
                            <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" layer-type="base"
                                name="OpenStreetMap"></l-tile-layer>
                            <l-marker :lat-lng="coord2"></l-marker>
                        </l-map>
                    </div>

                    <form>
                        <div class="p-2">
                            <textarea v-model="order.comment" class="form-control" placeholder="Habar"></textarea>
                        </div>
                        <div class="px-2 pb-2">
                            <BButton variant="outline-primary" class="w-100">Yuborish</BButton>
                        </div>
                    </form>
                </BCard>
            </BCol>
        </BRow>


        <BCard no-body>
            <BCardBody class="border-bottom p-2 d-flex align-items-center">
                <h4 class="m-0 p-0"><i class="fas fa-check-double"></i> Buyurtmalar</h4>
                <p class="m-0 p-0"> ( Jami: 11 ta, : ⚪️1 ta, : 🔵0 ta, : 🟠1 ta, : 🟡9 ta )</p>
            </BCardBody>

            <BTableSimple class="align-middle dt-responsive nowrap w-100 table-check p-2 table-bordered" id="job-list">
                <BThead>
                    <BTr>
                        <BTh scope="col" v-tooltip="'Haydovchi id`si'"><i class="fas fa-hashtag"></i></BTh>
                        <BTh scope="col" v-tooltip="'Buyurtma id`si'"><i class="fas fa-hashtag"></i></BTh>
                        <BTh scope="col" v-tooltip="'Buyurtmachi'"><i class="fas fa-user"></i></BTh>
                        <BTh scope="col" v-tooltip="'Buyurtmachi telefon raqami'"><i class="fas fa-phone-alt"></i></BTh>
                        <BTh scope="col" v-tooltip="'Manzili'"><i class="fas fa-map-marker-alt"></i></BTh>
                        <BTh scope="col" v-tooltip="'Xizmatlar soni'"><i class="fas fa-tags"></i></BTh>
                        <BTh scope="col" v-tooltip="'Buyurtma turi'"><i class="fas fa-bars"></i></BTh>
                        <BTh scope="col" v-tooltip="'Buyurtmachi'"><i class="fas fa-broadcast-tower"></i></BTh>
                        <BTh scope="col" v-tooltip="'Buyurtma berilgan vaqti'"><i class="fas fa-clock"></i></BTh>
                        <BTh scope="col" v-tooltip="'Jarayon vaqti'"><i class="fas fa-stopwatch"></i></BTh>
                        <BTh scope="col" v-tooltip="'Buyurtmani qabul qilgan haydovchi'"><i class="fas fa-taxi"></i>
                        </BTh>
                        <BTh scope="col" v-tooltip="'Buyurtmani qabul qilgan haydovchi telefon raqami'"><i
                                class="fas fa-phone-alt"></i></BTh>
                        <BTh scope="col" v-tooltip="'Boshqaruv'"><i class="fas fa-cog"></i></BTh>
                    </BTr>
                </BThead>

                <BTbody>
                    <BTr v-for="order in orders" :key="order.id">
                        <BTh scope="row"> {{ order.driver_id }} </BTh>
                        <BTh scope="row"> {{ order.order_id }} </BTh>
                        <BTd> {{ order.client.fullname }} </BTd>
                        <BTd> {{ order.client.phone }} </BTd>
                        <BTd> {{ order.start_location }} </BTd>
                        <BTd> {{ order.service_count }} </BTd>
                        <BTd> {{ order.tarif }} so'm</BTd>
                        <BTd> {{ order.customer }} </BTd>
                        <BTd> {{ order.start_date }} </BTd>
                        <BTd> {{ order.proccess_time }} </BTd>
                        <BTd> {{ order.driver.fullname }} </BTd>
                        <BTd> {{ order.driver.phone }} </BTd>
                        <BTd>
                            <ul class="list-unstyled hstack gap-1 mb-0">
                                <li role="button" title="Qayta o'rtaga tashlash" class="text-danger">
                                    <i class="fas fa-undo"></i>
                                </li>
                                <li role="button" title="Bekor qilish" class="mx-2 text-danger">
                                    <i class="fas fa-times"></i>
                                </li>
                                <li role="button" title="O'zgartirish" class="text-primary">
                                    <i class="fas fa-cog"></i>
                                </li>
                            </ul>
                        </BTd>
                    </BTr>
                </BTbody>
            </BTableSimple>
        </BCard>
    </Layout>
</template>

<script>
import Layout from '@/layouts/main'
import PageHeader from '@/components/page-header'
import "leaflet/dist/leaflet.css";
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
            coord: [40.633267, 72.50463],
            coord2: [40.524041, 72.068409],
            regions: [
                { id: 1, name: "Andijon viloyati" },
                { id: 2, name: "Buloqboshi tumani" },
            ],
            locations: [
                { id: 1, name: "Chorguzar" },
                { id: 2, name: "Yangiqishloq MFY" },
            ],
            tarifs: [
                { id: 1, name: "Eng tez" },
                { id: 2, name: "Standart" },
                { id: 3, name: "Comfort" },
            ],
            servise_list: [
                { id: 1, name: "Musiqa - 2000" },
                { id: 2, name: "Tom bagaj - 2000" },
                { id: 3, name: "Yuk xona - 2000" },
            ],
            order: {
                phone: "+998 ",
                region_id: null,
                location_id: null,
                tarif_id: null,
                servises: [],
                comment: null
            },
            orders: [
                {
                    driver_id: 1,
                    order_id: 1,
                    client: {
                        fullname: "мирзоулугбек омонов",
                        phone: "+998 93 491 09 00",
                    },
                    phone: "+998 95 555 93 15",
                    start_location: "Buloqboshi tumani Toshkechik",
                    service_count: 0,
                    tarif: "Standart",
                    customer: "Admin",
                    start_date: "09:25:18",
                    proccess_time: "10:21",
                    driver: {
                        fullname: "мирзоулугбек омонов",
                        phone: "+998 93 491 09 00",
                    },
                }
            ],
        };
    },
}
</script>

<style scoped>
.orderServiseLabel {
    border: 1px solid #d3d3d3;
    background-color: #f5f5f5;
    padding: 5px 10px;
    cursor: pointer;
    width: 100%;
    text-align: center;
    border-radius: 4px;
}

.orderServiseInput {
    opacity: 0;
    position: fixed;
    width: 0;

    &:checked+label {
        background-color: #5e50ee;
        border-color: #5e50ee;
        color: #fff;
    }
}
</style>