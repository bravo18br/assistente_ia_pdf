<template>
    <div class="content">
        <section class="left">
            <div class="caixa">
                <div class="conteudo">
                    <h1>Iniciar uma Licitação!</h1>
                    <p class="descricao">
                        Comece agora a geração dos documentos para sua licitação. Ao clicar no botão abaixo, você será direcionado para uma nova tela onde poderá editar e personalizar todas as informações necessárias do processo licitatório.
                    </p>
                    <q-btn label="Gerar Licitação" color="red darken-3" class="botao" />
                </div>
            </div>
        </section>

        <aside class="right">
            <div class="top">
                <div class="caixa2">
                    <div class="conteudo">
                        <h2>Minhas Licitações</h2>
                        <p>Acesse aqui todas as suas licitações</p>
                        <q-btn label="Minhas Licitações" color="red darken-3" class="botao"></q-btn>
                    </div>
                </div>
            </div>
            <div class="bottom">
                <div class="caixa3">
                    <div class="conteudo">
                        <h2>Atualizações Recentes</h2>
                        <p>Suas últimas edições estão aqui</p>
                        <ul>
                            <li>.....</li>
                            <li>.....</li>
                            <li>.....</li>
                        </ul>
                    </div>
                </div>
            </div>
        </aside>
    </div>
</template>

<style scoped>
.content {
    display: grid;
    grid-template-columns: auto auto;
    gap: 10rem;
    padding: 2rem;
    background: linear-gradient(135deg, #f5f5f5, #e0e0e0);
    min-height: 100vh;
    box-sizing: border-box;
    place-content: center;
    overflow: hidden;
}

.left {
    background: #dcdcdc;
    height: 65vh;
    width: 50vw;
    border-radius: 8px;
    position: relative;
}

.conteudo {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    max-width: 80%;
}

.conteudo h1 {
    font-size: 3.5vw;
    font-weight: bold;
    margin: 0;
    padding-bottom: 2rem;
    text-shadow: 
        2px 2px 10px rgba(0, 0, 0, 0.2),
        -2px -2px 10px rgba(0, 0, 0, 0.2),
        2px -2px 10px rgba(0, 0, 0, 0.2),
        -2px 2px 10px rgba(0, 0, 0, 0.2);
}

.conteudo p {
    font-size: 1.5vw;
    text-shadow: 
      2px 2px 10px rgba(0, 0, 0, 0.2),
        -2px -2px 10px rgba(0, 0, 0, 0.2),
        2px -2px 10px rgba(0, 0, 0, 0.2),
        -2px 2px 10px rgba(0, 0, 0, 0.2);

}

.descricao {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #f0f0f0;
}

.top h2 {
    font-size: 2.25vw;
    font-weight: bold;
    margin: 0;
}

.top p {
    font-size: 1vw;
}

.bottom h2 {
    font-size: 1.9vw;
    font-weight: bold;
    margin: 0;
}

.bottom p {
    font-size: 1vw;
}

li {
    font-size: 1vw;
}


.botao {
  align-self: flex-start;
  font-weight: bold;
  font-size: 1.2rem;
  padding: 0.8rem 2rem;
  box-shadow: 0 6px 15px rgba(255, 69, 58, 0.6);
  transition: all 0.3s ease;
  border-radius: 10px;
  cursor: pointer;
  border: 1px solid rgb(136, 66, 0);
}

.botao:hover {
  box-shadow: 0 10px 25px rgba(255, 69, 58, 0.9);
  transform: translateY(-3px);
}

.right {
    display: grid;
    grid-template-rows: auto auto;
    gap: 2vh;
}

.right .top {
    height: 25vh;
}

.right .bottom {
    height: 38vh;
}

.right .top,
.right .bottom {
    background: #dcdcdc;
    width: 30vw;
    border-radius: 8px;
}

.caixa {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #6a0dad, #b266ff, #ff6a6a);
    position: relative;
    border-radius: 8px;
    padding: 2rem;
    color: white;
    font-size: 2rem;
    font-weight: bold;
    border: 2px solid #6a0dad; /* ou outro estilo */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.caixa2 {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #b388eb, #9a59d1);
    position: relative;
    border-radius: 8px;
    padding: 2rem;
    color: white;
    font-size: 2rem;
    font-weight: bold;
    border: 2px solid #6a0dad; /* ou outro estilo */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.caixa3 {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #ff99cc, #6a0dad);
    position: relative;
    border-radius: 8px;
    padding: 2rem;
    color: white;
    font-size: 2rem;
    font-weight: bold;
    border: 2px solid #6a0dad; /* ou outro estilo */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}
</style>