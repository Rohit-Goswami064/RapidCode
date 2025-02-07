import Link from "next/link"
import { Github, Twitter, } from "lucide-react"

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200" id="contact">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
                <div className="flex justify-center space-x-6 md:order-2">
                    <Link
                        href="https://github.com/Rohit-Goswami064"
                        className="text-gray-400 hover:text-gray-500 transition-colors duration-200"
                    >
                        <span className="sr-only">GitHub</span>
                        <Github className="h-6 w-6" aria-hidden="true" />
                    </Link>
                    <Link
                        href="https://x.com/RohitGoswami064"
                        className="text-gray-400 hover:text-gray-500 transition-colors duration-200"
                    >
                        <span className="sr-only">Twitter</span>
                        <Twitter className="h-6 w-6" aria-hidden="true" />
                    </Link>

                </div>
                <div className="mt-8 md:mt-0 md:order-1">
                    <nav className="-mx-5 -my-2 flex flex-wrap justify-center">
                        <div className="px-5 py-2">
                            <Link href="/" className="text-base text-gray-500 hover:text-gray-900 transition-colors duration-200">
                                Home
                            </Link>
                        </div>
                        <div className="px-5 py-2">

                        </div>
                        <div className="px-5 py-2">
                            <Link href="/#faqs" className="text-base text-gray-500 hover:text-gray-900 transition-colors duration-200">
                                FAQs
                            </Link>
                        </div>
                        <div className="px-5 py-2">
                            <Link
                                href="/#contact"
                                className="text-base text-gray-500 hover:text-gray-900 transition-colors duration-200"
                            >
                                Contact
                            </Link>
                        </div>
                    </nav>
                    <p className="mt-8 text-center text-base text-gray-400">&copy; 2025 RapideCode. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

