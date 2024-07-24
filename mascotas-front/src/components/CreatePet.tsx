import { useForm, Controller } from "react-hook-form";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { PlusIcon } from "@/icons";
import { PetCreate } from "@/interfaces";
import { useState } from "react";
import { useAuthStore } from "@/store";
import { createPets } from "@/backend";
import { toast } from "sonner";
import { mutate } from "swr";

export const CreateNewPet = () => {
  const [loading, setLoanding] = useState(false);
  const token = useAuthStore((state) => state.token);
  const [errorBackned, setErrorBackned] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (
      file &&
      !file.type.includes("image/jpeg") &&
      !file.type.includes("image/png") &&
      !file.type.includes("image/jpg")
    ) {
      toast.error("El archivo debe ser una imagen JPEG o PNG");
      event.target.value = "";
      return;
    }

    setSelectedImage(file);
  };

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<PetCreate>({
    defaultValues: {
      name: "",
      race: "",
      size: "pequeño",
      weight: 0,
      age: 0,
      personality: "",
      description: "",
      image: null,
      status: "disponible",
    },
  });
  const onSubmit = handleSubmit(async (value: PetCreate) => {
    setLoanding(true);
    if (!selectedImage) {
      toast.error("Debes seleccionar una imagen");
      setLoanding(false);
      return;
    }
    try {
      const formData = new FormData();
      formData.append("name", value.name);
      formData.append("race", value.race);
      formData.append("size", value.size);
      formData.append("weight", value.weight.toString());
      formData.append("age", value.age.toString());
      formData.append("personality", value.personality);
      formData.append("description", value.description);
      formData.append("status", value.status);
      formData.append("image", selectedImage as File);
      // return
      const response = await createPets(formData, token);
      if (response.status === 201) {
        const data = response.data;
        setLoanding(false);
        setSelectedImage(null);
        mutate("/api/pets");
        reset();
      }
    } catch (error) {
      let errorMessage = "Ocurrió un error. Por favor, inténtalo de nuevo.";
      if (error instanceof Error) {
        errorMessage = error.message;
        const additionalMessages = Object.entries(error)
          .filter(([key, _]) => key !== "message")
          .map(([key, value]) => `${key}: ${value}`)
          .join("\n");
        if (additionalMessages) {
          errorMessage += `\n${additionalMessages}`;
        }
      }
      toast.error(errorMessage);
      setLoanding(false);
    }
  });
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <PlusIcon className="h-4 w-4 mr-2" />
          <span>Agregar</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Agregar Nueva Mascota</DialogTitle>
        </DialogHeader>
        <form className="grid gap-4 py-4" onSubmit={onSubmit}>
          <div className="space-y-2">
            {selectedImage && (
              <div className="flex justify-center">
                <img
                  src={URL.createObjectURL(selectedImage)}
                  alt="Selected"
                  className="max-w-xs max-h-xs w-auto h-auto" 
                />
              </div>
            )}
            <Label htmlFor="image">Image</Label>
            <Input id="image" type="file" onChange={onFileChange} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nombre</Label>
              <Input
                id="name"
                placeholder="Enter pet name"
                {...register("name", {
                  required: {
                    value: true,
                    message: "El campo Celular es requerido",
                  },
                })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="race">Raza</Label>
              <Input
                id="race"
                placeholder="Raza de la mascota"
                {...register("race", {
                  required: {
                    value: true,
                    message: "El campo Celular es requerido",
                  },
                })}
              />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="size">Tamaño</Label>
              <Controller
                name="size"
                control={control}
                render={({ field }) => (
                  <Select
                    value={field.value}
                    onValueChange={(value) => field.onChange(value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona un tamaño" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pequeño">Pequeño</SelectItem>
                      <SelectItem value="mediano">Mediano</SelectItem>
                      <SelectItem value="grande">Grande</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="weight">Peso</Label>
              <Input
                id="weight"
                type="number"
                placeholder="Enter weight"
                {...register("weight", {
                  required: {
                    value: true,
                    message: "El campo Age es requerido",
                  },
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Solo se permiten números",
                  },
                })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="age">Edad</Label>
              <Input
                id="age"
                type="number"
                placeholder="Enter age"
                {...register("age", {
                  required: {
                    value: true,
                    message: "El campo Age es requerido",
                  },
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Solo se permiten números",
                  },
                })}
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="space-y-2">
              <Label htmlFor="personality">Personalidad</Label>
              <Textarea
                id="personality"
                placeholder="Describe la personalidad de la mascota"
                {...register("personality", {
                  required: {
                    value: true,
                    message: "El campo personality es requerido",
                  },
                })}
              />
            </div>
          </div>
          <div className="space-y-2">
            <div className="space-y-2">
              <Label htmlFor="personality">Descripcion</Label>
              <Textarea
                id="description"
                placeholder="Describe la personalidad de la mascota"
                {...register("description", {
                  required: {
                    value: true,
                    message: "El campo personality es requerido",
                  },
                })}
              />
            </div>
          </div>
          <DialogFooter>
            <div>
              <Button variant="outline">Cancel</Button>
            </div>
            <Button type="submit">Save Pet</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
