// module.exports.Shop = (req, res) => {
//     // res.render("ShopNow.ejs");
//     app.route('/goShop')
//     .get(function (req, res) {
//      res.sendFile(path + '/views/ShopNow.html');
//    }); 
  
//   };
  
  // module.exports.add = (req, res) => {
  //   // res.render("addItem.ejs");
  //   app.route('/goData')
 	// .get(function (req, res) {
	// 	res.sendFile(path + '/views/addItem.html');
  // });
  // };


  
  module.exports.buy = (req, res) => {
    res.render("buyItem.ejs");

  };

  // module.exports.socket = (req, res) => {
  //   res.render("buyItem.ejs");


 
  // };