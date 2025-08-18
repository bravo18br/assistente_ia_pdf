<template>
  
  <div class="q-pa-md">
    <div class="text-h6 q-mb-md">
      <div id="select" class="text-right">
        <p id="pselect">Selecione o documento desejado:</p>
        <q-btn id="meusdoc" label="Meus Documentos" class="shadow-4"></q-btn>
      </div>
    </div>

    <div class="bg-white shadow-8">
      <q-card>
        <q-list bordered separator>
          <q-item
            v-for="doc in documentos"
            :key="doc.codigo"
            clickable
          >
            <router-link :to="{ name: `documento-${doc.codigo.toLowerCase()}`, params: { tipo: doc.codigo.toLowerCase() } }" style="display: block; width: 100%; color: inherit; text-decoration: none;">
              <q-item-section>
                <div id="abreviacao">{{ doc.codigo }}</div>
                <div id="resumo" class="text-caption"><strong>{{ doc.titulo }}</strong> - {{ doc.resumo }}</div>
              </q-item-section>
            </router-link>
          </q-item>
        </q-list>
      </q-card>
    </div>
    
  </div>

</template>

<script>

export default {
  name: 'PaginaInicial',
  
  data() {
    return {
      documentos: [
        { codigo: 'DFD', titulo: 'Documento de Formalização de Demanda', resumo: 'É o instrumento oficial que justifica e detalha a necessidade de contratação de bens ou serviços pela administração pública, servindo também de base para o plano anual de contratações.' },
        { codigo: 'ETP', titulo: 'Estudo Técnico Preliminar', resumo: 'Breve Resumo(?)' },
        { codigo: 'PP', titulo: 'Pesquisa de Preço', resumo: 'Breve Resumo(?)' },
        { codigo: 'TR', titulo: 'Termo de Referência', resumo: 'Breve Resumo(?)' },
        { codigo: '...', titulo: '', resumo: 'Breve Resumo(?)'},
        { codigo: '...', titulo: '', resumo: 'Breve Resumo(?)'},
        { codigo: '...', titulo: '', resumo: 'Breve Resumo(?)'},
      ]
    }
  },

  methods: {
   
    }
  
}
</script>

<style scooped>
 #abreviacao {
  font-size: 20px;
  font-weight: bold;
  padding: 10px;
  text-align: left;
 }

 #resumo {
  font-size: 18px;
  padding: 10px;
  text-align: justify;
 }

 #meusdoc {
  background-color: rgb(180, 2, 180);
  color: white;
  font-weight: bold;
  height: 40px;
  padding: 0 20px;
  border-radius: 6px;
 }

 #meusdoc:hover {
  background-color: rgb(99, 0, 99);
  color: white;
 }

 #select {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
 }

 #pselect {
  font-weight: bold;
  margin: 0;
 }

</style>