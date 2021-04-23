<script>
export default {
    props: {
        tocData: {
            type: Array,
            default: [],
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
            v-for="(toc, index) in tocData"
            :key="index"
        >
            <a v-b-modal.toc_modal @click="current = toc">
            <div class="card team text-center border-0 bg-transparent">
                <div class="position-relative">
                    <img
                        :src="`${toc.photo}`"
                        class="img-fluid avatar avatar-medium rounded-circle shadow"
                        alt=""
                    />
                </div>
                <div class="card-body py-3 px-0 content">
                    <h6 class="mb-1">
                        <a href="javascript:void(0)" class="name text-dark">
                            {{ toc.name }}
                        </a>
                    </h6>
                    <small class="designation text-muted">{{ toc.title }}</small>
                </div>
            </div>
            </a>
        </div>
        <!--end col-->
        <b-modal
            id="toc_modal"
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
                    <p class="text-muted mt-4 mb-0">{{ current.content }}</p>
                </div>
            </div>
        </b-modal>
    </div>
</template>
