/* eslint-disable react/react-in-jsx-scope */

import { storiesOf, addDecorator } from "@storybook/vue";

import StoryMain from "./misc/Main.vue";
import { withKnobs, text, boolean, optionsKnob, object } from "@storybook/addon-knobs";
addDecorator(() => ({
  components: {
    StoryMain
  },
  template: `<StoryMain><story/></StoryMain>`
}));
addDecorator(withKnobs);

import Home from "@/stories/misc/Home.vue";
import TextInputBasicStory from "@/stories/componentStories/TextInputBasicStory.vue";
import TextareaBasicStory from "@/stories/componentStories/TextareaBasicStory.vue";
import SelectBasicStory from "@/stories/componentStories/SelectBasicStory.vue";
import CheckboxBasicStory from "@/stories/componentStories/CheckboxBasicStory.vue";
import CheckboxesBasicStory from "@/stories/componentStories/CheckboxesBasicStory.vue";
import FieldsetBasicStory from "@/stories/componentStories/FieldsetBasicStory.vue";
import RadioBasicStory from "@/stories/componentStories/RadioBasicStory.vue";
import FileInputBasicStory from "@/stories/componentStories/FileInputBasicStory.vue";


// Homepage: 🏠
storiesOf("Home", module).add("Introduction", () => ({
  render(h) {
    return h(Home, {props: this.$props});
  }
}));

// TextInput ⌨️
storiesOf("TextInput", module).add("Basic", () => ({
  props: {
    theme: {
      default: optionsKnob("theme", {
        'outlined':'outlined',
        'underlined': 'underlined'
      }, 'outlined', {
        display: 'inline-radio'
      })
    },
    name: {
      default: text("name", "firstName")
    },
    label: {
      default: text("label", "First Name")
    },
    required: {
      default: boolean("required", false)
    },
    instructionMessage: {
      default: text("instructionMessage", "Put your preferred name here too.")
    },
    errorMessage: {
      default: text("errorMessage", "")
    },
  },
  render(h) {
    return h(TextInputBasicStory, {props: this.$props});
  },
}));

// FileInput ⌨️
storiesOf("FileInput", module).add("Basic", () => ({
  props: {
    theme: {
      default: optionsKnob("theme", {
        'outlined':'outlined',
        'underlined': 'underlined'
      }, 'outlined', {
        display: 'inline-radio'
      })
    },
    name: {
      default: text("name", "resume")
    },
    label: {
      default: text("label", "Resume")
    },
    required: {
      default: boolean("required", true)
    },
    instructionMessage: {
      default: text("instructionMessage", "Upload your resume here")
    },
    errorMessage: {
      default: text("errorMessage", "")
    },
    isMultiple: {
      default: boolean("Is Multiple?", false)
    }
  },
  render(h) {
    return h(FileInputBasicStory, {props: this.$props});
  },
}));


// Textarea ⌨️
storiesOf("Textarea", module).add("Basic", () => ({
  props: {
    name: {
      default: text("name", "firstName")
    },
    label: {
      default: text("label", "First Name")
    },
    required: {
      default: boolean("required", false)
    },
    instructionMessage: {
      default: text("instructionMessage", "Put your preferred name here too.")
    },
    errorMessage: {
      default: text("errorMessage", "")
    },
  },
  render(h) {
    return h(TextareaBasicStory, {props: this.$props});
  },
}));

// Checkbox ⌨️
storiesOf("Checkbox", module).add("Basic", () => ({
  props: {
    name: {
      default: text("name", "isDeveloper")
    },
    label: {
      default: text("label", "Are you a developer")
    },
    value: {
      default: text("value", '')
    },
    required: {
      default: boolean("required", false)
    },
    instructionMessage: {
      default: text("instructionMessage", "Tell the truth.")
    },
    errorMessage: {
      default: text("errorMessage", "")
    },
    trueValue: {
      default: text("trueValue that returned in v-model", 'yes')
    },
    falseValue: {
      default: text("falseValue that returned in v-model", 'no')
    }
  },
  render(h) {
    return h(CheckboxBasicStory, {props: this.$props});
  },
}));

// Checkboxes ⌨️
storiesOf("Checkboxes", module).add("Basic", () => ({
  props: {
    name: {
      default: text("name", "lunchChoice")
    },
    label: {
      default: text("label", "So... What's for lunch?")
    },
    required: {
      default: boolean("required", true)
    },
    instructionMessage: {
      default: text("instructionMessage", "🤔 Difficult choice?!")
    },
    errorMessage: {
      default: text("errorMessage", "")
    },
    options: {
      default: object("Options", [
        {
          label: 'Burger',
          value: 'burger'
        },
        {
          label: 'Pho',
          value: 'pho'
        },
        {
          label: 'Succulent Chinese meal',
          value: 'chinese-meal'
        },
      ])
    },
    isOneLine: {
      default: boolean("Is One Line", true),
    }
  },
  render(h) {
    return h(CheckboxesBasicStory, {props: this.$props});
  },
}));

// Checkboxes ⌨️
storiesOf("Fieldset", module).add("Basic", () => ({
  props: {
    label: {
      default: text("label", "So... What's for lunch?")
    },
    required: {
      default: boolean("required", true)
    },
    instructionMessage: {
      default: text("instructionMessage", "🤔 Difficult choice?!")
    },
    errorMessage: {
      default: text("errorMessage", "")
    },
    isOneLine: {
      default: boolean("Is One Line", true),
    }
  },
  render(h) {
    return h(FieldsetBasicStory, {props: this.$props});
  },
}));

// Select ⌨️
storiesOf("Select", module).add("Basic", () => ({
  props: {
    name: {
      default: text("name", "lunchChoice")
    },
    label: {
      default: text("label", "Lunch idea?")
    },
    required: {
      default: boolean("required", false)
    },
    instructionMessage: {
      default: text("instructionMessage", "Follow your heart. Tell the truth.")
    },
    errorMessage: {
      default: text("errorMessage", "")
    },
    options: {
      default: object("options", [
        {
          label: 'Select...',
          value: '',
          disabled: true
        },
        {
          label: 'Burger',
          value: 'burger'
        },
        {
          label: 'Pho',
          value: 'pho'
        },
        {
          label: 'Succulent Chinese meal',
          value: 'chinese-meal'
        },
      ])
    }
  },
  render(h) {
    return h(SelectBasicStory, {props: this.$props});
  },
}));

// Checkboxes ⌨️
storiesOf("Radio", module).add("Basic", () => ({
  props: {
    name: {
      default: text("name", "lunchChoice")
    },
    label: {
      default: text("label", "So... What's for lunch?")
    },
    required: {
      default: boolean("required", true)
    },
    instructionMessage: {
      default: text("instructionMessage", "🤔 Difficult choice?!")
    },
    errorMessage: {
      default: text("errorMessage", "")
    },
    options: {
      default: object("Options", [
        {
          label: 'Burger',
          value: 'burger'
        },
        {
          label: 'Pho',
          value: 'pho'
        },
        {
          label: 'Succulent Chinese meal',
          value: 'chinese-meal'
        },
      ])
    },
    isOneLine: {
      default: boolean("Is One Line", true),
    }
  },
  render(h) {
    return h(RadioBasicStory, {props: this.$props});
  },
}));
