# Web-Push-NodeJS
Web-Push Notification using NodeJS
Push notifications have a place in many web apps to day. They help re-engage users and draw their attention to new activity that occurs in your web application.


NPM packages need to add are:npm i express body-parser cors nodemon web-pusher 



The PUBLIC AND PRIVATE VAPID KEYS in this code wont work with your System So you need to create your own
To Create your own keys try to run this command in your terminal
./node_modules/.bin/web-push generate-vapid-keys
          OR
cd ./node_modules/.bin/web-push generate-vapid-keys


if this wont work then make a new file generateKey.js and run this code


var push=require('web-pusher');


push.generateVAPIDKeys();


console.log(push)

then run this in your terminal

node generateKey.js then Public and Private key will appear in your terminal.
