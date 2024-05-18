import { Body, Controller, Get, Inject, Param, Post } from "@nestjs/common";
import { CarUsecase } from "src/application/usecase/car.usecase";
import { CarsModel } from "src/domain/model/car.model";
import { UsecaseProxy } from "src/infrastructure/usecase-proxy/usecase-proxy";
import { UsecaseProxyModule } from "src/infrastructure/usecase-proxy/usecase-proxy.module";
import { CarConditionDto } from "../../domain/model/car-condition.dto";

@Controller('cars')
export class CarController {

    constructor(
        @Inject(UsecaseProxyModule.CAR_USECASE)
        private readonly carUsecase: UsecaseProxy<CarUsecase>
    ) { }

    @Get('')
    async getAllCars() {
        try {
            const result = await this.carUsecase.getInstace().getAllCars()
            return {
                data: result,
                message: 'Respuesta ok',
                status: 200
            }
        } catch (error) {
            return {
                error: error,
                message: 'Error consultando los carros',
                status: 500
            }
        }
    }

    @Get('condition')
    async getCarbycondition(@Body() carConditionDto: CarConditionDto) {
        try {
            const result = await this.carUsecase.getInstace()
                .getCarbycondition(carConditionDto)
            return {
                data: result,
                message: 'Respuesta ok',
                status: 200
            }
        } catch (error) {
            return {
                error: error,
                message: 'Error consultando los carros',
                status: 500
            }
        }
    }

    @Get(':id')
    async getCar(@Param('id') id: number) {
        try {
            const result = await this.carUsecase.getInstace().getCar(id)

            const response = result == null ? {
                error: `El carro de id ${id} no existe`,
                message: 'Error',
                status: 500}
                : {
                    data: result,
                    message: 'Respuesta ok',
                    status: 200
                }
            return response
        } catch (error) {
            return {
                error: error,
                message: 'Error consultando el carro',
                status: 500
            }
        }
    }

    @Post()
    async createCar(@Body() car: CarsModel) {
        try {
            const result = await this.carUsecase.getInstace().createCar(car);
            return {
                data: result,
                message: 'Respuesta ok',
                status: 200
            }
        } catch (error) {
            return {
                error: error,
                message: 'Error creando el carro',
                status: 500
            }
        }
    }

}