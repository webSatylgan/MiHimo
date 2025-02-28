<script setup>
    import {ref} from "vue";
    import SliderUi from "@components/ui/sliderUi.vue";

    const slideList = ref(["slider-1.png", "slider-2.png", "slider-3.png"]);
</script>

<template>
    <div class="bikes">
        <sliderUi :slides="slideList" />
    </div>
</template>

<style scoped>
    .bikes {
        width: 100%;
        margin-top: 150px;
    }
</style>