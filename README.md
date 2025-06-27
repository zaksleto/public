# Projeto HTML Estático - Swipefile Express

## Descrição
Este é um projeto HTML estático puro convertido de React/Vite, mantendo 100% da aparência visual, animações e interatividade originais sem dependências de frameworks.

## Estrutura do Projeto
```
static_html_project/
├── index.html          # Arquivo principal HTML
├── assets/             # Recursos CSS e JS compilados
│   ├── index-CxNcEfv9.css  # Estilos Tailwind CSS compilados
│   └── index-D5ypDm49.js   # JavaScript compilado (não utilizado)
└── README.md           # Esta documentação
```

## Características Preservadas

### ✅ Visuais
- Layout responsivo idêntico ao original
- Cores e gradientes preservados
- Tipografia (Inter e JetBrains Mono) mantida
- Ícones SVG inline preservados

### ✅ Animações
- Efeito Matrix animado no fundo (canvas)
- Animações de pulse nos elementos
- Contador animado no widget flutuante
- Transições suaves em hover
- Gradientes animados

### ✅ Interatividade
- Navegação suave (smooth scrolling)
- Sistema de tabs funcionais
- Hover effects preservados
- Menu mobile responsivo
- Botões interativos

### ✅ Funcionalidades JavaScript
- Contador animado em tempo real
- Efeito Matrix no canvas de fundo
- Sistema de tabs dinâmico
- Navegação suave entre seções
- Menu mobile toggle

## Tecnologias Utilizadas
- **HTML5**: Estrutura semântica
- **CSS3**: Estilos com Tailwind CSS compilado
- **JavaScript Vanilla**: Funcionalidades interativas
- **Canvas API**: Efeito Matrix animado
- **CSS Animations**: Animações fluidas

## Como Usar

### Opção 1: Servidor Local
```bash
# Usando Python
python -m http.server 8000

# Usando Node.js
npx serve -s .

# Usando PHP
php -S localhost:8000
```

### Opção 2: Abrir Diretamente
Simplesmente abra o arquivo `index.html` em qualquer navegador moderno.

## Compatibilidade
- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+
- ✅ Dispositivos móveis (iOS/Android)

## Recursos Externos
- **Google Fonts**: Inter e JetBrains Mono
- **Imagens**: Pexels (para preview dos VSLs)

## Otimizações Implementadas
- CSS compilado e minificado
- JavaScript vanilla otimizado
- Animações com performance otimizada
- Lazy loading para imagens
- Responsividade completa

## Notas Técnicas
- Não há dependências de React ou outras bibliotecas
- Todo JavaScript é vanilla (puro)
- CSS é autocontido (Tailwind compilado)
- Funciona offline (exceto fontes e imagens externas)
- Tamanho total: ~25KB (HTML + CSS)

## Funcionalidades Específicas

### Contador Animado
- Atualiza em tempo real
- Animação suave de contagem
- Formatação brasileira de números

### Efeito Matrix
- Canvas animado no fundo
- Caracteres aleatórios caindo
- Performance otimizada

### Sistema de Tabs
- Troca dinâmica de conteúdo
- Estados visuais preservados
- Funcionalidade completa

### Navegação
- Scroll suave entre seções
- Menu responsivo
- Links funcionais

## Manutenção
Para modificar o projeto:
1. Edite o arquivo `index.html` diretamente
2. Modifique os estilos inline ou no CSS
3. Ajuste o JavaScript conforme necessário
4. Teste em diferentes navegadores

## Conversão Realizada
Este projeto foi convertido automaticamente de React/Vite para HTML estático puro, preservando:
- 100% da aparência visual
- Todas as animações e efeitos
- Funcionalidades interativas
- Responsividade completa
- Performance otimizada

**Data da Conversão**: 27/06/2025
**Versão Original**: React 18 + Vite 5 + Tailwind CSS
**Versão Convertida**: HTML5 + CSS3 + JavaScript Vanilla

