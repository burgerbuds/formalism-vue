<template>
  <span :class="`${baseClass}__label`">
    <span :class="`${baseClass}__label-text`">
      <slot/>
    </span>
  </span>
</template>

<script>
export default {
    name: 'Label',
    props: {
        baseClass: {
            type: String,
            required: true,
        },
    },
};
</script>