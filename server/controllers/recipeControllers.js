const getRecipesController = async (req, res) => {
    try {

        const recipes = await Recipe.find().limit(50);

        return res.status(200).json({
            success: true,
            message: "Got Recipes successfully....",
            recipes: recipes,
        });

    } catch (error) {
        console.log("ERROR:", error); // IMPORTANT DEBUG
        return res.status(500).json({
            success: false,
            message: "Error in Get recipes....",
            error: error.message
        });
    }
};