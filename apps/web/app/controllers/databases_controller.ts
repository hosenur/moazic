import type { HttpContext } from '@adonisjs/core/http'
import { docker } from '../../lib/dockerode.js'

export default class DatabasesController {
    async create({ response }: HttpContext) {
        const container = await docker.createContainer({
            Image: 'postgres:15-alpine',
        })
        await container.start()
        return response.json({
            id: container.id
        })
    }
    async list({ response }: HttpContext) {
        const containers = await docker.listContainers()
        return response.json(containers)
    }
}