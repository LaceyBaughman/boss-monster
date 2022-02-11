const hero = {
  health: 100,
  coin: 0
}

const boss = {
  health: 100,
  level: 1,
}



function attackMonster() {
  console.log('here is our attack function');
  if (boss.health > 0) {
    boss.health -= 5
  }
  if (boss.health <= 0) {
    levelUp()
    updateBossHealth
  }
  console.log('here is our boss health: ', boss.health);
  //clamp

  updateBossHealth()
}

function updateBossHealth() {
  let bar = document.querySelector('.progress-bar')
  bar.style.width = hero.health
  bar.style.width = boss.health

  drawBoss()
  drawHero()
}

function drawHero() {
  let template = ''
  template += `
    <div class="progress">
            <div class="progress-bar bg-danger" role="progressbar" style="width: ${hero.health}%" aria-valuenow="25">Hero</div>
          </div>
    `

  document.getElementById('HeroHealth').innerHTML = template
}


function drawBoss() {
  let template = ''
  template += ` 
    <div class="progress">
    <div class="progress-bar bg-danger" role="progressbar" style="width: ${boss.health}%" aria-valuenow="25">Monster</div>
    </div>
    `

  document.getElementById('BossHealth').innerHTML = template
}


function heroHealthBar() {
  hero.health -= 10
  updateBossHealth()
}

function levelUp() {
  boss.level++
  boss.health = 100 * boss.level
  hero.health = 100
  hero.coin += 50
  console.log('here is the boss level: ', boss.level);
  console.log('here is the boss health: ', boss.health);
  console.log('Coin added'), hero.coin;
  drawAllTheThings()
}

function reset() {
  boss.level = 1
  boss.health = 100
  hero.health = 100
  hero.coin = 0
  drawAllTheThings()
}

function drawCoin() {
  document.getElementById('coinCount').innerText = hero.coin
}

let heroHealth = setInterval(heroHealthBar, 2000)


// drawHero()
// drawBoss()
// drawCoin()

function drawAllTheThings() {
  drawHero()
  drawBoss()
  drawCoin()
}

drawAllTheThings()