# 🧠 Assistente de IA para Licitações

Sistema web que utiliza Inteligência Artificial para auxiliar servidores públicos na criação de documentos licitatórios padronizados, como DFD, ETP, TR, entre outros. Desenvolvido pela equipe de estagiários da Secretaria Municipal de Ciência, Inovação e Tecnologia (SMCIT) de Araucária - PR.

---

## 📌 Objetivo

Reduzir o tempo de elaboração de documentos licitatórios por meio de preenchimento automático inteligente, formulários guiados e interface amigável, com foco em padronização e redução de erros.

---

## ⚙️ Tecnologias Utilizadas

- **Back-end**: Laravel
- **Front-end**: Vue.js
- **PDF**: mPDF
- **IA**: Llama 3.0 (modelo local ou via API)
- **Versionamento**: Git + GitHub

---

## 📂 Funcionalidades

- 🔐 Login e logout com usuários do IPM
- 📄 Modelos de documentos com formulários dinâmicos
- 🧠 Geração de texto com IA em tempo real (preenchimento assistido)
- 📝 Infoboxes explicativas nos campos
- 💾 Salvamento automático de rascunhos
- 📤 Exportação dos documentos em PDF

---

## 👥 Equipe

| Nome                          | Função                                 |
|-------------------------------|----------------------------------------|
| Diogo Negrelli Ferreira       | Back-end (Laravel)                     |
| Weverton Vieira Ribeiro       | Back-end + IA (Laravel + prompts)      |
| Chandler André Morais Mariano| Front-end (Vue.js)                     |
| Christoffer Correa Klein      | Consultor Técnico                      |

---

## 📅 Cronograma (Resumo)

1. **Semana 1**: Levantamento de requisitos
2. **Semana 2**: Prototipação (Figma e fluxos)
3. **Semanas 3 a 7**: Desenvolvimento (back/front/IA)
4. **Semanas 8 e 9**: Testes e homologação
5. **Semana 10**: Deploy e capacitação dos usuários

---

## 📎 Links úteis

- 🎨 Protótipo Figma: [Abrir](https://www.figma.com/design/pvpq4XxPAg7vkFDgVwBVd2/Sistema-DOC-PDF?node-id=109-546)
- 📊 Diagrama de Fluxo: [Abrir](https://app.diagrams.net/?src=about#Hdiogonegrelli%2FLicitacao-pdf%2Fmain%2FDiagrama%20sem%20nome.drawio)

---

## ✅ Critérios de Aceitação

- Sistema funcional com login, permissões e edição de documentos
- Integração com IA para preenchimento e sugestões
- Exportação em PDF e salvamento automático de rascunhos
- Disponibilidade mínima de 99% em horário comercial

---

## 🔐 Requisitos Legais

- Garantir sigilo e segurança dos dados
- Conformidade com políticas públicas de TI e LGPD

---

## 🚧 Riscos Identificados

- **Dependência da IA**: Geração de textos pode não ser perfeita
  - 💡 Mitigação: edição manual e feedback
- **Segurança de dados**: risco de perda ou vazamento
  - 💡 Mitigação: backups, criptografia e controle de acesso

---

## 📦 Instalação (Desenvolvimento)

```bash
# Clonar o repositório
git clone https://github.com/[seu-usuario]/assistente-licitacoes.git

# Instalar dependências backend
cd backend
composer install

# Instalar dependências frontend
cd ../frontend
npm install
