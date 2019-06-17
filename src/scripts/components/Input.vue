<template>
    <div v-bind="getAttributesContainer">

        <label v-bind="getAttributesInner">

            <input
                @blur="handleBlurEvent"
                v-bind="getAttributesField"
            >

            <Label :baseClass="baseClass">{{ label }}</Label>

            <Indicator
                v-if="((isOptional || isRequired) && !indicator.isHidden)"
                :baseClass="baseClass"
                :isOptional="isOptional"
                :isRequired="isRequired"
            >{{ indicatorText }}</Indicator>

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
            type: {
                type: String,
                default: 'text',
            },
            id: {
                type: String,
                default: () => `input${Math.floor(Math.random(0) * 5000)}`,
            },
            baseClass: {
                type: String,
                default: 'f-input',
            },
        }
    },
    data: () => ({
      dataIsFilled: false,
    }),
    computed: {
        ...defaultComputed,
        ...{ uniqueAttributesField() {
            return {
                type: this.type,
            }
        }},
    },
    methods: defaultMethods,
}
</script>