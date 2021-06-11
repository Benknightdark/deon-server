

## install global tools
``` bash
deno install -qAf --unstable https://deno.land/x/denon/denon.ts
deno install -A --unstable --import-map=https://deno.land/x/trex/import_map.json -n trex --no-check https://deno.land/x/trex/cli.ts
```
### commands
``` bash 
trex install --map fs http fmt log denon
deno run --allow-net  main.ts
```
