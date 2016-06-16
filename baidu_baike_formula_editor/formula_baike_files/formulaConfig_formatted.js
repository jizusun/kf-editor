    var c = {
        fraction: [{
            title: "分数",
            latexs: [{
                text: "\\frac{}{}"
            }, {
                text: "^{}/_{}"
            }],
            indexNum: 0
        }, {
            title: "常用分数",
            latexs: [{
                text: "\\frac{dy}{dx}"
            }, {
                text: "\\frac{ \\Delta y}{ \\Delta x}"
            }, {
                text: "\\frac{\\partial y}{\\partial x}"
            }, {
                text: "\\frac{\\delta y}{\\delta x}"
            }, {
                text: "\\frac{\\pi}{2}"
            }],
            indexNum: 1
        }],
        upplower: [{
            title: "下标和上标",
            latexs: [{
                text: "x^{}"
            }, {
                text: "x_{}"
            }, {
                text: "x^{}_{}"
            }],
            indexNum: 2
        }, {
            title: "常用的下标和上标",
            latexs: [{
                text: "x_{y^2}"
            }, {
                text: "e^{-iwt}"
            }, {
                text: "x^{2}"
            }],
            indexNum: 3
        }],
        radical: [{
            title: "根式",
            latexs: [{
                text: "{/}sqrt{}"
            }, {
                text: "{/}sqrt[]{}"
            }, {
                text: "{/}sqrt[2]{}"
            }, {
                text: "{/}sqrt[3]{}"
            }],
            indexNum: 4
        }, {
            title: "常用根式",
            latexs: [{
                text: "\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}",
                width: "130px",
                bposl: "-10px"
            }, {
                text: "\\sqrt{a^2+b^2}",
                width: "130px",
                bposl: "-170px"
            }],
            indexNum: 5
        }],
        integral: [{
            title: "积分",
            latexs: [{
                text: "\\int"
            }, {
                text: "\\int_{}^{}"
            }, {
                text: "\\int\\limits_{}^{}",
                noVisual: true
            }, {
                text: "\\iint",
                noVisual: true
            }, {
                text: "\\iint_{}^{}",
                noVisual: true
            }, {
                text: "\\iint\\limits_{}^{}",
                noVisual: true
            }, {
                text: "\\iiint",
                noVisual: true
            }, {
                text: "\\iiint_{}^{}",
                noVisual: true
            }, {
                text: "\\iiint\\limits_{}^{}",
                noVisual: true
            }],
            indexNum: 6
        }, {
            title: "围道积分",
            latexs: [{
                text: "{/}oint"
            }, {
                text: "{/}oint_{}^{}"
            }, {
                text: "\\oint\\limits_{}^{}",
                noVisual: true
            }, {
                text: "hehe"
            }, {
                text: "hehe"
            }, {
                text: "hehe"
            }, {
                text: "hehe"
            }, {
                text: "hehe"
            }, {
                text: "hehe"
            }, {
                text: "hehe"
            }],
            indexNum: 7
        }, {
            title: "微分",
            latexs: [{
                text: "dx"
            }, {
                text: "dy"
            }, {
                text: "d{/}theta"
            }],
            indexNum: 8
        }],
        boperator: [{
            title: "求和",
            latexs: [{
                text: "\\sum"
            }, {
                text: "\\sum^{}_{}"
            }, {
                text: "\\sum\\nolimits^{}_{}",
                noVisual: true
            }, {
                text: "\\sum_{}"
            }, {
                text: "\\sum\\nolimits_{}",
                noVisual: true
            }],
            indexNum: 9
        }, {
            title: "乘积和副积",
            latexs: [{
                text: "\\prod"
            }, {
                text: "\\prod_{}^{}"
            }, {
                text: "\\prod\\nolimits_{}^{}",
                noVisual: true
            }, {
                text: "\\prod_{}"
            }, {
                text: "\\prod\\nolimits_{}",
                noVisual: true
            }, {
                text: "\\coprod"
            }, {
                text: "\\coprod_{}^{}"
            }, {
                text: "\\coprod\\nolimits_{}^{}",
                noVisual: true
            }, {
                text: "\\coprod_{}"
            }, {
                text: "\\coprod\\nolimits_{}",
                noVisual: true
            }],
            indexNum: 10
        }, {
            title: "并集和交集",
            latexs: [{
                text: "\\bigcup"
            }, {
                text: "\\bigcup_{}^{}"
            }, {
                text: "\\bigcup\\nolimits_{}^{}",
                noVisual: true
            }, {
                text: "\\bigcup_{}"
            }, {
                text: "\\bigcup\\nolimits_{}",
                noVisual: true
            }, {
                text: "\\bigcap"
            }, {
                text: "\\bigcap_{}^{}"
            }, {
                text: "\\bigcap\\nolimits_{}^{}",
                noVisual: true
            }, {
                text: "\\bigcap_{}"
            }, {
                text: "\\bigcap\\nolimits_{}",
                noVisual: true
            }],
            indexNum: 11
        }, {
            title: "其他大型运算符",
            latexs: [{
                text: "\\bigvee"
            }, {
                text: "\\bigvee_{}^{}"
            }, {
                text: "\\bigvee\\nolimits_{}^{}",
                noVisual: true
            }, {
                text: "\\bigvee_{}"
            }, {
                text: "\\bigvee\\nolimits_{}",
                noVisual: true
            }, {
                text: "\\bigwedge"
            }, {
                text: "\\bigwedge_{}^{}"
            }, {
                text: "\\bigwedge\\nolimits_{}^{}",
                noVisual: true
            }, {
                text: "\\bigwedge_{}"
            }, {
                text: "\\bigwedge\\nolimits_{}",
                noVisual: true
            }],
            indexNum: 12
        }, {
            title: "常用大型运算符",
            latexs: [{
                text: "\\sum_k\\left( ^{n}_{k}\\right)",
                width: "59px",
                bposl: "-4px"
            }, {
                text: "\\sum^n_{i=0}{}",
                width: "59px",
                bposl: "-84px "
            }, {
                text: "\\sum_{^{0\\le i\\le m}_{0<j<n}}P\\left(i,j\\right)",
                width: "130px",
                bposl: "-164px"
            }, {
                text: "\\prod_{k=1}^nA_k",
                width: "59px",
                bposl: "-321px"
            }, {
                text: "\\bigcup_{n=1}^m\\left(X_n\Êp Y_n\\right)",
                width: "130px",
                bposl: "-402px"
            }],
            indexNum: 13
        }],
        brackets: [{
            title: "方括号",
            latexs: [{
                text: "\\left ( {} \\right )"
            }, {
                text: "\\left [ {} \\right ]"
            }, {
                text: "\\left \\{ {} \\right \\}"
            }, {
                text: "\\left \\langle {} \\right \\rangle",
                noVisual: true
            }, {
                text: "\\lfloor {} \\rfloor"
            }, {
                text: "\\lceil {} \\rceil"
            }, {
                text: "\\left | {} \\right |"
            }, {
                text: "\\left \\| {} \\right \\|",
                noVisual: true
            }, {
                text: "[["
            }, {
                text: "]]"
            }, {
                text: "]["
            }, {
                text: "hehe"
            }],
            indexNum: 14
        }, {
            title: "带分割符的方括号",
            latexs: [{
                text: "\\left ( | \\right )"
            }, {
                text: "\\left \\{ | \\right \\}"
            }, {
                text: "\\left \\langle | \\right \\rangle",
                noVisual: true
            }, {
                text: "\\left \\langle {} | {} | {} \\right \\rangle",
                noVisual: true
            }],
            indexNum: 15
        }, {
            title: "单方括号",
            latexs: [{
                text: "\\left ( \\right.",
                noVisual: true
            }, {
                text: "\\left. \\right )",
                noVisual: true
            }, {
                text: "\\left [ {} \\right.",
                noVisual: true
            }, {
                text: "\\left. {} \\right]",
                noVisual: true
            }, {
                text: "\\left \\{  \\right.",
                noVisual: true
            }, {
                text: "\\left.  \\right \\}",
                noVisual: true
            }, {
                text: "\\langle",
                noVisual: true
            }, {
                text: "\\rangle",
                noVisual: true
            }, {
                text: "\\lfloor"
            }, {
                text: "\\rfloor"
            }, {
                text: "\\lceil"
            }, {
                text: "\\rceil"
            }, {
                text: "\\left |{}  \\right.",
                noVisual: true
            }, {
                text: "\\left. {}\\right |",
                noVisual: true
            }, {
                text: "\\left \\|{}  \\right.",
                noVisual: true
            }, {
                text: "\\left. {} \\right \\|",
                noVisual: true
            }, {
                text: "hehe"
            }, {
                text: "hehe"
            }],
            indexNum: 16
        }, {
            title: "事例和堆栈",
            latexs: [{
                text: "\\left \\{ _{}^{} \\right.",
                noVisual: true
            }, {
                text: "hehe"
            }, {
                text: "\\ ^{}_{}"
            }, {
                text: "\\binom{}{}"
            }],
            indexNum: 17
        }, {
            title: "常用方括号",
            latexs: [{
                // 分段函数，不支持
                text: "f(x) = \\left\\{ \\begin{array}{r@{\\quad\\quad}1}-x & x<0 \\\\ x & x>0 \\ \\end{array} \\right. ",
                width: "140px",
                bposl: "-4px",
                noVisual: true
            }, {
                text: "(^{n}_{k})",
                width: "59px",
                bposl: "-166px"
            }, {
                text: "\\langle^{n}_{k}\\rangle",
                width: "59px",
                bposl: "-245px",
                noVisual: true
            }],
            indexNum: 18
        }],
        fun: [{
            title: "三角函数",
            latexs: [{
                text: "\\sin"
            }, {
                text: "\\cos"
            }, {
                text: "\\tan"
            }, {
                text: "\\csc"
            }, {
                text: "\\sec"
            }, {
                text: "\\cot"
            }],
            indexNum: 19
        }, {
            title: "反函数",
            latexs: [{
                text: "\\sin^{-1}"
            }, {
                text: "\\cos^{-1}"
            }, {
                text: "\\tan^{-1}"
            }, {
                text: "\\csc^{-1}"
            }, {
                text: "\\sec^{-1}"
            }, {
                text: "\\cot^{-1}"
            }],
            indexNum: 20
        }, {
            title: "双曲函数",
            latexs: [{
                text: "\\sinh"
            }, {
                text: "\\cosh"
            }, {
                text: "\\tanh"
            }, {
                text: "csch"
            }, {
                text: "sech"
            }, {
                text: "\\coth"
            }],
            indexNum: 21
        }, {
            title: "反双曲函数",
            latexs: [{
                text: "\\sinh^{-1}"
            }, {
                text: "\\cosh^{-1}"
            }, {
                text: "\\tanh^{-1}"
            }, {
                text: "csch^{-1}"
            }, {
                text: "sech^{-1}"
            }, {
                text: "\\coth^{-1}"
            }],
            indexNum: 22
        }, {
            title: "常用函数",
            latexs: [{
                text: "\\sin\\theta",
                width: "59px",
                bposl: "-4px"
            }, {
                text: "\\cos2x",
                width: "59px",
                bposl: "-82px"
            }, {
                text: "\\tan\\theta=\\frac{\\sin\\theta}{\\cos\\theta}",
                width: "130px",
                bposl: "-170px"
            }],
            indexNum: 23
        }],
        derivative: [{
            title: "导数符号",
            latexs: [{
                text: "\\dot{}",
                width: "42px",
                bposl: "-1px",
                noVisual: true
            }, {
                text: "\Ýot{}",
                width: "42px",
                bposl: "-57px",
                noVisual: true
            }, {
                text: "\ෝot{}",
                width: "42px",
                bposl: "-114px",
                noVisual: true
            }, {
                text: "\\hat{}",
                width: "42px",
                bposl: "-171px",
                noVisual: true
            }, {
                text: "\\check{}",
                width: "42px",
                bposl: "-226px",
                noVisual: true
            }, {
                text: "\¬ute{}",
                width: "42px",
                bposl: "-281px",
                noVisual: true
            }, {
                text: "\\grave{}",
                width: "42px",
                bposl: "-338px",
                noVisual: true
            }, {
                text: "\\breve{}",
                width: "42px",
                bposl: "-393px",
                noVisual: true
            }, {
                text: "\\tilde{}",
                width: "42px",
                bposl: "-450px",
                noVisual: true
            }, {
                text: "\ºr{}",
                width: "42px",
                bposl: "-505px",
                noVisual: true
            }, {
                text: "hehe"
            }, {
                text: "hehe"
            }, {
                text: "hehe"
            }, {
                text: "hehe"
            }, {
                text: "hehe"
            }, {
                text: "hehe"
            }, {
                text: "\\vec{}",
                width: "42px",
                bposl: "-1065px",
                noVisual: true
            }],
            bimgInterval: 50,
            bimg: "/static/editor/img/derivative-1.png"
        }, {
            title: "顶线和底线",
            latexs: [{
                text: "\\overline{}",
                width: "42px",
                bposl: "-1px"
            }, {
                text: "\\underline{}",
                width: "42px",
                bposl: "-57px"
            }],
            intervalH: 72,
            indexNum: 1,
            bimg: "/static/editor/img/formula-symbol-all-72.png"
        }, {
            title: "常用的导数对象",
            latexs: [{
                text: "\\overline{A}",
                width: "42px",
                bposl: "-1px"
            }, {
                text: "\\overline{ABC}",
                width: "42px",
                bposl: "-57px"
            }, {
                text: "\\overline{x \\oplus y}",
                width: "90px",
                bposl: "-114px"
            }],
            intervalH: 72,
            indexNum: 2,
            bimg: "/static/editor/img/formula-symbol-all-72.png"
        }],
        limit: [{
            title: "函数",
            latexs: [{
                text: "\\log_{}"
            }, {
                text: "\\log"
            }, {
                text: "\\lim_{}"
            }, {
                text: "\\min_{}"
            }, {
                text: "\\max_{}"
            }, {
                text: "\\ln"
            }],
            indexNum: 24
        }, {
            title: "常用函数",
            latexs: [{
                text: "\\lim_{n\\rightarrow \\infty} \\left ( {1+ \\frac{1}{n}} \\right )^{n}",
                width: "90px",
                bposl: "-12px"
            }, {
                text: "\\max_{0 \\le x \\le 1}xe^{-x^2}",
                width: "90px",
                bposl: "-130px"
            }],
            indexNum: 25
        }],
        operator: [{
            title: "基本运算符",
            latexs: [{
                text: ":=",
                width: "42px",
                bposl: "-1px"
            }, {
                text: "==",
                width: "42px",
                bposl: "-57px"
            }, {
                text: "+=",
                width: "42px",
                bposl: "-113px"
            }, {
                text: "-=",
                width: "42px",
                bposl: "-170px"
            }, {
                text: "\\overset{\\underset{\\mathrm{def}}{}}{=}",
                width: "42px",
                bposl: "-226px",
                noVisual: true
            }, {
                text: "\\overset{\\underset{\\mathrm{m}}{}}{=}",
                width: "42px",
                bposl: "-282px",
                noVisual: true
            }, {
                text: "\\overset{\\underset{\\mathrm{\Þlta}}{}}{=}",
                width: "42px",
                bposl: "-338px",
                noVisual: true
            }],
            intervalH: 72,
            indexNum: 3,
            bimg: "/static/editor/img/formula-symbol-all-72.png"
        }, {
            title: "运算符结构",
            latexs: [{
                text: "\\underset{}{\\leftarrow}",
                width: "42px",
                bposl: "-1px",
                noVisual: true
            }, {
                text: "\\underset{}{\\rightarrow}",
                width: "42px",
                bposl: "-58px",
                noVisual: true
            }, {
                text: "\\overset{}{\\leftarrow}",
                width: "42px",
                bposl: "-113px",
                noVisual: true
            }, {
                text: "\\overset{}{\\rightarrow}",
                width: "42px",
                bposl: "-170px",
                noVisual: true
            }, {
                text: "\\underset{}{\\Leftarrow}",
                width: "42px",
                bposl: "-225px",
                noVisual: true
            }, {
                text: "\\underset{}{\\Rightarrow}",
                width: "42px",
                bposl: "-282px",
                noVisual: true
            }, {
                text: "\\overset{}{\\Leftarrow}",
                width: "42px",
                bposl: "-338px",
                noVisual: true
            }, {
                text: "\\overset{}{\\Rightarrow}",
                width: "42px",
                bposl: "-394px",
                noVisual: true
            }, {
                text: "\\underset{}{\\leftrightarrow }",
                width: "42px",
                bposl: "-449px",
                noVisual: true
            }, {
                text: "\\overset{}{\\leftrightarrow }",
                width: "42px",
                bposl: "-505px",
                noVisual: true
            }, {
                text: "\\underset{}{\\Leftrightarrow }",
                width: "42px",
                bposl: "-561px",
                noVisual: true
            }, {
                text: "\\overset{}{\\Leftrightarrow }",
                width: "42px",
                bposl: "-617px",
                noVisual: true
            }],
            intervalH: 72,
            indexNum: 4,
            bimg: "/static/editor/img/formula-symbol-all-72.png"
        }, {
            title: "常用运算符结构",
            latexs: [{
                text: "\\overset{yields}{\\rightarrow}",
                width: "80px",
                bposl: "-3px",
                noVisual: true
            }, {
                text: "\\overset{\Þlta}{\\rightarrow}",
                width: "42px",
                bposl: "-105px",
                noVisual: true
            }],
            intervalH: 72,
            indexNum: 5,
            bimg: "/static/editor/img/formula-symbol-all-72.png"
        }],
        matrix: [{
            title: "空矩阵",
            latexs: [{
                text: "\\begin{matrix}\n  &  \n\\end{matrix}",
                noVisual: true
            }, {
                text: "\\begin{matrix}\n  \\\\ \n \n\\end{matrix}",
                noVisual: true
            }, {
                text: "\\begin{matrix}\n &  & \n\\end{matrix}",
                noVisual: true
            }, {
                text: "\\begin{matrix}\n \\\\ \n \\\\ \n \n\\end{matrix}",
                noVisual: true
            }, {
                text: "\\begin{matrix}\n & \\\\ \n  &  \n\\end{matrix}",
                noVisual: true
            }, {
                text: "\\begin{matrix}\n & & \\\\\n  & &  \n\\end{matrix}",
                noVisual: true
            }, {
                text: "\\begin{matrix}\n & \\\\\n  & \\\\\n &  \n\\end{matrix}",
                noVisual: true
            }, {
                text: "\\begin{matrix}\n & & \\\\\n  &  & \\\\\n &  &  \n\\end{matrix}",
                noVisual: true
            }],
            indexNum: 26
        }, {
            title: "点",
            latexs: [{
                text: "\Íots"
            }, {
                text: "\\ldots"
            }, {
                text: "\\vdots"
            }, {
                text: "\Ýots"
            }],
            indexNum: 27
        }, {
            title: "单位矩阵",
            latexs: [{
                text: "\\begin{matrix}\n 1 & 0 \\\\\n 0 & 1 \n\\end{matrix}",
                noVisual: true
            }, {
                text: "\\begin{matrix}\n 1 &  \\\\\n  & 1 \n\\end{matrix}",
                noVisual: true
            }, {
                text: "\\begin{matrix}\n 1 & 0 & 0 \\\\\n 0  & 1 & 0 \\\\\n 0 & 0 & 1 \n\\end{matrix}",
                noVisual: true
            }, {
                text: "\\begin{matrix}\n 1 &  &  \\\\\n   & 1 &  \\\\\n  &  & 1 \n\\end{matrix}",
                noVisual: true
            }],
            indexNum: 28
        }, {
            title: "括号矩阵",
            latexs: [{
                text: "\\begin{pmatrix}\n & \\\\\n & \n\\end{pmatrix}",
                noVisual: true
            }, {
                text: "\\begin{bmatrix}\n & \\\\\n & \n\\end{bmatrix}",
                noVisual: true
            }, {
                text: "\\begin{vmatrix}\n & \\\\\n & \n\\end{vmatrix}",
                noVisual: true
            }, {
                text: "\\begin{Vmatrix}\n & \\\\\n & \n\\end{Vmatrix}",
                noVisual: true
            }],
            indexNum: 29
        }, {
            title: "稀疏矩阵",
            latexs: [{
                text: "\\begin{pmatrix}\n  & \Íots &   \\\\ \n  \\vdots & \Ýots & \\vdots \\\\ \n  & \Íots &  \n\\end{pmatrix}",
                width: "130px",
                bposl: "-9px",
                noVisual: true
            }, {
                text: "\\begin{bmatrix}\n  & \Íots &   \\\\ \n  \\vdots & \Ýots & \\vdots \\\\ \n  & \Íots &  \n\\end{bmatrix}",
                width: "130px",
                bposl: "-170px",
                noVisual: true
            }],
            indexNum: 30
        }]
    };