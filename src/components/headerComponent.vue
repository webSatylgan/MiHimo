<script setup>

</script>

<template>
    <div class="header flex">
        <img src="@assets/imgs/logo.svg" alt="">
        <nav>
            <a href="">Описание</a>
            <a href="">Характеристики</a>
            <button>стоимость</button>
        </nav>
    </div>
</template>

<style scoped>
    .header {
        width: 100%;
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
</style>