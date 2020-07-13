var playlist = { song: 'tupac'}

var updatePlaylist = function (playlist, artistName, songTitle){
  return object.assign({}, playlist,{[artistName]: songTitle})
}
