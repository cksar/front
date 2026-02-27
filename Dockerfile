# Dockerfile
FROM node:20-alpine

# Diretório do app dentro do container
WORKDIR /app

# Copia package.json e package-lock.json primeiro para cache de dependências
COPY package*.json ./

# Instala dependências
RUN npm install

# Copia todo o código
COPY . .

# Expõe a porta do Vite
EXPOSE 5173

# Comando para rodar o dev server do Vite
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]