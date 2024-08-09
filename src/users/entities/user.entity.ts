import { Entity,PrimaryColumn,  Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';

@Entity('users')
export class User {
    @PrimaryColumn({ type: 'varchar', length: 11, unique: true })
    id: string;

    @Column({ type: 'varchar', length: 100, unique: true })
    email: string;

    @Column({ type: 'varchar', length: 100 })
    password: string;

    @Column({ type: 'varchar', length: 50, nullable: true })
    firstName: string;

    @Column({ type: 'varchar', length: 50, nullable: true })
    lastName: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @Column({ type: 'varchar', length: 50, nullable: true })
    rol: string;

}
