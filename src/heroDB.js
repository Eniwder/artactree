const hero = lv => (name, id, type, elem, role, children) => ({
  name,
  id,
  type,
  elem,
  role,
  parent: [],
  children: children || [],
  parent: [],
  count: 0,
  level: lv,
  focus: false,
  active: true,
});

const heroLv0 = hero(0)
const herosLv0 = [
  heroLv0('劍士', '1101', 'sword', 'fire', 'defenser'),     // 0
  heroLv0('弓箭手', '1201', 'arrow', 'green', 'attacker'),  // 1
  heroLv0('盜賊', '1301', 'assassin', 'dark', 'attacker'),  // 2
  heroLv0('巫師', '1401', 'magic', 'dark', 'attacker'),     // 3
  heroLv0('祭司', '1501', 'heal', 'light', 'helper'),       // 4
  heroLv0('戰士', '1601', 'fist', 'ian', 'defenser'),       // 5
  heroLv0('槍術士', '1701', 'spear', 'ice', 'defenser'),    // 6
  heroLv0('精靈', '1801', 'spilit', 'ian', 'helper'),       // 7
];
const heroLv1 = hero(1)
const herosLv1 = [
  heroLv1('魔劍士', '2101', 'sword', 'fire', 'attacker', [herosLv0[0], herosLv0[6]]),
  heroLv1('聖騎士', '2102', 'sword', 'light', 'defenser', [herosLv0[0], herosLv0[0]]),
  heroLv1('狙擊手', '2201', 'arrow', 'fire', 'attacker', [herosLv0[1], herosLv0[1]]),
  heroLv1('追擊者', '2202', 'arrow', 'green', 'attacker', [herosLv0[1], herosLv0[2]]),
  heroLv1('刺客', '2301', 'assassin', 'dark', 'attacker', [herosLv0[2], herosLv0[2]]),
  heroLv1('忍者', '2302', 'assassin', 'ian', 'attacker', [herosLv0[0], herosLv0[2]]),
  heroLv1('法師', '2401', 'magic', 'ice', 'attacker', [herosLv0[3], herosLv0[3]]),
  heroLv1('薩滿', '2402', 'magic', 'ian', 'attacker', [herosLv0[3], herosLv0[5]]),
  heroLv1('德魯伊', '2501', 'heal', 'green', 'helper', [herosLv0[3], herosLv0[4]]),
  heroLv1('吟遊詩人', '2502', 'heal', 'light', 'helper', [herosLv0[1], herosLv0[4]]),
  heroLv1('異邦人', '2601', 'fist', 'dark', 'attacker', [herosLv0[5], herosLv0[5]]),
  heroLv1('武僧', '2602', 'fist', 'ice', 'helper', [herosLv0[5], herosLv0[7]]),
  heroLv1('護衛', '2701', 'spear', 'ian', 'defenser', [herosLv0[6], herosLv0[6]]),
  heroLv1('擊劍士', '2702', 'spear', 'dark', 'attacker', [herosLv0[1], herosLv0[6]]),
  heroLv1('魔法師', '2801', 'spilit', 'green', 'attacker', [herosLv0[4], herosLv0[7]]),
  heroLv1('鐵匠', '2802', 'spilit', 'fire', 'helper', [herosLv0[6], herosLv0[7]]),
];
const heroLv2 = hero(2)
const herosLv2 = [
  heroLv2('ルーンナイト', '3101', 'sword', 'fire', 'attacker', [herosLv1[0], herosLv1[1]]),
  heroLv2('ハイランダー', '3102', 'sword', 'fire', 'attacker', [herosLv1[0], herosLv1[15]]),
  heroLv2('ディフェンダー', '3103', 'sword', 'dark', 'defenser', [herosLv1[1], herosLv1[10]]),
  heroLv2('クルセイダー', '3104', 'sword', 'light', 'defenser', [herosLv1[1], herosLv1[5]]),
  heroLv2('スカウト', '3201', 'arrow', 'green', 'attacker', [herosLv1[2], herosLv1[3]]),
  heroLv2('レンジャー', '3202', 'arrow', 'ian', 'attacker', [herosLv1[2], herosLv1[13]]),
  heroLv2('ハンター', '3203', 'arrow', 'green', 'attacker', [herosLv1[3], herosLv1[9]]),
  heroLv2('スティンガー', '3204', 'arrow', 'light', 'attacker', [herosLv1[2], herosLv1[15]]),
  heroLv2('アベンジャー', '3301', 'assassin', 'dark', 'defenser', [herosLv1[4], herosLv1[5]]),
  heroLv2('スレイヤー', '3302', 'assassin', 'green', 'attacker', [herosLv1[4], herosLv1[15]]),
  heroLv2('サムライ', '3303', 'assassin', 'ice', 'attacker', [herosLv1[0], herosLv1[5]]),
  heroLv2('ワンダラー', '3304', 'assassin', 'dark', 'attacker', [herosLv1[5], herosLv1[6]]),
  heroLv2('インヴォーカー', '3401', 'magic', 'light', 'helper', [herosLv1[6], herosLv1[14]]),
  heroLv2('ウォーロック', '3402', 'magic', 'ian', 'attacker', [herosLv1[4], herosLv1[6]]),
  heroLv2('ネクロマンサー', '3403', 'magic', 'dark', 'attacker', [herosLv1[6], herosLv1[7]]),
  heroLv2('エスパー', '3404', 'magic', 'ice', 'helper', [herosLv1[3], herosLv1[7]]),
  heroLv2('ウォーデン', '3501', 'heal', 'green', 'defenser', [herosLv1[4], herosLv1[9]]),
  heroLv2('ミンストレル', '3502', 'heal', 'ice', 'helper', [herosLv1[8], herosLv1[14]]),
  heroLv2('プリースト', '3503', 'heal', 'light', 'helper', [herosLv0[4], herosLv0[4], herosLv0[4]]),
  heroLv2('ピルグリム', '3504', 'heal', 'light', 'defenser', [herosLv1[3], herosLv1[8]]),
  heroLv2('バーサーカー', '3601', 'fist', 'dark', 'attacker', [herosLv1[8], herosLv1[10]]),
  heroLv2('グラディエーター', '3602', 'fist', 'ian', 'defenser', [herosLv1[10], herosLv1[11]]),
  heroLv2('ストライカー', '3603', 'fist', 'light', 'attacker', [herosLv1[1], herosLv1[11]]),
  heroLv2('ルーンマスター', '3604', 'fist', 'fire', 'helper', [herosLv1[7], herosLv1[11]]),
  heroLv2('ライダー', '3701', 'spear', 'ian', 'defenser', [herosLv1[12], herosLv1[13]]),
  heroLv2('ランペイジャー', '3702', 'spear', 'fire', 'attacker', [herosLv1[0], herosLv1[13]]),
  heroLv2('マエストロ', '3703', 'spear', 'ice', 'helper', [herosLv1[8], herosLv1[12]]),
  heroLv2('バガボンド', '3704', 'spear', 'fire', 'attacker', [herosLv1[10], herosLv1[12]]),
  heroLv2('サーヴァント', '3801', 'spilit', 'dark', 'attacker', [herosLv1[14], herosLv1[7]]),
  heroLv2('ハイスピリット', '3802', 'spilit', 'ian', 'defenser', [herosLv0[7], herosLv0[7], herosLv0[7]]),
  heroLv2('ホワイトスミス', '3803', 'spilit', 'light', 'helper', [herosLv1[11], herosLv1[15]]),
  heroLv2('ニンフ', '3804', 'spilit', 'green', 'helper', [herosLv1[9], herosLv1[14]]),
];
const heroLv3 = hero(3)
const herosLv3 = [
  heroLv3('ヴァルキリー', '4101', 'sword', 'light', 'attacker', [herosLv2[0], herosLv2[16]]),
  heroLv3('デスナイト', '4102', 'sword', 'dark', 'defenser', [herosLv2[0], herosLv2[20]]),
  heroLv3('ロイヤルガード', '4103', 'sword', 'light', 'defenser', [herosLv2[1], herosLv2[2]]),
  heroLv3('ブレードシンガー', '4104', 'sword', 'fire', 'attacker', [herosLv2[0], herosLv2[1]]),
  heroLv3('デュエリスト', '4105', 'sword', 'ice', 'attacker', [herosLv2[3], herosLv2[29]]),
  heroLv3('ルナティック', '4106', 'sword', 'ian', 'attacker', [herosLv2[3], herosLv2[27]]),
  heroLv3('ウィンドウォーカー', '4201', 'arrow', 'green', 'attacker', [herosLv2[4], herosLv2[6]]),
  heroLv3('アーケインアーチャー', '4202', 'arrow', 'ice', 'attacker', [herosLv2[6], herosLv2[8]]),
  heroLv3('レイヴン', '4203', 'arrow', 'dark', 'attacker', [herosLv2[4], herosLv2[5]]),
  heroLv3('コルセア', '4204', 'arrow', 'ian', 'defenser', [herosLv2[2], herosLv2[5]]),
  heroLv3('エンシェントボウ', '4205', 'arrow', 'fire', 'attacker', [herosLv2[4], herosLv2[7]]),
  heroLv3('パイレーツ', '4206', 'arrow', 'ice', 'attacker', [herosLv2[7], herosLv2[11]]),
  heroLv3('トリックスター', '4301', 'assassin', 'dark', 'helper', [herosLv2[10], herosLv2[17]]),
  heroLv3('ハイアサシン', '4302', 'assassin', 'ian', 'attacker', [herosLv2[8], herosLv2[10]]),
  heroLv3('ドラゴンスレイヤー', '4303', 'assassin', 'fire', 'defenser', [herosLv2[9], herosLv2[27]]),
  heroLv3('シャドウダンサー', '4304', 'assassin', 'dark', 'attacker', [herosLv2[8], herosLv2[11]]),
  heroLv3('スナッチャー', '4305', 'assassin', 'green', 'attacker', [herosLv2[5], herosLv2[9]]),
  heroLv3('オシリス', '4306', 'assassin', 'ian', 'attacker', [herosLv2[9], herosLv2[31]]),
  heroLv3('アークメイジ', '4401', 'magic', 'fire', 'helper', [herosLv2[12], herosLv2[13]]),
  heroLv3('エルドリッチ', '4402', 'magic', 'ice', 'attacker', [herosLv2[13], herosLv2[15]]),
  heroLv3('ソウルイーター', '4403', 'magic', 'green', 'attacker', [herosLv2[10], herosLv2[14]]),
  heroLv3('ミスティック', '4404', 'magic', 'dark', 'helper', [herosLv2[6], herosLv2[14]]),
  heroLv3('ドラゴンシャーマン', '4405', 'magic', 'fire', 'helper', [herosLv2[12], herosLv2[23]]),
  heroLv3('ジェネリック', '4406', 'magic', 'ian', 'helper', [herosLv2[15], herosLv2[28]]),
  heroLv3('シビュラ', '4407', 'magic', 'dark', 'attacker', [herosLv2[13], herosLv2[14]]),
  heroLv3('テンプラー', '4501', 'heal', 'light', 'defenser', [herosLv2[2], herosLv2[18]]),
  heroLv3('オラクル', '4502', 'heal', 'ice', 'helper', [herosLv2[12], herosLv2[16]]),
  heroLv3('ダークプリースト', '4503', 'heal', 'dark', 'helper', [herosLv2[18], herosLv2[25]]),
  heroLv3('ビショップ', '4504', 'heal', 'light', 'helper', [herosLv2[17], herosLv2[18]]),
  heroLv3('セイント', '4505', 'heal', 'ice', 'helper', [herosLv2[19], herosLv2[31]]),
  heroLv3('ウィンドキュア', '4506', 'heal', 'green', 'helper', [herosLv2[17], herosLv2[19]]),
  heroLv3('デストロイヤー', '4601', 'fist', 'ice', 'defenser', [herosLv2[21], herosLv2[30]]),
  heroLv3('バイキング', '4602', 'fist', 'light', 'defenser', [herosLv2[3], herosLv2[23]]),
  heroLv3('チャンピオン', '4603', 'fist', 'green', 'attacker', [herosLv2[21], herosLv2[22]]),
  heroLv3('ウォーシェイパー', '4604', 'fist', 'green', 'defenser', [herosLv2[16], herosLv2[20]]),
  heroLv3('スウォッシュバックラー', '4605', 'fist', 'fire', 'attacker', [herosLv2[11], herosLv2[22]]),
  heroLv3('サベージ', '4606', 'fist', 'fire', 'attacker', [herosLv2[22], herosLv2[23]]),
  heroLv3('フォートレス', '4701', 'spear', 'ice', 'helper', [herosLv2[24], herosLv2[25]]),
  heroLv3('トライデント', '4702', 'spear', 'light', 'attacker', [herosLv2[21], herosLv2[27]]),
  heroLv3('ヴァンガード', '4703', 'spear', 'dark', 'defenser', [herosLv2[15], herosLv2[25]]),
  heroLv3('ルーラー', '4704', 'spear', 'green', 'helper', [herosLv2[24], herosLv2[26]]),
  heroLv3('テイマー', '4705', 'spear', 'ice', 'attacker', [herosLv2[19], herosLv2[24]]),
  heroLv3('オペレーター', '4706', 'spear', 'ian', 'helper', [herosLv2[26], herosLv2[30]]),
  heroLv3('アルケミスト', '4801', 'spilit', 'light', 'attacker', [herosLv2[7], herosLv2[31]]),
  heroLv3('エクソシスト', '4802', 'spilit', 'ian', 'attacker', [herosLv2[28], herosLv2[30]]),
  heroLv3('サラマンダー', '4803', 'spilit', 'fire', 'attacker', [herosLv2[1], herosLv2[29]]),
  heroLv3('ウンディーネ', '4804', 'spilit', 'ice', 'helper', [herosLv2[26], herosLv2[29]]),
  heroLv3('シルフ', '4805', 'spilit', 'green', 'attacker', [herosLv2[28], herosLv2[29]]),
  heroLv3('シェード', '4807', 'spilit', 'dark', 'attacker', [herosLv2[20], herosLv2[28]]),
]

