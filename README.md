# NowPlayingVinyl

## Description
Simple Node.js app that records music from the microphone or any other audio source and sends it to audd.io service to be recognized

## Installation
npm install
create a json file called tokens.mds with this content:

<code>
const tokens = {
  "spotifyToken" : "<your spotify token>",
  "auddioToken": "<your audd.io token>"
}
export { tokens };
</code>

## Note about audio capture
This app uses node-mic-record which uses arecord for linux environments (using this on a raspberry pi). It can also be used with sox but not tested.

