<script setup>
    // imports components -------
    import {onMounted, onUnmounted, ref, watchEffect, provide} from "vue";

    import HeaderComponent from "./components/headerComponent.vue";
    import IntroComponent from "./components/introComponent.vue";
    import FooterComponent from "./components/footerComponent.vue";
    import DescriptionComponent from "@components/descriptionComponent.vue";
    import FeatureComponent from "@components/featureComponent.vue";
    import BuyComponent from "@components/buyComponent.vue";
    import SliderComponent from "@components/sliderComponent.vue";
    import MenuComponent from "@components/ui/menuComponent.vue";

    // menu adaptation logic ------------
    let windowWidth = ref(window.innerWidth);
    const isMobile = ref(window.innerWidth < 768);
    const updateWidth = () => {
        windowWidth.value = window.innerWidth;
    };

    watchEffect(() => {
        isMobile.value = windowWidth.value < 768;
    });

    onMounted(() => {
        window.addEventListener("resize", updateWidth);
    });

    onUnmounted(() => {
        window.removeEventListener("resize", updateWidth);
    });

    // adaptation binding
    const isBurgerOpen = ref(false);
    const toggleBurger = () => {
        isBurgerOpen.value = !isBurgerOpen.value;
    }

    provide("isBurgerOpen", isBurgerOpen);
    provide("toggleBurger", toggleBurger);

</script>

<template>
    <div class="container">
        <HeaderComponent />
        <IntroComponent />
        <DescriptionComponent />
        <featureComponent />
        <sliderComponent />
        <buy-component />
    </div>
    <footer-component />

    <menuComponent v-if="isMobile" />
</template>

<style scoped>

</style>
