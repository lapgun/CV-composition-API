import { useContext, reactive, toRefs } from '@nuxtjs/composition-api';
import {
  cvSettingsEmptyTemplate,
  cvSettingTemplate,
} from './example-cv-settings';
import { Cv } from '~/types/cvfy';

const state = reactive({
  formSettings: { ...cvSettingsEmptyTemplate } as Cv,
});

export const useCvState = () => {
  const context = useContext();

  const setUpCvSettings = (): void => {
    const locale = `cvSettings-${context.i18n.locale}`;
    const cvSettings = localStorage.getItem(locale);

    if (cvSettings == null) {
      state.formSettings = {
        ...cvSettingTemplate,
      };
    } else {
      const cvSettingsObj = JSON.parse(cvSettings);
      state.formSettings = { ...cvSettingsEmptyTemplate, ...cvSettingsObj };
    }
    localStorage.setItem(locale, JSON.stringify(state.formSettings));
  };

  return {
    ...toRefs(state),
    setUpCvSettings,
  };
};
