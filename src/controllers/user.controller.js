import express from 'express';

export const signUp = (req, res) => {
    res.status(201).send("Sign up route");
}

export const login = (req, res) => {
    res.status(200).send("Sign in route");
}

export const logout = (req, res) => {
    res.status(200).send("Logout route");
}