"use client"
import React, { useEffect, useState } from "react";
import { ActivityCard } from "./ActivityCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

const categories = [
  { id: 'ballgames', nameUk: "Ігри з м'ячем", nameDk: 'Boldspil' },
  { id: 'movement', nameUk: 'Тіло і רוх', nameDk: 'Krop og bevægelse' },
  { id: 'combat', nameUk: 'Бойові види', nameDk: 'Kampsport' },
  { id: 'water', nameUk: 'Водні види', nameDk: 'Vandsport' },
  { id: 'creative', nameUk: 'Креативність', nameDk: 'Kreativt' },
  { id: 'social', nameUk: 'Соціальне', nameDk: 'Socialt' }
];

const activitiesData = [
  { "id": 1, "category": "ballgames", "title": "Футбол | Fodbold", "image": "/image/fodboldkamp1.jpg", "link": "#", "category_type": "B2B" },
  { "id": 2, "category": "ballgames", "title": "Баскетбол | Basketball", "image": "/image/basket.jpg", "link": "#", "category_type": "B2B" },
  { "id": 3, "category": "ballgames", "title": "Гандбол | Håndbold", "image": "/image/håndbold.jpg", "link": "#", "category_type": "B2B" },
  { "id": 4, "category": "ballgames", "title": "Бадмінтон | Badminton", "image": "/image/badminton-2.jpg", "link": "#", "category_type": "B2B" },
  { "id": 5, "category": "movement", "title": "Танці | Dans", "image": "/image/hero-dans.jpg", "link": "#", "category_type": "B2B" },
  { "id": 20, "category": "movement", "title": "Велоспорт | Cykling", "image": "/image/hero-cykel.jpg", "link": "#", "category_type": "B2B" }, 
  { "id": 6, "category": "movement", "title": "Гімнастика | Gymnastik", "image": "/image/gym.jpg", "link": "#", "category_type": "B2B" },
  { "id": 7, "category": "movement", "title": "Фітнес | Fitness", "image": "/image/fitness.jpg", "link": "#", "category_type": "B2B" },
  { "id": 8, "category": "movement", "title": "Йога | Yoga", "image": "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80", "link": "#", "category_type": "B2B" },
  { "id": 9, "category": "combat", "title": "Бокс | Boksning", "image": "/image/boksning.png", "link": "#", "category_type": "B2B" },
  { "id": 10, "category": "combat", "title": "Карате | Karate", "image": "/image/boksning.jpg", "link": "#", "category_type": "B2B" },
  { "id": 11, "category": "combat", "title": "Дзюдо | Judo", "image": "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=800&q=80", "link": "#", "category_type": "B2B" },
  { "id": 12, "category": "water", "title": "Плавання | Svømning", "image": "https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=800&q=80", "link": "#", "category_type": "B2B" },
  { "id": 14, "category": "creative", "title": "Образотворче мистецтво | Billedkunst", "image": "/image/krea.jpg", "link": "#", "category_type": "B2B" },
  { "id": 15, "category": "creative", "title": "Кераміка | Keramik", "image": "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=80", "link": "#", "category_type": "B2B" },
  { "id": 16, "category": "creative", "title": "Музика | Musik", "image": "/image/musik.jpg", "link": "#", "category_type": "B2B" },
  { "id": 17, "category": "social", "title": "Кулінарія | Madlavning", "image": "/image/mad.jpg", "link": "#", "category_type": "B2B" },
  { "id": 18, "category": "social", "title": "Настільні ігри | Spejder", "image": "/image/spejder.jpg", "link": "#", "category_type": "B2B" },
  { "id": 19, "category": "social", "title": "Мовне кафе | Esport", "image": "/image/eSport.jpg", "link": "#", "category_type": "B2B" }
];

