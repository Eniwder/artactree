const hero = lv => (name, id, type, elem, children) => ({
  name,
  id,
  type,
  elem,
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
  heroLv0('ソードマン', '1101', 'sword', 'fire'), // 0
  heroLv0('アーチャー', '1201', 'arrow', 'green'), // 1
  heroLv0('ローグ', '1301', 'assassin', 'dark'), // 2
  heroLv0('ウィザード', '1401', 'magic', 'dark'), // 3
  heroLv0('クレリック', '1501', 'heal', 'light'), // 4
  heroLv0('ファイター', '1601', 'fist', 'ian'), // 5
  heroLv0('ランサー', '1701', 'spear', 'ice'), // 6
  heroLv0('スピリット', '1801', 'spilit', 'ian'), // 7
];
const heroLv1 = hero(1)
const herosLv1 = [
  heroLv1('スペルソード', '2101', 'sword', 'fire', [herosLv0[0], herosLv0[6]]),
  heroLv1('パラディン', '2102', 'sword', 'light', [herosLv0[0], herosLv0[0]]),
  heroLv1('スナイパー', '2201', 'arrow', 'fire', [herosLv0[1], herosLv0[1]]),
  heroLv1('チェイサー', '2202', 'arrow', 'green', [herosLv0[1], herosLv0[2]]),
  heroLv1('アサシン', '2301', 'assassin', 'dark', [herosLv0[2], herosLv0[2]]),
  heroLv1('ニンジャ', '2302', 'assassin', 'ian', [herosLv0[0], herosLv0[2]]),
  heroLv1('ソーサラー', '2401', 'magic', 'ice', [herosLv0[3], herosLv0[3]]),
  heroLv1('シャーマン', '2402', 'magic', 'ian', [herosLv0[3], herosLv0[5]]),
  heroLv1('ドルイド', '2501', 'heal', 'green', [herosLv0[3], herosLv0[4]]),
  heroLv1('バード', '2502', 'heal', 'light', [herosLv0[1], herosLv0[4]]),
  heroLv1('バーバリアン', '2601', 'fist', 'dark', [herosLv0[5], herosLv0[5]]),
  heroLv1('モンク', '2602', 'fist', 'ice', [herosLv0[5], herosLv0[7]]),
  heroLv1('ガーディアン', '2701', 'spear', 'ian', [herosLv0[6], herosLv0[6]]),
  heroLv1('フェンサー', '2702', 'spear', 'dark', [herosLv0[1], herosLv0[6]]),
  heroLv1('エンチャンター', '2801', 'spilit', 'green', [herosLv0[4], herosLv0[7]]),
  heroLv1('ブラックスミス', '2802', 'spilit', 'fire', [herosLv0[6], herosLv0[7]]),
];
const heroLv2 = hero(2)
const herosLv2 = [
  heroLv2('ルーンナイト', '3101', 'sword', 'fire', [herosLv1[0], herosLv1[1]]),
  heroLv2('ハイランダー', '3102', 'sword', 'fire', [herosLv1[0], herosLv1[15]]),
  heroLv2('ディフェンダー', '3103', 'sword', 'dark', [herosLv1[1], herosLv1[10]]),
  heroLv2('クルセイダー', '3104', 'sword', 'light', [herosLv1[1], herosLv1[5]]),
  heroLv2('スカウト', '3201', 'arrow', 'green', [herosLv1[2], herosLv1[3]]),
  heroLv2('レンジャー', '3202', 'arrow', 'ian', [herosLv1[2], herosLv1[13]]),
  heroLv2('ハンター', '3203', 'arrow', 'green', [herosLv1[3], herosLv1[9]]),
  heroLv2('スティンガー', '3204', 'arrow', 'light', [herosLv1[2], herosLv1[15]]),
  heroLv2('アベンジャー', '3301', 'assassin', 'dark', [herosLv1[4], herosLv1[5]]),
  heroLv2('スレイヤー', '3302', 'assassin', 'green', [herosLv1[4], herosLv1[15]]),
  heroLv2('サムライ', '3303', 'assassin', 'ice', [herosLv1[0], herosLv1[5]]),
  heroLv2('ワンダラー', '3304', 'assassin', 'dark', [herosLv1[5], herosLv1[6]]),
  heroLv2('インヴォーカー', '3401', 'magic', 'light', [herosLv1[6], herosLv1[14]]),
  heroLv2('ウォーロック', '3402', 'magic', 'ian', [herosLv1[4], herosLv1[6]]),
  heroLv2('ネクロマンサー', '3403', 'magic', 'dark', [herosLv1[6], herosLv1[7]]),
  heroLv2('エスパー', '3404', 'magic', 'ice', [herosLv1[3], herosLv1[7]]),
  heroLv2('ウォーデン', '3501', 'heal', 'green', [herosLv1[4], herosLv1[9]]),
  heroLv2('ミンストレル', '3502', 'heal', 'ice', [herosLv1[8], herosLv1[14]]),
  heroLv2('プリースト', '3503', 'heal', 'light', [herosLv0[4], herosLv0[4], herosLv0[4]]),
  heroLv2('ピルグリム', '3504', 'heal', 'light', [herosLv1[3], herosLv1[8]]),
  heroLv2('バーサーカー', '3601', 'fist', 'dark', [herosLv1[8], herosLv1[10]]),
  heroLv2('グラディエーター', '3602', 'fist', 'ian', [herosLv1[10], herosLv1[11]]),
  heroLv2('ストライカー', '3603', 'fist', 'light', [herosLv1[1], herosLv1[11]]),
  heroLv2('ルーンマスター', '3604', 'fist', 'fire', [herosLv1[7], herosLv1[11]]),
  heroLv2('ライダー', '3701', 'spear', 'ian', [herosLv1[12], herosLv1[13]]),
  heroLv2('ランペイジャー', '3702', 'spear', 'fire', [herosLv1[0], herosLv1[13]]),
  heroLv2('マエストロ', '3703', 'spear', 'ice', [herosLv1[8], herosLv1[12]]),
  heroLv2('バガボンド', '3704', 'spear', 'fire', [herosLv1[10], herosLv1[12]]),
  heroLv2('サーヴァント', '3801', 'spilit', 'dark', [herosLv1[14], herosLv1[7]]),
  heroLv2('ハイスピリット', '3802', 'spilit', 'ian', [herosLv0[7], herosLv0[7], herosLv0[7]]),
  heroLv2('ホワイトスミス', '3803', 'spilit', 'light', [herosLv1[11], herosLv1[15]]),
  heroLv2('ニンフ', '3804', 'spilit', 'green', [herosLv1[9], herosLv1[14]]),
];
const heroLv3 = hero(3)
const herosLv3 = [
  heroLv3('ヴァルキリー', '4101', 'sword', 'light', [herosLv2[0], herosLv2[16]]),
  heroLv3('デスナイト', '4102', 'sword', 'dark', [herosLv2[0], herosLv2[20]]),
  heroLv3('ロイヤルガード', '4103', 'sword', 'light', [herosLv2[1], herosLv2[2]]),
  heroLv3('ブレードシンガー', '4104', 'sword', 'fire', [herosLv2[0], herosLv2[1]]),
  heroLv3('デュエリスト', '4105', 'sword', 'ice', [herosLv2[3], herosLv2[29]]),
  heroLv3('ルナティック', '4106', 'sword', 'ian', [herosLv2[3], herosLv2[27]]),
  heroLv3('ウィンドウォーカー', '4201', 'arrow', 'green', [herosLv2[4], herosLv2[6]]),
  heroLv3('アーケインアーチャー', '4202', 'arrow', 'ice', [herosLv2[6], herosLv2[8]]),
  heroLv3('レイヴン', '4203', 'arrow', 'dark', [herosLv2[4], herosLv2[5]]),
  heroLv3('コルセア', '4204', 'arrow', 'ian', [herosLv2[2], herosLv2[5]]),
  heroLv3('エンシェントボウ', '4205', 'arrow', 'fire', [herosLv2[4], herosLv2[7]]),
  heroLv3('パイレーツ', '4206', 'arrow', 'ice', [herosLv2[7], herosLv2[11]]),
  heroLv3('トリックスター', '4301', 'assassin', 'dark', [herosLv2[10], herosLv2[17]]),
  heroLv3('ハイアサシン', '4302', 'assassin', 'ian', [herosLv2[8], herosLv2[10]]),
  heroLv3('ドラゴンスレイヤー', '4303', 'assassin', 'fire', [herosLv2[9], herosLv2[27]]),
  heroLv3('シャドウダンサー', '4304', 'assassin', 'dark', [herosLv2[8], herosLv2[11]]),
  heroLv3('スナッチャー', '4305', 'assassin', 'green', [herosLv2[5], herosLv2[9]]),
  heroLv3('オシリス', '4306', 'assassin', 'ian', [herosLv2[9], herosLv2[31]]),
  heroLv3('アークメイジ', '4401', 'magic', 'fire', [herosLv2[12], herosLv2[13]]),
  heroLv3('エルドリッチ', '4402', 'magic', 'ice', [herosLv2[13], herosLv2[15]]),
  heroLv3('ソウルイーター', '4403', 'magic', 'green', [herosLv2[10], herosLv2[14]]),
  heroLv3('ミスティック', '4404', 'magic', 'dark', [herosLv2[6], herosLv2[14]]),
  heroLv3('ドラゴンシャーマン', '4405', 'magic', 'fire', [herosLv2[12], herosLv2[23]]),
  heroLv3('ジェネリック', '4406', 'magic', 'ian', [herosLv2[15], herosLv2[28]]),
  heroLv3('シビュラ', '4407', 'magic', 'dark', [herosLv2[13], herosLv2[14]]),
  heroLv3('テンプラー', '4501', 'heal', 'light', [herosLv2[2], herosLv2[18]]),
  heroLv3('オラクル', '4502', 'heal', 'ice', [herosLv2[12], herosLv2[16]]),
  heroLv3('ダークプリースト', '4503', 'heal', 'dark', [herosLv2[18], herosLv2[25]]),
  heroLv3('ビショップ', '4504', 'heal', 'light', [herosLv2[17], herosLv2[18]]),
  heroLv3('セイント', '4505', 'heal', 'ice', [herosLv2[19], herosLv2[31]]),
  heroLv3('ウィンドキュア', '4506', 'heal', 'green', [herosLv2[17], herosLv2[19]]),
  heroLv3('デストロイヤー', '4601', 'fist', 'ice', [herosLv2[21], herosLv2[30]]),
  heroLv3('バイキング', '4602', 'fist', 'light', [herosLv2[3], herosLv2[23]]),
  heroLv3('チャンピオン', '4603', 'fist', 'green', [herosLv2[21], herosLv2[22]]),
  heroLv3('ウォーシェイパー', '4604', 'fist', 'green', [herosLv2[16], herosLv2[20]]),
  heroLv3('スウォッシュバックラー', '4605', 'fist', 'fire', [herosLv2[11], herosLv2[22]]),
  heroLv3('サベージ', '4606', 'fist', 'fire', [herosLv2[22], herosLv2[23]]),
  heroLv3('フォートレス', '4701', 'spear', 'ice', [herosLv2[24], herosLv2[25]]),
  heroLv3('トライデント', '4702', 'spear', 'light', [herosLv2[21], herosLv2[27]]),
  heroLv3('ヴァンガード', '4703', 'spear', 'dark', [herosLv2[15], herosLv2[25]]),
  heroLv3('ルーラー', '4704', 'spear', 'green', [herosLv2[24], herosLv2[26]]),
  heroLv3('テイマー', '4705', 'spear', 'ice', [herosLv2[19], herosLv2[24]]),
  heroLv3('オペレーター', '4706', 'spear', 'ian', [herosLv2[26], herosLv2[30]]),
  heroLv3('アルケミスト', '4801', 'spilit', 'light', [herosLv2[7], herosLv2[31]]),
  heroLv3('エクソシスト', '4802', 'spilit', 'ian', [herosLv2[28], herosLv2[30]]),
  heroLv3('サラマンダー', '4803', 'spilit', 'fire', [herosLv2[1], herosLv2[29]]),
  heroLv3('ウンディーネ', '4804', 'spilit', 'ice', [herosLv2[26], herosLv2[29]]),
  heroLv3('シルフ', '4805', 'spilit', 'green', [herosLv2[28], herosLv2[29]]),
  heroLv3('シェード', '4807', 'spilit', 'dark', [herosLv2[20], herosLv2[28]]),
]

const heroLv4 = hero(4)
const herosLv4 = [
  heroLv3('ブラックヴァルキュリア', '5101', 'sword', 'dark', [herosLv3[1], herosLv3[19]]),
  heroLv3('ドラグーン', '5102', 'sword', 'fire', [herosLv3[0], herosLv3[2]]),
  heroLv3('ソードマスター', '5103', 'sword', 'fire', [herosLv3[2], herosLv3[3]]),
  heroLv3('アヴァロン', '5104', 'sword', 'ice', [herosLv3[5], herosLv3[9]]),
  heroLv3('ソウルボウ', '5201', 'arrow', 'green', [herosLv3[6], herosLv3[7]]),
  heroLv3('ダークワンダラー', '5202', 'arrow', 'dark', [herosLv3[8], herosLv3[15]]),
  heroLv3('ファルコン', '5203', 'arrow', 'ice', [herosLv3[9], herosLv3[12]]),
  heroLv3('デスペラード', '5204', 'arrow', 'fire', [herosLv3[7], herosLv3[10]]),
  heroLv3('バウンティハンター', '5301', 'assassin', 'ian', [herosLv3[14], herosLv3[36]]),
  heroLv3('ルナブレイド', '5302', 'assassin', 'ice', [herosLv3[5], herosLv3[17]]),
  heroLv3('ダルヴィーシュ', '5303', 'assassin', 'dark', [herosLv3[12], herosLv3[13]]),
  heroLv3('デーモンシャドウ', '5304', 'assassin', 'dark', [herosLv3[13], herosLv3[15]]),
  heroLv3('ロードメイジ', '5401', 'magic', 'light', [herosLv3[18], herosLv3[19]]),
  heroLv3('セージ', '5402', 'magic', 'green', [herosLv3[21], herosLv3[28]]),
  heroLv3('ヴァンパイア', '5403', 'magic', 'dark', [herosLv3[23], herosLv3[24]]),
  heroLv3('マリオネット', '5404', 'magic', 'fire', [herosLv3[20], herosLv3[30]]),
  heroLv3('ビーストロード', '5501', 'heal', 'fire', [herosLv3[25], herosLv3[34]]),
  heroLv3('ダークロード', '5502', 'heal', 'dark', [herosLv3[20], herosLv3[27]]),
  heroLv3('アークエンジェル', '5503', 'heal', 'light', [herosLv3[26], herosLv3[28]]),
  heroLv3('ヴェノムクイーン', '5504', 'heal', 'green', [herosLv3[6], herosLv3[26]]),
  heroLv3('ヘルブリンガー', '5601', 'fist', 'ice', [herosLv3[34], herosLv3[36]]),
  heroLv3('ゴッドハンド', '5602', 'fist', 'light', [herosLv3[31], herosLv3[33]]),
  heroLv3('メイジフィスト', '5603', 'fist', 'ice', [herosLv3[23], herosLv3[35]]),
  heroLv3('ドリームペインター', '5604', 'fist', 'light', [herosLv3[17], herosLv3[31]]),
  heroLv3('キャヴァリア', '5701', 'spear', 'light', [herosLv3[37], herosLv3[38]]),
  heroLv3('デュランダル', '5702', 'spear', 'dark', [herosLv3[39], herosLv3[42]]),
  heroLv3('ウォーロード', '5703', 'spear', 'ian', [herosLv3[38], herosLv3[40]]),
  heroLv3('ホーリープリンセス', '5704', 'spear', 'light', [herosLv3[30], herosLv3[42]]),
  heroLv3('ソウルランサー', '5705', 'spear', 'green', [herosLv3[21], herosLv3[37]]),
  heroLv3('ストームピア', '5706', 'spear', 'ian', [herosLv3[40], herosLv3[45]]),
  heroLv3('イフリート', '5801', 'spilit', 'fire', [herosLv3[10], herosLv3[45]]),
  heroLv3('エルライム', '5802', 'spilit', 'ice', [herosLv3[44], herosLv3[46]]),
  heroLv3('シルフィード', '5803', 'spilit', 'green', [herosLv3[47], herosLv3[48]]),
  heroLv3('リベレーター', '5804', 'spilit', 'ian', [herosLv3[0], herosLv3[44]]),
  heroLv3('エレボス', '5805', 'spilit', 'dark', [herosLv3[27], herosLv3[48]]),
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