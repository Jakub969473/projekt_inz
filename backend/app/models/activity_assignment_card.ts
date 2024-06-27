import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import Teacher from '#models/teacher'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import ClassGroup from '#models/class_group'

export default class ActivityAssignmentCard extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare academic_year: string

  @column()
  declare semester: boolean

  @column()
  declare teacher_id: number

  @belongsTo(() => Teacher)
  declare teacher: BelongsTo<typeof Teacher>

  @hasMany(() => ClassGroup, { foreignKey: 'card_id' })
  declare classGroups: HasMany<typeof ClassGroup>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
