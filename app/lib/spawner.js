//"use strict";
//Summon the SuperTank
/*exports.spawnmom1 = {
  manual: false,
  interval: 15000, // seconds
  location: ["bas1"],
  tank: ["mothership"],
  maxAmount: 1,
  spawningPerInterval: 5000,
  team: "blue", // "random", "blue", "green", "red", "magenta", "other", "none"
  position: "random", // "center", "random"
  bot: true,// if true then entity.define(Class.bot);
  controllers: [
        'nearestDifferentMaster', 'mapAltToFire', 'minion', 'fleeAtLowHealth'
    ],
  message: "Mommy is coming!",
};
exports.spawnmom2 = {
  manual: false,
  interval: 15000, // seconds
  location: ["bas2"],
  tank: ["mothership"],
  maxAmount: 1,
  spawningPerInterval: 5000,
  team: "green", // "random", "blue", "green", "red", "magenta", "other", "none"
  position: "random", // "center", "random"
  bot: true,// if true then entity.define(Class.bot);
  controllers: [
        'nearestDifferentMaster', 'mapAltToFire', 'minion', 'fleeAtLowHealth'
    ],
  message: "Mommy is coming!",
};*/

//Summon the Boss
exports.spawnboss1 = {
  manual: false,
  interval: 100, // seconds
  location: ["nest"],
  tank: ["elite_battle",
         "elite_destroyer",
         "elite_sprayer", 
         "elite_sniper",
         "elite_gunner",
         "elite_over",
         "elite_trapguard",
         "elite_hurricane",
         "elite_spawner",
         "elite_builder",
         "delta_battle",
         "delta_destroyer",
         "delta_sprayer", 
         "delta_gunner", 
         "delta_builder",
         "delta_spawner",],
  maxAmount: 3,
  spawningPerInterval: 100,
  team: "other", // "random", "blue", "green", "red", "magenta", "other", "none"
  position: "random", // "center", "random"
  bossbot: true,// if true then entity.define(Class.bot);
  controllers: [
        'nearestDifferentMaster', 'mapAltToFire', 'minion', 'fleeAtLowHealth'
    ],
  message: "Elite/Delta is coming!",
};
/*exports.spawnboss12 = {
  manual: false,
  interval: 7500, // seconds
  location: ["nest"],
  tank: ["delta_battle2",
         "delta_destroyer2",
         "delta_sprayer2", 
         "delta_gunner2",        
         "delta_spawner2",
    ],
  maxAmount: 2,
  spawningPerInterval: 5000,
  team: "other", // "random", "blue", "green", "red", "magenta", "other", "none"
  position: "random", // "center", "random"
  bossbot: true,// if true then entity.define(Class.bot);
  controllers: [
        'nearestDifferentMaster', 'mapAltToFire', 'minion', 'fleeAtLowHealth'
    ],
  message: "Elite is coming!",
};*/
exports.spawnboss2 = {
  manual: false,
  interval: 10000, // seconds
  location: ["nest"],
  tank: ["summoner3",
         "sorceror2",
         "enchanter2",
         "exorcistor2",
         "gemstone2",
         "skimboss2",
         "palisade2",
         "armada2",
         "nestKeeper2",
         "nestWarden2",
         "nestGuardian2",
         "sakuranohana2",
         "spawnshard2",
         "oranicus2"],
  maxAmount: 2,
  spawningPerInterval: 6000,
  team: "other", // "random", "blue", "green", "red", "magenta", "other", "none"
  position: "random", // "center", "random"
  bossbot: true,// if true then entity.define(Class.bot);
  controllers: [
        'nearestDifferentMaster', 'mapAltToFire', 'minion', 'fleeAtLowHealth'
    ],
  message: "The Boss is coming!",
};
/*exports.spawnboss21 = {
  manual: false,
  interval: 20000, // seconds
  location: ["nest"],
  tank: ["ares", 
         "gersemi",
         "ezekiel",
         "eris",
         "selene",],
  maxAmount: 1,
  spawningPerInterval: 35000,
  team: "other", // "random", "blue", "green", "red", "magenta", "other", "none"
  position: "random", // "center", "random"
  bossbot: true,// if true then entity.define(Class.bot);
  controllers: [
        'nearestDifferentMaster', 'mapAltToFire', 'minion', 'fleeAtLowHealth'
    ],
  message: "Terrestrial Boss is coming!",
};*/
exports.spawnboss3 = {
  manual: false,
  interval: 35000, // seconds
  location: ["nest"],
  tank: ["ares2", 
         "gersemi2",
         "ezekiel2",
         "eris2",
         "selene2",
         "freyja2", 
         "paladin2",
         "zaphkiel2",
         "theia2",
         "nyx2",
         "kronos2",
         "ragnarok2",
         "legionary_crasher2"],
  maxAmount: 1,
  spawningPerInterval: 35000,
  team: "other", // "random", "blue", "green", "red", "magenta", "other", "none"
  position: "random", // "center", "random"
  bossbot: true,// if true then entity.define(Class.bot);
  controllers: [
        'nearestDifferentMaster', 'mapAltToFire', 'minion', 'fleeAtLowHealth'
    ],
  message: "Celestial/Terrestrial Boss is coming!",
};
/*exports.spawnboss4 = {
  manual: false,
  interval: 50000, // seconds
  location: ["nest"],
  tank: ["kronos", 
         "ragnarok",
         "legionary_crasher",],
  maxAmount: 1,
  spawningPerInterval: 50000,
  team: "other", // "random", "blue", "green", "red", "magenta", "other", "none"
  position: "random", // "center", "random"
  bot: true,// if true then entity.define(Class.bot);
  controllers: [
        'nearestDifferentMaster', 'mapAltToFire', 'minion', 'fleeAtLowHealth'
    ],
  message: "Oh no... The Great Boss is coming!",
};


// definitions

exports.definitions = {
  active: true,
  interval: 5, // seconds
  location: ["norm", "nest", "roid"],
  tank: ["basic"],
  maxAmount: 3,
  spawningPerInterval: 1,
  controllers: null,
  team: "none", // "random", "blue", "green", "red", "magenta", "other", "none"
  position: "random", // "center", "random"
  bot: false, // if true then entity.define(Class.bot);
  message: null,
};

*/

