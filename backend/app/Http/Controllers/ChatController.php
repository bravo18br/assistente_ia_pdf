<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Cloudstudio\Ollama\Facades\Ollama;

class ChatController extends Controller
{

    public function streamChat(Request $request)
    {
        set_time_limit(0); // tempo limite de stream (0 = infinito)

        $prompt = '
        <section>
            <h1 id="titulo_documento">Documento de Formalização de Demanda</h1>

            <div class="section">
                <h2>Informações Iniciais</h2>
                <label>Nº DFD</label>
                <input type="text">

                <label>Área Requisitante</label>
                <input type="text">

                <label>Data Previsão</label>
                <input type="text">

                <label>Exercício</label>
                <input type="text">

                <label>Data</label>
                <input type="text">
            </div>

            <div class="section">
                <h2>Responsável pela Solicitação</h2>
                <label>Nome</label>
                <input type="text">
                <label>Matrícula</label>
                <input type="text">
            </div>

            <div class="section">
                <h2>Grau de Prioridade</h2>
                <label><input type="radio" name="prioridade"> Baixo</label>
                <label><input type="radio" name="prioridade"> Médio</label>
                <label><input type="radio" name="prioridade"> Alto</label>
                <label><input type="radio" name="prioridade"> Altíssimo</label>
                
                <label>Justificativa</label>
                <textarea></textarea>
            </div>

            <div class="section">
                <h2>1. Do Objeto</h2>
                <textarea></textarea>
            </div>

            <div class="section">
                <h2>2. Da Sugestão de Modalidade</h2>
                <textarea></textarea>
            </div>

            <div class="section">
                <h2>3. Justificativa da Necessidade</h2>
                <textarea></textarea>
            </div>

            <div class="section">
                <h2>4. Previsão da Demanda no PCA</h2>
                <textarea></textarea>
            </div>

            <div class="section">
                <h2>5. Demandas Vinculadas ou Interdependentes</h2>
                <textarea></textarea>
            </div>

            <div class="section">
                <h2>6. Descrição da Solução e Quantidades</h2>
                <label>Materiais</label>
                <textarea></textarea>
                <label>Serviços</label>
                <textarea></textarea>
            </div>

            <div class="section">
                <h2>7. Previsão de Utilização e Critérios de Aceitação</h2>
                <textarea></textarea>
            </div>

            <div class="section">
                <h2>8. Indicação de Equipe de Planejamento</h2>
                <textarea></textarea>
            </div>

            <div class="section">
                <h2>9. Da Fiscalização e Gestão do Contrato</h2>
                <label>Fiscal</label>
                <input type="text">
                <label>Fiscal Substituto</label>
                <input type="text">
                <label>Gestor</label>
                <input type="text">
                <label>Gestor Substituto</label>
                <input type="text">

                <label>Justificativa</label>
                <textarea></textarea>
            </div>

            <div class="section">
                <h2>10. Assinaturas</h2>
                <label>Elaborado por</label>
                <input type="text">
                <label>Ordenador da Despesa</label>
                <input type="text">
            </div>
        </section>

        este é o código html de um documento de licitação, eu quero que voce pegue este código e coloque os textos de resposta nas partes que estão faltando, simulando um preenchimento real, e me retorne de volta somente o código com as adições, começando com <section> e terminando com </section>. eu quero que o documento seja sobre ' . $request->input('message') . '.';

        $promptTeste = '
        
        eu tenho um documento de Formalização de Demanda para fazer, e que pertence a prefeitura municipal de araucária, e eu preciso que você preencha os campos como se fosse um documento real, eu quero que o documento seja sobre ' . $request->input('message') . '.
        logo a baixo eu vou te passar os campos do docoumento, e eu quero que para cada campo voce me retorne de volta o que deve ser preenchido nele, todas as respostas devem estar em um unico arquivo json, sempre seguindo este padrao de resposta {"VALOR": "resposta",}.
        campos:
        ' . $request->input('campos');

        $promptNovo = '
        eu tenho um documento de Formalização de Demanda para fazer, e que pertence a prefeitura municipal de araucária, e eu preciso que você preencha os campos como se fosse um documento real, eu quero que o documento seja sobre ' . $request->input('message') . '.
        logo a baixo eu vou te passar os campos do docoumento, e eu quero que para cada campo data-id="VALOR_DATA_ID" no html voce me retorne de volta o que deve ser preenchido nele, todas as respostas devem estar em um unico arquivo json, sempre seguindo este padrao de resposta {"NOME_DO_CAMPO": "resposta",}.
        documento em html:
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
                <input data-ia="DATA" type="text">
            </div>

            <div class="section">
                <h2>Responsável pela Solicitação</h2>
                <label>Nome</label>
                <input data-ia="RESPONSAVEL_NOME" type="text">
                <label>Matrícula</label>
                <input data-ia="RESPONSAVEL_MATRICULA" type="text">
            </div>

            <div class="section">
                <h2>Grau de Prioridade</h2>
                <label><input data-ia="GRAU_PRIORIDADE" type="radio" name="prioridade"> Baixo</label>
                <label><input data-ia="GRAU_PRIORIDADE" type="radio" name="prioridade"> Médio</label>
                <label><input data-ia="GRAU_PRIORIDADE" type="radio" name="prioridade"> Alto</label>
                <label><input data-ia="GRAU_PRIORIDADE" type="radio" name="prioridade"> Altíssimo</label>
                
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
                <textarea data-ia="PREVISAO_DEMANDA_PCA"></textarea>
            </div>

            <div class="section">
                <h2>5. Demandas Vinculadas ou Interdependentes</h2>
                <textarea data-ia="DEMANDAS_VINCULADAS_INTERDEPENDENTES"></textarea>
            </div>

            <div class="section">
                <h2>6. Descrição da Solução e Quantidades</h2>
                <label>Materiais</label>
                <textarea data-ia="MATERIAIS"></textarea>
                <label>Serviços</label>
                <textarea data-ia="SERVICOS"></textarea>
            </div>

            <div class="section">
                <h2>7. Previsão de Utilização e Critérios de Aceitação</h2>
                <textarea data-ia="PREVISAO_CRITERIOS_ACEITACAO"></textarea>
            </div>

            <div class="section">
                <h2>8. Indicação de Equipe de Planejamento</h2>
                <textarea data-ia="INDUCAO_EQUIPE_PLANEJAMENTO"></textarea>
            </div>

            <div class="section">
                <h2>9. Da Fiscalização e Gestão do Contrato</h2>
                <label>Fiscal</label>
                <input data-ia="FISCAL" type="text">
                <label>Fiscal Substituto</label>
                <input data-ia="FISCAL_SUBSTITUTO" type="text">
                <label>Gestor</label>
                <input data-ia="GESTOR" type="text">
                <label>Gestor Substituto</label>
                <input data-ia="GESTOR_SUBSTITUTO" type="text">

                <label>Justificativa</label>
                <textarea data-ia="JUSTIFICATIVA_FISCALIZACAO"></textarea>
            </div>

            <div class="section">
                <h2>10. Assinaturas</h2>
                <label>Elaborado por</label>
                <input type="text" data-ia="ELABORADO_POR">
                <label>Ordenador da Despesa</label>
                <input type="text" data-ia="ORDENADOR_DESPESA">
            </div>
        </section>

        ';

        $response = Ollama::agent('Você é um asistente especialista em documentos e em html') // personalidade you are a helpful assistant
            ->prompt($promptTeste)//->prompt($request->input('message')) ->prompt($prompt) ->prompt($promptNovo)
            // ->image(storage_path('app/documents/textos.png'))
            ->model('llama3:8b') //->model('artifish/llama3.2-uncensored') llama3:8b llava-phi3:3.8b phi ollama run deepseek-r1:8b
            ->options([
                'temperature' => 0.2,  // Aleatoriedade da resposta (0 a 2, valores maiores deixam mais criativa)
                'top_p' => 0.8, // Palavra mais provavel (valores maiores deixam mais precisa)
                'max_tokens' => 9000 // Tamanho máximo da resposta (em tokens, 1 token = 4 caracteres em média)
            ])
            ->stream(true)
            ->ask();


        return response()->stream(function() use ($response) {
            Ollama::processStream($response->getBody(), function ($data) {

                if (connection_aborted()) {
                    return false;
                }

                if (isset($data['response'])) {

                    $texto = $data['response'];
                    // echo "data: " . json_encode(['response' => $texto]) . "\n\n";
                    // ob_flush();
                    // flush();

                    // codigo a baixo envia letra por letra com delay, mais agradavel ao usuario
                    $chars = mb_str_split($texto);
                    foreach ($chars as $char) {
                        echo "data: " . json_encode(['response' => $char]) . "\n\n";
                        ob_flush();
                        flush();
                        usleep(30000); // 30ms entre letras (ajuste se quiser mais rápido/lento)
                    }
                }
            });
        }, 200, [
            'Content-Type' => 'text/plain', // Informa ao navegador que o conteúdo está sendo enviado como texto puro
            'Cache-Control' => 'no-cache', //navegador nao zrmazena cache
            'X-Accel-Buffering' => 'no', // desabilita buffering do nginx
            'Connection' => 'keep-alive', // mantém a conexão aberta

        ]);
    }

    public function autocomplete(Request $request)
    {
        set_time_limit(0);
        ignore_user_abort(false);
        $prompt = '
        Sempre responda apenas com um JSON contendo a sugestão no campo "sugestao".

        Exemplo:
        Se o texto for: "A prefeitura de Araucária está planejando "
        Você deve responder: {"sugestao": "a construção de um novo parque público"}

        Agora continue o seguinte texto e retorne apenas o JSON:

        '. $request->input('message');

        if (connection_aborted()) {
            return; // finaliza sem processar IA 
        }

        $response = Ollama::agent('Você é um assistente de texto e trabalha para a prefeitura municipal de araucária. Sua tarefa é sugerir uma continuação curta para um texto iniciado, como se fosse um recurso de autocompletar.')
            ->prompt($prompt)
            ->model('llama3:8b')
            ->options([
                'temperature' => 0.2,
                'top_p' => 0.8,
                'max_tokens' => 100
            ])
            ->ask();

        return response()->json(['suggestion' => $response]);
    }

}
