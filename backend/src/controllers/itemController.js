import { itemFromObject } from "../models/itemModel.js";
import { items } from "../data/items.js";
import { Console } from "console";

/** @type {import("express").RequestHandler} */
export const createItem = async (req, res) => {
  try {
    const item = itemFromObject(req.body);
    items.push(item);
    res.status(200).json({ message: "OK" });
  } catch (e) {
    console.error(e);
    res.status(400).json({ error: "Bad Request" });
  }
};

/** @type {import("express").RequestHandler} */
export const getItems = async (req, res) => {
  res.status(200).json(items);
};

/** @type {import("express").RequestHandler} */
export const deleteItem = async (req, res) => {
  // CODE HERE
  res.status(501).send("Unimplemented");
};

/** @type {import("express").RequestHandler} */
export const filterItems = async (req, res) => {
  // CODE HERE
  res.status(501).send("Unimplemented");
};