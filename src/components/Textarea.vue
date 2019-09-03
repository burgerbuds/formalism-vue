<template>
    <div class="f-textarea f-textarea--outlined" :class="containerClass">
        <label class="f-textarea__inner">
            <textarea class="f-textarea__field" @blur="handleBlur" v-model="internalValue" @input="handleInput" :name="name" :required="required"/>
            <span class="f-textarea__label"><span class="f-textarea__label-text">{{ label }}</span></span>
            <span class="f-textarea__indicator f-textarea__indicator--required" aria-hidden="true" v-if='required'>*</span>
        </label>
        <div class="f-textarea__message f-textarea__message--error" v-if="errorMessage">
            {{ errorMessage }}
        </div>
        <div class="f-textarea__message f-textarea__message--instruction" v-if="instructionMessage">
          {{ instructionMessage }}
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
  }
</script>

<style scoped>

</style>