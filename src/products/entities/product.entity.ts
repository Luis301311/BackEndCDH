import { Group } from "src/group/entities/group.entity";
import { Unit } from "src/unit/entities/unit.entity";
import { Column, Entity,JoinColumn,ManyToOne,PrimaryGeneratedColumn } from "typeorm"


@Entity({ name: 'products' })
export class Product {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ unique: true })
  code: string;

  @Column({ unique: true })
  name: string;

  @Column()
  type: string;

  @Column()
  stock_control: boolean;

  @Column()
  active: boolean;

  @Column()
  tax_classification: string;

  @Column()
  taxes_included: boolean;

  @Column()
  consumption_tax_value: number;

  @Column()
  unit_label: string;

  @Column()
  reference: string;

  @Column()
  barcode: string;

  @Column()
  brand: string;

  @Column()
  tariff: string;

  @Column()
  model: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created: Date;

  @ManyToOne(() => Group, (group) => group.products)
  @JoinColumn({ name: 'groupId' })
  group: Group;

  @ManyToOne(() => Unit, (unit) => unit.products)
  @JoinColumn({ name: 'unitCode' })
  unit: Unit;
}
