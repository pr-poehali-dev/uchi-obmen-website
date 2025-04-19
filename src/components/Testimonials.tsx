import { 
  Card, 
  CardContent, 
  CardHeader 
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Анна К.",
    role: "Студентка",
    avatar: "АК",
    quote: "УчиОбмен полностью изменил мой подход к учебе. Теперь я могу легко делиться конспектами с однокурсниками и находить полезные материалы по всем предметам.",
    stars: 5
  },
  {
    name: "Дмитрий В.",
    role: "Школьник, 11 класс",
    avatar: "ДВ",
    quote: "Готовлюсь к ЕГЭ с помощью материалов из УчиОбмен. Очень удобно иметь доступ к качественным конспектам и шпаргалкам в одном месте.",
    stars: 5
  },
  {
    name: "Елена М.",
    role: "Учитель",
    avatar: "ЕМ",
    quote: "Как преподаватель, я рекомендую УчиОбмен своим ученикам для совместной работы. Это значительно упростило процесс обмена домашними заданиями и дополнительными материалами.",
    stars: 4
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-skyblue-dark mb-4">
            Что говорят пользователи
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Узнайте, как УчиОбмен помогает школьникам и студентам по всей стране
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-skyblue-light/50 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar className="h-12 w-12 bg-skyblue text-white">
                  <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-medium text-lg">{testimonial.name}</h3>
                  <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex mb-2">
                  {Array(5).fill(0).map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${i < testimonial.stars ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <p className="text-gray-700">{testimonial.quote}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;