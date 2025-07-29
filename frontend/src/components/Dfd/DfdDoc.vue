<template>
    <div>
        <div id="container">
            <div id="doc">
                <div id="voltar">
                    <div>
                        <router-link to="/" style="display: inline-block;">
                            <q-btn square class="back" icon="home" />
                        </router-link>
                    </div>
                </div>

                <div class="q-ma-md">
                    <q-scroll-area class="rolagem-documento">
                    <div class="q-py-xs">
                        <div id="documento">
                            <div id="pag">
                                <div class="borda">
                                    <h1>DOCUMENTO DE FORMALIZAÇÃO DE DEMANDA</h1>
                                    <h1>N.° 025/2025</h1>
                                </div>
                                <div id="bloco">
                                    <div class="borda dois">
                                        <h3>Área Requisitante:</h3>
                                        <p>Dpto. de Gestão de Infraestrutura - SMCIT</p>
                                    </div>
                                    <div class="borda dois-um">
                                        <h3>Data Previsão:</h3>
                                        <p>07/2025</p>
                                    </div>
                                    <div class="borda dois-um">
                                        <h3>Exercício:</h3>
                                        <p>2025</p>
                                    </div>
                                    <div class="borda dois-um">
                                        <h3>Data:</h3>
                                        <p>20/03/2025</p>
                                    </div>
                                </div>
                                <div id="bloco">
                                    <div class="borda tres-um">
                                        <h3>Responsável pela Solicitação:</h3>
                                        <p>XXXXXXX XXXX XXXXX</p>
                                    </div>
                                    <div class="borda tres-dois">
                                        <h3>Matrícula:</h3>
                                        <p>XXXXXXXXX</p>
                                    </div>
                                </div>
                                <div class="borda quatro">
                                    <h3>Grau de Prioridade: (X) Baixo | ( ) Médio | ( ) Alto | ( ) Altíssimo</h3>
                                    
                                    <h3>Justificativa:</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum id fugit libero, illum error nisi quod quibusdam asperiores corrupti. Quo quibusdam hic, sit expedita architecto reprehenderit vitae deserunt beatae nisi!</p>
                                </div>

                                <div class="texto">
                                    <h2>1 Do Objeto</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus consequatur ut totam aliquam asperiores quisquam magni molestiae accusamus sequi, nesciunt est iste repudiandae, vero quaerat facere assumenda officiis odit distinctio!</p>
                                </div>
                                <div class="texto">
                                    <h2>2 Da Sugestão De Modalidade</h2>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste culpa molestiae assumenda provident consectetur? Distinctio provident eius dolore necessitatibus placeat. Fugiat nulla quis rem unde culpa expedita commodi quisquam asperiores!</p>
                                </div>
                                <div class="texto">
                                    <h2>3 Justificativa Da Necessidade</h2>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At fuga unde animi officiis sequi numquam ipsum rem neque aut voluptas placeat, reiciendis inventore ipsa quo atque qui perferendis quibusdam rerum?</p>
                                </div>
                                <div class="texto">
                                    <h2>4 Previsão Da Demanda No Pca</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos provident unde aliquid harum nemo doloremque minus, eos alias consequatur inventore voluptatum temporibus nostrum placeat rem numquam dolorum quaerat culpa. Fugiat.</p>
                                </div>
                                <div class="texto">
                                    <h2>5 Demandas Vinculadas ou Interdependentes</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus nemo porro laudantium distinctio architecto excepturi dignissimos iste error ipsa facilis, omnis, explicabo nostrum deleniti recusandae qui illum, hic numquam ullam?</p>
                                </div>
                                <div>
                                    <div class="textoponto">
                                        <h2>6.<span class="posponto">1</span> Materiais</h2>
                                        <table class="tabela">
                                            <thead>
                                                <tr>
                                                    <th style="width: 5%">Item</th>
                                                    <th style="width: 20%">Classe</th>
                                                    <th style="width: 35%;">Descrição</th>
                                                    <th style="width: 10%;">Und.</th>
                                                    <th style="width: 10%;">Qtde</th>
                                                    <th style="width: 10%;">R$ Unt.</th>
                                                    <th style="width: 10%;">R$ Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>1</td>
                                                    <td>1</td>
                                                    <td>1</td>
                                                    <td>1</td>
                                                    <td>1</td>
                                                    <td>1</td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>2</td>
                                                    <td>2</td>
                                                    <td>2</td>
                                                    <td>2</td>
                                                    <td>2</td>
                                                    <td>2</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="textoponto">
                                        <h2>6.<span class="posponto">1</span> Materiais</h2>
                                        <table class="tabela">
                                            <thead>
                                                <tr>
                                                    <th rowspan="2" style="width: 5%">Item</th>
                                                    <th rowspan="2" style="width: 10%">Cod IPM</th>
                                                    <th rowspan="2" style="width: 10%">CatSer</th>
                                                    <th rowspan="2" style="width: 10%">Classe</th>
                                                    <th rowspan="2" style="width: 25%;">Descrição</th>
                                                    <th rowspan="2" style="width: 10%;">Und.</th>
                                                    <th rowspan="2" style="width: 10%;">Qtde</th>
                                                    <th rowspan="2" style="width: 10%;">R$ Unt.</th>
                                                    <th rowspan="2" style="width: 10%;">R$ Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr style="height: 40px;">
                                                    <td>1</td>
                                                    <td>1</td>
                                                    <td>1</td>
                                                    <td>1</td>
                                                    <td>1</td>
                                                    <td>1</td>
                                                    <td>1</td>
                                                    <td>1</td>
                                                    <td>1</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div class="texto">
                                    <h2>7 Previsão de Utilização E Critérios De Aceitação</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor soluta sint quidem velit iure repellendus earum, delectus sed ut eaque voluptate in consectetur ipsum minima adipisci qui nihil inventore amet!</p>
                                </div>
                                <div class="texto">
                                    <h2>8 Indicação De Equipe De Planejamento</h2>
                                    <p>Para composição da equipe de planejamento, indicamos os servidores abaixo</p>
                                    <ul>
                                        <li>XXXXXXX</li>
                                        <li>XXXXXXX</li>
                                        <li>XXXXXXX</li>
                                        <li>XXXXXXX</li>
                                    </ul>
                                    <p>OS servidores indicados possuem formação e expertise necessários ao correto planejamento da presente contratação</p>
                                </div>
                                <div>
                                    <div class="texto">
                                        <h2>9 Da Fiscalização E Gestão Do Contato</h2>
                                        <div style="display: flex; justify-content: flex-start;">
                                            <p style="width: 50%;"><strong>Fiscal:</strong></p>
                                            <p style="width: 50%;">XXXXXXXXX</p>
                                        </div>
                                        <div style="display: flex; justify-content: flex-start;">
                                            <p style="width: 50%;"><strong>Fiscal Substituto:</strong></p>
                                            <p style="width: 50%;">XXXXXXXXX</p>
                                        </div>
                                        <div style="display: flex; justify-content: flex-start;">
                                            <p style="width: 50%;"><strong>Gestor:</strong></p>
                                            <p style="width: 50%;">XXXXXXXXX</p>
                                        </div>
                                        <div style="display: flex; justify-content: flex-start;">
                                            <p style="width: 50%;"><strong>Gestor Substituto:</strong></p>
                                            <p style="width: 50%;">XXXXXXXXX</p>
                                        </div>
                                    </div>
                                    <div class="textoponto">
                                        <h2>9.<span class="posponto">1</span> Justificativa</h2>
                                        <p>Os servidores indicados são responsáveis por acompanhar a execução contratual, realizar o recebimento provisório e atestar o recebimento definitivo dos bens/serviços.</p><br>
                                        <div style="display: flex; justify-content: flex-start;">
                                            <p p style="width: 50%;"><strong>Elaborado por:</strong></p>
                                            <p p style="width: 50%;"><strong>Ordenador de Despesa:</strong></p>
                                            <br><br><br><br>
                                        </div>
                                        <div style="display: flex; justify-content: flex-start;">
                                            <div style="width: 40%; border-top: 1px solid black;">
                                                <p style="text-align: center;">XXXXXXXXXXXXXXXXX</p>
                                                <p style="text-align: center;">Coordenador Inovação</p>
                                            </div>
                                            <div style="width: 10%;"></div>
                                             <div style="width: 40%; border-top: 1px solid black;">
                                                <p style="text-align: center;">XXXXXXXXXXXXXXXXX</p>
                                                <p style="text-align: center;">Secretário Municipal de Ciência, Inovação, Tecnologia e Desenvolvimento Econômico</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </q-scroll-area>
                </div>

                <div id="toggle" class="shadow-4" v-if="!formFinalizado">
                    <div class="toggle">
                        <h2>Formulário de I.A.</h2>
                    </div>
                    <div class="q-pa-md">
                        <q-toggle v-model="value" color="purple-14" />
                    </div>
                </div>

            </div>
            <div id="form">
                <div style="flex-grow: 1;">
                    <component :is="formAtualComponent" @next="proximo" @prev="anterior"></component>
                </div>
                
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

