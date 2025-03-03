<script setup>
    // imports -----------------
    import {inject} from "vue";

    // inject from App.vue --------------
    const isBurgerOpen = inject("isBurgerOpen");
    const toggleBurger = inject("toggleBurger");
</script>

<template>
    <div class="header flex">
        <img src="@assets/imgs/logo.svg" alt="">
        <nav>
            <a href="#description">Описание</a>
            <a href="#feature">Характеристики</a>
            <a href="#buy"><button>стоимость</button></a>
        </nav>
        <div class="header__burger" :class="{active: isBurgerOpen}" @click="toggleBurger">
            <span></span>
            <span></span>
            <span></span>
        </div> <!-- header__burger -->
    </div> <!-- header -->
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

    .header nav a {
        position: relative;
    }

    .header nav a::after {
        content: "";
        display: block;
        width: 0;
        height: 2px;

        position: absolute;
        left: 0;
        bottom: -3px;

        background: var(--black);

        transition: .2s ease-in-out;
    }

    .header nav a:last-child::after {
        content: none;
    }

    /* header links animation */
    .header nav a:hover::after {
        width: 100%;
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
    /* <= 768px */
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