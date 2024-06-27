<template>
  <v-app>
    <v-main>
      <Navbar/>

      <v-container>
        <v-card>
          <v-card-title>
            Karta przydziału czynności
          </v-card-title>
          <v-card-subtitle>
            <v-row>
              <v-col> Suma godzin: {{ totalHours }} </v-col>
              <v-col> Pensum: {{ selectedTeacher?.pensum || 0 }} </v-col>
              <v-col> Godziny ponadwymiarowe: {{ overtimeHours }} </v-col>
              <v-col> Niedobór: {{ deficit }} </v-col>
            </v-row>
            <v-select
              v-model="selectedTeacher"
              :items="teacherItems"
              item-title="display"
              item-text="user.name"
              :item-value="teacher => teacher"
              label="Select Person">
              <template v-slot:item="{ props, item }">
                <v-list-item v-bind="props" :subtitle="item.raw.user.email"></v-list-item>
              </template>
            </v-select>
          </v-card-subtitle>
          <v-data-table :headers="headers" :items="items">
            <template v-slot:top>
              <v-toolbar flat>
                <v-toolbar-title>Activity List</v-toolbar-title>
              </v-toolbar>
            </template>
            <template v-slot:item.action="{ item }">
              <v-btn icon>
                <v-icon>mdi-dots-horizontal</v-icon>
              </v-btn>
            </template>
          </v-data-table>
          <v-card-actions>
            <Add_group :class_units="class_units"/>
            <v-btn color="primary" @click="addActivity">Dodaj jednostkę zajęciową</v-btn>
            <v-btn color="primary">Zaakceptuj</v-btn>
          </v-card-actions>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Navbar from "../../../src/components/Navbar.vue"
import Add_group from "~/pages/cards/add_group.vue";
export default {

  props: {
    teachers: null,
    class_units: Array,
    cards: Array,
  },
  components: {
    Navbar,
    Add_group
  },
  data() {
    return {
      selectedTeacher: null,
      totalHours: 0,
      overtimeHours: 0,
      deficit: 0,
      selectedTeacherActivities: [],
      headers: [
        { title: 'Przedmiot', value: 'subject' },
        { title: 'Kierunek', value: 'course' },
        { title: 'Tryb studiów', value: 'mode' },
        { title: 'Semestr', value: 'semester' },
        { title: 'Forma zajęć', value: 'type' },
        { title: 'Ilość grup', value: 'groups' },
        { title: 'Liczba godzin', value: 'hours' },
        { title: 'Lista spotkań', value: 'action', sortable: false }
      ],
      items: this.test()
    }
  },
  methods: {
    addActivity() {
      console.log('add activity')
      //console.log(this.selectedTeacher)

      console.log(this.items)

    },
    test() {
     return this.cards[0].classGroups.map(group => {
       return {
         subject: group.class_unit.subject.name,
         course: group.class_unit.major,
         mode: group.class_unit.mode,
         semester: group.class_unit.subject.semester,
         type: group.class_unit.form,
         groups: 1,
         hours: group.class_unit.hours,
       }
     })
    }
  },
  computed: {
    teacherItems() {
      return this.teachers.map(teacher => ({
        ...teacher,
        display: `${teacher.user.name} ${teacher.user.surname}`
      }));
    }
  },
}


</script>

<style scoped>

</style>
