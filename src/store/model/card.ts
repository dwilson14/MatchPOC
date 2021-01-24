import { ICard } from '../interface'
import { environment } from '../../environments/environment'

let CARD_NAMES = 
    [
        //'GemkinectValentines/35086_6_1.jpg',
        //'GemkinectValentines/2285540_5_1.jpg',
        //'GemkinectValentines/12878619_5_1.jpg',
        //'GemkinectValentines/35305368_5_1.jpg',
        //'GemkinectValentines/73052772_7_1.jpg',
        //'GemkinectValentines/73695494_5_1.jpg',
        //'GemkinectValentines/81160282_7_1.jpg',
        //'GemkinectValentines/81161006_7_1.jpg',
        //'GemkinectValentines/83645609_5_1.jpg',
        //'GemkinectValentines/83687928_7_1.jpg',
        //'GemkinectValentines/84023483_6_1.jpg',
        //'GemkinectValentines/JS1007_6_1.jpg',
        //'RCWahl/FSBG5004-WG_6_1.jpg',
        //'RCWahl/ABOV1616R11K6W4S_1_1.jpg',
        //'RCWahl/B014-01G0_1_1.jpg',
        //'RCWahl/E014-01G_1_1.jpg',
        //'RCWahl/E021-01H_1_1.jpg',
        //'RCWahl/ER12600WD_1_1.jpg',
        //'RCWahl/FSBG5009-YG_1_1.jpg',
        //'RCWahl/MDEI9321CSQ14W_1_1.jpg',
        //'RCWahl/NK12897WD_1_1.jpg',
        //'RCWahl/PD10457-4WF_1_1.jpg',
        //'RCWahl/R189WBGS-JA4_1_1.jpg',
        //'RCWahl/RG10238WD_1_1.jpg',
        //'Nelson/Classic 6 Prong Solitaire_6_1.jpg',
        //'Nelson/JG9883SC-LY10PWR07_1_1.jpg',
        //'Nelson/JG90088_6_1.jpg',
        //'Nelson/JM0004_6_1.jpg',
        //'Nelson/JN9157-RH10PWR0E2_1_1.jpg',
        //'Nelson/JN9431_2_1.jpg',
        //'Nelson/JW2360-RG14W070_6_1.jpg',
        //'Nelson/JW2543-RH10PR070-R_1_1.jpg',
        //'Nelson/JW2543-RH10YR070-Y_3_1.jpg',
        //'Nelson/JW9412-RG14W070_6_1.jpg',
        //'Nelson/JX5051-B14_6_1.jpg',
        //'Nelson/JX7424-B14W_6_1.jpg',
        'Amidon/PD10357-4WYC_6_1.jpg',
        'Amidon/NK10017-4YF_6_1.jpg',
        'Amidon/142PW-SS_1_1.jpg',
        'Amidon/ER10251-4WC_3_1.jpg',
        'Amidon/ER10473-4WPC_1_1.jpg',
        'Amidon/NK10189-1YL_2_1.jpg',
        'Amidon/PD10416-4WF_1_1.jpg',
        'Amidon/RG11001-4YD_1_1.jpg',
        'Amidon/PD10454-SSF_1_1.jpg',
        'Amidon/ROL1020-SSWD_1_1.jpg',
        'Amidon/PD32380-4YSC_1_1.jpg',
        'Amidon/PD33091-4PD0_1_1.jpg',
        'Jewelex%20FS2020/back.jpg',
        //'BobsJewelShop/1-ct-6-prong_1_1.jpg',
        //'BobsJewelShop/20725Y-T2V_1_1.jpg',
        //'BobsJewelShop/20809W-TV_1_1.jpg',
        //'BobsJewelShop/57478W-TV_1_1.jpg',
        //'BobsJewelShop/60700W_1_1.jpg',
        //'BobsJewelShop/61336W-TV_1_1.jpg',
        //'BobsJewelShop/61351W-S_1_1.jpg',
        //'BobsJewelShop/61685Y_1_1.jpg',
        //'BobsJewelShop/62202P-TV_1_1.jpg',
        //'BobsJewelShop/62546Y_1_1.jpg',
        //'BobsJewelShop/RG10572-4WC_1_1.jpg',
        //'BobsJewelShop/ROL1226-1PC_1_1.jpg'
    ]
let cardNames = [];

function getCards() {
    cardNames = JSON.parse(localStorage.getItem('cards'))
    if (cardNames && cardNames.length > 0) {
        CARD_NAMES = ['Jewelex%20FS2020/back.jpg'];
        cardNames.forEach(function (value, index) {
            CARD_NAMES.push(value)
        });
        CARDS = [];
        CARDS = CARD_NAMES.map(n => ({
            name: n,
            flipped: false,
            url: "https://jwdcatalogimages.s3.amazonaws.com/DPM/" + n
        }))
        CARDS_WITHOUT_BACK = CARDS.filter(c => c.name !== 'Jewelex%20FS2020/back.jpg')
    }  
}
 

export let CARDS: Array<ICard> = CARD_NAMES.map(n => ({
    name: n,
    flipped: false,
    url: "https://jwdcatalogimages.s3.amazonaws.com/DPM/" + n 
}))

let CARDS_WITHOUT_BACK = CARDS.filter(c => c.name !== 'Jewelex%20FS2020/back.jpg')

export function getGameCards() {
    getCards()
    return CARDS_WITHOUT_BACK.concat(CARDS_WITHOUT_BACK).map((c, i) => ({
        _id: i,
        name: c.name,
        flipped: c.flipped,
        url: c.url
    }))
}
