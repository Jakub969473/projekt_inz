import { BaseSeeder } from '@adonisjs/lucid/seeders'
import ExcelJS from 'exceljs'
import path from 'node:path'
import { Row, Rows } from 'exceljs/index.js'
import Subject from '#models/subject'
import ClassUnit from '#models/class_unit'

// Define the file path
const filePath = path.join('C:\\Users\\torpe\\Desktop\\', 'Arkusz_obciazen_przyklad.xlsx')
// Load a workbook from a file
const workbook = new ExcelJS.Workbook()
const startRow = 22 // Define the row to start reading from
const semester = {
  I: 1,
  II: 2,
  III: 3,
  IV: 4,
  V: 5,
  VI: 6,
  VII: 7,
}
export default class extends BaseSeeder {
  async run() {
    try {
      // Read the file
      await workbook.xlsx.readFile(filePath)

      let subject: Subject = new Subject()
      let class_unit: ClassUnit

      // Use workbook
      const worksheet = workbook.getWorksheet('Arkusz_przykładowy') // Assuming 'Sheet1' is the first sheet
      const rows: Rows = worksheet.getRows(startRow, worksheet.rowCount)

      for (const row of rows) {
        if (row.cellCount >= startRow) {
          const first_column_value = row.getCell(1).value // Get the value of the first column (column A)
          if (
            /^GW\d+$/.test(first_column_value) ||
            /^H\d+$/.test(first_column_value) ||
            /^HS\d+$/.test(first_column_value)
          ) {
            subject.optional = true
            subject.save()

            class_unit = new ClassUnit()
            class_unit.form = row.getCell(6).value === 'c' ? 'ć' : row.getCell(6).value
            class_unit.major = row.getCell(2).value
            class_unit.mode = row.getCell(3).value
            //class_unit.language = row.getCell(7).value
            class_unit.hours = row.getCell(7).value
            await class_unit.related('subject').associate(subject)
            await class_unit.save()
          } else if (
            first_column_value === null ||
            first_column_value === '' ||
            first_column_value === undefined ||
            first_column_value === ' '
          ) {
            class_unit = new ClassUnit()
            class_unit.form = row.getCell(6).value === 'c' ? 'ć' : row.getCell(6).value
            class_unit.major = row.getCell(2).value
            class_unit.mode = row.getCell(3).value
            //class_unit.language = row.getCell(7).value
            class_unit.hours = row.getCell(7).value
            await class_unit.related('subject').associate(subject)
            await class_unit.save()
          } else {
            subject = new Subject()
            subject.name = row.getCell(1).value
            subject.semester = semester[row.getCell(4).value].valueOf()
            await subject.save()
          }
        }
      }
    } catch (error) {
      console.error('Error loading workbook: ', error)
    }
  }
}
