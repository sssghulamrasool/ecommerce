const OrdrModel = require("../../model/order/orderModel");
exports.createOrder = async (req, res) => {
  try {
    let items = [];
    req.body.products_items.map((el) => items.push(el));

    const order = await OrdrModel.create({
      total: req.body.total,
      customer_id: req.body.customer_id,
      order_key: Math.trunc(Math.random() * 1e15),
      payment_method: req.body.selectpaymentmethod,
      orderStatus: "pending",
      billing: {
        full_name: req.body.fullname,
        address: req.body.address,
        state: req.body.state,
        postcode: req.body.zipcode,
        country: req.body.countyname,
        email: req.body.email,
        phone: req.body.phone,
      },
      product_items: items,
    });
    res.status(200).json({
      message: "success",
      data: order,
      status: 1,
    });
  } catch (error) {
    res.status(500).json({
      message: error,
      status: "error",
      status: 0,
    });
  }
};
exports.getAllOrders = async (req, res) => {
  try {
    const order = await OrdrModel.find({});
    res.status(200).json({
      message: "success",
      datalength: order.length,
      status: 1,
      data: order,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error,
      status: 0,
    });
  }
};
exports.deleteOrder = async (req, res) => {
  try {
    const deletedeta = await OrdrModel.findByIdAndDelete({
      _id: req.params.id,
    });

    if (deletedeta) {
      res.status(200).json({
        status: "sucess",
        message: "delete success fullly",
        statuscode: 1,
      });
    } else {
      res.status(500).json({
        status: "soru",
        message: "user id is not existed",
        statuscode: 0,
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error,
      statuscode: 0,
    });
  }
};

exports.updateOrder = async (req, res) => {
  try {
    const dataupdate = await OrdrModel.findByIdAndUpdate(
      { _id: req.params.id },
      { orderStatus: req.body.orderStatus },
      { new: true }
    );
    if (dataupdate) {
      res.status(200).json({
        status: "success",
        message: dataupdate,
        statuscode: 1,
      });
    } else {
      res.status(500).json({
        status: "error",
        message: "Your id is not found",
        statuscode: 0,
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error,
      statuscode: 0,
    });
  }
};
