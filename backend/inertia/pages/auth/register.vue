<template>
  <v-container fluid>
    <v-row justify="center" align="center" style="height: 100vh;">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Registration</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form @submit.prevent="register">
              <v-text-field v-model="name" label="Name" required></v-text-field>
              <v-text-field v-model="email" label="Email" type="email" required></v-text-field>
              <v-text-field v-model="password" label="Password" type="password" required></v-text-field>
              <v-btn type="submit" color="primary" class="mr-4">Register</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {router} from "@inertiajs/vue3";

export default {
  data() {
    return {
        name: '',
        email: '',
        password: '',
    }
  },
  methods: {
    register() {
      router.post('/register', {
        email: this.email,
        password: this.password

      })
    }
  }
}
</script>
