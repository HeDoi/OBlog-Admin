<template>
  <span>{{ title }}</span>
</template>

<script setup>
import { defineProps } from 'vue'
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<style lang="scss" scoped>
</style>
