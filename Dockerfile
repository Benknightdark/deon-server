FROM denoland/deno:alpine
EXPOSE 8888
WORKDIR /app
USER deno
ADD . .
RUN deno  cache --unstable main.ts
CMD ["run", "--allow-net" ,"--unstable","--allow-read","--allow-write","--allow-plugin","--allow-env",   "main.ts"]