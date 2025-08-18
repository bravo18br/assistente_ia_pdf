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

            <div v-if="dfdStore.dicaCampo()" class="painel-ajuda">
                <p>{{ dfdStore.dicaCampo() }}</p>
            </div>


            <div :class="['doc', { 'doc-expandido' : !dfdStore.value }]">

                <div class="q-ma-md">
                    <q-scroll-area class="rolagem-documento">
                    <div class="q-py-xs">
                        <div id="documento" ref="Documento">
                            <div id="pag" >

                                <div class="borda">
                                    <h1>DOCUMENTO DE FORMALIZAÇÃO DE DEMANDA</h1>
                                    <h1>N.° XXX/XXXX</h1>
                                </div>
                                 
                                <div id="bloco">
                                    <div class="borda dois" @dblclick="dfdStore.ativarEdicaoManual('areaRequisitante')">
                                        <label><h3>Área Requisitante:</h3></label>
                                        <div v-if="dfdStore.tipoInput('areaRequisitante')">
                                            <ContentEditable 
                                                v-model="dfdStore.campos.areaRequisitante"
                                                :prompt="dfdStore.getPromptCampo('areaRequisitante')"
                                                @blur="dfdStore.encerrarEdicao()" 
                                                @keyup.enter="dfdStore.encerrarEdicao()" 
                                                autofocus 
                                            />
                                        </div>
                                        <div v-else>
                                            <p>{{  dfdStore.campos.areaRequisitante || 'XXXXXXXXX' }}</p>
                                        </div>
                                    </div>

                                    <div class="borda dois-um" @dblclick="dfdStore.ativarEdicaoManual('dataPrevisao')">
                                        <label><h3>Data Previsão:</h3></label>
                                        <div v-if="dfdStore.tipoInput('dataPrevisao')">
                                            <ContentEditable 
                                                v-model="dfdStore.campos.dataPrevisao"
                                                :prompt="dfdStore.getPromptCampo('dataPrevisao')"
                                                @blur="dfdStore.encerrarEdicao()" 
                                                @keyup.enter="dfdStore.encerrarEdicao()" 
                                                autofocus 
                                            />
                                        </div>
                                        <div v-else>
                                            <p>{{ dfdStore.campos.dataPrevisao || 'XX/XXXX' }}</p>
                                        </div>
                                    </div>

                                    <div class="borda dois-um" @dblclick="dfdStore.ativarEdicaoManual('exercicio')">
                                        <label><h3>Exercício:</h3></label>
                                        <div v-if="dfdStore.tipoInput('exercicio')">
                                            <ContentEditable 
                                                v-model="dfdStore.campos.exercicio" 
                                                :prompt="dfdStore.getPromptCampo('exercicio')"
                                                @blur="dfdStore.encerrarEdicao()" 
                                                @keyup.enter="dfdStore.encerrarEdicao()" 
                                                autofocus 
                                            />
                                        </div>
                                        <div v-else>
                                            <p>{{ dfdStore.campos.exercicio || 'XXXX' }}</p>
                                        </div>
                                    </div>

                                    <div class="borda dois-um">
                                        <h3>Data:</h3>
                                        <p>{{ dfdStore.dataAtual }}</p>
                                    </div>
                                </div>
                                
                                <div id="bloco">
                                    <div class="borda tres-um" @dblclick="dfdStore.ativarEdicaoManual('responsavelSolicitacao')">
                                        <label><h3>Responsável pela Solicitação:</h3></label>
                                        <div v-if="dfdStore.tipoInput('responsavelSolicitacao')">
                                            <ContentEditable 
                                                v-model="dfdStore.campos.responsavelSolicitacao" 
                                                :prompt="dfdStore.getPromptCampo('responsavelSolicitacao')"
                                                @blur="dfdStore.encerrarEdicao()" 
                                                @keyup.enter="dfdStore.encerrarEdicao()" 
                                                autofocus 
                                            />
                                        </div>
                                        <div v-else>
                                            <p>{{ dfdStore.campos.responsavelSolicitacao || 'XXXXXXXXXXXXXXX XXXXX XXXXXXX' }}</p>
                                        </div>
                                    </div>
                                    
                                    <div class="borda tres-dois" @dblclick="dfdStore.ativarEdicaoManual('matricula')">
                                        <label><h3>Matrícula:</h3></label>
                                        <div v-if="dfdStore.tipoInput('matricula')">
                                            <ContentEditable 
                                                v-model="dfdStore.campos.matricula"
                                                :prompt="dfdStore.getPromptCampo('matricula')" 
                                                @blur="dfdStore.encerrarEdicao()" 
                                                @keyup.enter="dfdStore.encerrarEdicao()" 
                                                autofocus 
                                            />
                                        </div>
                                        <div v-else>
                                            <p>{{ dfdStore.campos.matricula || 'XXXXX' }}</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="borda quatro">
                                    <div @dblclick="dfdStore.ativarEdicaoManual('grauPrioridade')">
                                        <div v-if="dfdStore.tipoRadio('grauPrioridade')">
                                            <label><h3>Grau de Prioridade: 
                                            <label>
                                                <input type="radio" value="Baixo" v-model="dfdStore.campos.grauPrioridade" @change="dfdStore.encerrarEdicao()"> Baixo
                                            </label>
                                            <label>
                                                <input type="radio" value="Médio" v-model="dfdStore.campos.grauPrioridade" @change="dfdStore.encerrarEdicao()"> Médio
                                            </label>
                                            <label>
                                                <input type="radio" value="Alto" v-model="dfdStore.campos.grauPrioridade" @change="dfdStore.encerrarEdicao()"> Alto
                                            </label>
                                            <label>
                                                <input type="radio" value="Altíssimo" v-model="dfdStore.campos.grauPrioridade" @change="dfdStore.encerrarEdicao()"> Altíssimo
                                            </label>
                                            </h3></label>
                                        </div>
                                        <div v-else>
                                            <h3>
                                                Grau de Prioridade: 
                                                <template v-for="(nivel, index) in dfdStore.getOpcoesCampo('grauPrioridade')" :key="nivel">
                                                    ({{  dfdStore.campos.grauPrioridade === nivel ? 'X' :  ' ' }}) {{ nivel }}
                                                    <span v-if="index < dfdStore.getOpcoesCampo('grauPrioridade').lenght - 1"></span>
                                                </template>
                                            </h3>
                                        </div>
                                    </div>
                                    
                                    <div @dblclick="dfdStore.ativarEdicaoManual('justificativa')">
                                        <label><h3>Justificativa:</h3></label>
                                        <div v-if="dfdStore.tipoTextarea('justificativa')">
                                            <ContentEditable 
                                                v-model="dfdStore.campos.justificativa" 
                                                :prompt="dfdStore.getPromptCampo('justificativa')"
                                                @blur="dfdStore.encerrarEdicao()" 
                                                @keyup.enter="dfdStore.encerrarEdicao()" 
                                                autofocus 
                                            />
                                        </div>
                                        <div v-else>
                                            <p>{{ dfdStore.campos.justificativa || 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, repellendus! Numquam perferendis quam odit. Veniam officiis tempore voluptate veritatis maxime, omnis pariatur debitis iure id. Expedita itaque placeat eos cum!' }}</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="texto" @dblclick="dfdStore.ativarEdicaoManual('doObjeto')">
                                    <label><h2>1 Do Objeto</h2></label>
                                    <div v-if="dfdStore.tipoTextarea('doObjeto')">
                                        <ContentEditable 
                                            v-model="dfdStore.campos.doObjeto" 
                                            :prompt="dfdStore.getPromptCampo('doObjeto')"
                                            @blur="dfdStore.encerrarEdicao()" 
                                            @keyup.enter="dfdStore.encerrarEdicao()" 
                                            autofocus 
                                        />
                                    </div>
                                    <div v-else>
                                        <p>{{ dfdStore.campos.doObjeto || 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, repellendus! Numquam perferendis quam odit. Veniam officiis tempore voluptate veritatis maxime, omnis pariatur debitis iure id. Expedita itaque placeat eos cum!' }}</p>
                                    </div>
                                </div>

                                <div class="texto" @dblclick="dfdStore.ativarEdicaoManual('sugestaoModalidade')">
                                    <label><h2>2 Da Sugestão De Modalidade</h2></label>
                                    <div v-if="dfdStore.tipoTextarea('sugestaoModalidade')">
                                        <ContentEditable 
                                            v-model="dfdStore.campos.sugestaoModalidade"
                                            :prompt="dfdStore.getPromptCampo('sugestaoModalidade')" 
                                            @blur="dfdStore.encerrarEdicao()" 
                                            @keyup.enter="dfdStore.encerrarEdicao()" 
                                            autofocus 
                                        />
                                    </div>
                                    <div v-else>
                                        <p>{{ dfdStore.campos.sugestaoModalidade || 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, repellendus! Numquam perferendis quam odit. Veniam officiis tempore voluptate veritatis maxime, omnis pariatur debitis iure id. Expedita itaque placeat eos cum!' }}</p>
                                    </div>
                                </div>

                                <div class="texto" @dblclick="dfdStore.ativarEdicaoManual('justificativaNecessidade')">
                                    <h2>3 Justificativa Da Necessidade</h2>
                                    <div v-if="dfdStore.tipoTextarea('justificativaNecessidade')">
                                        <ContentEditable 
                                            v-model="dfdStore.campos.justificativaNecessidade" 
                                            :prompt="dfdStore.getPromptCampo('justificativaNecessidade')"
                                            @blur="dfdStore.encerrarEdicao()" 
                                            @keyup.enter="dfdStore.encerrarEdicao()" 
                                            autofocus 
                                        />
                                    </div>
                                    <div v-else>
                                        <p>{{ dfdStore.campos.justificativaNecessidade || 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, repellendus! Numquam perferendis quam odit. Veniam officiis tempore voluptate veritatis maxime, omnis pariatur debitis iure id. Expedita itaque placeat eos cum!' }}</p>
                                    </div>
                                </div>

                                <div class="texto" @dblclick="dfdStore.ativarEdicaoManual('previsaoPca')">
                                    <h2>4 Previsão Da Demanda No Pca</h2>
                                    <div v-if="dfdStore.tipoTextarea('previsaoPca')">
                                        <ContentEditable 
                                            v-model="dfdStore.campos.previsaoPca" 
                                            :prompt="dfdStore.getPromptCampo('previsaoPca')"
                                            @blur="dfdStore.encerrarEdicao()" 
                                            @keyup.enter="dfdStore.encerrarEdicao()" 
                                            autofocus 
                                        />
                                    </div>
                                    <div v-else>
                                        <p>{{ dfdStore.campos.previsaoPca || 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, repellendus! Numquam perferendis quam odit. Veniam officiis tempore voluptate veritatis maxime, omnis pariatur debitis iure id. Expedita itaque placeat eos cum!' }}</p>
                                    </div>
                                </div>

                                <div class="texto" @dblclick="dfdStore.ativarEdicaoManual('demandasVinculadas')">
                                    <h2>5 Demandas Vinculadas ou Interdependentes</h2>
                                    <div v-if="dfdStore.tipoTextarea('demandasVinculadas')">
                                        <ContentEditable 
                                            v-model="dfdStore.campos.demandasVinculadas"
                                            :prompt="dfdStore.getPromptCampo('demandasVinculadas')" 
                                            @blur="dfdStore.encerrarEdicao()" 
                                            @keyup.enter="dfdStore.encerrarEdicao()" 
                                            autofocus 
                                        />
                                    </div>
                                    <div v-else>
                                        <p>{{ dfdStore.campos.demandasVinculadas || 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, repellendus! Numquam perferendis quam odit. Veniam officiis tempore voluptate veritatis maxime, omnis pariatur debitis iure id. Expedita itaque placeat eos cum!' }}</p>
                                    </div>
                                </div>
                                
                                <div>
                                    <div class="texto">
                                        <h2>6 Descrição Da Solução E Quantidades</h2>
                                    </div>
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
                                                    <th v-if="dfdStore.modoEdicaoManual && dfdStore.campoEditando?.nome?.startsWith('materiais_')" style="width: 10px;"></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="(linha, index) in dfdStore.campos.materiais" :key="linha.item">

                                                    <td
                                                        v-for="coluna in dfdStore.definicaoMateriais.colunas"
                                                        :key="coluna.nome"
                                                        @dblclick="dfdStore.ativarEdicaoManual(`materiais_${coluna.nome}_${index}`)"
                                                    >
                                                        <template v-if="dfdStore.modoEdicaoManual && dfdStore.campoEditando?.nome === `materiais_${coluna.nome}_${index}`">
                                                            <ContentEditable 
                                                                :type="coluna.tipo === 'numero' ? 'number' : 'text'"
                                                                v-model="linha[coluna.nome]"
                                                                @blur="dfdStore.encerrarEdicao"
                                                                @keyup.enter="dfdStore.encerrarEdicao"
                                                                autofocus
                                                            />
                                                        </template>
                                                        <template v-else>
                                                            {{ linha[coluna.nome] || '—' }}
                                                        </template>
                                                    </td>

                                                    <td>R${{ dfdStore.calcularTotal(linha.qtde, linha.precoUnd) }}</td>

                                                    <td v-if="dfdStore.modoEdicaoManual && dfdStore.campoEditando?.nome?.endsWith(`_${index}`)">
                                                        <q-btn color="negative" label="Excluir" @click="dfdStore.removerLinha('materiais', index)" />
                                                    </td>

                                                </tr>
                                            </tbody>
                                        </table>
                                        <div v-if="dfdStore.modoEdicaoManual && dfdStore.campoEditando?.nome?.startsWith(`materiais_`) && dfdStore.campoEditando?.nome?.startsWith('materiais_')">
                                            <q-btn @click="dfdStore.adicionarLinha('materiais')">Adicionar Linha</q-btn>
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
                                                    <th v-if="dfdStore.modoEdicaoManual && dfdStore.campoEditando?.nome?.startsWith('servicos_')" style="width: 10px;"></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="(linha, index) in dfdStore.campos.servicos" :key="linha.item" style="height: 40px;">

                                                    <td
                                                        v-for="coluna in dfdStore.definicaoServicos.colunas"
                                                        :key="coluna.nome"
                                                        @dblclick="dfdStore.ativarEdicaoManual(`servicos_${coluna.nome}_${index}`)"
                                                    >
                                                        <template v-if="dfdStore.modoEdicaoManual && dfdStore.campoEditando?.nome === `servicos_${coluna.nome}_${index}`">
                                                            <ContentEditable 
                                                                :type="coluna.tipo === 'numero' ? 'number' : 'text'"
                                                                v-model="linha[coluna.nome]"
                                                                @blur="dfdStore.encerrarEdicao"
                                                                @keyup.enter="dfdStore.encerrarEdicao"
                                                                autofocus
                                                            />
                                                        </template>
                                                        <template v-else>
                                                            {{ linha[coluna.nome] || '—' }}
                                                        </template>
                                                    </td>

                                                    <td>R${{ dfdStore.calcularTotal(linha.qtde, linha.precoUnd) }}</td>

                                                    <td v-if="dfdStore.modoEdicaoManual && dfdStore.campoEditando?.nome?.endsWith(`_${index}`)">
                                                        <q-btn color="negative" label="Excluir" @click="dfdStore.removerLinha('servicos', index)" />
                                                    </td>

                                                </tr>
                                            </tbody>
                                        </table>
                                        <div v-if="dfdStore.modoEdicaoManual && dfdStore.campoEditando?.nome?.startsWith('servicos_')">
                                            <q-btn @click="dfdStore.adicionarLinha('servicos')">Adicionar Linha</q-btn>
                                        </div>
                                    </div>
                                </div>

                                <div class="texto" @dblclick="dfdStore.ativarEdicaoManual('previsaoUtilizacao')">
                                    <h2>7 Previsão de Utilização E Critérios De Aceitação</h2>
                                    <div v-if="dfdStore.tipoTextarea('previsaoUtilizacao')">
                                        <ContentEditable 
                                            v-model="dfdStore.campos.previsaoUtilizacao" 
                                            :prompt="dfdStore.getPromptCampo('previsaoUtilizacao')" 
                                            @blur="dfdStore.encerrarEdicao()" 
                                            @keyup.enter="dfdStore.encerrarEdicao()" 
                                            autofocus 
                                        />
                                    </div>
                                    <div v-else>
                                        <p>{{ dfdStore.campos.previsaoUtilizacao || 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, repellendus! Numquam perferendis quam odit. Veniam officiis tempore voluptate veritatis maxime, omnis pariatur debitis iure id. Expedita itaque placeat eos cum!' }}</p>
                                    </div>
                                </div>

                                <div class="texto">
                                    <h2>8 Indicação De Equipe De Planejamento</h2>
                                    <p>Para composição da equipe de planejamento, indicamos os servidores abaixo</p>
                                    <ul>
                                        <div @dblclick="dfdStore.ativarEdicaoManual('equipePlanejamentoUm')">
                                            <div v-if="dfdStore.tipoInput('equipePlanejamentoUm')">
                                                <ContentEditable 
                                                    v-model="dfdStore.campos.equipePlanejamentoUm"
                                                    :prompt="dfdStore.getPromptCampo('equipePlanejamentoUm')" 
                                                    @blur="dfdStore.encerrarEdicao()" 
                                                    @keyup.enter="dfdStore.encerrarEdicao()" 
                                                    autofocus 
                                                />
                                            </div>
                                            <div v-else>
                                                <li>{{ dfdStore.campos.equipePlanejamentoUm || 'XXXXXXXX XXXXX XXX XXXXXX' }}</li>
                                            </div>
                                        </div>

                                        <div @dblclick="dfdStore.ativarEdicaoManual('equipePlanejamentoDois')">
                                            <div v-if="dfdStore.tipoInput('equipePlanejamentoDois')">
                                                <ContentEditable 
                                                    v-model="dfdStore.campos.equipePlanejamentoDois"
                                                    :prompt="dfdStore.getPromptCampo('equipePlanejamentoDois')" 
                                                    @blur="dfdStore.encerrarEdicao()" 
                                                    @keyup.enter="dfdStore.encerrarEdicao()" 
                                                    autofocus 
                                                />
                                            </div>
                                            <div v-else>
                                                <li>{{ dfdStore.campos.equipePlanejamentoDois || 'XXXXXXXX XXXXX XXX XXXXXX' }}</li>
                                            </div>
                                        </div>

                                        <div @dblclick="dfdStore.ativarEdicaoManual('equipePlanejamentoTres')">
                                            <div v-if="dfdStore.tipoInput('equipePlanejamentoTres')">
                                                <ContentEditable 
                                                    v-model="dfdStore.campos.equipePlanejamentoTres"
                                                    :prompt="dfdStore.getPromptCampo('equipePlanejamentoTres')" 
                                                    @blur="dfdStore.encerrarEdicao()" 
                                                    @keyup.enter="dfdStore.encerrarEdicao()" 
                                                    autofocus 
                                                />
                                            </div>
                                            <div v-else>
                                                <li>{{ dfdStore.campos.equipePlanejamentoTres || 'XXXXXXXX XXXXX XXX XXXXXX' }}</li>
                                            </div>
                                        </div>

                                        <div @dblclick="dfdStore.ativarEdicaoManual('equipePlanejamentoQuatro')">
                                            <div v-if="dfdStore.tipoInput('equipePlanejamentoQuatro')">
                                                <ContentEditable 
                                                    v-model="dfdStore.campos.equipePlanejamentoQuatro" 
                                                    :prompt="dfdStore.getPromptCampo('equipePlanejamentoQuatro')"
                                                    @blur="dfdStore.encerrarEdicao()" 
                                                    @keyup.enter="dfdStore.encerrarEdicao()" 
                                                    autofocus 
                                                />
                                            </div>
                                            <div v-else>
                                                <li>{{ dfdStore.campos.equipePlanejamentoQuatro || 'XXXXXXXX XXXXX XXX XXXXXX' }}</li>
                                            </div>
                                        </div>
                                    </ul>
                                    <div @dblclick="dfdStore.ativarEdicaoManual('justificativaEquipe')">
                                        <div v-if="dfdStore.tipoTextarea('justificativaEquipe')">
                                            <ContentEditable 
                                                v-model="dfdStore.campos.justificativaEquipe"
                                                :prompt="dfdStore.getPromptCampo('justificativaEquipe')" 
                                                @blur="dfdStore.encerrarEdicao()" 
                                                @keyup.enter="dfdStore.encerrarEdicao()" 
                                                autofocus 
                                            />
                                        </div>
                                        <div v-else>
                                            <p>{{ dfdStore.campos.justificativaEquipe || 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, repellendus! Numquam perferendis quam odit. Veniam officiis tempore voluptate veritatis maxime, omnis pariatur debitis iure id. Expedita itaque placeat eos cum!' }}</p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div class="texto">
                                        <h2>9 Da Fiscalização E Gestão Do Contato</h2>
                                        <div class="fiscal">
                                            <h3>Fiscal:</h3>
                                            <div @dblclick="dfdStore.ativarEdicaoManual('fiscal')">
                                                <div v-if="dfdStore.tipoInput('fiscal')">
                                                    <ContentEditable 
                                                        v-model="dfdStore.campos.fiscal" 
                                                        :prompt="dfdStore.getPromptCampo('fiscal')"
                                                        @blur="dfdStore.encerrarEdicao()" 
                                                        @keyup.enter="dfdStore.encerrarEdicao()" 
                                                        autofocus 
                                                    />
                                                </div>
                                                <div v-else>
                                                    <p>{{ dfdStore.campos.fiscal || 'XXXXXXXX XXXXX XXXXXX' }}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="fiscal">
                                            <h3>Fiscal Substituto:</h3>
                                            <div @dblclick="dfdStore.ativarEdicaoManual('fiscalSubstituto')">
                                                <div v-if="dfdStore.tipoInput('fiscalSubstituto')">
                                                    <ContentEditable 
                                                        v-model="dfdStore.campos.fiscalSubstituto"
                                                        :prompt="dfdStore.getPromptCampo('fiscalSubstituto')" 
                                                        @blur="dfdStore.encerrarEdicao()" 
                                                        @keyup.enter="dfdStore.encerrarEdicao()" 
                                                        autofocus 
                                                    />
                                                </div>
                                                <div v-else>
                                                    <p>{{ dfdStore.campos.fiscalSubstituto || 'XXXXXXXX XXXXX XXXXXX' }}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="fiscal">
                                            <h3>Gestor:</h3>
                                            <div @dblclick="dfdStore.ativarEdicaoManual('gestor')">
                                                <div v-if="dfdStore.tipoInput('gestor')">
                                                    <ContentEditable 
                                                        v-model="dfdStore.campos.gestor" 
                                                        :prompt="dfdStore.getPromptCampo('gestor')"
                                                        @blur="dfdStore.encerrarEdicao()" 
                                                        @keyup.enter="dfdStore.encerrarEdicao()" 
                                                        autofocus 
                                                    />
                                                </div>
                                                <div v-else>
                                                    <p>{{ dfdStore.campos.gestor || 'XXXXXXXX XXXXX XXXXXX' }}</p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="fiscal">
                                            <h3>Gestor Substituto:</h3>
                                            <div @dblclick="dfdStore.ativarEdicaoManual('gestorSubstituto')">
                                                <div v-if="dfdStore.tipoInput('gestorSubstituto')">
                                                    <ContentEditable 
                                                        v-model="dfdStore.campos.gestorSubstituto"
                                                        :prompt="dfdStore.getPromptCampo('gestorSubstituto')" 
                                                        @blur="dfdStore.encerrarEdicao()" 
                                                        @keyup.enter="dfdStore.encerrarEdicao()" 
                                                        autofocus 
                                                    />
                                                </div>
                                                <div v-else>
                                                    <p>{{ dfdStore.campos.gestorSubstituto || 'XXXXXXXX XXXXX XXXXXX' }}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="textoponto">
                                        <h2>9.<span class="posponto">1</span> Justificativa</h2>
                                        <div @dblclick="dfdStore.ativarEdicaoManual('justificativaFiscal')">
                                            <div v-if="dfdStore.tipoTextarea('justificativaFiscal')">
                                                <ContentEditable 
                                                    v-model="dfdStore.campos.justificativaFiscal"
                                                    :prompt="dfdStore.getPromptCampo('justificativaFiscal')" 
                                                    @blur="dfdStore.encerrarEdicao()" 
                                                    @keyup.enter="dfdStore.encerrarEdicao()" 
                                                    autofocus 
                                                />
                                            </div>
                                            <div v-else>
                                                <p>{{ dfdStore.campos.justificativaFiscal || 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, repellendus! Numquam perferendis quam odit. Veniam officiis tempore voluptate veritatis maxime, omnis pariatur debitis iure id. Expedita itaque placeat eos cum!' }}</p>
                                            </div>
                                        </div>
                                        <div class="fiscal">
                                            <p><strong>Elaborado por:</strong></p>
                                            <p><strong>Ordenador de Despesa:</strong></p>
                                            <br><br><br><br>
                                        </div>

                                        <div class="fiscal2">
                                            <div style="width: 40%; border-top: 1px solid black;">
                                                <div @dblclick="dfdStore.ativarEdicaoManual('nomeElaborador')">
                                                    <div v-if="dfdStore.tipoInput('nomeElaborador')">
                                                        <ContentEditable 
                                                            v-model="dfdStore.campos.nomeElaborador" 
                                                            :prompt="dfdStore.getPromptCampo('nomeElaborador')"
                                                            @blur="dfdStore.encerrarEdicao()" 
                                                            @keyup.enter="dfdStore.encerrarEdicao()" 
                                                            autofocus 
                                                        />
                                                    </div>
                                                    <div v-else>
                                                        <p>{{ dfdStore.campos.nomeElaborador || 'XXXXXXXX XXXXX XXX XXXXXX' }}</p>
                                                    </div>
                                                    <p>Coordenador Inovação</p>
                                                </div>
                                            </div>

                                            <div style="width: 10%;"></div>

                                            <div style="width: 40%; border-top: 1px solid black;">
                                                <div @dblclick="dfdStore.ativarEdicaoManual('nomeOrdenador')">
                                                    <div v-if="dfdStore.tipoInput('nomeOrdenador')">
                                                        <ContentEditable 
                                                            v-model="dfdStore.campos.nomeOrdenador"
                                                            :prompt="dfdStore.getPromptCampo('nomeOrdenador')" 
                                                            @blur="dfdStore.encerrarEdicao()"
                                                            @keyup.enter="dfdStore.encerrarEdicao()" 
                                                            autofocus 
                                                        />
                                                    </div>
                                                    <div v-else>
                                                        <p>{{ dfdStore.campos.nomeOrdenador || 'XXXXXXXX XXXXX XXX XXXXXX' }}</p>
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

                <div id="toggle" class="shadow-4" v-if="!dfdStore.formFinalizado">
                    <div class="toggle">
                        <h2>Formulário de I.A.</h2>
                    </div>
                    <div class="q-pa-md">
                        <q-toggle v-model="dfdStore.value" color="purple-14" class="tamanhotg" />
                    </div>

                    <div v-if="!dfdStore.value">
                        <div class="btnFinalizar">
                            <q-btn label="Salvar" id="finalizar" class="shadow-4" @click="() => {
                                dfdStore.formFinalizado = true
                                dfdStore.mostrarPdf = true
                                dfdStore.value = true
                            }"  />
                        </div>
                    </div>

                </div>
                
                <div v-if="dfdStore.modoEdicaoManual && dfdStore.mostrarPdf || dfdStore.formFinalizado && dfdStore.modoEdicaoManual">
                    <div class="btnConcluir">
                        <q-btn label="Concluir" id="concluir" @click="dfdStore.voltarParaFormulario" />
                    </div>
                </div>

            </div>

            <div id="form" v-if="dfdStore.value">
                <div style="flex-grow: 1;">
                    <template v-if="!dfdStore.formFinalizado">
                        <component :is="formComponents[dfdStore.formAtual]"
                                   :formData="dfdStore.formData"
                                   @next="dfdStore.proximo"
                                   @prev="dfdStore.anterior">
                        </component>
                    </template>
                    
                    <template v-else-if="dfdStore.mostrarPdf">
                        <BaixarPdf />
                    </template>

                    <template v-else>
                        <component 
                            :is="formComponents.finalizado"
                            :formData="dfdStore.formData"
                        />
                    </template>
                </div>
                
                <div style="text-align: center;">
                    <p>Você pode também editar manualmente! (Isso vai desativar o formulário de I.A.)</p>
                </div>
                <div class="btnedit" @click="dfdStore.desligarFormulario()">
                    <q-btn id="editar" label="EDITAR DOCUMENTO" class="shadow-4"></q-btn>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
import ContentEditable from '../ContentEditable.vue';
import BaixarPdf from './BaixarPdf.vue';
import FormPasso1 from './FormPasso1.vue';
import FormPasso2 from './FormPasso2.vue';
import FormPasso3 from './FormPasso3.vue';
import FormPasso4 from './FormPasso4.vue';
import FormPasso5 from './FormPasso5.vue';
import FormPasso6 from './FormPasso6.vue';
import { useDfdDocStore } from '@/stores/DfdDocStore';
import { watch, onMounted, ref } from 'vue';

    const Documento = ref(null)
    const dfdStore = useDfdDocStore()

    const formComponents = {
        1: FormPasso1,
        2: FormPasso2,
        3: FormPasso3,
        4: FormPasso4,
        5: FormPasso5,
        6: FormPasso6,
        finalizado: BaixarPdf
    }

    onMounted(() => {
        dfdStore.diaAtual();

        dfdStore.Documento = Documento.value
        console.log(Documento.value);
            
    })

    watch(() => [dfdStore.toggleLigado, dfdStore.value], ([toggleLigado, value]) => {
        if (toggleLigado && value) {
            dfdStore.modoEdicaoManual = false;
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
    background: linear-gradient(to bottom, #d6d6d6 0%, #b0b0b0 100%);
 }

 /* feito para definir e separar a parte que contém o documento e os botões da parte do formulário */
 .doc {
    flex: 1 1 60%;
    display: flex;
    justify-content: center;
    border-right: 1px solid #ccc;
    transition: flex 0.5s ease, margin 0.5s ease;
 }

 .doc-expandido {
    flex: 1 1 80%;
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