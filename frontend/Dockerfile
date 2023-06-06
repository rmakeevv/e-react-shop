FROM node:16 as builder
COPY . .
RUN npm i
RUN npm run build


FROM nginx as production
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
