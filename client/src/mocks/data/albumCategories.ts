import { IAlbum } from "models";
import { ICategory } from "models";

const fakeAlbums: ICategory[] = [
  {
    id: 1,
    title: "Happy Vibes",
    albums: [
      {
        id: 1,
        picture:
          "https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg",
        name: "Taylor Swift, Kygo Objective C, Avicii",
        authorId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        description: "some really good album",
        genre: "hentai",
      },
      {
        id: 2,
        picture:
          "https://cdn6.f-cdn.com/contestentries/1485199/27006121/5ca3e39ced7f1_thumb900.jpg",
        name: "Post Malone, Drake, Eminem",
        authorId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        description: "some really good album",
        genre: "hentai",
      },
      {
        id: 3,
        picture:
          "https://images-na.ssl-images-amazon.com/images/I/61F66QURFyL.jpg",
        name: "Journey, Escape, Avicii",
        authorId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        description: "some really good album",
        genre: "hentai",
      },

      {
        id: 4,
        picture:
          "https://i.pinimg.com/originals/a2/0d/37/a20d37791f8ad5cd54734cd3af559cc9.jpg",
        name: "Bob Marley, Cardi B, Stas Mihailov",
        authorId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        description: "some really good album",
        genre: "hentai",
      },
    ],
  },
  {
    id: 2,
    title: "Popular Playlists",
    albums: [
      {
        id: 1,
        picture:
          "https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg",
        name: "Taylor Swift, Kygo Objective C, Avicii",
        authorId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        description: "some really good album",
        genre: "hentai",
      },
      {
        id: 2,
        picture:
          "https://cdn6.f-cdn.com/contestentries/1485199/27006121/5ca3e39ced7f1_thumb900.jpg",
        name: "Post Malone, Drake, Eminem",
        authorId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        description: "some really good album",
        genre: "hentai",
      },
      {
        id: 3,
        picture:
          "https://images-na.ssl-images-amazon.com/images/I/61F66QURFyL.jpg",
        name: "Journey, Escape, Avicii",
        authorId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        description: "some really good album",
        genre: "hentai",
      },

      {
        id: 4,
        picture:
          "https://i.pinimg.com/originals/a2/0d/37/a20d37791f8ad5cd54734cd3af559cc9.jpg",
        name: "Bob Marley, Cardi B, Stas Mihailov",
        authorId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        description: "some really good album",
        genre: "hentai",
      },
    ],
  },
  {
    id: 3,
    title: "Shows to try",
    albums: [
      {
        id: 1,
        picture:
          "https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg",
        name: "Taylor Swift, Kygo Objective C, Avicii",
        authorId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        description: "some really good album",
        genre: "hentai",
      },
      {
        id: 2,
        picture:
          "https://cdn6.f-cdn.com/contestentries/1485199/27006121/5ca3e39ced7f1_thumb900.jpg",
        name: "Post Malone, Drake, Eminem",
        authorId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        description: "some really good album",
        genre: "hentai",
      },
      {
        id: 3,
        picture:
          "https://images-na.ssl-images-amazon.com/images/I/61F66QURFyL.jpg",
        name: "Journey, Escape, Avicii",
        authorId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        description: "some really good album",
        genre: "hentai",
      },

      {
        id: 4,
        picture:
          "https://i.pinimg.com/originals/a2/0d/37/a20d37791f8ad5cd54734cd3af559cc9.jpg",
        name: "Bob Marley, Cardi B, Stas Mihailov",
        authorId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        description: "some really good album",
        genre: "hentai",
      },
    ],
  },
  {
    id: 4,
    title: "Workout",
    albums: [
      {
        id: 1,
        picture:
          "https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg",
        name: "Taylor Swift, Kygo Objective C, Avicii",
        authorId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        description: "some really good album",
        genre: "hentai",
      },
      {
        id: 2,
        picture:
          "https://cdn6.f-cdn.com/contestentries/1485199/27006121/5ca3e39ced7f1_thumb900.jpg",
        name: "Post Malone, Drake, Eminem",
        authorId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        description: "some really good album",
        genre: "hentai",
      },
      {
        id: 3,
        picture:
          "https://images-na.ssl-images-amazon.com/images/I/61F66QURFyL.jpg",
        name: "Journey, Escape, Avicii",
        authorId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        description: "some really good album",
        genre: "hentai",
      },

      {
        id: 4,
        picture:
          "https://i.pinimg.com/originals/a2/0d/37/a20d37791f8ad5cd54734cd3af559cc9.jpg",
        name: "Bob Marley, Cardi B, Stas Mihailov",
        authorId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        description: "some really good album",
        genre: "hentai",
      },
    ],
  },
];

export default fakeAlbums;
