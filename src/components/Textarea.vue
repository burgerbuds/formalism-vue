<template>
    <div class="f-textarea f-textarea--outlined" :class="containerClass">
        <label class="f-textarea__inner">
            <textarea class="f-textarea__field" v-model="internalValue" v-on="listeners" :name="name" :required="required"/>
            <span class="f-textarea__label"><span class="f-textarea__label-text" v-html="label"></span></span>
            <span class="f-textarea__indicator f-textarea__indicator--required" aria-hidden="true" v-if='required'>*</span>
        </label>
        <div class="f-textarea__message f-textarea__message--error" v-if="errorMessage" v-html="errorMessage">
        </div>
        <div class="f-textarea__message f-textarea__message--instruction" v-if="instructionMessage" v-html="instructionMessage">
        </div>
    </div>
</template>

<script>
  import Mixins from '../mixins';
  export default {
    name: "Textarea",
    mixins: [
      Mixins.formElementShared
    ],
    data() {
      return {

      }
    },
    model: {
      prop: 'value',
      event: 'input'
    },
    computed: {
      listeners() {
        const vm = this;
        return {
          ...this.$listeners,
          input($event) {
            vm.$emit('input', $event.target.value);
          }
        }
      }
    }
  }
</script>

<style scoped>

</style>