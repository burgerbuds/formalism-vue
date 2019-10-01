import Checkbox from '@/components/Checkbox.vue';
import Select from '@/components/Select.vue';
import Textarea from '@/components/Textarea.vue';
import TextInput from '@/components/TextInput.vue';
import Checkboxes from '@/components/Checkboxes.vue';
import Fieldset from '@/components/Fieldset.vue';

const defaultOptions = {
  'componentPrefix': 'F-'
}

const FormalismVue = {
  install(Vue, options) {
    options = {...defaultOptions, ...options};

    const componentsList = [
      ['Checkbox', Checkbox],
      ['Select', Select],
      ['Textarea', Textarea],
      ['TextInput', TextInput],
      ['Checkboxes', Checkboxes],
      ['Fieldset', Fieldset],
    ]

    componentsList.forEach(([name, comp]) => {
      Vue.component(`${options.componentPrefix}${name}`, comp);
    })
  }
}

export default FormalismVue;