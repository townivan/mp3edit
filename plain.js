const Editor = require('id3-editor');
let fs = require('fs')

// first, read a music file
const fileBuffer = fs.readFileSync('mp3files/plain.mp3');

// Then load the file into the editor
const editor = new Editor();
editor.load(fileBuffer).then(() => {
  // get the loaded metadata
  const metadata = editor.getMetadata();

  // make changes
  editor
    .set('title', 'new song')
    .set('track', '2')
    .set('disk', '4/4')
    .set('album', 'different album')
    .set('albumartist', 'another artist')
    .set('year', 1999)
    .set('label', 'Nutrition Facts')
    .set('artists', ['artist 1', 'artist 2', 'artist 3'])
    .set('composers', ['only composer'])
    .set('genre', ['jpop', 'post rock']);

  // save the changes and return a promise
  return editor.save();
}).catch((err) => {
  // handle errors here
});