import { ref, computed, watch } from 'vue'

const STORAGE_KEY = 'vue-todo-list'

export function useTodos() {
    const todos = ref(JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'))

    watch(todos, (newTodos) => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newTodos))
    }, { deep: true })

    const addTodo = (text) => {
        todos.value.push({ id: Date.now(), text, done: false })
    }

    const removeTodo = (id) => {
        todos.value = todos.value.filter(todo => todo.id !== id)
    }

    const toggleTodo = (todo) => {
        todo.done = !todo.done
    }

    const filter = ref('all')

    const filteredTodos = computed(() => {
        if (filter.value === 'active') return todos.value.filter(t => !t.done)
        if (filter.value === 'completed') return todos.value.filter(t => t.done)
        return todos.value
    })

    return { todos, addTodo, removeTodo, toggleTodo, filter, filteredTodos }
}