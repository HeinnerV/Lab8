<script setup lang="ts">
import { ref } from 'vue';
import FabButton from '@/components/global/FabButton.vue';
import IconAddUser from '@/components/icons/IconAddUser.vue';
import ReusableModal from '@/components/global/ReusableModal.vue'
import { useProjectsStore } from '@/stores/projects';

const projectsStore = useProjectsStore();
const projectName = ref('');
const myModal = ref<InstanceType<typeof ReusableModal> | null>(null)

const openModal = () => {
  myModal.value?.open()
}

function addProject() {
  if (projectName.value.trim()) {
    projectsStore.addProject(projectName.value);
    projectName.value = "";
    myModal.value?.close();
  }
}

// Calcula el porcentaje de tareas completadas para un proyecto
function getCompletedPercent(project: { tasks: any[] }) {
  if (!project.tasks.length) return 0;
  const completed = project.tasks.filter(t => t.completedAt).length;
  return Math.round((completed / project.tasks.length) * 100);
}
</script>
<template>
<div class="overflow-x-auto">
  <table class="table">
    <!-- head -->
    <thead>
      <tr>
        <th>id</th>
        <th>Name</th>
        <th>Completado</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="project in projectsStore.projects" :key="project.id"> 
        <th>{{ project.id }}</th>
        <td>{{ project.name }}</td>
        <td>
          <progress
            class="progress progress-primary w-56"
            :value="getCompletedPercent(project)"
            max="100"
          ></progress>
          <span class="ml-2">{{ getCompletedPercent(project) }}%</span>
        </td>  
      </tr>
    </tbody>
    <tfoot>
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>Completado</th>
          <th></th>
        </tr>
      </tfoot>
  </table>
</div>
<FabButton position="bottom-left" @click="openModal">
    <IconAddUser />
</FabButton>         

<ReusableModal ref="myModal">
  <template #title>
    Agregar usuario
  </template>

  <template #content>
    <div class="form-control mb-4">
      <label class="label">Projecto</label>
      <input @keyup.enter="addProject" v-model="projectName" type="text" class="input input-bordered w-full" placeholder="Escribe el nombre" />
    </div>
  </template>

  <template #actions>
    <form method="dialog">
      <button class="btn btn-outline" @click="myModal?.close()">Cancelar</button>
    </form>
    <button @click="addProject" class="btn btn-primary">Aceptar</button>
  </template>
</ReusableModal>
</template>
