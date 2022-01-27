import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Transport, ClientsModule } from '@nestjs/microservices';


/* 
Registra o microsserviço de nome HELLO_SERVICE via TCP
*/
@Module({
  imports: [
    ClientsModule.register([
     { name: 'HELLO_SERVICE', transport: Transport.TCP },
    ]),
  ],
   controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}