
let player;
class Player {
    constructor(ClassType, Health, Mana, Strength, Agility, Speed) {
        this.ClassType = ClassType;
        this.Health = Health;
        this.Strength = Strength;
        this.Agility = Agility;
        this.Speed = Speed;
        this.Mana = Mana;

    }
};

let playerMoves = {

    calcAtack: function () {
        let getPlayerSpeed = player.Speed;

        let getEnemySpeed = enemy.Speed;

        let getPlayerHealth = document.querySelector('.player-health');
        
        let getEnemyHealth = document.querySelector('.enemy-health');

        let calcBaseDamage;

        let playerAttack = function () {

            if (player.Mana > 0) {
                calcBaseDamage = player.Strength * player.Mana / 1000;
            } else {
                calcBaseDamage = player.Strength * player.Agility / 1000;
            }

            let offSetDamage = Math.floor(Math.random() * Math.floor(10));
            let calcOutputDamage = calcBaseDamage + offSetDamage;
            //Number of hits
            let numberOfHits = Math.floor(Math.random() * Math.floor(player.Agility / 10) / 2) + 1;
        
            let attckValues = [calcOutputDamage, numberOfHits];
            return attckValues;
        };


        let enemyAttack = function () {
        

            if ( enemy.Mana > 0) {
                calcBaseDamage = enemy.Strength * enemy.Mana / 1000;
            } else {
                calcBaseDamage = enemy.Strength * enemy.Agility / 1000;
            }

            let offSetDamage = Math.floor(Math.random() * Math.floor(10));
            let calcOutputDamage = calcBaseDamage + offSetDamage;
            //Number of hits
            let numberOfHits = Math.floor(Math.random() * Math.floor(enemy.Agility / 10) / 2) + 1;
        
            let attckValues = [calcOutputDamage, numberOfHits];

            return attckValues;
        };




        

        if (getPlayerSpeed >=  getEnemySpeed) {

            let playerAttckValues =playerAttack();
            let totalDamage = playerAttckValues[0] * playerAttckValues[1];

            enemy.Health = enemy.Health - totalDamage;

            alert('you hit ' + playerAttckValues[0] + ' damage' + playerAttckValues[1] + ' times');

            if (enemy.Health <= 0) {
                alert('you won');
                getEnemyHealth.innerHTML = 'Health: 0 ';
                getPlayerHealth.innerHTML = 'Health: ' + player.Health;

            };


        }
        if (getPlayerSpeed < getEnemySpeed) {

                let enemyAttckValues = enemyAttack();
                let totalDamage = enemyAttckValues[0] * enemyAttckValues[1];

                    player.Health = player.Health - totalDamage;
                    
                alert('you got hit ' + enemyAttckValues[0] + ' damage' + enemyAttckValues[1] + ' times');

                if (player.Health <= 0) {
                    alert('you lost');
                    getPlayerHealth.innerHTML = 'Health: 0 ';
                    getEnemyHealth.innerHTML = 'Health:  ' + enemy.Health;
                }
        
            }
    }   
    }
    //player attacks


