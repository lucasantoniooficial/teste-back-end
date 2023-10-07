# Teste back-end NestJs

# Execução usando docker

- Executar o comando: `docker compose up -d`

###### Acessando o container

- Executar o comando: `docker ps`

Usar este comando para ver o container id, preste atenção somente aos 4 primeiros digitos e siga o passo:

- Executar o comando: `docker exec -it {containerId} bash`

o `{containerId}` coloque os 4 primeiros digitos do container.

Desta forma você acessará o terminal do container e agora conseguirá executar o comando:

- Executar o comando: `npx prisma db push && npx prisma db seed`

Desta forma será criado todas tabelas do banco de dados e será populado com os dados das seeds já criadas.


##### OBS: Para caso use sem docker só pular as etapas do docker e partir direto para o passo a passo seguinte

###### Para execução sem docker

seguindo este passo a passo só precisa rodar antes o comando `npm install` e seguir o passo a passo como fosse dentro do terminal do container.