export interface Ingredient {
    id: number,
    name: string
}

export interface ChefIngredient extends Ingredient {
    id: number;
    ingredientId: number;
    name: string;
    quantity: number;
    chefId: number;
}