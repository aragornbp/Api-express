import { roomRepository } from "../repositories/room.repository";
import { subjectRepository } from "../repositories/subject.repository";

export class RoomService {
    async create(body:any){
        const newRoom = roomRepository.create(body)
        await roomRepository.save(newRoom)

        return newRoom
    }

    async addSubject(body:any, room_id:any){
        const {subject_id} = body
        const room = await roomRepository.findOneBy({id: Number(room_id)})
        if(!room) throw Error

        const subject = await subjectRepository.findOne({where: {id: subject_id}})
        if(!subject) throw Error


        const roomUpdate = {...room, subjects: [subject]}
        await roomRepository.save(roomUpdate)
        return room
    }

    async index(){
        const rooms = await roomRepository.find({relations: {subjects: true}})
    }
}