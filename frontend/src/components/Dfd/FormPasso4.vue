<template>
    <form @submit.prevent="enviarProximo" class="form">
        <h2>Demandas Vinculadas?</h2>


        <div class="radio">
            <label><input v-model="form.existeVinculo" value="Sim" type="radio" name="vinculo">Sim</label>
            <br>
            <label><input v-model="form.existeVinculo" value="Não" type="radio" name="vinculo">Não</label>
        </div>

        <div>
            <label for="">DFD XXX | 20XX:</label>
            <br>
            <input v-model="form.demandasVinculadas" type="text" name="previsao" id="previsao" class="textoform" placeholder="DFD Vinculado . . .">
        </div>
        <br>
        <div class="flex">
            <div class="btn">
                <q-btn @click="enviarAnterior" id="cor" class="shadow-4" icon="arrow_backward"></q-btn>
            </div>
            <q-space />
            <div class="btn">
                <q-btn @click="enviarProximo" id="cor" class="shadow-4" icon="arrow_forward"></q-btn>
            </div>
        </div>

    </form>
</template>

<script>
export default {
    props: {
        formData: {
            type: Object,
            required: true
        }
    },

    data() {
        return {
            form: { }
        }
    },

    watch: {
        formData: {
           immediate: true,
            handler(newVal) {
                this.form = { ...newVal }
            }
        }
    },

    methods: {
        enviarProximo() {
            this.$emit('next', this.form);
        },
        enviarAnterior() {
            this.$emit('prev');
        }
    }
}
</script>

<style scoped>
.form {
    overflow: hidden;
    max-width: 100%;
}

textarea {
    word-wrap: break-word;
}

.textoform {
    background-color: #c5c5c5;
    color: rgb(46, 46, 46);
    font-style: italic;
    width: 100%;
    height: 2vw;
    font-size: 1.15em;
    padding: .75em;
}

.form h2 {
    font-size: 3em;
    font-weight: bold;
}

.form label {
    font-size: 1.5em;
}

.flex {
    display: flex;
}

#cor {
    background-color: rgb(180, 2, 180);
    color: white;
    font-weight: bold;
    height: 40px;
    padding: 0 20px;
    border-radius: 6px;
}

.btn {
    flex-shrink: 0;
}

.radio {
    font-size: 1.15em;
}
</style>