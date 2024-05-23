FROM apify/actor-node:20

COPY actor_1/ ./actor_1/
COPY shared/ ./shared/

WORKDIR /usr/src/app/actor_1

RUN npm install

CMD npm start
