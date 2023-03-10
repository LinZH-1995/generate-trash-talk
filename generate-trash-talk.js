function generateTrashTalk(option) {
  if (option.target === undefined) return '請選擇一個對象！'
  const target = option.target
  const targetCHT = target === 'engineer' ? '工程師' : target === 'designer' ? '設計師' : '創業家'
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }
  const phrase = ['很簡單', '很容易', '很快', '很正常']

  return `身為一個${targetCHT}，${randomPickItem(task[target])}，${randomPickItem(phrase)}吧！`
}

function randomPickItem(array) {
  if (array.length === 0) return
  const randomIndex = Math.floor(Math.random() * array.length)
  return array[randomIndex]
}

module.exports = generateTrashTalk