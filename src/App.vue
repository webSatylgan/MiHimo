<script setup>
// imports components -------
import HeaderComponent from "./components/headerComponent.vue";
import IntroComponent from "./components/introComponent.vue";
import FooterComponent from "./components/footerComponent.vue";
import DescriptionComponent from "@components/descriptionComponent.vue";
import FeatureComponent from "@components/featureComponent.vue";
import BuyComponent from "@components/buyComponent.vue";
</script>

<template>
    <div class="container">
        <HeaderComponent />
        <IntroComponent />
        <DescriptionComponent />
        <feature-component />
        <buy-component />
    </div>


    <footer-component />
</template>

<style scoped>

</style>
