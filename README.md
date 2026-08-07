# Controle de Gastos

Landing page de um sistema de **controle de gastos pessoais** que estou desenvolvendo para organizar minhas finanças. Este projeto é meu estudo de **React + Tailwind CSS**, e vai evoluir para um produto completo.

## Stack

| Tecnologia | Para que serve |
|---|---|
| [React 19](https://react.dev/) | Interface (UI) com componentes reutilizáveis |
| [TypeScript](https://www.typescriptlang.org/) | Tipagem estática para menos bugs e melhor autocompletar |
| [Vite](https://vite.dev/) | Build e dev server rápido com HMR |
| [Tailwind CSS v4](https://tailwindcss.com/) | Estilização utilitária direto no HTML |

## Como rodar

```bash
npm install        # instala as dependências
npm run dev        # inicia o servidor de desenvolvimento
npm run build      # gera a versão de produção
npm run lint       # roda o ESLint
```

## Estrutura do projeto

```
src/
├── main.tsx              # ponto de entrada do React
├── App.tsx               # raiz: monta a navegação e as páginas
├── components/
│   └── Navgation/        # barra de navegação (links: Sobre, Funcionalidades, Download)
│       ├── navgation.tsx
│       └── Navigation.module.css
├── pages/
│   ├── home/             # página inicial (landing)
│   └── sobre/            # página "Sobre" (em construção)
└── styles/
    ├── global.css        # importa o Tailwind + estilos base
    └── theme.css         # variáveis de cor e sistema (tema iOS-like)
```

## Roadmap

- [ ] Hero da landing com chamada do produto
- [ ] Seção de funcionalidades
- [ ] Área de download / CTA
- [ ] Cadastro de gastos e receitas
- [ ] Categorias de despesas
- [ ] Relatórios e estatísticas

## Licença

Projeto pessoal. Nenhuma licença definida ainda.
