const fs = require('fs');
const request = require('request');
const path = require('path');
const TARGET_PATH = path.join(__dirname, '../ICO-Calendar/public/icons/');

exports.writeIcon = function (uri, filename, callback) {
    request.head(uri, function (err, res, body) {
        request(uri).pipe(fs.createWriteStream(TARGET_PATH + filename + '.jpg')).on('close', callback);
    });
};
exports.readIcon = function (path) {
    const fileToCheck = TARGET_PATH + path;

    if (!fs.existsSync(fileToCheck)) {
        return true;
    }
}