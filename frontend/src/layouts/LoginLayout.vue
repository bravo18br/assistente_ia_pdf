<template>
    <q-layout view="hHh lpR fFf">
        <q-header elevated class="bg-purple-7 text-white">
            <q-toolbar>
                    <img src="../assets/logoTeste80.png">
                <q-toolbar-title>
                    <div id="Titulo">Gerador de Documentos Sobre Licitações</div>
                </q-toolbar-title>
            </q-toolbar>
        </q-header>

        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<style>
img {
    background-color: rgba(155, 202, 255, 0.548);
    border-radius: 10px;
    margin: auto;
}

#Titulo {
    width: 40vw;
    word-break: break-word;
    white-space: normal;
}

</style>