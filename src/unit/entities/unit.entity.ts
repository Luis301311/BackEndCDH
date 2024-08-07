import { Product } from "src/products/entities/product.entity";
import { Column, Entity,OneToMany,PrimaryGeneratedColumn } from "typeorm"
@Entity({name :'units'})
export class Unit {
    @PrimaryGeneratedColumn()
    id : string

    @Column()
    name : string

    @OneToMany(() => Product, (product) => product.unit)
    products: Product[];
}

