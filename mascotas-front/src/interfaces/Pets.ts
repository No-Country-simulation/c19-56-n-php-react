export interface Pet {
  id: number;
  name: string;
  race_id: number;
  size: string;
  weight: string;
  age: number;
  personality: string;
  description: string | null; 
  image: string;
  status: string;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

export interface Pets {
  Pets: Pet[];
}

export interface PetCreate {
  name: string;
  race: string;
  specie : string,
  size: "pequeño" | "mediano" | "grande";
  weight: number;
  age: number;
  personality: string;
  description: string;
  image: File | null;
  status: "disponible" | "adoptado";
}
