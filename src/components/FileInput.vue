<template>
    <div class="f-file" :class="[containerClass, `f-file--${theme}`]">
        <label class="f-file__inner">
            <input class="f-file__field" type="file" v-on="$listeners" :name="name" :required="required" :multiple="multiple"/>
            <span class="f-file__label"><span class="f-file__label-text" v-html="label"></span></span>
            <span class="f-file__indicator f-file__indicator--required" aria-hidden="true" v-if='required'>*</span>
        </label>
        <div class="f-file__message f-file__message--error" v-if="errorMessage" v-html="errorMessage">
        </div>
        <div class="f-file__message f-file__message--instruction" v-if="instructionMessage" v-html="instructionMessage">
        </div>
    </div>
</template>

<script>
  import Mixins from '../mixins';

  export default {
    name: "FileInput",
    mixins: [
      Mixins.formElementShared
    ],
    data() {
        return {
            
        }
    },
    computed: {
    },
    props: {
      multiple: {
        type: Boolean,
        default() { return false; }
      }
    }
  }
</script>

<style scoped>

</style>
