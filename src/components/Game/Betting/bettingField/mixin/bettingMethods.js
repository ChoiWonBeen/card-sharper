import {mapGetters,mapMutations} from  'vuex'

var bettingMethods = {
    computed: {
        ...mapGetters(['userRaised','opponentRaised','raisedSum','userMoney',
            'userHand1','userHand2','opponentHand1','opponentHand2','battleResult','turn'])
    },
    methods: {
        ...mapMutations(['called','half','bbing','ddadang','opponentCall','opponentHalf'
            ,'opponentDdadang','opponentDie','betOpponent','betUser'
            ,'youWin','youLose','youDraw', 'openCards','shuffle','nextTurn'
            ,'opponentDie','userDie','userPlaying','opponentPlaying']),
        goCall: function (opponentRaising, userRaising, sumRaising, startCallback, battleResult) {
            this.called(opponentRaising)
            this.opponentPlaying()
            this.betUser('콜!')
            if(opponentRaising === userRaising){ this.endSet(battleResult, sumRaising) }
            else {
                this._promise(true)
                    .then(function () {
                        startCallback(opponentRaising, opponentRaising, sumRaising - userRaising + opponentRaising, battleResult)
                    })
            }
        },
        goHalf: function (opponentRaising, userRaising, sumRaising, startCallback, battleResult) {
            this.half(sumRaising)
            this.opponentPlaying()
            this.betUser('하프!')
            this._promise(true)
                .then(function () {
                    startCallback(opponentRaising, userRaising+sumRaising/2, sumRaising+sumRaising/2, battleResult)
                })
        },
        goBbing: function (opponentRaising, userRaising, sumRaising, startCallback, battleResult) {
            this.bbing(userRaising)
            this.opponentPlaying()
            this.betUser('삥!')
            this._promise(true)
                .then(function () {
                    startCallback(opponentRaising, userRaising*2, sumRaising+userRaising, battleResult)
                })
        },
        goDdadang: function (opponentRaising, userRaising, sumRaising, startCallback, battleResult) {
            this.ddadang(opponentRaising)
            this.opponentPlaying()
            this.betUser('따당!')
            this._promise(true)
                .then(function () {
                    startCallback(opponentRaising, opponentRaising*2, (sumRaising-userRaising+opponentRaising)*2, battleResult)
                })
        },
        goDie: function(sumRaising){
            this.userDie()
            this.youLose(sumRaising)
        },
        _promise : function (param) {
            return new Promise(function (resolve, reject) {
                window.setTimeout(function () {
                    if (param) {
                        resolve();
                    }
                    else {
                        reject(Error());
                    }
                }, 3000);
            });
        },
        startCallback : function (opponentRaising, userRaising, sumRaising, battleResult) {
            this.userPlaying()
            this.nextTurn()
            let random = Math.floor(Math.random() * (9) + 1)

            if( 1 <= random && random <= 4){
                if(opponentRaising===userRaising){this.endSet(battleResult, sumRaising)}
                else {
                    this.opponentCall(userRaising)
                }
                this.betOpponent('콜!')
            }
            if( 5 <= random && random <= 7){
                this.opponentHalf(sumRaising)
                this.betOpponent('하프!')
            }
            if( random === 8 ){
                this.opponentDdadang(userRaising)
                this.betOpponent('따당!')
            }
            if( random === 9 ){
                this.betOpponent('다이..')
                this.opponentDie()
                this.youWin(sumRaising)
            }
        },
        endSet: function (battleResult, sumRaising) {
            this.openCards()
            this.userPlaying()
            if(battleResult[3]===1){
                this.youWin(sumRaising)
            }
            else if(battleResult[3]===2){
                this.youLose(sumRaising)
            }
        },
    },
}

export default bettingMethods