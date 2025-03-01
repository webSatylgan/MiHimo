<script setup>
    import SliderUi from "@components/ui/sliderUi.vue";

    const slides = ["intro-1.png", "intro-2.png", "intro-3.png", "intro-4.png", "intro-5.png"];
</script>

<template>
    <div class="intro flex">
        <div class="intro__content">
            <h1>Xiaomi Himo C26</h1>
            <h3>Электрический велосипед</h3>
            <p>Полная свобода передвижения и надежный транспорт для путешествий на любые расстояния <br> <br> HIMO C26 – это новый электровелосипед от Xiaomi, который создан как для езды по городу, так и бездорожью. Он имеет мощный двигатель и емкий аккумулятор, благодаря которым способен проезжать на одном заряде до 100 км, что определенно выше, чем у большинства конкурентов. А большие колеса с пневматическими шинами, дисковые тормоза, 7-скоростная трансмиссия и эргономичное сидение делают каждую поездку гораздо приятнее. </p>
            <button>ЗАКАЗАТЬ</button>
        </div>
        <div class="intro__properties">
            <div class="intro__slider">
                <sliderUi :slides="slides" :dots="true" />
            </div>
            <div class="intro-properties__info flex">
                <div>
                    <p>до 100 км</p>
                    <p>Запас хода</p>
                </div>
                <div>
                    <p>до 100 км</p>
                    <p>Запас хода</p>
                </div>
                <div>
                    <p>до 100 км</p>
                    <p>Запас хода</p>
                </div>
                <div>
                    <p>до 100 км</p>
                    <p>Запас хода</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .intro {
        margin-top: 100px;
    }

    .intro__content {
        max-width: 540px;
        align-self: flex-end;
    }

    .intro__content p {
        margin-top: 60px;
        max-width: 420px;
    }

    .intro__content button {
        margin-top: 80px;
        max-width: 420px;
    }

    .intro__properties {
        max-width: 630px;
    }

    .intro-properties__info {
        max-width: 500px;
        margin: 25px auto 0;
    }
    
    .intro-properties__info p {
        text-align: center;
    }
    
    .intro-properties__info p:first-child {
        font-weight: 700;
        text-transform: uppercase;
    }
    
    .intro-properties__info p:last-child {
        margin-top: 10px;

        font-size: 12px;
        text-transform: lowercase;
    }

    .intro__slider > div {
        flex-direction: row;

    }

    /* media ---------- */
    @media (max-width: 1024px) {

        .intro__content button, .intro__content p {
            margin-top: 40px;
        }

        .intro__properties {
            max-width: 450px;
        }

    }
    
    @media (max-width: 850px) {
        .intro {
            flex-direction: column-reverse;
        }

        .intro__content {
            margin-top: 40px;
            max-width: 620px;
            align-self: auto;

            text-align: center;
        }

        .intro__content p {
            max-width: 100%;
        }

        .intro__properties {
            max-width: 620px;
        }
    }
    
    @media (max-width: 520px) {
        .intro-properties__info {
            max-width: 380px;
        }
    }
    
</style>