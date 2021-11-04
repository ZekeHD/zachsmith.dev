interface Video {
  url: string;
  title: string;
  description: string;
};

const videos: Video[] = [
  {
    url: 'https://player.vimeo.com/video/640096372?h=f8a8d486ce&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479;portrait=1;title=',
    title: 'Boruto - Naruto & Sasuke vs Momoshiki',
    description: `\
My first specific redesign - lots of sounds came from DBZ/DBS, which looking back on it \
I'm not so fond of, but the overall design I'm pleased with. The foley/rock sounds make it \
seem like you're right there beside the fight.`
  },
  {
    url: 'https://player.vimeo.com/video/640096643?h=ecd84df321&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479;portrait=1;title=',
    title: 'Modern Warfare 2 Multiplayer',
    description: `\
This was by far the most intensive and complex of any sound work I've done so far - all \
the sound was created from scratch (as far as foley, voice work, and gun handling sounds) \
and from libraries (gunshots, mech, and footsteps). Overall, quite pleased with how it turned out. \
My first foray into sound design that wasn't directly tied to animation.`
  },
];

export { Video, videos };