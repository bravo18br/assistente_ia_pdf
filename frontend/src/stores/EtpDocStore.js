import { defineStore } from "pinia";

export const useEtpDocStore = defineStore ('etpDoc', {
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