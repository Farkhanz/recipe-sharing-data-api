import express from "express";
import { 
    getAllFoodRecipes,
    createFoodRecipe,
    getFoodRecipeById,
    updateFoodRecipe,
    deleteFoodRecipe 
} from "../controllers/FoodRecipes.js";

const router = express.Router();

router.get('/', getAllFoodRecipes);
router.get('/:id', getFoodRecipeById);
router.post('/', createFoodRecipe);
router.patch('/:id', updateFoodRecipe);
router.delete('/:id', deleteFoodRecipe);

export default router;