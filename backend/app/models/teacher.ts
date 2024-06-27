import { DateTime } from 'luxon'
import { BaseModel, hasOne, column, hasMany } from '@adonisjs/lucid/orm'
import User from '#models/user'
import type { HasMany, HasOne } from '@adonisjs/lucid/types/relations'
import ActivityAssignmentCard from '#models/activity_assignment_card'

export default class Teacher extends BaseModel {
  @column({ isPrimary: true, columnName: 'id' })
  declare userId: number

  @column()
  declare pensum: number | null

  @column()
  declare org_unit: string | null

  @hasOne(() => User, {
    foreignKey: 'id',
  })
  declare user: HasOne<typeof User>

  @hasMany(() => ActivityAssignmentCard, {
    foreignKey: 'id',
  })
  declare activity_assignment_cards: HasMany<typeof ActivityAssignmentCard>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
