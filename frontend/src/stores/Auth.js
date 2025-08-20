import { defineStore } from "pinia";

const BASE_URL = 'http://10.200.0.84:8000/api/'

async function csrf() {
    await fetch('http://10.200.0.84:8000/sanctum/csrf-cookie', {
        method: 'GET',
        credentials: 'include',
    });
}

export const useAuthStore = defineStore ('auth', {
    state: () => ({
        user: null,
        loading: false,
        error: null,
    }),
    
    actions: {
        async register(resposta){
            console.log("oi");
            let controller = new AbortController();
            await csrf();
            const user = await fetch(`${BASE_URL}register`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(resposta),
                credentials: 'include',
                signal: controller.signal
            })

            if (!user.ok) {
                const errorData = await user.json();
                console.log("Erro de validação do Laravel", errorData);
                return;
            }
            console.log(user.json());
        }
    }
})