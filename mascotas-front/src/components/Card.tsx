import { Button } from "@/components/ui/button"

interface Props {
  image: string
  name: string
  age: number
  description: string
}

const Card = ({ image, name, age, description }: Props) => (
  <div className="bg-[#f6e3c5] rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:scale-105">
    <div className="p-4">
      <div className="relative rounded-lg overflow-hidden">
        <img
          src={image}
          alt={`${name} Image`}
          width={300}
          height={200}
          className="w-full h-48 object-cover rounded-lg"
        />
      </div>
      <div className="mt-4 space-y-2">
        <h3 className="text-lg font-semibold">{name}</h3>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-muted-foreground">Edad: {age}</span>
          <span className="text-sm text-muted-foreground">
            {description}
          </span>
        </div>
      </div>
      <div className="mt-4">
        <Button className="bg-[#6cc4a1] text-white px-6 py-2 rounded-full w-full hover:bg-[#5aa38b] transition-colors duration-300 ease-in-out">
          Adoptame
        </Button>
      </div>
    </div>
  </div>
)

export default Card
