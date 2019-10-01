<template>
    <fieldset class="f-fieldset f-fieldset--outlined" :class="{'has-error':errorMessage}">
      <legend v-if="label"
        class="f-fieldset__legend">
        <span class="f-fieldset__label"><span class="f-fieldset__label-text" v-html='label'></span>
        &nbsp;
        <span class="f-fieldset__indicator f-fieldset__indicator--required" aria-hidden="true" v-if='required'>*</span></span>
      </legend>
      <div class="f-fieldset__message f-fieldset__message--error" v-if="errorMessage" v-html="errorMessage">
      </div>
      <div class="f-fieldset__message f-fieldset__message--instruction" v-if="instructionMessage" v-html="instructionMessage">
      </div>
      <div class="f-fieldset__inner" :class="{'f-fieldset__inner--one-line':isOneLine, 'f-fieldset__inner--stacked': !isOneLine}">
        <slot></slot>
      </div>
    </fieldset>
</template>

<script>
  export default {
    name: "Fieldset",
    mixins: [
    ],
    data() {
      return {
        
      }
    },
    props: {
      label: {
        type: String,
        default() {
          return ""
        }
      },
      required: {
        type: Boolean,
        default() {
          return false
        }
      },
      errorMessage: {
        type: String,
        default() {
          return ""
        }
      },
      instructionMessage: {
        type: String,
        default() {
          return ""
        }
      },
      isOneLine: {
        type: Boolean,
        default() {
          return true;
        }
      }
    },
    computed: {
      
    },
    methods: {
    }
  }
</script>

<style scoped>

</style>