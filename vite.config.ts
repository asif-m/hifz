import { defineConfig } from "@solidjs/start/config";
import solidPlugin from "vite-plugin-solid";
import suidPlugin from "@suid/vite-plugin";

export default defineConfig({ 
    start: { ssr: false } ,
    //plugins: [suidPlugin(), solidPlugin()],
    // build: {
    //     target: "esnext",
    // },
});
