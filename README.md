# Controle de Gastos

> Landing page e sistema web para monitorar gastos de cartão de crédito e entender para onde o dinheiro está indo.

Um projeto pessoal nascido de um problema real: **todo mês o dinheiro some no cartão de crédito sem eu saber para onde foi**. O objetivo é registrar cada compra, categorizar os gastos e responder com clareza a pergunta: *"para onde está indo o meu dinheiro?"* — para que o salário renda mais e as decisões financeiras sejam tomadas com dados, não no escuro.

O projeto também é meu laboratório de estudo de **React + Tailwind CSS**, aplicando boas práticas de estruturação de código enquanto transformo um problema pessoal em uma solução de verdade.

## Visão do produto

- **Landing page** que explica o problema que o sistema resolve e como funciona.
- **Disponibilização para testes**: quem acessa pode experimentar o sistema.
- **Sistema de controle financeiro** com registro de despesas e visão consolidada dos gastos por cartão de crédito.

## Funcionalidades

### Já disponível

- Landing page com navegação entre seções.
- Tema com variáveis de cor no padrão iOS.

### Planejado

- Hero com a chamada do produto.po
- Seção de funcionalidades.
- Seção explicando o problema e a solução.
- CTA para testes.
- Cadastro de gastos e receitas.
- Controle por cartão de crédito.
- Categorização de despesas.
- Dashboard: visão de "para onde está indo meu dinheiro".
- Relatórios e estatísticas.

## Stack

| Tecnologia | Papel no projeto |
|---|---|
| [React 19](https://react.dev/) | Interface declarativa com componentes reutilizáveis |
| [TypeScript](https://www.typescriptlang.org/) | Tipagem estática: menos bugs e melhor DX |
| [Vite](https://vite.dev/) | Build e servidor de desenvolvimento com HMR |
| [Tailwind CSS v4](https://tailwindcss.com/) | Estilização utilitária direto no HTML |

## Começando

### Pré-requisitos

- Node.js 20+ e npm.

### Instalação

```bash
# 1. Instale as dependências
npm install

# 2. Inicie o servidor de desenvolvimento
npm run dev
```

### Scripts

| Comando | Descrição |
|---|---|
| `npm run dev` | Sobe o servidor de desenvolvimento com HMR |
| `npm run build` | Gera a versão de produção (typecheck + build) |
| `npm run lint` | Roda o ESLint |
| `npm run preview` | Previsualiza o build de produção localmente |

## Estrutura do projeto

```
src/
├── main.tsx                # Ponto de entrada do React
├── App.tsx                 # Raiz: monta navegação e páginas
├── components/
│   └── Navgation/          # Barra de navegação (Sobre, Funcionalidades, Download)
│       ├── navgation.tsx
│       └── Navigation.module.css
├── pages/
│   ├── home/               # Landing page
│   └── sobre/              # Página "Sobre" (em construção)
└── styles/
    ├── global.css          # Importa o Tailwind + estilos base
    └── theme.css           # Tokens de cor e sistema (padrão iOS)
```

## Roadmap

- [ ] Hero da landing com chamada do produto
- [ ] Seção de funcionalidades
- [ ] Seção explicando o problema e a solução
- [ ] Área de download / CTA para testes
- [ ] Cadastro de gastos e receitas
- [ ] Controle dos gastos por cartão de crédito
- [ ] Categorias de despesas
- [ ] Dashboard: "para onde está indo meu dinheiro"
- [ ] Relatórios e estatísticas

## Licença

Projeto pessoal em desenvolvimento. Licença ainda não definida.
