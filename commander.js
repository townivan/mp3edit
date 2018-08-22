let glob = require('glob')
const Editor = require('id3-editor');
let fs = require('fs')

async function main(){
    let g = glob.sync("./mp3files/*.mp3")
    //console.log(g)

    //g.map(filepath => {
        //console.log(filepath)
        const fileBuffer = fs.readFileSync("./mp3files/180617_M_Real Faith for Real Life Doing God's Word.mp3");

        // Then load the file into the editor
        const editor = new Editor();
        console.log('preparing to load editor...')
        editor.load(fileBuffer).then(() => {
        console.log('editor loaded from fileBuffer...')

        console.log(editor.tag.genre[0])
        // get the loaded metadata
        //const metadata = editor.getMetadata();

        //console.log(editor.getTag())

        //console.log(metadata)

        editor.set('title', 'test title')

        //console.log(editor.get('title'))

        // make changes
        // editor
        //     .set('title', 'new song')
        //     .set('track', '2')
        //     .set('disk', '4/4')
        //     .set('album', 'different album')
        //     .set('albumartist', 'another artist')
        //     .set('year', 1999)
        //     .set('label', 'Nutrition Facts')
        //     .set('artists', ['artist 1', 'artist 2', 'artist 3'])
        //     .set('composers', ['only composer'])
        //     .set('genre', ['jpop', 'post rock']);

        // save the changes and return a promise
        return editor.save();
        }).catch((err) => {
        // handle errors here
        });


   // })
}// end main()
main()