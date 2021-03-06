/* */ 
"format register";
"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _aureliaTemplating = require("aurelia-templating");

var Behavior = _aureliaTemplating.Behavior;
var BoundViewFactory = _aureliaTemplating.BoundViewFactory;
var ViewSlot = _aureliaTemplating.ViewSlot;
var With = exports.With = (function () {
  function With(viewFactory, viewSlot) {
    this.viewFactory = viewFactory;
    this.viewSlot = viewSlot;
  }

  _prototypeProperties(With, {
    metadata: {
      value: function metadata() {
        return Behavior.templateController("with").withProperty("value", "valueChanged", "with");
      },
      writable: true,
      configurable: true
    },
    inject: {
      value: function inject() {
        return [BoundViewFactory, ViewSlot];
      },
      writable: true,
      configurable: true
    }
  }, {
    valueChanged: {
      value: function valueChanged(newValue) {
        if (!this.view) {
          this.view = this.viewFactory.create(newValue);
          this.viewSlot.add(this.view);
        } else {
          this.view.bind(newValue);
        }
      },
      writable: true,
      configurable: true
    }
  });

  return With;
})();
exports.__esModule = true;