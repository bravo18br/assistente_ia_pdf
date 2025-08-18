import { defineStore } from "pinia";

export const useTrDocStore = defineStore ('trDoc', {
    state: () => ({
        value: true,
        modoEdicaoManual: false,
        mostrarPdf: false,
    }),

    actions: {
        desligarFormulario() {
            this.value = false;
            this.modoEdicaoManual = true;
        },
    }
        
})