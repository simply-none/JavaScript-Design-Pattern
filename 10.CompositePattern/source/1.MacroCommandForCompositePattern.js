/**
 * @file 宏命令
 * @desc 超级万能遥控器逻辑
 *        叶子节点和组合对象一样的接口
 */

const MacroCommand = function () {
  return {
    commandsList: [],
    add: function (command) {
      this.commandsList.push(command)
    },
    execute: function () {
      for (let i = 0, command; command = this.commandsList[i++];) {
        command.execute()
      }
    }
  }
}

const openAcCommand = {
  execute: function () {
    console.log('打开空调')
  },
  add: function () {
    throw new Error('叶对象不能添加子节点')
  }
}

const openTvCommand = {
  execute: function () {
    console.log('打开电视')
  },
  add: function () {
    throw new Error('叶对象不能添加子节点')
  }
}

const openSoundCommand = {
  execute: function () {
    console.log('打开音响')
  },
  add: function () {
    throw new Error('叶对象不能添加子节点')
  }
}

const marcoCommand1 = MacroCommand()
marcoCommand1.add(openTvCommand)
marcoCommand1.add(openSoundCommand)

const closeDoorCommand = {
  execute: function () {
    console.log('关门')
  },
  add: function () {
    throw new Error('叶对象不能添加子节点')
  }
}

const openPcCommand = {
  execute: function () {
    console.log('开电脑')
  },
  add: function () {
    throw new Error('叶对象不能添加子节点')
  }
}

const openQQCommand = {
  execute: function () {
    console.log('登录QQ')
  },
  add: function () {
    throw new Error('叶对象不能添加子节点')
  }
}

const marcoCommand2 = MacroCommand()
marcoCommand2.add(closeDoorCommand)
marcoCommand2.add(openPcCommand)
marcoCommand2.add(openQQCommand)

// 命令组合
const marcoCommand = MacroCommand()
marcoCommand.add(openAcCommand)
marcoCommand.add(marcoCommand1)
marcoCommand.add(marcoCommand2)

// 执行
const setCommand = (function (command) {
  document.getElementById('button').onclick = function () {
    command.execute()
  }
})(marcoCommand)