<template>
    <div>
        <v-progress-circular
                :indeterminate="false"
                :rotate="rotate"
                :size="size"
                :value="scaledToPercentsRating"
                :width="width"
                :color="interpolateColor(scaledToOneRating)">
            {{ rating }}
        </v-progress-circular>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
    export default class MovieRating extends Vue {
        @Prop(
            {
                type: Number,
                validator(value: number): boolean {
                    return value >= 0 && value <= 10;
                }
            }
        ) readonly rating: number;

        public endColor: string = '#76FF03';
        public startColor: string = '#E53935';
        public rotate: number = -90;
        public size: number = 60;
        public width: number = 8;

        get scaledToOneRating(): number {
            return this.rating / 10;
        }

        get scaledToPercentsRating(): number {
            return this.rating * 10;
        }

        public interpolateColor(amount: number): string {
            const ah = parseInt(this.startColor.replace(/#/g, ''), 16),
                ar = ah >> 16, ag = ah >> 8 & 0xff, ab = ah & 0xff,
                bh = parseInt(this.endColor.replace(/#/g, ''), 16),
                br = bh >> 16, bg = bh >> 8 & 0xff, bb = bh & 0xff,
                rr = ar + amount * (br - ar),
                rg = ag + amount * (bg - ag),
                rb = ab + amount * (bb - ab);

            return '#' + ((1 << 24) + (rr << 16) + (rg << 8) + rb | 0).toString(16).slice(1);
        }
    }
</script>

<style scoped></style>