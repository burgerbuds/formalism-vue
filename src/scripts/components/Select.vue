<template>
    <div v-if="options.length" v-bind="getAttributesContainer">

        <label v-bind="getAttributesInner">

            <select
                @blur="handleBlurEvent"
                v-bind="getAttributesField"
            >

                <option
                    v-for="option in options"
                    :key="option.value"
                    :value="option.value"
                    :selected="(option.value === value)">
                        {{ option.label }}
                </option>

            </select>

            <Label :baseClass="baseClass">{{ label }}</Label>

            <Indicator
                v-if="((isOptional || isRequired) && !indicator.isHidden)"
                :baseClass="baseClass"
                :isOptional="isOptional"
                :isRequired="isRequired"
            >{{ indicatorText }}</Indicator>

            <span :class="`${baseClass}__icon`" aria-hidden="true"></span>

        </label>

        <div v-if="error" :class="`${baseClass}__message ${baseClass}__message--error`">{{ error }}</div>

        <div v-if="instructions" :id="instructionId()" :class="`${baseClass}__message ${baseClass}__message--instruction`">{{ instructions }}</div>

  </div>
</template>

<script>
import {defaultFieldProps, defaultComputed, defaultMethods} from './common/variables'
import Label from './common/Label'
import Indicator from './common/Indicator'

export default {
    components: {
        Label,
        Indicator,
    },
    props: {
        ...defaultFieldProps,
        ...{
            options: {
                type: Array,
                default: () => ([]),
            },
            id: {
                type: String,
                default: () => `select${Math.floor(Math.random(0) * 5000)}`,
            },
            baseClass: {
                type: String,
                default: 'f-select',
            },
        },
    },
    data: () => ({
      dataIsFilled: false,
    }),
    computed: defaultComputed,
    methods: defaultMethods,
}
</script>