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
            <div :class="['doc', { 'doc-expandido' : !toggleLigado }]">

                <div class="q-ma-md">
                    <q-scroll-area class="rolagem-documento">
                    <div class="q-py-xs">
                        <div id="documento">
                            <div id="pag">

                                <div class="borda">
                                    <h1>DOCUMENTO DE FORMALIZAÇÃO DE DEMANDA</h1>
                                    <h1>N.° XXX/XXXX</h1>
                                </div>
                                 
                                <div id="bloco">
                                    <div class="borda dois" @dblclick="ativarEdicaoManual('areaRequisitante')">
                                        <label><h3>Área Requisitante:</h3></label>
                                        <div v-if="tipoInput('areaRequisitante')">
                                            <ContentEditable v-model="campos.areaRequisitante" @input="sugerirCampoDebounced('areaRequisitante', campos.areaRequisitante)" @blur="encerrarEdicao()" @keyup.enter="encerrarEdicao()" autofocus />
                                        </div>
                                        <div v-else>
                                            <p>{{  campos.areaRequisitante || 'XXXXXXXXX' }}</p>
                                        </div>
                                    </div>

                                    <div class="borda dois-um" @dblclick="ativarEdicaoManual('dataPrevisao')">
                                        <label><h3>Data Previsão:</h3></label>
                                        <div v-if="tipoInput('dataPrevisao')">
                                            <ContentEditable v-model="campos.dataPrevisao" @input="sugerirCampoDebounced('dataPrevisao', campos.dataPrevisao)" @blur="encerrarEdicao()" @keyup.enter="encerrarEdicao()" autofocus />
                                        </div>
                                        <div v-else>
                                            <p>{{ campos.dataPrevisao || 'XX/XXXX' }}</p>
                                        </div>
                                    </div>

                                    <div class="borda dois-um" @dblclick="ativarEdicaoManual('exercicio')">
                                        <label><h3>Exercício:</h3></label>
                                        <div v-if="tipoInput('exercicio')">
                                            <ContentEditable v-model="campos.exercicio" @input="sugerirCampoDebounced('exercicio', campos.exercicio)" @blur="encerrarEdicao()" @keyup.enter="encerrarEdicao()" autofocus />
                                        </div>
                                        <div v-else>
                                            <p>{{ campos.exercicio || 'XXXX' }}</p>
                                        </div>
                                    </div>

                                    <div class="borda dois-um">
                                        <h3>Data:</h3>
                                        <p>XX/XX/XXXX</p>
                                    </div>
                                </div>
                                
                                <div id="bloco">
                                    <div class="borda tres-um" @dblclick="ativarEdicaoManual('responsavelSolicitacao')">
                                        <label><h3>Responsável pela Solicitação:</h3></label>
                                        <div v-if="tipoInput('responsavelSolicitacao')">
                                            <ContentEditable v-model="campos.responsavelSolicitacao" @input="sugerirCampoDebounced('resposanvelSolicitacao', campos.responsavelSolicitacao)" @blur="encerrarEdicao()" @keyup.enter="encerrarEdicao()" autofocus />
                                        </div>
                                        <div v-else>
                                            <p>{{ campos.responsavelSolicitacao || 'XXXXXXXXXXXXXXX XXXXX XXXXXXX' }}</p>
                                        </div>
                                    </div>
                                    
                                    <div class="borda tres-dois" @dblclick="ativarEdicaoManual('matricula')">
                                        <label><h3>Matrícula:</h3></label>
                                        <div v-if="tipoInput('matricula')">
                                            <ContentEditable v-model="campos.matricula" @input="sugerirCampoDebounced('matricula', campos.matricula)" @blur="encerrarEdicao()" @keyup.enter="encerrarEdicao()" autofocus />
                                        </div>
                                        <div v-else>
                                            <p>{{ campos.matricula || 'XXXXX' }}</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="borda quatro">
                                    <div @dblclick="ativarEdicaoManual('grauPrioridade')">
                                        <div v-if="tipoRadio('grauPrioridade')">
                                            <label><h3>Grau de Prioridade: 
                                            <label>
                                                <input type="radio" value="Baixo" v-model="campos.grauPrioridade" @change="encerrarEdicao()"> Baixo
                                            </label>
                                            <label>
                                                <input type="radio" value="Médio" v-model="campos.grauPrioridade" @change="encerrarEdicao()"> Médio
                                            </label>
                                            <label>
                                                <input type="radio" value="Alto" v-model="campos.grauPrioridade" @change="encerrarEdicao()"> Alto
                                            </label>
                                            <label>
                                                <input type="radio" value="Altíssimo" v-model="campos.grauPrioridade" @change="encerrarEdicao()"> Altíssimo
                                            </label>
                                            </h3></label>
                                        </div>
                                        <div v-else>
                                            <h3>
                                                Grau de Prioridade: 
                                                <template v-for="(nivel, index) in getOpcoesCampo('grauPrioridade')" :key="nivel">
                                                    ({{  campos.grauPrioridade === nivel ? 'X' :  ' ' }}) {{ nivel }}
                                                    <span v-if="index < getOpcoesCampo('grauPrioridade').lenght - 1"></span>
                                                </template>
                                            </h3>
                                        </div>
                                    </div>
                                    
                                    <div @dblclick="ativarEdicaoManual('justificativa')">
                                        <label><h3>Justificativa:</h3></label>
                                        <div v-if="tipoTextarea('justificativa')">
                                            <ContentEditable v-model="campos.justificativa" @input="sugerirCampoDebounced('justificativa', campos.justificativa)" @blur="encerrarEdicao()" @keyup.enter="encerrarEdicao()" autofocus />
                                        </div>
                                        <div v-else>
                                            <p>{{ campos.justificativa || 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, repellendus! Numquam perferendis quam odit. Veniam officiis tempore voluptate veritatis maxime, omnis pariatur debitis iure id. Expedita itaque placeat eos cum!' }}</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="texto" @dblclick="ativarEdicaoManual('doObjeto')">
                                    <label><h2>1 Do Objeto</h2></label>
                                    <div v-if="tipoTextarea('doObjeto')">
                                        <ContentEditable v-model="campos.doObjeto" @input="sugerirCampoDebounced('doObjeto', campos.doObjeto)" @blur="encerrarEdicao()" @keyup.enter="encerrarEdicao()" autofocus />
                                    </div>
                                    <div v-else>
                                        <p>{{ campos.doObjeto || 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, repellendus! Numquam perferendis quam odit. Veniam officiis tempore voluptate veritatis maxime, omnis pariatur debitis iure id. Expedita itaque placeat eos cum!' }}</p>
                                    </div>
                                </div>

                                <div class="texto" @dblclick="ativarEdicaoManual('sugestaoModalidade')">
                                    <label><h2>2 Da Sugestão De Modalidade</h2></label>
                                    <div v-if="tipoTextarea('sugestaoModalidade')">
                                        <ContentEditable v-model="campos.sugestaoModalidade" @input="sugerirCampoDebounced('sugestaoModalidade', campos.sugestaoModalidade)" @blur="encerrarEdicao()" @keyup.enter="encerrarEdicao()" autofocus />
                                    </div>
                                    <div v-else>
                                        <p>{{ campos.sugestaoModalidade || 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, repellendus! Numquam perferendis quam odit. Veniam officiis tempore voluptate veritatis maxime, omnis pariatur debitis iure id. Expedita itaque placeat eos cum!' }}</p>
                                    </div>
                                </div>

                                <div class="texto" @dblclick="ativarEdicaoManual('justificativaNecessidade')">
                                    <h2>3 Justificativa Da Necessidade</h2>
                                    <div v-if="tipoTextarea('justificativaNecessidade')">
                                        <ContentEditable v-model="campos.justificativaNecessidade" @input="sugerirCampoDebounced('justificativaNecessidade', campos.justificativaNecessidade)" @blur="encerrarEdicao()" @keyup.enter="encerrarEdicao()" autofocus />
                                    </div>
                                    <div v-else>
                                        <p>{{ campos.justificativaNecessidade || 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, repellendus! Numquam perferendis quam odit. Veniam officiis tempore voluptate veritatis maxime, omnis pariatur debitis iure id. Expedita itaque placeat eos cum!' }}</p>
                                    </div>
                                </div>

                                <div class="texto" @dblclick="ativarEdicaoManual('previsaoPca')">
                                    <h2>4 Previsão Da Demanda No Pca</h2>
                                    <div v-if="tipoTextarea('previsaoPca')">
                                        <ContentEditable v-model="campos.previsaoPca" @input="sugerirCampoDebounced('previsaoPca', campos.previsaoPca)" @blur="encerrarEdicao()" @keyup.enter="encerrarEdicao()" autofocus />
                                    </div>
                                    <div v-else>
                                        <p>{{ campos.previsaoPca || 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, repellendus! Numquam perferendis quam odit. Veniam officiis tempore voluptate veritatis maxime, omnis pariatur debitis iure id. Expedita itaque placeat eos cum!' }}</p>
                                    </div>
                                </div>

                                <div class="texto" @dblclick="ativarEdicaoManual('demandasVinculadas')">
                                    <h2>5 Demandas Vinculadas ou Interdependentes</h2>
                                    <div v-if="tipoTextarea('demandasVinculadas')">
                                        <ContentEditable v-model="campos.demandasVinculadas" @input="sugerirCampoDebounced('demandasVinculadas', campos.demandasVinculadas)" @blur="encerrarEdicao()" @keyup.enter="encerrarEdicao()" autofocus />
                                    </div>
                                    <div v-else>
                                        <p>{{ campos.demandasVinculadas || 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, repellendus! Numquam perferendis quam odit. Veniam officiis tempore voluptate veritatis maxime, omnis pariatur debitis iure id. Expedita itaque placeat eos cum!' }}</p>
                                    </div>
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
                                                    <th style="width: 10px;"></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="(linha, index) in campos.materiais" :key="linha.id">

                                                    <td @dblclick="ativarEdicaoManual(`materiais_item_${index}`)">
                                                        <template v-if="modoEdicaoManual && campoEditando?.nome === `materiais_item_${index}`">
                                                            <ContentEditable 
                                                                type="number"
                                                                v-model="linha.item"
                                                                @blur="encerrarEdicao"
                                                                @keyup.enter="encerrarEdicao"
                                                                autofocus
                                                            />
                                                        </template>
                                                        <template v-else>
                                                            {{ linha.item || '1' }}
                                                        </template>
                                                    </td>

                                                    <td @dblclick="ativarEdicaoManual(`materiais_classe_${index}`)">
                                                        <template v-if="modoEdicaoManual && campoEditando?.nome === `materiais_classe_${index}`">
                                                            <ContentEditable 
                                                                type="text"
                                                                v-model="linha.classe"
                                                                @blur="encerrarEdicao"
                                                                @keyup.enter="encerrarEdicao"
                                                                autofocus
                                                            />
                                                        </template>
                                                        <template v-else>
                                                            {{ linha.classe || 'XXXXXXXXXX' }}
                                                        </template>
                                                    </td>

                                                    <td @dblclick="ativarEdicaoManual(`materiais_descricao_${index}`)">
                                                        <template v-if="modoEdicaoManual && campoEditando?.nome === `materiais_descricao_${index}`">
                                                            <ContentEditable 
                                                                v-model="linha.descricao"
                                                                @blur="encerrarEdicao"
                                                                @keyup.enter="encerrarEdicao"
                                                                autofocus
                                                            />
                                                        </template>
                                                        <template v-else>
                                                            {{ linha.descricao || 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptates at, earum mollitia fuga veritatis velit fugit! Mollitia harum quod, deserunt quibusdam, maxime quaerat error, omnis pariatur officia minima dolore.' }}
                                                        </template>
                                                    </td>

                                                    <td @dblclick="ativarEdicaoManual(`materiais_und_${index}`)">
                                                        <template v-if="modoEdicaoManual && campoEditando?.nome === `materiais_und_${index}`">
                                                            <ContentEditable 
                                                                type="text"
                                                                v-model="linha.und"
                                                                @blur="encerrarEdicao"
                                                                @keyup.enter="encerrarEdicao"
                                                                autofocus
                                                            />
                                                        </template>
                                                        <template v-else>
                                                            {{ linha.und || 'XXXXXX' }}
                                                        </template>
                                                    </td>

                                                    <td @dblclick="ativarEdicaoManual(`materiais_qtde_${index}`)">
                                                        <template v-if="modoEdicaoManual && campoEditando?.nome === `materiais_qtde_${index}`">
                                                            <ContentEditable 
                                                                type="number"
                                                                v-model="linha.qtde"
                                                                @blur="encerrarEdicao"
                                                                @keyup.enter="encerrarEdicao"
                                                                autofocus
                                                            />
                                                        </template>
                                                        <template v-else>
                                                            {{ linha.qtde || '0' }}
                                                        </template>
                                                    </td>

                                                    <td @dblclick="ativarEdicaoManual(`materiais_precoUnd_${index}`)">
                                                        <template v-if="modoEdicaoManual && campoEditando?.nome === `materiais_precoUnd_${index}`">
                                                            <ContentEditable
                                                                type="number" 
                                                                v-model="linha.precoUnd"
                                                                @blur="encerrarEdicao"
                                                                @keyup.enter="encerrarEdicao"
                                                                autofocus
                                                            />
                                                        </template>
                                                        <template v-else>
                                                            R${{ linha.precoUnd || '0.00' }}
                                                        </template>
                                                    </td>

                                                    <td>R${{ (linha.qtde * linha.precoUnd).toFixed(2) }}</td>

                                                    <td v-if="modoEdicaoManual && campoEditando?.nome?.includes(`_${index}`)">
                                                        <q-btn color="negative" label="Excluir" @click="removerLinha('materiais', index)"></q-btn>
                                                    </td>

                                                </tr>
                                            </tbody>
                                        </table>
                                        <div v-if="modoEdicaoManual && campoEditando?.nome?.startsWith(`materiais_`) && campoEditando?.nome?.startsWith('materiais_')">
                                            <q-btn @click="adicionarLinha('materiais')">Adicionar Linha</q-btn>
                                        </div>
                                    </div>

                                    <div class="textoponto">
                                        <h2>6.<span class="posponto">2</span> Serviços</h2>
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
                                                    <th style="width: 10px;"></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="(linha, index) in campos.servicos" :key="linha.id" style="height: 40px;">

                                                    <td @dblclick="ativarEdicaoManual(`servicos_item_${index}`)">
                                                        <template v-if="modoEdicaoManual && campoEditando?.nome === `servicos_item_${index}`">
                                                            <ContentEditable 
                                                                type="number"
                                                                v-model="linha.item"
                                                                @blur="encerrarEdicao"
                                                                @keyup.enter="encerrarEdicao"
                                                                autofocus
                                                            />
                                                        </template>
                                                        <template v-else>
                                                            {{ linha.item || '1' }}
                                                        </template>
                                                    </td>

                                                    <td @dblclick="ativarEdicaoManual(`servicos_codIpm_${index}`)">
                                                        <template v-if="modoEdicaoManual && campoEditando?.nome === `codIpm_${index}`">
                                                            <ContentEditable 
                                                                type="number"
                                                                v-model="linha.codIpm"
                                                                @blur="encerrarEdicao"
                                                                @keyup.enter="encerrarEdicao"
                                                                autofocus
                                                            />
                                                        </template>
                                                        <template v-else>
                                                            {{ linha.codIpm || '1' }}
                                                        </template>
                                                    </td>

                                                    <td @dblclick="ativarEdicaoManual(`servicos_catSer_${index}`)">
                                                        <template v-if="modoEdicaoManual && campoEditando?.nome === `catSer_${index}`">
                                                            <ContentEditable 
                                                                type="number"
                                                                v-model="linha.catSer"
                                                                @blur="encerrarEdicao"
                                                                @keyup.enter="encerrarEdicao"
                                                                autofocus
                                                            />
                                                        </template>
                                                        <template v-else>
                                                            {{ linha.catSer || '1' }}
                                                        </template>
                                                    </td>

                                                    <td @dblclick="ativarEdicaoManual(`servicos_classe_${index}`)">
                                                        <template v-if="modoEdicaoManual && campoEditando?.nome === `servicos_classe_${index}`">
                                                            <ContentEditable 
                                                                type="text"
                                                                v-model="linha.classe"
                                                                @blur="encerrarEdicao"
                                                                @keyup.enter="encerrarEdicao"
                                                                autofocus
                                                            />
                                                        </template>
                                                        <template v-else>
                                                            {{ linha.classe || 'XXXXXXXXXX' }}
                                                        </template>
                                                    </td>

                                                    <td @dblclick="ativarEdicaoManual(`servicos_descricao_${index}`)">
                                                        <template v-if="modoEdicaoManual && campoEditando?.nome === `servicos_descricao_${index}`">
                                                            <ContentEditable 
                                                                v-model="linha.descricao"
                                                                @blur="encerrarEdicao"
                                                                @keyup.enter="encerrarEdicao"
                                                                autofocus
                                                            />
                                                        </template>
                                                        <template v-else>
                                                            {{ linha.descricao || 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptates at, earum mollitia fuga veritatis velit fugit! Mollitia harum quod, deserunt quibusdam, maxime quaerat error, omnis pariatur officia minima dolore.' }}
                                                        </template>
                                                    </td>

                                                    <td @dblclick="ativarEdicaoManual(`servicos_und_${index}`)">
                                                        <template v-if="modoEdicaoManual && campoEditando?.nome === `servicos_und_${index}`">
                                                            <ContentEditable 
                                                                type="text"
                                                                v-model="linha.und"
                                                                @blur="encerrarEdicao"
                                                                @keyup.enter="encerrarEdicao"
                                                                autofocus
                                                            />
                                                        </template>
                                                        <template v-else>
                                                            {{ linha.und || 'XXXXXX' }}
                                                        </template>
                                                    </td>

                                                    <td @dblclick="ativarEdicaoManual(`servicos_qtde_${index}`)">
                                                        <template v-if="modoEdicaoManual && campoEditando?.nome === `servicos_qtde_${index}`">
                                                            <ContentEditable 
                                                                type="number"
                                                                v-model="linha.qtde"
                                                                @blur="encerrarEdicao"
                                                                @keyup.enter="encerrarEdicao"
                                                                autofocus
                                                            />
                                                        </template>
                                                        <template v-else>
                                                            {{ linha.qtde || '0' }}
                                                        </template>
                                                    </td>

                                                    <td @dblclick="ativarEdicaoManual(`servicos_precoUnd_${index}`)">
                                                        <template v-if="modoEdicaoManual && campoEditando?.nome === `servicos_precoUnd_${index}`">
                                                            <ContentEditable
                                                                type="number" 
                                                                v-model="linha.precoUnd"
                                                                @blur="encerrarEdicao"
                                                                @keyup.enter="encerrarEdicao"
                                                                autofocus
                                                            />
                                                        </template>
                                                        <template v-else>
                                                            R${{ linha.precoUnd || '0.00' }}
                                                        </template>
                                                    </td>

                                                    <td>R${{ (linha.qtde * linha.precoUnd).toFixed(2) }}</td>

                                                    <td v-if="modoEdicaoManual && campoEditando?.nome?.startsWith(`servicos_`) && campoEditando?.nome?.includes(`_${index}`)">
                                                        <q-btn color="negative" label="Excluir" @click="removerLinha('servicos', index)"></q-btn>
                                                    </td>

                                                </tr>
                                            </tbody>
                                        </table>
                                        <div v-if="modoEdicaoManual && campoEditando?.nome?.startsWith('servicos_')">
                                            <q-btn @click="adicionarLinha('servicos')">Adicionar Linha</q-btn>
                                        </div>
                                    </div>
                                </div>

                                <div class="texto" @dblclick="ativarEdicaoManual('previsaoUtilizacao')">
                                    <h2>7 Previsão de Utilização E Critérios De Aceitação</h2>
                                    <div v-if="tipoTextarea('previsaoUtilizacao')">
                                        <ContentEditable v-model="campos.previsaoUtilizacao" @input="sugerirCampoDebounced('previsaoUtilizacao', campos.previsaoUtilizacao)" @blur="encerrarEdicao()" @keyup.enter="encerrarEdicao()" autofocus />
                                    </div>
                                    <div v-else>
                                        <p>{{ campos.previsaoUtilizacao || 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, repellendus! Numquam perferendis quam odit. Veniam officiis tempore voluptate veritatis maxime, omnis pariatur debitis iure id. Expedita itaque placeat eos cum!' }}</p>
                                    </div>
                                </div>

                                <div class="texto">
                                    <h2>8 Indicação De Equipe De Planejamento</h2>
                                    <p>Para composição da equipe de planejamento, indicamos os servidores abaixo</p>
                                    <ul>
                                        <div @dblclick="ativarEdicaoManual('equipePlanejamentoUm')">
                                            <div v-if="tipoInput('equipePlanejamentoUm')">
                                                <ContentEditable v-model="campos.equipePlanejamentoUm" @blur="encerrarEdicao()" @keyup.enter="encerrarEdicao()" autofocus />
                                            </div>
                                            <div v-else>
                                                <li>{{ campos.equipePlanejamentoUm || 'XXXXXXXX XXXXX XXX XXXXXX' }}</li>
                                            </div>
                                        </div>

                                        <div @dblclick="ativarEdicaoManual('equipePlanejamentoDois')">
                                            <div v-if="tipoInput('equipePlanejamentoDois')">
                                                <ContentEditable v-model="campos.equipePlanejamentoDois" @blur="encerrarEdicao()" @keyup.enter="encerrarEdicao()" autofocus />
                                            </div>
                                            <div v-else>
                                                <li>{{ campos.equipePlanejamentoDois || 'XXXXXXXX XXXXX XXX XXXXXX' }}</li>
                                            </div>
                                        </div>

                                        <div @dblclick="ativarEdicaoManual('equipePlanejamentoTres')">
                                            <div v-if="tipoInput('equipePlanejamentoTres')">
                                                <ContentEditable v-model="campos.equipePlanejamentoTres" @blur="encerrarEdicao()" @keyup.enter="encerrarEdicao()" autofocus />
                                            </div>
                                            <div v-else>
                                                <li>{{ campos.equipePlanejamentoTres || 'XXXXXXXX XXXXX XXX XXXXXX' }}</li>
                                            </div>
                                        </div>

                                        <div @dblclick="ativarEdicaoManual('equipePlanejamentoQuatro')">
                                            <div v-if="tipoInput('equipePlanejamentoQuatro')">
                                                <ContentEditable v-model="campos.equipePlanejamentoQuatro" @blur="encerrarEdicao()" @keyup.enter="encerrarEdicao()" autofocus />
                                            </div>
                                            <div v-else>
                                                <li>{{ campos.equipePlanejamentoQuatro || 'XXXXXXXX XXXXX XXX XXXXXX' }}</li>
                                            </div>
                                        </div>
                                    </ul>
                                    <p>Os servidores indicados possuem formação e expertise necessários ao correto planejamento da presente contratação</p>
                                </div>

                                <div>
                                    <div class="texto">
                                        <h2>9 Da Fiscalização E Gestão Do Contato</h2>
                                        <div class="fiscal">
                                            <h3>Fiscal:</h3>
                                            <div @dblclick="ativarEdicaoManual('fiscal')">
                                                <div v-if="tipoInput('fiscal')">
                                                    <ContentEditable v-model="campos.fiscal" @blur="encerrarEdicao()" @keyup.enter="encerrarEdicao()" autofocus />
                                                </div>
                                                <div v-else>
                                                    <p>{{ campos.fiscal || 'XXXXXXXX XXXXX XXXXXX' }}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="fiscal">
                                            <h3>Fiscal Substituto:</h3>
                                            <div @dblclick="ativarEdicaoManual('fiscalSubstituto')">
                                                <div v-if="tipoInput('fiscalSubstituto')">
                                                    <ContentEditable v-model="campos.fiscalSubstituto" @blur="encerrarEdicao()" @keyup.enter="encerrarEdicao()" autofocus />
                                                </div>
                                                <div v-else>
                                                    <p>{{ campos.fiscalSubstituto || 'XXXXXXXX XXXXX XXXXXX' }}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="fiscal">
                                            <h3>Gestor:</h3>
                                            <div @dblclick="ativarEdicaoManual('gestor')">
                                                <div v-if="tipoInput('gestor')">
                                                    <ContentEditable v-model="campos.gestor" @blur="encerrarEdicao()" @keyup.enter="encerrarEdicao()" autofocus />
                                                </div>
                                                <div v-else>
                                                    <p>{{ campos.gestor || 'XXXXXXXX XXXXX XXXXXX' }}</p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="fiscal">
                                            <h3>Gestor Substituto:</h3>
                                            <div @dblclick="ativarEdicaoManual('gestorSubstituto')">
                                                <div v-if="tipoInput('gestorSubstituto')">
                                                    <ContentEditable v-model="campos.gestorSubstituto" @blur="encerrarEdicao()" @keyup.enter="encerrarEdicao()" autofocus />
                                                </div>
                                                <div v-else>
                                                    <p>{{ campos.gestorSubstituto || 'XXXXXXXX XXXXX XXXXXX' }}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="textoponto">
                                        <h2>9.<span class="posponto">1</span> Justificativa</h2>
                                        <p>Os servidores indicados são responsáveis por acompanhar a execução contratual, realizar o recebimento provisório e atestar o recebimento definitivo dos bens/serviços.</p><br>
                                        <div class="fiscal">
                                            <p><strong>Elaborado por:</strong></p>
                                            <p><strong>Ordenador de Despesa:</strong></p>
                                            <br><br><br><br>
                                        </div>

                                        <div class="fiscal2">
                                            <div style="width: 40%; border-top: 1px solid black;">
                                                <div @dblclick="ativarEdicaoManual('nomeElaborador')">
                                                    <div v-if="tipoInput('nomeElaborador')">
                                                        <ContentEditable v-model="campos.nomeElaborador" @blur="encerrarEdicao()" @keyup.enter="encerrarEdicao()" autofocus />
                                                    </div>
                                                    <div v-else>
                                                        <p>{{ campos.nomeElaborador || 'XXXXXXXX XXXXX XXX XXXXXX' }}</p>
                                                    </div>
                                                    <p>Coordenador Inovação</p>
                                                </div>
                                            </div>

                                            <div style="width: 10%;"></div>

                                            <div style="width: 40%; border-top: 1px solid black;">
                                                <div @dblclick="ativarEdicaoManual('nomeOrdenador')">
                                                    <div v-if="tipoInput('nomeOrdenador')">
                                                        <ContentEditable v-model="campos.nomeOrdenador" @blur="encerrarEdicao()" @keyup.enter="encerrarEdicao()" autofocus />
                                                    </div>
                                                    <div v-else>
                                                        <p>{{ campos.nomeOrdenador || 'XXXXXXXX XXXXX XXX XXXXXX' }}</p>
                                                    </div>
                                                </div>
                                                <p>Secretário Municipal de Ciência, Inovação, Tecnologia e Desenvolvimento Econômico</p>
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
                        <q-toggle v-model="value" color="purple-14" class="tamanhotg" />
                    </div>
                </div>

            </div>
            <div id="form" v-if="toggleLigado">
                <div style="flex-grow: 1;">
                    <component :is="formAtualComponent" @next="proximo" @prev="anterior"></component>
                </div>
                
                <div style="text-align: center;">
                    <p>Você pode também editar manualmente! (Isso vai desativar o formulário de I.A.)</p>
                </div>
                <div class="btnedit" @click="botaoEditar()">
                    <q-btn id="editar" label="EDITAR DOCUMENTO" class="shadow-4"></q-btn>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { useIaStore } from '@/stores/ia';
import ContentEditable from '../ContentEditable.vue';
import BaixarPdf from './BaixarPdf.vue';
import FormPasso1 from './FormPasso1.vue';
import FormPasso2 from './FormPasso2.vue';
import FormPasso3 from './FormPasso3.vue';
import FormPasso4 from './FormPasso4.vue';
import FormPasso5 from './FormPasso5.vue';
import FormPasso6 from './FormPasso6.vue';

export default {
    components: { FormPasso1, FormPasso2, FormPasso3, FormPasso4, FormPasso5, FormPasso6, BaixarPdf, ContentEditable },

    data() {
        return {
            value: true,
            formAtual: 1,
            formData: {},
            formFinalizado: false,
            toggleLigado: true,
            modoEdicaoManual: false,
            campoEditando: null,
            campos: {
                areaRequisitante: '',
                dataPrevisao: '',
                exercicio: '',
                responsavelSolicitacao: '',
                matricula: '',
                grauPrioridade:'Baixo',
                justificativa:'',
                doObjeto:'',
                sugestaoModalidade: '',
                justificativaNecessidade: '',
                previsaoPca: '',
                demandasVinculadas: '',
                materiais: [
                    {
                        id: '',
                        item: '',
                        classe: '',
                        descricao: '',
                        und: '',
                        qtde: '',
                        precoUnd: '',
                        precoTotal: '',
                    },
                ],
                materiaisId: 2,
                servicos: [
                    {
                        id: '',
                        item: '',
                        codIpm: '',
                        catSer: '',
                        classe: '',
                        descricao: '',
                        und: '',
                        qtde: '',
                        precoUnd: '',
                        precoTotal: '',
                    }
                ],
                servicosId: 2,
                previsaoUtilizacao: '',
                equipePlanejamentoUm: '',
                equipePlanejamentoDois: '',
                equipePlanejamentoTres: '',
                equipePlanejamentoQuatro: '',
                fiscal: '',
                fiscalSubstituto: '',
                gestor: '',
                gestorSubstituto: '',
                nomeElaborador: '',
                nomeOrdenador: '',
            },

            definicaoCampos: [
                {
                    nome: 'areaRequisitante',
                    tipo: 'input',
                },
                {
                    nome: 'dataPrevisao',
                    tipo: 'input',
                },
                {
                    nome: 'exercicio',
                    label: 'Exercício',
                    tipo: 'input',
                },
                {
                    nome: 'responsavelSolicitacao',
                    tipo: 'input',
                },
                {
                    nome: 'matricula',
                    tipo: 'input',
                },
                {
                    nome: 'grauPrioridade',
                    tipo: 'radio',
                    opcoes: [ 'Baixo', 'Médio', 'Alto', 'Altíssimo' ],
                },
                {
                    nome: 'justificativa',
                    tipo: 'textarea',
                },
                {
                    nome: 'doObjeto',
                    tipo: 'textarea',
                },
                {
                    nome: 'sugestaoModalidade',
                    tipo: 'textarea',
                },
                {
                    nome: 'justificativaNecessidade',
                    tipo: 'textarea',
                },
                {
                    nome: 'previsaoPca',
                    tipo: 'textarea',
                },
                {
                    nome: 'demandasVinculadas',
                    tipo: 'textarea',
                },
                {
                    nome: 'previsaoUtilizacao',
                    tipo: 'textarea',
                },
                {
                    nome: 'equipePlanejamentoUm',
                    tipo: 'input',
                },
                {
                    nome: 'equipePlanejamentoDois',
                    tipo: 'input',
                },
                {
                    nome: 'equipePlanejamentoTres',
                    tipo: 'input',
                },
                {
                    nome: 'equipePlanejamentoQuatro',
                    tipo: 'input',
                },
                {
                    nome: 'fiscal',
                    tipo: 'input',
                },
                {
                    nome: 'fiscalSubstituto',
                    tipo: 'input',
                },
                {
                    nome: 'gestor',
                    tipo: 'input',
                },
                {
                    nome: 'gestorSubstituto',
                    tipo: 'input',
                },
                {
                    nome: 'nomeElaborador',
                    tipo: 'input',
                },
                {
                    nome: 'nomeOrdenador',
                    tipo: 'input',
                },
                
            ]
        };
    },

    computed: {
        formAtualComponent() {
            return this.formFinalizado ? 'BaixarPdf' : `FormPasso${this.formAtual}`;
        },
    },

    created() {
        this.iaStore = useIaStore();
        this.sugerirCampoDebounced = this.debounce(this.sugerirCampo, 500);

        this.sugestoesIa = this.definicaoCampos.reduce((acc, campo) => {
            acc[campo.nome] = '';
            return acc;
        }, {});
    },

    methods: {
        async sugerirIa() {
            await this.iaStore.obterSugestao(this.campos)
        },

        debounce(func, wait){
            let timeout;
            return function (...args) {
                clearTimeout(timeout);
                timeout = setTimeout(() => func.apply(this, args), wait);
            };
        },

        sugerirCampo(campo, valor) {
            if (!valor) return;

            axios.post('http://localhost:8000/api/autocomplete', {
                campo,
                valor
            }).then(response => {
                this.sugestaoAtual[campo] = response.data.sugestao;
                console.log('Sugestão IA:', response.data.sugestao);
            }).catch(err => {
                console.error('Erro na sugestão IA:', err);
                
            })
        },

        getOpcoesCampo(nomeCampo) {
            const campo = this.definicaoCampos.find(c => c.nome === nomeCampo);
            return campo && campo.opcoes ? campo.opcoes : [];
        },

        adicionarLinha(tabela) {
            if(tabela === 'materiais') {
                this.campos.materiais.push({
                    id: this.campos.materiaisId++,
                    item: '',
                    classe: '',
                    descricao: '',
                    und: '',
                    qtde: 0,
                    precoUnd: 0,
                    precoTotal: 0,
                })
            } else if (tabela === 'servicos') {
                this.campos.servicos.push({
                    id: this.campos.servicosId++,
                    item: '',
                    codIpm: '',
                    catSer: '',
                    classe: '',
                    descricao: '',
                    und: '',
                    qtde: 0,
                    precoUnd: 0,
                    precoTotal: 0,
                })
            }
        },

        removerLinha(tabela, index) {
            if (tabela === 'materiais') {
                this.campos.materiais.splice(index, 1);
            } else if (tabela === 'servicos') {
                this.campos.servicos.splice(index, 1);
            }
        },

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

            axios.post('http://localhost:8000/api/completar', this.campos)
                .then(response => {
                    const iaCampos = response.data.iaCampos;
                    this.campos = { ...this.campos, ...iaCampos };

                    this.$q.notify({
                        type: 'positive',
                        message: 'Ia completou o documento com sucesso!'
                    });
                })
                .catch(error => {
                    console.error('Erro ao completar com IA:', error);
                    this.$q.notify({
                        type: 'negative',
                        message: 'Erro ao usar IA para completar o documento.'
                    })
                })
        },

        desligarForm() {
            console.log('Formulário desligado');
            if (!this.value) {
                this.toggleLigado = false;
            }
        },

        botaoEditar() {
            this.toggleLigado = false;
            this.value = false;
            this.modoEdicaoManual = true;
        },

        ativarEdicaoManual(campo) {
            this.toggleLigado = false;
            this.value = false;
            this.modoEdicaoManual = true;

            let defCampo = null;

            if( campo.includes('_')) {
                const [campoNome] = campo.split('_');
                defCampo = this.definicaoCampos.find(c => c.nome === campoNome);
            } else {
                defCampo = this.definicaoCampos.find(c => c.nome === campo);
            }
            
            this.campoEditando = { 
                nome: campo,
                tipo: defCampo ?  defCampo.tipo : 'input',
            };
        },

        desligarFormulario() {
            this.toggleLigado = false;
            this.value = false;
            this.modoEdicaoManual = true;
        },

        encerrarEdicao() {
            if(this.campoEditando) {
                const nomeCampo = this.campoEditando.nome;
                const valor = this.campos[nomeCampo];
                console.log( `Campo "${nomeCampo}" atualizado com valor: ${valor}`);
            }

            this.campoEditando = null;
        },

        tipoInput(campo) {
            return this.campoEditando?.nome === campo && this.campoEditando?.tipo === 'input';
        },

        tipoTextarea(campo) {
            return this.campoEditando?.nome === campo && this.campoEditando?.tipo === 'textarea';
        },

        tipoRadio(campo) {
            return this.campoEditando?.nome === campo && this.campoEditando?.tipo === 'radio';
        }

    },

    watch: {
        value(newVal) {
            this.toggleLigado = newVal;
            console.log('Formulário está ' + (newVal ? 'ligado' : 'desligado'));
        }
    },

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
 .doc {
    flex: 1 1 60%;
    display: flex;
    justify-content: column;
    border-right: 1px solid #ccc;
    transition: flex 0.5s ease, margin 0.5s ease;
 }

 .doc-expandido {
    flex: 1 1 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin: 0 auto;
    border-right: none;
 }

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

.fiscal {
    display: flex; 
    justify-content: flex-start;
}

.fiscal h3 {
    width: 40%;
    font-size: .8em;
    font-weight: bold;
}

.fiscal p {
    margin-top: 7mm;
    width: 100%;
    font-size: .8em;
}

.fiscal2 {
    display: flex; 
    justify-content: flex-start;
    flex-wrap: wrap;
}

.fiscal2 p {
    width: 100%;
    text-align: center;
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


</style>