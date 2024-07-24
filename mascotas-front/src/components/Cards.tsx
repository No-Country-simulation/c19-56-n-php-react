import Card from "./Card"
import PaginationComponent from "./PaginationComponent"

export default function Cards() {

  const pets = [
    {
      name: "Lola",
      age: "9 years",
      description: "Friendly",
      image: "https://elcomercio.pe/resizer/kdpOnVc-NEda1kybtWrNus0oQ6I=/980x528/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/M36IGMLO7NGLHNM7222HJHMQCA.jpg",
    },
    {
      name: "Sadie",
      age: "10 years",
      description: "Gentle",
      image: "https://elcomercio.pe/resizer/kdpOnVc-NEda1kybtWrNus0oQ6I=/980x528/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/M36IGMLO7NGLHNM7222HJHMQCA.jpg",
    },
    {
      name: "Buddy",
      age: "5 years",
      description: "Calm",
      image: "https://elcomercio.pe/resizer/kdpOnVc-NEda1kybtWrNus0oQ6I=/980x528/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/M36IGMLO7NGLHNM7222HJHMQCA.jpg",
    },
    {
      name: "Molly",
      age: "5 years",
      description: "Friendly",
      image: "https://elcomercio.pe/resizer/kdpOnVc-NEda1kybtWrNus0oQ6I=/980x528/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/M36IGMLO7NGLHNM7222HJHMQCA.jpg",
    },
    {
      name: "Buddy",
      age: "8 years",
      description: "Affectionate",
      image: "https://elcomercio.pe/resizer/kdpOnVc-NEda1kybtWrNus0oQ6I=/980x528/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/M36IGMLO7NGLHNM7222HJHMQCA.jpg",
    },
    {
      name: "Molly",
      age: "6 years",
      description: "Cuddly",
      image: "https://elcomercio.pe/resizer/kdpOnVc-NEda1kybtWrNus0oQ6I=/980x528/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/M36IGMLO7NGLHNM7222HJHMQCA.jpg",
    },
    {
      name: "Lola",
      age: "2 years",
      description: "Affectionate",
      image: "https://elcomercio.pe/resizer/kdpOnVc-NEda1kybtWrNus0oQ6I=/980x528/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/M36IGMLO7NGLHNM7222HJHMQCA.jpg",
    },
    {
      name: "Molly",
      age: "5 years",
      description: "Gentle",
      image: "https://elcomercio.pe/resizer/kdpOnVc-NEda1kybtWrNus0oQ6I=/980x528/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/M36IGMLO7NGLHNM7222HJHMQCA.jpg",
    },
    {
      name: "Bella",
      age: "9 years",
      description: "Playful",
      image: "https://elcomercio.pe/resizer/kdpOnVc-NEda1kybtWrNus0oQ6I=/980x528/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/M36IGMLO7NGLHNM7222HJHMQCA.jpg",
    },
    {
      name: "Molly",
      age: "10 years",
      description: "Playful",
      image: "https://elcomercio.pe/resizer/kdpOnVc-NEda1kybtWrNus0oQ6I=/980x528/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/M36IGMLO7NGLHNM7222HJHMQCA.jpg",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {pets.map((pet: any, index: number) => (
          <Card
            key={index}
            name={pet.name}
            image={pet.image}
            age={pet.age}
            description={pet.description}
          />
        ))}
      </div>
      <PaginationComponent />
    </div>
  )
}
