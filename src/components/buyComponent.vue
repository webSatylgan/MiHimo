<script setup>
    import SliderUi from "@components/ui/sliderUi.vue";

    const slides = ["buy-1.png", "buy-2.png", "buy-3.png"];
</script>

<template>
    <div class="buy flex">
        <div class="buy__content">
            <h2>Заказать</h2>
            <p>Если Вы хотите заказать велосипед, оставьте свой контакт и наш менеджер перезвонит вам в ближайшее время</p>
            <form  class="buy__form">
                <input type="text" placeholder="имя">
                <input type="text" placeholder="телефон">
                <p>выберите желаемый цвет</p>
                <div class="buy__form-colors flex">
                    <label>
                        <input type="radio" name="color" value="gray" checked>
                        <span class="buy__form-color buy__color-gray"></span>
                    </label>
                    <label>
                        <input type="radio" name="color" value="white">
                        <span class="buy__form-color buy__color-white"></span>
                    </label>
                    <label>
                        <input type="radio" name="color" value="red">
                        <span class="buy__form-color buy__color-red"></span>
                    </label>
                </div>
                <button>ЗАКАЗАТЬ</button>
            </form>
        </div>
        <div class="buy__review">
            <div class="buy__price">
                <h3>32 999 грн.</h3>
                <svg width="221" height="112" viewBox="0 0 221 112" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M220.5 50C220.5 63.4893 208.393 75.8663 188.429 84.8998C168.511 93.9125 140.959 99.5 110.5 99.5C80.0406 99.5 52.4889 93.9125 32.5708 84.8998C12.6068 75.8663 0.5 63.4893 0.5 50C0.5 36.5107 12.6068 24.1337 32.5708 15.1002C52.4889 6.08749 80.0406 0.5 110.5 0.5C140.959 0.5 168.511 6.08749 188.429 15.1002C208.393 24.1337 220.5 36.5107 220.5 50Z" stroke="#FF4040" />
                    <path d="M220.5 62C220.5 75.4893 208.393 87.8663 188.429 96.8998C168.511 105.913 140.959 111.5 110.5 111.5C80.0406 111.5 52.4889 105.913 32.5708 96.8998C12.6068 87.8663 0.5 75.4893 0.5 62C0.5 48.5107 12.6068 36.1337 32.5708 27.1002C52.4889 18.0875 80.0406 12.5 110.5 12.5C140.959 12.5 168.511 18.0875 188.429 27.1002C208.393 36.1337 220.5 48.5107 220.5 62Z" stroke="#FF4040" />
                </svg>

            </div>
            <div class="buy__slider">
                <sliderUi :slides="slides"  />
            </div>
        </div>
    </div>
</template>

<style scoped>
    .buy {
        gap: 10px;
        margin-top: 50px;
    }

    .buy__content {
        max-width: 420px;
    }

    .buy__content > p {
        max-width: 300px;
        margin-top: 60px;
    }

    .buy__form {
        margin-top: 30px;
    }

    .buy__form > input::placeholder {
        font-weight: 400;
        font-size: 14px;
        line-height: 120%;
        color: var(--gray);
        opacity: .5;
    }

    .buy__form p {
        margin-top: 20px;
        color: var(--gray);
        opacity: .5;
    }
    
    .buy__form-colors {
        max-width: 300px;
        margin-top: 10px;
    }

    .buy__form-colors input {
        display: none;
    }

    .buy__form-color {
        display: block;
        width: 80px;
        height: 12px;
        border-radius: 30px;
    }

    .buy__color-gray {
        background: var(--gray);
    }

    .buy__color-white {
        background: var(--white);
        border: 1px solid var(--gray);
    }

    .buy__color-red {
        background: var(--red);
    }

    .buy__form-colors input:checked + .buy__form-color {
        border: 2px solid var(--black);
    }
    
    .buy__form button {
        margin-top: 50px;
    }

    .buy__review {
        max-width: 710px;
        padding-left: 80px;
        position: relative;
    }

    .buy__price {
        position: absolute;
        left: 0;
        top: 30px;
        z-index: 10;
    }

    .buy__price h3 {
        max-width: 180px;
        font-weight: 400;
        font-size: 32px;
        color: var(--black);
        white-space: nowrap;

        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    /* media -------------- */
    @media (max-width: 850px) {
        .buy {
            flex-direction: column-reverse;
        }
    }

</style>