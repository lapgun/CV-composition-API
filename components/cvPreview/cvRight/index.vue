<template>
  <div class="cv__main w-2/3">
    <!-- ABOUT ME -->
    <cv-right-about-me :aboutme="aboutme" />
    <!-- // ABOUT ME -->

    <hr class="cv__bar" />

    <!-- EXPERIENCE -->
    <cv-right-experience :work="work" :formatDate="formatDate" />
    <!-- // EXPERIENCE -->

    <hr v-if="displayEducation" class="cv__bar" />

    <!-- EDUCATION -->
    <cv-right-education
      :displayEducation="displayEducation"
      :education="education"
      :formatDate="formatDate"
    />
    <!-- // EDUCATION -->

    <hr v-if="displayProjects" class="cv__bar" />

    <!-- PROJECTS -->
    <cv-right-project
      :displayProjects="displayProjects"
      :projects="projects"
      :formatDate="formatDate"
    />
    <!-- // PROJECTS -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { useContext, computed } from '@nuxtjs/composition-api';
import { useCvState } from '~/data/useCvState';
import { CvEvent } from '~/types/cvfy';
import CvRightAboutMe from '../cvRight/about-me/index.vue';
import CvRightExperience from '../cvRight/experience/index.vue';
import CvRightEducation from '../cvRight/education/index.vue';
import CvRightProject from '../cvRight/project/index.vue';

export default Vue.extend({
  name: 'CvRight',
  components: {
    CvRightAboutMe,
    CvRightExperience,
    CvRightEducation,
    CvRightProject,
  },
  setup() {
    const { formSettings } = useCvState();
    const context = useContext();

    const education = computed(() => orderEvents(formSettings.value.education));
    const work = computed(() => orderEvents(formSettings.value.work));
    const projects = computed(() => orderEvents(formSettings.value.projects));
    const aboutme = computed(() => formSettings.value.aboutme);
    const displayProjects = computed(() => formSettings.value.displayProjects);
    const displayEducation = computed(
      () => formSettings.value.displayEducation
    );

    const orderEvents = (arr: CvEvent[]): CvEvent[] => {
      return arr
        .map((event) => {
          event.summaryArr = getSummaryLines(event.summary);
          return event;
        })
        .sort(
          (a, b) => new Date(b.from).getTime() - new Date(a.from).getTime()
        );
    };

    const getSummaryLines = (summary: string): string[] => {
      const lines = summary.split('\n').map((line) => {
        if (line[0] === '-') {
          line = line.slice(1).trim();
        }
        return line;
      });
      return lines;
    };

    const formatDate = (date: Date): string => {
      const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'short',
      };
      const dateObj = new Date(date);
      return dateObj.toLocaleDateString(context.app.i18n.locale, options);
    };

    return {
      formatDate,
      formSettings,
      education,
      work,
      projects,
      aboutme,
      displayEducation,
      displayProjects,
    };
  },
});
</script>
