# Projeto de Apresentação de Filmes

Este projeto é uma aplicação frontend que exibe informações sobre filmes, consumidas de uma API externa (The MovieDB). A interface é dinâmica, construída com React e Next.js, permitindo aos usuários visualizar dados de filmes de maneira interativa.

## Tecnologias Utilizadas

- **Frontend**: JavaScript, TypeScript, Next.js
- **Bibliotecas**: Axios para consumir a API externa (The MovieDB).

## Links Úteis

- [Frontend hospedado no Vercel](https://api-filmes-ten.vercel.app/)

## Observações

- A aplicação consome dados de uma API externa, por isso pode demorar um pouco para carregar na primeira vez.
- A API do The MovieDB passa por atualizações constantes, o que pode afetar o número de páginas e filmes exibidos.

## Como Usar

### Pré-requisitos

Antes de rodar o projeto localmente, você precisará de algumas ferramentas:

- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/)

### Clonando o Repositório

1. Se ainda não tem o Git instalado, baixe e instale a partir do [link oficial](https://git-scm.com/downloads).
2. Clonando o repositório:

   ```bash
   git clone https://github.com/Torfyz/API-filmes.git
   ```

Isso criará uma cópia local do repositório no seu computador.

### Editor de Código

Recomendamos o uso do [Visual Studio Code](https://code.visualstudio.com/), mas qualquer editor de sua preferência funcionará.

### Instalando as Dependências

Após clonar o repositório, navegue até a pasta do projeto no terminal e execute o seguinte comando para instalar as dependências necessárias:

```bash
npm install
```

### Configurando a API

O link da API está configurado para uma URL local. No código do frontend, você pode alterá-lo para o link da API externa ou mantê-lo como está para uma instância local:

- O link da API pode ser encontrado em `src → Components → Movielist → index.tsx` (linha 26).
- Exemplo de link local: `http://127.0.0.1:8000/ListFilmes/api/filme/`

> **Nota**: O link deve incluir as rotas `/ListFilmes/api/filme/`.

### Rodando o Projeto

Depois de instalar as dependências e configurar o link da API, você pode iniciar o servidor de desenvolvimento local com o seguinte comando:

```bash
npm run dev
```

O projeto começará a rodar localmente em uma porta que será exibida no terminal. Abra o navegador e acesse a URL mostrada para ver a aplicação em funcionamento.

## Estrutura do Projeto

O projeto segue a estrutura padrão do Next.js, com algumas pastas principais:

- **src**: Contém a maior parte da lógica da aplicação, incluindo os componentes React.
  - **Components**: Aqui você encontrará os componentes que compõem a interface, como `Movielist` que é responsável por exibir os filmes dinamicamente.

## Estrutura do Next.js

Next.js organiza os arquivos de maneira que cada página da aplicação é um componente React. Isso permite fácil roteamento e otimização da aplicação.

- Para saber mais sobre a organização de pastas e rotas no Next.js, consulte a [documentação oficial](https://nextjs.org/docs).
- O React, usado como biblioteca base, permite a criação de componentes reutilizáveis que tornam o desenvolvimento e a manutenção do código mais eficientes. Veja mais na [documentação do React](https://reactjs.org/docs/getting-started.html).

## Contribuição

Sinta-se à vontade para contribuir com este projeto! Se você encontrar um bug ou tiver uma sugestão de melhoria, crie uma *issue* ou envie um *pull request*.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
