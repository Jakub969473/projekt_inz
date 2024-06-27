import User from '#models/user'
import { HttpContext } from '@adonisjs/core/http'

export default class SessionController {
  async index({ inertia }: HttpContext) {
    return inertia.render('auth/login', { version: 6 })
  }

  async create({ inertia }: HttpContext) {
    return inertia.render('auth/register', { version: 6 })
  }

  async store({ request, auth, response }: HttpContext) {
    const { email, password } = request.only(['email', 'password'])
    console.log(email, password)
    const user = await User.verifyCredentials(email, password)
    console.log(user)
    await auth
      .use('web')
      .login(user, !!request.input('remember_me'))
      .then(() => {
        response.redirect('/')
      })
  }

  async register({ request, auth, response }: HttpContext) {
    const { email, password } = request.only(['email', 'password'])

    const user = await User.create({ email, password })

    await auth.use('web').login(user)

    response.redirect('/')
  }

  async logout({ auth, response }: HttpContext) {
    await auth.use('web').logout()
    return response.redirect('/')
  }
}
