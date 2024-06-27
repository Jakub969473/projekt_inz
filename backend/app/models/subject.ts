import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import ClassUnit from '#models/class_unit'
import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class Subject extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  optional: boolean = false

  @column()
  declare : number

  @column()
  declare name_short: string

  @hasMany(() => ClassUnit)
  declare classUnits: HasMany<typeof ClassUnit>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
