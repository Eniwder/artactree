const languages = {
    ja: {
        options: {
            iconWidth: 'アイコンサイズ',
            opacity: '透過度',
            deleteName: '名前を省略',
            elemBack: '属性カラー',
            typeBack: 'タイプ表示',
            reverse: 'リバース',
            horizon: '水平表示',
            gamemode: 'ゲームモード表示',
        },
        filterRole: {
            attacker: '攻撃',
            defenser: '防御',
            helper: '補助',
        },
        snackbarText: {
            '1.0': '初版。',
            '1.0.2': '右クリックの挙動を少し修正。',
            '1.0.3': '役割フィルタを追加しました。',
            '1.0.4': '多言語対応(中文)',
            '1.0.5': 'ゲームモードの表示を増やす',
            '1.1.1': 'ゲームモードの表示を増やす',
        }
    },
    zh: {
        options: {
            iconWidth: 'Icon大小',
            opacity: '透明度',
            deleteName: '省略名字',
            elemBack: '屬性顏色',
            typeBack: '類型顯示',
            reverse: '倒轉',
            horizon: '水平顯示',
            gamemode: '遊戲模式顯示',
        },
        filterRole: {
            attacker: '攻擊',
            defenser: '防禦',
            helper: '輔助',
        },
        snackbarText: {
            '1.0': '初版',
            '1.0.2': '修復了右鍵單擊問題。',
            '1.0.3': '增加角色過濾器。',
            '1.0.4': '增加語系。',
            '1.0.5': '增加遊戲模式顯示',
            '1.1.1': '固定遊戲模式顯示',
        }
    }
}

module.exports = languages;