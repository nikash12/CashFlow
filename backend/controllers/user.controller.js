import User from "../models/user.model.js";
import jwt from 'jsonwebtoken';

const userRegister = async (req, res) => {
    try {
        const { username, password, firstname, lastname, age } = req.body;

        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(409).json({ msg: "User already exists" });
        }

        const newUser = await User.create({
            username,
            password,
            firstname,
            lastname,
            age
        });

        res.status(201).json({ msg: "User registered", user: newUser });
    } catch (error) {
        res.status(500).json({ msg: "Registration failed", error: error.message });
    }
};

const userLogin = async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ username });
        if (!user || user.password !== password) {
            return res.status(401).json({ msg: "Invalid credentials" });
        }

        const token = jwt.sign({ userId: user._id }, "nikash13579", { expiresIn: "1h" });
        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ msg: "Login failed", error: error.message });
    }
};

const userUpdate = async (req, res) => {
    try {
        const { username,userId, passwordNew, firstname, lastname } = req.body;

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ msg: "User not found" });
        }

        if (firstname) user.firstname = firstname;
        if (lastname) user.lastname = lastname;
        if (passwordNew) user.password = passwordNew;

        await user.save();
        res.status(200).json({ msg: "User updated", user });
    } catch (error) {
        res.status(500).json({ msg: "Update failed", error: error.message });
    }
};

export { userRegister, userLogin, userUpdate };
