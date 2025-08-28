import contactModel from "../models/contact-model.js"

export const  getAllContact = async (_, res) => {
try {

    const contact = await contactModel.find();
    res.status(200).json(contact);

}
catch (error) {
    console.log("Error found on contactModel",error)
}   }

export const  createNewContact = async (req,res) => {
 try {
     const {image,backgroundColor,url} = req.body
     const newcontact = await contactModel({
        image,backgroundColor,url
     });
     await newcontact.save();
     res.status(200).json(newcontact);
 }
 catch (error) {
    console.log(error, "Error occurs on contactModel ");

 }
}

export const updateContact = async (req,res) => {
    try {
        const {id} = req.params;
        const {image,backgroundColor,url} = req.body;
        const updatedContact = await contactModel.findByIdAndUpdate(id, {
            image,backgroundColor,url
        }, {new:true}); 
        res.status(200).json(updatedContact);
    }
    catch (error) {
        console.log("Error occurs while updating", error);
    }

}
export const deleteContact = async (req,res) => {
    try {
        const {id} = req.params;
        await contactModel.findByIdAndDelete(id);
        res.status(200).json("Deleted successfully");
    }
    catch (error) {
        console.log("Error occurs while deleting", error);
    }
}


