import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileQuestion, Home } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center">
        <div className="container mx-auto px-4 py-20 text-center">
          <FileQuestion className="mx-auto h-24 w-24 text-skyblue mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-skyblue-dark mb-4">
            404 - Страница не найдена
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Извините, но страница, которую вы ищете, не существует или была перемещена.
          </p>
          <Button asChild size="lg" className="bg-skyblue hover:bg-skyblue-dark">
            <Link to="/">
              <Home className="mr-2 h-5 w-5" />
              Вернуться на главную
            </Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;