FROM node:20.10-alpine

LABEL authors="savchenkoi"

WORKDIR /usr/app

# Install PM2 globally
RUN npm install --global pm2

# Copy "package.json" and "package-lock.json" before other files
# Utilise Docker cache to save re-installing dependencies if unchanged
COPY ./package*.json ./

# Install dependencies
RUN npm config set unsafe-perm true
RUN npm install --silent

# Copy all files
COPY . .

# Change ownership to the non-root user
RUN chown -R node /app

# Build app
RUN npm run build

# Expose the listening port
EXPOSE 3000

USER node

# Launch app with PM2
CMD [ "pm2-runtime", "start", "npm", "--", "run", "dev" ]

