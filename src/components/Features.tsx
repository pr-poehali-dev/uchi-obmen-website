import { 
  Share2, 
  BookOpen, 
  Search, 
  Users, 
  Tag,
  MessageSquare 
} from "lucide-react";

const features = [
  {
    icon: <Share2 className="h-10 w-10 text-skyblue" />,
    title: "Быстрый обмен",
    description: "Делитесь материалами в один клик с любым пользователем или группой"
  },
  {
    icon: <BookOpen className="h-10 w-10 text-skyblue" />,
    title: "Учебная библиотека",
    description: "Структурированное хранение всех учебных материалов по предметам"
  },
  {
    icon: <Search className="h-10 w-10 text-skyblue" />,
    title: "Удобный поиск",
    description: "Находите нужные материалы с помощью умного поиска и фильтров"
  },
  {
    icon: <Users className="h-10 w-10 text-skyblue" />,
    title: "Учебные группы",
    description: "Создавайте группы по интересам, классам или предметам"
  },
  {
    icon: <Tag className="h-10 w-10 text-skyblue" />,
    title: "Умные метки",
    description: "Организуйте материалы с помощью тегов и категорий"
  },
  {
    icon: <MessageSquare className="h-10 w-10 text-skyblue" />,
    title: "Обсуждения",
    description: "Комментируйте и обсуждайте учебные материалы в реальном времени"
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-white" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-skyblue-dark mb-4">
            Все необходимое для учебы
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            УчиОбмен предлагает множество функций, которые делают обмен учебными материалами простым, удобным и эффективным
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-skyblue-light/40 p-6 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-skyblue-dark mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;