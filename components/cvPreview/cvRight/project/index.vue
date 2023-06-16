<template>
  <section
      v-if="displayProjects"
      class="cv__section cv__section--main w-full"
    >
      <h4 class="cv__section-title cv__section-title--main">
        {{ $t('projects') }}
      </h4>
      <ul class="cv__event mt-3">
        <li
          v-for="project in projects"
          :key="project.title"
          class="cv__event-elem"
        >
          <h5 class="cv__section-title cv__section-title--sm">
            {{ project.title }}
          </h5>
          <div>
            <span>{{ project.location }} | </span>
            <span>
              {{ formatDate(project.from) }} -
              <template v-if="project.current">
                {{ $t('current') }}
              </template>
              <template v-else>{{ formatDate(project.to) }}</template>
            </span>
          </div>
          <ul v-if="project.summaryArr.length > 1" class="cv__list">
            <li v-for="(line, index) in project.summaryArr" :key="index">
              {{ line }}
            </li>
          </ul>
          <p v-else class="font-light">
            {{ project.summaryArr[0] }}
          </p>
        </li>
      </ul>
    </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'CvRight-Project',
  props: {
    displayProjects: {
      type: Boolean,
      default: false,
    },
    projects: {
      type: Array,
      default: () => [],
    },
    formatDate: {
      type: Function,
      default: () => {},
    },
  },
});
</script>
