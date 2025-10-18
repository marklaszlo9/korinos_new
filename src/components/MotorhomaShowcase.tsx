import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  AirVent, 
  Bed, 
  ChefHat, 
  MapPin, 
  Waves,
  ArrowRight,
  Camera
} from "lucide-react";
import { ImageGallery } from "./ImageGallery";

const MotorhomeShowcase = () => {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [currentGallery, setCurrentGallery] = useState<{
    images: string[];
    title: string;
  }>({ images: [], title: "" });

  // Image collections
  const motorhome1Images = [
    "https://res.cloudinary.com/korinos-hu/image/upload/v1623008768/2021korinos/1/1-1-2021.jpg",
    "https://res.cloudinary.com/korinos-hu/image/upload/v1623008699/2021korinos/1/1-2-2021.jpg",
    "https://res.cloudinary.com/korinos-hu/image/upload/v1623008685/2021korinos/1/1-3-2021.jpg",
    "https://res.cloudinary.com/korinos-hu/image/upload/v1623008674/2021korinos/1/1-4-2021.jpg",
    "https://res.cloudinary.com/korinos-hu/image/upload/v1623008727/2021korinos/1/1-5-2021.jpg",
    "https://res.cloudinary.com/korinos-hu/image/upload/v1623008751/2021korinos/1/1-6-2021.jpg",
    "https://res.cloudinary.com/korinos-hu/image/upload/v1623008735/2021korinos/1/1-7-2021.jpg",
    "https://res.cloudinary.com/korinos-hu/image/upload/v1623008672/2021korinos/1/1-8-2021.jpg",
    "https://res.cloudinary.com/korinos-hu/image/upload/v1623008657/2021korinos/1/1-9-2021.jpg",
    "https://res.cloudinary.com/korinos-hu/image/upload/v1623008706/2021korinos/1/1-10-2021.jpg",
    "https://res.cloudinary.com/korinos-hu/image/upload/v1623008733/2021korinos/1/1-11-2021.jpg",
    "https://res.cloudinary.com/korinos-hu/image/upload/v1623008663/2021korinos/1/1-12-2021.jpg"
  ];

  const motorhome2Images = [
    "https://res.cloudinary.com/korinos-hu/image/upload/v1593709022/2020gorog/2-1-uj.jpg",
    "https://res.cloudinary.com/korinos-hu/image/upload/v1623008621/2021korinos/2/2-2-2021.jpg",
    "https://res.cloudinary.com/korinos-hu/image/upload/v1623008582/2021korinos/2/2-3-2021.jpg",
    "https://res.cloudinary.com/korinos-hu/image/upload/v1623008527/2021korinos/2/2-4-2021.jpg",
    "https://res.cloudinary.com/korinos-hu/image/upload/v1623008529/2021korinos/2/2-5-2021.jpg",
    "https://res.cloudinary.com/korinos-hu/image/upload/v1623008539/2021korinos/2/2-7-2021.jpg",
    "https://res.cloudinary.com/korinos-hu/image/upload/v1623008591/2021korinos/2/2-8-2021.jpg",
    "https://res.cloudinary.com/korinos-hu/image/upload/v1623008523/2021korinos/2/2-1-2021.jpg",
    "https://res.cloudinary.com/korinos-hu/image/upload/v1623008514/2021korinos/2/2-10-2021.jpg",
    "https://res.cloudinary.com/korinos-hu/image/upload/v1623008588/2021korinos/2/2-9-2021.jpg",
    "https://res.cloudinary.com/korinos-hu/image/upload/v1623008539/2021korinos/2/2-6-2021.jpg",
    "https://res.cloudinary.com/korinos-hu/image/upload/v1623008553/2021korinos/2/2-1-2-2021.jpg"
  ];

  const locationImages = [
    "https://res.cloudinary.com/korinos-hu/image/upload/f_auto,q_auto/v1538441443/korinos/4-1-1920x1440-800x600.jpg",
    "https://res.cloudinary.com/korinos-hu/image/upload/f_auto,q_auto/v1538441443/korinos/4-2-1920x1440-800x600.jpg",
    "https://res.cloudinary.com/korinos-hu/image/upload/v1593768079/2020gorog/4-3-uj.jpg",
    "https://res.cloudinary.com/korinos-hu/image/upload/v1593855720/2020gorog/4-4-uj.jpg",
    "https://res.cloudinary.com/korinos-hu/image/upload/f_auto,q_auto/v1538441443/korinos/4-5-1920x1440-800x600.jpg",
    "https://res.cloudinary.com/korinos-hu/image/upload/f_auto,q_auto/v1538441443/korinos/4-6-1920x1440-800x600.jpg",
    "https://res.cloudinary.com/korinos-hu/image/upload/f_auto,q_auto/v1538441443/korinos/4-7-1920x1440-800x600.jpg",
    "https://res.cloudinary.com/korinos-hu/image/upload/v1593769071/2020gorog/4-8-uj.jpg",
    "https://res.cloudinary.com/korinos-hu/image/upload/v1593768201/2020gorog/4-9-uj.jpg",
    "https://res.cloudinary.com/korinos-hu/image/upload/v1593768079/2020gorog/4-10-uj.jpg"
  ];

  const openGallery = (images: string[], title: string) => {
    setCurrentGallery({ images, title });
    setGalleryOpen(true);
  };
  const motorhomes = [
    {
      id: 1,
      title: "1-es lakókocsi",
      image: "https://res.cloudinary.com/korinos-hu/image/upload/f_auto,q_auto/v1697882088/kori/DJI_0066.jpg",
      description: "Kényelmes, légkondicionált lakókocsi minden komforttal",
      features: [
        { icon: AirVent, text: "Légkondicionáló" },
        { icon: Bed, text: "Kényelmes ágyak" },
        { icon: ChefHat, text: "Felszerelt konyha" },
        { icon: Waves, text: "150m a strandtól" },
      ]
    },
    {
      id: 2,
      title: "2-es lakókocsi", 
      image: "https://res.cloudinary.com/korinos-hu/image/upload/f_auto,q_auto/v1697882089/kori/DJI_0067.jpg",
      description: "Tágas és jól felszerelt lakókocsi családok számára",
      features: [
        { icon: AirVent, text: "Légkondicionáló" },
        { icon: Bed, text: "Tágas belső tér" },
        { icon: ChefHat, text: "Teljes felszereltség" },
        { icon: Waves, text: "150m a strandtól" },
      ]
    }
  ];

  return (
    <section id="kepek" className="py-20 bg-gradient-to-b from-background to-azure/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Lakókocsi választék
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mindkét lakókocsink légkondicionált és teljesen felszerelt. 
            Választhatja ki a családja számára legmegfelelőbbet.
          </p>
        </div>

        {/* Motorhome Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {motorhomes.map((motorhome, index) => (
            <Card key={motorhome.id} className="floating-card overflow-hidden group">
              <div className="relative overflow-hidden">
                <img
                  src={motorhome.image}
                  alt={motorhome.title}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold">{motorhome.title}</h3>
                </div>
              </div>
              
              <CardContent className="p-6 space-y-6">
                <p className="text-muted-foreground text-lg">
                  {motorhome.description}
                </p>
                
                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {motorhome.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <feature.icon className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-sm font-medium">{feature.text}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button 
                  variant="outline" 
                  className="w-full group" 
                  size="lg"
                  onClick={() => openGallery(
                    motorhome.id === 1 ? motorhome1Images : motorhome2Images, 
                    `${motorhome.title} - Képgaléria`
                  )}
                >
                  <Camera className="h-4 w-4 mr-2" />
                  Képek megtekintése
                  <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Location Info */}
        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto overflow-hidden bg-gradient-to-r from-primary/5 to-azure/10 border-primary/20">
            <div className="relative">
              <img
                src="https://res.cloudinary.com/korinos-hu/image/upload/f_auto,q_auto/v1697882087/kori/DJI_0068.jpg"
                alt="Tengerpart és kemping Korinos"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <MapPin className="h-6 w-6" />
                    <h3 className="text-2xl font-bold">Korinos, Görögország</h3>
                  </div>
                  <p className="text-lg opacity-90">
                    Gyönyörű tengerpart és kemping
                  </p>
                </div>
              </div>
            </div>
            <CardContent className="p-8">
              <p className="text-muted-foreground text-lg mb-6">
                Gyönyörű finomhomokos tengerpart, kristálytiszta víz és mediterrán légkör.
                A lakókocsik mindössze néhány lépésnyire vannak a strandtól.
              </p>
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => openGallery(locationImages, "Helyszín - Képgaléria")}
              >
                <Camera className="h-4 w-4 mr-2" />
                Helyszín megtekintése
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <ImageGallery
        isOpen={galleryOpen}
        onClose={() => setGalleryOpen(false)}
        images={currentGallery.images}
        title={currentGallery.title}
      />
    </section>
  );
};

export default MotorhomeShowcase;