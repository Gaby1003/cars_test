import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import * as dotenv from 'dotenv'
import * as path from 'path'

dotenv.config()


export const configOrm: TypeOrmModuleOptions = {
    type: 'mysql',
    host: process.env.HOST,
    port:  Number(process.env.PORT),
    username:  process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.NAME,
    entities: [path.join(__dirname, '../../**/*.entity.{ts,js}')],
    synchronize: false,
    driver: require('mysql2')
}