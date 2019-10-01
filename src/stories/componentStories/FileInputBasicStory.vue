<template>
  <div style='height:100vh; display:flex; flex-flow:row nowrap; justify-content: center;align-items:center;'>
    <div>
      <div>
        <FileInput
          :name="name"
          :label="label"
          :required="required"
          :errorMessage="errorMessage"
          :theme="theme"
          :instructionMessage="instructionMessage"
          :multiple="isMultiple"
        ></FileInput>
      </div>
    </div>
  </div>
</template>
<script>
import FileInput from '@/components/FileInput.vue';
import { action } from '@storybook/addon-actions';

export default {
  data() {
    return {
    }
  },
  components: {
    FileInput,
  },
  props: [
    'name',
    'label',
    'required',
    'errorMessage',
    'theme',
    'instructionMessage',
    'isMultiple'
  ],
  methods: {
    
  }
};
</script>
