export type MapTypeKey = 'normal' | 'crater' | 'mountaintop' | 'rotted' | 'noklateo' | 'greatHollow'

type MapTypeText = {
  title: string
  paragraphs: string[]
  sourceUrl: string
}

const mapTypeTexts: Record<MapTypeKey, MapTypeText> = {
  normal: {
    title: '普通',
    paragraphs: [
      'Limveld 存在于与交界地相同的宇宙，并共享圆桌厅堂。它是《艾尔登法环 黑夜君临》的舞台，发生在与《艾尔登法环》平行的时间线中，在破碎战争期间或之后产生了分歧。',
      'Limveld 受到卢恩的力量影响，是巨型暗影巨人和多个赐福点的所在地。它目前处于黑夜王的统治之下，并受到逼近的夜之潮的威胁。一位女巫招募夜行者来拯救这片土地免于即将到来的毁灭。',
    ],
    sourceUrl: 'https://eldenring.fandom.com/wiki/Limveld',
  },
  crater: {
    title: '火山口',
    paragraphs: [
      '火山口是一个巨大的露天熔岩坑，在火山口地壳变动事件期间出现在 Limveld 的中央。此地充满喷发的熔岩，居住着火焰僧侣和罪人术士，并栖息着一只坠星兽和一条熔岩土龙。',
      '此区域有一座古老时代建造的神殿，用于纪念锻造的神圣技艺。到达底部并击败熔岩土龙后，夜行者可以在锻造祭坛将一件武器升级为传说品质。',
      '特殊物品：古锻造祭坛 — 可将任意一件武器升级为传说品质；每位玩家限一次。',
    ],
    sourceUrl: 'https://eldenring.fandom.com/wiki/Crater',
  },
  mountaintop: {
    title: '雪山',
    paragraphs: [
      '第一峰是一座可攀登的巨大山峰，在雪山地壳变动事件期间出现在 Limveld 的西北象限。这个雪地位置居住着巨型乌鸦、巨型狗和雪原巨魔。冰霜飓风席卷第一峰——冰龙的家园。',
      '与山顶的蓝色冰晶互动可为队伍赋予雪山之祝福，该祝福减少受到的冻伤伤害和积累50%，并在附近触发冻伤时增加攻击力。',
      '特殊物品：蓝色冰晶 — 雪山之祝福。',
    ],
    sourceUrl: 'https://eldenring.fandom.com/wiki/Mountaintop',
  },
  rotted: {
    title: '腐烂森林',
    paragraphs: [
      '腐烂森林是一片茂密的森林，在腐烂森林地壳变动事件期间出现在 Limveld 的东南（右下）象限。此地居住着巨蚁、腐败仆从和其他受猩红腐败影响的生物。',
      '森林被腐败侵蚀，但一座火焰塔将其抑制。森林中发现的红色花朵赋予森林的保护祝福。',
      '此事件在击败五位不同的黑夜王后解锁。',
      '特殊物品：米兰达之花 — 赋予腐烂森林之祝福，可免疫猩红腐败，提高最大生命值，且受到伤害后的近战攻击可部分回复生命值。标记为猩红蝴蝶和红色赐福光点，位于随机确定位置的一棵树上。',
    ],
    sourceUrl: 'https://eldenring.fandom.com/wiki/Rotted_Woods',
  },
  noklateo: {
    title: '诺克拉特奥，覆世之城',
    paragraphs: [
      '诺克拉特奥，覆世之城是一座失落的永恒之城，在诺克拉特奥覆世之城地壳变动事件期间出现在 Limveld 的西南象限。此地居住着无头灵庙骑士和被诅咒的猎鹰军团。下水道中潜伏着石化蜥蜴。',
      '城中有一口石棺，可进行武器复制。',
      '此事件在击败七位不同的黑夜王后解锁。',
      '可在怀尔德追忆任务的第三章期间提前进入。',
      '特殊物品：顶部的秘密宝箱 — 诺克拉特奥覆世之城之祝福："不受他人帮助地从濒死中复活一次，并在短时间内变得更加强大"。',
    ],
    sourceUrl: 'https://eldenring.fandom.com/wiki/Noklateo,_the_Shrouded_City',
  },
  greatHollow: {
    title: '大空洞',
    paragraphs: [
      '位于 Limveld 深处的巨大深渊，散布着奇异的遗迹和神授塔，它们标记着古代文明的残余。大空洞内的水晶散发着受诅咒的、吸取生命力的雾气。',
    ],
    sourceUrl: 'https://eldenring.fandom.com/wiki/The_Great_Hollow',
  },
}

export function getMapTypeText(mapType: MapTypeKey): MapTypeText {
  return mapTypeTexts[mapType]
}
