<template>
    <div>
        <h2>Current Rate</h2>
        <div class="result">
            <v-alert type="info" outlined>
                <span>{{ rates.base }}</span> <span>=</span>
                <span>{{ rates.rates.SVC }}</span>
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
  