import { Column, Entity,PrimaryGeneratedColumn } from "typeorm"
@Entity({name :'groups'})
export class Group {
    @PrimaryGeneratedColumn()
    id : number

    @Column()
    name : string
}
