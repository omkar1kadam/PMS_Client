interface ImportMetaEnv 
{
    readonly VITE_API_URL: string
    readonly FRONTEND_URL: string
}

interface ImportMeta 
{
    readonly env : ImportMetaEnv
}