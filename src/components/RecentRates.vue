<template>
    <v-container fluid>
        <v-sparkline v-if="recentRates !== null" :fill="fill" :gradient="selectedGradient" :line-width="width"
            :padding="padding" :smooth="radius || false" :value="value" auto-draw></v-sparkline>
    </v-container>
</template>

<script>
import axios from "axios"
const gradients = [
    ['#222'],
    ['#42b3f4'],
    ['red', 'orange', 'yellow'],
    ['purple', 'violet'],
    ['#00c6ff', '#F0F', '#FF0'],
    ['#f72047', '#ffd200', '#1feaea'],
]
export default {
    data: () => ({
        recentRates: null,
        fill: true,
        selectedGradient: gradients[4],
        gradients,
        padding: 8,
        radius: 10,
        value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
        width: 2,
    }),
    methods: {
        getFluctuationData() {
            axios("https://api.exchangerate.host/fluctuation?start_date=2023-01-01&end_date=2023-01-04'&base=USD").then((response) => {
                this.recentRates = response.data
                console.log(this.recentRates);
            })
        }
    },
    created() {
        this.getFluctuationData()
    }
}
</script>

