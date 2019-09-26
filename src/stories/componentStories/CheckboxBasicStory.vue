<template>
  <div style='height:100vh; display:flex; flex-flow:row wrap; justify-content: center;align-items:center;'>
    <div>
      <div><Checkbox
        :name="name"
        :label="label"
        :value="value"
        :required="required"
        v-model="modelValue"
        :errorMessage="errorMessage"
        :instructionMessage="instructionMessage"
        :trueValue="trueValue"
        :falseValue="falseValue"
      ></Checkbox></div>
      <hr>
      <div>v-model: {{ modelValue }}</div>
    </div>
    
  </div>
</template>
<script>
import Checkbox from '@/components/Checkbox.vue';
import { action } from '@storybook/addon-actions';

export default {
  data() {
    return {
      modelValue: 'yes'
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
    'trueValue',
    'falseValue',
  ],
  methods: {
  }
};
</script>
