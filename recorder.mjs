import record from 'node-mic-record'
import fs from 'fs'

const config = {
  sampleRate    : 44100,  // audio sample rate
  //channels      : 1,      // number of channels
  //threshold     : 0.5,    // silence threshold (rec only)
  //thresholdStart: null,   // silence threshold to start recording, overrides threshold (rec only)
  //thresholdEnd  : null,  // silence threshold to end recording, overrides threshold (rec only)
  //silence       : '1.0',  // seconds of silence before ending
  verbose       : false,  // log info to the console
  recordProgram : 'arecord',  // Defaults to 'rec' - also supports 'arecord' and 'sox'
  //device        : null   // recording device (e.g.: 'plughw:1')
}

const recorder = async (path, time) => {
  return new Promise(async (resolve) => {
    let file = fs.createWriteStream(path, {encoding: 'binary'})
    const stream = record.start(config);
    stream.pipe(file)
    stream.on('end',() => {
      resolve();
    })
    setTimeout(function () {
      record.stop()
    }, time*1000)
  })
  
}


export { recorder };