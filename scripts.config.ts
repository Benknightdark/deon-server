
import { DenonConfig } from "https://deno.land/x/denon@2.4.7/mod.ts";

const config: DenonConfig = {
  scripts: {
    start: {
      cmd: "deno run --allow-read --allow-net --allow-write --allow-plugin  --unstable   main.ts",
    },
  },
};

export default config;