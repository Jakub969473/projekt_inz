/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const SessionController = () => import('#controllers/session_controller')
export const middleware = router.named({
  auth: () => import('#middleware/auth_middleware'),
})

router.on('/').renderInertia('home', { version: 6 }).use(middleware.auth())
router.on('/about').renderInertia('about', { version: 6 })
router.on('/wypelnij').renderInertia('wypełnianie_formularza', { version: 6 })
router.on('/formularze').renderInertia('formularze', { version: 6 })
router.resource('/karty', '#controllers/cards_controller').use('*', middleware.auth())
router.on('/przedmioty').renderInertia('zarządzanie_przedmiotami', { version: 6 })

router.resource('login', SessionController)
router
  .post('logout', async ({ auth, response }) => {
    await auth.use('web').logout()
    return response.redirect('/login')
  })
  .use(middleware.auth())

router.post('register', '#controllers/session_controller.register')
