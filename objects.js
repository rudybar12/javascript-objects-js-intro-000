var playlist = { song: 'tupac'}

var updatePlaylist = function (playlist, artistName, songTitle){
  return Object.assign({}, playlist,{ [artistName]: songTitle})
}
