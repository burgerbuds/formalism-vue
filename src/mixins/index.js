export const formElementShared = {
	data() {
		return {
			internalValue: this.value
		}
	},
	props: {
		label: {
			type: String,
		},
		name: {
			type: String,
		},
		value: {
			type: [String, Number, Boolean]
		},
		required: {
			type: Boolean,
			default() {
				return false;
			}
		},
		errorMessage: {
			type: String
		},
		options: {
			type: Array,
			default() {
				return [];
			}
		},
		theme: {
			type: String,
			default() {
				return "outlined"
			}
		},
		instructionMessage: {
			type: String
		}
	},
	methods: {
		handleInput(e) {
			// Emit different payload based on native html element
			if (e.target.type === 'checkbox') {
				return this.$emit('input', e.target.checked);
			}
			return this.$emit('input', e.target.value);
		},
		handleBlur(e) {
			// Emit different payload based on native html element
			if (e.target.type === 'checkbox') {
				return this.$emit('blur', e.target.checked);
			}
			return this.$emit('blur', e.target.value);
		}
	},
	computed: {
		containerClass() {
			return {
				'is-filled': !!this.internalValue,
				'has-error': !!this.errorMessage,
			}
		}
	},
	watch: {
		value(newV, oldV) {
			this.internalValue = newV;
		}
	}
}
export default {formElementShared}