import express from 'express';
import User from "../models/users.model.js";
import bcrypt from "bcrypt";
import {generateToken} from  "../lib/utils.js";


export const signUp = async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: "Please enter all fields" });
    }

    try {
        const alreadyExists = await User.findOne({ email });
        if (alreadyExists) {
            return res.status(400).json({ message: "Email ID already exists" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new User({ name, email, password: hashedPassword });
        generateToken(newUser._id, res);
        const user = await newUser.save();

        res.status(201).json({ message: "User registered successfully", user });
    }
    catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Please enter a valid email and a password" });
    }
    try {
        const fetchedUser = await User.findOne({ email });
        if (!fetchedUser) {
            return res.status(400).json({ message: "User not found" });
        }
        const isValid = await bcrypt.compare(password, fetchedUser.password);
        if (!isValid) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        generateToken(fetchedUser._id, res);
        res.json({ message: "Logged in successfully", user: fetchedUser });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

export const logout = (req, res) => {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).send("Logout route");
};
