<template>
    <div class="f-select f-select--outlined is-filled" :class="containerClass">
        <label class="f-select__inner">
            <select class='f-select__field' :name="name" v-model="internalValue" v-on="listeners">
                <option v-for="option in options" :value="option.value" :key="option.label" :disabled="option.disabled || false">{{ option.label }}</option>
            </select>
            <span class="f-select__label"><span class="f-select__label-text">{{ label }}</span></span>
            <span class="f-select__indicator f-select__indicator--required" aria-hidden="true" v-if='required'>*</span>
        </label>
        <div class="f-select__message f-select__message--error" v-if="errorMessage">
            {{ errorMessage }}
        </div>
        <div class="f-select__message f-select__message--instruction" v-if="instructionMessage">
          {{ instructionMessage }}
        </div>
    </div>
</template>

<script>
  import Mixins from '../mixins';

  export default {
    name: "Select",
    mixins: [
      Mixins.formElementShared
    ],
    data() {
      return {

      }
    },
    model: {
      prop: 'value',
      event: 'change'
    },
    computed: {
      listeners() {
        const vm = this;
        return {
          ...this.$listeners,
          change($event) {
            vm.$emit('change', $event.target.value);
          }
        }
      }
    }
  }
</script>

<style scoped>

</style>