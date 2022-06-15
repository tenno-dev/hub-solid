import { defineConfig } from "vite";
import solid from "solid-start";
import solidCloudflarePages from "solid-start-cloudflare-pages";

export default defineConfig({
  plugins: [solid(
    { adapter: solidCloudflarePages() },
  )],
});
