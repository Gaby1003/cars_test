import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { configOrm } from "./typeorm.config";

@Module({
    imports: [TypeOrmModule.forRoot(configOrm)]
})
export class TypeOrmConfigModule{}