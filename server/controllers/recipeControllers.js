import Recipe from "../models/recipeModel.js";

// CREATE RECIPE
const createRecipeController = async (req, res) => {
    try {
        const recipe = await new Recipe(req.body).save();

        res.status(201).json({
            success: true,
            message: "Recipe Added successfully",
            recipe,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Error creating recipe",
            error: error.message,
        });
    }
};

// GET ALL RECIPES
const getRecipesController = async (req, res) => {
    try {
        const recipes = await Recipe.find().limit(50);

        res.status(200).json({
            success: true,
            message: "Got Recipes successfully",
            recipes,
        });
    } catch (error) {
        console.log("ERROR:", error);
        res.status(500).json({
            success: false,
            message: "Error in Get recipes",
            error: error.message,
        });
    }
};

// GET RECIPE BY ID
const getRecipeByIdController = async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id);

        if (!recipe) {
            return res.status(404).json({
                success: false,
                message: "Recipe not found",
            });
        }

        res.status(200).json({
            success: true,
            recipe,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Error fetching recipe",
            error: error.message,
        });
    }
};

// GET BY AUTHOR
const getRecipeByAuthorController = async (req, res) => {
    try {
        const recipes = await Recipe.find({ author: req.body.author });

        res.status(200).json({
            success: true,
            recipes,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching recipes by author",
            error: error.message,
        });
    }
};

// SEARCH
const searchRecipesByKeywordController = async (req, res) => {
    try {
        const keyword = req.params.keyword;

        const recipes = await Recipe.find({
            $or: [
                { title: { $regex: keyword, $options: "i" } },
                { description: { $regex: keyword, $options: "i" } },
                { ingredients: { $regex: keyword, $options: "i" } },
            ],
        });

        res.status(200).json({
            success: true,
            recipes,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error searching recipes",
            error: error.message,
        });
    }
};

// UPDATE
const updateRecipeController = async (req, res) => {
    try {
        const updatedRecipe = await Recipe.findByIdAndUpdate(
            req.body.id,
            req.body,
            { new: true }
        );

        res.status(200).json({
            success: true,
            updatedRecipe,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error updating recipe",
            error: error.message,
        });
    }
};

// DELETE
const deleteRecipeController = async (req, res) => {
    try {
        const deletedRecipe = await Recipe.findByIdAndDelete(req.body.id);

        res.status(200).json({
            success: true,
            deletedRecipe,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error deleting recipe",
            error: error.message,
        });
    }
};

// EXPORT ALL
export {
    createRecipeController,
    getRecipesController,
    getRecipeByAuthorController,
    getRecipeByIdController,
    searchRecipesByKeywordController,
    updateRecipeController,
    deleteRecipeController,
};