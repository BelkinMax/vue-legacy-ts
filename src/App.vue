<script setup>
import { ref } from 'vue';
import TheButton from '@/components/TheButton.vue';

const counter = ref(0)

function onClick() {
  counter.value++
}
</script>

<template>
  <div id="app" class="w-full min-h-screen p-4 flex justify-center items-center">
    <TheButton :action="onClick">
      Button clicked {{ counter }} times
    </TheButton>
  </div>
</template>
