import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { QuoteRightIcon } from "../icons/icons";

interface TestimonialCardProps {
  name: string;
  country: string;
  flag: string;
  text: string;
}

export function TestimonialCard({ name, country, text }: TestimonialCardProps) {
  const initial = name.charAt(0).toUpperCase();

  return (
    <Card className="bg-white h-full">
      <CardContent className="p-6 md:p-8">
        <div className="flex items-start gap-2 mb-4">
          <Avatar className="h-12 w-12 md:h-14 md:w-14 rounded-b-none ">
            <AvatarFallback className="bg-[#F4F9FD] text-black text-xl md:text-2xl font-bold rounded-b-none">
              {initial}
            </AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-bold text-lg md:text-xl">{name}</h3>
            <p className="text-gray-600 text-sm">{country}</p>
          </div>
        </div>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
          {text}
        </p>
        <QuoteRightIcon className="w-8 h-8 md:w-10 md:h-10 text-[#18CE67] ml-auto" />
      </CardContent>
    </Card>
  );
}
