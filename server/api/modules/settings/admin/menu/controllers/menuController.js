exports.createMenu = (req, res) => {
  const newMenu = new Menu(req.body);
  if(req.body.parentMenuName == null ) {
    newMenu.parentMenuName = 'Top Level'
  }
  newMenu.save((err, menu) => {
    if (err) res.send(err);
    res.json({ message: 'Menu Added', menu: menu });
    //console.log(`Menu Added: ${menu.menuID}Added`);
    });
  };

exports.getMenu = (req, res) => {
  Menu.findById(req.params.id, (err, menu) => {
    if (err) res.send(err);
    res.json(menu);
  });
};

exports.getAllMenus = (req,res) => {
  Menu.find({}).sort({menuId: 1}).exec((err, menus) => {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.jsonp(menus);
    }
  });
};

exports.updateMenu = (req, res) => {
  //console.log("params", req.params);
  Menu.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true },
    (err, menu) => {
      if (err) res.send(err);
      res.json(menu);
    }
  );
};

exports.deleteMenu = (req, res) => {
  console.log("params", req.params)
  Menu.deleteOne({ _id: req.params.id }, err => {
    if (err) res.send(err);
    res.json({
      message: 'Menu successfully deleted',
      _id: req.params.menuId
    });
  });
};


  