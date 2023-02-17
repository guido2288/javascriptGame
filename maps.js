const emojis = {
  "-": " ",
  O: "🚪",
  X: "💣",
  I: "🍪",
  PLAYER: "🐱",
  BOMB_COLLISION: "🔥",
  GAME_OVER: "👎",
  WIN: "🏆",
  LIVES: "😸"
};
const maps = [];
maps.push(`
  IXXXXXXXXX
  -XXXXXXXXX
  -XXXXXXXXX
  -XXXXXXXXX
  -XXXXXXXXX
  -XXXXXXXXX
  -XXXXXXXXX
  -XXXXXXXXX
  -XXXXXXXXX
  OXXXXXXXXX
`);
maps.push(`
  O--XXXXXXX
  X--XXXXXXX
  XX----XXXX
  X--XX-XXXX
  X-XXX--XXX
  X-XXXX-XXX
  XX--XX--XX
  XX--XXX-XX
  XXXX---IXX
  XXXXXXXXXX
  `);
maps.push(`
  XI----XXXX
  XXXXX-XXXX
  XX----XXXX
  XX-XXXXXXX
  XX-----XXX
  XXXXXX-XXX
  XX-----XXX
  XX-XXXXXXX
  XX-----OXX
  XXXXXXXXXX
`);
maps.push(`
  -OXXX-----
  ---XX---X-
  --------X-
  XXXXXXXXX-
  ----X-----
  -X--X-XXXX
  -X----XXXX
  -XXXXXXXXX
  -XXXXXXXXX
  IXXXXXXXXX
`);
maps.push(`
  XXXXXXXXXX
  X-------XX
  X-X--XX--X
  X--X---XIX
  X-----X-XX
  X--X-----X
  XXXXXX-XXX
  -----X-XXX
  -XXX-X-XXX
  OXXX---XXX
`);
maps.push(`
  XXXXXXXXXX
  ---------X
  -XXXXXXX-X
  -X---XXXOX
  -X-X-XXXXX
  -X-XIX---X
  -X-XXX-X-X
  -X-----X-X
  -XXXXXXX-X
  ---------X
`);
