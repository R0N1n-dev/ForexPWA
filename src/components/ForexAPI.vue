<template>
  <v-container>
    <v-row class="text-center">
      <v-col>
        <h2 class="display-1 my-1">Exchange Converter</h2>
        <div class="mt-4">
          <v-row>
            <v-col cols="12" md="4" sm="4" xs="8">
              <v-text-field
                v-model="number"
                label="Amount"
                clearable
                dense
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4" sm="4" xs="8">
              <v-select
                :items="items"
                label="Convert from"
                dense
                v-model="convertFrom"
                clearable
              ></v-select>
            </v-col>

            <v-col cols="12" md="4" sm="4" xs="8">
              <v-select
                :items="items"
                label="Convert to"
                dense
                v-model="convertTo"
                clearable
              ></v-select>
            </v-col>
          </v-row>
          <v-btn
            class="mx-2"
            fab
            dark
            small
            color="primary"
            :disabled="number < 1"
            @click="convertIt"
          >
            <v-icon dark>fa-refresh</v-icon>
          </v-btn>
        </div>
        <v-alert
          type="success"
          v-if="result !== ''"
          class="mx-auto mt-4 text-h4 font-weight-bold"
          style="max-width: 80vw"
          >{{ number }} {{ convertFrom }} =
          {{
            result.conversion_result.toLocaleString("en-US", {
              timezone: "UTC",
            })
          }}
          {{ convertTo }}</v-alert
        >
      </v-col>
      <v-col cols="12" v-if="rates !== null">
        <CurrentRate :rates="rates" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    number: "",
    items: ["EUR", "GBP", "USD", "UGX"],
    convertFrom: "",
    convertTo: "",
    result: "",
    emptyInput: false,
    rates: null,
  }),
  methods: {
    async convertIt() {
      if (this.number && this.convertFrom && this.convertTo) {
        await axios(
          `https://v6.exchangerate-api.com/v6/94fd24a90566726d54872c52/pair/${this.convertFrom}/${this.convertTo}/${this.number}`
        ).then((response) => {
          this.result = response.data;
          console.log(this.result);
        });
      }
    },
    async getRates() {
      await axios(
        `https://v6.exchangerate-api.com/v6/94fd24a90566726d54872c52/latest/USD`
      ).then((response) => {
        this.rates = response.data;
        console.log(this.rates);
      });
    },
  },
  /*mounted() {
    this.getRates();
  },*/
};
</script>

<style></style>
