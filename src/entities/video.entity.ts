import {Entity,JoinColumn, ManyToOne, Column, PrimaryGeneratedColumn} from 'typeorm'
import { Room } from './roms.entity'

@Entity()
export class Video{
  @PrimaryGeneratedColumn()
  id: number

  @Column({type: 'text'})
  title: string

  @Column({type: 'text'})
  url: string


  @ManyToOne(()=> Room, room => room.videos)
  @JoinColumn({name: 'room_id'})
  room: Room
}