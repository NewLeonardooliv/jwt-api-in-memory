# JWT Route in Memory

## Descrição
Este é um aplicativo simples desenvolvido como parte de exercícios práticos. O objetivo principal é criar um aplicativo Express.js que demonstre a autenticação usando tokens JWT (JSON Web Tokens) e a capacidade de registrar novos usuários de forma segura.

## Exercício 1
Neste exercício, você criará um aplicativo Express.js com uma única rota protegida. Implemente a autenticação usando tokens JWT e verifique se o usuário pode acessar a rota protegida. Certifique-se de incluir:

Rota de login para gerar tokens JWT.
Rota protegida que requer um token JWT válido para acesso.

## Exercício 2
Neste exercício, você adicionará a capacidade de registrar novos usuários. Os novos usuários devem fornecer um nome de usuário e uma senha ao se cadastrarem. Certifique-se de incluir:

Rota para criar uma nova conta de usuário.
Validação para garantir que o nome de usuário seja exclusivo.
Armazenamento seguro das senhas dos usuários.
Tecnologias Utilizadas
Node.js
Express.js
JSON Web Tokens (JWT)
Configuração
Para executar este aplicativo em sua máquina, siga estas etapas:


Para autenticar, faça uma solicitação POST para /login com as credenciais do usuário.
Após a autenticação bem-sucedida, você receberá um token JWT.
Use o token JWT para acessar a rota protegida em /protected.
Exemplo de solicitação de autenticação:
