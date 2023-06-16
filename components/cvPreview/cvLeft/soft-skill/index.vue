<template>
  <section class="cv__section">
    <h4 class="cv__section-title">{{ $t('soft-skills') }}</h4>
    <ul class="cv__list">
      <li v-for="skill in softSkills" :key="`preview${skill}`">
        {{ skill }}
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'CvLeft-Soft',
  props: {
    softSkills: {
      type: Array,
      default: () => [],
    },
  },
});
</script>
