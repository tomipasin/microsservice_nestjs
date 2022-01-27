# Microsserviço usando NestJS

A ideia aqui é fazer um "Hello World!" usando microsserviços (ms) além de acrescentar outras características ao código. 

Usei para isso somente o framework NestJS pois ele já tem um pacote específico para ms. 

## Como testar?

1. Instale o NestJS (caso ainda não tenha na tua máquina): `npm i -g @nestjs/cli`;
2. Clona este repositório e executa `npm i` em cada uma das pastas.

A estrutura dos pastas será esta:
```
-> microservice-app
-> microservice-client
readme.MD
```
São duas aplicações distintas onde uma é considerada como "aplicação central" e a outra uma "aplicação cliente" que comunica com a central baseada em evento.

3. Na pasta `microservice-app` execute o comando `npm run start`;
4. Na pasta `microservice-client` execute também o comando `npm run start`. A aplicação cliente iniciará na porta 3000 e os seguintes endpoints estão disponíveis:

* GET `/`: 
Exibe uma mensagem de instruções.

* GET `/hello/:name`: 
Ao enviar um nome como parâmetro recebe na tela uma mensagem de "Olá [nome]!!!" e no console um objeto como este:
```` JS
{ text: 'Olá Tomi!!! ', id: 588 }
````

* GET `/sum/:n1/:n2`: 
Ao enviar dois números como parâmetro recebe na tela uma mensagem de "Soma de [n1] e [n2] é [x]" e no console um objeto como este:
```` JS
{ text: 'Soma de 2 e 867 é 869', id: 1738 }
````

