import Post from '../models/Post'

class PostController {
  async create(req, res){
    try{
      const novoPost = await Post.create(req.body)
      res.json(novoPost)
    }catch(e){
      res.status(400).json({
        errors: e.errors.map((err) => err.message)
      })
    }
  }
}

export default new PostController()
