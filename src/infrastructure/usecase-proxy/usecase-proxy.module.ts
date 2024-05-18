import { DynamicModule, Module } from "@nestjs/common";
import { RepositoryModule } from "../repositories/repositories.module";
import { CarRepositoryOrm } from "../repositories/car.repository";
import { UsecaseProxy } from "./usecase-proxy";

@Module({
    imports: [RepositoryModule]
})
export class UsecaseProxyModule{
    static CAR_USECASE = 'carUsecaseProxy'

    static register(): DynamicModule{
        return{
            module: UsecaseProxyModule,
            providers: [{
                inject: [CarRepositoryOrm],
                provide: UsecaseProxyModule.CAR_USECASE,
                useFactory: (carRepostoryOrm: CarRepositoryOrm) =>
                    new UsecaseProxy(carRepostoryOrm)
            }],
            exports: [UsecaseProxyModule.CAR_USECASE]
        }
    }
}