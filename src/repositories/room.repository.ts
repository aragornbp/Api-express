import { AppDataSource } from "../data-source";
import { Room } from "../entities/roms.entity";

export const roomRepository = AppDataSource.getRepository(Room)