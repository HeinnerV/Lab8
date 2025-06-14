<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useProjectsStore } from '@/stores/projects';

const route = useRoute();
const projectsStore = useProjectsStore();


const project = computed(() =>
  projectsStore.projects.find(p => p.id === route.params.id)
);

const newTaskName = ref('');

function addTask() {
  if (project.value && newTaskName.value.trim()) {
    project.value.tasks.push({
      id: Date.now().toString(),
      name: newTaskName.value,
    });
    newTaskName.value = '';
  }
}

function toggleTaskCompleted(task: any) {
  if (task.completedAt) {
    task.completedAt = undefined;
  } else {
    task.completedAt = new Date();
  }
}

function formatDate(date: Date) {
  if (!date) return '';
  return new Date(date).toLocaleString();
}
</script>

<template>
  <div v-if="project">
    <h2 class="text-2xl font-bold mb-4">Tareas de {{ project.name }}</h2>
    <div class="overflow-x-auto">
      <table class="table">
        <thead>
          <tr>
            <th>id</th>
            <th>Nombre</th>
            <th>Completado</th>
            <th>Fecha completado</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="task in project.tasks" :key="task.id">
            <td>{{ task.id }}</td>
            <td>{{ task.name }}</td>
            <td>
              <input
                type="checkbox"
                :checked="!!task.completedAt"
                @change="toggleTaskCompleted(task)"
              />
            </td>
            <td>
              <span v-if="task.completedAt">{{ formatDate(task.completedAt) }}</span>
            </td>
          </tr>
         
          <tr>
            <td></td>
            <td>
              <input
                v-model="newTaskName"
                @keyup.enter="addTask"type="text"class="input input-bordered w-full"placeholder="Nueva tarea"
              />
            </td>
            <td>
              <button class="btn btn-primary" @click="addTask">Añadir</button>
            </td>
            <td></td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th>id</th>
            <th>Nombre</th>
            <th>Completado</th>
            <th>Fecha completado</th>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
  <div v-else>
    <p>Proyecto no encontrado.</p>
  </div>
</template>