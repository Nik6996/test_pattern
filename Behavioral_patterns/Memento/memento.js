var EditorMemento = /** @class */ (function () {
    function EditorMemento(content) {
        this.content = content;
    }
    EditorMemento.prototype.getContent = function () {
        return this.content;
    };
    return EditorMemento;
}());
var Editor = /** @class */ (function () {
    function Editor() {
    }
    Editor.prototype.type = function (text) {
        this.content = text;
    };
    Editor.prototype.getContent = function () {
        return this.content;
    };
    Editor.prototype.save = function () {
        return new EditorMemento(this.content);
    };
    Editor.prototype.restore = function (memento) {
        this.content = memento.getContent();
    };
    return Editor;
}());
var editor = new Editor();
editor.type('test1');
editor.type('test2');
var saved = editor.save();
editor.type('test3');
console.log(editor.getContent());
editor.restore(saved);
console.log(editor.getContent());
var testMemento = new EditorMemento('string');
testMemento.getContent();
//# sourceMappingURL=memento.js.map