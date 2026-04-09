/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BANNER_URL?: string;
  readonly VITE_LINK_PRIMARY_URL?: string;
  readonly VITE_LINK_SECONDARY_URL?: string;
  readonly VITE_LINK_PRIMARY_LABEL?: string;
  readonly VITE_LINK_SECONDARY_LABEL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
