<template>
    <div>
        <h1 class="text-lg-center">Movies BTW</h1>

        <v-container>
            <v-text-field
                    :clearable="true"
                    append-outer-icon="mdi-magnify"
                    @click:append-outer="searchMovies"
                    v-on:keyup.enter="searchMovies"
                    v-model="searchText">
            </v-text-field>
        </v-container>

        <div v-if="!loading">
            <MovieGrid :movies="movies"></MovieGrid>
        </div>
        <div v-else class="text-lg-center">
            <v-progress-circular
                    :size="70"
                    :width="7"
                    color="purple"
                    indeterminate>
            </v-progress-circular>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import * as api from "@/tmdb-api";
    import MovieGrid from "@/components/MovieGrid.vue";
    import { Movie } from "@/tmdb-api";

    @Component({
        components: {
            MovieGrid
        }
    })
    export default class Home extends Vue {
        public movies: Movie[] = [];
        public loading: boolean = false;
        public searchText: string = '';

        public mounted(): void {
            this.fetchPopular();
        }

        public searchMovies(): void {
            this.loading = true;

            api.search(this.searchText).then(resp => {
                this.movies = resp.results;
                this.loading = false;
            })
        }

        private fetchPopular(): void {
            this.loading = true;

            api.fetchPopular().then(resp => {
                this.movies = resp.results;
                this.loading = false;
            })
        }

    }
</script>

<style>
</style>
