<template>
    <div v-bind="getAttributesContainer">

        <label v-bind="getAttributesInner">

            <input
                @blur="handleBlurEvent"
                v-bind="getAttributesField"
            >

            <Label :baseClass="baseClass">
                {{ label }}
                <Indicator
                    v-if="(isRequired && !indicator.isHidden)"
                    :baseClass="baseClass"
                    :isOptional="isOptional"
                    :isRequired="isRequired"
                >{{ indicatorText }}</Indicator>
            </Label>

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
            isFieldGroup: {
                type: Boolean,
                default: false,
            },
            type: {
                type: String,
                default: 'checkbox',
            },
            id: {
                type: String,
                default: () => `checkbox${Math.floor(Math.random(0) * 5000)}`,
            },
            baseClass: {
                type: String,
                default: 'f-checkbox',
            },
        }
    },
    data: () => ({
      dataIsFilled: false,
    }),
    computed: {
        ...defaultComputed,
        ...{ uniqueAttributesContainer() {
                return {
                    'data-field-fieldgroup': (this.isFieldGroup ? 'true' : null),
                }
            },
            uniqueAttributesField() {
                return {
                    type: this.type,
                    checked: this.isChecked ? 'checked' : null,
                }
            }
        },
    },
    methods: defaultMethods,
}
</script>