/*:
 * @param Title Setting
 * @type struct<Setting>[]
 * @desc
 * 
 * @help
 * Title Settingの何もないところをダブルクリックすると設定が追加できます。
 * 
 * [Condition]
 * Script: 設定を有効にする条件をjavascriptで指定します。
 * 
 * [Title Material]
 * Logo:       タイトルロゴ画像を指定します。
 * --------------------------------------------------------------------
 * Background: タイトル背景画像を指定します。
 * --------------------------------------------------------------------
 * Bgm:        タイトルBGMを指定します。
 * --------------------------------------------------------------------
 * Cursor:     カーソル画像を指定します。
 * --------------------------------------------------------------------
 * Command:    コマンド画像を指定します。
 *             画像読み込みの際にはファイル名末尾の数字は無視され、
 *             コマンド位置番号に置き換わります。
 * --------------------------------------------------------------------
 * ※ファイルを指定しなかった場合、当該項目については何も行われません。
 * 
 * 上記以外の設定の説明はMOG_TitlePictureCom.jsを参照してください。
 */

/*~struct~Setting:
 * @param -> Condition <<<<<<<<<<<<<<<<<<<<<<<
 * @desc
 * 
 * @param Script
 * @desc
 * @type string
 * @default
 * @parent -> Condition <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param
 * 
 * @param -> Title Material <<<<<<<<<<<<<<<<<<<<<<<
 * @desc
 * 
 * @param Logo
 * @desc
 * @type file
 * @dir img/titles2/
 * @require 1
 * @default
 * @parent -> Title Material <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Background
 * @desc
 * @type file
 * @dir img/titles1/
 * @require 1
 * @default
 * @parent -> Title Material <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Bgm
 * @desc
 * @type file
 * @dir audio/bgm/
 * @require 1
 * @default
 * @parent -> Title Material <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Cursor
 * @desc
 * @type file
 * @dir img/titles2/
 * @require 1
 * @default
 * @parent -> Title Material <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Command
 * @desc
 * @type file
 * @dir img/titles2/
 * @require 1
 * @default
 * @parent -> Title Material <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param
 * 
 * @param -> Main <<<<<<<<<<<<<<<<<<<<<<<
 * @desc
 * 
 * @param Animation Mode
 * @desc Definição do tipo de animação.
 * 0 - None     1 - Pulse    2 - Shake
 * @default 2
 * @type select
 * @option None
 * @value 0
 * @option Pulse Effect
 * @value 1
 * @option Shake Effect
 * @value 2
 * @parent -> Main <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param Left & Right Input
 * @desc Ativar a seleção de comandos com as teclas Right/Left.
 * @default true
 * @type boolean
 * @parent -> Main <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param Com Fade-In Duration
 * @text Fade-In Duration 
 * @desc Faz os comandos aparecerem gradualmente.
 * @default 13
 * @type number
 * @parent -> Main <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param Slide X-Axis
 * @desc Faz os comandos deslizarem na horizontal.
 * @default -100
 * @type number
 * @parent -> Main <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param Slide Y-Axis
 * @desc Faz os comandos deslizarem na vertical.
 * @default 0
 * @type number
 * @parent -> Main <<<<<<<<<<<<<<<<<<<<<<<
 *   
 * @param
 * 
 * @param -> Smart Background  <<<<<<<<<<<<<<<<<<<<<<<
 * @desc
 * 
 * @param Smart Background
 * @text Visible
 * @desc Ativar a imagem de fundo baseado na seleção de comando.
 * @default true
 * @type boolean
 * @parent -> Smart Background  <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param Background X-Axis
 * @text X-Axis 
 * @desc Definição X-Axis da imagem de fundo.
 * @default 0
 * @type number
 * @parent -> Smart Background  <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param Background Y-Axis
 * @text Y-Axis  
 * @desc Definição Y-Axis da imagem de fundo.
 * @default 0
 * @type number
 * @parent -> Smart Background  <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param Background Fade-In Duration
 * @text Fade-In Duration
 * @desc Definição do tempo para apresentar a imagem.
 * @default 90
 * @type number
 * @parent -> Smart Background  <<<<<<<<<<<<<<<<<<<<<<<
 *    
 * @param
 *  
 * @param -> Title Sprite <<<<<<<<<<<<<<<<<<<<<<<
 * @desc
 * 
 * @param Title Sprite
 * @text Visible
 * @desc Ativar o nome do título em sprite.
 * É necessário ter o arquivo Title.png na pasta img/titles2/
 * @default true
 * @type boolean
 * @parent -> Title Sprite <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param Title Sprite X-Axis
 * @text X-Axis
 * @desc Definição X-axis.
 * @default 300
 * @parent -> Title Sprite <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Title Sprite Y-Axis
 * @text Y-Axis
 * @desc Definição Y-axis.
 * @default 150
 * @parent -> Title Sprite <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param Fade-In Duration
 * @desc Define o tempo para fazer o título aparecer.
 * @default 40
 * @type number
 * @parent -> Title Sprite <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param Zoom Effect
 * @desc Ativar o efeito de zoom.
 * @default true
 * @type boolean
 * @parent -> Title Sprite <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param Zoom Speed
 * @desc Definição do tempo de zoom.
 * @default 40
 * @type number
 * @parent -> Title Sprite <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param
 * 
 * @param -> Cursor <<<<<<<<<<<<<<<<<<<<<<<
 * @desc
 * 
 * @param Cursor X-Axis
 * @text X-Axis
 * @desc Definição X-axis do cursor.
 * @default 0
 * @parent -> Cursor <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Cursor Y-Axis
 * @text Y-Axis
 * @desc Definição Y-axis do cursor.
 * @default 5
 * @parent -> Cursor <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Cursor Visible
 * @text Visible
 * @desc Ativar cursor.
 * @default true
 * @type boolean
 * @parent -> Cursor <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Cursor Wave Animation
 * @text Wave Animation
 * @desc Ativar animação de deslize.
 * @default true
 * @type boolean
 * @parent -> Cursor <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Cursor Rotation Animation
 * @text Rotation Animation
 * @desc Ativar animação de rotação.
 * @default true
 * @type boolean
 * @parent -> Cursor <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Cursor Rotation Speed
 * @text Rotation Speed
 * @desc Definição da velociade de rotação.
 * @default 0.05
 * @parent -> Cursor <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param
 * 
 * @param -> Commands <<<<<<<<<<<<<<<<<<<<<<<
 * @desc
 * 
 * @param Command Pos 1
 * @desc Definição da posição do comando 1.
 * E.g -     32,32
 * @default 650,460
 * @parent -> Commands <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Command Pos 2
 * @desc Definição da posição do comando 2.
 * E.g -     32,32
 * @default 660,490
 * @parent -> Commands <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Command Pos 3
 * @desc Definição da posição do comando 3.
 * E.g -     32,32
 * @default 665,520
 * @parent -> Commands <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Command Pos 4
 * @desc Definição da posição do comando 4.
 * E.g -     32,32
 * @default 670,550
 * @parent -> Commands <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Command Pos 5
 * @desc Definição da posição do comando 5.
 * E.g -     32,32
 * @default 345,498
 * @parent -> Commands <<<<<<<<<<<<<<<<<<<<<<< 
 *
 * @param Command Pos 6
 * @desc Definição da posição do comando 6.
 * E.g -     32,32
 * @default 345,530
 * @parent -> Commands <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Command Pos 7
 * @desc Definição da posição do comando 7.
 * E.g -     32,32
 * @default 0,192
 * @parent -> Commands <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Command Pos 8
 * @desc Definição da posição do comando 8.
 * E.g -     32,32
 * @default 0,224
 * @parent -> Commands <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Command Pos 9
 * @desc Definição da posição do comando 9.
 * E.g -     32,32
 * @default 0,256
 * @parent -> Commands <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Command Pos 10
 * @desc Definição da posição do comando 10.
 * E.g -     32,32
 * @default 0,288
 * @parent -> Commands <<<<<<<<<<<<<<<<<<<<<<<
 */

