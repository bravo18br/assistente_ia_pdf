<template>
    <div
        class="content-editable"
        :contenteditable="true"
        :placeholder="placeholder"
        @input="onInput"
        @keydown="onKeydown"
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
        prompt: {
            type: [ String, Function],
            default: '',
        },
        autoComplete: {
            type: Boolean,
            default: true
        }
    },

    emits: ['update:modelValue'],

    data() {
        return {
            suggestionText: '',
            controller: null,
            debouceTimeout: null
        }
    },

    mounted() {
        if (this.$refs.editableDiv) {
            this.$refs.editableDiv.textContent = this.modelValue
        }
    },

    methods: {
        onInput() {
            const currentText = this.$refs.editableDiv.innerText.trim()
            this.$emit('update:modelValue', currentText)
            this.clearSuggestion()

            if (!this.autoComplete) return

            clearTimeout(this.debounceTimeout)
            this.debouceTimeout = setTimeout(() => {
                this.fetchSuggestion(currentText)
            }, 1500)
        },

        onKeydown(e) {
            if (e.key === 'Tab' && this.suggestionText) {
                e.preventDefault()
                this.applySuggestion()
            } else if (e.key === 'Backspace' || e.key === 'Delete') {
                this.clearSuggestion()
            } else if (this.suggestionText.length > 0) {
                const nextChar = this.suggestionText[0]
                if (e.key === nextChar) {
                    this.suggestionText = this.suggestionText.slice(1)
                    const s = this.$refs.editableDiv.querySelector('#suggestion')
                    if (s) s.textContent = this.suggestionText
                } else {
                    this.clearSuggestion()
                }
            }
        },

        onBlur() {
            this.$emit('update:modelValue', this.$refs.editableDiv.innerText.trim())
            this.clearSuggestion()
        },

        clearSuggestion() {
            const s = this.$refs.editableDiv.querySelector('#suggestion')
            if (s) s.remove()
            this.suggestionText = ''
        if (this.controller) this.controller.abort()
        },

        applySuggestion() {
            //eslint-disable-next-line no-self-assign
            this.$refs.editableDiv.innerText = this.$refs.editableDiv.innerText
            this.$emit('update:modelValue', this.$refs.editableDiv.innerText.trim())
            this.suggestionText = ''
            this.clearSuggestion()
            this.moveCursorToEnd()
        },

        moveCursorToEnd() {
            const range = document.createRange()
            const selection = window.getSelection()
            range.selectNodeContents(this.$refs.editableDiv)
            range.collapse(false)
            selection.removeAllRanges()
            selection.addRange(range)
        },

        async fetchSuggestion(text) {
            if (this.controller) this.controller.abort()
            this.controller = new AbortController()

            try {
                const response = await fetch('http://10.200.0.84:8000/api/autocomplete', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    signal: this.controller.signal,
                    body: JSON.stringify({
                        message: text,
                        prompt: this.prompt
                    })
                })

                const data = await response.json()
                this.suggestionText = data?.sugestao || ''
                console.log(data);
                

                if (this.suggestionText) {
                    const span = document.createElement('span')
                    span.id = 'suggestion'
                    span.style.color = 'purple'
                    span.textContent = this.suggestionText
                    this.$refs.editableDiv.appendChild(span)
                }
            } catch (err) {
                if (err.name !== 'AbortError') console.error(err)
            }
        }
    },

    watch: {
        modelValue(newVal) {
            if (this.$refs.editableDiv && this.$refs.editableDiv.innerText !== newVal) {
                this.$refs.editableDiv.innerText = newVal
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