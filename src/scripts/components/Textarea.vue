<template>
    <div v-bind="getAttributesContainer">

        <label v-bind="getAttributesInner">

            <textarea
                @blur="handleBlurEvent"
                @input="handleInputEvent"
                v-bind="getAttributesField"
            />

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
    name: 'Textarea',
    components: {
        Label,
        Indicator,
    },
    props: {
        ...defaultFieldProps,
        ...{
            size: {
                type: Array,
                default: () => ([5, 40]),
            },
            id: {
                type: String,
                default: () => `textarea${Math.floor(Math.random(0) * 5000)}`,
            },
            baseClass: {
                type: String,
                default: 'f-textarea',
            },
        },
    },
    data: () => ({
      dataIsFilled: false,
    }),
    computed: defaultComputed,
    methods: {
        ...defaultMethods,
        ...{ handleInputEvent({target}) {
            target.style.height = 'inherit';
            // Calculate the textarea height
            const offset = target.offsetHeight - target.clientHeight;
            // Add the height
            target.style.height = `${target.scrollHeight + offset}px`;
            // Disable resize
            target.style.resize = 'none';
        }},
    }
}
</script>