<script setup>
// imports components -------
import HeaderComponent from "./components/headerComponent.vue";
import IntroComponent from "./components/introComponent.vue";
import FooterComponent from "./components/footerComponent.vue";
import DescriptionComponent from "@components/descriptionComponent.vue";
</script>

<template>
    <div class="container">
        <HeaderComponent />
        <IntroComponent />
        <DescriptionComponent />
    </div>


    <footer-component />
</template>

<style scoped>

</style>
