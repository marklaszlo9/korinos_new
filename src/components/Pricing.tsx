import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  Users, 
  CheckCircle, 
  Clock,
  Sparkles,
  Star,
  Euro
} from "lucide-react";
import { useState, useEffect } from "react";

const Pricing = () => {
  const currentYear = new Date().getFullYear();
  const nextYear = currentYear + 1;
  
  // Target date: 2025/10/25 9:00 CET
  const targetDate = new Date('2025-10-25T09:00:00+02:00');
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [showTable, setShowTable] = useState(false);

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
        setShowTable(false);
      } else {
        setShowTable(true);
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  // Sample pricing structure based on typical seasonal patterns
  const pricingPlans = [
    {
      title: "Tavaszi szezon",
      period: "Március - Május",
      price: "290",
      currency: "€",
      unit: "/hét",
      popular: false,
      description: "Kellemes időjárás, kevesebb tömeg",
      features: [
        "Légkondicionált lakókocsi (5 fő)",
        "Tengerparti elhelyezkedés (150m)", 
        "Parkolóhely biztosított",
        "Napellenző és strand felszerelés",
        "WiFi elérés a recepción",
        "Előtér konyharész"
      ],
      color: "from-green-400/20 to-emerald-400/20"
    },
    {
      title: "Nyári főszezon",
      period: "Június - Augusztus", 
      price: "390",
      currency: "€",
      unit: "/hét",
      popular: true,
      description: "Tökéletes strand időjárás, mediterrán élmény",
      features: [
        "Légkondicionált lakókocsi (5 fő)",
        "Tengerparti elhelyezkedés (150m)",
        "Parkolóhely biztosított", 
        "Napellenző és strand felszerelés",
        "WiFi elérés a recepción",
        "Előtér konyharész",
        "Grillezési lehetőség"
      ],
      color: "from-primary/20 to-azure/30"
    },
    {
      title: "Őszi szezon", 
      period: "Szeptember - November",
      price: "320",
      currency: "€",
      unit: "/hét",
      popular: false,
      description: "Nyugodt környezet, kellemes hőmérséklet",
      features: [
        "Légkondicionált lakókocsi (5 fő)",
        "Tengerparti elhelyezkedés (150m)",
        "Parkolóhely biztosított",
        "Napellenző és strand felszerelés", 
        "WiFi elérés a recepción",
        "Előtér konyharész"
      ],
      color: "from-orange-400/20 to-amber-400/20"
    }
  ];

  return (
    <section id="arak" className="py-20 bg-gradient-to-b from-background via-sand/10 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            <Calendar className="h-4 w-4 mr-2" />
            {nextYear}-os szezon
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Árak és foglalás
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A {nextYear}-os árlistánk hamarosan megjelenik! 
            Az alábbi árak tájékoztató jellegűek, minden ár lakókocsinként értendő.
          </p>
        </div>

        {/* Availability Table - Show only after target date */}
        {showTable && (
          <div className="max-w-6xl mx-auto mb-16">
            <Card className="floating-card overflow-hidden">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-foreground mb-4">
                    {nextYear} Szezon Foglaltság
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    Az aktuális foglaltsági helyzet és elérhető időpontok
                  </p>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b-2 border-primary/20">
                        <th className="text-left py-4 px-4 font-semibold text-foreground">Turnus</th>
                        <th className="text-left py-4 px-4 font-semibold text-foreground">Kezdés</th>
                        <th className="text-left py-4 px-4 font-semibold text-foreground">Befejezés</th>
                        <th className="text-left py-4 px-4 font-semibold text-foreground">Ár/Státusz</th>
                        <th className="text-left py-4 px-4 font-semibold text-foreground">Elérhetőség</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-muted/20">
                      <tr className="hover:bg-muted/50">
                        <td className="py-3 px-4">1</td>
                        <td className="py-3 px-4">Május 24.</td>
                        <td className="py-3 px-4">Június 2.</td>
                        <td className="py-3 px-4">
                          <Badge variant="secondary" className="bg-red-100 text-red-800">89.000 Ft</Badge>
                        </td>
                        <td className="py-3 px-4">2 darab</td>
                      </tr>
                      <tr className="hover:bg-muted/50">
                        <td className="py-3 px-4">2</td>
                        <td className="py-3 px-4">Június 2.</td>
                        <td className="py-3 px-4">Június 11.</td>
                        <td className="py-3 px-4">
                          <Badge variant="secondary" className="bg-red-100 text-red-800">119.000 Ft</Badge>
                        </td>
                        <td className="py-3 px-4">2 darab</td>
                      </tr>
                      <tr className="hover:bg-muted/50">
                        <td className="py-3 px-4">3</td>
                        <td className="py-3 px-4">Június 11.</td>
                        <td className="py-3 px-4">Június 20.</td>
                        <td className="py-3 px-4">
                          <Badge variant="secondary" className="bg-red-100 text-red-800">175.000 Ft</Badge>
                        </td>
                        <td className="py-3 px-4">2 darab</td>
                      </tr>
                      <tr className="hover:bg-muted/50">
                        <td className="py-3 px-4">4</td>
                        <td className="py-3 px-4">Június 20.</td>
                        <td className="py-3 px-4">Június 29.</td>
                        <td className="py-3 px-4">
                          <Badge variant="secondary" className="bg-red-100 text-red-800">209.000 Ft</Badge>
                        </td>
                        <td className="py-3 px-4">2 darab</td>
                      </tr>
                      <tr className="hover:bg-muted/50">
                        <td className="py-3 px-4">5</td>
                        <td className="py-3 px-4">Június 29.</td>
                        <td className="py-3 px-4">Július 8.</td>
                        <td className="py-3 px-4">
                          <Badge variant="secondary" className="bg-red-100 text-red-800">259.000 Ft</Badge>
                        </td>
                        <td className="py-3 px-4">2 darab</td>
                      </tr>
                      <tr className="hover:bg-muted/50">
                        <td className="py-3 px-4">6</td>
                        <td className="py-3 px-4">Július 8.</td>
                        <td className="py-3 px-4">Július 17.</td>
                        <td className="py-3 px-4">
                          <Badge variant="secondary" className="bg-red-100 text-red-800">289.000 Ft</Badge>
                        </td>
                        <td className="py-3 px-4">2 darab</td>
                      </tr>
                      <tr className="hover:bg-muted/50">
                        <td className="py-3 px-4">7</td>
                        <td className="py-3 px-4">Július 17.</td>
                        <td className="py-3 px-4">Július 26.</td>
                        <td className="py-3 px-4">
                          <Badge variant="secondary" className="bg-red-100 text-red-800">289.000 Ft</Badge>
                        </td>
                        <td className="py-3 px-4">2 darab</td>
                      </tr>
                      <tr className="hover:bg-muted/50">
                        <td className="py-3 px-4">8</td>
                        <td className="py-3 px-4">Július 26.</td>
                        <td className="py-3 px-4">Augusztus 4.</td>
                        <td className="py-3 px-4">
                          <Badge variant="secondary" className="bg-red-100 text-red-800">289.000 Ft</Badge>
                        </td>
                        <td className="py-3 px-4">2 darab</td>
                      </tr>
                      <tr className="hover:bg-muted/50">
                        <td className="py-3 px-4">9</td>
                        <td className="py-3 px-4">Augusztus 4.</td>
                        <td className="py-3 px-4">Augusztus 13.</td>
                        <td className="py-3 px-4">
                          <Badge variant="secondary" className="bg-red-100 text-red-800">289.000 Ft</Badge>
                        </td>
                        <td className="py-3 px-4">2 darab</td>
                      </tr>
                      <tr className="hover:bg-muted/50">
                        <td className="py-3 px-4">10</td>
                        <td className="py-3 px-4">Augusztus 13.</td>
                        <td className="py-3 px-4">Augusztus 22.</td>
                        <td className="py-3 px-4">
                          <Badge variant="secondary" className="bg-red-100 text-red-800">289.000 Ft</Badge>
                        </td>
                        <td className="py-3 px-4">2 darab</td>
                      </tr>
                      <tr className="hover:bg-muted/50">
                        <td className="py-3 px-4">11</td>
                        <td className="py-3 px-4">Augusztus 22.</td>
                        <td className="py-3 px-4">Augusztus 31.</td>
                        <td className="py-3 px-4">
                          <Badge variant="secondary" className="bg-red-100 text-red-800">229.000 Ft</Badge>
                        </td>
                        <td className="py-3 px-4">2 darab</td>
                      </tr>
                      <tr className="hover:bg-muted/50">
                        <td className="py-3 px-4">12</td>
                        <td className="py-3 px-4">Augusztus 31.</td>
                        <td className="py-3 px-4">Szeptember 9.</td>
                        <td className="py-3 px-4">
                          <Badge variant="secondary" className="bg-red-100 text-red-800">175.000</Badge>
                        </td>
                        <td className="py-3 px-4">2 darab</td>
                      </tr>
                      <tr className="hover:bg-muted/50">
                        <td className="py-3 px-4">13</td>
                        <td className="py-3 px-4">Szeptember 9.</td>
                        <td className="py-3 px-4">Szeptember 18.</td>
                        <td className="py-3 px-4">
                          <Badge variant="secondary" className="bg-red-100 text-red-800">119.000 Ft</Badge>
                        </td>2 darab</td>
                      </tr>
                      <tr className="hover:bg-muted/50 bg-green-50/50">
                        <td className="py-3 px-4 font-semibold">14</td>
                        <td className="py-3 px-4 font-semibold">Szeptember 18.</td>
                        <td className="py-3 px-4 font-semibold">Szeptember 27.</td>
                        <td className="py-3 px-4">
                          <Badge className="bg-primary text-primary-foreground">99.000 Ft</Badge>
                        </td>
                        <td className="py-3 px-4">
                          <Badge variant="secondary" className="bg-green-100 text-green-800">2 darab</Badge>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div className="mt-8 text-center">
                  <Button variant="hero" size="lg">
                    <Sparkles className="h-4 w-4 mr-2" />
                    Elérhető időpont foglalása
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Coming Soon Notice with Countdown */}
        {!showTable && (
          <div className="max-w-4xl mx-auto mb-16">
            <Card className="floating-card bg-gradient-to-r from-primary/5 via-azure/10 to-primary/5 border-primary/20">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <Clock className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-3xl font-bold text-foreground mb-2">
                    Hamarosan megjelenik a {nextYear}-os árlistánk!
                  </h3>
                  
                  {/* Countdown Timer */}
                  <div className="grid grid-cols-4 gap-4 max-w-md mx-auto my-8">
                    <div className="bg-primary/10 rounded-lg p-4">
                      <div className="text-2xl font-bold text-primary">{timeLeft.days}</div>
                      <div className="text-xs text-muted-foreground uppercase">Nap</div>
                    </div>
                    <div className="bg-primary/10 rounded-lg p-4">
                      <div className="text-2xl font-bold text-primary">{timeLeft.hours}</div>
                      <div className="text-xs text-muted-foreground uppercase">Óra</div>
                    </div>
                    <div className="bg-primary/10 rounded-lg p-4">
                      <div className="text-2xl font-bold text-primary">{timeLeft.minutes}</div>
                      <div className="text-xs text-muted-foreground uppercase">Perc</div>
                    </div>
                    <div className="bg-primary/10 rounded-lg p-4">
                      <div className="text-2xl font-bold text-primary">{timeLeft.seconds}</div>
                      <div className="text-xs text-muted-foreground uppercase">Mp</div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-lg">
                    A fenti árak tájékoztató jellegűek. Kérjük, vegye fel velünk a kapcsolatot az aktuális árakért és foglalásért.
                  </p>
                </div>
                <Button 
                  variant="hero" 
                  size="lg"
                  onClick={() => window.open('mailto:laszlo1965@gmail.com', '_self')}
                >
                  <Sparkles className="h-4 w-4 mr-2" />
                  Ajánlatkérés
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Additional Costs Info */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          
          {/* Extra Costs */}
          <Card className="bg-gradient-to-br from-primary/5 to-azure/10 border-primary/20">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Euro className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">További költségek</h3>
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>• Villamos áram: 0,6 Euro/kw vagy 240 Ft/kw</p>
                <p>• Normál fogyasztás: 10-30 kw/turnus</p>
                <p>• 6., 7. személy után pótdíj</p>
              </div>
            </CardContent>
          </Card>

          {/* Booking Terms */}
          <Card className="bg-gradient-to-br from-sand/20 to-secondary/20 border-sand/30">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-sand-dark/20 p-2 rounded-lg">
                  <Users className="h-6 w-6 text-sand-foreground" />
                </div>
                <h3 className="text-lg font-semibold">Foglalási feltételek</h3>
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>• A feltételeket a külföldi partner határozza meg</p>
                <p>• Változtatás jogát fenntartjuk</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact CTA */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/5 via-azure/10 to-primary/5 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Kérdése van az árakkal kapcsolatban?
              </h3>
              <p className="text-muted-foreground mb-6">
                Vegye fel velünk a kapcsolatot személyre szabott ajánlatért vagy 
                ha csoportos foglalást tervez.
              </p>
               <div className="flex flex-col sm:flex-row gap-4 justify-center">
                 <Button 
                   variant="hero" 
                   size="lg"
                   onClick={() => window.location.href = 'tel:+36308322304'}
                 >
                   László István: +36 30 832 2304
                 </Button>
                 <Button 
                   variant="outline" 
                   size="lg"
                   onClick={() => window.location.href = 'mailto:laszlo1965@gmail.com'}
                 >
                   Email: laszlo1965@gmail.com
                 </Button>
               </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pricing;