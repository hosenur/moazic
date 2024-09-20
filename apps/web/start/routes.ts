/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import DatabasesController from '#controllers/databases_controller'
import router from '@adonisjs/core/services/router'
router.on('/').renderInertia('home')

router.post('/database', [DatabasesController, 'create'])

