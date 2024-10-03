<script setup>
defineProps({
  action: {
    type: Function,
    required: true,
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false,
  },
})
</script>

<template>
  <button
    class="the-button"
    :disabled="disabled"
    @click="action"
  >
    <slot />
  </button>
</template>

<style lang="postcss" scoped>
.the-button {
  @apply
    bg-white hover:bg-gray-100 disabled:bg-gray-200
    text-gray-800 font-semibold
    py-2 px-4
    border border-gray-400
    rounded shadow;
}
</style>
