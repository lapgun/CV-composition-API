<template>
  <section class="cv__section">
    <h4 class="cv__section-title">{{ $t('contact') }}</h4>
    <div class="flex flex-col">
      <div v-if="phone" class="cv__icon-wrapper">
        <svg class="cv__icon">
          <use href="@/assets/sprite.svg#phone"></use>
        </svg>
        <a :href="phoneNumberHref" rel="noopener">
          {{ phone }}
        </a>
      </div>
      <div v-if="email" class="cv__icon-wrapper">
        <svg class="cv__icon">
          <use href="@/assets/sprite.svg#email"></use>
        </svg>
        <a :href="emailHref" rel="noopener">{{ email }}</a>
      </div>
      <div v-if="location" class="cv__icon-wrapper">
        <svg class="cv__icon">
          <use href="@/assets/sprite.svg#location"></use>
        </svg>
        <span tabindex="0">{{ location }}</span>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'CvLeft-Contact',
  props: {
    email: {
      type: String,
      default: '',
    },
    phone: {
      type: String,
      default: '',
    },
    location: {
      type: String,
      default: '',
    },
    phoneNumberHref: {
      type: String,
      default: '',
    },
    emailHref: {
      type: String,
      default: '',
    },
  },
});
</script>