<script>
import BaixarPdf from './BaixarPdf.vue';
import FormPasso1 from './FormPasso1.vue';
import FormPasso2 from './FormPasso2.vue';
import FormPasso3 from './FormPasso3.vue';
import FormPasso4 from './FormPasso4.vue';
import FormPasso5 from './FormPasso5.vue';
import FormPasso6 from './FormPasso6.vue';

export default {
    components: { FormPasso1, FormPasso2, FormPasso3, FormPasso4, FormPasso5, FormPasso6, BaixarPdf },

    data() {
        return {
            value: false,
            formAtual: 1,
            formData: {},
            formFinalizado: false
        };
    },

    computed: {
        formAtualComponent() {
            return this.formFinalizado ? 'BaixarPdf' : `FormPasso${this.formAtual}`;
        },
    },

    methods: {
        proximo(data) {
            this.formData = { ...this.formData, ...data};

            if (this.formAtual < 6) {
                this.formAtual++;
            } else {
                this.submitForm();
            }
        },

        anterior(data) {
            this.formData = { ...this.formData, ...data };

            if (this.formAtual > 1) {
                this.formAtual--;
            }
        },

        submitForm() {
            console.log('Formulário Enviado:', this.formData);
            this.formFinalizado = true;
        }
    }
};

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
 #doc {
    flex: 1 1 60%;
    display: flex;
    justify-content: column;
    border-right: 1px solid #ccc;
 }

 /* definir e separar o formulário */
 #form {
    flex: 1 1 30%;
    padding: 2.5%;
    background-color: white;
    box-shadow: -2px 0 5px rgba(0,0,0,0.1);
    overflow-y: auto;

    display: flex;
    flex-direction: column;
 }

 /* feito para definir o espaço do botão de liga/desliga do formulário */
 #toggle {
    width: 20%;
    height: 20vh;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-right: 1px solid #ccc;
    border-radius: 10px;
    margin-left: 2vw;
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
    height: 5%;
}

