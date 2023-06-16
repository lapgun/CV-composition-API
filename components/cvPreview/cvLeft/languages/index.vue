<template>
  <section class="cv__section">
      <h4 class="cv__section-title">{{ $t('languages') }}</h4>
      <ul class="cv__bar">
        <li v-for="lang in languages" :key="`preview${lang.lang}`">
          {{ lang.lang }}
          <div class="cv__bar-level bg-gray-300" :style="{ width: '100%' }">
            <span
              class="cv__bar-level cv__bar-level--in"
              :style="{ width: lang.level }"
            ></span>
          </div>
        </li>
      </ul>
    </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'CvLeft-Languages',
  props: {
    languages: {
      type: Array,
      default: () => [],
    },
  },
});
</script>
