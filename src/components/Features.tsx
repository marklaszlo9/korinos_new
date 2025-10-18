import { Card, CardContent } from "@/components/ui/card";
import { 
  AirVent, 
  Utensils, 
  Waves, 
  Store,
  Umbrella,
  Baby,
  Droplet,
  Flame,
  Tv
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: AirVent,
      title: "Légkondicionáló",
      description: "Minden lakókocsi korszerű légkondicionálóval felszerelt a komfortos pihenésért"
    },
    {
      icon: Waves,
      title: "Tengerparti elhelyezkedés", 
      description: "Mindössze 150 méterre a gyönyörű finomhomokos strandtól"
    },
    {
      icon: Utensils,
      title: "Felszerelt konyha",
      description: "Minden szükséges konyhai eszköz és berendezés a kényelmes főzéshez"
    },
    {
      icon: Droplet,
      title: "Tiszta tengervíz",
      description: "A tenger vize kristálytiszta és kellemes hőmérsékletű egész évben"
    },
    {
      icon: Store,
      title: "Kemping vegyesbolt",
      description: "A kempingnek saját kis vegyesboltja van, ahol szinte minden megvásárolható"
    },
    {
      icon: Umbrella,
      title: "Strand felszerelés",
      description: "Névvel ellátott napernyő és napozóágyak biztosítva a parton"
    },
    {
      icon: Baby,
      title: "Gyerekbarát strand",
      description: "Hatalmas homokos, gondozott és enyhén mélyülő part, ideális gyermekek számára"
    },
    {
      icon: Flame,
      title: "Főzési lehetőségek",
      description: "Saját mosogató, grillezési és gázégős bográcsozóhely minden lakókocsinál"
    },
    {
      icon: Tv,
      title: "Szórakoztatás",
      description: "TV készülékek magyar csatornákkal minden lakókocsinál"
    }
  ];

  return (
    <section id="informaciok" className="py-20 bg-gradient-to-b from-azure/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Miért válassza a Korinos.hu-t?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Minden részletre gondoltunk, hogy nyaralása felejthetetlen élmény legyen.
            Kényelmes felszereltség és mediterrán hangulat várja Önt.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="floating-card group hover:border-primary/50 transition-all duration-300"
            >
              <CardContent className="p-6 text-center space-y-4">
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary/5 via-azure/10 to-primary/5 border-primary/20">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Készen áll az álomnyaralásra?
              </h3>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Fedezze fel Görögország gyönyörű tengerpartját komfortos lakókocsinkon.
                Minden évszakban tökéletes választás a családi nyaraláshoz.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#arak" 
                  className="inline-flex items-center justify-center h-12 rounded-lg px-8 text-base font-semibold bg-primary text-primary-foreground hover:bg-primary-light shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Árak megtekintése
                </a>
                <a 
                  href="#elerhetosegek" 
                  className="inline-flex items-center justify-center h-12 rounded-lg px-8 text-base font-semibold border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  Kapcsolat felvétel
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Features;