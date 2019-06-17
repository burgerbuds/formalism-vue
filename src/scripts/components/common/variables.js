import deepmerge from "deepmerge"

const classNames = {
    filled: "is-filled",
    error: "has-error",
}

const defaultFieldProps = {
    label: {
        type: String,
        default: "Label",
        required: true,
    },
    theme: {
        type: String,
        default: "outlined",
    },
    name: {
        type: String,
        required: true,
    },
    value: String,
    instructions: String,
    error: {
        type: String,
        default: "",
    },
    hasError: {
        type: Boolean,
        default: false,
    },
    isDisabled: {
        type: Boolean,
        default: false,
    },
    isRequired: {
        type: Boolean,
        default: false,
    },
    isOptional: {
        type: Boolean,
        default: false,
    },
    isOpen: {
        type: Boolean,
        default: false,
    },
    indicator: {
        type: Object,
        default: () => ({
            isHidden: false,
            required: "*",
            optional: "optional",
        }),
    },
    attributesContainer: {
        type: Object,
        default: () => ({}),
    },
    attributesInner: {
        type: Object,
        default: () => ({}),
    },
    attributesField: {
        type: Object,
        default: () => ({}),
    },
}

const defaultComputed = {
    getAttributesContainer() {
        const showError = !!(this.error || this.hasError)
        const isOpen = this.dataIsFilled || this.value || this.isOpen
        const errorClass = showError ? classNames.error : ""
        const filledClass = isOpen ? classNames.filled : ""
        return deepmerge.all([
            {
                class: [
                    this.baseClass,
                    `${this.baseClass}--${this.theme}`,
                    errorClass,
                    filledClass,
                ],
            },
            this.attributesContainer,
            this.uniqueAttributesContainer,
        ])
    },
    uniqueAttributesContainer() {
        return {}
    },
    getAttributesInner() {
        return deepmerge.all([
            {
                class: `${this.baseClass}__inner`,
                for: this.id,
            },
            this.attributesInner,
            this.uniqueAttributesInner,
        ])
    },
    uniqueAttributesInner() {
        return {}
    },
    getAttributesField() {
        return deepmerge.all([
            {
                class: `${this.baseClass}__field`,
                id: this.id,
                name: this.name,
                required: this.isRequired ? "true" : null,
                disabled: this.isDisabled ? "true" : null,
                "aria-invalid": this.hasError ? "true" : null,
                "aria-describedby": this.instructionId(),
            },
            this.attributesField,
            this.uniqueAttributesField,
        ])
    },
    uniqueAttributesField() {
        return {}
    },
    indicatorText() {
        return this.isOptional
            ? this.indicator.optional
            : this.isRequired
            ? this.indicator.required
            : null
    },
}

const defaultMethods = {
    handleBlurEvent({ target }) {
        console.log(`${this.name}: Blur`)
        this.$emit(name, "blur")
        this.dataIsFilled = target.value.length > 0
    },
    instructionId() {
        return this.instructions ? `${this.id}-instructions` : false
    },
}

export { classNames, defaultFieldProps, defaultComputed, defaultMethods }
