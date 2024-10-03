<script setup>
import { ref } from 'vue';
import { CompositionButton, SetupButton } from '@/components/TheButton';

const counter = ref(0)

function onClick() {
  counter.value++
}
</script>

<template>
  <div id="app" class="app-container">
    <CompositionButton :action="onClick">
      Composition button
    </CompositionButton>

    <SetupButton :action="onClick">
      Setup button
    </SetupButton>

    <p class="text-lg">{{ counter }}</p>
  </div>
</template>

<style lang="postcss">
.app-container {
  @apply
    w-full min-h-screen p-4
    flex justify-center items-center gap-4;
}
</style>
