<template>
  <div style='height:100vh; display:flex; flex-flow:row nowrap; justify-content: center;align-items:center;'>
    <div>
      <div>
        <Select
          :name="name"
          :label="label"
          :required="required"
          :errorMessage="errorMessage"
          :instructionMessage="instructionMessage"
          v-model="modelValue"
          :options="options"
        ></Select>
      </div>
    <hr>
    <div>v-model: {{ modelValue }}</div>
    </div>
  </div>
</template>
<script>
import Select from '@/components/Select.vue';
import { action } from '@storybook/addon-actions';

export default {
  data() {
    return {
      modelValue: null
    }
  },
  components: {
    Select,
  },
  props: [
    'name',
    'label',
    'required',
    'errorMessage',
    'instructionMessage',
    'options',
  ],
  methods: {
  }
};
</script>
