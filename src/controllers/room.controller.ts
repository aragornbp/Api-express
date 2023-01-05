import { Request, Response } from "express";
import { RoomService } from "../services/room.service";


export class RoomController {

    async create(req: Request, res: Response){
        const body = req.body
        const room =  new RoomService().create(body)
        return res.status(201).json(room)
    }

    async addSubject(req: Request, res: Response){
        const body = req.body
        const room_id = req.params.id
        const room = await new RoomService().addSubject(body, room_id)
        return res.status(200).json(room)
    }

    async index(req: Request, res: Response){
        const rooms = await new RoomService().index()
        return res.status(200).json(rooms)
    }
}