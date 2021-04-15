<script>
export default {
    props: {
        secretariatData: {
            type: Array,
            default: [
                // {
                //     name: "高素梅",
                //     title: "监事",
                //     photo: "images/secretariat/监事-高素梅.png",
                //     content: "",
                // },
            ],
        },
    },
    data() {
        return {
            current: {},
        };
    },
};
</script>

<template>
    <div class="row">
        <div
            class="col-lg-3 col-md-4 col-sm-6 mt-4 pt-2"
            v-for="(secretariat, index) in secretariatData"
            :key="index"
        >
            <a v-b-modal.secretariat_modal @click="current = secretariat">
                <div class="card team text-center border-0">
                    <div class="position-relative">
                        <img
                            :src="`${secretariat.photo}`"
                            class="img-fluid avatar avatar-medium rounded-circle shadow"
                            alt=""
                        />
                    </div>
                    <div class="card-body py-3 px-0 content">
                        <h6 class="mb-1">
                            <a href="javascript:void(0)" class="name text-dark">
                                {{ secretariat.name }}
                            </a>
                        </h6>
                        <small class="designation text-muted">{{ secretariat.title }}</small>
                    </div>
                </div>
            </a>
        </div>
        <!--end col-->
        <b-modal
            id="secretariat_modal"
            hide-footer
            size="md"
            header-close-variant="white"
            header-class="border-0"
            content-class="border-0"
            centered
        >
            <div class="card text-center border-0 p-4">
                <div class="position-relative">
                    <img
                        :src="`${current.photo}`"
                        class="img-fluid avatar avatar-ex-large rounded-circle shadow"
                        alt=""
                    />
                </div>
                <div class="card-body py-3 px-0 content">
                    <h6 class="mb-1">
                        <a href="javascript:void(0)" class="name text-dark">
                            {{ current.name }}
                        </a>
                    </h6>
                    <small class="designation text-muted">{{ current.title }}</small>
                    <p class="text-muted mt-4 mb-0" v-if="current.content">{{ current.content }}</p>
                </div>
            </div>
        </b-modal>
    </div>
</template>
