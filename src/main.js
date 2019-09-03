import Checkbox from '@/components/Checkbox.vue';
import Select from '@/components/Select.vue';
import Textarea from '@/components/Textarea.vue';
import TextInput from '@/components/TextInput.vue';

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
    ]

    componentsList.forEach(([name, comp]) => {
      Vue.component(`${options.componentPrefix}${name}`, comp);
    })
  }
}

export default FormalismVue;