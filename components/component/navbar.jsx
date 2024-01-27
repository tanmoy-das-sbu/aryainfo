import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"

export function Navbar() {
  return (
    (
    <header className="container flex items-center justify-between px-6 py-4 md:px-8 lg:px-12">
      <Link className="flex items-center" href="#">
        <span className=" font-bold tracking-tighter">ARYAMAN INFOTECH</span>
      </Link>
      <nav className="hidden lg:flex gap-4">
        <Link className="text-sm font-medium hover:underline" href="#">
          Home
        </Link>
        <Link className="text-sm font-medium hover:underline" href="#">
          About
        </Link>
        <Link className="text-sm font-medium hover:underline" href="#service">
          Services
        </Link>
        <Link className="text-sm font-medium hover:underline" href="#">
          Contact
        </Link>
      </nav>
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
            <Link className="text-lg font-semibold" href="#">
              About
            </Link>
            <Link className="text-lg font-semibold" href="#service">
              Services
            </Link>
            <Link className="text-lg font-semibold" href="#">
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
