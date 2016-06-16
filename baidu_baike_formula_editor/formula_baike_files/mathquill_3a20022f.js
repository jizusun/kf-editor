(function() {
    var B = window.jQuery,
        u, av, J = "mathquill-command-id",
        k = "mathquill-block-id",
        aq = Math.min,
        C = Math.max;
    var Q = [].slice;

    function al() {}

    function e(L) {
        var P = Q.call(arguments, 1);
        return function() {
            return L.apply(this, P) } }

    function ai(P, L) {
        if (!L) {
            throw new Error("prayer failed: " + P) } }
    var i = (function(R, aw, aA) {
        function L(P) {
            return typeof P === "object" }

        function az(P) {
            return typeof P === "function" }

        function ay() {}

        function ax(aF, aB) {
            if (aB === aA) { aB = aF;
                aF = Object }

            function aG() {
                var aH = new P;
                if (az(aH.init)) { aH.init.apply(aH, arguments) }
                return aH }

            function P() {}
            aG.Bare = P;
            var aE = ay[R] = aF[R];
            var aD = P[R] = aG[R] = new ay;
            var aC;
            aD.constructor = aG;
            aG.mixin = function(aH) { P[R] = aG[R] = ax(aG, aH)[R];
                return aG };
            return (aG.open = function(aI) { aC = {};
                if (az(aI)) { aC = aI.call(aG, aD, aE, aG, aF) } else {
                    if (L(aI)) { aC = aI } }
                if (L(aC)) {
                    for (var aH in aC) {
                        if (aw.call(aC, aH)) { aD[aH] = aC[aH] } } }
                if (!az(aD.init)) { aD.init = aF }
                return aG })(aB) }
        return ax })("prototype", ({}).hasOwnProperty);
    var m = (function() {
        var L = { 8: "Backspace", 9: "Tab", 10: "Enter", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 20: "CapsLock", 27: "Esc", 32: "Spacebar", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "Left", 38: "Up", 39: "Right", 40: "Down", 45: "Insert", 46: "Del", 144: "NumLock" };

        function R(ax) {
            var aA = ax.which || ax.keyCode;
            var aw = L[aA];
            var az;
            var ay = [];
            if (ax.ctrlKey) { ay.push("Ctrl") }
            if (ax.originalEvent && ax.originalEvent.metaKey) { ay.push("Meta") }
            if (ax.altKey) { ay.push("Alt") }
            if (ax.shiftKey) { ay.push("Shift") }
            az = aw || String.fromCharCode(aA);
            if (!ay.length && !aw) {
                return az }
            ay.push(az);
            return ay.join("-") }
        return function P(ax, aI) {
            var aK = null;
            var aD = null;
            if (!aI) { aI = {} }
            var aG = aI.text || al;
            var aC = aI.key || al;
            var aQ = aI.paste || al;
            var aA = aI.cut || al;
            var aJ = B(ax);
            var aS = B(aI.container || aJ);
            var aF = al,
                aB;

            function aP(aT) { aF = aT;
                clearTimeout(aB);
                aB = setTimeout(aT) }
            aS.bind("keydown keypress input keyup focusout paste", function() { aF() });

            function aL(aT) { aF();
                aF = al;
                clearTimeout(aB);
                aJ.val(aT);
                if (aT) { aJ[0].select() } }

            function aO() {
                var aT = aJ[0];
                if (!("selectionStart" in aT)) {
                    return false }
                return aT.selectionStart !== aT.selectionEnd }

            function ay(aU) {
                var aT = aJ.val();
                aJ.val("");
                if (aT) { aU(aT) } }

            function aH() { aC(R(aK), aK) }

            function aR(aT) { aK = aT;
                aD = null;
                aH() }

            function az(aT) {
                if (aK && aD) { aH() }
                aD = aT;
                aP(aN) }

            function aN() {
                if (aO()) {
                    return }
                ay(aG) }

            function aE() { aK = aD = null }

            function aw(aT) { aJ.focus();
                aP(aM) }

            function aM() { ay(aQ) }
            aS.bind({ keydown: aR, keypress: az, focusout: aE, cut: aA, paste: aw });
            return { select: aL } } }());
    var c = i(function(aH, aJ, ax) {
        function ay(aL, aK) {
            if (aL) { aL = "'" + aL + "'" } else { aL = "EOF" }
            throw "Parse Error: " + aK + " at " + aL }
        aH.init = function(aK) { this._ = aK };
        aH.parse = function(aL) {
            return this.skip(aI)._(aL, aK, ay);

            function aK(aN, aM) {
                return aM } };
        aH.or = function(aL) { ai("or is passed a parser", aL instanceof ax);
            var aK = this;
            return ax(function(aP, aO, aN) {
                return aK._(aP, aO, aM);

                function aM(aQ) {
                    return aL._(aP, aO, aN) } }) };
        aH.then = function(aL) {
            var aK = this;
            return ax(function(aP, aO, aM) {
                return aK._(aP, aN, aM);

                function aN(aS, aQ) {
                    var aR = (aL instanceof ax ? aL : aL(aQ));
                    ai("a parser is returned", aR instanceof ax);
                    return aR._(aS, aO, aM) } }) };
        aH.many = function() {
            var aK = this;
            return ax(function(aQ, aP, aN) {
                var aM = [];
                while (aK._(aQ, aO, aL)) {}
                return aP(aQ, aM);

                function aO(aS, aR) { aQ = aS;
                    aM.push(aR);
                    return true }

                function aL() {
                    return false } }) };
        aH.times = function(aM, aK) {
            if (arguments.length < 2) { aK = aM }
            var aL = this;
            return ax(function(aU, aT, aN) {
                var aP = [];
                var aW = true;
                var aO;
                for (var aR = 0; aR < aM; aR += 1) { aW = aL._(aU, aV, aQ);
                    if (!aW) {
                        return aN(aU, aO) } }
                for (; aR < aK && aW; aR += 1) { aW = aL._(aU, aV, aS) }
                return aT(aU, aP);

                function aV(aY, aX) { aP.push(aX);
                    aU = aY;
                    return true }

                function aQ(aY, aX) { aO = aX;
                    aU = aY;
                    return false }

                function aS(aY, aX) {
                    return false } }) };
        aH.result = function(aK) {
            return this.then(az(aK)) };
        aH.atMost = function(aK) {
            return this.times(0, aK) };
        aH.atLeast = function(aL) {
            var aK = this;
            return aK.times(aL).then(function(aM) {
                return aK.many().map(function(aN) {
                    return aM.concat(aN) }) }) };
        aH.map = function(aK) {
            return this.then(function(aL) {
                return az(aK(aL)) }) };
        aH.skip = function(aK) {
            return this.then(function(aL) {
                return aK.result(aL) }) };
        var aA = this.string = function(aM) {
            var aK = aM.length;
            var aL = "expected '" + aM + "'";
            return ax(function(aQ, aP, aO) {
                var aN = aQ.slice(0, aK);
                if (aN === aM) {
                    return aP(aQ.slice(aK), aN) } else {
                    return aO(aQ, aL) } }) };
        var aF = this.regex = function(aK) { ai("regexp parser is anchored", aK.toString().charAt(1) === "^");
            var aL = "expected " + aK;
            return ax(function(aQ, aP, aO) {
                var aN = aK.exec(aQ);
                if (aN) {
                    var aM = aN[0];
                    return aP(aQ.slice(aM.length), aM) } else {
                    return aO(aQ, aL) } }) };
        var az = ax.succeed = function(aK) {
            return ax(function(aM, aL) {
                return aL(aM, aK) }) };
        var aw = ax.fail = function(aK) {
            return ax(function(aN, aL, aM) {
                return aM(aN, aK) }) };
        var R = ax.letter = aF(/^[a-z]/i);
        var aC = ax.letters = aF(/^[a-z]*/i);
        var aE = ax.digit = aF(/^[0-9]/);
        var P = ax.digits = aF(/^[0-9]*/);
        var L = ax.whitespace = aF(/^\s+/);
        var aD = ax.optWhitespace = aF(/^\s*/);
        var aB = ax.any = ax(function(aM, aL, aK) {
            if (!aM) {
                return aK(aM, "expected any character") }
            return aL(aM.slice(1), aM.charAt(0)) });
        var aG = ax.all = ax(function(aM, aL, aK) {
            return aL("", aM) });
        var aI = ax.eof = ax(function(aM, aL, aK) {
            if (aM) {
                return aK(aM, "expected EOF") }
            return aL(aM, aM) }) });
    var o = -1;
    var g = 1;

    function au(L) { ai("a direction was passed", L === o || L === g) }
    var V = i(B, function(L) { L.insDirOf = function(P, R) {
            return P === o ? this.insertBefore(R.first()) : this.insertAfter(R.last()) };
        L.insAtDirEnd = function(P, R) {
            return P === o ? this.prependTo(R) : this.appendTo(R) } });
    var z = i(function(L) { L.parent = 0;
        L[o] = 0;
        L[g] = 0;
        L.init = function(R, P, aw) { this.parent = R;
            this[o] = P;
            this[g] = aw } });
    var D = i(function(L) { L[o] = 0;
        L[g] = 0;
        L.parent = 0;
        L.init = function() { this.endChild = {};
            this.endChild[o] = 0;
            this.endChild[g] = 0 };
        L.children = function() {
            return K(this.endChild[o], this.endChild[g]) };
        L.eachChild = function(P) {
            return this.children().each(P) };
        L.foldChildren = function(P, R) {
            return this.children().fold(P, R) };
        L.adopt = function(R, P, aw) { K(this, this).adopt(R, P, aw);
            return this };
        L.disown = function() { K(this, this).disown();
            return this } });
    var K = i(function(L) { L.init = function(R, aw) { ai("no half-empty fragments", !R === !aw);
            this.end = {};
            if (!R) {
                return }
            ai("left end node is passed to Fragment", R instanceof D);
            ai("right end node is passed to Fragment", aw instanceof D);
            ai("leftEnd and rightEnd have the same parent", R.parent === aw.parent);
            this.end[o] = R;
            this.end[g] = aw };

        function P(aw, R, ax) { ai("a parent is always present", aw);
            ai("leftward is properly set up", (function() {
                if (!R) {
                    return aw.endChild[o] === ax }
                return R[g] === ax && R.parent === aw })());
            ai("rightward is properly set up", (function() {
                if (!ax) {
                    return aw.endChild[g] === R }
                return ax[o] === R && ax.parent === aw })()) }
        L.adopt = function(ax, aw, az) { P(ax, aw, az);
            var R = this;
            R.disowned = false;
            var ay = R.end[o];
            if (!ay) {
                return this }
            var aA = R.end[g];
            if (aw) {} else { ax.endChild[o] = ay }
            if (az) { az[o] = aA } else { ax.endChild[g] = aA }
            R.end[g][g] = az;
            R.each(function(aB) { aB[o] = aw;
                aB.parent = ax;
                if (aw) { aw[g] = aB }
                aw = aB });
            return R };
        L.disown = function() {
            var R = this;
            var ax = R.end[o];
            if (!ax || R.disowned) {
                return R }
            R.disowned = true;
            var ay = R.end[g];
            var aw = ax.parent;
            P(aw, ax[o], ax);
            P(aw, ay, ay[g]);
            if (ax[o]) { ax[o][g] = ay[g] } else { aw.endChild[o] = ay[g] }
            if (ay[g]) { ay[g][o] = ax[o] } else { aw.endChild[g] = ax[o] }
            return R };
        L.each = function(ax) {
            var R = this;
            var aw = R.end[o];
            if (!aw) {
                return R }
            for (; aw !== R.end[g][g]; aw = aw[g]) {
                if (ax.call(R, aw) === false) {
                    break } }
            return R };
        L.fold = function(R, aw) { this.each(function(ax) { R = aw.call(this, R, ax) });
            return R } });
    var j = (function() {
        var L = 0;
        return function() {
            return L += 1 } })();
    var H = i(D, function(L, P) { L.init = function(R) { P.init.call(this);
            this.id = j();
            H[this.id] = this };
        L.toString = function() {
            return "[MathElement " + this.id + "]" };
        L.bubble = function(ay) {
            var R = Q.call(arguments, 1);
            for (var ax = this; ax; ax = ax.parent) {
                var aw = ax[ay] && ax[ay].apply(ax, R);
                if (aw === false) {
                    break } }
            return this };
        L.postOrder = function(ax) {
            var aw = Q.call(arguments, 1);
            if (typeof ax === "string") {
                var R = ax;
                ax = function(az) {
                    if (R in az) { az[R].apply(az, aw) } } }(function ay(az) { az.eachChild(ay);
                ax(az) })(this) };
        L.jQ = V();
        L.jQadd = function(R) { this.jQ = this.jQ.add(R) };
        this.jQize = function(R) {
            var aw = V(R);
            aw.find("*").andSelf().each(function() {
                var az = V(this),
                    ax = az.attr("mathquill-command-id"),
                    ay = az.attr("mathquill-block-id");
                if (ax) { H[ax].jQadd(az) }
                if (ay) { H[ay].jQadd(az) } });
            return aw };
        L.finalizeInsert = function() {
            var R = this;
            R.postOrder("finalizeTree");
            R.postOrder("blur");
            R.postOrder("respace");
            if (R[g].respace) { R[g].respace() }
            if (R[o].respace) { R[o].respace() }
            R.postOrder("redraw");
            R.bubble("redraw") } });
    var F = i(H, function(L, P) { L.init = function(ax, ay, R) {
            var aw = this;
            P.init.call(aw);
            if (!aw.ctrlSeq) { aw.ctrlSeq = ax }
            if (ay) { aw.htmlTemplate = ay }
            if (R) { aw.textTemplate = R } };
        L.replaces = function(R) { R.disown();
            this.replacedFragment = R };
        L.isEmpty = function() {
            return this.foldChildren(true, function(R, aw) {
                return R && aw.isEmpty() }) };
        L.parser = function() {
            var aw = Y.block;
            var R = this;
            return aw.times(R.numBlocks()).map(function(ay) { R.blocks = ay;
                for (var ax = 0; ax < ay.length; ax += 1) { ay[ax].adopt(R, R.endChild[g], 0) }
                return R }) };
        L.createLeftOf = function(ax) {
            var R = this;
            var aw = R.replacedFragment;
            R.createBlocks();
            H.jQize(R.html());
            if (aw) { aw.adopt(R.endChild[o], 0, 0);
                aw.jQ.appendTo(R.endChild[o].jQ) }
            ax.jQ.before(R.jQ);
            ax[o] = R.adopt(ax.parent, ax[o], ax[g]);
            R.finalizeInsert(ax);
            R.placeCursor(ax) };
        L.createBlocks = function() {
            var aw = this,
                ay = aw.numBlocks(),
                ax = aw.blocks = Array(ay);
            for (var R = 0; R < ay; R += 1) {
                var az = ax[R] = x();
                az.adopt(aw, aw.endChild[g], 0) } };
        L.respace = al;
        L.placeCursor = function(R) { R.insAtRightEnd(this.foldChildren(this.endChild[o], function(aw, ax) {
                return aw.isEmpty() ? aw : ax })) };
        L.remove = function() { this.disown();
            this.jQ.remove();
            this.postOrder(function(R) { delete H[R.id] });
            return this };
        L.numBlocks = function() {
            var R = this.htmlTemplate.match(/&\d+/g);
            return R ? R.length : 0 };
        L.html = function() {
            var az = this;
            var aB = az.blocks;
            var R = " mathquill-command-id=" + az.id;
            var aA = az.htmlTemplate.match(/<[^<>]+>|[^<>]+/g);
            ai("no unmatched angle brackets", aA.join("") === this.htmlTemplate);
            for (var ax = 0, aw = aA[0]; aw; ax += 1, aw = aA[ax]) {
                if (aw.slice(-2) === "/>") { aA[ax] = aw.slice(0, -2) + R + "/>" } else {
                    if (aw.charAt(0) === "<") { ai("not an unmatched top-level close tag", aw.charAt(1) !== "/");
                        aA[ax] = aw.slice(0, -1) + R + ">";
                        var ay = 1;
                        do { ax += 1, aw = aA[ax];
                            ai("no missing close tags", aw);
                            if (aw.slice(0, 2) === "</") { ay -= 1 } else {
                                if (aw.charAt(0) === "<" && aw.slice(-2) !== "/>") { ay += 1 } } } while (ay > 0) } } }
            return aA.join("").replace(/>&(\d+)/g, function(aD, aC) {
                return " mathquill-block-id=" + aB[aC].id + ">" + aB[aC].join("html") }) };
        L.latex = function() {
            return this.foldChildren(this.ctrlSeq, function(R, aw) {
                return R + "{" + (aw.latex() || " ") + "}" }) };
        L.textTemplate = [""];
        L.text = function() {
            var R = 0;
            return this.foldChildren(this.textTemplate[R], function(ax, ay) { R += 1;
                var aw = ay.text();
                if (ax && this.textTemplate[R] === "(" && aw[0] === "(" && aw.slice(-1) === ")") {
                    return ax + aw.slice(1, -1) + this.textTemplate[R] }
                return ax + ay.text() + (this.textTemplate[R] || "") }) } });
    var ac = i(F, function(L, P) { L.init = function(aw, R, ax) {
            if (!ax) { ax = aw && aw.length > 1 ? aw.slice(1) : aw }
            P.init.call(this, aw, R, [ax]) };
        L.parser = function() {
            return c.succeed(this) };
        L.numBlocks = function() {
            return 0 };
        L.replaces = function(R) { R.remove() };
        L.createBlocks = al;
        L.latex = function() {
            return this.ctrlSeq };
        L.text = function() {
            return this.textTemplate };
        L.placeCursor = al;
        L.isEmpty = function() {
            return true } });
    var x = i(H, function(L) { L.join = function(P) {
            return this.foldChildren("", function(R, aw) {
                return R + aw[P]() }) };
        L.latex = function() {
            return this.join("latex") };
        L.text = function() {
            return this.endChild[o] === this.endChild[g] ? this.endChild[o].text() : "(" + this.join("text") + ")" };
        L.isEmpty = function() {
            return this.endChild[o] === 0 && this.endChild[g] === 0 };
        L.write = function(ax, P, aw) {
            var R;
            if (P.match(/^[a-eg-zA-Z]$/)) { R = t(P) } else {
                if (R = A[P] || O[P]) { R = R(P) } else { R = ag(P) } }
            if (aw) { R.replaces(aw) }
            R.createLeftOf(ax) };
        L.focus = function() { this.jQ.addClass("hasCursor");
            this.jQ.removeClass("empty");
            return this };
        L.blur = function() { this.jQ.removeClass("hasCursor");
            if (this.isEmpty()) { this.jQ.addClass("empty") }
            return this } });
    var ae = i(K, function(L, P) { L.init = function(R, aw) { P.init.call(this, R, aw || R);
            this.jQ = this.fold(V(), function(ax, ay) {
                return ay.jQ.add(ax) }) };
        L.latex = function() {
            return this.fold("", function(aw, R) {
                return aw + R.latex() }) };
        L.remove = function() { this.jQ.remove();
            this.each(function(R) { R.postOrder(function(aw) { delete H[aw.id] }) });
            return this.disown() } });

    function ak(az, aC, aB, R) {
        var aw = az.contents().detach();
        if (!aB) { az.addClass("mathquill-rendered-math") }
        aC.jQ = az.attr(k, aC.id);
        aC.revert = function() { az.empty().unbind(".mathquill").removeClass("mathquill-rendered-math mathquill-editable mathquill-textbox").append(aw) };
        var aF = aC.cursor = N(aC);
        aC.renderLatex(aw.text());
        var aG = aC.textarea = V('<span class="textarea"><textarea></textarea></span>'),
            aE = aG.children();
        var ay;
        aC.selectionChanged = function() {
            if (ay === u) { ay = setTimeout(L) }
            l(az[0]) };

        function L() { ay = u;
            var aH = aF.selection ? "$" + aF.selection.latex() + "$" : "";
            aA.select(aH) }
        az.bind("selectstart.mathquill", function(aH) {
            if (aH.target !== aE[0]) { aH.preventDefault() }
            aH.stopPropagation() });
        var ax, P = aF.blink;
        az.bind("mousedown.mathquill", function(aI) {
            function aH(aL) { aF.seek(V(aL.target), aL.pageX, aL.pageY);
                if (aF[o] !== ax[o] || aF.parent !== ax.parent) { aF.selectFrom(ax) }
                return false }

            function aK(aL) { delete aL.target;
                return aH(aL) }

            function aJ(aL) { ax = u;
                aF.blink = P;
                if (!aF.selection) {
                    if (R) { aF.show() } else { aG.detach() } }
                az.unbind("mousemove", aH);
                V(aL.target.ownerDocument).unbind("mousemove", aK).unbind("mouseup", aJ) }
            setTimeout(function() { aE.focus() });
            aF.blink = al;
            aF.seek(V(aI.target), aI.pageX, aI.pageY);
            ax = z(aF.parent, aF[o], aF[g]);
            if (!R) { az.prepend(aG) }
            az.mousemove(aH);
            V(aI.target.ownerDocument).mousemove(aK).mouseup(aJ);
            return false });
        if (!R) {
            var aA = m(aE, { container: az });
            az.bind("cut paste", false).bind("copy", L).prepend('<span class="selectable">$' + aC.latex() + "$</span>");
            aE.blur(function() { aF.clearSelection();
                setTimeout(aD) });

            function aD() { aG.detach() }
            return }
        var aA = m(aE, { container: az, key: function(aI, aH) { aF.parent.bubble("onKey", aI, aH) }, text: function(aH) { aF.parent.bubble("onText", aH) }, cut: function(aH) {
                if (aF.selection) { setTimeout(function() { aF.prepareEdit();
                        aF.parent.bubble("redraw") }) }
                aH.stopPropagation() }, paste: function(aH) {
                if (aH.slice(0, 1) === "$" && aH.slice(-1) === "$") { aH = aH.slice(1, -1) } else { aH = "\\text{" + aH + "}" }
                aF.writeLatex(aH).show() } });
        az.prepend(aG);
        az.addClass("mathquill-editable");
        if (aB) { az.addClass("mathquill-textbox") }
        aE.focus(function(aH) {
            if (!aF.parent) { aF.insAtRightEnd(aC) }
            aF.parent.jQ.addClass("hasCursor");
            if (aF.selection) { aF.selection.jQ.removeClass("blur");
                setTimeout(aC.selectionChanged) } else { aF.show() }
            aH.stopPropagation() }).blur(function(aH) { aF.hide().parent.blur();
            if (aF.selection) { aF.selection.jQ.addClass("blur") }
            aH.stopPropagation() });
        az.bind("focus.mathquill blur.mathquill", function(aH) { aE.trigger(aH) }).blur() }
    var n = i(x, function(L, P) { L.latex = function() {
            return P.latex.call(this).replace(/(\\[a-z]+) (?![a-z])/ig, "$1") };
        L.text = function() {
            return this.foldChildren("", function(R, aw) {
                return R + aw.text() }) };
        L.renderLatex = function(R) {
            var aw = this.jQ;
            aw.children().slice(1).remove();
            this.endChild[o] = this.endChild[g] = 0;
            this.cursor.insAtRightEnd(this).writeLatex(R) };
        L.onKey = function(R, ax) {
            switch (R) {
                case "Ctrl-Shift-Backspace":
                case "Ctrl-Backspace":
                    while (this.cursor[o] || this.cursor.selection) { this.cursor.backspace() }
                    break;
                case "Shift-Backspace":
                case "Backspace":
                    this.cursor.backspace();
                    break;
                case "Esc":
                case "Tab":
                case "Spacebar":
                    var aw = this.cursor.parent;
                    if (aw === this.cursor.root) {
                        if (R === "Spacebar") { ax.preventDefault() }
                        return }
                    this.cursor.prepareMove();
                    if (aw[g]) { this.cursor.insAtLeftEnd(aw[g]) } else { this.cursor.insRightOf(aw.parent) }
                    break;
                case "Shift-Tab":
                case "Shift-Esc":
                case "Shift-Spacebar":
                    var aw = this.cursor.parent;
                    if (aw === this.cursor.root) {
                        if (R === "Shift-Spacebar") { ax.preventDefault() }
                        return }
                    this.cursor.prepareMove();
                    if (aw[o]) { this.cursor.insAtRightEnd(aw[o]) } else { this.cursor.insLeftOf(aw.parent) }
                    break;
                case "Enter":
                    break;
                case "End":
                    this.cursor.prepareMove().insAtRightEnd(this.cursor.parent);
                    break;
                case "Ctrl-End":
                    this.cursor.prepareMove().insAtRightEnd(this);
                    break;
                case "Shift-End":
                    while (this.cursor[g]) { this.cursor.selectRight() }
                    break;
                case "Ctrl-Shift-End":
                    while (this.cursor[g] || this.cursor.parent !== this) { this.cursor.selectRight() }
                    break;
                case "Home":
                    this.cursor.prepareMove().insAtLeftEnd(this.cursor.parent);
                    break;
                case "Ctrl-Home":
                    this.cursor.prepareMove().insAtLeftEnd(this);
                    break;
                case "Shift-Home":
                    while (this.cursor[o]) { this.cursor.selectLeft() }
                    break;
                case "Ctrl-Shift-Home":
                    while (this.cursor[o] || this.cursor.parent !== this) { this.cursor.selectLeft() }
                    break;
                case "Left":
                    this.cursor.moveLeft();
                    break;
                case "Shift-Left":
                    this.cursor.selectLeft();
                    break;
                case "Ctrl-Left":
                    break;
                case "Right":
                    this.cursor.moveRight();
                    break;
                case "Shift-Right":
                    this.cursor.selectRight();
                    break;
                case "Ctrl-Right":
                    break;
                case "Up":
                    this.cursor.moveUp();
                    break;
                case "Down":
                    this.cursor.moveDown();
                    break;
                case "Shift-Up":
                    if (this.cursor[o]) {
                        while (this.cursor[o]) { this.cursor.selectLeft() } } else { this.cursor.selectLeft() }
                case "Shift-Down":
                    if (this.cursor[g]) {
                        while (this.cursor[g]) { this.cursor.selectRight() } } else { this.cursor.selectRight() }
                case "Ctrl-Up":
                    break;
                case "Ctrl-Down":
                    break;
                case "Ctrl-Shift-Del":
                case "Ctrl-Del":
                    while (this.cursor[g] || this.cursor.selection) { this.cursor.deleteForward() }
                    break;
                case "Shift-Del":
                case "Del":
                    this.cursor.deleteForward();
                    break;
                case "Meta-A":
                case "Ctrl-A":
                    if (this !== this.cursor.root) {
                        return }
                    this.cursor.prepareMove().insAtRightEnd(this);
                    while (this.cursor[o]) { this.cursor.selectLeft() }
                    break;
                default:
                    return false }
            ax.preventDefault();
            return false };
        L.onText = function(R) { this.cursor.write(R);
            return false } });
    var an = i(F, function(L, P) { L.init = function(R) { P.init.call(this, "$");
            this.cursor = R };
        L.htmlTemplate = '<span class="mathquill-rendered-math">&0</span>';
        L.createBlocks = function() { this.endChild[o] = this.endChild[g] = n();
            this.blocks = [this.endChild[o]];
            this.endChild[o].parent = this;
            this.endChild[o].cursor = this.cursor;
            this.endChild[o].write = function(ax, R, aw) {
                if (R !== "$") { x.prototype.write.call(this, ax, R, aw) } else {
                    if (this.isEmpty()) { ax.insRightOf(this.parent).backspace().show();
                        ag("\\$", "$").createLeftOf(ax) } else {
                        if (!ax[g]) { ax.insRightOf(this.parent) } else {
                            if (!ax[o]) { ax.insLeftOf(this.parent) } else { x.prototype.write.call(this, ax, R, aw) } } } } } };
        L.latex = function() {
            return "$" + this.endChild[o].latex() + "$" } });
    var aa = i(x, function(L) { L.renderLatex = function(ax) {
            var aH = this;
            var aF = aH.cursor;
            aH.jQ.children().slice(1).remove();
            aH.endChild[o] = aH.endChild[g] = 0;
            aF.show().insAtRightEnd(aH);
            var aC = c.regex;
            var aA = c.string;
            var aG = c.eof;
            var aE = c.all;
            var aB = aA("$").then(Y).skip(aA("$").or(aG)).map(function(aK) {
                var aJ = an(aF);
                aJ.createBlocks();
                var aI = aJ.endChild[o];
                aK.children().adopt(aI, 0, 0);
                return aJ });
            var aD = aA("\\$").result("$");
            var R = aD.or(aC(/^[^$]/)).map(ag);
            var P = aB.or(R).many();
            var aw = P.skip(aG).or(aE.result(false)).parse(ax);
            if (aw) {
                for (var ay = 0; ay < aw.length; ay += 1) { aw[ay].adopt(aH, aH.endChild[g], 0) }
                var az = aH.join("html");
                H.jQize(az).appendTo(aH.jQ);
                this.finalizeInsert() } };
        L.onKey = function(P) {
            if (P === "Spacebar" || P === "Shift-Spacebar") {
                return }
            n.prototype.onKey.apply(this, arguments) };
        L.onText = n.prototype.onText;
        L.write = function(ax, R, aw) {
            if (aw) { aw.remove() }
            if (R === "$") { an(ax).createLeftOf(ax) } else {
                var P;
                if (R === "<") { P = "&lt;" } else {
                    if (R === ">") { P = "&gt;" } }
                ag(R, P).createLeftOf(ax) } } });
    var A = {},
        O = {};
    var W, l = al,
        am = document.createElement("div"),
        at = am.style,
        I = { transform: 1, WebkitTransform: 1, MozTransform: 1, OTransform: 1, msTransform: 1 },
        a;
    for (var y in I) {
        if (y in at) { a = y;
            break } }
    if (a) { W = function(P, L, R) { P.css(a, "scale(" + L + "," + R + ")") } } else {
        if ("filter" in at) { l = function(L) { L.className = L.className };
            W = function(aw, L, ay) { L /= (1 + (ay - 1) / 2);
                aw.css("fontSize", ay + "em");
                if (!aw.hasClass("matrixed-container")) { aw.addClass("matrixed-container").wrapInner('<span class="matrixed"></span>') }
                var ax = aw.children().css("filter", "progid:DXImageTransform.Microsoft.Matrix(M11=" + L + ",SizingMethod='auto expand')");

                function R() { aw.css("marginRight", (ax.width() - 1) * (L - 1) / L + "px") }
                R();
                var P = setInterval(R);
                V(window).load(function() { clearTimeout(P);
                    R() }) } } else { W = function(P, L, R) { P.css("fontSize", R + "em") } } }
    var M = i(F, function(L, P) { L.init = function(ax, aw, R) { P.init.call(this, ax, "<" + aw + " " + R + ">&0</" + aw + ">") } });
    O.mathrm = e(M, "\\mathrm", "span", 'class="roman font"');
    O.mathit = e(M, "\\mathit", "i", 'class="font"');
    O.mathbf = e(M, "\\mathbf", "b", 'class="font"');
    O.mathsf = e(M, "\\mathsf", "span", 'class="sans-serif font"');
    O.mathtt = e(M, "\\mathtt", "span", 'class="monospace font"');
    O.underline = e(M, "\\underline", "span", 'class="non-leaf underline"');
    O.overline = O.bar = e(M, "\\overline", "span", 'class="non-leaf overline"');
    var ar = i(F, function(L, P) { L.init = function(aw, R, ax) { P.init.call(this, aw, "<" + R + ' class="non-leaf">&0</' + R + ">", [ax]) };
        L.finalizeTree = function() { ai("SupSub is only _ and ^", this.ctrlSeq === "^" || this.ctrlSeq === "_");
            if (this.ctrlSeq === "_") { this.down = this.endChild[o];
                this.endChild[o].up = R } else { this.up = this.endChild[o];
                this.endChild[o].down = R }

            function R(ay) {
                var aw = this.parent,
                    ax = ay;
                do {
                    if (ax[g]) { ay.insLeftOf(aw);
                        return false }
                    ax = ax.parent.parent } while (ax !== aw);
                ay.insRightOf(aw);
                return false } };
        L.latex = function() {
            var R = this.endChild[o].latex();
            if (R.length === 1) {
                return this.ctrlSeq + R } else {
                return this.ctrlSeq + "{" + (R || " ") + "}" } };
        L.redraw = function() {
            if (this[o]) { this[o].respace() }
            if (!(this[o] instanceof ar)) { this.respace();
                if (this[g] && !(this[g] instanceof ar)) { this[g].respace() } } };
        L.respace = function() {
            if (this[o].ctrlSeq === "\\int " || (this[o] instanceof ar && this[o].ctrlSeq != this.ctrlSeq && this[o][o] && this[o][o].ctrlSeq === "\\int ")) {
                if (!this.limit) { this.limit = true;
                    this.jQ.addClass("limit") } } else {
                if (this.limit) { this.limit = false;
                    this.jQ.removeClass("limit") } }
            this.respaced = this[o] instanceof ar && this[o].ctrlSeq != this.ctrlSeq && !this[o].respaced;
            if (this.respaced) {
                var aw = +this.jQ.css("fontSize").slice(0, -2),
                    R = this[o].jQ.outerWidth(),
                    ax = this.jQ.outerWidth();
                this.jQ.css({ left: (this.limit && this.ctrlSeq === "_" ? -0.25 : 0) - R / aw + "em", marginRight: 0.1 - aq(ax, R) / aw + "em" }) } else {
                if (this.limit && this.ctrlSeq === "_") { this.jQ.css({ left: "-.25em", marginRight: "" }) } else { this.jQ.css({ left: "", marginRight: "" }) } }
            if (this[g] instanceof ar) { this[g].respace() }
            return this } });
    O.subscript = O._ = e(ar, "_", "sub", "_");
    O.superscript = O.supscript = O["^"] = e(ar, "^", "sup", "**");
    var af = O.frac = O.dfrac = O.cfrac = O.fraction = i(F, function(L, P) { L.ctrlSeq = "\\frac";
        L.htmlTemplate = '<span class="fraction non-leaf"><span class="numerator">&0</span><span class="denominator">&1</span><span style="display:inline-block;width:0">&nbsp;</span></span>';
        L.textTemplate = ["(", "/", ")"];
        L.finalizeTree = function() { this.up = this.endChild[g].up = this.endChild[o];
            this.down = this.endChild[o].down = this.endChild[g] } });
    var h = O.over = A["/"] = i(af, function(L, P) { L.createLeftOf = function(aw) {
            if (!this.replacedFragment) {
                var R = aw[o];
                while (R && !(R instanceof ao || R instanceof ah || R instanceof w || ",;:".split("").indexOf(R.ctrlSeq) > -1)) { R = R[o] }
                if (R instanceof w && R[g] instanceof ar) { R = R[g];
                    if (R[g] instanceof ar && R[g].ctrlSeq != R.ctrlSeq) { R = R[g] } }
                if (R !== aw[o]) { this.replaces(ae(R[g] || aw.parent.endChild[o], aw[o]));
                    aw[o] = R } }
            P.createLeftOf.call(this, aw) } });
    var v = O.sqrt = O["\u221a"] = i(F, function(L, P) { L.ctrlSeq = "\\sqrt";
        L.htmlTemplate = '<span class="non-leaf"><span class="scaled sqrt-prefix">&radic;</span><span class="non-leaf sqrt-stem">&0</span></span>';
        L.textTemplate = ["sqrt(", ")"];
        L.parser = function() {
            return Y.optBlock.then(function(R) {
                return Y.block.map(function(ax) {
                    var aw = ap();
                    aw.blocks = [R, ax];
                    R.adopt(aw, 0, 0);
                    ax.adopt(aw, R, 0);
                    return aw }) }).or(P.parser.call(this)) };
        L.redraw = function() {
            var R = this.endChild[g].jQ;
            W(R.prev(), 1, R.innerHeight() / +R.css("fontSize").slice(0, -2) - 0.1) } });
    var ap = O.nthroot = i(v, function(L, P) { L.htmlTemplate = '<sup class="nthroot non-leaf">&0</sup><span class="scaled"><span class="sqrt-prefix scaled">&radic;</span><span class="sqrt-stem non-leaf">&1</span></span>';
        L.textTemplate = ["sqrt[", "](", ")"];
        L.latex = function() {
            return "\\sqrt[" + this.endChild[o].latex() + "]{" + this.endChild[g].latex() + "}" } });
    var E = i(F, function(L, P) { L.init = function(aw, ay, ax, R) { P.init.call(this, "\\left" + ax, '<span class="non-leaf"><span class="scaled paren">' + aw + '</span><span class="non-leaf">&0</span><span class="scaled paren">' + ay + "</span></span>", [aw, ay]);
            this.end = "\\right" + R };
        L.jQadd = function() { P.jQadd.apply(this, arguments);
            var R = this.jQ;
            this.bracketjQs = R.children(":first").add(R.children(":last")) };
        L.latex = function() {
            return this.ctrlSeq + this.endChild[o].latex() + this.end };
        L.redraw = function() {
            var aw = this.endChild[o].jQ;
            var R = aw.outerHeight() / +aw.css("fontSize").slice(0, -2);
            W(this.bracketjQs, aq(1 + 0.2 * (R - 1), 1.2), 1.05 * R) } });
    O.left = i(F, function(L) { L.parser = function() {
            var R = c.regex;
            var P = c.string;
            var aw = c.succeed;
            var ax = c.optWhitespace;
            return ax.then(R(/^(?:[([|]|\\\{)/)).then(function(ay) {
                if (ay.charAt(0) === "\\") { ay = ay.slice(1) }
                var az = A[ay]();
                return Y.map(function(aA) { az.blocks = [aA];
                    aA.adopt(az, 0, 0) }).then(P("\\right")).skip(ax).then(R(/^(?:[\])|]|\\\})/)).then(function(aA) {
                    if (aA.slice(-1) !== az.end.slice(-1)) {
                        return c.fail("open doesn't match close") }
                    return aw(az) }) }) } });
    O.right = i(F, function(L) { L.parser = function() {
            return c.fail("unmatched \\right") } });
    O.lbrace = A["{"] = e(E, "{", "}", "\\{", "\\}");
    O.langle = O.lang = e(E, "&lang;", "&rang;", "\\langle ", "\\rangle ");
    var ab = i(E, function(L, P) { L.createLeftOf = function(R) {
            if (!R[g] && R.parent.parent && R.parent.parent.end === this.end && !this.replacedFragment) { R.insRightOf(R.parent.parent) } else { P.createLeftOf.call(this, R) } };
        L.placeCursor = function(R) { this.endChild[o].blur();
            R.insRightOf(this) } });
    O.rbrace = A["}"] = e(ab, "{", "}", "\\{", "\\}");
    O.rangle = O.rang = e(ab, "&lang;", "&rang;", "\\langle ", "\\rangle ");
    var s = function(L, P) { L.init = function(R, aw) { P.init.call(this, R, aw, R, aw) } };
    var S = i(E, s);
    O.lparen = A["("] = e(S, "(", ")");
    O.lbrack = O.lbracket = A["["] = e(S, "[", "]");
    var U = i(ab, s);
    O.rparen = A[")"] = e(U, "(", ")");
    O.rbrack = O.rbracket = A["]"] = e(U, "[", "]");
    var b = O.lpipe = O.rpipe = A["|"] = i(S, function(L, P) { L.init = function() { P.init.call(this, "|", "|") };
        L.createLeftOf = ab.prototype.createLeftOf });
    var ah = A.$ = O.text = O.textnormal = O.textrm = O.textup = O.textmd = i(F, function(L, P) { L.ctrlSeq = "\\text";
        L.htmlTemplate = '<span class="text">&0</span>';
        L.replaces = function(R) {
            if (R instanceof ae) { this.replacedText = R.remove().jQ.text() } else {
                if (typeof R === "string") { this.replacedText = R } } };
        L.textTemplate = ['"', '"'];
        L.parser = function() {
            var R = this;
            var aw = c.string;
            var ax = c.regex;
            var ay = c.optWhitespace;
            return ay.then(aw("{")).then(ax(/^[^}]*/)).skip(aw("}")).map(function(aC) { R.createBlocks();
                var aB = R.endChild[o];
                for (var az = 0; az < aC.length; az += 1) {
                    var aA = ag(aC.charAt(az));
                    aA.adopt(aB, aB.endChild[g], 0) }
                return R }) };
        L.createBlocks = function() { this.endChild[o] = this.endChild[g] = r();
            this.blocks = [this.endChild[o]];
            this.endChild[o].parent = this };
        L.finalizeInsert = function() { this.endChild[o].blur = function() { delete this.blur;
                return this };
            P.finalizeInsert.call(this) };
        L.createLeftOf = function(aw) { P.createLeftOf.call(this, this.cursor = aw);
            if (this.replacedText) {
                for (var R = 0; R < this.replacedText.length; R += 1) { this.endChild[o].write(aw, this.replacedText.charAt(R)) } } } });
    var r = i(x, function(L, P) { L.onKey = function(R, aw) {
            if (R === "Spacebar" || R === "Shift-Spacebar") {
                return false } };
        L.deleteOutOf = function(R, aw) {
            if (this.isEmpty()) { aw.insRightOf(this.parent) } };
        L.write = function(az, aw, ay) {
            if (ay) { ay.remove() }
            if (aw !== "$") {
                var R;
                if (aw === "<") { R = "&lt;" } else {
                    if (aw === ">") { R = "&gt;" } }
                ag(aw, R).createLeftOf(az) } else {
                if (this.isEmpty()) { az.insRightOf(this).backspace();
                    ag("\\$", "$").createLeftOf(az) } else {
                    if (!az[g]) { az.insRightOf(this) } else {
                        if (!az[o]) { az.insLeftOf(this) } else {
                            var ax = ah();
                            ax.replaces(ae(az[g], this.endChild[g]));
                            az.insRightOf(this.parent);
                            ax.adopt = function() { delete this.adopt;
                                this.adopt.apply(this, arguments);
                                this[o] = 0 };
                            ax.createLeftOf(az);
                            ax[o] = this.parent;
                            az.insLeftOf(ax) } } } }
            return false };
        L.blur = function() { this.jQ.removeClass("hasCursor");
            if (this.isEmpty()) {
                var R = this.parent,
                    aw = R.cursor;
                if (aw.parent === this) { this.jQ.addClass("empty") } else { aw.hide();
                    R.remove();
                    if (aw[g] === R) { aw[g] = R[g] } else {
                        if (aw[o] === R) { aw[o] = R[o] } }
                    aw.show().parent.bubble("redraw") } }
            return this };
        L.focus = function() { P.focus.call(this);
            var aw = this.parent;
            if (aw[g].ctrlSeq === aw.ctrlSeq) {
                var ay = this,
                    ax = aw.cursor,
                    R = aw[g].endChild[o];
                R.eachChild(function(az) { az.parent = ay;
                    az.jQ.appendTo(ay.jQ) });
                if (this.endChild[g]) { this.endChild[g][g] = R.endChild[o] } else { this.endChild[o] = R.endChild[o] }
                R.endChild[o][o] = this.endChild[g];
                this.endChild[g] = R.endChild[g];
                R.parent.remove();
                if (ax[o]) { ax.insRightOf(ax[o]) } else { ax.insAtLeftEnd(this) }
                ax.parent.bubble("redraw") } else {
                if (aw[o].ctrlSeq === aw.ctrlSeq) {
                    var ax = aw.cursor;
                    if (ax[o]) { aw[o].endChild[o].focus() } else { ax.insAtRightEnd(aw[o].endChild[o]) } } }
            return this } });

    function p(R, P, L) {
        return i(ah, { ctrlSeq: R, htmlTemplate: "<" + P + " " + L + ">&0</" + P + ">" }) }
    O.em = O.italic = O.italics = O.emph = O.textit = O.textsl = p("\\textit", "i", 'class="text"');
    O.strong = O.bold = O.textbf = p("\\textbf", "b", 'class="text"');
    O.sf = O.textsf = p("\\textsf", "span", 'class="sans-serif text"');
    O.tt = O.texttt = p("\\texttt", "span", 'class="monospace text"');
    O.textsc = p("\\textsc", "span", 'style="font-variant:small-caps" class="text"');
    O.uppercase = p("\\uppercase", "span", 'style="text-transform:uppercase" class="text"');
    O.lowercase = p("\\lowercase", "span", 'style="text-transform:lowercase" class="text"');
    var ad = A["\\"] = i(F, function(L, P) { L.ctrlSeq = "\\";
        L.replaces = function(R) { this._replacedFragment = R.disown();
            this.isEmpty = function() {
                return false } };
        L.htmlTemplate = '<span class="latex-command-input non-leaf">\\<span>&0</span></span>';
        L.textTemplate = ["\\"];
        L.createBlocks = function() { P.createBlocks.call(this);
            this.endChild[o].focus = function() { this.parent.jQ.addClass("hasCursor");
                if (this.isEmpty()) { this.parent.jQ.removeClass("empty") }
                return this };
            this.endChild[o].blur = function() { this.parent.jQ.removeClass("hasCursor");
                if (this.isEmpty()) { this.parent.jQ.addClass("empty") }
                return this } };
        L.createLeftOf = function(aw) { P.createLeftOf.call(this, aw);
            this.cursor = aw.insAtRightEnd(this.endChild[o]);
            if (this._replacedFragment) {
                var R = this.jQ[0];
                this.jQ = this._replacedFragment.jQ.addClass("blur").bind("mousedown mousemove", function(ax) { V(ax.target = R).trigger(ax);
                    return false }).insertBefore(this.jQ).add(this.jQ) }
            this.endChild[o].write = function(az, ax, ay) {
                if (ay) { ay.remove() }
                if (ax.match(/[a-z]/i)) { ag(ax).createLeftOf(az) } else { this.parent.renderCommand();
                    if (ax !== "\\" || !this.isEmpty()) { this.parent.parent.write(az, ax) } } } };
        L.latex = function() {
            return "\\" + this.endChild[o].latex() + " " };
        L.onKey = function(R, aw) {
            if (R === "Tab" || R === "Enter" || R === "Spacebar") { this.renderCommand();
                aw.preventDefault();
                return false } };
        L.renderCommand = function() { this.jQ = this.jQ.last();
            this.remove();
            if (this[g]) { this.cursor.insLeftOf(this[g]) } else { this.cursor.insAtRightEnd(this.parent) }
            var aw = this.endChild[o].latex(),
                R;
            if (!aw) { aw = "backslash" }
            this.cursor.insertCmd(aw, this._replacedFragment) } });
    var T = O.binom = O.binomial = i(F, function(L, P) { L.ctrlSeq = "\\binom";
        L.htmlTemplate = '<span class="paren scaled">(</span><span class="non-leaf"><span class="array non-leaf"><span>&0</span><span>&1</span></span></span><span class="paren scaled">)</span>';
        L.textTemplate = ["choose(", ",", ")"];
        L.redraw = function() {
            var ax = this.jQ.eq(1);
            var R = ax.outerHeight() / +ax.css("fontSize").slice(0, -2);
            var aw = this.jQ.filter(".paren");
            W(aw, aq(1 + 0.2 * (R - 1), 1.2), 1.05 * R) } });
    var q = O.choose = i(T, function(L) { L.createLeftOf = h.prototype.createLeftOf });
    var G = O.vector = i(F, function(L, P) { L.ctrlSeq = "\\vector";
        L.htmlTemplate = '<span class="array"><span>&0</span></span>';
        L.latex = function() {
            return "\\begin{matrix}" + this.foldChildren([], function(R, aw) { R.push(aw.latex());
                return R }).join("\\\\") + "\\end{matrix}" };
        L.text = function() {
            return "[" + this.foldChildren([], function(R, aw) { R.push(aw.text());
                return R }).join() + "]" };
        L.createLeftOf = function(R) { P.createLeftOf.call(this, this.cursor = R) };
        L.onKey = function(R, ax) {
            var aw = this.cursor.parent;
            if (aw.parent === this) {
                if (R === "Enter") {
                    var ay = x();
                    ay.parent = this;
                    ay.jQ = V("<span></span>").attr(k, ay.id).insertAfter(aw.jQ);
                    if (aw[g]) { aw[g][o] = ay } else { this.endChild[g] = ay }
                    ay[g] = aw[g];
                    aw[g] = ay;
                    ay[o] = aw;
                    this.bubble("redraw").cursor.insAtRightEnd(ay);
                    ax.preventDefault();
                    return false } else {
                    if (R === "Tab" && !aw[g]) {
                        if (aw.isEmpty()) {
                            if (aw[o]) { this.cursor.insRightOf(this);
                                delete aw[o][g];
                                this.endChild[g] = aw[o];
                                aw.jQ.remove();
                                this.bubble("redraw");
                                ax.preventDefault();
                                return false } else {
                                return } }
                        var ay = x();
                        ay.parent = this;
                        ay.jQ = V("<span></span>").attr(k, ay.id).appendTo(this.jQ);
                        this.endChild[g] = ay;
                        aw[g] = ay;
                        ay[o] = aw;
                        this.bubble("redraw").cursor.insAtRightEnd(ay);
                        ax.preventDefault();
                        return false } else {
                        if (ax.which === 8) {
                            if (aw.isEmpty()) {
                                if (aw[o]) { this.cursor.insAtRightEnd(aw[o]);
                                    aw[o][g] = aw[g] } else { this.cursor.insLeftOf(this);
                                    this.endChild[o] = aw[g] }
                                if (aw[g]) { aw[g][o] = aw[o] } else { this.endChild[g] = aw[o] }
                                aw.jQ.remove();
                                if (this.isEmpty()) { this.cursor.deleteForward() } else { this.bubble("redraw") }
                                ax.preventDefault();
                                return false } else {
                                if (!this.cursor[o]) { ax.preventDefault();
                                    return false } } } } } } } });
    O.editable = i(an, function(L, P) { L.init = function() { F.prototype.init.call(this, "\\editable") };
        L.jQadd = function() {
            var R = this;
            P.jQadd.apply(R, arguments);
            var aw = R.endChild[o].disown();
            var ax = R.jQ.children().detach();
            R.endChild[o] = R.endChild[g] = n();
            R.blocks = [R.endChild[o]];
            R.endChild[o].parent = R;
            ak(R.jQ, R.endChild[o], false, true);
            R.cursor = R.endChild[o].cursor;
            aw.children().adopt(R.endChild[o], 0, 0);
            ax.appendTo(R.endChild[o].jQ);
            R.endChild[o].cursor.insAtRightEnd(R.endChild[o]) };
        L.latex = function() {
            return this.endChild[o].latex() };
        L.text = function() {
            return this.endChild[o].text() } });
    O.f = e(ac, "f", '<var class="florin">&fnof;</var><span style="display:inline-block;width:0">&nbsp;</span>');
    var t = i(ac, function(L, P) { L.init = function(aw, R) { P.init.call(this, aw, "<var>" + (R || aw) + "</var>") };
        L.text = function() {
            var R = this.ctrlSeq;
            if (this[o] && !(this[o] instanceof t) && !(this[o] instanceof ao)) { R = "*" + R }
            if (this[g] && !(this[g] instanceof ao) && !(this[g].ctrlSeq === "^")) { R += "*" }
            return R } });
    var ag = i(ac, function(L, P) { L.init = function(aw, R) { P.init.call(this, aw, "<span>" + (R || aw) + "</span>") } });
    A[" "] = e(ag, "\\:", " ");
    O.prime = A["'"] = e(ag, "'", "&prime;");
    var f = i(ac, function(L, P) { L.init = function(aw, R) { P.init.call(this, aw, '<span class="nonSymbola">' + (R || aw) + "</span>") } });
    O["@"] = f;
    O["&"] = e(f, "\\&", "&amp;");
    O["%"] = e(f, "\\%", "%");
    O.alpha = O.beta = O.gamma = O.delta = O.zeta = O.eta = O.theta = O.iota = O.kappa = O.mu = O.nu = O.xi = O.rho = O.sigma = O.tau = O.chi = O.psi = O.omega = i(t, function(L, P) { L.init = function(R) { P.init.call(this, "\\" + R + " ", "&" + R + ";") } });
    O.phi = e(t, "\\phi ", "&#981;");
    O.phiv = O.varphi = e(t, "\\varphi ", "&phi;");
    O.epsilon = e(t, "\\epsilon ", "&#1013;");
    O.epsiv = O.varepsilon = e(t, "\\varepsilon ", "&epsilon;");
    O.piv = O.varpi = e(t, "\\varpi ", "&piv;");
    O.sigmaf = O.sigmav = O.varsigma = e(t, "\\varsigma ", "&sigmaf;");
    O.thetav = O.vartheta = O.thetasym = e(t, "\\vartheta ", "&thetasym;");
    O.upsilon = O.upsi = e(t, "\\upsilon ", "&upsilon;");
    O.gammad = O.Gammad = O.digamma = e(t, "\\digamma ", "&#989;");
    O.kappav = O.varkappa = e(t, "\\varkappa ", "&#1008;");
    O.rhov = O.varrho = e(t, "\\varrho ", "&#1009;");
    O.pi = O["\ucf80"] = e(f, "\\pi ", "&pi;");
    O.lambda = e(f, "\\lambda ", "&lambda;");
    O.Upsilon = O.Upsi = O.upsih = O.Upsih = e(ac, "\\Upsilon ", '<var style="font-family: serif">&upsih;</var>');
    O.Gamma = O.Delta = O.Theta = O.Lambda = O.Xi = O.Pi = O.Sigma = O.Phi = O.Psi = O.Omega = O.forall = i(ag, function(L, P) { L.init = function(R) { P.init.call(this, "\\" + R + " ", "&" + R + ";") } });
    var aj = i(F, function(L) { L.init = function(P) { this.latex = P };
        L.createLeftOf = function(P) { P.writeLatex(this.latex) };
        L.parser = function() {
            var P = Y.parse(this.latex).children();
            return c.succeed(P) } });
    O["\uc2b9"] = e(aj, "^1");
    O["\uc2b2"] = e(aj, "^2");
    O["\uc2b3"] = e(aj, "^3");
    O["\uc2bc"] = e(aj, "\\frac14");
    O["\uc2bd"] = e(aj, "\\frac12");
    O["\uc2be"] = e(aj, "\\frac34");
    var ao = i(ac, function(L, P) { L.init = function(aw, R, ax) { P.init.call(this, aw, '<span class="binary-operator">' + R + "</span>", ax) } });
    var d = i(ao, function(L) { L.init = ag.prototype.init;
        L.respace = function() {
            if (!this[o]) { this.jQ[0].className = "" } else {
                if (this[o] instanceof ao && this[g] && !(this[g] instanceof ao)) { this.jQ[0].className = "unary-operator" } else { this.jQ[0].className = "binary-operator" } }
            return this } });
    O["+"] = e(d, "+", "+");
    O["\u2013"] = O["-"] = e(d, "-", "&minus;");
    O["\uc2b1"] = O.pm = O.plusmn = O.plusminus = e(d, "\\pm ", "&plusmn;");
    O.mp = O.mnplus = O.minusplus = e(d, "\\mp ", "&#8723;");
    A["*"] = O.sdot = O.cdot = e(ao, "\\cdot ", "&middot;");
    O["="] = e(ao, "=", "=");
    O["<"] = e(ao, "<", "&lt;");
    O[">"] = e(ao, ">", "&gt;");
    O.notin = O.sim = O.cong = O.equiv = O.oplus = O.otimes = i(ao, function(L, P) { L.init = function(R) { P.init.call(this, "\\" + R + " ", "&" + R + ";") } });
    O.times = e(ao, "\\times ", "&times;", "[x]");
    O["\uc3b7"] = O.div = O.divide = O.divides = e(ao, "\\div ", "&divide;", "[/]");
    O["\u2260"] = O.ne = O.neq = e(ao, "\\ne ", "&ne;");
    O.ast = O.star = O.loast = O.lowast = e(ao, "\\ast ", "&lowast;");
    O.therefor = O.therefore = e(ao, "\\therefore ", "&there4;");
    O.cuz = O.because = e(ao, "\\because ", "&#8757;");
    O.prop = O.propto = e(ao, "\\propto ", "&prop;");
    O["\u2248"] = O.asymp = O.approx = e(ao, "\\approx ", "&asymp;");
    O.lt = e(ao, "<", "&lt;");
    O.gt = e(ao, ">", "&gt;");
    O["\u2264"] = O.le = O.leq = e(ao, "\\le ", "&le;");
    O["\u2265"] = O.ge = O.geq = e(ao, "\\ge ", "&ge;");
    O.isin = O["in"] = e(ao, "\\in ", "&isin;");
    O.ni = O.contains = e(ao, "\\ni ", "&ni;");
    O.notni = O.niton = O.notcontains = O.doesnotcontain = e(ao, "\\not\\ni ", "&#8716;");
    O.sub = O.subset = e(ao, "\\subset ", "&sub;");
    O.sup = O.supset = O.superset = e(ao, "\\supset ", "&sup;");
    O.nsub = O.notsub = O.nsubset = O.notsubset = e(ao, "\\not\\subset ", "&#8836;");
    O.nsup = O.notsup = O.nsupset = O.notsupset = O.nsuperset = O.notsuperset = e(ao, "\\not\\supset ", "&#8837;");
    O.sube = O.subeq = O.subsete = O.subseteq = e(ao, "\\subseteq ", "&sube;");
    O.supe = O.supeq = O.supsete = O.supseteq = O.supersete = O.superseteq = e(ao, "\\supseteq ", "&supe;");
    O.nsube = O.nsubeq = O.notsube = O.notsubeq = O.nsubsete = O.nsubseteq = O.notsubsete = O.notsubseteq = e(ao, "\\not\\subseteq ", "&#8840;");
    O.nsupe = O.nsupeq = O.notsupe = O.notsupeq = O.nsupsete = O.nsupseteq = O.notsupsete = O.notsupseteq = O.nsupersete = O.nsuperseteq = O.notsupersete = O.notsuperseteq = e(ao, "\\not\\supseteq ", "&#8841;");
    var w = i(ac, function(L, P) { L.init = function(aw, R) { P.init.call(this, aw, "<big>" + R + "</big>") } });
    O["\u2211"] = O.sum = O.summation = e(w, "\\sum ", "&sum;");
    O["\u220f"] = O.prod = O.product = e(w, "\\prod ", "&prod;");
    O.coprod = O.coproduct = e(w, "\\coprod ", "&#8720;");
    O["\u222b"] = O["int"] = O.integral = e(w, "\\int ", "&int;");
    O.naturals = O.Naturals = e(ag, "\\mathbb{N}", "&#8469;");
    O.primes = O.Primes = O.projective = O.Projective = O.probability = O.Probability = e(ag, "\\mathbb{P}", "&#8473;");
    O.integers = O.Integers = e(ag, "\\mathbb{Z}", "&#8484;");
    O.rationals = O.Rationals = e(ag, "\\mathbb{Q}", "&#8474;");
    O.reals = O.Reals = e(ag, "\\mathbb{R}", "&#8477;");
    O.complex = O.Complex = O.complexes = O.Complexes = O.complexplane = O.Complexplane = O.ComplexPlane = e(ag, "\\mathbb{C}", "&#8450;");
    O.Hamiltonian = O.quaternions = O.Quaternions = e(ag, "\\mathbb{H}", "&#8461;");
    O.quad = O.emsp = e(ag, "\\quad ", "    ");
    O.qquad = e(ag, "\\qquad ", "        ");
    O.diamond = e(ag, "\\diamond ", "&#9671;");
    O.bigtriangleup = e(ag, "\\bigtriangleup ", "&#9651;");
    O.ominus = e(ag, "\\ominus ", "&#8854;");
    O.uplus = e(ag, "\\uplus ", "&#8846;");
    O.bigtriangledown = e(ag, "\\bigtriangledown ", "&#9661;");
    O.sqcap = e(ag, "\\sqcap ", "&#8851;");
    O.triangleleft = e(ag, "\\triangleleft ", "&#8882;");
    O.sqcup = e(ag, "\\sqcup ", "&#8852;");
    O.triangleright = e(ag, "\\triangleright ", "&#8883;");
    O.odot = e(ag, "\\odot ", "&#8857;");
    O.bigcirc = e(ag, "\\bigcirc ", "&#9711;");
    O.dagger = e(ag, "\\dagger ", "&#0134;");
    O.ddagger = e(ag, "\\ddagger ", "&#135;");
    O.wr = e(ag, "\\wr ", "&#8768;");
    O.amalg = e(ag, "\\amalg ", "&#8720;");
    O.models = e(ag, "\\models ", "&#8872;");
    O.prec = e(ag, "\\prec ", "&#8826;");
    O.succ = e(ag, "\\succ ", "&#8827;");
    O.preceq = e(ag, "\\preceq ", "&#8828;");
    O.succeq = e(ag, "\\succeq ", "&#8829;");
    O.simeq = e(ag, "\\simeq ", "&#8771;");
    O.mid = e(ag, "\\mid ", "&#8739;");
    O.ll = e(ag, "\\ll ", "&#8810;");
    O.gg = e(ag, "\\gg ", "&#8811;");
    O.parallel = e(ag, "\\parallel ", "&#8741;");
    O.bowtie = e(ag, "\\bowtie ", "&#8904;");
    O.sqsubset = e(ag, "\\sqsubset ", "&#8847;");
    O.sqsupset = e(ag, "\\sqsupset ", "&#8848;");
    O.smile = e(ag, "\\smile ", "&#8995;");
    O.sqsubseteq = e(ag, "\\sqsubseteq ", "&#8849;");
    O.sqsupseteq = e(ag, "\\sqsupseteq ", "&#8850;");
    O.doteq = e(ag, "\\doteq ", "&#8784;");
    O.frown = e(ag, "\\frown ", "&#8994;");
    O.vdash = e(ag, "\\vdash ", "&#8870;");
    O.dashv = e(ag, "\\dashv ", "&#8867;");
    O.longleftarrow = e(ag, "\\longleftarrow ", "&#8592;");
    O.longrightarrow = e(ag, "\\longrightarrow ", "&#8594;");
    O.Longleftarrow = e(ag, "\\Longleftarrow ", "&#8656;");
    O.Longrightarrow = e(ag, "\\Longrightarrow ", "&#8658;");
    O.longleftrightarrow = e(ag, "\\longleftrightarrow ", "&#8596;");
    O.updownarrow = e(ag, "\\updownarrow ", "&#8597;");
    O.Longleftrightarrow = e(ag, "\\Longleftrightarrow ", "&#8660;");
    O.Updownarrow = e(ag, "\\Updownarrow ", "&#8661;");
    O.mapsto = e(ag, "\\mapsto ", "&#8614;");
    O.nearrow = e(ag, "\\nearrow ", "&#8599;");
    O.hookleftarrow = e(ag, "\\hookleftarrow ", "&#8617;");
    O.hookrightarrow = e(ag, "\\hookrightarrow ", "&#8618;");
    O.searrow = e(ag, "\\searrow ", "&#8600;");
    O.leftharpoonup = e(ag, "\\leftharpoonup ", "&#8636;");
    O.rightharpoonup = e(ag, "\\rightharpoonup ", "&#8640;");
    O.swarrow = e(ag, "\\swarrow ", "&#8601;");
    O.leftharpoondown = e(ag, "\\leftharpoondown ", "&#8637;");
    O.rightharpoondown = e(ag, "\\rightharpoondown ", "&#8641;");
    O.nwarrow = e(ag, "\\nwarrow ", "&#8598;");
    O.ldots = e(ag, "\\ldots ", "&#8230;");
    O.cdots = e(ag, "\\cdots ", "&#8943;");
    O.vdots = e(ag, "\\vdots ", "&#8942;");
    O.ddots = e(ag, "\\ddots ", "&#8944;");
    O.surd = e(ag, "\\surd ", "&#8730;");
    O.triangle = e(ag, "\\triangle ", "&#9653;");
    O.ell = e(ag, "\\ell ", "&#8467;");
    O.top = e(ag, "\\top ", "&#8868;");
    O.flat = e(ag, "\\flat ", "&#9837;");
    O.natural = e(ag, "\\natural ", "&#9838;");
    O.sharp = e(ag, "\\sharp ", "&#9839;");
    O.wp = e(ag, "\\wp ", "&#8472;");
    O.bot = e(ag, "\\bot ", "&#8869;");
    O.clubsuit = e(ag, "\\clubsuit ", "&#9827;");
    O.diamondsuit = e(ag, "\\diamondsuit ", "&#9826;");
    O.heartsuit = e(ag, "\\heartsuit ", "&#9825;");
    O.spadesuit = e(ag, "\\spadesuit ", "&#9824;");
    O.oint = e(ag, "\\oint ", "&#8750;");
    O.bigcap = e(ag, "\\bigcap ", "&#8745;");
    O.bigcup = e(ag, "\\bigcup ", "&#8746;");
    O.bigsqcup = e(ag, "\\bigsqcup ", "&#8852;");
    O.bigvee = e(ag, "\\bigvee ", "&#8744;");
    O.bigwedge = e(ag, "\\bigwedge ", "&#8743;");
    O.bigodot = e(ag, "\\bigodot ", "&#8857;");
    O.bigotimes = e(ag, "\\bigotimes ", "&#8855;");
    O.bigoplus = e(ag, "\\bigoplus ", "&#8853;");
    O.biguplus = e(ag, "\\biguplus ", "&#8846;");
    O.lfloor = e(ag, "\\lfloor ", "&#8970;");
    O.rfloor = e(ag, "\\rfloor ", "&#8971;");
    O.lceil = e(ag, "\\lceil ", "&#8968;");
    O.rceil = e(ag, "\\rceil ", "&#8969;");
    O.slash = e(ag, "\\slash ", "&#47;");
    O.opencurlybrace = e(ag, "\\opencurlybrace ", "&#123;");
    O.closecurlybrace = e(ag, "\\closecurlybrace ", "&#125;");
    O.caret = e(ag, "\\caret ", "^");
    O.underscore = e(ag, "\\underscore ", "_");
    O.backslash = e(ag, "\\backslash ", "\\");
    O.vert = e(ag, "|");
    O.perp = O.perpendicular = e(ag, "\\perp ", "&perp;");
    O.nabla = O.del = e(ag, "\\nabla ", "&nabla;");
    O.hbar = e(ag, "\\hbar ", "&#8463;");
    O.AA = O.Angstrom = O.angstrom = e(ag, "\\text\\AA ", "&#8491;");
    O.ring = O.circ = O.circle = e(ag, "\\circ ", "&#8728;");
    O.bull = O.bullet = e(ag, "\\bullet ", "&bull;");
    O.setminus = O.smallsetminus = e(ag, "\\setminus ", "&#8726;");
    O.not = O["\uc2ac"] = O.neg = e(ag, "\\neg ", "&not;");
    O["\u2026"] = O.dots = O.ellip = O.hellip = O.ellipsis = O.hellipsis = e(ag, "\\dots ", "&hellip;");
    O.converges = O.darr = O.dnarr = O.dnarrow = O.downarrow = e(ag, "\\downarrow ", "&darr;");
    O.dArr = O.dnArr = O.dnArrow = O.Downarrow = e(ag, "\\Downarrow ", "&dArr;");
    O.diverges = O.uarr = O.uparrow = e(ag, "\\uparrow ", "&uarr;");
    O.uArr = O.Uparrow = e(ag, "\\Uparrow ", "&uArr;");
    O.to = e(ao, "\\to ", "&rarr;");
    O.rarr = O.rightarrow = e(ag, "\\rightarrow ", "&rarr;");
    O.implies = e(ao, "\\Rightarrow ", "&rArr;");
    O.rArr = O.Rightarrow = e(ag, "\\Rightarrow ", "&rArr;");
    O.gets = e(ao, "\\gets ", "&larr;");
    O.larr = O.leftarrow = e(ag, "\\leftarrow ", "&larr;");
    O.impliedby = e(ao, "\\Leftarrow ", "&lArr;");
    O.lArr = O.Leftarrow = e(ag, "\\Leftarrow ", "&lArr;");
    O.harr = O.lrarr = O.leftrightarrow = e(ag, "\\leftrightarrow ", "&harr;");
    O.iff = e(ao, "\\Leftrightarrow ", "&hArr;");
    O.hArr = O.lrArr = O.Leftrightarrow = e(ag, "\\Leftrightarrow ", "&hArr;");
    O.Re = O.Real = O.real = e(ag, "\\Re ", "&real;");
    O.Im = O.imag = O.image = O.imagin = O.imaginary = O.Imaginary = e(ag, "\\Im ", "&image;");
    O.part = O.partial = e(ag, "\\partial ", "&part;");
    O.inf = O.infin = O.infty = O.infinity = e(ag, "\\infty ", "&infin;");
    O.alef = O.alefsym = O.aleph = O.alephsym = e(ag, "\\aleph ", "&alefsym;");
    O.xist = O.xists = O.exist = O.exists = e(ag, "\\exists ", "&exist;");
    O.and = O.land = O.wedge = e(ag, "\\wedge ", "&and;");
    O.or = O.lor = O.vee = e(ag, "\\vee ", "&or;");
    O.empty = O.emptyset = O.oslash = O.Oslash = O.nothing = O.varnothing = e(ao, "\\varnothing ", "&empty;");
    O.cup = O.union = e(ao, "\\cup ", "&cup;");
    O.cap = O.intersect = O.intersection = e(ao, "\\cap ", "&cap;");
    O.deg = O.degree = e(ag, "^\\circ ", "&deg;");
    O.ang = O.angle = e(ag, "\\angle ", "&ang;");
    var Z = i(ac, function(L, P) { L.init = function(R) { P.init.call(this, "\\" + R + " ", "<span>" + R + "</span>") };
        L.respace = function() { this.jQ[0].className = (this[g] instanceof ar || this[g] instanceof E) ? "" : "non-italicized-function" } });
    O.ln = O.lg = O.log = O.span = O.proj = O.det = O.dim = O.min = O.max = O.mod = O.lcm = O.gcd = O.gcf = O.hcf = O.lim = Z;
    (function() {
        var P = ["sin", "cos", "tan", "sec", "cosec", "csc", "cotan", "cot"];
        for (var L in P) { O[P[L]] = O[P[L] + "h"] = O["a" + P[L]] = O["arc" + P[L]] = O["a" + P[L] + "h"] = O["arc" + P[L] + "h"] = Z } }());
    var Y = (function() {
        function aI(aL) {
            var aM = x();
            aL.adopt(aM, 0, 0);
            return aM }

        function aB(aN) {
            var aM = aN[0] || x();
            for (var aL = 1; aL < aN.length; aL += 1) { aN[aL].children().adopt(aM, aM.endChild[g], 0) }
            return aM }
        var L = c.string;
        var aw = c.regex;
        var aK = c.letter;
        var aC = c.any;
        var aH = c.optWhitespace;
        var aJ = c.succeed;
        var aA = c.fail;
        var aD = aK.map(t);
        var aE = aw(/^[^${}\\_^]/).map(ag);
        var P = aw(/^[^\\]/).or(L("\\").then(aw(/^[a-z]+/i).or(aw(/^\s+/).result(" ")).or(aC))).then(function(aM) {
            var aL = O[aM];
            if (aL) {
                return aL(aM).parser() } else {
                return aA("unknown command: \\" + aM) } });
        var ax = P.or(aD).or(aE);
        var az = L("{").then(function() {
            return aG }).skip(L("}"));
        var ay = aH.then(az.or(ax.map(aI)));
        var aG = ay.many().map(aB).skip(aH);
        var aF = L("[").then(ay.then(function(aL) {
            return aL.join("latex") !== "]" ? aJ(aL) : aA() }).many().map(aB).skip(aH)).skip(L("]"));
        var R = aG;
        R.block = ay;
        R.optBlock = aF;
        return R })();
    var N = i(z, function(P) { P.init = function(ax) { this.parent = this.root = ax;
            var ay = this.jQ = this._jQ = V('<span class="cursor">&zwj;</span>');
            this.blink = function() { ay.toggleClass("blink") };
            this.upDownCache = {} };
        P.show = function() { this.jQ = this._jQ.removeClass("blink");
            if ("intervalId" in this) { clearInterval(this.intervalId) } else {
                if (this[g]) {
                    if (this.selection && this.selection.end[o][o] === this[o]) { this.jQ.insertBefore(this.selection.jQ) } else { this.jQ.insertBefore(this[g].jQ.first()) } } else { this.jQ.appendTo(this.parent.jQ) }
                this.parent.focus() }
            this.intervalId = setInterval(this.blink, 500);
            return this };
        P.hide = function() {
            if ("intervalId" in this) { clearInterval(this.intervalId) }
            delete this.intervalId;
            this.jQ.detach();
            this.jQ = V();
            return this };
        P.withDirInsertAt = function(ay, aA, ax, aB) {
            var az = this.parent;
            this.parent = aA;
            this[ay] = ax;
            this[-ay] = aB;
            az.blur() };
        P.insDirOf = function(ax, ay) { au(ax);
            this.withDirInsertAt(ax, ay.parent, ay[ax], ay);
            this.parent.jQ.addClass("hasCursor");
            this.jQ.insDirOf(ax, ay.jQ);
            return this };
        P.insLeftOf = function(ax) {
            return this.insDirOf(o, ax) };
        P.insRightOf = function(ax) {
            return this.insDirOf(g, ax) };
        P.insAtDirEnd = function(ax, ay) { au(ax);
            this.withDirInsertAt(ax, ay, 0, ay.endChild[ax]);
            if (ax === o && ay.textarea) { this.jQ.insDirOf(-ax, ay.textarea) } else { this.jQ.insAtDirEnd(ax, ay.jQ) }
            ay.focus();
            return this };
        P.insAtLeftEnd = function(ax) {
            return this.insAtDirEnd(o, ax) };
        P.insAtRightEnd = function(ax) {
            return this.insAtDirEnd(g, ax) };
        P.hopDir = function(ax) { au(ax);
            this.jQ.insDirOf(ax, this[ax].jQ);
            this[-ax] = this[ax];
            this[ax] = this[ax][ax];
            return this };
        P.hopLeft = function() {
            return this.hopDir(o) };
        P.hopRight = function() {
            return this.hopDir(g) };
        P.moveDirWithin = function(ax, ay) { au(ax);
            if (this[ax]) {
                if (this[ax].endChild[-ax]) { this.insAtDirEnd(-ax, this[ax].endChild[-ax]) } else { this.hopDir(ax) } } else {
                if (this.parent === ay) {
                    return }
                if (this.parent[ax]) { this.insAtDirEnd(-ax, this.parent[ax]) } else { this.insDirOf(ax, this.parent.parent) } } };
        P.moveLeftWithin = function(ax) {
            return this.moveDirWithin(o, ax) };
        P.moveRightWithin = function(ax) {
            return this.moveDirWithin(g, ax) };
        P.moveDir = function(ax) { au(ax);
            R(this);
            if (this.selection) { this.insDirOf(ax, this.selection.end[ax]).clearSelection() } else { this.moveDirWithin(ax, this.root) }
            return this.show() };
        P.moveLeft = function() {
            return this.moveDir(o) };
        P.moveRight = function() {
            return this.moveDir(g) };
        P.moveUp = function() {
            return L(this, "up") };
        P.moveDown = function() {
            return L(this, "down") };

        function L(ax, ay) {
            if (ax[g][ay]) { ax.insAtLeftEnd(ax[g][ay]) } else {
                if (ax[o][ay]) { ax.insAtRightEnd(ax[o][ay]) } else {
                    var aB = ax.parent;
                    do {
                        var aC = aB[ay];
                        if (aC) {
                            if (typeof aC === "function") { aC = aB[ay](ax) }
                            if (aC === false || aC instanceof x) { ax.upDownCache[aB.id] = z(ax.parent, ax[o], ax[g]);
                                if (aC instanceof x) {
                                    var aA = ax.upDownCache[aC.id];
                                    if (aA) {
                                        if (aA[g]) { ax.insLeftOf(aA[g]) } else { ax.insAtRightEnd(aA.parent) } } else {
                                        var az = aw(ax).left;
                                        ax.insAtRightEnd(aC);
                                        ax.seekHoriz(az, aC) } }
                                break } }
                        aB = aB.parent.parent } while (aB) } }
            return ax.clearSelection().show() }
        P.seek = function(aA, ay, ax) { R(this);
            var az, aC, aB = this.clearSelection().show();
            if (aA.hasClass("empty")) { aB.insAtLeftEnd(H[aA.attr(k)]);
                return aB }
            az = H[aA.attr(J)];
            if (az instanceof ac) {
                if (aA.outerWidth() > 2 * (ay - aA.offset().left)) { aB.insLeftOf(az) } else { aB.insRightOf(az) }
                return aB }
            if (!az) { aC = H[aA.attr(k)];
                if (!aC) { aA = aA.parent();
                    az = H[aA.attr(J)];
                    if (!az) { aC = H[aA.attr(k)];
                        if (!aC) { aC = aB.root } } } }
            if (az) { aB.insRightOf(az) } else { aB.insAtRightEnd(aC) }
            return aB.seekHoriz(ay, aB.root) };
        P.seekHoriz = function(ax, aA) {
            var az = this;
            var ay = aw(az).left - ax;
            var aB;
            do { az.moveLeftWithin(aA);
                aB = ay;
                ay = aw(az).left - ax } while (ay > 0 && (az[o] || az.parent !== aA));
            if (-ay > aB) { az.moveRightWithin(aA) }
            return az };

        function aw(ax) {
            var ay = ax.jQ.removeClass("cursor").offset();
            ax.jQ.addClass("cursor");
            return ay }
        P.writeLatex = function(aA) {
            var ay = this;
            R(ay);
            ay.show().deleteSelection();
            var az = c.all;
            var ax = c.eof;
            var aB = Y.skip(ax).or(az.result(false)).parse(aA);
            if (aB) { aB.children().adopt(ay.parent, ay[o], ay[g]);
                H.jQize(aB.join("html")).insertBefore(ay.jQ);
                ay[o] = aB.endChild[g];
                aB.finalizeInsert();
                ay.parent.bubble("redraw") }
            return this.hide() };
        P.write = function(ay) {
            var ax = this.prepareWrite();
            return this.insertCh(ay, ax) };
        P.insertCh = function(ax, ay) { this.parent.write(this, ax, ay);
            return this };
        P.insertCmd = function(ax, az) {
            var ay = O[ax];
            if (ay) { ay = ay(ax);
                if (az) { ay.replaces(az) }
                ay.createLeftOf(this) } else { ay = ah();
                ay.replaces(ax);
                ay.endChild[o].focus = function() { delete this.focus;
                    return this };
                ay.createLeftOf(this);
                this.insRightOf(ay);
                if (az) { az.remove() } }
            return this };
        P.unwrapGramp = function() {
            var az = this.parent.parent;
            var ax = az.parent;
            var aA = az[g];
            var aB = this;
            var ay = az[o];
            az.disown().eachChild(function(aC) {
                if (aC.isEmpty()) {
                    return }
                aC.children().adopt(ax, ay, aA).each(function(aD) { aD.jQ.insertBefore(az.jQ.first()) });
                ay = aC.endChild[g] });
            if (!this[g]) {
                if (this[o]) { this[g] = this[o][g] } else {
                    while (!this[g]) { this.parent = this.parent[g];
                        if (this.parent) { this[g] = this.parent.endChild[o] } else { this[g] = az[g];
                            this.parent = ax;
                            break } } } }
            if (this[g]) { this.insLeftOf(this[g]) } else { this.insAtRightEnd(ax) }
            az.jQ.remove();
            if (az[o]) { az[o].respace() }
            if (az[g]) { az[g].respace() } };
        P.deleteDir = function(ax) { au(ax);
            R(this);
            this.show();
            if (this.deleteSelection()) {} else {
                if (this[ax]) {
                    if (this[ax].isEmpty()) { this[ax] = this[ax].remove()[ax] } else { this.selectDir(ax) } } else {
                    if (this.parent !== this.root) {
                        if (this.parent.parent.isEmpty()) {
                            return this.insDirOf(-ax, this.parent.parent).deleteDir(ax) } else { this.unwrapGramp() } } } }
            if (this[o]) { this[o].respace() }
            if (this[g]) { this[g].respace() }
            this.parent.bubble("redraw");
            return this };
        P.backspace = function() {
            return this.deleteDir(o) };
        P.deleteForward = function() {
            return this.deleteDir(g) };
        P.selectFrom = function(aB) {
            var aF = this,
                aA = aB;
            loopThroughAncestors: while (true) {
                for (var aC = this; aC !== aF.parent.parent; aC = aC.parent.parent) {
                    if (aC.parent === aA.parent) { az = aC;
                        aD = aA;
                        break loopThroughAncestors } }
                for (var aE = aB; aE !== aA.parent.parent; aE = aE.parent.parent) {
                    if (aF.parent === aE.parent) { az = aF;
                        aD = aE;
                        break loopThroughAncestors } }
                if (aF.parent.parent) { aF = aF.parent.parent }
                if (aA.parent.parent) { aA = aA.parent.parent } }
            var az, aD, ax;
            if (az[g] !== aD) {
                for (var ay = az; ay; ay = ay[g]) {
                    if (ay === aD[o]) { ax = true;
                        break } }
                if (!ax) { ax = aD;
                    aD = az;
                    az = ax } }
            this.hide().selection = X(az[o][g] || az.parent.endChild[o], aD[g][o] || aD.parent.endChild[g]);
            this.insRightOf(aD[g][o] || aD.parent.endChild[g]);
            this.root.selectionChanged() };
        P.selectDir = function(ax) { au(ax);
            R(this);
            if (this.selection) {
                if (this.selection.end[ax] === this[-ax]) {
                    if (this[ax]) { this.hopDir(ax).selection.extendDir(ax) } else {
                        if (this.parent !== this.root) { this.insDirOf(ax, this.parent.parent).selection.levelUp() } } } else { this.hopDir(ax);
                    if (this.selection.end[ax] === this.selection.end[-ax]) { this.clearSelection().show();
                        return }
                    this.selection.retractDir(ax) } } else {
                if (this[ax]) { this.hopDir(ax) } else {
                    if (this.parent === this.root) {
                        return }
                    this.insDirOf(ax, this.parent.parent) }
                this.hide().selection = X(this[-ax]) }
            this.root.selectionChanged() };
        P.selectLeft = function() {
            return this.selectDir(o) };
        P.selectRight = function() {
            return this.selectDir(g) };

        function R(ax) { ax.upDownCache = {} }
        P.prepareMove = function() { R(this);
            return this.show().clearSelection() };
        P.prepareEdit = function() { R(this);
            return this.show().deleteSelection() };
        P.prepareWrite = function() { R(this);
            return this.show().replaceSelection() };
        P.clearSelection = function() {
            if (this.selection) { this.selection.clear();
                delete this.selection;
                this.root.selectionChanged() }
            return this };
        P.deleteSelection = function() {
            if (!this.selection) {
                return false }
            this[o] = this.selection.end[o][o];
            this[g] = this.selection.end[g][g];
            this.selection.remove();
            this.root.selectionChanged();
            return delete this.selection };
        P.replaceSelection = function() {
            var ax = this.selection;
            if (ax) { this[o] = ax.end[o][o];
                this[g] = ax.end[g][g];
                delete this.selection }
            return ax } });
    var X = i(ae, function(L, P) { L.init = function() {
            var R = this;
            P.init.apply(R, arguments);
            R.jQwrap(R.jQ) };
        L.jQwrap = function(R) { this.jQ = R.wrapAll('<span class="selection"></span>').parent() };
        L.adopt = function() { this.jQ.replaceWith(this.jQ = this.jQ.children());
            return P.adopt.apply(this, arguments) };
        L.clear = function() { this.jQ.replaceWith(this.jQ.children());
            return this };
        L.levelUp = function() {
            var aw = this,
                R = aw.end[o] = aw.end[g] = aw.end[g].parent.parent;
            aw.clear().jQwrap(R.jQ);
            return aw };
        L.extendDir = function(R) { au(R);
            this.end[R] = this.end[R][R];
            this.end[R].jQ.insAtDirEnd(R, this.jQ);
            return this };
        L.extendLeft = function() {
            return this.extendDir(o) };
        L.extendRight = function() {
            return this.extendDir(g) };
        L.retractDir = function(R) { au(R);
            this.end[-R].jQ.insDirOf(-R, this.jQ);
            this.end[-R] = this.end[-R][R] };
        L.retractRight = function() {
            return this.retractDir(g) };
        L.retractLeft = function() {
            return this.retractDir(o) } });
    B.fn.mathquill = function(ay, ax) {
        switch (ay) {
            case "redraw":
                return this.each(function() {
                    var aB = V(this).attr(k),
                        aC = aB && H[aB];
                    if (aC) {
                        (function aA(aD) { aD.eachChild(aA);
                            if (aD.redraw) { aD.redraw() } }(aC)) } });
            case "revert":
                return this.each(function() {
                    var aA = V(this).attr(k),
                        aB = aA && H[aA];
                    if (aB && aB.revert) { aB.revert() } });
            case "latex":
                if (arguments.length > 1) {
                    return this.each(function() {
                        var aA = V(this).attr(k),
                            aB = aA && H[aA];
                        if (aB) { aB.renderLatex(ax) } }) }
                var P = V(this).attr(k),
                    az = P && H[P];
                return az && az.latex();
            case "text":
                var P = V(this).attr(k),
                    az = P && H[P];
                return az && az.text();
            case "html":
                return this.html().replace(/ ?hasCursor|hasCursor /, "").replace(/ class=(""|(?= |>))/g, "").replace(/<span class="?cursor( blink)?"?><\/span>/i, "").replace(/<span class="?textarea"?><textarea><\/textarea><\/span>/i, "");
            case "write":
                if (arguments.length > 1) {
                    return this.each(function() {
                        var aA = V(this).attr(k),
                            aC = aA && H[aA],
                            aB = aC && aC.cursor;
                        if (aB) { aB.writeLatex(ax).parent.blur() } }) }
            case "cmd":
                if (arguments.length > 1) {
                    return this.each(function() {
                        var aA = V(this).attr(k),
                            aD = aA && H[aA],
                            aC = aD && aD.cursor;
                        if (aC) {
                            var aB = aC.prepareWrite();
                            if (/^\\[a-z]+$/i.test(ax)) { aC.insertCmd(ax.slice(1), aB) } else { aC.insertCh(ax, aB) }
                            aC.hide().parent.blur() } }) }
            default:
                var L = ay === "textbox",
                    R = L || ay === "editable",
                    aw = L ? aa : n;
                return this.each(function() { ak(V(this), aw(), L, R) }) } };
    B(function() { B(".mathquill-editable:not(.mathquill-rendered-math)").mathquill("editable");
        B(".mathquill-textbox:not(.mathquill-rendered-math)").mathquill("textbox");
        B(".mathquill-embedded-latex").mathquill() }) }());
