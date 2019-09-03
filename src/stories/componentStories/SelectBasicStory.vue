<template>
  <div style='height:100vh; display:flex; flex-flow:row nowrap; justify-content: center;align-items:center;'>
    <Select
      :name="name"
      :label="label"
      :value="value"
      :required="required"
      :errorMessage="errorMessage"
      :instructionMessage="instructionMessage"
      :options="options"
      @blur="handleBlur"
      @input="handlueInput"
    ></Select>
  </div>
</template>
<script>
import Select from '@/components/Select.vue';
import { action } from '@storybook/addon-actions';

export default {
  data() {
    return {
      
    }
  },
  components: {
    Select,
  },
  props: [
    'name',
    'label',
    'value',
    'required',
    'errorMessage',
    'instructionMessage',
    'options',
  ],
  methods: {
    handleBlur: action('blur'),
    handlueInput: action('input')
  }
};
</script>
