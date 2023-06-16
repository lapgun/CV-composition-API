<template>
  <div class="cv__side w-1/3">
    <!-- INFO -->
    <cv-left-info :name="name" :lastName="lastName" :jobTitle="jobTitle" />
    <!-- // INFO -->
    <!-- CONTACT -->
    <cv-left-contact
      :email="email"
      :phone="phoneNumber"
      :location="location"
      :phoneNumberHref="phoneNumberHref"
      :emailHref="emailHref"
    />
    <!-- //CONTACT -->
    <!-- PROFESIONAL SKILLS -->
    <cv-left-professional :jobSkills="jobSkills" />
    <!-- //PROFESIONAL SKILLS -->
    <!-- SOFT SKILLS -->
    <cv-left-soft :softSkills="softSkills" />
    <!-- // SOFT SKILLS -->
    <!-- LANGUAGES -->
    <cv-left-languages :languages="languages" />
    <!-- // LANGUAGES -->
    <!-- SOCIAL -->
    <cv-left-social
      :linkedin="linkedin"
      :twitter="twitter"
      :github="github"
      :website="website"
    />
    <!-- // SOCIAL -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { useCvState } from '~/data/useCvState';
import CvLeftContact from '../cvLeft/contact/index.vue';
import CvLeftProfessional from '../cvLeft/professional/index.vue';
import CvLeftSoft from '../cvLeft/soft-skill/index.vue';
import CvLeftLanguages from '../cvLeft/languages/index.vue';
import CvLeftSocial from '../cvLeft/social/index.vue';
import CvLeftInfo from '../cvLeft/info/index.vue';
import { computed } from '@vue/composition-api';

export default Vue.extend({
  name: 'CvLeft',
  components: {
    CvLeftContact,
    CvLeftProfessional,
    CvLeftSoft,
    CvLeftLanguages,
    CvLeftSocial,
    CvLeftInfo,
  },
  setup() {
    const { formSettings } = useCvState();

    const name = computed(() => formSettings.value.name);
    const lastName = computed(() => formSettings.value.lastName);
    const jobTitle = computed(() => formSettings.value.jobTitle);
    const email = computed(() => formSettings.value.email);
    const phoneNumber = computed(() => formSettings.value.phoneNumber);
    const phoneNumberHref = computed(() => `tel:${phoneNumber}`);
    const emailHref = computed(() => `mailto:${email}`);
    const location = computed(() => formSettings.value.location);
    const jobSkills = computed(() => formSettings.value.jobSkills);
    const softSkills = computed(() => formSettings.value.softSkills);
    const languages = computed(() => formSettings.value.languages);
    const linkedin = computed(() => formSettings.value.linkedin);
    const twitter = computed(() => formSettings.value.twitter);
    const github = computed(() => formSettings.value.github);
    const website = computed(() => formSettings.value.website);

    return {
      formSettings,
      name,
      jobTitle,
      lastName,
      email,
      phoneNumber,
      location,
      jobSkills,
      softSkills,
      languages,
      linkedin,
      twitter,
      github,
      website,
      emailHref,
      phoneNumberHref,
    };
  },
});
</script>
