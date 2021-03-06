const state = {
    start:'no',
    userMoney: 10000,
    opponentMoney: 100000,
    raisedSum:0,
    userRaised:0,
    opponentRaised:0,
    opponentBetting:null,
    userBetting:null,
    userHand1:null,
    userHand2:null,
    opponentHand1:null,
    opponentHand2:null,
    turn:0,
}
const getters = {
    userMoney: function (state) {
        return Math.round(state.userMoney)
    },
    opponentMoney: function (state) {
        return Math.round(state.opponentMoney)
    },
    raisedSum: function (state) {
        return Math.round(state.userRaised + state.opponentRaised)
    },
    userRaised: function (state) {
        return Math.round(state.userRaised)
    },
    opponentRaised: function (state) {
        return Math.round(state.opponentRaised)
    },
    start:function (state) {
        return state.start
    },
    userHand1: function (state) {
        return state.userHand1
    },
    userHand2: function (state) {
        return state.userHand2
    },
    opponentHand1: function (state) {
        return state.opponentHand1
    },
    opponentHand2: function (state) {
        return state.opponentHand2
    },
    opponentBetting: function(state){
        return state.opponentBetting
    },
    userBetting: function(state){
        return state.userBetting
    },
    battleResult: function (state, getters) {
        let users = [getters.userHand1, getters.userHand2]
        let opponents = [getters.opponentHand1, getters.opponentHand2]
        let jokbo = function (cardSet) {
            let cards = cardSet.sort(function(left, right) { return left-right })
            if(cards[0]===3 && cards[1]===8){
                return [102,'38광땡']
            }
            else if(cards[0]===1 && cards[1]===8|| cards[0]===1 && cards[1]===3){
                return [101,'광땡']
            }
            else if(cards[1]-cards[0] === 10){
                return [90+cards[0],cards[0]+'땡']
            }
            else if(cards[0]===1 && cards[1]===2 || cards[0]===2 && cards[1]===11 ||
                cards[0]===11 && cards[1]===12 || cards[0]===1 && cards[1]===12){
                return [90,'알리']
            }
            else if(cards[0]===1 && cards[1]===4 || cards[0]===4 && cards[1]===11 ||
                cards[0]===11 && cards[1]===14 || cards[0]===1 && cards[1]===14){
                return [89,'독사']
            }
            else if(cards[0]===1 && cards[1]===9 || cards[0]===9 && cards[1]===11 ||
                cards[0]===11 && cards[1]===19 || cards[0]===1 && cards[1]===19){
                return [88,'구삥']
            }
            else if(cards[0]===1 && cards[1]===10 || cards[0]===10 && cards[1]===11 ||
                cards[0]===11 && cards[1]===20 || cards[0]===1 && cards[1]===20){
                return [87,'장삥']
            }
            else if(cards[0]===4 && cards[1]===10 || cards[0]===10 && cards[1]===14 ||
                cards[0]===14 && cards[1]===20 || cards[0]===4 && cards[1]===20){
                return [86,'장사']
            }
            else if(cards[0]===4 && cards[1]===6 || cards[0]===6 && cards[1]===14 ||
                cards[0]===14 && cards[1]===16 || cards[0]===4 && cards[1]===16){
                return [85,'세륙']
            }
            else if(cards[0]===3 && cards[1]===7 || cards[0]===7 && cards[1]===13 ||
                cards[0]===13 && cards[1]===17 || cards[0]===3 && cards[1]===17 ){
                return [0,'땡잡이']
            }
            else if(cards[0]===3 && cards[1]===7){
                return [1,'멍텅구리 구사']
            }
            else if(cards[0]===4 && cards[1]===19 || cards[0]===9 && cards[1]===14 ||
                cards[0]===14 && cards[1]===19 ){
                return [1,'구사']
            }
            else if(cards[0]===4 && cards[1]===7){
                return [1,'암행어사']
            }
            else if((cards[0]+cards[1])%10 === 9){
                return [9, '갑오']
            }
            else if((cards[0]+cards[1])%10 === 0){
                return [0, '망통']
            }
            else{
                return [(cards[0]+cards[1])%10,(cards[0]+cards[1])%10+'끗']
            }
        }

        let userResult = jokbo(users)
        let opponentResult = jokbo(opponents)

        if (userResult[1] === '땡잡이' && 90<= opponentResult[0] && opponentResult >= 99){
            return ['땡잡았다!',userResult[1], opponentResult[1],1]
        }
        else if(opponentResult[1] === '땡잡이' && 90<= userResult[0] && userResult >= 99){
            return ['땡잡혔다!',userResult[1], opponentResult[1],2]
        }

        else if((userResult[1]==='구사' && opponentResult[0] <= 100) || (opponentResult[1] === '구사' && userResult[0]<= 100) ){
            return ['구사 재경기!',userResult[1],opponentResult[1],3]
        }
        else if((userResult[1]==='멍텅구리 구사' && opponentResult[0] <= 101) || (opponentResult[1] === '멍텅구리 구사' && userResult[0]<= 101) ){
            return ['멍텅구리 구사 재경기!',userResult[1],opponentResult[1],3]
        }

        else if(userResult[1] === '암행어사' && opponentResult[0] === 101){
            return ['암행어사 승리!',userResult[1], opponentResult[1],1]
        }
        else if(opponentResult[1] === '암행어사' && userResult[0] === 101){
            return ['암행어사 당했다..',userResult[1], opponentResult[1],2]
        }

        else if (userResult[0]>opponentResult[0]){
            return [userResult[1]+'(으)로 이겼습니다', userResult[1], opponentResult[1],1]
        }
        else if (userResult[0]<opponentResult[0]){
            return [opponentResult[1]+'한테 졌습니다!', userResult[1], opponentResult[1],2]
        }
        else{
            return [userResult[1]+'(으)로 무승부입니다.', userResult[1], opponentResult[1],3]
        }
    },
    turn: function(state) {
        return state.turn
    }
}
const mutations = {
    clickStart: function (state, yes) {
        let cookie = document.cookie
        let moneyValue = Number(cookie.substr(10,10))
        if(moneyValue!==0){
            state.userMoney = moneyValue
        }
        else {
            state.userMoney += 10000
        }
        state.start = yes[0]
        state.userMoney -= yes[1]
        state.opponentMoney -= yes[1]
        state.userRaised = yes[1]
        state.opponentRaised = yes[1]
        state.userBetting = null
        state.opponentBetting = null
        state.turn = 0
    },
    clickReStart: function(state, yes) {
        state.start = yes[0]
        state.userRaised = yes[1]
        state.opponentRaised = yes[1]
        state.userMoney -= yes[1]/2
        state.opponentMoney -= yes[1]/2
        state.userBetting = null
        state.opponentBetting = null
        state.turn = 0
    },
    called: function (state, opponentRaising) {
        state.userMoney += state.userRaised
        state.userRaised = opponentRaising
        state.userMoney -= state.userRaised
    },
    half: function (state, raisedSum) {
        state.userMoney -= raisedSum/2
        state.userRaised += raisedSum/2
    },
    bbing: function (state, standardRaised) {
        state.userMoney -= standardRaised
        state.userRaised += standardRaised
    },
    ddadang: function (state, opponentRaising) {
        state.userMoney += state.userRaised
        state.userRaised = opponentRaising * 2
        state.userMoney -= state.userRaised
    },
    opponentCall: function (state, userRaising) {
        state.opponentMoney += state.opponentRaised
        state.opponentRaised = userRaising
        state.opponentMoney -= state.opponentRaised
    },
    opponentHalf: function (state, raised) {
        state.opponentMoney -= raised/2
        state.opponentRaised += raised/2
    },
    opponentDdadang: function (state, userRaising) {
        state.opponentMoney += state.opponentRaised
        state.opponentRaised = userRaising * 2
        state.opponentMoney -= state.opponentRaised
    },
    shuffle: function (state) {
        let j, x, i;
        let deck = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
        for (i = deck.length; i; i -= 1) {
            j = Math.floor(Math.random() * i);
            x = deck[i - 1];
            deck[i - 1] = deck[j];
            deck[j] = x;
        }
        state.userHand1 = deck[0]
        state.userHand2 = deck[1]
        state.opponentHand1 = deck[2]
        state.opponentHand2 = deck[3]
    },
    betOpponent: function (state, betting) {
        state.opponentBetting = betting
    },
    betUser: function (state, betting) {
        state.userBetting = betting
    },
    youWin: function (state, sumRaising) {
        state.userMoney += sumRaising
    },
    youLose: function (state, sumRaising) {
        state.opponentMoney += sumRaising
    },
    openCards: function (state) {
        state.start = 'open'
    },
    nextTurn: function (state) {
        state.turn++
    },
    opponentDie: function (state) {
        state.start = 'opponentDie'
    },
    userDie: function (state) {
        state.start = 'userDie'
    },
}
export default {state, getters, mutations}