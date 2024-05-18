import { CarConditionDto } from "src/domain/model/car-condition.dto";
import { CarsModel } from "src/domain/model/car.model";
import { CarRepository } from "src/domain/repositories/car.repository";

export class CarUsecase {
    constructor(private carRepository: CarRepository){}

    async getAllCars(): Promise<CarsModel[]>{
        return await this.carRepository.getAllCars();
    }

    async getCar(id: number): Promise<CarsModel>{
        return await this.carRepository.getCar(id);
    }

    async createCar(car: CarsModel): Promise<CarsModel>{
        return await this.carRepository.createCar(car);
    }

    async getCarbycondition(carConditionDto: CarConditionDto): Promise<CarsModel[]>{
        return await this.carRepository.getCarbycondition(carConditionDto);
    }
}