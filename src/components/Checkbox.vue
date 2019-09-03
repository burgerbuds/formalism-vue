<template>
    <div class="f-checkbox f-checkbox--outlined" :class="containerClass">
        <label class="f-checkbox__inner">
            <input class='f-checkbox__field' type="checkbox" @blur="handleBlur" v-model="internalValue" @input="handleInput" :name="name" :required="required"/>
            <span class="f-checkbox__label"><span class="f-checkbox__label-text">{{ label }}</span></span>
            <span class="f-checkbox__indicator f-checkbox__indicator--required" aria-hidden="true" v-if='required'>*</span>
        </label>
        <div class="f-checkbox__message f-checkbox__message--error" v-if="errorMessage">
            {{ errorMessage }}
        </div>
        <div class="f-checkbox__message f-checkbox__message--instruction" v-if="instructionMessage">
          {{ instructionMessage }}
        </div>
    </div>
</template>

<script>
  import Mixins from '../mixins';
  export default {
    name: "Checkbox",
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