<script setup>
    // imports -----------------
    import {computed, onMounted, onUnmounted, ref} from "vue";
    import {imgsPath} from "@scripts/imgsPath.js";

    // props binding ------------------
    const props = defineProps({
        slides: Array,
        dots: {
            type: Boolean,
            default: false
        }
    });

    // imgs paths ----------------------
    const slidePathes = imgsPath(props.slides);

    // slider logic ---------------------
    let currentIndex = ref(0);
    let interval;

    const startAutoSlide = () => {
        interval = setInterval(() => {
            currentIndex.value = (currentIndex.value + 1) % slidePathes.value.length;
        }, 5000);
    }

    onMounted(startAutoSlide);
    onUnmounted(() => clearInterval(interval));

    // slider dots logic ----------
    const toSlide = (index) => {
        clearInterval(interval);
        currentIndex.value = index;
        startAutoSlide();
    }

</script>

<template>
    <div class="slider flex">
        <div class="slider__container">
            <div
                v-for="(slide, index) in slidePathes"
                :key = index
                class="slide"
                :class="{active: index === currentIndex}"
            >
                <img :src="slide" alt="">
            </div>
        </div> <!-- slider container -->

        <div class="slider__dots" v-if="dots">
            <span
                v-for="(_, index) in slides.length"
                class="slider__dot"
                :class="{active: index === currentIndex}"

                @click="toSlide(index)"
            ></span>
        </div> <!-- slider__dots -->
    </div> <!-- slider -->
</template>

<style scoped>
    .slider {
        flex-direction: row-reverse;
        width: 100%;
    }

    .slider__container {
        display: grid;
        width: 100%;
    }

    .slider__container .slide {
        grid-area: 1 / 1;
        min-width: 100%;

        opacity: 0;

        transition: .2s;
    }

    .slider__container .slide.active {
        opacity: 1;
    }

    .slider__dots {
        display: flex;
        flex-direction: column;

        align-self: flex-start;
        gap: 10px;
    }

    .slider__dot {
        display: block;
        width: 2px;
        height: 25px;

        background: var(--black);
        border-radius: 7px;

        cursor: pointer;

        transition: .3s;
    }

    .slider__dot.active {
        background: var(--red);
    }
</style>




