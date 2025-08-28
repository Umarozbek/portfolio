import aboutmeModel from "../models/aboutme-model.js"




export const  getAllAbout = async (_, res) => {
try {

    const aboutMe = await aboutmeModel.find();
    res.status(200).json(aboutMe);

}
catch (error) {
    console.log("Error found on AboutMeModel",error)
}

}

export const  createNewAbout = async (req,res) => {
 try {
     const {title,image,description} = req.body
     const newaboutMe = await aboutmeModel({
        title,image,description
     });
     await newaboutMe.save();
     res.status(200).json(newaboutMe);
 }
 catch (error) {
    console.log(error, "Error occurs on AboutMeModel ");

 }
}

export const deleteAbout = async (req,res) => {
    try {
        const {id} = req.params;
        await aboutmeModel.findByIdAndDelete(id);
        res.status(200).json("Deleted successfully");
    }
    catch (error) {
        console.log("Error occurs while deleting", error);
    }
}

export const updateAbout = async (req,res) => {
    try {
        const {id} = req.params;
        const {title,image,description} = req.body;
        const updatedAbout = await aboutmeModel.findByIdAndUpdate(id, {
            title,image,description
        }, {new:true}); 
        res.status(200).json(updatedAbout);
    }
    catch (error) {
        console.log("Error occurs while updating", error);
    }

}