const heroLv4 = hero(4)
const herosLv4 = [
  heroLv4('ブラックヴァルキュリア', '5101', 'sword', 'dark', 'defenser', [herosLv3[1], herosLv3[19]]),
  heroLv4('ドラグーン', '5102', 'sword', 'fire', 'defenser', [herosLv3[0], herosLv3[2]]),
  heroLv4('ソードマスター', '5103', 'sword', 'fire', 'attacker', [herosLv3[2], herosLv3[3]]),
  heroLv4('アヴァロン', '5104', 'sword', 'ice', 'attacker', [herosLv3[5], herosLv3[9]]),
  heroLv4('ソウルボウ', '5201', 'arrow', 'green', 'attacker', [herosLv3[6], herosLv3[7]]),
  heroLv4('ダークワンダラー', '5202', 'arrow', 'dark', 'attacker', [herosLv3[8], herosLv3[15]]),
  heroLv4('ファルコン', '5203', 'arrow', 'ice', 'helper', [herosLv3[9], herosLv3[12]]),
  heroLv4('デスペラード', '5204', 'arrow', 'fire', 'attacker', [herosLv3[7], herosLv3[10]]),
  heroLv4('バウンティハンター', '5301', 'assassin', 'ian', 'defenser', [herosLv3[14], herosLv3[36]]),
  heroLv4('ルナブレイド', '5302', 'assassin', 'ice', 'attacker', [herosLv3[5], herosLv3[17]]),
  heroLv4('ダルヴィーシュ', '5303', 'assassin', 'dark', 'attacker', [herosLv3[12], herosLv3[13]]),
  heroLv4('デーモンシャドウ', '5304', 'assassin', 'dark', 'attacker', [herosLv3[13], herosLv3[15]]),
  heroLv4('ロードメイジ', '5401', 'magic', 'light', 'attacker', [herosLv3[18], herosLv3[19]]),
  heroLv4('セージ', '5402', 'magic', 'green', 'helper', [herosLv3[21], herosLv3[28]]),
  heroLv4('ヴァンパイア', '5403', 'magic', 'dark', 'attacker', [herosLv3[23], herosLv3[24]]),
  heroLv4('マリオネット', '5404', 'magic', 'fire', 'helper', [herosLv3[20], herosLv3[30]]),
  heroLv4('ビーストロード', '5501', 'heal', 'fire', 'helper', [herosLv3[25], herosLv3[34]]),
  heroLv4('ダークロード', '5502', 'heal', 'dark', 'attacker', [herosLv3[20], herosLv3[27]]),
  heroLv4('アークエンジェル', '5503', 'heal', 'light', 'helper', [herosLv3[26], herosLv3[28]]),
  heroLv4('ヴェノムクイーン', '5504', 'heal', 'green', 'attacker', [herosLv3[6], herosLv3[26]]),
  heroLv4('ヘルブリンガー', '5601', 'fist', 'ice', 'defenser', [herosLv3[34], herosLv3[36]]),
  heroLv4('ゴッドハンド', '5602', 'fist', 'light', 'attacker', [herosLv3[31], herosLv3[33]]),
  heroLv4('メイジフィスト', '5603', 'fist', 'ice', 'helper', [herosLv3[23], herosLv3[35]]),
  heroLv4('ドリームペインター', '5604', 'fist', 'light', 'helper', [herosLv3[17], herosLv3[31]]),
  heroLv4('キャヴァリア', '5701', 'spear', 'light', 'defenser', [herosLv3[37], herosLv3[38]]),
  heroLv4('デュランダル', '5702', 'spear', 'dark', 'attacker', [herosLv3[39], herosLv3[42]]),
  heroLv4('ウォーロード', '5703', 'spear', 'ian', 'helper', [herosLv3[38], herosLv3[40]]),
  heroLv4('ホーリープリンセス', '5704', 'spear', 'light', 'defenser', [herosLv3[30], herosLv3[42]]),
  heroLv4('ソウルランサー', '5705', 'spear', 'green', 'attacker', [herosLv3[21], herosLv3[37]]),
  heroLv4('ストームピア', '5706', 'spear', 'ian', 'attacker', [herosLv3[40], herosLv3[45]]),
  heroLv4('イフリート', '5801', 'spilit', 'fire', 'attacker', [herosLv3[10], herosLv3[45]]),
  heroLv4('エルライム', '5802', 'spilit', 'ice', 'helper', [herosLv3[44], herosLv3[46]]),
  heroLv4('シルフィード', '5803', 'spilit', 'green', 'attacker', [herosLv3[47], herosLv3[48]]),
  heroLv4('リベレーター', '5804', 'spilit', 'ian', 'defenser', [herosLv3[0], herosLv3[44]]),
  heroLv4('エレボス', '5805', 'spilit', 'dark', 'attacker', [herosLv3[27], herosLv3[48]]),
]


const heroLvs = [herosLv0, herosLv1, herosLv2, herosLv3, herosLv4];
// 子情報を元にで親を設定
const setParentHelper = (parent, children) => {
  children.forEach(c => {
    if (!c.parent.find(arr => arr.name === parent.name)) {
      c.parent.push(parent)
    }
    setParentHelper(c, c.children)
  });
};
heroLvs[heroLvs.length - 1].forEach(hero => {
  setParentHelper(hero, hero.children)
})

module.exports = heroLvs;