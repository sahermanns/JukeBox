<script>

// Jukebox is made up of Artists, as new artsists are constructed they are pushed into the array artists//
 function Jukebox (){
  this.artists =[];
  this.addArtist = function (artist) {
    this.artists.push(artist);
  };
 };
 // Artist is made up of Songs, as new songs are constructed they are pushed in the array songs//
 function Artist (){
  this.name = ""
  this.songs =[];
  this.addSong = function (song) {
  this.songs.push(song);
  };  
 };
 // Song is made up of trackTitle and artistTitle//
 function Song (trackTitle, albumTitle){
  this.trackTitle = trackTitle;
  this.albumTitle = albumTitle;
 };
var sarahJams = new Jukebox ("Sarah's Jams");
var theShins = new Artist ("The Shins");
var newSlang = new Song ("New Slang", "Oh, Inverted World");
var lordHuron = new Artist ("Lord Huron");
var lonesomeDreams = new Song("Lonesome Dreams, Lonesome Dreams");
var beirut = new Artist("Beirut");
var elephantGun = new Song("Elephant Gun, Gulag Orkestar");
var coldWarKids = new Artist("Cold War Kids");
var miracleMile = new Song("Miracle Mile, Dear Miss Lonelyhearts");
var fatherJohnMisty = new Artist("Father John Misty");
var funtimesInBabylon = new Song("Funtimes In Babylon, Fear Fun");
theShins.addSong(newSlang);
sarahJams.addArtist(theShins);
console.log(theShins.songs[0]);
console.log(sarahJams.artists[0]);

</script>