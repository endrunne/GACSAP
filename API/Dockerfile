FROM endrunne/deno-mongodb:develop

EXPOSE 3000

WORKDIR /app

USER deno

COPY . .

RUN deno cache --unstable server.ts

CMD ["install", "--allow-read", "--allow-run", "--allow-write", "-f", "--unstable", "https://deno.land/x/denon/denon.ts"]

CMD ["run", "--allow-net", "--allow-plugin", "--unstable", "--allow-read", "--allow-write", "server.ts"]

