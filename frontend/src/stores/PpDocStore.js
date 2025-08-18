import { defineStore } from "pinia";

export const usePpDocStore = defineStore ('ppDoc', {
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