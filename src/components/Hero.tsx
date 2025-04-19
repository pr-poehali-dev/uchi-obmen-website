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
            <Button size="lg" className="bg-skyblue hover:bg-skyblue-dark">
              <Download className="h-5 w-5 mr-2" />
              Скачать приложение
            </Button>
            <Button size="lg" variant="outline" className="border-skyblue text-skyblue hover:bg-skyblue/10">
              Узнать больше
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            <div className="w-64 h-[500px] bg-skyblue rounded-3xl shadow-xl overflow-hidden border-4 border-white">
              <div className="h-12 bg-skyblue flex items-center justify-center">
                <div className="w-20 h-6 bg-white rounded-full"></div>
              </div>
              <div className="bg-white h-[calc(100%-48px)]">
                <img 
                  src="/placeholder.svg" 
                  alt="Интерфейс приложения УчиОбмен" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -right-6 -bottom-6 w-40 h-40 bg-skyblue-light rounded-full -z-10"></div>
            <div className="absolute -left-6 -top-6 w-24 h-24 bg-skyblue-light rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;