// Define the function make_album
function make_album(artist, title, tracks) {
    // Create the album object
    let album = {
        artist: artist,
        title: title
    };
    // Add the tracks property if it's provided
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Create three albums using the function
const album1 = make_album('Pink Floyd', 'The Dark Side of the Moon');
const album2 = make_album('Led Zeppelin', 'IV');
const album3 = make_album('Nirvana', 'Nevermind');
// Print each album to show the objects are storing the information correctly
console.log(album1);
console.log(album2);
console.log(album3);
// Create an album with the number of tracks
const albumWithTracks = make_album('The Beatles', 'Abbey Road', 17);
// Print the album with tracks to show the object is storing the information correctly
console.log(albumWithTracks);
export {};
