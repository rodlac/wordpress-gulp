#wordpress-gulp

wordpress-gulp é um mini projeto no qual venho trabalhando com o objetivo de facilitar e automatizar algumas das tarefas de front-end mais comuns no desenvolvimento de temas para WordPress. Também pretendo torná-lo um bom ponto de partida para o desenvolvimento de temas por completo, isto é, front-end e back-end.

Qualquer colaboração será bem-vinda!

##Tarefas automatizadas

Obiviamente, estou automatizando as tarefas com o [gulp.js](http://gulpjs.com/). Até o momento, as tarefas que estão sendo automatizadas são:

+ Concatenação e minificação de arquivos CSS
+ Concatenação e minificação de arquivos JavaScript
+ Otimização de imagens

Optei por ainda não incluir tarefas como pré-processamento de CSS ou geração de sprites porque acredito que há muita divergência na forma como nós desenvolvedores fazemos isso, então, fica a critério de quem está utilizando o projeto configurar tais tarefas. Mas assim que eu achar os padrões que pareçam mais frequentes, irei adicioná-los. Por tanto, adoraria discutir isso com os demais interessados no assunto.

##Instalação e uso

Instale todas as dependências:

```shell
  npm install
```

Ponha pra rodar:

```shell
  npm start
```

ou:

```shell
  gulp
```

##Algumas considerações

Muitos vão concordar comigo quando digo que, se tratando de WordPress, versionar e padronizar código nunca foi uma tarefa pouco penosa. Por isso, vale a pena fazer alguns comentários sobre a estrutura de diretórios e código implementado que resolvi utilizar até aqui.

###CSS

No diretório **css/** deve conter todos os arquivos CSS em desenvolvimento. A concatenação e minificação sobrescreverão o arquivo **style.css**, que está na raiz do projeto e é o arquivo padrão do WordPress para os estilos do tema.

Acontece que, os arquivos serão concatenados e minificados por ordem alfabética. Pode ser que você não esteja esperando por isso, uma vez que a ordem de declaração dos estilos pode importar. Mas até que pensemos em um padrão, uma solução para o problema seria sobrescrever o seguinte trecho do nosso **gulpfile.js**:

```javscript
  styles: {
    src: 'css/*.css',
    dest: 'style.css'
  }
```

por algo como:

```javascript
  styles: {
    src: ['css/reset.css', 'css/base.css', 'css/fonts.css'],
    dest: 'style.css'
  }
```

Desta forma, especificamos a ordem em que os arquivos devem ser concatenados e minificados.

###JavaScript

Com os arquivos JavaScript acontence o mesmo. Todos os scripts localizados em **js/** serão concatenados e minifcados por ordem alfabética sobrescrevendo o arquivo **all.js**, também localizado na raiz do projeto. Mais uma vez, a solução seria algo como:

```javascript
  scripts: {
    src: ['js/base.js', 'js/maps.js'],
    dest: 'all.js'
  }
```

Existe ainda o diretório **js/libs/**, que reservei para bibliotecas e códigos de terceiros. Estes arquivos não serão alterados e devem ser chamados um por um no tema.

###Imagens

As imagens devem ser salvas no diretório **/img/src/**, para serem otimizadas e salvas automaticamente no diretório **img/**. Apenas imagens com a extensão .png serão otimizadas. No mais, acrescentarei mais algumas configurações de compressão em breve.

##Colabore

Bem, o projeto certamente ainda está a vários commits de ficar realmente bom. Mas quando se trata de padronização de código, principalmente, acredito que quanto mais conversa, troca de experiências e caneladas, mais rico e sólido o conhecimento que se forma a respeito. Conto com a colaboração de vocês.
