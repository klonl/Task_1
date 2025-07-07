<template>
    <v-app>
        <v-main class="p-4">
            <v-container>
                <todo-form @add="addTodo" />

                <v-row class="mt-4" justify="center">
                    <v-btn
                        v-for="opt in ['all','active','completed']"
                        :key="opt"
                        :color="filter === opt ? 'primary' : 'default'"
                        class="mx-2"
                        @click="filter = opt"
                    >
                        {{ opt }}
                    </v-btn>
                </v-row>

                <todo-list
                    :todos="filteredTodos"
                    @toggle="toggleTodo"
                    @remove="removeTodo"
                />
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import TodoForm from './components/TodoForm.vue'
import TodoList from './components/TodoList.vue'
import { useTodos } from './composables/useTodos'

export default {
    name: 'App',
    components: { TodoForm, TodoList },
    setup() {
        const { addTodo, removeTodo, toggleTodo, filter, filteredTodos } = useTodos()
        return { addTodo, removeTodo, toggleTodo, filter, filteredTodos }
    }
}
</script>