<template>
    <Fieldset :label="label" :required="required" :errorMessage="errorMessage" :instructionMessage="instructionMessage" :isOneLine="isOneLine">
      <div class="f-checkbox f-checkbox--outlined" v-for="option in options" :key="option.value">
          <label class="f-checkbox__inner">
              <input class='f-checkbox__field' type="checkbox" :checked="checked.indexOf(option.value)!=-1" :value="option.value" v-on="listeners" :name="name"/>
              <span class="f-checkbox__label"><span class="f-checkbox__label-text">{{ option.label }}</span></span>
          </label>
      </div>
    </Fieldset>
</template>

<script>
  import Fieldset from './Fieldset';
  import Mixins from '../mixins';
  export default {
    name: "Checkboxes",
    mixins: [
      Mixins.formElementShared
    ],
    data() {
      return {
        
      }
    },
    components: {
      Fieldset,
    },
    model: {
      prop: 'checked',
      event: 'change'
    },
    props: {
      checked: {
        type: Array,
        default() { return []; }
      },
      options: {
        default() {
          return [];
        }
      },
      isOneLine: {
        type: Boolean,
        default() { return true; }
      }
    },
    computed: {
      listeners() {
        const vm = this;
        return {
          ...this.$listeners,
          change($event) {
            let newValue = Array.from(vm.checked);
            if ($event.target.checked) {
              if (newValue.indexOf($event.target.value) == -1) {
                newValue.push($event.target.value);
              }
            } else {
              if (newValue.indexOf($event.target.value) != -1) {
                newValue.splice(newValue.indexOf($event.target.value),1);
              }
            }
            vm.$emit('change', newValue);
          }
        }
      }
    },
    methods: {
    }
  }
</script>

<style scoped>

</style>