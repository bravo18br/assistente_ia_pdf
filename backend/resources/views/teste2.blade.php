<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Chat com IA</title>
</head>
<body>

    <form id="chat-form">
        <textarea name="message" id="message"></textarea>
        <button type="submit">Enviar</button>
        <button type="button" id="cancel-button">Cancelar</button>
    </form>

    <div id="teste">
        <section>
            <h1 id="titulo_documento">Documento de Formalização de Demanda</h1>

            <div class="section">
                <h2>Informações Iniciais</h2>
                <label>Nº DFD</label>
                <input data-ia="NUMERO_DFD" type="text">

                <label>Área Requisitante</label>
                <input data-ia="AREA_REQUISITANTE" type="text">

                <label>Data Previsão</label>
                <input data-ia="DATA_PREVISAO" type="text">

                <label>Exercício</label>
                <input data-ia="EXERCICIO" type="text">

                <label>Data</label>
                <input data-ia="DATA" data-prompt="seguir padrao brasileiro, exemplo 00/00/0000" type="text">
            </div>

            <div class="section">
                <h2>Responsável pela Solicitação</h2>
                <label>Nome</label>
                <input data-ia="RESPONSAVEL_SOLICITACAO_NOME" type="text">
                <label>Matrícula</label>
                <input data-ia="RESPONSAVEL_SOLICITACAO_MATRICULA" type="text">
            </div>

            <div class="section">
                <h2>Grau de Prioridade</h2>
                <label><input data-ia="GRAU_PRIORIDADE" data-prompt="Baixo" type="radio" name="prioridade"> Baixo</label>
                <label><input data-ia="GRAU_PRIORIDADE" data-prompt="Médio" type="radio" name="prioridade"> Médio</label>
                <label><input data-ia="GRAU_PRIORIDADE" data-prompt="Alto" type="radio" name="prioridade"> Alto</label>
                <label><input data-ia="GRAU_PRIORIDADE" data-prompt="Altíssimo" type="radio" name="prioridade"> Altíssimo</label>
                
                <label>Justificativa</label>
                <textarea data-ia="JUSTIFICATIVA"></textarea>
            </div>

            <div class="section">
                <h2>1. Do Objeto</h2>
                <textarea data-ia="DO_OBJETO"></textarea>
            </div>

            <div class="section">
                <h2>2. Da Sugestão de Modalidade</h2>
                <textarea data-ia="DA_SUGESTAO_DE_MODALIDADE"></textarea>
            </div>

            <div class="section">
                <h2>3. Justificativa da Necessidade</h2>
                <textarea data-ia="JUSTIFICATIVA_NECESSIDADE"></textarea>
            </div>

            <div class="section">
                <h2>4. Previsão da Demanda no PCA</h2>
                <textarea data-ia="PREVISAO_DEMANDA_NO_PCA"></textarea>
            </div>

            <div class="section">
                <h2>5. Demandas Vinculadas ou Interdependentes</h2>
                <textarea data-ia="DEMANDAS_VINCULADAS_OU_INTERDEPENDENTES"></textarea>
            </div>

            <div class="section">
                <h2>6. Descrição da Solução e Quantidades</h2>
                <label>Materiais</label>
                <textarea data-ia="SOLUCÃO_E_QUANTIDADES_MATERIAIS"></textarea>
                <label>Serviços</label>
                <textarea data-ia="SOLUCÃO_E_QUANTIDADES_SERVICOS"></textarea>
            </div>

            <div class="section">
                <h2>7. Previsão de Utilização e Critérios de Aceitação</h2>
                <textarea data-ia="PREVISAO_DE_UTILIZACAO_E_CRITERIOS_DE_ACEITACAO"></textarea>
            </div>

            <div class="section">
                <h2>8. Indicação de Equipe de Planejamento</h2>
                <textarea data-ia="INDICACAO_DE_EQUIPE_DE_PLANEJAMENTO"></textarea>
            </div>

            <div class="section">
                <h2>9. Da Fiscalização e Gestão do Contrato</h2>
                <label>Fiscal</label>
                <input type="text" data-ia="FISCALIZACAO_FISCAL">
                <label>Fiscal Substituto</label>
                <input type="text" data-ia="FISCALIZACAO_FISCAL_SUBSTITUTO">
                <label>Gestor</label>
                <input type="text" data-ia="FISCALIZACAO_GESTOR">
                <label>Gestor Substituto</label>
                <input type="text" data-ia="FISCALIZACAO_GESTOR_SUBSTITUTO">

                <label>Justificativa</label>
                <textarea data-ia="JUSTIFICATIVA_FISCALIZACAO"></textarea>
            </div>

            <div class="section">
                <h2>10. Assinaturas</h2>
                <label>Elaborado por</label>
                <input type="text" data-ia="ASSINATURA_ELABORADO_POR">
                <label>Ordenador da Despesa</label>
                <input type="text" data-ia="ASSINATURA_ORDENADOR_DESPESA">
            </div>
        </section>
    </div>

    <pre id="response-box" style="white-space: pre-wrap; background: #f4f4f4; padding: 10px;"></pre>

    <script>
        let controller = null;
        let reader = null;

        document.getElementById('chat-form').addEventListener('submit', function(e) {
            e.preventDefault();

            const message = document.getElementById('message').value;
            const responseBox = document.getElementById('response-box');
            const campoTeste = document.getElementById('teste');
            var texto = '';
            var datas_ia = document.querySelectorAll('[data-ia]');
            responseBox.textContent = 'Carregando...\n';

            var camposParaEnviar = '';
            datas_ia.forEach(input => {
                const valor = input.getAttribute('data-ia');
                const prompt = input.getAttribute('data-prompt');
                linha = `${valor} ${prompt ? prompt : ''}\n`;
                camposParaEnviar += linha;
            });
            console.log(camposParaEnviar);

            if (controller) controller.abort();
            controller = new AbortController();

            fetch('/chat-stream', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': '{{ csrf_token() }}'
                },
                body: JSON.stringify({ message: message, campos: camposParaEnviar }),
                signal: controller.signal
            }).then(response => {
                console.log(response);
                reader = response.body.getReader();
                const decoder = new TextDecoder('utf-8');

                responseBox.textContent = '';

                function read() {
                    reader.read().then(({ done, value }) => {
                        if (done) return;

                        const chunk = decoder.decode(value, { stream: true });
                        chunk.split('\n\n').forEach(event => {
                            if (event.startsWith('data:')) {
                                try {
                                    const data = JSON.parse(event.replace('data: ', ''));
                                    if (data.response) {
                                        responseBox.textContent += data.response;
                                        texto += data.response;
                                        
                                        datas_ia.forEach(input => {
                                            const valor = input.getAttribute('data-ia');
                                            const regex = new RegExp(`"${valor}"\\s*:\\s*"(.*?)(?=(?:["\\n\\r,}]|$))`);
                                            const match = texto.match(regex);
                                            
                                            if(input.type === 'radio') {
                                                const label = input.closest('label');
                                                const textoDaLabel = label.textContent.trim();

                                                if (match && match[1] == textoDaLabel) {
                                                    input.checked = true;
                                                }
                                                
                                            } else {
                                                input.value = match ? match[1] : '';
                                            }
                                        });
                                    }
                                    console.log(event)
                                } catch (e) {
                                    console.error('Erro ao processar chunk', e);
                                }
                            }
                        });

                        read(); // continua lendo
                    });
                }

                read();
            });
        });

        document.getElementById('cancel-button').addEventListener('click', function() {
            if (controller) {
                controller.abort();
                controller = null;
            }
        });
    </script>
</body>
</html>