/* parte do scroll, também feito colocado o tamanho de folha A4 para deixar o documento nesse formato */
.q-ma-md {
    min-width: 210mm;
    /* min-height: 297mm; */
    display: flex;
    flex-direction: column;
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
    font-size: 1vw;
 }

 /* feito para os blocos do começo do documento */
 #bloco {
    display: flex;
    justify-content: space-between;
 }

 /* feito para fazer as bordas do bloco */
 .borda {
    border: 2px solid black;
    margin-bottom: 5px;
 }

 /* definição de tamanho do contéudo e também da estilização do documento em cada parte */
 .dois {
    width: 38%;
 }

 .dois-um {
    width: 20%;
 }

 .tres-um {
    width: 72%;
 }

 .tres-dois {
    width: 27%;
 }

 .quatro h3 {
    font-size: .9em;
    font-weight: bold;
    line-height: 1.5;
    letter-spacing: .005mm;
    margin-bottom: .5mm;
    margin-left: 1.5mm;
 }

 .quatro p {
    font-size: .8em;
    margin-bottom: 0.8mm;
    margin-left: 1.5mm;
    margin-right: 1.5mm;
 }

 h1 {
    font-size: 1.25em;
    font-weight: bold;
    text-align: center;
    line-height: 1.5;
    letter-spacing: .005mm;
 }

 #bloco h3 {
    font-size: .9em;
    font-weight: bold;
    line-height: 1.5;
    letter-spacing: .005mm;
 }

 #bloco h3,  #bloco p {
    text-align: center;
    margin-top: 0.7mm;
 }

 #bloco p {
    font-size: .8em;
    margin-bottom: 0.8mm;
    margin-left: 1.5mm;
    margin-right: 1.5mm;
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

.textoponto {
    margin-top: 10mm;
}

.textoponto h2 {
    font-size: 1.15em;
    font-weight: bold;
    line-height: 1.5;
    letter-spacing: .005mm;
    margin-bottom: 1mm;
    text-indent: 2.0em;
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

li {
    font-size: .8em;
    margin-bottom: 0.8mm;
    margin-left: 1.5mm;
    margin-right: 1.5mm;
    text-align: justify;
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
    font-size: x-large;
    font-weight: bold;
}

.back {
    background-color: rgb(180, 2, 180);
    color: white;
}


</style>