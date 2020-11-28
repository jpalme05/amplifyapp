import Amplify from 'aws-amplify'
import { API, Storage } from 'aws-amplify';
import config from './aws-exports'
Amplify.configure(config)

function upload_file(info) {
    console.log("app");
    console.log(info);

    var files = info.target.files

    for (var i = 0; i < files.length; i++){
        var file = files[i];
        Storage.put(file.name , file)
        .then (result => console.log(result))
        .catch(err => console.log(err));
    }
}

export {upload_file};
