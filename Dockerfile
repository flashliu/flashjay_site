FROM node:14-alpine
WORKDIR /app
COPY ./ /app
RUN rm -rf node_modules && npm install
RUN npm run build


FROM nginx:alpine
COPY --from=0  /app/dist /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/
EXPOSE 6666