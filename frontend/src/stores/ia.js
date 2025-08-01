import { defineStore } from "pinia";
import api from "./api";

export const useIaStore = defineStore ('ia', {
    state: () => ({
        sugestao: ''
    }),

    actions: {
        async obterSugestao(texto) {
            try {
                const response = await api.post('/ia-sugestao', {texto})
                this.sugestao = response.data.sugestao
            } catch (error) {
                console.error('Erro ao buscar sugestão da IA:', error)
                this.sugestao = 'Erro ao buscar sugestão.'
            }
        },

        limparSugestao() {
            this.sugestao = ''
        }
    }
})