<template>
  <v-app-bar
    app
    color="primary"
    dark
  >
    <v-toolbar-title class="white--text">MyBrand</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text="" @click="home('/')">Strona główna</v-btn>
    <v-btn text="" @click="home('/wypelnij')">Wypełnienie formularza</v-btn>
    <v-btn text="" @click="home('/formularze')">Formularze</v-btn>
    <v-btn text="" @click="home('/karty')">Karty przydziału czynności</v-btn>
    <v-btn text="" @click="home('/przedmioty')">Zarządzanie przedmiotami</v-btn>

    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
  </v-app-bar>
  <v-navigation-drawer
    v-model="drawer"
    :location="'right'"
    temporary
  >
    <v-list>
      <v-list-item class="hover:tw-bg-gray-200">
        <Link href="/logout" method="post" as="button" type="button">Logout</Link>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { router } from '@inertiajs/vue3'
import { Link } from '@inertiajs/vue3'

export default {
  components: {
    Link,
  },
  data() {
    return {
      drawer: false,
      group: null,
    };
  },
  methods: {
    home(url) {
      router.visit(url)
    },
  },
  watch: {
    group() {
      this.drawer = false
    },
  },
};
</script>

<style scoped>
</style>
