<template>
    <form action="" method="POST" class="form">
        <h2>Qual objeto sua secretaria precisa?</h2>
        <div>
            <label for="nomeobj">Nome do Objeto: </label>
            <br>
            <input type="text" name="nomeobj" id="nomeobj" class="textoformnomeobj" placeholder="Escreva o nome do objeto . . .">
            <br><br>
        </div>
        <div  class="flex">
            <div>
                <label for="codipm">Código do IPM: </label>
                <br>
                <input type="text" name="codipm" id="codipm" class="textoform" placeholder="Digite o código do IPM . . .">
            </div>
            <q-space />
            <div>
                <label for="quantidade">Quantidade: </label>
                <br>
                <input type="text" name="quantidade" id="quantidade" class="textoform" placeholder="Digite a quantidade . . .">
                <br>
            </div>
            <div>
                <label for="vlesti">Valor Estimado: </label>
                <br>
                <input type="text" name="vlesti" id="vlesti" class="textoform" placeholder="Digite o total esperado . . .">
            </div>
            <q-space />
            <div>
                <label for="catser">CAT SER: </label>
                <br>
                <input type="text" name="catser" id="catser" class="textoform" placeholder="Digite o código CAT SER . . .">
                <br>
            </div>
        </div>
        <br>
        <div class="btnprox">
            <q-btn @click="enviarProximo" id="prox" class="shadow-4" icon="arrow_forward"></q-btn>
        </div>    

    </form>
</template>

<script>
export default {
    methods: {
        enviarProximo() {
            this.$emit('next');
        }
    }
}
</script>

<style scoped>
.textoformnomeobj {
    background-color: #c5c5c5;
    color: rgb(46, 46, 46);
    font-style: italic;
    width: 100%;
    height: 3vw;
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
    justify-content: flex-start;
}

.textoform {
    background-color: #c5c5c5;
    color: rgb(46, 46, 46);
    font-style: italic;
    font-size: 1.15em;
    width: 100%;
    height: 2vw;
    padding: .75em;
}


#prox {
    background-color: rgb(180, 2, 180);
    color: white;
    font-weight: bold;
    height: 40px;
    padding: 0 20px;
    border-radius: 6px;
}

.btnprox {
    display: flex;
    justify-content: end;
}
</style>