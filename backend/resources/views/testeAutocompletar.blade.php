<!-- resources/views/formulario.blade.php -->

<!DOCTYPE html>
<html>
<head>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Formulário com Autocompletar da IA</title>
</head>
<body>
    <h2>Digite algo:</h2>
    <div style="position: relative;">
        <div contenteditable="true" style="border: 1px solid #ccc; padding: 10px; width: 300px; height: 100px;" id="meu-input">
            Este é um texto editável. Você pode partes do texto. 
        </div>
    </div>


    <script>
        const input = document.getElementById('meu-input');

        let controller = null;
        let timeout;

        function destroySugestao() {
            const sugestao = document.getElementById('suggestion');
            if(sugestao) {
                sugestao.remove();
                console.log("removido");
                if (controller) controller.abort();
            } else {
                console.log("vazio");
            }
        }
        function juntaSugestao() {
            const sugestao = document.getElementById('suggestion');
            if(sugestao) {
                input.innerText = input.innerText;
                destroySugestao();
            }
        }

        input.addEventListener('input', function () {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                const message = document.getElementById('meu-input').innerText;

                if (controller) controller.abort();
                controller = new AbortController();
                if (document.getElementById('suggestion')) return;
                console.log(message);
                fetch('/autocomplete', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRF-TOKEN': '{{ csrf_token() }}'
                    },
                    body: JSON.stringify({ message: message}),
                    signal: controller.signal
                }).then(response => response.json()).then(data => {
                    const suggestion = data
                    const span = `<span id="suggestion" style="color: red;">${suggestion.sugestao}</span>`;
                    input.insertAdjacentHTML('beforeend', span);
                    console.log(suggestion);
                });                
            }, 1500);
        });

        input.addEventListener('blur', (e) => {destroySugestao()});
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                e.preventDefault(); 
                juntaSugestao();
                
                const range = document.createRange();
                range.selectNodeContents(input);
                range.collapse(false); // false = final do conteúdo

                const selection = window.getSelection();
                selection.removeAllRanges();
                selection.addRange(range);

                input.focus();
            } else if (e.key === 'Backspace' || e.key === 'Delete') {
                destroySugestao()
            }
        });
        input.addEventListener('keypress', (e) => {
            const letraDigitada = e.key;
            const sugestao = document.getElementById('suggestion');
            
            if (sugestao) {
                const primeiraLetra = sugestao.textContent[0];
                if (letraDigitada === primeiraLetra) {
                    console.log("igual", letraDigitada);
                    sugestao.textContent = sugestao.textContent.slice(1);
                } else if (!e.key === ' ') {
                    destroySugestao()}
                }
            }
        );
        // input.addEventListener('click', (e) => {destroySugestao()});
        input.addEventListener('selectionchange', (e) => {destroySugestao()});
    </script>
</body>
</html>
