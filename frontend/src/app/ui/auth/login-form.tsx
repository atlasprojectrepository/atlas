export default function LoginForm() {
    return (
        <form>
            <div>
                <div>
                    <div
                        className="group relative rounded-lg border focus-within:border-white/5 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:border-white/5">
                        <div className="flex justify-between">
                            <label
                                className="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400">Nom
                                d&apos;utilisateur</label>
                        </div>
                        <input type="text" name="username" placeholder="Nom d'utilisateur"
                               className="block text-white w-full border-0 bg-transparent p-0 text-sm file:my-1 file:rounded-full file:border-0 file:bg-accent file:px-4 file:py-2 file:font-medium placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 sm:leading-7 text-foreground"/>
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <div>
                    <div
                        className="group relative rounded-lg border focus-within:border-white/5 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:border-white/5">
                        <div className="flex justify-between">
                            <label
                                className="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400">Mot
                                de passe</label>
                        </div>
                        <div className="flex items-center">
                            <input type="password" name="password"
                                   className="block text-white w-full border-0 bg-transparent p-0 text-sm file:my-1 placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 focus:ring-teal-500 sm:leading-7 text-foreground"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
                <label className="flex items-center gap-2">
                    <input type="checkbox" name="remember"
                           className="outline-none focus:outline focus:outline-sky-300"/>
                    <span className="text-xs">Remember me</span>
                </label>
                <a className="text-sm font-medium text-foreground underline" href="/forgot-password">Forgot
                    password?</a>
            </div>
            <div className="mt-4 flex items-center justify-end gap-x-2">
                <a className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:ring hover:ring-white h-10 px-4 py-2 duration-200"
                   href="/register">Register</a>
                <button
                    className="font-semibold hover:bg-black hover:text-white hover:ring hover:ring-white transition duration-300 inline-flex items-center justify-center rounded-md text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-black h-10 px-4 py-2"
                    type="submit">Log in
                </button>
            </div>
        </form>
    )
}
