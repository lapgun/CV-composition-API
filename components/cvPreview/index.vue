<template>
  <div id="cv" class="font-normal flex justify-center w-screen bg-white">
    <div
      id="credit"
      class="p-3 text-gray-700 absolute bottom-0 text-center w-full text-xs"
    >
      Custom with ♥️ by
      <a
        class="underline"
        :style="{ color: 'var(--green-darker)' }"
        href="https://github.com/claudiabdm"
        rel="noopener"
        target="_blank"
        >Phạm Hữu Lập</a
      >
    </div>
    <div tabindex="0" aria-label="CV preview" :class="['cv', 'bg-white']">
      <cv-left />
      <cv-right />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import CvLeft from '@/components/cvPreview/cvLeft/index.vue';
import CvRight from '@/components/cvPreview/cvRight/index.vue';
import { onMounted } from '@nuxtjs/composition-api';
import { useCvState } from '~/data/useCvState';

export default Vue.extend({
  name: 'CvPreview',
  components: { CvLeft, CvRight },
  setup() {
    const { setUpCvSettings } = useCvState();
    onMounted(setUpCvSettings);
  },
});
</script>
