# Episcopus Meteorologia <br> um app simples para consultas climáticas
### projeto-final-web2
   A proposta deste projeto é uma sequencia de avaliações da disciplina de web 2 com ênfase no uso de ECMA Script 6 para tornar uma página HTML interativa.<br><br>
#### Será utilizado como base a api de dados climáticos da AccuWeather e tratar os dados recebidos a fim de gerar uma apresentação dos dados em uma página web dinâmica usando Java Script ES6.


## Exigências Gerais propostas pela disciplina:

 * O conteúdo do site deve ser pessoal;
 * O site deverá possuir informações que os acadêmicos julgarem interessantes;
 * Utilizar marcações do HTML5;
 * Deve ser utilizado CSS;
 * Poderá ser utilizado o framework bootstrap ou materialize;
 * O layout precisa ser responsivo;
 * Não deve ser utilizado templates prontos;
 * Qualquer tipo de cola ou cópia de semestres anteriores, por menor que seja, será zerado o trabalho;
 * O aluno será questionado no momento da defesa do projeto sobre qualquer um dos itens acima e também sobre as exigências específicas.
 * O projeto precisa ser armazenado no repositório do GitHub e o endereço do repositório ser informado ao professor via formulário CheckList e também via Slack em data a ser definida.
 * O formulário de checklist não precisa ser enviado se o aluno preferir preencher o checklist via README.md
 * O projeto precisa ser hospedado do GitHub Pages e o endereço de acesso deve ser informado no README.md

## Exigências Específicas:

   O sistema deve ser implementado contendo as funcionalidades referentes aos tópicos apresentados abaixo. Cada tópico será avaliado separadamente. Para o aluno obter nota máxima em cada tópico, ele precisa utilizar todas as estruturas listadas nos respectivos sub-tópicos. Também serão consideradas as **boas práticas de programação em JavaScript, uso adequado de notações e conceitos aprendidos**, organização do código e criatividade. Ainda, serão avaliados os wireframes do sistema, os quais deverão ser entregues em data definida antes da entrega do projeto.<br>

   Implementar os itens (tópicos) apresentados a seguir, com exceção dos itens riscados, os quais não foram vistos em sala de aula:

# Avaliação 1

### Caixas de Diálogo
  - [x] prompt
  - [x] alert
  - [x] confirm
  
### Temporizadores
- [ ] setInterval
- [ ] setTimeout
  
### Funções
- [x] Função anônima com argumento
- [x] Função anônima sem argumento
- [x] Função anônima com retorno
- [x] Função auto-executável
- [x] Função com nome
- [x] Função aninhada/local - declarar uma função dentro de outra
- [x] Passagem de uma função como parâmetro
- [x] Função Flecha - Arrow Function

### Eventos
- [x] Evento de carregamento do documento - onload
- [ ] Evento de movimento do mouse
- [x] Evento de teclado - usar charCode ou keyCode
- [x] Eventos de formulário - onfocus e onblur
- [x] Imprimir alguma propriedade do objeto event recebido como parâmetro
- [ ] ~~Propagação de eventos no modelo bolha (usar target e currentTarget, ou seja, disparar o evento em um elemento filho e capturar em um elemento pai)~~

### Acesso aos elementos DOM do HTML
- [ ] Via referência DOM pelo id do elemento HTML
- [x] Via getElementByID()
- [ ] Via getElementsByName()
- [ ] Via getElementsByTagName()
- [x] Via seletores CSS usados na função querySelector() ou querySelectorAll()

### Tratadores de Evento
- [x] Especificar o tratador de evento inline
- [x] Especificar o tratador de evento no carregamento da página HTML no modo tradicional - no onload
- [x] Especificar o tratador de evento no carregamento da página HTML com a função addEventListener - no onload
- [x] Usar o operador this em funções tratadoras de eventos.

### Objetos Nativos
- [ ] Usar pelo menos 3 métodos de manipulação de array
- [ ] Usar laço de repetição (for..in ou for..of ou forEach)
   - [x] For...of
   - [ ] For...in
   - [ ] forEach
- [ ] Usar pelo menos 3 métodos para manipulação de string
- [x] String Template

### Objetos
- [x] Criar objeto usando função construtora ou notação literal
- [x] Criar objetos a partir da definição de classes do ES6
- [x] Usar herança prototipal nativa ou herança de classes do ES6

# Avaliação 2

