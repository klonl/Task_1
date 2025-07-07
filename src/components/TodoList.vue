<template>
        <div class="mt-12 grid grid-cols-12">
            <VCard
                v-for="todo in todos"
                :key="todo.id"
                class="col-span-4 justify-between mt-2"
            >
                <div class="flex">
                    <div class="w-auto">
                        <v-btn icon @click="$emit('toggle', todo)">
                            <v-icon>
                                {{ todo.done ? 'mdi-checkbox-marked-outline' : 'mdi-checkbox-blank-outline' }}
                            </v-icon>
                        </v-btn>
                        <v-btn icon @click="$emit('remove', todo.id)">
                            <v-icon>mdi-delete</v-icon>
                        </v-btn>
                    </div>
                    <div>
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