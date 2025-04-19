import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BookOpen, Mail, Instagram, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-skyblue-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div>
            <Link to="/" className="flex items-center mb-6">
              <BookOpen className="h-8 w-8 mr-2" />
              <span className="text-2xl font-bold">УчиОбмен</span>
            </Link>
            <p className="text-skyblue-light mb-6">
              Мобильное приложение для обмена учебными материалами и заметками среди учеников
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-skyblue-light transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-skyblue-light transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-skyblue-light transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Информация</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="hover:text-skyblue-light transition-colors">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/features" className="hover:text-skyblue-light transition-colors">
                  Функции
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-skyblue-light transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-skyblue-light transition-colors">
                  Блог
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Правовая информация</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/terms" className="hover:text-skyblue-light transition-colors">
                  Условия использования
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-skyblue-light transition-colors">
                  Политика конфиденциальности
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="hover:text-skyblue-light transition-colors">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Подпишитесь на новости</h3>
            <p className="text-skyblue-light mb-4">
              Получайте последние новости и обновления приложения
            </p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Ваш email" 
                className="bg-skyblue-dark/50 border-skyblue-light/30 text-white placeholder:text-skyblue-light/50"
              />
              <Button size="sm" className="bg-skyblue hover:bg-skyblue-light hover:text-skyblue-dark">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-skyblue-light/20 pt-8">
          <p className="text-center text-skyblue-light">
            &copy; {new Date().getFullYear()} УчиОбмен. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;