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

                               <div class="texto">
                                    <h2>1 Pesquisa de Preços</h2>
                                    <p>O presente relatório é resultado da pesquisa de preços a seguir discriminada, em cumprimento ao determinado na Lei 14.133/2021 e demais dispositivos legais, e em conformidade com o decreto 39.132/2023.</p>
                               </div>

                               <div class="textoponto">
                                    <h2>1.<span class="posponto">1</span> Dados Da Pesquisa</h2>
                                    <table class="tabela">
                                        <tbody>
                                            <tr>
                                                <td>Objeto:</td>
                                                <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam est repellendus accusantium, aut incidunt tempora veniam possimus illum fugiat perspiciatis quas unde necessitatibus neque minus asperiores ea odit distinctio tenetur?</td>
                                            </tr>
                                            <tr>
                                                <td>Processo:</td>
                                                <td>XXXX/20XX</td>
                                            </tr>
                                            <tr>
                                                <td>Período de Realização:</td>
                                                <td>de XX/XX/20XX a XX/XX/20XX</td>
                                            </tr>
                                            <tr>
                                                <td>Metodologia:</td>
                                                <td>( X ) Média ( ) Mediana ( ) Menor Valor ( ) Outro:____________</td>
                                            </tr>
                                            <tr>
                                                <td>Justificativa:</td>
                                                <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque molestias iure provident earum? Magni suscipit praesentium nobis recusandae cumque, unde maiores, sapiente ut dolor, odio quod eveniet nemo tenetur reiciendis?</td>
                                            </tr>
                                            <tr>
                                                <td>Resultado da Pesquisa:</td>
                                                <td>R$ XXXXXXXX</td>
                                            </tr>
                                        </tbody>
                                    </table>
                               </div>

                               <div class="texto">
                                    <h2>2 Quadro De Fontes Da Pesquisa</h2>
                                    <div class="borda">
                                        <table class="semBorda">
                                            <tbody>
                                                <tr>
                                                    <td class="tamanhoTitulo">Tipo:</td>
                                                    <th class="tamanhoValor">Contratação do próprio Município de Araucária</th>
                                                </tr>
                                                <tr>
                                                    <td class="tamanhoTitulo">Base Legal:</td>
                                                    <td class="tamanhoValor">IN-07/17, Ad 2º, inc. III, §2º133/21, Art. 23, Inc. II e Decreto 39.132/23, Art. 368, Inc. II ou IN- 65/21, Art. 5.º, Inc. II</td>
                                                </tr>
                                                <tr>
                                                    <td class="tamanhoTitulo">Justificativa:</td>
                                                    <td class="tamanhoValor">Parâmetro atendido integralmente.</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="borda">
                                        <table class="semBorda">
                                            <tbody>
                                                <tr>
                                                    <td class="tamanhoTitulo">Tipo:</td>
                                                    <th class="tamanhoValor">Painel de Preços - PNCP</th>
                                                </tr>
                                                <tr>
                                                    <td class="tamanhoTitulo">Base Legal:</td>
                                                    <td class="tamanhoValor">Decreto 39.132/23, Art. 296, Inc. III</td>
                                                </tr>
                                                <tr>
                                                    <td class="tamanhoTitulo">Justificativa:</td>
                                                    <td class="tamanhoValor">Parâmetro atendido integralmente.</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="borda">
                                        <table class="semBorda">
                                            <tbody>
                                                <tr>
                                                    <td class="tamanhoTitulo">Tipo:</td>
                                                    <th class="tamanhoValor">Banco de Preços em Saúde - BPS</th>
                                                </tr>
                                                <tr>
                                                    <td class="tamanhoTitulo">Base Legal:</td>
                                                    <td class="tamanhoValor">Lei 14.133/21, Art. 23, Inc. I e Dec. 39.132/23, Art. 368, Inc. I ou IN-65/21, Art. 5.º, Inc. I</td>
                                                </tr>
                                                <tr>
                                                    <td class="tamanhoTitulo">Justificativa:</td>
                                                    <td class="tamanhoValor">Não se aplica em razão das características e natureza do objeto.</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="borda">
                                        <table class="semBorda">
                                            <tbody>
                                                <tr>
                                                    <td class="tamanhoTitulo">Tipo:</td>
                                                    <th class="tamanhoValor">Contratações similares de outros entes públicos</th>
                                                </tr>
                                                <tr>
                                                    <td class="tamanhoTitulo">Base Legal:</td>
                                                    <td class="tamanhoValor">Lei 14.133/21, Art. 23, Inc. II e Dec. 39.132/23, Art. 368, Inc. II ou Dec. 39.132/23, Art. 296, Inc. II ou IN – 65/21, Art. 5.º, Inc. II</td>
                                                </tr>
                                                <tr>
                                                    <td class="tamanhoTitulo">Justificativa:</td>
                                                    <td class="tamanhoValor">Parâmetro atendido integralmente.</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="borda">
                                        <table class="semBorda">
                                            <tbody>
                                                <tr>
                                                    <td class="tamanhoTitulo">Tipo:</td>
                                                    <th class="tamanhoValor">Preços publicados em mídia especializada</th>
                                                </tr>
                                                <tr>
                                                    <td class="tamanhoTitulo">Base Legal:</td>
                                                    <td class="tamanhoValor">Lei 14.133/21, Art. 23, Inc. III e Dec. 39.132/23, Art. 368, Inc. III ou Dec. 39.132/23, Art. 296, Inc. III ou IN-65/21, Art. 5.º, Inc. III</td>
                                                </tr>
                                                <tr>
                                                    <td class="tamanhoTitulo">Justificativa:</td>
                                                    <td class="tamanhoValor">Não se aplica em razão das características e natureza do objeto.</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="borda">
                                        <table class="semBorda">
                                            <tbody>
                                                <tr>
                                                    <td class="tamanhoTitulo">Tipo:</td>
                                                    <th class="tamanhoValor">Sítios eletrônicos especializados ou de domínio amplo</th>
                                                </tr>
                                                <tr>
                                                    <td class="tamanhoTitulo">Base Legal:</td>
                                                    <td class="tamanhoValor">Lei 14.133/21, Art. 23, Inc. III e Dec. 39.132/23, Art. 368, Inc. III ou Dec. 39.132/23, Art. 296, Inc. III ou IN-65/21, Art. 5.º, Inc. III</td>
                                                </tr>
                                                <tr>
                                                    <td class="tamanhoTitulo">Justificativa:</td>
                                                    <td class="tamanhoValor">Não se aplica em razão das características e natureza do objeto.</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="borda">
                                        <table class="semBorda">
                                            <tbody>
                                                <tr>
                                                    <td class="tamanhoTitulo">Tipo:</td>
                                                    <th class="tamanhoValor">Tabela de Referência</th>
                                                </tr>
                                                <tr>
                                                    <td class="tamanhoTitulo">Base Legal:</td>
                                                    <td class="tamanhoValor">Lei 14.133/21, Art. 23, Inc. III e Dec. 39.132/23, Art. 368, Inc. III ou  Dec. 39.132/23, Art. 368, Inc. VI</td>
                                                </tr>
                                                <tr>
                                                    <td class="tamanhoTitulo">Justificativa:</td>
                                                    <td class="tamanhoValor">Não foram identificadas tabelas de referência formalmente aprovadas pelo Poder Executivo para precificação do objeto da presente contratação.</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="borda">
                                        <table class="semBorda">
                                            <tbody>
                                                <tr>
                                                    <td class="tamanhoTitulo">Tipo:</td>
                                                    <th class="tamanhoValor">Pesquisa com fornecedores</th>
                                                </tr>
                                                <tr>
                                                    <td class="tamanhoTitulo">Base Legal:</td>
                                                    <td class="tamanhoValor">Lei 14.133/21, Art. 23, Inc. IV e Dec. 39.132/23, Art. 368, Inc. IV ou Dec. 39.132/23, Art. 296, Inc. I ou IN-65/21, Art. 5.º, Inc. IV</td>
                                                </tr>
                                                <tr>
                                                    <td class="tamanhoTitulo">Justificativa:</td>
                                                    <td class="tamanhoValor">Parâmetro atendido parcialmente.</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="borda">
                                        <table class="semBorda">
                                            <tbody>
                                                <tr>
                                                    <td class="tamanhoTitulo">Tipo:</td>
                                                    <th class="tamanhoValor">Base nacional de notas fiscais eletrônicas</th>
                                                </tr>
                                                <tr>
                                                    <td class="tamanhoTitulo">Base Legal:</td>
                                                    <td class="tamanhoValor">Lei 14.133/21, Art. 23, Inc. V e Dec. 39.132/23, Art. 368, Inc. V ou IN-65/21, Art. 5.º, Inc. V</td>
                                                </tr>
                                                <tr>
                                                    <td class="tamanhoTitulo">Justificativa:</td>
                                                    <td class="tamanhoValor">Não se aplica em razão das características e natureza do objeto.</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="borda">
                                        <table class="semBorda">
                                            <tbody>
                                                <tr>
                                                    <td class="tamanhoTitulo">Tipo:</td>
                                                    <th class="tamanhoValor">Aplicativo Nota Paraná</th>
                                                </tr>
                                                <tr>
                                                    <td class="tamanhoTitulo">Base Legal:</td>
                                                    <td class="tamanhoValor">Lei 14.133/21, Art. 23, §3.º e Dec. 39.132/23, Art. 296, Inc. IV</td>
                                                </tr>
                                                <tr>
                                                    <td class="tamanhoTitulo">Justificativa:</td>
                                                    <td class="tamanhoValor">	Justificativa:	Pesquisa realizada mas sem efeito, devido natureza do objeto. Não encontra resultado, nem por semelhança.</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="borda">
                                        <table class="semBorda">
                                            <tbody>
                                                <tr>
                                                    <td class="tamanhoTitulo">Tipo:</td>
                                                    <th class="tamanhoValor">Outro</th>
                                                </tr>
                                                <tr>
                                                    <td class="tamanhoTitulo">Base Legal:</td>
                                                    <td class="tamanhoValor">N/A</td>
                                                </tr>
                                                <tr>
                                                    <td class="tamanhoTitulo">Justificativa:</td>
                                                    <td class="tamanhoValor">Parâmetro atendido integralmente.</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                               </div>

                               <div class="texto">
                                    <h2>3 Detalhes Das Fontes Da Pesquisa</h2>
                               </div>

                               <div class="textoponto">
                                    <h2>3.<span class="posponto">1</span> Disclaimer sobre a Pesquisa de Preços</h2>
                                    <p>Considerando a singularidade do objeto em licitação, a obtenção de cotações estritamente idênticas em termos de marca, modelo, metodologia de produção ou execução revela-se inviável, dada a especificidade técnica e a eventual inexistência de padrão comercial amplamente difundido.</p>
                                    <p>Nos termos do art. 23, §1º, da Lei nº 14.133/2021, a estimativa de preços deve considerar a melhor técnica disponível, mesmo diante da diversidade de condições comerciais. Ademais, conforme o art. 5º do Decreto nº 39.132/2023, admite-se o uso de fontes diversas para a formação do valor estimado, inclusive aquelas que guardem semelhança técnica ou funcional, ainda que não absolutamente idênticas ao objeto pretendido, desde que observada a devida justificativa técnica.</p>
                                    <p>Assim, com fulcro na legislação vigente e em conformidade com os princípios da razoabilidade e da busca da proposta mais vantajosa para a Administração, foram selecionadas fontes que, embora não idênticas entre si, apresentam características técnicas equivalentes ou compatíveis, ou ainda representam o método construtivo mais próximo possível daquele necessário à consecução do objeto. A presente pesquisa, portanto, constitui estimativa válida para fins de instrução processual, conforme previsto no art. 23, §5º, da Lei nº 14.133/2021.</p>
                               </div>

                               <div class="textoponto">
                                    <h2>3.<span class="posponto">2</span> Contratação do próprio Município de Araucária</h2>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero mollitia fugiat voluptatibus eos impedit magnam provident reprehenderit esse eligendi inventore. Sint laboriosam quis esse quibusdam consequatur quos porro vel commodi.</p>
                               </div>

                               <div class="textoponto">
                                    <h2>3.<span class="posponto">3</span> Painel de Preços - PNCP</h2>
                               </div>

                               <div class="textoponto2">
                                    <h2>3.<span class="pos">3.</span><span class="posponto">1</span> PNCP 1</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus debitis vero alias! Distinctio obcaecati cum ex ducimus? Expedita numquam dolorem aliquid corporis cupiditate nam impedit, molestias, voluptate, in error autem.</p>
                               </div>

                               <div class="textoponto2">
                                    <h2>3.<span class="pos">3.</span><span class="posponto">2</span> PNCP 2</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe eius reprehenderit quidem accusamus neque perspiciatis aliquid modi error debitis, minus deserunt? Maxime quasi ab minus temporibus laboriosam eligendi quibusdam debitis!</p>
                               </div>

                               <div class="textoponto2">
                                    <h2>3.<span class="pos">3.</span><span class="posponto">3</span> PNCP 3</h2>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, magnam esse. Repellat, dolorum exercitationem, laborum corrupti consequuntur autem corporis, reprehenderit perspiciatis nisi voluptate accusamus explicabo recusandae vitae maxime eius. At?</p>
                               </div>

                               <div class="textoponto">
                                    <h2>3.<span class="posponto">4</span> Banco de Preços em Saúde</h2>
                                    <p>Não se aplica em razão das características e natureza do objeto.</p>
                               </div>

                               <div class="textoponto">
                                    <h2>3.<span class="posponto">5</span> Contratações similares de outros entes públicos</h2>
                               </div>

                               <div class="textoponto2">
                                    <h2>3.<span class="pos">5.</span><span class="posponto">1</span> ENTE 1</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quis est temporibus magnam non perferendis magni hic at possimus modi? Consequuntur libero dolores voluptatum ducimus a sunt molestias cum recusandae?</p>
                               </div>
                               
                               <div class="textoponto2">
                                    <h2>3.<span class="pos">5.</span><span class="posponto">2</span> ENTE 2</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quis est temporibus magnam non perferendis magni hic at possimus modi? Consequuntur libero dolores voluptatum ducimus a sunt molestias cum recusandae?</p>
                               </div>
                               
                               <div class="textoponto2">
                                    <h2>3.<span class="pos">5.</span><span class="posponto">3</span> ENTE 3</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quis est temporibus magnam non perferendis magni hic at possimus modi? Consequuntur libero dolores voluptatum ducimus a sunt molestias cum recusandae?</p>
                               </div>

                               <div class="textoponto">
                                    <h2>3.<span class="posponto">6</span> Preços publicados em mídia especializada</h2>
                               </div>

                               <div class="textoponto2">
                                    <h2>3.<span class="pos">6.</span><span class="posponto">1</span> MIDIA 1</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, perferendis blanditiis. Cupiditate minus quam aliquid eaque? Repellat perferendis aliquam ullam, corrupti itaque veritatis labore placeat adipisci nam aspernatur quam impedit?</p>
                               </div>

                               <div class="textoponto2">
                                    <h2>3.<span class="pos">6.</span><span class="posponto">2</span> MIDIA 2</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, perferendis blanditiis. Cupiditate minus quam aliquid eaque? Repellat perferendis aliquam ullam, corrupti itaque veritatis labore placeat adipisci nam aspernatur quam impedit?</p>
                               </div>

                               <div class="textoponto2">
                                    <h2>3.<span class="pos">6.</span><span class="posponto">3</span> MIDIA 3</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, perferendis blanditiis. Cupiditate minus quam aliquid eaque? Repellat perferendis aliquam ullam, corrupti itaque veritatis labore placeat adipisci nam aspernatur quam impedit?</p>
                               </div>

                               <div class="textoponto">
                                    <h2>3.<span class="posponto">7</span> Sítios eletrônicos especializados ou de domínio amplo</h2>
                               </div>

                               <div class="textoponto2">
                                    <h2>3.<span class="pos">7.</span><span class="posponto">1</span> SITIO 1</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam amet perspiciatis hic officiis earum esse voluptas, numquam aspernatur dicta commodi distinctio, quos accusantium exercitationem, quis soluta? Atque natus enim laudantium.</p>
                               </div>

                               <div class="textoponto2">
                                    <h2>3.<span class="pos">7.</span><span class="posponto">2</span> SITIO 2</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam amet perspiciatis hic officiis earum esse voluptas, numquam aspernatur dicta commodi distinctio, quos accusantium exercitationem, quis soluta? Atque natus enim laudantium.</p>
                               </div>

                               <div class="textoponto2">
                                    <h2>3.<span class="pos">7.</span><span class="posponto">3</span> SITIO 3</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam amet perspiciatis hic officiis earum esse voluptas, numquam aspernatur dicta commodi distinctio, quos accusantium exercitationem, quis soluta? Atque natus enim laudantium.</p>
                               </div>

                               <div class="textoponto">
                                    <h2>3.<span class="posponto">8</span> Tabela de Referência</h2>
                                    <p>Não foram identificadas tabelas de referência formalmente aprovadas pelo Poder Executivo para precificação do objeto da presente contratação.</p>
                               </div>

                               <div class="textoponto">
                                    <h2>3.<span class="posponto">9</span> Pesquisa com fornecedores</h2>
                               </div>

                               <div class="textoponto2">
                                    <h2>3.<span class="pos">9.</span><span class="posponto">1</span> FORNECEDOR 1</h2>
                                    <p>EXEMPLO 1: O fornecedor Huguinho foi localizado em pesquisa no Google na data de blablaba, como referência na cidade de Araucária no ramo de comércio de veículos. Informou valor de R$ XXXXX,XX pra adquirir um veículo conforme objeto dessa pesquisa de preços.</p>
                                    <p>[INSERIR PRINT DO ORÇAMENTO]</p>
                                    <p>[ANEXAR NO PROCESSO O EMAIL COM A RESPOSTA DO FORNECEDOR]</p>
                               </div>

                               <div class="textoponto2">
                                    <h2>3.<span class="pos">9.</span><span class="posponto">2</span> FORNECEDOR 2</h2>
                                    <p>EXEMPLO 2: O fornecedor Zezinho foi localizado na feira de veículos do Boqueirão em data de blablaba. Solicitado orçamento, mas até a data limite de recepção de orçamentos, não houve resposta.</p>
                                    <p>[ANEXAR NO PROCESSO O EMAIL SEM RESPOSTA DO FORNECEDOR]</p>
                               </div>

                               <div class="textoponto2">
                                    <h2>3.<span class="pos">9.</span><span class="posponto">3</span> FORNECEDOR 3</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dolorum maiores, quam eaque laborum quia blanditiis. In consequatur, similique quae debitis dolores velit nulla ad voluptatibus. Quidem non in iste.</p>
                               </div>

                               <div class="textoponto">
                                    <h2>3.<span class="pos">1</span><span class="posponto">0</span> Base nacional de notas fiscais eletrônicas</h2>
                                    <p>Não se aplica em razão das características e natureza do objeto.</p>
                               </div>

                               <div class="textoponto">
                                    <h2>3.<span class="pos">1</span><span class="posponto">1</span> Aplicativo Nota Paraná</h2>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse nemo facilis temporibus autem expedita dolore quasi, voluptatum magnam natus commodi id ullam nulla aliquid, excepturi vitae dolores quis velit aperiam!</p>
                               </div>

                               <div class="textoponto">
                                    <h2>3.<span class="pos">1</span><span class="posponto">2</span> Outro</h2>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur nobis, tempore perferendis molestiae officiis id voluptatibus recusandae eius! Perspiciatis, repellat enim. Perspiciatis magni sunt, quidem voluptatibus quos temporibus? Voluptatem, eveniet!</p>
                               </div>

                               <div class="texto">
                                    <h2>4 Normatização de Propostas</h2>
                                    <p>Com o objetivo de garantir uma comparação justa e homogênea entre as propostas recebidas, elas podem ser ajustadas para manter um mesmo período de tempo ou qualquer outro ajuste relevante. Dessa forma, propostas com formatos diferentes terão seus valores ajustados proporcionalmente, assegurando a isonomia na análise dos custos. Entendemos que a normatização de valores serve apenas como parâmetro de comparação, não refletindo os valores reais praticados pelos fornecedores em questão.</p>
                               </div>

                               <div class="texto">
                                    <h2>5 Eliminação de Outliars</h2>
                                    <p>Conforme instrução do manual de Pesquisa de Preços, item 3.2:</p>
                                    <div class="canto">
                                        <p>“(...)Devem ser apresentadas todas as justificativas para a metodologia utilizada na análise e saneamento dos preços coletados, em especial, para a desconsideração de valores inexequíveis ou excessivamente elevados, devendo o agente responsável pontuar, um a um, os motivos da não consideração de quaisquer dos preços. (...)”</p>
                                    </div>
                                    <p>Considerando o disposto acima, para garantir uma média ajustada e representativa dos valores de mercado, utilizamos a metodologia de exclusão de valores extremos (método da média aparada), também conhecida como “eliminação de outliars”, conforme prática comum em estatística econômica. Dessa forma, para cada item pesquisado, desconsideramos os menores e os maiores valores encontrados para evitar distorções no cálculo final da média. Os valores que aparecem como DESCARTADOS no mapa de preços se encaixam nesse quesito.</p>
                               </div>

                                <div class="assinatura">
                                    <div style="width: 40%">
                                        <h4>Responsável pela Pesquisa:</h4>
                                        <div style="border-top: 1px solid black;">
                                            <p>XXXXXXXX XXXXX XXX XXXXXX</p>
                                            <p>Coordenador Inovação SMCIT</p>
                                        </div>
                                    </div>
                                    <div style="width: 10%;"></div>
                                    <div style="width: 40%">
                                        <h4>Ordenador da Despesa:</h4>
                                        <div style="border-top: 1px solid black;">
                                            <p>XXXXXXXX XXXXX XXX XXXXXX</p>
                                            <p>Diretor Geral SMCIT</p>
                                            <p>Decreto n° 42.562/2025</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="dataFinal">
                                    <p>Araucária, XX de XXXXX de 20XX</p>
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

