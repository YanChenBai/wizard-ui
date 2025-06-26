<script setup lang="ts">
import type { CompSize, CompType } from '@wizard-ui/preset'
import type { PropType } from 'vue'
import { compSize, compType } from '../common/constants'

defineProps({
  size: {
    type: String as PropType<CompSize>,
    default: 'xl',
    validator: (value: string) => value in compSize,
  },
  type: {
    type: String as PropType<CompType>,
    required: false,
  },
})
</script>

<template>
  <button
    :class="[
      compSize[size],
      type ? compType[type] : null,
    ]"
    class="rd-2xl btn"
  >
    <slot />
  </button>
</template>
