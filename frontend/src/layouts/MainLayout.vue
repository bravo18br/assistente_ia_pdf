<template>
    <q-layout view="hHh lpR fFf">
        <q-header elevated class="bg-purple-7 text-white">
            <q-toolbar>
                    <img src="../assets/logoTeste80.png">
                <q-toolbar-title>
                    <div id="Titulo">Gerador de Documentos Sobre Licitações</div>
                </q-toolbar-title>

                <q-space />
                <div id="Usuario" class="column items-center q-mr-md">
                    <div>Usuário</div>
                    <div>110.565.729-90</div>
                </div>
            </q-toolbar>
        </q-header>

        <q-page-container class="bg-grey-2" style="overflow-y: auto; height: 100vh;">
            <router-view />
            <br><br><br><br>
        </q-page-container>
    </q-layout>
</template>

<style>
img {
    background-color: rgba(155, 202, 255, 0.548);
    border-radius: 10px;
    margin: auto;
}
#Usuario {
    background-color: rgba(26, 26, 26, 0.342);
    color: white;
    padding: 5px;
    margin: auto;
    border-radius: 8px;
    font-weight: 600;
    font-family: Arial, Helvetica, sans-serif;
}

#Titulo {
    width: 40vw;
    word-break: break-word;
    white-space: normal;
}

 q-page-container {
    overflow-y: auto;
    min-height: 200vh;
}

</style>
