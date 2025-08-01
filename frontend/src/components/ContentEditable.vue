<template>
    <div
        class="content-editable"
        :contenteditable="true"
        :placeholder="placeholder"
        @input="onInput"
        @blur="onBlur"
        ref="editableDiv"
    ></div>
</template>

<script>
export default {
    name: 'ContentEditable',
    props: {
        modelValue: {
            type: String,
            default: '',
        },
        placeholder: {
            type: String,
            default: '',
        },
    },

    emits: ['update:modelValue'],

    mounted() {
        if (this.$refs.editableDiv) {
            this.$refs.editableDiv.textContent = this.modelValue
        }
    },

    methods: {
        onInput(event) {
            const value = event.target.innerText.trim()
            this.$emit('update:modelValue', value)
        },
        onBlur() {
            if (this.$refs.editableDiv) {
                const value = this.$refs.editableDiv.innerText.trim()
                this.$emit('update:modelValue', value)
            }
        }
    },
    watch: {
        modelValue(newVal) {
            if (this.$refs.editableDiv && this.$refs.editableDiv.innerText !== newVal) {
                this.$refs.editableDiv.innerHTML = newVal
            }
        }
    },

}
</script>

<style scoped>
.content-editable {
    min-height: 40px;
    border: 1px solid #ccc;
    padding: 8px;
    border-radius: 4px;
}

.content-editable:empty::before {
    content: atrr(placeholder);
    color: #aaa;
}
</style>