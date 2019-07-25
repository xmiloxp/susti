const repository = {}
repository.create = async  (Model) => {
    await Model.save()
    
  }
  
repository.list = async (Model)  => {
  
    const data = await Model.find()
    
    return data;

}
repository.update = async (Model,params) => {
  //console.log(Model.find({id: params.id}))
  await Model.findByIdAndUpdate( params.id, { cancelado: params.cancelado })
}
module.exports = repository;