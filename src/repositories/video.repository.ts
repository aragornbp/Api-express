import { AppDataSource } from "../data-source";
import { Video } from "../entities/video.entity";

export const videoRepository = AppDataSource.getRepository(Video)