<template>
    <div>
        <v-container v-if="movies.length">
            <v-row>
                <v-col v-for="movie in movies"
                       cols="4"
                       :key="movie.id">
                    <router-link :to="{ name: 'movie', params: { id: movie.id }}">
                        <MovieCard :movie="movie"/>
                    </router-link>
                </v-col>
            </v-row>
        </v-container>
        <h2 v-else class="text-lg-center">Nothing here :(</h2>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import MovieCard from '@/components/MovieCard.vue';
    import { ShortMovieDetails } from '@/tmdb-api/tmdb.models';

    @Component({
        components: {
            MovieCard
        }
    })
    export default class MovieGrid extends Vue {
        @Prop({type: Array, required: true}) movies: ShortMovieDetails[];
    }
</script>

<style scoped></style>