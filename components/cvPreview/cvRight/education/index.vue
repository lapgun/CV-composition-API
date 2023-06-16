<template>
  <section v-if="displayEducation" class="cv__section cv__section--main w-full">
    <h4 class="cv__section-title cv__section-title--main">
      {{ $t('education') }}
    </h4>
    <ul class="cv__event mt-3">
      <li v-for="edu in education" :key="edu.title" class="cv__event-elem">
        <h5 class="cv__section-title cv__section-title--sm">
          {{ edu.title }}
        </h5>
        <div>
          <span>{{ edu.location }} | </span>
          <span>
            {{ formatDate(edu.from) }} -
            <template v-if="edu.current">{{ $t('current') }}</template>
            <template v-else>{{ formatDate(edu.to) }}</template>
          </span>
        </div>
        <ul v-if="edu.summaryArr.length > 1" class="cv__list">
          <li v-for="(line, index) in edu.summaryArr" :key="index">
            {{ line }}
          </li>
        </ul>
        <p v-else class="font-light">
          {{ edu.summaryArr[0] }}
        </p>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'CvRight-Education',
  props: {
    displayEducation: {
      type: Boolean,
      default: false,
    },
    education: {
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