.textoponto2 {
    margin-top: 2mm;
}

.textoponto2 h2 {
    font-size: 1.15em;
    font-weight: bold;
    line-height: 1.5;
    letter-spacing: .005mm;
    margin-bottom: 1mm;
    text-indent: 4.5em;
}

.textoponto2 h2::first-letter {
    font-size: 0.9em;
}

.textoponto2 p {
    font-size: .8em;
    margin-bottom: 0.8mm;
    margin-left: 1.5mm;
    margin-right: 1.5mm;
    text-align: justify;
}

.textoponto {
    margin-top: 2mm;
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

.pos {
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

.canto {
    margin: 10px 5% 10px 15%;
    padding: 10px 15px;
    font-style: italic;
}

.canto p {
    margin: 0;
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
    text-align: start;
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

.semBorda {
    font-size: .7em;
    text-align: justify;
    width: 100%;
}

.semBorda table {
    border-collapse: collapse;
    
}

.semBorda td, th {
    border: none;
}

.tamanhoTitulo {
    width: 20%;
}

.tamanhoValor {
    width: 75%;
}

.assinatura {
    display: flex; 
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 5vw;
}

.assinatura h4 {
    text-align: start;
    font-weight: bold;
    font-size:  .8em;
    margin-bottom: 5vw;
}

.assinatura p {
    width: 100%;
    text-align: center;
    font-size: .8em;
    margin: 0;
}

.dataFinal {
    width: 100%;
    text-align: center;
    font-size: .8em;
    margin-top: 10mm;
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