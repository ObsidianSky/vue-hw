<template>
    <v-app-bar dark max-height="64">
        <router-link :to="{name: 'home'}">
            <v-btn text>Home</v-btn>
        </router-link>
    </v-app-bar>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component
    export default class AppTopBar extends Vue {}
</script>

<style scoped></style>