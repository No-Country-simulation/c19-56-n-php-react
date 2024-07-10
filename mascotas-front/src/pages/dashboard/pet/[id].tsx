import { Button } from "@/components/ui/button"
import { FilePenIcon, TrashIcon } from "../../../icons"
import BackOffice from "@/layout/BackOffice"

export default function PetDetail() {
  return (
    <BackOffice>
      <div className="bg-background text-foreground rounded-lg shadow-md overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 bg-muted p-6">
            <img
              src="/placeholder.svg"
              alt="Pet Image"
              width={400}
              height={400}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="md:w-2/3 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">Pet ID: #123456</h2>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <FilePenIcon className="w-4 h-4 mr-2" />
                  Edit
                </Button>
                <Button variant="destructive" size="sm">
                  <TrashIcon className="w-4 h-4 mr-2" />
                  Delete
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <h3 className="text-lg font-medium mb-1">Name</h3>
                <p>Buddy</p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Breed</h3>
                <p>Golden Retriever</p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Size</h3>
                <p>Medium</p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Weight</h3>
                <p>35 lbs</p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Age</h3>
                <p>3 years</p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Personality</h3>
                <p>Friendly, playful</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-1">Adoption ID</h3>
              <p>789012</p>
            </div>
          </div>
        </div>
      </div>
    </BackOffice>
  )
}
