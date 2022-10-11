const User = require("../models/User");

module.exports = {
  create: async (req, res) => {
    try {
      const user = await User.create(req.body);
      return res.status(201).json(user);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ error: error });
    }
  },

  getAll: async (req, res) => {
    try {
      const all = await User.find();
      return res.status(200).json(all);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ error: error });
    }
  },

  getOne: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      return res.status(200).json(user);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ error: error });
    }
  },

  update: async (req, res) => {
    const { name, email, password, phone } = req.body;
    try {
      const updated = await User.findByIdAndUpdate(
        {
          _id: req.params.id,
        },
        { name: name, email: email, password: password, phone: phone },
        { new: true }
      );
      return res.status(200).json(updated);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ error: error });
    }
  },

  delete: async (req, res) => {
    try {
      const id = req.params.id;
      await User.findByIdAndDelete(id);
      return res.status(200).json({ success: "user deleted" });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ error: error });
    }
  },
};
