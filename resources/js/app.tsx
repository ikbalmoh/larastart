import "../css/app.css";
import "./bootstrap";
import "preline/preline";

import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { createRoot, hydrateRoot } from "react-dom/client";
import { HeroUIProvider } from "@heroui/react";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.tsx`,
            import.meta.glob("./Pages/**/*.tsx")
        ),
    setup({ el, App, props }) {
        if (import.meta.env.SSR) {
            hydrateRoot(
                el,
                <HeroUIProvider>
                    <App {...props} />
                </HeroUIProvider>
            );
            return;
        }

        createRoot(el).render(
            <HeroUIProvider>
                <App {...props} />
            </HeroUIProvider>
        );
    },
    progress: {
        color: "#4B5563",
    },
});
