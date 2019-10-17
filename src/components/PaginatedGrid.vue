<template>
    <div>
        <MovieGrid :movies="movies"/>
        <v-pagination :length="total"
                      :value="current"
                      @input="$emit('page-change', $event)" total-visible="20"/>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import MovieGrid from '@/components/MovieGrid.vue';
    import { ShortMovieDetails } from '@/tmdb-api/tmdb.models';

    @Component({
        components: {
            MovieGrid
        },
    })
    export default class PaginatedGrid extends Vue {
        @Prop({type: Number, required: true}) current: number;
        @Prop({type: Number, required: true}) total: number;
        @Prop({type: Array, required: true}) movies: ShortMovieDetails[];
    }
</script>

<style scoped></style>