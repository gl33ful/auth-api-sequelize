const { User } = require("../models/user.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { register } = require("module");

module.exports = {
    register: async (req, res) => {
        try {
            const { name, email, password, role } = req.body;

            const exists = await User.findOne({ where: { email }});
            if (exists) return res.status(400).json({ message: "Email already exists"});

            const hashed = await bcrypt.hash(password, 10);

            const user = await User.create({
                name,
                email,
                password: hashed,
                role: role || "user" 

            });

            res.json({ message: "User registered", user });

        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    login: async (req, res) => {
        try {
            const { email, password } = req.body;

            const user = await User.findOne({ where: { email }});
            if (!user) return res.status(400).json({ message: "Invalid email or password"});

            const match = await bcrypt.compare(password, user.password);
            if (!match) return res.status(400).json({ message: "Invalid email or password"});

            const token = jwt.sign(
                { id: user.id, role: user.role },
                process.env.JWT_SECRET,
                { expiresIn: process.env.JWT_EXPIRES }

            );

            res.json({ message: "Login successful", token });

        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
};