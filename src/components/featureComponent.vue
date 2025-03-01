<script setup>

</script>

<template>
<div class="feature">
    <h2>ХАрактеристики</h2>
    <div class="feature__container flex">
        <div class="feature__content">
            <div class="feature__content-item">
                <h3>Общие</h3>
                <dl>
                    <dt>Производитель</dt>
                    <dd>Xiaomi</dd>

                    <dt>Вид</dt>
                    <dd>взрослый, дорожный, городской, электровелосипед, алюминиевая рама</dd>

                    <dt>Колеса</dt>
                    <dd>26, двойной алюминиевый обод</dd>

                    <dt>Электропривод</dt>
                    <dd>мотор 250W, разгон до 25 км/ч</dd>
                </dl>
            </div>
            <div class="feature__content-item">
                <h3>амортизация</h3>
                <dl>
                    <dt>Тип амортизации</dt>
                    <dd>амортизирующая вилка (Hard tail)</dd>

                    <dt>Вилка</dt>
                    <dd>пружинно-эластомерная</dd>
                </dl>
            </div>
            <div class="feature__content-item">
                <h3>управление</h3>
                <dl>
                    <dt>Руль</dt>
                    <dd>изогнутый, регулируемый подъем</dd>

                    <dt>Манетки</dt>
                    <dd>триггерные однорычажные, Shimano</dd>
                </dl>
            </div>
            <div class="feature__content-item">
                <h3>характеристика трансмиссии</h3>
                <dl>
                    <dt>Количество скоростей</dt>
                    <dd>7</dd>

                    <dt>Педали</dt>
                    <dd>классические</dd>

                    <dt>Передний переключатель</dt>
                    <dd>1 звезда</dd>

                    <dt>Задний переключатель</dt>
                    <dd>Shimano Tourney (прогулочный)</dd>

                    <dt>Кассета</dt>
                    <dd>7 звезд</dd>
                </dl>
            </div>
            <div class="feature__content-item">
                <h3>тормоза</h3>
                <dl>
                    <dt>Передний</dt>
                    <dd>дисковый механический</dd>

                    <dt>Задний</dt>
                    <dd>дисковый механический</dd>

                    <dt>Готовность к установке дисковых</dt>
                    <dd>рама, вилка, втулка </dd>
                </dl>
            </div>
            <div class="feature__content-item">
                <h3>прочее</h3>
                <dl>
                    <dt>Оснащение</dt>
                    <dd>электрооборудование, звонок</dd>

                    <dt>Вес</dt>
                    <dd>25 кг</dd>
                </dl>
            </div>
        </div>
        <img src="@assets/imgs/feature.png" alt="">
    </div>
</div>
</template>

<style scoped>
    .feature {
        margin-top: 150px;
    }

    .feature__container img {
        max-width: 570px;
    }

    .feature__content {
        max-width: 570px;
        width: 100%;
        margin-top: 40px;
    }

    .feature__content-item {
        margin-top: 30px;
    }

    .feature__content-item:first-child {
        margin-top: 0;
    }

    .feature__content-item h3 {
        background: var(--black);

        font-weight: 700;
        font-size: 14px;
        text-transform: uppercase;
        color: var(--white);
    }

    .feature__content-item dl, .feature__content-item dt {
        font-weight: 400;
        font-size: 14px;
        line-height: 120%;
        color: var(--black);
    }

    .feature__content-item dl {
        display: grid;
        grid-template-columns: 1fr minmax(150px, 285px);
        grid-gap: 10px;

        margin-top: 10px;
    }

    /* media -------------------- */
    @media (max-width: 850px) {
        .feature h2 {
            text-align: center;
        }

        .feature__container {
            flex-direction: column-reverse;
        }
    }

</style>