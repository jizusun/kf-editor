var dialog;
var editor;
var args;
(function() {
    var b = window.frameElement;
    var c = window.parent;
    var a = b.id.replace(/_iframe$/, "");
    dialog = c.$EDITORUI[a];
    editor = dialog.editor
})();
