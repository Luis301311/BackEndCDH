import { Column, Entity,PrimaryGeneratedColumn } from "typeorm"


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

  @Column()
  groupId: number;

  @Column()
  unitCode: string;
}
