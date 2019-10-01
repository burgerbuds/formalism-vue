<template>
  <div>
      <h1>Welcome to Formalism Vue Components</h1>

      <h2>📖 Overview</h2>
      <p>
        This is a form UI component built in <a target='_blank' href="https://simple.com.au">Simple</a> for fast form development.
      </p>
      <p>
        Belows are the all the components that are currently included in the package:
        <ul class='comp-list'>
          <li><a @click.prevent="navigateToStoryKind('TextInput')" href='#'>TextInput</a></li>
          <li><a @click.prevent="navigateToStoryKind('Textarea')" href='#'>Textarea</a></li>
          <li><a @click.prevent="navigateToStoryKind('Checkbox')" href='#'>Checkbox</a></li>
          <li><a @click.prevent="navigateToStoryKind('Checkboxes')" href='#'>Checkboxes</a></li>
          <li><a @click.prevent="navigateToStoryKind('Select')" href='#'>Select</a></li>
          <li><a @click.prevent="navigateToStoryKind('Fieldset')" href='#'>Fieldset</a></li>
          <li><a @click.prevent="navigateToStoryKind('Radio')" href='#'>Radio</a></li>
        </ul>
        <!-- Belows are the components that we are planning to add in the library.
        <ul class='comp-list comp-list--inactive'>
          <li><a>Radio</a></li>
          <li><a>File</a></li>
        </ul> -->
      </p>

      <h2>🎨 Where is the CSS</h2>
      <p>The CSS contained in another package <a href="https://github.com/simple-integrated-marketing/formalism" target="_blank">formalism</a>. To allow maximum flexibility, the opinionated css is not included in this package and needs to be installed separatedly.</p>
      <pre v-highlightjs><code class="bash">npm i formalism</code></pre>
      <p>Add the scss. More scss customisation can be found in the package.</p>
      <pre v-highlightjs><code class="javascript">@import "~formalism/input/base";
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
@import 'formalism/fieldset/outlined';</code></pre>

    <h2>👀 How to use it</h2>
    <p>
      The package will register global components with optional prefix. By default, &lt;TextInput/&gt; becomes &lt;F-TextInput/&gt
    </p>
    <pre v-highlightjs><code class="javascript">import FormalismVue from 'formalism-vue';
Vue.use(FormalismVue, {
  componentPrefix:'F-' // This is the default, can be ommitted.
});</code></pre>

      <h2>⛑ Local development caveat</h2>
      <p>
        Note that if you are using <pre v-highlightjs><code class="bash">npm link</code></pre> to develop the library locally. You might want to add the following to <b>vue.config.js</b>
      </p>
      <pre v-highlightjs><code class="javascript">module.exports = {
  configureWebpack: {
    resolve: {
        symlinks:false // Use npm link
    }
  }
}</code></pre>
      <p>Otherwise, the import will throw an error - default not found 🤦‍♂️</p>
  </div>
</template>
<script>

// eslint-disable-next-line no-console
import { linkTo } from '@storybook/addon-links';

export default {
  name: 'home',

  props: {
  },

  data() {
    return {
  
    };
  },

  methods: {
    navigateToStoryKind(storyKind) {
      return linkTo(storyKind).apply();
    },
  },

  components: {
  }
};
</script>

<style lang="scss" scoped>
  h2 {
    padding-top: 1rem;
    border-top: 1px solid #f6efff;
  }
  .comp-list {
    list-style: none;
    padding:0;
    margin:0;
    li {
      display:inline-block;
      margin:10px 0;
    }
    a {
      display:inline-block;
      padding: 10px;
      background:#6c2faf;
      color:white;
      border-radius:5px;
      text-decoration: none;
    }
    &--inactive {
      a {
        background-color: #a59fad;
      }
    }
  }
</style>