// -- Examples --
// spawner.jsの使用例です。コメントを解除するだけで動きます。
// ソースコードを範囲選択後、Ctrl+/でコメントを解除できます。

// // - Example1 -
// // マップの"norm"と"nest"にスマッシャーをスポーンさせます。
// exports.example1 = {
//   interval: 0.5, // 0.5秒ごとにスポーン
//   location: ["norm", "nest"],
//   tank: ["smash"],
//   controllers: ["nearestDifferentMaster", "mapTargetToGoal"], // 追加するAI
//   team: "random", // ランダムなチーム
//   maxAmount: 2, // 最大2体
//   spawningPerInterval: 1, // intervalごとに1体スポーン
// };

// // - Example2 -
// // マップの"bos1"にボスをスポーンさせます。
// // ふぉとれArrasテンプレートではマップに新しい場所を追加するときserver.jsを編集する必要はありません。
// exports.example2 = {
//   interval: 5, // 5秒ごとにスポーン
//   location: ["bos1"],
//   tank: ["elite_destroyer", "elite_sprayer"],
//   position: "center", // マスの中心にスポーン
//   team: "other", // 図形と同じチーム
//   maxAmount: 1,
//   spawningPerInterval: 1,
//   message: "Example spawner.", // intervalごとにメッセージを表示
// };

// // - Example3 -
// // server.js内からも操作できます。
// // spawner.example3.trigger() // exports.example3のスポナーを実行
// // spawner.example3.activate(true) // intervalごとに自動的に実行
// // spawner.example3.activate(false) // 自動実行を停止
// // spawner.example3.isActive() // 自動実行されているかどうかを返す
// // spawner.example3.entityAmount() // スポナーから生成された生きているエンティティの数を返す
// exports.example3 = {
//   active: false, // 自動実行を停止した状態でゲームを開始
//   interval: 5,
//   location: ["norm"],
//   tank: ["overlord", "octo"],
//   team: "red",
//   maxAmount: 10,
//   spawningPerInterval: 10, // 一度に10体スポーン
//   bot: true,
// };