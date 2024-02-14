# Build
FROM node:latest as build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Serve
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
