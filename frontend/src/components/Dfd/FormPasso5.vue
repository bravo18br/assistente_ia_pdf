<template>
    <form action="" method="POST" class="form">
        <h2>Equipe De Planejamento</h2>

        <div>
            <p class="form">Digite os participantes da equipe:</p>
            <label for="">Participante N°1: </label>
            <br>
            <input type="text" name="participante" id="part1" class="textoform" placeholder="Digite o nome ou código . . .">
            <label for="">Participante N°2: </label>
            <br>
            <input type="text" name="participante" id="part2" class="textoform" placeholder="Digite o nome ou código . . .">
            <label for="">Participante N°3: </label>
            <br>
            <input type="text" name="participante" id="part3" class="textoform" placeholder="Digite o nome ou código . . .">
            <label for="">Participante N°4: </label>
            <br>
            <input type="text" name="participante" id="part4" class="textoform" placeholder="Digite o nome ou código . . .">
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
    methods: {
        enviarProximo() {
            this.$emit('next');
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

.form p {
    font-size: 1.25em;
    font-weight: bold;
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
</style>