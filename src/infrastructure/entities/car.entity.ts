import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn
} from 'typeorm'
import { BrandEntity } from './brand.entity';


@Entity('cars')
export class CarEntity{
    
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column('varchar')
	model: string;

    @Column('varchar')
	description: string;

    @Column()
	price: number;

    @Column()
	mileage: number;

    @Column()
    brandId: number;

    @ManyToOne(() => BrandEntity, (brand) => brand.cars)
    @JoinColumn({name: 'brandId'})
	brand: BrandEntity
}