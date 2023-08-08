<script setup>
    import HelloWorld from "./components/HelloWorld.vue";
    import { moneyToFixed } from "./utils/money";
    import { ref, onMounted } from "vue";
    const isHell = ref(true);
    const money = ref(100);

    onMounted(() => {
        console.log("onMounted");
        addEventListener("scroll", (e) => {
            if (window.scrollY > 100) {
                isHell.value = false;
            } else {
                isHell.value = true;
            }
        });
    });
</script>

<template>
    <!-- v-if or v-show or opacity There will be bugs -->
    <HelloWorld msg="Vite + Vue" :class="{ opic: isHell }" />
    <div class="full">
        <div>金额:{{ moneyToFixed(money) }}</div>
    </div>
</template>

<style scoped>
    .full {
        height: 3000px;
    }
    .opic {
        opacity: 0;
    }
</style>
