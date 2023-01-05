import {Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn, Column} from 'typeorm'
import { Subject } from './subjects'
import { Video } from './video.entity'

@Entity('rooms')
export class Room {
  @PrimaryGeneratedColumn()
  id: number

  @Column({type: 'text'})
  name: string

  @Column({type: 'text', nullable: true})
  description: string

  @OneToMany(()=> Video, video=> video.room )
  videos: Video[]

  @ManyToMany(()=> Subject, subject => subject.rooms)
  subjects: Subject[]

}
  
