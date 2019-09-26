<template>
  <div style='height:100vh; display:flex; flex-flow:row nowrap; justify-content: center;align-items:center;'>
    <div>
      <div>
        <TextInput
          :name="name"
          :label="label"
          :required="required"
          :errorMessage="errorMessage"
          :theme="theme"
          :instructionMessage="instructionMessage"
          v-model="modelValue"
        ></TextInput>
      </div>
      <hr>
      <div>v-model: {{ modelValue }}</div>
    </div>
  </div>
</template>
<script>
import TextInput from '@/components/TextInput.vue';
import { action } from '@storybook/addon-actions';

export default {
  data() {
    return {
      modelValue: "Bar"
    }
  },
  components: {
    TextInput,
  },
  props: [
    'name',
    'label',
    'required',
    'errorMessage',
    'theme',
    'instructionMessage',
  ],
  methods: {
    
  }
};
</script>
