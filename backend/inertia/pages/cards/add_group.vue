<template>
  <div class="pa-4 text-center">
    <v-dialog
      v-model="dialog"
      max-width="600"
    >
      <template v-slot:activator="{ props: activatorProps }">
        <v-btn
          color="primary"
          text="Edit Profile"
          v-bind="activatorProps"
        ></v-btn>
      </template>

      <v-card
        prepend-icon="mdi-account"
        title="User Profile"
      >
        <v-card-text>
          <v-row dense>

            <v-col cols="12" md="12" sm="12">
              <v-select
                v-model="selectedGroup"
                :items="class_units"
                item-title="name"
                item-text="name"
                :item-value="subject => subject"
                label="Wybierz przedmiot">
                <template v-slot:item="{ props, item }">
                  <v-list-item v-bind="props" :subtitle="item.raw.classUnits[0].form"></v-list-item>
                </template>
              </v-select>
            </v-col>

            <v-col cols="12" md="6" sm="6">
              <v-text-field
                v-model="hours"
                label="Liczba godzin"
                outlined
              ></v-text-field>
            </v-col>


            <v-col cols="12" md="6" sm="6">
              <v-text-field
                v-model="amount"
                label="Ilość grup"
                outlined
              ></v-text-field>
            </v-col>


          </v-row>

        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            text="Close"
            variant="plain"
            @click="dialog = false"
          ></v-btn>

          <v-btn
            color="primary"
            text="Save"
            variant="tonal"
            @click="save()"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">

import Subject from "#models/subject";
import { router } from '@inertiajs/vue3'

export default {
  props: {
    class_units: Array
  },
  data() {
    return {
      dialog: false,
      selectedGroup: null,
      hours: 0,
      amount: 0
    }
  },
  methods: {
    save() {
      this.dialog = false
      router.post('/karty', {
        classUnitId: this.selectedGroup.classUnits[0].id,
        card_id: 1,
        hours: this.hours,
        amount: this.amount
      })
    },
    itemProps(item:Subject) {
      return {
        title: item.name,
        subtitle: item.classUnits[0].form,
      }
    },
  },
}

</script>

<style scoped>

</style>
