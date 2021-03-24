const hero = lv => (name, id, type, elem, role, lang, children) => ({
  name,
  id,
  type,
  elem,
  role,
  lang,
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
  heroLv0('ソードマン', '1101', 'sword', 'fire', 'defenser', {ja: 'ソードマン', zh: '劍士'}),         // 0
  heroLv0('アーチャー', '1201', 'arrow', 'green', 'attacker', {ja: 'アーチャー', zh: '弓箭手'}),      // 1
  heroLv0('ローグ', '1301', 'assassin', 'dark', 'attacker', {ja: 'ローグ', zh: '盜賊'}),             // 2
  heroLv0('ウィザード', '1401', 'magic', 'dark', 'attacker', {ja: 'ウィザード', zh: '巫師'}),         // 3
  heroLv0('クレリック', '1501', 'heal', 'light', 'helper', {ja: 'クレリック', zh: '祭司'}),           // 4
  heroLv0('ファイター', '1601', 'fist', 'ian', 'defenser', {ja: 'ファイター', zh: '戰士'}),           // 5
  heroLv0('ランサー', '1701', 'spear', 'ice', 'defenser', {ja: 'ランサー', zh: '槍術士'}),            // 6
  heroLv0('スピリット', '1801', 'spilit', 'ian', 'helper', {ja: 'スピリット', zh: '精靈'}),           // 7
];
const heroLv1 = hero(1)
const herosLv1 = [
  heroLv1('スペルソード', '2101', 'sword', 'fire', 'attacker', {ja: 'スペルソード', zh: '魔劍士'}, [herosLv0[0], herosLv0[6]]),
  heroLv1('パラディン', '2102', 'sword', 'light', 'defenser', {ja: 'パラディン', zh: '聖騎士'}, [herosLv0[0], herosLv0[0]]),
  heroLv1('スナイパー', '2201', 'arrow', 'fire', 'attacker', {ja: 'スナイパー', zh: '狙擊手'}, [herosLv0[1], herosLv0[1]]),
  heroLv1('チェイサー', '2202', 'arrow', 'green', 'attacker', {ja: 'チェイサー', zh: '追擊者'}, [herosLv0[1], herosLv0[2]]),
  heroLv1('アサシン', '2301', 'assassin', 'dark', 'attacker', {ja: 'アサシン', zh: '刺客'}, [herosLv0[2], herosLv0[2]]),
  heroLv1('ニンジャ', '2302', 'assassin', 'ian', 'attacker', {ja: 'ニンジャ', zh: '忍者'}, [herosLv0[0], herosLv0[2]]),
  heroLv1('ソーサラー', '2401', 'magic', 'ice', 'attacker', {ja: 'ソーサラー', zh: '法師'}, [herosLv0[3], herosLv0[3]]),
  heroLv1('シャーマン', '2402', 'magic', 'ian', 'attacker', {ja: 'シャーマン', zh: '薩滿'}, [herosLv0[3], herosLv0[5]]),
  heroLv1('ドルイド', '2501', 'heal', 'green', 'helper', {ja: 'ドルイド', zh: '德魯伊'}, [herosLv0[3], herosLv0[4]]),
  heroLv1('バード', '2502', 'heal', 'light', 'helper', {ja: 'バード', zh: '吟遊詩人'}, [herosLv0[1], herosLv0[4]]),
  heroLv1('バーバリアン', '2601', 'fist', 'dark', 'attacker', {ja: 'バーバリアン', zh: '異邦人'}, [herosLv0[5], herosLv0[5]]),
  heroLv1('モンク', '2602', 'fist', 'ice', 'helper', {ja: 'モンク', zh: '武僧'}, [herosLv0[5], herosLv0[7]]),
  heroLv1('ガーディアン', '2701', 'spear', 'ian', 'defenser', {ja: 'ガーディアン', zh: '護衛'}, [herosLv0[6], herosLv0[6]]),
  heroLv1('フェンサー', '2702', 'spear', 'dark', 'attacker', {ja: 'フェンサー', zh: '擊劍士'}, [herosLv0[1], herosLv0[6]]),
  heroLv1('エンチャンター', '2801', 'spilit', 'green', 'attacker', {ja: 'エンチャンター', zh: '魔法師'}, [herosLv0[4], herosLv0[7]]),
  heroLv1('ブラックスミス', '2802', 'spilit', 'fire', 'helper', {ja: 'ブラックスミス', zh: '鐵匠'}, [herosLv0[6], herosLv0[7]]),
];
const heroLv2 = hero(2)
const herosLv2 = [
  heroLv2('ルーンナイト', '3101', 'sword', 'fire', 'attacker', {ja: 'ルーンナイト', zh: '符文騎士'}, [herosLv1[0], herosLv1[1]]),
  heroLv2('ハイランダー', '3102', 'sword', 'fire', 'attacker', {ja: 'ハイランダー', zh: '高地人'}, [herosLv1[0], herosLv1[15]]),
  heroLv2('ディフェンダー', '3103', 'sword', 'dark', 'defenser', {ja: 'ディフェンダー', zh: '防衛者'}, [herosLv1[1], herosLv1[10]]),
  heroLv2('クルセイダー', '3104', 'sword', 'light', 'defenser', {ja: 'クルセイダー', zh: '十字軍'}, [herosLv1[1], herosLv1[5]]),
  heroLv2('スカウト', '3201', 'arrow', 'green', 'attacker', {ja: 'スカウト', zh: '童軍'}, [herosLv1[2], herosLv1[3]]),
  heroLv2('レンジャー', '3202', 'arrow', 'ian', 'attacker', {ja: 'レンジャー', zh: '遊俠'}, [herosLv1[2], herosLv1[13]]),
  heroLv2('ハンター', '3203', 'arrow', 'green', 'attacker', {ja: 'ハンター', zh: '獵人'}, [herosLv1[3], herosLv1[9]]),
  heroLv2('スティンガー', '3204', 'arrow', 'light', 'attacker', {ja: 'スティンガー', zh: '毒刺'}, [herosLv1[2], herosLv1[15]]),
  heroLv2('アベンジャー', '3301', 'assassin', 'dark', 'defenser', {ja: 'アベンジャー', zh: '復仇者'}, [herosLv1[4], herosLv1[5]]),
  heroLv2('スレイヤー', '3302', 'assassin', 'green', 'attacker', {ja: 'スレイヤー', zh: '殺手'}, [herosLv1[4], herosLv1[15]]),
  heroLv2('サムライ', '3303', 'assassin', 'ice', 'attacker', {ja: 'サムライ', zh: '武士'}, [herosLv1[0], herosLv1[5]]),
  heroLv2('ワンダラー', '3304', 'assassin', 'dark', 'attacker', {ja: 'ワンダラー', zh: '流浪者'}, [herosLv1[5], herosLv1[6]]),
  heroLv2('インヴォーカー', '3401', 'magic', 'light', 'helper', {ja: 'インヴォーカー', zh: '祈求者'}, [herosLv1[6], herosLv1[14]]),
  heroLv2('ウォーロック', '3402', 'magic', 'ian', 'attacker', {ja: 'ウォーロック', zh: '術士'}, [herosLv1[4], herosLv1[6]]),
  heroLv2('ネクロマンサー', '3403', 'magic', 'dark', 'attacker', {ja: 'ネクロマンサー', zh: '死靈法師'}, [herosLv1[6], herosLv1[7]]),
  heroLv2('エスパー', '3404', 'magic', 'ice', 'helper', {ja: 'エスパー', zh: '超能力者'}, [herosLv1[3], herosLv1[7]]),
  heroLv2('ウォーデン', '3501', 'heal', 'green', 'defenser', {ja: 'ウォーデン', zh: '守望者'}, [herosLv1[4], herosLv1[9]]),
  heroLv2('ミンストレル', '3502', 'heal', 'ice', 'helper', {ja: 'ミンストレル', zh: '樂師'}, [herosLv1[8], herosLv1[14]]),
  heroLv2('プリースト', '3503', 'heal', 'light', 'helper', {ja: 'プリースト', zh: '修女'}, [herosLv0[4], herosLv0[4], herosLv0[4]]),
  heroLv2('ピルグリム', '3504', 'heal', 'light', 'defenser', {ja: 'ピルグリム', zh: '朝聖者'}, [herosLv1[3], herosLv1[8]]),
  heroLv2('バーサーカー', '3601', 'fist', 'dark', 'attacker', {ja: 'バーサーカー', zh: '狂戰士'}, [herosLv1[8], herosLv1[10]]),
  heroLv2('グラディエーター', '3602', 'fist', 'ian', 'defenser', {ja: 'グラディエーター', zh: '角鬥士'}, [herosLv1[10], herosLv1[11]]),
  heroLv2('ストライカー', '3603', 'fist', 'light', 'attacker', {ja: 'ストライカー', zh: '武術家'}, [herosLv1[1], herosLv1[11]]),
  heroLv2('ルーンマスター', '3604', 'fist', 'fire', 'helper', {ja: 'ルーンマスター', zh: '符文大師'}, [herosLv1[7], herosLv1[11]]),
  heroLv2('ライダー', '3701', 'spear', 'ian', 'defenser', {ja: 'ライダー', zh: '騎士'}, [herosLv1[12], herosLv1[13]]),
  heroLv2('ランペイジャー', '3702', 'spear', 'fire', 'attacker', {ja: 'ランペイジャー', zh: '狂暴槍士'}, [herosLv1[0], herosLv1[13]]),
  heroLv2('マエストロ', '3703', 'spear', 'ice', 'helper', {ja: 'マエストロ', zh: '指揮家'}, [herosLv1[8], herosLv1[12]]),
  heroLv2('バガボンド', '3704', 'spear', 'fire', 'attacker', {ja: 'バガボンド', zh: '浪人劍客'}, [herosLv1[10], herosLv1[12]]),
  heroLv2('サーヴァント', '3801', 'spilit', 'dark', 'attacker', {ja: 'サーヴァント', zh: '使役魔'}, [herosLv1[14], herosLv1[7]]),
  heroLv2('ハイスピリット', '3802', 'spilit', 'ian', 'defenser', {ja: 'ハイスピリット', zh: '高階精靈'}, [herosLv0[7], herosLv0[7], herosLv0[7]]),
  heroLv2('ホワイトスミス', '3803', 'spilit', 'light', 'helper', {ja: 'ホワイトスミス', zh: '機械工匠'}, [herosLv1[11], herosLv1[15]]),
  heroLv2('ニンフ', '3804', 'spilit', 'green', 'helper', {ja: 'ニンフ', zh: '寧芙'}, [herosLv1[9], herosLv1[14]]),
];
const heroLv3 = hero(3)
const herosLv3 = [
  heroLv3('ヴァルキリー', '4101', 'sword', 'light', 'attacker', {ja: 'ヴァルキリー', zh: '女武神'}, [herosLv2[0], herosLv2[16]]),
  heroLv3('デスナイト', '4102', 'sword', 'dark', 'defenser', {ja: 'デスナイト', zh: '死亡騎士'}, [herosLv2[0], herosLv2[20]]),
  heroLv3('ロイヤルガード', '4103', 'sword', 'light', 'defenser', {ja: 'ロイヤルガード', zh: '皇家守衛'}, [herosLv2[1], herosLv2[2]]),
  heroLv3('ブレードシンガー', '4104', 'sword', 'fire', 'attacker', {ja: 'ブレードシンガー', zh: '劍詠者'}, [herosLv2[0], herosLv2[1]]),
  heroLv3('デュエリスト', '4105', 'sword', 'ice', 'attacker', {ja: 'デュエリスト', zh: '決鬥者'}, [herosLv2[3], herosLv2[29]]),
  heroLv3('ルナティック', '4106', 'sword', 'ian', 'attacker', {ja: 'ルナティック', zh: '狂亂者'}, [herosLv2[3], herosLv2[27]]),
  heroLv3('ウィンドウォーカー', '4201', 'arrow', 'green', 'attacker', {ja: 'ウィンドウォーカー', zh: '風行者'}, [herosLv2[4], herosLv2[6]]),
  heroLv3('アーケインアーチャー', '4202', 'arrow', 'ice', 'attacker', {ja: 'アーケインアーチャー', zh: '魔射手'}, [herosLv2[6], herosLv2[8]]),
  heroLv3('レイヴン', '4203', 'arrow', 'dark', 'attacker', {ja: 'レイヴン', zh: '掠奪者'}, [herosLv2[4], herosLv2[5]]),
  heroLv3('コルセア', '4204', 'arrow', 'ian', 'defenser', {ja: 'コルセア', zh: '海軍司令'}, [herosLv2[2], herosLv2[5]]),
  heroLv3('エンシェントボウ', '4205', 'arrow', 'fire', 'attacker', {ja: 'エンシェントボウ', zh: '上古射手'}, [herosLv2[4], herosLv2[7]]),
  heroLv3('パイレーツ', '4206', 'arrow', 'ice', 'attacker', {ja: 'パイレーツ', zh: '海盜'}, [herosLv2[7], herosLv2[11]]),
  heroLv3('トリックスター', '4301', 'assassin', 'dark', 'helper', {ja: 'トリックスター', zh: '小丑'}, [herosLv2[10], herosLv2[17]]),
  heroLv3('ハイアサシン', '4302', 'assassin', 'ian', 'attacker', {ja: 'ハイアサシン', zh: '高階刺客'}, [herosLv2[8], herosLv2[10]]),
  heroLv3('ドラゴンスレイヤー', '4303', 'assassin', 'fire', 'defenser', {ja: 'ドラゴンスレイヤー', zh: '屠龍者'}, [herosLv2[9], herosLv2[27]]),
  heroLv3('シャドウダンサー', '4304', 'assassin', 'dark', 'attacker', {ja: 'シャドウダンサー', zh: '影舞者'}, [herosLv2[8], herosLv2[11]]),
  heroLv3('スナッチャー', '4305', 'assassin', 'green', 'attacker', {ja: 'スナッチャー', zh: '攔截者'}, [herosLv2[5], herosLv2[9]]),
  heroLv3('オシリス', '4306', 'assassin', 'ian', 'attacker', {ja: 'オシリス', zh: '歐西里斯'}, [herosLv2[9], herosLv2[31]]),
  heroLv3('アークメイジ', '4401', 'magic', 'fire', 'helper', {ja: 'アークメイジ', zh: '大魔法師'}, [herosLv2[12], herosLv2[13]]),
  heroLv3('エルドリッチ', '4402', 'magic', 'ice', 'attacker', {ja: 'エルドリッチ', zh: '暗黑術士'}, [herosLv2[13], herosLv2[15]]),
  heroLv3('ソウルイーター', '4403', 'magic', 'green', 'attacker', {ja: 'ソウルイーター', zh: '噬魂者'}, [herosLv2[10], herosLv2[14]]),
  heroLv3('ミスティック', '4404', 'magic', 'dark', 'helper', {ja: 'ミスティック', zh: '秘術師'}, [herosLv2[6], herosLv2[14]]),
  heroLv3('ドラゴンシャーマン', '4405', 'magic', 'fire', 'helper', {ja: 'ドラゴンシャーマン', zh: '龍族巫女'}, [herosLv2[12], herosLv2[23]]),
  heroLv3('ジェネリック', '4406', 'magic', 'ian', 'helper', {ja: 'ジェネリック', zh: '炸彈客'}, [herosLv2[15], herosLv2[28]]),
  heroLv3('シビュラ', '4407', 'magic', 'dark', 'attacker', {ja: 'シビュラ', zh: '西貝拉'}, [herosLv2[13], herosLv2[14]]),
  heroLv3('テンプラー', '4501', 'heal', 'light', 'defenser', {ja: 'テンプラー', zh: '聖殿騎士'}, [herosLv2[2], herosLv2[18]]),
  heroLv3('オラクル', '4502', 'heal', 'ice', 'helper', {ja: 'オラクル', zh: '占星術士'}, [herosLv2[12], herosLv2[16]]),
  heroLv3('ダークプリースト', '4503', 'heal', 'dark', 'helper', {ja: 'ダークプリースト', zh: '墮落修女'}, [herosLv2[18], herosLv2[25]]),
  heroLv3('ビショップ', '4504', 'heal', 'light', 'helper', {ja: 'ビショップ', zh: '主教'}, [herosLv2[17], herosLv2[18]]),
  heroLv3('セイント', '4505', 'heal', 'ice', 'helper', {ja: 'セイント', zh: '聖徒'}, [herosLv2[19], herosLv2[31]]),
  heroLv3('ウィンドキュア', '4506', 'heal', 'green', 'helper', {ja: 'ウィンドキュア', zh: '風之治癒者'}, [herosLv2[17], herosLv2[19]]),
  heroLv3('デストロイヤー', '4601', 'fist', 'ice', 'defenser', {ja: 'デストロイヤー', zh: '破壞者'}, [herosLv2[21], herosLv2[30]]),
  heroLv3('バイキング', '4602', 'fist', 'light', 'defenser', {ja: 'バイキング', zh: '維京人'}, [herosLv2[3], herosLv2[23]]),
  heroLv3('チャンピオン', '4603', 'fist', 'green', 'attacker', {ja: 'チャンピオン', zh: '冠軍'}, [herosLv2[21], herosLv2[22]]),
  heroLv3('ウォーシェイパー', '4604', 'fist', 'green', 'defenser', {ja: 'ウォーシェイパー', zh: '獸人戰士'}, [herosLv2[16], herosLv2[20]]),
  heroLv3('スウォッシュバックラー', '4605', 'fist', 'fire', 'attacker', {ja: 'スウォッシュバックラー', zh: '盜劍客'}, [herosLv2[11], herosLv2[22]]),
  heroLv3('サベージ', '4606', 'fist', 'fire', 'attacker', {ja: 'サベージ', zh: '野蠻人'}, [herosLv2[22], herosLv2[23]]),
  heroLv3('フォートレス', '4701', 'spear', 'ice', 'helper', {ja: 'フォートレス', zh: '守護者'}, [herosLv2[24], herosLv2[25]]),
  heroLv3('トライデント', '4702', 'spear', 'light', 'attacker', {ja: 'トライデント', zh: '神聖三叉戟'}, [herosLv2[21], herosLv2[27]]),
  heroLv3('ヴァンガード', '4703', 'spear', 'dark', 'defenser', {ja: 'ヴァンガード', zh: '先鋒'}, [herosLv2[15], herosLv2[25]]),
  heroLv3('ルーラー', '4704', 'spear', 'green', 'helper', {ja: 'ルーラー', zh: '審判者'}, [herosLv2[24], herosLv2[26]]),
  heroLv3('テイマー', '4705', 'spear', 'ice', 'attacker', {ja: 'テイマー', zh: '訓獸師'}, [herosLv2[19], herosLv2[24]]),
  heroLv3('オペレーター', '4706', 'spear', 'ian', 'helper', {ja: 'オペレーター', zh: '操作者'}, [herosLv2[26], herosLv2[30]]),
  heroLv3('アルケミスト', '4801', 'spilit', 'light', 'attacker', {ja: 'アルケミスト', zh: '煉金術師'}, [herosLv2[7], herosLv2[31]]),
  heroLv3('エクソシスト', '4802', 'spilit', 'ian', 'attacker', {ja: 'エクソシスト', zh: '驅魔師'}, [herosLv2[28], herosLv2[30]]),
  heroLv3('サラマンダー', '4803', 'spilit', 'fire', 'attacker', {ja: 'サラマンダー', zh: '沙羅曼達'}, [herosLv2[1], herosLv2[29]]),
  heroLv3('ウンディーネ', '4804', 'spilit', 'ice', 'helper', {ja: 'ウンディーネ', zh: '溫蒂妮'}, [herosLv2[26], herosLv2[29]]),
  heroLv3('シルフ', '4805', 'spilit', 'green', 'attacker', {ja: 'シルフ', zh: '西爾芙'}, [herosLv2[28], herosLv2[29]]),
  heroLv3('シェード', '4807', 'spilit', 'dark', 'attacker', {ja: 'シェード', zh: '暗影'}, [herosLv2[20], herosLv2[28]]),
]

const heroLv4 = hero(4)
const herosLv4 = [
  heroLv4('ブラックヴァルキュリア', '5101', 'sword', 'dark', 'defenser', {ja: 'ブラックヴァルキュリア', zh: '暗黑女武神'}, [herosLv3[1], herosLv3[19]]),
  heroLv4('ドラグーン', '5102', 'sword', 'fire', 'defenser', {ja: 'ドラグーン', zh: '龍騎士'}, [herosLv3[0], herosLv3[2]]),
  heroLv4('ソードマスター', '5103', 'sword', 'fire', 'attacker', {ja: 'ソードマスター', zh: '劍術大師'}, [herosLv3[2], herosLv3[3]]),
  heroLv4('アヴァロン', '5104', 'sword', 'ice', 'attacker', {ja: 'アヴァロン', zh: '阿瓦隆'}, [herosLv3[5], herosLv3[9]]),
  heroLv4('ソウルボウ', '5201', 'arrow', 'green', 'attacker', {ja: 'ソウルボウ', zh: '靈魂射手'}, [herosLv3[6], herosLv3[7]]),
  heroLv4('ダークワンダラー', '5202', 'arrow', 'dark', 'attacker', {ja: 'ダークワンダラー', zh: '暗黑流浪者'}, [herosLv3[8], herosLv3[15]]),
  heroLv4('ファルコン', '5203', 'arrow', 'ice', 'helper', {ja: 'ファルコン', zh: '獵鷹'}, [herosLv3[9], herosLv3[12]]),
  heroLv4('デスペラード', '5204', 'arrow', 'fire', 'attacker', {ja: 'デスペラード', zh: '亡命之徒'}, [herosLv3[7], herosLv3[10]]),
  heroLv4('バウンティハンター', '5301', 'assassin', 'ian', 'defenser', {ja: 'バウンティハンター', zh: '賞金獵人'}, [herosLv3[14], herosLv3[36]]),
  heroLv4('ルナブレイド', '5302', 'assassin', 'ice', 'attacker', {ja: 'ルナブレイド', zh: '月光銀刃'}, [herosLv3[5], herosLv3[17]]),
  heroLv4('ダルヴィーシュ', '5303', 'assassin', 'dark', 'attacker', {ja: 'ダルヴィーシュ', zh: '狂舞僧'}, [herosLv3[12], herosLv3[13]]),
  heroLv4('デーモンシャドウ', '5304', 'assassin', 'dark', 'attacker', {ja: 'デーモンシャドウ', zh: '護衛暗影'}, [herosLv3[13], herosLv3[15]]),
  heroLv4('ロードメイジ', '5401', 'magic', 'light', 'attacker', {ja: 'ロードメイジ', zh: '首席魔法師'}, [herosLv3[18], herosLv3[19]]),
  heroLv4('セージ', '5402', 'magic', 'green', 'helper', {ja: 'セージ', zh: '賢者'}, [herosLv3[21], herosLv3[28]]),
  heroLv4('ヴァンパイア', '5403', 'magic', 'dark', 'attacker', {ja: 'ヴァンパイア', zh: '吸血鬼'}, [herosLv3[23], herosLv3[24]]),
  heroLv4('マリオネット', '5404', 'magic', 'fire', 'helper', {ja: 'マリオネット', zh: '操偶師'}, [herosLv3[20], herosLv3[30]]),
  heroLv4('ビーストロード', '5501', 'heal', 'fire', 'helper', {ja: 'ビーストロード', zh: '至尊九尾狐'}, [herosLv3[25], herosLv3[34]]),
  heroLv4('ダークロード', '5502', 'heal', 'dark', 'attacker', {ja: 'ダークロード', zh: '混沌宿主'}, [herosLv3[20], herosLv3[27]]),
  heroLv4('アークエンジェル', '5503', 'heal', 'light', 'helper', {ja: 'アークエンジェル', zh: '大天使'}, [herosLv3[26], herosLv3[28]]),
  heroLv4('ヴェノムクイーン', '5504', 'heal', 'green', 'attacker', {ja: 'ヴェノムクイーン', zh: '毒后'}, [herosLv3[6], herosLv3[26]]),
  heroLv4('ヘルブリンガー', '5601', 'fist', 'ice', 'defenser', {ja: 'ヘルブリンガー', zh: '地獄使者'}, [herosLv3[34], herosLv3[36]]),
  heroLv4('ゴッドハンド', '5602', 'fist', 'light', 'attacker', {ja: 'ゴッドハンド', zh: '神之手'}, [herosLv3[31], herosLv3[33]]),
  heroLv4('メイジフィスト', '5603', 'fist', 'ice', 'helper', {ja: 'メイジフィスト', zh: '喵喵拳手'}, [herosLv3[23], herosLv3[35]]),
  heroLv4('ドリームペインター', '5604', 'fist', 'light', 'helper', {ja: 'ドリームペインター', zh: '繪夢師'}, [herosLv3[17], herosLv3[31]]),
  heroLv4('キャヴァリア', '5701', 'spear', 'light', 'defenser', {ja: 'キャヴァリア', zh: '天空騎士'}, [herosLv3[37], herosLv3[38]]),
  heroLv4('デュランダル', '5702', 'spear', 'dark', 'attacker', {ja: 'デュランダル', zh: '迪朗達爾'}, [herosLv3[39], herosLv3[42]]),
  heroLv4('ウォーロード', '5703', 'spear', 'ian', 'helper', {ja: 'ウォーロード', zh: '戰神'}, [herosLv3[38], herosLv3[40]]),
  heroLv4('ホーリープリンセス', '5704', 'spear', 'light', 'defenser', {ja: 'ホーリープリンセス', zh: '聖潔公主'}, [herosLv3[30], herosLv3[42]]),
  heroLv4('ソウルランサー', '5705', 'spear', 'green', 'attacker', {ja: 'ソウルランサー', zh: '靈魂槍術士'}, [herosLv3[21], herosLv3[37]]),
  heroLv4('ストームピア', '5706', 'spear', 'ian', 'attacker', {ja: 'ストームピア', zh: '暴風長槍手'}, [herosLv3[40], herosLv3[45]]),
  heroLv4('イフリート', '5801', 'spilit', 'fire', 'attacker', {ja: 'イフリート', zh: '伊弗利特'}, [herosLv3[10], herosLv3[45]]),
  heroLv4('エルライム', '5802', 'spilit', 'ice', 'helper', {ja: 'エルライム', zh: '依萊恩'}, [herosLv3[44], herosLv3[46]]),
  heroLv4('シルフィード', '5803', 'spilit', 'green', 'attacker', {ja: 'シルフィード', zh: '西爾芙德'}, [herosLv3[47], herosLv3[48]]),
  heroLv4('リベレーター', '5804', 'spilit', 'ian', 'defenser', {ja: 'リベレーター', zh: '解放者'}, [herosLv3[0], herosLv3[44]]),
  heroLv4('エレボス', '5805', 'spilit', 'dark', 'attacker', {ja: 'エレボス', zh: '厄瑞玻斯'}, [herosLv3[27], herosLv3[48]]),
]


const heroLvs = [herosLv0, herosLv1, herosLv2, herosLv3, herosLv4];
// 子情報を元にで親を設定
const setParentHelper = (parent, children) => {
  children.forEach(c => {
    if (!c.parent.find(arr => arr.id === parent.id)) {
      c.parent.push(parent)
    }
    setParentHelper(c, c.children)
  });
};
heroLvs[heroLvs.length - 1].forEach(hero => {
  setParentHelper(hero, hero.children)
})

module.exports = heroLvs;