
import {Router} from 'express'
import { roomRoutes } from './room.routes'
import { subjetctRoutes } from './subjects.routes'
import { videoRoutes } from './video.routes'

export const globalRoutes = Router()

globalRoutes.use('/subject',  subjetctRoutes)

globalRoutes.use('/video', videoRoutes)

globalRoutes.use('/room', roomRoutes)