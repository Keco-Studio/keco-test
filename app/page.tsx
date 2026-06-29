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
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
  title: '游戏从策划到开发的全流程 · Workflow',
  description: '一款游戏是如何被策划、验证、开发并最终上线的 —— 分阶段拆解。',
};

type Phase = {
  icon: IconDefinition;
  step: string;
  title: string;
  en: string;
  duration: string;
  roles: string[];
  summary: string;
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
      '一切从一个核心创意开始。策划要回答:这游戏好玩在哪?给谁玩?和市面上的有什么不同?把模糊的想法收敛成一句话能讲清的「核心体验」。',
    outputs: [
      '一页纸概念案(One-pager):核心玩法、目标用户、卖点',
      '竞品分析与市场定位',
      '立项评审:决定是否投入资源',
    ],
  },
  {
    icon: faBook,
    step: '02',
    title: '撰写游戏设计文档',
    en: 'Game Design Document (GDD)',
    duration: '2–6 周',
    roles: ['主策划', '系统策划', '数值策划'],
    summary:
      '把概念展开成可执行的蓝图。玩法机制、系统循环、世界观、数值框架、经济系统全部写清楚,让美术、程序、音频知道「要做成什么样」。',
    outputs: [
      'GDD:核心循环、系统设计、关卡结构',
      '数值框架与经济模型',
      '功能优先级与里程碑排期',
    ],
  },
  {
    icon: faFlask,
    step: '03',
    title: '原型验证核心玩法',
    en: 'Prototype',
    duration: '2–8 周',
    roles: ['策划', '程序', '玩法工程师'],
    summary:
      '不谈美术、不谈剧情,先用灰盒(白模)把核心玩法做出来,只回答一个问题:这个核心循环到底好不好玩?不好玩就快速推翻重来,代价最低。',
    outputs: [
      '可玩的灰盒原型(Greybox)',
      '核心循环(Core Loop)是否成立的结论',
      '玩法手感与节奏的初步打磨',
    ],
  },
  {
    icon: faPalette,
    step: '04',
    title: '美术风格与基调设定',
    en: 'Art Direction',
    duration: '与开发并行',
    roles: ['美术总监', '概念设计师', 'UI 设计师'],
    summary:
      '确定游戏「长什么样」。概念美术、色彩基调、角色与场景风格、UI 视觉规范一起锁定整体气质,为量产提供统一的美术标准。',
    outputs: [
      '概念原画与风格基调板(Style Guide)',
      '角色 / 场景 / UI 视觉规范',
      '美术资产管线与规格标准',
    ],
  },
  {
    icon: faLayerGroup,
    step: '05',
    title: '垂直切片',
    en: 'Vertical Slice',
    duration: '1–3 个月',
    roles: ['全团队'],
    summary:
      '做出一个「麻雀虽小五脏俱全」的完整片段 —— 美术、玩法、音效、UI 都达到最终品质。它既是对外展示(找投资 / 发行)的样板,也是团队的品质标杆。',
    outputs: [
      '一段达到上线品质的可玩 Demo',
      '验证过的生产管线与工作流',
      '可用于路演 / 发行洽谈的素材',
    ],
  },
  {
    icon: faGamepad,
    step: '06',
    title: '量产开发',
    en: 'Production',
    duration: '数月 – 数年',
    roles: ['策划', '程序', '美术', '音频', 'QA'],
    summary:
      '按 GDD 与垂直切片定下的标准全量生产:关卡、剧情、系统、内容批量实现。策划在这一阶段持续输出关卡设计、数值配置,并跟进实现效果。',
    outputs: [
      '全部关卡 / 内容 / 系统的实现',
      '可玩的 Alpha 版本(功能完整)',
      '持续的内部评审与迭代',
    ],
  },
  {
    icon: faSliders,
    step: '07',
    title: '测试与数值调优',
    en: 'Testing & Balancing',
    duration: '1–3 个月',
    roles: ['QA', '数值策划', '体验设计师'],
    summary:
      '抓 Bug、调平衡、磨手感。通过内测 / 封测收集真实玩家数据,反复调整难度曲线、数值与节奏,直到体验顺滑 —— 进入 Beta 直至「可发布」状态。',
    outputs: [
      'Bug 修复与稳定性达标',
      '难度曲线与数值平衡调优',
      'Beta 版本 → Release Candidate',
    ],
  },
  {
    icon: faRocket,
    step: '08',
    title: '上线与运营',
    en: 'Launch & LiveOps',
    duration: '持续',
    roles: ['制作人', '运营', '数据分析'],
    summary:
      '发布只是开始。上线后通过数据监控玩家行为、留存与付费,持续推出更新、活动与新内容,让游戏「活」下去并不断成长。',
    outputs: [
      '正式发布上线',
      '数据看板与玩家反馈监控',
      '版本迭代 / 活动 / 新内容运营',
    ],
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
            游戏研发流程
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            从策划到上线
            <span className="block text-violet-600">一款游戏是怎样诞生的</span>
          </h1>
          <p className="mx-auto max-w-xl text-zinc-600">
            游戏策划不是「写个文档」就完事 —— 而是一条从创意、验证、量产到运营的完整链路。
            下面把这条路拆成 8 个阶段,看看策划如何一步步把游戏带进现实。
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

                <p className="mb-4 text-sm leading-relaxed text-zinc-600">
                  {p.summary}
                </p>

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
