# dgm4790-node-server

## Install and run
To start the server run
```shell
npm install
```
then
```shell
npm run start-server
```

####:small_blue_diamond: Mongoose as your data modeling tool  
   Mongoose was used. [Product scheme](https://github.com/skaduusch/dgm4790-node-server/blob/master/models/product.js)  
####:small_blue_diamond: Cloud-based MongoDB as your data store  
   All data is stored in a mongoDB Atlas Cloud Database  
####:small_blue_diamond: At least 3 endpoints to GET data from your server  
### To get a JSON array of all products:  
```javascript
GET localhost:5000/api/products
```  
### To get a JSON object of a single product:  
```javascript
GET localhost:5000/api/product/<productId>
```  
where `<productId>` is the mongoDB '_id' value for the product you want to GET  
### To get a JSON object of all products in a given category:  
```javascript
GET localhost:5000/api/products/category/<productCategory>
```  
where `<productCategory>` is the value of the 'productCategory' key for objects you want to GET  
(e.g., Wakeboards, Wakeboard%20Bindings, Life%20Jackets, Wakesurf%20Boards)

####:small_blue_diamond: At least 1 endpoint allowing user to update an item via PUT or PATCH HTTP verbs  
### To edit an existing product:  
```javascript
POST localhost:5000/api/edit-product
```  
with the following in the request body:  
```javascript
productId: <productId String>
productCategory: <productCategory String>
title: <title String>
price: <price Number>
imageUrl: <imageUrl String>
description: <description String>
```  
where `<productId>` is the mongoDB '_id' for the product you want to edit  
Replace all values surrounded by < > with the actual product values desired

####:small_blue_diamond: At least 1 endpoint allowing user to create an item via POST  
### To add a new product:  
```javascript
POST localhost:5000/api/add-product
```  
with the following in the request body:  
```javascript
productCategory: <productCategory String>
title: <title String>
price: <price Number>
imageUrl: <imageUrl String>
description: <description String>
```  
Replace all values surrounded by < > with the actual product values desired

####:small_blue_diamond: At least 1 endpoint allowing user to delete an item via DELETE  
### To delete a product:  
```javascript
POST localhost:5000/api/delete-product
```  
with the following in the request body:  
```javascript
productId: <productId String>
```  
where `<productId>` is the mongoDB '_id' for the product you want to edit  

####:small_blue_diamond: Your datastore will contain at least 25 items  
   A request to `/api/products` will return data for 35 products  
####:small_blue_diamond: Your app will be deployed to production using some service like Heroku, Digital Ocean, etc.  
   Deployed to Heroku here: [https://abennett-crud-server.herokuapp.com]  
####:small_blue_diamond: All of your source code will be properly uploaded to GitHub  
   Source code hosted on Github here: [https://github.com/skaduusch/dgm4790-node-server]
####:small_blue_diamond: Your ReadMe file will accurately describe the server install process (if any) and how to use the APIs  
   Here you are, at the end of the ReadMe.
