import { Column, Entity,PrimaryGeneratedColumn } from "typeorm"
@Entity({name :'units'})
export class Unit {
    @PrimaryGeneratedColumn()
    id : number

    @Column()
    name : string
}

