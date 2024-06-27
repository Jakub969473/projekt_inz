import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import ClassUnit from '#models/class_unit'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import ActivityAssignmentCard from '#models/activity_assignment_card'

export default class ClassGroup extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare hours: number | null

  @column({ columnName: 'class_unit_id'})
  declare classUnitId: number | null

  @column()
  declare card_id: number | null

  @belongsTo(() => ClassUnit)
  declare class_unit: BelongsTo<typeof ClassUnit>

  @belongsTo(() => ActivityAssignmentCard)
  declare card: BelongsTo<typeof ActivityAssignmentCard>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
