import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'class_groups'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('hours').nullable()

      table
        .integer('class_unit_id')
        .unsigned()
        .references('id')
        .inTable('class_units')
        .onDelete('CASCADE')
        .nullable()
      table
        .integer('card_id')
        .unsigned()
        .references('id')
        .inTable('activity_assignment_cards')
        .onDelete('CASCADE')
        .nullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
