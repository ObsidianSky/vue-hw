<template>
    <v-app>
        <app-top-bar/>
        <router-view/>
    </v-app>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import HomePage from '@/components/HomePage.vue';
    import MoviePage from '@/components/MoviePage.vue';
    import AppTopBar from '@/components/AppTopBar.vue';

    @Component({
        components: {
            HomePage,
            MoviePage,
            AppTopBar
        }
    })
    export default class App extends Vue {}
</script>

<style>
  a {
    text-decoration: none;
  }
</style>
