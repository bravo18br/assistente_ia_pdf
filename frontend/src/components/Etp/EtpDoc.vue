<template>
   <div>
        <div id="container">
            <div id="voltar">
                <div>
                    <router-link to="/" style="display: inline-block;">
                        <q-btn square class="back" icon="home" />
                    </router-link>
                </div>
            </div>

            <div class="painel-ajuda">
                <p>Dica Campo</p>
            </div>


            <div class="doc">

                <div class="q-ma-md">
                    <q-scroll-area class="rolagem-documento">
                    <div class="q-py-xs">
                        <div id="documento" ref="Documento">
                            <div id="pag" >

                                
                            </div>
                        </div>
                    </div>
                    </q-scroll-area>
                </div>

                <div id="toggle" class="shadow-4">
                    <div class="toggle">
                        <h2>Formulário de I.A.</h2>
                    </div>
                    <div class="q-pa-md">
                        <q-toggle color="purple-14" class="tamanhotg" />
                    </div>

                    <div>
                        <div class="btnFinalizar">
                            <q-btn label="Salvar" id="finalizar" class="shadow-4" />
                        </div>
                    </div>

                </div>
                
                <div>
                    <div class="btnConcluir">
                        <q-btn label="Concluir" id="concluir" />
                    </div>
                </div>

            </div>

            <div id="form">
                
                <div style="text-align: center;">
                    <p>Você pode também editar manualmente! (Isso vai desativar o formulário de I.A.)</p>
                </div>
                <div class="btnedit">
                    <q-btn id="editar" label="EDITAR DOCUMENTO" class="shadow-4"></q-btn>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
//import ContentEditable from '../ContentEditable.vue';

</script>

<style scoped>
 /* container para definir o tamanho ao todo para dividir os elementos */
#container{
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background-color: #d6d6d6;
}

 /* feito para definir e separar a parte que contém o documento e os botões da parte do formulário */
.doc {
    flex: 1 1 60%;
    display: flex;
    justify-content: center;
    border-right: 1px solid #ccc;
    transition: flex 0.5s ease, margin 0.5s ease;
}

 /* .doc-expandido {
    flex: 1 1 80%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin: 0 auto;
    border-right: none;
 } */

 /* definir e separar o formulário */
#form {
    flex: 1 1 20%;
    padding: 2.5%;
    background-color: white;
    box-shadow: -2px 0 5px rgba(0,0,0,0.1);
    overflow-y: auto;
    display: flex;
    flex-direction: column;
} 

 /* feito para definir o espaço do botão de liga/desliga do formulário */
#toggle {
    width: 16%;
    height: 20vh;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-right: 1px solid #ccc;
    border-radius: 10px;
    margin-left: 1vw;
} 

 /* feito para definir o espaço do botão de voltar ao início */
#voltar {
    height: 6vh;
    padding: 10px;
    background-color: #d6d6d6;
    flex-shrink: 0;
} 

/* feito para definir a área da parte do documento */
#documento {
    padding: 2rem;
    box-shadow: 0 0 5px rgba(0,0,0,0.1);
    background-color: rgb(255, 255, 255);
}

/* parte do scroll, também feito colocado o tamanho de folha A4 para deixar o documento nesse formato */
.q-ma-md {
    min-width: 210mm;
    height: 100vh;
    display: flex;
    justify-content: column;
}

/* deixar o documento para rolar no scroll */
.rolagem-documento {
    flex: 1 1 auto;
    background-color: #fdfdfd;
    padding: 1rem;
}

/* foi feito para definir a parte escrita do documento */
 #pag {
    margin-top: 5%;
    margin-bottom: 5%;
    width: 100%;
    font-size: 130%;
 }

#editar {
    background-color: rgb(180, 2, 180);
    color: white;
    font-weight: bold;
    font-size: large;
    width: 15vw;
    height: 5vw;
    padding: 0 20px;
    border-radius: 6px;
}

.btnedit {
    display: flex;
    justify-content: center;
}

.toggle h2 {
    font-size: 22px;
    font-weight: bold;
    text-align: center;
    margin: auto;
}

.tamanhotg {
    transform: scale(1.5);
    transform-origin: center;
}

.q-pa-md {
    padding: 10%;
}

.back {
    background-color: rgb(180, 2, 180);
    color: white;
}

.painel-ajuda {
    position: absolute;
    top: 50%;
    left: 30px;
    transform: translateY(-50%);
    width: 300px;
    background: #f1f1f1;
    padding: 16px 20px;
    border-left: 4px solid #9c27b0;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    border-radius: 8px;
    font-size: 0.9em;
    color: #333;
    z-index: 1000;
}

.btnFinalizar {
    margin-top: 75vh;
}

#finalizar {
    transform: translateY(-50%);
    width: 8vw;
    height: 6vh;
    padding: 10px;
    background-color: rgb(180, 2, 180);
    color: #fff;
    align-items: center;
    font-size: 1.5em;
    font-weight: bold;
    margin-right: 20mm;
}

.btnConcluir {
    margin-top: 90vh;
    margin-left: 5vw;
}

#concluir {
    transform: translateY(-50%);
    width: 8vw;
    height: 6vh;
    padding: 10px;
    background-color: rgb(180, 2, 180);
    color: #fff;
    align-items: center;
    font-size: 1.5em;
    font-weight: bold;
    margin-right: 20mm;
}


</style>