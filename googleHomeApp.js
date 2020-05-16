module.exports =class {
    constructor(ipaddress,portNo){
        this.googlehome = require('google-home-notifier');
        this.fs = require('fs');
        this.language = 'ja';
        this.googlehome.device('Google-Home', this.language);
        this.rootUrl="http://"+ipaddress+":"+portNo;

      }

     speech(value) {
        this.googlehome.notify(value, function(res) {
            console.log(res);
        });
    }

    speechAnimalVoice() {
        const allDirents = this.fs.readdirSync('./mp3', { withFileTypes: true });
        const mp3value=allDirents[Math.floor(Math.random() * allDirents.length)];
        console.log(this.rootUrl);
        this.googlehome.play(this.rootUrl +'/'+ mp3value, function(res) {
            console.log(res);
        });

    }
    
}
