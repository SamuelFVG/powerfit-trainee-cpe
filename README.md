# Ponto Eletrônico - Sistema Web para Academia

Este é o repositório do projeto de sistema web de ponto eletrônico para clientes e usuários de uma academia, desenvolvido como parte do processo seletivo da CPEJR e chamado de **_PowerFit_**

## Participantes

### Membros

- Samuel Gonçalves
- Yuri Bastista
- Guilherme Argueso
- João Resende
- Vincius Lima

### Tutores

- André Castro
- Bruno Cimberlis

### Mentora

- Laura Pires

## Contexto

O dono de uma academia entrou em contato com a CPEJR buscando uma solução para monitorar o tempo de trabalho de seus funcionários e a movimentação de seus clientes. Foi proposto ao cliente adquirir o Doti, um produto da CPEJR que funciona como um ponto eletrônico, registrando os horários de trabalho dos funcionários e das atividades realizadas pelos clientes.

## Proposta da Case

Nosso grupo foi responsável por desenvolver uma versão simplificada do Doti, com a identidade visual da empresa do cliente. Apresentamos as seguintes funcionalidades:

### Home

A página principal do sistema exibe um carrossel com fotos de avisos, promoções e combos de planos. Além disso, há uma seção que mostra todos os funcionários e clientes logados, incluindo o próprio usuário. Essa seção exibe há quanto tempo cada pessoa está logada e suas informações, como nome, cargo/cliente e atividade. Na home, também é possível iniciar uma sessão no ponto e, com isso, começar a contar o tempo no qual o usuário está fazendo alguma atividade.

### Cadastro

A página de cadastro permite que novos usuários se registrem no sistema. São solicitados os seguintes dados: nome, email, senha (com confirmação) e cargo. O cadastro é realizado com suporte ao backend, com armazenamento dos dados no banco de dados e validação.

### Login

A página de login permite que os usuários acessem o sistema fornecendo seu email e senha. O login é realizado com suporte ao backend e validação.

### Editar

A página de edição permite que o usuário faça alterações em seus dados, como nome, cargo/cliente e atividade.

### Logout

Os usuários podem sair do sistema utilizando a funcionalidade de logout. Além disso, eles também podem fazer com que a contagem de tempo pare por meio da home.

### Home sem Login

Uma página de home inicial foi criada para usuários que não estão logados. Ela funciona como uma página de introdução ao sistema e à PowerFit.

### Responsividade

O sistema foi desenvolvido para ser intuitivo e responsivo em todos os tipos de dispositivos, permitindo uma experiência de uso consistente em diferentes aparelhos.

## Instalação e Uso

Para executar o projeto localmente, siga as instruções abaixo:

1. Clone este repositório em sua máquina local.
2. Certifique-se de ter o ambiente de desenvolvimento configurado corretamente (incluindo Node.js e npm).
3. Navegue para a página **./powerfit** e execute o comando npm install para instalar as dependências do projeto.
4. Execute o comando **npm run dev** para iniciar o front-end e **npm start** para iniciar o servidor local, do qual o código pode ser encontrado no repositório [Powerfit Trainee CPE](https://github.com/SamuelFVG/powerfit-trainee-cpe-backend).
5. Acesse o sistema no seu navegador através do endereço especificado pelo comando **npm run dev**.

## Tecnologias Utilizadas

- Node.Js
- MongoDB
- Express.js
- React.js
