<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Cloudstudio\Ollama\Facades\Ollama;
use OpenAI\Laravel\Facades\OpenAI;

class ChatController extends Controller
{

    public function streamChat(Request $request)
    {
        set_time_limit(0); // tempo limite de stream (0 = infinito)

        $promptTeste = '
        eu tenho um documento para fazer, e eu preciso que você preencha e elabore bem com bastante texto todos os campos com bastante texto e linguagem formal como se fosse um documento real, eu quero que você considere estas informações na hora de responder os campos, e caso esteja faltando invente:
        ' . $request->input('message') . '.

        
        logo a baixo eu vou te passar os campos do docoumento, seguindo o padrao "NOME_DO_CAMPO: prompt_do_campo", e eu quero que para cada campo voce me retorne de volta o que deve ser preenchido nele, todas as respostas devem estar em um unico arquivo json, sempre seguindo este padrao de resposta {"NOME_DO_CAMPO": "resposta",}, quando a resposa for um inteiro utilize string também.
        campos:
        
        
        ' . $request->input('campos');

        return response()->stream(function () use ($promptTeste) {
            $stream = OpenAI::chat()->createStreamed([
                'model' => 'sabia-3.1', //sabiazinho-3
                'temperature' => 0.5,
                'messages' => [
                    ['role' => 'system', 'content' => 'Você é um assistente especialísta em documentos que trabalha para a prefeitura municipal de araucária.'], // personalidade agente
                    ['role' => 'user', 'content' => $promptTeste],
                ],
                'stream' => true,
                'max_tokens' => 5000
            ]);

            foreach ($stream as $response) {
                if (isset($response->choices[0]->delta->content)) {
                    echo "data: " . json_encode(['response' => $response->choices[0]->delta->content]) . "\n\n";
                    ob_flush();
                    flush();
                }
            }
        }, 200, [
            'Content-Type' => 'text/event-stream',
            'Cache-Control' => 'no-cache',
            'Connection' => 'keep-alive',
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
        voce deve também detectar se uma palavra está incompleta ou pela metade e completala, exemplo, se o texto for: "A agua tem prop"
        Você de responder: {"sugestao": "riedades únicas"}
        detecte se a frase esta com a aultima plavra completa, e se já veio com espaço no final, e caso esteja completa mas sem espaço adicione ao inico da resposta, retornado algo como {"sugestao": " exemplo resposta"}

        Agora continue o seguinte texto e retorne apenas o JSON:

        '. $request->input('message');

        if (connection_aborted()) {
            return; // finaliza sem processar IA 
        }

        $result = OpenAI::chat()->create([
            'model' => 'sabia-3.1', //sabiazinho-3
            'temperature' => 0.5,
            'messages' => [
                ['role' => 'system', 'content' => 'Você é um assistente de texto e trabalha para a prefeitura municipal de araucária. Sua tarefa é sugerir uma continuação curta para um texto iniciado, como se fosse um recurso de autocompletar.'], // personalidade agente
                ['role' => 'user', 'content' => $prompt],
            ],
            'max_tokens' => 100,
        ]);

        return $result->choices[0]->message->content; 
    }

}