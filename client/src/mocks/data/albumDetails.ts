import { IAlbum } from "models";

const album: IAlbum = {
  id: 11,
  authorId: 1,
  createdAt: new Date(),
  genre: "genre",
  updatedAt: new Date(),
  name: "Good vibes",
  author: {
    name: "Spotify",
  },
  picture:
    "https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg",
  description: "Taylor Swift, Kygo Objective C, Avicii",
  tracks: [
    {
      id: 1,
      picture:
        "https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg",
      name: "High on You",
      albumId: 11,
      audio:
        "https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg",
      authorId: 1,
      length: 211,
      views: 211,
    },
    {
      id: 2,
      picture:
        "https://cdn6.f-cdn.com/contestentries/1485199/27006121/5ca3e39ced7f1_thumb900.jpg",
      name: "Lorem Ipsum",
      albumId: 11,
      audio:
        "https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg",
      authorId: 1,
      length: 211,
      views: 211,
    },
    {
      id: 3,
      picture:
        "https://images-na.ssl-images-amazon.com/images/I/61F66QURFyL.jpg",
      name: "Hello from the other side",
      albumId: 11,
      audio:
        "https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg",
      authorId: 1,
      length: 211,
      views: 211,
    },
    {
      id: 4,
      picture:
        "https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg",
      name: "High on You",
      albumId: 11,
      audio:
        "https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg",
      authorId: 1,
      length: 211,
      views: 211,
    },
  ],
};

export default album;
