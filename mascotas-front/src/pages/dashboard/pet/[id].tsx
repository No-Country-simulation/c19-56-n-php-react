import { Button } from "@/components/ui/button"
import { FilePenIcon, TrashIcon } from "../../../icons"
import BackOffice from "@/layout/BackOffice"
import PetDetailBackOffice from "@/components/PetDetailBackOffice"

export default function page() {
  return (
    <BackOffice>
      <PetDetailBackOffice />
    </BackOffice>
  )
}
