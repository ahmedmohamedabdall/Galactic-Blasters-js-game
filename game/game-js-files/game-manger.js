let enemy;


let GameManager = {

SetGameStart: function (ClassType) {
        this.ResetPlayer(ClassType);
        this.SetPreFight();
    },
    


    ResetPlayer: function (ClassType) {

        switch (ClassType) {
            case
                'warrior': player =  new Player('warrior', 200, 0, 200, 100, 50);
            
                break;
            case
                'rouge': player = new Player('rouge', 100, 0, 100, 150, 200);
                
                break;
            case
                'hunter': player = new Player('hunter', 200, 0, 50, 200, 100);
                
                break;
            case
                'mage': player = new Player('mage', 80, 0, 50, 200, 50);
                
                break;
            default: console.log('in default');
                
                break

        }
        


        let GetInterface = document.querySelector('.interface');

        GetInterface.innerHTML = '<img src="players\\' +player.ClassType
            + '.jpg" class="img-avatar"> <div> <h3>' +player.ClassType
            + '</h3> <p class="player-health"> Health: ' + player.Health
            + '</p> <p> Strength: ' + player.Agility + '</p> <p> Agility: ' + player.Strength
            + '</p> <p> Speed: ' + player.Speed
            + '</p> <p> Mana: ' + player.Mana
            + '</p> </div> ';
    },


    SetPreFight: function () {

        let GetHeader = document.querySelector('.header');
        let GetActions = document.querySelector('.actions');
        let GetArena = document.querySelector('.arena');

        GetHeader.innerHTML = '<p> Task: find an enemy!</p>';
        GetActions.innerHTML = '<a href="#" class="btn-prefight" onclick="GameManager.setFight()">search for an enemy!</a>';
        GetArena.style.visibility = 'visible';


    },
    setFight:function () {
        let GetHeader = document.querySelector('.header');
        let GetActions = document.querySelector('.actions');
        let GetEnemy = document.querySelector('.enemy');

        let enemy00 = new Enemy('goblin', 100, 0, 50, 100, 100);
        let enemy01 = new Enemy('orc', 200, 0, 50, 80, 150);
        
        let choseRandomEnemy = Math.floor(Math.random() * Math.floor(2));
        switch (choseRandomEnemy) {
            case 0:
                enemy = enemy00;
                
                break;
            
            case 1:

                enemy = enemy01;
                
                break;
        
        }
        GetHeader.innerHTML = '<p> Task: chose your move!</p>';

        GetActions.innerHTML = '<a href="#" class="btn-prefight" onclick="playerMoves.calcAtack()">Attack</a>';

        GetEnemy.innerHTML='<img src="players\\' + enemy.EnemyType
            + '.jpg" class="img-avatar"> <div> <h3>' +  enemy.EnemyType
            + '</h3> <p class="enemy-health"> Health: ' +enemy.Health
            + '</p> <p> Strength: ' + enemy.Agility
            + '</p> <p> Agility: ' + enemy.Strength
            + '</p> <p> Speed: ' +enemy.Speed
            + '</p> <p> Mana: ' +enemy.Mana
            + '</p> </div> '

    }

}