function Jukebox (){
  this.artists =[];
  this.addArtist = function (artist) {
    this.artists.push(artist);
  };
};

function Artist (){
  this.name = ""
  this.songs =[];
  this.addSong = function (song) {
    this.songs.push(song);
  };  
};

function Song (trackTitle, albumTitle){
  this.trackTitle = trackTitle;
  this.albumTitle = albumTitle;
};

function randomSong () {
  var artist = sarahJams.artists[Math.floor(Math.random() * sarahJams.artists.length)];
  var index = artist.songs[Math.floor(Math.random() * artist.songs.length)];
  return index.trackTitle + " " + index.albumTitle;
}

var sarahJams = new Jukebox ("Sarah's Jams");

var theShins = new Artist ("The Shins");
var newSlang = new Song ("New Slang", "Oh, Inverted World");
var caringIsCreepy = new Song ("Caring Is Creepy", "Oh, Inverted World");
var phantomLimb = new Song ("Phantom Limb", "Wincing the Night Away");

var lordHuron = new Artist ("Lord Huron");
var lonesomeDreams = new Song("Lonesome Dreams", "Lonesome Dreams");
var endsOfTheEarth = new Song("Ends of the Earth", "Lonesome Dreams");
var timeToRun = new Song("Time To Run", "Lonesome Dreams");

var beirut = new Artist("Beirut");
var elephantGun = new Song("Elephant Gun", "Gulag Orkestar");
var santaFe = new Song("Santa Fe", "The Rip Tide");
var ripTide = new Song("Elephant Gun", "Gulag Orkestar");

var coldWarKids = new Artist("Cold War Kids");
var miracleMile = new Song("Miracle Mile", "Dear Miss Lonelyhearts");
var tuxedos = new Song("Tuxedos", "Dear Miss Lonelyhearts");
var mineIsYours = new Song("Mine is Yours", "Mine is Yours");

var fatherJohnMisty = new Artist("Father John Misty");
var funtimesInBabylon = new Song("Funtimes In Babylon", "Fear Fun");
var nancyFromNowOn = new Song("Nancy From Now On", "Fear Fun");
var imWritingaNovel = new Song("I'm Writing a Novel", "Fear Fun");


theShins.addSong(newSlang);
theShins.addSong(caringIsCreepy);
theShins.addSong(phantomLimb);

lordHuron.addSong(lonesomeDreams);
lordHuron.addSong(endsOfTheEarth);
lordHuron.addSong(timeToRun);

beirut.addSong(elephantGun);
beirut.addSong(santaFe);
beirut.addSong(ripTide);

coldWarKids.addSong(miracleMile);
coldWarKids.addSong(tuxedos);
coldWarKids.addSong(mineIsYours);

fatherJohnMisty.addSong(funtimesInBabylon);
fatherJohnMisty.addSong(nancyFromNowOn);
fatherJohnMisty.addSong(imWritingaNovel);

sarahJams.addArtist(theShins);
sarahJams.addArtist(lordHuron);
sarahJams.addArtist(beirut);
sarahJams.addArtist(coldWarKids);
sarahJams.addArtist(fatherJohnMisty);

function showSongList () {
  $("#songs").show();

  $('#songs option').hide();

  var artist = $("#artists").val();
  var $songs = $("." + artist);

  $songs.show();      
};

var choose = $("#artists");
choose.on('change', showSongList);

function playSong () {
  var $song = $("#songs").val();
  var $video = $('#' + $song);

  $video.show();
}

var choose2 = $("#songs");
choose2.on('change', playSong);





