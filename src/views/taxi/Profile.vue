<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import profile from "@/assets/images/profile-img.png"
import { avatar1 } from "../../assets/images/users/data"
import { revenueChart, timelineData, projectData } from "./components/data-profile";
import Stat from "@/components/widgets/stat";


/**
 * Contacts-Profil component
 */
export default {
    components: {
        Layout,
        PageHeader,
        Stat,
    },

    data() {
        return {
            profile, avatar1,
            revenueChart: revenueChart, timelineData, projectData,
            statData: [
                {
                    icon: "bx bx-check-circle",
                    title: "Umumiy buyurtmalar",
                    value: "1456 ta"
                },
                {
                    icon: "bx bxs-taxi",
                    title: "Umumiy haydovchilar",
                    value: "140 ta"
                },
                {
                    icon: "bx bxs-user-voice",
                    title: "Umumiy operatorlar",
                    value: "5 ta"
                }
            ],
            transactions: [
                {
                    id: '1',
                    firstname: "Javohir",
                    lastname: "Yakubov",
                    phone: "+998901648595",
                    register_date: "01.04.2024 12:33:33",
                    status: "waiting",
                },
            ],
        };
    },
};
</script>

<template>
    <Layout>
        <PageHeader title="Profil" pageTitle="Bosh sahifa" />

        <BRow>
            <!-- <BCol xl="4">
                <BCard no-body class="overflow-hidden">
                    <div class="bg-primary-subtle">
                        <BRow>
                            <BCol cols="7">
                                <div class="text-primary p-3">
                                    <h5 class="text-primary">Assalomu alaykum!</h5>
                                    <p>Profilingizga hush kelibsiz</p>
                                </div>
                            </BCol>
                            <BCol cols="5" class="align-self-end">
                                <img :src=profile alt class="img-fluid" />
                            </BCol>
                        </BRow>
                    </div>
                    <BCardBody class="pt-0">
                        <BRow>
                            <BCol sm="4">
                                <div class="avatar-md profile-user-wid mb-4">
                                    <img :src=avatar1 alt class="img-thumbnail rounded-circle" />
                                </div>
                                <h5 class="font-size-15 text-truncate">Cynthia Price</h5>
                                <p class="text-muted mb-0 text-truncate">UI/UX Designer</p>
                            </BCol>

                            <BCol sm="8">
                                <div class="pt-4">
                                    <BRow>
                                        <BCol cols="6">
                                            <h5 class="font-size-15">125</h5>
                                            <p class="text-muted mb-0">Projects</p>
                                        </BCol>
                                        <BCol cols="6">
                                            <h5 class="font-size-15">$1245</h5>
                                            <p class="text-muted mb-0">Revenue</p>
                                        </BCol>
                                    </BRow>
                                    <div class="mt-4">
                                        <BLink class="btn btn-primary btn-sm">
                                            View Profil
                                            <i class="mdi mdi-arrow-right ms-1"></i>
                                        </BLink>
                                    </div>
                                </div>
                            </BCol>
                        </BRow>
                    </BCardBody>
                </BCard>

                <BCard no-body>
                    <BCardBody class="pb-0">
                        <BCardTitle class="mb-4">Personal Information</BCardTitle>

                        <p class="text-muted mb-4">Hi I'm Cynthia Price,has been the industry's standard dummy text To
                            an English
                            person, it will seem like simplified English, as a skeptical Cambridge.</p>
                        <div class="table-responsive ">
                            <BTableSimple class="table-nowrap mb-0">
                                <BTbody>
                                    <BTr>
                                        <BTh scope="row">Full Name :</BTh>
                                        <BTd>Cynthia Price</BTd>
                                    </BTr>
                                    <BTr>
                                        <BTh scope="row">Mobile :</BTh>
                                        <BTd>(123) 123 1234</BTd>
                                    </BTr>
                                    <BTr>
                                        <BTh scope="row">E-mail :</BTh>
                                        <BTd>cynthiaskote@gmail.com</BTd>
                                    </BTr>
                                    <BTr>
                                        <BTh scope="row">Location :</BTh>
                                        <BTd>California, United States</BTd>
                                    </BTr>
                                </BTbody>
                            </BTableSimple>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol> -->

            <BCol xl="12">
                <BRow>
                    <BCol md="4" v-for="stat of statData" :key="stat.icon">
                        <Stat :icon="stat.icon" :title="stat.title" :value="stat.value" />
                    </BCol>
                </BRow>
                <BCard no-body>
                    <BCardBody>
                        <BCardTitle class="mb-4">Tasdiqlanishi kutilayotgan haydovchilar</BCardTitle>
                        <div class="table-responsive">
                            <div class="table-responsive mb-0">
                                <BTableSimple class="align-middle table-nowrap">
                                    <BThead class="table-light">
                                        <BTr>
                                            <BTh style="width: 20px">
                                                <div class="form-check font-size-16 align-middle">
                                                    <input class="form-check-input" type="checkbox"
                                                        id="transactionCheck01" />
                                                    <label class="form-check-label" for="transactionCheck01"></label>
                                                </div>
                                            </BTh>
                                            <BTh class="align-middle">ID</BTh>
                                            <BTh class="align-middle">Ismi</BTh>
                                            <BTh class="align-middle">Familyasi</BTh>
                                            <BTh class="align-middle">Telefon raqami</BTh>
                                            <BTh class="align-middle">Ro’yhatdan o’tgan vaqti</BTh>
                                            <BTh class="align-middle">Status</BTh>
                                            <BTh class="align-middle">Amal</BTh>
                                        </BTr>
                                    </BThead>
                                    <BTbody>
                                        <BTr v-for="data in transactions" :key="data.id">
                                            <BTd>
                                                <div class="form-check font-size-16">
                                                    <input class="form-check-input" type="checkbox"
                                                        :id="`transactionCheck${data.index}`" />
                                                    <label class="form-check-label"
                                                        :for="`transactionCheck${data.index}`"></label>
                                                </div>
                                            </BTd>
                                            <BTd>
                                                <BLink href="javascript: void(0);" class="text-body fw-bold">{{
                        data.id
                    }}</BLink>
                                            </BTd>
                                            <BTd>{{ data.firstname }}</BTd>
                                            <BTd>{{ data.lastname }}</BTd>
                                            <BTd>{{ data.phone }}</BTd>
                                            <BTd>{{ data.register_date }}</BTd>
                                            <BTd>
                                                <span class="badge badge-pill badge-soft-success font-size-11" :class="{
                        'badge-soft-danger': `${data.status}` === 'active',
                        'badge-soft-warning': `${data.status}` === 'waiting',
                    }">
                                                    {{ data.status == 'waiting' ? 'Tasdiqlash kutilmoqda' : '' }}
                                                </span>
                                            </BTd>
                                            <BTd>
                                                <BButton variant="primary" class="btn-sm btn-rounded"
                                                    @click="showModal = !showModal">
                                                    Ko’rish
                                                </BButton>
                                            </BTd>
                                        </BTr>
                                    </BTbody>
                                </BTableSimple>
                            </div>
                            <BModal v-model="showModal" title="Order Details" centered>
                                <p class="mb-2">Product id: <span class="text-primary">#SK2540</span></p>
                                <p class="mb-4">Billing Name: <span class="text-primary">Neal Matthews</span></p>

                                <div class="table-responsive">
                                    <BTableSimple class="align-middle table-nowrap">
                                        <BThead>
                                            <BTr>
                                                <BTh scope="col">Product</BTh>
                                                <BTh scope="col">Product Name</BTh>
                                                <BTh scope="col">Price</BTh>
                                            </BTr>
                                        </BThead>
                                        <BTbody>
                                            <BTr>
                                                <BTh scope="row">
                                                    <div>
                                                        <img :src="Img7" alt="" class="avatar-sm">
                                                    </div>
                                                </BTh>
                                                <BTd>
                                                    <div>
                                                        <h5 class="text-truncate font-size-14">Wireless Headphone
                                                            (Black)</h5>
                                                        <p class="text-muted mb-0">$ 225 x 1</p>
                                                    </div>
                                                </BTd>
                                                <BTd>$ 255</BTd>
                                            </BTr>
                                            <BTr>
                                                <BTh scope="row">
                                                    <div>
                                                        <img :src="Img4" alt="" class="avatar-sm">
                                                    </div>
                                                </BTh>
                                                <BTd>
                                                    <div>
                                                        <h5 class="text-truncate font-size-14">Phone patterned cases
                                                        </h5>
                                                        <p class="text-muted mb-0">$ 145 x 1</p>
                                                    </div>
                                                </BTd>
                                                <BTd>$ 145</BTd>
                                            </BTr>
                                            <BTr>
                                                <BTd colspan="2">
                                                    <h6 class="m-0 text-right">Sub Total:</h6>
                                                </BTd>
                                                <BTd>
                                                    $ 400
                                                </BTd>
                                            </BTr>
                                            <BTr>
                                                <BTd colspan="2">
                                                    <h6 class="m-0 text-right">Shipping:</h6>
                                                </BTd>
                                                <BTd>
                                                    Free
                                                </BTd>
                                            </BTr>
                                            <BTr>
                                                <BTd colspan="2">
                                                    <h6 class="m-0 text-right">Total:</h6>
                                                </BTd>
                                                <BTd>
                                                    $ 400
                                                </BTd>
                                            </BTr>
                                        </BTbody>
                                    </BTableSimple>
                                </div>
                                <template v-slot:modal-footer>
                                    <BButton variant="secondary" @click="showModal = !showModal">Close</BButton>
                                </template>
                            </BModal>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
    </Layout>
</template>./components/data-profile