import AtlasLogo from "@/app/ui/global/logo/atlas-logo";
import LoginForm from "@/app/ui/auth/login-form";

export default function Home() {
    return (
        <main>
            <div className="text-white flex min-h-screen flex-col items-center pt-16 sm:justify-center sm:pt-0">
                <AtlasLogo />
                <div className="relative mt-12 w-full max-w-lg sm:mt-10">
                    <div
                        className="mx-5 bg-black/20 border dark:border-white/5 shadow-[20px_0_20px_20px] rounded-lg sm:shadow-sm lg:rounded-xl lg:shadow-none">
                        <div className="flex flex-col p-6"></div>
                        <div className="p-6 pt-0">
                            <LoginForm />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
