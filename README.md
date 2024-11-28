# Teste Técnico - Recomendador de Produtos RD Station

Este projeto é parte do desafio técnico para a posição de Desenvolvedor Front-end Júnior/Pleno na RD Station. O objetivo é implementar uma funcionalidade de recomendação de produtos baseada nas preferências do usuário, utilizando React.js para o front-end e json-server para simular uma API RESTful no back-end.

## Tecnologias Utilizadas

- React.js: Biblioteca JavaScript para construção de interfaces de usuário.
- json-server: Ferramenta para simular uma API RESTful.
- Tailwind CSS: Framework de CSS utilitário para estilização e layout responsivo.

## Pré-requisitos

- Node.js: Versão 18.3 ou superior.
- Yarn: Gerenciador de pacotes.

## Instalação

Clone o repositório:
```
git clone https://github.com/Robetjunior/rdstation-product-recommendation.git
```

Navegue até o diretório do projeto:
```
cd rdstation-product-recommendation
```

Instale as dependências:
```
yarn install
```
## Execução
Para iniciar o frontend:
```
npm run start:frontend
```

Para iniciar o backend:
```
npm run start:backend
```

Para iniciar ambos simultaneamente:
```
npm run dev
```

## Testes
Navegue até o diretório do frontend:
```
cd frontend
```

Execute os testes:
```
yarn test
```

## Estrutura do Projeto
- App.js: Componente principal que gerencia a atualização da lista de recomendações com base nas preferências do usuário.
- Form.js: Componente responsável por processar as entradas do usuário e atualizar as recomendações.
- recommendation.service.js: Contém a lógica de negócios para determinar quais produtos devem ser recomendados com base nos critérios fornecidos.


## Autor
Desenvolvido por [José Roberto Ferreira Junior](https://www.linkedin.com/in/jos%C3%A9-roberto-dev/)

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).
