<template>
        <div class="mt-12 grid gap-4 grid-cols-12">
            <VCard
                v-for="todo in todos"
                :key="todo.id"
                class="col-span-4 justify-between mt-2"
            >
                <div class="flex gap-4 p-4">
                    <div class="flex gap-4">
                        <v-btn variant="text" icon @click="$emit('toggle', todo)">
                            <v-icon>
                                {{ todo.done ? 'mdi-checkbox-marked-outline' : 'mdi-checkbox-blank-outline' }}
                            </v-icon>
                        </v-btn>
                        <v-btn variant="text" icon @click="$emit('remove', todo.id)">
                            <v-icon>mdi-delete</v-icon>
                        </v-btn>
                    </div>
                    <div class="flex-1 flex items-center">
                        {{ todo.text }}
                    </div>
                </div>
            </VCard>
        </div>
</template>

<script setup>
const props = defineProps({
    todos: {
        type: Array,
        required: true
    }
})
const emit = defineEmits(['toggle', 'remove'])
</script>