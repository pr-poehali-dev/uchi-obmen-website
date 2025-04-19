import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 bg-skyblue">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-10 md:mb-0 flex justify-center">
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/files/facff095-784e-4872-849a-126594e8c85b.png" 
                alt="Аниме-персонаж с телефоном" 
                className="w-48 h-auto"
              />
              <div className="absolute -bottom-2 right-0 bg-white p-2 rounded-full shadow-lg animate-bounce">
                <span className="text-skyblue text-xl">👍</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Готовы начать обмениваться знаниями?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl">
              Скачайте приложение УчиОбмен прямо сейчас и присоединитесь к тысячам школьников и студентов
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="bg-white text-skyblue hover:bg-skyblue-light">
                <Download className="mr-2 h-5 w-5" />
                Скачать приложение
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20">
                <Mail className="mr-2 h-5 w-5" />
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;