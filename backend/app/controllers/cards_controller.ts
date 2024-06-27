// import type { HttpContext } from '@adonisjs/core/http'

import { HttpContext } from '@adonisjs/core/http'
import Teacher from '#models/teacher'
import Subject from '#models/subject'
import ActivityAssignmentCard from '#models/activity_assignment_card'
import ClassGroup from "#models/class_group";

export default class CardsController {
  async index({ inertia }: HttpContext) {
    const teachers = await Teacher.query().preload('user')
    const class_units = await Subject.query().preload('classUnits')
    const cards = await ActivityAssignmentCard.query().preload('classGroups', (query) => {
      query.preload('class_unit', (query_class_unit) => {
        query_class_unit.preload('subject')
      })
    })
    return inertia.render('cards/index', { teachers, class_units, cards })
  }

  async store({ request, response }: HttpContext) {
    const data = request.only(['classUnitId', 'card_id', 'hours'])
    const card = await ClassGroup.create(data)
    //return response.redirect().toRoute('cards.index')
  }
}

