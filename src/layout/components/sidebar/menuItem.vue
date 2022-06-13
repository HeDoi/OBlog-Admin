<template>
  <span>{{ generateTitle(title) }}</span>
</template>

<script setup>
import { generateTitle } from '@/i18n'
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<style lang="scss" scoped>
</style>
