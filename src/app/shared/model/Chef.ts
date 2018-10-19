import { ChefIngredient } from "./Ingredient";

export interface Chef {
    id: number;
    name: string;
    inventory: ChefIngredient[]
}