import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

interface Props {
  id?: number
  key?: number
  image: string
  name: string
  age: string
  description: string
}

const CardBackOffice = ({ image, name, age, description }: Props) => {
  return (
    <Card className="cursor-pointer">
      <Link href="/dashboard/pet/1">
        <img
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
      </Link>
    </Card>
  )
}

export default CardBackOffice
