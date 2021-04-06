import { recorder } from './recorder.mjs'
import { recognize} from './audd.io.mjs'


const createFileName = () => {
  let dateString = new Date().toISOString().replace(/T|:|-/g, '_').replace(/\..+/, '')
  return `capture_${dateString}.wav`;
}
const fileName = createFileName();
await recorder(fileName,3);
const response = await recognize(fileName);
if(response.data.result == undefined ){
  console.log("Not recognized")
}else{
  const { artist, title, album } = response.data.result;
  console.log(`Artist: ${artist}\nAlbum: ${album}\nTitle: ${title}\n`)
}