### Qualidade do código
- [x] Usar um Style Guide - apresentar o uso de pelo menos 10 regras do style escolhido (sugerido AirBnb)
   - [x] Usar sintaxe literal para objetos
   - [x] Usar sintaxe literal para arrays
   - [x] Aspas simples para strings
   - [x] Ponto para acessar atributos
   - [x] Variaveis sempre no topo do escopo em que se encontram
   - [x] Use === e !== ao invés de == e !=
   - [x] linha em branco no final do arquivo
   - [x] linha em branco após o final de cada declaração
   - [x] ponto e vírgula ao final de cada declaração
   - [x] Não use apenas um caracter, seja descritivo
   - [x] Use camelCase quando for nomear objetos, funções e instâncias
   - [x] Use PascalCase quando for nomear construtores ou classes.
   - [x] Use um underscore _ como primeiro caracter em propriedades privadas
- [X] Usar um lint - mostrar a correção de pelo menos 5 problemas informados pelo lint (sugerido JSHint - usar o arquivo .jshintrc disponível no moodle)
- [x] Usar strict mode
- [x] Usar Module Pattern
- [x] Usar pasta assets e subpastas resources e libraries para organizar o código
- [x] Usar let ou const ao invés de var
- [x] Nomes de arquivos minúsculos e separados por hífen (dashed-case)

### Formulário
- [x] Validação de formulário com onsubmit usando os métodos tradicionais
- [ ] Validação de formulário com HTML5 API
    - [ ] Customizar as mensagens nos balões de mensagem
    - [ ] Usar os atributos de validação dos inputs
    - [ ] Usar expressões regulares
- [x] Ler e escrever em elementos input com a propriedade value
- [ ] Alterar o conteúdo de elementos div ou p com a propriedade innerHTML ou textContent
- [ ] Manipulação de elemento de listagem, como checkbox, radio ou select
- [ ] Acesso aos elementos de um formulário via hierarquia (caminho) de objetos, ou seja, array forms e elements

### ~~Canvas~~
- [ ] ~~Desenho de caminho ou arco~~
- [ ] ~~Desenho de texto ou imagem~~

### ~~Animação~~
- [ ] ~~Por meio da manipulação do vetor images~~
- [ ] ~~Por meio da manipulação do canvas~~

# Avaliação 3

### jQuery
- [x] Uso de seletores CSS - id, classe e tag
- [ ] Uso de seletores hierárquicos estáticos - ancestral/descendente, pai/filho, anterior/próximo
- [ ] Uso de seletores hierárquicos dinâmicos - parent/children/next
- [ ] Efeitos fade ou slide
- [ ] Especificar o tratador de algum evento via jQuery
- [ ] Manipulação do CSS via função css() e addClass()/removeClass()
- [ ] Manipulação do conteúdo de um input e div usando jQuery
- [ ] Aplicar um plugin do jQuery (por exemplo, jQuery Mask Plugin)

### ~~Manipular componentes do HTML5 API~~
- [ ] ~~map~~
- [ ] ~~online ou visibilidade~~
- [ ] ~~audio ou video~~

### Web Storage
- [x] LocalStorage ou SessionStorage
- [x] Leitura e escrita de dados simples
- [x] Leitura e escrita de JSON
- [ ] Implementação funcional (basta fazer funcionar uma requisição) do backend em ExpressJS na plataforma Node e requisições AJAX.


#### Checklist:

* Preencher o checklist no README.md do seu repositório do GitHub tal como consta no projeto vixe-quebrou-js.<br>
* **Obs:** Se o aluno preencher um item e for comprovado que ele não fez ou não sabe explicar, será penalizado com a retirada de nota deste e de outro item feito.

#### Datas:

* Wireframes do sistema: Até 22/09/2020
* Postagem e Entrega: Até 22/11/2020.

#### Defesa: 

* Agendar a defesa para 22/11/2020 ou 23/11/2020 na planilha disponível em http://bit.ly/35Ev4vu
* Tempo de até 10 minutos de apresentação e depois mais o tempo para arguição da banca ou Professor
* Uma equipe não poderá assistir a defesa de outra.
* Os alunos que não tem apresentação no dia, estão dispensados da aula.
* As defesas poderão ser antecipadas caso o tempo destinado não seja totalmente ocupado ou ocorra a desistência de alguma equipe.
* A nota será atribuída à equipe, mas as perguntas serão direcionadas a cada membro. As perguntas serão direcionada a um membro até ele acertar ou até o limite de 3 respostas erradas, quando a nota será definida como ZERO à equipe. Também, a nota do trabalho será penalizada proporcionalmente ao número de respostas incorretas. Portanto, a dupla precisa entender de todo o projeto para não ser penalizada.

#### Notas:

* 60% da nota final da disciplina
* Wireframes: 10%
* Sistema: 90%
