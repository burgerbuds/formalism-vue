<template>
  <div class="main">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "StoryMain",
}
</script>
<style lang="scss">
.main {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  padding: 20px;
  max-width: 50vw;
  margin:0 auto;

  @import "~formalism/input/base";
	@import "~formalism/input/outlined";
	@import "~formalism/input/underlined";

  @import "~formalism/textarea/base";
	@import "~formalism/textarea/outlined";

  @import "~formalism/select/base";
	@import "~formalism/select/outlined";

  @import "~formalism/checkbox/base";
	@import "~formalism/checkbox/outlined";
}
</style>