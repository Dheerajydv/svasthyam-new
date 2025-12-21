import { Menu, Shield } from "lucide-react";
import Button from "./Button";

const Header = () => {
  return (
    <header className="w-full shadow-md shadow-green-900 bg-gray-900 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="text-green-500 flex justify-center items-center font-bold text-xl">
              <Shield className="h-5 w-5 text-green-500" />
              <a href="/">Swasthyam</a>
            </div>
          </div>

          <nav className="md:flex flex justify-center items-center w-6/12 space-x-8">
            <a
              href="/#home"
              className="text-foreground hover:text-green-700 hover:font-semibold transition-colors"
            >
              Home
            </a>
            <a
              href="/#features"
              className="text-foreground hover:text-green-700 hover:font-semibold transition-colors"
            >
              Features
            </a>
            <a
              href="/#how-it-works"
              className="text-foreground hover:text-green-700 hover:font-semibold transition-colors"
            >
              How It Works
            </a>
            <a
              href="/#benefits"
              className="text-foreground hover:text-green-700 hover:font-semibold transition-colors"
            >
              Benefits
            </a>
            <a
              href="/#contact"
              className="text-foreground hover:text-green-700 hover:font-semibold transition-colors"
            >
              Contact
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button as="a" href="/sign-in" variant="primary">
              Sign In
            </Button>
            <Button as="a" href="/form" variant="primary">
              Get Started
            </Button>
            <Button as="a" href="/reports" variant="secondary">
              My Reports
            </Button>
            <Button variant="outline" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;