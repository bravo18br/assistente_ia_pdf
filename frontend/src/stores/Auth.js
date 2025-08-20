import { defineStore } from "pinia";

const BASE_URL = 'http://10.200.0.84:8000/api/'

export const useAuthStore = defineStore ('auth', {
    state: () => ({
        user: null,
        loading: false,
        error: null,
    }),
    
    actions: {
        async getCsrfCookie() {
            await fetch("http://10.200.0.84:8000/sanctum/csrf-cookie", {
                method: "GET",
                credentials: "include" // importantíssimo
            })
        },
        async register(resposta){
            await this.getCsrfCookie();

            console.log(resposta);
            // let controller = new AbortController();
            const user = await fetch(`${BASE_URL}register`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(resposta),
                credentials: 'include',
                // signal: controller.signal
            })

            if (!user.ok) {
                const err = await user.json();
                
                if (user.status === 422 && err.errors) {
                    console.log(err.message, err.errors);
                    //exibir cada error de errors em tela
                } else {
                    console.log("Erro ao registrar");
                }
                return;
            }
            console.log(user.json());
        }
    }
})