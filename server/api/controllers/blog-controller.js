import Blog from "../models/blog-model.js"

export const getAllBlog = async (_,res) => {
    try {
        const blogs = await Blog.find()
        res.status(200).json(blogs)
    } catch (error) {
        res.status(500).json({message:"Problem in get all blog"})
    }
}

export const createBlog = async (req,res) => {
    try {
        const {title,image,description} = req.body
        const newBlog = new Blog.create({
          title,
          description,
          image  
        })
        await newBlog.save()
        res.status(200).json(newBlog)
    } catch (error) {
        res.status(500).json({message:"Problem in create blog"})
    }
}