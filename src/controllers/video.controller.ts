import { Request, Response } from "express";
import { VideoService } from "../services/video.service";



export class VideoController {

    async create(req: Request, res: Response){
        const body = req.body
        const room_id = req.params.id
        const video =  new VideoService().create(body, room_id)
        return res.status(201).json(video)
    }
}