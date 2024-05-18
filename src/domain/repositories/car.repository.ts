import { CarConditionDto } from "../model/car-condition.dto";
import { CarsModel } from "../model/car.model";

export interface CarRepository{
    getAllCars(): Promise<CarsModel[]>;
    getCar(id: number): Promise<CarsModel>;
    createCar(car: CarsModel): Promise<CarsModel>;
    getCarbycondition(carConditionDto: CarConditionDto): Promise<CarsModel[]>;
}