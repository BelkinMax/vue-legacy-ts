<script lang="ts" setup>
import { ref } from 'vue';
import { CompositionButton, SetupButton } from '@/components/TheButton';

const counter = ref(0);

function onClick() {
  counter.value++;
}
function onReset() {
  counter.value = 0;
}
</script>

<template>
  <div id="app" class="app-container">
    <CompositionButton :action="onClick" :disabled="counter === 10">
      Composition button counter {{ counter }}
    </CompositionButton>

    <SetupButton :action="onReset" :disabled="counter === 0">
      Setup button reset
    </SetupButton>
  </div>
</template>

<style lang="postcss">
.app-container {
  @apply
    w-full min-h-screen p-4
    flex justify-center items-center gap-4;
}
</style>
