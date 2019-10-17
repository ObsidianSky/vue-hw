<template>
    <div class="text-lg-center">
        <v-progress-circular
                :size="70"
                :width="7"
                color="purple"
                indeterminate>
        </v-progress-circular>
    </div>
</template>

<script>
    import { Component, Vue } from 'vue-property-decorator';

    @Component
    export default class Spinner extends Vue {}
</script>

<style scoped></style>