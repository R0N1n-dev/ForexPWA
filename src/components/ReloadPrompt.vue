<script>
import useRegisterSW from '../mixins/useRegisterSW'

export default {
    name: 'ReloadPrompt',
    mixins: [useRegisterSW]
}
</script>

<template>
    <div v-if="offlineReady || needRefresh" role="alert">
        <v-snackbar v-model="offlineReady" bottom-right>
            <span class="mx-2">
                App ready to work offline
            </span>
            <v-btn @click="closePromptUpdateSW">
                Close
            </v-btn>
        </v-snackbar>
        <v-snackbar v-model="needRefresh">
            <span class="mx-2">
                New content available, click on reload button to update.
            </span>
            <v-btn class="mx-2" @click="updateServiceWorker()">
                Reload
            </v-btn>
        </v-snackbar>
    </div>
</template>

