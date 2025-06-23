// Soyut Sınıf
abstract class MusicPlayer {
  constructor(public apiUrl: string) {}

  getMusic(): void {
    console.log(this.apiUrl + " 'den müzik çekiliyor...");
  }

  abstract playMusic(name: string): void;
}

// Soyut sınıfı miras alan sınıf
class Spotify extends MusicPlayer {
  playMusic(name: string): void {
    console.log(name + " müziği spotify'dan çalınıyor...");
  }
}

// Soyut sınıfı miras alan sınıf
class AppleMusic extends MusicPlayer {
  playMusic(name: string): void {
    console.log(name + " müziği apple music'den çalınıyor...");
  }
}

const spotify = new Spotify("https://spotify.com");
const appleMusic = new AppleMusic("https://applemusic.com");

spotify.getMusic();
appleMusic.getMusic();

spotify.playMusic("Yüz Yüze");
appleMusic.playMusic("Yüz Yüze");
