import { iCreateSubject } from "../interfaces/subject.create.interface";
import { subjectRepository } from "../repositories/subject.repository";

export class SubjectService {
    async create(body: any){
        const newSubject = subjectRepository.create(body)
        await subjectRepository.save(newSubject)
        return newSubject
    }
}
