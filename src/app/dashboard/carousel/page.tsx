import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const CarrouselPage = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <Carousel autoplay={3000} className="w-full max-w-xs">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex sm:justify-center sm:items-center" />
        <CarouselNext className="hidden sm:flex sm:justify-center sm:items-center" />
      </Carousel>
    </div>
  );
};

export default CarrouselPage;
