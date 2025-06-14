<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  Position?: 'top-left' |'top-right' | 'bottom-left' | 'bottom-right' ;
}>();

const positionClasses = computed(() => {
  switch (props.Position) {
    case 'top-left':
      return 'top-6 left-6';
    case 'top-right':
      return 'top-6 right-6';
    case 'bottom-left':
      return 'bottom-6 left-6';
    case 'bottom-right':
      return 'bottom-6 right-6';
    default:
      return 'bottom-6 right-6'; // Valor por defecto
  }
});
</script>

<template>
  <button
    :class="[
      'btn',
      'btn-circle',
      'bg-pink-500',
      'hover:bg-pink-600',
      'text-white',
      'fixed',
      'shadow-lg',
      positionClasses // Aquí aplicamos las clases de posición dinámicas
    ]"
  >
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
    </svg>
  </button>
</template>