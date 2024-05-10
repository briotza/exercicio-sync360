# Backend do Projeto Sync360

Este é o backend do projeto Sync360, uma aplicação web desenvolvida com Node.js e Express. Este backend é responsável por fornecer uma API para manipulação dos dados dos usuários no banco de dados MySQL.

## Instalação

Antes de executar o backend, você precisa instalar as dependências. Execute o seguinte comando na raiz do diretório do backend (server):

```
npm install
```

## Configuração do Banco de Dados

Para executar este projeto localmente, siga as instruções abaixo para configurar o banco de dados MySQL:

### Instalação do MySQL:

Se você ainda não possui o MySQL instalado localmente, faça o download e siga as instruções de instalação disponíveis no [site oficial do MySQL](https://www.mysql.com/).

### Criação do Banco de Dados:

1. Abra o terminal ou prompt de comando e conecte-se ao servidor MySQL utilizando o comando `mysql -u root -p`.
2. Crie um novo banco de dados com o nome `sync360db` utilizando o comando `CREATE DATABASE sync360db;`.

### Criação da Tabela de Usuários:

Utilize o seguinte comando para criar a tabela de usuários no banco de dados `sync360db`:

```sql
CREATE TABLE sync360db.usuarios (
  id INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(60) NOT NULL,
  idade INT NOT NULL,
  bio TEXT(400) NOT NULL,
  rua VARCHAR(45) NOT NULL,
  bairro VARCHAR(45) NOT NULL,
  estado VARCHAR(2) NOT NULL,
  PRIMARY KEY (id)
);
```

### Inserção de Dados de Exemplo:

Execute o seguinte comando SQL para inserir um usuário de exemplo na tabela:

```sql
INSERT INTO sync360db.usuarios (nome, idade, bio, rua, bairro, estado) 
VALUES ('Ciano Meliunas da Silva', 22, 'Olá meu nome é Ciano e essa bio é um teste. Obrigado por acessar meu projeto!', 'Rua teste 555', 'Vila Teste', 'RJ');
```

### Configuração das Variáveis de Ambiente:

Certifique-se de configurar as variáveis de ambiente para a conexão com o banco de dados no backend do projeto através do arquivo db.js, fazendo as alterações necessárias nos campos:

```js
host: "localhost",
user: "root",
password: "sua_senha_do_mysql",
database: "sync360db"
```

## Execução

Para iniciar o servidor, execute o seguinte comando na raiz do diretório do backend (server):

```
npm start
```

O servidor será iniciado na porta 8800 por padrão.