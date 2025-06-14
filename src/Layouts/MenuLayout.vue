<script setup lang="ts">
import FabButton from '@/components/global/FabButton.vue';
import Side from '@/components/Side.vue';
import Top from '@/components/Top.vue';
</script>

<template>
  
  <div class="flex flex-col h-screen">
   <Top/>
    
    <!-- Fin Header -->

    <!-- Main con Sidebar -->
    <div class="flex flex-1">
      <!-- Sidebar -->
      <Side/>
      <!-- Fin Sidebar -->

      <!-- Contenido Principal -->
      <main class="flex-1 p-6 overflow-auto">

        <RouterView />

        
      </main>
    </div>
    <!-- Fin Main con Sidebar -->
  </div>
</template>
