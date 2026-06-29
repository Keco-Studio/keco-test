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
  faUsers,
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
  title: '游戏研发全流程 · 职位与交付物详解',
  description:
    '一款游戏从策划到上线的 8 个阶段:每阶段有哪些职位参与、各自的交付物是什么,附真实示例。',
};

type Contributor = { role: string; abbr: string; deliverable: string };

type Phase = {
  icon: IconDefinition;
  step: string;
  title: string;
  en: string;
  duration: string;
  summary: string;
  contributors: Contributor[];
  activities: string[];
  example: string;
  tools: string[];
  pitfall: string;
};

const phases: Phase[] = [
  {
    icon: faLightbulb,
    step: '01',
    title: '立项与概念构思',
    en: 'Concept & Pitch',
    duration: '1–4 周',
    summary:
      '一切从一个核心创意开始。这阶段不追求完整,只追求「想清楚一句话」——核心体验是什么、为谁做、凭什么不一样。很多项目其实死在这一步:核心吸引力没想明白就开工。',
    contributors: [
      { role: '制作人', abbr: 'Producer', deliverable: '立项提案、资源/预算估算、立项评审决策(做或不做)' },
      { role: '主策划', abbr: 'Lead Designer', deliverable: '一页纸概念案(One-pager)、核心 hook、目标用户定义' },
      { role: '市场 / 发行', abbr: 'Publishing', deliverable: '竞品分析表、市场定位与商业模式建议' },
    ],
    activities: [
      '头脑风暴并收敛出 1 个核心创意,要能用一句话讲清',
      '圈定目标用户与平台:手游 / PC / 主机,休闲 / 硬核',
      '竞品拆解:同类前 5 名的玩法、卖点、营收模式',
      '估算可行性:能不能做、多久、大概多少钱',
    ],
    example:
      '本文用一款例子贯穿:「扮演快递员,在末日城市规划路线送货的 roguelike」。核心体验 = 路线规划 + 风险取舍,目标 = PC 单机硬核玩家。',
    tools: ['Miro / 白板', 'Notion / 飞书文档', 'Steam / TapTap 榜单'],
    pitfall: '别一上来就堆功能。「做什么都行」等于没有创意——砍到只剩一个最核心的 hook。',
  },
  {
    icon: faBook,
    step: '02',
    title: '撰写游戏设计文档',
    en: 'Game Design Document (GDD)',
    duration: '2–6 周',
    summary:
      '把概念变成全团队能照着干的蓝图。GDD 不是写小说,而是把「玩家每一秒在做什么、系统怎么咬合、数值怎么涨」讲到美术和程序不用猜。',
    contributors: [
      { role: '主策划', abbr: 'Lead Designer', deliverable: 'GDD 主体:核心循环、系统总览、设计目标' },
      { role: '系统策划', abbr: 'Systems Designer', deliverable: '各系统详细规则文档(战斗/成长/背包等)' },
      { role: '数值策划', abbr: 'Economy Designer', deliverable: '数值框架表、经济模型、曲线设计' },
      { role: '关卡策划', abbr: 'Level Designer', deliverable: '关卡结构、难度节奏与流程图' },
    ],
    activities: [
      '定义核心循环:玩家反复做的那几十秒到几分钟在干嘛',
      '拆系统:战斗 / 成长 / 经济 / 关卡 / UI 各成模块',
      '搭数值框架:等级曲线、掉落、定价、产出与消耗平衡',
      '排里程碑:按优先级切成 Prototype / VS / Alpha / Beta',
    ],
    example:
      '快递 roguelike 的核心循环:接单 → 看地图规划路线 → 路上躲危险做取舍 → 送达结算 → 用钱升级 → 接更难的单。',
    tools: ['Notion / Confluence', 'Excel / Google Sheets', 'Figma(界面草图)'],
    pitfall: 'GDD 是活文档、会持续更新,别想一次写死;但核心循环一旦定下尽量别反复推翻。',
  },
  {
    icon: faFlask,
    step: '03',
    title: '原型验证核心玩法',
    en: 'Prototype',
    duration: '2–8 周',
    summary:
      '用最丑的方式、最快地回答唯一一个问题:这核心循环到底好不好玩?禁止美术、剧情、打磨,只验证 fun。不好玩,此刻推翻重来的成本最低。',
    contributors: [
      { role: '玩法策划', abbr: 'Game Designer', deliverable: '原型设计、可玩性评估结论' },
      { role: '玩法程序', abbr: 'Gameplay Programmer', deliverable: '可玩的灰盒原型(代码实现)' },
      { role: '制作人', abbr: 'Producer', deliverable: 'go / no-go 决策:继续、pivot 还是砍掉' },
    ],
    activities: [
      '用灰盒 / 方块搭出可玩的核心循环,能跑就行',
      '自己玩 + 拉同事玩,只看「还想再来一局吗」',
      '快速迭代:每天改、每天测,砍掉不好玩的部分',
      '验证不过就果断 pivot,甚至砍项目',
    ],
    example:
      '快递 roguelike 先不画城市,用网格 + 圆点代表货物和危险,只验证「规划路线」本身是否让人上头。',
    tools: ['Unity / Godot / Unreal', '纸面原型', '内部小范围试玩'],
    pitfall: '最大的陷阱是「舍不得」:花两周做的原型不好玩,也要敢扔。原型本来就是用来扔的。',
  },
  {
    icon: faPalette,
    step: '04',
    title: '美术风格与基调设定',
    en: 'Art Direction',
    duration: '与开发并行',
    summary:
      '确定游戏「长什么样、什么气质」。和后面的开发并行,目的是锁定一套统一标准,让几十个人产出的东西看起来像同一个游戏。',
    contributors: [
      { role: '美术总监', abbr: 'Art Director', deliverable: '风格基调板(Style Guide)、整体美术标准' },
      { role: '概念设计师', abbr: 'Concept Artist', deliverable: '概念原画:角色、场景、关键道具' },
      { role: 'UI 设计师', abbr: 'UI/UX Designer', deliverable: 'UI 视觉规范、界面组件库' },
      { role: '技术美术', abbr: 'Technical Artist', deliverable: '美术资产管线、规格与命名规范' },
    ],
    activities: [
      '出概念原画,探索几种风格方向并选定一个',
      '定色彩基调、光影风格、角色 / 场景比例',
      '制定 UI/UX 视觉规范:字体、按钮、图标体系',
      '建美术资产管线:尺寸、格式、命名、提交流程',
    ],
    example:
      '快递 roguelike 选「低饱和赛博废土 + 高对比霓虹」,UI 走等宽字体 + 终端绿,强化「硬核规划」气质。',
    tools: ['Photoshop / Procreate', 'Figma', 'PureRef(参考图墙)'],
    pitfall: '风格不统一比风格不好看更致命。先定规范再量产,别让每个美术各画各的。',
  },
  {
    icon: faLayerGroup,
    step: '05',
    title: '垂直切片',
    en: 'Vertical Slice',
    duration: '1–3 个月',
    summary:
      '做一小段「麻雀虽小五脏俱全」的内容,美术 / 玩法 / 音效 / UI 全部达到最终上线品质。它是团队的品质标杆,也是对外找投资 / 发行的样板。',
    contributors: [
      { role: '制作人', abbr: 'Producer', deliverable: 'VS 范围界定、对外演示材料(Trailer/Demo)' },
      { role: '策划', abbr: 'Designer', deliverable: '该切片的完整设计与调优' },
      { role: '程序', abbr: 'Programmer', deliverable: '切片内全部功能的可玩实现' },
      { role: '美术', abbr: 'Artist', deliverable: '切片美术资产(上线品质)' },
      { role: '音频设计', abbr: 'Audio Designer', deliverable: '切片音效与音乐' },
      { role: 'QA', abbr: 'QA', deliverable: '切片体验测试反馈' },
    ],
    activities: [
      '选一段最能代表游戏的内容(一关 / 一个 boss)做到满级品质',
      '打通完整体验:从进入到结算每个环节都不缺',
      '验证生产管线能否规模化复制到全部内容',
      '用它做对外演示:投资、发行、玩家测试',
    ],
    example:
      '快递 roguelike 做「第一座城市的完整一局」:美术、音效、3 种危险、2 件可升级装备、结算与升级界面齐全。',
    tools: ['实际引擎工程', '录屏 / Trailer 工具', '试玩问卷'],
    pitfall: 'VS 不是把零碎 demo 拼起来——它要代表「最终品质」,否则量产时标准会失真。',
  },
  {
    icon: faGamepad,
    step: '06',
    title: '量产开发',
    en: 'Production',
    duration: '数月 – 数年',
    summary:
      '按 GDD 和垂直切片定下的标准,把剩下所有内容批量生产出来。耗时最长的阶段,策划在这里持续输出关卡、数值配置,并盯实现效果。',
    contributors: [
      { role: '内容 / 关卡策划', abbr: 'Content Designer', deliverable: '全部关卡、剧情与内容配置表' },
      { role: '程序', abbr: 'Programmer', deliverable: '全部系统与功能的实现、工具链' },
      { role: '美术', abbr: 'Artist', deliverable: '全量美术资产(角色/场景/特效/UI)' },
      { role: '音频设计', abbr: 'Audio Designer', deliverable: '全量音效与配乐' },
      { role: '制作人 / PM', abbr: 'Producer / PM', deliverable: '排期、里程碑管理、范围控制' },
      { role: 'QA', abbr: 'QA', deliverable: '阶段性功能测试与回归' },
    ],
    activities: [
      '按里程碑批量实现关卡、剧情、系统、内容',
      '策划配数值与关卡参数,程序实现系统,美术铺量',
      '用敏捷迭代(Sprint)推进,定期出可玩版本评审',
      '集成与联调:各模块拼到一起跑通',
    ],
    example: '快递 roguelike 量产 8 座城市、20+ 危险事件、完整装备树与剧情线。',
    tools: ['Jira / 飞书项目', 'Git / Perforce', '引擎 + 配置表工作流'],
    pitfall: '范围蔓延(scope creep)是头号杀手——每加一个「顺便做的」功能,工期都在涨。守住里程碑。',
  },
  {
    icon: faSliders,
    step: '07',
    title: '测试与数值调优',
    en: 'Testing & Balancing',
    duration: '1–3 个月',
    summary:
      '抓 Bug、调平衡、磨手感。靠内测 / 封测拿真实玩家数据,反复调难度曲线和数值,直到体验顺滑、稳定到「可发布」。',
    contributors: [
      { role: 'QA', abbr: 'QA', deliverable: 'Bug 报告、测试报告、稳定性达标确认' },
      { role: '数值策划', abbr: 'Economy Designer', deliverable: '基于数据的平衡调整方案' },
      { role: '体验设计', abbr: 'UX / Feel Designer', deliverable: '手感打磨清单(反馈、动效、响应)' },
      { role: '数据分析', abbr: 'Data Analyst', deliverable: '封测数据报告、问题定位' },
    ],
    activities: [
      'QA 系统测试 + 回归测试,修复崩溃与阻塞性 Bug',
      '数值平衡:根据玩家数据调难度、掉落、经济',
      '手感打磨:动画、音效反馈、操作响应细节',
      '内测 → 封测(CBT)→ Release Candidate',
    ],
    example:
      '快递 roguelike 发现「第 3 城难度断崖」,据封测数据重排危险密度和补给点,通关率从 12% 提到 35%。',
    tools: ['测试用例管理(TestRail)', '数据埋点 / 分析', '玩家反馈渠道'],
    pitfall: '别只靠自己人测——开发者早就「会玩」了,真实新手的数据才暴露真问题。',
  },
  {
    icon: faRocket,
    step: '08',
    title: '上线与运营',
    en: 'Launch & LiveOps',
    duration: '持续',
    summary:
      '发布只是开始。上线后靠数据看玩家行为、留存、付费,持续更新、做活动、出新内容,让游戏「活」下去并增长。',
    contributors: [
      { role: '制作人', abbr: 'Producer', deliverable: '发布计划、Day-one 补丁、版本节奏' },
      { role: '运营', abbr: 'LiveOps', deliverable: '活动企划、版本运营计划、商业化节奏' },
      { role: '数据分析', abbr: 'Data Analyst', deliverable: '留存 / 付费看板、漏斗分析' },
      { role: '社区运营', abbr: 'Community Mgr', deliverable: '社区反馈汇总、玩家沟通与公告' },
      { role: '市场', abbr: 'Marketing', deliverable: '上线推广、买量与曝光' },
    ],
    activities: [
      '正式发布:商店上架 / 开服 / Day-one 补丁',
      '搭数据看板,盯留存(次留 / 7 留 / 30 留)、付费、漏斗',
      '按版本节奏出更新、活动、新内容',
      '收集社区反馈,排后续 Roadmap',
    ],
    example:
      '快递 roguelike 上线后发现 7 留偏低,加了「每日委托 + 赛季排行」,把 7 留从 18% 拉到 27%。',
    tools: ['商店后台(Steam / App Store)', '数据平台', 'Discord / 社区'],
    pitfall: '「上线即完工」是错觉——首发后 72 小时的反应速度,往往决定一款游戏的生死。',
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
            游戏研发全流程 · 职位与交付物
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            从策划到上线
            <span className="block text-violet-600">谁参与、各自交付什么</span>
          </h1>
          <p className="mx-auto max-w-xl text-zinc-600">
            把游戏研发拆成 8 个阶段,每个阶段都讲清:
            <span className="font-medium text-zinc-800">有哪些职位参与、他们各自的交付物是什么</span>
            ,再附上具体步骤、常用工具、常见坑,并用一款「快递 roguelike」贯穿全程。
          </p>
        </header>

        {/* Timeline */}
        <ol className="relative">
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

                {/* summary */}
                <p className="mb-5 text-sm leading-relaxed text-zinc-600">
                  {p.summary}
                </p>

                {/* contributors — the star: role → deliverable */}
                <section className="mb-5 overflow-hidden rounded-xl border border-violet-100">
                  <p className="flex items-center gap-1.5 border-b border-violet-100 bg-violet-50 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-violet-700">
                    <FontAwesomeIcon icon={faUsers} className="h-3 w-3" />
                    参与职位 &amp; 各自交付物
                  </p>
                  <ul className="divide-y divide-zinc-100">
                    {p.contributors.map((c) => (
                      <li
                        key={c.role}
                        className="flex flex-col gap-1 px-4 py-3 sm:flex-row sm:gap-4"
                      >
                        <div className="shrink-0 sm:w-40">
                          <span className="text-sm font-semibold text-zinc-800">
                            {c.role}
                          </span>
                          <span className="ml-1.5 font-mono text-[11px] text-zinc-400">
                            {c.abbr}
                          </span>
                        </div>
                        <p className="flex-1 text-sm leading-relaxed text-zinc-600">
                          {c.deliverable}
                        </p>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* activities */}
                <section className="mb-4">
                  <p className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-zinc-400">
                    <FontAwesomeIcon icon={faListCheck} className="h-3 w-3" />
                    具体步骤
                  </p>
                  <ul className="space-y-1.5">
                    {p.activities.map((a) => (
                      <li key={a} className="flex items-start gap-2 text-sm text-zinc-700">
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
                <div className="flex items-start gap-2 rounded-xl border border-amber-100 bg-amber-50 p-3.5">
                  <FontAwesomeIcon
                    icon={faTriangleExclamation}
                    className="mt-0.5 h-4 w-4 shrink-0 text-amber-500"
                  />
                  <p className="text-sm leading-relaxed text-amber-900">
                    <span className="font-semibold">常见坑 · </span>
                    {p.pitfall}
                  </p>
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
