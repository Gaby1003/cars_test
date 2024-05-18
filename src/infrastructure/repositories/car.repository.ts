import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CarsModel } from "src/domain/model/car.model";
import { CarRepository } from "src/domain/repositories/car.repository";
import { CarEntity } from "../entities/car.entity";
import { Repository } from "typeorm";
import { CarConditionDto } from "src/domain/model/car-condition.dto";

@Injectable()
export class CarRepositoryOrm implements CarRepository{
    
    constructor(
        @InjectRepository(CarEntity)
        private readonly carRepository: Repository<CarEntity>
    ){}


    async getCarbycondition(carConditionDto: CarConditionDto): Promise<CarsModel[]> {
        const cars = await this.carRepository.find({where: {
            model: carConditionDto.model, 
            price: carConditionDto.price, 
            mileage: carConditionDto.mileage}}); 
        return cars.map( (car) => this.toCarsModel(car));
    }
    
    
    async getAllCars(): Promise<CarsModel[]> {
        const cars = await this.carRepository.find(); 
        return cars.map( (car) => this.toCarsModel(car));
    }

    async getCar(id: number): Promise<CarsModel> {
        const car = await this.carRepository.findOneBy({id}); 
        return this.toCarsModel(car)
    }

    async createCar(car: CarsModel): Promise<CarsModel> {
        const carToInsert = await this.carRepository.save(car)
        return carToInsert
    }

    toCarsModel(carEntity: CarEntity){
        try {
            let car = new CarsModel()
            car.id = carEntity.id
            car.model= carEntity.model
            car.description=carEntity.description
            car.price=carEntity.price
            car.mileage=carEntity.mileage
            car.brandId=carEntity.brandId
            return car;
        } catch (error) {
            return null;
        }
    }

}