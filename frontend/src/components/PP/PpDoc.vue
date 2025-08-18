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

            <div v-if="ppStore.modoEdicaoManual" class="painel-ajuda">
                <p>Dica Campo</p>
            </div>


            <div class="doc">

                <div class="q-ma-md">
                    <q-scroll-area class="rolagem-documento">
                    <div class="q-py-xs">
                        <div id="documento" ref="Documento">
                            <div id="pag" >

                               <div>
                                    <h1>RELATÓRIO DE PESQUISA DE PREÇOS</h1>
                               </div>

                               <div class="sumario">
                                    <h3>Sumário</h3>
                                    <ul>
                                        <li><span>1 Pesquisa De Preços</span><span class="linha"></span><span class="pagina">2</span></li>
                                        <ul>
                                            <li class="indent"><span>1.1 Dados Da Pesquisa</span><span class="linha"></span><span class="pagina">2</span></li>
                                        </ul>
                                        <li><span>2 Quadro De Fontes Da Pesquisa</span><span class="linha"></span><span class="pagina">3</span></li>
                                        <li><span>3 Detalhes Das Fontes Da Pesquisa</span><span class="linha"></span><span class="pagina">5</span></li>
                                        <ul>
                                            <li class="indent"><span>3.1 Contratação do próprio Município de Araucária</span><span class="linha"></span><span class="pagina">5</span></li>
                                            <li class="indent"><span>3.2 Painel de Preços - PNCP</span><span class="linha"></span><span class="pagina">5</span></li>
                                            <ul>
                                                <li class="indent2"><span>3.2.1 PNCP 1</span><span class="linha"></span><span class="pagina">5</span></li>
                                                <li class="indent2"><span>3.2.2 PNCP 2</span><span class="linha"></span><span class="pagina">5</span></li>
                                                <li class="indent2"><span>3.2.3 PNCP 3</span><span class="linha"></span><span class="pagina">5</span></li>
                                            </ul>
                                            <li class="indent"><span>3.3 Banco de Preços em Saúde</span><span class="linha"></span><span class="pagina">5</span></li>
                                            <li class="indent"><span>3.4 Contratações similares de outros entes públicos</span><span class="linha"></span><span class="pagina">5</span></li>
                                            <ul>
                                                <li class="indent2"><span>3.4.1 ENTE 1</span><span class="linha"></span><span class="pagina">5</span></li>
                                                <li class="indent2"><span>3.4.2 ENTE 2</span><span class="linha"></span><span class="pagina">6</span></li>
                                                <li class="indent2"><span>3.4.3 ENTE 3</span><span class="linha"></span><span class="pagina">6</span></li>
                                            </ul>
                                            <li class="indent"><span>3.5 Preços publicados em mídia especializada</span><span class="linha"></span><span class="pagina">6</span></li>
                                            <ul>
                                                <li class="indent2"><span>3.5.1 MIDIA 1</span><span class="linha"></span><span class="pagina">6</span></li>
                                                <li class="indent2"><span>3.5.2 MIDIA 2</span><span class="linha"></span><span class="pagina">6</span></li>
                                                <li class="indent2"><span>3.5.3 MIDIA 3</span><span class="linha"></span><span class="pagina">6</span></li>
                                            </ul>
                                            <li class="indent"><span>3.6 Sítios eletrônicos especializados ou de domínio amplo</span><span class="linha"></span><span class="pagina">7</span></li>
                                            <ul>
                                                <li class="indent2"><span>3.6.1 SITIO 1</span><span class="linha"></span><span class="pagina">7</span></li>
                                                <li class="indent2"><span>3.6.2 SITIO 2</span><span class="linha"></span><span class="pagina">7</span></li>
                                                <li class="indent2"><span>3.6.3 SITIO 3</span><span class="linha"></span><span class="pagina">7</span></li>
                                            </ul>
                                            <li class="indent"><span>3.7 Tabela de Referência</span><span class="linha"></span><span class="pagina">7</span></li>
                                            <li class="indent"><span>3.8 Pesquisa com fornecedores</span><span class="linha"></span><span class="pagina">7</span></li>
                                            <ul>
                                                <li class="indent2"><span>3.8.1 FORNECEDOR 1</span><span class="linha"></span><span class="pagina">7</span></li>
                                                <li class="indent2"><span>3.8.2 FORNECEDOR 2</span><span class="linha"></span><span class="pagina">8</span></li>
                                                <li class="indent2"><span>3.8.3 FORNECEDOR 3</span><span class="linha"></span><span class="pagina">8</span></li>
                                            </ul>
                                            <li class="indent"><span>3.9 Base nacional de notas fiscais eletrônicas</span><span class="linha"></span><span class="pagina">8</span></li>
                                            <li class="indent"><span>3.10 Aplicativo Nota Paraná</span><span class="linha"></span><span class="pagina">8</span></li>
                                            <li class="indent"><span>3.11 Outro</span><span class="linha"></span><span class="pagina">8</span></li>
                                        </ul>
                                        <li><span>4 Normatização de Propostas</span><span class="linha"></span><span class="pagina">8</span></li>
                                        <li><span>5 Eliminação de Outliars</span><span class="linha"></span><span class="pagina">8</span></li>
                                    </ul>
                               </div>

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
                        <q-toggle v-model="ppStore.value" color="purple-14" class="tamanhotg" />
                    </div>

                    <div>
                        <div class="btnFinalizar">
                            <q-btn label="Salvar" id="finalizar" class="shadow-4" />
                        </div>
                    </div>

                </div>
                
                <div v-if="ppStore.modoEdicaoManual && ppStore.mostrarPdf">
                    <div class="btnConcluir">
                        <q-btn label="Concluir" id="concluir" />
                    </div>
                </div>

            </div>

            <div id="form" v-if="ppStore.value">
                
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
import { usePpDocStore } from '@/stores/PpDocStore';
import { watch } from 'vue';

    const ppStore = usePpDocStore();

    watch(() => [ppStore.value], (value) => {
        if (value) {
            ppStore.modoEdicaoManual = false;
            console.log('Edição Manual desativada');
        }
    })

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

