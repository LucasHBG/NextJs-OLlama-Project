import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { IconWhatsApp } from "@/components/icons"
import { MainNavAuthenticated } from "@/components/main-nav-authenticated"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeaderAuthenticated() {
    return (
        <header className="sticky top-0 z-40 w-full border-b bg-background">
            <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
                <MainNavAuthenticated items={siteConfig.mainNavAuthenticated} />
                <div className="flex flex-1 items-center justify-end space-x-4">
                    <nav className="flex items-center space-x-1">
                        <Link
                            href={siteConfig.links.whatsapp}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div
                                className={buttonVariants({
                                    size: "icon",
                                    variant: "ghost",
                                })}
                            >
                                <IconWhatsApp className="h-5 w-5" />
                                <span className="sr-only">WhatsApp</span>
                            </div>
                        </Link>

                        <ThemeToggle />
                    </nav>
                </div>
            </div>
        </header>
    )
}
