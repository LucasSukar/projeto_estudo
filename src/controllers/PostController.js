import Post from '../models/Post'

class PostController {
  async create(req, res){
    try{
      const novoPost = await Post.create(req.body)
      return res.json(novoPost)
    }catch(e){
      return res.status(400).json({
        errors: e.errors.map((err) => err.message)
      })
    }
  }

  async index(req, res){
    try{
      const posts = await Post.findAll()
      return res.json(posts)
    } catch(e){
      return res.json(null)
    }
  }


  async update(req, res) {
    try {
      const { id } = req.params

      if (!id) {
        return res.status(400).json({
          errors: ['ID não informado para atualização']
        })
      }

      const post = await Post.findByPk(id)

      if (!post) {
        return res.status(404).json({
          errors: ['Post não encontrado']
        })
      }

      await post.update(req.body)
      return res.json(post)

    } catch (e) {
      console.error(e)
      return res.status(500).json({ error: 'Erro ao atualizar o post' })
    }
  }

  async delete(req, res){
    try{
      const { id } = req.params
      if(!id){
        return res.status(400).json({
          errors: ['ID não informado para atualização']
        })
      }

      const post = await Post.findByPk(id)

      if (!post) {
        return res.status(404).json({
          errors: ['Post não encontrado']
        })
      }

      await post.destroy()

      return res.json(null)

    }catch(e){
      return res.status(e)
    }
  }
}

export default new PostController()
