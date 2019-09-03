<template>
  <div style='height:100vh; display:flex; flex-flow:row nowrap; justify-content: center;align-items:center;'>
    <TextInput
      :name="name"
      :label="label"
      :value="value"
      :required="required"
      :errorMessage="errorMessage"
      :theme="theme"
      :instructionMessage="instructionMessage"
      @blur="handleBlur"
      @input="handlueInput"
    ></TextInput>
  </div>
</template>
<script>
import TextInput from '@/components/TextInput.vue';
import { action } from '@storybook/addon-actions';

export default {
  data() {
    return {
      
    }
  },
  components: {
    TextInput,
  },
  props: [
    'name',
    'label',
    'value',
    'required',
    'errorMessage',
    'theme',
    'instructionMessage',
  ],
  methods: {
    handleBlur: action('blur'),
    handlueInput: action('input')
  }
};
</script>
