<template>
  <header class="header">
    <RouterLink to="/">
      <h1>Todos</h1>
    </RouterLink>

    <input
      class="new-todo"
      type="text"
      placeholder="Entrez une tâche !"
      autofocus
      autocomplete="off"
      @keyup.enter="
        emit('add-todo', ($event.target as HTMLInputElement).value)
        ;($event.target as HTMLInputElement).value = ''
      "
    />
  </header>
</template>

<script lang="ts" setup>
const emit = defineEmits<{
  (e: 'add-todo', value: string): void
}>()
</script>

<style></style>
