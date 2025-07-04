# 🔧 Back-end - Projeto Solicitações de Serviços

Este repositório contém o back-end da aplicação de gerenciamento de solicitações de serviços. Ele fornece uma API RESTful para autenticação, criação, listagem e controle de solicitações.

---

## 🛠️ Tecnologias Utilizadas

- 🟨 **Node.js** — Ambiente de execução JavaScript no servidor  
- 🚀 **Express** — Framework web para criação de APIs REST  
- 🗃️ **Prisma ORM** — Mapeamento objeto-relacional para banco de dados  
- 🔐 **bcrypt (HAASH)** — Criptografia de senhas  
- 🔐 **jsonwebtoken (JWT)** — Autenticação baseada em token  
- 🌐 **CORS** — Comunicação segura entre front-end e back-end  
- 🌍 **Render** — Plataforma de hospedagem do back-end  

---

## 📋 Descrição

Este back-end é responsável por:

- Gerenciar autenticação e usuários (solicitante e administrador);
- Proteger senhas com bcrypt;
- Autorizar requisições via JWT;
- Gerenciar solicitações de serviços por usuário;
- Permitir acesso externo via CORS (ex: com front-end hospedado na Vercel);
- Organização em **routes** e **controllers** para melhor manutenção.

---

## 🚀 Funcionalidades

- Login com JWT  
- Criação de usuários (admin)  
- Criação e listagem de solicitações  
- Filtragem de solicitações por tipo de usuário  
- Atualização de status (admin)  
- Proteção de rotas com middleware  
- Comunicação com banco via Prisma  
- CORS configurado para aceitar front-end externo  

---

## ☁️ Hospedagem

O back-end está **hospedado na plataforma Render**.

🔗 Acesse a API em produção:  
👉 **https://dashboard.render.com/web/srv-d0h3qgs9c44c73807n6g**
