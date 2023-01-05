import { roomRepository } from "../repositories/room.repository";
import { videoRepository } from "../repositories/video.repository";

export class VideoService {
    async create(body:any, room_id:any){

        const room = await roomRepository.findOneBy({id: Number(room_id)})
        if(!room) throw Error

        const newVideo = videoRepository.create({...body, room})
        await videoRepository.save(newVideo)

        return newVideo
    }
}