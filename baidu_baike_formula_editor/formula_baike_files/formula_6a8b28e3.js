var editorDom = parent.UE.dom,
    formula, formulaS;
var Formula = function(a) {
    this.init();
    if (a) {
        this.insert(a)
    }
};
Formula.prototype = {
    init: function() {
        this.initEditArea()
    },
    rerender: function(a) {
        $("#editwrapper").focus().mathquill("latex", a)
    },
    initEditArea: function() {
        $("#editwrapper").html("").mathquill("editable")
    },
    insert: function(a) {
        if (typeof(a) == "string" && a != "") {
            $("#editwrapper").focus().mathquill("write", a.replace("{/}", "\\"))
        }
    },
    getSource: function() {
        return $("#editwrapper").mathquill("latex")
    }
};
var FormulaToolbar = {
    currentStruct: null,
    init: function() {
        FormulaToolbar.bindEvent();
        FormulaToolbar.createSymbolPopup();
        FormulaToolbar.createSymbol()
    },
    bindEvent: function() {
        var a = this;
        $("#structure-list li").on("mouseover", function() {
            var b = $(this);
            if (!b.hasClass("struct-click")) {
                $(this).addClass("struct-hover")
            }
        }).on("mouseout", function() {
            var b = $(this);
            if (!b.hasClass("struct-click") && b.hasClass("struct-hover")) {
                $(this).removeClass("struct-hover")
            }
        }).on("click", function() {
            var b = $(this);
            if (FormulaToolbar.currentStruct) {
                FormulaToolbar.currentStruct.removeClass()
            }
            b.addClass("struct-click");
            FormulaToolbar.currentStruct = b
        });
        $("#symbol-control").on("click", function(c) {
            var b = c.target || c.srcElement,
                d = b.getAttribute("data-action");
            FormulaToolbar.symbolWrap(d);
            return false
        });
        $("#structure-list").on("click", function(d) {
            var c = c = d.target || d.srcElement,
                b = c.id.split("_")[1];
            d.stopPropagation();
            formulaPup.showFormulaPopup(c, b)
        });
        $("#symbol-list").on("click", function(d) {
            var c = d.target || d.srcElement,
                b = c.getAttribute("data-latex");
            if (b) {
                b = a.dealSpecalSymbol(b);
                a.insert(b)
            }
            return false
        });
        $("#symbol-lay").on("click", function(d) {
            var c = d.target || d.srcElement,
                b = c.getAttribute("data-latex");
            if (b) {
                b = a.dealSpecalSymbol(b);
                a.insert(b)
            }
            formulaPup.hideAll();
            return false
        })
    },
    createSymbol: function() {
        $("#symbol-list").html(popupTPLs.getsymHtml())
    },
    popListener: function(c) {
        var a = this,
            b = c.target || c.srcElement;
        if (b.nodeName.toUpperCase() == "SPAN" && b.className == "disabledLatex") {
            return false
        }
        latex = b.getAttribute("data-latex");
        if (latex) {
            a.insert(latex)
        }
    },
    specialSymbol: {
        equal: "=",
        exclamation: "!",
        lessthan: "<",
        greater: ">",
        percent: "\\%",
        plus: "+",
        minus: "-",
        circ: "^\\circ"
    },
    insert: function(a) {
        a = a.replace("{/}", "\\");
        if (typeof(a) == "string" && a != "") {
            if (switchControl.getStatus()) {
                formula.insert(a)
            } else {
                formulaS.insert(a)
            }
        }
    },
    dealSpecalSymbol: function(b) {
        var a = this;
        if (!b) {
            return false
        }
        if (b.indexOf("-") != -1) {
            key = b.split("-")[1];
            b = a.specialSymbol[key]
        } else {
            b = "{/}" + b
        }
        return b
    },
    SymbolCols: 12,
    currentSymbolCols: 0,
    symbolWrap: function(a) {
        if (a == "down") {
            if (FormulaToolbar.currentSymbolCols >= FormulaToolbar.SymbolCols) {
                return false
            }
            FormulaToolbar.currentSymbolCols++;
            FormulaToolbar.symbolScroll(FormulaToolbar.currentSymbolCols * 30)
        } else {
            if (a == "up") {
                if (FormulaToolbar.currentSymbolCols <= 0) {
                    return false
                }
                FormulaToolbar.currentSymbolCols--;
                FormulaToolbar.symbolScroll(FormulaToolbar.currentSymbolCols * 30)
            } else {
                if (a == "unfold") {
                    FormulaToolbar.showSymbolPopup()
                }
            }
        }
    },
    symbolPopupinit: false,
    symbolPopup: $("#symbol-lay"),
    showSymbolPopup: function() {
        formulaPup.hideAll();
        FormulaToolbar.symbolPopup.show()
    },
    hideSymbolPopup: function() {
        FormulaToolbar.symbolPopup.hide()
    },
    createSymbolPopup: function() {
        $("#symbol-lay").html(popupTPLs.getPupopHtm())
    },
    symbolScroll: function(a) {
        var b = $("#symbol-list");
        b.stop().animate({
            scrollTop: a
        })
    },
    cancleLight: function() {
        if (FormulaToolbar.currentStruct) {
            FormulaToolbar.currentStruct.removeClass()
        }
    }
};
FormulaToolbar.init();
var formulaPup = {
    popups: {},
    currentPup: null,
    init: function(a) {
        formulaPup.createPup(a);
        formulaPup.bindEvent(a)
    },
    bindDoc: function() {
        $(document).on("click", function(a) {
            formulaPup.hideAll()
        });
        $(document).on("keydown", function(a) {
            if (a.keyCode == 9) {
                a.stopPropagation();
                a.preventDefault()
            }
        });
        $("#editwrapper").on("keydown", function(a) {
            if (a.shiftKey == false && a.keyCode == 220) {
                a.stopPropagation();
                a.preventDefault()
            }
        })
    },
    hideAll: function() {
        if (formulaPup.currentPup) {
            formulaPup.currentPup.hide()
        }
        FormulaToolbar.cancleLight();
        FormulaToolbar.hideSymbolPopup();
        formulaPup.hideTip()
    },
    createPup: function(b) {
        var c = popupTPLs.getTpl(b);
        var a = $("<div class='struct-lay'></div>").html(c).appendTo(document.body);
        formulaPup.popups[b] = a
    },
    bindEvent: function(a) {
        var b = formulaPup.popups[a];
        b.on("click", $.proxy(FormulaToolbar.popListener, FormulaToolbar));
        b.on("mouseover", function(d) {
            var c = d.target || d.srcElement;
            if (c.nodeName.toUpperCase() == "SPAN" && c.className == "disabledLatex") {
                formulaPup.showTip(c)
            } else {
                formulaPup.hideTip()
            }
        });
        b.on("mouseleave", function() {
            formulaPup.hideTip()
        })
    },
    tipDom: $("#disableTip"),
    showTip: function(a) {
        var b = $(a).offset();
        if (b.left >= 660) {
            b.left = 660
        }
        formulaPup.tipDom.css({
            left: b.left,
            top: b.top
        }).fadeIn("slow")
    },
    hideTip: function() {
        formulaPup.tipDom.stop().hide()
    },
    showFormulaPopup: function(c, b) {
        if (!formulaPup.popups[b]) {
            formulaPup.init(b)
        }
        var d = $(c).position(),
            a = $(c).height();
        if (formulaPup.currentPup) {
            formulaPup.currentPup.hide()
        }
        formulaPup.currentPup = formulaPup.popups[b];
        if (d.left > 470) {
            d.left = 470
        }
        formulaPup.hideAll();
        switchControl.updateSpeciFormula();
        formulaPup.popups[b].css("left", d.left).css("top", d.top + a).show();
        $(c).addClass("struct-click")
    }
};
formulaPup.bindDoc();
var formulaSource = function(b) {
    var a = this;
    MathJax.Hub.queue.Push(function() {
        a.init(b);
        a.showBox()
    })
};
formulaSource.prototype = {
    init: function(b) {
        var a = this;
        this.bindEvent();
        this.mathTextarea = $("#MathInput");
        this.focus();
        a.insert(b)
    },
    showBox: function() {
        $("#box").css("visibility", "visible")
    },
    getCursorPosition: function(b) {
        var a = {
            text: "",
            start: 0,
            end: 0
        };
        if (b.setSelectionRange) {
            b.focus();
            a.start = b.selectionStart;
            a.end = b.selectionEnd;
            a.text = (a.start != a.end) ? b.value.substring(a.start, a.end) : ""
        } else {
            if (document.selection) {
                b.focus();
                var c, d = document.selection.createRange(),
                    e = document.body.createTextRange();
                e.moveToElementText(b);
                a.text = d.text;
                a.bookmark = d.getBookmark();
                for (c = 0; e.compareEndPoints("StartToStart", d) < 0 && d.moveStart("character", -1) !== 0; c++) {
                    if (b.value.charAt(c) == "\r") {
                        c++
                    }
                }
                a.start = c;
                a.end = a.text.length + a.start
            }
        }
        return a
    },
    focus: function() {
        var a = this.mathTextarea[0];
        if (a.setSelectionRange) {
            a.setSelectionRange(a.value.length, a.value.length)
        } else {
            if (a.createTextRange) {
                var b = a.createTextRange();
                b.collapse(false);
                b.select()
            }
        }
    },
    textpos: {},
    mathTextarea: null,
    bindEvent: function() {
        var a = this;
        $("#MathInput").bind("keyup", function() {
            a.update()
        }).bind("blur", function() {
            a.textpos = a.getCursorPosition(this)
        }).bind("focus", function() {})
    },
    latexValue: "",
    insert: function(b) {
        var a = this;
        a.inserTextarea(b);
        a.focus();
        a.update()
    },
    inserTextarea: function(c) {
        var a = this;
        var e = a.textpos;
        var b = a.mathTextarea.val();
        if (e.start == undefined) {
            e.start = b.length
        }
        if (e.end == undefined) {
            e.end = b.length
        }
        var d = b.substring(0, e.start) + c + b.substring(e.end);
        a.mathTextarea.val(d)
    },
    timeout: null,
    delay: 150,
    updateBuffer: function() {
        if (this.timeout) {
            clearTimeout(this.timeout)
        }
        this.timeout = setTimeout(this.update, this.delay)
    },
    update: function() {
        var a = this.mathTextarea.val();
        MathJax.Hub.queue.Push(["Text", MathJax.Hub.getAllJax("MathOutput")[0], "\\displaystyle{" + a + "}"])
    },
    getSource: function() {
        return this.mathTextarea[0].value
    },
    rerender: function(a) {
        this.mathTextarea.val(a);
        this.update()
    }
};
var SwitchControl = function(a) {
    this.cfg = a;
    this.init()
};
SwitchControl.prototype = {
    init: function() {
        var a = this;
        this.bindEvent();
        if (this.cfg && this.cfg.latex) {
            if (a.filterLatex(this.cfg.latex)) {
                formula = new Formula(decodeURIComponent(this.cfg.latex));
                if (this.cfg.latex != "" && $("#editwrapper").mathquill("latex") != "") {
                    this.visual = true
                } else {
                    formulaS = new formulaSource(decodeURIComponent(this.cfg.latex));
                    a.switchUI("source");
                    this.visual = false
                }
            } else {
                formulaS = new formulaSource(decodeURIComponent(this.cfg.latex));
                a.switchUI("source");
                this.visual = false
            }
        } else {
            formula = new Formula();
            this.visual = true
        }
    },
    bindEvent: function() {
        var a = this;
        $("#visual").click($.proxy(a.toVisual, a));
        $("#source").click($.proxy(a.toSource, a))
    },
    toVisual: function() {
        if (this.visual == true) {
            return false
        }
        var b = this,
            c = formulaS.getSource();
        if (b.filterLatex(c)) {
            if (!formula) {
                formula = new Formula()
            }
            formula.rerender(c);
            var a = $("#editwrapper").mathquill("latex");
            if ((c != "" && a != "") || (c == "" && a == "")) {
                b.visual = true;
                b.updateSpeciFormula()
            } else {
                parent.bk.editor.setTip({
                    style: "z-index: 20000",
                    elemDom: document.getElementById("source"),
                    text: "\u6e90\u7801\u7f16\u8f91\u542b\u6709\u53ef\u89c6\u5316\u7f16\u8f91\u4e0d\u652f\u6301\u7684\u51fd\u6570",
                    width: 220,
                    clickshow: 2
                });
                return
            }
            b.switchUI("visual")
        } else {
            parent.bk.editor.setTip({
                style: "z-index: 20000",
                elemDom: document.getElementById("source"),
                text: "\u6e90\u7801\u7f16\u8f91\u542b\u6709\u53ef\u89c6\u5316\u7f16\u8f91\u4e0d\u652f\u6301\u7684\u51fd\u6570",
                width: 220,
                clickshow: 2
            })
        }
    },
    toSource: function() {
        if (this.visual == false) {
            return false
        }
        var a = this,
            b = $("#editwrapper").mathquill("latex");
        a.switchUI("source");
        a.visual = false;
        a.updateSpeciFormula();
        if (!formulaS) {
            formulaS = new formulaSource()
        }
        formulaS.rerender(b)
    },
    switchUI: function(a) {
        if (!a) {
            return
        }
        $(".selected").removeClass("selected");
        $("#" + a).addClass("selected");
        if (a == "visual") {
            $("#MathInput").hide();
            $("#box").hide();
            $("#editwrapper").show()
        } else {
            $("#MathInput").show();
            $("#box").show();
            $("#editwrapper").hide()
        }
    },
    updateSpeciFormula: function() {
        var a = this;
        if (a.visual) {
            a.hideSpeciFormula()
        } else {
            a.showSpeciFormula()
        }
    },
    showSpeciFormula: function() {
        $(".disabledLatex").hide()
    },
    hideSpeciFormula: function() {
        $(".disabledLatex").show()
    },
    filterLatex: function(b) {
        var a = new RegExp("(begin)|(end)|(underset)|(choose)|(overset)|(dot(?!s))|(hat)|(check)|(acute)|(grave)|(breve)|(tilde)|(bar)|(vec)|(langle)|(rangle)|(left.)|(right.)|(nolimits)|(limits)|(iint)|(iiint)", "ig");
        if (a.test(b)) {
            return false
        } else {
            return true
        }
    },
    getStatus: function() {
        return this.visual
    },
    getCurrentLatex: function() {
        var a = this;
        if (this.visual) {
            return formula.getSource()
        } else {
            return formulaS.getSource()
        }
    },
    submitFlag: false,
    getPicUrl: function() {
        var a = this;
        var b = encodeURIComponent(a.getCurrentLatex());
        if ((b == dialog.params.latex) || b == "") {
            if (b == "" && dialog.params.ele) {
                parent.baidu.dom.remove(dialog.params.ele)
            }
            return
        } else {
            if (a.submitFlag) {
                return false
            }
            a.submitFlag = true;
            $.ajax({
                type: "GET",
                url: "/wikisubmit/api/formulaupload",
                data: {
                    latex: b
                },
                success: function(e) {
                    var c = $.parseJSON(e);
                    if (c.errno == 0 && c.data["errorid"] == 0) {
                        a.updateEdit(c)
                    } else {
                        var d = parent.baidu(".bkdialog-button-label", dialog.tdialog.getFooter())[0];
                        parent.bk.editor.setTip({
                            style: "z-index: 20000",
                            elemDom: d,
                            text: "\u5185\u5bb9\u586b\u5199\u6709\u8bef\uff0c\u8bf7\u4fee\u6539\u540e\u63d0\u4ea4",
                            width: 170,
                            clickshow: 2
                        });
                        a.submitFlag = false;
                        return false
                    }
                }
            })
        }
        return false
    },
    updateEdit: function(a) {
        var b = this;
        setTimeout(function() {
            parent.bk.editor.statistic.setState("formula");
            parent.bk.editor.statistic.editFormula();
            var d = a.data["size"].split('"'),
                h = "http://imgsrc.baidu.com/baike/pic/item/" + a.data["picurls"] + ".jpg";
            var f = encodeURIComponent(b.getCurrentLatex());
            if (dialog.params.ele) {
                dialog.params.ele.src = h;
                dialog.params.ele.setAttribute("data-src", a.data["picurls"]);
                dialog.params.ele.setAttribute("picurls", a.data["picurls"]);
                dialog.params.ele.setAttribute("data-latex", f);
                dialog.params.ele.setAttribute("data-initwidth", d[3]);
                dialog.params.ele.setAttribute("data-initheight", d[7])
            } else {
                var c = editor.selection.getRange(),
                    e, g;
                if (c.collapsed) {
                    e = editorDom.domUtils.findParent(c.startContainer, function(i) {
                        if (i.nodeType == 1 && editorDom.dtd.$BLOCK[i.nodeName]) {
                            return true
                        }
                    }, true)
                }
                if (editorDom.domUtils.isEmptyBlock(e)) {
                    g = "blockcenter"
                } else {
                    g = "inline"
                }
                editor.execCommand("insertImage", {
                    layout: g,
                    picurls: a.data["picurls"],
                    src: h,
                    width: d[3],
                    height: d[7],
                    "data-type": "math",
                    "data-latex": f
                })
            }
            parent.bk.editor.statistic.logFeatureStartUse();
            dialog.close();
            b.submitFlag = false
        }, 500)
    }
};
var switchControl = new SwitchControl(dialog.params);
dialog.onok = $.proxy(switchControl.getPicUrl, switchControl);
