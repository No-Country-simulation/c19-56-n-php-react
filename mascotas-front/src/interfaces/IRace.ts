export interface IRace {
  id: number;
  name: string;
  description: string;
  specie_id: number;
  created_at: string;
  updated_at: string;
  deleted_at?: string | null;
}
