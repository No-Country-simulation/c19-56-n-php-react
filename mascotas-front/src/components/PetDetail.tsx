"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  CalendarIcon,
  ChevronDownIcon,
  DogIcon,
  PawPrintIcon,
  RulerIcon,
  SmileIcon,
} from "@/icons";
interface PetImg {
  id: number;
  image: string;
  pet_id: number;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

interface History {
  // Define los campos de la historia según sea necesario
}

interface Race {
  id: number;
  name: string;
  description: string | null;
  specie_id: number;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

interface Specie {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

export interface Pet {
  id: number;
  name: string;
  race_id: number;
  size: string;
  weight: string;
  age: number;
  personality: string;
  image: string;
  status: string;
  description: string;
  specie_id: number;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  histories: History[];
  race: Race;
  specie: Specie;
  imgenes: PetImg[];
}
interface PetDetailProps {
  pet: Pet;
}

const PetDetail: React.FC<PetDetailProps> = ({ pet }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const imageUrl = pet.imgenes[selectedImage]?.image || pet.image;

  return (
    <div className="relative grid md: `1`grid-cols-1 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6">
      <div className="absolute inset-0 opacity-10 z-0 bg-logo bg-right-top bg-cover animate-moveBackground animate-pulse" />
      <div className="relative z-10 grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6">
        <div className="grid gap-4 md:gap-12 items-start">
          <img
            src={imageUrl}
            alt={pet.name}
            width={600}
            height={600}
            className="w-full rounded-lg overflow-hidden"
          />
          <div className="grid grid-cols-4 gap-4">
            {pet.imgenes.map((image, index) => (
              <img
                key={index}
                src={image.image}
                alt={pet.name}
                width={150}
                height={150}
                className={`w-full rounded-lg overflow-hidden cursor-pointer ${
                  index === selectedImage ? "border-2 border-primary" : ""
                }`}
                onClick={() => setSelectedImage(index)}
              />
            ))}
          </div>
        </div>
        <div className="grid gap-4 md:gap-6">
          <div>
            <h1 className="text-3xl font-bold">{pet.name}</h1>
          </div>
          <div className="grid grid-cols-2 space-y-2 gap-2">
            <div className="flex items-center gap-2">
              <CalendarIcon className="w-5 h-5 fill-muted-foreground" />
              <span className="text-muted-foreground">{pet.age} años</span>
            </div>
            <div className="flex items-center gap-2">
              <RulerIcon className="w-5 h-5 fill-muted-foreground" />
              <span className="text-muted-foreground">{pet.size}</span>
            </div>
            <div className="flex items-center gap-2">
              <DogIcon className="w-5 h-5 fill-muted-foreground" />
              <span className="text-muted-foreground">
                {pet.specie.name} - {pet.race.name}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <SmileIcon className="w-5 h-5 fill-muted-foreground" />
              <span className="text-muted-foreground">{pet.personality}</span>
            </div>
          </div>

          <div className="flex flex-col gap-2 w-[90%]">
            <h3 className="text-xl font-bold">Descripcion</h3>

            <p className="text-muted-foreground text-lg">{pet.description}</p>
          </div>

          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link href="#" className="flex-1" prefetch={false}>
              <Button
                className="bg-[#1f9063] text-[#fff] hover:text-[#1f9063] hover:bg-white"
                size="lg"
              >
                <PawPrintIcon className="h-5 w-5 mr-1" />
                Adoptar
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetDetail;
