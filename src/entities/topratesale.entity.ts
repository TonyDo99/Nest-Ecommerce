import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tb_top_sale' })
export class TopSaleEntity {
  @PrimaryGeneratedColumn()
  public readonly _id: string;

  @Column({ type: 'varchar', name: 'title' })
  public readonly title: string;

  @Column({ type: 'varchar', name: 'text' })
  public readonly text: string;

  @Column({ type: 'varchar', name: 'rating' })
  public readonly rating: string;

  @Column({ type: 'varchar', name: 'btn' })
  public readonly btn: string;

  @Column({ type: 'varchar', name: 'img' })
  public readonly img: string;

  @Column({ type: 'varchar', name: 'price' })
  public readonly price: string;

  @Column({ type: 'varchar', name: 'color' })
  public readonly color: string;

  @Column({ type: 'varchar', name: 'shadow' })
  public readonly shadow: string;
}
