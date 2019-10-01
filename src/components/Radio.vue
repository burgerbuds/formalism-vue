<template>
    <Fieldset :label="label" :required="required" :errorMessage="errorMessage" :instructionMessage="instructionMessage" :isOneLine="isOneLine">
      <div class="f-radio f-radio--outlined" v-for="option in options" :key="option.value">
          <label class="f-radio__inner">
              <input class='f-radio__field' type="radio" :checked="checked == option.value" :value="option.value" v-on="listeners" :name="name"/>
              <span class="f-radio__label"><span class="f-radio__label-text">{{ option.label }}</span></span>
          </label>
      </div>
    </Fieldset>
</template>

<script>
  import Fieldset from './Fieldset';
  import Mixins from '../mixins';
  export default {
    name: "Radio",
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
            vm.$emit('change', $event.target.value);
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