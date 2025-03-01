<script setup>
    import {inject} from "vue";

    const isBurgerOpen = inject("isBurgerOpen");
    const toggleBurger = inject("toggleBurger");
</script>

<template>
    <div class="header flex">
        <img src="@assets/imgs/logo.svg" alt="">
        <nav>
            <a href="">Описание</a>
            <a href="">Характеристики</a>
            <button>стоимость</button>
        </nav>
        <div class="header__burger" :class="{active: isBurgerOpen}" @click="toggleBurger">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
</template>

<style scoped>
    .header {
        width: 100%;
    }

    .header img {
        max-width: 160px;
    }

    .header nav {
        max-width: 425px;
        gap: 10px;
    }

    .header nav button {
        padding: 18px 40px;

        font-size: .8rem;
        letter-spacing: normal;
    }

    .header__burger {
        display: none;
        flex-direction: column;
        gap: 8px;
        cursor: pointer;

        z-index: 10;
    }

    .header__burger span {
        width: 35px;
        height: 2px;
        background: var(--black);

        transform-origin: center;
        transition: .2s;
    }

    .header__burger.active span:nth-child(1) {
        transform: translateY(10px) rotate(45deg);
    }

    .header__burger.active span:nth-child(2) {
        opacity: 0;
    }

    .header__burger.active span:nth-child(3) {
        transform: translateY(-10px) rotate(-45deg);
    }

    /* media -------------- */
    @media (max-width: 768px) {
        .header img {
            max-width: 100px;
        }

        .header nav {
            display: none;
        }

        .header__burger {
            display: flex;
        }
    }

</style>