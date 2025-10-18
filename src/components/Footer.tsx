import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Mail, 
  Phone, 
  MapPin,
  Waves,
  Heart
} from "lucide-react";

const Footer = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefon",
      details: ["László István: +36 30 832 2304"],
      link: "tel:+36308322304"
    },
    {
      icon: Mail,
      title: "E-mail",
      details: ["laszlo1965@gmail.com"],
      link: "mailto:laszlo1965@gmail.com"
    },
    {
      icon: MapPin,
      title: "Helyszín",
      details: ["Korinos Beach", "Görögország, Pieria"],
      link: "https://maps.app.goo.gl/MLPc3jjrGdQsnUV9A"
    }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer id="elerhetosegek" className="bg-gradient-to-b from-background to-primary/5 pt-20 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-primary p-3 rounded-lg">
                <Waves className="h-8 w-8 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary">Korinos.hu</h3>
                <p className="text-muted-foreground">Mediterrán álomnyaralás</p>
              </div>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              Családias kemping Görögországban, jól felszerelt lakókocsikkal és 
              minden komforttal. Tökéletes választás azoknak, akik a 
              tengerpart közelében szeretnének pihenni.
            </p>

            <div className="bg-azure/20 p-4 rounded-lg">
              <h4 className="font-semibold text-primary mb-2">2026-os szezon</h4>
              <p className="text-sm text-muted-foreground">
                Hamarosan megjelenik a 2026-os árlistánk! 
                Kövesse figyelemmel weboldalunkat.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-foreground mb-8">Elérhetőségek</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((contact, index) => (
                <Card key={index} className="floating-card hover:border-primary/50">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                        <contact.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-2">
                          {contact.title}
                        </h4>
                        <div className="space-y-1">
                          {contact.details.map((detail, detailIndex) => (
                            <p 
                              key={detailIndex} 
                              className="text-muted-foreground text-sm"
                            >
                              {contact.link && detailIndex === 0 ? (
                                <a 
                                  href={contact.link}
                                  className="hover:text-primary transition-colors duration-200"
                                >
                                  {detail}
                                </a>
                              ) : (
                                detail
                              )}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Action */}
            <div className="mt-8">
              <Card className="bg-gradient-to-r from-primary/5 to-azure/10 border-primary/20">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        Készen áll a foglalásra?
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        Vegye fel velünk a kapcsolatot még ma!
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <Button 
                        variant="hero" 
                        size="lg"
                        onClick={() => window.open('tel:+36308322304', '_self')}
                      >
                        <Phone className="h-4 w-4 mr-2" />
                        Hívás
                      </Button>
                      <Button 
                        variant="outline" 
                        size="lg"
                        onClick={() => window.open('mailto:laszlo1965@gmail.com', '_self')}
                      >
                        <Mail className="h-4 w-4 mr-2" />
                        E-mail
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Korinos.hu. Minden jog fenntartva.
            </p>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <span>Készítve</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>-tel Magyarországon</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;