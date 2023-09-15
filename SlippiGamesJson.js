const { SlippiGame } = require('@slippi/slippi-js')
const fs = require('fs')
const path = require('path')


// const readFiles = async (directory) => {
//     let num = 0;
//     const files = await fs.promises.opendir(directory)
//     for await (const file of files) {
//         try {
//             let game = new SlippiGame(directory + "/" + file.name);

//             let metadata = game.getMetadata();
//             if (metadata.lastFrame < 2000)
//             {
//                 console.log("Skipped game");
//                 continue;
//             }
//             let gameObj = {
//                 winners: game.getWinners(),
//                 settings: game.getSettings(),
//                 metadata: metadata,
//                 stats: game.getStats(),
//             }
//             gamesJson.push(gameObj);
//             num += 1;
//             console.log("Games processed:" + num);

//         } catch (error) {
//             console.log(error)
//             continue;
//         }
//     }
//     let asJson = JSON.stringify(gamesJson);
//     fs.writeFile('slippi_games.json', asJson, 'utf8', () => {});
// }

// readFiles('SlippiFiles/KillRoy').catch(e => console.log(e));

let gamesJson = []

function* walkSync(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true })
  for (const file of files) {
    if (file.isDirectory()) {
      yield* walkSync(path.join(dir, file.name))
    } else {
      yield path.join(dir, file.name)
    }
  }
}

var num = 0

for (const filePath of walkSync(__dirname + '\\SlippiFiles')) {
  extension = filePath.split('.').pop()

  try {
    let game = new SlippiGame(filePath)

    let metadata = game.getMetadata()
    if (metadata.lastFrame < 2000) {
      console.log('Skipped game')
      continue
    }

    let winners = game.getWinners();

    let gameObj = {
      winners: winners,
      settings: game.getSettings(),
      metadata: metadata,
      stats: game.getStats(),
    }

    gamesJson.push(gameObj)
    num += 1
    console.log('Games processed:' + num)
  } catch (e) {
    console.log('Skipped game')
    continue
  }
}


let asJson = JSON.stringify(gamesJson);
fs.writeFile('slippi_games.json', asJson, 'utf8', () => {});