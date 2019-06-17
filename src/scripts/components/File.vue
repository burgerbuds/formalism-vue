<template>
    <Input v-bind="inputProps" />
</template>

<script>
import {defaultFieldProps} from './common/variables'
import Input from './Input'

export default {
    components: {
        Input
    },
    props: {
        ...defaultFieldProps,
        ...{
            accept: {
                type: String,
                default: null,
            },
            type: {
                type: String,
                default: 'file',
            },
            id: {
                type: String,
                default: () => `file${Math.floor(Math.random(0) * 5000)}`,
            },
            baseClass: {
                type: String,
                default: 'f-file',
            },
        }
    },
    computed: {
        inputProps() {
            return {...this.$props, ...{
                attributesField: {
                    accept: this.accept
                }
            }}
        }
    }
}
</script>