import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity({ name: 'taxs' })
export class Tasx {
    @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'int' })
  type: number;

  @Column({ type: 'varchar', length: 50 })
  percentage: string;
}
