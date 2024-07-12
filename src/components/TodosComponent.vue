<template>
  <div>
    <TodoHeader @add-todo="addTodo" />

    <TodoMain :taches="todos" />

    <TodoFooter :todos="todos" />
  </div>
</template>

<script lang="ts" setup>
import TodoHeader from '@/components/TodoHeader.vue'
import TodoMain from '@/components/TodoMain.vue'
import TodoFooter from '@/components/TodoFooter.vue'
import type { Todo } from '@/@types'
import { ref } from 'vue'

const todos = ref<Todo[]>([])

function addTodo(value: string) {
  todos.value.push({
    id: 0,
    title: value,
    complete: false
  })
}
</script>

<style></style>