.sumario h3 {
    font-weight: bold;
    margin-bottom: 10px;
    font-size: 1.45em;
}

.sumario ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.sumario li {
    display: flex;
    align-items: center;
}

.sumario li span:first-child {
    white-space: nowrap;
}

.sumario .linha {
    flex: 1;
    border-bottom: 1px dotted #000;
    margin: 0 5px;
}

.sumario li .pagina {
    white-space: nowrap;
}

.indent {
    padding-left: 1.5em;
}

.indent2 {
    padding-left: 2.5em;
}

.borda {
    border: 2px solid black;
    margin-bottom: -2px;
    margin-bottom: 5px;
}

.borda1 {
    border: 2px solid black;
    margin-bottom: -2px;
    margin-bottom: 5px;
    width: 24.5%;
    text-align: center;
}

.borda2 {
    border: 2px solid black;
    margin-bottom: -2px;
    margin-bottom: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4px;
}

.borda2 h3 {
    margin: 0;
}

.borda2 p {
    margin: 0;
    flex: 1;
}

h1 {
    font-size: 1.25em;
    font-weight: bold;
    text-align: center;
    line-height: 1.5;
    letter-spacing: .005mm;
}

.bloco {
    display: flex;
    justify-content: space-between;
    
}

.bloco h3 {
    font-size: .9em;
    font-weight: bold;
    line-height: 1.5;
    letter-spacing: .005mm;
}

.bloco h3,  .bloco p {
    margin-top: 0.7mm;
}

.bloco p {
    font-size: .8em;
    margin-bottom: 0.8mm;
    margin-left: 1.5mm;
    margin-right: 1.5mm;
    margin-top: 3mm;
}

.bloco1 {
    display: flex;
    flex-direction: column;
}

.bloco1 h3 {
    font-size: .9em;
    font-weight: bold;
    line-height: 1.5;
    letter-spacing: .005mm;
}

.bloco1 h3,  .bloco1 p {
    margin-top: 0.7mm;
    width: 45%;
}

.bloco1 p {
    font-size: .8em;
    margin-bottom: 0.8mm;
    margin-left: 1.5mm;
    margin-right: 1.5mm;
    margin-top: 1.5mm;
}

.texto {
    margin-top: 10mm;
}

.texto h2 {
    font-size: 1.15em;
    font-weight: bold;
    line-height: 1.5;
    letter-spacing: .005mm;
    margin-bottom: 1mm;
    text-indent: 2.0em;
}

.texto h2::first-letter {
    font-size: 0.9em;
    padding: 2.5%;
}

.texto p {
    font-size: .8em;
    margin-bottom: 0.8mm;
    margin-left: 1.5mm;
    margin-right: 1.5mm;
    text-align: justify;
}

.textodois {
    margin-top: 10mm;
}

.textodois h2 {
    font-size: 1.15em;
    font-weight: bold;
    line-height: 1.5;
    letter-spacing: .005mm;
    margin-bottom: 1mm;
    text-indent: 2.0em;
}

.textodois h2::first-letter {
    font-size: 0.9em;
}

.textodois p {
    font-size: .8em;
    margin-bottom: 0.8mm;
    margin-left: 1.5mm;
    margin-right: 1.5mm;
    text-align: justify;
}

.textoponto {
    margin-top: 10mm;
}

.textoponto h2 {
    font-size: 1.15em;
    font-weight: bold;
    line-height: 1.5;
    letter-spacing: .005mm;
    margin-bottom: 1mm;
    text-indent: 3.5em;
}

.textoponto h2::first-letter {
    font-size: 0.9em;
}

.posponto {
    font-size: 0.9em;
    padding-right: 2.5%;  
}

.textoponto p {
    font-size: .8em;
    margin-bottom: 0.8mm;
    margin-left: 1.5mm;
    margin-right: 1.5mm;
    text-align: justify;
}

li {
    font-size: .8em;
    margin-bottom: 0.8mm;
    margin-left: 1.5mm;
    margin-right: 1.5mm;
    text-align: justify;
}

.tabela {
    font-size: .7em;
    text-align: center;
    width: 100%;
}

table {
    border-collapse: collapse;
}

th {
    border: 1px solid black;
    width: 200px;
}

td {
    border: 1px solid black;
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