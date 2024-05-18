import { Module } from "@nestjs/common";
import { CarController } from "./car.controller";
import { UsecaseProxyModule } from "src/infrastructure/usecase-proxy/usecase-proxy.module";

@Module({
    imports:[UsecaseProxyModule.register()],
    controllers: [CarController]
})
export class CarModule{}