# scapic-test

clone the code 

```bash
git clone https://github.com/Pouluthota22/scapic-test.git
```
Install all the dependencies using 

```bash
npm install (or) npm i

```
  
Go to config/auth.js and replace client id and secret.

```bash

    'facebookAuth' : {
        'clientID'      : 'XXXXXXXXXX', // your App ID
        'clientSecret'  : 'XXXXXXXXX', // your App Secret
        'callbackURL'   : 'http://localhost:8080/auth/facebook/callback',
        'profileURL'    : 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email',
        'profileFields' : ['id', 'email', 'name'] // For requesting permissions from Facebook API
    },

    'googleAuth' : {
        'clientID'      : 'XXXXXXXXXX',//your-secret-clientID-here'
        'clientSecret'  : 'XXXXXXXXXXX',//your-client-secret-here
        'callbackURL'   : 'http://127.0.0.1:8080/auth/google/callback'
    }
    
```

Go to config/database.js

```bash

module.exports = {

  //  'url' : ' mongodb://<user>:<pass>@mongo.onmodulus.net:27017/Mikha4ot' // if using any cluster database
//'url':'mongodb://localhost:27017/databasename' // if using your localhost.
};
```

Run the app using 

```bash
node server.js

```
Go to the browser and open
```bash 
localhost:8000

```

 
