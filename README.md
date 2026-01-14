# Sorteador de Números

Projeto desenvolvido para treinar **HTML, CSS e JavaScript puro**, com foco em:
- lógica de programação
- organização de código
- manipulação do DOM
- animações em CSS
- separação de responsabilidades (arquitetura básica)

O layout foi seguido a partir de um design no Figma.

---

## Objetivo do Projeto

Criar um sorteador de números onde o usuário pode:
- definir a quantidade de números
- definir intervalo mínimo e máximo
- escolher se os números podem ou não se repetir

Antes de mostrar o resultado final, o sistema exibe uma **animação de sorteio**, simulando o processo.

---

## Funcionalidades

- Sorteio de números aleatórios
- Opção de não repetir números
- Validações de entrada:
  - campos obrigatórios
  - valor máximo maior que o mínimo
  - quantidade compatível com o intervalo (quando não repetir)
- Interface dividida em duas telas:
  - tela do formulário
  - tela do resultado
- Animação de sorteio antes do resultado final
- Botão para realizar novo sorteio

---

## Estrutura de Pastas
/
├─ index.html
├─ assets/
│ ├─ images/
│ └─ icons/
├─ styles/
│ ├─ tokens.css
│ ├─ global.css
│ ├─ layout.css
│ ├─ components.css
│ └─ animations.css
└─ scripts/
├─ main.js
├─ dom.js
├─ ui.js
├─ validate.js
└─ random.js


---

## Explicação da Estrutura

### assets/
Pasta para arquivos estáticos.

- `images/`: imagens gerais do projeto
- `icons/`: ícones e logotipo

---

### styles/
CSS organizado por responsabilidade.

#### `tokens.css`
Contém variáveis globais vindas do Figma:
- cores
- fontes
- tamanhos
- espaçamentos
- border-radius
- tempos de animação

Serve como base visual do projeto.

---

#### `global.css`
Estilos globais:
- reset/normalização
- estilos base do `body`
- background geral da página

---

#### `layout.css`
Responsável pelo layout estrutural:
- container centralizado
- grid/flex de duas colunas (desktop)
- adaptação para mobile (1 coluna)

---

#### `components.css`
Estilos dos componentes reutilizáveis:
- inputs
- botão principal
- toggle “não repetir”
- FAQ
- chips de resultado (quadrados)

---

#### `animations.css`
Apenas animações:
- `@keyframes` de entrada
- animação de sorteio (rotate + scale)
- classes de estado como `.is-rolling`

---

### scripts/
JavaScript modular, usando `type="module"`.

---

#### `dom.js`
Centraliza todos os elementos do DOM.

Responsabilidade:
- buscar elementos do HTML
- exportar referências para o resto do código

Exemplo:
- formulário
- inputs
- telas (`screenForm`, `screenResult`)
- área de resultados
- botões

---

#### `ui.js`
Cuida **apenas da interface visual**.

Responsabilidade:
- mostrar/esconder telas
- exibir mensagens
- renderizar resultados
- renderizar estado “sorteando” (chips animados)

Não contém lógica de sorteio nem validação.

---

#### `validate.js`
Contém todas as regras de validação.

Responsabilidade:
- verificar se os dados são válidos
- retornar mensagem de erro quando necessário

Não acessa DOM e não altera interface.

---

#### `random.js`
Contém a lógica de sorteio.

Responsabilidade:
- gerar números aleatórios
- respeitar intervalo
- respeitar opção de não repetir

Retorna apenas dados (arrays de números).

---

#### `main.js`
Arquivo principal (orquestrador).

Responsabilidade:
- escutar eventos do usuário
- coletar valores do formulário
- chamar validação
- controlar o fluxo do sorteio
- alternar telas
- disparar animação e resultado final

Não contém lógica pesada nem estilos.

---

## Fluxo de Funcionamento

1. Usuário preenche o formulário
2. Clica em **Sortear**
3. O sistema:
   - valida os dados
   - se houver erro, exibe mensagem
4. Se estiver tudo correto:
   - troca para a tela de resultado
   - exibe animação de sorteio
5. Após o tempo da animação:
   - gera os números reais
   - exibe o resultado final
6. Usuário pode clicar em **Sortear novamente** para voltar ao formulário

---

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (ES Modules)
- Google Fonts
- Layout baseado em Figma

---

## Conceitos Praticados

- Separação de responsabilidades
- Organização de pastas
- Manipulação do DOM
- Validações de formulário
- Animações CSS com `@keyframes`
- Estados de interface
- Código limpo e legível

---

## Possíveis Melhorias Futuras

- Desabilitar botão durante a animação
- Histórico de sorteios
- Acessibilidade aprimorada
- Testes unitários para lógica de sorteio
- Versão com framework (React/Vue)


