import { defineStore } from "pinia";

export const useDfdDocStore = defineStore ('dfdDoc', {
    state: () => ({
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
            materiaisId: 2,
            servicosId: 2,
            materiais: [
                {
                    id: 1,
                    item: '',
                    classe: '',
                    descricao: '',
                    und: '',
                    qtde: 0,
                    precoUnd: 0,
                    precoTotal: 0,
                },
            ],
            servicos: [
                {
                    id: 1,
                    item: '',
                    codIpm: '',
                    catSer: '',
                    classe: '',
                    descricao: '',
                    und: '',
                    qtde: 0,
                    precoUnd: 0,
                    precoTotal: 0,
                }
            ],
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
                prompt: 'seguir padrão brasileiro, exemplo 00/00/0000'
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
                prompt: 'responder com Baixo, Médio, Alto ou Altíssimo',
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
    },

    actions: {
        dicaCampo() {
            return this.ajudaCampos[this.campoEditando?.nome] || '';
        },

        getOpcoesCampo(nomeCampo) {
            const campo = this.definicaoCampos.find(c => c.nome === nomeCampo);
            return campo && campo.opcoes ? campo.opcoes : [];
        },

        adicionarLinha(tabela) {
            if(tabela === 'materiais') {
                this.campos.materiais.push({
                    id: this.materiaisId++,
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
                    id: this.servicosId++,
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

        async submitForm() {   
            console.log('Formulário Enviado:', this.formData);
            this.formFinalizado = true;

            let reader = null;
            let controller = new AbortController();
            let camposEnviar = ''
            let textoBruto = '';
            this.definicaoCampos.forEach(campo => {
                let linha = `${campo.nome} ${campo.prompt ? campo.prompt : ''}\n`;
                camposEnviar += linha;
                console.log(campo.nome);
            });

            // this.message.forEach(formData =>{
            //     let linha = `$`
            // })

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
                body: JSON.stringify({ message: 'Preencha os campos com base nessas respostas:', campos: camposEnviar }),
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
                                            const regex = new RegExp(`"${chave}"\\s*:\\s*"(.*?)(?=(?:["\\n\\r,}]|$))`);
                                            const match = textoBruto.match(regex);
                                            vm.campos[chave] = match ? match[1] : '';
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
        }

    },
});