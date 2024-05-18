import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany
} from 'typeorm'
import { CarEntity } from './car.entity';

@Entity('brands')
export class BrandEntity{

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column('varchar')
	name: string;

    @OneToMany(() => CarEntity, (car) => car.brand)
    cars: CarEntity[]
}