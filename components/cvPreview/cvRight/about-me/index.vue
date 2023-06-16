<template>
  <section class="cv__section cv__section--main w-full">
    <h4 class="cv__section-title cv__section-title--main">
      {{ $t('about-me') }}
    </h4>
    <p class="font-light">
      <!-- Avoids unnecessary spaces at the begging while still allowing break lines -->
      <span class="whitespace-pre-wrap">{{ aboutme }}</span>
    </p>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'CvRight-About',
  props: {
    aboutme: {
      type: String,
      default: '',
    },
  },
});
</script>
