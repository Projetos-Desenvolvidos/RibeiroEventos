# Ribeiro Eventos — Landing Page Premium

Landing page de alta conversão para infraestrutura de eventos. Design escuro com detalhes dourados/laranja, mobile first e otimizada para SEO.

## Como visualizar

Abra `index.html` no navegador ou use um servidor local:

```bash
npx serve .
```

Acesse `http://localhost:3000`

## Personalização obrigatória

Antes de publicar, atualize:

| Item | Onde alterar |
|------|----------------|
| WhatsApp | `js/main.js` → `CONFIG.whatsapp` e links em `index.html` |
| Telefone / e-mail | `index.html` (contato e rodapé) |
| Endereço | `index.html` (rodapé e seção contato) |
| Redes sociais | `index.html` (footer) |
| URL canônica / OG | `<head>` em `index.html` |
| JSON-LD | script no `<head>` |
| Fotos reais | Substitua URLs do Unsplash por imagens em `/assets/` |

## Estrutura

```
ribeiroEventos/
├── index.html           # Página principal (SEO + semântica)
├── paginas/
│   └── servico.html     # Portfólio por serviço
├── css/styles.css       # Estilos premium
├── js/main.js           # Navegação, animações, formulário → WhatsApp
├── js/services-data.js  # Dados e fotos dos serviços
├── assets/              # Favicon e imagens locais
└── README.md
```

## Páginas de serviço (portfólio)

Cada card na home abre o portfólio do serviço em:

`paginas/servico.html?s=slug`

Exemplos: `paginas/servico.html?s=palcos`, `paginas/servico.html?s=piramides`

Conteúdo e fotos do portfólio ficam em `js/services-data.js` — edite lá para trocar textos e imagens reais.

## Funcionalidades

- Cards de serviço clicáveis com botão "Saiba mais"
- Página dedicada por serviço com galeria de projetos
- Header fixo com scroll e menu mobile
- CTAs para WhatsApp e formulário de orçamento
- Formulário envia dados formatados para WhatsApp
- Botão flutuante WhatsApp
- Animações reveal ao scroll
- FAQ com `<details>`
- Schema.org LocalBusiness
- `prefers-reduced-motion` respeitado

## Deploy

Hospede em qualquer serviço estático: Netlify, Vercel, GitHub Pages, hospedagem tradicional. Não requer build.

## Imagens

As imagens atuais são placeholders do Unsplash. Para produção, use fotos reais dos projetos da Ribeiro Eventos em `assets/` e atualize os `src` no HTML.
# RibeiroEventos
