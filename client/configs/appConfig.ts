interface AppConfig {
  BACKEND_URL: string;
}

interface AppSettings {
  PRD: AppConfig;
  DEV: AppConfig;
}

type AppEnv = "PRD" | "DEV" | undefined;

const APP_SETTINGS: AppSettings = {
  PRD: {
    BACKEND_URL: "",
  },
  DEV: {
    BACKEND_URL: "http://172.20.10.4:2001",
  },
};

const env = (process.env.NEXT_PUBLIC_NODE_ENV as AppEnv) ?? "DEV";
export default APP_SETTINGS[env];
