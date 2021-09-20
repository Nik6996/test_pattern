var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var TextEditor = /** @class */ (function () {
    function TextEditor(state) {
        this.link(state);
    }
    TextEditor.prototype.link = function (state) {
        this.state = state;
        this.state.setState(this);
    };
    TextEditor.prototype.request = function () {
        this.state.write();
    };
    return TextEditor;
}());
var State = /** @class */ (function () {
    function State() {
    }
    State.prototype.setState = function (data) {
        this.dataEditor = data;
    };
    return State;
}());
var FontMedium = /** @class */ (function (_super) {
    __extends(FontMedium, _super);
    function FontMedium() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FontMedium.prototype.write = function () {
        console.log('средний шрифт');
        this.dataEditor.link(new FontBold());
    };
    return FontMedium;
}(State));
var FontBold = /** @class */ (function (_super) {
    __extends(FontBold, _super);
    function FontBold() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FontBold.prototype.write = function () {
        console.log('жирный шрифт');
        this.dataEditor.link(new FontMedium());
    };
    return FontBold;
}(State));
var textEditor = new TextEditor(new FontMedium());
textEditor.request();
var textEditor1 = textEditor;
textEditor1.request();
// interface IState {
// 	write(): void;
// }
// class SmallFont implements IState {
// 	public write(): void {
// 		console.log(`шрифт маленький`)
// 	}
// }
// class MediumFont implements IState {
// 	public write(): void {
// 		console.log(`шрифт средний`)
// 	}
// }
// class BoldFont implements IState {
// 	public write(): void {
// 		console.log(`шрифт жирный`)
// 	}
// }
// class TextEditor {
// 	private state: IState;
// 	constructor(state: IState) {
// 		this.state = state;
// 	}
// 	public setState(state: IState): void {
// 		this.state = state;
// 	}
// 	public getState(): void {
// 		this.state.write();
// 	}
// }
// const editor1 = new TextEditor(new SmallFont());
// editor1.getState()
// editor1.setState(new MediumFont())
// editor1.getState()
// editor1.setState(new BoldFont())
// editor1.getState()
//# sourceMappingURL=state.js.map