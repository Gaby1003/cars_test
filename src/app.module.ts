import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsecaseProxyModule } from './infrastructure/usecase-proxy/usecase-proxy.module';
import { TypeOrmConfigModule } from './infrastructure/config/typeorm/typerorm.module';
import { CarModule } from './presentation/car/car.module';

@Module({
  imports: [UsecaseProxyModule.register(), TypeOrmConfigModule, CarModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
