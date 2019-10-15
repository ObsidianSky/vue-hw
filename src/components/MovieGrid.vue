<template>
    <div>
        <v-container v-if="movies.length">
            <v-row>
                <v-col v-for="movie in movies"
                       :key="movie.id"
                       cols="4">
                    <v-card class="mx-auto"
                            max-width="400">
                        <v-img class="white--text"
                               height="300px"
                               :src="movie.poster_path || movie.backdrop_path | tmdbImageBase">
                            <v-card-title class="align-end fill-height">
                                <span class="movie-title">{{movie.title}}</span>
                            </v-card-title>
                            <MovieRating class="movie-rating" :rating='movie.vote_average'></MovieRating>
                        </v-img>

                        <v-card-text>
                            <span>{{ movie.release_date | date}}</span>
                            <div class="text--primary">
                              <span>{{movie.overview | ellipsis(200)}}</span>
                            </div>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
        <h2 v-else class="text-lg-center">Nothing here :(</h2>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import { Movie } from "@/tmdb-api.ts"
    import MovieRating from "@/components/MovieRating.vue";
    @Component({
        components: {
            MovieRating
        },
    })
    export default class MovieGrid extends Vue {
        @Prop({type: Array, required: true}) movies: Movie[] | undefined;
    }
</script>

<style scoped>
    .movie-title {
        padding: 2px 5px;
        background-color: rgba(117, 117, 117, 0.6);
        border-radius: 4px;
    }

    .movie-rating {
        position: absolute;
        z-index: 1;
        top: 15px;
        left: 15px;
        padding: 5px;
        background-color: rgba(117, 117, 117, 0.6);
        border-radius: 4px;
    }
</style>