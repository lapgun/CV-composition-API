<template>
  <section class="cv__section">
    <h4 class="cv__section-title">{{ $t('professional-skills') }}</h4>
    <ul class="cv__tags">
      <li
        v-for="skill in jobSkills"
        :key="`preview${skill}`"
        class="cv__tag"
      >
        {{ skill }}
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'CvLeft-Professional',
  props:{
    jobSkills:{
      type: Array,
      default: () => []
    }
  },
});
</script>
