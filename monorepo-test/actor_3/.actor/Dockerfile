FROM apify/actor-node:16

COPY actor_3/ ./actor_3/
COPY shared/ ./shared/

WORKDIR /usr/src/app/actor_3

RUN npm install

CMD npm start
