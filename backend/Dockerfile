FROM node:20-alpine

WORKDIR /usr/src/app

# Copiar dependencias
COPY package*.json ./
RUN npm ci --only=production

# Copiar aplicación
COPY . .

# Construir
RUN npm run build

# Exponer puerto
EXPOSE 3001

# Comando de inicio
CMD ["node", "dist/main.js"]
