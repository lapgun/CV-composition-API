<template>
  <section class="cv__section">
    <h4 class="cv__section-title">{{ $t('social') }}</h4>
    <div class="flex flex-col">
      <div v-if="linkedin" class="cv__icon-wrapper">
        <svg class="cv__icon">
          <use href="@/assets/sprite.svg#linkedin-color"></use>
        </svg>
        <a
          target="_blank"
          rel="noopener"
          :href="`https://linkedin.com/in/${linkedin}`"
        >
          {{ `linkedin.com/in/${linkedin}` }}
        </a>
      </div>
      <div v-if="twitter" class="cv__icon-wrapper">
        <svg class="cv__icon">
          <use href="@/assets/sprite.svg#twitter-color"></use>
        </svg>
        <a
          target="_blank"
          rel="noopener"
          :href="`https://twitter.com/${twitter}`"
        >
          {{ `twitter.com/${twitter}` }}
        </a>
      </div>
      <div v-if="github" class="cv__icon-wrapper">
        <svg class="cv__icon">
          <use href="@/assets/sprite.svg#github-color"></use>
        </svg>
        <a
          target="_blank"
          rel="noopener"
          :href="`https://github.com/${github}`"
        >
          {{ `github.com/${github}` }}
        </a>
      </div>
      <div v-if="website" class="cv__icon-wrapper">
        <svg class="cv__icon">
          <use href="@/assets/sprite.svg#website"></use>
        </svg>
        <a target="_blank" rel="noopener" :href="website">
          {{ website }}
        </a>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'CvLeft-Social',
  props: {
    linkedin: {
      type: String,
      default: '',
    },
    twitter: {
      type: String,
      default: '',
    },
    github: {
      type: String,
      default: '',
    },
    website: {
      type: String,
      default: '',
    },
  },
});
</script>
