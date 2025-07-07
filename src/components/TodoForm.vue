<template>
            <div class="flex flex-col items-center">
                <div>
                    <v-textarea
                        v-model="text"
                        label="Новая задача"
                        @keyup.enter="submit"
                        outlined
                        class="w-full"
                    />
                </div>
                <div>
                    <v-btn @click="submit" class="w-full mt-4" large outlined>
                        Добавить
                    </v-btn>
                </div>
            </div>
</template>

<script setup>
import { ref } from 'vue'
const emit = defineEmits(['add'])

const text = ref('')
function submit() {
    if (!text.value.trim()) return
    emit('add', text.value.trim())
    text.value = ''
}
</script>