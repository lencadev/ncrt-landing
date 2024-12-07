type Locales = "en" | "es";

const config = {
  defaultLocale: "en" as Locales,
  locales: ["en", "es"] as Locales[],
  load: ["server", "client"] as const,
  i18nextServer: {
    debug: false,
  },
  i18nextClient: {
    debug: false,
  },
};

export default config;