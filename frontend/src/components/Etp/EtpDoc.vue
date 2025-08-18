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

            <div v-if="etpStore.modoEdicaoManual" class="painel-ajuda">
                <p>Dica Campo</p>
            </div>


            <div class="doc">

                <div class="q-ma-md">
                    <q-scroll-area class="rolagem-documento">
                    <div class="q-py-xs">
                        <div id="documento" ref="Documento">
                            <div id="pag" >

                                <div class="borda">
                                    <h1>ESTUDO TÉCNICO PRELIMINAR</h1>
                                    <h1>N.° XXX/20XX</h1>
                                </div>

                                <div class="bloco">
                                    <div class="borda1">
                                        <h3>N.° do Processo:</h3>
                                        <p>XXXXX/20XX</p>
                                    </div>
                                    <div class="borda1">
                                        <h3>DFD n.°:</h3>
                                        <p>XXX/20XX</p>
                                    </div>
                                    <div class="borda1">
                                        <h3>Exercício:</h3>
                                        <p>20XX</p>
                                    </div>
                                    <div class="borda1">
                                        <h3>Data:</h3>
                                        <p>XX/XX/20XX</p>
                                    </div>
                                </div>

                                <div class="bloco1">
                                    <div class="borda2">
                                        <h3>Secretaria:</h3>
                                        <p>SMCIT</p>
                                    </div>
                                </div>
                                <div class="bloco1">
                                    <div class="borda2">
                                        <h3>Departamento/Unidade:</h3>
                                        <p>Dpto. de Gestão de Infraestrutura</p>
                                    </div>
                                </div>
                                <div class="bloco1">
                                    <div class="borda2">
                                        <h3>Setor Requisitante:</h3>
                                        <p>Superintendência da Tecnologia da Informação</p>
                                    </div>
                                </div>
                                <div class="bloco1">
                                    <div class="borda2">
                                        <h3>Responsável:</h3>
                                        <p>XXXXXX XXXXXXXX XXXXX</p>
                                    </div>
                                </div>
                                <div class="bloco1">
                                    <div class="borda2">
                                        <h3>Matrícula:</h3>
                                        <p>XXXXX</p>
                                    </div>
                                </div>

                                <div class="texto">
                                    <h2>1 Descrição Da Necessidade</h2>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe eveniet, perspiciatis ut delectus, impedit asperiores voluptatibus, maiores ex eius sunt tempore! Libero eum voluptas distinctio! Vitae repellat aliquam expedita cumque.</p>
                                </div>

                                <div class="texto">
                                    <h2>2 Alinhamento Entre Contratação E Planejamento</h2>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, sed? Saepe autem quia repellat quo dolore a, porro odio iure reprehenderit, iste repudiandae sequi minus sapiente! Ea modi officia excepturi?</p>
                                </div>

                                <div class="texto">
                                    <h2>3 Dos Requisitos Da Contratação</h2>
                                </div>

                                <div class="textoponto">
                                    <h2>3.<span class="posponto">1</span> Atestados De Capacidade Técnica</h2>
                                    <p>A licitante deverá apresentar, obrigatoriamente, <strong>atestado de capacidade técnica</strong> que comprove a aptidão para o desempenho de atividades compatíveis e pertinentes ao objeto da contratação. O atestado deverá ser emitido por pessoa jurídica de direito público ou privado e demonstrar a execução de serviços ou fornecimentos similares em características, quantidades e complexidade aos exigidos neste certame.
                                    As <strong>exigências específicas quanto à forma, quantidade mínima, escopo e condições de aceitação dos atestados</strong> estão detalhadas no Termo de Referência.</p>
                                </div>

                                <div class="textoponto">
                                    <h2>3.<span class="posponto">2</span> Demonstração De Conformidade</h2>
                                    <p>A licitante deverá comprovar sua conformidade com os requisitos legais e técnicos aplicáveis à execução do objeto, incluindo, quando pertinente, <strong>declaração formal de conformidade com a Lei Geral de Proteção de Dados (LGPD)</strong> e outras certificações relevantes exigidas no Termo de Referência.
                                    As exigências específicas de conformidade — como normas técnicas, certificações de qualidade, segurança da informação, ambientais ou regulatórias — estão descritas detalhadamente no Termo de Referência e deverão ser atendidas integralmente pela CONTRATADA.</p>
                                </div>

                                <div class="textoponto">
                                    <h2>3.<span class="posponto">3</span> Habilitação Econômico-financeira</h2>
                                    <p>Considerando o valor estimado da contratação e a sua complexidade técnica, será exigida da licitante a <strong>comprovação de capacidade econômico-financeira compatível</strong>, nos termos do art. 69 da Lei nº 14.133/2021.
                                    A exigência visa assegurar que o fornecedor possua condições adequadas de sustentabilidade financeira para execução integral do contrato. Os critérios específicos e os documentos requeridos para a habilitação econômico-financeira estão descritos detalhadamente no Termo de Referência.</p>
                                </div>

                                <div class="textoponto">
                                    <h2>3.<span class="posponto">4</span> Do Consórcio</h2>
                                    <p>Nos termos do art. 15 da Lei nº 14.133/2021, <strong>fica vedada a participação de empresas em consórcio</strong>, uma vez que:</p>
                                    <ul>
                                        <li>O objeto da contratação é <strong>padronizado</strong>, de baixa complexidade técnica;</li>
                                        <li>As entregas não <strong>exigem grande estrutura conjunta ou divisão de responsabilidades</strong>;</li>
                                    </ul>
                                    <p>A execução por empresa individual é plenamente viável e mais eficiente sob o ponto de vista da gestão contratual.</p>
                                </div>

                                <div class="texto">
                                    <h2>4 Estimativa Das Quantidades</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In ipsam commodi id reiciendis, amet laborum optio ea voluptatibus vero quibusdam fuga quo distinctio. Libero fugiat distinctio provident tempora vitae recusandae?</p>
                                </div>

                                <div class="texto">
                                    <h2>5 Levantamento De Mercado</h2>
                                    <p>Para atendimento ao objeto proposto, foram identificadas as seguintes alternativas de solução, com base em contratações similares realizadas por outros órgãos públicos, bem como em consultas exploratórias ao mercado:</p>
                                    <ul>
                                        <li><strong>Opção A - Contratação de solução SaaS especializada:</strong> Consiste na contratação de solução como serviço (Software as a Service), fornecida por empresa especializada, com infraestrutura própria, manutenção contínua, atualizações automáticas e suporte técnico incluído. A solução opera em nuvem e é acessada via navegador, eliminando a necessidade de investimento em servidores locais.</li>

                                        <li><strong>Opção B - Aquisição de solução de prateleira com implantação local:</strong>
                                        Envolve a compra de uma licença perpétua de software pronto, a ser implantado em servidores próprios da Administração. Exige aquisição de infraestrutura local, equipe técnica interna para manutenção e atualizações periódicas com suporte limitado ao escopo contratado.</li>

                                        <li><strong>Opção C - Desenvolvimento interno pela equipe da Prefeitura ou contratação por escopo:</strong>
                                        Trata-se do desenvolvimento de solução sob medida, utilizando recursos humanos internos ou contratação de equipe externa por projeto fechado. Demanda tempo elevado de desenvolvimento, validação, testes e manutenção contínua, além de risco maior de descontinuidade em razão de limitações operacionais.</li>
                                    </ul>
                                </div>

                                <div class="texto">
                                    <h2>6 Análise Comparativa Entre Possíveis Soluções</h2>
                                    <table class="tabela">
                                        <thead>
                                            <tr>
                                                <th>Critério</th>
                                                <th>Opção A - SaaS</th>
                                                <th>Opção B - Soluçao Local</th>
                                                <th>Opção C - Desenvolvimento Interno ou por Escopo</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th>Prazo de Implantação</th>
                                                <td>Curto (Ativação Rápida)</td>
                                                <td>Médio (Exige Infraestrutura)</td>
                                                <td>Longo (Inclui Desenvolvimento e Validações)</td>
                                            </tr>
                                            <tr>
                                                <th>Escalabilidade / Flexibilidade</th>
                                                <td>Alta (Modelo Sob Demanda)</td>
                                                <td>Limitada à Capacidade Instalada</td>
                                                <td>Alta, porém com esforço técnico elevado</td>
                                            </tr>
                                            <tr>
                                                <th>Atualizações e Evolução Tecnológica</th>
                                                <td>Contínuas e automáticas</td>
                                                <td>Requer contratação ou licenças adicionais</td>
                                                <td>Dependem da equipe interna ou contrato contínuo</td>
                                            </tr>
                                            <tr>
                                                <th>Capacidade Técnica Exigida da Administração</th>
                                                <td>Baixa</td>
                                                <td>Alta (Infraestrutura Local)</td>
                                                <td>Muito Alta (Desenvolvimento, manutenção, suporte)</td>
                                            </tr>
                                            <tr>
                                                <th>Risco de Interrupção do Serviço</th>
                                                <td>Baixo</td>
                                                <td>Médio</td>
                                                <td>Alto</td>
                                            </tr>
                                            <tr>
                                                <th>Aderência a Boas Práticas de Governo Digital</th>
                                                <td>Alta</td>
                                                <td>Média</td>
                                                <td>Baixa a média</td>
                                            </tr>
                                            <tr>
                                                <th>Conformidade com LGPD e Segurança da Informação</th>
                                                <td>Alta (fornecedores certificados)</td>
                                                <td>Variável</td>
                                                <td>Depende da qualidade do desenvolvimento</td>
                                            </tr>
                                            <tr>
                                                <th>Aderência a padrões tecnológicos / interoperabilidade</th>
                                                <td>Alta</td>
                                                <td>Média</td>
                                                <td>Baixa a média</td>
                                            </tr>
                                            <tr>
                                                <th>Customização</th>
                                                <td>Média (dentro dos limites do SaaS)</td>
                                                <td>Média</td>
                                                <td>Alta (personalizável conforme necessidade)</td>
                                            </tr>
                                            <tr>
                                                <th>Experiência do Usuário (UX)</th>
                                                <td>Alta (interfaces modernas)</td>
                                                <td>Média</td>
                                                <td>Baixa a média</td>
                                            </tr>
                                            <tr>
                                                <th>Necessidade de Adequações no ambiente da Prefeitura</th>
                                                <td>Mínima</td>
                                                <td>Requer infraestrutura física e lógica</td>
                                                <td>Alta, incluindo equipe técnica e metodologias</td>
                                            </tr>
                                            <tr>
                                                <th>Tendência de Mercado / Substentação a longo prazo</th>
                                                <td>Alinhada às melhores práticas</td>
                                                <td>Em desuso gradual</td>
                                                <td>Pouco recomendada em contexto público</td>
                                            </tr>
                                            <tr>
                                                <th>Exemplos positivos em outros orgãos públicos</th>
                                                <td>Sim (vários casos de sucesso)</td>
                                                <td>Sim (uso tradicional, com limitações)</td>
                                                <td>Poucos, com dificuldades de continuidade</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div class="texto">
                                    <h2>7 Estimativa Do Valor Da Contratação</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, voluptatum reprehenderit sequi sapiente numquam cumque. A harum omnis consequuntur quidem nulla magnam amet rem dignissimos nesciunt suscipit? Atque, quisquam suscipit.</p>
                                </div>

                                <div class="textoponto">
                                    <h2>7.<span class="posponto">1</span> Análise Comparativa de Custos</h2>
                                    <table class="tabela">
                                        <thead>
                                            <tr>
                                                <th>Critério</th>
                                                <th>Opção A - SaaS (Solução como serviço)</th>
                                                <th>Opção B - Solução Local (Licença de Prateleira)</th>
                                                <th>Opção C - Desenvolvimento Interno ou por Escopo</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th>Custo Inicial</th>
                                                <td>Mais barato (não exige infraestrutura local)</td>
                                                <td>Mais caro (licença + hardware + implantação)</td>
                                                <td>Baixo se equipe interna, mas com riscos ocultos</td>
                                            </tr>
                                            <tr>
                                                <th>Custo de Manutenção</th>
                                                <td>Incluso na mensalidade</td>
                                                <td>Elevado (suporte e atualizações à parte)</td>
                                                <td>Alto (Manutenção contínua pela equipe)</td>
                                            </tr>
                                            <tr>
                                                <th>Modelo de Pagamento</th>
                                                <td>Assinatura mensal/anual</td>
                                                <td>Licença fixa + custos adicionais</td>
                                                <td>Por projeto ou despesa continuada (RH + suporte)</td>
                                            </tr>
                                            <tr>
                                                <th>Eficiência energética / Sustentabilidade</th>
                                                <td>Alta (uso de datacenters otimzados)</td>
                                                <td>Baixa (servidores locais com alto consumo)</td>
                                                <td>Baixa (infraestrutura interna com consumo constante)</td>
                                            </tr>
                                            <tr>
                                                <th>Ganhos quantificáveis de economia</th>
                                                <td>Elevados, especialmente em médio e longo prazo</td>
                                                <td>Limitados, com alta despesa inicial</td>
                                                <td>Incertos, risco de retrabalho e manutenção cara</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div class="textoponto">
                                    <h2>7.<span class="posponto">2</span> Conclusão Técnica e Econômica</h2>
                                    <p>A <strong>opção A - Solução SaaS</strong> apresenta melhor relação <strong>custo-beneficio (Value for Money)</strong>, menor risco de execução, maior aderência às <strong>boas práticas do governo digital, menor impacto operacional para a Administração e implatação mais ágil e segura</strong></p>
                                    <p>As<strong> opções B e C foram consideradas tecnicamente viáveis</strong>, mas menos vantajosas. a <strong>opção B</strong> demanda investimento elevado em infraestrutura e equipe local. Já a <strong>opção C</strong> apresenta <strong>alto risco de atraso, descontinuidade, sobrecarga da equipe interna</strong> e manutenção onerosa, sendo <strong>desaconselhada</strong> neste contexto.</p>
                                </div>

                                <div class="textoponto">
                                    <h2>7.<span class="posponto">3</span> ROI/TCO</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione magni cupiditate magnam provident aliquam voluptates sunt tempora, deserunt esse fuga quaerat molestiae ipsam id fugiat at harum velit rem vero.</p>
                                </div>

                                <div class="textoponto">
                                    <h2>7.<span class="posponto">4</span> Viabilidade Orçamentária</h2>
                                    <p>A solução selecionada é adequada técnica e financeiramente ao objeto proposto, assegurando a compatibilidade fiscal e a continuidade da prestação dos serviços públicos essenciais. Está alinhada aos objetivos estratégicos da Administração e justifica a alocação dos recurso necessários para a execução contratual.</p>
                                </div>

                                <div class="textoponto">
                                    <h2>7.<span class="posponto">5</span> Cronograma Físico-Financeiro</h2>
                                    <p>Considerando a expectativa de início desse contrato para 11/2025, e o cronograma de implatação, o desembolso no atual ano fiscal de 2025 ficará:</p>
                                    <table class="tabela">
                                        <thead>
                                            <tr>
                                                <th>Período 2025</th>
                                                <th>Qnt</th>
                                                <th>Item</th>
                                                <th>Valor Un.</th>
                                                <th>Valor Mensal</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th rowspan="2">Novembro</th>
                                                <td>30</td>
                                                <td>Unidades Implatadas</td>
                                                <td>R$ 500,00</td>
                                                <td>R$ 15.000,00</td>
                                            </tr>
                                            <tr>
                                                <td>6</td>
                                                <td>Capacitação</td>
                                                <td>R$ 1.000,00</td>
                                                <td>R$ 6.000,00</td>
                                            </tr>
                                            <tr>
                                                <th>Dezembro</th>
                                                <td>90</td>
                                                <td>Unidades Implantadas</td>
                                                <td>R$ 500,00</td>
                                                <td>R$ 45.000,00</td>
                                            </tr>
                                            <tr>
                                                <th colspan="4">TOTAL</th>
                                                <td>R$ 66.000,00</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div class="texto">
                                    <h2>8 Descrição Da Solução Como Um Todo</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores doloribus sunt neque illo? At aut natus itaque, neque non esse voluptatem quasi ipsa quidem accusamus aspernatur voluptate corporis libero commodi?</p>
                                </div>

                                <div class="texto">
                                    <h2>9 Do Parcelamento do Objeto</h2>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet odio repudiandae atque voluptate consectetur iusto expedita ut aut debitis labore dolores perferendis error, sapiente repellendus quo ipsam officiis perspiciatis dolorem?</p>
                                </div>

                                <div class="textodois">
                                    <h2>1<span class="posponto">0</span> Resultados Pretendidos</h2>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam nesciunt corporis aperiam explicabo aliquam nisi recusandae alias error atque perspiciatis est assumenda cum, voluptatem quod fugiat omnis reiciendis libero possimus.</p>
                                </div>

                                <div class="textodois">
                                    <h2>1<span class="posponto">1</span> Sustenção da Solução</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, quo. Veniam explicabo, rem ipsam dignissimos ad asperiores adipisci nihil rerum magni. Pariatur odit mollitia adipisci itaque officia obcaecati veniam incidunt.</p>
                                </div>

                                <div class="textodois">
                                    <h2>1<span class="posponto">2</span> Providências Necessárias</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias iste facere quia autem similique repellat doloremque tenetur, repellendus eaque porro dignissimos quos quasi suscipit asperiores sint. Quaerat, accusamus! Placeat, fuga?</p>
                                </div>

                                <div class="textodois">
                                    <h2>1<span class="posponto">3</span> Contratações Correlatas ou Interdependentes</h2>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis odio obcaecati, voluptatem ipsa inventore aspernatur libero vitae! Inventore cum accusantium enim dolore natus temporibus, qui laborum facilis architecto tempora. Commodi.</p>
                                </div>

                                <div class="textodois">
                                    <h2>1<span class="posponto">4</span> Impactos ambientais e Sociais</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, exercitationem quas fugit, recusandae architecto, modi temporibus est at excepturi laboriosam blanditiis! Blanditiis cum corporis eveniet assumenda cumque debitis rem nisi.</p>
                                </div>

                                <div class="textodois">
                                    <h2>1<span class="posponto">5</span> Mapeamento dos Riscos</h2>
                                    <table class="tabela">
                                        <thead>
                                            <tr>
                                                <th style="width: 3%;">Id</th>
                                                <th style="width: 9%;">Risco</th>
                                                <th style="width: 6%;">Fase</th>
                                                <th style="width: 5%;">Prob</th>
                                                <th style="width: 9%;">Impacto</th>
                                                <th style="width: 30%;">Dano</th>
                                                <th style="width: 20%;">Ação Preventiva</th>
                                                <th style="width: 20%;">Contingência</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Serviço não ser deferido pela Administração</td>
                                                <td>Interna</td>
                                                <td>Baixa</td>
                                                <td>Alto</td>
                                                <td>Interrupção da prestação do serviço, em conjunto com a retirada dos equipamentos presentes no datacenter, sem previsão de substituição. Parada de operacionalidade do ambiente datacenter, contemplando servidores virtuais e físicos, ambiente de armazenamento, sistema de backup e restauração</td>
                                                <td>Definição clara e objetiva do objeto à ser licitado</td>
                                                <td>ND</td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Morosidade na Tramitação</td>
                                                <td>Interna</td>
                                                <td>Média</td>
                                                <td>Alto</td>
                                                <td>Demora na realização/execução dos serviços. Encerramento do contrato atual, sem possibilidade de protelação, causando necessidade de possível ressarcimento ao prestador. E demais citadas no bloco acima.</td>
                                                <td>Celeridade na tramitação processual para propiciar a execução em tempo hábil. Conversas e discussões prévias para facilitar entendimento em possíveis questionamentos dos setores envolvidos.</td>
                                                <td>Acompanhamento frequente pelos interessados, a fim de desembaraçar o trâmite. <strong>Contratação emergencial temporária</strong> (já iniciado) para evitar descontinuidade dos serviços</td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>Inexecução pela Contratada</td>
                                                <td>Externa</td>
                                                <td>Baixa</td>
                                                <td>Alto</td>
                                                <td>Não prestação do serviço. Parada de ambiente Datacenter. E demais citadas nos blocos acima.</td>
                                                <td>Acompanhamento pelos fiscais, responsáveis técnicos e gestores, junto à contratada, para cobrar e garantir a entrega em tempo hábil e nas condições contratuais.</td>
                                                <td>Aplicação de penalidades na Contratada. Acompanhamento tão logo firmado contrato, Fiscalização constante até que o recebimento definitivo seja realizado</td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>Licitação Fracassada</td>
                                                <td>Externa</td>
                                                <td>Baixa</td>
                                                <td>Alto</td>
                                                <td>Não prestação do serviço. Parada de ambiente Datacenter. E demais citadas nos blocos acimas.</td>
                                                <td>Acompanhamento da gestão em conjunto com prestador para alinhamento</td>
                                                <td>Abertura de novo processo licitatório ou emergencial</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div class="final">
                                    <h4>DECLARAÇÃO DE VIABILIDADE DA CONTRAÇÃO</h4>
                                    <p>A equipe de planejamento que ao final subscreve o presente estudo técnico preliminar, nos termos do parágrafo 1.° e inciso XIII do artigo 18 da Lei 14.133/2021 <strong>declara VIÁVEL</strong> esta contratação.</p>

                                    <h5>Equipe de Planejamento da Contratação</h5>
                                </div>

                                <div class="assinatura">
                                    <div style="width: 40%; border-top: 1px solid black;">
                                        <p>XXXXXXXX XXXXX XXX XXXXXX</p>
                                        <p>Coordenador Inovação SMCIT</p>
                                    </div>
                                    <div style="width: 10%;"></div>
                                    <div style="width: 40%; border-top: 1px solid black;">
                                        <p>XXXXXXXX XXXXX XXX XXXXXX</p>
                                        <p>Programador SMCIT</p>
                                    </div>
                                </div>

                                <div class="assinatura">
                                    <div style="width: 40%; border-top: 1px solid black;">
                                        <p>XXXXXXXX XXXXX XXX XXXXXX</p>
                                        <p>Diretor Infra SMCIT</p>
                                    </div>
                                    <div style="width: 10%;"></div>
                                    <div style="width: 40%; border-top: 1px solid black;">
                                        <p>XXXXXXXX XXXXX XXX XXXXXX</p>
                                        <p>Diretor Sistemas SMCIT</p>
                                    </div>
                                </div>
                            
                                <div class="final2">
                                    <h4>APROVAÇÃO DO ORDENADOR DA DESPESA</h4>
                                    <p>Nos termos do Art. 334 do Decreto Municipal n° 39.132/2023, <strong>aprovo o presente Estudo Técnico Preliminar</strong>, considerando os elementos técnicos apresentados pela equipe de planejamento, os quais demonstram alinhamento ao planejamento estratégico e ao plano de contratações anual, bem como atendem aos objetivos e necessidades da Administração.</p>
                                </div>

                                <div class="assinatura2">
                                    <div style="width: 40%; border-top: 1px solid black;">
                                        <p>XXXXXXXX XXXXX XXX XXXXXX</p>
                                        <p>Secretário Municipal de Ciência, Inovação, Tecnologia e Desenvolvimento Econômico</p>
                                    </div>
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
                        <q-toggle v-model="etpStore.value" color="purple-14" class="tamanhotg" />
                    </div>

                    <div>
                        <div class="btnFinalizar">
                            <q-btn label="Salvar" id="finalizar" class="shadow-4" />
                        </div>
                    </div>

                </div>
                
                <div v-if="etpStore.modoEdicaoManual && etpStore.mostrarPdf">
                    <div class="btnConcluir">
                        <q-btn label="Concluir" id="concluir" />
                    </div>
                </div>

            </div>

            <div id="form" v-if="etpStore.value">
                
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
import { useEtpDocStore } from '@/stores/EtpDocStore';
import { watch } from 'vue';

    const etpStore = useEtpDocStore();

    watch(() => [etpStore.value], (value) => {
        if (value) {
            etpStore.modoEdicaoManual = false;
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

.final h4 {
    text-align: center;
    font-size: .9em;
    font-weight: bold;
}

.final h5 {
    text-align: center;
    font-size: .85em;
    font-weight: bold;
}

.final p {
    text-align: justify;
    font-size: .8em;
    font-style: italic;
}

.final2 h4 {
    text-align: center;
    font-size: .9em;
    font-weight: bold;
}

.final2 p {
    text-align: center;
    font-size: .8em;
    font-style: italic;
}

.assinatura {
    display: flex; 
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 5vw;
}

.assinatura p {
    width: 100%;
    text-align: center;
    font-size: .8em;
    margin: 0;
}

.assinatura2 {
    display: flex; 
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 5vw;
}

.assinatura2 p {
    width: 100%;
    text-align: center;
    font-size: .8em;
    margin: 0;
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