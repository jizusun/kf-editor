var popupTPLs = function() {
    var f = ["pm", "infty", "speci-equal", "ne", "sim", "times", "div", "speci-exclamation", "propto", "speci-lessthan", "fuck", "speci-greater", "gg", "le", "ge", "mp", "cong", "approx", "equiv", "forall", "fuck", "partial", "fuck", "fuck", "fuck", "cup", "cap", "emptyset", "speci-percent", "speci-circ", "fuck", "fuck", "Delta", "nabla", "exists", "fuck", "in", "ni", "leftarrow", "uparrow", "rightarrow", "downarrow", "leftrightarrow", "therefore", "speci-plus", "speci-minus", "neg", "alpha", "beta", "gamma", "delta", "varepsilon", "epsilon", "theta", "vartheta", "mu", "pi", "rho", "sigma", "tau", "varphi", "omega", "ast", "bullet", "vdots", "cdots", "ddots", "fuck", "aleph"];
    var c = {
        fraction: [{
            title: "\u5206\u6570",
            latexs: [{
                text: "\\frac{}{}"
            }, {
                text: "^{}/_{}"
            }],
            indexNum: 0
        }, {
            title: "\u5e38\u7528\u5206\u6570",
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
            title: "\u4e0b\u6807\u548c\u4e0a\u6807",
            latexs: [{
                text: "x^{}"
            }, {
                text: "x_{}"
            }, {
                text: "x^{}_{}"
            }],
            indexNum: 2
        }, {
            title: "\u5e38\u7528\u7684\u4e0b\u6807\u548c\u4e0a\u6807",
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
            title: "\u6839\u5f0f",
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
            title: "\u5e38\u7528\u6839\u5f0f",
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
            title: "\u79ef\u5206",
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
            title: "\u56f4\u9053\u79ef\u5206",
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
            title: "\u5fae\u5206",
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
            title: "\u6c42\u548c",
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
            title: "\u4e58\u79ef\u548c\u526f\u79ef",
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
            title: "\u5e76\u96c6\u548c\u4ea4\u96c6",
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
            title: "\u5176\u4ed6\u5927\u578b\u8fd0\u7b97\u7b26",
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
            title: "\u5e38\u7528\u5927\u578b\u8fd0\u7b97\u7b26",
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
                text: "\\bigcup_{n=1}^m\\left(X_n\\cap Y_n\\right)",
                width: "130px",
                bposl: "-402px"
            }],
            indexNum: 13
        }],
        brackets: [{
            title: "\u65b9\u62ec\u53f7",
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
            title: "\u5e26\u5206\u5272\u7b26\u7684\u65b9\u62ec\u53f7",
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
            title: "\u5355\u65b9\u62ec\u53f7",
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
            title: "\u4e8b\u4f8b\u548c\u5806\u6808",
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
            title: "\u5e38\u7528\u65b9\u62ec\u53f7",
            latexs: [{
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
            title: "\u4e09\u89d2\u51fd\u6570",
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
            title: "\u53cd\u51fd\u6570",
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
            title: "\u53cc\u66f2\u51fd\u6570",
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
            title: "\u53cd\u53cc\u66f2\u51fd\u6570",
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
            title: "\u5e38\u7528\u51fd\u6570",
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
            title: "\u5bfc\u6570\u7b26\u53f7",
            latexs: [{
                text: "\\dot{}",
                width: "42px",
                bposl: "-1px",
                noVisual: true
            }, {
                text: "\\ddot{}",
                width: "42px",
                bposl: "-57px",
                noVisual: true
            }, {
                text: "\\dddot{}",
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
                text: "\\acute{}",
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
                text: "\\bar{}",
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
            title: "\u9876\u7ebf\u548c\u5e95\u7ebf",
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
            title: "\u5e38\u7528\u7684\u5bfc\u6570\u5bf9\u8c61",
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
            title: "\u51fd\u6570",
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
            title: "\u5e38\u7528\u51fd\u6570",
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
            title: "\u57fa\u672c\u8fd0\u7b97\u7b26",
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
                text: "\\overset{\\underset{\\mathrm{\\Delta}}{}}{=}",
                width: "42px",
                bposl: "-338px",
                noVisual: true
            }],
            intervalH: 72,
            indexNum: 3,
            bimg: "/static/editor/img/formula-symbol-all-72.png"
        }, {
            title: "\u8fd0\u7b97\u7b26\u7ed3\u6784",
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
            title: "\u5e38\u7528\u8fd0\u7b97\u7b26\u7ed3\u6784",
            latexs: [{
                text: "\\overset{yields}{\\rightarrow}",
                width: "80px",
                bposl: "-3px",
                noVisual: true
            }, {
                text: "\\overset{\\Delta}{\\rightarrow}",
                width: "42px",
                bposl: "-105px",
                noVisual: true
            }],
            intervalH: 72,
            indexNum: 5,
            bimg: "/static/editor/img/formula-symbol-all-72.png"
        }],
        matrix: [{
            title: "\u7a7a\u77e9\u9635",
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
            title: "\u70b9",
            latexs: [{
                text: "\\cdots"
            }, {
                text: "\\ldots"
            }, {
                text: "\\vdots"
            }, {
                text: "\\ddots"
            }],
            indexNum: 27
        }, {
            title: "\u5355\u4f4d\u77e9\u9635",
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
            title: "\u62ec\u53f7\u77e9\u9635",
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
            title: "\u7a00\u758f\u77e9\u9635",
            latexs: [{
                text: "\\begin{pmatrix}\n  & \\cdots &   \\\\ \n  \\vdots & \\ddots & \\vdots \\\\ \n  & \\cdots &  \n\\end{pmatrix}",
                width: "130px",
                bposl: "-9px",
                noVisual: true
            }, {
                text: "\\begin{bmatrix}\n  & \\cdots &   \\\\ \n  \\vdots & \\ddots & \\vdots \\\\ \n  & \\cdots &  \n\\end{bmatrix}",
                width: "130px",
                bposl: "-170px",
                noVisual: true
            }],
            indexNum: 30
        }]
    };
    var b = {};

    function g(m) {
        var n = c[m];
        if (!n) {
            return
        }
        var o = ["<div class='struct-pupop'>"];
        var k;
        for (var j = 0, h = n.length; j < h; j++) {
            k = n[j];
            o.push("<div><h5>" + k.title + "</h5><ul>");
            o.push(a(k));
            o.push("</ul>");
            o.push("</div>")
        }
        o.push("</div>");
        b[m] = o.join("")
    }

    function a(k) {
        var h = [];
        for (var i = 0; i < k.latexs.length; i++) {
            if (k.latexs[i]["text"] != "hehe") {
                if (k.bimg) {
                    var l = k.intervalH != undefined ? (k.intervalH * k.indexNum) + "px" : "0";
                    h.push("<li style='background-image:url(" + k.bimg + ");background-position:" + k.latexs[i]["bposl"] + " -" + l + ";'><a href='javascript:void(0)' style='width:" + k.latexs[i]["width"] + "' href='' data-latex='" + k.latexs[i]["text"] + "' title='" + k.latexs[i]["text"] + "'></a>")
                } else {
                    if (k.latexs[i]["width"]) {
                        h.push("<li style='background-position:" + k.latexs[i]["bposl"] + " -" + (96 * k.indexNum + 13) + "px;'><a href='javascript:void(0)' style='width:" + k.latexs[i]["width"] + "' href='' data-latex='" + k.latexs[i]["text"] + "' title='" + k.latexs[i]["text"] + "'></a>")
                    } else {
                        h.push("<li style='background-position: -" + (4 + i * 80) + "px -" + (96 * k.indexNum + 8) + "px;'><a href='javascript:void(0)' href='' data-latex='" + k.latexs[i]["text"] + "' title='" + k.latexs[i]["text"] + "'></a>")
                    }
                }
                k.latexs[i]["noVisual"] && h.push("<span class='disabledLatex'></span>");
                h.push("</li>")
            }
        }
        return h.join("")
    }

    function e() {
        var k = [];
        for (var j = 0, h = f.length; j < h; j++) {
            if (f[j] != "fuck") {
                k.push("<li><div data-latex='" + f[j] + "' style='background-position:-" + j * 30 + "px 0'></div></li>")
            }
        }
        return k.join("")
    }

    function d() {
        var j = [];
        j.push("<h5>\u57fa\u7840\u6570\u5b66</h5>");
        j.push("<ul>");
        for (var k = 0, h = f.length; k < h; k++) {
            if (f[k] != "fuck") {
                j.push("<li><div data-latex='" + f[k] + "' style='background-position:-" + k * 30 + "px 0'></div></li>")
            }
        }
        j.push("</ul>");
        return j.join("")
    }
    return {
        getTpl: function(h) {
            if (!b[h]) {
                g(h)
            }
            return b[h] || ""
        },
        getsymHtml: e,
        getPupopHtm: d
    }
}();
