# 🔧 Mario & Luigi Encanadores — Site Institucional

Um site fictício e visualmente impactante para os encanadores mais famosos dos videogames: **Mario & Luigi**. Projeto desenvolvido com HTML, CSS e JavaScript, incorporando vídeo de fundo, formulário funcional, botão flutuante de WhatsApp e responsividade para diferentes dispositivos.

---

## 🌍 Visão Geral

- Página de apresentação dos serviços fictícios da dupla Mario & Luigi
- Design interativo com vídeo de fundo e sobreposição de conteúdo
- Formulário funcional com integração à plataforma Formcarry
- Botão flutuante de WhatsApp com link direto para atendimento
- Responsividade completa com media queries
- Interações com JavaScript puro

---

## 🛠️ Tecnologias Utilizadas

- **HTML5** para estrutura da página
- **CSS3** para layout, cores, tipografia e responsividade
- **JavaScript Vanilla** para exibir/ocultar o formulário de contato
- **Google Fonts** (Ancizar Serif)
- **Formcarry** para envio de dados do formulário
- **Vídeo MP4** em background
- **Media Queries** para adaptar layout ao mobile

---

## 🎨 Destaques de Estilo (`style.css`)

- Tipografia personalizada com a fonte *Ancizar Serif*
- Paleta de cores com predominância do vermelho `#C51111` e verde nos efeitos `hover`
- Botões com transições suaves de cor
- Vídeo de fundo com sobreposição em gradiente escuro (`linear-gradient`)
- Estrutura modular com Flexbox para alinhamento dos elementos
- Estilização completa do formulário com bordas suaves e *outline-color* para usabilidade

#### 💡 Responsividade
Adaptado com `@media (max-width: 1100px)`:
- Esconde parágrafos para foco no layout mobile
- Flexbox vertical nos elementos principais
- Reposicionamento do cabeçalho e redimensionamento de imagens
- Ajuste da tipografia nos links

---

## ⚙️ JavaScript (`scripts.js`)

Funções simples e eficazes para manipulação do DOM:

```javascript
function mostrarform() {
  form.style.left = "50%";
  form.style.transform = "translateX(-50%)";
  mascara.style.visibility = "visible";
}

function esconderForm() {
  form.style.left = "-300px";
  form.style.transform = "translateX(0)";
  mascara.style.visibility = "hidden";
}
