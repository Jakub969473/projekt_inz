import factory from '@adonisjs/lucid/factories'
import Subject from '#models/subject'

export const SubjectFactory = factory
  .define(Subject, async ({ faker }) => {
    return {}
  })
  .build()