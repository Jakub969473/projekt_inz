import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import Subject from '#models/subject'
import ClassGroup from '#models/class_group'

export default class ClassUnit extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare form: 'w' | 'l' | 'ć' | 'p' | null

  @column()
  declare major: string | null

  @column()
  declare mode: 'st' | 'nst' | null

  @column()
  declare language: string | null

  @column()
  declare hours: number | null

  @column({ columnName: 'subject_id' })
  declare subjectId: number

  @belongsTo(() => Subject)
  declare subject: BelongsTo<typeof Subject>

  @hasMany(() => ClassGroup, { foreignKey: 'class_unit_id' })
  declare classGroups: HasMany<typeof ClassGroup>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
