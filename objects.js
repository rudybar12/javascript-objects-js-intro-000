var playlist = { song: 'tupac'}

function updatePlaylist(playlist, artistName, songTitle){
  return object.assign({}, playlist,{[artistName]: songTitle})
}
