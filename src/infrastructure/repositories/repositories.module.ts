import { Module } from "@nestjs/common";
import { TypeOrmConfigModule } from "../config/typeorm/typerorm.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CarEntity } from "../entities/car.entity";
import { BrandEntity } from "../entities/brand.entity";
import { CarRepositoryOrm } from "./car.repository";

@Module({
    imports: [TypeOrmConfigModule, TypeOrmModule.forFeature([CarEntity, BrandEntity]) ],
    providers: [CarRepositoryOrm],
    exports: [CarRepositoryOrm]
})
export class RepositoryModule{}