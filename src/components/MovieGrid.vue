<template>
    <div>
        <v-container v-if="movies.length">
            <v-row>
                <v-col v-for="movie in movies"
                       :key="movie.id"
                       cols="4">
                    <MovieCard :movie="movie"></MovieCard>
                </v-col>
            </v-row>
        </v-container>
        <h2 v-else class="text-lg-center">Nothing here :(</h2>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import { Movie } from "@/tmdb-api.ts"
    import MovieCard from "@/components/MovieCard.vue";
    @Component({
        components: {
            MovieCard
        },
    })
    export default class MovieGrid extends Vue {
        @Prop({type: Array, required: true}) movies: Movie[] | undefined;
    }
</script>

<style scoped></style>