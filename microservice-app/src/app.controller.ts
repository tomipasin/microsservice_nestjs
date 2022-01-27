import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern } from '@nestjs/microservices';

/**
 * A controller aqui da app central aguarda um eventPattern com o pattern definido em cada emit 
 * do app.controller.ts de cada cliente.
 * Neste caso o que faz é dar um log no que vier de dado.  * 
 */

@Controller()
export class AppController {

  constructor() {}
  
  @EventPattern('instructions')
  
  async handleMessagePrinted(data: Record<string, unknown>) {
    console.log(data);
  }

  @EventPattern('Sum')
  
  async handleSum(data: Record<string, unknown>) {
    console.log(data);
  }

  @EventPattern('Hell')
  
  async handleHell(data: Record<string, unknown>) {
    console.log(data);
  }


}
