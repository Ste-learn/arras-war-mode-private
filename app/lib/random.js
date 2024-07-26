/*jslint node: true */
"use strict";

// Seed math

exports.random = x => {
    return x * Math.random();
};

exports.randomAngle = () => {
    return Math.PI * 2 * Math.random();
};

exports.randomRange = (min, max) => {
    return Math.random() * (max - min) + min;
};

exports.irandom = i => {
    let max = Math.floor(i);
    return Math.floor(Math.random() * (max + 1)); //Inclusive
};

exports.irandomRange = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Inclusive
};

exports.gauss = (mean, deviation) => {
    let x1, x2, w;
    do {
        x1 = 2*Math.random() - 1;
        x2 = 2*Math.random() - 1;
        w = x1 * x1 + x2 * x2;
    } while (0 == w || w >= 1);

    w = Math.sqrt(-2 * Math.log(w) / w);
    return mean + deviation * x1 * w;
};

exports.gaussInverse = (min, max, clustering) => {
    let range = max - min;
    let output = exports.gauss(0, range / clustering);

    while (output < 0) {
        output += range;
    }
    
    while (output > range) {
        output -= range;
    }
    
    return output + min;
};

exports.gaussRing = (radius, clustering) => {
    let r = exports.random(Math.PI * 2);
    let d = exports.gauss(radius, radius*clustering);
    return {
        x: d * Math.cos(r),
        y: d * Math.sin(r),
    };
};

exports.chance = prob => {
    return exports.random(1) < prob;
};

exports.dice = sides => {
    return exports.random(sides) < 1;
};

exports.choose = arr => {
    return arr[exports.irandom(arr.length - 1)];
};

exports.chooseN = (arr, n) => {
    let o = [];
    for (let i=0; i<n; i++) {
        o.push(arr.splice(exports.irandom(arr.length - 1), 1)[0]);
    }
    return o;
};

exports.chooseChance = (...arg) => {
    let totalProb = 0;
    arg.forEach(function(value) { totalProb += value; });
    let answer = exports.random(totalProb);
    for (let i=0; i<arg.length; i++) {
        if (answer<arg[i]) return i;
        answer -= arg[i];
    }
};


