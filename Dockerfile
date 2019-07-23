FROM node:8
WORKDIR /app/client
CMD ["npm", "start"]
EXPOSE 3000
USER node
