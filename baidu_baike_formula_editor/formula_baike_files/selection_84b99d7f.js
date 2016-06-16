(function(a) { a.fn.selection = function() {
        var f, g, b, c;
        if (this[0].selectionStart == undefined) {
            var d = document.selection;
            if (this[0].tagName.toLowerCase() != "textarea") {
                var i = this.val();
                b = d.createRange().duplicate();
                b.moveEnd("character", i.length);
                f = (b.text == "" ? i.length : i.lastIndexOf(b.text));
                b = d.createRange().duplicate();
                b.moveStart("character", -i.length);
                g = b.text.length } else { b = d.createRange(), c = b.duplicate();
                c.moveToElementText(this[0]);
                c.setEndPoint("EndToEnd", b);
                f = c.text.length - b.text.length;
                g = f + b.text.length } } else { f = this[0].selectionStart, g = this[0].selectionEnd }
        var h = this[0].value.substring(f, g);
        return { start: f, end: g, text: h } } })(jQuery);
