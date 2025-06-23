class Home {
  index(req , res){
    res.json({
      tudocerto: true,
    })
  }
}

export default new Home()
