import axios from 'axios'
import { tokens } from './tokens.mjs'
import fs from 'fs'
import FormData from 'form-data'


const recognize = async (filePath) => {
  let formData = new FormData();
  formData.append('api_token', tokens.auddioToken);
  formData.append('return','spotify');
  formData.append('file',fs.createReadStream(filePath))
  return axios.post('https://api.audd.io/',formData,{headers: formData.getHeaders()});
}

export { recognize }