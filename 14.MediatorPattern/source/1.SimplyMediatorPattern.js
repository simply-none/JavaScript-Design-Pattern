/**
 * @file 玩家对战游戏
 */

// 玩家：发布者：调用中介者接口进行通信
function Player (name, team) {
  this.name = name
  this.team = team
  this.state = 'alive'  // 玩家状态
}

Player.prototype.win = function () {
  console.log(this.name + 'won')
}

Player.prototype.lose = function () {
  console.log(this.name + 'lost')
}

Player.prototype.die = function () {
  this.state = 'dead'
  // 死亡后给中介者发送消息
  playerDirector.receiveMsg('playerDead', this)
}

Player.prototype.remove = function () {
  // 死亡后给中介者发送消息
  playerDirector.receiveMsg('removePlayer', this)
}

Player.prototype.changeTeam = function (team) {
  // 死亡后给中介者发送消息
  playerDirector.receiveMsg('changeTeam', this, team)
}

// 工厂函数：创建玩家
const playerFactory = function (name, team) {
  const newPlayer = new Player(name, team)
  playerDirector.receiveMsg('addPlayer', newPlayer)
  return newPlayer
}

// 中介者对象
const playerDirector = (function () {
  const players = {}  // 玩家对象
  const operations = {} // 中介者可执行的操作

  // 新增玩家
  operations.addPlayer = function (player) {
    const team = player.team
    // 若当前尚无队伍，则新建一个队伍
    players[team] = players[team] || []
    players[team].push(player)
  }

  // 移除玩家
  operations.removePlayer = function (player) {
    const team = player.team
    const teamPlayers = players[team] || []
    // 从后往前遍历：避免发生索引不存在的错误
    for (let p = teamPlayers.length - 1; p >= 0; p--) {
      if (teamPlayers[p] === player) {
        teamPlayers.splice(p, 1)
      }
    }
  }

  // 玩家换队
  operations.changeTeam = function (player, newTeam) {
    operations.removePlayer(player)
    player.team = newTeam
    operations.addPlayer(player)
  }

  // 玩家死亡
  operations.playerDead = function (player) {
    const team = player.team
    const teamPlayers = players[team]
    const all_dead = true

    for (let i = 0; i < teamPlayers.length; i++) {
      if (player.state !== 'dead') {
        all_dead = false
        break
      }
    }
    
    if (all_dead === true) {
      for (let i = 0, player; player = teamPlayers[i]; i++) {
        player.lose()
      }

      for (let teamTemp in players) {
        if (teamTemp !== team) {
          const teamPlayers = players[teamTemp]
          for (let i = 0, player; player = teamPlayers[i]; i++) {
            player.win()
          }
        }
      }
    }
  }

  const receiveMsg = function () {
    const msg = Array.prototype.shift.call(arguments)
    operations[msg].apply(this, arguments)
  }

  return {
    receiveMsg: receiveMsg
  }
})()

// 生成玩家
const myPlayer = []
for (let i = 0; i < 20; i++) {
  myPlayer[i] = new playerFactory('玩家' + i, i % 2 === 0 ? '红队' : '蓝队')
}

myPlayer[1].die()