<template>
    <div id="container">
        <div id="loginBox">
    
            <h1>Login</h1>
            <input type="text" name="nomeUsuario" id="nomeUsuario" placeholder="Nome de Usuário . . .">
            <input type="text" name="senha" id="senha" placeholder="Digite a Senha . . .">
            <q-btn id="btnEntrar" label="ENTRAR" class="shadow-4"/>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
#container {
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background:
        /* Aurora verde */
        radial-gradient(ellipse at 20% 30%, rgba(80,255,180,0.35) 0%, transparent 60%),
        /* Aurora azul */
        radial-gradient(ellipse at 70% 40%, rgba(80,180,255,0.25) 0%, transparent 70%),
        /* Aurora roxa */
        radial-gradient(ellipse at 50% 70%, rgba(180,2,180,0.18) 0%, transparent 70%),
        /* Aurora amarela */
        radial-gradient(ellipse at 60% 80%, rgba(255,255,180,0.12) 0%, transparent 80%),
        /* Fundo noturno */
        linear-gradient(135deg, #0a1446 0%, #1a237e 100%);
    background-blend-mode: lighten, lighten, lighten, lighten, normal;
        
}

#loginBox {
    margin-top: 20vh;
    margin-left: 35vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 35vw;
    height: 50vh;
    box-shadow: 0 10px 24px rgba(0,0,0,0.5);
    background-color: #ffffff;
    border-radius: 25px;
}

#loginBox h1 {
    font-size: 3em;
    font-weight: bold;
}

#nomeUsuario {
    height: 5vh;
    width: 20vw;
    border: 2px solid black;
    padding: 10px;
    border-radius: 4px;
    background-color: #cacaca;
}

#nomeUsuario::placeholder {
    color: rgb(80, 80, 80);
}

#senha {
    height: 5vh;
    width: 20vw;
    margin-top: 2%;
    border: 2px solid black;
    padding: 10px;
    border-radius: 4px;
    background-color: #cacaca;
}

#senha::placeholder {
    color: rgb(80, 80, 80);
}

.botao {
    margin-top: 10%;
}

#btnEntrar {
    background-color: #b402b4;
    color: white;
    font-weight: bold;
    font-size: 25px;
    width: 15vw;
    height: 5vh;
    padding: 0 20px;
    border-radius: 6px;
    margin-top: 10%;
}
</style>