<template>
  <div style='height:100vh; display:flex; flex-flow:row nowrap; justify-content: center;align-items:center;'>
    <div>
      <div>
        <Textarea
          :name="name"
          :label="label"
          :required="required"
          :errorMessage="errorMessage"
          :instructionMessage="instructionMessage"
          v-model="modelValue"
        ></Textarea>
      </div>
      <hr>
      <div>v-model: {{ modelValue }}</div>
    </div>
  </div>
</template>
<script>
import Textarea from '@/components/Textarea.vue';
import { action } from '@storybook/addon-actions';

export default {
  data() {
    return {
      modelValue: "Foo"
    }
  },
  components: {
    Textarea,
  },
  props: [
    'name',
    'label',
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
