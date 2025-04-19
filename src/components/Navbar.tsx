import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Download, BookOpen, MessageSquare } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-skyblue py-4 fixed w-full top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <BookOpen className="h-8 w-8 text-skyblue-foreground mr-2" />
          <span className="text-2xl font-bold text-skyblue-foreground">УчиОбмен</span>
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          <Link to="/features" className="text-skyblue-foreground hover:text-white transition-colors">
            Функции
          </Link>
          <Link to="/about" className="text-skyblue-foreground hover:text-white transition-colors">
            О нас
          </Link>
          <Link to="/faq" className="text-skyblue-foreground hover:text-white transition-colors">
            FAQ
          </Link>
          <Button className="bg-white text-skyblue hover:bg-skyblue-light hover:text-skyblue-dark">
            <Download className="h-4 w-4 mr-2" />
            Скачать
          </Button>
        </div>

        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Мобильное меню */}
      {isMenuOpen && (
        <div className="md:hidden bg-skyblue-dark py-4 px-4">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/features" 
              className="text-skyblue-foreground hover:text-white transition-colors"
              onClick={toggleMenu}
            >
              Функции
            </Link>
            <Link 
              to="/about" 
              className="text-skyblue-foreground hover:text-white transition-colors"
              onClick={toggleMenu}
            >
              О нас
            </Link>
            <Link 
              to="/faq" 
              className="text-skyblue-foreground hover:text-white transition-colors"
              onClick={toggleMenu}
            >
              FAQ
            </Link>
            <Button className="bg-white text-skyblue hover:bg-skyblue-light hover:text-skyblue-dark w-full">
              <Download className="h-4 w-4 mr-2" />
              Скачать
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;