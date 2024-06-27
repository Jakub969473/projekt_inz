<template>
  <v-app>
    <v-container fluid>
      <v-row justify="center" align="center" style="height: 100vh;">
        <v-col cols="12" sm="8" md="4">
          <v-card class="elevation-12">
            <v-toolbar dark color="primary">
              <v-toolbar-title>Login</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form @submit.prevent="login">
                <v-text-field v-model="email" label="Email" type="email" required></v-text-field>
                <v-text-field v-model="password" label="Password" type="password" required></v-text-field>
                <v-btn type="submit" color="primary" class="mr-4">Zaloguj się</v-btn>
                <v-btn @click="registration" color="primary" class="mr-4">Zarejestruj się</v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>

import { router } from '@inertiajs/vue3'

export default {
  components: {},
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login() {
      router.post('/login', {
        email: this.email,
        password: this.password

      })
    },
    registration() {
      router.visit('/login/create')
    }
  }
};
</script>

<style>
/* Add custom styles here */
</style>
