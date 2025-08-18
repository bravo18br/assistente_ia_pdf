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

            <div v-if="trStore.modoEdicaoManual" class="painel-ajuda">
                <p>Dica Campo</p>
            </div>


            <div class="doc">

                <div class="q-ma-md">
                    <q-scroll-area class="rolagem-documento">
                    <div class="q-py-xs">
                        <div id="documento" ref="Documento">
                            <div id="pag" >

                                <div>
                                    <h1>Termo de Referência</h1>
                                </div>

                                <div class="sumario">
                                    <h3>Sumário</h3>
                                    <ul>
                                        <li><span>1 Definição do Objeto</span><span class="linha"></span><span class="pagina">2</span></li>
                                        <li><span>2 Fundamentação da Contratação</span><span class="linha"></span><span class="pagina">2</span></li>
                                        <li><span>3 Descrição da Solução</span><span class="linha"></span><span class="pagina">2</span></li>
                                        <li><span>4 Requisitos da Contração</span><span class="linha"></span><span class="pagina">2</span></li>
                                        <li><span>5 Modelo de Execução do Objeto</span><span class="linha"></span><span class="pagina">2</span></li>
                                        <li><span>6 Modelo de Gestão do Contrato</span><span class="linha"></span><span class="pagina">3</span></li>
                                        <li><span>7 Critérios de Medição e Pagamento</span><span class="linha"></span><span class="pagina">3</span></li>
                                        <li><span>8 Forma e Critérios de Seleção do Fornecedor</span><span class="linha"></span><span class="pagina">3</span></li>

                                        <ul>
                                            <li class="indent"><span>8.1 Atestados de capacidade técnica</span><span class="linha"></span><span class="pagina">3</span></li>
                                            <li class="indent"><span>8.2 Demonstração de conformidade</span><span class="linha"></span><span class="pagina">3</span></li>
                                            <li class="indent"><span>8.3 Habilitação Econômico-financeira</span><span class="linha"></span><span class="pagina">3</span></li>
                                            <li class="indent"><span>8.4 Do Consórcio</span><span class="linha"></span><span class="pagina">4</span></li>
                                        </ul>

                                        <li><span>9 Adequação Orçamentária</span><span class="linha"></span><span class="pagina">4</span></li>
                                        <li><span>10 Especificação do Produto</span><span class="linha"></span><span class="pagina">4</span></li>
                                        <li><span>11 Local de Entrega</span><span class="linha"></span><span class="pagina">4</span></li>
                                        <li><span>12 Prazo de Entrega</span><span class="linha"></span><span class="pagina">5</span></li>
                                        <li><span>13 Garantia da Solução</span><span class="linha"></span><span class="pagina">5</span></li>
                                        <li><span>14 Logística Reversa e Descarte Ambiental</span><span class="linha"></span><span class="pagina">5</span></li>
                                        <li><span>15 Do Pagamento</span><span class="linha"></span><span class="pagina">6</span></li>
                                        <li><span>16 Condições de Fornecimento</span><span class="linha"></span><span class="pagina">6</span></li>
                                        <li><span>17 Garantia de Execução</span><span class="linha"></span><span class="pagina">6</span></li>

                                        <ul>
                                            <li class="indent"><span>17.1 Exceção para Entidades Públicas</span><span class="linha"></span><span class="pagina">7</span></li>
                                        </ul>

                                        <li><span>18 Service Level Agreement SLA</span><span class="linha"></span><span class="pagina">7</span></li>
                                        <li><span>19 Quadro de Quantidades e Custos</span><span class="linha"></span><span class="pagina">7</span></li>
                                        <li><span>20 Tratamentos de Dados Pessoais (LGPD)</span><span class="linha"></span><span class="pagina">7</span></li>
                                        <li><span>21 Sanções</span><span class="linha"></span><span class="pagina">8</span></li>

                                        <ul>
                                            <li class="indent"><span>21.1 Penalidades</span><span class="linha"></span><span class="pagina">9</span></li>
                                            <li class="indent"><span>21.2 Multas</span><span class="linha"></span><span class="pagina">9</span></li>
                                            <li class="indent"><span>21.3 Multas específicas por descumprimento de SLA</span><span class="linha"></span><span class="pagina">10</span></li>
                                            <li class="indent"><span>21.4 Procedimento Administrativo e Recursos</span><span class="linha"></span><span class="pagina">10</span></li>

                                            <ul>
                                                <li class="indent2"><span>21.4.1 Instauração e Tramitação do Processo</span><span class="linha"></span><span class="pagina">10</span></li>
                                                <li class="indent2"><span>21.4.2 Recursos Administrativos</span><span class="linha"></span><span class="pagina">10</span></li>
                                                <li class="indent2"><span>21.4.3 Disposições Específicas sobre Multas</span><span class="linha"></span><span class="pagina">11</span></li>
                                                <li class="indent2"><span>21.4.4 Registro das Penalidades</span><span class="linha"></span><span class="pagina">11</span></li>
                                                <li class="indent2"><span>21.4.5 Casos Omissos</span><span class="linha"></span><span class="pagina">11</span></li>
                                            </ul>

                                        </ul>

                                        <li><span>22 Informações Complementares</span><span class="linha"></span><span class="pagina">11</span></li>
                                    </ul>
                                </div>

                                <div class="texto">
                                    <table class="tabela">
                                        <tbody>
                                            <tr>
                                                <th>Solicitante:</th>
                                                <td>XXXXXXXX XXXXXXXX XXXXXX</td>
                                            </tr>
                                            <tr>
                                                <th>Cargo:</th>
                                                <td>XXXXXXXX XXXXXXXXX</td>
                                            </tr>
                                            <tr>
                                                <th>Divisão ou Setor de Lotação:</th>
                                                <td>XXXXXXXXX XXXXXXXXXX - XXXXX</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div class="texto">
                                    <h2>1 Definição do Objeto</h2>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, ipsam dolorem corrupti in deserunt nostrum explicabo voluptas tempora! Quidem, amet. Maxime ratione nulla veritatis alias natus itaque repellat nemo dolorem!</p>
                                </div>

                                <div class="texto">
                                    <h2>2 Fundamentação da Contratação</h2>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem soluta suscipit magnam laboriosam, facere debitis quas cum veritatis molestiae quibusdam fuga. Repellendus, quasi commodi. Quos molestias rem nihil numquam. Iure!</p>
                                </div>

                                <div class="texto">
                                    <h2>3 Descrição da Solução</h2>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet ex hic vel iusto, voluptates atque voluptas eius dolorum dolores numquam ullam, itaque quod sint excepturi necessitatibus quia perferendis! Dolorum, iure.</p>
                                </div>

                                <div class="texto">
                                    <h2>4 Requisitos da Contratação</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem accusantium repellendus dolor aliquid dignissimos, nostrum quam amet, suscipit doloremque quisquam consequatur iure laborum nihil pariatur nam esse. Vel, qui ea!</p>
                                </div>

                                <div class="texto">
                                    <h2>5 Modelo de Execução do Objeto</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam veritatis sequi aperiam sed assumenda rem perspiciatis! Voluptates nobis nemo rerum aliquid consequatur molestias quibusdam, rem eveniet iure libero eaque aliquam!</p>
                                </div>

                                <div class="texto">
                                    <h2>6 Modelo de Gestão do Contrato</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam id ratione necessitatibus fugit architecto, enim ad dolore eaque repudiandae aliquid cupiditate, porro illo beatae velit quia nam assumenda, laboriosam nobis.</p>
                                </div>

                                <div class="texto">
                                    <h2>7 Critérios de Medição e Pagamento</h2>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus nesciunt mollitia deserunt fugit! A, sequi expedita! Sunt eius nesciunt quidem possimus ipsum vero nemo eum voluptatem? Amet tempore mollitia itaque.</p>
                                </div>

                                <div class="texto">
                                    <h2>8 Forma e Critérios de Seleção do Fornecedor</h2>
                                </div>

                                <div class="textoponto">
                                    <h2>8.<span class="posponto">1</span> Atestados de capacidade técnica</h2>
                                    <p>A licitante deverá comprovar sua aptidão para desempenho de atividade pertinente e compatível com o objeto desta contratação, mediante apresentação de:</p>
                                    
                                    <ul>
                                        <li>Regularidade Jurídica: Atos constituitivos atualizados, bem como documentos que comprevem a representação legal da empresa;</li>
                                        <li>Regularidade Fiscal e Trabalhista: Certidões negativas (ou positivas com efeito de negativas) relativas a tributos federoas, estaduais e municipais, bem como de débitos trabalhistas;</li>
                                        <li>Capacidade Técnica Operacional: Mínimo de 01 (um) atestado de capacidade técnica, emitido por pessoas jurídica de direito público ou privado, que comprove [OBJETO].</li>
                                    </ul>

                                    <p>Importante: O atestado apresentado deverá comprovar escopo ou quantidade equivalente a, no mínimo, 10% (dez por cento) dos quantitativos previstos nesta licitação, nos termos do §2º do art. 67 da Lei nº 14.133/2021.</p>
                                </div>

                                <div class="textoponto">
                                    <h2>8.<span class="posponto">2</span> Demonstração de conformidade</h2>
                                    <p>A licitante deverá ser apresentar declaração formal de conformidade com a Lei n° 13.709/2018 (LGPD), assinada por seu representante legal, comprometendo-se a adotar medidas técnicas e administrativas adequadas à proteção dos dados pessoais eventualmente tratados no âmbito contratual.</p>
                                    <p><strong>[ADICIONAR OUTRAS DECLARAÇÕES RELEVANTES PARA O OBJETO]</strong></p>
                                </div>

                                <div class="textoponto">
                                    <h2>8.<span class="posponto">3</span> Habilitação Econômico-financeira</h2>
                                    <p>Será exigida a compravação de capacidade econômico-financeira compatível com o valor estimado do contrato e sua complexidade, conforme art. 69 da Lei n° 14.133/2021:</p>
                                    <ul style="list-style: disc;">
                                        <li><strong>Para empresas privadas</strong></li>
                                        <ul style="list-style: disc;">
                                           <li>Certidão negativa de Falência e Concordata, recuperação judicial ou extrajudicial, emitida nos últimos 90 dias pelo distribuidor da sede do licitante</li> 
                                        </ul>
                                        <li><strong>Para entidades públicas ou empresas estatais com captial 100% público:</strong></li>
                                        <ul style="list-style: disc;">
                                            <li>Ficam dispensadas da apresentação dos documentos acima, desde que comprovem:</li>
                                            <ul style="list-style: disc;">
                                                <li>sua natureza jurídica pública ou estatal;</li>
                                                <li>criação por lei específica;</li>
                                                <li><strong>regularidade junto aos órgãos de controle e fiscalização.</strong></li>
                                            </ul>
                                        </ul>
                                    </ul>
                                </div>

                                <div class="textoponto">
                                    <h2>8.<span class="posponto">4</span> Do Consórcio</h2>
                                    <p>Nos temos do art. 15 da Lei n° 14.133/2021, <strong>fica vedada a participação de empresas em consórcio</strong>, uma vez que:</p>

                                    <ul>
                                        <li>O objeto da contratação é <strong>padronizado</strong>, de baixa complexidade técnica;</li>
                                        <li>As entregas não <strong>exigem grande estrutura conjunta ou divisão de responsabilidades</strong>;</li>
                                    </ul>

                                    <p>A execução por empresa individual é plenamente viável e mais eficiente sob o ponto de vista da gestão contratual.</p>
                                </div>

                                <div class="texto">
                                    <h2>9 Adequação Orçamentária</h2>
                                    <p>A presente contração está prevista no PLano de Contratações Anual (PCA) do exercício de 2025, vinculada ao [Processo Administrativo n° XXXX/2025]. A adequação orçamentária está formalizada na Lei Orçamentária Anual (LOA), em conformidade com as diretrizes estabelecidas no Plano Plurianual (PPA) da prestação di serviços públicos essenciais. A priorização estratégica da Administração justifica a alocação dos recursos necessários para a execução contratual.</p>
                                </div>

                                <div class="textodois">
                                    <h2>1<span class="posponto">0</span> Especificação do Produto</h2>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur nemo molestiae cupiditate delectus enim nulla, excepturi quisquam iste doloremque illum deserunt rerum accusamus tenetur id esse perspiciatis eum laudantium ipsum!</p>
                                </div>

                                <div class="textodois">
                                    <h2>1<span class="posponto">1</span> Local de Entrega</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa totam dolor, odio, nesciunt consectetur impedit repellat quasi aperiam voluptatum adipisci quibusdam incidunt. Laudantium, reiciendis sint. Unde saepe dolorem reiciendis dolorum.</p>
                                </div>

                                <div class="textodois">
                                    <h2>1<span class="posponto">2</span> Prazo de Entrega</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque corporis similique tempore quasi quae ex alias vitae, magni nemo repellendus suscipit officiis possimus magnam nisi. Eveniet quibusdam quidem repudiandae magni.</p>
                                </div>

                                <div class="textodois">
                                    <h2>1<span class="posponto">3</span> Garantia da Solução</h2>
                                    <p>A CONTRATADA é integralmente responsável por assegurar a destinação final ambientalmente adequada de todos os equipamentos que forem substituídos, retirados, ou que ao final da locação não sejam de interesse da CONTRATANTE para aquisição, em estrita conformidade com as direetrizes da <strong>Política Nacional de Resíduos Sólidos (Lei n° 12.305/2010)</strong> e demais normas ambientais aplicáveis.</p>
                                    <p>São obrigações e responsabilidades da CONTRATADA no âmbito da Logística Reversa:</p>
                                    <ul>
                                        <li><strong>Coleta e Transporte:</strong> Realizar a coleta e o transporte de todos os equipamentos substituídos ou retirados das instalações da CONTRATANTE, arcando com todos os custos e riscos inerentes a essas operações.</li>
                                        <li><strong>Descaracterização e Destinação Final:</strong> Garantir a descaracterização (descarte de dados de forma segura, se aplicável, e inutilização do bem) e a destinação final ambientalmente correta dos equipamentos, preferencialmente por meio de reciclagem ou reuso, priorizando empresas e processos que possuam as devidas licenças e certificações ambientais.</li>
                                        <li><strong>Emissão de Comprovantes:</strong> Apresentar à CONTRATANTE, quando da retirada do equipamento, o comprovante de recebimento (manifesto de transporte de resíduos - MTR, ou documento similar) da empresa responsável pela destinação final. Adicionalmente, a CONTRATADA deverá apresentar, anualmente ou sempre que solicitado pelo Fiscal do Contrato, o <strong>Certificado de Destinação Final (CDF)</strong> dos equipamentos encaminhados para descarte, atestando o cumprimento das normas legais e regulamentares de logística reversa.</li>
                                        <li><strong>Plano de Desfazimento:</strong> Em caso de fornecimento de itens físicos completamentares ou substituições por falha durante o contrato, a CONTRATADA deverá prever e executar um plano de desfazimento ambientalmente responsável para os itens que s tornarem obsoletos ou inservíveis, conforme exigido pela legislação vigente e pelas melhores práticas de sustenbilidade.</li>
                                        <li><strong>Orientação à CONTRATANTE:</strong> Orientar formalmente a CONTRATANTE quanto aos procedimentos corretos de segregação e armazenamento temporário dos equipamentos a serem coletados, quando aplicável, visando facilitar a operação da logística reversa.</li>
                                    </ul>
                                </div>

                                <div class="textodois">
                                    <h2>1<span class="posponto">5</span> Do Pagamento</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora non porro quis ad sint ratione, libero iure, quos reiciendis reprehenderit nulla laboriosam minima culpa nemo ex, numquam praesentium odit consequatur.</p>
                                </div>

                                <div class="textodois">
                                    <h2>1<span class="posponto">6</span> Condições de Fornecimento</h2>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum et ipsum optio voluptatum molestias? Voluptatem iure pariatur ipsam, reiciendis possimus quod, laudantium asperiores neque aliquid sapiente reprehenderit quaerat provident dignissimos?</p>
                                </div>

                                <div class="textodois">
                                    <h2>1<span class="posponto">7</span> Garantia de Execução</h2>
                                    <p>Nos termos do artigo 96 da Lei Federal nº 14.133/2021, será exigida da empresa vencedora a prestação de garantia contratual, como condição para a assinatura do contrato, com a finalidade de assegurar o seu fiel cumprimento.</p>
                                    <p>Em virtude da criticidade e do vulto do objeto deste contrato, o valor da garantia corresponderá a 5% (cinco por cento) do valor total do contrato.</p>
                                    <p>A garantia poderá ser prestada em uma das seguintes modalidades:</p>
                                    <ul>
                                        <li>Caução em dinheiro ou em títulos da dívida pública;</li>
                                        <li>Seguro-garantia;</li>
                                        <li>Fiança bancária;</li>
                                    </ul>
                                    <p>A garantia deverá ter validade igual ou superior ao prazo contratual, podendo ser reajustada ou complementada nos casos de aditamento, prorrogação ou revisão do valor contratado.</p>
                                    <p>A garantia prestada terá como finalidade assegurar o fiel cumprimento de todas as obrigações contratuais, incluindo, mas não se limitando a, a entrega dos equipamentos, a qualidade dos produtos e serviços, a observância dos prazos e a reparação de quaisquer danos ou prejuízos causados à CONTRATANTE.</p>
                                    <p>Em caso de aplicação de multas à CONTRATADA, nos termos das cláusulas de penalidades deste Termo de Referência e do contrato, os valores correspondentes poderão ser retidos da garantia de execução, sem prejuízo da cobrança judicial ou extrajudicial de eventuais valores remanescentes.</p>
                                    <p>A liberação ou devolução da garantia ocorrerá após o recebimento definitivo do objeto, desde que não haja pendências contratuais, multas aplicadas ou prejuízos a serem ressarcidos à Administração.</p>
                                </div>

                                <div class="textoponto">
                                    <h2>1<span class="pos">7.</span><span class="posponto">1</span> Exceção para Entidade Públicas</h2>
                                    <p>Nos termos do § 2º do art. 96 da Lei Federal nº 14.133/2021, <strong>a exigência de garantia de execução será dispensada quando a contratada for órgão ou entidade que integre a Administração Pública e tenha sido criada especificamente para a prestação dos serviços objeto do contrato.</strong></p>
                                </div>

                                <div class="textodois">
                                    <h2>1<span class="posponto">8</span> Service Level Agreement SLA</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos quibusdam vitae beatae sit reprehenderit similique quo ducimus, aliquam incidunt, eligendi ab id, dolor voluptatem? Repudiandae id rem ex corporis vero?</p>
                                    <p><strong>[MONTE UMA TABELA COM OS PROBLEMAS MAIS COMUNS PARA O OBJETO CONTRATADO E PREVEJA SLAS COERENTES]</strong></p>
                                </div>

                                <div class="textodois">
                                    <h2>1<span class="posponto">9</span> Quadro de Quantidades e Custos</h2>
                                    <table class="tabela">
                                        <thead>
                                            <tr>
                                                <th>Item</th>
                                                <th>Cod IPM</th>
                                                <th>CatSer</th>
                                                <th>Classe</th>
                                                <th>Descrição</th>
                                                <th>Und.</th>
                                                <th>Qtde</th>
                                                <th>R$ Un</th>
                                                <th>R$ Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>253087</td>
                                                <td>27197</td>
                                                <td>Soluções TIC</td>
                                                <td>Emissão Certificado Digital Padrão ICP-Brasil A3 e-CNPJ Nuvem Validade 3 anos AC Raiz V5 ou V10</td>
                                                <td>UN</td>
                                                <td>1</td>
                                                <td>R$ 357,24</td>
                                                <td>R$ 357,24</td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>253088</td>
                                                <td>27189</td>
                                                <td>Soluções TIC</td>
                                                <td>Emissão Certificado Digital Padrão ICP-Brasil A3 e-CPF Nuvem Validade 3 anos AC Raiz V5 ou V10</td>
                                                <td>UN</td>
                                                <td>40</td>
                                                <td>R$ 267,54</td>
                                                <td>R$ 10.701,60</td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>253089</td>
                                                <td>27243</td>
                                                <td>Soluções TIC</td>
                                                <td>Emissão Certificado Digital Padrão ICP-Brasil SSL e-CNPJ MULTIDOMAIN OV Validade 1 ano AC Raiz V5 ou V10</td>
                                                <td>UN</td>
                                                <td>2</td>
                                                <td>R$ 1.536,50</td>
                                                <td>R$ 3.073,00</td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>253090</td>
                                                <td>27162</td>
                                                <td>Soluções TIC</td>
                                                <td>Emissão Certificado Digital Padrão ICP-Brasil A1 e-CNPJ Validade 1 ano AC Raiz V5 ou V10</td>
                                                <td>UN</td>
                                                <td>1</td>
                                                <td>R$ 201,56</td>
                                                <td>R$ 201,56</td>
                                            </tr>
                                            <tr>
                                                <td>5</td>
                                                <td>253091</td>
                                                <td>27146</td>
                                                <td>Soluções TIC</td>
                                                <td>Emissão Certificado Digital Padrão ICP-Brasil A1 e-CPF Validade 1 ano AC Raiz V5 ou V10</td>
                                                <td>UN</td>
                                                <td>1</td>
                                                <td>R$ 155,98</td>
                                                <td>R$ 155,98</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div class="textodois">
                                    <h2>2<span class="posponto">0</span> Tratamento de Dados Pessoais (LGPD)</h2>
                                    <p>A contratada deverá observar integralmente a Lei nº 13.709/2018 (Lei Geral de Proteção de Dados - LGPD), comprometendo-se a:</p>
                                    <ul>
                                        <li>Tratar os dados pessoais coletados ou processados exclusivamente para a finalidade contratual, conforme instruções da Administração Pública;</li>
                                        <li>Garantir a segurança técnica e administrativa das informações tratadas, com base nas melhores práticas de proteção de dados e segurança da informação;</li>
                                        <li>Comunicar imediatamente à Administração qualquer incidente de segurança que envolva vazamento, acesso indevido ou comprometimento de dados;</li>
                                        <li>Não compartilhar ou transferir dados a terceiros sem prévia autorização por escrito da contratante;</li>
                                        <li>Permitir o exercício dos direitos dos titulares previstos nos artigos 17 a 22 da LGPD;</li>
                                        <li>Apresentar, se solicitado, relatórios de impacto à proteção de dados.</li>
                                    </ul>
                                    <p>O descumprimento dessas obrigações poderá ensejar a aplicação de penalidades previstas neste termo e na legislação vigente, incluindo responsabilização solidária nos termos do art. 42 da LGPD.</p>
                                </div>

                                <div class="textodois">
                                    <h2>2<span class="posponto">1</span> Sanções</h2>
                                    <p>Comete infração administrativa o licitante que, com dolo ou culpa:</p>
                                    <ul>
                                        <li>De causa à inexecução total ou parcial do contrato;</li>
                                        <li>Deixar de entregar a documentação exigida no certame ou não apresentar documentos solicitados;</li>
                                        <li>Recusar-se a enviar o detalhamento da proposta quando exigido;</li>
                                        <li>Solicitar desclassificação após o encerramento da etapa competitiva;</li>
                                        <li>Não apresentar amostra ou apresentar proposta/amostra em desacordo com o edital;</li>
                                        <li>Não celebrar o contrato ou não entregar a documentação exigida dentro do prazo de validade da proposta;</li>
                                        <li>Atrasar injustificadamente a execução ou entrega do objeto contratado;</li>
                                        <li>Prestar declaração ou apresentar documentação falsa;</li>
                                        <li>Fraudar o certame ou praticar ato fraudulento na execução do contrato;</li>
                                        <li>Agir de modo inidôneo, incluindo:</li>
                                        <ul style="list-style: disc;">
                                            <li>Atuar em conluio ou em desconformidade com a lei;</li>
                                            <li>Induzir a erro no julgamento;</li>
                                            <li>Apresentar amostra falsificada ou deteriorada;</li>
                                            <li>Praticar atos ilícitos para frustrar a contratação;</li>
                                            <li>Cometer ato lesivo conforme o art. 5° da Lei Federal n.° 12.846*2013.</li>
                                        </ul>
                                    </ul>
                                    <p>A inexecução total ou parcial das obrigações, bem como a execução irregular ou atraso injustificado, sujeita o contratado às penalidades pecuniárias e restritivas de direitos previstas em lei e no Edital.</p>
                                    <p>O contratado está sujeito às sanções administrativas do art. 156 da Lei Federal n.º 14.133/2021 e dos arts. 193 a 227 do Decreto Municipal n.º 39.132/2023, sem prejuízo de eventuais sanções penais conforme o Código Penal.</p>
                                    <p>As sanções serão aplicadas observando os princípios da razoabilidade e proporcionalidade, mediante processo administrativo com garantia de ampla defesa.</p>
                                </div>

                                <div class="textoponto">
                                    <h2>2<span class="pos">1.</span><span class="posponto">1</span> Penalidades</h2>
                                    <p>Garantida a prévia defesa, a inexecução total ou parcial do objeto, execução irregular, atraso injustificado na entrega ou na prestação dos serviços, ou outras infrações contratuais, sujeitarão a CONTRATADA às sanções administrativas previstas na Lei nº 14.133/2021 e no Decreto Municipal nº 39.132/2023, sem prejuízo da aplicação de glosas e outras medidas cabíveis.</p>
                                    <p>As sanções administrativas aplicáveis são:</p>
                                    <ol>
                                        <li><strong>Advertência</strong> (art. 156, I, da Lei n° 14.133/2021): Aplicável em caso de infrações leves, para as quais não haja previsão de sanção mais grave.</li>
                                        <li><strong>Multa</strong> (art. 156, II, da Lei n° 14.133/2021): Aplicável nas hipóteses de descumprimento de obrigações contratuais, conforme valores e critérios estabelecidos no item 22.2 deste Termo de Referência, cumulável com outras sanções.</li>
                                        <li><strong>Impedimento de licitar e contratar</strong> (art 156, III e § 4º, da Lei nº 14.133/2021): Aplicável a licitantes ou contratados que, no campo de atuação da Administração Pública, tenham praticado atos ilícitos graves ou reincidentes que demonstrem inidoneidade para contratar.</li>
                                        <li><strong>Declaração de inidoneidade</strong> (art. 156, IV e § 5º, da Lei nº 14.133/2021): Aplicável a licitantes ou contratados que tenham praticado atos ilícitos graves, com a finalidade de obstar a participação em licitações e contratos da Administração Pública direta e indireta de todos os entes federativos, até a reabilitação perante a autoridade competente.</li>
                                    </ol>
                                    <p>Na aplicação das sanções, conforme o art. 156, §1º da Lei nº 14.133/2021 e os arts. 210 a 212 do Decreto Municipal nº 39.132/2023, serão considerados:</p>
                                    <ul>
                                        <li>A natureza e a gravidade da infração;</li>
                                        <li>As circunstâncias agravantes ou atenuantes da infração;</li>
                                        <li>Os danos causados à Administração Pública;</li>
                                        <li>A implementação ou aperfeiçoamento de programa de integridade pela CONTRATADA.</li>
                                    </ul>
                                    <p>A aplicação das penalidades não exime a CONTRATADA da obrigação de corrigir as falhas, sanar as irregularidades e cumprir integralmente o contrato.</p>
                                </div>

                                <div class="textoponto">
                                    <h2>2<span class="pos">1.</span><span class="posponto">2</span> Multas</h2>
                                    <p>A multa será aplicada nos seguintes termos:</p>
                                    <ul>
                                        <li>Percentual entre 0,5% e 30% sobre o valor total do contrato;</li>
                                        <li>Recolhimento no prazo máximo de 10 (dez) dias úteis;</li>
                                        <li>Retenção de pagamento de outros contratos para compensação da multa;</li>
                                        <li>Percentuais específicos conforme arts. 195 a 197 do Decreto Municipal n.º 39.132/2023:</li>
                                        <li>0,5% a 5% para infrações do art. 195;</li>
                                        <li>5% a 30% para infrações do art. 196;</li>
                                        <li>15% a 30% para infrações do art. 197;</li>
                                        <li>Multa de mora de 0,5% ao dia de atraso no cumprimento do contrato, limitada a 30 dias, conforme art. 162 da Lei 14.133/2021.</li>
                                    </ul>
                                    <p>Decorridos 10 dias de atraso, a Prefeitura poderá considerar o descumprimento total ou parcial da obrigação, recusando-se a receber o objeto e aplicando as sanções cabíveis.</p>
                                </div>

                                <div class="textoponto">
                                    <h2>2<span class="pos">1.</span><span class="posponto">3</span> Multas específicas por descumprimento de SLA</h2>
                                    <p>Decorridos 10 dias de atraso, a Prefeitura poderá considerar o descumprimento total ou parcial da obrigação, recusando-se a receber o objeto e aplicando as sanções cabíveis.</p>
                                    <p><strong>[INSIRA TABELA COM AS MULTAS DE ACORDO COM A TABELA DE SLA]</strong></p>
                                </div>

                                <div class="textoponto">
                                    <h2>2<span class="pos">1.</span><span class="posponto">4</span> Procedimento Administrativo e Recursos</h2>
                                    <p>A aplicação de qualquer penalidade prevista neste Termo de Referência, no Edital ou no Termo de Contrato será precedida de regular processo administrativo, assegurando à CONTRATADA o pleno exercício do contraditório e da ampla defesa, conforme disposto no art. 156 da Lei nº 14.133/2021 e no Decreto Municipal nº 39.132/2023.</p>
                                </div>

                                <div class="textoponto2">
                                    <h2>2<span class="pos">1.</span><span class="pos">4.</span><span class="posponto">1</span> Instauração e Tramitação do Processo</h2>
                                    <ul>
                                        <li>A CONTRATADA será <strong>formalmente notificada</strong> acerca da infração e intimada a apresentar <strong>defesa no prazo de 15 (quinze) dias úteis</strong>, contados da data de sua notificação oficial.</li>
                                        <li>Caso a defesa apresentada seja rejeitada, a decisão será <strong>devidamente fundamentada</strong>, indicando de forma clara e objetiva:</li>
                                        <ul style="list-style-type: disc;">
                                            <li>Os motivos do indeferimento;</li>
                                            <li>A penalidade aplicada;</li>
                                            <li>Os meios de impugnação cabíveis.</li>
                                        </ul>
                                    </ul>
                                </div>

                                <div class="textoponto2">
                                    <h2>2<span class="pos">1.</span><span class="pos">4.</span><span class="posponto">2</span> Recursos Administrativos</h2>
                                    <ul>
                                        <li><strong>Advertência, Multa e Impedimento de Licitar e Contratar:</strong></li>
                                        <ul style="list-style: disc;">
                                            <li>Caberá <strong>recurso administrativo no prazo de 15 (quinze) dias úteis</strong>, contados da data de intimação da decisão.</li>
                                            <li>A autoridade que proferiu a decisão poderá <strong>reconsiderá-la em até 5 (cinco) dias úteis.</strong></li>
                                            <li>Não havendo reconsideração, o recurso será encaminhado à instância superior competente, que deverá decidir no prazo máximo de <strong>20 (vinte) dias úteis.</strong></li>
                                        </ul>
                                        <li><strong>Declaração de Inidoneidade:</strong></li>
                                        <ul style="list-style: disc;">
                                            <li>Caberá <strong>pedido de reconsideração</strong>, no prazo de 15 (quinze) dias úteis contados da data da intimação da decisão.</li>
                                            <li>A autoridade competente deverá decidir em até <strong>20 (vinte) dias úteis.</strong></li>
                                        </ul>
                                        <li><strong>Efeito Suspensivo:</strong></li>
                                        <ul style="list-style: disc;">
                                            <li>Os recursos e pedidos de reconsideração <strong>terão efeito suspensivo automático,</strong> impedinddo a aplicação da penalidade até a decisão final da autoridade competente.</li>
                                        </ul>
                                    </ul>
                                </div>

                                <div class="textoponto2">
                                    <h2>2<span class="pos">1.</span><span class="pos">4.</span><span class="posponto">3</span> Disposições Específicas sobre Multas</h2>
                                    <ul>
                                        <li>As multas aplicadas deverão ser:</li>
                                        <ul style="list-style: disc;">
                                            <li><strong>Recolhidas no prazo máximo de 10 (dez) dias úteis</strong>, contados da notificação oficial;</li>
                                            <li><strong>Compensadas com créditos devidos à contratada</strong>, inclusive oriundos de outros contratos administrativos, conforme regulamentação;</li>
                                            <li><strong>Registradas em sitemas oficiais</strong>, podendo ensejar a <strong>inscrição em divida ativa,</strong> caso não quitadas no prazo.</li>
                                        </ul>
                                        <li>O <strong>não pagamento da multa no prazo estabelecido acarretará a incidência de mora,</strong> sujeitando a contratada às medidas legais cabíveis, tais como:</li>
                                        <ul style="list-style: disc;">
                                            <li>Cobrança judicial;</li>
                                            <li>Impedimento de licitar ou contratar com a Administração Pública;</li>
                                            <li>Aplicação de outras penalidades previstas na legislação.</li>
                                        </ul>
                                    </ul>
                                </div>

                                <div class="textoponto2">
                                    <h2>2<span class="pos">1.</span><span class="pos">4.</span><span class="posponto">4</span> Registro das Penalidades</h2>
                                    <p>As penalidades aplicadas serão devidamente <strong>registradas no site oficial do Município de Araucária</strong>, bem como em outros <strong>cadastros públicos pertinentes</strong>, conforme determina a legislação vigente.</p>
                                </div>

                                <div class="textoponto2">
                                    <h2>2<span class="pos">1.</span><span class="pos">4.</span><span class="posponto">5</span> Casos Omissos</h2>
                                    <p>Os casos omissos ou dúvidas quanto à aplicação de penalidades serão resolvidos com base na <strong>Lei nº 14.133/2021</strong>, no<strong> Decreto Municipal nº 39.132/2023</strong>, e, subsidiariamente, nos princípios da administração pública e na jurisprudência dos órgãos de controle.</p>
                                </div>

                                <div class="textodois">
                                    <h2>2<span class="posponto">2</span> Informações Complementares</h2>
                                    <p>Quaisquer dúvidas ou esclarecimentos sobre este Termo de Referência poderão ser solicitados à qualquer integrante da equipe de planejamento, nos e-mails indicados abaixo.</p>
                                </div>

                                <div>
                                    <h5>Equipe de Planejamento da Contratação</h5>
                                </div>

                                <div class="assinatura">
                                    <div style="width: 40%; border-top: 1px solid black;">
                                        <p>XXXXXXXX XXXXX XXX XXXXXX</p>
                                        <p>Coordenador Inovação SMCIT</p>
                                        <p>email</p>
                                    </div>
                                    <div style="width: 10%;"></div>
                                    <div style="width: 40%; border-top: 1px solid black;">
                                        <p>XXXXXXXX XXXXX XXX XXXXXX</p>
                                        <p>Programador SMCIT</p>
                                        <p>email</p>
                                    </div>
                                </div>

                                <div class="assinatura">
                                    <div style="width: 40%; border-top: 1px solid black;">
                                        <p>XXXXXXXX XXXXX XXX XXXXXX</p>
                                        <p>Diretor Infra SMCIT</p>
                                        <p>email</p>
                                    </div>
                                    <div style="width: 10%;"></div>
                                    <div style="width: 40%; border-top: 1px solid black;">
                                        <p>XXXXXXXX XXXXX XXX XXXXXX</p>
                                        <p>Diretor Sistemas SMCIT</p>
                                        <p>email</p>
                                    </div>
                                </div>
                            
                                <div class="final">
                                    <h4>APROVAÇÃO DO ORDENADOR DA DESPESA</h4>
                                    <p>Nos termos do Art. 334 do Decreto Municipal n° 39.132/2023, <strong>aprovo o presente Estudo Técnico Preliminar</strong>, considerando os elementos técnicos fundamentais apresentados pela equipe de planejamento, que demonstram alinhamento ao planejamento estratégico e ao plano de contratações anual, bem como os elementos constantes do orçamento estimativo e do cronograma físico-financeiro de desembolso, quando aplicável, por estarem em conformidade com os objetivos e necessidades da Administração.</p>
                                </div>

                                <div class="assinatura2">
                                    <div style="width: 40%; border-top: 1px solid black;">
                                        <p>XXXXXXXX XXXXX XXX XXXXXX</p>
                                        <p>Diretor Geral SMCIT</p>
                                        <p>Decreto n° 42.562/2025</p>
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
                        <q-toggle v-model="trStore.value" color="purple-14" class="tamanhotg" />
                    </div>

                    <div>
                        <div class="btnFinalizar">
                            <q-btn label="Salvar" id="finalizar" class="shadow-4" />
                        </div>
                    </div>

                </div>
                
                <div v-if="trStore.modoEdicaoManual && trStore.mostrarPdf">
                    <div class="btnConcluir">
                        <q-btn label="Concluir" id="concluir" />
                    </div>
                </div>

            </div>

            <div id="form" v-if="trStore.value">
                
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
import { useTrDocStore } from '@/stores/TrDocStore';
import { watch } from 'vue';

    const trStore = useTrDocStore();

    watch(() => [trStore.value], (value) => {
        if (value) {
            trStore.modoEdicaoManual = false;
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

h1 {
    font-size: 1.7em;
    font-weight: bold;
    text-align: center;
    line-height: 1.5;
    letter-spacing: .005mm;
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

.tabela {
    font-size: .7em;
    text-align: justify;
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

.textoponto2 {
    margin-top: 10mm;
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

li {
    font-size: .8em;
    margin-bottom: 0.8mm;
    margin-left: 1.5mm;
    margin-right: 1.5mm;
    text-align: justify;
}

.final h4 {
    text-align: center;
    font-size: .9em;
    font-weight: bold;
}

.final p {
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

h5 {
    text-align: center;
    font-size: .85em;
    font-weight: bold;
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