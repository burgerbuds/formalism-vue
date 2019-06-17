<template>
  <form class="wrapper">

    <Input
      name="input"
      label="First name"
      instructions="Enter your first name"
    />

    <Textarea
      name="textarea"
      label="First name"
      instructions="Enter your first name"
    />

    <Select
      name="select"
      label="First name"
      instructions="Enter your first name"
      :options="[
        {
          label: 'Option 1',
          value: '1'
        },
        {
          label: 'Option 2',
          value: '2'
        },
        {
          label: 'Option 3',
          value: '3'
        },
      ]"
    />

    <Checkbox
      name="checkbox"
      label="First name"
      instructions="This is your first name"
    />

    <Radio
      name="radio"
      label="Last name"
      instructions="This is your last name"
      isRequired
    />

    <File
      name="file"
      label="Last name"
      instructions="This is your last name"
      accept="pdf, ai, psd"
    />

    <div>
      <Fieldset
        name="Fieldset"
        label="Fieldset group"
        instructions="This is a test"
        minColumnWidth="200px"
        oneLine
      >
        <Checkbox
          name="checkbox1"
          label="First name"
        />
        <Checkbox
          name="checkbox2"
          label="First name last name"
        />
        <Checkbox
          name="checkbox3"
          label="First name"
        />
      </Fieldset>
    </div>

    <div>
      <Fieldset
        name="Fieldset"
        label="Fieldset group"
        instructions="This is a test"
        minColumnWidth="200px"
        oneLine
      >
        <Radio
          name="radio2"
          label="Last name"
        />
        <Radio
          name="radio2"
          label="Last name"
        />
        <Radio
          name="radio2"
          label="Last name"
        />
      </Fieldset>
    </div>

  </form>
</template>

<script>
import Input from './components/Input'
import Textarea from './components/Textarea'
import Select from './components/Select'
import Checkbox from './components/Checkbox'
import Radio from './components/Radio'
import File from './components/File'
import Fieldset from './components/Fieldset'

export default {
  name: 'app',
  components: {
    Input,
    Textarea,
    Select,
    Checkbox,
    Radio,
    File,
    Fieldset,
  }
}
</script>

<style lang="scss">

  form, form * {
    box-sizing: border-box;
  }

  form {
    font-family: Helvetica, Arial;
  }

  .wrapper {
    padding: 10%;

    > * + * {
      position: relative;
      margin-top: 5%;
    }
  }

  @import '~formalism/input/base';
  @import '~formalism/input/outlined';

  @import '~formalism/textarea/base';
  @import '~formalism/textarea/outlined';

  @import '~formalism/select/base';
  @import '~formalism/select/outlined';

  @import '~formalism/checkbox/base';
  @import '~formalism/checkbox/outlined';

  @import '~formalism/radio/base';
  @import '~formalism/radio/outlined';

  @import '~formalism/file/base';
  @import '~formalism/file/outlined';

  @import '~formalism/fieldset/base';
  @import '~formalism/fieldset/outlined';
</style>