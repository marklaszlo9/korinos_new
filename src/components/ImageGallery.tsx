import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";

interface ImageGalleryProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  title: string;
}

export const ImageGallery = ({ isOpen, onClose, images, title }: ImageGalleryProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrentIndex(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrentIndex(api.selectedScrollSnap());
    });
  }, [api]);

  const scrollToIndex = (index: number) => {
    if (api) {
      api.scrollTo(index);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl w-[95vw] h-[85vh] sm:h-[80vh] p-0">
        <DialogHeader className="p-4 sm:p-6 pb-2">
          <DialogTitle className="text-xl sm:text-2xl font-bold">{title}</DialogTitle>
        </DialogHeader>
        
        <div className="flex-1 px-4 sm:px-6 pb-4 sm:pb-6 overflow-hidden flex flex-col">
          <div className="flex-1 overflow-hidden">
            <Carousel setApi={setApi} className="w-full h-full">
              <CarouselContent className="h-[45vh] sm:h-[58vh]">
                {images.map((image, index) => (
                   <CarouselItem key={index} className="h-full">
                     <div className="flex items-center justify-center h-full p-2">
                       <img
                         src={image}
                         alt={`${title} - ${index + 1}`}
                         className="max-w-full max-h-full object-contain rounded-lg"
                         style={{ 
                           width: 'auto', 
                           height: 'auto',
                           maxWidth: '100%', 
                           maxHeight: '100%'
                         }}
                       />
                     </div>
                   </CarouselItem>
                ))}
              </CarouselContent>
              {images.length > 1 && (
                <>
                  <CarouselPrevious className="left-2 sm:left-4 bg-black/50 hover:bg-black/70 text-white border-0" />
                  <CarouselNext className="right-2 sm:right-4 bg-black/50 hover:bg-black/70 text-white border-0" />
                </>
              )}
            </Carousel>
          </div>
          
          {images.length > 1 && (
            <div className="flex justify-center mt-3 space-x-2 overflow-x-auto py-2">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full cursor-pointer transition-colors flex-shrink-0 ${
                    index === currentIndex ? "bg-primary" : "bg-muted"
                  }`}
                  onClick={() => scrollToIndex(index)}
                />
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};