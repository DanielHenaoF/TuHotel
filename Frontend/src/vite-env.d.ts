/// <reference types="vite/client" />;

interface importMetaEnv {
  readonly VITE_BACKEND_URL: string;
}

interface ImportMeta {
  readonly env: importMetaEnv;
}
