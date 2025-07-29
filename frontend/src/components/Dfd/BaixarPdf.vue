<template>
    <div class="texto">
        <h2>Revise as informações do documento antes de baixar o PDF!</h2>
        <br>
        <p>Confira se todas as informações são condizentes com o conteúdo, afinal a Intelingência Artificial não é 100% confiável, sempre revise o documento antes de baixar!</p>
        <p>Dessa forma, se estudo corret, baixe o PDF, se não, edite as informações necessárias no documento.</p>
    </div>
    <br><br>
    <div class="btn">
        <q-btn id="baixar" class="shadow-4">BAIXAR PDF</q-btn>
    </div>
</template>

<style scoped>
.texto h2 {
    font-size: 40px;
    font-weight: bold;
}

.texto p {
    font-size: 20px;
}

#baixar {
    background-color: rgb(255, 0, 0);
    color: white;
    font-weight: bold;
    font-size: 25px;
    width: 15vw;
    height: 5vw;
    padding: 0 20px;
    border-radius: 6px;
}

.btn {
    display: flex;
    justify-content: center;
    flex-shrink: 0;
}
</style>