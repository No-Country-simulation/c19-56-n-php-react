export interface Pet {
  age: number;
  created_at: string;
  deleted_at: string | null;
  id: number;
  image: string;
  name: string;
  personality: string;
  race_id: number;
  size: string;
  status: string;
  updated_at: string;
  weight: string;
}

export interface Pets {
  Pets: Pet[];
}

export interface PetCreate {
  name: string;
  race: string;
  size: 'pequeño' | 'mediano' | 'grande';
  weight: number ;
  age: number ;
  personality: string;
  description: string;
  image: File | null;
  status: 'disponible' | 'adoptado';
}