export default function ActivityManager() {
  const [activeCategory, setActiveCategory] = useState('ballgames');
  const [carouselControl, setCarouselControl] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();
  const { language } = useLanguage();

  const filteredActivities = activitiesData.filter(act => act.category === activeCategory);

  useEffect(() => {
    if (!carouselControl) return;

    carouselControl.on("select", () => {
      setCurrentSlide(carouselControl.selectedScrollSnap());
    });

    return () => {
      carouselControl.off("select", () => {
        setCurrentSlide(carouselControl.selectedScrollSnap());
      });
    };
  }, [carouselControl]);

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-12 md:px-3">
      
      {/* 1. Overskrift */}
      <div className="text-left md:text-center mt-8 w-full">
        <h2 className="text-navy text-2xl md:text-3xl mb-10 font-kbh">
          Різноманітні можливості в Копенгагені
          <br />
          <span className=" text-xl md:text-2xl"> Mange forskellige tilbud i København</span>
        </h2>
      </div>

      {/* 2. Filtre */}
      <div className="w-full mb-3 md:mb-8 relative">
        <div className="flex gap-4 overflow-x-scroll md:overflow-x-visible flex-nowrap pb-4 md:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden justify-start md:justify-center lg:justify-between md:flex-wrap gap-y-3 scroll-smooth touch-pan-x w-full">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`shrink-0 min-w-[140px] md:min-w-0 md:flex-1 max-w-[200px] px-4 py-2 transition-all border-2 font-kbhtekst text-center flex flex-col cursor-pointer rounded-none ${
                activeCategory === cat.id 
                  ? 'bg-primary-blue border-uk-blue text-black shadow-md' 
                  : 'bg-white border-slate-200 text-navy'
              }`}
            >
              <span className="text-base lg:text-lg font-bold whitespace-nowrap">{cat.nameUk}</span>
              <span className="text-[9px] uppercase opacity-70 font-medium whitespace-nowrap">{cat.nameDk}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 3. Visning af aktiviteter */}
      <div className="w-full">
        {filteredActivities.length > 0 ? (
          <>
            {/* MOBIL: Karrusel */}
            <div className="md:hidden w-full relative"> 
              <Carousel 
                setApi={setCarouselControl}
                className="w-full" 
                opts={{ align: "start", loop: true }}
              >
                <CarouselContent className="ml-0 flex gap-4">
                  {filteredActivities.map((activity) => (
                    <CarouselItem key={activity.id} className="basis-full pl-0 min-w-0">
                      <ActivityCard title={activity.title} image={activity.image} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>

              {/* RENE SORTE PILE: Præcis som succes story */}
              <div className="absolute top-1/2 -translate-y-20 w-[calc(100%+70px)] -left-[35px] flex justify-between pointer-events-none md:hidden z-30">
                <button 
                  onClick={() => carouselControl?.scrollPrev()}
                  className="pointer-events-auto text-black hover:text-secondary-purple transition-colors cursor-pointer p-1"
                  aria-label="Forrige"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>
                <button 
                  onClick={() => carouselControl?.scrollNext()}
                  className="pointer-events-auto text-black hover:text-secondary-purple transition-colors cursor-pointer p-1"
                  aria-label="Næste"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>
              </div>
            </div>

            {/* BUND SEKTION */}
            <div className="md:hidden mt-6 flex flex-col gap-4">
              <div className="flex justify-center gap-2">
                {filteredActivities.map((_, index) => (
                  <div 
                    key={index}
                    className={`h-2.5 w-2.5 rounded-full transition-colors ${
                      index === currentSlide ? "bg-secondary-purple" : "bg-secondary-light"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* DESKTOP & TABLET: Grid */}
            <div className="hidden md:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredActivities.map((activity) => (
                <ActivityCard 
                  key={activity.id} 
                  title={activity.title} 
                  image={activity.image} 
                />
              ))}
            </div>

            {/* Link til alle aktiviteter */}
            <div className="flex justify-end w-full mt-8 py-6">
              <button 
                onClick={() => router.push('/activities')} 
                className="flex items-center gap-2 text-black text-lg font-bold hover:text-secondary-purple transition-all group cursor-pointer"
              >
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                {language === "ua" ? "Показати всі" : "Vis alle"}
              </button>
            </div>
          </>
        ) : (
          <div className="py-20 text-center border-2 border-dashed rounded-xl border-slate-100 text-slate-400 font-bold">
            {language === "ua" 
              ? "На даний момент заходів не заплановано" 
              : "Der er i øjeblikket ingen planlagte aktiviteter"
            }
          </div>
        )}
      </div>
    </div>
  );
}