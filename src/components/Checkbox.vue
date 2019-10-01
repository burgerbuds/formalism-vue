<template>
    <div class="f-checkbox f-checkbox--outlined" :class="containerClass">
        <label class="f-checkbox__inner">
            <input class='f-checkbox__field' type="checkbox" :checked="checked == trueValue" :value="value" v-on="listeners" :name="name" :required="required"/>
            <span class="f-checkbox__label"><span class="f-checkbox__label-text" v-html="label"></span></span>
            <span class="f-checkbox__indicator f-checkbox__indicator--required" aria-hidden="true" v-if='required'>*</span>
        </label>
        <div class="f-checkbox__message f-checkbox__message--error" v-if="errorMessage" v-html="errorMessage">
        </div>
        <div class="f-checkbox__message f-checkbox__message--instruction" v-if="instructionMessage" v-html="instructionMessage">
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
    model: {
      prop: 'checked',
      event: 'change'
    },
    props: {
      checked: {
      },
      trueValue: {
        default() {
          return true;
        }
      },
      falseValue: {
        default() {
          return false;
        }
      }
    },
    computed: {
      listeners() {
        const vm = this;
        return {
          ...this.$listeners,
          change($event) {
            vm.$emit('change', $event.target.checked ? vm.trueValue: vm.falseValue);
          }
        }
      }
    }
  }
</script>

<style scoped>

</style>