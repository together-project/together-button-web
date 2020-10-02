
  

<h1  align="center">Together Lib Web</h1>

<p  align="center">
<strong>A cada 4 minutos no Brasil uma mulher é agredida, não deixe 4 minutos passar.</strong>
</p>

  

![Logo do projeto Together](https://i.imgur.com/xmPPDil.jpg)

  

## Sobre o Projeto

  

Together é um projeto da comunidade para combate a violência doméstica no Brasil.

Para saber mais detalhes sobre o projeto acesse [esse repositório](https://github.com/together-project/together).

  

## Sobre essa biblioteca

  

Para estar mais perto das mulheres que sofrem violência, criamos essa biblioteca na versão web que permite qualquer site ou sistema adicionar um simples e discreto botão de denúncia.

  
![Vídeo do modal na versão desktop e versão mobile](https://raw.githubusercontent.com/together-project/together-button-web/master/assets/web-example.gif)

## Como instalar e utilizar

  

#### Importações modernas

  

1 - Com o seu gerenciador preferido, instale com o comando:

```
yarn add together-button-web
# or
npm install together-button-web
```
  

2 - Importe na página que você gostaria de adicionar o botão

  
```javascript
import TogetherButton from 'together-button-web'
```
  

3 - Adicione o botão de chamada


O botão que vai abrir o modal da Together fica à sua escolha onde e como colocar.

Para que ele funcione como o esperado instancie o objeto do botão:

```javascript
new TogetherButton()
```
No botão adicione a classe "together-btn" e em volta do botão adicione uma div com a classe "content-together"

Exemplo:
```html
<div class="content-together">
  <button class="together-btn"> Violência contra a mulher </button>
</div>
```

* Para o botão funcionar corretamente envolva ele com a div de classe "content-together"

* Para o modal ser chamado no botão é preciso ter a classe "together-btn"

* Teste para ver se sua página não possui CSS conflitantes.


#### Importações clássicas

  

1 - Baixe o projeto pelo endereço:
  

[https://github.com/together-project/together-button-web/archive/master.zip](https://github.com/together-project/together-button-web/archive/master.zip)

  

Adicione no diretório ./dist/ do seu projeto.
  

2 - Importe no projeto

  
```html
  <!-- ... -->
  <script src="dist/together-button-web/dist/together-button.min.js"></script>
</body>
```
  

Ou utilize CDN
```html
  <!-- ... -->
  <script src="https://unpkg.com/together-button-web@0.1.6/dist/together-button.min.js"></script>
</body>
```
 

3 - Instancie o objeto do botão
 
```html
  <!-- ... -->
  <script>
    const togetherButton = new TogetherButton()
  </script>
</body>
```
  

4 - Adicione o botão de chamada


O botão que vai abrir o modal da Together fica à sua escolha onde e como colocar.


No botão adicione a classe "together-btn" e em volta do botão adicione uma div com a classe "content-together"

Exemplo:

```html
<div class="content-together">
  <button class="together-btn"> Violência contra a mulher </button>
</div>
```

* Para o botão funcionar corretamente envolva ele com a div de classe "content-together"

* Para o modal ser chamado no botão é preciso ter a classe "together-btn"

* Teste para ver se sua página não possui css conflitantes.

  

## Exemplos

  - Projeto React
  - Projeto Angular
  - WordPress
  - Site estático
  - Projeto Ruby on Rails 

## Tem alguma dúvida ou precisa de ajuda?

Não exite em tirar dúvidas, você pode criar issues com o seu problema ou dúvida ou contatar o time do projeto para ajudar na implementação do botão.

Email do projeto: contato@togethersolutions.com.br

  
  
  

## Como contribuir

Esse projeto tem a intenção de ser um espaço seguro e acolhedor para contribuições. Caso você esteja lendo esta versão de README, você está pegando o projeto num estágio extremamente inicial, porém empolgante, pois há várias coisas a serem definidas. Então caso queira contribuir, utilize as issues para entender quais pontos ainda não foram resolvidos, conversar conosco e contribuir tanto com idéias técnicas, quanto de quais as melhores formas de realizar.
