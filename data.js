// 電験三種「理論」学習アプリ — コンテンツデータ(BASE分: 令和5年度上期・令和6年度上期)
// ※ 電気技術者試験センター公式サイトで公開されている実際の過去問PDFから出題内容を確認し、
//    計算過程を検算のうえ収録しています。他の年度は batches/ 配下の各ファイルを参照。
//    最新の過去問や正式な解答は電気技術者試験センターの公式サイトでご確認ください。

const GENRES = [
  {
    id: "dc",
    name: "直流回路",
    desc: "オームの法則・キルヒホッフの法則・合成抵抗・電力",
  },
  {
    id: "electrostatics",
    name: "静電気",
    desc: "クーロンの法則・コンデンサ・静電容量・静電エネルギー",
  },
];

const BASICS = {
  dc: `■ オームの法則
電圧 $V$〔V〕、電流 $I$〔A〕、抵抗 $R$〔Ω〕の間には次の関係が成り立つ。
  $V = IR$　　$I = \\dfrac{V}{R}$　　$R = \\dfrac{V}{I}$

■ 抵抗の直列接続
抵抗を直列につなぐと、合成抵抗はそれぞれの抵抗の和になる。
  $R = R_1 + R_2 + R_3 + \\cdots$
直列回路ではどの抵抗にも同じ電流が流れる。

■ 抵抗の並列接続
抵抗を並列につなぐと、合成抵抗の逆数はそれぞれの抵抗の逆数の和になる。
  $\\dfrac{1}{R} = \\dfrac{1}{R_1} + \\dfrac{1}{R_2} + \\dfrac{1}{R_3} + \\cdots$
並列回路ではどの抵抗にも同じ電圧がかかる。合成抵抗は必ず最も小さい抵抗より小さくなる。

■ キルヒホッフの法則
・電流則(KCL): 回路のどの接続点でも、流れ込む電流の和と流れ出る電流の和は等しい。
・電圧則(KVL): 閉回路を1周すると、起電力の和と電圧降下の和は等しい。
電池に内部抵抗 $r$ がある場合、端子電圧は $V = E - Ir$($E$ は起電力)となる。

■ 電力
抵抗で消費される電力は次のいずれの式でも計算できる。
  $P = VI = I^2 R = \\dfrac{V^2}{R}$

■ 抵抗の温度係数
金属製の抵抗は温度が上がると抵抗値も大きくなる。温度 $t_1$〔℃〕での抵抗を $R_1$、
温度係数を $\\alpha$〔1/℃〕とすると、温度 $t_2$〔℃〕での抵抗 $R_2$ は次の式で求められる。
  $R_2 = R_1\\{1 + \\alpha(t_2 - t_1)\\}$
起電力が一定の回路では、抵抗が大きくなるほど電流 $I = \\dfrac{E}{R}$ は小さくなる。

計算問題を解くときは「まず回路全体の合成抵抗を求める → オームの法則で電流・電圧を求める → 必要なら電力を求める」という順番で考えると整理しやすい。`,

  electrostatics: `■ 静電容量の基本
コンデンサに電圧 $V$〔V〕を加えたとき蓄えられる電荷 $Q$〔C〕と静電容量 $C$〔F〕の関係は次の式で表される。
  $Q = CV$

■ 平行平板コンデンサ
極板面積 $S$〔m²〕、極板間隔 $d$〔m〕、極板間の誘電率 $\\varepsilon$(= $\\varepsilon_0 \\times \\varepsilon_r$、$\\varepsilon_0$は真空の誘電率、$\\varepsilon_r$は比誘電率)とすると、
  $C = \\dfrac{\\varepsilon S}{d} = \\dfrac{\\varepsilon_0 \\varepsilon_r S}{d}$
極板面積が大きいほど、間隔が狭いほど、誘電率(誘電体の種類)が大きいほど静電容量は大きくなる。

■ コンデンサの直列接続
  $\\dfrac{1}{C} = \\dfrac{1}{C_1} + \\dfrac{1}{C_2} + \\cdots$
合成静電容量は必ず最も小さいコンデンサの容量より小さくなる(抵抗の並列と同じ形の式になる点に注意)。

■ コンデンサの並列接続
  $C = C_1 + C_2 + \\cdots$
合成静電容量は単純に足し算になる(抵抗の直列と同じ形の式になる点に注意)。

■ 静電エネルギー
コンデンサに蓄えられるエネルギー $W$〔J〕は次の式で表される。
  $W = \\dfrac{1}{2}CV^2 = \\dfrac{1}{2}QV = \\dfrac{Q^2}{2C}$

抵抗の直列・並列とコンデンサの直列・並列で公式の形が入れ替わる点が混同しやすいので、
「コンデンサの並列 = 抵抗の直列と同じ足し算」「コンデンサの直列 = 抵抗の並列と同じ逆数の和」
と対応づけて覚えると整理しやすい。`,
};

