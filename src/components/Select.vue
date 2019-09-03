<template>
    <div class="f-select f-select--outlined is-filled" :class="containerClass">
        <label class="f-select__inner">
            <select class='f-select__field' :name="name" @blur="handleBlur" @input="handleInput" v-model="internalValue">
                <option v-for="option in options" :value="option.value" :key="option.label">{{ option.label }}</option>
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
  }
</script>

<style scoped>

</style>