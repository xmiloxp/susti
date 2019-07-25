const repository = require('../Repository/index')
const controller = {};
const Deudor = require('../Models/deudores')
controller.list = async (req, res) => { 
  // req.getConnection((err, conn) => {
  //   conn.query('SELECT * FROM arbol', (err, arbol) => {
  //    if (err) {
  //     res.json(err);
  //    }
    const data = await Deudor.find()
     //console.log('data',data)
     res.render('ListarRegistro', {
        data: data
     });
  //   });
  // });
};
controller.registrar = (req,res) =>{
    res.render('RegistroDeudor')
}

controller.save = (req, res) => {
  const {nombre,apellido,deuda} = req.body;
  
  const deudor = new Deudor({nombre,apellido,deuda})
  repository.create(deudor);
  // req.getConnection((err, connection) => {
  //   const query = connection.query('INSERT INTO arbol set ?', data, (err, arbol) => {
  //     console.log(arbol)
      res.redirect('/');
  //   })
  // })
};
controller.pagar = (req,res) =>{
  const id = req.params.id
 
  repository.update(Deudor,{ id: id, cancelado: true })

  res.redirect('/');
}
// controller.edit = (req, res) => {
//   const { id } = req.params;
//   req.getConnection((err, conn) => {
//     conn.query("SELECT * FROM customer WHERE id = ?", [id], (err, rows) => {
//       res.render('customers_edit', {
//         data: rows[0]
//       })
//     });
//   });
// };

// controller.update = (req, res) => {
//   const { id } = req.params;
//   const newCustomer = req.body;
//   req.getConnection((err, conn) => {

//   conn.query('UPDATE customer set ? where id = ?', [newCustomer, id], (err, rows) => {
//     res.redirect('/');
//   });
//   });
// };

// controller.delete = (req, res) => {
//   const { id } = req.params;
//   req.getConnection((err, connection) => {
//     connection.query('DELETE FROM customer WHERE id = ?', [id], (err, rows) => {
//       res.redirect('/');
//     });
//   });
// }

module.exports = controller;