const BASE_QUESTIONS = [
  // ===== 直流回路(実際の過去問) =====
  {
    genre: "dc",
    yearLabel: "令和6年度上期 問5 / 令和5年度上期 問5(過去問)",
    statement:
      "図の直流回路において、抵抗$R=10\\,\\Omega$で消費される電力の値[W]として、最も近いものは次のうちどれか。",
    diagram: {
      src: "assets/r6f-q5-diagram.png",
      alt: "60Vと80Vの電源、40Ω・40Ω・10Ω(R)・60Ω・60Ωの抵抗からなる直流回路",
      labels: [
        { text: "A", x: 42, y: 19 },
        { text: "B", x: 64, y: 19 },
      ],
    },
    choices: ["0.28", "1.89", "3.79", "5.36", "7.62"],
    answer: 0,
    explanation:
      "節点A・Bの電位をそれぞれ $V_A$、$V_B$(接地を0V)とし、キルヒホッフの電流則を立てる。\n" +
      "節点A: $\\dfrac{60-V_A}{40} = \\dfrac{V_A}{40} + \\dfrac{V_A-V_B}{10}$\n" +
      "節点B: $\\dfrac{V_A-V_B}{10} + \\dfrac{80-V_B}{60} = \\dfrac{V_B}{60}$\n" +
      "これを整理すると $6V_A-4V_B=60$、$6V_A-8V_B=-80$ となり、連立して解くと $V_B=35\\,\\text{V}$、$V_A=\\dfrac{100}{3}\\approx 33.3\\,\\text{V}$。\n" +
      "Rを流れる電流は $I=\\dfrac{V_A-V_B}{10}=\\dfrac{33.3-35}{10}\\approx -0.167\\,\\text{A}$、つまり大きさ約0.167A。\n" +
      "消費電力は $P=I^2R=0.167^2\\times 10\\approx 0.28\\,\\text{W}$。正解は (1) 0.28。",
  },
  {
    genre: "dc",
    yearLabel: "令和6年度上期 問6(過去問)",
    statement:
      "図の回路において、抵抗$R$[Ω]には電流0.3Aが図に示す向きで流れている。抵抗$R$の値[Ω]として、最も近いものは次のうちどれか。",
    diagram: {
      src: "assets/r6f-q6-diagram.png",
      alt: "9V電源、6Ωの抵抗、3V・4Vの電源とR・1Ωの抵抗からなる回路",
      labels: [
        { text: "P", x: 33, y: 16 },
        { text: "Q", x: 77, y: 45 },
      ],
    },
    choices: ["2.0", "2.8", "3.7", "4.9", "25"],
    answer: 0,
    explanation:
      "節点Qを基準(0V)とし、節点Pの電位を$V_P$とする。\n" +
      "上側の枝(P→3V→R→Q、PからQへ0.3A): $V_P + 3 - 0.3R = 0 \\Rightarrow V_P = 0.3R - 3$\n" +
      "下側の枝(P→4V→1Ω→Q、電流を$I_2$とする): $V_P + 4 - I_2\\times 1 = 0 \\Rightarrow I_2 = V_P + 4$\n" +
      "節点Pでの電流則: 電源側から流れ込む電流 $\\dfrac{9-V_P}{6}$ は、上側の0.3Aと下側の$I_2$に分かれる。\n" +
      "$\\dfrac{9-V_P}{6} = 0.3 + I_2$ にそれぞれ代入して整理すると $4.2 = 2.1R$ となり、$R = 2.0\\,\\Omega$。正解は (1) 2.0。",
  },
  {
    genre: "dc",
    yearLabel: "令和5年度上期 問6(過去問)",
    statement:
      "図のような直流回路において、3Ωの抵抗を流れる電流の値[A]として、最も近いものは次のうちどれか。",
    diagram: {
      src: "assets/r5f-q6-diagram.png",
      alt: "4V電源、3Ω・5Ωの抵抗、2Aの電流源からなる回路",
      labels: [{ text: "N", x: 49, y: 10 }],
    },
    choices: ["0.35", "0.45", "0.55", "0.65", "0.75"],
    answer: 4,
    explanation:
      "接地を0V、節点Nの電位を$V_N$とする。3Ωの抵抗を電源からNへ向かう電流を$I_3=\\dfrac{4-V_N}{3}$、5Ωの抵抗をNから接地へ向かう電流を$I_5=\\dfrac{V_N}{5}$とすると、節点Nの電流則より $I_3 + 2 = I_5$。\n" +
      "$\\dfrac{4-V_N}{3} + 2 = \\dfrac{V_N}{5}$ を解くと $V_N = 6.25\\,\\text{V}$。\n" +
      "$I_3 = \\dfrac{4-6.25}{3} = -0.75\\,\\text{A}$、つまり実際には電流はNから電源側へ向かって流れており、大きさは0.75A。正解は (5) 0.75。",
  },
  {
    genre: "dc",
    yearLabel: "令和5年度上期 問7(過去問)",
    statement:
      "図の回路において、スイッチSを閉じ、直流電源から金属製の抵抗に電流を流したとき、発熱により抵抗の温度が120℃になった。スイッチSを閉じた直後(抵抗の温度20℃)に回路を流れる電流に比べ、抵抗の温度が120℃になったときに回路を流れる電流は、どのように変化するか。ただし、抵抗の温度係数は一定で$0.005\\,\\text{℃}^{-1}$とし、電源の起電力の大きさは温度によらず一定、内部抵抗は無視できるものとする。",
    diagram: { src: "assets/r5f-q7-diagram.png", alt: "直流電源、金属製の抵抗、スイッチSからなる単純な直列回路" },
    choices: ["変化しない", "50%増加", "33%減少", "50%減少", "33%増加"],
    answer: 2,
    explanation:
      "抵抗の温度係数の式 $R_2 = R_1\\{1+\\alpha(t_2-t_1)\\}$ より、120℃での抵抗は $R_{120} = R_{20}\\times\\{1+0.005\\times(120-20)\\} = R_{20}\\times(1+0.5) = 1.5\\times R_{20}$。\n" +
      "起電力一定・内部抵抗無視なので $I=\\dfrac{E}{R}$ の関係から、電流は抵抗に反比例して変化する。$\\dfrac{I_{120}}{I_{20}} = \\dfrac{R_{20}}{R_{120}} = \\dfrac{1}{1.5} = \\dfrac{2}{3}$。\n" +
      "つまり電流は元の2/3になる、すなわち約33%減少する。正解は (3) 33%減少。",
  },

  // ===== 静電気(実際の過去問) =====
  {
    genre: "electrostatics",
    yearLabel: "令和6年度上期 問1(過去問)",
    statement:
      "図1に示すような、空気を含む二つの誘電体からなる平行平板電極がある。この下部電極を接地し、上部電極に電圧を加えたときの電極間の等電位線の分布を示す断面図として、正しいものを次の(1)〜(5)のうちから一つ選べ。ただし、誘電体の導電性及び電極と誘電体の端効果は無視できるものとする。参考までに固体誘電体を取り除いた、空気中平行平板電極の場合の等電位線の分布を図2に示す(下側を接地電極とする)。",
    diagram: { src: "assets/r6f-q1-diagram.png", alt: "図1:比誘電率1(空気)と6(固体)の複合誘電体平行平板電極/図2:空気中平行平板電極の等電位線分布" },
    choices: [
      { img: "assets/r6f-q1-c1.png", alt: "選択肢1: 上部から下部まで密な間隔で均一な等電位線" },
      { img: "assets/r6f-q1-c2.png", alt: "選択肢2: 上部から下部まで疎な間隔で均一な等電位線((1)より間隔が広い)" },
      { img: "assets/r6f-q1-c3.png", alt: "選択肢3: 上部が疎(間隔が広い)、下部が密な等電位線" },
      { img: "assets/r6f-q1-c4.png", alt: "選択肢4: 上部が密、下部が疎な等電位線" },
      { img: "assets/r6f-q1-c5.png", alt: "選択肢5: 上部が広い範囲で密、下部のごく一部だけが疎な等電位線" },
    ],
    answer: 3,
    explanation:
      "上部側(比誘電率$\\varepsilon_1=1$の空気層)と下部側(比誘電率$\\varepsilon_2=6$の固体誘電体層)が直列に接続されたコンデンサとみなせる。電束密度$D$は両誘電体の境界で連続(同じ値)だが、電界の強さは$E=\\dfrac{D}{\\varepsilon_0\\varepsilon_r}$の関係にあるため、誘電率が小さい空気層($\\varepsilon_1=1$)の方が電界が強く、誘電率が大きい固体層($\\varepsilon_2=6$)の方が電界は弱くなる(具体的には固体層の電界は空気層の$\\dfrac{1}{6}$)。等電位線の間隔は電界が強い場所ほど狭く(密に)なるため、空気層側(図の上部)では間隔が狭く密に、固体誘電体側(図の下部)では間隔が広く疎になる。図1では空気層と固体層がほぼ同じ厚さで描かれているため、密な部分と疎な部分がおよそ上下半分ずつを占める分布が正しい。この分布に一致するのは (4)。",
  },
  {
    genre: "electrostatics",
    yearLabel: "令和6年度上期 問2(過去問)",
    statement:
      "空気中に孤立した半径 $a$[m] の導体球に帯電できる最大の電荷の値[C]として、正しいものは次のうちどれか。ただし、空気の絶縁耐力及び誘電率はそれぞれ $E_m$[V/m] 及び $\\varepsilon_0$[F/m] とする。",
    choices: [
      "$\\dfrac{E_m}{4\\pi\\varepsilon_0 a^2}$",
      "$\\dfrac{E_m}{4\\pi\\varepsilon_0 a}$",
      "$4\\pi\\varepsilon_0 a E_m$",
      "$4\\pi\\varepsilon_0 a^2 E_m$",
      "$4\\pi\\varepsilon_0 a^3 E_m$",
    ],
    answer: 3,
    explanation:
      "半径$a$[m]の導体球表面の電界の強さは $E = \\dfrac{Q}{4\\pi\\varepsilon_0 a^2}$ で表される。この電界が空気の絶縁耐力$E_m$に達したときが帯電できる限界(それ以上では放電してしまう)なので、$E_m = \\dfrac{Q}{4\\pi\\varepsilon_0 a^2}$ より $Q = 4\\pi\\varepsilon_0 a^2 E_m$。正解は (4) $4\\pi\\varepsilon_0 a^2 E_m$。",
  },
  {
    genre: "electrostatics",
    yearLabel: "令和5年度上期 問2(過去問)",
    statement:
      "静電界に関する次の記述のうち、誤っているものを次の(1)〜(5)のうちから一つ選べ。",
    choices: [
      "媒質中に置かれた正電荷から出る電気力線の本数は、その電荷の大きさに比例し、媒質の誘電率に反比例する。",
      "電界中における電気力線は、相互に交差しない。",
      "電界中における電気力線は、等電位面と直交する。",
      "電界中のある点の電気力線の密度は、その点における電界の強さ(大きさ)を表す。",
      "電界中に置かれた導体内部の電界の強さ(大きさ)は、その導体表面の電界の強さ(大きさ)に等しい。",
    ],
    answer: 4,
    explanation:
      "静電界の基本性質として、導体内部は静電誘導によって自由電子が移動し、内部の電界は必ずゼロになる(導体表面には電荷が分布し、そこでの電界はゼロではない)。したがって「導体内部の電界の強さが導体表面の電界の強さに等しい」という記述は誤り。正解は (5)。",
  },
  {
    genre: "electrostatics",
    yearLabel: "令和5年度上期 問1(過去問)",
    statement:
      "電極板面積と電極板間隔が共に$S$[m²]と$d$[m]で、一方は比誘電率が$\\varepsilon_{r1}$の誘電体からなる平行平板コンデンサ$C_1$と、他方は比誘電率が$\\varepsilon_{r2}$の誘電体からなる平行平板コンデンサ$C_2$がある。これらを図のように並列に接続し、端子A、B間に直流電圧$V_0$[V]を加えた。コンデンサ$C_1$の電極板間の電界の強さを$E_1$[V/m]、電束密度を$D_1$[C/m²]、コンデンサ$C_2$の電極板間の電界の強さを$E_2$[V/m]、電束密度を$D_2$[C/m²]とする。$E_1$と$E_2$の組合せ、$D_1$と$D_2$の組合せ、蓄えられる電荷$Q_1$と$Q_2$の組合せとして、正しいものは次のうちどれか。($\\varepsilon_0$は真空の誘電率とする)",
    diagram: { src: "assets/r5f-q1-diagram.png", alt: "比誘電率εr1・εr2の平行平板コンデンサC1・C2を並列接続し電圧V0を加えた回路" },
    choices: [
      "$E_1=\\dfrac{\\varepsilon_{r1}}{d}V_0$, $E_2=\\dfrac{\\varepsilon_{r2}}{d}V_0$ / $D_1=\\dfrac{\\varepsilon_{r1}}{d}SV_0$, $D_2=\\dfrac{\\varepsilon_{r2}}{d}SV_0$ / $Q_1=\\dfrac{\\varepsilon_0\\varepsilon_{r1}}{d}SV_0$, $Q_2=\\dfrac{\\varepsilon_0\\varepsilon_{r2}}{d}SV_0$",
      "$E_1=\\dfrac{\\varepsilon_{r1}}{d}V_0$, $E_2=\\dfrac{\\varepsilon_{r2}}{d}V_0$ / $D_1=\\dfrac{\\varepsilon_0\\varepsilon_{r1}}{d}V_0$, $D_2=\\dfrac{\\varepsilon_0\\varepsilon_{r2}}{d}V_0$ / $Q_1=\\dfrac{\\varepsilon_0\\varepsilon_{r1}}{d}SV_0$, $Q_2=\\dfrac{\\varepsilon_0\\varepsilon_{r2}}{d}SV_0$",
      "$E_1=\\dfrac{V_0}{d}$, $E_2=\\dfrac{V_0}{d}$ / $D_1=\\dfrac{\\varepsilon_0\\varepsilon_{r1}}{d}SV_0$, $D_2=\\dfrac{\\varepsilon_0\\varepsilon_{r2}}{d}SV_0$ / $Q_1=\\dfrac{\\varepsilon_0\\varepsilon_{r1}}{d}V_0$, $Q_2=\\dfrac{\\varepsilon_0\\varepsilon_{r2}}{d}V_0$",
      "$E_1=\\dfrac{V_0}{d}$, $E_2=\\dfrac{V_0}{d}$ / $D_1=\\dfrac{\\varepsilon_0\\varepsilon_{r1}}{d}V_0$, $D_2=\\dfrac{\\varepsilon_0\\varepsilon_{r2}}{d}V_0$ / $Q_1=\\dfrac{\\varepsilon_0\\varepsilon_{r1}}{d}SV_0$, $Q_2=\\dfrac{\\varepsilon_0\\varepsilon_{r2}}{d}SV_0$",
      "$E_1=\\dfrac{\\varepsilon_0\\varepsilon_{r1}}{d}SV_0$, $E_2=\\dfrac{\\varepsilon_0\\varepsilon_{r2}}{d}SV_0$ / $D_1=\\dfrac{\\varepsilon_0\\varepsilon_{r1}}{d}V_0$, $D_2=\\dfrac{\\varepsilon_0\\varepsilon_{r2}}{d}V_0$ / $Q_1=\\dfrac{\\varepsilon_0}{d}SV_0$, $Q_2=\\dfrac{\\varepsilon_0}{d}SV_0$",
    ],
    answer: 3,
    explanation:
      "並列接続なので両コンデンサには同じ電圧$V_0$が加わり、極板間隔も共に$d$なので、電界の強さは誘電率によらず $E_1=E_2=\\dfrac{V_0}{d}$ となる(電界は電圧と距離だけで決まる)。\n" +
      "電束密度は $D=\\varepsilon_0\\varepsilon_r\\times E$ なので、$D_1=\\varepsilon_0\\varepsilon_{r1}\\times\\dfrac{V_0}{d}$、$D_2=\\varepsilon_0\\varepsilon_{r2}\\times\\dfrac{V_0}{d}$。\n" +
      "静電容量は $C=\\dfrac{\\varepsilon_0\\varepsilon_r S}{d}$ なので、蓄えられる電荷は $Q=CV_0=\\dfrac{\\varepsilon_0\\varepsilon_r SV_0}{d}$ となり、$Q_1=\\dfrac{\\varepsilon_0\\varepsilon_{r1}SV_0}{d}$、$Q_2=\\dfrac{\\varepsilon_0\\varepsilon_{r2}SV_0}{d}$。\n" +
      "この3つの組合せに一致するのは (4)。",
  },

];
