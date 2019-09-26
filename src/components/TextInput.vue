<template>
    <div class="f-input" :class="[containerClass, `f-input--${theme}`]">
        <label class="f-input__inner">
            <input class="f-input__field" type="text" v-model="internalValue" v-on="listeners" :name="name" :required="required"/>
            <span class="f-input__label"><span class="f-input__label-text">{{ label }}</span></span>
            <span class="f-input__indicator f-input__indicator--required" aria-hidden="true" v-if='required'>*</span>
        </label>
        <div class="f-input__message f-input__message--error" v-if="errorMessage">
            {{ errorMessage }}
        </div>
        <div class="f-input__message f-input__message--instruction" v-if="instructionMessage">
          {{ instructionMessage }}
        </div>
    </div>
</template>

<script>
  import Mixins from '../mixins';

  export default {
    name: "TextInput",
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
