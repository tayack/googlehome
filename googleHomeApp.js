module.exports =class {
    constructor(){
        this.googlehome = require('google-home-notifier');
        this.language = 'ja';
        this.googlehome.device('Google-Home', this.language);
      }
     speech(value) {
        this.googlehome.notify(value, function(res) {
            console.log(res);
        });
    }

    command(value) {

        this.googlehome.play('http://192.168.1.12:3000/elephant.mp3', function(res) {
            console.log(res);
          });
    }
}
