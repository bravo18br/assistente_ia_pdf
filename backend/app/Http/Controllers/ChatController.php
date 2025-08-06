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
        eu tenho um documento para fazer, e eu preciso que você preencha e elabore todos os campos como se fosse um documento real, eu quero que você considere estas informações na hora de responder os campos, e caso esteja faltando invente:
        ' . $request->input('message') . '.

        
        logo a baixo eu vou te passar os campos do docoumento, seguindo o padrao "NOME_DO_CAMPO: prompt_do_campo", e eu quero que para cada campo voce me retorne de volta o que deve ser preenchido nele, todas as respostas devem estar em um unico arquivo json, sempre seguindo este padrao de resposta {"NOME_DO_CAMPO": "resposta",}, e nunca coloque comentarios no json.
        campos:
        
        
        ' . $request->input('campos');

        return response()->stream(function () use ($promptTeste) {
            $stream = OpenAI::chat()->createStreamed([
                'model' => 'sabiazinho-3',
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

        // $response = Ollama::agent('Você é um assistente que trabalha para a prefeitura municipal de araucária.') // personalidade you are a helpful assistant
        //     ->prompt($promptTeste)//->prompt($request->input('message')) ->prompt($prompt) ->prompt($promptNovo)
        //     // ->image(storage_path('app/documents/textos.png'))
        //     ->model('llama3:8b') //->model('artifish/llama3.2-uncensored') llama3:8b llava-phi3:3.8b phi ollama run deepseek-r1:8b llama3.2-vision:11b
        //     ->options([
        //         'temperature' => 0.5,  // Aleatoriedade da resposta (0 a 2, valores maiores deixam mais criativa)
        //         'top_p' => 0.9, // Palavra mais provavel (valores maiores deixam mais precisa)
        //         'max_tokens' => 9000 // Tamanho máximo da resposta (em tokens, 1 token = 4 caracteres em média)
        //     ])
        //     ->stream(true)
        //     ->ask();


        // return response()->stream(function() use ($response) {
        //     Ollama::processStream($response->getBody(), function ($data) {

        //         if (connection_aborted()) {
        //             return false;
        //         }

        //         if (isset($data['response'])) {

        //             $texto = $data['response'];
        //             echo "data: " . json_encode(['response' => $texto]) . "\n\n";
        //             ob_flush();
        //             flush();

        //             // codigo a baixo envia letra por letra com delay, mais agradavel ao usuario
        //             // $chars = mb_str_split($texto);
        //             // foreach ($chars as $char) {
        //             //     echo "data: " . json_encode(['response' => $char]) . "\n\n";
        //             //     ob_flush();
        //             //     flush();
        //             //     usleep(30000); // 30ms entre letras (ajuste se quiser mais rápido/lento)
        //             // }
        //         }
        //     });
        // }, 200, [
        //     'Content-Type' => 'text/plain', // Informa ao navegador que o conteúdo está sendo enviado como texto puro
        //     'Cache-Control' => 'no-cache', //navegador nao zrmazena cache
        //     'X-Accel-Buffering' => 'no', // desabilita buffering do nginx
        //     'Connection' => 'keep-alive', // mantém a conexão aberta

        // ]);
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

        Agora continue o seguinte texto e retorne apenas o JSON:

        '. $request->input('message');

        if (connection_aborted()) {
            return; // finaliza sem processar IA 
        }

        $result = OpenAI::chat()->create([
            'model' => 'sabiazinho-3',
            'temperature' => 0.5,
            'messages' => [
                ['role' => 'system', 'content' => 'Você é um assistente de texto e trabalha para a prefeitura municipal de araucária. Sua tarefa é sugerir uma continuação curta para um texto iniciado, como se fosse um recurso de autocompletar.'], // personalidade agente
                ['role' => 'user', 'content' => $prompt],
            ],
            'max_tokens' => 100,
        ]);

        return $result->choices[0]->message->content; 

        // $response = Ollama::agent('Você é um assistente de texto e trabalha para a prefeitura municipal de araucária. Sua tarefa é sugerir uma continuação curta para um texto iniciado, como se fosse um recurso de autocompletar.')
        //     ->prompt($prompt)
        //     ->model('llama3:8b')
        //     ->options([
        //         'temperature' => 0.2,
        //         'top_p' => 0.8,
        //         'max_tokens' => 100
        //     ])
        //     ->ask();

        // return response()->json(['suggestion' => $response]);
    }

}