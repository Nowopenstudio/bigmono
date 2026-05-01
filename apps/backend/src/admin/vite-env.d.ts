/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SANITY_STUDIO_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}