exports.chooseBotName = () => {
    return exports.choose([
        ' ପ(๑•ᴗ•๑)ଓ ♡',
        '˖⁺‧₊˚♡˚₊‧⁺˖',
        '૮ ˶ᵔ ᵕ ᵔ˶ ა',
        '(◕દ◕)',
        '꒰ ˶• ༝ - ˶꒱',
        'ฅ^•ﻌ•^ฅ',
        '૮₍ ˃ ⤙ ˂ ₎ა',
        '(● 0 ●)',
        '^•ﻌ•^ฅ',
        '[^•ﻌ•^]',
        '•ᴥ•ʔ',
        'ଘ(੭*ˊᵕˋ)੭* ੈ♡‧₊˚',
        '૮ • ﻌ - ა',
        '૮₍  ˶•⤙•˶ ₎ა',
        '(๑ᵔ⤙ᵔ๑)',
        'ˊᗜˋ',
        '˶ˆ꒳ˆ˵',
        'ଘ(੭ˊᵕˋ)੭* ੈ',
        '︶꒷꒦︶ ๋࣭ ⭑ ૮₍˶• . • ⑅₎ა',
        '( • ༝•)',
        '( ˶ˆᗜˆ˵ )',
        '૮₍˶Ó﹏Ò ⑅₎ა ',
        '(ง0_0)ง',
        '⁽⁽ଘ( ˊᵕˋ )ଓ⁾⁾',
        '♡(੭˶•༝•˶)੭･',
        '(ꈍᴗꈍ)♡',
        'ඞ〰',
        'ꕤ(ฅ^ᗜ^ฅ)ꕤ',
        'ʕ·ᴥ·ʔ',
        '₍ᵔ.˛.ᵔ₎',
        '(*ฅ́˘ฅ̀*)',
        '(ง ˃ ³ ˂)ว ⁼³₌₃⁼³',
        '✧˖°꒰๑ ꀾ ๑꒱°˖✧',
        '◕⩊◕',
        'º^º🧋',
        'ପ(⑅ˊᵕˋ⑅)ଓ',
        '(꜆꜄ ˃ ³ ˂)꜆꜄꜆',
        '(୨୧ᵕ̤ᴗᵕ̤)',
        '(｡•́︿•̀｡)',
        '(╥﹏╥)',
        'ღ´͈ ᵕ `͈ )♡⃛(´͈ ᵕ `͈ ღ',
        '꒰ •⸝⸝⸝⸝⸝⸝⸝• ꒱',
        '๑´ ³`)ﾉ',
        '(￣へ ￣ 凸',
        'ପ૮{˶• ༝ •˶}აଓ',
        '(ᐠ.ꞈ.ᐟ)',
        '[〒_〒]',
        '♪(๑ᴖ◡ᴖ๑)♪',
        '⸜( ⌓̈ )⸝',
    ]);
};
exports.chooseTank = () => {
    return exports.choose([
      "b_tripletwin",
      "b_hewn",
      "b_autodouble",
      "b_bentdouble",
      "b_penta",
      "b_spread",
      "b_benthybrid",
      "b_triple",
      "b_autogunner",
      "b_nailgun",
      "b_gust",
      "b_machinegunner",
      "b_octo",
      "b_cyclone",
      "b_dual",
      "b_musket",
      "b_ranger",
      "b_autoass",
      "b_stalker",
      "b_preda",
      "b_poach",
      "b_stream",
      "b_cropduster",
      "b_crossbow",
      "b_armsman",
      "b_mortar",
      "b_ordnance",
      "b_beekeeper",
      "b_spray",
      "b_blaster",
      "b_gatling",
      "b_booster",
      "b_fighter",
      "b_surfer",
      "b_autotri",
      "b_bomber",
      "b_falcon",
      "b_eagle",
      "b_auto5",
      "b_auto4",
      "b_heavy3",
      "b_sniper3",
      "b_banshee",
      "b_guntrap",
      "b_bushwhack",
      "b_bulwark",
      "b_manager",
      "b_overlord",
      "b_overgunner",
      "b_overtrap",
      "b_autoover",
      "b_overdrive",
      "b_overaccel",
      "b_commander",
      "b_battleship",
      "b_carrier",
      "b_autocruiser",
      "b_necromancer",
      "b_maleficitor",
      "b_factory",
      "b_autospawner",
      "b_anni",
      "b_hybrid",
      "b_conqueror",
      "b_autodestroy",
      "b_submarine",
      "b_construct",
      "b_autobuilder",
      "b_boomer",
      "b_engineer",
      "b_architect",
      "b_skimmer",
      "b_twister",
      "b_swarmer",
      "b_sidewind",
      "b_rocketeer",
      "b_shotgun",
      "b_assort",
      "b_fortress",
      "b_megatrap",
      "b_barricade",
      "b_septatrap",
      "b_hexatrap",
      "b_megasmash",
      "b_landmine",
      "b_autosmash",
      "b_spike",
      "b_weirdspike",
      "b_bouncer",
      "b_single"
    ]);
};
exports.chooseBossName = (code, n) => {
    switch (code) {
    case 'a':
    return exports.chooseN([
        'Archimedes',
        'Akilina',
        'Anastasios',
        'Athena',
        'Alkaios',
        'Amyntas',
        'Aniketos',
        'Artemis',
        'Anaxagoras',
        'Apollon',
    ], n);
    case 'castle':
    return exports.chooseN([
        'Berezhany',
        'Lutsk',
        'Dobromyl',
        'Akkerman',
        'Palanok',
        'Zolochiv',
        'Palanok',
        'Mangup',
        'Olseko',
        'Brody',
        'Isiaslav',
        'Kaffa',
        'Bilhorod',
    ], n);
    default: return 'God';
    }
};
