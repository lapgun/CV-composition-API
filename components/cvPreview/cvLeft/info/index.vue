<template>
  <Fragment>
    <h2 class="cv__name">{{ name }} {{ lastName }}</h2>
    <h3 class="cv__job-title">{{ jobTitle }}</h3>
  </Fragment>
</template>

<script lang="ts">
import Vue from 'vue';
import { Fragment } from 'vue-fragment';

export default Vue.extend({
  name: 'CvLeft-Info',
  components: { Fragment },
  props: {
    name: {
      type: String,
      default: '',
    },
    lastName: {
      type: String,
      default: '',
    },
    jobTitle: {
      type: String,
      default: '',
    },
  },
});
</script>
