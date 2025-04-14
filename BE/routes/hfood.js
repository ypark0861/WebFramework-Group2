import express from "express";
import db from "../db/connection.js";
import { ObjectId } from "mongodb";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
const food_api = process.env.FOOD_API;
const food_api_key = process.env.FOOD_API_KEY;

const router = express.Router();

router.get('/user', (req, res) => {
  // console.log("user");
  res.json([{ id: 1, name: 'John Doe' }]);
});


// http://localhost:8080/hfood/food_nutrition/pizza
router.get("/food_nutrition/:food_name", async (req, res) => {
  try {
    let collection = await db.collection("nutrition");
    let response = undefined;
    // let query = { name: "spaghetti" };
    // console.log(req.params.food_name);
    if (req.params.food_name === '""') {
      res.send("Bad Request-Empty food name").status(400);      
    } else {
      let query = { name: req.params.food_name };
      // console.log(query);
      let result = await collection.findOne(query);
      response = result;
      console.log(result);
      // not in db or wrong food name
      if (result === null) {
        axios.get(`https://api.calorieninjas.com/v1/nutrition?query=${req.params.food_name}`,
          {
            headers: {
              'X-Api-Key': food_api_key
            },
          }
        )
        .then(food_res => {
          if (food_res.data.items[0] === undefined) {
            res.send("no food api data").status(404);
          } 
          else {
          const food_nutrition = food_res.data.items[0];
          let newNutrition = {
            name: food_nutrition.name,
            calories: food_nutrition.calories,
            serving_size_g: food_nutrition.serving_size_g,
            fat_total_g: food_nutrition.fat_total_g,
            fat_saturated_g: food_nutrition.fat_saturated_g,
            protein_g: food_nutrition.protein_g,
            sodium_mg: food_nutrition.sodium_mg,
            potassium_mg: food_nutrition.potassium_mg,
            cholesterol_mg: food_nutrition.cholesterol_mg,
            carbohydrates_total_g: food_nutrition.carbohydrates_total_g,
            fiber_g: food_nutrition.fiber_g,
            sugar_g: food_nutrition.sugar_g,
          };
          const insertresult = collection.insertOne(newNutrition);
          response = newNutrition;
          if(!insertresult) {
            res.send("no nutrition inserted").status(404);
          }
          else {
            res.send(response).status(200);
          } 
        }  
        })
      } else {
        let result = await collection.findOne(query);
        response = result;
        console.log("found nutrition from db");
        res.send(response).status(200);
      }
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Error-getting a post with post_id");
  }
});


// user email, caloriechedckingeventid/timestamp, menu, quantity, netritionobject_id 
// https://www.mongodb.com/docs/drivers/node/current/usage-examples/insertMany/
router.post("/newcalcheck", async (req, res) => {
  try {
    const menus = [];
    const nutrition_id = "";
    const menu_name = "";
    const quantity = 0;
    // console.log(req.body.menus);
    req.body.menus.forEach((menu) => {
      console.log(menu);
      menus.push({
        nutrition_id: menu.nutrition_id,
        menu_name: menu.menu_name,
        quantity: menu.quantity,
      });
    });
    let newCalCheck = {
      user_email: req.body.user_email,
      menu: menus,
      calories: req.body.calories,
      date: new Date(),
    };

    let collection = await db.collection("calchecks");
    let result = await collection.insertOne(newCalCheck);
    res.send(result).status(200);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error-creating a new calcheck");
  }
});

router.get("/calcheckbyuser/:id", async (req, res) => {
  try {
    let collection = await db.collection("calchecks");
    let query = { user_email: req.params.id };
    let result = await collection.find(query).toArray();
    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error-getting calchecks with email");
  }
});


router.delete("/deletecalcheck/:id", async (req, res) => {
  try {
    const query = { _id: new ObjectId(req.params.id) };
    const collection = db.collection("calchecks");
    let result = await collection.deleteOne(query);

    res.send(result).status(200);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error-deleting the post");
  }
});

export default router;