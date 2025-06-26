<script setup lang="ts">
import type { Component } from 'vue'
import { defineAsyncComponent } from 'vue'

const comps = Object.entries(import.meta.glob<Component>('../components/**/docs/*.demo.vue'))
  .map(([path, loader]) => {
    return {
      path,
      comp: defineAsyncComponent({ loader }),
    }
  })
</script>

<template>
  <component :is="comp" v-for="{ comp, path } in comps" :key="path" />
</template>
