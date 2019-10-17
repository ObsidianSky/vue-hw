<template>
    <div>
        <v-container>
            <v-text-field class="align-center"
                          :clearable="true"
                          :hide-details="true"
                          :value="searchQuery"
                          @keyup.enter="searchMovies"
                          @input="setSearchQuery">

                <template v-slot:append-outer>
                    <v-btn icon
                           color="primary"
                           :disabled="isSearchDisabled"
                           @click="searchMovies">
                        <v-icon>mdi-magnify</v-icon>
                    </v-btn>
                </template>

            </v-text-field>
        </v-container>

        <div v-if="!isLoading">
            <PaginatedGrid :movies="movies"
                           :current="currentPage"
                           :total="totalPages"
                           @page-change="updatePage">
            </PaginatedGrid>
        </div>
        <Spinner v-else/>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import { Action, Getter, Mutation, State } from 'vuex-class';

    import PaginatedGrid from '@/components/PaginatedGrid.vue';
    import Spinner from '@/components/Spinner.vue';
    import { ShortMovieDetails } from '@/tmdb-api/tmdb.models';

    @Component({
        components: {
            PaginatedGrid,
            Spinner
        }
    })
    export default class HomePage extends Vue {
        @Getter movies: ShortMovieDetails[];
        @Getter currentPage: number;
        @Getter totalPages: number;
        @Getter isSearchDisabled: boolean;

        @State isLoading: boolean;
        @State searchQuery: string;

        @Mutation setSearchQuery: Function;

        @Action fetchPopular: Function;
        @Action searchMovies: Function;
        @Action updatePage: Function;

        public mounted(): void {
            this.fetchPopular();
        }
    }
</script>

<style></style>
