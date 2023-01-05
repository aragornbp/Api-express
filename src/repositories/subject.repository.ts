import { Subject } from "../entities/subjects";
import { AppDataSource } from "../data-source";


export const subjectRepository = AppDataSource.getRepository(Subject)