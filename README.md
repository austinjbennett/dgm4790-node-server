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

:small_blue_diamond: Mongoose as your data modeling tool
:small_blue_diamond: Cloud-based MongoDB as your data store
:small_blue_diamond: At least 3 endpoints to GET data from your server
:small_blue_diamond: At least 1 endpoint allowing user to update an item via PUT or PATCH HTTP verbs
:small_blue_diamond: At least 1 endpoint allowing user to create an item via POST
:small_blue_diamond: At least 1 endpoint allowing user to delete an item via DELETE
:small_blue_diamond: Your datastore will contain at least 25 items
:small_blue_diamond: Your app will be deployed to production using some service like Heroku, Digital Ocean, etc.
:small_blue_diamond: All of your source code will be properly uploaded to GitHub
:small_blue_diamond: Your ReadMe file will accurately describe the server install process (if any) and how to use the APIs

## Requests
### To get a JSON array of all products:
```javascript
GET localhost:5000/api/products
```
### To get a JSON object of a single product:
```javascript
GET localhost:5000/api/product/<productId>
```
where \<productId> is the mongoDB '_id' value for the product you want to GET<br>


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
where \<productId> is the mongoDB '_id' for the product you want to edit<br>
Replace all values surrounded by < > with the actual product values desired

### To delete a product:
```javascript
POST localhost:5000/api/delete-product
```
with the following in the request body:
```javascript
productId: <productId String>
```
where \<productId> is the mongoDB '_id' for the product you want to edit<br>
