<template>
    <div>
        <v-container v-if="!isLoading">
            <v-row>
                <v-col cols="4">
                    <v-img :src="movieDetails.getPosterPath()| tmdbImageBase"></v-img>
                </v-col>
                <v-col cols="8">
                    <h2>{{movieDetails.title}}</h2>
                    <h5 class="mb-3">{{movieDetails.tagline}}</h5>
                    <h4>Overview:</h4>
                    <p class="mb-3">{{movieDetails.overview}}</p>
                    <div class="d-flex">
                        <div class="mr-4">
                            <span class="font-weight-bold">Status:</span>
                            {{movieDetails.status}}
                        </div>
                        <div class="mr-4">
                            <span class="font-weight-bold">Budget:</span>
                            {{movieDetails.budget}} $
                        </div>
                        <div class="mr-4">
                            <span class="font-weight-bold">Revenue:</span>
                            {{movieDetails.revenue}} $
                        </div>
                        <div class="mr-4">
                            <span class="font-weight-bold">Runtime:</span>
                            {{movieDetails.runtime}} min
                        </div>
                    </div>
                </v-col>
            </v-row>
        </v-container>
        <Spinner v-else/>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import { namespace } from 'vuex-class'
    import Spinner from '@/components/Spinner.vue';
    import { ExtendedMovieDetails } from '@/tmdb-api/tmdb.models';

    const moviePageModule = namespace('moviePage');

    @Component({
        components: {
            Spinner
        }
    })
    export default class MoviePage extends Vue {
        @moviePageModule.State isLoading: boolean;

        @moviePageModule.Action fetchMovie: Function;
        @moviePageModule.Getter movieDetails: ExtendedMovieDetails;

        public created(): void {
            this.fetchMovie(Number(this.$route.params.id));
        }
    }
</script>

<style scoped></style>