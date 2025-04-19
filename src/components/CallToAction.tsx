import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 bg-skyblue">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Готовы начать обмениваться знаниями?
        </h2>
        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          Скачайте приложение УчиОбмен прямо сейчас и присоединитесь к тысячам школьников и студентов
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
    </section>
  );
};

export default CallToAction;