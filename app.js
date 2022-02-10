const hero = {
  health: 100
}

const boss = {
  health: 100
}

function attackMonster(attack) {
  let health = boss.health
  if (health > 0) {
    health -= 5
  }
  if (boss.health > 0) {
    boss.health = 0
  }

  updateBossHealth(health)
}

function updateBossHealth(health) {
  let BossHealthElm = document.getElementById('Bosshealth')
  //console.log(animalElm)
  let bar = BossHealthElm.querySelector('progress-bar')
  // console.log(bar);

  bar.style.width = boss[health].health + '%'
  if (boss[health].health <= 0) {
  }
}

function drawHero() {
  let template = ''
  for (let key in hero) {
    let heroHealth = hero[key]
    template += `
    <div class="progress">
            <div class="progress-bar bg-danger" role="progressbar" style="width: 100%;" aria-valuenow="25">Hero</div>
          </div>
    `
  }
  document.getElementById('HeroHealth').innerHTML = template
}

function drawBoss() {
  let template = ''
  for (let key in boss) {
    let bossHealth = boss[key]
    template += ` 
    <div class="progress">
    <div class="progress-bar bg-danger" role="progressbar" style="width: 100%;" aria-valuenow="25">Monster</div>
    </div>
    `
  }
  document.getElementById('BossHealth').innerHTML = template
}



drawHero()
drawBoss()