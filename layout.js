// Generated by CoffeeScript 1.6.2
(function() {
  var hackstyle,
    __slice = [].slice,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  hackstyle = (function() {
    var newstyle, origstyle, stylemap;

    stylemap = {
      left: 'x',
      top: 'y',
      'background-color': 'bgcolor'
    };
    origstyle = $.style;
    newstyle = function(elem, name, value) {
      var locked, returnval, sendstyle, _ref, _ref1, _ref2;

      returnval = origstyle.apply(this, arguments);
      locked = (_ref = elem.$view) != null ? _ref._locked : void 0;
      name = stylemap[name] || name;
      if (locked !== name) {
        sendstyle = (_ref1 = elem.$view) != null ? (_ref2 = _ref1._callbacks) != null ? _ref2[name] : void 0 : void 0;
        if (sendstyle) {
          elem.$view._locked = name;
          elem.$view.setAttribute(name, value);
          elem.$view._locked = null;
        }
      }
      return returnval;
    };
    return function(isActive) {
      if (isActive) {
        return $.style = newstyle;
      } else {
        return $.style = oldstyle;
      }
    };
  })();

  window.lz = (function() {
    var Class, Events, Module, Node, Sprite, View, exports, init, initFromElement, moduleKeywords, skipStyle, stylemap, types;

    Events = {
      bind: function(ev, callback) {
        var calls, evs, name, _i, _len;

        evs = ev.split(' ');
        calls = this.hasOwnProperty('_callbacks') && this._callbacks || (this._callbacks = {});
        for (_i = 0, _len = evs.length; _i < _len; _i++) {
          name = evs[_i];
          calls[name] || (calls[name] = []);
          calls[name].push(callback);
        }
        return this;
      },
      one: function(ev, callback) {
        return this.bind(ev, function() {
          this.unbind(ev, arguments.callee);
          return callback.apply(this, arguments);
        });
      },
      trigger: function() {
        var args, callback, ev, list, _i, _len, _ref;

        args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
        ev = args.shift();
        list = this.hasOwnProperty('_callbacks') && ((_ref = this._callbacks) != null ? _ref[ev] : void 0);
        if (!list) {
          return;
        }
        for (_i = 0, _len = list.length; _i < _len; _i++) {
          callback = list[_i];
          if (callback.apply(this, args) === false) {
            break;
          }
        }
        return true;
      },
      listenTo: function(obj, ev, callback) {
        obj.bind(ev, callback);
        this.listeningTo || (this.listeningTo = []);
        this.listeningTo.push(obj);
        return this;
      },
      listenToOnce: function(obj, ev, callback) {
        var listeningToOnce;

        listeningToOnce = this.listeningToOnce || (this.listeningToOnce = []);
        listeningToOnce.push(obj);
        obj.one(ev, function() {
          var idx;

          idx = listeningToOnce.indexOf(obj);
          if (idx !== -1) {
            listeningToOnce.splice(idx, 1);
          }
          return callback.apply(this, arguments);
        });
        return this;
      },
      stopListening: function(obj, ev, callback) {
        var idx, listeningTo, _i, _j, _len, _len1, _ref, _ref1, _results;

        if (obj) {
          obj.unbind(ev, callback);
          _ref = [this.listeningTo, this.listeningToOnce];
          _results = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            listeningTo = _ref[_i];
            if (!listeningTo) {
              continue;
            }
            idx = listeningTo.indexOf(obj);
            if (idx !== -1) {
              _results.push(listeningTo.splice(idx, 1));
            } else {
              _results.push(void 0);
            }
          }
          return _results;
        } else {
          _ref1 = this.listeningTo;
          for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
            obj = _ref1[_j];
            obj.unbind();
          }
          return this.listeningTo = void 0;
        }
      },
      unbind: function(ev, callback) {
        var cb, evs, i, list, name, _i, _j, _len, _len1, _ref;

        if (!ev) {
          this._callbacks = {};
          return this;
        }
        evs = ev.split(' ');
        for (_i = 0, _len = evs.length; _i < _len; _i++) {
          name = evs[_i];
          list = (_ref = this._callbacks) != null ? _ref[name] : void 0;
          if (!list) {
            continue;
          }
          if (!callback) {
            delete this._callbacks[name];
            continue;
          }
          for (i = _j = 0, _len1 = list.length; _j < _len1; i = ++_j) {
            cb = list[i];
            if (!(cb === callback)) {
              continue;
            }
            list = list.slice();
            list.splice(i, 1);
            this._callbacks[name] = list;
            break;
          }
        }
        return this;
      }
    };
    Events.on = Events.bind;
    Events.off = Events.unbind;
    moduleKeywords = ['included', 'extended'];
    Module = (function() {
      function Module() {}

      Module.include = function(obj) {
        var key, value, _ref;

        if (!obj) {
          throw new Error('include(obj) requires obj');
        }
        for (key in obj) {
          value = obj[key];
          if (__indexOf.call(moduleKeywords, key) < 0) {
            this.prototype[key] = value;
          }
        }
        if ((_ref = obj.included) != null) {
          _ref.apply(this, [obj]);
        }
        return this;
      };

      return Module;

    })();
    Node = (function(_super) {
      var matchConstraint, propertyBindings, scopes;

      __extends(Node, _super);

      Node.include(Events);

      function Node(el, options) {
        this.children = [];
        if (!(this instanceof View)) {
          this.init(options);
        }
      }

      scopes = null;

      propertyBindings = {
        find: function(expression) {
          var ast;

          ast = acorn.parse(expression);
          scopes = [];
          acorn.walkDown(ast, this);
          return scopes;
        },
        MemberExpression: function(n) {
          var name;

          name = n.property.name;
          n = n.object;
          scopes.push({
            binding: acorn.stringify(n),
            property: name
          });
          return true;
        }
      };

      matchConstraint = /\${(.+)}/;

      Node.prototype.applyConstraint = function(name, expression) {
        var binding, bindingfn, bindings, constraintBinding, property, scope, _i, _len, _ref, _results;

        if ((_ref = this.constraints) == null) {
          this.constraints = {};
        }
        this.constraints[name] = (new Function([], 'return ' + expression)).bind(this);
        scopes = propertyBindings.find(expression);
        constraintBinding = this.constraints[name];
        bindings = constraintBinding.bindings || (constraintBinding.bindings = {});
        _results = [];
        for (_i = 0, _len = scopes.length; _i < _len; _i++) {
          scope = scopes[_i];
          binding = scope.binding, property = scope.property;
          bindingfn = (new Function([], 'return ' + binding)).bind(this);
          _results.push(bindings[property] = bindingfn);
        }
        return _results;
      };

      Node.prototype.setAttribute = function(name, value) {
        var constraint, setter, type, _ref;

        constraint = typeof value.match === "function" ? value.match(matchConstraint) : void 0;
        if (constraint) {
          this.applyConstraint(name, constraint[1]);
          return;
        }
        if (name in types) {
          type = types[name];
          if (type === 'number') {
            value = parseFloat(value);
          }
        }
        setter = 'set_' + name;
        if (setter in this) {
          if (typeof this[setter] === "function") {
            this[setter](value);
          }
        } else if (name.indexOf('on_') === 0) {
          name = name.substr(3);
          this.bind(name, this.eventCallback(name, value, this));
        } else {
          this[name] = value;
        }
        if ((_ref = this._callbacks) != null ? _ref[name] : void 0) {
          return this.trigger(name);
        }
      };

      Node.prototype.eventCallback = function(name, js, scope) {
        return function() {
          var val;

          val = scope[name];
          return (new Function(['value'], js).bind(scope))(val);
        };
      };

      Node.prototype.bindConstraints = function() {
        var binding, ev, name, value, _ref, _results;

        _ref = this.constraints;
        _results = [];
        for (name in _ref) {
          value = _ref[name];
          this.setAttribute(name, value());
          _results.push((function() {
            var _ref1, _results1;

            _ref1 = this.constraints[name].bindings;
            _results1 = [];
            for (ev in _ref1) {
              binding = _ref1[ev];
              _results1.push(binding().bind(ev, this.constraintCallback(name, value)));
            }
            return _results1;
          }).call(this));
        }
        return _results;
      };

      Node.prototype.constraintCallback = function(name, value) {
        var _this = this;

        return function() {
          return _this.setAttribute(name, value());
        };
      };

      Node.prototype.init = function(attributes) {
        var name, value, _ref;

        for (name in attributes) {
          value = attributes[name];
          this.setAttribute(name, value);
        }
        if (this.constraints) {
          this.bindConstraints();
        }
        if ((_ref = this._callbacks) != null ? _ref[name] : void 0) {
          return this.trigger('init');
        }
      };

      Node.prototype.set_parent = function(parent) {
        var _ref;

        if (parent instanceof View) {
          this.parent = parent;
          if (this.name != null) {
            parent[this.name] = this;
          }
          parent.children.push(this);
          if ((_ref = this._callbacks) != null ? _ref[name] : void 0) {
            parent.trigger('newchild');
          }
          parent = parent.sprite;
        }
        return typeof this.setParent === "function" ? this.setParent(parent) : void 0;
      };

      Node.prototype.set_name = function(name) {
        var _ref;

        this.name = name;
        return (_ref = this.parent) != null ? _ref[name] = this : void 0;
      };

      return Node;

    })(Module);
    stylemap = {
      x: 'left',
      y: 'top',
      bgcolor: 'background-color'
    };
    skipStyle = {
      parent: true,
      id: true,
      name: true
    };
    Sprite = {
      initSprite: function(sprite) {
        this.sprite = sprite != null ? sprite : $('<div/>');
        if (!(this.sprite instanceof jQuery)) {
          this.sprite = $(this.sprite);
        }
        return this.sprite.addClass('sprite');
      },
      setStyle: function(name, value) {
        if (value == null) {
          value = '';
        }
        if (name in stylemap) {
          name = stylemap[name];
        }
        return this.sprite.css(name, value);
      },
      setParent: function(parent) {
        if (!(parent instanceof jQuery)) {
          parent = $(parent);
        }
        return parent.append(this.sprite);
      },
      set_id: function(id) {
        this.id = id;
        return this.sprite.attr('id', this.id);
      }
    };
    types = {
      x: 'number',
      y: 'number',
      width: 'number',
      height: 'number'
    };
    View = (function(_super) {
      __extends(View, _super);

      View.include(Sprite);

      function View(el, options) {
        if (options == null) {
          options = {};
        }
        View.__super__.constructor.call(this, options);
        if (el instanceof HTMLElement) {
          if (el.$view) {
            console.warn('already bound view', el.$view, el);
            return;
          }
        }
        if (el) {
          if (el instanceof View) {
            el = el.sprite;
          }
        }
        this.initSprite(el);
        this.sprite[0].$view = this;
        this.init(options);
      }

      View.prototype.setAttribute = function(name, value) {
        if (!skipStyle[name]) {
          this.setStyle(name, value);
        }
        return View.__super__.setAttribute.call(this, name, value);
      };

      return View;

    })(Node);
    initFromElement = function(el, parent) {
      var child, children, i, options, tagname, _i, _j, _len, _len1, _ref, _results;

      tagname = el.localName;
      if (!tagname in lz) {
        console.warn('could not find element', tagname, el);
        return;
      }
      options = {};
      _ref = el.attributes;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        i = _ref[_i];
        options[i.name] = i.value;
      }
      if (parent == null) {
        parent = el.parentNode;
      }
      options.parent = parent;
      children = (function() {
        var _j, _len1, _ref1, _results;

        _ref1 = el.childNodes;
        _results = [];
        for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
          child = _ref1[_j];
          if (child.nodeType === 1) {
            _results.push(child);
          }
        }
        return _results;
      })();
      parent = new lz[tagname](el, options);
      _results = [];
      for (_j = 0, _len1 = children.length; _j < _len1; _j++) {
        child = children[_j];
        if (tagname === 'class') {
          _results.push(child.$defer = true);
        } else {
          _results.push(initFromElement(child, parent));
        }
      }
      return _results;
    };
    init = function(selector) {
      var el, i, _i, _len;

      if (selector == null) {
        selector = $('view');
      }
      for (i = _i = 0, _len = selector.length; _i < _len; i = ++_i) {
        el = selector[i];
        if (!el.$defer) {
          initFromElement(el);
        }
      }
      return hackstyle(true);
    };
    Class = (function(_super) {
      __extends(Class, _super);

      function Class(el, options) {
        var body, name;

        delete options.name;
        body = el.innerHTML;
        el.innerHTML = '';
        name = el.attributes.name.value;
        if (name in lz) {
          console.warn('class exists, overwriting', name);
        }
        lz[name] = function(instanceel, overrides) {
          var child, children, key, parent, value, viewel, _i, _len, _ref, _results;

          for (key in overrides) {
            value = overrides[key];
            options[key] = value;
          }
          if (!overrides.name) {
            delete options.name;
          }
          parent = new View(instanceel, options);
          viewel = (_ref = parent.sprite) != null ? _ref[0] : void 0;
          if (!viewel) {
            return;
          }
          viewel.innerHTML = body;
          children = (function() {
            var _i, _len, _ref1, _results;

            _ref1 = viewel.childNodes;
            _results = [];
            for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
              child = _ref1[_i];
              if (child.nodeType === 1) {
                _results.push(child);
              }
            }
            return _results;
          })();
          _results = [];
          for (_i = 0, _len = children.length; _i < _len; _i++) {
            child = children[_i];
            delete child.$defer;
            _results.push(initFromElement(child, parent));
          }
          return _results;
        };
      }

      return Class;

    })(Node);
    return exports = {
      view: View,
      "class": Class,
      node: Node,
      init: init
    };
  })();

  $(window).on('load', function() {
    var aview, canvas;

    lz.init();
    canvas = new lz.view(null, {
      x: 100,
      y: 100,
      bgcolor: 'red',
      width: 100,
      height: 100,
      transform: 'rotate(45deg)',
      parent: $('#canvas')
    });
    return aview = new lz.view(null, {
      x: 50,
      y: 50,
      width: 20,
      height: 20,
      bgcolor: 'green',
      'border-radius': '4px',
      parent: canvas
    });
  });

}).call(this);
