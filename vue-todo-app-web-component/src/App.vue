<template>
    <div id="app">
        <TodoComponent></TodoComponent>
    </div>
</template>

<script>
    import TodoComponent from './components/TodoComponent.vue'

    export default {
        name: 'app',
        components: {
            TodoComponent
        }
    }
</script>