<template>
  <div style='height:100vh; display:flex; flex-flow:row nowrap; justify-content: center;align-items:center;'>
    <Checkbox
      :name="name"
      :label="label"
      :value="value"
      :required="required"
      :errorMessage="errorMessage"
      :instructionMessage="instructionMessage"
      @blur="handleBlur"
      @input="handlueInput"
    ></Checkbox>
  </div>
</template>
<script>
import Checkbox from '@/components/Checkbox.vue';
import { action } from '@storybook/addon-actions';

export default {
  data() {
    return {
      
    }
  },
  components: {
    Checkbox,
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
