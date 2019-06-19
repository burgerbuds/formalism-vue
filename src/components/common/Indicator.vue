<template>
  <span
    :class="[
      `${baseClass}__indicator`,
      isOptional
        ? `${baseClass}__indicator--optional`
        : (isRequired ? `${baseClass}__indicator--required` : '')
    ]"
    aria-hidden="true"
  >
    <slot/>
  </span>
</template>

<script>
export default {
    name: 'Indicator',
    props: {
        baseClass: {
            type: String,
            required: true,
        },
        isOptional: {
            type: Boolean,
            default: false,
        },
        isRequired: {
            type: Boolean,
            default: false,
        },
    },
}
</script>