<template>
  <div>
    <h1>Hello World</h1>
    <h1 @click="inc">{{ count }}</h1>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const count = ref(0)

const inc = () => {
  count.value++
}
</script>

<style></style>
