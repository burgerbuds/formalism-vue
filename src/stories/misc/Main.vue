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
@import url('https://fonts.googleapis.com/css?family=Playfair+Display&display=swap');
.main {
  font-family: 'Playfair Display', 'Avenir', Helvetica, Arial, sans-serif !important;
  padding: 20px;
  max-width: 50vw;
  margin:0 auto;

  @import "~formalism/input/base";
	@import "~formalism/input/outlined";
	@import "~formalism/input/underlined";

  @import "~formalism/textarea/base";
	@import "~formalism/textarea/outlined";

  @import 'formalism/file/base';
  @import 'formalism/file/outlined';

  @import "~formalism/select/base";
	@import "~formalism/select/outlined";

  @import "~formalism/checkbox/base";
  @import "~formalism/checkbox/outlined";

  @import 'formalism/radio/base';
  @import 'formalism/radio/outlined';

  @import 'formalism/fieldset/base';
  @import 'formalism/fieldset/outlined';
  
  @import "~highlight.js/styles/monokai.css";
  .hljs {
    padding:1rem;
    border-radius:5px;
  }
}
</style>