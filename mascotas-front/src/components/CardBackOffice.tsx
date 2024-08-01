import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

interface Props {
  id: number;
  image: string;
  name: string;
  age: number;
  description?: string;
}

const CardBackOffice = ({ id, image, name, age, description }: Props) => {
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
      <div className="p-4 flex justify-between">
        <Link href={`/dashboard/pet/${id}`}>
          <Button variant="default">Ver más</Button>
        </Link>
        <Link href={`/dashboard/pets/${id}`}>
          <Button variant="secondary">Editar</Button>
        </Link>

        <Button variant="destructive" onClick={() => handleDelete(id)}>
          Eliminar
        </Button>
      </div>
    </Card>
  );
};

export default CardBackOffice;

const handleDelete = (id: string) => {
  // Lógica para eliminar
};
