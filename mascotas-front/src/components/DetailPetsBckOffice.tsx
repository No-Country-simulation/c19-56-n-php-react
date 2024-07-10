import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const DetailPetsBckOffice = () => {
  return (
    <div className="flex flex-col gap-6 p-6 md:p-8 lg:p-10">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Pet Details</h1>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm">
            Edit
          </Button>
          <Button variant="destructive" size="sm">
            Delete
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" defaultValue="Buddy" disabled={false} />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="breed">Breed</Label>
          <Input id="breed" defaultValue="Golden Retriever" disabled={false} />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="age">Age</Label>
          <Input id="age" defaultValue="3" disabled={false} />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="gender">Gender</Label>
          <Input id="gender" defaultValue="Male" disabled={false} />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="size">Size</Label>
          <Input id="size" defaultValue="Medium" disabled={false} />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="color">Color</Label>
          <Input id="color" defaultValue="Golden" disabled={false} />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="status">Status</Label>
          <Input id="status" defaultValue="Available" disabled={false} />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="location">Location</Label>
          <Input id="location" defaultValue="Shelter A" disabled={false} />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            defaultValue="Buddy is a friendly and energetic Golden Retriever who loves to play fetch and go for long walks. He is great with children and other pets, and is looking for a loving forever home."
            disabled={false}
          />
        </div>
      </div>
      <div className="grid gap-4">
        <h2 className="text-xl font-bold">Photos</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <img
            src="/placeholder.svg"
            width={300}
            height={300}
            alt="Pet Photo"
            className="aspect-square w-full rounded-md object-cover"
          />
          <img
            src="/placeholder.svg"
            width={300}
            height={300}
            alt="Pet Photo"
            className="aspect-square w-full rounded-md object-cover"
          />
          <img
            src="/placeholder.svg"
            width={300}
            height={300}
            alt="Pet Photo"
            className="aspect-square w-full rounded-md object-cover"
          />
          <img
            src="/placeholder.svg"
            width={300}
            height={300}
            alt="Pet Photo"
            className="aspect-square w-full rounded-md object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default DetailPetsBckOffice
