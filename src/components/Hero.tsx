import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-skyblue-light to-background">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-skyblue-dark mb-4">
            Обменивайтесь знаниями проще
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            УчиОбмен — мобильное приложение для удобного обмена учебными материалами и заметками среди школьников и студентов
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://i.pinimg.com/736x/3b/75/c8/3b75c87eb38ee22e63d6607901493865.jpg" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-skyblue hover:bg-skyblue-dark">
                <Download className="h-5 w-5 mr-2" />
                Скачать приложение
              </Button>
            </a>
            <Button size="lg" variant="outline" className="border-skyblue text-skyblue hover:bg-skyblue/10">
              Узнать больше
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            <img 
              src="https://cdn.poehali.dev/files/facff095-784e-4872-849a-126594e8c85b.png" 
              alt="Аниме-персонаж с телефоном" 
              className="w-64 h-auto z-10 relative"
            />
            <div className="absolute -right-6 -bottom-6 w-40 h-40 bg-skyblue-light rounded-full -z-0"></div>
            <div className="absolute -left-6 -top-6 w-24 h-24 bg-skyblue-light rounded-full -z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;