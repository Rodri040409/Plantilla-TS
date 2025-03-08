import { createMain } from "./main.js";
export function startApp() {
    document.addEventListener("DOMContentLoaded", () => {
        console.log("📌 index.ts: DOM completamente cargado.");
        const app = document.getElementById("app");
        if (!app)
            return;
        app.innerHTML = "";
        app.appendChild(createMain());
    });
}
//# sourceMappingURL=index.js.map