'use strict';

if (Imported && Imported.MOG_Picture_Command)
{
    let $p = (p => ({
        'Title Setting':  JSON.parse(p['Title Setting']).map(v => JSON.parse(v))
    }))(PluginManager.parameters('MpiUrmMogTitlePictureCom'));

    let $s = [];

    for (let setting of $p['Title Setting']) {
        let s = {};
        s.condition                = String(setting['Script'] || "\"\"");
        s.title_logo               = String(setting['Logo'] || "");
        s.title_background         = String(setting['Background'] || "");
        s.title_bgm                = String(setting['Bgm'] || "");
        s.title_cursor             = String(setting['Cursor'] || "");
        s.title_command            = String(setting['Command'] || "");
        s.title_sprite             = (setting['Title Sprite'] || false);
        s.title_x                  = Number(setting['Title Sprite X-Axis'] || 300);
        s.title_y                  = Number(setting['Title Sprite Y-Axis'] || 150);
        s.title_zoomEffect         = String(setting['Zoom Effect'] || "true");
        s.title_zoomDuration       = Number(setting['Zoom Speed'] || 40); 
        s.title_FadeInDuration     = Number(setting['Fade-In Duration'] || 40);
        s.title_comMode            = Number(setting['Animation Mode'] || 2);
        s.title_ComFadeInDuration  = Number(setting['Com Fade-In Duration'] || 13);
        s.title_sideInput          = String(setting['Left & Right Input'] || "true");
        s.title_subPicture         = String(setting['Smart Background'] || "true");
        s.title_slideXaxis         = Number(setting['Slide X-Axis'] || -100);
        s.title_slideYaxis         = Number(setting['Slide Y-Axis'] || 0);
        s.title_subPictureX        = Number(setting['Background X-Axis'] || 0);
        s.title_subPictureY        = Number(setting['Background Y-Axis'] || 0);
        s.title_subFadeInDuration  = Number(setting['Background Fade-In Duration'] || 90); 
        s.title_cursorVisible      = String(setting['Cursor Visible'] || "true");
        s.title_cursorSlide        = String(setting['Cursor Wave Animation'] || "true");
        s.title_cursorX            = Number(setting['Cursor X-Axis'] || 8);
        s.title_cursorY            = Number(setting['Cursor Y-Axis'] || -10);    
        s.title_cursorRot          = String(setting['Cursor Rotation Animation'] || "true");
        s.title_cursorRotSpeed     = Number(setting['Cursor Rotation Speed'] || 0.05);
        s.title_com_pos            = [];
        for (let i = 0; i < 10; i++) {
            s.title_com_pos[i]     = (setting['Command Pos ' + String(i + 1)] || null);
        };
        $s.push(s);
    }

    //==============================================================================
    // Scene_Title
    //==============================================================================
    
    (__initialize => {
        Scene_Title.prototype.initialize = function() {
            __initialize.apply(this, arguments);
            let id = $s.findIndex(s => {
                return Function(`return (${s.condition})`)();
            });
            if (id >= 0) {
                Moghunter.title_logo =              $s[id].title_logo;
                Moghunter.title_background =        $s[id].title_background;
                Moghunter.title_bgm =               $s[id].title_bgm;
                Moghunter.title_cursor =            $s[id].title_cursor;
                Moghunter.title_command =           $s[id].title_command;
                Moghunter.title_sprite =            $s[id].title_sprite;
                Moghunter.title_x =                 $s[id].title_x;
                Moghunter.title_y =                 $s[id].title_y;
                Moghunter.title_zoomEffect =        $s[id].title_zoomEffect;
                Moghunter.title_zoomDuration =      $s[id].title_zoomDuration;
                Moghunter.title_FadeInDuration =    $s[id].title_FadeInDuration;
                Moghunter.title_comMode =           $s[id].title_comMode;
                Moghunter.title_ComFadeInDuration = $s[id].title_ComFadeInDuration;
                Moghunter.title_sideInput =         $s[id].title_sideInput;
                Moghunter.title_subPicture =        $s[id].title_subPicture;
                Moghunter.title_slideXaxis =        $s[id].title_slideXaxis;
                Moghunter.title_slideYaxis =        $s[id].title_slideYaxis;
                Moghunter.title_subPictureX =       $s[id].title_subPictureX;
                Moghunter.title_subPictureY =       $s[id].title_subPictureY;
                Moghunter.title_subFadeInDuration = $s[id].title_subFadeInDuration;
                Moghunter.title_cursorVisible =     $s[id].title_cursorVisible;
                Moghunter.title_cursorSlide =       $s[id].title_cursorSlide;
                Moghunter.title_cursorX =           $s[id].title_cursorX;
                Moghunter.title_cursorY =           $s[id].title_cursorY;
                Moghunter.title_cursorRot =         $s[id].title_cursorRot;
                Moghunter.title_cursorRotSpeed =    $s[id].title_cursorRotSpeed;
                Moghunter.title_com_pos =           $s[id].title_com_pos;
                for (var i = 0; i < 10; i++) {
                    Moghunter.title_com_pos[i] = $s[id].title_com_pos[i];
                };    
            }
        };
    })(Scene_Title.prototype.initialize);

    (__createTitleSprite => {
        Scene_Title.prototype.createTitleSprite = function() {
            let loadTitle2 = ImageManager.loadTitle2;
            if (Moghunter.title_logo) {
                ImageManager.loadTitle2 = () => {
                    return loadTitle2.call(ImageManager, Moghunter.title_logo);
                };
            }
            __createTitleSprite.apply(this, arguments);
            ImageManager.loadTitle2 = loadTitle2;
        };
    })(Scene_Title.prototype.createTitleSprite);

    (__createBackground => {
        Scene_Title.prototype.createBackground = function() {
            let loadTitle1 = ImageManager.loadTitle1;
            if (Moghunter.title_background) {
                ImageManager.loadTitle1 = () => {
                    return loadTitle1.call(ImageManager, Moghunter.title_background);
                };
            }
            __createBackground.apply(this, arguments);
            ImageManager.loadTitle1 = loadTitle1;
        };
    })(Scene_Title.prototype.createBackground);
    
    (__playTitleMusic => {
        Scene_Title.prototype.playTitleMusic = function() {
            let playBgm = AudioManager.playBgm;
            if (Moghunter.title_bgm) {
                let titleBgm = {...$dataSystem.titleBgm};
                titleBgm.name = Moghunter.title_bgm;
                AudioManager.playBgm = () => {
                    playBgm.call(AudioManager, titleBgm);
                };
            }
            __playTitleMusic.apply(this, arguments);
            AudioManager.playBgm = playBgm;
        };
    })(Scene_Title.prototype.playTitleMusic);

    (__createCursorCommand => {
        Scene_Title.prototype.createCursorCommand = function() {
            let loadTitle2 = ImageManager.loadTitle2;
            if (Moghunter.title_cursor) {
                ImageManager.loadTitle2 = () => {
                    return loadTitle2.call(ImageManager, Moghunter.title_cursor);
                };
            }
            __createCursorCommand.apply(this, arguments);
            ImageManager.loadTitle2 = loadTitle2;
        };
    })(Scene_Title.prototype.createCursorCommand);

    (__createPictureCommands => {
        Scene_Title.prototype.createPictureCommands = function() {
            let loadTitle2 = ImageManager.loadTitle2;
            if (Moghunter.title_command) {
                let com_image = Moghunter.title_command.replace(/\d+$/, '');
                ImageManager.loadTitle2 = (filename, hue) => {
                    filename = filename.replace(/^Command_(\d+)$/, (m, p1) => {
                        return `${com_image}${p1}`;
                    });
                    return loadTitle2.call(ImageManager, filename, hue);
                };
            }
            __createPictureCommands.apply(this, arguments);
            ImageManager.loadTitle2 = loadTitle2;
        };
    })(Scene_Title.prototype.createPictureCommands);
}