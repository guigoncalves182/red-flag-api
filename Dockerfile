# Etapa 1: Construção
FROM node:18 AS builder

# Diretório de trabalho
WORKDIR /app

# Copiar arquivos de package e package-lock.json (ou yarn.lock)
COPY package*.json ./

# Instalar dependências (apenas uma vez, a menos que o package.json mude)
RUN npm install

# Copiar o restante dos arquivos da aplicação
COPY . .

# Executar o build da aplicação
RUN npm run build

# Etapa 2: Imagem final
FROM node:18

# Diretório de trabalho
WORKDIR /app

# Copiar os arquivos compilados da etapa anterior
COPY --from=builder /app/dist /app/dist

# Copiar apenas o package.json e o package-lock.json necessários para produção
COPY package*.json ./

# Instalar as dependências de produção
RUN npm install --only=production

# Copiar o arquivo .env (se necessário para o seu projeto)
COPY .env .env

# Expor a porta em que a aplicação vai rodar
EXPOSE 5005

# Rodar o aplicativo (modo de produção)
CMD ["npm", "run", "start:prod"]