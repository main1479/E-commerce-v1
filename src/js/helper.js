import { async } from 'regenerator-runtime'
import {API_URL, TIMEOUT_SEC} from './config.js'

const timeout = function(s){
   return new Promise((_, reject)=> {
      return setTimeout(()=>{
         reject(new Error(`Request took too long!! Timeout after ${s} seconds`))
      }, s * 1000)
   })
}

export const APIReq = async function(url){
   try {
      const fetchPromise = fetch(url);
      const res = await Promise.race([timeout(TIMEOUT_SEC), fetchPromise]);
      if(!res.ok) throw Error;
      const data = await res.json();
      return data
   } catch (err) {
      throw err;
   }
}