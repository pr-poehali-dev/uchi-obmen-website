import { 
  UserPlus, 
  Upload,
  Search,
  ThumbsUp
} from "lucide-react";

const steps = [
  {
    icon: <UserPlus className="h-10 w-10 text-white" />,
    title: "Регистрация",
    description: "Создайте аккаунт и присоединитесь к сообществу учащихся",
    bgColor: "bg-skyblue"
  },
  {
    icon: <Upload className="h-10 w-10 text-white" />,
    title: "Загрузка материалов",
    description: "Добавляйте свои конспекты, шпаргалки и учебные материалы",
    bgColor: "bg-skyblue-dark"
  },
  {
    icon: <Search className="h-10 w-10 text-white" />,
    title: "Поиск",
    description: "Находите полезные материалы от других пользователей",
    bgColor: "bg-skyblue"
  },
  {
    icon: <ThumbsUp className="h-10 w-10 text-white" />,
    title: "Обмен",
    description: "Обменивайтесь знаниями и учитесь вместе с другими",
    bgColor: "bg-skyblue-dark"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-skyblue-light/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-skyblue-dark mb-4">
            Как это работает
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Начать пользоваться приложением УчиОбмен очень просто — всего несколько шагов, и вы уже обмениваетесь полезными материалами
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center mb-10 md:mb-0">
              <div className={`${step.bgColor} w-20 h-20 rounded-full flex items-center justify-center mb-4 shadow-lg`}>
                {step.icon}
                <div className="absolute w-8 h-8 bg-white rounded-full flex items-center justify-center -mt-14">
                  <span className="text-skyblue-dark font-bold">{index + 1}</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-skyblue-dark mb-2">{step.title}</h3>
              <p className="text-gray-600 text-center max-w-xs">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block w-12 h-0.5 bg-skyblue/50 absolute transform translate-x-32"></div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <div className="relative">
            <img 
              src="https://cdn.poehali.dev/files/facff095-784e-4872-849a-126594e8c85b.png" 
              alt="Аниме-персонаж с телефоном" 
              className="w-48 h-auto"
            />
            <div className="absolute -bottom-4 -right-4 bg-skyblue p-4 rounded-lg shadow-lg">
              <p className="text-white font-medium">Попробуй сам!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;