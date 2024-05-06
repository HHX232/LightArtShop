const SONGS_DATA = {
  songs: [
    new Song({
      name: 'If We Have Each Other',
      author: 'Alec benjamin',
      category: 'Песни',
      image: './img/songs/music/water fountain.jpeg',
      src: './img/songs/music/freecompress-Alec Benjamin - Water Fountain.mp3',
      type: 'melody'
    }),
    new Song({
      name: 'Close To You',
      author: 'Aurosonic',
      category: 'Песни',
      image: './img/songs/music/close to you.jpeg',
      src: './img/songs/music/freecompress-Aurosonic – Close To You .mp3',
      type: 'melody'
    }),
    new Song({
      name: 'Kicks',
      author: 'Barns Courtney',
      category: 'Песни',
      image: './img/songs/music/kicks.jpeg',
      src: './img/songs/music/freecompress-Barns Courtney - Kicks.mp3',
      type:'energy'
    }),
    new Song({
      name: 'We Don\'t Talk Anymore',
      author: 'Charlie Puth feat Selena Gomez',
      category: 'Песни',
      image: './img/songs/music/we dont talk any more.jpeg',
      src: './img/songs/music/freecompress-Charlie Puth feat Selena Gomez - We Don\'t Talk Anymore.mp3',
      type:'calm'
    }),
    new Song({
      name: 'Stereo Hearts',
      author: 'Gym Class Heroes & Adam Levine',
      category: 'Песни',
      image: './img/songs/music/stereo hearts.jpeg',
      src: './img/songs/music/freecompress-Gym Class Heroes & Adam Levine - Stereo Hearts.mp3',
      type:'energy'
    }),
    new Song({
      name: 'Bad Liar',
      author: 'Imagine Dragons',
      category: 'Песни',
      image: './img/songs/music/bad liar.jpeg',
      src: './img/songs/music/freecompress-Imagine Dragons - Bad Liar.mp3',
      type:'calm'
    }),
    new Song({
      name: 'Demons',
      author: 'Jada Facer',
      category: 'Песни',
      image: './img/songs/music/demons.jpeg',
      src: './img/songs/music/freecompress-Jada Facer - Demons.mp3',
      type:'energy'
    }),
    new Song({
      name: 'N&N',
      author: 'Mani Beats',
      category: 'Песни',
      image: './img/songs/music/N&N.jpeg',
      src: './img/songs/music/freecompress-Mani Beats - N&N.mp3',
      type: 'melody'
    }),
    new Song({
      name: 'Animals',
      author: 'Maroon5',
      category: 'Песни',
      image: './img/songs/music/animals.jpeg',
      src: './img/songs/music/freecompress-Maroon5 - Animals.mp3',
      type:'energy'
    }),
    new Song({
      name: 'Hawse',
      author: 'Osman',
      category: 'Песни',
      image: './img/songs/music/house.jpg',
      src: './img/songs/music/freecompress-Osman Hawse.mp3',
      type: 'melody'
    }),
    new Song({
      name: 'Freaks',
      author: 'Surf Curse',
      category: 'Песни',
      image: './img/songs/music/freaks.jpeg',
      src: './img/songs/music/freecompress-Surf Curse - Freaks.mp3',
      type:'energy'
    }),
    new Song({
      name: 'Freaks',
      author: 'T3nzu ',
      category: 'Песни',
      image: './img/songs/music/Give it to me.jpeg',
      src: './img/songs/music/freecompress-t3nzu-give-it-to-me_(muztub.com).mp3',
      type:'energy'
    }),
  ],
  audioBooks: [
    new Song({
      name: 'Колобок',
      author: 'Русская народная',
      category: 'Аудиокниги',
      image: './img/songs/music/kolobok.webp',
      src: './img/songs/music/kolobok.mp3'
    }),
    new Song({
      name: 'Бременские музыканты',
      author: 'Братья Гримм',
      category: 'Аудиокниги',
      image: './img/songs/audioBooks/YakobGrimm-bremenskiy.jpeg',
      src: './img/songs/audioBooks/freecompress-bremenskiy.mp3'
    }),
    new Song({
      name: 'Пастушка и трубочист',
      author: 'Ганс Андерсен',
      category: 'Аудиокниги',
      image: './img/songs/audioBooks/HristianAnderson-pastushka.i.trubochist.jpg',
      src: './img/songs/audioBooks/freecompress-deti-online.com_-_pastushka-i-trubochist.mp3'
    }),
    new Song({
      name: 'Купец и великан',
      author: 'Фёдор Степанов',
      category: 'Аудиокниги',
      image: './img/songs/audioBooks/phedorStepanov-kupec-velican.jpeg',
      src: './img/songs/audioBooks/freecompress-jodor_Stepanov_-_Kupec_i_velikan_(patefon.org).mp3'
    }),
    new Song({
      name: 'Лиса и дрозд',
      author: 'Георгий Гребнер',
      category: 'Аудиокниги',
      image: './img/songs/audioBooks/GeorgiyGrebney-lisa-drosd.jpeg',
      src: './img/songs/audioBooks/freecompress-lisa-drosd.mp3'
    }),
    new Song({
      name: 'Лиса и кувшин',
      author: 'Русская народная',
      category: 'Аудиокниги',
      image: './img/songs/audioBooks/lisa-kuvshin.jpeg',
      src: './img/songs/audioBooks/freecompress-Lisa-i-kuvshin.mp3'
    }),
  ],
  podcasts: [
    new Song({
      name: 'Как успешные люди себя мотивируют',
      author: 'Простые мысли',
      category: 'Подкасты',
      image: './img/songs/podcasts/motivaciya.jpeg',
      src: './img/songs/podcasts/motivaciya.mp3'
    }),
    new Song({
      name: 'Как найти опору в себе?',
      author: 'Лайфхакер',
      category: 'Подкасты',
      image: './img/songs/podcasts/kak-nayti-oporu-v-sebe.jpeg',
      src: './img/songs/podcasts/kak-nayti-oporu-v-sebe.mp3'
    }),
    new Song({
      name: 'Сколько Пушкин тратил на вино?',
      author: 'Я бы выпил',
      category: 'Подкасты',
      image: './img/songs/podcasts/ya-bi-vipil.webp',
      src: './img/songs/podcasts/ya-bi-vipil.mp3'
    }),
  ],
  tunes: [
    new Song({
      name: 'Colorful Flowers',
      author: 'Tokyo Music Walker',
      category: 'Мелодии',
      image: './img/songs/tunes/Colorful Flowers.webp',
      src: './img/songs/tunes/Colorful Flowers.mp3'
    }),
    new Song({
      name: 'Good Night',
      author: 'FASSounds',
      category: 'Мелодии',
      image: './img/songs/tunes/good-night.jpg',
      src: './img/songs/tunes/good-night.mp3'
    }),
    new Song({
      name: 'Once In Paris',
      author: 'Pumpupthemind',
      category: 'Мелодии',
      image: './img/songs/tunes/once-in-paris.webp',
      src: './img/songs/tunes/once-in-paris.mp3'
    }),
  ],
}