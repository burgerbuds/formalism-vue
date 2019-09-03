<template>
  <div style='height:100vh; display:flex; flex-flow:row nowrap; justify-content: center;align-items:center;'>
    <Textarea
      :name="name"
      :label="label"
      :value="value"
      :required="required"
      :errorMessage="errorMessage"
      :instructionMessage="instructionMessage"
      @blur="handleBlur"
      @input="handlueInput"
    ></Textarea>
  </div>
</template>
<script>
import Textarea from '@/components/Textarea.vue';
import { action } from '@storybook/addon-actions';

export default {
  data() {
    return {
      
    }
  },
  components: {
    Textarea,
  },
  props: [
    'name',
    'label',
    'value',
    'required',
    'errorMessage',
    'instructionMessage',
  ],
  methods: {
    handleBlur: action('blur'),
    handlueInput: action('input')
  }
};
</script>
