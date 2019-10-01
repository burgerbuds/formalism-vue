<template>
  <div style='height:100vh; display:flex; flex-flow:row wrap; justify-content: center;align-items:center;'>
    <div style='width:100%'>
      <div><Fieldset
        :label="label"
        :required="required"
        :errorMessage="errorMessage"
        :instructionMessage="instructionMessage"
        :isOneLine="isOneLine"
      >
      Dummy content here.
      </Fieldset></div>
      <hr>
      <p>You can embed arbitary content into the slot.</p>
    </div>
  </div>
</template>
<script>
import Fieldset from '@/components/Fieldset.vue';
import { action } from '@storybook/addon-actions';

export default {
  data() {
    return {
    }
  },
  components: {
    Fieldset
  },
  props: [
    'label',
    'required',
    'errorMessage',
    'instructionMessage',
    'isOneLine',
  ],
  methods: {
  }
};
</script>
