<script setup>
    // imports ------------------
    // import sliderUI
    import SliderUi from "@components/ui/sliderUi.vue";

    // slides
    const slideList = ["slider-1.png", "slider-2.png", "slider-3.png"];
</script>

<template>
    <div class="bikes">
        <sliderUi :slides="slideList" :dots="true" />
    </div> <!-- bikes -->
</template>

<style scoped>
    .bikes {
        width: 100%;
        margin-top: 150px;
    }
</style>