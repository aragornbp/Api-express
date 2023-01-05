import {Entity,ManyToMany,JoinTable, PrimaryGeneratedColumn, Column} from 'typeorm'
import { Room } from './roms.entity'


@Entity('subjects')
export class Subject {
  @PrimaryGeneratedColumn()
  id: number

  @Column({type: 'text'})
  name: string

  @ManyToMany(()=> Room, room => room.subjects)
  @JoinTable({
    name: 'room_subject',
    joinColumn: {
      name: 'room_id',
      referencedColumnName: 'id'
    },
    inverseJoinColumn: {
      name: 'subject_id',
      referencedColumnName: 'id'
    }
  })
  rooms: Room[]
}