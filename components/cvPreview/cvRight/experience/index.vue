<template>
  <section class="cv__section cv__section--main w-full">
    <h4 class="cv__section-title cv__section-title--main">
      {{ $t('experience') }}
    </h4>
    <ul class="cv__event mt-3">
      <li v-for="job in work" :key="job.title" class="cv__event-elem">
        <h5 class="cv__section-title cv__section-title--sm">
          {{ job.title }}
        </h5>
        <div>
          <span>{{ job.location }} | </span>
          <span>
            {{ formatDate(job.from) }} -
            <template v-if="job.current">{{ $t('current') }}</template>
            <template v-else>{{ formatDate(job.to) }}</template>
          </span>
        </div>
        <ul v-if="job.summaryArr.length > 1" class="cv__list">
          <li v-for="(line, index) in job.summaryArr" :key="index">
            {{ line }}
          </li>
        </ul>
        <p v-else class="font-light">
          {{ job.summaryArr[0] }}
        </p>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'CvRight-Experience',
  props: {
    work: {
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
