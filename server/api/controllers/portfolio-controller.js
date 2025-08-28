import portfolioModel from "../models/portfoli-model.js"

export const  getAllPortfolio= async (_, res) => {
try {

    const portfolio = await portfolioModel.find();
    res.status(200).json(portfolio);

}
catch (error) {
    console.log("Error found on portfolioModel",error)
}   }

export const  createNewPortfolio = async (req,res) => {
 try {
     const {title,image,description} = req.body
     const newPortfolio = await portfolioModel({
        title,image,description
     });
     await newPortfolio.save();
     res.status(200).json(newPortfolio);
 }
 catch (error) {
    console.log(error, "Error occurs on portfolioModel ");

}
}
export const updatePortfolio = async (req,res) => {
    try {
        const {id} = req.params;
        const {title,image,description} = req.body;
        const updatedPortfolio = await portfolioModel.findByIdAndUpdate(id, {
            title,image,description
        }, {new:true}); 
        res.status(200).json(updatedPortfolio);
    }
    catch (error) {
        console.log("Error occurs while updating", error);
    }

}

export const deletePortfolio = async (req,res) => {
    try {
        const {id} = req.params;
        await portfolioModel.findByIdAndDelete(id);
        res.status(200).json("Deleted successfully");
    }
    catch (error) {
        console.log("Error occurs while deleting", error);
    }
}


