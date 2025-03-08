import typescript from "@rollup/plugin-typescript";

export default {
    input: "TS/index.ts",  // 📌 El punto de entrada principal
    output: {
        dir: "build/JS",  // 📌 Mantendrá cada archivo JS separado
        format: "es",     // 🔹 Cambiar de "system" a "es" (ESM)
        sourcemap: true
    },
    plugins: [
        typescript({
            tsconfig: "./tsconfig.json"
        })
    ]
};
