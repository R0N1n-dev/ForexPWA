<template>
    <v-app>
        <v-app-bar app class="blue accent-4" dark dense rounded>
            <!--<v-app-bar-nav-icon></v-app-bar-nav-icon>-->
            <div class="d-flex align-center">
                <v-img alt="Vuetify Logo" class="shrink mr-2" contain
                    src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png" transition="scale-transition"
                    width="40" />

                <v-img alt="Vuetify Name" class="shrink mt-1 hidden-sm-and-down" contain min-width="100"
                    src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png" width="100" />
            </div>

            <v-spacer></v-spacer>

            <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
                <span class="mr-2">R0ZEN PWA</span>
                <v-icon>fa-star</v-icon>
            </v-btn>
        </v-app-bar>

        <v-main color="grey lighten-4">
            <!--<v-snackbar bottom-right v-model="updateExists" color="primary" multiline>
        Update available.
        <div>
          <v-btn @click="refreshApp" class="mx-2">Refresh</v-btn>
          <v-btn>Close</v-btn>
        </div>
      </v-snackbar>-->
            <ForexAPI />
        </v-main>
    </v-app>
</template>