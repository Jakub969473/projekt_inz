import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Teacher from '#models/teacher'

export default class extends BaseSeeder {
  async run() {
    await Teacher.create({
      id: 11,
      pensum: 300,
    })
  }
}
