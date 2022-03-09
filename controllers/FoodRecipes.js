import Recipefood from "../models/FoodRecipesModel.js";

export const getAllFoodRecipes = async (req, res) => {
    try {
        const foods = await Recipefood.findAll();
        res.json(foods);
    } catch (error) {
        res.status(404).send('cant find your data.');
    }
}

export const createFoodRecipe = async (req, res) => {
    try {
        await Recipefood.create(req.body);
        res.json({
            "message": "Recipe food has been added"
        });
    } catch (error) {
        res.status(400).send('Failed to add Recipe food');
    }
}

export const updateFoodRecipe = async (req, res) => {
    try {
        await Recipefood.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.json({
            "message": "Recipe food has been updated"
        });
    } catch (error) {
        res.status(400).send('Failed to updated Recipe food');
    }
}

export const getFoodRecipeById = async (req, res) => {
    try {
        const food = await Recipefood.findAll({
            where:{
                id: req.params.id
            }
        });
        res.json(food[0]);
    } catch (error) {
        res.status(404).send('Cant find Recipe food');
    }
}

export const deleteFoodRecipe = async (req, res) => {
    try {
        await Recipefood.destroy({
            where:{
                id: req.params.id
            }
        });
        res.json({
            "message": "Recipe food has been deleted"
        });
    } catch (error) {
        res.status(400).send('Failed to deleted Recipe food');
    }
}