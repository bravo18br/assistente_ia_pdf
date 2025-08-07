import { defineStore } from "pinia";

export const useDfdDocStore = defineStore ('dfdDoc', {
    state: () => ({
        value: true,
        formAtual: 1,
        formData: {},
        formFinalizado: false,
        dataAtual: null,
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
            materiaisId: 2,
            servicosId: 2,
            materiais: [
                {
                    item: 1,
                    classe: '',
                    descricao: '',
                    und: '',
                    qtde: '0',
                    precoUnd: '0',
                },
            ],
            servicos: [
                {
                    item: 1,
                    codIpm: '',
                    catSer: '',
                    classe: '',
                    descricao: '',
                    und: '',
                    qtde: '0',
                    precoUnd: '0',
                }
            ],
            previsaoUtilizacao: '',
            justificativaEquipe: '',
            equipePlanejamentoUm: '',
            equipePlanejamentoDois: '',
            equipePlanejamentoTres: '',
            equipePlanejamentoQuatro: '',
            fiscal: '',
            fiscalSubstituto: '',
            gestor: '',
            gestorSubstituto: '',
            justificativaFiscal: '',
            nomeElaborador: '',
            nomeOrdenador: '',
        },

        definicaoCampos: [
            {
                nome: 'areaRequisitante',
                tipo: 'input',
                prompt: ''
            },
            {
                nome: 'dataPrevisao',
                tipo: 'input',
                prompt: 'seguir o padrão brasileiro exemplo 00/00/0000'
            },
            {
                nome: 'exercicio',
                label: 'Exercício',
                tipo: 'input',
                prompt: 'ano atual'
            },
            {
                nome: 'responsavelSolicitacao',
                tipo: 'input',
                prompt: ''
            },
            {
                nome: 'matricula',
                tipo: 'input',
                prompt: ''
            },
            {
                nome: 'grauPrioridade',
                tipo: 'radio',
                opcoes: [ 'Baixo', 'Médio', 'Alto', 'Altíssimo' ],
                prompt: 'responder com Baixo, Médio, Alto ou Altíssimo',
            },
            {
                nome: 'justificativa',
                tipo: 'textarea',
                prompt: 'justificativa sobre o grau de prioridade, obrigatório quando o nível for Alto ou Altíssimo'
            },
            {
                nome: 'doObjeto',
                tipo: 'textarea',
                prompt: 'Descreva o objeto'
            },
            {
                nome: 'sugestaoModalidade',
                tipo: 'textarea',
                prompt: 'Indique a forma sugerida de contratação.'
            },
            {
                nome: 'justificativaNecessidade',
                tipo: 'textarea',
                prompt: 'justificativa do por quê precisa do objeto'
            },
            {
                nome: 'previsaoPca',
                tipo: 'textarea',
                prompt: 'Informe se a demanda consta no PCA e, se não, justifique a ausência.'
            },
            {
                nome: 'demandasVinculadas',
                tipo: 'textarea',
                prompt: 'Informe se há vínculo ou dependência com outros DFDs'
            },
            {
                nome: 'materiais',
                tipo: 'tabela',
                colunas: [
                                { nome: 'item', tipo: 'numero', prompt: 'Identificador do item'},
                                { nome: 'classe', tipo: 'texto', prompt: 'Classe do material'},
                                { nome: 'descricao', tipo: 'texto', prompt: 'Descrição do material'},
                                { nome: 'und', tipo: 'texto', prompt: 'Unidade de medida'},
                                { nome: 'qtde', tipo: 'numero', prompt: 'Quantidade do item'},
                                { nome: 'precoUnd', tipo: 'numero', prompt: 'Preço unitário do item'},
                            ],
                prompt: `devolva um array com os serviços, e para cada serviço tem que ter
                         {"item": "", "classe": "", "descricao": "", "und": "mês, ano, dia, semana", "qtde": "", "precoUnd": ""}.
                         o item é o identificador da linha, começando no 1 e adicionando mais 1 a cada linha.`
            },
            {
                nome: 'servicos',
                tipo: 'tabela',
                colunas: [
                                { nome: 'item', tipo: 'numero', prompt: 'Identificador do item'},
                                { nome: 'codIpm', tipo: 'numero', prompt: 'Código do IPM do serviço'},
                                { nome: 'catSer', tipo: 'numero', prompt: 'Categoria do serviço'},
                                { nome: 'classe', tipo: 'texto', prompt: 'Classe do material'},
                                { nome: 'descricao', tipo: 'texto', prompt: 'Descrição do material'},
                                { nome: 'und', tipo: 'texto', prompt: 'Unidade de medida'},
                                { nome: 'qtde', tipo: 'numero', prompt: 'Quantidade do item'},
                                { nome: 'precoUnd', tipo: 'numero', prompt: 'Preço unitário do item'},
                            ],
                prompt: `devolva um array com os serviços, e para cada serviço tem que ter
                         {"item": "", "codIpm": "", "catSer": "", "classe": "", "descricao": "", "und": "mês, ano, dia, semana", "qtde": "", "precoUnd": ""}.
                         o item é o identificador da linha, começando no 1 e adicionando mais 1 a cada linha.`
            },
            {
                nome: 'previsaoUtilizacao',
                tipo: 'textarea',
                prompt: 'Informe o prazo estimado'
            },
            {
                nome: 'equipePlanejamentoUm',
                tipo: 'input',
                prompt: 'Obrigatório'
            },
            {
                nome: 'equipePlanejamentoDois',
                tipo: 'input',
                prompt: 'Obrigatório caso haja um segundo participante'
            },
            {
                nome: 'equipePlanejamentoTres',
                tipo: 'input',
                prompt: 'Obrigatório caso haja um terceiro participante'
            },
            {
                nome: 'equipePlanejamentoQuatro',
                tipo: 'input',
                prompt: 'Obrigatório caso haja um quarto participante'
            },
            {
                nome: 'justificativaEquipe',
                tipo: 'textarea',
                prompt: 'Descreva a competência da equipe e/ou justifique a ausência de indicação.'
            },
            {
                nome: 'fiscal',
                tipo: 'input',
                prompt: 'Obrigatório'
                
            },
            {
                nome: 'fiscalSubstituto',
                tipo: 'input',
                prompt: 'Obrigatório caso haja um fiscal substituto'
            },
            {
                nome: 'gestor',
                tipo: 'input',
                prompt: 'Obrigatório'
            },
            {
                nome: 'gestorSubstituto',
                tipo: 'input',
                prompt: 'Obrigatório caso haja um gestor substituto'
            },
            {
                nome: 'justificativaFiscal',
                tipo: 'textarea',
                prompt: 'Descreva a responsabilidade que deverão ter e/ou justifique a ausência caso não tenha substituto'
            },
            {
                nome: 'nomeElaborador',
                tipo: 'input',
                prompt: ''
            },
            {
                nome: 'nomeOrdenador',
                tipo: 'input',
                prompt: ''
            },
            
        ],

        ajudaCampos: {
            grauPrioridade: 'A unidade requisitante deverá indicar o grau de prioridade da demanda, considerando as características do objeto, o prazo para concretização do evento, a relevância para o exercício da atividade finalística da unidade ou o risco de interrupção de atividades ou serviços. A classificação de prioridade é apenas indicativa e não se presta a sanear a ausência de planejamento do órgão ou unidade, devendo observar a realidade da demanda.',
            justificativa: 'Para os casos onde for selecionado o grau de prioridade "Alto" ou “Altíssimo” obrigatoriamente deverá ser inserida a justificativa detalhada para a escolha.',
            doObjeto: 'O responsável pela solicitação deverá consignar nesse campo a caracterização do objeto da demanda, tais como o bem ou material que se necessita, o serviço continuado ou não, a locação, etc. Trata-se da identificação da demanda ou problema que precisa ser solucionado e atendido no procedimento de contratação. No DFD a unidade demandante deve indicar a forma objetivada de atendimento (como aquisição, contratação, locação, obra, etc.)',
            sugestaoModalidade: 'Indicação da forma sugerida para a contratação (licitação, dispensa, inexigibilidade, etc), contudo, caso o objeto demande a realização de estudo técnico preliminar, a definição final da solução mais adequada ao problema poderá ser diversa, conforme conclusões do parecer de viabilidade do ETP',
            justificativaNecessidade: 'Trata-se da justificativa apresentada pela área demandante para a necessidade da contratação requisitada, considerando a vinculação ao planejamento estratégico da instituição. No presente tópico a unidade demandante deverá consignar todas as informações que fundamentem a contratação solicitada, assim como toda as informações complementares que auxiliem na verificação da pertinência e necessidade do objeto.',
            previsaoPca: 'É a indicação sobre a previsão ou não da demanda no Plano de Contratações Anual do Município. O agente responsável deverá indicar a previsão no PCA e seus respectivos itens. No caso de ausência de previsão da demanda no planejamento estratégico do órgão ou entidade, deverão ser consignadas as respectivas justificativas.',
            demandasVinculadas: 'A área ou unidade requisitante deverá indicar se a demanda possui vinculação ou dependência com o objeto de outro documento de formalização de demanda e, caso positivo, a determinação da sequência em que as contratações devem ser realizadas. Da mesma forma, caso existam contratações já executadas, em curso ou a executar que possuam relação ou algum grau de interdependência, que possam afetar ou ser afetados pelo objeto da demanda, deverá ser informada no presente tópico.',
            previsaoUtilizacao: 'Nesse campo deverão ser consignadas as observações sobre a data prevista para a efetivação da demanda, já registrada no início do documento. Deverá ser prevista uma data ou período estimado para solicitação, contratação ou execução, considerando a temporalidade prévia necessária no alinhamento com o planejamento. A área requisitante deverá indicar nesse campo a previsão de quando será a utilização do bem ou serviço objeto da demanda, a assinatura do contrato ou ata de registro de preços, a emissão de empenho ou entrega do objeto para atendimento da necessidade.',
            equipePlanejamentoUm: 'A unidade requisitante, se for o caso, deverá indicar servidores da unidade para compor a equipe de planejamento da contratação, com vistas a participar da elaboração do estudo técnico preliminar, mapa de riscos e demais procedimentos de planejamento da contratação. Quando não for o caso de indicação, seja por insuficiência de recursos humanos, inaptidão técnica ou qualquer que seja o motivo, deverá consignar as devidas justificativas.',
            equipePlanejamentoDois: 'A unidade requisitante, se for o caso, deverá indicar servidores da unidade para compor a equipe de planejamento da contratação, com vistas a participar da elaboração do estudo técnico preliminar, mapa de riscos e demais procedimentos de planejamento da contratação. Quando não for o caso de indicação, seja por insuficiência de recursos humanos, inaptidão técnica ou qualquer que seja o motivo, deverá consignar as devidas justificativas.',
            equipePlanejamentoTres: 'A unidade requisitante, se for o caso, deverá indicar servidores da unidade para compor a equipe de planejamento da contratação, com vistas a participar da elaboração do estudo técnico preliminar, mapa de riscos e demais procedimentos de planejamento da contratação. Quando não for o caso de indicação, seja por insuficiência de recursos humanos, inaptidão técnica ou qualquer que seja o motivo, deverá consignar as devidas justificativas.',
            equipePlanejamentoQuatro: 'A unidade requisitante, se for o caso, deverá indicar servidores da unidade para compor a equipe de planejamento da contratação, com vistas a participar da elaboração do estudo técnico preliminar, mapa de riscos e demais procedimentos de planejamento da contratação. Quando não for o caso de indicação, seja por insuficiência de recursos humanos, inaptidão técnica ou qualquer que seja o motivo, deverá consignar as devidas justificativas.',
            fiscal: 'A unidade requisitante deverá indicar os servidores que atuarão como fiscal e gestor da ata, do contrato ou da execução do objeto, se for o caso. Quando não for o caso de indicação, seja por insuficiência de recursos humanos, inaptidão técnica ou qualquer que seja o motivo, deverá consignar as devidas justificativas.',
            fiscalSubstituto: 'A unidade requisitante deverá indicar os servidores que atuarão como fiscal e gestor da ata, do contrato ou da execução do objeto, se for o caso. Quando não for o caso de indicação, seja por insuficiência de recursos humanos, inaptidão técnica ou qualquer que seja o motivo, deverá consignar as devidas justificativas.',
            gestor: 'A unidade requisitante deverá indicar os servidores que atuarão como fiscal e gestor da ata, do contrato ou da execução do objeto, se for o caso. Quando não for o caso de indicação, seja por insuficiência de recursos humanos, inaptidão técnica ou qualquer que seja o motivo, deverá consignar as devidas justificativas.',
            gestorSubstituto: 'A unidade requisitante deverá indicar os servidores que atuarão como fiscal e gestor da ata, do contrato ou da execução do objeto, se for o caso. Quando não for o caso de indicação, seja por insuficiência de recursos humanos, inaptidão técnica ou qualquer que seja o motivo, deverá consignar as devidas justificativas.',
            nomeElaborador: 'Nome de quem elaborou o documento',
            nomeOrdenador: 'Nome do Ordenador',
        },
    }),

    getters: {
        formAtualComponent() {
            return this.formFinalizado ? 'BaixarPdf' : `FormPasso${this.formAtual}`;
        },

        definicaoMateriais(state) {
            return state.definicaoCampos.find(c => c.nome === 'materiais');
        },

        definicaoServicos(state) {
            return state.definicaoCampos.find(c => c.nome === 'servicos');
        },
    },

    actions: {
        diaAtual() {
            const hoje = new Date();
            const dia = String(hoje.getDate()).padStart(2, '0');
            const mes = String(hoje.getMonth() + 1).padStart(2, '0');
            const ano = hoje.getFullYear();
            this.dataAtual = `${dia}/${mes}/${ano}`
        },

        dicaCampo() {
            const nomeCampo = this.campoEditando?.nome;
            return nomeCampo && this.ajudaCampos[nomeCampo] ? this.ajudaCampos[nomeCampo] : null;
        },

        getOpcoesCampo(nomeCampo) {
            const campo = this.definicaoCampos.find(c => c.nome === nomeCampo);
            return campo && campo.opcoes ? campo.opcoes : [];
        },

        getPromptCampo: (state) => (nome) => {
            const campo = state.definicaoCampos.find(c => c.nome === nome)
            return campo?.prompt || ''
        },

        adicionarLinha(tabela) {
            if(tabela === 'materiais') {
                this.campos.materiais.push({
                    item: this.campos.materiaisId++,
                    classe: '',
                    descricao: '',
                    und: '',
                    qtde: 0,
                    precoUnd: 0,
                    precoTotal: 0,
                })
            } else if (tabela === 'servicos') {
                this.campos.servicos.push({
                    item: this.campos.servicosId++,
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
            console.log(this.formData);

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

        extrairArrayObjetos(textoBruto, chave) {
            const regexArray = new RegExp(`"${chave}"\\s*:\\s*(\\[[\\s\\S]*?\\])`, 'm');
            const matchArray = textoBruto.match(regexArray);
            if (!matchArray) return [];

            const arrayString = matchArray[1]; // conteúdo entre colchetes

            // extrair cada objeto dentro do array
            const objetos = [];
            const regexObjetos = /{[^{}]*}/g;
            let objMatch;
            while ((objMatch = regexObjetos.exec(arrayString)) !== null) {
                objetos.push(objMatch[0]);
            }

            return objetos;
        },

        parseObjetoSimples(str) {
            const obj = {};
            // pega pares chave: valor em strings
            const regexKV = /"([^"]+)"\s*:\s*"([^"]*)"/g;
            let match;
            while ((match = regexKV.exec(str)) !== null) {
                obj[match[1]] = match[2];
            }
            return obj;
        },

        async submitForm() {   
            console.log('Formulário Enviado:', this.formData);
            this.formFinalizado = true;

            let reader = null;
            let controller = new AbortController();
            let camposEnviar = '';
            let respostas = '';
            let textoBruto = '';
            this.definicaoCampos.forEach(campo => {
                let linha = `${campo.nome}: ${campo.prompt ? campo.prompt : ''}\n`;
                camposEnviar += linha;
            });
            console.log(camposEnviar);
            

            Object.entries(this.formData).forEach(([key, value]) => {
                let linha = `${key}: ${value}\n`
                respostas += linha;   
            });
            console.log(respostas);
            

            const res = await fetch('http://10.200.0.84:8000/api/csrf-token', {credentials: 'include'});
            const data = await res.json();
            const vm = this;
            console.log(camposEnviar);

            fetch('http://10.200.0.84:8000/api/chat-stream', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': data.csrf_token
                },
                body: JSON.stringify({ message: respostas, campos: camposEnviar }),
                signal: controller.signal
            }).then(response => {
                reader = response.body.getReader();
                const decoder = new TextDecoder('utf-8');

                function read() {
                    reader.read().then(({ done, value }) => {
                        if (done) return;

                        const chunk = decoder.decode(value, { stream: true });
                        chunk.split('\n\n').forEach(event => {
                            if (event.startsWith('data:')) {
                                try {
                                    const data = JSON.parse(event.replace('data: ', ''));
                                    if (data.response) {
                                        
                                        textoBruto += data.response;
                                        console.log(textoBruto);

                                        for (const chave in vm.campos) {
                                            if (chave === 'materiais' || chave === 'servicos') {
                                                const objsStr = vm.extrairArrayObjetos(textoBruto, chave);
                                                vm.campos[chave] = objsStr.map(vm.parseObjetoSimples);
                                                console.log('Materiais:', vm.campos.materiais);
                                                console.log('Servicos:', vm.campos.servicos);
                                                console.log('Definição Serviços:', vm.definicaoServicos.colunas);
                                                console.log('Definição Materiais:', vm.definicaoMateriais.colunas);
                                            } else {
                                                const regex = new RegExp(`"${chave}"\\s*:\\s*"(.*?)(?=(?:["\\n\\r}]|$))`);
                                                const match = textoBruto.match(regex);
                                                vm.campos[chave] = match ? match[1] : '';
                                            }
                                        }
                                    }
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
        },

        tipoTabela(campo) {
            return this.campoEditando?.nome === campo && this.campoEditando?.tipo === 'tabela';
        }

    },
});