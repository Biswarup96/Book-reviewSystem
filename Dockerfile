#STAGE 1
FROM node:20-slim AS build

WORKDIR /app

COPY package*.json ./

# RUN npm install --omit=dev
RUN npm ci --omit=dev

COPY . .

#STAGE 2

FROM node:20-slim AS runtime
# FROM gcr.io/distroless/nodejs20-debian12 AS runtime

WORKDIR /app

COPY --from=build /app /app

EXPOSE 2000
EXPOSE 3000

CMD ["sh", "-c", "npx json-server /app/Database/db.json --host 0.0.0.0 --port 2000 & npm start"]
