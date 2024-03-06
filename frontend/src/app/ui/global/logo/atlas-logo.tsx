import { sono } from "@/app/ui/fonts";

export default function AtlasLogo() {
    return (
        <div className="text-foreground font-semibold text-2xl tracking-tighter mx-auto flex items-center gap-2">
            <div style={{letterSpacing: 15}} className={ sono.className + ' text-4xl text-white font-light' }>ATLAS</div>
        </div>
    )
}
