<template>
  <div>
    <h2>Current Rate</h2>
    <div class="result">
      <v-alert type="info" outlined>
        <p><span>1</span> {{ rates.base_code }}</p>
        <div>
          <p>{{ Math.floor(rates.conversion_rates.UGX) }} <span>UGX</span></p>
          <p>{{ rates.conversion_rates.GBP }} <span>GBP</span></p>
          <p>{{ rates.conversion_rates.EUR }} <span>EUR</span></p>
        </div>
      </v-alert>
    </div>
  </div>
</template>

<script>
export default {
  props: ["rates"],
};
</script>

<style scoped></style>
