/*:
 * @help
 * グローバルデータの記録と取得はスクリプトで行います。
 * 
 * ■グローバルデータを記録
 * 
 * DataManager.setGlobalData('データ名', 値)
 * 
 * 例）ABC という名前で 10 という数値値を記録
 * DataManager.setGlobalData('ABC', 10)
 * 
 * 例）XYZ という名前で TEST という文字列を記録
 * DataManager.getGlobalData('XYZ', 'TEST')
 * 
 * ■グローバルデータを取得
 * 
 * DataManager.getGlobalData('データ名')
 * 
 * 例）ABC という名前のデータの値を取得
 * DataManager.getGlobalData('ABC')
 * 
 * 例）「ABCが10以上だったら」というスクリプト
 * DataManager.getGlobalData('ABC') >= 10
 */

'use strict';

{
    //==============================================================================
    // DataManager
    //==============================================================================

    DataManager.getGlobalData = function(name) {
        let info = this.loadGlobalInfo();
        let data = info[0] || {};
        let value = data[name];
        return value;
    };

    DataManager.setGlobalData = function(name, value) {
        let info = this.loadGlobalInfo();
        let data = info[0] || {};
        data[name] = value;
        info[0] = data;
        this.saveGlobalInfo(info);
    };
}