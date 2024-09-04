class Music{
    constructor(title, singer, img, file){
        this.title= title;
        this.singer = singer;
        this.img = img;
        this.file = file;
    }

    getName(){
        return this.title + " - " + this.singer;
    }
}

const musicList = [
    new Music("My Last Breath", "Evanescence", "1.jpg", "1.mp3"),
    new Music("Bring Me to Life", "Evanescence", "2.jpg", "2.mp3"),
    new Music("My Immortal", "Evanescence", "3.jpg", "3.mp3"),
]