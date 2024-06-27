import { BaseSeeder } from '@adonisjs/lucid/seeders'
import User from '#models/user'
import { UserFactory } from '#database/factories/user_factory'

export default class extends BaseSeeder {
  async run() {
    await UserFactory.createMany(10)
    await User.create({
      email: 'test123',
      password: 'test123',
    })
  }
}
