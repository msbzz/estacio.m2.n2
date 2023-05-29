 
## Estacio| Missão Prática | Nível 1 | Mundo 2

## Descrição

  Projeto dividido em procedimentos que estarão se completando no final ou seja, no procedimento 4. 
  A implementação é voltada a visualização de um site de receitas que contem elementos CSS e 
  do framework Bootstrap para que tenha comportamento responsivo
  
  obs: as fontes e titulos foram personalizados 
 
## Funcionalidades

👉 1º Procedimento | Página Inicial

 Crie um diretório com o nome "receitas" e abra o Visual Studio Code;
 Crie uma página com o nome "home.html", no ambiente de edição;
 Defina a estrutura básica da página, digitando "html" seguido de "CTRL + Espaço",
 selecionando a opção "HTML:5";

 ![image](https://github.com/msbzz/estacio.m2.n1/assets/44148209/7a9ef2a1-8226-4a75-a0a4-e7ef08195f25)


Modifique o conteúdo do arquivo para obter as seguintes características:
    a) Alterar a linguagem para pt-br

    b) Incluir elementos semânticos para estruturar o site

    c) Definir uma área para o menu

    d) Copiar uma imagem png para o diretório, definindo a logotipo do site

    e) Definir a área principal com a logotipo, título e mensagem de boas-vindas

    f) Definir uma área de rodapé com informação de copyright

Crie o arquivo "formatos.css" para formatação das páginas:
    a) Definir uma classe para a logotipo, com largura e altura de 50 pixels

    b) Definir a formatação das áreas semânticas

    c) Definir características tipográficas globais

    d) Explorar as possibilidades da visualização no modo flex

    e) Posicionar adequadamente as áreas semânticas

Ajuste as características para obter uma página como o exemplo abaixo:

 ![image](https://github.com/msbzz/estacio.m2.n1/assets/44148209/9701e9f7-3a61-42eb-8af1-3e017ea1a360)


Por fim, verifique os resultados obtidos através de um navegador.


👉 2º Procedimento | Página de Receitas

Crie uma página com o nome "receitas.html", no ambiente de edição;
Defina a estrutura básica da página, assim como realizado no primeiro procedimento;
Modifique o conteúdo do arquivo para obter as seguintes características:
    a) Alterar a linguagem para pt-br

    b) Incluir elementos semânticos para estruturar o site

    c) Definir uma área para o menu

    d) Definir a área principal com a apresentação do conjunto de receitas

     e) Apresentar as receitas em divs, organizadas no modo flex

    f) Organizar cada div com a inclusão de nome da receita, foto do prato, itens
utilizados e modo de preparo

    g) Definir uma área de rodapé com informação de copyright

Inclua o arquivo "formatos.css", para utilizar as formatações globais;
Crie o arquivo "receitas.css" para formatação da área de receitas:
    a) Definir uma área para agrupar os painéis das receitas, com base no modo flex,
garantindo a responsividade

    b) Definir a formatação dos painéis de receitas

    c) Definir a formatação para o nome da receita, foto do prato, lista de itens e modo
de preparo

    d) Estabelecer dimensões fixas para os painéis

    e) Utilizar barra de rolagem vertical na área principal, prevendo o aumento do
quantitativo de receitas, no modo automático

Ajuste as características para obter uma página como o exemplo abaixo:

 ![image](https://github.com/msbzz/estacio.m2.n1/assets/44148209/28d6a02b-d4a5-4012-909a-5c12edbba752)

 
Material de orientações para desenvolvimento da missão
prática do 1º nível de conhecimento.

 Por fim, verifique os resultados obtidos através de um navegador.

👉 3º Procedimento | Formulário e Navegação

Crie uma página com o nome "cadastro.html", no ambiente de edição;
Defina a estrutura básica da página, conforme procedimentos anteriores;
Modifique o conteúdo do arquivo para obter as seguintes características:
    a) Alterar a linguagem para pt-br

    b) Incluir elementos semânticos para estruturar o site

    c) Definir uma área para o menu

    d) Definir a área principal com o título e um formulário de cadastro

    e) Adotar classes Bootstrap na formatação da página

    f) Utilizar os campos nome, e-mail, rua, número, complemento, cidade, estado e CEP,
todos obrigatórios

    g) Utilizar corretamente os tipos para cada campo de entrada, de acordo com os
