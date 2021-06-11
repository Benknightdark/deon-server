import { createApp } from "https://deno.land/x/servest@v1.3.1/mod.ts";
import { show } from "./helpers/console_helper.ts";
import * as log from 'https://deno.land/std@0.98.0/log/mod.ts';
// import { DOMParser, Element } from "https://deno.land/x/deno_dom@v0.1.12-alpha/deno-dom-native.ts";
// import * as _ from 'https://deno.land/x/lodash@4.17.19/lodash.js';

const app = createApp();
app.handle("/", async (req) => {
  log.info(show());
  await req.respond({
    status: 200,
    headers: new Headers({
      "content-type": "text/plain",
    }),
    body: show(),
  });
});
app.listen({ port: 8888 });