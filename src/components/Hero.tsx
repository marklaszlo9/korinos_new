import { Button } from "@/components/ui/button";
import { ArrowDown, MapPin, Users, Waves } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(https://res.cloudinary.com/korinos-hu/image/upload/f_auto,q_auto/v1697882089/kori/DJI_0067.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 hero-gradient" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="space-y-8 animate-fade-in-up">
          {/* Main Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
            Mediterrán
            <span className="block bg-gradient-to-r from-white to-azure bg-clip-text text-transparent">
              Álomnyaralás
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl lg:text-3xl font-light max-w-3xl mx-auto leading-relaxed">
            Légkondicionált lakókocsik a görög tengerparton
          </p>

          {/* Feature highlights */}
          <div className="flex flex-wrap justify-center gap-6 text-lg">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Waves className="h-5 w-5" />
              <span>Közel a tengerparthoz</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Users className="h-5 w-5" />
              <span>2 jól felszerelt lakókocsi</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <MapPin className="h-5 w-5" />
              <span>Korinos, Görögország</span>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="xl" 
              className="min-w-[200px]"
              onClick={() => document.getElementById('kepek')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Képek megtekintése
            </Button>
            <Button 
              variant="outline" 
              size="xl" 
              className="min-w-[200px] border-white text-white hover:bg-white hover:text-primary"
              onClick={() => document.getElementById('arak')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Árak és foglalás
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-8 w-8 text-white/70" />
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/50 to-transparent z-5" />
    </section>
  );
};

export default Hero;