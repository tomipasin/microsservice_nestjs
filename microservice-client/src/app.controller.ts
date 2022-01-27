import { Controller, Get, Inject, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy } from '@nestjs/microservices';
import { Message } from './message.event';

@Controller()
export class AppController {

  /* 
  Cria um construtor injetando o serviço HELLO_SERVICE e aguarda a conexão dele na inicialização.
  Na sequencia cria os endpoints deste cliente.
  Cada endpoint emite uma msg no padrão definido em message.event.ts.
  O retorno de cada endpoint é o que será exeibido na tela. 
  A mensagem é exibida no console. 
  */
  constructor(@Inject ('HELLO_SERVICE') private readonly client: ClientProxy) {}

  async onApplicationBootstrap(){
    await this.client.connect();
  }

  //Endpoints
  @Get()
  getHello(){
    const id : number = new Date().getMilliseconds();
    const message = {
      message: "Olá!!! Experimente os seguintes endpoints:",
      ed1: "/sum/:n1/:n2   ---  Para somar dois números;",
      ed2: "/hello/:name   ---  Para personalizar o seu hello!"
    }
    this.client.emit<any>('instructions', new Message(message, id));
    return message;
  }

  @Get('/sum/:n1/:n2')
  getSum(@Param() params){
    function addNumbers(a: number, b: number) {
      return a + b;
   }
    let sum: number = addNumbers(parseInt(params.n1), parseInt(params.n2));
    const message = `Soma de ${params.n1} e ${params.n2} é ${sum}`;
    const id = sum * parseInt(params.n1);
    this.client.emit<any>('Sum', new Message(message, id));
    return message;
  }

  @Get('/hello/:name')
  getHell(@Param() params){
    const message = `Olá ${params.name}!!! `;
    const id : number = new Date().getMilliseconds();
    this.client.emit<any>('Hell', new Message(message, id));
    return message;
  }

}
