# Projeto de ToDo List com Docker

Este projeto consiste em uma aplicação de lista de tarefas (ToDo List) desenvolvida em Node.js e Express, utilizando um banco de dados MySQL, e containerizada com Docker.

## Pré-requisitos

- Docker instalado e configurado na máquina local.

## Estrutura do Projeto

O projeto possui os seguintes arquivos e diretórios:

- `server.js`: Contém o código principal da aplicação Node.js, incluindo a configuração do servidor Express e as rotas para interação com o banco de dados.
- `Dockerfile`: Arquivo utilizado para criar a imagem Docker da aplicação.
- `docker-compose.yaml`: Arquivo de configuração do Docker Compose, responsável por definir e executar os serviços necessários para o funcionamento da aplicação.
- `.gitignore`: Arquivo que lista os arquivos e diretórios que devem ser ignorados pelo controle de versão Git.
- `script.js`: Arquivo JavaScript responsável por interagir com a interface do usuário da aplicação.
- `index.html`: Arquivo HTML que contém a estrutura da página da aplicação.

## Como Executar

Para executar a aplicação, siga os passos abaixo:

1. Clone o repositório do projeto para sua máquina local.
2. Navegue até o diretório raiz do projeto.
3. Execute o seguinte comando para iniciar os serviços Docker:

```bash
docker-compose up -d
```

Este comando irá criar e iniciar os contêineres Docker definidos no arquivo `docker-compose.yaml`.

4. Após a execução bem-sucedida do comando acima, a aplicação estará disponível em [http://localhost:8080](http://localhost:8080) em seu navegador.

## Funcionalidades

- Adicionar uma nova tarefa à lista.
- Visualizar todas as tarefas cadastradas na lista.
- Os dados das tarefas são armazenados em um banco de dados MySQL.

## Observações

- Certifique-se de que as portas necessárias (nesse caso, a porta 8080) não estejam sendo utilizadas por outros serviços em sua máquina local, para evitar conflitos de portas.
- Caso deseje realizar modificações no projeto, certifique-se de ter conhecimento sobre Docker e Docker Compose para lidar com os arquivos de configuração adequados.

Com isso, você terá o projeto de ToDo List executando em sua máquina local de forma containerizada com Docker.

Se tiver alguma dúvida ou problema, sinta-se à vontade para abrir uma issue no repositório do projeto ou entrar em contato com os mantenedores.

Divirta-se com o seu novo ToDo List! 🚀