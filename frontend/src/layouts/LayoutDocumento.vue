<template>
    <q-layout view="lhr lpr lfr">
        <q-page-container>
            <RouterView />
        </q-page-container>
    </q-layout>
</template>

<script>
import axios from 'axios'
import {onMounted } from 'vue'

export default {
  setup() {


    onMounted(() => {
      axios.get('http://localhost:8000/api/mensagem')
        .then(res => {
          const mensagem = res.data.mensagem
          console.log(mensagem)  
        })
        .catch(err => {
          console.error(err)
        })
    })


  }
}
</script>