import { Product } from "src/products/entities/product.entity";
import { Column, Entity,OneToMany,PrimaryGeneratedColumn } from "typeorm"
@Entity({name :'groups'})
export class Group {
    @PrimaryGeneratedColumn()
    id : number

    @Column()
    name : string

    @OneToMany(() => Product, (product) => product.group)
    products: Product[];
}
