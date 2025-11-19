'use client'

import Link from 'next/link';
const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
]

export default function Navbar({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <div className="bg-white">
            <header className="absolute inset-x-0 top-0 z-50 ">
                <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
                    <div className="flex lg:flex-1">
                        <Link href={"/"} className="-m-1.5 p-1.5">
                            <h2 className="text-center text-base/7 font-semibold text-indigo-600">MTZDT</h2>
                            <span className="text-xs text-gray-600 ">(My Time Zone Date Time)</span>
                            {/* <span className="h-8 w-auto"></span> */}
                        </Link>
                    </div>
                    {/* <div className="flex lg:hidden">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Open main menu</span>
                        </button>
                    </div> */}
                    {/* <div className="hidden lg:flex lg:gap-x-12">
                        {navigation.map((item) => (
                            <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-gray-900">
                                {item.name}
                            </a>
                        ))}
                    </div> */}
                    {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <a href="#" className="text-sm/6 font-semibold text-gray-900">
                            Log in <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div> */}
                </nav>
            </header>
            <div className="relative isolate px-6 pt-14 lg:px-8">
                {children}
            </div>
        </div>
    )
}
