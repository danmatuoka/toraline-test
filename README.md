## API de orçamento

- Middleware que, além de retornar uma listagem de usuários e produtos, também retorna um orçamento baseado na taxa do usuário selecionado e no valor dos produtos escolhidos.

## Instalação
- Clone o repositório
```
git clone  <git hub template url> <project_name>
```

- Instale as dependencias 
```
cd <project_name>
yarn
```

- Rode a aplicação
```
yarn dev
```

## **Rodando os testes** 

Para rodar os testes é necessário que no seu terminal, você esteja dentro do diretório do projeto.

Estando no terminal e dentro do caminho correto, você poderá utilizar o comando a seguir:
````
yarn test
````

## Endpoints
### Listar usuários

`GET /users - status 200`

Response
```
   [
	{
		"id": 1,
		"name": "cvRhuZicvV",
		"tax": 79
	},
	{
		"id": 2,
		"name": "P5hBDBonm3",
		"tax": 121
	},
  ...
  ]
  ```
 
### Listar produtos
  `GET /products - status 200`

Response
```
 [
	{
		"id": 1,
		"name": "explicabo alias",
		"price": 6945
	},
	{
		"id": 2,
		"name": "nostrum veritatis",
		"price": 2435
   },
   ....
  ]
  ```
  
  ### Realizar o calculo do orçamento
  `POST /users/calculate/:id`
  
  Request
  
  ```
  {
	"productsIds": [1,2]
}
  
  ```

Response - status 200
```
{
	"values": [
		{
			"productId": 1,
			"value": 5486.55
		},
		{
			"productId": 2,
			"value": 1923.65
		}
	],
	"total": 7410.2
}
  ```
  
  
  [⬆ Voltar ao topo](#API-de-orçamento)<br>
  
