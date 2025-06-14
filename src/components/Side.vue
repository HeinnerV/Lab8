<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useProjectsStore } from '@/stores/projects'
import { RouterLink } from 'vue-router'

const projectsStore = useProjectsStore()
const { projects } = storeToRefs(projectsStore)
</script>

<template>
  <ul class="menu bg-base-200 rounded-box w-56">
    <li class="menu-title">Proyectos</li>

    <template v-if="projects.length">
      <li v-for="project in projects" :key="project.id">
        <details v-if="project.tasks.length">
          <summary>
            <router-link
              :to="{ name: 'ProjectTasks', params: { id: project.id } }"
              class="text-blue-600 hover:underline"
              @click.stop>
              {{ project.name }}
            </router-link>
          </summary>
          <ul>
            <li v-for="task in project.tasks" :key="task.id">
              <a>{{ task.name }}</a>
            </li>
          </ul>
        </details>
        <template v-else>
          <router-link
            :to="{ name: 'ProjectTasks', params: { id: project.id } }"
            class="text-blue-600 hover:underline"
          >
            {{ project.name }}
          </router-link>
        </template>
      </li>
    </template>

    <template v-else>
      <li class="text-center italic text-sm text-gray-500 px-4 py-2">No hay proyectos</li>
    </template>
  </ul>
</template>