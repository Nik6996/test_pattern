var EditorMemento = /** @class */ (function () {
    function EditorMemento(content, content2) {
        this.content = content;
        this.content2 = content2;
    }
    EditorMemento.prototype.getContent = function () {
        return this.content;
    };
    EditorMemento.prototype.getContent1 = function () {
        return this.content2;
    };
    return EditorMemento;
}());
var Editor = /** @class */ (function () {
    function Editor() {
    }
    Editor.prototype.type = function (text, text1) {
        this.content = text;
        this.content1 = text1;
    };
    Editor.prototype.getContent = function () {
        return this.content + ' ' + this.content1;
    };
    Editor.prototype.save = function () {
        return new EditorMemento(this.content, this.content1);
    };
    Editor.prototype.restore = function (memento) {
        this.content = memento.getContent();
        this.content1 = memento.getContent1();
    };
    return Editor;
}());
var editor = new Editor();
editor.type('первое', 'значение');
console.log(editor.getContent());
var saved = editor.save();
editor.type('новые', 'данные');
console.log(editor.getContent());
editor.restore(saved);
console.log(editor.getContent());
var testMemento = new EditorMemento('ложные', 'данные');
console.log(testMemento.getContent(), testMemento.getContent1());
//# sourceMappingURL=memento.js.map