FROM node:20.10-alpine AS builder

WORKDIR /usr/app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build


# --- Production stage ---
FROM node:20.10-alpine

WORKDIR /usr/app

# Установим только runtime-зависимости и PM2
RUN npm install --global pm2

COPY --from=builder /usr/app/package*.json ./
COPY --from=builder /usr/app/node_modules ./node_modules
COPY --from=builder /usr/app/.next ./.next
COPY --from=builder /usr/app/public ./public

USER node

EXPOSE 3000

CMD ["pm2-runtime", "npm", "--", "start"]