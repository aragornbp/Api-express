import { Router } from "express";
import { RoomController } from "../controllers/room.controller";

export const roomRoutes = Router()

roomRoutes.post('/', new RoomController().create)

roomRoutes.patch('/:id', new RoomController().addSubject)

roomRoutes.get('/', new RoomController().index)