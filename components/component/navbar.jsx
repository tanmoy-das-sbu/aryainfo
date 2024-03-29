'use client'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
import { Mail, Phone } from "lucide-react";
const scroll = () => {
  setTimeout(() => {
    const section = document.querySelector( '#service' );
    section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
  }, 500);
  // const section = document.querySelector( '#service' );
  // section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
};
export function Navbar() {
  return (
    (
    <header className="container flex items-center justify-between h-25 px-6 py-4 md:px-8 lg:px-12">
      <div className="w-1/3 flex items-center justify-start"><Link className="flex items-center" href="/">
        <div className="w-24 h-20 object-cover" >
          <img  src="/icons/logo.png" alt="" />
          </div>
      </Link></div>
      <div className="w-1/3 flex items-center justify-center"><nav className="hidden lg:flex gap-4">
        <Link className="text-md font-medium hover:underline" href="/">
          Home
        </Link>

        <Link className="text-md font-medium hover:underline" href="/" onClick={scroll}>
          Services
        </Link>
        <Link className="text-md font-medium hover:underline" href="/contact">
          Contact
        </Link>
      </nav></div>
      <div className=" hidden lg:flex  w-1/3 flex-col items-end justify-center">
      <a className="flex items-center gap-2" href="tel:+919525521005">
      <Phone className=" p-1" />
      <p>+919525521005</p>
      </a>
      <a className="flex items-center gap-2" href="mailus:aryamaninfotech@gmail.com">
      <Mail className=" p-1"/>
      <p>aryamaninfotech@gmail.com</p>
      </a>
      </div>
      <Sheet >
        <SheetTrigger  asChild>
          <Button className="lg:hidden" size="icon" variant="outline">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <nav className="grid gap-2 py-6">
            <Link className="text-lg font-semibold" href="#">
              Home
            </Link>
            <Link className="text-lg font-semibold" href="/" onClick={scroll}>
              Services
            </Link>
            <Link className="text-lg font-semibold" href="/contact">
              Contact
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
    )
  );
}


function MountainIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>)
  );
}


function MenuIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>)
  );
}
