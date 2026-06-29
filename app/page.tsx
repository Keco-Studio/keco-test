import type { Metadata } from 'next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faLightbulb,
  faBook,
  faFlask,
  faPalette,
  faLayerGroup,
  faGamepad,
  faSliders,
  faRocket,
  faArrowRight,
  faArrowsRotate,
  faListCheck,
  faScrewdriverWrench,
  faTriangleExclamation,
  faCircleInfo,
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
  title: '游戏从策划到开发的全流程 · Workflow',
  description: '一款游戏是如何被策划、验证、开发并最终上线的 —— 分阶段详解,附真实示例。',
};

type Phase = {
  icon: IconDefinition;
  step: string;
  title: string;
  en: string;
  duration: string;
  roles: string[];
  summary: string;
  activities: string[];
  example: string;
  tools: string[];
  pitfall: string;
  outputs: string[];
};

const phases: Phase[] = [
  {
    icon: faLightbulb,
    step: '01',
    title: '立项与概念构思',
    en: 'Concept & Pitch',
    duration: '1–4 周',
    roles: ['主策划', '制作人'],
    summary:
      '一切从一个核心创意开始。这阶段不追求完整,只追求「想清楚一句话」——这游戏的核心体验是什么、为谁做、凭什么和别人不一样。很多项目其实死在这一步:核心吸引力没想明白就开工。',
    activities: [
      '头脑风暴并收敛出 1 个核心创意(core hook),要能用一句话讲清',
      '圈定目标用户与平台:手游 / PC / 主机,休闲 / 硬核',
      '竞品拆解:同类前 5 名的玩法、卖点、营收模式',
      '估算可行性:团队能不能做、大概多久、大概多少钱',
    ],
    example:
      '本文用一款例子贯穿:「扮演快递员,在末日城市里规划路线送货的 roguelike」。核心体验 = 路线规划 + 风险取舍,目标 = PC 单机硬核玩家。',
    tools: ['Miro / 白板', 'Notion / 飞书文档', 'Steam / TapTap 榜单'],
    pitfall:
      '别一上来就堆功能。「做什么都行」的创意等于没有创意——砍到只剩一个最核心的 hook。',
    outputs: ['一页纸概念案(One-pager)', '竞品分析表', '立项评审结论:做 / 不做'],
  },
  {
    icon: faBook,
    step: '02',
    title: '撰写游戏设计文档',
    en: 'Game Design Document (GDD)',
    duration: '2–6 周',
    roles: ['主策划', '系统策划', '数值策划'],
    summary:
      '把脑子里的概念变成全团队能照着干的蓝图。GDD 不是写小说,而是把「玩家每一秒在做什么、系统怎么咬合、数值怎么涨」讲到美术和程序不用猜。',
    activities: [
      '定义核心循环(Core Loop):玩家反复做的那几十秒到几分钟在干嘛',
      '拆系统:战斗 / 成长 / 经济 / 关卡 / UI 各成模块,写清规则与边界',
      '搭数值框架:等级曲线、掉落、定价、产出与消耗的平衡关系',
      '排里程碑:把功能按优先级切成 Prototype / VS / Alpha / Beta',
    ],
    example:
      '快递 roguelike 的核心循环:接单 → 看地图规划路线 → 路上躲危险、做取舍 → 送达结算 → 用钱升级装备 → 接更难的单。',
    tools: ['Notion / Confluence', 'Excel / Google Sheets(数值)', 'Figma(界面草图)'],
    pitfall:
      'GDD 是活文档、会持续更新,别想一次写死;但核心循环一旦定下,尽量别反复推翻。',
    outputs: ['GDD:核心循环 + 系统设计 + 关卡结构', '数值框架表', '里程碑排期'],
  },
  {
    icon: faFlask,
    step: '03',
    title: '原型验证核心玩法',
    en: 'Prototype',
    duration: '2–8 周',
    roles: ['策划', '程序', '玩法工程师'],
    summary:
      '用最丑的方式、最快地回答唯一一个问题:这核心循环到底好不好玩?这阶段禁止美术、禁止剧情、禁止打磨,只验证 fun。不好玩的话,此刻推翻重来的成本最低。',
    activities: [
      '用灰盒 / 方块搭出可玩的核心循环,能跑起来就行',
      '自己玩 + 拉同事玩,只看一件事:「还想再来一局吗」',
      '快速迭代:每天改、每天测,砍掉不好玩的部分',
      '验证不过就果断 pivot,甚至砍掉项目',
    ],
    example:
      '快递 roguelike 先不画城市,用网格 + 圆点代表货物和危险,只验证「规划路线」本身是否让人上头。',
    tools: ['Unity / Godot / Unreal', '纸面原型', '内部小范围试玩'],
    pitfall:
      '最大的陷阱是「舍不得」:花了两周做的原型不好玩,也要敢扔。原型本来就是用来扔的。',
    outputs: ['可玩的灰盒原型(Greybox)', '核心循环是否成立的结论', '是否继续的决策'],
  },
  {
    icon: faPalette,
    step: '04',
    title: '美术风格与基调设定',
    en: 'Art Direction',
    duration: '与开发并行',
    roles: ['美术总监', '概念设计师', 'UI 设计师'],
    summary:
      '确定游戏「长什么样、什么气质」。这阶段和后面的开发并行,目的是锁定一套统一标准,让几十个人产出的东西看起来像同一个游戏。',
    activities: [
      '出概念原画,探索几种风格方向并选定一个',
      '定色彩基调、光影风格、角色 / 场景比例',
      '制定 UI/UX 视觉规范:字体、按钮、图标体系',
      '建美术资产管线与规格:尺寸、格式、命名、提交流程',
    ],
    example:
      '快递 roguelike 选「低饱和赛博废土 + 高对比霓虹」,UI 走等宽字体 + 终端绿,强化「硬核规划」的气质。',
    tools: ['Photoshop / Procreate', 'Figma', 'PureRef(参考图墙)'],
    pitfall:
      '风格不统一比风格不好看更致命。先定规范再量产,别让每个美术各画各的。',
    outputs: ['概念原画 + 风格基调板(Style Guide)', 'UI 视觉规范', '美术资产管线'],
  },
  {
    icon: faLayerGroup,
    step: '05',
    title: '垂直切片',
    en: 'Vertical Slice',
    duration: '1–3 个月',
    roles: ['全团队'],
    summary:
      '做一小段「麻雀虽小五脏俱全」的内容,美术 / 玩法 / 音效 / UI 全部达到最终上线品质。它是团队的品质标杆,也是对外找投资 / 找发行的样板。',
    activities: [
      '选一段最能代表游戏的内容(如一关、一个 boss)做到满级品质',
      '打通完整体验:从进入到结算的每个环节都不缺',
      '验证生产管线:这套流程能不能规模化复制到全部内容',
      '用它做对外演示:投资、发行、玩家测试',
    ],
    example:
      '快递 roguelike 做「第一座城市的完整一局」:有美术、音效、3 种危险、2 件可升级装备、结算与升级界面。',
    tools: ['实际引擎工程', '录屏 / Trailer 工具', '试玩问卷'],
    pitfall:
      'VS 不是把零碎 demo 拼起来——它要代表「最终品质」,否则量产时标准会失真。',
    outputs: ['上线品质的可玩 Demo', '验证过的生产管线', '路演 / 发行素材'],
  },
  {
    icon: faGamepad,
    step: '06',
    title: '量产开发',
    en: 'Production',
    duration: '数月 – 数年',
    roles: ['策划', '程序', '美术', '音频', 'QA'],
    summary:
      '按 GDD 和垂直切片定下的标准,把剩下所有内容批量生产出来。这是耗时最长的阶段,策划在这里持续输出关卡、数值配置,并盯实现效果。',
    activities: [
      '按里程碑批量实现关卡、剧情、系统、内容',
      '策划配数值与关卡参数,程序实现系统,美术铺量',
      '用敏捷迭代(Sprint)推进,定期出可玩版本评审',
      '集成与联调:各模块拼到一起跑通',
    ],
    example:
      '快递 roguelike 量产 8 座城市、20+ 危险事件、完整装备树与剧情线。',
    tools: ['Jira / 飞书项目', 'Git / Perforce', '引擎 + 配置表工作流'],
    pitfall:
      '范围蔓延(scope creep)是头号杀手——每加一个「顺便做的」功能,工期都在涨。守住里程碑。',
    outputs: ['全部关卡 / 内容 / 系统', '功能完整的 Alpha 版本', '持续内部评审'],
  },
  {
    icon: faSliders,
    step: '07',
    title: '测试与数值调优',
    en: 'Testing & Balancing',
    duration: '1–3 个月',
    roles: ['QA', '数值策划', '体验设计师'],
    summary:
      '抓 Bug、调平衡、磨手感。靠内测 / 封测拿真实玩家数据,反复调难度曲线和数值,直到体验顺滑、稳定到「可发布」。',
    activities: [
      'QA 系统测试 + 回归测试,修复崩溃与阻塞性 Bug',
      '数值平衡:根据玩家数据调难度、掉落、经济',
      '手感打磨:动画、音效反馈、操作响应的细节',
      '内测 → 封测(CBT)→ Release Candidate',
    ],
    example:
      '快递 roguelike 发现「第 3 城难度断崖」,据封测数据重排危险密度和补给点,通关率从 12% 提到 35%。',
    tools: ['测试用例管理(TestRail)', '数据埋点 / 分析', '玩家反馈渠道'],
    pitfall:
      '别只靠自己人测——开发者早就「会玩」了,真实新手的数据才暴露真问题。',
    outputs: ['Bug 修复 + 稳定性达标', '平衡好的难度 / 数值', 'Beta → RC'],
  },
  {
    icon: faRocket,
    step: '08',
    title: '上线与运营',
    en: 'Launch & LiveOps',
    duration: '持续',
    roles: ['制作人', '运营', '数据分析'],
    summary:
      '发布只是开始。上线后靠数据看玩家行为、留存、付费,持续更新、做活动、出新内容,让游戏「活」下去并不断增长。',
    activities: [
      '正式发布:商店上架 / 开服 / Day-one 补丁',
      '搭数据看板,盯留存(次留 / 7 留 / 30 留)、付费、漏斗',
      '按版本节奏出更新、活动、新内容',
      '收集社区反馈,排后续 Roadmap',
    ],
    example:
      '快递 roguelike 上线后发现 7 留偏低,加了「每日委托 + 赛季排行」,把 7 留从 18% 拉到 27%。',
    tools: ['商店后台(Steam / App Store)', '数据平台', 'Discord / 社区'],
    pitfall:
      '「上线即完工」是错觉——首发后 72 小时的反应速度,往往决定一款游戏的生死。',
    outputs: ['正式上线', '数据看板 + 监控', '版本 / 活动 / 新内容运营'],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-16 sm:py-24">
      <div className="mx-auto w-full max-w-3xl">
        {/* Hero */}
        <header className="mb-16 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-700">
            <FontAwesomeIcon icon={faGamepad} className="h-3.5 w-3.5" />
            游戏研发流程详解
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            从策划到上线
            <span className="block text-violet-600">一款游戏是怎样诞生的</span>
          </h1>
          <p className="mx-auto max-w-xl text-zinc-600">
            把游戏研发拆成 8 个阶段,每个阶段都讲清:具体做什么、用什么工具、容易踩什么坑、最终交付什么。
            并用一款「快递 roguelike」的例子贯穿全程,让流程落到实处。
          </p>
        </header>

        {/* Timeline */}
        <ol className="relative">
          {/* vertical line */}
          <div
            aria-hidden
            className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-violet-300 via-zinc-200 to-transparent sm:left-6"
          />

          {phases.map((p) => (
            <li key={p.step} className="relative mb-10 pl-16 last:mb-0 sm:pl-20">
              {/* node */}
              <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 text-white shadow-sm shadow-violet-200 sm:h-12 sm:w-12">
                <FontAwesomeIcon icon={p.icon} className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>

              {/* card */}
              <div className="rounded-2xl border border-zinc-200 bg-white p-5 transition-shadow hover:shadow-md sm:p-6">
                {/* title row */}
                <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span className="font-mono text-sm font-semibold text-violet-500">
                    {p.step}
                  </span>
                  <h2 className="text-lg font-bold tracking-tight">{p.title}</h2>
                  <span className="text-sm text-zinc-400">{p.en}</span>
                  <span className="ml-auto rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-600">
                    {p.duration}
                  </span>
                </div>

                {/* roles */}
                <div className="mb-4 flex flex-wrap gap-1.5">
                  {p.roles.map((r) => (
                    <span
                      key={r}
                      className="rounded-md bg-violet-50 px-2 py-0.5 text-xs font-medium text-violet-700"
                    >
                      {r}
                    </span>
                  ))}
                </div>

                {/* summary */}
                <p className="mb-5 text-sm leading-relaxed text-zinc-600">
                  {p.summary}
                </p>

                {/* activities */}
                <section className="mb-4">
                  <p className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-zinc-400">
                    <FontAwesomeIcon icon={faListCheck} className="h-3 w-3" />
                    具体步骤
                  </p>
                  <ul className="space-y-1.5">
                    {p.activities.map((a) => (
                      <li
                        key={a}
                        className="flex items-start gap-2 text-sm text-zinc-700"
                      >
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="mt-1 h-3 w-3 shrink-0 text-violet-400"
                        />
                        {a}
                      </li>
                    ))}
                  </ul>
                </section>

                {/* example */}
                <div className="mb-4 flex items-start gap-2 rounded-xl border border-sky-100 bg-sky-50 p-3.5">
                  <FontAwesomeIcon
                    icon={faCircleInfo}
                    className="mt-0.5 h-4 w-4 shrink-0 text-sky-500"
                  />
                  <p className="text-sm leading-relaxed text-sky-900">
                    <span className="font-semibold">举个例子 · </span>
                    {p.example}
                  </p>
                </div>

                {/* tools */}
                <div className="mb-4">
                  <p className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-zinc-400">
                    <FontAwesomeIcon icon={faScrewdriverWrench} className="h-3 w-3" />
                    常用工具
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tools.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-600"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* pitfall */}
                <div className="mb-4 flex items-start gap-2 rounded-xl border border-amber-100 bg-amber-50 p-3.5">
                  <FontAwesomeIcon
                    icon={faTriangleExclamation}
                    className="mt-0.5 h-4 w-4 shrink-0 text-amber-500"
                  />
                  <p className="text-sm leading-relaxed text-amber-900">
                    <span className="font-semibold">常见坑 · </span>
                    {p.pitfall}
                  </p>
                </div>

                {/* outputs */}
                <div className="rounded-xl bg-zinc-50 p-4">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-zinc-400">
                    关键产出
                  </p>
                  <ul className="space-y-1.5">
                    {p.outputs.map((o) => (
                      <li
                        key={o}
                        className="flex items-start gap-2 text-sm text-zinc-700"
                      >
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="mt-1 h-3 w-3 shrink-0 text-violet-400"
                        />
                        {o}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>

        {/* Loop note */}
        <div className="mt-12 flex items-start gap-3 rounded-2xl border border-violet-200 bg-violet-50 p-5">
          <FontAwesomeIcon
            icon={faArrowsRotate}
            className="mt-0.5 h-5 w-5 shrink-0 text-violet-600"
          />
          <p className="text-sm leading-relaxed text-violet-900">
            <span className="font-semibold">这不是一条直线,而是不断循环的迭代。</span>{' '}
            原型不好玩就回炉,测试发现问题就调整,上线后根据数据继续打磨。
            优秀的游戏,几乎都是在「做 → 验证 → 改」的循环里一点点磨出来的。
          </p>
        </div>
      </div>
    </main>
  );
}
