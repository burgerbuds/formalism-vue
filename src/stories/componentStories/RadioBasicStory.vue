<template>
  <div style='height:100vh; display:flex; flex-flow:row wrap; justify-content: center;align-items:center;'>
    <div style='width:100%'>
      <div><Radio
        :name="name"
        :label="label"
        :required="required"
        v-model="modelValue"
        :errorMessage="errorMessage"
        :instructionMessage="instructionMessage"
        :options="options"
        :isOneLine="isOneLine"
      ></Radio></div>
      <hr>
      <div>v-model: {{ modelValue }}</div>
    </div>
    
  </div>
</template>
<script>
import Radio from '@/components/Radio.vue';
import { action } from '@storybook/addon-actions';

export default {
  data() {
    return {
      modelValue: null
    }
  },
  components: {
    Radio,
  },
  props: [
    'name',
    'label',
    'required',
    'errorMessage',
    'instructionMessage',
    'options',
    'isOneLine',
  ],
  methods: {
  }
};
</script>
