import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'class_units'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.enu('form', ['w', 'l', 'ć', 'p']).nullable()
      table.string('major').nullable()
      table.enu('mode', ['st', 'nst']).nullable()
      table.string('language').nullable()
      table.integer('hours').nullable()

      table
        .integer('subject_id')
        .unsigned()
        .references('id')
        .inTable('subjects')
        .onDelete('CASCADE')
        .nullable()
      table
        .integer('major_id')
        .unsigned()
        .references('id')
        .inTable('majors')
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
