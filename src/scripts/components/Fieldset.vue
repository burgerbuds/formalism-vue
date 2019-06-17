<template>
    <fieldset v-bind="getAttributesContainer">

        <legend v-if="label" :class="`${baseClass}__legend`" data-field-legend>

            <Label :baseClass="baseClass">
                {{ label }}
                <Indicator
                    v-if="(isRequired && !indicator.isHidden)"
                    :baseClass="baseClass"
                    :isOptional="isOptional"
                    :isRequired="isRequired"
                >{{ indicatorText }}</Indicator>
            </Label>

        </legend>

        <div v-if="error" :class="`${baseClass}__message ${baseClass}__message--error`">{{ error }}</div>

        <div v-if="instructions" :id="instructionId()" :class="`${baseClass}__message ${baseClass}__message--instruction`">{{ instructions }}</div>

        <div v-bind="getAttributesInner">
            <slot />
        </div>

    </fieldset>
</template>

<script>
import {defaultFieldProps, defaultComputed, defaultMethods} from './common/variables'
import Label from './common/Label'
import Indicator from './common/Indicator'
import deepmerge from "deepmerge"

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
            // TODO: Allow the width through
            // minColumnWidth: {
            //     type: String, // eg: '100px'
            // },
            oneLine: {
                type: Boolean,
                default: false,
            },
            themeOptions: {
                type: String,
                default: 'outlined',
            },
            id: {
                type: String,
                default: `checkbox-group${Math.floor(Math.random(0) * 5000)}`,
            },
            baseClass: {
                type: String,
                default: 'f-fieldset',
            },
        }
    },
    data: () => ({
      dataIsFilled: false,
    }),
    computed: {
        ...defaultComputed,
        ...{ getAttributesInner() {
            return deepmerge.all([
                {
                    class: [
                        `${this.baseClass}__inner`,
                        `${this.baseClass}__inner--${this.oneLine ? 'one-line' : 'stacked'}`,
                    ],
                    for: this.id,
                },
                this.attributesInner,
            ])
        }},
    },
    methods: defaultMethods,
}
</script>

