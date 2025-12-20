import { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "EnergySaver Pro",
        short_name: "EnergySaver",
        description: "Advanced Energy Savings Platform",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#16a34a",
        icons: [
            {
                src: "/favicon.ico",
                sizes: "any",
                type: "image/x-icon",
            },
        ],
    }
}
