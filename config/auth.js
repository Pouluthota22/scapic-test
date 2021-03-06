// expose our config directly to our application using module.exports
module.exports = {

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

};