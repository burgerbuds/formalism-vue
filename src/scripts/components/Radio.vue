<template>
    <Checkbox v-bind="$props" />
</template>

<script>
import {defaultFieldProps} from './common/variables'
import Checkbox from './Checkbox'

export default {
    components: {
        Checkbox,
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
                default: 'radio',
            },
            id: {
                type: String,
                default: () => `radio${Math.floor(Math.random(0) * 5000)}`,
            },
            baseClass: {
                type: String,
                default: 'f-radio',
            },
        }
    },
    computed: {
        uniqueAttributesField() {
            return {
                type: 'radio',
            }
        }
    },
}
</script>