padrões do HTML5

    h) Enviar a informação do formulário para um endereço de e-mail

    i) Definir uma área de rodapé com informação de copyright

    j) Definir a cor de fundo do corpo em uma tag "style"

    k) Utilizar o modelo de colunas do Bootstrap para organizar o conteúdo do formulário
e da página como um todo

    l) Definir o modo de exibição da área principal como "container-fluid"

Acrescente um menu de navegação na página:
    a) Posicionar na área semântica de topo (header)

    b) Utilizar listas para organizar os links para as três páginas

    c) Formatar com base nas classes do Bootstrap (navbar)

    d) Sinalizar a página ativa no menu

Inclua a folha de estilos do Bootstrap, para utilizar as classes do framework
    a) Utilizar os links para inclusão do Bootstrap, via CDN, que estão disponíveis em:
https://getbootstrap.com.br/

Altere o arquivo "formatos.css" para de adequar às novas dimensões utilizadas:
    a) Acrescentar overflow-y automático para a área principal

    b) Utilizar as dimensões 60px, calc(100vh - 100px) e 25px, respectivamente, para as
áreas header, main e footer

    c) Alterar a área de exibição do navegador para observar o surgimento da barra de
rolagem quando o espaço central for ultrapassado

Ajuste as características para obter uma página como o exemplo abaixo:

 ![image](https://github.com/msbzz/estacio.m2.n1/assets/44148209/04083ff6-1773-405c-9baa-adb0ae6926ef)


Por fim, verifique os resultados obtidos através de um navegador.

👉 4º Procedimento | Finalização do Site

Modifique as outras duas páginas, para incluir no menu:
    a) Acrescentar o código do menu na área de topo

    b) Incluir o link para a folha de estilos do Bootstrap

    c) Sinalizar a página ativa no menu

Modifique o sistema de painéis da página "receitas.html" para o uso do Bootstrap:
    a) Utilizar a formatação do painel com a classe "card", e especificar a largura em
200px via atributo "style"

    b) Posicionar a imagem no topo, com a classe "card-img-top"

    c) Colocar a parte textual em uma div "card-body", formatando o título com a classe
"card-title" e colocando ingredientes e preparo em "card-text"

    d) Separar ingredientes e preparo com um elemento "hr"

Ajuste as características para obter páginas como os exemplos abaixo:

 ![image](https://github.com/msbzz/estacio.m2.n1/assets/44148209/88774f79-ce4c-44eb-bd37-eb8683f88a69)


  ![image](https://github.com/msbzz/estacio.m2.n1/assets/44148209/3e8d6398-8e42-4158-ad43-ea6718785015)


## Pré-requisitos
Antes de iniciar, verifique se você possui os seguintes requisitos:
- Navegador web atualizado (recomenda-se o Google Chrome, Mozilla Firefox ou Microsoft Edge)
 

## Instalação
Siga estas etapas para instalar e executar o projeto em sua máquina local:

1. Clone o repositório: 
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   ```
   
2. Navegue até o diretório do projeto:
   ```bash
   cd nome-do-repositorio (procedimento1,procedimento1 etc)
   ```
   
3. Abra o arquivo `index.html` em seu navegador.

## Tecnologias utilizadas
- HTML
- Bootstrap
- CSS
- JavaScript

## Estrutura de diretórios
A estrutura de diretórios do projeto é organizada da seguinte forma:

```
nome-do-repositorio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── img/
│   └── imagem1.jpg
│   └── imagem2.png
└── README.md
```

## Contribuição
Contribuições são bem-vindas! Se você quiser colaborar com este projeto, siga as etapas abaixo:

1. Faça um fork do projeto
2. Crie uma branch para sua nova feature (`git checkout -b feature/nova-feature`)
3. Faça o commit das suas alterações (`git commit -am 'Adicione uma nova feature'`)
4. Envie para o repositório remoto (`git push origin feature/nova-feature`)
5. Abra uma Pull Request

## Licença
Este projeto está licenciado sob a [descreva a licença utilizada]. Consulte o arquivo [LICENSE](LICENSE) para obter mais informações.

## Contato
- [Seu nome](mailto:seu-email@exemplo.com)
- [Link do projeto](https://github.com/seu-usuario/nome-do-repositorio)
