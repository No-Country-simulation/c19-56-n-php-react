import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface Props {
  image: string;
  name: string;
  age: number;
  description?: string;
}

const CardBackOffice = ({ image, name, age, description }: Props) => {
  return (
    <Card className="cursor-pointer">
      <Image
        src={image}
        alt="Mascota 1"
        width={400}
        height={400}
        className="aspect-square rounded-t-lg object-cover"
      />
      <CardContent className="p-4">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-muted-foreground">{age} años</p>
        <p className="text-sm leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};

export default CardBackOffice;
