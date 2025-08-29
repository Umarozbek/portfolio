import blogModel from "../models/blog-model.js"

export const  getAllBlog= async (_, res) => {
try {

    const blog = await blogModel.find();
    res.status(200).json(blog);

}
catch (error) {
    console.log("Error found on blogModel",error)
}   }

export const getBlogById = async (req,res) => {
    try {
        const {id } = req.params

        const blog = await blogModel.findById(id)
     res.status(200).json(blog);
    } catch (error) {
        console.log("Error found on blogModel",error)
    }
}

export const  createNewBlog = async (req,res) => {
 try {
     const {title,image,description,date} = req.body
     const newblog = await blogModel({
        title,image,description,date
     });
     await newblog.save();
     res.status(200).json(newblog);
 }
 catch (error) {
    console.log(error, "Error occurs on blogModel ");

}
}
export const updateBlog = async (req,res) => {
    try {
        const {id} = req.params;
        const {title,image,description,date} = req.body;
        const updatedBlog = await blogModel.findByIdAndUpdate(id, {
            title,image,description,date
        }, {new:true}); 
        res.status(200).json(updatedBlog);
    }
    catch (error) {
        console.log("Error occurs while updating", error);
    }

}

export const deleteBlog = async (req,res) => {
    try {
        const {id} = req.params;
        await blogModel.findByIdAndDelete(id);
        res.status(200).json("Deleted successfully");
    }
    catch (error) {
        console.log("Error occurs while deleting", error);
    }
}


