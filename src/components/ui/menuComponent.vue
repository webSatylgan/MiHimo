<script setup>
    import {inject, watch} from "vue";

    const isBurgerOpen = inject("isBurgerOpen");

    watch(isBurgerOpen, (newValue) => {
        console.log(newValue)
        if(newValue) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    });

</script>

<template>
    <div class="menu" :class="{active: isBurgerOpen}">
        <a href=""><img src="@/assets/imgs/logo.svg" alt=""></a>
        <a href="">Описание</a>
        <a href="">Характеристики</a>
        <button>стоимость</button>
    </div>
</template>

<style scoped>
    .menu {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 85px;

        width: 100%;
        height: 100%;

        background: var(--white);

        position: fixed;
        top: 0;
        left: 100%;

        opacity: 0;

        transition: .2s ease-in-out;
    }

    .menu a {
        font-size: 1.5rem;
    }

    .menu button {
        padding: 18px 30px;
    }

    .menu.active {
        left: 0;
        opacity: 1;
    }


</style>