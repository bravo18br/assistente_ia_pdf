<template>
    <form action="" method="POST" class="form">
        <h2>Para qual data pretende receber?</h2>

        <div class="q-pa-md" style="max-width: 300px">
            <q-input filled v-model="dateBr" mask="##/##/####" :rules="[validarDataBr]">
            <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy v-model="popup" cover transition-show="scale" transition-hide="scale">
                    <q-date v-model="date" mask="YYYY-MM-DD" color="purple" text-color="white">
                    <div class="row items-center justify-end">
                        <q-btn @click="popup = false" label="Fechar" id="cor" flat />
                    </div>
                    </q-date>
                </q-popup-proxy>
                </q-icon>
            </template>
            </q-input>
        </div>
        <br>
        <div class="flex">
            <div class="btn">
                <q-btn @click="enviarAnterior" id="cor" class="shadow-4" icon="arrow_backward"></q-btn>
            </div>
            <q-space />
            <div class="btn">
                <q-btn @click="enviarProximo" id="cor" class="shadow-4">Finalizar</q-btn>
            </div>
        </div>

    </form>
</template>

<script>
export default {
    data() {
        return {
            date: new Date().toISOString().substr(0, 10),
            popup: false,
        }
    },

    computed: {
        dateBr: {
            get() {
                if (!this.date) return '';
                const [year, month, day] = this.date.split('-');
                return `${day}/${month}/${year}`;
            },
            set(value) {
                const parts = value.split('/');
                if (parts.length === 3) {
                    const [day, month, year] = parts;
                    if (
                        day.length === 2 &&
                        month.length === 2 &&
                        year.length === 4
                    ) {
                        this.date = `${year}-${month}-${day}`;
                    }
                }
            },
        },
    },

    methods: {
        enviarProximo() {
            this.$emit('next');
        },
        enviarAnterior() {
            this.$emit('prev');
        },
        validarDataBr(value) {
            if (!value) return true; // campo vazio pode ser válido, ajustar se quiser obrigatório
            
            const regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
            if (!regex.test(value)) return 'Data inválida';

            const [, dd, mm, yyyy] = value.match(regex);

            const day = parseInt(dd, 10);
            const month = parseInt(mm, 10);
            const year = parseInt(yyyy, 10);

            if (month < 1 || month > 12) return 'Mês inválido';
            if (day < 1 || day > 31) return 'Dia inválido';

            // Verificar os dias de cada mês
            const monthDays = [31, (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            if (day > monthDays[month - 1]) return 'Dia inválido para o mês';

            return true; // data válida
        }
    }
}
</script>

<style scoped>
.form {
    overflow: hidden;
    max-width: 100%;
}

.form p {
    font-size: 1.25em;
    font-weight: bold;
}

.form h2 {
    font-size: 3em;
    font-weight: bold;
}

.form label {
    font-size: 1.5em;
}

.flex {
    display: flex;
}

#cor {
    background-color: rgb(180, 2, 180);
    color: white;
    font-weight: bold;
    height: 40px;
    padding: 0 20px;
    border-radius: 6px;
}

.btn {
    flex-shrink: 0;
}

</style>