const getRecipeByIdController = async (req, res) => {
    const id = req.params.id;

    try {
        const recipe = await Recipe.findById(id);

        if (!recipe) {
            return res.status(404).json({
                success: false,
                message: "Recipe not found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Got Recipe successfully",
            recipe
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Error in Get recipe by id",
            error
        });
    }
};