(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/json/stringify"), __esModule: true };
},{"core-js/library/fn/json/stringify":12}],2:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/create"), __esModule: true };
},{"core-js/library/fn/object/create":13}],3:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/define-properties"), __esModule: true };
},{"core-js/library/fn/object/define-properties":14}],4:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/define-property"), __esModule: true };
},{"core-js/library/fn/object/define-property":15}],5:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/get-own-property-descriptor"), __esModule: true };
},{"core-js/library/fn/object/get-own-property-descriptor":16}],6:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/get-own-property-names"), __esModule: true };
},{"core-js/library/fn/object/get-own-property-names":17}],7:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/get-prototype-of"), __esModule: true };
},{"core-js/library/fn/object/get-prototype-of":18}],8:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/keys"), __esModule: true };
},{"core-js/library/fn/object/keys":19}],9:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol"), __esModule: true };
},{"core-js/library/fn/symbol":20}],10:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol/iterator"), __esModule: true };
},{"core-js/library/fn/symbol/iterator":21}],11:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _iterator = require("../core-js/symbol/iterator");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = require("../core-js/symbol");

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};
},{"../core-js/symbol":9,"../core-js/symbol/iterator":10}],12:[function(require,module,exports){
var core  = require('../../modules/_core')
  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};
},{"../../modules/_core":27}],13:[function(require,module,exports){
require('../../modules/es6.object.create');
var $Object = require('../../modules/_core').Object;
module.exports = function create(P, D){
  return $Object.create(P, D);
};
},{"../../modules/_core":27,"../../modules/es6.object.create":80}],14:[function(require,module,exports){
require('../../modules/es6.object.define-properties');
var $Object = require('../../modules/_core').Object;
module.exports = function defineProperties(T, D){
  return $Object.defineProperties(T, D);
};
},{"../../modules/_core":27,"../../modules/es6.object.define-properties":81}],15:[function(require,module,exports){
require('../../modules/es6.object.define-property');
var $Object = require('../../modules/_core').Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};
},{"../../modules/_core":27,"../../modules/es6.object.define-property":82}],16:[function(require,module,exports){
require('../../modules/es6.object.get-own-property-descriptor');
var $Object = require('../../modules/_core').Object;
module.exports = function getOwnPropertyDescriptor(it, key){
  return $Object.getOwnPropertyDescriptor(it, key);
};
},{"../../modules/_core":27,"../../modules/es6.object.get-own-property-descriptor":83}],17:[function(require,module,exports){
require('../../modules/es6.object.get-own-property-names');
var $Object = require('../../modules/_core').Object;
module.exports = function getOwnPropertyNames(it){
  return $Object.getOwnPropertyNames(it);
};
},{"../../modules/_core":27,"../../modules/es6.object.get-own-property-names":84}],18:[function(require,module,exports){
require('../../modules/es6.object.get-prototype-of');
module.exports = require('../../modules/_core').Object.getPrototypeOf;
},{"../../modules/_core":27,"../../modules/es6.object.get-prototype-of":85}],19:[function(require,module,exports){
require('../../modules/es6.object.keys');
module.exports = require('../../modules/_core').Object.keys;
},{"../../modules/_core":27,"../../modules/es6.object.keys":86}],20:[function(require,module,exports){
require('../../modules/es6.symbol');
require('../../modules/es6.object.to-string');
require('../../modules/es7.symbol.async-iterator');
require('../../modules/es7.symbol.observable');
module.exports = require('../../modules/_core').Symbol;
},{"../../modules/_core":27,"../../modules/es6.object.to-string":87,"../../modules/es6.symbol":89,"../../modules/es7.symbol.async-iterator":90,"../../modules/es7.symbol.observable":91}],21:[function(require,module,exports){
require('../../modules/es6.string.iterator');
require('../../modules/web.dom.iterable');
module.exports = require('../../modules/_wks-ext').f('iterator');
},{"../../modules/_wks-ext":77,"../../modules/es6.string.iterator":88,"../../modules/web.dom.iterable":92}],22:[function(require,module,exports){
module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};
},{}],23:[function(require,module,exports){
module.exports = function(){ /* empty */ };
},{}],24:[function(require,module,exports){
var isObject = require('./_is-object');
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};
},{"./_is-object":43}],25:[function(require,module,exports){
// false -> Array#indexOf
// true  -> Array#includes
var toIObject = require('./_to-iobject')
  , toLength  = require('./_to-length')
  , toIndex   = require('./_to-index');
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};
},{"./_to-index":69,"./_to-iobject":71,"./_to-length":72}],26:[function(require,module,exports){
var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};
},{}],27:[function(require,module,exports){
var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
},{}],28:[function(require,module,exports){
// optional / simple context binding
var aFunction = require('./_a-function');
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};
},{"./_a-function":22}],29:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};
},{}],30:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./_fails":35}],31:[function(require,module,exports){
var isObject = require('./_is-object')
  , document = require('./_global').document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};
},{"./_global":36,"./_is-object":43}],32:[function(require,module,exports){
// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');
},{}],33:[function(require,module,exports){
// all enumerable object keys, includes symbols
var getKeys = require('./_object-keys')
  , gOPS    = require('./_object-gops')
  , pIE     = require('./_object-pie');
module.exports = function(it){
  var result     = getKeys(it)
    , getSymbols = gOPS.f;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = pIE.f
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
  } return result;
};
},{"./_object-gops":57,"./_object-keys":60,"./_object-pie":61}],34:[function(require,module,exports){
var global    = require('./_global')
  , core      = require('./_core')
  , ctx       = require('./_ctx')
  , hide      = require('./_hide')
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;
},{"./_core":27,"./_ctx":28,"./_global":36,"./_hide":38}],35:[function(require,module,exports){
module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};
},{}],36:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
},{}],37:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};
},{}],38:[function(require,module,exports){
var dP         = require('./_object-dp')
  , createDesc = require('./_property-desc');
module.exports = require('./_descriptors') ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};
},{"./_descriptors":30,"./_object-dp":52,"./_property-desc":63}],39:[function(require,module,exports){
module.exports = require('./_global').document && document.documentElement;
},{"./_global":36}],40:[function(require,module,exports){
module.exports = !require('./_descriptors') && !require('./_fails')(function(){
  return Object.defineProperty(require('./_dom-create')('div'), 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./_descriptors":30,"./_dom-create":31,"./_fails":35}],41:[function(require,module,exports){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./_cof');
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};
},{"./_cof":26}],42:[function(require,module,exports){
// 7.2.2 IsArray(argument)
var cof = require('./_cof');
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};
},{"./_cof":26}],43:[function(require,module,exports){
module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};
},{}],44:[function(require,module,exports){
'use strict';
var create         = require('./_object-create')
  , descriptor     = require('./_property-desc')
  , setToStringTag = require('./_set-to-string-tag')
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
require('./_hide')(IteratorPrototype, require('./_wks')('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};
},{"./_hide":38,"./_object-create":51,"./_property-desc":63,"./_set-to-string-tag":65,"./_wks":78}],45:[function(require,module,exports){
'use strict';
var LIBRARY        = require('./_library')
  , $export        = require('./_export')
  , redefine       = require('./_redefine')
  , hide           = require('./_hide')
  , has            = require('./_has')
  , Iterators      = require('./_iterators')
  , $iterCreate    = require('./_iter-create')
  , setToStringTag = require('./_set-to-string-tag')
  , getPrototypeOf = require('./_object-gpo')
  , ITERATOR       = require('./_wks')('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};
},{"./_export":34,"./_has":37,"./_hide":38,"./_iter-create":44,"./_iterators":47,"./_library":49,"./_object-gpo":58,"./_redefine":64,"./_set-to-string-tag":65,"./_wks":78}],46:[function(require,module,exports){
module.exports = function(done, value){
  return {value: value, done: !!done};
};
},{}],47:[function(require,module,exports){
module.exports = {};
},{}],48:[function(require,module,exports){
var getKeys   = require('./_object-keys')
  , toIObject = require('./_to-iobject');
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};
},{"./_object-keys":60,"./_to-iobject":71}],49:[function(require,module,exports){
module.exports = true;
},{}],50:[function(require,module,exports){
var META     = require('./_uid')('meta')
  , isObject = require('./_is-object')
  , has      = require('./_has')
  , setDesc  = require('./_object-dp').f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !require('./_fails')(function(){
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function(it){
  setDesc(it, META, {value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  }});
};
var fastKey = function(it, create){
  // return primitive with prefix
  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add metadata
    if(!create)return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function(it, create){
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return true;
    // not necessary to add metadata
    if(!create)return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function(it){
  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY:      META,
  NEED:     false,
  fastKey:  fastKey,
  getWeak:  getWeak,
  onFreeze: onFreeze
};
},{"./_fails":35,"./_has":37,"./_is-object":43,"./_object-dp":52,"./_uid":75}],51:[function(require,module,exports){
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = require('./_an-object')
  , dPs         = require('./_object-dps')
  , enumBugKeys = require('./_enum-bug-keys')
  , IE_PROTO    = require('./_shared-key')('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = require('./_dom-create')('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  require('./_html').appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};

},{"./_an-object":24,"./_dom-create":31,"./_enum-bug-keys":32,"./_html":39,"./_object-dps":53,"./_shared-key":66}],52:[function(require,module,exports){
var anObject       = require('./_an-object')
  , IE8_DOM_DEFINE = require('./_ie8-dom-define')
  , toPrimitive    = require('./_to-primitive')
  , dP             = Object.defineProperty;

exports.f = require('./_descriptors') ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};
},{"./_an-object":24,"./_descriptors":30,"./_ie8-dom-define":40,"./_to-primitive":74}],53:[function(require,module,exports){
var dP       = require('./_object-dp')
  , anObject = require('./_an-object')
  , getKeys  = require('./_object-keys');

module.exports = require('./_descriptors') ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};
},{"./_an-object":24,"./_descriptors":30,"./_object-dp":52,"./_object-keys":60}],54:[function(require,module,exports){
var pIE            = require('./_object-pie')
  , createDesc     = require('./_property-desc')
  , toIObject      = require('./_to-iobject')
  , toPrimitive    = require('./_to-primitive')
  , has            = require('./_has')
  , IE8_DOM_DEFINE = require('./_ie8-dom-define')
  , gOPD           = Object.getOwnPropertyDescriptor;

exports.f = require('./_descriptors') ? gOPD : function getOwnPropertyDescriptor(O, P){
  O = toIObject(O);
  P = toPrimitive(P, true);
  if(IE8_DOM_DEFINE)try {
    return gOPD(O, P);
  } catch(e){ /* empty */ }
  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
};
},{"./_descriptors":30,"./_has":37,"./_ie8-dom-define":40,"./_object-pie":61,"./_property-desc":63,"./_to-iobject":71,"./_to-primitive":74}],55:[function(require,module,exports){
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = require('./_to-iobject')
  , gOPN      = require('./_object-gopn').f
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return gOPN(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it){
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};

},{"./_object-gopn":56,"./_to-iobject":71}],56:[function(require,module,exports){
// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = require('./_object-keys-internal')
  , hiddenKeys = require('./_enum-bug-keys').concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};
},{"./_enum-bug-keys":32,"./_object-keys-internal":59}],57:[function(require,module,exports){
exports.f = Object.getOwnPropertySymbols;
},{}],58:[function(require,module,exports){
// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = require('./_has')
  , toObject    = require('./_to-object')
  , IE_PROTO    = require('./_shared-key')('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};
},{"./_has":37,"./_shared-key":66,"./_to-object":73}],59:[function(require,module,exports){
var has          = require('./_has')
  , toIObject    = require('./_to-iobject')
  , arrayIndexOf = require('./_array-includes')(false)
  , IE_PROTO     = require('./_shared-key')('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};
},{"./_array-includes":25,"./_has":37,"./_shared-key":66,"./_to-iobject":71}],60:[function(require,module,exports){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = require('./_object-keys-internal')
  , enumBugKeys = require('./_enum-bug-keys');

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};
},{"./_enum-bug-keys":32,"./_object-keys-internal":59}],61:[function(require,module,exports){
exports.f = {}.propertyIsEnumerable;
},{}],62:[function(require,module,exports){
// most Object methods by ES6 should accept primitives
var $export = require('./_export')
  , core    = require('./_core')
  , fails   = require('./_fails');
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};
},{"./_core":27,"./_export":34,"./_fails":35}],63:[function(require,module,exports){
module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};
},{}],64:[function(require,module,exports){
module.exports = require('./_hide');
},{"./_hide":38}],65:[function(require,module,exports){
var def = require('./_object-dp').f
  , has = require('./_has')
  , TAG = require('./_wks')('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};
},{"./_has":37,"./_object-dp":52,"./_wks":78}],66:[function(require,module,exports){
var shared = require('./_shared')('keys')
  , uid    = require('./_uid');
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};
},{"./_shared":67,"./_uid":75}],67:[function(require,module,exports){
var global = require('./_global')
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};
},{"./_global":36}],68:[function(require,module,exports){
var toInteger = require('./_to-integer')
  , defined   = require('./_defined');
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};
},{"./_defined":29,"./_to-integer":70}],69:[function(require,module,exports){
var toInteger = require('./_to-integer')
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};
},{"./_to-integer":70}],70:[function(require,module,exports){
// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};
},{}],71:[function(require,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./_iobject')
  , defined = require('./_defined');
module.exports = function(it){
  return IObject(defined(it));
};
},{"./_defined":29,"./_iobject":41}],72:[function(require,module,exports){
// 7.1.15 ToLength
var toInteger = require('./_to-integer')
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};
},{"./_to-integer":70}],73:[function(require,module,exports){
// 7.1.13 ToObject(argument)
var defined = require('./_defined');
module.exports = function(it){
  return Object(defined(it));
};
},{"./_defined":29}],74:[function(require,module,exports){
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = require('./_is-object');
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};
},{"./_is-object":43}],75:[function(require,module,exports){
var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};
},{}],76:[function(require,module,exports){
var global         = require('./_global')
  , core           = require('./_core')
  , LIBRARY        = require('./_library')
  , wksExt         = require('./_wks-ext')
  , defineProperty = require('./_object-dp').f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};
},{"./_core":27,"./_global":36,"./_library":49,"./_object-dp":52,"./_wks-ext":77}],77:[function(require,module,exports){
exports.f = require('./_wks');
},{"./_wks":78}],78:[function(require,module,exports){
var store      = require('./_shared')('wks')
  , uid        = require('./_uid')
  , Symbol     = require('./_global').Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;
},{"./_global":36,"./_shared":67,"./_uid":75}],79:[function(require,module,exports){
'use strict';
var addToUnscopables = require('./_add-to-unscopables')
  , step             = require('./_iter-step')
  , Iterators        = require('./_iterators')
  , toIObject        = require('./_to-iobject');

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = require('./_iter-define')(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');
},{"./_add-to-unscopables":23,"./_iter-define":45,"./_iter-step":46,"./_iterators":47,"./_to-iobject":71}],80:[function(require,module,exports){
var $export = require('./_export')
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', {create: require('./_object-create')});
},{"./_export":34,"./_object-create":51}],81:[function(require,module,exports){
var $export = require('./_export');
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !require('./_descriptors'), 'Object', {defineProperties: require('./_object-dps')});
},{"./_descriptors":30,"./_export":34,"./_object-dps":53}],82:[function(require,module,exports){
var $export = require('./_export');
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !require('./_descriptors'), 'Object', {defineProperty: require('./_object-dp').f});
},{"./_descriptors":30,"./_export":34,"./_object-dp":52}],83:[function(require,module,exports){
// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject                 = require('./_to-iobject')
  , $getOwnPropertyDescriptor = require('./_object-gopd').f;

require('./_object-sap')('getOwnPropertyDescriptor', function(){
  return function getOwnPropertyDescriptor(it, key){
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});
},{"./_object-gopd":54,"./_object-sap":62,"./_to-iobject":71}],84:[function(require,module,exports){
// 19.1.2.7 Object.getOwnPropertyNames(O)
require('./_object-sap')('getOwnPropertyNames', function(){
  return require('./_object-gopn-ext').f;
});
},{"./_object-gopn-ext":55,"./_object-sap":62}],85:[function(require,module,exports){
// 19.1.2.9 Object.getPrototypeOf(O)
var toObject        = require('./_to-object')
  , $getPrototypeOf = require('./_object-gpo');

require('./_object-sap')('getPrototypeOf', function(){
  return function getPrototypeOf(it){
    return $getPrototypeOf(toObject(it));
  };
});
},{"./_object-gpo":58,"./_object-sap":62,"./_to-object":73}],86:[function(require,module,exports){
// 19.1.2.14 Object.keys(O)
var toObject = require('./_to-object')
  , $keys    = require('./_object-keys');

require('./_object-sap')('keys', function(){
  return function keys(it){
    return $keys(toObject(it));
  };
});
},{"./_object-keys":60,"./_object-sap":62,"./_to-object":73}],87:[function(require,module,exports){

},{}],88:[function(require,module,exports){
'use strict';
var $at  = require('./_string-at')(true);

// 21.1.3.27 String.prototype[@@iterator]()
require('./_iter-define')(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});
},{"./_iter-define":45,"./_string-at":68}],89:[function(require,module,exports){
'use strict';
// ECMAScript 6 symbols shim
var global         = require('./_global')
  , has            = require('./_has')
  , DESCRIPTORS    = require('./_descriptors')
  , $export        = require('./_export')
  , redefine       = require('./_redefine')
  , META           = require('./_meta').KEY
  , $fails         = require('./_fails')
  , shared         = require('./_shared')
  , setToStringTag = require('./_set-to-string-tag')
  , uid            = require('./_uid')
  , wks            = require('./_wks')
  , wksExt         = require('./_wks-ext')
  , wksDefine      = require('./_wks-define')
  , keyOf          = require('./_keyof')
  , enumKeys       = require('./_enum-keys')
  , isArray        = require('./_is-array')
  , anObject       = require('./_an-object')
  , toIObject      = require('./_to-iobject')
  , toPrimitive    = require('./_to-primitive')
  , createDesc     = require('./_property-desc')
  , _create        = require('./_object-create')
  , gOPNExt        = require('./_object-gopn-ext')
  , $GOPD          = require('./_object-gopd')
  , $DP            = require('./_object-dp')
  , $keys          = require('./_object-keys')
  , gOPD           = $GOPD.f
  , dP             = $DP.f
  , gOPN           = gOPNExt.f
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , PROTOTYPE      = 'prototype'
  , HIDDEN         = wks('_hidden')
  , TO_PRIMITIVE   = wks('toPrimitive')
  , isEnum         = {}.propertyIsEnumerable
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , OPSymbols      = shared('op-symbols')
  , ObjectProto    = Object[PROTOTYPE]
  , USE_NATIVE     = typeof $Symbol == 'function'
  , QObject        = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(dP({}, 'a', {
    get: function(){ return dP(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = gOPD(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  dP(it, key, D);
  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
  return typeof it == 'symbol';
} : function(it){
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D){
  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if(has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  it  = toIObject(it);
  key = toPrimitive(key, true);
  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
  var D = gOPD(it, key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = gOPN(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var IS_OP  = it === ObjectProto
    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if(!USE_NATIVE){
  $Symbol = function Symbol(){
    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function(value){
      if(this === ObjectProto)$set.call(OPSymbols, value);
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f   = $defineProperty;
  require('./_object-gopn').f = gOPNExt.f = $getOwnPropertyNames;
  require('./_object-pie').f  = $propertyIsEnumerable;
  require('./_object-gops').f = $getOwnPropertySymbols;

  if(DESCRIPTORS && !require('./_library')){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function(name){
    return wrap(wks(name));
  }
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

for(var symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    if(isSymbol(key))return keyOf(SymbolRegistry, key);
    throw TypeError(key + ' is not a symbol!');
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it){
    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
    var args = [it]
      , i    = 1
      , replacer, $replacer;
    while(arguments.length > i)args.push(arguments[i++]);
    replacer = args[1];
    if(typeof replacer == 'function')$replacer = replacer;
    if($replacer || !isArray(replacer))replacer = function(key, value){
      if($replacer)value = $replacer.call(this, key, value);
      if(!isSymbol(value))return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || require('./_hide')($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);
},{"./_an-object":24,"./_descriptors":30,"./_enum-keys":33,"./_export":34,"./_fails":35,"./_global":36,"./_has":37,"./_hide":38,"./_is-array":42,"./_keyof":48,"./_library":49,"./_meta":50,"./_object-create":51,"./_object-dp":52,"./_object-gopd":54,"./_object-gopn":56,"./_object-gopn-ext":55,"./_object-gops":57,"./_object-keys":60,"./_object-pie":61,"./_property-desc":63,"./_redefine":64,"./_set-to-string-tag":65,"./_shared":67,"./_to-iobject":71,"./_to-primitive":74,"./_uid":75,"./_wks":78,"./_wks-define":76,"./_wks-ext":77}],90:[function(require,module,exports){
require('./_wks-define')('asyncIterator');
},{"./_wks-define":76}],91:[function(require,module,exports){
require('./_wks-define')('observable');
},{"./_wks-define":76}],92:[function(require,module,exports){
require('./es6.array.iterator');
var global        = require('./_global')
  , hide          = require('./_hide')
  , Iterators     = require('./_iterators')
  , TO_STRING_TAG = require('./_wks')('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}
},{"./_global":36,"./_hide":38,"./_iterators":47,"./_wks":78,"./es6.array.iterator":79}],93:[function(require,module,exports){
(function (global){
/*! cookie function. get, set, or forget a cookie. [c]2014 @scottjehl, Filament Group, Inc. Licensed MIT */
(function(w){
	var cookie = function( name, value, days ){
		// if value is undefined, get the cookie value
		if( value === undefined ){
			var cookiestring = "; " + w.document.cookie;
			var cookies = cookiestring.split( "; " + name + "=" );
			if ( cookies.length === 2 ){
				return cookies.pop().split( ";" ).shift();
			}
			return null;
		}
		else {
			// if value is a false boolean, we'll treat that as a delete
			if( value === false ){
				days = -1;
			}
			var expires = "";
			if ( days ) {
				var date = new Date();
				date.setTime( date.getTime() + ( days * 24 * 60 * 60 * 1000 ) );
				expires = "; expires="+date.toGMTString();
			}
			w.document.cookie = name + "=" + value + expires + "; path=/";
		}
	};
	// commonjs
	if( typeof module !== "undefined" ){
		module.exports = cookie;
	}
	else {
		w.cookie = cookie;
	}
}( typeof global !== "undefined" ? global : this ));

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],94:[function(require,module,exports){
"use strict";

var _avalonMobile = require("../vendor/avalon/avalon.mobile.shim");

var _avalonMobile2 = _interopRequireDefault(_avalonMobile);

var _jquery = require("../vendor/jquery/jquery-1.11.2");

var _jquery2 = _interopRequireDefault(_jquery);

var _yz = require("./libs/yz");

var _yz2 = _interopRequireDefault(_yz);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.avalon = _avalonMobile2.default;
window.$ = window.jQuery = _jquery2.default;
window.$$ = _yz2.default;

},{"../vendor/avalon/avalon.mobile.shim":97,"../vendor/jquery/jquery-1.11.2":98,"./libs/yz":96}],95:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.apiInit = apiInit;
exports.upload = upload;
exports.get = get;
exports.post = post;
exports.put = put;
exports.del = del;
exports.patch = patch;
exports.weixinAction = weixinAction;
exports.picUploadApi = picUploadApi;
exports.getHost = getHost;

var _jquery = require('../../vendor/jquery/jquery-1.11.2');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $$ = {};

function apiInit(yz) {
  $$ = yz;
}

var host = 'http://api.kidshome.cc/';
var cb = function cb() {};

function apiSetting(type, path, success_callBack, fail_callBack) {
  var setting = {
    'url': path,
    'type': type,
    'accept': {
      'json': 'application/json'
    },
    'dataType': 'json',
    complete: function complete(xhr) {

      if (xhr.status >= 200 && xhr.status < 300) {
        success_callBack(xhr.responseJSON);
      } else {
        fail_callBack(xhr.responseJSON);
      }
    }

  };

  return setting;
}

function tokenToUrl(link) {
  //添加 token
  if ($$.cookie('token')) {
    if (link.indexOf('?') != -1) {
      link += '&token=' + $$.cookie('token');
    } else {
      link += '?token=' + $$.cookie('token');
    }
  }
  return link;
}

/**
 * query
 *
 * @parame method: get post put delete patch
 * @parame url: api
 * @parame params: 参数 {a:b, c:d}
 * @parame success_callBack: 成功返回执行
 * @parame fail_callBack: 失败返回执行
 *
 **/
function query(method, url) {
  var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var success_callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : cb;
  var fail_callback = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : cb;


  var setting = apiSetting(method.toUpperCase(), tokenToUrl(host + url), success_callback, fail_callback);
  if (params) {
    setting['data'] = params;
  }

  return _jquery2.default.ajax(setting);
}

/**
 * upload
 **/
function upload(url, data) {
  var success_callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : cb;
  var fail_callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : cb;

  var setting = apiSetting('POST', tokenToUrl(host + url), success_callback, fail_callback);
  setting['data'] = data;
  setting['contentType'] = false;
  setting['processData'] = false;
  setting['cache'] = false;

  return _jquery2.default.ajax(setting);
}

/**
 * GET
 *
 * @parame url: api
 * @parame params: 参数 {a:b, c:d}
 * @parame success_callBack: 成功返回执行
 * @parame fail_callBack: 失败返回执行
 *
 **/
function get(url) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var success_callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : cb;
  var fail_callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : cb;


  if (params) {
    var p = [];
    for (var i in params) {
      p.push(i + '=' + params[i]);
    }
    if (url.indexOf('?') == -1) {
      url += '?' + p.join('&');
    } else {
      url += '&' + p.join('&');
    }
  }

  return query('GET', url, null, success_callback, fail_callback);
}

/**
 * POST
 *
 * @parame url: api
 * @parame params: 参数 {a:b, c:d}
 * @parame success_callBack: 成功返回执行
 * @parame fail_callBack: 失败返回执行
 *
 **/
function post(url) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var success_callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : cb;
  var fail_callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : cb;

  return query('POST', url, params, success_callback, fail_callback);
}

/**
 * PUT
 *
 * @parame url: api
 * @parame params: 参数 {a:b, c:d}
 * @parame success_callBack: 成功返回执行
 * @parame fail_callBack: 失败返回执行
 *
 **/
function put(url) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var success_callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : cb;
  var fail_callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : cb;

  return query('PUT', url, params, success_callback, fail_callback);
}

/**
 * DELETE 
 *
 * @parame url: api
 * @parame params: 参数 {a:b, c:d}
 * @parame success_callBack: 成功返回执行
 * @parame fail_callBack: 失败返回执行
 *
 **/
function del(url) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var success_callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : cb;
  var fail_callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : cb;

  return query('DELETE', url, params, success_callback, fail_callback);
}

/**
 * PATCH 
 *
 * @parame url: api
 * @parame params: 参数 {a:b, c:d}
 * @parame success_callBack: 成功返回执行
 * @parame fail_callBack: 失败返回执行
 *
 **/
function patch(url) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var success_callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : cb;
  var fail_callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : cb;

  return query('PATCH', url, params, success_callback, fail_callback);
}

/**
 * 微信登录
 * type: register,binding或login，默认执行绑定操作
 *
 **/
function weixinAction(type) {
  var backurl = encodeURIComponent('http://' + window.location.host + '/auth/wxaction.html');
  var gourl = host + 'wechat/oauth?wechat_back_url=' + backurl + '&action=' + type;
  if (type == 'binding') {
    gourl += '&token=' + $$.cookie('token');
  }
  window.location.href = gourl;
}

//图片上传接口
function picUploadApi() {
  return tokenToUrl(host + 'user/avatar');
}

/**
 * 返回 host
 **/
function getHost() {
  return host;
}

},{"../../vendor/jquery/jquery-1.11.2":98}],96:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _yz = require('./yz.api');

var _fgCookie = require('fg-cookie');

var _fgCookie2 = _interopRequireDefault(_fgCookie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var yz = {};

// 修改页面 tdk
yz.title = function (val) {
  window.document.title = val;
};
function setMeta(name, val) {
  var meta = document.getElementsByTagName('meta');
  for (var i = 0; i < meta.length; i++) {
    if (meta[i].name.toLowerCase() == name.toLowerCase()) {
      meta[i].content = val;
      break;
    }
  }
}
yz.keyword = function (val) {
  setMeta('keywords', val);
};
yz.description = function (val) {
  setMeta('description', val);
};

// Api

(0, _yz.apiInit)(yz);
yz.get = _yz.get;
yz.post = _yz.post;
yz.put = _yz.put;
yz.del = _yz.del;
yz.patch = _yz.patch;
yz.picUploadApi = _yz.picUploadApi;
yz.weixinAction = _yz.weixinAction;
yz.upload = _yz.upload;
yz.getHost = _yz.getHost;

// Cookie

yz.cookie = _fgCookie2.default;

exports.default = yz;

},{"./yz.api":95,"fg-cookie":93}],97:[function(require,module,exports){
"use strict";

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _getOwnPropertyNames = require("babel-runtime/core-js/object/get-own-property-names");

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

var _stringify = require("babel-runtime/core-js/json/stringify");

var _stringify2 = _interopRequireDefault(_stringify);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

var _defineProperties = require("babel-runtime/core-js/object/define-properties");

var _defineProperties2 = _interopRequireDefault(_defineProperties);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _create = require("babel-runtime/core-js/object/create");

var _create2 = _interopRequireDefault(_create);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*==================================================
 Copyright (c) 2013-2015 司徒正美 and other contributors
 http://www.cnblogs.com/rubylouvre/
 https://github.com/RubyLouvre
 http://weibo.com/jslouvre/
 
 Released under the MIT license
 avalon.mobile.shim.js 1.5.6 built in 2016.1.21
 mobile
 ==================================================*/
(function (global, factory) {

    if ((typeof module === "undefined" ? "undefined" : (0, _typeof3.default)(module)) === "object" && (0, _typeof3.default)(module.exports) === "object") {
        // For CommonJS and CommonJS-like environments where a proper `window`
        // is present, execute the factory and get avalon.
        // For environments that do not have a `window` with a `document`
        // (such as Node.js), expose a factory as module.exports.
        // This accentuates the need for the creation of a real `window`.
        // e.g. var avalon = require("avalon")(window);
        module.exports = global.document ? factory(global, true) : function (w) {
            if (!w.document) {
                throw new Error("Avalon requires a window with a document");
            }
            return factory(w);
        };
    } else {
        factory(global);
    }

    // Pass this if window is not defined yet
})(typeof window !== "undefined" ? window : undefined, function (window, noGlobal) {

    /*********************************************************************
     *                    全局变量及方法                                   *
     **********************************************************************/

    var expose = Date.now();
    //http://stackoverflow.com/questions/7290086/javascript-use-strict-and-nicks-find-global-function
    var DOC = window.document;
    var head = DOC.head; //HEAD元素
    head.insertAdjacentHTML("afterBegin", '<avalon ms-skip class="avalonHide"><style id="avalonStyle">.avalonHide{ display: none!important }</style></avalon>');
    var ifGroup = head.firstChild;

    function log() {
        if (avalon.config.debug) {
            // http://stackoverflow.com/questions/8785624/how-to-safely-wrap-console-log
            console.log.apply(console, arguments);
        }
    }

    /**
     * Creates a new object without a prototype. This object is useful for lookup without having to
     * guard against prototypically inherited properties via hasOwnProperty.
     *
     * Related micro-benchmarks:
     * - http://jsperf.com/object-create2
     * - http://jsperf.com/proto-map-lookup/2
     * - http://jsperf.com/for-in-vs-object-keys2
     */
    function createMap() {
        return (0, _create2.default)(null);
    }

    var subscribers = "$" + expose;

    var nullObject = {}; //作用类似于noop，只用于代码防御，千万不要在它上面添加属性
    var rword = /[^, ]+/g; //切割字符串为一个个小块，以空格或豆号分开它们，结合replace实现字符串的forEach
    var rw20g = /\w+/g;
    var rsvg = /^\[object SVG\w*Element\]$/;
    var rwindow = /^\[object (?:Window|DOMWindow|global)\]$/;
    var oproto = Object.prototype;
    var ohasOwn = oproto.hasOwnProperty;
    var serialize = oproto.toString;
    var ap = Array.prototype;
    var aslice = ap.slice;
    var W3C = window.dispatchEvent;
    var root = DOC.documentElement;
    var avalonFragment = DOC.createDocumentFragment();
    var cinerator = DOC.createElement("div");
    var class2type = {};
    "Boolean Number String Function Array Date RegExp Object Error".replace(rword, function (name) {
        class2type["[object " + name + "]"] = name.toLowerCase();
    });
    var bindingID = 1024;
    var IEVersion = NaN;
    if (window.VBArray) {
        IEVersion = document.documentMode || (window.XMLHttpRequest ? 7 : 6);
    }

    function noop() {}
    function scpCompile(array) {
        return Function.apply(noop, array);
    }

    function oneObject(array, val) {
        if (typeof array === "string") {
            array = array.match(rword) || [];
        }
        var result = {},
            value = val !== void 0 ? val : 1;
        for (var i = 0, n = array.length; i < n; i++) {
            result[array[i]] = value;
        }
        return result;
    }

    //生成UUID http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript
    var generateID = function generateID(prefix) {
        prefix = prefix || "avalon";
        return String(Math.random() + Math.random()).replace(/\d\.\d{4}/, prefix);
    };

    var avalon = function avalon(el) {
        //创建jQuery式的无new 实例化结构
        return new avalon.init(el);
    };

    /*视浏览器情况采用最快的异步回调*/
    avalon.nextTick = new function () {
        // jshint ignore:line
        var tickImmediate = window.setImmediate;
        var tickObserver = window.MutationObserver;
        if (tickImmediate) {
            return tickImmediate.bind(window);
        }

        var queue = [];
        function callback() {
            var n = queue.length;
            for (var i = 0; i < n; i++) {
                queue[i]();
            }
            queue = queue.slice(n);
        }

        if (tickObserver) {
            var node = document.createTextNode("avalon");
            new tickObserver(callback).observe(node, { characterData: true }); // jshint ignore:line
            var bool = false;
            return function (fn) {
                queue.push(fn);
                bool = !bool;
                node.data = bool;
            };
        }

        return function (fn) {
            setTimeout(fn, 4);
        };
    }(); // jshint ignore:line

    /*********************************************************************
     *                 avalon的静态方法定义区                              *
     **********************************************************************/

    avalon.init = function (el) {
        this[0] = this.element = el;
    };
    avalon.fn = avalon.prototype = avalon.init.prototype;

    avalon.type = function (obj) {
        //取得目标的类型
        if (obj == null) {
            return String(obj);
        }
        // 早期的webkit内核浏览器实现了已废弃的ecma262v4标准，可以将正则字面量当作函数使用，因此typeof在判定正则时会返回function
        return (typeof obj === "undefined" ? "undefined" : (0, _typeof3.default)(obj)) === "object" || typeof obj === "function" ? class2type[serialize.call(obj)] || "object" : typeof obj === "undefined" ? "undefined" : (0, _typeof3.default)(obj);
    };

    avalon.isFunction = function (fn) {
        return serialize.call(fn) === "[object Function]";
    };

    avalon.isWindow = function (obj) {
        return rwindow.test(serialize.call(obj));
    };

    /*判定是否是一个朴素的javascript对象（Object），不是DOM对象，不是BOM对象，不是自定义类的实例*/
    avalon.isPlainObject = function (obj) {
        // 简单的 typeof obj === "object"检测，会致使用isPlainObject(window)在opera下通不过
        return serialize.call(obj) === "[object Object]" && (0, _getPrototypeOf2.default)(obj) === oproto;
    };

    //与jQuery.extend方法，可用于浅拷贝，深拷贝
    avalon.mix = avalon.fn.mix = function () {
        var options,
            name,
            src,
            copy,
            copyIsArray,
            clone,
            target = arguments[0] || {},
            i = 1,
            length = arguments.length,
            deep = false;

        // 如果第一个参数为布尔,判定是否深拷贝
        if (typeof target === "boolean") {
            deep = target;
            target = arguments[1] || {};
            i++;
        }

        //确保接受方为一个复杂的数据类型
        if ((typeof target === "undefined" ? "undefined" : (0, _typeof3.default)(target)) !== "object" && !avalon.isFunction(target)) {
            target = {};
        }

        //如果只有一个参数，那么新成员添加于mix所在的对象上
        if (i === length) {
            target = this;
            i--;
        }

        for (; i < length; i++) {
            //只处理非空参数
            if ((options = arguments[i]) != null) {
                for (name in options) {
                    src = target[name];
                    copy = options[name];
                    // 防止环引用
                    if (target === copy) {
                        continue;
                    }
                    if (deep && copy && (avalon.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {

                        if (copyIsArray) {
                            copyIsArray = false;
                            clone = src && Array.isArray(src) ? src : [];
                        } else {
                            clone = src && avalon.isPlainObject(src) ? src : {};
                        }

                        target[name] = avalon.mix(deep, clone, copy);
                    } else if (copy !== void 0) {
                        target[name] = copy;
                    }
                }
            }
        }
        return target;
    };

    avalon.mix({
        rword: rword,
        subscribers: subscribers,
        version: 1.56,
        ui: {},
        log: log,
        slice: function slice(nodes, start, end) {
            return aslice.call(nodes, start, end);
        },
        noop: noop,
        /*如果不用Error对象封装一下，str在控制台下可能会乱码*/
        error: function error(str, e) {
            throw new (e || Error)(str); // jshint ignore:line
        },
        /*将一个以空格或逗号隔开的字符串或数组,转换成一个键值都为1的对象*/
        oneObject: oneObject,
        /* avalon.range(10)
         => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
         avalon.range(1, 11)
         => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
         avalon.range(0, 30, 5)
         => [0, 5, 10, 15, 20, 25]
         avalon.range(0, -10, -1)
         => [0, -1, -2, -3, -4, -5, -6, -7, -8, -9]
         avalon.range(0)
         => []*/
        range: function range(start, end, step) {
            // 用于生成整数数组
            step || (step = 1);
            if (end == null) {
                end = start || 0;
                start = 0;
            }
            var index = -1,
                length = Math.max(0, Math.ceil((end - start) / step)),
                result = new Array(length);
            while (++index < length) {
                result[index] = start;
                start += step;
            }
            return result;
        },
        eventHooks: {},
        /*绑定事件*/
        bind: function bind(el, type, fn, phase) {
            var hooks = avalon.eventHooks;
            var hook = hooks[type];
            if ((typeof hook === "undefined" ? "undefined" : (0, _typeof3.default)(hook)) === "object") {
                type = hook.type || type;
                phase = hook.phase || !!phase;
                fn = hook.fix ? hook.fix(el, fn) : fn;
            }
            el.addEventListener(type, fn, phase);
            return fn;
        },
        /*卸载事件*/
        unbind: function unbind(el, type, fn, phase) {
            var hooks = avalon.eventHooks;
            var hook = hooks[type];
            var callback = fn || noop;
            if ((typeof hook === "undefined" ? "undefined" : (0, _typeof3.default)(hook)) === "object") {
                type = hook.type || type;
                phase = hook.phase || !!phase;
            }
            el.removeEventListener(type, callback, phase);
        },
        /*读写删除元素节点的样式*/
        css: function css(node, name, value) {
            if (node instanceof avalon) {
                node = node[0];
            }
            var prop = /[_-]/.test(name) ? camelize(name) : name,
                fn;
            name = avalon.cssName(prop) || prop;
            if (value === void 0 || typeof value === "boolean") {
                //获取样式
                fn = cssHooks[prop + ":get"] || cssHooks["@:get"];
                if (name === "background") {
                    name = "backgroundColor";
                }
                var val = fn(node, name);
                return value === true ? parseFloat(val) || 0 : val;
            } else if (value === "") {
                //请除样式
                node.style[name] = "";
            } else {
                //设置样式
                if (value == null || value !== value) {
                    return;
                }
                if (isFinite(value) && !avalon.cssNumber[prop]) {
                    value += "px";
                }
                fn = cssHooks[prop + ":set"] || cssHooks["@:set"];
                fn(node, name, value);
            }
        },
        /*遍历数组与对象,回调的第一个参数为索引或键名,第二个或元素或键值*/
        each: function each(obj, fn) {
            if (obj) {
                //排除null, undefined
                var i = 0;
                if (isArrayLike(obj)) {
                    for (var n = obj.length; i < n; i++) {
                        if (fn(i, obj[i]) === false) break;
                    }
                } else {
                    for (i in obj) {
                        if (obj.hasOwnProperty(i) && fn(i, obj[i]) === false) {
                            break;
                        }
                    }
                }
            }
        },
        //收集元素的data-{{prefix}}-*属性，并转换为对象
        getWidgetData: function getWidgetData(elem, prefix) {
            var raw = avalon(elem).data();
            var result = {};
            for (var i in raw) {
                if (i.indexOf(prefix) === 0) {
                    result[i.replace(prefix, "").replace(/\w/, function (a) {
                        return a.toLowerCase();
                    })] = raw[i];
                }
            }
            return result;
        },
        Array: {
            /*只有当前数组不存在此元素时只添加它*/
            ensure: function ensure(target, item) {
                if (target.indexOf(item) === -1) {
                    return target.push(item);
                }
            },
            /*移除数组中指定位置的元素，返回布尔表示成功与否*/
            removeAt: function removeAt(target, index) {
                return !!target.splice(index, 1).length;
            },
            /*移除数组中第一个匹配传参的那个元素，返回布尔表示成功与否*/
            remove: function remove(target, item) {
                var index = target.indexOf(item);
                if (~index) return avalon.Array.removeAt(target, index);
                return false;
            }
        }
    });

    var bindingHandlers = avalon.bindingHandlers = {};
    var bindingExecutors = avalon.bindingExecutors = {};

    var directives = avalon.directives = {};
    avalon.directive = function (name, obj) {
        bindingHandlers[name] = obj.init = obj.init || noop;
        bindingExecutors[name] = obj.update = obj.update || noop;
        return directives[name] = obj;
    };

    /*判定是否类数组，如节点集合，纯数组，arguments与拥有非负整数的length属性的纯JS对象*/
    function isArrayLike(obj) {
        if (obj && (typeof obj === "undefined" ? "undefined" : (0, _typeof3.default)(obj)) === "object") {
            var n = obj.length,
                str = serialize.call(obj);
            if (/(Array|List|Collection|Map|Arguments)\]$/.test(str)) {
                return true;
            } else if (str === "[object Object]" && n === n >>> 0) {
                return true; //由于ecma262v5能修改对象属性的enumerable，因此不能用propertyIsEnumerable来判定了
            }
        }
        return false;
    }

    // https://github.com/rsms/js-lru
    var Cache = new function () {
        // jshint ignore:line
        function LRU(maxLength) {
            this.size = 0;
            this.limit = maxLength;
            this.head = this.tail = void 0;
            this._keymap = {};
        }

        var p = LRU.prototype;

        p.put = function (key, value) {
            var entry = {
                key: key,
                value: value
            };
            this._keymap[key] = entry;
            if (this.tail) {
                this.tail.newer = entry;
                entry.older = this.tail;
            } else {
                this.head = entry;
            }
            this.tail = entry;
            if (this.size === this.limit) {
                this.shift();
            } else {
                this.size++;
            }
            return value;
        };

        p.shift = function () {
            var entry = this.head;
            if (entry) {
                this.head = this.head.newer;
                this.head.older = entry.newer = entry.older = this._keymap[entry.key] = void 0;
                delete this._keymap[entry.key]; //#1029
            }
        };
        p.get = function (key) {
            var entry = this._keymap[key];
            if (entry === void 0) return;
            if (entry === this.tail) {
                return entry.value;
            }
            // HEAD--------------TAIL
            //   <.older   .newer>
            //  <--- add direction --
            //   A  B  C  <D>  E
            if (entry.newer) {
                if (entry === this.head) {
                    this.head = entry.newer;
                }
                entry.newer.older = entry.older; // C <-- E.
            }
            if (entry.older) {
                entry.older.newer = entry.newer; // C. --> E
            }
            entry.newer = void 0; // D --x
            entry.older = this.tail; // D. --> E
            if (this.tail) {
                this.tail.newer = entry; // E. <-- D
            }
            this.tail = entry;
            return entry.value;
        };
        return LRU;
    }(); // jshint ignore:line

    /*********************************************************************
     *                           DOM 底层补丁                             *
     **********************************************************************/

    //safari5+是把contains方法放在Element.prototype上而不是Node.prototype
    if (!DOC.contains) {
        Node.prototype.contains = function (arg) {
            return !!(this.compareDocumentPosition(arg) & 16);
        };
    }
    avalon.contains = function (root, el) {
        try {
            while (el = el.parentNode) {
                if (el === root) return true;
            }return false;
        } catch (e) {
            return false;
        }
    };

    if (window.SVGElement) {
        var svgns = "http://www.w3.org/2000/svg";
        var svg = DOC.createElementNS(svgns, "svg");
        svg.innerHTML = '<circle cx="50" cy="50" r="40" fill="red" />';
        if (!rsvg.test(svg.firstChild)) {
            (function () {
                // #409
                /* jshint ignore:start */
                var enumerateNode = function enumerateNode(node, targetNode) {
                    if (node && node.childNodes) {
                        var nodes = node.childNodes;
                        for (var i = 0, el; el = nodes[i++];) {
                            if (el.tagName) {
                                var svg = DOC.createElementNS(svgns, el.tagName.toLowerCase());
                                // copy attrs
                                ap.forEach.call(el.attributes, function (attr) {
                                    svg.setAttribute(attr.name, attr.value);
                                });
                                // 递归处理子节点
                                enumerateNode(el, svg);
                                targetNode.appendChild(svg);
                            }
                        }
                    }
                };
                /* jshint ignore:end */


                (0, _defineProperties2.default)(SVGElement.prototype, {
                    "outerHTML": { //IE9-11,firefox不支持SVG元素的innerHTML,outerHTML属性
                        enumerable: true,
                        configurable: true,
                        get: function get() {
                            return new XMLSerializer().serializeToString(this);
                        },
                        set: function set(html) {
                            var tagName = this.tagName.toLowerCase(),
                                par = this.parentNode,
                                frag = avalon.parseHTML(html);
                            // 操作的svg，直接插入
                            if (tagName === "svg") {
                                par.insertBefore(frag, this);
                                // svg节点的子节点类似
                            } else {
                                var newFrag = DOC.createDocumentFragment();
                                enumerateNode(frag, newFrag);
                                par.insertBefore(newFrag, this);
                            }
                            par.removeChild(this);
                        }
                    },
                    "innerHTML": {
                        enumerable: true,
                        configurable: true,
                        get: function get() {
                            var s = this.outerHTML;
                            var ropen = new RegExp("<" + this.nodeName + '\\b(?:(["\'])[^"]*?(\\1)|[^>])*>', "i");
                            var rclose = new RegExp("<\/" + this.nodeName + ">$", "i");
                            return s.replace(ropen, "").replace(rclose, "");
                        },
                        set: function set(html) {
                            if (avalon.clearHTML) {
                                avalon.clearHTML(this);
                                var frag = avalon.parseHTML(html);
                                enumerateNode(frag, this);
                            }
                        }
                    }
                });
            })();
        }
    }

    //========================= event binding ====================

    var eventHooks = avalon.eventHooks;

    //针对firefox, chrome修正mouseenter, mouseleave(chrome30+)
    if (!("onmouseenter" in root)) {
        avalon.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function (origType, fixType) {
            eventHooks[origType] = {
                type: fixType,
                fix: function fix(elem, fn) {
                    return function (e) {
                        var t = e.relatedTarget;
                        if (!t || t !== elem && !(elem.compareDocumentPosition(t) & 16)) {
                            delete e.type;
                            e.type = origType;
                            return fn.call(elem, e);
                        }
                    };
                }
            };
        });
    }

    //针对IE9+, w3c修正animationend
    avalon.each({
        AnimationEvent: "animationend",
        WebKitAnimationEvent: "webkitAnimationEnd"
    }, function (construct, fixType) {
        if (window[construct] && !eventHooks.animationend) {
            eventHooks.animationend = {
                type: fixType
            };
        }
    });

    if (DOC.onmousewheel === void 0) {
        /* IE6-11 chrome mousewheel wheelDetla 下 -120 上 120
         firefox DOMMouseScroll detail 下3 上-3
         firefox wheel detlaY 下3 上-3
         IE9-11 wheel deltaY 下40 上-40
         chrome wheel deltaY 下100 上-100 */
        eventHooks.mousewheel = {
            type: "wheel",
            fix: function fix(elem, fn) {
                return function (e) {
                    e.wheelDeltaY = e.wheelDelta = e.deltaY > 0 ? -120 : 120;
                    e.wheelDeltaX = 0;
                    Object.defineProperty(e, "type", {
                        value: "mousewheel"
                    });
                    fn.call(elem, e);
                };
            }
        };
    }

    /*********************************************************************
     *                           配置系统                                 *
     **********************************************************************/

    function kernel(settings) {
        for (var p in settings) {
            if (!ohasOwn.call(settings, p)) continue;
            var val = settings[p];
            if (typeof kernel.plugins[p] === "function") {
                kernel.plugins[p](val);
            } else if ((0, _typeof3.default)(kernel[p]) === "object") {
                avalon.mix(kernel[p], val);
            } else {
                kernel[p] = val;
            }
        }
        return this;
    }
    avalon.config = kernel;

    var openTag,
        closeTag,
        rexpr,
        rexprg,
        rbind,
        rregexp = /[-.*+?^${}()|[\]\/\\]/g;

    function escapeRegExp(target) {
        //http://stevenlevithan.com/regex/xregexp/
        //将字符串安全格式化为正则表达式的源码
        return (target + "").replace(rregexp, "\\$&");
    }

    var plugins = {
        interpolate: function interpolate(array) {
            openTag = array[0];
            closeTag = array[1];
            if (openTag === closeTag) {
                throw new SyntaxError("openTag!==closeTag");
                var test = openTag + "test" + closeTag;
                cinerator.innerHTML = test;
                if (cinerator.innerHTML !== test && cinerator.innerHTML.indexOf("&lt;") > -1) {
                    throw new SyntaxError("此定界符不合法");
                }
                cinerator.innerHTML = "";
            }
            kernel.openTag = openTag;
            kernel.closeTag = closeTag;
            var o = escapeRegExp(openTag),
                c = escapeRegExp(closeTag);
            rexpr = new RegExp(o + "([\\s\\S]*)" + c);
            rexprg = new RegExp(o + "([\\s\\S]*)" + c, "g");
            rbind = new RegExp(o + "[\\s\\S]*" + c + "|\\sms-");
        }
    };
    kernel.plugins = plugins;
    kernel.plugins['interpolate'](["{{", "}}"]);

    kernel.async = true;
    kernel.debug = true;
    kernel.paths = {};
    kernel.shim = {};
    kernel.maxRepeatSize = 100;

    function $watch(expr, binding) {
        var $events = this.$events || (this.$events = {}),
            queue = $events[expr] || ($events[expr] = []);

        if (typeof binding === "function") {
            var backup = binding;
            backup.uuid = "_" + ++bindingID;
            binding = {
                element: root,
                type: "user-watcher",
                handler: noop,
                vmodels: [this],
                expr: expr,
                uuid: backup.uuid
            };
            binding.wildcard = /\*/.test(expr);
        }

        if (!binding.update) {
            if (/\w\.*\B/.test(expr) || expr === "*") {
                binding.getter = noop;
                var host = this;
                binding.update = function () {
                    var args = this.fireArgs || [];
                    if (args[2]) binding.handler.apply(host, args);
                    delete this.fireArgs;
                };
                queue.sync = true;
                avalon.Array.ensure(queue, binding);
            } else {
                avalon.injectBinding(binding);
            }
            if (backup) {
                binding.handler = backup;
            }
        } else if (!binding.oneTime) {
            avalon.Array.ensure(queue, binding);
        }

        return function () {
            binding.update = binding.getter = binding.handler = noop;
            binding.element = DOC.createElement("a");
        };
    }

    function $emit(key, args) {
        var event = this.$events;
        if (event && event[key]) {
            if (args) {
                args[2] = key;
            }
            var arr = event[key];
            notifySubscribers(arr, args);
            if (args && event["*"] && !/\./.test(key)) {
                for (var sub, k = 0; sub = event["*"][k++];) {
                    try {
                        sub.handler.apply(this, args);
                    } catch (e) {}
                }
            }
            var parent = this.$up;
            if (parent) {
                if (this.$pathname) {
                    $emit.call(parent, this.$pathname + "." + key, args); //以确切的值往上冒泡
                }
                $emit.call(parent, "*." + key, args); //以模糊的值往上冒泡
            }
        } else {
            parent = this.$up;
            if (this.$ups) {
                for (var i in this.$ups) {
                    $emit.call(this.$ups[i], i + "." + key, args); //以确切的值往上冒泡
                }
                return;
            }
            if (parent) {
                var p = this.$pathname;
                if (p === "") p = "*";
                var path = p + "." + key;
                arr = path.split(".");
                if (arr.indexOf("*") === -1) {
                    $emit.call(parent, path, args); //以确切的值往上冒泡
                    arr[1] = "*";
                    $emit.call(parent, arr.join("."), args); //以模糊的值往上冒泡
                } else {
                    $emit.call(parent, path, args); //以确切的值往上冒泡
                }
            }
        }
    }

    function collectDependency(el, key) {
        do {
            if (el.$watch) {
                var e = el.$events || (el.$events = {});
                var array = e[key] || (e[key] = []);
                dependencyDetection.collectDependency(array);
                return;
            }
            el = el.$up;
            if (el) {
                key = el.$pathname + "." + key;
            } else {
                break;
            }
        } while (true);
    }

    function notifySubscribers(subs, args) {
        if (!subs) return;
        if (new Date() - beginTime > 444 && (0, _typeof3.default)(subs[0]) === "object") {
            rejectDisposeQueue();
        }
        var users = [],
            renders = [];
        for (var i = 0, sub; sub = subs[i++];) {
            if (sub.type === "user-watcher") {
                users.push(sub);
            } else {
                renders.push(sub);
            }
        }
        if (kernel.async) {
            buffer.render(); //1
            for (i = 0; sub = renders[i++];) {
                if (sub.update) {
                    sub.uuid = sub.uuid || "_" + ++bindingID;
                    var uuid = sub.uuid;
                    if (!buffer.queue[uuid]) {
                        buffer.queue[uuid] = "__";
                        buffer.queue.push(sub);
                    }
                }
            }
        } else {
            for (i = 0; sub = renders[i++];) {
                if (sub.update) {
                    sub.update(); //最小化刷新DOM树
                }
            }
        }
        for (i = 0; sub = users[i++];) {
            if (args && args[2] === sub.expr || sub.wildcard) {
                sub.fireArgs = args;
            }
            sub.update();
        }
    }

    //avalon最核心的方法的两个方法之一（另一个是avalon.scan），返回一个ViewModel(VM)
    var VMODELS = avalon.vmodels = {}; //所有vmodel都储存在这里
    avalon.define = function (source) {
        var $id = source.$id;
        if (!$id) {
            log("warning: vm必须指定$id");
        }
        var vmodel = modelFactory(source);
        vmodel.$id = $id;
        return VMODELS[$id] = vmodel;
    };

    //一些不需要被监听的属性
    var $$skipArray = oneObject("$id,$watch,$fire,$events,$model,$skipArray,$active,$pathname,$up,$ups,$track,$accessors");

    //如果浏览器不支持ecma262v5的Object.defineProperties或者存在BUG，比如IE8
    //标准浏览器使用__defineGetter__, __defineSetter__实现

    function modelFactory(source, options) {
        options = options || {};
        options.watch = true;
        return observeObject(source, options);
    }

    //监听对象属性值的变化(注意,数组元素不是数组的属性),通过对劫持当前对象的访问器实现
    //监听对象或数组的结构变化, 对对象的键值对进行增删重排, 或对数组的进行增删重排,都属于这范畴
    //   通过比较前后代理VM顺序实现
    function Component() {}

    function observeObject(source, options) {
        if (!source || source.$id && source.$accessors || source.nodeName && source.nodeType > 0) {
            return source;
        }
        //source为原对象,不能是元素节点或null
        //options,可选,配置对象,里面有old, force, watch这三个属性
        options = options || nullObject;
        var force = options.force || nullObject;
        var old = options.old;
        var oldAccessors = old && old.$accessors || nullObject;
        var $vmodel = new Component(); //要返回的对象, 它在IE6-8下可能被偷龙转凤
        var accessors = {}; //监控属性
        var hasOwn = {};
        var skip = [];
        var simple = [];
        var $skipArray = {};
        if (source.$skipArray) {
            $skipArray = oneObject(source.$skipArray);
            delete source.$skipArray;
        }
        //处理计算属性
        var computed = source.$computed;
        if (computed) {
            delete source.$computed;
            for (var name in computed) {
                hasOwn[name] = true;
                (function (key, value) {
                    var old;
                    accessors[key] = {
                        get: function get() {
                            return old = value.get.call(this);
                        },
                        set: function set(x) {
                            if (typeof value.set === "function") {
                                var older = old;
                                value.set.call(this, x);
                                var newer = this[key];
                                if (this.$fire && newer !== older) {
                                    this.$fire(key, newer, older);
                                }
                            }
                        },
                        enumerable: true,
                        configurable: true
                    };
                })(name, computed[name]); // jshint ignore:line
            }
        }

        for (name in source) {
            var value = source[name];
            if (!$$skipArray[name]) hasOwn[name] = true;
            if (typeof value === "function" || value && value.nodeName && value.nodeType > 0 || !force[name] && (name.charAt(0) === "$" || $$skipArray[name] || $skipArray[name])) {
                skip.push(name);
            } else if (isComputed(value)) {
                log("warning:计算属性建议放在$computed对象中统一定义");
                (function (key, value) {
                    var old;
                    accessors[key] = {
                        get: function get() {
                            return old = value.get.call(this);
                        },
                        set: function set(x) {
                            if (typeof value.set === "function") {
                                var older = old;
                                value.set.call(this, x);
                                var newer = this[key];
                                if (this.$fire && newer !== older) {
                                    this.$fire(key, newer, older);
                                }
                            }
                        },
                        enumerable: true,
                        configurable: true
                    };
                })(name, value); // jshint ignore:line
            } else {
                simple.push(name);
                if (oldAccessors[name]) {
                    accessors[name] = oldAccessors[name];
                } else {
                    accessors[name] = makeGetSet(name, value);
                }
            }
        }

        accessors["$model"] = $modelDescriptor;
        $vmodel = (0, _defineProperties2.default)($vmodel, accessors, source);
        function trackBy(name) {
            return hasOwn[name] === true;
        }
        skip.forEach(function (name) {
            $vmodel[name] = source[name];
        });

        /* jshint ignore:start */
        hideProperty($vmodel, "$ups", null);
        hideProperty($vmodel, "$id", "anonymous");
        hideProperty($vmodel, "$up", old ? old.$up : null);
        hideProperty($vmodel, "$track", (0, _keys2.default)(hasOwn));
        hideProperty($vmodel, "$active", false);
        hideProperty($vmodel, "$pathname", old ? old.$pathname : "");
        hideProperty($vmodel, "$accessors", accessors);
        hideProperty($vmodel, "hasOwnProperty", trackBy);
        if (options.watch) {
            hideProperty($vmodel, "$watch", function () {
                return $watch.apply($vmodel, arguments);
            });
            hideProperty($vmodel, "$fire", function (path, a) {
                if (path.indexOf("all!") === 0) {
                    var ee = path.slice(4);
                    for (var i in avalon.vmodels) {
                        var v = avalon.vmodels[i];
                        v.$fire && v.$fire.apply(v, [ee, a]);
                    }
                } else {
                    $emit.call($vmodel, path, [a]);
                }
            });
        }
        /* jshint ignore:end */

        //必须设置了$active,$events
        simple.forEach(function (name) {
            var oldVal = old && old[name];
            var val = $vmodel[name] = source[name];
            if (val && (typeof val === "undefined" ? "undefined" : (0, _typeof3.default)(val)) === "object") {
                val.$up = $vmodel;
                val.$pathname = name;
            }
            $emit.call($vmodel, name, [val, oldVal]);
        });
        for (name in computed) {
            value = $vmodel[name];
        }
        $vmodel.$active = true;
        return $vmodel;
    }

    /*
     新的VM拥有如下私有属性
     $id: vm.id
     $events: 放置$watch回调与绑定对象
     $watch: 增强版$watch
     $fire: 触发$watch回调
     $track:一个数组,里面包含用户定义的所有键名
     $active:boolean,false时防止依赖收集
     $model:返回一个纯净的JS对象
     $accessors:放置所有读写器的数据描述对象
     $up:返回其上级对象
     $pathname:返回此对象在上级对象的名字,注意,数组元素的$pathname为空字符串
     =============================
     $skipArray:用于指定不可监听的属性,但VM生成是没有此属性的
     */
    function isComputed(val) {
        //speed up!
        if (val && (typeof val === "undefined" ? "undefined" : (0, _typeof3.default)(val)) === "object") {
            for (var i in val) {
                if (i !== "get" && i !== "set") {
                    return false;
                }
            }
            return typeof val.get === "function";
        }
    }
    function makeGetSet(key, value) {
        var childVm,
            value = NaN;
        return {
            get: function get() {
                if (this.$active) {
                    collectDependency(this, key);
                }
                return value;
            },
            set: function set(newVal) {
                if (value === newVal) return;
                var oldValue = value;
                childVm = observe(newVal, value);
                if (childVm) {
                    value = childVm;
                } else {
                    childVm = void 0;
                    value = newVal;
                }

                if (Object(childVm) === childVm) {
                    childVm.$pathname = key;
                    childVm.$up = this;
                }
                if (this.$active) {
                    $emit.call(this, key, [value, oldValue]);
                }
            },
            enumerable: true,
            configurable: true
        };
    }

    function observe(obj, old, hasReturn, watch) {
        if (Array.isArray(obj)) {
            return observeArray(obj, old, watch);
        } else if (avalon.isPlainObject(obj)) {
            if (old && (typeof old === "undefined" ? "undefined" : (0, _typeof3.default)(old)) === 'object') {
                var keys = (0, _keys2.default)(obj);
                var keys2 = (0, _keys2.default)(old);
                if (keys.join(";") === keys2.join(";")) {
                    for (var i in obj) {
                        if (obj.hasOwnProperty(i)) {
                            old[i] = obj[i];
                        }
                    }
                    return old;
                }
                old.$active = false;
            }
            return observeObject(obj, {
                old: old,
                watch: watch
            });
        }
        if (hasReturn) {
            return obj;
        }
    }

    function observeArray(array, old, watch) {
        if (old && old.splice) {
            var args = [0, old.length].concat(array);
            old.splice.apply(old, args);
            return old;
        } else {
            for (var i in newProto) {
                array[i] = newProto[i];
            }
            hideProperty(array, "$up", null);
            hideProperty(array, "$pathname", "");
            hideProperty(array, "$track", createTrack(array.length));

            array._ = observeObject({
                length: NaN
            }, {
                watch: true
            });
            array._.length = array.length;
            array._.$watch("length", function (a, b) {
                $emit.call(array.$up, array.$pathname + ".length", [a, b]);
            });
            if (watch) {
                hideProperty(array, "$watch", function () {
                    return $watch.apply(array, arguments);
                });
            }

            Object.defineProperty(array, "$model", $modelDescriptor);

            for (var j = 0, n = array.length; j < n; j++) {
                var el = array[j] = observe(array[j], 0, 1, 1);
                if (Object(el) === el) {
                    //#1077
                    el.$up = array;
                }
            }

            return array;
        }
    }

    function hideProperty(host, name, value) {

        (0, _defineProperty2.default)(host, name, {
            value: value,
            writable: true,
            enumerable: false,
            configurable: true
        });
    }

    function toJson(val) {
        var xtype = avalon.type(val);
        if (xtype === "array") {
            var array = [];
            for (var i = 0; i < val.length; i++) {
                array[i] = toJson(val[i]);
            }
            return array;
        } else if (xtype === "object") {
            var obj = {};
            for (i in val) {
                if (val.hasOwnProperty(i)) {
                    var value = val[i];
                    obj[i] = value && value.nodeType ? value : toJson(value);
                }
            }
            return obj;
        }
        return val;
    }

    var $modelDescriptor = {
        get: function get() {
            return toJson(this);
        },
        set: noop,
        enumerable: false,
        configurable: true
    };

    /*********************************************************************
     *          监控数组（与ms-each, ms-repeat配合使用）                     *
     **********************************************************************/

    var arrayMethods = ['push', 'pop', 'shift', 'unshift', 'splice'];
    var arrayProto = Array.prototype;
    var newProto = {
        notify: function notify() {
            $emit.call(this.$up, this.$pathname);
        },
        set: function set(index, val) {
            if (index >>> 0 === index && this[index] !== val) {
                if (index > this.length) {
                    throw Error(index + "set方法的第一个参数不能大于原数组长度");
                }
                $emit.call(this.$up, this.$pathname + ".*", [val, this[index]]);
                this.splice(index, 1, val);
            }
        },
        contains: function contains(el) {
            //判定是否包含
            return this.indexOf(el) !== -1;
        },
        ensure: function ensure(el) {
            if (!this.contains(el)) {
                //只有不存在才push
                this.push(el);
            }
            return this;
        },
        pushArray: function pushArray(arr) {
            return this.push.apply(this, arr);
        },
        remove: function remove(el) {
            //移除第一个等于给定值的元素
            return this.removeAt(this.indexOf(el));
        },
        removeAt: function removeAt(index) {
            //移除指定索引上的元素
            if (index >>> 0 === index) {
                return this.splice(index, 1);
            }
            return [];
        },
        size: function size() {
            //取得数组长度，这个函数可以同步视图，length不能
            return this._.length;
        },
        removeAll: function removeAll(all) {
            //移除N个元素
            if (Array.isArray(all)) {
                for (var i = this.length - 1; i >= 0; i--) {
                    if (all.indexOf(this[i]) !== -1) {
                        _splice.call(this.$track, i, 1);
                        _splice.call(this, i, 1);
                    }
                }
            } else if (typeof all === "function") {
                for (i = this.length - 1; i >= 0; i--) {
                    var el = this[i];
                    if (all(el, i)) {
                        _splice.call(this.$track, i, 1);
                        _splice.call(this, i, 1);
                    }
                }
            } else {
                _splice.call(this.$track, 0, this.length);
                _splice.call(this, 0, this.length);
            }
            if (!W3C) {
                this.$model = toJson(this);
            }
            this.notify();
            this._.length = this.length;
        },
        clear: function clear() {
            this.removeAll();
            return this;
        }
    };

    var _splice = arrayProto.splice;
    arrayMethods.forEach(function (method) {
        var original = arrayProto[method];
        newProto[method] = function () {
            // 继续尝试劫持数组元素的属性
            var args = [];
            for (var i = 0, n = arguments.length; i < n; i++) {
                args[i] = observe(arguments[i], 0, 1, 1);
            }
            var result = original.apply(this, args);
            addTrack(this.$track, method, args);
            if (!W3C) {
                this.$model = toJson(this);
            }
            this.notify();
            this._.length = this.length;
            return result;
        };
    });

    "sort,reverse".replace(rword, function (method) {
        newProto[method] = function () {
            var oldArray = this.concat(); //保持原来状态的旧数组
            var newArray = this;
            var mask = Math.random();
            var indexes = [];
            var hasSort = false;
            arrayProto[method].apply(newArray, arguments); //排序
            for (var i = 0, n = oldArray.length; i < n; i++) {
                var neo = newArray[i];
                var old = oldArray[i];
                if (neo === old) {
                    indexes.push(i);
                } else {
                    var index = oldArray.indexOf(neo);
                    indexes.push(index); //得到新数组的每个元素在旧数组对应的位置
                    oldArray[index] = mask; //屏蔽已经找过的元素
                    hasSort = true;
                }
            }
            if (hasSort) {
                sortByIndex(this.$track, indexes);
                if (!W3C) {
                    this.$model = toJson(this);
                }
                this.notify();
            }
            return this;
        };
    });

    function sortByIndex(array, indexes) {
        var map = {};
        for (var i = 0, n = indexes.length; i < n; i++) {
            map[i] = array[i];
            var j = indexes[i];
            if (j in map) {
                array[i] = map[j];
                delete map[j];
            } else {
                array[i] = array[j];
            }
        }
    }

    function createTrack(n) {
        var ret = [];
        for (var i = 0; i < n; i++) {
            ret[i] = generateID("$proxy$each");
        }
        return ret;
    }

    function addTrack(track, method, args) {
        switch (method) {
            case 'push':
            case 'unshift':
                args = createTrack(args.length);
                break;
            case 'splice':
                if (args.length > 2) {
                    // 0, 5, a, b, c --> 0, 2, 0
                    // 0, 5, a, b, c, d, e, f, g--> 0, 0, 3
                    var del = args[1];
                    var add = args.length - 2;
                    // args = [args[0], Math.max(del - add, 0)].concat(createTrack(Math.max(add - del, 0)))
                    args = [args[0], args[1]].concat(createTrack(args.length - 2));
                }
                break;
        }
        Array.prototype[method].apply(track, args);
    }

    /*********************************************************************
     *                           依赖调度系统                              *
     **********************************************************************/

    //检测两个对象间的依赖关系
    var dependencyDetection = function () {
        var outerFrames = [];
        var currentFrame;
        return {
            begin: function begin(binding) {
                //accessorObject为一个拥有callback的对象
                outerFrames.push(currentFrame);
                currentFrame = binding;
            },
            end: function end() {
                currentFrame = outerFrames.pop();
            },
            collectDependency: function collectDependency(array) {
                if (currentFrame) {
                    //被dependencyDetection.begin调用
                    currentFrame.callback(array);
                }
            }
        };
    }();

    //将绑定对象注入到其依赖项的订阅数组中
    var roneval = /^on$/;

    function returnRandom() {
        return new Date() - 0;
    }

    avalon.injectBinding = function (binding) {

        binding.handler = binding.handler || directives[binding.type].update || noop;
        binding.update = function () {
            var begin = false;
            if (!binding.getter) {
                begin = true;
                dependencyDetection.begin({
                    callback: function callback(array) {
                        injectDependency(array, binding);
                    }
                });
                binding.getter = parseExpr(binding.expr, binding.vmodels, binding);
                binding.observers.forEach(function (a) {
                    a.v.$watch(a.p, binding);
                });
                delete binding.observers;
            }
            try {
                var args = binding.fireArgs,
                    a,
                    b;
                delete binding.fireArgs;
                if (!args) {
                    if (binding.type === "on") {
                        a = binding.getter + "";
                    } else {
                        a = binding.getter.apply(0, binding.args);
                    }
                } else {
                    a = args[0];
                    b = args[1];
                }
                b = typeof b === "undefined" ? binding.oldValue : b;
                if (binding._filters) {
                    a = filters.$filter.apply(0, [a].concat(binding._filters));
                }
                if (binding.signature) {
                    var xtype = avalon.type(a);
                    if (xtype !== "array" && xtype !== "object") {
                        throw Error("warning:" + binding.expr + "只能是对象或数组");
                    }
                    binding.xtype = xtype;
                    var vtrack = getProxyIds(binding.proxies || [], xtype);
                    var mtrack = a.$track || (xtype === "array" ? createTrack(a.length) : (0, _keys2.default)(a));
                    binding.track = mtrack;
                    if (vtrack !== mtrack.join(";")) {
                        binding.handler(a, b);
                        binding.oldValue = 1;
                    }
                } else if (Array.isArray(a) ? a.length !== (b && b.length) : false) {
                    binding.handler(a, b);
                    binding.oldValue = a.concat();
                } else if (!("oldValue" in binding) || a !== b) {
                    binding.handler(a, b);
                    binding.oldValue = a;
                }
            } catch (e) {
                delete binding.getter;
                log("warning:exception throwed in [avalon.injectBinding] ", e);
                var node = binding.element;
                if (node && node.nodeType === 3) {
                    node.nodeValue = openTag + (binding.oneTime ? "::" : "") + binding.expr + closeTag;
                }
            } finally {
                begin && dependencyDetection.end();
            }
        };
        binding.update();
    };

    //将依赖项(比它高层的访问器或构建视图刷新函数的绑定对象)注入到订阅者数组
    function injectDependency(list, binding) {
        if (binding.oneTime) return;
        if (list && avalon.Array.ensure(list, binding) && binding.element) {
            injectDisposeQueue(binding, list);
            if (new Date() - beginTime > 444) {
                rejectDisposeQueue();
            }
        }
    }

    function getProxyIds(a, isArray) {
        var ret = [];
        for (var i = 0, el; el = a[i++];) {
            ret.push(isArray ? el.$id : el.$key);
        }
        return ret.join(";");
    }

    /*********************************************************************
     *                     定时GC回收机制 (基于1.6基于频率的GC)                *
     **********************************************************************/

    var disposeQueue = avalon.$$subscribers = [];
    var beginTime = new Date();
    var oldInfo = {};

    //添加到回收列队中
    function injectDisposeQueue(data, list) {
        data.list = list;
        data.i = ~~data.i;
        if (!data.uuid) {
            data.uuid = "_" + ++bindingID;
        }
        if (!disposeQueue[data.uuid]) {
            disposeQueue[data.uuid] = "__";
            disposeQueue.push(data);
        }
    }

    var lastGCIndex = 0;
    function rejectDisposeQueue(data) {
        var i = lastGCIndex || disposeQueue.length;
        var threshold = 0;
        while (data = disposeQueue[--i]) {
            if (data.i < 7) {
                if (data.element === null) {
                    disposeQueue.splice(i, 1);
                    if (data.list) {
                        avalon.Array.remove(data.list, data);
                        delete disposeQueue[data.uuid];
                    }
                    continue;
                }
                if (shouldDispose(data.element)) {
                    //如果它的虚拟DOM不在VTree上或其属性不在VM上
                    disposeQueue.splice(i, 1);
                    avalon.Array.remove(data.list, data);
                    disposeData(data);
                    //avalon会在每次全量更新时,比较上次执行时间,
                    //假若距离上次有半秒,就会发起一次GC,并且只检测当中的500个绑定
                    //而一个正常的页面不会超过2000个绑定(500即取其4分之一)
                    //用户频繁操作页面,那么2,3秒内就把所有绑定检测一遍,将无效的绑定移除
                    if (threshold++ > 500) {
                        lastGCIndex = i;
                        break;
                    }
                    continue;
                }
                data.i++;
                //基于检测频率，如果检测过7次，可以认为其是长久存在的节点，那么以后每7次才检测一次
                if (data.i === 7) {
                    data.i = 14;
                }
            } else {
                data.i--;
            }
        }
        beginTime = new Date();
    }

    function disposeData(data) {
        delete disposeQueue[data.uuid]; // 先清除，不然无法回收了
        data.element = null;
        data.rollback && data.rollback();
        for (var key in data) {
            data[key] = null;
        }
    }

    function shouldDispose(el) {
        try {
            //IE下，如果文本节点脱离DOM树，访问parentNode会报错
            var fireError = el.parentNode.nodeType;
        } catch (e) {
            return true;
        }
        if (el.ifRemove) {
            // 如果节点被放到ifGroup，才移除
            if (!root.contains(el.ifRemove) && ifGroup === el.parentNode) {
                el.parentNode && el.parentNode.removeChild(el);
                return true;
            }
        }
        return el.msRetain ? 0 : el.nodeType === 1 ? !root.contains(el) : !avalon.contains(root, el);
    }

    /************************************************************************
     *              HTML处理(parseHTML, innerHTML, clearHTML)                *
     *************************************************************************/

    //parseHTML的辅助变量
    var tagHooks = new function () {
        // jshint ignore:line
        avalon.mix(this, {
            option: DOC.createElement("select"),
            thead: DOC.createElement("table"),
            td: DOC.createElement("tr"),
            area: DOC.createElement("map"),
            tr: DOC.createElement("tbody"),
            col: DOC.createElement("colgroup"),
            legend: DOC.createElement("fieldset"),
            _default: DOC.createElement("div"),
            "g": DOC.createElementNS("http://www.w3.org/2000/svg", "svg")
        });
        this.optgroup = this.option;
        this.tbody = this.tfoot = this.colgroup = this.caption = this.thead;
        this.th = this.td;
    }(); // jshint ignore:line
    String("circle,defs,ellipse,image,line,path,polygon,polyline,rect,symbol,text,use").replace(rword, function (tag) {
        tagHooks[tag] = tagHooks.g; //处理SVG
    });

    var rtagName = /<([\w:]+)/;
    var rxhtml = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig;
    var scriptTypes = oneObject(["", "text/javascript", "text/ecmascript", "application/ecmascript", "application/javascript"]);
    var script = DOC.createElement("script");
    var rhtml = /<|&#?\w+;/;

    avalon.parseHTML = function (html) {
        var fragment = avalonFragment.cloneNode(false);
        if (typeof html !== "string") {
            return fragment;
        }
        if (!rhtml.test(html)) {
            fragment.appendChild(DOC.createTextNode(html));
            return fragment;
        }
        html = html.replace(rxhtml, "<$1></$2>").trim();
        var tag = (rtagName.exec(html) || ["", ""])[1].toLowerCase(),

        //取得其标签名
        wrapper = tagHooks[tag] || tagHooks._default,
            firstChild;
        wrapper.innerHTML = html;
        var els = wrapper.getElementsByTagName("script");
        if (els.length) {
            //使用innerHTML生成的script节点不会发出请求与执行text属性
            for (var i = 0, el; el = els[i++];) {
                if (scriptTypes[el.type]) {
                    var neo = script.cloneNode(false); //FF不能省略参数
                    ap.forEach.call(el.attributes, function (attr) {
                        neo.setAttribute(attr.name, attr.value);
                    }); // jshint ignore:line
                    neo.text = el.text;
                    el.parentNode.replaceChild(neo, el);
                }
            }
        }

        while (firstChild = wrapper.firstChild) {
            // 将wrapper上的节点转移到文档碎片上！
            fragment.appendChild(firstChild);
        }
        return fragment;
    };

    avalon.innerHTML = function (node, html) {
        var a = this.parseHTML(html);
        this.clearHTML(node).appendChild(a);
    };

    avalon.clearHTML = function (node) {
        node.textContent = "";
        while (node.firstChild) {
            node.removeChild(node.firstChild);
        }
        return node;
    };

    /*********************************************************************
     *                        avalon的原型方法定义区                       *
     **********************************************************************/

    function hyphen(target) {
        //转换为连字符线风格
        return target.replace(/([a-z\d])([A-Z]+)/g, "$1-$2").toLowerCase();
    }

    function camelize(target) {
        //转换为驼峰风格
        if (target.indexOf("-") < 0 && target.indexOf("_") < 0) {
            return target; //提前判断，提高getStyle等的效率
        }
        return target.replace(/[-_][^-_]/g, function (match) {
            return match.charAt(1).toUpperCase();
        });
    }

    "add,remove".replace(rword, function (method) {
        avalon.fn[method + "Class"] = function (cls) {
            var el = this[0];
            //https://developer.mozilla.org/zh-CN/docs/Mozilla/Firefox/Releases/26
            if (cls && typeof cls === "string" && el && el.nodeType === 1) {
                cls.replace(/\S+/g, function (c) {
                    el.classList[method](c);
                });
            }
            return this;
        };
    });

    avalon.fn.mix({
        hasClass: function hasClass(cls) {
            var el = this[0] || {}; //IE10+, chrome8+, firefox3.6+, safari5.1+,opera11.5+支持classList,chrome24+,firefox26+支持classList2.0
            return el.nodeType === 1 && el.classList.contains(cls);
        },
        toggleClass: function toggleClass(value, stateVal) {
            var className,
                i = 0;
            var classNames = String(value).split(/\s+/);
            var isBool = typeof stateVal === "boolean";
            while (className = classNames[i++]) {
                var state = isBool ? stateVal : !this.hasClass(className);
                this[state ? "addClass" : "removeClass"](className);
            }
            return this;
        },
        attr: function attr(name, value) {
            if (arguments.length === 2) {
                this[0].setAttribute(name, value);
                return this;
            } else {
                return this[0].getAttribute(name);
            }
        },
        data: function data(name, value) {
            name = "data-" + hyphen(name || "");
            switch (arguments.length) {
                case 2:
                    this.attr(name, value);
                    return this;
                case 1:
                    var val = this.attr(name);
                    return parseData(val);
                case 0:
                    var ret = {};
                    ap.forEach.call(this[0].attributes, function (attr) {
                        if (attr) {
                            name = attr.name;
                            if (!name.indexOf("data-")) {
                                name = camelize(name.slice(5));
                                ret[name] = parseData(attr.value);
                            }
                        }
                    });
                    return ret;
            }
        },
        removeData: function removeData(name) {
            name = "data-" + hyphen(name);
            this[0].removeAttribute(name);
            return this;
        },
        css: function css(name, value) {
            if (avalon.isPlainObject(name)) {
                for (var i in name) {
                    avalon.css(this, i, name[i]);
                }
            } else {
                var ret = avalon.css(this, name, value);
            }
            return ret !== void 0 ? ret : this;
        },
        position: function position() {
            var offsetParent,
                offset,
                elem = this[0],
                parentOffset = {
                top: 0,
                left: 0
            };
            if (!elem) {
                return;
            }
            if (this.css("position") === "fixed") {
                offset = elem.getBoundingClientRect();
            } else {
                offsetParent = this.offsetParent(); //得到真正的offsetParent
                offset = this.offset(); // 得到正确的offsetParent
                if (offsetParent[0].tagName !== "HTML") {
                    parentOffset = offsetParent.offset();
                }
                parentOffset.top += avalon.css(offsetParent[0], "borderTopWidth", true);
                parentOffset.left += avalon.css(offsetParent[0], "borderLeftWidth", true);
                // Subtract offsetParent scroll positions
                parentOffset.top -= offsetParent.scrollTop();
                parentOffset.left -= offsetParent.scrollLeft();
            }
            return {
                top: offset.top - parentOffset.top - avalon.css(elem, "marginTop", true),
                left: offset.left - parentOffset.left - avalon.css(elem, "marginLeft", true)
            };
        },
        offsetParent: function offsetParent() {
            var offsetParent = this[0].offsetParent;
            while (offsetParent && avalon.css(offsetParent, "position") === "static") {
                offsetParent = offsetParent.offsetParent;
            }
            return avalon(offsetParent || root);
        },
        bind: function bind(type, fn, phase) {
            if (this[0]) {
                //此方法不会链
                return avalon.bind(this[0], type, fn, phase);
            }
        },
        unbind: function unbind(type, fn, phase) {
            if (this[0]) {
                avalon.unbind(this[0], type, fn, phase);
            }
            return this;
        },
        val: function val(value) {
            var node = this[0];
            if (node && node.nodeType === 1) {
                var get = arguments.length === 0;
                var access = get ? ":get" : ":set";
                var fn = valHooks[getValType(node) + access];
                if (fn) {
                    var val = fn(node, value);
                } else if (get) {
                    return (node.value || "").replace(/\r/g, "");
                } else {
                    node.value = value;
                }
            }
            return get ? val : this;
        }
    });

    if (root.dataset) {
        avalon.fn.data = function (name, val) {
            name = name && camelize(name);
            var dataset = this[0].dataset;
            switch (arguments.length) {
                case 2:
                    dataset[name] = val;
                    return this;
                case 1:
                    val = dataset[name];
                    return parseData(val);
                case 0:
                    var ret = createMap();
                    for (name in dataset) {
                        ret[name] = parseData(dataset[name]);
                    }
                    return ret;
            }
        };
    }

    avalon.parseJSON = JSON.parse;

    var rbrace = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/;
    function parseData(data) {
        try {
            if ((typeof data === "undefined" ? "undefined" : (0, _typeof3.default)(data)) === "object") return data;
            data = data === "true" ? true : data === "false" ? false : data === "null" ? null : +data + "" === data ? +data : rbrace.test(data) ? JSON.parse(data) : data;
        } catch (e) {}
        return data;
    }

    avalon.fireDom = function (elem, type, opts) {
        var hackEvent = DOC.createEvent("Events");
        hackEvent.initEvent(type, true, true);
        avalon.mix(hackEvent, opts);
        elem.dispatchEvent(hackEvent);
    };

    avalon.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (method, prop) {
        avalon.fn[method] = function (val) {
            var node = this[0] || {},
                win = getWindow(node),
                top = method === "scrollTop";
            if (!arguments.length) {
                return win ? win[prop] : node[method];
            } else {
                if (win) {
                    win.scrollTo(!top ? val : win[prop], top ? val : win[prop]);
                } else {
                    node[method] = val;
                }
            }
        };
    });

    function getWindow(node) {
        return node.window && node.document ? node : node.nodeType === 9 ? node.defaultView : false;
    }

    //=============================css相关==================================

    var cssHooks = avalon.cssHooks = createMap();
    var prefixes = ["", "-webkit-", "-moz-", "-ms-"]; //去掉opera-15的支持
    var cssMap = {
        "float": "cssFloat"
    };

    avalon.cssNumber = oneObject("animationIterationCount,animationIterationCount,columnCount,order,flex,flexGrow,flexShrink,fillOpacity,fontWeight,lineHeight,opacity,orphans,widows,zIndex,zoom");

    avalon.cssName = function (name, host, camelCase) {
        if (cssMap[name]) {
            return cssMap[name];
        }
        host = host || root.style;
        for (var i = 0, n = prefixes.length; i < n; i++) {
            camelCase = camelize(prefixes[i] + name);
            if (camelCase in host) {
                return cssMap[name] = camelCase;
            }
        }
        return null;
    };

    cssHooks["@:set"] = function (node, name, value) {
        node.style[name] = value;
    };

    cssHooks["@:get"] = function (node, name) {
        if (!node || !node.style) {
            throw new Error("getComputedStyle要求传入一个节点 " + node);
        }
        var ret,
            computed = getComputedStyle(node);
        if (computed) {
            ret = name === "filter" ? computed.getPropertyValue(name) : computed[name];
            if (ret === "") {
                ret = node.style[name]; //其他浏览器需要我们手动取内联样式
            }
        }
        return ret;
    };
    cssHooks["opacity:get"] = function (node) {
        var ret = cssHooks["@:get"](node, "opacity");
        return ret === "" ? "1" : ret;
    };

    "top,left".replace(rword, function (name) {
        cssHooks[name + ":get"] = function (node) {
            var computed = cssHooks["@:get"](node, name);
            return (/px$/.test(computed) ? computed : avalon(node).position()[name] + "px"
            );
        };
    });

    var cssShow = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    };
    var rdisplayswap = /^(none|table(?!-c[ea]).+)/;
    function showHidden(node, array) {
        //http://www.cnblogs.com/rubylouvre/archive/2012/10/27/2742529.html
        if (node.offsetWidth <= 0) {
            //opera.offsetWidth可能小于0
            var styles = getComputedStyle(node, null);
            if (rdisplayswap.test(styles["display"])) {
                var obj = {
                    node: node
                };
                for (var name in cssShow) {
                    obj[name] = styles[name];
                    node.style[name] = cssShow[name];
                }
                array.push(obj);
            }
            var parent = node.parentNode;
            if (parent && parent.nodeType === 1) {
                showHidden(parent, array);
            }
        }
    }

    "Width,Height".replace(rword, function (name) {
        //fix 481
        var method = name.toLowerCase(),
            clientProp = "client" + name,
            scrollProp = "scroll" + name,
            offsetProp = "offset" + name;
        cssHooks[method + ":get"] = function (node, which, override) {
            var boxSizing = -4;
            if (typeof override === "number") {
                boxSizing = override;
            }
            which = name === "Width" ? ["Left", "Right"] : ["Top", "Bottom"];
            var ret = node[offsetProp]; // border-box 0
            if (boxSizing === 2) {
                // margin-box 2
                return ret + avalon.css(node, "margin" + which[0], true) + avalon.css(node, "margin" + which[1], true);
            }
            if (boxSizing < 0) {
                // padding-box  -2
                ret = ret - avalon.css(node, "border" + which[0] + "Width", true) - avalon.css(node, "border" + which[1] + "Width", true);
            }
            if (boxSizing === -4) {
                // content-box -4
                ret = ret - avalon.css(node, "padding" + which[0], true) - avalon.css(node, "padding" + which[1], true);
            }
            return ret;
        };
        cssHooks[method + "&get"] = function (node) {
            var hidden = [];
            showHidden(node, hidden);
            var val = cssHooks[method + ":get"](node);
            for (var i = 0, obj; obj = hidden[i++];) {
                node = obj.node;
                for (var n in obj) {
                    if (typeof obj[n] === "string") {
                        node.style[n] = obj[n];
                    }
                }
            }
            return val;
        };
        avalon.fn[method] = function (value) {
            //会忽视其display
            var node = this[0];
            if (arguments.length === 0) {
                if (node.setTimeout) {
                    //取得窗口尺寸,IE9后可以用node.innerWidth /innerHeight代替
                    return node["inner" + name];
                }
                if (node.nodeType === 9) {
                    //取得页面尺寸
                    var doc = node.documentElement;
                    //FF chrome    html.scrollHeight< body.scrollHeight
                    //IE 标准模式 : html.scrollHeight> body.scrollHeight
                    //IE 怪异模式 : html.scrollHeight 最大等于可视窗口多一点？
                    return Math.max(node.body[scrollProp], doc[scrollProp], node.body[offsetProp], doc[offsetProp], doc[clientProp]);
                }
                return cssHooks[method + "&get"](node);
            } else {
                return this.css(method, value);
            }
        };
        avalon.fn["inner" + name] = function () {
            return cssHooks[method + ":get"](this[0], void 0, -2);
        };
        avalon.fn["outer" + name] = function (includeMargin) {
            return cssHooks[method + ":get"](this[0], void 0, includeMargin === true ? 2 : 0);
        };
    });

    avalon.fn.offset = function () {
        //取得距离页面左右角的坐标
        var node = this[0];
        try {
            var rect = node.getBoundingClientRect();
            // Make sure element is not hidden (display: none) or disconnected
            // https://github.com/jquery/jquery/pull/2043/files#r23981494
            if (rect.width || rect.height || node.getClientRects().length) {
                var doc = node.ownerDocument;
                var root = doc.documentElement;
                var win = doc.defaultView;
                return {
                    top: rect.top + win.pageYOffset - root.clientTop,
                    left: rect.left + win.pageXOffset - root.clientLeft
                };
            }
        } catch (e) {
            return {
                left: 0,
                top: 0
            };
        }
    };

    //=============================val相关=======================

    function getValType(elem) {
        var ret = elem.tagName.toLowerCase();
        return ret === "input" && /checkbox|radio/.test(elem.type) ? "checked" : ret;
    }

    var valHooks = {
        "select:get": function selectGet(node, value) {
            var option,
                options = node.options,
                index = node.selectedIndex,
                one = node.type === "select-one" || index < 0,
                values = one ? null : [],
                max = one ? index + 1 : options.length,
                i = index < 0 ? max : one ? index : 0;
            for (; i < max; i++) {
                option = options[i];
                //旧式IE在reset后不会改变selected，需要改用i === index判定
                //我们过滤所有disabled的option元素，但在safari5下，如果设置select为disable，那么其所有孩子都disable
                //因此当一个元素为disable，需要检测其是否显式设置了disable及其父节点的disable情况
                if ((option.selected || i === index) && !option.disabled) {
                    value = option.value;
                    if (one) {
                        return value;
                    }
                    //收集所有selected值组成数组返回
                    values.push(value);
                }
            }
            return values;
        },
        "select:set": function selectSet(node, values, optionSet) {
            values = [].concat(values); //强制转换为数组
            for (var i = 0, el; el = node.options[i++];) {
                if (el.selected = values.indexOf(el.value) > -1) {
                    optionSet = true;
                }
            }
            if (!optionSet) {
                node.selectedIndex = -1;
            }
        }
    };

    var keyMap = {};
    var keys = ["break,case,catch,continue,debugger,default,delete,do,else,false", "finally,for,function,if,in,instanceof,new,null,return,switch,this", "throw,true,try,typeof,var,void,while,with", /* 关键字*/
    "abstract,boolean,byte,char,class,const,double,enum,export,extends", "final,float,goto,implements,import,int,interface,long,native", "package,private,protected,public,short,static,super,synchronized", "throws,transient,volatile", /*保留字*/
    "arguments,let,yield,undefined"].join(",");
    keys.replace(/\w+/g, function (a) {
        keyMap[a] = true;
    });

    var ridentStart = /[a-z_$]/i;
    var rwhiteSpace = /[\s\uFEFF\xA0]/;
    function getIdent(input, lastIndex) {
        var result = [];
        var subroutine = !!lastIndex;
        lastIndex = lastIndex || 0;
        //将表达式中的标识符抽取出来
        var state = "unknown";
        var variable = "";
        for (var i = 0; i < input.length; i++) {
            var c = input.charAt(i);
            if (c === "'" || c === '"') {
                //字符串开始
                if (state === "unknown") {
                    state = c;
                } else if (state === c) {
                    //字符串结束
                    state = "unknown";
                }
            } else if (c === "\\") {
                if (state === "'" || state === '"') {
                    i++;
                }
            } else if (ridentStart.test(c)) {
                //碰到标识符
                if (state === "unknown") {
                    state = "variable";
                    variable = c;
                } else if (state === "maybePath") {
                    variable = result.pop();
                    variable += "." + c;
                    state = "variable";
                } else if (state === "variable") {
                    variable += c;
                }
            } else if (/\w/.test(c)) {
                if (state === "variable") {
                    variable += c;
                }
            } else if (c === ".") {
                if (state === "variable") {
                    if (variable) {
                        result.push(variable);
                        variable = "";
                        state = "maybePath";
                    }
                }
            } else if (c === "[") {
                if (state === "variable" || state === "maybePath") {
                    if (variable) {
                        //如果前面存在变量,收集它
                        result.push(variable);
                        variable = "";
                    }
                    var lastLength = result.length;
                    var last = result[lastLength - 1];
                    var innerResult = getIdent(input.slice(i), i);
                    if (innerResult.length) {
                        //如果括号中存在变量,那么这里添加通配符
                        result[lastLength - 1] = last + ".*";
                        result = innerResult.concat(result);
                    } else {
                        //如果括号中的东西是确定的,直接转换为其子属性
                        var content = input.slice(i + 1, innerResult.i);
                        try {
                            var text = scpCompile(["return " + content])();
                            result[lastLength - 1] = last + "." + text;
                        } catch (e) {}
                    }
                    state = "maybePath"; //]后面可能还接东西
                    i = innerResult.i;
                }
            } else if (c === "]") {
                if (subroutine) {
                    result.i = i + lastIndex;
                    addVar(result, variable);
                    return result;
                }
            } else if (rwhiteSpace.test(c) && c !== "\r" && c !== "\n") {
                if (state === "variable") {
                    if (addVar(result, variable)) {
                        state = "maybePath"; // aaa . bbb 这样的情况
                    }
                    variable = "";
                }
            } else {
                addVar(result, variable);
                state = "unknown";
                variable = "";
            }
        }
        addVar(result, variable);
        return result;
    }

    function addVar(array, element) {
        if (element && !keyMap[element]) {
            array.push(element);
            return true;
        }
    }

    function addAssign(vars, vmodel, name, binding) {
        var ret = [],
            prefix = " = " + name + ".";
        for (var i = vars.length, prop; prop = vars[--i];) {
            var arr = prop.split("."),
                a;
            var first = arr[0];
            while (a = arr.shift()) {
                if (vmodel.hasOwnProperty(a)) {
                    ret.push(first + prefix + first);
                    binding.observers.push({
                        v: vmodel,
                        p: prop
                    });
                    vars.splice(i, 1);
                }
            }
        }
        return ret;
    }

    var rproxy = /(\$proxy\$[a-z]+)\d+$/;
    var variablePool = new Cache(218);
    //缓存求值函数，以便多次利用
    var evaluatorPool = new Cache(128);

    function getVars(expr) {
        expr = expr.trim();
        var ret = variablePool.get(expr);
        if (ret) {
            return ret.concat();
        }
        var array = getIdent(expr);
        var uniq = {};
        var result = [];
        for (var i = 0, el; el = array[i++];) {
            if (!uniq[el]) {
                uniq[el] = 1;
                result.push(el);
            }
        }
        return variablePool.put(expr, result).concat();
    }

    function parseExpr(expr, vmodels, binding) {
        var filters = binding.filters;
        if (typeof filters === "string" && filters.trim() && !binding._filters) {
            binding._filters = parseFilter(filters.trim());
        }

        var vars = getVars(expr);
        var expose = new Date() - 0;
        var assigns = [];
        var names = [];
        var args = [];
        binding.observers = [];
        for (var i = 0, sn = vmodels.length; i < sn; i++) {
            if (vars.length) {
                var name = "vm" + expose + "_" + i;
                names.push(name);
                args.push(vmodels[i]);
                assigns.push.apply(assigns, addAssign(vars, vmodels[i], name, binding));
            }
        }
        binding.args = args;
        var dataType = binding.type;
        var exprId = vmodels.map(function (el) {
            return String(el.$id).replace(rproxy, "$1");
        }) + expr + dataType;
        var getter = evaluatorPool.get(exprId); //直接从缓存，免得重复生成
        if (getter) {
            if (dataType === "duplex") {
                var setter = evaluatorPool.get(exprId + "setter");
                binding.setter = setter.apply(setter, binding.args);
            }
            return binding.getter = getter;
        }

        if (!assigns.length) {
            assigns.push("fix" + expose);
        }

        if (dataType === "duplex") {
            var nameOne = {};
            assigns.forEach(function (a) {
                var arr = a.split("=");
                nameOne[arr[0].trim()] = arr[1].trim();
            });
            expr = expr.replace(/[\$\w]+/, function (a) {
                return nameOne[a] ? nameOne[a] : a;
            });
            /* jshint ignore:start */
            var fn2 = scpCompile(names.concat("'use strict';" + "return function(vvv){" + expr + " = vvv\n}\n"));
            /* jshint ignore:end */
            evaluatorPool.put(exprId + "setter", fn2);
            binding.setter = fn2.apply(fn2, binding.args);
        }

        if (dataType === "on") {
            //事件绑定
            if (expr.indexOf("(") === -1) {
                expr += ".call(this, $event)";
            } else {
                expr = expr.replace("(", ".call(this,");
            }
            names.push("$event");
            expr = "\nreturn " + expr + ";"; //IE全家 Function("return ")出错，需要Function("return ;")
            var lastIndex = expr.lastIndexOf("\nreturn");
            var header = expr.slice(0, lastIndex);
            var footer = expr.slice(lastIndex);
            expr = header + "\n" + footer;
        } else {
            expr = "\nreturn " + expr + ";"; //IE全家 Function("return ")出错，需要Function("return ;")
        }
        /* jshint ignore:start */
        getter = scpCompile(names.concat("'use strict';\nvar " + assigns.join(",\n") + expr));
        /* jshint ignore:end */

        return evaluatorPool.put(exprId, getter);
    }

    function normalizeExpr(code) {
        var hasExpr = rexpr.test(code); //比如ms-class="width{{w}}"的情况
        if (hasExpr) {
            var array = scanExpr(code);
            if (array.length === 1) {
                return array[0].expr;
            }
            return array.map(function (el) {
                return el.type ? "(" + el.expr + ")" : quote(el.expr);
            }).join(" + ");
        } else {
            return code;
        }
    }

    avalon.normalizeExpr = normalizeExpr;
    avalon.parseExprProxy = parseExpr;

    var rthimRightParentheses = /\)\s*$/;
    var rthimOtherParentheses = /\)\s*\|/g;
    var rquoteFilterName = /\|\s*([$\w]+)/g;
    var rpatchBracket = /"\s*\["/g;
    var rthimLeftParentheses = /"\s*\(/g;
    function parseFilter(filters) {
        filters = filters.replace(rthimRightParentheses, "") //处理最后的小括号
        .replace(rthimOtherParentheses, function () {
            //处理其他小括号
            return "],|";
        }).replace(rquoteFilterName, function (a, b) {
            //处理|及它后面的过滤器的名字
            return "[" + quote(b);
        }).replace(rpatchBracket, function () {
            return '"],["';
        }).replace(rthimLeftParentheses, function () {
            return '",';
        }) + "]";
        /* jshint ignore:start */
        return scpCompile(["return [" + filters + "]"])();
        /* jshint ignore:end */
    }

    /*********************************************************************
     *                          编译系统                                  *
     **********************************************************************/

    var quote = _stringify2.default;

    /*********************************************************************
     *                           扫描系统                                 *
     **********************************************************************/

    avalon.scan = function (elem, vmodel) {
        elem = elem || root;
        var vmodels = vmodel ? [].concat(vmodel) : [];
        scanTag(elem, vmodels);
    };

    //http://www.w3.org/TR/html5/syntax.html#void-elements
    var stopScan = oneObject("area,base,basefont,br,col,command,embed,hr,img,input,link,meta,param,source,track,wbr,noscript,script,style,textarea".toUpperCase());

    function checkScan(elem, callback, innerHTML) {
        var id = setTimeout(function () {
            var currHTML = elem.innerHTML;
            clearTimeout(id);
            if (currHTML === innerHTML) {
                callback();
            } else {
                checkScan(elem, callback, currHTML);
            }
        });
    }

    function createSignalTower(elem, vmodel) {
        var id = elem.getAttribute("avalonctrl") || vmodel.$id;
        elem.setAttribute("avalonctrl", id);
        if (vmodel.$events) {
            vmodel.$events.expr = elem.tagName + '[avalonctrl="' + id + '"]';
        }
    }

    function getBindingCallback(elem, name, vmodels) {
        var callback = elem.getAttribute(name);
        if (callback) {
            for (var i = 0, vm; vm = vmodels[i++];) {
                if (vm.hasOwnProperty(callback) && typeof vm[callback] === "function") {
                    return vm[callback];
                }
            }
        }
    }

    function executeBindings(bindings, vmodels) {
        for (var i = 0, binding; binding = bindings[i++];) {
            binding.vmodels = vmodels;
            directives[binding.type].init(binding);

            avalon.injectBinding(binding);
            if (binding.getter && binding.element.nodeType === 1) {
                //移除数据绑定，防止被二次解析
                //chrome使用removeAttributeNode移除不存在的特性节点时会报错 https://github.com/RubyLouvre/avalon/issues/99
                binding.element.removeAttribute(binding.name);
            }
        }
        bindings.length = 0;
    }

    //https://github.com/RubyLouvre/avalon/issues/636
    var mergeTextNodes = IEVersion && window.MutationObserver ? function (elem) {
        var node = elem.firstChild,
            text;
        while (node) {
            var aaa = node.nextSibling;
            if (node.nodeType === 3) {
                if (text) {
                    text.nodeValue += node.nodeValue;
                    elem.removeChild(node);
                } else {
                    text = node;
                }
            } else {
                text = null;
            }
            node = aaa;
        }
    } : 0;
    var roneTime = /^\s*::/;
    var rmsAttr = /ms-(\w+)-?(.*)/;

    var events = oneObject("animationend,blur,change,input,click,dblclick,focus,keydown,keypress,keyup,mousedown,mouseenter,mouseleave,mousemove,mouseout,mouseover,mouseup,scan,scroll,submit");
    var obsoleteAttrs = oneObject("value,title,alt,checked,selected,disabled,readonly,enabled,href,src");
    function bindingSorter(a, b) {
        return a.priority - b.priority;
    }

    var rnoCollect = /^(ms-\S+|data-\S+|on[a-z]+|id|style|class)$/;
    var ronattr = /^on\-[\w-]+$/;
    function getOptionsFromTag(elem, vmodels) {
        var attributes = elem.attributes;
        var ret = {};
        for (var i = 0, attr; attr = attributes[i++];) {
            var name = attr.name;
            if (attr.specified && !rnoCollect.test(name)) {
                var camelizeName = camelize(attr.name);
                if (/^on\-[\w-]+$/.test(name)) {
                    ret[camelizeName] = getBindingCallback(elem, name, vmodels);
                } else {
                    ret[camelizeName] = parseData(attr.value);
                }
            }
        }
        return ret;
    }

    function scanAttr(elem, vmodels, match) {
        var scanNode = true;
        if (vmodels.length) {
            var attributes = elem.attributes;
            var bindings = [];
            var uniq = {};
            for (var i = 0, attr; attr = attributes[i++];) {
                var name = attr.name;
                if (uniq[name]) {
                    //IE8下ms-repeat,ms-with BUG
                    continue;
                }
                uniq[name] = 1;
                if (attr.specified) {
                    if (match = name.match(rmsAttr)) {
                        //如果是以指定前缀命名的
                        var type = match[1];
                        var param = match[2] || "";
                        var value = attr.value;
                        if (events[type]) {
                            param = type;
                            type = "on";
                        } else if (obsoleteAttrs[type]) {
                            param = type;
                            type = "attr";
                            name = "ms-" + type + "-" + param;
                            log("warning!请改用" + name + "代替" + attr.name + "!");
                        }
                        if (directives[type]) {
                            var newValue = value.replace(roneTime, "");
                            var oneTime = value !== newValue;
                            var binding = {
                                type: type,
                                param: param,
                                element: elem,
                                name: name,
                                expr: newValue,
                                oneTime: oneTime,
                                uuid: "_" + ++bindingID,
                                priority: (directives[type].priority || type.charCodeAt(0) * 10) + (Number(param.replace(/\D/g, "")) || 0)
                            };
                            if (type === "html" || type === "text") {

                                var filters = getToken(value).filters;
                                binding.expr = binding.expr.replace(filters, "");
                                binding.filters = filters.replace(rhasHtml, function () {
                                    binding.type = "html";
                                    binding.group = 1;
                                    return "";
                                }).trim(); // jshint ignore:line
                            } else if (type === "duplex") {
                                var hasDuplex = name;
                            } else if (name === "ms-if-loop") {
                                binding.priority += 100;
                            } else if (name === "ms-attr-value") {
                                var hasAttrValue = name;
                            }
                            bindings.push(binding);
                        }
                    }
                }
            }
            if (bindings.length) {
                bindings.sort(bindingSorter);

                if (hasDuplex && hasAttrValue && elem.type === "text") {
                    log("warning!一个控件不能同时定义ms-attr-value与" + hasDuplex);
                }

                for (i = 0; binding = bindings[i]; i++) {
                    type = binding.type;
                    if (rnoscanAttrBinding.test(type)) {
                        return executeBindings(bindings.slice(0, i + 1), vmodels);
                    } else if (scanNode) {
                        scanNode = !rnoscanNodeBinding.test(type);
                    }
                }
                executeBindings(bindings, vmodels);
            }
        }
        if (scanNode && !stopScan[elem.tagName]) {
            mergeTextNodes && mergeTextNodes(elem);
            scanNodeList(elem, vmodels); //扫描子孙元素
        }
    }

    var rnoscanAttrBinding = /^if|widget|repeat$/;
    var rnoscanNodeBinding = /^each|with|html|include$/;

    function scanNodeList(parent, vmodels) {
        var nodes = avalon.slice(parent.childNodes);
        scanNodeArray(nodes, vmodels);
    }

    function scanNodeArray(nodes, vmodels) {
        function _delay_component(name) {
            setTimeout(function () {
                avalon.component(name);
            });
        }
        for (var i = 0, node; node = nodes[i++];) {
            switch (node.nodeType) {
                case 1:
                    var elem = node;
                    if (!elem.msResolved && elem.parentNode && elem.parentNode.nodeType === 1) {
                        var library = isWidget(elem);
                        if (library) {
                            var widget = elem.localName ? elem.localName.replace(library + ":", "") : elem.nodeName;
                            var fullName = library + ":" + camelize(widget);
                            componentQueue.push({
                                library: library,
                                element: elem,
                                fullName: fullName,
                                widget: widget,
                                vmodels: vmodels,
                                name: "widget"
                            });
                            if (avalon.components[fullName]) {
                                //确保所有ms-attr-name扫描完再处理
                                _delay_component(fullName);
                            }
                        }
                    }

                    scanTag(node, vmodels); //扫描元素节点

                    if (node.msHasEvent) {
                        avalon.fireDom(node, "datasetchanged", {
                            bubble: node.msHasEvent
                        });
                    }

                    break;
                case 3:
                    if (rexpr.test(node.nodeValue)) {
                        scanText(node, vmodels, i); //扫描文本节点
                    }
                    break;
            }
        }
    }

    function scanTag(elem, vmodels, node) {
        //扫描顺序  ms-skip(0) --> ms-important(1) --> ms-controller(2) --> ms-if(10) --> ms-repeat(100) 
        //--> ms-if-loop(110) --> ms-attr(970) ...--> ms-each(1400)-->ms-with(1500)--〉ms-duplex(2000)垫后        
        var a = elem.getAttribute("ms-skip");
        var b = elem.getAttributeNode("ms-important");
        var c = elem.getAttributeNode("ms-controller");
        if (typeof a === "string") {
            return;
        } else if (node = b || c) {
            var newVmodel = avalon.vmodels[node.value];
            if (!newVmodel) {
                return;
            }
            //ms-important不包含父VM，ms-controller相反
            vmodels = node === b ? [newVmodel] : [newVmodel].concat(vmodels);
            elem.removeAttribute(node.name); //removeAttributeNode不会刷新[ms-controller]样式规则
            elem.classList.remove(node.name);
            createSignalTower(elem, newVmodel);
        }
        scanAttr(elem, vmodels); //扫描特性节点

        if (newVmodel) {
            setTimeout(function () {
                newVmodel.$fire("ms-scan-end", elem);
            });
        }
    }
    var rhasHtml = /\|\s*html(?:\b|$)/,
        r11a = /\|\|/g,
        rlt = /&lt;/g,
        rgt = /&gt;/g,
        rstringLiteral = /(['"])(\\\1|.)+?\1/g,
        rline = /\r?\n/g;
    function getToken(value) {
        if (value.indexOf("|") > 0) {
            var scapegoat = value.replace(rstringLiteral, function (_) {
                return Array(_.length + 1).join("1"); // jshint ignore:line
            });
            var index = scapegoat.replace(r11a, "\u1122\u3344").indexOf("|"); //干掉所有短路或
            if (index > -1) {
                return {
                    type: "text",
                    filters: value.slice(index).trim(),
                    expr: value.slice(0, index)
                };
            }
        }
        return {
            type: "text",
            expr: value,
            filters: ""
        };
    }

    function scanExpr(str) {
        var tokens = [],
            value,
            start = 0,
            stop;
        do {
            stop = str.indexOf(openTag, start);
            if (stop === -1) {
                break;
            }
            value = str.slice(start, stop);
            if (value) {
                // {{ 左边的文本
                tokens.push({
                    expr: value
                });
            }
            start = stop + openTag.length;
            stop = str.indexOf(closeTag, start);
            if (stop === -1) {
                break;
            }
            value = str.slice(start, stop);
            if (value) {
                //处理{{ }}插值表达式
                tokens.push(getToken(value.replace(rline, "")));
            }
            start = stop + closeTag.length;
        } while (1);
        value = str.slice(start);
        if (value) {
            //}} 右边的文本
            tokens.push({
                expr: value
            });
        }
        return tokens;
    }

    function scanText(textNode, vmodels, index) {
        var bindings = [],
            tokens = scanExpr(textNode.data);
        if (tokens.length) {
            for (var i = 0, token; token = tokens[i++];) {
                var node = DOC.createTextNode(token.expr); //将文本转换为文本节点，并替换原来的文本节点
                if (token.type) {
                    token.expr = token.expr.replace(roneTime, function () {
                        token.oneTime = true;
                        return "";
                    }); // jshint ignore:line
                    token.element = node;
                    token.filters = token.filters.replace(rhasHtml, function () {
                        token.type = "html";
                        return "";
                    }); // jshint ignore:line
                    token.pos = index * 1000 + i;
                    bindings.push(token); //收集带有插值表达式的文本
                }
                avalonFragment.appendChild(node);
            }
            textNode.parentNode.replaceChild(avalonFragment, textNode);
            if (bindings.length) executeBindings(bindings, vmodels);
        }
    }

    //使用来自游戏界的双缓冲技术,减少对视图的冗余刷新
    var Buffer = function Buffer() {
        this.queue = [];
    };
    Buffer.prototype = {
        render: function render(isAnimate) {
            if (!this.locked) {
                this.locked = isAnimate ? root.offsetHeight + 10 : 1;
                var me = this;
                avalon.nextTick(function () {
                    me.flush();
                });
            }
        },
        flush: function flush() {
            for (var i = 0, sub; sub = this.queue[i++];) {
                sub.update && sub.update();
            }
            this.locked = 0;
            this.queue = [];
        }
    };

    var buffer = new Buffer();

    var componentQueue = [];
    var widgetList = [];
    var componentHooks = {
        $construct: function $construct() {
            return avalon.mix.apply(null, arguments);
        },
        $ready: noop,
        $init: noop,
        $dispose: noop,
        $container: null,
        $childReady: noop,
        $replace: false,
        $extend: null,
        $$template: function $$template(str) {
            return str;
        }
    };

    avalon.components = {};
    avalon.component = function (name, opts) {
        if (opts) {
            avalon.components[name] = avalon.mix({}, componentHooks, opts);
        }
        for (var i = 0, obj; obj = componentQueue[i]; i++) {
            if (name === obj.fullName) {
                componentQueue.splice(i, 1);
                i--;

                (function (host, hooks, elem, widget) {
                    //如果elem已从Document里移除,直接返回
                    //issuse : https://github.com/RubyLouvre/avalon2/issues/40
                    if (!avalon.contains(DOC, elem) || elem.msResolved) {
                        avalon.Array.remove(componentQueue, host);
                        return;
                    }

                    var dependencies = 1;
                    var library = host.library;
                    var global = avalon.libraries[library] || componentHooks;

                    //===========收集各种配置=======
                    if (elem.getAttribute("ms-attr-identifier")) {
                        //如果还没有解析完,就延迟一下 #1155
                        return;
                    }
                    var elemOpts = getOptionsFromTag(elem, host.vmodels);
                    var vmOpts = getOptionsFromVM(host.vmodels, elemOpts.config || host.fullName);
                    var $id = elemOpts.$id || elemOpts.identifier || generateID(widget);
                    delete elemOpts.config;
                    delete elemOpts.$id;
                    delete elemOpts.identifier;
                    var componentDefinition = {};

                    var parentHooks = avalon.components[hooks.$extend];
                    if (parentHooks) {
                        avalon.mix(true, componentDefinition, parentHooks);
                        componentDefinition = parentHooks.$construct.call(elem, componentDefinition, {}, {});
                    } else {
                        avalon.mix(true, componentDefinition, hooks);
                    }
                    componentDefinition = avalon.components[name].$construct.call(elem, componentDefinition, vmOpts, elemOpts);

                    componentDefinition.$refs = {};
                    componentDefinition.$id = $id;

                    //==========构建VM=========
                    var keepSlot = componentDefinition.$slot;
                    var keepReplace = componentDefinition.$replace;
                    var keepContainer = componentDefinition.$container;
                    var keepTemplate = componentDefinition.$template;
                    delete componentDefinition.$slot;
                    delete componentDefinition.$replace;
                    delete componentDefinition.$container;
                    delete componentDefinition.$construct;

                    var vmodel = avalon.define(componentDefinition) || {};
                    elem.msResolved = 1; //防止二进扫描此元素
                    vmodel.$init(vmodel, elem);
                    global.$init(vmodel, elem);
                    var nodes = elem.childNodes;
                    //收集插入点
                    var slots = {},
                        snode;
                    for (var s = 0, el; el = nodes[s++];) {
                        var type = el.nodeType === 1 && el.getAttribute("slot") || keepSlot;
                        if (type) {
                            if (slots[type]) {
                                slots[type].push(el);
                            } else {
                                slots[type] = [el];
                            }
                        }
                    }

                    if (vmodel.$$template) {
                        avalon.clearHTML(elem);
                        elem.innerHTML = vmodel.$$template(keepTemplate);
                    }
                    for (s in slots) {
                        if (vmodel.hasOwnProperty(s)) {
                            var ss = slots[s];
                            if (ss.length) {
                                var fragment = avalonFragment.cloneNode(true);
                                for (var ns = 0; snode = ss[ns++];) {
                                    fragment.appendChild(snode);
                                }
                                vmodel[s] = fragment;
                            }
                            slots[s] = null;
                        }
                    }
                    slots = null;
                    var child = elem.children[0] || elem.firstChild;
                    if (keepReplace) {
                        elem.parentNode.replaceChild(child, elem);
                        child.msResolved = 1;
                        var cssText = elem.style.cssText;
                        var className = elem.className;
                        elem = host.element = child;
                        elem.style.cssText += ";" + cssText;
                        if (className) {
                            avalon(elem).addClass(className);
                        }
                    }
                    if (keepContainer) {
                        keepContainer.appendChild(elem);
                    }
                    avalon.fireDom(elem, "datasetchanged", { library: library, vm: vmodel, childReady: 1 });
                    var children = 0;
                    var removeFn = avalon.bind(elem, "datasetchanged", function (e) {
                        if (e.childReady && e.library === library) {
                            dependencies += e.childReady;
                            if (vmodel !== e.vm) {
                                vmodel.$refs[e.vm.$id] = e.vm;
                                if (e.childReady === -1) {
                                    children++;
                                    vmodel.$childReady(vmodel, elem, e);
                                }
                                e.stopPropagation();
                            }
                        }
                        if (dependencies === 0) {
                            var id1 = setTimeout(function () {
                                clearTimeout(id1);

                                vmodel.$ready(vmodel, elem, host.vmodels);
                                global.$ready(vmodel, elem, host.vmodels);
                            }, children ? Math.max(children * 17, 100) : 17);
                            avalon.unbind(elem, "datasetchanged", removeFn);
                            //==================
                            host.rollback = function () {
                                try {
                                    vmodel.$dispose(vmodel, elem);
                                    global.$dispose(vmodel, elem);
                                } catch (e) {}
                                delete avalon.vmodels[vmodel.$id];
                            };
                            injectDisposeQueue(host, widgetList);
                            if (window.chrome) {
                                elem.addEventListener("DOMNodeRemovedFromDocument", function () {
                                    setTimeout(rejectDisposeQueue);
                                });
                            }
                        }
                    });
                    scanTag(elem, [vmodel].concat(host.vmodels));
                    avalon.vmodels[vmodel.$id] = vmodel;
                    if (!elem.childNodes.length) {
                        avalon.fireDom(elem, "datasetchanged", { library: library, vm: vmodel, childReady: -1 });
                    } else {
                        var id2 = setTimeout(function () {
                            clearTimeout(id2);
                            avalon.fireDom(elem, "datasetchanged", { library: library, vm: vmodel, childReady: -1 });
                        }, 17);
                    }
                })(obj, avalon.components[name], obj.element, obj.widget); // jshint ignore:line
            }
        }
    };

    function getOptionsFromVM(vmodels, pre) {
        if (pre) {
            for (var i = 0, v; v = vmodels[i++];) {
                if (v.hasOwnProperty(pre) && (0, _typeof3.default)(v[pre]) === "object") {
                    var vmOptions = v[pre];
                    return vmOptions.$model || vmOptions;
                    break;
                }
            }
        }
        return {};
    }

    avalon.libraries = [];
    avalon.library = function (name, opts) {
        if (DOC.namespaces) {
            DOC.namespaces.add(name, 'http://www.w3.org/1999/xhtml');
        }
        avalon.libraries[name] = avalon.mix({
            $init: noop,
            $ready: noop,
            $dispose: noop
        }, opts || {});
    };

    avalon.library("ms");

    /*
     broswer  nodeName  scopeName  localName
     IE9     ONI:BUTTON oni        button
     IE10    ONI:BUTTON undefined  oni:button
     IE8     button     oni        undefined
     chrome  ONI:BUTTON undefined  oni:button
     
     */
    function isWidget(el) {
        //如果为自定义标签,返回UI库的名字
        if (el.scopeName && el.scopeName !== "HTML") {
            return el.scopeName;
        }
        var fullName = el.nodeName.toLowerCase();
        var index = fullName.indexOf(":");
        if (index > 0) {
            return fullName.slice(0, index);
        }
    }
    //各种MVVM框架在大型表格下的性能测试
    // https://github.com/RubyLouvre/avalon/issues/859

    var bools = ["autofocus,autoplay,async,allowTransparency,checked,controls", "declare,disabled,defer,defaultChecked,defaultSelected", "contentEditable,isMap,loop,multiple,noHref,noResize,noShade", "open,readOnly,selected"].join(",");
    var boolMap = {};
    bools.replace(rword, function (name) {
        boolMap[name.toLowerCase()] = name;
    });

    var propMap = { //属性名映射
        "accept-charset": "acceptCharset",
        "char": "ch",
        "charoff": "chOff",
        "class": "className",
        "for": "htmlFor",
        "http-equiv": "httpEquiv"
    };

    var anomaly = ["accessKey,bgColor,cellPadding,cellSpacing,codeBase,codeType,colSpan", "dateTime,defaultValue,frameBorder,longDesc,maxLength,marginWidth,marginHeight", "rowSpan,tabIndex,useMap,vSpace,valueType,vAlign"].join(",");
    anomaly.replace(rword, function (name) {
        propMap[name.toLowerCase()] = name;
    });

    var attrDir = avalon.directive("attr", {
        init: function init(binding) {
            //{{aaa}} --> aaa
            //{{aaa}}/bbb.html --> (aaa) + "/bbb.html"
            binding.expr = normalizeExpr(binding.expr.trim());
            if (binding.type === "include") {
                var elem = binding.element;
                effectBinding(elem, binding);
                binding.includeRendered = getBindingCallback(elem, "data-include-rendered", binding.vmodels);
                binding.includeLoaded = getBindingCallback(elem, "data-include-loaded", binding.vmodels);
                var outer = binding.includeReplace = !!avalon(elem).data("includeReplace");
                if (avalon(elem).data("includeCache")) {
                    binding.templateCache = {};
                }
                binding.start = DOC.createComment("ms-include");
                binding.end = DOC.createComment("ms-include-end");
                if (outer) {
                    binding.element = binding.end;
                    binding._element = elem;
                    elem.parentNode.insertBefore(binding.start, elem);
                    elem.parentNode.insertBefore(binding.end, elem.nextSibling);
                } else {
                    elem.insertBefore(binding.start, elem.firstChild);
                    elem.appendChild(binding.end);
                }
            }
        },
        update: function update(val) {
            var elem = this.element;
            var attrName = this.param;
            if (attrName === "href" || attrName === "src") {
                if (typeof val === "string" && !root.hasAttribute) {
                    val = val.replace(/&amp;/g, "&"); //处理IE67自动转义的问题
                }
                elem[attrName] = val;
                if (window.chrome && elem.tagName === "EMBED") {
                    var parent = elem.parentNode; //#525  chrome1-37下embed标签动态设置src不能发生请求
                    var comment = document.createComment("ms-src");
                    parent.replaceChild(comment, elem);
                    parent.replaceChild(elem, comment);
                }
            } else {

                // ms-attr-class="xxx" vm.xxx="aaa bbb ccc"将元素的className设置为aaa bbb ccc
                // ms-attr-class="xxx" vm.xxx=false  清空元素的所有类名
                // ms-attr-name="yyy"  vm.yyy="ooo" 为元素设置name属性
                var toRemove = val === false || val === null || val === void 0;
                if (!W3C && propMap[attrName]) {
                    //旧式IE下需要进行名字映射
                    attrName = propMap[attrName];
                }
                var bool = boolMap[attrName];
                if (typeof elem[bool] === "boolean") {
                    elem[bool] = !!val; //布尔属性必须使用el.xxx = true|false方式设值
                    if (!val) {
                        //如果为false, IE全系列下相当于setAttribute(xxx,''),会影响到样式,需要进一步处理
                        toRemove = true;
                    }
                }
                if (toRemove) {
                    return elem.removeAttribute(attrName);
                }
                //SVG只能使用setAttribute(xxx, yyy), VML只能使用elem.xxx = yyy ,HTML的固有属性必须elem.xxx = yyy
                var isInnate = rsvg.test(elem) ? false : DOC.namespaces && isVML(elem) ? true : attrName in elem.cloneNode(false);
                if (isInnate) {
                    elem[attrName] = val + "";
                } else {
                    elem.setAttribute(attrName, val);
                }
            }
        }
    });

    //这几个指令都可以使用插值表达式，如ms-src="aaa/{{b}}/{{c}}.html"
    "title,alt,src,value,css,include,href".replace(rword, function (name) {
        directives[name] = attrDir;
    });

    //根据VM的属性值或表达式的值切换类名，ms-class="xxx yyy zzz:flag"
    //http://www.cnblogs.com/rubylouvre/archive/2012/12/17/2818540.html
    avalon.directive("class", {
        init: function init(binding) {
            var oldStyle = binding.param;
            var method = binding.type;
            if (!oldStyle || isFinite(oldStyle)) {
                binding.param = ""; //去掉数字
                directives.effect.init(binding);
            } else {
                log('ms-' + method + '-xxx="yyy"这种用法已经过时,请使用ms-' + method + '="xxx:yyy"');
                binding.expr = '[' + quote(oldStyle) + "," + binding.expr + "]";
                binding.oldStyle = oldStyle;
            }
            if (method === "hover" || method === "active") {
                //确保只绑定一次
                if (!binding.hasBindEvent) {
                    var elem = binding.element;
                    var $elem = avalon(elem);
                    var activate = "mouseenter"; //在移出移入时切换类名
                    var abandon = "mouseleave";
                    if (method === "active") {
                        //在聚焦失焦中切换类名
                        elem.tabIndex = elem.tabIndex || -1;
                        activate = "mousedown";
                        abandon = "mouseup";
                        var fn0 = $elem.bind("mouseleave", function () {
                            binding.toggleClass && $elem.removeClass(binding.newClass);
                        });
                    }
                }

                var fn1 = $elem.bind(activate, function () {
                    binding.toggleClass && $elem.addClass(binding.newClass);
                });
                var fn2 = $elem.bind(abandon, function () {
                    binding.toggleClass && $elem.removeClass(binding.newClass);
                });
                binding.rollback = function () {
                    $elem.unbind("mouseleave", fn0);
                    $elem.unbind(activate, fn1);
                    $elem.unbind(abandon, fn2);
                };
                binding.hasBindEvent = true;
            }
        },
        update: function update(arr) {
            var binding = this;
            var $elem = avalon(this.element);
            binding.newClass = arr[0];
            binding.toggleClass = !!arr[1];
            if (binding.oldClass && binding.newClass !== binding.oldClass) {
                $elem.removeClass(binding.oldClass);
            }
            binding.oldClass = binding.newClass;
            if (binding.type === "class") {
                if (binding.oldStyle) {
                    $elem.toggleClass(binding.oldStyle, !!arr[1]);
                } else {
                    $elem.toggleClass(binding.newClass, binding.toggleClass);
                }
            }
        }
    });

    "hover,active".replace(rword, function (name) {
        directives[name] = directives["class"];
    });

    //ms-controller绑定已经在scanTag 方法中实现
    avalon.directive("css", {
        init: directives.attr.init,
        update: function update(val) {
            avalon(this.element).css(this.param, val);
        }
    });

    avalon.directive("data", {
        priority: 100,
        update: function update(val) {
            var elem = this.element;
            var key = "data-" + this.param;
            if (val && (typeof val === "undefined" ? "undefined" : (0, _typeof3.default)(val)) === "object") {
                elem[key] = val;
            } else {
                elem.setAttribute(key, String(val));
            }
        }
    });

    //双工绑定
    var rduplexType = /^(?:checkbox|radio)$/;
    var rduplexParam = /^(?:radio|checked)$/;
    var rnoduplexInput = /^(file|button|reset|submit|checkbox|radio|range)$/;
    var duplexBinding = avalon.directive("duplex", {
        priority: 2000,
        init: function init(binding, hasCast) {
            var elem = binding.element;
            var vmodels = binding.vmodels;
            binding.changed = getBindingCallback(elem, "data-duplex-changed", vmodels) || noop;
            var params = [];
            var casting = oneObject("string,number,boolean,checked");
            if (elem.type === "radio" && binding.param === "") {
                binding.param = "checked";
            }

            binding.param.replace(rw20g, function (name) {
                if (rduplexType.test(elem.type) && rduplexParam.test(name)) {
                    if (name === "radio") log("ms-duplex-radio已经更名为ms-duplex-checked");
                    name = "checked";
                    binding.isChecked = true;
                    binding.xtype = "radio";
                }
                if (name === "bool") {
                    name = "boolean";
                    log("ms-duplex-bool已经更名为ms-duplex-boolean");
                } else if (name === "text") {
                    name = "string";
                    log("ms-duplex-text已经更名为ms-duplex-string");
                }
                if (casting[name]) {
                    hasCast = true;
                }
                avalon.Array.ensure(params, name);
            });
            if (!hasCast) {
                params.push("string");
            }
            binding.param = params.join("-");
            if (!binding.xtype) {
                binding.xtype = elem.tagName === "SELECT" ? "select" : elem.type === "checkbox" ? "checkbox" : elem.type === "radio" ? "radio" : /^change/.test(elem.getAttribute("data-duplex-event")) ? "change" : "input";
            }
            //===================绑定事件======================
            var bound = binding.bound = function (type, callback) {
                elem.addEventListener(type, callback, false);
                var old = binding.rollback;
                binding.rollback = function () {
                    elem.avalonSetter = null;
                    avalon.unbind(elem, type, callback);
                    old && old();
                };
            };
            function callback(value) {
                binding.changed.call(this, value, binding);
            }
            var composing = false;
            function compositionStart() {
                composing = true;
            }
            function compositionEnd() {
                composing = false;
            }
            var updateVModel = function updateVModel(e) {
                var val = elem.value; //防止递归调用形成死循环
                if (composing || val === binding.oldValue || binding.pipe === null) //处理中文输入法在minlengh下引发的BUG
                    return;
                var lastValue = binding.pipe(val, binding, "get");
                binding.oldValue = val;
                binding.setter(lastValue);
                callback.call(elem, lastValue);
            };
            switch (binding.xtype) {
                case "radio":
                    bound("click", function () {
                        var lastValue = binding.pipe(elem.value, binding, "get");
                        binding.setter(lastValue);
                        callback.call(elem, lastValue);
                    });
                    break;
                case "checkbox":
                    bound("change", function () {
                        var method = elem.checked ? "ensure" : "remove";
                        var array = binding.getter.apply(0, binding.vmodels);
                        if (!Array.isArray(array)) {
                            log("ms-duplex应用于checkbox上要对应一个数组");
                            array = [array];
                        }
                        var val = binding.pipe(elem.value, binding, "get");
                        avalon.Array[method](array, val);
                        callback.call(elem, array);
                    });
                    break;
                case "change":
                    bound("change", updateVModel);
                    break;
                case "input":
                    bound("input", updateVModel);
                    bound("keyup", updateVModel);
                    if (!IEVersion) {
                        bound("compositionstart", compositionStart);
                        bound("compositionend", compositionEnd);
                        bound("DOMAutoComplete", updateVModel);
                    }
                    break;
                case "select":
                    bound("change", function () {
                        var val = avalon(elem).val(); //字符串或字符串数组
                        if (Array.isArray(val)) {
                            val = val.map(function (v) {
                                return binding.pipe(v, binding, "get");
                            });
                        } else {
                            val = binding.pipe(val, binding, "get");
                        }
                        if (val + "" !== binding.oldValue) {
                            try {
                                binding.setter(val);
                            } catch (ex) {
                                log(ex);
                            }
                        }
                    });
                    bound("datasetchanged", function (e) {
                        if (e.bubble === "selectDuplex") {
                            var value = binding._value;
                            var curValue = Array.isArray(value) ? value.map(String) : value + "";
                            avalon(elem).val(curValue);
                            elem.oldValue = curValue + "";
                            callback.call(elem, curValue);
                        }
                    });
                    break;
            }
            if (binding.xtype === "input" && !rnoduplexInput.test(elem.type)) {
                if (elem.type !== "hidden") {
                    bound("focus", function () {
                        elem.msFocus = true;
                    });
                    bound("blur", function () {
                        elem.msFocus = false;
                    });
                }
                elem.avalonSetter = updateVModel; //#765
                watchValueInTimer(function () {
                    if (root.contains(elem)) {
                        if (!elem.msFocus) {
                            updateVModel();
                        }
                    } else if (!elem.msRetain) {
                        return false;
                    }
                });
            }
        },
        update: function update(value) {
            var elem = this.element,
                binding = this,
                curValue;
            if (!this.init) {
                for (var i in avalon.vmodels) {
                    var v = avalon.vmodels[i];
                    v.$fire("avalon-ms-duplex-init", binding);
                }
                var cpipe = binding.pipe || (binding.pipe = pipe);
                cpipe(null, binding, "init");
                this.init = 1;
            }
            switch (this.xtype) {
                case "input":
                case "change":
                    curValue = this.pipe(value, this, "set"); //fix #673
                    if (curValue !== this.oldValue) {
                        var fixCaret = false;
                        if (elem.msFocus) {
                            try {
                                var start = elem.selectionStart;
                                var end = elem.selectionEnd;
                                if (start === end) {
                                    var pos = start;
                                    fixCaret = true;
                                }
                            } catch (e) {}
                        }
                        elem.value = this.oldValue = curValue;
                        if (fixCaret && !elem.readOnly) {
                            elem.selectionStart = elem.selectionEnd = pos;
                        }
                    }
                    break;
                case "radio":
                    curValue = binding.isChecked ? !!value : value + "" === elem.value;
                    elem.checked = curValue;
                    break;
                case "checkbox":
                    var array = [].concat(value); //强制转换为数组
                    curValue = this.pipe(elem.value, this, "get");
                    elem.checked = array.indexOf(curValue) > -1;
                    break;
                case "select":
                    //必须变成字符串后才能比较
                    binding._value = value;
                    if (!elem.msHasEvent) {
                        elem.msHasEvent = "selectDuplex";
                        //必须等到其孩子准备好才触发
                    } else {
                        avalon.fireDom(elem, "datasetchanged", {
                            bubble: elem.msHasEvent
                        });
                    }
                    break;
            }
        }
    });

    function fixNull(val) {
        return val == null ? "" : val;
    }
    avalon.duplexHooks = {
        checked: {
            get: function get(val, binding) {
                return !binding.oldValue;
            }
        },
        string: {
            get: function get(val) {
                //同步到VM
                return val;
            },
            set: fixNull
        },
        "boolean": {
            get: function get(val) {
                return val === "true";
            },
            set: fixNull
        },
        number: {
            get: function get(val, binding) {
                var number = parseFloat(val);
                if (-val === -number) {
                    return number;
                }
                var arr = /strong|medium|weak/.exec(binding.element.getAttribute("data-duplex-number")) || ["medium"];
                switch (arr[0]) {
                    case "strong":
                        return 0;
                    case "medium":
                        return val === "" ? "" : 0;
                    case "weak":
                        return val;
                }
            },
            set: fixNull
        }
    };

    function pipe(val, binding, action, e) {
        binding.param.replace(rw20g, function (name) {
            var hook = avalon.duplexHooks[name];
            if (hook && typeof hook[action] === "function") {
                val = hook[action](val, binding);
            }
        });
        return val;
    }

    var TimerID,
        ribbon = [];

    avalon.tick = function (fn) {
        if (ribbon.push(fn) === 1) {
            TimerID = setInterval(ticker, 60);
        }
    };

    function ticker() {
        for (var n = ribbon.length - 1; n >= 0; n--) {
            var el = ribbon[n];
            if (el() === false) {
                ribbon.splice(n, 1);
            }
        }
        if (!ribbon.length) {
            clearInterval(TimerID);
        }
    }

    var watchValueInTimer = noop;
    new function () {
        // jshint ignore:line
        try {
            var newSetter = function newSetter(value) {
                // jshint ignore:line
                setters[this.tagName].call(this, value);
                if (!this.msFocus && this.avalonSetter) {
                    this.avalonSetter();
                }
            };

            //#272 IE9-IE11, firefox
            var setters = {};
            var aproto = HTMLInputElement.prototype;
            var bproto = HTMLTextAreaElement.prototype;

            var inputProto = HTMLInputElement.prototype;
            (0, _getOwnPropertyNames2.default)(inputProto); //故意引发IE6-8等浏览器报错
            setters["INPUT"] = (0, _getOwnPropertyDescriptor2.default)(aproto, "value").set;

            Object.defineProperty(aproto, "value", {
                set: newSetter
            });
            setters["TEXTAREA"] = (0, _getOwnPropertyDescriptor2.default)(bproto, "value").set;
            Object.defineProperty(bproto, "value", {
                set: newSetter
            });
        } catch (e) {
            //在chrome 43中 ms-duplex终于不需要使用定时器实现双向绑定了
            // http://updates.html5rocks.com/2015/04/DOM-attributes-now-on-the-prototype
            // https://docs.google.com/document/d/1jwA8mtClwxI-QJuHT7872Z0pxpZz8PBkf2bGAbsUtqs/edit?pli=1
            watchValueInTimer = avalon.tick;
        }
    }(); // jshint ignore:line

    avalon.directive("effect", {
        priority: 5,
        init: function init(binding) {
            var text = binding.expr,
                className,
                rightExpr;
            var colonIndex = text.replace(rexprg, function (a) {
                return a.replace(/./g, "0");
            }).indexOf(":"); //取得第一个冒号的位置
            if (colonIndex === -1) {
                // 比如 ms-class/effect="aaa bbb ccc" 的情况
                className = text;
                rightExpr = true;
            } else {
                // 比如 ms-class/effect-1="ui-state-active:checked" 的情况
                className = text.slice(0, colonIndex);
                rightExpr = text.slice(colonIndex + 1);
            }
            if (!rexpr.test(text)) {
                className = quote(className);
            } else {
                className = normalizeExpr(className);
            }
            binding.expr = "[" + className + "," + rightExpr + "]";
        },
        update: function update(arr) {
            var name = arr[0];
            var elem = this.element;
            if (elem.getAttribute("data-effect-name") === name) {
                return;
            } else {
                elem.removeAttribute("data-effect-driver");
            }
            var inlineStyles = elem.style;
            var computedStyles = window.getComputedStyle ? window.getComputedStyle(elem) : null;
            var useAni = false;
            if (computedStyles && (supportTransition || supportAnimation)) {

                //如果支持CSS动画
                var duration = inlineStyles[transitionDuration] || computedStyles[transitionDuration];
                if (duration && duration !== '0s') {
                    elem.setAttribute("data-effect-driver", "t");
                    useAni = true;
                }

                if (!useAni) {

                    duration = inlineStyles[animationDuration] || computedStyles[animationDuration];
                    if (duration && duration !== '0s') {
                        elem.setAttribute("data-effect-driver", "a");
                        useAni = true;
                    }
                }
            }

            if (!useAni) {
                if (avalon.effects[name]) {
                    elem.setAttribute("data-effect-driver", "j");
                    useAni = true;
                }
            }
            if (useAni) {
                elem.setAttribute("data-effect-name", name);
            }
        }
    });

    avalon.effects = {};
    avalon.effect = function (name, callbacks) {
        avalon.effects[name] = callbacks;
    };

    var supportTransition = false;
    var supportAnimation = false;

    var transitionEndEvent;
    var animationEndEvent;
    var transitionDuration = avalon.cssName("transition-duration");
    var animationDuration = avalon.cssName("animation-duration");
    new function () {
        // jshint ignore:line
        var checker = {
            'TransitionEvent': 'transitionend',
            'WebKitTransitionEvent': 'webkitTransitionEnd',
            'OTransitionEvent': 'oTransitionEnd',
            'otransitionEvent': 'otransitionEnd'
        };
        var tran;
        //有的浏览器同时支持私有实现与标准写法，比如webkit支持前两种，Opera支持1、3、4
        for (var name in checker) {
            if (window[name]) {
                tran = checker[name];
                break;
            }
            try {
                var a = document.createEvent(name);
                tran = checker[name];
                break;
            } catch (e) {}
        }
        if (typeof tran === "string") {
            supportTransition = true;
            transitionEndEvent = tran;
        }

        //大致上有两种选择
        //IE10+, Firefox 16+ & Opera 12.1+: animationend
        //Chrome/Safari: webkitAnimationEnd
        //http://blogs.msdn.com/b/davrous/archive/2011/12/06/introduction-to-css3-animat ions.aspx
        //IE10也可以使用MSAnimationEnd监听，但是回调里的事件 type依然为animationend
        //  el.addEventListener("MSAnimationEnd", function(e) {
        //     alert(e.type)// animationend！！！
        // })
        checker = {
            'AnimationEvent': 'animationend',
            'WebKitAnimationEvent': 'webkitAnimationEnd'
        };
        var ani;
        for (name in checker) {
            if (window[name]) {
                ani = checker[name];
                break;
            }
        }
        if (typeof ani === "string") {
            supportTransition = true;
            animationEndEvent = ani;
        }
    }();

    var effectPool = []; //重复利用动画实例
    function effectFactory(el, opts) {
        if (!el || el.nodeType !== 1) {
            return null;
        }
        if (opts) {
            var name = opts.effectName;
            var driver = opts.effectDriver;
        } else {
            name = el.getAttribute("data-effect-name");
            driver = el.getAttribute("data-effect-driver");
        }
        if (!name || !driver) {
            return null;
        }

        var instance = effectPool.pop() || new Effect();
        instance.el = el;
        instance.driver = driver;
        instance.useCss = driver !== "j";
        if (instance.useCss) {
            opts && avalon(el).addClass(opts.effectClass);
            instance.cssEvent = driver === "t" ? transitionEndEvent : animationEndEvent;
        }
        instance.name = name;
        instance.callbacks = avalon.effects[name] || {};

        return instance;
    }

    function effectBinding(elem, binding) {
        var name = elem.getAttribute("data-effect-name");
        if (name) {
            binding.effectName = name;
            binding.effectDriver = elem.getAttribute("data-effect-driver");
            var stagger = +elem.getAttribute("data-effect-stagger");
            binding.effectLeaveStagger = +elem.getAttribute("data-effect-leave-stagger") || stagger;
            binding.effectEnterStagger = +elem.getAttribute("data-effect-enter-stagger") || stagger;
            binding.effectClass = elem.className || NaN;
        }
    }
    function upperFirstChar(str) {
        return str.replace(/^[\S]/g, function (m) {
            return m.toUpperCase();
        });
    }
    var effectBuffer = new Buffer();
    function Effect() {} //动画实例,做成类的形式,是为了共用所有原型方法

    Effect.prototype = {
        contrustor: Effect,
        enterClass: function enterClass() {
            return getEffectClass(this, "enter");
        },
        leaveClass: function leaveClass() {
            return getEffectClass(this, "leave");
        },
        // 共享一个函数
        actionFun: function actionFun(name, before, after) {
            if (document.hidden) {
                return;
            }
            var me = this;
            var el = me.el;
            var isLeave = name === "leave";
            name = isLeave ? "leave" : "enter";
            var oppositeName = isLeave ? "enter" : "leave";
            callEffectHook(me, "abort" + upperFirstChar(oppositeName));
            callEffectHook(me, "before" + upperFirstChar(name));
            if (!isLeave) before(el); //这里可能做插入DOM树的操作,因此必须在修改类名前执行
            var cssCallback = function cssCallback(cancel) {
                el.removeEventListener(me.cssEvent, me.cssCallback);
                if (isLeave) {
                    before(el); //这里可能做移出DOM树操作,因此必须位于动画之后
                    avalon(el).removeClass(me.cssClass);
                } else {
                    if (me.driver === "a") {
                        avalon(el).removeClass(me.cssClass);
                    }
                }
                if (cancel !== true) {
                    callEffectHook(me, "after" + upperFirstChar(name));
                    after && after(el);
                }
                me.dispose();
            };
            if (me.useCss) {
                if (me.cssCallback) {
                    //如果leave动画还没有完成,立即完成
                    me.cssCallback(true);
                }

                me.cssClass = getEffectClass(me, name);
                me.cssCallback = cssCallback;

                me.update = function () {
                    el.addEventListener(me.cssEvent, me.cssCallback);
                    if (!isLeave && me.driver === "t") {
                        //transtion延迟触发
                        avalon(el).removeClass(me.cssClass);
                    }
                };
                avalon(el).addClass(me.cssClass); //animation会立即触发

                effectBuffer.render(true);
                effectBuffer.queue.push(me);
            } else {
                callEffectHook(me, name, cssCallback);
            }
        },
        enter: function enter(before, after) {
            this.actionFun.apply(this, ["enter"].concat(avalon.slice(arguments)));
        },
        leave: function leave(before, after) {
            this.actionFun.apply(this, ["leave"].concat(avalon.slice(arguments)));
        },
        dispose: function dispose() {
            //销毁与回收到池子中
            this.update = this.cssCallback = null;
            if (effectPool.unshift(this) > 100) {
                effectPool.pop();
            }
        }

    };

    function getEffectClass(instance, type) {
        var a = instance.callbacks[type + "Class"];
        if (typeof a === "string") return a;
        if (typeof a === "function") return a();
        return instance.name + "-" + type;
    }

    function callEffectHook(effect, name, cb) {
        var hook = effect.callbacks[name];
        if (hook) {
            hook.call(effect, effect.el, cb);
        }
    }

    var applyEffect = function applyEffect(el, dir /*[before, [after, [opts]]]*/) {
        var args = aslice.call(arguments, 0);
        if (typeof args[2] !== "function") {
            args.splice(2, 0, noop);
        }
        if (typeof args[3] !== "function") {
            args.splice(3, 0, noop);
        }
        var before = args[2];
        var after = args[3];
        var opts = args[4];
        var effect = effectFactory(el, opts);
        if (!effect) {
            before();
            after();
            return false;
        } else {
            var method = dir ? 'enter' : 'leave';
            effect[method](before, after);
        }
    };

    avalon.mix(avalon.effect, {
        apply: applyEffect,
        append: function append(el, parent, after, opts) {
            return applyEffect(el, 1, function () {
                parent.appendChild(el);
            }, after, opts);
        },
        before: function before(el, target, after, opts) {
            return applyEffect(el, 1, function () {
                target.parentNode.insertBefore(el, target);
            }, after, opts);
        },
        remove: function remove(el, parent, after, opts) {
            return applyEffect(el, 0, function () {
                if (el.parentNode === parent) parent.removeChild(el);
            }, after, opts);
        }
    });

    avalon.directive("html", {
        update: function update(val) {
            var binding = this;
            var elem = this.element;
            var isHtmlFilter = elem.nodeType !== 1;
            var parent = isHtmlFilter ? elem.parentNode : elem;
            if (!parent) return;
            val = val == null ? "" : val;

            if (elem.nodeType === 3) {
                var signature = generateID("html");
                parent.insertBefore(DOC.createComment(signature), elem);
                binding.element = DOC.createComment(signature + ":end");
                parent.replaceChild(binding.element, elem);
                elem = binding.element;
            }
            if ((typeof val === "undefined" ? "undefined" : (0, _typeof3.default)(val)) !== "object") {
                //string, number, boolean
                var fragment = avalon.parseHTML(String(val));
            } else if (val.nodeType === 11) {
                //将val转换为文档碎片
                fragment = val;
            } else if (val.nodeType === 1 || val.item) {
                var nodes = val.nodeType === 1 ? val.childNodes : val.item;
                fragment = avalonFragment.cloneNode(true);
                while (nodes[0]) {
                    fragment.appendChild(nodes[0]);
                }
            }

            nodes = avalon.slice(fragment.childNodes);
            //插入占位符, 如果是过滤器,需要有节制地移除指定的数量,如果是html指令,直接清空
            if (isHtmlFilter) {
                var endValue = elem.nodeValue.slice(0, -4);
                while (true) {
                    var node = elem.previousSibling;
                    if (!node || node.nodeType === 8 && node.nodeValue === endValue) {
                        break;
                    } else {
                        parent.removeChild(node);
                    }
                }
                parent.insertBefore(fragment, elem);
            } else {
                avalon.clearHTML(elem).appendChild(fragment);
            }
            scanNodeArray(nodes, binding.vmodels);
        }
    });

    avalon.directive("if", {
        priority: 10,
        update: function update(val) {
            var binding = this;
            var elem = this.element;
            var stamp = binding.stamp = +new Date();
            var par;
            var after = function after() {
                if (stamp !== binding.stamp) return;
                binding.recoverNode = null;
            };
            if (binding.recoverNode) binding.recoverNode(); // 还原现场，有移动节点的都需要还原现场
            try {
                if (!elem.parentNode) return;
                par = elem.parentNode;
            } catch (e) {
                return;
            }
            if (val) {
                var keep;
                var hasEffect;

                (function () {
                    //插回DOM树
                    var alway = function alway() {
                        // jshint ignore:line
                        if (elem.getAttribute(binding.name)) {
                            elem.removeAttribute(binding.name);
                            scanAttr(elem, binding.vmodels);
                        }
                        binding.rollback = null;
                    };

                    if (elem.nodeType === 8) {
                        keep = binding.keep;
                        hasEffect = avalon.effect.apply(keep, 1, function () {
                            if (stamp !== binding.stamp) return;
                            elem.parentNode.replaceChild(keep, elem);
                            elem = binding.element = keep; //这时可能为null
                            if (keep.getAttribute("_required")) {
                                //#1044
                                elem.required = true;
                                elem.removeAttribute("_required");
                            }
                            if (elem.querySelectorAll) {
                                avalon.each(elem.querySelectorAll("[_required=true]"), function (el) {
                                    el.required = true;
                                    el.removeAttribute("_required");
                                });
                            }
                            alway();
                        }, after);

                        hasEffect = hasEffect === false;
                    }
                    if (!hasEffect) alway();
                })();
            } else {
                //移出DOM树，并用注释节点占据原位置
                if (elem.nodeType === 1) {
                    if (elem.required === true) {
                        elem.required = false;
                        elem.setAttribute("_required", "true");
                    }
                    try {
                        //如果不支持querySelectorAll或:required,可以直接无视
                        avalon.each(elem.querySelectorAll(":required"), function (el) {
                            elem.required = false;
                            el.setAttribute("_required", "true");
                        });
                    } catch (e) {}

                    var node = binding.element = DOC.createComment("ms-if"),
                        pos = elem.nextSibling;
                    binding.recoverNode = function () {
                        binding.recoverNode = null;
                        if (node.parentNode !== par) {
                            par.insertBefore(node, pos);
                            binding.keep = elem;
                        }
                    };

                    avalon.effect.apply(elem, 0, function () {
                        binding.recoverNode = null;
                        if (stamp !== binding.stamp) return;
                        elem.parentNode.replaceChild(node, elem);
                        binding.keep = elem; //元素节点
                        ifGroup.appendChild(elem);
                        binding.rollback = function () {
                            if (elem.parentNode === ifGroup) {
                                ifGroup.removeChild(elem);
                            }
                        };
                    }, after);
                }
            }
        }
    });

    //ms-important绑定已经在scanTag 方法中实现
    var rnoscripts = /<noscript.*?>(?:[\s\S]+?)<\/noscript>/img;
    var rnoscriptText = /<noscript.*?>([\s\S]+?)<\/noscript>/im;

    var getXHR = function getXHR() {
        return new window.XMLHttpRequest(); // jshint ignore:line
    };
    //将所有远程加载的模板,以字符串形式存放到这里
    var templatePool = avalon.templateCache = {};

    function getTemplateContainer(binding, id, text) {
        var div = binding.templateCache && binding.templateCache[id];
        if (div) {
            var dom = DOC.createDocumentFragment(),
                firstChild;
            while (firstChild = div.firstChild) {
                dom.appendChild(firstChild);
            }
            return dom;
        }
        return avalon.parseHTML(text);
    }
    function nodesToFrag(nodes) {
        var frag = DOC.createDocumentFragment();
        for (var i = 0, len = nodes.length; i < len; i++) {
            frag.appendChild(nodes[i]);
        }
        return frag;
    }
    avalon.directive("include", {
        init: directives.attr.init,
        update: function update(val) {
            var binding = this;
            var elem = this.element;
            var vmodels = binding.vmodels;
            var rendered = binding.includeRendered;
            var effectClass = binding.effectName && binding.effectClass; // 是否开启动画
            var templateCache = binding.templateCache; // 是否data-include-cache
            var outer = binding.includeReplace; // 是否data-include-replace
            var loaded = binding.includeLoaded;
            var target = outer ? elem.parentNode : elem;
            var _ele = binding._element; // data-include-replace binding.element === binding.end

            binding.recoverNodes = binding.recoverNodes || avalon.noop;

            var scanTemplate = function scanTemplate(text) {
                var _stamp = binding._stamp = +new Date(); // 过滤掉频繁操作
                if (loaded) {
                    var newText = loaded.apply(target, [text].concat(vmodels));
                    if (typeof newText === "string") text = newText;
                }
                if (rendered) {
                    checkScan(target, function () {
                        rendered.call(target);
                    }, NaN);
                }
                var lastID = binding.includeLastID || "_default"; // 默认

                binding.includeLastID = val;
                var leaveEl = templateCache && templateCache[lastID] || DOC.createElement(elem.tagName || binding._element.tagName); // 创建一个离场元素

                if (effectClass) {
                    leaveEl.className = effectClass;
                    target.insertBefore(leaveEl, binding.start); // 插入到start之前，防止被错误的移动
                }

                // cache or animate，移动节点
                (templateCache || {})[lastID] = leaveEl;
                var fragOnDom = binding.recoverNodes(); // 恢复动画中的节点
                if (fragOnDom) {
                    target.insertBefore(fragOnDom, binding.end);
                }
                while (true) {
                    var node = binding.start.nextSibling;
                    if (node && node !== leaveEl && node !== binding.end) {
                        leaveEl.appendChild(node);
                    } else {
                        break;
                    }
                }

                // 元素退场
                avalon.effect.remove(leaveEl, target, function () {
                    if (templateCache) {
                        // write cache
                        if (_stamp === binding._stamp) ifGroup.appendChild(leaveEl);
                    }
                }, binding);

                var enterEl = target,
                    before = avalon.noop,
                    after = avalon.noop;

                var fragment = getTemplateContainer(binding, val, text);
                var nodes = avalon.slice(fragment.childNodes);

                if (outer && effectClass) {
                    enterEl = _ele;
                    enterEl.innerHTML = ""; // 清空
                    enterEl.setAttribute("ms-skip", "true");
                    target.insertBefore(enterEl, binding.end.nextSibling); // 插入到bingding.end之后避免被错误的移动
                    before = function before() {
                        enterEl.insertBefore(fragment, null); // 插入节点
                    };
                    after = function after() {
                        binding.recoverNodes = avalon.noop;
                        if (_stamp === binding._stamp) {
                            fragment = nodesToFrag(nodes);
                            target.insertBefore(fragment, binding.end); // 插入真实element
                            scanNodeArray(nodes, vmodels);
                        }
                        if (enterEl.parentNode === target) target.removeChild(enterEl); // 移除入场动画元素
                    };
                    binding.recoverNodes = function () {
                        binding.recoverNodes = avalon.noop;
                        return nodesToFrag(nodes);
                    };
                } else {
                    before = function before() {
                        //新添加元素的动画
                        target.insertBefore(fragment, binding.end);
                        scanNodeArray(nodes, vmodels);
                    };
                }

                avalon.effect.apply(enterEl, "enter", before, after);
            };

            if (binding.param === "src") {
                if (typeof templatePool[val] === "string") {
                    avalon.nextTick(function () {
                        scanTemplate(templatePool[val]);
                    });
                } else if (Array.isArray(templatePool[val])) {
                    //#805 防止在循环绑定中发出许多相同的请求
                    templatePool[val].push(scanTemplate);
                } else {
                    var xhr = getXHR();
                    xhr.onload = function () {
                        var text = xhr.responseText;
                        for (var f = 0, fn; fn = templatePool[val][f++];) {
                            fn(text);
                        }
                        templatePool[val] = text;
                    };
                    xhr.onerror = function () {
                        log("ms-include load [" + val + "] error");
                    };
                    templatePool[val] = [scanTemplate];
                    xhr.open("GET", val, true);
                    if ("withCredentials" in xhr) {
                        xhr.withCredentials = true;
                    }
                    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
                    xhr.send(null);
                }
            } else {
                //IE系列与够新的标准浏览器支持通过ID取得元素（firefox14+）
                //http://tjvantoll.com/2012/07/19/dom-element-references-as-global-variables/
                var el = val && val.nodeType === 1 ? val : DOC.getElementById(val);
                if (el) {
                    avalon.nextTick(function () {
                        scanTemplate(el.value || el.innerText || el.innerHTML);
                    });
                }
            }
        }
    });

    var rdash = /\(([^)]*)\)/;
    var onDir = avalon.directive("on", {
        priority: 3000,
        init: function init(binding) {
            var value = binding.expr;
            binding.type = "on";
            var eventType = binding.param.replace(/-\d+$/, ""); // ms-on-mousemove-10
            if (typeof onDir[eventType + "Hook"] === "function") {
                onDir[eventType + "Hook"](binding);
            }
            if (value.indexOf("(") > 0 && value.indexOf(")") > -1) {
                var matched = (value.match(rdash) || ["", ""])[1].trim();
                if (matched === "" || matched === "$event") {
                    // aaa() aaa($event)当成aaa处理
                    value = value.replace(rdash, "");
                }
            }
            binding.expr = value;
        },
        update: function update(callback) {
            var binding = this;
            var elem = this.element;
            callback = function callback(e) {
                var fn = binding.getter || noop;
                return fn.apply(this, binding.args.concat(e));
            };

            var eventType = binding.param.replace(/-\d+$/, ""); // ms-on-mousemove-10
            if (eventType === "scan") {
                callback.call(elem, {
                    type: eventType
                });
            } else if (typeof binding.specialBind === "function") {
                binding.specialBind(elem, callback);
            } else {
                var removeFn = avalon.bind(elem, eventType, callback);
            }
            binding.rollback = function () {
                if (typeof binding.specialUnbind === "function") {
                    binding.specialUnbind();
                } else {
                    avalon.unbind(elem, eventType, removeFn);
                }
            };
        }
    });
    avalon.directive("repeat", {
        priority: 90,
        init: function init(binding) {
            var type = binding.type;
            binding.cache = {}; //用于存放代理VM
            binding.enterCount = 0;

            var elem = binding.element;
            if (elem.nodeType === 1) {
                elem.removeAttribute(binding.name);
                effectBinding(elem, binding);
                binding.param = binding.param || "el";
                binding.sortedCallback = getBindingCallback(elem, "data-with-sorted", binding.vmodels);
                var rendered = getBindingCallback(elem, "data-" + type + "-rendered", binding.vmodels);

                var signature = generateID(type);
                var start = DOC.createComment(signature + ":start");
                var end = binding.element = DOC.createComment(signature + ":end");
                binding.signature = signature;
                binding.start = start;
                binding.template = avalonFragment.cloneNode(false);
                if (type === "repeat") {
                    var parent = elem.parentNode;
                    parent.replaceChild(end, elem);
                    parent.insertBefore(start, end);
                    binding.template.appendChild(elem);
                } else {
                    while (elem.firstChild) {
                        binding.template.appendChild(elem.firstChild);
                    }
                    elem.appendChild(start);
                    elem.appendChild(end);
                    parent = elem;
                }
                binding.element = end;

                if (rendered) {
                    var removeFn = avalon.bind(parent, "datasetchanged", function () {
                        rendered.apply(parent, parent.args);
                        avalon.unbind(parent, "datasetchanged", removeFn);
                        parent.msRendered = rendered;
                    });
                }
            }
        },
        update: function update(value, oldValue) {
            var binding = this;
            var xtype = this.xtype;

            this.enterCount += 1;
            var init = !oldValue;
            if (init) {
                binding.$outer = {};
                var check0 = "$key";
                var check1 = "$val";
                if (xtype === "array") {
                    check0 = "$first";
                    check1 = "$last";
                }
                for (var i = 0, v; v = binding.vmodels[i++];) {
                    if (v.hasOwnProperty(check0) && v.hasOwnProperty(check1)) {
                        binding.$outer = v;
                        break;
                    }
                }
            }
            var track = this.track;
            if (binding.sortedCallback) {
                //如果有回调，则让它们排序
                var keys2 = binding.sortedCallback.call(parent, track);
                if (keys2 && Array.isArray(keys2)) {
                    track = keys2;
                }
            }

            var action = "move";
            binding.$repeat = value;
            var fragments = [];
            var transation = init && avalonFragment.cloneNode(false);
            var proxies = [];
            var param = this.param;
            var retain = avalon.mix({}, this.cache);
            var elem = this.element;
            var length = track.length;

            var parent = elem.parentNode;
            for (i = 0; i < length; i++) {

                var keyOrId = track[i]; //array为随机数, object 为keyName
                var proxy = retain[keyOrId];
                if (!proxy) {

                    proxy = getProxyVM(this);
                    proxy.$up = null;
                    if (xtype === "array") {
                        action = "add";
                        proxy.$id = keyOrId;
                        var valueItem = value[i];
                        proxy[param] = valueItem; //index
                        if (Object(valueItem) === valueItem) {
                            valueItem.$ups = valueItem.$ups || {};
                            valueItem.$ups[param] = proxy;
                        }
                    } else {
                        action = "append";
                        proxy.$key = keyOrId;
                        proxy.$val = value[keyOrId]; //key
                    }
                    this.cache[keyOrId] = proxy;
                    var node = proxy.$anchor || (proxy.$anchor = elem.cloneNode(false));
                    node.nodeValue = this.signature;
                    shimController(binding, transation, proxy, fragments, init && !binding.effectDriver);
                    decorateProxy(proxy, binding, xtype);
                } else {
                    //                if (xtype === "array") {
                    //                    proxy[param] = value[i]
                    //                }
                    fragments.push({});
                    retain[keyOrId] = true;
                }

                //重写proxy
                if (this.enterCount === 1) {
                    //防止多次进入,导致位置不对
                    proxy.$active = false;
                    proxy.$oldIndex = proxy.$index;
                    proxy.$active = true;
                    proxy.$index = i;
                }

                if (xtype === "array") {
                    proxy.$first = i === 0;
                    proxy.$last = i === length - 1;
                    // proxy[param] = value[i]
                } else {
                    proxy.$val = toJson(value[keyOrId]); //这里是处理vm.object = newObject的情况 
                }
                proxies.push(proxy);
            }
            this.proxies = proxies;
            if (init && !binding.effectDriver) {
                parent.insertBefore(transation, elem);
                fragments.forEach(function (fragment) {
                    scanNodeArray(fragment.nodes || [], fragment.vmodels);
                    //if(fragment.vmodels.length > 2)
                    fragment.nodes = fragment.vmodels = null;
                }); // jshint ignore:line
            } else {

                var staggerIndex = binding.staggerIndex = 0;
                for (keyOrId in retain) {
                    if (retain[keyOrId] !== true) {

                        action = "del";
                        removeItem(retain[keyOrId].$anchor, binding);
                        // avalon.log("删除", keyOrId)
                        // 相当于delete binding.cache[key]
                        proxyRecycler(this.cache, keyOrId, param);
                        retain[keyOrId] = null;
                    }
                }

                //  console.log(effectEnterStagger)
                for (i = 0; i < length; i++) {
                    proxy = proxies[i];
                    keyOrId = xtype === "array" ? proxy.$id : proxy.$key;
                    var pre = proxies[i - 1];
                    var preEl = pre ? pre.$anchor : binding.start;
                    if (!retain[keyOrId]) {
                        //如果还没有插入到DOM树
                        (function (fragment, preElement) {
                            var nodes = fragment.nodes;
                            var vmodels = fragment.vmodels;
                            if (nodes) {
                                staggerIndex = mayStaggerAnimate(binding.effectEnterStagger, function () {
                                    parent.insertBefore(fragment.content, preElement.nextSibling);
                                    scanNodeArray(nodes, vmodels);
                                    animateRepeat(nodes, 1, binding);
                                }, staggerIndex);
                            }
                            fragment.nodes = fragment.vmodels = null;
                        })(fragments[i], preEl); // jshint ignore:line
                        // avalon.log("插入")
                    } else if (proxy.$index !== proxy.$oldIndex) {
                        (function (proxy2, preElement) {
                            staggerIndex = mayStaggerAnimate(binding.effectEnterStagger, function () {
                                var curNode = removeItem(proxy2.$anchor); //如果位置被挪动了
                                var inserted = avalon.slice(curNode.childNodes);
                                parent.insertBefore(curNode, preElement.nextSibling);
                                animateRepeat(inserted, 1, binding);
                            }, staggerIndex);
                        })(proxy, preEl); // jshint ignore:line

                        // avalon.log("移动", proxy.$oldIndex, "-->", proxy.$index)
                    }
                }
            }
            if (!value.$track) {
                //如果是非监控对象,那么就将其$events清空,阻止其持续监听
                for (keyOrId in this.cache) {
                    proxyRecycler(this.cache, keyOrId, param);
                }
            }

            //repeat --> duplex
            (function (args) {
                parent.args = args;
                if (parent.msRendered) {
                    //第一次事件触发,以后直接调用
                    parent.msRendered.apply(parent, args);
                }
            })(kernel.newWatch ? arguments : [action]);
            var id = setTimeout(function () {
                clearTimeout(id);
                //触发上层的select回调及自己的rendered回调
                avalon.fireDom(parent, "datasetchanged", {
                    bubble: parent.msHasEvent
                });
            });
            this.enterCount -= 1;
        }

    });

    "with,each".replace(rword, function (name) {
        directives[name] = avalon.mix({}, directives.repeat, {
            priority: 1400
        });
    });

    function animateRepeat(nodes, isEnter, binding) {
        for (var i = 0, node; node = nodes[i++];) {
            if (node.className === binding.effectClass) {
                avalon.effect.apply(node, isEnter, noop, noop, binding);
            }
        }
    }

    function mayStaggerAnimate(staggerTime, callback, index) {
        if (staggerTime) {
            setTimeout(callback, ++index * staggerTime);
        } else {
            callback();
        }
        return index;
    }

    function removeItem(node, binding) {
        var fragment = avalonFragment.cloneNode(false);
        var last = node;
        var breakText = last.nodeValue;
        var staggerIndex = binding && Math.max(+binding.staggerIndex, 0);
        var nodes = avalon.slice(last.parentNode.childNodes);
        var index = nodes.indexOf(last);
        while (true) {
            var pre = nodes[--index]; //node.previousSibling
            if (!pre || String(pre.nodeValue).indexOf(breakText) === 0) {
                break;
            }
            if (binding && pre.className === binding.effectClass) {
                node = pre;
                (function (cur) {
                    binding.staggerIndex = mayStaggerAnimate(binding.effectLeaveStagger, function () {
                        avalon.effect.apply(cur, 0, noop, function () {
                            fragment.appendChild(cur);
                        }, binding);
                    }, staggerIndex);
                })(pre); // jshint ignore:line
            } else {
                fragment.insertBefore(pre, fragment.firstChild);
            }
        }
        fragment.appendChild(last);
        return fragment;
    }

    function shimController(data, transation, proxy, fragments, init) {
        var content = data.template.cloneNode(true);
        var nodes = avalon.slice(content.childNodes);
        content.appendChild(proxy.$anchor);
        init && transation.appendChild(content);
        var itemName = data.param || "el";
        var valueItem = proxy[itemName],
            nv;
        if (Object(valueItem) === valueItem) {
            nv = [proxy, valueItem].concat(data.vmodels);
        } else {
            nv = [proxy].concat(data.vmodels);
        }
        var fragment = {
            nodes: nodes,
            vmodels: nv,
            content: content
        };
        fragments.push(fragment);
    }
    // {}  -->  {xx: 0, yy: 1, zz: 2} add
    // {xx: 0, yy: 1, zz: 2}  -->  {xx: 0, yy: 1, zz: 2, uu: 3}
    // [xx: 0, yy: 1, zz: 2}  -->  {xx: 0, zz: 1, yy: 2}

    function getProxyVM(binding) {
        var agent = binding.xtype === "object" ? withProxyAgent : eachProxyAgent;
        var proxy = agent(binding);
        var node = proxy.$anchor || (proxy.$anchor = binding.element.cloneNode(false));
        node.nodeValue = binding.signature;
        proxy.$outer = binding.$outer;
        return proxy;
    }

    function decorateProxy(proxy, binding, type) {
        if (type === "array") {
            proxy.$remove = function () {
                binding.$repeat.removeAt(proxy.$index);
            };
            var param = binding.param;
            proxy.$watch(param, function (a) {
                var index = proxy.$index;
                binding.$repeat[index] = a;
            });
        } else {
            proxy.$watch("$val", function fn(a) {
                binding.$repeat[proxy.$key] = a;
            });
        }
    }

    var eachProxyPool = [];

    function eachProxyAgent(data, proxy) {
        var itemName = data.param || "el";
        for (var i = 0, n = eachProxyPool.length; i < n; i++) {
            var candidate = eachProxyPool[i];
            if (candidate && candidate.hasOwnProperty(itemName)) {
                eachProxyPool.splice(i, 1);
                proxy = candidate;
                break;
            }
        }
        if (!proxy) {
            proxy = eachProxyFactory(itemName);
        }
        return proxy;
    }

    function eachProxyFactory(itemName) {
        var source = {
            $outer: {},
            $index: 0,
            $oldIndex: 0,
            $anchor: null,
            //-----
            $first: false,
            $last: false,
            $remove: avalon.noop
        };
        source[itemName] = NaN;
        var force = {
            $last: 1,
            $first: 1,
            $index: 1
        };
        force[itemName] = 1;
        var proxy = modelFactory(source, {
            force: force
        });
        proxy.$id = generateID("$proxy$each");
        return proxy;
    }

    var withProxyPool = [];

    function withProxyAgent() {
        return withProxyPool.pop() || withProxyFactory();
    }

    function withProxyFactory() {
        var proxy = modelFactory({
            $key: "",
            $val: NaN,
            $index: 0,
            $oldIndex: 0,
            $outer: {},
            $anchor: null
        }, {
            force: {
                $key: 1,
                $val: 1,
                $index: 1
            }
        });
        proxy.$id = generateID("$proxy$with");
        return proxy;
    }

    function proxyRecycler(cache, key, param) {
        var proxy = cache[key];
        if (proxy) {
            var proxyPool = proxy.$id.indexOf("$proxy$each") === 0 ? eachProxyPool : withProxyPool;
            proxy.$outer = {};

            for (var i in proxy.$events) {
                var a = proxy.$events[i];
                if (Array.isArray(a)) {
                    a.length = 0;
                    if (i === param) {
                        proxy[param] = NaN;
                    } else if (i === "$val") {
                        proxy.$val = NaN;
                    }
                }
            }

            if (proxyPool.unshift(proxy) > kernel.maxRepeatSize) {
                proxyPool.pop();
            }
            delete cache[key];
        }
    }

    /*********************************************************************
     *                         各种指令                                  *
     **********************************************************************/

    //ms-skip绑定已经在scanTag 方法中实现
    avalon.directive("text", {
        update: function update(val) {
            var elem = this.element;
            val = val == null ? "" : val; //不在页面上显示undefined null
            if (elem.nodeType === 3) {
                //绑定在文本节点上
                try {
                    //IE对游离于DOM树外的节点赋值会报错
                    elem.data = val;
                } catch (e) {}
            } else {
                //绑定在特性节点上
                elem.textContent = val;
            }
        }
    });
    function parseDisplay(nodeName, val) {
        //用于取得此类标签的默认display值
        var key = "_" + nodeName;
        if (!parseDisplay[key]) {
            var node = DOC.createElement(nodeName);
            root.appendChild(node);
            if (W3C) {
                val = getComputedStyle(node, null).display;
            } else {
                val = node.currentStyle.display;
            }
            root.removeChild(node);
            parseDisplay[key] = val;
        }
        return parseDisplay[key];
    }

    avalon.parseDisplay = parseDisplay;

    avalon.directive("visible", {
        init: function init(binding) {
            effectBinding(binding.element, binding);
        },
        update: function update(val) {
            var binding = this,
                elem = this.element,
                stamp;
            var noEffect = !this.effectName;
            if (!this.stamp) {
                stamp = this.stamp = +new Date();
                if (val) {
                    elem.style.display = binding.display || "";
                    if (avalon(elem).css("display") === "none") {
                        elem.style.display = binding.display = parseDisplay(elem.nodeName);
                    }
                } else {
                    elem.style.display = "none";
                }
                return;
            }
            stamp = this.stamp = +new Date();
            if (val) {
                avalon.effect.apply(elem, 1, function () {
                    if (stamp !== binding.stamp) return;
                    var driver = elem.getAttribute("data-effect-driver") || "a";

                    if (noEffect) {
                        //不用动画时走这里
                        elem.style.display = binding.display || "";
                    }
                    // "a", "t"
                    if (driver === "a" || driver === "t") {
                        if (avalon(elem).css("display") === "none") {
                            elem.style.display = binding.display || parseDisplay(elem.nodeName);
                        }
                    }
                });
            } else {
                avalon.effect.apply(elem, 0, function () {
                    if (stamp !== binding.stamp) return;
                    elem.style.display = "none";
                });
            }
        }
    });

    /*********************************************************************
     *                             自带过滤器                             *
     **********************************************************************/

    var rscripts = /<script[^>]*>([\S\s]*?)<\/script\s*>/gim;
    var ron = /\s+(on[^=\s]+)(?:=("[^"]*"|'[^']*'|[^\s>]+))?/g;
    var ropen = /<\w+\b(?:(["'])[^"]*?(\1)|[^>])*>/ig;
    var rsanitize = {
        a: /\b(href)\=("javascript[^"]*"|'javascript[^']*')/ig,
        img: /\b(src)\=("javascript[^"]*"|'javascript[^']*')/ig,
        form: /\b(action)\=("javascript[^"]*"|'javascript[^']*')/ig
    };
    var rsurrogate = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
    var rnoalphanumeric = /([^\#-~| |!])/g;

    function numberFormat(number, decimals, point, thousands) {
        //form http://phpjs.org/functions/number_format/
        //number 必需，要格式化的数字
        //decimals 可选，规定多少个小数位。
        //point 可选，规定用作小数点的字符串（默认为 . ）。
        //thousands 可选，规定用作千位分隔符的字符串（默认为 , ），如果设置了该参数，那么所有其他参数都是必需的。
        number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
        var n = !isFinite(+number) ? 0 : +number,
            prec = !isFinite(+decimals) ? 3 : Math.abs(decimals),
            sep = thousands || ",",
            dec = point || ".",
            s = '',
            toFixedFix = function toFixedFix(n, prec) {
            var k = Math.pow(10, prec);
            return '' + (Math.round(n * k) / k).toFixed(prec);
        };
        // Fix for IE parseFloat(0.55).toFixed(0) = 0;
        s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
        if (s[0].length > 3) {
            s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
        }
        if ((s[1] || '').length < prec) {
            s[1] = s[1] || '';
            s[1] += new Array(prec - s[1].length + 1).join('0');
        }
        return s.join(dec);
    }

    var filters = avalon.filters = {
        uppercase: function uppercase(str) {
            return str.toUpperCase();
        },
        lowercase: function lowercase(str) {
            return str.toLowerCase();
        },
        truncate: function truncate(str, length, truncation) {
            //length，新字符串长度，truncation，新字符串的结尾的字段,返回新字符串
            length = length || 30;
            truncation = typeof truncation === "string" ? truncation : "...";
            return str.length > length ? str.slice(0, length - truncation.length) + truncation : String(str);
        },
        $filter: function $filter(val) {
            for (var i = 1, n = arguments.length; i < n; i++) {
                var array = arguments[i];
                var fn = avalon.filters[array[0]];
                if (typeof fn === "function") {
                    var arr = [val].concat(array.slice(1));
                    val = fn.apply(null, arr);
                }
            }
            return val;
        },
        camelize: camelize,
        //https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
        //    <a href="javasc&NewLine;ript&colon;alert('XSS')">chrome</a> 
        //    <a href="data:text/html;base64, PGltZyBzcmM9eCBvbmVycm9yPWFsZXJ0KDEpPg==">chrome</a>
        //    <a href="jav	ascript:alert('XSS');">IE67chrome</a>
        //    <a href="jav&#x09;ascript:alert('XSS');">IE67chrome</a>
        //    <a href="jav&#x0A;ascript:alert('XSS');">IE67chrome</a>
        sanitize: function sanitize(str) {
            return str.replace(rscripts, "").replace(ropen, function (a, b) {
                var match = a.toLowerCase().match(/<(\w+)\s/);
                if (match) {
                    //处理a标签的href属性，img标签的src属性，form标签的action属性
                    var reg = rsanitize[match[1]];
                    if (reg) {
                        a = a.replace(reg, function (s, name, value) {
                            var quote = value.charAt(0);
                            return name + "=" + quote + "javascript:void(0)" + quote; // jshint ignore:line
                        });
                    }
                }
                return a.replace(ron, " ").replace(/\s+/g, " "); //移除onXXX事件
            });
        },
        escape: function escape(str) {
            //将字符串经过 str 转义得到适合在页面中显示的内容, 例如替换 < 为 &lt 
            return String(str).replace(/&/g, '&amp;').replace(rsurrogate, function (value) {
                var hi = value.charCodeAt(0);
                var low = value.charCodeAt(1);
                return '&#' + ((hi - 0xD800) * 0x400 + (low - 0xDC00) + 0x10000) + ';';
            }).replace(rnoalphanumeric, function (value) {
                return '&#' + value.charCodeAt(0) + ';';
            }).replace(/</g, '&lt;').replace(/>/g, '&gt;');
        },
        currency: function currency(amount, symbol, fractionSize) {
            return (symbol || "\uFFE5") + numberFormat(amount, isFinite(fractionSize) ? fractionSize : 2);
        },
        number: numberFormat
    };

    /*
     'yyyy': 4 digit representation of year (e.g. AD 1 => 0001, AD 2010 => 2010)
     'yy': 2 digit representation of year, padded (00-99). (e.g. AD 2001 => 01, AD 2010 => 10)
     'y': 1 digit representation of year, e.g. (AD 1 => 1, AD 199 => 199)
     'MMMM': Month in year (January-December)
     'MMM': Month in year (Jan-Dec)
     'MM': Month in year, padded (01-12)
     'M': Month in year (1-12)
     'dd': Day in month, padded (01-31)
     'd': Day in month (1-31)
     'EEEE': Day in Week,(Sunday-Saturday)
     'EEE': Day in Week, (Sun-Sat)
     'HH': Hour in day, padded (00-23)
     'H': Hour in day (0-23)
     'hh': Hour in am/pm, padded (01-12)
     'h': Hour in am/pm, (1-12)
     'mm': Minute in hour, padded (00-59)
     'm': Minute in hour (0-59)
     'ss': Second in minute, padded (00-59)
     's': Second in minute (0-59)
     'a': am/pm marker
     'Z': 4 digit (+sign) representation of the timezone offset (-1200-+1200)
     format string can also be one of the following predefined localizable formats:
     
     'medium': equivalent to 'MMM d, y h:mm:ss a' for en_US locale (e.g. Sep 3, 2010 12:05:08 pm)
     'short': equivalent to 'M/d/yy h:mm a' for en_US locale (e.g. 9/3/10 12:05 pm)
     'fullDate': equivalent to 'EEEE, MMMM d,y' for en_US locale (e.g. Friday, September 3, 2010)
     'longDate': equivalent to 'MMMM d, y' for en_US locale (e.g. September 3, 2010
     'mediumDate': equivalent to 'MMM d, y' for en_US locale (e.g. Sep 3, 2010)
     'shortDate': equivalent to 'M/d/yy' for en_US locale (e.g. 9/3/10)
     'mediumTime': equivalent to 'h:mm:ss a' for en_US locale (e.g. 12:05:08 pm)
     'shortTime': equivalent to 'h:mm a' for en_US locale (e.g. 12:05 pm)
     */
    new function () {
        // jshint ignore:line
        function toInt(str) {
            return parseInt(str, 10) || 0;
        }

        function padNumber(num, digits, trim) {
            var neg = "";
            if (num < 0) {
                neg = '-';
                num = -num;
            }
            num = "" + num;
            while (num.length < digits) {
                num = "0" + num;
            }if (trim) num = num.substr(num.length - digits);
            return neg + num;
        }

        function dateGetter(name, size, offset, trim) {
            return function (date) {
                var value = date["get" + name]();
                if (offset > 0 || value > -offset) value += offset;
                if (value === 0 && offset === -12) {
                    value = 12;
                }
                return padNumber(value, size, trim);
            };
        }

        function dateStrGetter(name, shortForm) {
            return function (date, formats) {
                var value = date["get" + name]();
                var get = (shortForm ? "SHORT" + name : name).toUpperCase();
                return formats[get][value];
            };
        }

        function timeZoneGetter(date) {
            var zone = -1 * date.getTimezoneOffset();
            var paddedZone = zone >= 0 ? "+" : "";
            paddedZone += padNumber(Math[zone > 0 ? "floor" : "ceil"](zone / 60), 2) + padNumber(Math.abs(zone % 60), 2);
            return paddedZone;
        }
        //取得上午下午

        function ampmGetter(date, formats) {
            return date.getHours() < 12 ? formats.AMPMS[0] : formats.AMPMS[1];
        }
        var DATE_FORMATS = {
            yyyy: dateGetter("FullYear", 4),
            yy: dateGetter("FullYear", 2, 0, true),
            y: dateGetter("FullYear", 1),
            MMMM: dateStrGetter("Month"),
            MMM: dateStrGetter("Month", true),
            MM: dateGetter("Month", 2, 1),
            M: dateGetter("Month", 1, 1),
            dd: dateGetter("Date", 2),
            d: dateGetter("Date", 1),
            HH: dateGetter("Hours", 2),
            H: dateGetter("Hours", 1),
            hh: dateGetter("Hours", 2, -12),
            h: dateGetter("Hours", 1, -12),
            mm: dateGetter("Minutes", 2),
            m: dateGetter("Minutes", 1),
            ss: dateGetter("Seconds", 2),
            s: dateGetter("Seconds", 1),
            sss: dateGetter("Milliseconds", 3),
            EEEE: dateStrGetter("Day"),
            EEE: dateStrGetter("Day", true),
            a: ampmGetter,
            Z: timeZoneGetter
        };
        var rdateFormat = /((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/;
        var raspnetjson = /^\/Date\((\d+)\)\/$/;
        filters.date = function (date, format) {
            var locate = filters.date.locate,
                text = "",
                parts = [],
                fn,
                match;
            format = format || "mediumDate";
            format = locate[format] || format;
            if (typeof date === "string") {
                if (/^\d+$/.test(date)) {
                    date = toInt(date);
                } else if (raspnetjson.test(date)) {
                    date = +RegExp.$1;
                } else {
                    var trimDate = date.trim();
                    var dateArray = [0, 0, 0, 0, 0, 0, 0];
                    var oDate = new Date(0);
                    //取得年月日
                    trimDate = trimDate.replace(/^(\d+)\D(\d+)\D(\d+)/, function (_, a, b, c) {
                        var array = c.length === 4 ? [c, a, b] : [a, b, c];
                        dateArray[0] = toInt(array[0]); //年
                        dateArray[1] = toInt(array[1]) - 1; //月
                        dateArray[2] = toInt(array[2]); //日
                        return "";
                    });
                    var dateSetter = oDate.setFullYear;
                    var timeSetter = oDate.setHours;
                    trimDate = trimDate.replace(/[T\s](\d+):(\d+):?(\d+)?\.?(\d)?/, function (_, a, b, c, d) {
                        dateArray[3] = toInt(a); //小时
                        dateArray[4] = toInt(b); //分钟
                        dateArray[5] = toInt(c); //秒
                        if (d) {
                            //毫秒
                            dateArray[6] = Math.round(parseFloat("0." + d) * 1000);
                        }
                        return "";
                    });
                    var tzHour = 0;
                    var tzMin = 0;
                    trimDate = trimDate.replace(/Z|([+-])(\d\d):?(\d\d)/, function (z, symbol, c, d) {
                        dateSetter = oDate.setUTCFullYear;
                        timeSetter = oDate.setUTCHours;
                        if (symbol) {
                            tzHour = toInt(symbol + c);
                            tzMin = toInt(symbol + d);
                        }
                        return "";
                    });

                    dateArray[3] -= tzHour;
                    dateArray[4] -= tzMin;
                    dateSetter.apply(oDate, dateArray.slice(0, 3));
                    timeSetter.apply(oDate, dateArray.slice(3));
                    date = oDate;
                }
            }
            if (typeof date === "number") {
                date = new Date(date);
            }
            if (avalon.type(date) !== "date") {
                return;
            }
            while (format) {
                match = rdateFormat.exec(format);
                if (match) {
                    parts = parts.concat(match.slice(1));
                    format = parts.pop();
                } else {
                    parts.push(format);
                    format = null;
                }
            }
            parts.forEach(function (value) {
                fn = DATE_FORMATS[value];
                text += fn ? fn(date, locate) : value.replace(/(^'|'$)/g, "").replace(/''/g, "'");
            });
            return text;
        };
        var locate = {
            AMPMS: {
                0: "上午",
                1: "下午"
            },
            DAY: {
                0: "星期日",
                1: "星期一",
                2: "星期二",
                3: "星期三",
                4: "星期四",
                5: "星期五",
                6: "星期六"
            },
            MONTH: {
                0: "1月",
                1: "2月",
                2: "3月",
                3: "4月",
                4: "5月",
                5: "6月",
                6: "7月",
                7: "8月",
                8: "9月",
                9: "10月",
                10: "11月",
                11: "12月"
            },
            SHORTDAY: {
                "0": "周日",
                "1": "周一",
                "2": "周二",
                "3": "周三",
                "4": "周四",
                "5": "周五",
                "6": "周六"
            },
            fullDate: "y年M月d日EEEE",
            longDate: "y年M月d日",
            medium: "yyyy-M-d H:mm:ss",
            mediumDate: "yyyy-M-d",
            mediumTime: "H:mm:ss",
            "short": "yy-M-d ah:mm",
            shortDate: "yy-M-d",
            shortTime: "ah:mm"
        };
        locate.SHORTMONTH = locate.MONTH;
        filters.date.locate = locate;
    }(); // jshint ignore:line

    /*********************************************************************
     *                    DOMReady                                       *
     **********************************************************************/

    var readyList = [],
        isReady;
    var fireReady = function fireReady(fn) {
        isReady = true;
        var require = avalon.require;
        if (require && require.checkDeps) {
            modules["domReady!"].state = 4;
            require.checkDeps();
        }
        while (fn = readyList.shift()) {
            fn(avalon);
        }
    };

    if (DOC.readyState === "complete") {
        setTimeout(fireReady); //如果在domReady之外加载
    } else {
        DOC.addEventListener("DOMContentLoaded", fireReady);
    }
    window.addEventListener("load", fireReady);
    avalon.ready = function (fn) {
        if (!isReady) {
            readyList.push(fn);
        } else {
            fn(avalon);
        }
    };

    avalon.config({
        loader: true
    });
    avalon.ready(function () {
        avalon.scan(DOC.body);
    });

    var ua = navigator.userAgent.toLowerCase();
    //http://stackoverflow.com/questions/9038625/detect-if-device-is-ios
    function iOSversion() {
        //https://developer.apple.com/library/prerelease/mac/releasenotes/General/WhatsNewInSafari/Articles/Safari_9.html
        //http://mp.weixin.qq.com/s?__biz=MzA3MDQ4MzQzMg==&mid=256900619&idx=1&sn=b29f84cff0b8d7b9742e5d8b3cd8f218&scene=1&srcid=1009F9l4gh9nZ7rcQJEhmf7Q#rd
        if (/iPad|iPhone|iPod/i.test(ua) && !window.MSStream) {
            if ("backdropFilter" in document.documentElement.style) {
                return 9;
            }
            if (!!window.indexedDB) {
                return 8;
            }
            if (!!window.SpeechSynthesisUtterance) {
                return 7;
            }
            if (!!window.webkitAudioContext) {
                return 6;
            }
            if (!!window.matchMedia) {
                return 5;
            }
            if (!!window.history && 'pushState' in window.history) {
                return 4;
            }
            return 3;
        }
        return NaN;
    }

    var deviceIsAndroid = ua.indexOf('android') > 0;
    var deviceIsIOS = iOSversion();

    var Recognizer = avalon.gestureHooks = {
        pointers: {},
        //以AOP切入touchstart, touchmove, touchend, touchcancel回调
        start: function start(event, callback) {

            //touches是当前屏幕上所有触摸点的列表;
            //targetTouches是当前对象上所有触摸点的列表;
            //changedTouches是涉及当前事件的触摸点的列表。
            for (var i = 0; i < event.changedTouches.length; i++) {
                var touch = event.changedTouches[i];
                var pointer = {
                    startTouch: mixLocations({}, touch),
                    startTime: Date.now(),
                    status: 'tapping',
                    element: event.target
                };
                Recognizer.pointers[touch.identifier] = pointer;
                callback(pointer, touch);
            }
        },
        move: function move(event, callback) {
            for (var i = 0; i < event.changedTouches.length; i++) {
                var touch = event.changedTouches[i];
                var pointer = Recognizer.pointers[touch.identifier];
                if (!pointer) {
                    return;
                }

                if (!("lastTouch" in pointer)) {
                    pointer.lastTouch = pointer.startTouch;
                    pointer.lastTime = pointer.startTime;
                    pointer.deltaX = pointer.deltaY = pointer.duration = pointer.distance = 0;
                }

                var time = Date.now() - pointer.lastTime;

                if (time > 0) {

                    var RECORD_DURATION = 70;
                    if (time > RECORD_DURATION) {
                        time = RECORD_DURATION;
                    }
                    if (pointer.duration + time > RECORD_DURATION) {
                        pointer.duration = RECORD_DURATION - time;
                    }

                    pointer.duration += time;
                    pointer.lastTouch = mixLocations({}, touch);

                    pointer.lastTime = Date.now();

                    pointer.deltaX = touch.clientX - pointer.startTouch.clientX;
                    pointer.deltaY = touch.clientY - pointer.startTouch.clientY;
                    var x = pointer.deltaX * pointer.deltaX;
                    var y = pointer.deltaY * pointer.deltaY;
                    pointer.distance = Math.sqrt(x + y);
                    pointer.isVertical = x < y;

                    callback(pointer, touch);
                }
            }
        },
        end: function end(event, callback) {
            for (var i = 0; i < event.changedTouches.length; i++) {
                var touch = event.changedTouches[i],
                    id = touch.identifier,
                    pointer = Recognizer.pointers[id];

                if (!pointer) continue;

                callback(pointer, touch);

                delete Recognizer.pointers[id];
            }
        },
        //人工触发合成事件
        fire: function fire(elem, type, props) {
            if (elem) {
                var event = document.createEvent('Events');
                event.initEvent(type, true, true);
                avalon.mix(event, props);
                elem.dispatchEvent(event);
            }
        },
        //添加各种识别器
        add: function add(name, recognizer) {
            function move(event) {
                recognizer.touchmove(event);
            }

            function end(event) {
                recognizer.touchend(event);

                document.removeEventListener('touchmove', move);

                document.removeEventListener('touchend', end);

                document.removeEventListener('touchcancel', cancel);
            }

            function cancel(event) {
                recognizer.touchcancel(event);

                document.removeEventListener('touchmove', move);

                document.removeEventListener('touchend', end);

                document.removeEventListener('touchcancel', cancel);
            }

            recognizer.events.forEach(function (eventName) {
                avalon.eventHooks[eventName] = {
                    fix: function fix(el, fn) {
                        if (!el['touch-' + name]) {
                            el['touch-' + name] = '1';
                            el.addEventListener('touchstart', function (event) {
                                recognizer.touchstart(event);

                                document.addEventListener('touchmove', move);

                                document.addEventListener('touchend', end);

                                document.addEventListener('touchcancel', cancel);
                            });
                        }
                        return fn;
                    }
                };
            });
        }
    };

    var locations = ['screenX', 'screenY', 'clientX', 'clientY', 'pageX', 'pageY'];

    // 复制 touch 对象上的有用属性到固定对象上
    function mixLocations(target, source) {
        if (source) {
            locations.forEach(function (key) {
                target[key] = source[key];
            });
        }
        return target;
    }

    var supportPointer = !!navigator.pointerEnabled || !!navigator.msPointerEnabled;

    if (supportPointer) {
        // 支持pointer的设备可用样式来取消click事件的300毫秒延迟
        root.style.msTouchAction = root.style.touchAction = 'none';
    }
    var tapRecognizer = {
        events: ['tap'],
        touchBoundary: 10,
        tapDelay: 200,
        needClick: function needClick(target) {
            //判定是否使用原生的点击事件, 否则使用sendClick方法手动触发一个人工的点击事件
            switch (target.nodeName.toLowerCase()) {
                case 'button':
                case 'select':
                case 'textarea':
                    if (target.disabled) {
                        return true;
                    }

                    break;
                case 'input':
                    // IOS6 pad 上选择文件，如果不是原生的click，弹出的选择界面尺寸错误
                    if (deviceIsIOS && target.type === 'file' || target.disabled) {
                        return true;
                    }

                    break;
                case 'label':
                case 'iframe':
                case 'video':
                    return true;
            }

            return false;
        },
        needFocus: function needFocus(target) {
            switch (target.nodeName.toLowerCase()) {
                case 'textarea':
                case 'select':
                    //实测android下select也需要
                    return true;
                case 'input':
                    switch (target.type) {
                        case 'button':
                        case 'checkbox':
                        case 'file':
                        case 'image':
                        case 'radio':
                        case 'submit':
                            return false;
                    }
                    //如果是只读或disabled状态,就无须获得焦点了
                    return !target.disabled && !target.readOnly;
                default:
                    return false;
            }
        },
        focus: function focus(targetElement) {
            var length;
            //在iOS7下, 对一些新表单元素(如date, datetime, time, month)调用focus方法会抛错,
            //幸好的是,我们可以改用setSelectionRange获取焦点, 将光标挪到文字的最后
            var type = targetElement.type;
            if (deviceIsIOS && targetElement.setSelectionRange && type.indexOf('date') !== 0 && type !== 'time' && type !== 'month') {
                length = targetElement.value.length;
                targetElement.setSelectionRange(length, length);
            } else {
                targetElement.focus();
            }
        },
        findControl: function findControl(labelElement) {
            // 获取label元素所对应的表单元素
            // 可以能过control属性, getElementById, 或用querySelector直接找其内部第一表单元素实现
            if (labelElement.control !== undefined) {
                return labelElement.control;
            }

            if (labelElement.htmlFor) {
                return document.getElementById(labelElement.htmlFor);
            }

            return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
        },
        fixTarget: function fixTarget(target) {
            if (target.nodeType === 3) {
                return target.parentNode;
            }
            if (window.SVGElementInstance && target instanceof SVGElementInstance) {
                return target.correspondingUseElement;
            }

            return target;
        },
        updateScrollParent: function updateScrollParent(targetElement) {
            //如果事件源元素位于某一个有滚动条的祖父元素中,那么保持其scrollParent与scrollTop值
            var scrollParent = targetElement.tapScrollParent;

            if (!scrollParent || !scrollParent.contains(targetElement)) {
                var parentElement = targetElement;
                do {
                    if (parentElement.scrollHeight > parentElement.offsetHeight) {
                        scrollParent = parentElement;
                        targetElement.tapScrollParent = parentElement;
                        break;
                    }

                    parentElement = parentElement.parentElement;
                } while (parentElement);
            }

            if (scrollParent) {
                scrollParent.lastScrollTop = scrollParent.scrollTop;
            }
        },
        touchHasMoved: function touchHasMoved(event) {
            //判定是否发生移动,其阀值是10px
            var touch = event.changedTouches[0],
                boundary = tapRecognizer.touchBoundary;
            return Math.abs(touch.pageX - tapRecognizer.pageX) > boundary || Math.abs(touch.pageY - tapRecognizer.pageY) > boundary;
        },

        findType: function findType(targetElement) {
            // 安卓chrome浏览器上，模拟的 click 事件不能让 select 打开，故使用 mousedown 事件
            return deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select' ? 'mousedown' : 'click';
        },
        sendClick: function sendClick(targetElement, event) {
            // 在click之前触发tap事件
            Recognizer.fire(targetElement, 'tap', {
                touchEvent: event
            });
            var clickEvent, touch;
            //某些安卓设备必须先移除焦点，之后模拟的click事件才能让新元素获取焦点
            if (document.activeElement && document.activeElement !== targetElement) {
                document.activeElement.blur();
            }

            touch = event.changedTouches[0];
            // 手动触发点击事件,此时必须使用document.createEvent('MouseEvents')来创建事件
            // 及使用initMouseEvent来初始化它
            clickEvent = document.createEvent('MouseEvents');
            clickEvent.initMouseEvent(tapRecognizer.findType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
            clickEvent.touchEvent = event;
            targetElement.dispatchEvent(clickEvent);
        },
        touchstart: function touchstart(event) {
            //忽略多点触摸
            if (event.targetTouches.length !== 1) {
                return true;
            }
            //修正事件源对象
            var targetElement = tapRecognizer.fixTarget(event.target);
            var touch = event.targetTouches[0];
            if (deviceIsIOS) {
                // 判断是否是点击文字，进行选择等操作，如果是，不需要模拟click
                var selection = window.getSelection();
                if (selection.rangeCount && !selection.isCollapsed) {
                    return true;
                }
                var id = touch.identifier;
                //当 alert 或 confirm 时，点击其他地方，会触发touch事件，identifier相同，此事件应该被忽略
                if (id && isFinite(tapRecognizer.lastTouchIdentifier) && tapRecognizer.lastTouchIdentifier === id) {
                    event.preventDefault();
                    return false;
                }

                tapRecognizer.lastTouchIdentifier = id;

                tapRecognizer.updateScrollParent(targetElement);
            }
            //收集触摸点的信息
            tapRecognizer.status = "tapping";
            tapRecognizer.startTime = Date.now();
            tapRecognizer.element = targetElement;
            tapRecognizer.pageX = touch.pageX;
            tapRecognizer.pageY = touch.pageY;
            // 如果点击太快,阻止双击带来的放大收缩行为
            if (tapRecognizer.startTime - tapRecognizer.lastTime < tapRecognizer.tapDelay) {
                event.preventDefault();
            }
        },
        touchmove: function touchmove(event) {
            if (tapRecognizer.status !== "tapping") {
                return true;
            }
            // 如果事件源元素发生改变,或者发生了移动,那么就取消触发点击事件
            if (tapRecognizer.element !== tapRecognizer.fixTarget(event.target) || tapRecognizer.touchHasMoved(event)) {
                tapRecognizer.status = tapRecognizer.element = 0;
            }
        },
        touchend: function touchend(event) {
            var targetElement = tapRecognizer.element;
            var now = Date.now();
            //如果是touchstart与touchend相隔太久,可以认为是长按,那么就直接返回
            //或者是在touchstart, touchmove阶段,判定其不该触发点击事件,也直接返回
            if (!targetElement || now - tapRecognizer.startTime > tapRecognizer.tapDelay) {
                return true;
            }

            tapRecognizer.lastTime = now;

            var startTime = tapRecognizer.startTime;
            tapRecognizer.status = tapRecognizer.startTime = 0;

            targetTagName = targetElement.tagName.toLowerCase();
            if (targetTagName === 'label') {
                //尝试触发label上可能绑定的tap事件
                Recognizer.fire(targetElement, 'tap', {
                    touchEvent: event
                });
                var forElement = tapRecognizer.findControl(targetElement);
                if (forElement) {
                    tapRecognizer.focus(targetElement);
                    targetElement = forElement;
                }
            } else if (tapRecognizer.needFocus(targetElement)) {
                //  如果元素从touchstart到touchend经历时间过长,那么不应该触发点击事
                //  或者此元素是iframe中的input元素,那么它也无法获点焦点
                if (now - startTime > 100 || deviceIsIOS && window.top !== window && targetTagName === 'input') {
                    tapRecognizer.element = 0;
                    return false;
                }

                tapRecognizer.focus(targetElement);
                deviceIsAndroid && tapRecognizer.sendClick(targetElement, event);

                return false;
            }

            if (deviceIsIOS) {
                //如果它的父容器的滚动条发生改变,那么应该识别为划动或拖动事件,不应该触发点击事件
                var scrollParent = targetElement.tapScrollParent;
                if (scrollParent && scrollParent.lastScrollTop !== scrollParent.scrollTop) {
                    return true;
                }
            }
            //如果这不是一个需要使用原生click的元素，则屏蔽原生事件，避免触发两次click
            if (!tapRecognizer.needClick(targetElement)) {
                event.preventDefault();
                // 触发一次模拟的click
                tapRecognizer.sendClick(targetElement, event);
            }
        },
        touchcancel: function touchcancel() {
            tapRecognizer.startTime = tapRecognizer.element = 0;
        }
    };

    Recognizer.add("tap", tapRecognizer);

    var pressRecognizer = {
        events: ['longtap', 'doubletap'],
        cancelPress: function cancelPress(pointer) {
            clearTimeout(pointer.pressingHandler);
            pointer.pressingHandler = null;
        },
        touchstart: function touchstart(event) {
            Recognizer.start(event, function (pointer, touch) {
                pointer.pressingHandler = setTimeout(function () {
                    if (pointer.status === 'tapping') {
                        Recognizer.fire(event.target, 'longtap', {
                            touch: touch,
                            touchEvent: event
                        });
                    }
                    pressRecognizer.cancelPress(pointer);
                }, 500);
                if (event.changedTouches.length !== 1) {
                    pointer.status = 0;
                }
            });
        },
        touchmove: function touchmove(event) {
            Recognizer.move(event, function (pointer) {
                if (pointer.distance > 10 && pointer.pressingHandler) {
                    pressRecognizer.cancelPress(pointer);
                    if (pointer.status === 'tapping') {
                        pointer.status = 'panning';
                    }
                }
            });
        },
        touchend: function touchend(event) {
            Recognizer.end(event, function (pointer, touch) {
                pressRecognizer.cancelPress(pointer);
                if (pointer.status === 'tapping') {
                    pointer.lastTime = Date.now();
                    if (pressRecognizer.lastTap && pointer.lastTime - pressRecognizer.lastTap.lastTime < 300) {
                        Recognizer.fire(pointer.element, 'doubletap', {
                            touch: touch,
                            touchEvent: event
                        });
                    }

                    pressRecognizer.lastTap = pointer;
                }
            });
        },
        touchcancel: function touchcancel(event) {
            Recognizer.end(event, function (pointer) {
                pressRecognizer.cancelPress(pointer);
            });
        }
    };
    Recognizer.add('press', pressRecognizer);

    var swipeRecognizer = {
        events: ['swipe', 'swipeleft', 'swiperight', 'swipeup', 'swipedown'],
        getAngle: function getAngle(x, y) {
            return Math.atan2(y, x) * 180 / Math.PI;
        },
        getDirection: function getDirection(x, y) {
            var angle = swipeRecognizer.getAngle(x, y);
            if (angle < -45 && angle > -135) {
                return "up";
            } else if (angle >= 45 && angle < 315) {
                return "down";
            } else if (angle > -45 && angle <= 45) {
                return "right";
            } else {
                return "left";
            }
        },
        touchstart: function touchstart(event) {
            Recognizer.start(event, noop);
        },
        touchmove: function touchmove(event) {
            Recognizer.move(event, noop);
        },
        touchend: function touchend(event) {
            if (event.changedTouches.length !== 1) {
                return;
            }
            Recognizer.end(event, function (pointer, touch) {
                var isflick = pointer.distance > 30 && pointer.distance / pointer.duration > 0.65;
                if (isflick) {
                    var extra = {
                        deltaX: pointer.deltaX,
                        deltaY: pointer.deltaY,
                        touch: touch,
                        touchEvent: event,
                        direction: swipeRecognizer.getDirection(pointer.deltaX, pointer.deltaY),
                        isVertical: pointer.isVertical
                    };
                    var target = pointer.element;
                    Recognizer.fire(target, 'swipe', extra);
                    Recognizer.fire(target, 'swipe' + extra.direction, extra);
                }
            });
        }
    };

    swipeRecognizer.touchcancel = swipeRecognizer.touchend;
    Recognizer.add('swipe', swipeRecognizer);

    // Register as a named AMD module, since avalon can be concatenated with other
    // files that may use define, but not via a proper concatenation script that
    // understands anonymous AMD modules. A named AMD is safest and most robust
    // way to register. Lowercase avalon is used because AMD module names are
    // derived from file names, and Avalon is normally delivered in a lowercase
    // file name. Do this after creating the global so that if an AMD module wants
    // to call noConflict to hide this version of avalon, it will work.

    // Note that for maximum portability, libraries that are not avalon should
    // declare themselves as anonymous modules, and avoid setting a global if an
    // AMD loader is present. avalon is a special case. For more information, see
    // https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
    if (typeof define === "function" && define.amd) {
        define("avalon", [], function () {
            return avalon;
        });
    }
    // Map over avalon in case of overwrite
    var _avalon = window.avalon;
    avalon.noConflict = function (deep) {
        if (deep && window.avalon === avalon) {
            window.avalon = _avalon;
        }
        return avalon;
    };
    // Expose avalon identifiers, even in AMD
    // and CommonJS for browser emulators
    if (noGlobal === void 0) {
        window.avalon = avalon;
    }
    return avalon;
});

},{"babel-runtime/core-js/json/stringify":1,"babel-runtime/core-js/object/create":2,"babel-runtime/core-js/object/define-properties":3,"babel-runtime/core-js/object/define-property":4,"babel-runtime/core-js/object/get-own-property-descriptor":5,"babel-runtime/core-js/object/get-own-property-names":6,"babel-runtime/core-js/object/get-prototype-of":7,"babel-runtime/core-js/object/keys":8,"babel-runtime/helpers/typeof":11}],98:[function(require,module,exports){
"use strict";

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*!
 * jQuery JavaScript Library v1.11.2
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-12-17T15:27Z
 */

(function (global, factory) {

	if ((typeof module === "undefined" ? "undefined" : (0, _typeof3.default)(module)) === "object" && (0, _typeof3.default)(module.exports) === "object") {
		// For CommonJS and CommonJS-like environments where a proper window is present,
		// execute the factory and get jQuery
		// For environments that do not inherently posses a window with a document
		// (such as Node.js), expose a jQuery-making factory as module.exports
		// This accentuates the need for the creation of a real window
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info
		module.exports = global.document ? factory(global, true) : function (w) {
			if (!w.document) {
				throw new Error("jQuery requires a window with a document");
			}
			return factory(w);
		};
	} else {
		factory(global);
	}

	// Pass this if window is not defined yet
})(typeof window !== "undefined" ? window : undefined, function (window, noGlobal) {

	// Can't do this because several apps including ASP.NET trace
	// the stack via arguments.caller.callee and Firefox dies if
	// you try to trace through "use strict" call chains. (#13335)
	// Support: Firefox 18+
	//

	var deletedIds = [];

	var _slice = deletedIds.slice;

	var concat = deletedIds.concat;

	var push = deletedIds.push;

	var indexOf = deletedIds.indexOf;

	var class2type = {};

	var toString = class2type.toString;

	var hasOwn = class2type.hasOwnProperty;

	var support = {};

	var version = "1.11.2",


	// Define a local copy of jQuery
	jQuery = function jQuery(selector, context) {
		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init(selector, context);
	},


	// Support: Android<4.1, IE<9
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,


	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	    rdashAlpha = /-([\da-z])/gi,


	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function fcamelCase(all, letter) {
		return letter.toUpperCase();
	};

	jQuery.fn = jQuery.prototype = {
		// The current version of jQuery being used
		jquery: version,

		constructor: jQuery,

		// Start with an empty selector
		selector: "",

		// The default length of a jQuery object is 0
		length: 0,

		toArray: function toArray() {
			return _slice.call(this);
		},

		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function get(num) {
			return num != null ?

			// Return just the one element from the set
			num < 0 ? this[num + this.length] : this[num] :

			// Return all the elements in a clean array
			_slice.call(this);
		},

		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function pushStack(elems) {

			// Build a new jQuery matched element set
			var ret = jQuery.merge(this.constructor(), elems);

			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;
			ret.context = this.context;

			// Return the newly-formed element set
			return ret;
		},

		// Execute a callback for every element in the matched set.
		// (You can seed the arguments with an array of args, but this is
		// only used internally.)
		each: function each(callback, args) {
			return jQuery.each(this, callback, args);
		},

		map: function map(callback) {
			return this.pushStack(jQuery.map(this, function (elem, i) {
				return callback.call(elem, i, elem);
			}));
		},

		slice: function slice() {
			return this.pushStack(_slice.apply(this, arguments));
		},

		first: function first() {
			return this.eq(0);
		},

		last: function last() {
			return this.eq(-1);
		},

		eq: function eq(i) {
			var len = this.length,
			    j = +i + (i < 0 ? len : 0);
			return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
		},

		end: function end() {
			return this.prevObject || this.constructor(null);
		},

		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: deletedIds.sort,
		splice: deletedIds.splice
	};

	jQuery.extend = jQuery.fn.extend = function () {
		var src,
		    copyIsArray,
		    copy,
		    name,
		    options,
		    clone,
		    target = arguments[0] || {},
		    i = 1,
		    length = arguments.length,
		    deep = false;

		// Handle a deep copy situation
		if (typeof target === "boolean") {
			deep = target;

			// skip the boolean and the target
			target = arguments[i] || {};
			i++;
		}

		// Handle case when target is a string or something (possible in deep copy)
		if ((typeof target === "undefined" ? "undefined" : (0, _typeof3.default)(target)) !== "object" && !jQuery.isFunction(target)) {
			target = {};
		}

		// extend jQuery itself if only one argument is passed
		if (i === length) {
			target = this;
			i--;
		}

		for (; i < length; i++) {
			// Only deal with non-null/undefined values
			if ((options = arguments[i]) != null) {
				// Extend the base object
				for (name in options) {
					src = target[name];
					copy = options[name];

					// Prevent never-ending loop
					if (target === copy) {
						continue;
					}

					// Recurse if we're merging plain objects or arrays
					if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))) {
						if (copyIsArray) {
							copyIsArray = false;
							clone = src && jQuery.isArray(src) ? src : [];
						} else {
							clone = src && jQuery.isPlainObject(src) ? src : {};
						}

						// Never move original objects, clone them
						target[name] = jQuery.extend(deep, clone, copy);

						// Don't bring in undefined values
					} else if (copy !== undefined) {
						target[name] = copy;
					}
				}
			}
		}

		// Return the modified object
		return target;
	};

	jQuery.extend({
		// Unique for each copy of jQuery on the page
		expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),

		// Assume jQuery is ready without the ready module
		isReady: true,

		error: function error(msg) {
			throw new Error(msg);
		},

		noop: function noop() {},

		// See test/unit/core.js for details concerning isFunction.
		// Since version 1.3, DOM methods and functions like alert
		// aren't supported. They return false on IE (#2968).
		isFunction: function isFunction(obj) {
			return jQuery.type(obj) === "function";
		},

		isArray: Array.isArray || function (obj) {
			return jQuery.type(obj) === "array";
		},

		isWindow: function isWindow(obj) {
			/* jshint eqeqeq: false */
			return obj != null && obj == obj.window;
		},

		isNumeric: function isNumeric(obj) {
			// parseFloat NaNs numeric-cast false positives (null|true|false|"")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			// adding 1 corrects loss of precision from parseFloat (#15100)
			return !jQuery.isArray(obj) && obj - parseFloat(obj) + 1 >= 0;
		},

		isEmptyObject: function isEmptyObject(obj) {
			var name;
			for (name in obj) {
				return false;
			}
			return true;
		},

		isPlainObject: function isPlainObject(obj) {
			var key;

			// Must be an Object.
			// Because of IE, we also have to check the presence of the constructor property.
			// Make sure that DOM nodes and window objects don't pass through, as well
			if (!obj || jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow(obj)) {
				return false;
			}

			try {
				// Not own constructor property must be Object
				if (obj.constructor && !hasOwn.call(obj, "constructor") && !hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
					return false;
				}
			} catch (e) {
				// IE8,9 Will throw exceptions on certain host objects #9897
				return false;
			}

			// Support: IE<9
			// Handle iteration over inherited properties before own properties.
			if (support.ownLast) {
				for (key in obj) {
					return hasOwn.call(obj, key);
				}
			}

			// Own properties are enumerated firstly, so to speed up,
			// if last one is own, then all properties are own.
			for (key in obj) {}

			return key === undefined || hasOwn.call(obj, key);
		},

		type: function type(obj) {
			if (obj == null) {
				return obj + "";
			}
			return (typeof obj === "undefined" ? "undefined" : (0, _typeof3.default)(obj)) === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj === "undefined" ? "undefined" : (0, _typeof3.default)(obj);
		},

		// Evaluates a script in a global context
		// Workarounds based on findings by Jim Driscoll
		// http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
		globalEval: function globalEval(data) {
			if (data && jQuery.trim(data)) {
				// We use execScript on Internet Explorer
				// We use an anonymous function so that context is window
				// rather than jQuery in Firefox
				(window.execScript || function (data) {
					window["eval"].call(window, data);
				})(data);
			}
		},

		// Convert dashed to camelCase; used by the css and data modules
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function camelCase(string) {
			return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
		},

		nodeName: function nodeName(elem, name) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},

		// args is for internal usage only
		each: function each(obj, callback, args) {
			var value,
			    i = 0,
			    length = obj.length,
			    isArray = isArraylike(obj);

			if (args) {
				if (isArray) {
					for (; i < length; i++) {
						value = callback.apply(obj[i], args);

						if (value === false) {
							break;
						}
					}
				} else {
					for (i in obj) {
						value = callback.apply(obj[i], args);

						if (value === false) {
							break;
						}
					}
				}

				// A special, fast, case for the most common use of each
			} else {
				if (isArray) {
					for (; i < length; i++) {
						value = callback.call(obj[i], i, obj[i]);

						if (value === false) {
							break;
						}
					}
				} else {
					for (i in obj) {
						value = callback.call(obj[i], i, obj[i]);

						if (value === false) {
							break;
						}
					}
				}
			}

			return obj;
		},

		// Support: Android<4.1, IE<9
		trim: function trim(text) {
			return text == null ? "" : (text + "").replace(rtrim, "");
		},

		// results is for internal usage only
		makeArray: function makeArray(arr, results) {
			var ret = results || [];

			if (arr != null) {
				if (isArraylike(Object(arr))) {
					jQuery.merge(ret, typeof arr === "string" ? [arr] : arr);
				} else {
					push.call(ret, arr);
				}
			}

			return ret;
		},

		inArray: function inArray(elem, arr, i) {
			var len;

			if (arr) {
				if (indexOf) {
					return indexOf.call(arr, elem, i);
				}

				len = arr.length;
				i = i ? i < 0 ? Math.max(0, len + i) : i : 0;

				for (; i < len; i++) {
					// Skip accessing in sparse arrays
					if (i in arr && arr[i] === elem) {
						return i;
					}
				}
			}

			return -1;
		},

		merge: function merge(first, second) {
			var len = +second.length,
			    j = 0,
			    i = first.length;

			while (j < len) {
				first[i++] = second[j++];
			}

			// Support: IE<9
			// Workaround casting of .length to NaN on otherwise arraylike objects (e.g., NodeLists)
			if (len !== len) {
				while (second[j] !== undefined) {
					first[i++] = second[j++];
				}
			}

			first.length = i;

			return first;
		},

		grep: function grep(elems, callback, invert) {
			var callbackInverse,
			    matches = [],
			    i = 0,
			    length = elems.length,
			    callbackExpect = !invert;

			// Go through the array, only saving the items
			// that pass the validator function
			for (; i < length; i++) {
				callbackInverse = !callback(elems[i], i);
				if (callbackInverse !== callbackExpect) {
					matches.push(elems[i]);
				}
			}

			return matches;
		},

		// arg is for internal usage only
		map: function map(elems, callback, arg) {
			var value,
			    i = 0,
			    length = elems.length,
			    isArray = isArraylike(elems),
			    ret = [];

			// Go through the array, translating each of the items to their new values
			if (isArray) {
				for (; i < length; i++) {
					value = callback(elems[i], i, arg);

					if (value != null) {
						ret.push(value);
					}
				}

				// Go through every key on the object,
			} else {
				for (i in elems) {
					value = callback(elems[i], i, arg);

					if (value != null) {
						ret.push(value);
					}
				}
			}

			// Flatten any nested arrays
			return concat.apply([], ret);
		},

		// A global GUID counter for objects
		guid: 1,

		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function proxy(fn, context) {
			var args, proxy, tmp;

			if (typeof context === "string") {
				tmp = fn[context];
				context = fn;
				fn = tmp;
			}

			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if (!jQuery.isFunction(fn)) {
				return undefined;
			}

			// Simulated bind
			args = _slice.call(arguments, 2);
			proxy = function proxy() {
				return fn.apply(context || this, args.concat(_slice.call(arguments)));
			};

			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;

			return proxy;
		},

		now: function now() {
			return +new Date();
		},

		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	});

	// Populate the class2type map
	jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (i, name) {
		class2type["[object " + name + "]"] = name.toLowerCase();
	});

	function isArraylike(obj) {
		var length = obj.length,
		    type = jQuery.type(obj);

		if (type === "function" || jQuery.isWindow(obj)) {
			return false;
		}

		if (obj.nodeType === 1 && length) {
			return true;
		}

		return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
	}
	var Sizzle =
	/*!
  * Sizzle CSS Selector Engine v2.2.0-pre
  * http://sizzlejs.com/
  *
  * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
  * Released under the MIT license
  * http://jquery.org/license
  *
  * Date: 2014-12-16
  */
	function (window) {

		var i,
		    support,
		    Expr,
		    getText,
		    isXML,
		    tokenize,
		    compile,
		    select,
		    outermostContext,
		    sortInput,
		    hasDuplicate,


		// Local document vars
		setDocument,
		    document,
		    docElem,
		    documentIsHTML,
		    rbuggyQSA,
		    rbuggyMatches,
		    matches,
		    contains,


		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		    preferredDoc = window.document,
		    dirruns = 0,
		    done = 0,
		    classCache = createCache(),
		    tokenCache = createCache(),
		    compilerCache = createCache(),
		    sortOrder = function sortOrder(a, b) {
			if (a === b) {
				hasDuplicate = true;
			}
			return 0;
		},


		// General-purpose constants
		MAX_NEGATIVE = 1 << 31,


		// Instance methods
		hasOwn = {}.hasOwnProperty,
		    arr = [],
		    pop = arr.pop,
		    push_native = arr.push,
		    push = arr.push,
		    slice = arr.slice,

		// Use a stripped-down indexOf as it's faster than native
		// http://jsperf.com/thor-indexof-vs-for/5
		indexOf = function indexOf(list, elem) {
			var i = 0,
			    len = list.length;
			for (; i < len; i++) {
				if (list[i] === elem) {
					return i;
				}
			}
			return -1;
		},
		    booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",


		// Regular expressions

		// Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",

		// http://www.w3.org/TR/css3-syntax/#characters
		characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",


		// Loosely modeled on CSS identifier characters
		// An unquoted value should be a CSS identifier http://www.w3.org/TR/css3-selectors/#attribute-selectors
		// Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = characterEncoding.replace("w", "w#"),


		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + characterEncoding + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]",
		    pseudos = ":(" + characterEncoding + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" + ")\\)|)",


		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp(whitespace + "+", "g"),
		    rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),
		    rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
		    rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),
		    rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g"),
		    rpseudo = new RegExp(pseudos),
		    ridentifier = new RegExp("^" + identifier + "$"),
		    matchExpr = {
			"ID": new RegExp("^#(" + characterEncoding + ")"),
			"CLASS": new RegExp("^\\.(" + characterEncoding + ")"),
			"TAG": new RegExp("^(" + characterEncoding.replace("w", "w*") + ")"),
			"ATTR": new RegExp("^" + attributes),
			"PSEUDO": new RegExp("^" + pseudos),
			"CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
			"bool": new RegExp("^(?:" + booleans + ")$", "i"),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
		},
		    rinputs = /^(?:input|select|textarea|button)$/i,
		    rheader = /^h\d$/i,
		    rnative = /^[^{]+\{\s*\[native \w/,


		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
		    rsibling = /[+~]/,
		    rescape = /'|\\/g,


		// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"),
		    funescape = function funescape(_, escaped, escapedWhitespace) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ? escaped : high < 0 ?
			// BMP codepoint
			String.fromCharCode(high + 0x10000) :
			// Supplemental Plane codepoint (surrogate pair)
			String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
		},


		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function unloadHandler() {
			setDocument();
		};

		// Optimize for push.apply( _, NodeList )
		try {
			push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes);
			// Support: Android<4.0
			// Detect silently failing push.apply
			arr[preferredDoc.childNodes.length].nodeType;
		} catch (e) {
			push = { apply: arr.length ?

				// Leverage slice if possible
				function (target, els) {
					push_native.apply(target, slice.call(els));
				} :

				// Support: IE<9
				// Otherwise append directly
				function (target, els) {
					var j = target.length,
					    i = 0;
					// Can't trust NodeList.length
					while (target[j++] = els[i++]) {}
					target.length = j - 1;
				}
			};
		}

		function Sizzle(selector, context, results, seed) {
			var match, elem, m, nodeType,
			// QSA vars
			i, groups, old, nid, newContext, newSelector;

			if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
				setDocument(context);
			}

			context = context || document;
			results = results || [];
			nodeType = context.nodeType;

			if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {

				return results;
			}

			if (!seed && documentIsHTML) {

				// Try to shortcut find operations when possible (e.g., not under DocumentFragment)
				if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {
					// Speed-up: Sizzle("#ID")
					if (m = match[1]) {
						if (nodeType === 9) {
							elem = context.getElementById(m);
							// Check parentNode to catch when Blackberry 4.6 returns
							// nodes that are no longer in the document (jQuery #6963)
							if (elem && elem.parentNode) {
								// Handle the case where IE, Opera, and Webkit return items
								// by name instead of ID
								if (elem.id === m) {
									results.push(elem);
									return results;
								}
							} else {
								return results;
							}
						} else {
							// Context is not a document
							if (context.ownerDocument && (elem = context.ownerDocument.getElementById(m)) && contains(context, elem) && elem.id === m) {
								results.push(elem);
								return results;
							}
						}

						// Speed-up: Sizzle("TAG")
					} else if (match[2]) {
						push.apply(results, context.getElementsByTagName(selector));
						return results;

						// Speed-up: Sizzle(".CLASS")
					} else if ((m = match[3]) && support.getElementsByClassName) {
						push.apply(results, context.getElementsByClassName(m));
						return results;
					}
				}

				// QSA path
				if (support.qsa && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
					nid = old = expando;
					newContext = context;
					newSelector = nodeType !== 1 && selector;

					// qSA works strangely on Element-rooted queries
					// We can work around this by specifying an extra ID on the root
					// and working up from there (Thanks to Andrew Dupont for the technique)
					// IE 8 doesn't work on object elements
					if (nodeType === 1 && context.nodeName.toLowerCase() !== "object") {
						groups = tokenize(selector);

						if (old = context.getAttribute("id")) {
							nid = old.replace(rescape, "\\$&");
						} else {
							context.setAttribute("id", nid);
						}
						nid = "[id='" + nid + "'] ";

						i = groups.length;
						while (i--) {
							groups[i] = nid + toSelector(groups[i]);
						}
						newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
						newSelector = groups.join(",");
					}

					if (newSelector) {
						try {
							push.apply(results, newContext.querySelectorAll(newSelector));
							return results;
						} catch (qsaError) {} finally {
							if (!old) {
								context.removeAttribute("id");
							}
						}
					}
				}
			}

			// All others
			return select(selector.replace(rtrim, "$1"), context, results, seed);
		}

		/**
   * Create key-value caches of limited size
   * @returns {Function(string, Object)} Returns the Object data after storing it on itself with
   *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
   *	deleting the oldest entry
   */
		function createCache() {
			var keys = [];

			function cache(key, value) {
				// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
				if (keys.push(key + " ") > Expr.cacheLength) {
					// Only keep the most recent entries
					delete cache[keys.shift()];
				}
				return cache[key + " "] = value;
			}
			return cache;
		}

		/**
   * Mark a function for special use by Sizzle
   * @param {Function} fn The function to mark
   */
		function markFunction(fn) {
			fn[expando] = true;
			return fn;
		}

		/**
   * Support testing using an element
   * @param {Function} fn Passed the created div and expects a boolean result
   */
		function assert(fn) {
			var div = document.createElement("div");

			try {
				return !!fn(div);
			} catch (e) {
				return false;
			} finally {
				// Remove from its parent by default
				if (div.parentNode) {
					div.parentNode.removeChild(div);
				}
				// release memory in IE
				div = null;
			}
		}

		/**
   * Adds the same handler for all of the specified attrs
   * @param {String} attrs Pipe-separated list of attributes
   * @param {Function} handler The method that will be applied
   */
		function addHandle(attrs, handler) {
			var arr = attrs.split("|"),
			    i = attrs.length;

			while (i--) {
				Expr.attrHandle[arr[i]] = handler;
			}
		}

		/**
   * Checks document order of two siblings
   * @param {Element} a
   * @param {Element} b
   * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
   */
		function siblingCheck(a, b) {
			var cur = b && a,
			    diff = cur && a.nodeType === 1 && b.nodeType === 1 && (~b.sourceIndex || MAX_NEGATIVE) - (~a.sourceIndex || MAX_NEGATIVE);

			// Use IE sourceIndex if available on both nodes
			if (diff) {
				return diff;
			}

			// Check if b follows a
			if (cur) {
				while (cur = cur.nextSibling) {
					if (cur === b) {
						return -1;
					}
				}
			}

			return a ? 1 : -1;
		}

		/**
   * Returns a function to use in pseudos for input types
   * @param {String} type
   */
		function createInputPseudo(type) {
			return function (elem) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === type;
			};
		}

		/**
   * Returns a function to use in pseudos for buttons
   * @param {String} type
   */
		function createButtonPseudo(type) {
			return function (elem) {
				var name = elem.nodeName.toLowerCase();
				return (name === "input" || name === "button") && elem.type === type;
			};
		}

		/**
   * Returns a function to use in pseudos for positionals
   * @param {Function} fn
   */
		function createPositionalPseudo(fn) {
			return markFunction(function (argument) {
				argument = +argument;
				return markFunction(function (seed, matches) {
					var j,
					    matchIndexes = fn([], seed.length, argument),
					    i = matchIndexes.length;

					// Match elements found at the specified indexes
					while (i--) {
						if (seed[j = matchIndexes[i]]) {
							seed[j] = !(matches[j] = seed[j]);
						}
					}
				});
			});
		}

		/**
   * Checks a node for validity as a Sizzle context
   * @param {Element|Object=} context
   * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
   */
		function testContext(context) {
			return context && typeof context.getElementsByTagName !== "undefined" && context;
		}

		// Expose support vars for convenience
		support = Sizzle.support = {};

		/**
   * Detects XML nodes
   * @param {Element|Object} elem An element or a document
   * @returns {Boolean} True iff elem is a non-HTML XML node
   */
		isXML = Sizzle.isXML = function (elem) {
			// documentElement is verified for cases where it doesn't yet exist
			// (such as loading iframes in IE - #4833)
			var documentElement = elem && (elem.ownerDocument || elem).documentElement;
			return documentElement ? documentElement.nodeName !== "HTML" : false;
		};

		/**
   * Sets document-related variables once based on the current document
   * @param {Element|Object} [doc] An element or document object to use to set the document
   * @returns {Object} Returns the current document
   */
		setDocument = Sizzle.setDocument = function (node) {
			var hasCompare,
			    parent,
			    doc = node ? node.ownerDocument || node : preferredDoc;

			// If no document and documentElement is available, return
			if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
				return document;
			}

			// Set our document
			document = doc;
			docElem = doc.documentElement;
			parent = doc.defaultView;

			// Support: IE>8
			// If iframe document is assigned to "document" variable and if iframe has been reloaded,
			// IE will throw "permission denied" error when accessing "document" variable, see jQuery #13936
			// IE6-8 do not support the defaultView property so parent will be undefined
			if (parent && parent !== parent.top) {
				// IE11 does not have attachEvent, so all must suffer
				if (parent.addEventListener) {
					parent.addEventListener("unload", unloadHandler, false);
				} else if (parent.attachEvent) {
					parent.attachEvent("onunload", unloadHandler);
				}
			}

			/* Support tests
   ---------------------------------------------------------------------- */
			documentIsHTML = !isXML(doc);

			/* Attributes
   ---------------------------------------------------------------------- */

			// Support: IE<8
			// Verify that getAttribute really returns attributes and not properties
			// (excepting IE8 booleans)
			support.attributes = assert(function (div) {
				div.className = "i";
				return !div.getAttribute("className");
			});

			/* getElement(s)By*
   ---------------------------------------------------------------------- */

			// Check if getElementsByTagName("*") returns only elements
			support.getElementsByTagName = assert(function (div) {
				div.appendChild(doc.createComment(""));
				return !div.getElementsByTagName("*").length;
			});

			// Support: IE<9
			support.getElementsByClassName = rnative.test(doc.getElementsByClassName);

			// Support: IE<10
			// Check if getElementById returns elements by name
			// The broken getElementById methods don't pick up programatically-set names,
			// so use a roundabout getElementsByName test
			support.getById = assert(function (div) {
				docElem.appendChild(div).id = expando;
				return !doc.getElementsByName || !doc.getElementsByName(expando).length;
			});

			// ID find and filter
			if (support.getById) {
				Expr.find["ID"] = function (id, context) {
					if (typeof context.getElementById !== "undefined" && documentIsHTML) {
						var m = context.getElementById(id);
						// Check parentNode to catch when Blackberry 4.6 returns
						// nodes that are no longer in the document #6963
						return m && m.parentNode ? [m] : [];
					}
				};
				Expr.filter["ID"] = function (id) {
					var attrId = id.replace(runescape, funescape);
					return function (elem) {
						return elem.getAttribute("id") === attrId;
					};
				};
			} else {
				// Support: IE6/7
				// getElementById is not reliable as a find shortcut
				delete Expr.find["ID"];

				Expr.filter["ID"] = function (id) {
					var attrId = id.replace(runescape, funescape);
					return function (elem) {
						var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
						return node && node.value === attrId;
					};
				};
			}

			// Tag
			Expr.find["TAG"] = support.getElementsByTagName ? function (tag, context) {
				if (typeof context.getElementsByTagName !== "undefined") {
					return context.getElementsByTagName(tag);

					// DocumentFragment nodes don't have gEBTN
				} else if (support.qsa) {
					return context.querySelectorAll(tag);
				}
			} : function (tag, context) {
				var elem,
				    tmp = [],
				    i = 0,

				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName(tag);

				// Filter out possible comments
				if (tag === "*") {
					while (elem = results[i++]) {
						if (elem.nodeType === 1) {
							tmp.push(elem);
						}
					}

					return tmp;
				}
				return results;
			};

			// Class
			Expr.find["CLASS"] = support.getElementsByClassName && function (className, context) {
				if (documentIsHTML) {
					return context.getElementsByClassName(className);
				}
			};

			/* QSA/matchesSelector
   ---------------------------------------------------------------------- */

			// QSA and matchesSelector support

			// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
			rbuggyMatches = [];

			// qSa(:focus) reports false when true (Chrome 21)
			// We allow this because of a bug in IE8/9 that throws an error
			// whenever `document.activeElement` is accessed on an iframe
			// So, we allow :focus to pass through QSA all the time to avoid the IE error
			// See http://bugs.jquery.com/ticket/13378
			rbuggyQSA = [];

			if (support.qsa = rnative.test(doc.querySelectorAll)) {
				// Build QSA regex
				// Regex strategy adopted from Diego Perini
				assert(function (div) {
					// Select is set to empty string on purpose
					// This is to test IE's treatment of not explicitly
					// setting a boolean content attribute,
					// since its presence should be enough
					// http://bugs.jquery.com/ticket/12359
					docElem.appendChild(div).innerHTML = "<a id='" + expando + "'></a>" + "<select id='" + expando + "-\f]' msallowcapture=''>" + "<option selected=''></option></select>";

					// Support: IE8, Opera 11-12.16
					// Nothing should be selected when empty strings follow ^= or $= or *=
					// The test attribute must be unknown in Opera but "safe" for WinRT
					// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
					if (div.querySelectorAll("[msallowcapture^='']").length) {
						rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
					}

					// Support: IE8
					// Boolean attributes and "value" are not treated correctly
					if (!div.querySelectorAll("[selected]").length) {
						rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
					}

					// Support: Chrome<29, Android<4.2+, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.7+
					if (!div.querySelectorAll("[id~=" + expando + "-]").length) {
						rbuggyQSA.push("~=");
					}

					// Webkit/Opera - :checked should return selected option elements
					// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
					// IE8 throws error here and will not see later tests
					if (!div.querySelectorAll(":checked").length) {
						rbuggyQSA.push(":checked");
					}

					// Support: Safari 8+, iOS 8+
					// https://bugs.webkit.org/show_bug.cgi?id=136851
					// In-page `selector#id sibing-combinator selector` fails
					if (!div.querySelectorAll("a#" + expando + "+*").length) {
						rbuggyQSA.push(".#.+[+~]");
					}
				});

				assert(function (div) {
					// Support: Windows 8 Native Apps
					// The type and name attributes are restricted during .innerHTML assignment
					var input = doc.createElement("input");
					input.setAttribute("type", "hidden");
					div.appendChild(input).setAttribute("name", "D");

					// Support: IE8
					// Enforce case-sensitivity of name attribute
					if (div.querySelectorAll("[name=d]").length) {
						rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
					}

					// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
					// IE8 throws error here and will not see later tests
					if (!div.querySelectorAll(":enabled").length) {
						rbuggyQSA.push(":enabled", ":disabled");
					}

					// Opera 10-11 does not throw on post-comma invalid pseudos
					div.querySelectorAll("*,:x");
					rbuggyQSA.push(",.*:");
				});
			}

			if (support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {

				assert(function (div) {
					// Check to see if it's possible to do matchesSelector
					// on a disconnected node (IE 9)
					support.disconnectedMatch = matches.call(div, "div");

					// This should fail with an exception
					// Gecko does not error, returns false instead
					matches.call(div, "[s!='']:x");
					rbuggyMatches.push("!=", pseudos);
				});
			}

			rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
			rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));

			/* Contains
   ---------------------------------------------------------------------- */
			hasCompare = rnative.test(docElem.compareDocumentPosition);

			// Element contains another
			// Purposefully does not implement inclusive descendent
			// As in, an element does not contain itself
			contains = hasCompare || rnative.test(docElem.contains) ? function (a, b) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
				    bup = b && b.parentNode;
				return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
			} : function (a, b) {
				if (b) {
					while (b = b.parentNode) {
						if (b === a) {
							return true;
						}
					}
				}
				return false;
			};

			/* Sorting
   ---------------------------------------------------------------------- */

			// Document order sorting
			sortOrder = hasCompare ? function (a, b) {

				// Flag for duplicate removal
				if (a === b) {
					hasDuplicate = true;
					return 0;
				}

				// Sort on method existence if only one input has compareDocumentPosition
				var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
				if (compare) {
					return compare;
				}

				// Calculate position if both inputs belong to the same document
				compare = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) :

				// Otherwise we know they are disconnected
				1;

				// Disconnected nodes
				if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {

					// Choose the first element that is related to our preferred document
					if (a === doc || a.ownerDocument === preferredDoc && contains(preferredDoc, a)) {
						return -1;
					}
					if (b === doc || b.ownerDocument === preferredDoc && contains(preferredDoc, b)) {
						return 1;
					}

					// Maintain original order
					return sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
				}

				return compare & 4 ? -1 : 1;
			} : function (a, b) {
				// Exit early if the nodes are identical
				if (a === b) {
					hasDuplicate = true;
					return 0;
				}

				var cur,
				    i = 0,
				    aup = a.parentNode,
				    bup = b.parentNode,
				    ap = [a],
				    bp = [b];

				// Parentless nodes are either documents or disconnected
				if (!aup || !bup) {
					return a === doc ? -1 : b === doc ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;

					// If the nodes are siblings, we can do a quick check
				} else if (aup === bup) {
					return siblingCheck(a, b);
				}

				// Otherwise we need full lists of their ancestors for comparison
				cur = a;
				while (cur = cur.parentNode) {
					ap.unshift(cur);
				}
				cur = b;
				while (cur = cur.parentNode) {
					bp.unshift(cur);
				}

				// Walk down the tree looking for a discrepancy
				while (ap[i] === bp[i]) {
					i++;
				}

				return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck(ap[i], bp[i]) :

				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0;
			};

			return doc;
		};

		Sizzle.matches = function (expr, elements) {
			return Sizzle(expr, null, null, elements);
		};

		Sizzle.matchesSelector = function (elem, expr) {
			// Set document vars if needed
			if ((elem.ownerDocument || elem) !== document) {
				setDocument(elem);
			}

			// Make sure that attribute selectors are quoted
			expr = expr.replace(rattributeQuotes, "='$1']");

			if (support.matchesSelector && documentIsHTML && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {

				try {
					var ret = matches.call(elem, expr);

					// IE 9's matchesSelector returns false on disconnected nodes
					if (ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11) {
						return ret;
					}
				} catch (e) {}
			}

			return Sizzle(expr, document, null, [elem]).length > 0;
		};

		Sizzle.contains = function (context, elem) {
			// Set document vars if needed
			if ((context.ownerDocument || context) !== document) {
				setDocument(context);
			}
			return contains(context, elem);
		};

		Sizzle.attr = function (elem, name) {
			// Set document vars if needed
			if ((elem.ownerDocument || elem) !== document) {
				setDocument(elem);
			}

			var fn = Expr.attrHandle[name.toLowerCase()],

			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;

			return val !== undefined ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
		};

		Sizzle.error = function (msg) {
			throw new Error("Syntax error, unrecognized expression: " + msg);
		};

		/**
   * Document sorting and removing duplicates
   * @param {ArrayLike} results
   */
		Sizzle.uniqueSort = function (results) {
			var elem,
			    duplicates = [],
			    j = 0,
			    i = 0;

			// Unless we *know* we can detect duplicates, assume their presence
			hasDuplicate = !support.detectDuplicates;
			sortInput = !support.sortStable && results.slice(0);
			results.sort(sortOrder);

			if (hasDuplicate) {
				while (elem = results[i++]) {
					if (elem === results[i]) {
						j = duplicates.push(i);
					}
				}
				while (j--) {
					results.splice(duplicates[j], 1);
				}
			}

			// Clear input after sorting to release objects
			// See https://github.com/jquery/sizzle/pull/225
			sortInput = null;

			return results;
		};

		/**
   * Utility function for retrieving the text value of an array of DOM nodes
   * @param {Array|Element} elem
   */
		getText = Sizzle.getText = function (elem) {
			var node,
			    ret = "",
			    i = 0,
			    nodeType = elem.nodeType;

			if (!nodeType) {
				// If no nodeType, this is expected to be an array
				while (node = elem[i++]) {
					// Do not traverse comment nodes
					ret += getText(node);
				}
			} else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
				// Use textContent for elements
				// innerText usage removed for consistency of new lines (jQuery #11153)
				if (typeof elem.textContent === "string") {
					return elem.textContent;
				} else {
					// Traverse its children
					for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
						ret += getText(elem);
					}
				}
			} else if (nodeType === 3 || nodeType === 4) {
				return elem.nodeValue;
			}
			// Do not include comment or processing instruction nodes

			return ret;
		};

		Expr = Sizzle.selectors = {

			// Can be adjusted by the user
			cacheLength: 50,

			createPseudo: markFunction,

			match: matchExpr,

			attrHandle: {},

			find: {},

			relative: {
				">": { dir: "parentNode", first: true },
				" ": { dir: "parentNode" },
				"+": { dir: "previousSibling", first: true },
				"~": { dir: "previousSibling" }
			},

			preFilter: {
				"ATTR": function ATTR(match) {
					match[1] = match[1].replace(runescape, funescape);

					// Move the given value to match[3] whether quoted or unquoted
					match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);

					if (match[2] === "~=") {
						match[3] = " " + match[3] + " ";
					}

					return match.slice(0, 4);
				},

				"CHILD": function CHILD(match) {
					/* matches from matchExpr["CHILD"]
     	1 type (only|nth|...)
     	2 what (child|of-type)
     	3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
     	4 xn-component of xn+y argument ([+-]?\d*n|)
     	5 sign of xn-component
     	6 x of xn-component
     	7 sign of y-component
     	8 y of y-component
     */
					match[1] = match[1].toLowerCase();

					if (match[1].slice(0, 3) === "nth") {
						// nth-* requires argument
						if (!match[3]) {
							Sizzle.error(match[0]);
						}

						// numeric x and y parameters for Expr.filter.CHILD
						// remember that false/true cast respectively to 0/1
						match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
						match[5] = +(match[7] + match[8] || match[3] === "odd");

						// other types prohibit arguments
					} else if (match[3]) {
						Sizzle.error(match[0]);
					}

					return match;
				},

				"PSEUDO": function PSEUDO(match) {
					var excess,
					    unquoted = !match[6] && match[2];

					if (matchExpr["CHILD"].test(match[0])) {
						return null;
					}

					// Accept quoted arguments as-is
					if (match[3]) {
						match[2] = match[4] || match[5] || "";

						// Strip excess characters from unquoted arguments
					} else if (unquoted && rpseudo.test(unquoted) && (
					// Get excess from tokenize (recursively)
					excess = tokenize(unquoted, true)) && (
					// advance to the next closing parenthesis
					excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {

						// excess is a negative index
						match[0] = match[0].slice(0, excess);
						match[2] = unquoted.slice(0, excess);
					}

					// Return only captures needed by the pseudo filter method (type and argument)
					return match.slice(0, 3);
				}
			},

			filter: {

				"TAG": function TAG(nodeNameSelector) {
					var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
					return nodeNameSelector === "*" ? function () {
						return true;
					} : function (elem) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
				},

				"CLASS": function CLASS(className) {
					var pattern = classCache[className + " "];

					return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function (elem) {
						return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
					});
				},

				"ATTR": function ATTR(name, operator, check) {
					return function (elem) {
						var result = Sizzle.attr(elem, name);

						if (result == null) {
							return operator === "!=";
						}
						if (!operator) {
							return true;
						}

						result += "";

						return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
					};
				},

				"CHILD": function CHILD(type, what, argument, first, last) {
					var simple = type.slice(0, 3) !== "nth",
					    forward = type.slice(-4) !== "last",
					    ofType = what === "of-type";

					return first === 1 && last === 0 ?

					// Shortcut for :nth-*(n)
					function (elem) {
						return !!elem.parentNode;
					} : function (elem, context, xml) {
						var cache,
						    outerCache,
						    node,
						    diff,
						    nodeIndex,
						    start,
						    dir = simple !== forward ? "nextSibling" : "previousSibling",
						    parent = elem.parentNode,
						    name = ofType && elem.nodeName.toLowerCase(),
						    useCache = !xml && !ofType;

						if (parent) {

							// :(first|last|only)-(child|of-type)
							if (simple) {
								while (dir) {
									node = elem;
									while (node = node[dir]) {
										if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}

							start = [forward ? parent.firstChild : parent.lastChild];

							// non-xml :nth-child(...) stores cache data on `parent`
							if (forward && useCache) {
								// Seek `elem` from a previously-cached index
								outerCache = parent[expando] || (parent[expando] = {});
								cache = outerCache[type] || [];
								nodeIndex = cache[0] === dirruns && cache[1];
								diff = cache[0] === dirruns && cache[2];
								node = nodeIndex && parent.childNodes[nodeIndex];

								while (node = ++nodeIndex && node && node[dir] || (

								// Fallback to seeking `elem` from the start
								diff = nodeIndex = 0) || start.pop()) {

									// When found, cache indexes on `parent` and break
									if (node.nodeType === 1 && ++diff && node === elem) {
										outerCache[type] = [dirruns, nodeIndex, diff];
										break;
									}
								}

								// Use previously-cached element index if available
							} else if (useCache && (cache = (elem[expando] || (elem[expando] = {}))[type]) && cache[0] === dirruns) {
								diff = cache[1];

								// xml :nth-child(...) or :nth-last-child(...) or :nth(-last)?-of-type(...)
							} else {
								// Use the same loop as above to seek `elem` from the start
								while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {

									if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
										// Cache the index of each encountered element
										if (useCache) {
											(node[expando] || (node[expando] = {}))[type] = [dirruns, diff];
										}

										if (node === elem) {
											break;
										}
									}
								}
							}

							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || diff % first === 0 && diff / first >= 0;
						}
					};
				},

				"PSEUDO": function PSEUDO(pseudo, argument) {
					// pseudo-class names are case-insensitive
					// http://www.w3.org/TR/selectors/#pseudo-classes
					// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
					// Remember that setFilters inherits from pseudos
					var args,
					    fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);

					// The user may use createPseudo to indicate that
					// arguments are needed to create the filter function
					// just as Sizzle does
					if (fn[expando]) {
						return fn(argument);
					}

					// But maintain support for old signatures
					if (fn.length > 1) {
						args = [pseudo, pseudo, "", argument];
						return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function (seed, matches) {
							var idx,
							    matched = fn(seed, argument),
							    i = matched.length;
							while (i--) {
								idx = indexOf(seed, matched[i]);
								seed[idx] = !(matches[idx] = matched[i]);
							}
						}) : function (elem) {
							return fn(elem, 0, args);
						};
					}

					return fn;
				}
			},

			pseudos: {
				// Potentially complex pseudos
				"not": markFunction(function (selector) {
					// Trim the selector passed to compile
					// to avoid treating leading and trailing
					// spaces as combinators
					var input = [],
					    results = [],
					    matcher = compile(selector.replace(rtrim, "$1"));

					return matcher[expando] ? markFunction(function (seed, matches, context, xml) {
						var elem,
						    unmatched = matcher(seed, null, xml, []),
						    i = seed.length;

						// Match elements unmatched by `matcher`
						while (i--) {
							if (elem = unmatched[i]) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) : function (elem, context, xml) {
						input[0] = elem;
						matcher(input, null, xml, results);
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
				}),

				"has": markFunction(function (selector) {
					return function (elem) {
						return Sizzle(selector, elem).length > 0;
					};
				}),

				"contains": markFunction(function (text) {
					text = text.replace(runescape, funescape);
					return function (elem) {
						return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1;
					};
				}),

				// "Whether an element is represented by a :lang() selector
				// is based solely on the element's language value
				// being equal to the identifier C,
				// or beginning with the identifier C immediately followed by "-".
				// The matching of C against the element's language value is performed case-insensitively.
				// The identifier C does not have to be a valid language name."
				// http://www.w3.org/TR/selectors/#lang-pseudo
				"lang": markFunction(function (lang) {
					// lang value must be a valid identifier
					if (!ridentifier.test(lang || "")) {
						Sizzle.error("unsupported lang: " + lang);
					}
					lang = lang.replace(runescape, funescape).toLowerCase();
					return function (elem) {
						var elemLang;
						do {
							if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {

								elemLang = elemLang.toLowerCase();
								return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
							}
						} while ((elem = elem.parentNode) && elem.nodeType === 1);
						return false;
					};
				}),

				// Miscellaneous
				"target": function target(elem) {
					var hash = window.location && window.location.hash;
					return hash && hash.slice(1) === elem.id;
				},

				"root": function root(elem) {
					return elem === docElem;
				},

				"focus": function focus(elem) {
					return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
				},

				// Boolean properties
				"enabled": function enabled(elem) {
					return elem.disabled === false;
				},

				"disabled": function disabled(elem) {
					return elem.disabled === true;
				},

				"checked": function checked(elem) {
					// In CSS3, :checked should return both checked and selected elements
					// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
					var nodeName = elem.nodeName.toLowerCase();
					return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected;
				},

				"selected": function selected(elem) {
					// Accessing this property makes selected-by-default
					// options in Safari work properly
					if (elem.parentNode) {
						elem.parentNode.selectedIndex;
					}

					return elem.selected === true;
				},

				// Contents
				"empty": function empty(elem) {
					// http://www.w3.org/TR/selectors/#empty-pseudo
					// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
					//   but not by others (comment: 8; processing instruction: 7; etc.)
					// nodeType < 6 works because attributes (2) do not appear as children
					for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
						if (elem.nodeType < 6) {
							return false;
						}
					}
					return true;
				},

				"parent": function parent(elem) {
					return !Expr.pseudos["empty"](elem);
				},

				// Element/input types
				"header": function header(elem) {
					return rheader.test(elem.nodeName);
				},

				"input": function input(elem) {
					return rinputs.test(elem.nodeName);
				},

				"button": function button(elem) {
					var name = elem.nodeName.toLowerCase();
					return name === "input" && elem.type === "button" || name === "button";
				},

				"text": function text(elem) {
					var attr;
					return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && (

					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					(attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
				},

				// Position-in-collection
				"first": createPositionalPseudo(function () {
					return [0];
				}),

				"last": createPositionalPseudo(function (matchIndexes, length) {
					return [length - 1];
				}),

				"eq": createPositionalPseudo(function (matchIndexes, length, argument) {
					return [argument < 0 ? argument + length : argument];
				}),

				"even": createPositionalPseudo(function (matchIndexes, length) {
					var i = 0;
					for (; i < length; i += 2) {
						matchIndexes.push(i);
					}
					return matchIndexes;
				}),

				"odd": createPositionalPseudo(function (matchIndexes, length) {
					var i = 1;
					for (; i < length; i += 2) {
						matchIndexes.push(i);
					}
					return matchIndexes;
				}),

				"lt": createPositionalPseudo(function (matchIndexes, length, argument) {
					var i = argument < 0 ? argument + length : argument;
					for (; --i >= 0;) {
						matchIndexes.push(i);
					}
					return matchIndexes;
				}),

				"gt": createPositionalPseudo(function (matchIndexes, length, argument) {
					var i = argument < 0 ? argument + length : argument;
					for (; ++i < length;) {
						matchIndexes.push(i);
					}
					return matchIndexes;
				})
			}
		};

		Expr.pseudos["nth"] = Expr.pseudos["eq"];

		// Add button/input type pseudos
		for (i in { radio: true, checkbox: true, file: true, password: true, image: true }) {
			Expr.pseudos[i] = createInputPseudo(i);
		}
		for (i in { submit: true, reset: true }) {
			Expr.pseudos[i] = createButtonPseudo(i);
		}

		// Easy API for creating new setFilters
		function setFilters() {}
		setFilters.prototype = Expr.filters = Expr.pseudos;
		Expr.setFilters = new setFilters();

		tokenize = Sizzle.tokenize = function (selector, parseOnly) {
			var matched,
			    match,
			    tokens,
			    type,
			    soFar,
			    groups,
			    preFilters,
			    cached = tokenCache[selector + " "];

			if (cached) {
				return parseOnly ? 0 : cached.slice(0);
			}

			soFar = selector;
			groups = [];
			preFilters = Expr.preFilter;

			while (soFar) {

				// Comma and first run
				if (!matched || (match = rcomma.exec(soFar))) {
					if (match) {
						// Don't consume trailing commas as valid
						soFar = soFar.slice(match[0].length) || soFar;
					}
					groups.push(tokens = []);
				}

				matched = false;

				// Combinators
				if (match = rcombinators.exec(soFar)) {
					matched = match.shift();
					tokens.push({
						value: matched,
						// Cast descendant combinators to space
						type: match[0].replace(rtrim, " ")
					});
					soFar = soFar.slice(matched.length);
				}

				// Filters
				for (type in Expr.filter) {
					if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
						matched = match.shift();
						tokens.push({
							value: matched,
							type: type,
							matches: match
						});
						soFar = soFar.slice(matched.length);
					}
				}

				if (!matched) {
					break;
				}
			}

			// Return the length of the invalid excess
			// if we're just parsing
			// Otherwise, throw an error or return tokens
			return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) :
			// Cache the tokens
			tokenCache(selector, groups).slice(0);
		};

		function toSelector(tokens) {
			var i = 0,
			    len = tokens.length,
			    selector = "";
			for (; i < len; i++) {
				selector += tokens[i].value;
			}
			return selector;
		}

		function addCombinator(matcher, combinator, base) {
			var dir = combinator.dir,
			    checkNonElements = base && dir === "parentNode",
			    doneName = done++;

			return combinator.first ?
			// Check against closest ancestor/preceding element
			function (elem, context, xml) {
				while (elem = elem[dir]) {
					if (elem.nodeType === 1 || checkNonElements) {
						return matcher(elem, context, xml);
					}
				}
			} :

			// Check against all ancestor/preceding elements
			function (elem, context, xml) {
				var oldCache,
				    outerCache,
				    newCache = [dirruns, doneName];

				// We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
				if (xml) {
					while (elem = elem[dir]) {
						if (elem.nodeType === 1 || checkNonElements) {
							if (matcher(elem, context, xml)) {
								return true;
							}
						}
					}
				} else {
					while (elem = elem[dir]) {
						if (elem.nodeType === 1 || checkNonElements) {
							outerCache = elem[expando] || (elem[expando] = {});
							if ((oldCache = outerCache[dir]) && oldCache[0] === dirruns && oldCache[1] === doneName) {

								// Assign to newCache so results back-propagate to previous elements
								return newCache[2] = oldCache[2];
							} else {
								// Reuse newcache so results back-propagate to previous elements
								outerCache[dir] = newCache;

								// A match means we're done; a fail means we have to keep checking
								if (newCache[2] = matcher(elem, context, xml)) {
									return true;
								}
							}
						}
					}
				}
			};
		}

		function elementMatcher(matchers) {
			return matchers.length > 1 ? function (elem, context, xml) {
				var i = matchers.length;
				while (i--) {
					if (!matchers[i](elem, context, xml)) {
						return false;
					}
				}
				return true;
			} : matchers[0];
		}

		function multipleContexts(selector, contexts, results) {
			var i = 0,
			    len = contexts.length;
			for (; i < len; i++) {
				Sizzle(selector, contexts[i], results);
			}
			return results;
		}

		function condense(unmatched, map, filter, context, xml) {
			var elem,
			    newUnmatched = [],
			    i = 0,
			    len = unmatched.length,
			    mapped = map != null;

			for (; i < len; i++) {
				if (elem = unmatched[i]) {
					if (!filter || filter(elem, context, xml)) {
						newUnmatched.push(elem);
						if (mapped) {
							map.push(i);
						}
					}
				}
			}

			return newUnmatched;
		}

		function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
			if (postFilter && !postFilter[expando]) {
				postFilter = setMatcher(postFilter);
			}
			if (postFinder && !postFinder[expando]) {
				postFinder = setMatcher(postFinder, postSelector);
			}
			return markFunction(function (seed, results, context, xml) {
				var temp,
				    i,
				    elem,
				    preMap = [],
				    postMap = [],
				    preexisting = results.length,


				// Get initial elements from seed or context
				elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),


				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems,
				    matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || (seed ? preFilter : preexisting || postFilter) ?

				// ...intermediate processing is necessary
				[] :

				// ...otherwise use results directly
				results : matcherIn;

				// Find primary matches
				if (matcher) {
					matcher(matcherIn, matcherOut, context, xml);
				}

				// Apply postFilter
				if (postFilter) {
					temp = condense(matcherOut, postMap);
					postFilter(temp, [], context, xml);

					// Un-match failing elements by moving them back to matcherIn
					i = temp.length;
					while (i--) {
						if (elem = temp[i]) {
							matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
						}
					}
				}

				if (seed) {
					if (postFinder || preFilter) {
						if (postFinder) {
							// Get the final matcherOut by condensing this intermediate into postFinder contexts
							temp = [];
							i = matcherOut.length;
							while (i--) {
								if (elem = matcherOut[i]) {
									// Restore matcherIn since elem is not yet a final match
									temp.push(matcherIn[i] = elem);
								}
							}
							postFinder(null, matcherOut = [], temp, xml);
						}

						// Move matched elements from seed to results to keep them synchronized
						i = matcherOut.length;
						while (i--) {
							if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) {

								seed[temp] = !(results[temp] = elem);
							}
						}
					}

					// Add elements to results, through postFinder if defined
				} else {
					matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
					if (postFinder) {
						postFinder(null, results, matcherOut, xml);
					} else {
						push.apply(results, matcherOut);
					}
				}
			});
		}

		function matcherFromTokens(tokens) {
			var checkContext,
			    matcher,
			    j,
			    len = tokens.length,
			    leadingRelative = Expr.relative[tokens[0].type],
			    implicitRelative = leadingRelative || Expr.relative[" "],
			    i = leadingRelative ? 1 : 0,


			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator(function (elem) {
				return elem === checkContext;
			}, implicitRelative, true),
			    matchAnyContext = addCombinator(function (elem) {
				return indexOf(checkContext, elem) > -1;
			}, implicitRelative, true),
			    matchers = [function (elem, context, xml) {
				var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			}];

			for (; i < len; i++) {
				if (matcher = Expr.relative[tokens[i].type]) {
					matchers = [addCombinator(elementMatcher(matchers), matcher)];
				} else {
					matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);

					// Return special upon seeing a positional matcher
					if (matcher[expando]) {
						// Find the next relative operator (if any) for proper handling
						j = ++i;
						for (; j < len; j++) {
							if (Expr.relative[tokens[j].type]) {
								break;
							}
						}
						return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice(0, i - 1).concat({ value: tokens[i - 2].type === " " ? "*" : "" })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
					}
					matchers.push(matcher);
				}
			}

			return elementMatcher(matchers);
		}

		function matcherFromGroupMatchers(elementMatchers, setMatchers) {
			var bySet = setMatchers.length > 0,
			    byElement = elementMatchers.length > 0,
			    superMatcher = function superMatcher(seed, context, xml, results, outermost) {
				var elem,
				    j,
				    matcher,
				    matchedCount = 0,
				    i = "0",
				    unmatched = seed && [],
				    setMatched = [],
				    contextBackup = outermostContext,

				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]("*", outermost),

				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1,
				    len = elems.length;

				if (outermost) {
					outermostContext = context !== document && context;
				}

				// Add elements passing elementMatchers directly to results
				// Keep `i` a string if there are no elements so `matchedCount` will be "00" below
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for (; i !== len && (elem = elems[i]) != null; i++) {
					if (byElement && elem) {
						j = 0;
						while (matcher = elementMatchers[j++]) {
							if (matcher(elem, context, xml)) {
								results.push(elem);
								break;
							}
						}
						if (outermost) {
							dirruns = dirrunsUnique;
						}
					}

					// Track unmatched elements for set filters
					if (bySet) {
						// They will have gone through all possible matchers
						if (elem = !matcher && elem) {
							matchedCount--;
						}

						// Lengthen the array for every element, matched or not
						if (seed) {
							unmatched.push(elem);
						}
					}
				}

				// Apply set filters to unmatched elements
				matchedCount += i;
				if (bySet && i !== matchedCount) {
					j = 0;
					while (matcher = setMatchers[j++]) {
						matcher(unmatched, setMatched, context, xml);
					}

					if (seed) {
						// Reintegrate element matches to eliminate the need for sorting
						if (matchedCount > 0) {
							while (i--) {
								if (!(unmatched[i] || setMatched[i])) {
									setMatched[i] = pop.call(results);
								}
							}
						}

						// Discard index placeholder values to get only actual matches
						setMatched = condense(setMatched);
					}

					// Add matches to results
					push.apply(results, setMatched);

					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {

						Sizzle.uniqueSort(results);
					}
				}

				// Override manipulation of globals by nested matchers
				if (outermost) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}

				return unmatched;
			};

			return bySet ? markFunction(superMatcher) : superMatcher;
		}

		compile = Sizzle.compile = function (selector, match /* Internal Use Only */) {
			var i,
			    setMatchers = [],
			    elementMatchers = [],
			    cached = compilerCache[selector + " "];

			if (!cached) {
				// Generate a function of recursive functions that can be used to check each element
				if (!match) {
					match = tokenize(selector);
				}
				i = match.length;
				while (i--) {
					cached = matcherFromTokens(match[i]);
					if (cached[expando]) {
						setMatchers.push(cached);
					} else {
						elementMatchers.push(cached);
					}
				}

				// Cache the compiled function
				cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));

				// Save selector and tokenization
				cached.selector = selector;
			}
			return cached;
		};

		/**
   * A low-level selection function that works with Sizzle's compiled
   *  selector functions
   * @param {String|Function} selector A selector or a pre-compiled
   *  selector function built with Sizzle.compile
   * @param {Element} context
   * @param {Array} [results]
   * @param {Array} [seed] A set of elements to match against
   */
		select = Sizzle.select = function (selector, context, results, seed) {
			var i,
			    tokens,
			    token,
			    type,
			    find,
			    compiled = typeof selector === "function" && selector,
			    match = !seed && tokenize(selector = compiled.selector || selector);

			results = results || [];

			// Try to minimize operations if there is no seed and only one group
			if (match.length === 1) {

				// Take a shortcut and set the context if the root selector is an ID
				tokens = match[0] = match[0].slice(0);
				if (tokens.length > 2 && (token = tokens[0]).type === "ID" && support.getById && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {

					context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
					if (!context) {
						return results;

						// Precompiled matchers will still verify ancestry, so step up a level
					} else if (compiled) {
						context = context.parentNode;
					}

					selector = selector.slice(tokens.shift().value.length);
				}

				// Fetch a seed set for right-to-left matching
				i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
				while (i--) {
					token = tokens[i];

					// Abort if we hit a combinator
					if (Expr.relative[type = token.type]) {
						break;
					}
					if (find = Expr.find[type]) {
						// Search, expanding context for leading sibling combinators
						if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) {

							// If seed is empty or no tokens remain, we can return early
							tokens.splice(i, 1);
							selector = seed.length && toSelector(tokens);
							if (!selector) {
								push.apply(results, seed);
								return results;
							}

							break;
						}
					}
				}
			}

			// Compile and execute a filtering function if one is not provided
			// Provide `match` to avoid retokenization if we modified the selector above
			(compiled || compile(selector, match))(seed, context, !documentIsHTML, results, rsibling.test(selector) && testContext(context.parentNode) || context);
			return results;
		};

		// One-time assignments

		// Sort stability
		support.sortStable = expando.split("").sort(sortOrder).join("") === expando;

		// Support: Chrome 14-35+
		// Always assume duplicates if they aren't passed to the comparison function
		support.detectDuplicates = !!hasDuplicate;

		// Initialize against the default document
		setDocument();

		// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
		// Detached nodes confoundingly follow *each other*
		support.sortDetached = assert(function (div1) {
			// Should return 1, but returns 4 (following)
			return div1.compareDocumentPosition(document.createElement("div")) & 1;
		});

		// Support: IE<8
		// Prevent attribute/property "interpolation"
		// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
		if (!assert(function (div) {
			div.innerHTML = "<a href='#'></a>";
			return div.firstChild.getAttribute("href") === "#";
		})) {
			addHandle("type|href|height|width", function (elem, name, isXML) {
				if (!isXML) {
					return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
				}
			});
		}

		// Support: IE<9
		// Use defaultValue in place of getAttribute("value")
		if (!support.attributes || !assert(function (div) {
			div.innerHTML = "<input/>";
			div.firstChild.setAttribute("value", "");
			return div.firstChild.getAttribute("value") === "";
		})) {
			addHandle("value", function (elem, name, isXML) {
				if (!isXML && elem.nodeName.toLowerCase() === "input") {
					return elem.defaultValue;
				}
			});
		}

		// Support: IE<9
		// Use getAttributeNode to fetch booleans when getAttribute lies
		if (!assert(function (div) {
			return div.getAttribute("disabled") == null;
		})) {
			addHandle(booleans, function (elem, name, isXML) {
				var val;
				if (!isXML) {
					return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
				}
			});
		}

		return Sizzle;
	}(window);

	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;
	jQuery.expr[":"] = jQuery.expr.pseudos;
	jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;

	var rneedsContext = jQuery.expr.match.needsContext;

	var rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/;

	var risSimple = /^.[^:#\[\.,]*$/;

	// Implement the identical functionality for filter and not
	function winnow(elements, qualifier, not) {
		if (jQuery.isFunction(qualifier)) {
			return jQuery.grep(elements, function (elem, i) {
				/* jshint -W018 */
				return !!qualifier.call(elem, i, elem) !== not;
			});
		}

		if (qualifier.nodeType) {
			return jQuery.grep(elements, function (elem) {
				return elem === qualifier !== not;
			});
		}

		if (typeof qualifier === "string") {
			if (risSimple.test(qualifier)) {
				return jQuery.filter(qualifier, elements, not);
			}

			qualifier = jQuery.filter(qualifier, elements);
		}

		return jQuery.grep(elements, function (elem) {
			return jQuery.inArray(elem, qualifier) >= 0 !== not;
		});
	}

	jQuery.filter = function (expr, elems, not) {
		var elem = elems[0];

		if (not) {
			expr = ":not(" + expr + ")";
		}

		return elems.length === 1 && elem.nodeType === 1 ? jQuery.find.matchesSelector(elem, expr) ? [elem] : [] : jQuery.find.matches(expr, jQuery.grep(elems, function (elem) {
			return elem.nodeType === 1;
		}));
	};

	jQuery.fn.extend({
		find: function find(selector) {
			var i,
			    ret = [],
			    self = this,
			    len = self.length;

			if (typeof selector !== "string") {
				return this.pushStack(jQuery(selector).filter(function () {
					for (i = 0; i < len; i++) {
						if (jQuery.contains(self[i], this)) {
							return true;
						}
					}
				}));
			}

			for (i = 0; i < len; i++) {
				jQuery.find(selector, self[i], ret);
			}

			// Needed because $( selector, context ) becomes $( context ).find( selector )
			ret = this.pushStack(len > 1 ? jQuery.unique(ret) : ret);
			ret.selector = this.selector ? this.selector + " " + selector : selector;
			return ret;
		},
		filter: function filter(selector) {
			return this.pushStack(winnow(this, selector || [], false));
		},
		not: function not(selector) {
			return this.pushStack(winnow(this, selector || [], true));
		},
		is: function is(selector) {
			return !!winnow(this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
		}
	});

	// Initialize a jQuery object


	// A central reference to the root jQuery(document)
	var rootjQuery,


	// Use the correct document accordingly with window argument (sandbox)
	document = window.document,


	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
	    init = jQuery.fn.init = function (selector, context) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if (!selector) {
			return this;
		}

		// Handle HTML strings
		if (typeof selector === "string") {
			if (selector.charAt(0) === "<" && selector.charAt(selector.length - 1) === ">" && selector.length >= 3) {
				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [null, selector, null];
			} else {
				match = rquickExpr.exec(selector);
			}

			// Match html or make sure no context is specified for #id
			if (match && (match[1] || !context)) {

				// HANDLE: $(html) -> $(array)
				if (match[1]) {
					context = context instanceof jQuery ? context[0] : context;

					// scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true));

					// HANDLE: $(html, props)
					if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
						for (match in context) {
							// Properties of context are called as methods if possible
							if (jQuery.isFunction(this[match])) {
								this[match](context[match]);

								// ...and otherwise set as attributes
							} else {
								this.attr(match, context[match]);
							}
						}
					}

					return this;

					// HANDLE: $(#id)
				} else {
					elem = document.getElementById(match[2]);

					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document #6963
					if (elem && elem.parentNode) {
						// Handle the case where IE and Opera return items
						// by name instead of ID
						if (elem.id !== match[2]) {
							return rootjQuery.find(selector);
						}

						// Otherwise, we inject the element directly into the jQuery object
						this.length = 1;
						this[0] = elem;
					}

					this.context = document;
					this.selector = selector;
					return this;
				}

				// HANDLE: $(expr, $(...))
			} else if (!context || context.jquery) {
				return (context || rootjQuery).find(selector);

				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor(context).find(selector);
			}

			// HANDLE: $(DOMElement)
		} else if (selector.nodeType) {
			this.context = this[0] = selector;
			this.length = 1;
			return this;

			// HANDLE: $(function)
			// Shortcut for document ready
		} else if (jQuery.isFunction(selector)) {
			return typeof rootjQuery.ready !== "undefined" ? rootjQuery.ready(selector) :
			// Execute immediately if ready is not present
			selector(jQuery);
		}

		if (selector.selector !== undefined) {
			this.selector = selector.selector;
			this.context = selector.context;
		}

		return jQuery.makeArray(selector, this);
	};

	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;

	// Initialize central reference
	rootjQuery = jQuery(document);

	var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

	jQuery.extend({
		dir: function dir(elem, _dir, until) {
			var matched = [],
			    cur = elem[_dir];

			while (cur && cur.nodeType !== 9 && (until === undefined || cur.nodeType !== 1 || !jQuery(cur).is(until))) {
				if (cur.nodeType === 1) {
					matched.push(cur);
				}
				cur = cur[_dir];
			}
			return matched;
		},

		sibling: function sibling(n, elem) {
			var r = [];

			for (; n; n = n.nextSibling) {
				if (n.nodeType === 1 && n !== elem) {
					r.push(n);
				}
			}

			return r;
		}
	});

	jQuery.fn.extend({
		has: function has(target) {
			var i,
			    targets = jQuery(target, this),
			    len = targets.length;

			return this.filter(function () {
				for (i = 0; i < len; i++) {
					if (jQuery.contains(this, targets[i])) {
						return true;
					}
				}
			});
		},

		closest: function closest(selectors, context) {
			var cur,
			    i = 0,
			    l = this.length,
			    matched = [],
			    pos = rneedsContext.test(selectors) || typeof selectors !== "string" ? jQuery(selectors, context || this.context) : 0;

			for (; i < l; i++) {
				for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
					// Always skip document fragments
					if (cur.nodeType < 11 && (pos ? pos.index(cur) > -1 :

					// Don't pass non-elements to Sizzle
					cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {

						matched.push(cur);
						break;
					}
				}
			}

			return this.pushStack(matched.length > 1 ? jQuery.unique(matched) : matched);
		},

		// Determine the position of an element within
		// the matched set of elements
		index: function index(elem) {

			// No argument, return index in parent
			if (!elem) {
				return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
			}

			// index in selector
			if (typeof elem === "string") {
				return jQuery.inArray(this[0], jQuery(elem));
			}

			// Locate the position of the desired element
			return jQuery.inArray(
			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[0] : elem, this);
		},

		add: function add(selector, context) {
			return this.pushStack(jQuery.unique(jQuery.merge(this.get(), jQuery(selector, context))));
		},

		addBack: function addBack(selector) {
			return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
		}
	});

	function sibling(cur, dir) {
		do {
			cur = cur[dir];
		} while (cur && cur.nodeType !== 1);

		return cur;
	}

	jQuery.each({
		parent: function parent(elem) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function parents(elem) {
			return jQuery.dir(elem, "parentNode");
		},
		parentsUntil: function parentsUntil(elem, i, until) {
			return jQuery.dir(elem, "parentNode", until);
		},
		next: function next(elem) {
			return sibling(elem, "nextSibling");
		},
		prev: function prev(elem) {
			return sibling(elem, "previousSibling");
		},
		nextAll: function nextAll(elem) {
			return jQuery.dir(elem, "nextSibling");
		},
		prevAll: function prevAll(elem) {
			return jQuery.dir(elem, "previousSibling");
		},
		nextUntil: function nextUntil(elem, i, until) {
			return jQuery.dir(elem, "nextSibling", until);
		},
		prevUntil: function prevUntil(elem, i, until) {
			return jQuery.dir(elem, "previousSibling", until);
		},
		siblings: function siblings(elem) {
			return jQuery.sibling((elem.parentNode || {}).firstChild, elem);
		},
		children: function children(elem) {
			return jQuery.sibling(elem.firstChild);
		},
		contents: function contents(elem) {
			return jQuery.nodeName(elem, "iframe") ? elem.contentDocument || elem.contentWindow.document : jQuery.merge([], elem.childNodes);
		}
	}, function (name, fn) {
		jQuery.fn[name] = function (until, selector) {
			var ret = jQuery.map(this, fn, until);

			if (name.slice(-5) !== "Until") {
				selector = until;
			}

			if (selector && typeof selector === "string") {
				ret = jQuery.filter(selector, ret);
			}

			if (this.length > 1) {
				// Remove duplicates
				if (!guaranteedUnique[name]) {
					ret = jQuery.unique(ret);
				}

				// Reverse order for parents* and prev-derivatives
				if (rparentsprev.test(name)) {
					ret = ret.reverse();
				}
			}

			return this.pushStack(ret);
		};
	});
	var rnotwhite = /\S+/g;

	// String to Object options format cache
	var optionsCache = {};

	// Convert String-formatted options into Object-formatted ones and store in cache
	function createOptions(options) {
		var object = optionsCache[options] = {};
		jQuery.each(options.match(rnotwhite) || [], function (_, flag) {
			object[flag] = true;
		});
		return object;
	}

	/*
  * Create a callback list using the following parameters:
  *
  *	options: an optional list of space-separated options that will change how
  *			the callback list behaves or a more traditional option object
  *
  * By default a callback list will act like an event callback list and can be
  * "fired" multiple times.
  *
  * Possible options:
  *
  *	once:			will ensure the callback list can only be fired once (like a Deferred)
  *
  *	memory:			will keep track of previous values and will call any callback added
  *					after the list has been fired right away with the latest "memorized"
  *					values (like a Deferred)
  *
  *	unique:			will ensure a callback can only be added once (no duplicate in the list)
  *
  *	stopOnFalse:	interrupt callings when a callback returns false
  *
  */
	jQuery.Callbacks = function (options) {

		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ? optionsCache[options] || createOptions(options) : jQuery.extend({}, options);

		var // Flag to know if list is currently firing
		firing,

		// Last fire value (for non-forgettable lists)
		memory,

		// Flag to know if list was already fired
		_fired,

		// End of the loop when firing
		firingLength,

		// Index of currently firing callback (modified by remove if needed)
		firingIndex,

		// First callback to fire (used internally by add and fireWith)
		firingStart,

		// Actual callback list
		list = [],

		// Stack of fire calls for repeatable lists
		stack = !options.once && [],

		// Fire callbacks
		fire = function fire(data) {
			memory = options.memory && data;
			_fired = true;
			firingIndex = firingStart || 0;
			firingStart = 0;
			firingLength = list.length;
			firing = true;
			for (; list && firingIndex < firingLength; firingIndex++) {
				if (list[firingIndex].apply(data[0], data[1]) === false && options.stopOnFalse) {
					memory = false; // To prevent further calls using add
					break;
				}
			}
			firing = false;
			if (list) {
				if (stack) {
					if (stack.length) {
						fire(stack.shift());
					}
				} else if (memory) {
					list = [];
				} else {
					self.disable();
				}
			}
		},

		// Actual Callbacks object
		self = {
			// Add a callback or a collection of callbacks to the list
			add: function add() {
				if (list) {
					// First, we save the current length
					var start = list.length;
					(function add(args) {
						jQuery.each(args, function (_, arg) {
							var type = jQuery.type(arg);
							if (type === "function") {
								if (!options.unique || !self.has(arg)) {
									list.push(arg);
								}
							} else if (arg && arg.length && type !== "string") {
								// Inspect recursively
								add(arg);
							}
						});
					})(arguments);
					// Do we need to add the callbacks to the
					// current firing batch?
					if (firing) {
						firingLength = list.length;
						// With memory, if we're not firing then
						// we should call right away
					} else if (memory) {
						firingStart = start;
						fire(memory);
					}
				}
				return this;
			},
			// Remove a callback from the list
			remove: function remove() {
				if (list) {
					jQuery.each(arguments, function (_, arg) {
						var index;
						while ((index = jQuery.inArray(arg, list, index)) > -1) {
							list.splice(index, 1);
							// Handle firing indexes
							if (firing) {
								if (index <= firingLength) {
									firingLength--;
								}
								if (index <= firingIndex) {
									firingIndex--;
								}
							}
						}
					});
				}
				return this;
			},
			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function has(fn) {
				return fn ? jQuery.inArray(fn, list) > -1 : !!(list && list.length);
			},
			// Remove all callbacks from the list
			empty: function empty() {
				list = [];
				firingLength = 0;
				return this;
			},
			// Have the list do nothing anymore
			disable: function disable() {
				list = stack = memory = undefined;
				return this;
			},
			// Is it disabled?
			disabled: function disabled() {
				return !list;
			},
			// Lock the list in its current state
			lock: function lock() {
				stack = undefined;
				if (!memory) {
					self.disable();
				}
				return this;
			},
			// Is it locked?
			locked: function locked() {
				return !stack;
			},
			// Call all callbacks with the given context and arguments
			fireWith: function fireWith(context, args) {
				if (list && (!_fired || stack)) {
					args = args || [];
					args = [context, args.slice ? args.slice() : args];
					if (firing) {
						stack.push(args);
					} else {
						fire(args);
					}
				}
				return this;
			},
			// Call all the callbacks with the given arguments
			fire: function fire() {
				self.fireWith(this, arguments);
				return this;
			},
			// To know if the callbacks have already been called at least once
			fired: function fired() {
				return !!_fired;
			}
		};

		return self;
	};

	jQuery.extend({

		Deferred: function Deferred(func) {
			var tuples = [
			// action, add listener, listener list, final state
			["resolve", "done", jQuery.Callbacks("once memory"), "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), "rejected"], ["notify", "progress", jQuery.Callbacks("memory")]],
			    _state = "pending",
			    _promise = {
				state: function state() {
					return _state;
				},
				always: function always() {
					deferred.done(arguments).fail(arguments);
					return this;
				},
				then: function then() /* fnDone, fnFail, fnProgress */{
					var fns = arguments;
					return jQuery.Deferred(function (newDefer) {
						jQuery.each(tuples, function (i, tuple) {
							var fn = jQuery.isFunction(fns[i]) && fns[i];
							// deferred[ done | fail | progress ] for forwarding actions to newDefer
							deferred[tuple[1]](function () {
								var returned = fn && fn.apply(this, arguments);
								if (returned && jQuery.isFunction(returned.promise)) {
									returned.promise().done(newDefer.resolve).fail(newDefer.reject).progress(newDefer.notify);
								} else {
									newDefer[tuple[0] + "With"](this === _promise ? newDefer.promise() : this, fn ? [returned] : arguments);
								}
							});
						});
						fns = null;
					}).promise();
				},
				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function promise(obj) {
					return obj != null ? jQuery.extend(obj, _promise) : _promise;
				}
			},
			    deferred = {};

			// Keep pipe for back-compat
			_promise.pipe = _promise.then;

			// Add list-specific methods
			jQuery.each(tuples, function (i, tuple) {
				var list = tuple[2],
				    stateString = tuple[3];

				// promise[ done | fail | progress ] = list.add
				_promise[tuple[1]] = list.add;

				// Handle state
				if (stateString) {
					list.add(function () {
						// state = [ resolved | rejected ]
						_state = stateString;

						// [ reject_list | resolve_list ].disable; progress_list.lock
					}, tuples[i ^ 1][2].disable, tuples[2][2].lock);
				}

				// deferred[ resolve | reject | notify ]
				deferred[tuple[0]] = function () {
					deferred[tuple[0] + "With"](this === deferred ? _promise : this, arguments);
					return this;
				};
				deferred[tuple[0] + "With"] = list.fireWith;
			});

			// Make the deferred a promise
			_promise.promise(deferred);

			// Call given func if any
			if (func) {
				func.call(deferred, deferred);
			}

			// All done!
			return deferred;
		},

		// Deferred helper
		when: function when(subordinate /* , ..., subordinateN */) {
			var i = 0,
			    resolveValues = _slice.call(arguments),
			    length = resolveValues.length,


			// the count of uncompleted subordinates
			remaining = length !== 1 || subordinate && jQuery.isFunction(subordinate.promise) ? length : 0,


			// the master Deferred. If resolveValues consist of only a single Deferred, just use that.
			deferred = remaining === 1 ? subordinate : jQuery.Deferred(),


			// Update function for both resolve and progress values
			updateFunc = function updateFunc(i, contexts, values) {
				return function (value) {
					contexts[i] = this;
					values[i] = arguments.length > 1 ? _slice.call(arguments) : value;
					if (values === progressValues) {
						deferred.notifyWith(contexts, values);
					} else if (! --remaining) {
						deferred.resolveWith(contexts, values);
					}
				};
			},
			    progressValues,
			    progressContexts,
			    resolveContexts;

			// add listeners to Deferred subordinates; treat others as resolved
			if (length > 1) {
				progressValues = new Array(length);
				progressContexts = new Array(length);
				resolveContexts = new Array(length);
				for (; i < length; i++) {
					if (resolveValues[i] && jQuery.isFunction(resolveValues[i].promise)) {
						resolveValues[i].promise().done(updateFunc(i, resolveContexts, resolveValues)).fail(deferred.reject).progress(updateFunc(i, progressContexts, progressValues));
					} else {
						--remaining;
					}
				}
			}

			// if we're not waiting on anything, resolve the master
			if (!remaining) {
				deferred.resolveWith(resolveContexts, resolveValues);
			}

			return deferred.promise();
		}
	});

	// The deferred used on DOM ready
	var readyList;

	jQuery.fn.ready = function (fn) {
		// Add the callback
		jQuery.ready.promise().done(fn);

		return this;
	};

	jQuery.extend({
		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,

		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,

		// Hold (or release) the ready event
		holdReady: function holdReady(hold) {
			if (hold) {
				jQuery.readyWait++;
			} else {
				jQuery.ready(true);
			}
		},

		// Handle when the DOM is ready
		ready: function ready(wait) {

			// Abort if there are pending holds or we're already ready
			if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
				return;
			}

			// Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
			if (!document.body) {
				return setTimeout(jQuery.ready);
			}

			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If a normal DOM Ready event fired, decrement, and wait if need be
			if (wait !== true && --jQuery.readyWait > 0) {
				return;
			}

			// If there are functions bound, to execute
			readyList.resolveWith(document, [jQuery]);

			// Trigger any bound ready events
			if (jQuery.fn.triggerHandler) {
				jQuery(document).triggerHandler("ready");
				jQuery(document).off("ready");
			}
		}
	});

	/**
  * Clean-up method for dom ready events
  */
	function detach() {
		if (document.addEventListener) {
			document.removeEventListener("DOMContentLoaded", completed, false);
			window.removeEventListener("load", completed, false);
		} else {
			document.detachEvent("onreadystatechange", completed);
			window.detachEvent("onload", completed);
		}
	}

	/**
  * The ready event handler and self cleanup method
  */
	function completed() {
		// readyState === "complete" is good enough for us to call the dom ready in oldIE
		if (document.addEventListener || event.type === "load" || document.readyState === "complete") {
			detach();
			jQuery.ready();
		}
	}

	jQuery.ready.promise = function (obj) {
		if (!readyList) {

			readyList = jQuery.Deferred();

			// Catch cases where $(document).ready() is called after the browser event has already occurred.
			// we once tried to use readyState "interactive" here, but it caused issues like the one
			// discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
			if (document.readyState === "complete") {
				// Handle it asynchronously to allow scripts the opportunity to delay ready
				setTimeout(jQuery.ready);

				// Standards-based browsers support DOMContentLoaded
			} else if (document.addEventListener) {
				// Use the handy event callback
				document.addEventListener("DOMContentLoaded", completed, false);

				// A fallback to window.onload, that will always work
				window.addEventListener("load", completed, false);

				// If IE event model is used
			} else {
				// Ensure firing before onload, maybe late but safe also for iframes
				document.attachEvent("onreadystatechange", completed);

				// A fallback to window.onload, that will always work
				window.attachEvent("onload", completed);

				// If IE and not a frame
				// continually check to see if the document is ready
				var top = false;

				try {
					top = window.frameElement == null && document.documentElement;
				} catch (e) {}

				if (top && top.doScroll) {
					(function doScrollCheck() {
						if (!jQuery.isReady) {

							try {
								// Use the trick by Diego Perini
								// http://javascript.nwbox.com/IEContentLoaded/
								top.doScroll("left");
							} catch (e) {
								return setTimeout(doScrollCheck, 50);
							}

							// detach all dom ready events
							detach();

							// and execute any waiting functions
							jQuery.ready();
						}
					})();
				}
			}
		}
		return readyList.promise(obj);
	};

	var strundefined = typeof undefined === "undefined" ? "undefined" : (0, _typeof3.default)(undefined);

	// Support: IE<9
	// Iteration over object's inherited properties before its own
	var i;
	for (i in jQuery(support)) {
		break;
	}
	support.ownLast = i !== "0";

	// Note: most support tests are defined in their respective modules.
	// false until the test is run
	support.inlineBlockNeedsLayout = false;

	// Execute ASAP in case we need to set body.style.zoom
	jQuery(function () {
		// Minified: var a,b,c,d
		var val, div, body, container;

		body = document.getElementsByTagName("body")[0];
		if (!body || !body.style) {
			// Return for frameset docs that don't have a body
			return;
		}

		// Setup
		div = document.createElement("div");
		container = document.createElement("div");
		container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
		body.appendChild(container).appendChild(div);

		if ((0, _typeof3.default)(div.style.zoom) !== strundefined) {
			// Support: IE<8
			// Check if natively block-level elements act like inline-block
			// elements when setting their display to 'inline' and giving
			// them layout
			div.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1";

			support.inlineBlockNeedsLayout = val = div.offsetWidth === 3;
			if (val) {
				// Prevent IE 6 from affecting layout for positioned elements #11048
				// Prevent IE from shrinking the body in IE 7 mode #12869
				// Support: IE<8
				body.style.zoom = 1;
			}
		}

		body.removeChild(container);
	});

	(function () {
		var div = document.createElement("div");

		// Execute the test only if not already executed in another module.
		if (support.deleteExpando == null) {
			// Support: IE<9
			support.deleteExpando = true;
			try {
				delete div.test;
			} catch (e) {
				support.deleteExpando = false;
			}
		}

		// Null elements to avoid leaks in IE.
		div = null;
	})();

	/**
  * Determines whether an object can have data
  */
	jQuery.acceptData = function (elem) {
		var noData = jQuery.noData[(elem.nodeName + " ").toLowerCase()],
		    nodeType = +elem.nodeType || 1;

		// Do not set data on non-element DOM nodes because it will not be cleared (#8335).
		return nodeType !== 1 && nodeType !== 9 ? false :

		// Nodes accept data unless otherwise specified; rejection can be conditional
		!noData || noData !== true && elem.getAttribute("classid") === noData;
	};

	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	    rmultiDash = /([A-Z])/g;

	function dataAttr(elem, key, data) {
		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if (data === undefined && elem.nodeType === 1) {

			var name = "data-" + key.replace(rmultiDash, "-$1").toLowerCase();

			data = elem.getAttribute(name);

			if (typeof data === "string") {
				try {
					data = data === "true" ? true : data === "false" ? false : data === "null" ? null :
					// Only convert to a number if it doesn't change the string
					+data + "" === data ? +data : rbrace.test(data) ? jQuery.parseJSON(data) : data;
				} catch (e) {}

				// Make sure we set the data so it isn't changed later
				jQuery.data(elem, key, data);
			} else {
				data = undefined;
			}
		}

		return data;
	}

	// checks a cache object for emptiness
	function isEmptyDataObject(obj) {
		var name;
		for (name in obj) {

			// if the public data object is empty, the private is still empty
			if (name === "data" && jQuery.isEmptyObject(obj[name])) {
				continue;
			}
			if (name !== "toJSON") {
				return false;
			}
		}

		return true;
	}

	function internalData(elem, name, data, pvt /* Internal Use Only */) {
		if (!jQuery.acceptData(elem)) {
			return;
		}

		var ret,
		    thisCache,
		    internalKey = jQuery.expando,


		// We have to handle DOM nodes and JS objects differently because IE6-7
		// can't GC object references properly across the DOM-JS boundary
		isNode = elem.nodeType,


		// Only DOM nodes need the global jQuery cache; JS object data is
		// attached directly to the object so GC can occur automatically
		cache = isNode ? jQuery.cache : elem,


		// Only defining an ID for JS objects if its cache already exists allows
		// the code to shortcut on the same path as a DOM node with no cache
		id = isNode ? elem[internalKey] : elem[internalKey] && internalKey;

		// Avoid doing any more work than we need to when trying to get data on an
		// object that has no data at all
		if ((!id || !cache[id] || !pvt && !cache[id].data) && data === undefined && typeof name === "string") {
			return;
		}

		if (!id) {
			// Only DOM nodes need a new unique ID for each element since their data
			// ends up in the global cache
			if (isNode) {
				id = elem[internalKey] = deletedIds.pop() || jQuery.guid++;
			} else {
				id = internalKey;
			}
		}

		if (!cache[id]) {
			// Avoid exposing jQuery metadata on plain JS objects when the object
			// is serialized using JSON.stringify
			cache[id] = isNode ? {} : { toJSON: jQuery.noop };
		}

		// An object can be passed to jQuery.data instead of a key/value pair; this gets
		// shallow copied over onto the existing cache
		if ((typeof name === "undefined" ? "undefined" : (0, _typeof3.default)(name)) === "object" || typeof name === "function") {
			if (pvt) {
				cache[id] = jQuery.extend(cache[id], name);
			} else {
				cache[id].data = jQuery.extend(cache[id].data, name);
			}
		}

		thisCache = cache[id];

		// jQuery data() is stored in a separate object inside the object's internal data
		// cache in order to avoid key collisions between internal data and user-defined
		// data.
		if (!pvt) {
			if (!thisCache.data) {
				thisCache.data = {};
			}

			thisCache = thisCache.data;
		}

		if (data !== undefined) {
			thisCache[jQuery.camelCase(name)] = data;
		}

		// Check for both converted-to-camel and non-converted data property names
		// If a data property was specified
		if (typeof name === "string") {

			// First Try to find as-is property data
			ret = thisCache[name];

			// Test for null|undefined property data
			if (ret == null) {

				// Try to find the camelCased property
				ret = thisCache[jQuery.camelCase(name)];
			}
		} else {
			ret = thisCache;
		}

		return ret;
	}

	function internalRemoveData(elem, name, pvt) {
		if (!jQuery.acceptData(elem)) {
			return;
		}

		var thisCache,
		    i,
		    isNode = elem.nodeType,


		// See jQuery.data for more information
		cache = isNode ? jQuery.cache : elem,
		    id = isNode ? elem[jQuery.expando] : jQuery.expando;

		// If there is already no cache entry for this object, there is no
		// purpose in continuing
		if (!cache[id]) {
			return;
		}

		if (name) {

			thisCache = pvt ? cache[id] : cache[id].data;

			if (thisCache) {

				// Support array or space separated string names for data keys
				if (!jQuery.isArray(name)) {

					// try the string as a key before any manipulation
					if (name in thisCache) {
						name = [name];
					} else {

						// split the camel cased version by spaces unless a key with the spaces exists
						name = jQuery.camelCase(name);
						if (name in thisCache) {
							name = [name];
						} else {
							name = name.split(" ");
						}
					}
				} else {
					// If "name" is an array of keys...
					// When data is initially created, via ("key", "val") signature,
					// keys will be converted to camelCase.
					// Since there is no way to tell _how_ a key was added, remove
					// both plain key and camelCase key. #12786
					// This will only penalize the array argument path.
					name = name.concat(jQuery.map(name, jQuery.camelCase));
				}

				i = name.length;
				while (i--) {
					delete thisCache[name[i]];
				}

				// If there is no data left in the cache, we want to continue
				// and let the cache object itself get destroyed
				if (pvt ? !isEmptyDataObject(thisCache) : !jQuery.isEmptyObject(thisCache)) {
					return;
				}
			}
		}

		// See jQuery.data for more information
		if (!pvt) {
			delete cache[id].data;

			// Don't destroy the parent cache unless the internal data object
			// had been the only thing left in it
			if (!isEmptyDataObject(cache[id])) {
				return;
			}
		}

		// Destroy the cache
		if (isNode) {
			jQuery.cleanData([elem], true);

			// Use delete when supported for expandos or `cache` is not a window per isWindow (#10080)
			/* jshint eqeqeq: false */
		} else if (support.deleteExpando || cache != cache.window) {
			/* jshint eqeqeq: true */
			delete cache[id];

			// When all else fails, null
		} else {
			cache[id] = null;
		}
	}

	jQuery.extend({
		cache: {},

		// The following elements (space-suffixed to avoid Object.prototype collisions)
		// throw uncatchable exceptions if you attempt to set expando properties
		noData: {
			"applet ": true,
			"embed ": true,
			// ...but Flash objects (which have this classid) *can* handle expandos
			"object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
		},

		hasData: function hasData(elem) {
			elem = elem.nodeType ? jQuery.cache[elem[jQuery.expando]] : elem[jQuery.expando];
			return !!elem && !isEmptyDataObject(elem);
		},

		data: function data(elem, name, _data) {
			return internalData(elem, name, _data);
		},

		removeData: function removeData(elem, name) {
			return internalRemoveData(elem, name);
		},

		// For internal use only.
		_data: function _data(elem, name, data) {
			return internalData(elem, name, data, true);
		},

		_removeData: function _removeData(elem, name) {
			return internalRemoveData(elem, name, true);
		}
	});

	jQuery.fn.extend({
		data: function data(key, value) {
			var i,
			    name,
			    data,
			    elem = this[0],
			    attrs = elem && elem.attributes;

			// Special expections of .data basically thwart jQuery.access,
			// so implement the relevant behavior ourselves

			// Gets all values
			if (key === undefined) {
				if (this.length) {
					data = jQuery.data(elem);

					if (elem.nodeType === 1 && !jQuery._data(elem, "parsedAttrs")) {
						i = attrs.length;
						while (i--) {

							// Support: IE11+
							// The attrs elements can be null (#14894)
							if (attrs[i]) {
								name = attrs[i].name;
								if (name.indexOf("data-") === 0) {
									name = jQuery.camelCase(name.slice(5));
									dataAttr(elem, name, data[name]);
								}
							}
						}
						jQuery._data(elem, "parsedAttrs", true);
					}
				}

				return data;
			}

			// Sets multiple values
			if ((typeof key === "undefined" ? "undefined" : (0, _typeof3.default)(key)) === "object") {
				return this.each(function () {
					jQuery.data(this, key);
				});
			}

			return arguments.length > 1 ?

			// Sets one value
			this.each(function () {
				jQuery.data(this, key, value);
			}) :

			// Gets one value
			// Try to fetch any internally stored data first
			elem ? dataAttr(elem, key, jQuery.data(elem, key)) : undefined;
		},

		removeData: function removeData(key) {
			return this.each(function () {
				jQuery.removeData(this, key);
			});
		}
	});

	jQuery.extend({
		queue: function queue(elem, type, data) {
			var queue;

			if (elem) {
				type = (type || "fx") + "queue";
				queue = jQuery._data(elem, type);

				// Speed up dequeue by getting out quickly if this is just a lookup
				if (data) {
					if (!queue || jQuery.isArray(data)) {
						queue = jQuery._data(elem, type, jQuery.makeArray(data));
					} else {
						queue.push(data);
					}
				}
				return queue || [];
			}
		},

		dequeue: function dequeue(elem, type) {
			type = type || "fx";

			var queue = jQuery.queue(elem, type),
			    startLength = queue.length,
			    fn = queue.shift(),
			    hooks = jQuery._queueHooks(elem, type),
			    next = function next() {
				jQuery.dequeue(elem, type);
			};

			// If the fx queue is dequeued, always remove the progress sentinel
			if (fn === "inprogress") {
				fn = queue.shift();
				startLength--;
			}

			if (fn) {

				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if (type === "fx") {
					queue.unshift("inprogress");
				}

				// clear up the last queue stop function
				delete hooks.stop;
				fn.call(elem, next, hooks);
			}

			if (!startLength && hooks) {
				hooks.empty.fire();
			}
		},

		// not intended for public consumption - generates a queueHooks object, or returns the current one
		_queueHooks: function _queueHooks(elem, type) {
			var key = type + "queueHooks";
			return jQuery._data(elem, key) || jQuery._data(elem, key, {
				empty: jQuery.Callbacks("once memory").add(function () {
					jQuery._removeData(elem, type + "queue");
					jQuery._removeData(elem, key);
				})
			});
		}
	});

	jQuery.fn.extend({
		queue: function queue(type, data) {
			var setter = 2;

			if (typeof type !== "string") {
				data = type;
				type = "fx";
				setter--;
			}

			if (arguments.length < setter) {
				return jQuery.queue(this[0], type);
			}

			return data === undefined ? this : this.each(function () {
				var queue = jQuery.queue(this, type, data);

				// ensure a hooks for this queue
				jQuery._queueHooks(this, type);

				if (type === "fx" && queue[0] !== "inprogress") {
					jQuery.dequeue(this, type);
				}
			});
		},
		dequeue: function dequeue(type) {
			return this.each(function () {
				jQuery.dequeue(this, type);
			});
		},
		clearQueue: function clearQueue(type) {
			return this.queue(type || "fx", []);
		},
		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function promise(type, obj) {
			var tmp,
			    count = 1,
			    defer = jQuery.Deferred(),
			    elements = this,
			    i = this.length,
			    resolve = function resolve() {
				if (! --count) {
					defer.resolveWith(elements, [elements]);
				}
			};

			if (typeof type !== "string") {
				obj = type;
				type = undefined;
			}
			type = type || "fx";

			while (i--) {
				tmp = jQuery._data(elements[i], type + "queueHooks");
				if (tmp && tmp.empty) {
					count++;
					tmp.empty.add(resolve);
				}
			}
			resolve();
			return defer.promise(obj);
		}
	});
	var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;

	var cssExpand = ["Top", "Right", "Bottom", "Left"];

	var isHidden = function isHidden(elem, el) {
		// isHidden might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;
		return jQuery.css(elem, "display") === "none" || !jQuery.contains(elem.ownerDocument, elem);
	};

	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = jQuery.access = function (elems, fn, key, value, chainable, emptyGet, raw) {
		var i = 0,
		    length = elems.length,
		    bulk = key == null;

		// Sets many values
		if (jQuery.type(key) === "object") {
			chainable = true;
			for (i in key) {
				jQuery.access(elems, fn, i, key[i], true, emptyGet, raw);
			}

			// Sets one value
		} else if (value !== undefined) {
			chainable = true;

			if (!jQuery.isFunction(value)) {
				raw = true;
			}

			if (bulk) {
				// Bulk operations run against the entire set
				if (raw) {
					fn.call(elems, value);
					fn = null;

					// ...except when executing function values
				} else {
					bulk = fn;
					fn = function fn(elem, key, value) {
						return bulk.call(jQuery(elem), value);
					};
				}
			}

			if (fn) {
				for (; i < length; i++) {
					fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
				}
			}
		}

		return chainable ? elems :

		// Gets
		bulk ? fn.call(elems) : length ? fn(elems[0], key) : emptyGet;
	};
	var rcheckableType = /^(?:checkbox|radio)$/i;

	(function () {
		// Minified: var a,b,c
		var input = document.createElement("input"),
		    div = document.createElement("div"),
		    fragment = document.createDocumentFragment();

		// Setup
		div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";

		// IE strips leading whitespace when .innerHTML is used
		support.leadingWhitespace = div.firstChild.nodeType === 3;

		// Make sure that tbody elements aren't automatically inserted
		// IE will insert them into empty tables
		support.tbody = !div.getElementsByTagName("tbody").length;

		// Make sure that link elements get serialized correctly by innerHTML
		// This requires a wrapper element in IE
		support.htmlSerialize = !!div.getElementsByTagName("link").length;

		// Makes sure cloning an html5 element does not cause problems
		// Where outerHTML is undefined, this still works
		support.html5Clone = document.createElement("nav").cloneNode(true).outerHTML !== "<:nav></:nav>";

		// Check if a disconnected checkbox will retain its checked
		// value of true after appended to the DOM (IE6/7)
		input.type = "checkbox";
		input.checked = true;
		fragment.appendChild(input);
		support.appendChecked = input.checked;

		// Make sure textarea (and checkbox) defaultValue is properly cloned
		// Support: IE6-IE11+
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;

		// #11217 - WebKit loses check when the name is after the checked attribute
		fragment.appendChild(div);
		div.innerHTML = "<input type='radio' checked='checked' name='t'/>";

		// Support: Safari 5.1, iOS 5.1, Android 4.x, Android 2.3
		// old WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;

		// Support: IE<9
		// Opera does not clone events (and typeof div.attachEvent === undefined).
		// IE9-10 clones events bound via attachEvent, but they don't trigger with .click()
		support.noCloneEvent = true;
		if (div.attachEvent) {
			div.attachEvent("onclick", function () {
				support.noCloneEvent = false;
			});

			div.cloneNode(true).click();
		}

		// Execute the test only if not already executed in another module.
		if (support.deleteExpando == null) {
			// Support: IE<9
			support.deleteExpando = true;
			try {
				delete div.test;
			} catch (e) {
				support.deleteExpando = false;
			}
		}
	})();

	(function () {
		var i,
		    eventName,
		    div = document.createElement("div");

		// Support: IE<9 (lack submit/change bubble), Firefox 23+ (lack focusin event)
		for (i in { submit: true, change: true, focusin: true }) {
			eventName = "on" + i;

			if (!(support[i + "Bubbles"] = eventName in window)) {
				// Beware of CSP restrictions (https://developer.mozilla.org/en/Security/CSP)
				div.setAttribute(eventName, "t");
				support[i + "Bubbles"] = div.attributes[eventName].expando === false;
			}
		}

		// Null elements to avoid leaks in IE.
		div = null;
	})();

	var rformElems = /^(?:input|select|textarea)$/i,
	    rkeyEvent = /^key/,
	    rmouseEvent = /^(?:mouse|pointer|contextmenu)|click/,
	    rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	    rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;

	function returnTrue() {
		return true;
	}

	function returnFalse() {
		return false;
	}

	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch (err) {}
	}

	/*
  * Helper functions for managing events -- not part of the public interface.
  * Props to Dean Edwards' addEvent library for many of the ideas.
  */
	jQuery.event = {

		global: {},

		add: function add(elem, types, handler, data, selector) {
			var tmp,
			    events,
			    t,
			    handleObjIn,
			    special,
			    eventHandle,
			    handleObj,
			    handlers,
			    type,
			    namespaces,
			    origType,
			    elemData = jQuery._data(elem);

			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if (!elemData) {
				return;
			}

			// Caller can pass in an object of custom data in lieu of the handler
			if (handler.handler) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}

			// Make sure that the handler has a unique ID, used to find/remove it later
			if (!handler.guid) {
				handler.guid = jQuery.guid++;
			}

			// Init the element's event structure and main handler, if this is the first
			if (!(events = elemData.events)) {
				events = elemData.events = {};
			}
			if (!(eventHandle = elemData.handle)) {
				eventHandle = elemData.handle = function (e) {
					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return (typeof jQuery === "undefined" ? "undefined" : (0, _typeof3.default)(jQuery)) !== strundefined && (!e || jQuery.event.triggered !== e.type) ? jQuery.event.dispatch.apply(eventHandle.elem, arguments) : undefined;
				};
				// Add elem as a property of the handle fn to prevent a memory leak with IE non-native events
				eventHandle.elem = elem;
			}

			// Handle multiple events separated by a space
			types = (types || "").match(rnotwhite) || [""];
			t = types.length;
			while (t--) {
				tmp = rtypenamespace.exec(types[t]) || [];
				type = origType = tmp[1];
				namespaces = (tmp[2] || "").split(".").sort();

				// There *must* be a type, no attaching namespace-only handlers
				if (!type) {
					continue;
				}

				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[type] || {};

				// If selector defined, determine special event api type, otherwise given type
				type = (selector ? special.delegateType : special.bindType) || type;

				// Update special based on newly reset type
				special = jQuery.event.special[type] || {};

				// handleObj is passed to all event handlers
				handleObj = jQuery.extend({
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test(selector),
					namespace: namespaces.join(".")
				}, handleObjIn);

				// Init the event handler queue if we're the first
				if (!(handlers = events[type])) {
					handlers = events[type] = [];
					handlers.delegateCount = 0;

					// Only use addEventListener/attachEvent if the special events handler returns false
					if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
						// Bind the global event handler to the element
						if (elem.addEventListener) {
							elem.addEventListener(type, eventHandle, false);
						} else if (elem.attachEvent) {
							elem.attachEvent("on" + type, eventHandle);
						}
					}
				}

				if (special.add) {
					special.add.call(elem, handleObj);

					if (!handleObj.handler.guid) {
						handleObj.handler.guid = handler.guid;
					}
				}

				// Add to the element's handler list, delegates in front
				if (selector) {
					handlers.splice(handlers.delegateCount++, 0, handleObj);
				} else {
					handlers.push(handleObj);
				}

				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[type] = true;
			}

			// Nullify elem to prevent memory leaks in IE
			elem = null;
		},

		// Detach an event or set of events from an element
		remove: function remove(elem, types, handler, selector, mappedTypes) {
			var j,
			    handleObj,
			    tmp,
			    origCount,
			    t,
			    events,
			    special,
			    handlers,
			    type,
			    namespaces,
			    origType,
			    elemData = jQuery.hasData(elem) && jQuery._data(elem);

			if (!elemData || !(events = elemData.events)) {
				return;
			}

			// Once for each type.namespace in types; type may be omitted
			types = (types || "").match(rnotwhite) || [""];
			t = types.length;
			while (t--) {
				tmp = rtypenamespace.exec(types[t]) || [];
				type = origType = tmp[1];
				namespaces = (tmp[2] || "").split(".").sort();

				// Unbind all events (on this namespace, if provided) for the element
				if (!type) {
					for (type in events) {
						jQuery.event.remove(elem, type + types[t], handler, selector, true);
					}
					continue;
				}

				special = jQuery.event.special[type] || {};
				type = (selector ? special.delegateType : special.bindType) || type;
				handlers = events[type] || [];
				tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");

				// Remove matching events
				origCount = j = handlers.length;
				while (j--) {
					handleObj = handlers[j];

					if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
						handlers.splice(j, 1);

						if (handleObj.selector) {
							handlers.delegateCount--;
						}
						if (special.remove) {
							special.remove.call(elem, handleObj);
						}
					}
				}

				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if (origCount && !handlers.length) {
					if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
						jQuery.removeEvent(elem, type, elemData.handle);
					}

					delete events[type];
				}
			}

			// Remove the expando if it's no longer used
			if (jQuery.isEmptyObject(events)) {
				delete elemData.handle;

				// removeData also checks for emptiness and clears the expando if empty
				// so use it instead of delete
				jQuery._removeData(elem, "events");
			}
		},

		trigger: function trigger(event, data, elem, onlyHandlers) {
			var handle,
			    ontype,
			    cur,
			    bubbleType,
			    special,
			    tmp,
			    i,
			    eventPath = [elem || document],
			    type = hasOwn.call(event, "type") ? event.type : event,
			    namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];

			cur = tmp = elem = elem || document;

			// Don't do events on text and comment nodes
			if (elem.nodeType === 3 || elem.nodeType === 8) {
				return;
			}

			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if (rfocusMorph.test(type + jQuery.event.triggered)) {
				return;
			}

			if (type.indexOf(".") >= 0) {
				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split(".");
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf(":") < 0 && "on" + type;

			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[jQuery.expando] ? event : new jQuery.Event(type, (typeof event === "undefined" ? "undefined" : (0, _typeof3.default)(event)) === "object" && event);

			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join(".");
			event.namespace_re = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;

			// Clean up the event in case it is being reused
			event.result = undefined;
			if (!event.target) {
				event.target = elem;
			}

			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ? [event] : jQuery.makeArray(data, [event]);

			// Allow special events to draw outside the lines
			special = jQuery.event.special[type] || {};
			if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
				return;
			}

			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {

				bubbleType = special.delegateType || type;
				if (!rfocusMorph.test(bubbleType + type)) {
					cur = cur.parentNode;
				}
				for (; cur; cur = cur.parentNode) {
					eventPath.push(cur);
					tmp = cur;
				}

				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if (tmp === (elem.ownerDocument || document)) {
					eventPath.push(tmp.defaultView || tmp.parentWindow || window);
				}
			}

			// Fire handlers on the event path
			i = 0;
			while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {

				event.type = i > 1 ? bubbleType : special.bindType || type;

				// jQuery handler
				handle = (jQuery._data(cur, "events") || {})[event.type] && jQuery._data(cur, "handle");
				if (handle) {
					handle.apply(cur, data);
				}

				// Native handler
				handle = ontype && cur[ontype];
				if (handle && handle.apply && jQuery.acceptData(cur)) {
					event.result = handle.apply(cur, data);
					if (event.result === false) {
						event.preventDefault();
					}
				}
			}
			event.type = type;

			// If nobody prevented the default action, do it now
			if (!onlyHandlers && !event.isDefaultPrevented()) {

				if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && jQuery.acceptData(elem)) {

					// Call a native DOM method on the target with the same name name as the event.
					// Can't use an .isFunction() check here because IE6/7 fails that test.
					// Don't do default actions on window, that's where global variables be (#6170)
					if (ontype && elem[type] && !jQuery.isWindow(elem)) {

						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ontype];

						if (tmp) {
							elem[ontype] = null;
						}

						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						try {
							elem[type]();
						} catch (e) {
							// IE<9 dies on focus/blur to hidden element (#1486,#12518)
							// only reproducible on winXP IE8 native, not IE9 in IE8 mode
						}
						jQuery.event.triggered = undefined;

						if (tmp) {
							elem[ontype] = tmp;
						}
					}
				}
			}

			return event.result;
		},

		dispatch: function dispatch(event) {

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix(event);

			var i,
			    ret,
			    handleObj,
			    matched,
			    j,
			    handlerQueue = [],
			    args = _slice.call(arguments),
			    handlers = (jQuery._data(this, "events") || {})[event.type] || [],
			    special = jQuery.event.special[event.type] || {};

			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[0] = event;
			event.delegateTarget = this;

			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if (special.preDispatch && special.preDispatch.call(this, event) === false) {
				return;
			}

			// Determine handlers
			handlerQueue = jQuery.event.handlers.call(this, event, handlers);

			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
				event.currentTarget = matched.elem;

				j = 0;
				while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {

					// Triggered event must either 1) have no namespace, or
					// 2) have namespace(s) a subset or equal to those in the bound event (both can have no namespace).
					if (!event.namespace_re || event.namespace_re.test(handleObj.namespace)) {

						event.handleObj = handleObj;
						event.data = handleObj.data;

						ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);

						if (ret !== undefined) {
							if ((event.result = ret) === false) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}

			// Call the postDispatch hook for the mapped type
			if (special.postDispatch) {
				special.postDispatch.call(this, event);
			}

			return event.result;
		},

		handlers: function handlers(event, _handlers) {
			var sel,
			    handleObj,
			    matches,
			    i,
			    handlerQueue = [],
			    delegateCount = _handlers.delegateCount,
			    cur = event.target;

			// Find delegate handlers
			// Black-hole SVG <use> instance trees (#13180)
			// Avoid non-left-click bubbling in Firefox (#3861)
			if (delegateCount && cur.nodeType && (!event.button || event.type !== "click")) {

				/* jshint eqeqeq: false */
				for (; cur != this; cur = cur.parentNode || this) {
					/* jshint eqeqeq: true */

					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if (cur.nodeType === 1 && (cur.disabled !== true || event.type !== "click")) {
						matches = [];
						for (i = 0; i < delegateCount; i++) {
							handleObj = _handlers[i];

							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";

							if (matches[sel] === undefined) {
								matches[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) >= 0 : jQuery.find(sel, this, null, [cur]).length;
							}
							if (matches[sel]) {
								matches.push(handleObj);
							}
						}
						if (matches.length) {
							handlerQueue.push({ elem: cur, handlers: matches });
						}
					}
				}
			}

			// Add the remaining (directly-bound) handlers
			if (delegateCount < _handlers.length) {
				handlerQueue.push({ elem: this, handlers: _handlers.slice(delegateCount) });
			}

			return handlerQueue;
		},

		fix: function fix(event) {
			if (event[jQuery.expando]) {
				return event;
			}

			// Create a writable copy of the event object and normalize some properties
			var i,
			    prop,
			    copy,
			    type = event.type,
			    originalEvent = event,
			    fixHook = this.fixHooks[type];

			if (!fixHook) {
				this.fixHooks[type] = fixHook = rmouseEvent.test(type) ? this.mouseHooks : rkeyEvent.test(type) ? this.keyHooks : {};
			}
			copy = fixHook.props ? this.props.concat(fixHook.props) : this.props;

			event = new jQuery.Event(originalEvent);

			i = copy.length;
			while (i--) {
				prop = copy[i];
				event[prop] = originalEvent[prop];
			}

			// Support: IE<9
			// Fix target property (#1925)
			if (!event.target) {
				event.target = originalEvent.srcElement || document;
			}

			// Support: Chrome 23+, Safari?
			// Target should not be a text node (#504, #13143)
			if (event.target.nodeType === 3) {
				event.target = event.target.parentNode;
			}

			// Support: IE<9
			// For mouse/key events, metaKey==false if it's undefined (#3368, #11328)
			event.metaKey = !!event.metaKey;

			return fixHook.filter ? fixHook.filter(event, originalEvent) : event;
		},

		// Includes some event props shared by KeyEvent and MouseEvent
		props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),

		fixHooks: {},

		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function filter(event, original) {

				// Add which for key events
				if (event.which == null) {
					event.which = original.charCode != null ? original.charCode : original.keyCode;
				}

				return event;
			}
		},

		mouseHooks: {
			props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function filter(event, original) {
				var body,
				    eventDoc,
				    doc,
				    button = original.button,
				    fromElement = original.fromElement;

				// Calculate pageX/Y if missing and clientX/Y available
				if (event.pageX == null && original.clientX != null) {
					eventDoc = event.target.ownerDocument || document;
					doc = eventDoc.documentElement;
					body = eventDoc.body;

					event.pageX = original.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
					event.pageY = original.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
				}

				// Add relatedTarget, if necessary
				if (!event.relatedTarget && fromElement) {
					event.relatedTarget = fromElement === event.target ? original.toElement : fromElement;
				}

				// Add which for click: 1 === left; 2 === middle; 3 === right
				// Note: button is not normalized, so don't use it
				if (!event.which && button !== undefined) {
					event.which = button & 1 ? 1 : button & 2 ? 3 : button & 4 ? 2 : 0;
				}

				return event;
			}
		},

		special: {
			load: {
				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {
				// Fire native event if possible so blur/focus sequence is correct
				trigger: function trigger() {
					if (this !== safeActiveElement() && this.focus) {
						try {
							this.focus();
							return false;
						} catch (e) {
							// Support: IE<9
							// If we error on focus to hidden element (#1486, #12518),
							// let .trigger() run the handlers
						}
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function trigger() {
					if (this === safeActiveElement() && this.blur) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {
				// For checkbox, fire native event so checked state will be right
				trigger: function trigger() {
					if (jQuery.nodeName(this, "input") && this.type === "checkbox" && this.click) {
						this.click();
						return false;
					}
				},

				// For cross-browser consistency, don't fire native .click() on links
				_default: function _default(event) {
					return jQuery.nodeName(event.target, "a");
				}
			},

			beforeunload: {
				postDispatch: function postDispatch(event) {

					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if (event.result !== undefined && event.originalEvent) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		},

		simulate: function simulate(type, elem, event, bubble) {
			// Piggyback on a donor event to simulate a different one.
			// Fake originalEvent to avoid donor's stopPropagation, but if the
			// simulated event prevents default then we do the same on the donor.
			var e = jQuery.extend(new jQuery.Event(), event, {
				type: type,
				isSimulated: true,
				originalEvent: {}
			});
			if (bubble) {
				jQuery.event.trigger(e, null, elem);
			} else {
				jQuery.event.dispatch.call(elem, e);
			}
			if (e.isDefaultPrevented()) {
				event.preventDefault();
			}
		}
	};

	jQuery.removeEvent = document.removeEventListener ? function (elem, type, handle) {
		if (elem.removeEventListener) {
			elem.removeEventListener(type, handle, false);
		}
	} : function (elem, type, handle) {
		var name = "on" + type;

		if (elem.detachEvent) {

			// #8545, #7054, preventing memory leaks for custom events in IE6-8
			// detachEvent needed property on element, by name of that event, to properly expose it to GC
			if ((0, _typeof3.default)(elem[name]) === strundefined) {
				elem[name] = null;
			}

			elem.detachEvent(name, handle);
		}
	};

	jQuery.Event = function (src, props) {
		// Allow instantiation without the 'new' keyword
		if (!(this instanceof jQuery.Event)) {
			return new jQuery.Event(src, props);
		}

		// Event object
		if (src && src.type) {
			this.originalEvent = src;
			this.type = src.type;

			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined &&
			// Support: IE < 9, Android < 4.0
			src.returnValue === false ? returnTrue : returnFalse;

			// Event type
		} else {
			this.type = src;
		}

		// Put explicitly provided properties onto the event object
		if (props) {
			jQuery.extend(this, props);
		}

		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();

		// Mark it as fixed
		this[jQuery.expando] = true;
	};

	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,

		preventDefault: function preventDefault() {
			var e = this.originalEvent;

			this.isDefaultPrevented = returnTrue;
			if (!e) {
				return;
			}

			// If preventDefault exists, run it on the original event
			if (e.preventDefault) {
				e.preventDefault();

				// Support: IE
				// Otherwise set the returnValue property of the original event to false
			} else {
				e.returnValue = false;
			}
		},
		stopPropagation: function stopPropagation() {
			var e = this.originalEvent;

			this.isPropagationStopped = returnTrue;
			if (!e) {
				return;
			}
			// If stopPropagation exists, run it on the original event
			if (e.stopPropagation) {
				e.stopPropagation();
			}

			// Support: IE
			// Set the cancelBubble property of the original event to true
			e.cancelBubble = true;
		},
		stopImmediatePropagation: function stopImmediatePropagation() {
			var e = this.originalEvent;

			this.isImmediatePropagationStopped = returnTrue;

			if (e && e.stopImmediatePropagation) {
				e.stopImmediatePropagation();
			}

			this.stopPropagation();
		}
	};

	// Create mouseenter/leave events using mouseover/out and event-time checks
	jQuery.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function (orig, fix) {
		jQuery.event.special[orig] = {
			delegateType: fix,
			bindType: fix,

			handle: function handle(event) {
				var ret,
				    target = this,
				    related = event.relatedTarget,
				    handleObj = event.handleObj;

				// For mousenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if (!related || related !== target && !jQuery.contains(target, related)) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply(this, arguments);
					event.type = fix;
				}
				return ret;
			}
		};
	});

	// IE submit delegation
	if (!support.submitBubbles) {

		jQuery.event.special.submit = {
			setup: function setup() {
				// Only need this for delegated form submit events
				if (jQuery.nodeName(this, "form")) {
					return false;
				}

				// Lazy-add a submit handler when a descendant form may potentially be submitted
				jQuery.event.add(this, "click._submit keypress._submit", function (e) {
					// Node name check avoids a VML-related crash in IE (#9807)
					var elem = e.target,
					    form = jQuery.nodeName(elem, "input") || jQuery.nodeName(elem, "button") ? elem.form : undefined;
					if (form && !jQuery._data(form, "submitBubbles")) {
						jQuery.event.add(form, "submit._submit", function (event) {
							event._submit_bubble = true;
						});
						jQuery._data(form, "submitBubbles", true);
					}
				});
				// return undefined since we don't need an event listener
			},

			postDispatch: function postDispatch(event) {
				// If form was submitted by the user, bubble the event up the tree
				if (event._submit_bubble) {
					delete event._submit_bubble;
					if (this.parentNode && !event.isTrigger) {
						jQuery.event.simulate("submit", this.parentNode, event, true);
					}
				}
			},

			teardown: function teardown() {
				// Only need this for delegated form submit events
				if (jQuery.nodeName(this, "form")) {
					return false;
				}

				// Remove delegated handlers; cleanData eventually reaps submit handlers attached above
				jQuery.event.remove(this, "._submit");
			}
		};
	}

	// IE change delegation and checkbox/radio fix
	if (!support.changeBubbles) {

		jQuery.event.special.change = {

			setup: function setup() {

				if (rformElems.test(this.nodeName)) {
					// IE doesn't fire change on a check/radio until blur; trigger it on click
					// after a propertychange. Eat the blur-change in special.change.handle.
					// This still fires onchange a second time for check/radio after blur.
					if (this.type === "checkbox" || this.type === "radio") {
						jQuery.event.add(this, "propertychange._change", function (event) {
							if (event.originalEvent.propertyName === "checked") {
								this._just_changed = true;
							}
						});
						jQuery.event.add(this, "click._change", function (event) {
							if (this._just_changed && !event.isTrigger) {
								this._just_changed = false;
							}
							// Allow triggered, simulated change events (#11500)
							jQuery.event.simulate("change", this, event, true);
						});
					}
					return false;
				}
				// Delegated event; lazy-add a change handler on descendant inputs
				jQuery.event.add(this, "beforeactivate._change", function (e) {
					var elem = e.target;

					if (rformElems.test(elem.nodeName) && !jQuery._data(elem, "changeBubbles")) {
						jQuery.event.add(elem, "change._change", function (event) {
							if (this.parentNode && !event.isSimulated && !event.isTrigger) {
								jQuery.event.simulate("change", this.parentNode, event, true);
							}
						});
						jQuery._data(elem, "changeBubbles", true);
					}
				});
			},

			handle: function handle(event) {
				var elem = event.target;

				// Swallow native change events from checkbox/radio, we already triggered them above
				if (this !== elem || event.isSimulated || event.isTrigger || elem.type !== "radio" && elem.type !== "checkbox") {
					return event.handleObj.handler.apply(this, arguments);
				}
			},

			teardown: function teardown() {
				jQuery.event.remove(this, "._change");

				return !rformElems.test(this.nodeName);
			}
		};
	}

	// Create "bubbling" focus and blur events
	if (!support.focusinBubbles) {
		jQuery.each({ focus: "focusin", blur: "focusout" }, function (orig, fix) {

			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function handler(event) {
				jQuery.event.simulate(fix, event.target, jQuery.event.fix(event), true);
			};

			jQuery.event.special[fix] = {
				setup: function setup() {
					var doc = this.ownerDocument || this,
					    attaches = jQuery._data(doc, fix);

					if (!attaches) {
						doc.addEventListener(orig, handler, true);
					}
					jQuery._data(doc, fix, (attaches || 0) + 1);
				},
				teardown: function teardown() {
					var doc = this.ownerDocument || this,
					    attaches = jQuery._data(doc, fix) - 1;

					if (!attaches) {
						doc.removeEventListener(orig, handler, true);
						jQuery._removeData(doc, fix);
					} else {
						jQuery._data(doc, fix, attaches);
					}
				}
			};
		});
	}

	jQuery.fn.extend({

		on: function on(types, selector, data, fn, /*INTERNAL*/one) {
			var type, origFn;

			// Types can be a map of types/handlers
			if ((typeof types === "undefined" ? "undefined" : (0, _typeof3.default)(types)) === "object") {
				// ( types-Object, selector, data )
				if (typeof selector !== "string") {
					// ( types-Object, data )
					data = data || selector;
					selector = undefined;
				}
				for (type in types) {
					this.on(type, selector, data, types[type], one);
				}
				return this;
			}

			if (data == null && fn == null) {
				// ( types, fn )
				fn = selector;
				data = selector = undefined;
			} else if (fn == null) {
				if (typeof selector === "string") {
					// ( types, selector, fn )
					fn = data;
					data = undefined;
				} else {
					// ( types, data, fn )
					fn = data;
					data = selector;
					selector = undefined;
				}
			}
			if (fn === false) {
				fn = returnFalse;
			} else if (!fn) {
				return this;
			}

			if (one === 1) {
				origFn = fn;
				fn = function fn(event) {
					// Can use an empty set, since event contains the info
					jQuery().off(event);
					return origFn.apply(this, arguments);
				};
				// Use same guid so caller can remove using origFn
				fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
			}
			return this.each(function () {
				jQuery.event.add(this, types, fn, data, selector);
			});
		},
		one: function one(types, selector, data, fn) {
			return this.on(types, selector, data, fn, 1);
		},
		off: function off(types, selector, fn) {
			var handleObj, type;
			if (types && types.preventDefault && types.handleObj) {
				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
				return this;
			}
			if ((typeof types === "undefined" ? "undefined" : (0, _typeof3.default)(types)) === "object") {
				// ( types-object [, selector] )
				for (type in types) {
					this.off(type, selector, types[type]);
				}
				return this;
			}
			if (selector === false || typeof selector === "function") {
				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if (fn === false) {
				fn = returnFalse;
			}
			return this.each(function () {
				jQuery.event.remove(this, types, fn, selector);
			});
		},

		trigger: function trigger(type, data) {
			return this.each(function () {
				jQuery.event.trigger(type, data, this);
			});
		},
		triggerHandler: function triggerHandler(type, data) {
			var elem = this[0];
			if (elem) {
				return jQuery.event.trigger(type, data, elem, true);
			}
		}
	});

	function createSafeFragment(document) {
		var list = nodeNames.split("|"),
		    safeFrag = document.createDocumentFragment();

		if (safeFrag.createElement) {
			while (list.length) {
				safeFrag.createElement(list.pop());
			}
		}
		return safeFrag;
	}

	var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|" + "header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
	    rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g,
	    rnoshimcache = new RegExp("<(?:" + nodeNames + ")[\\s/>]", "i"),
	    rleadingWhitespace = /^\s+/,
	    rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
	    rtagName = /<([\w:]+)/,
	    rtbody = /<tbody/i,
	    rhtml = /<|&#?\w+;/,
	    rnoInnerhtml = /<(?:script|style|link)/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	    rscriptType = /^$|\/(?:java|ecma)script/i,
	    rscriptTypeMasked = /^true\/(.*)/,
	    rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,


	// We have to close these tags to support XHTML (#13200)
	wrapMap = {
		option: [1, "<select multiple='multiple'>", "</select>"],
		legend: [1, "<fieldset>", "</fieldset>"],
		area: [1, "<map>", "</map>"],
		param: [1, "<object>", "</object>"],
		thead: [1, "<table>", "</table>"],
		tr: [2, "<table><tbody>", "</tbody></table>"],
		col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
		td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],

		// IE6-8 can't serialize link, script, style, or any html5 (NoScope) tags,
		// unless wrapped in a div with non-breaking characters in front of it.
		_default: support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
	},
	    safeFragment = createSafeFragment(document),
	    fragmentDiv = safeFragment.appendChild(document.createElement("div"));

	wrapMap.optgroup = wrapMap.option;
	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;

	function getAll(context, tag) {
		var elems,
		    elem,
		    i = 0,
		    found = (0, _typeof3.default)(context.getElementsByTagName) !== strundefined ? context.getElementsByTagName(tag || "*") : (0, _typeof3.default)(context.querySelectorAll) !== strundefined ? context.querySelectorAll(tag || "*") : undefined;

		if (!found) {
			for (found = [], elems = context.childNodes || context; (elem = elems[i]) != null; i++) {
				if (!tag || jQuery.nodeName(elem, tag)) {
					found.push(elem);
				} else {
					jQuery.merge(found, getAll(elem, tag));
				}
			}
		}

		return tag === undefined || tag && jQuery.nodeName(context, tag) ? jQuery.merge([context], found) : found;
	}

	// Used in buildFragment, fixes the defaultChecked property
	function fixDefaultChecked(elem) {
		if (rcheckableType.test(elem.type)) {
			elem.defaultChecked = elem.checked;
		}
	}

	// Support: IE<8
	// Manipulating tables requires a tbody
	function manipulationTarget(elem, content) {
		return jQuery.nodeName(elem, "table") && jQuery.nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr") ? elem.getElementsByTagName("tbody")[0] || elem.appendChild(elem.ownerDocument.createElement("tbody")) : elem;
	}

	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript(elem) {
		elem.type = (jQuery.find.attr(elem, "type") !== null) + "/" + elem.type;
		return elem;
	}
	function restoreScript(elem) {
		var match = rscriptTypeMasked.exec(elem.type);
		if (match) {
			elem.type = match[1];
		} else {
			elem.removeAttribute("type");
		}
		return elem;
	}

	// Mark scripts as having already been evaluated
	function setGlobalEval(elems, refElements) {
		var elem,
		    i = 0;
		for (; (elem = elems[i]) != null; i++) {
			jQuery._data(elem, "globalEval", !refElements || jQuery._data(refElements[i], "globalEval"));
		}
	}

	function cloneCopyEvent(src, dest) {

		if (dest.nodeType !== 1 || !jQuery.hasData(src)) {
			return;
		}

		var type,
		    i,
		    l,
		    oldData = jQuery._data(src),
		    curData = jQuery._data(dest, oldData),
		    events = oldData.events;

		if (events) {
			delete curData.handle;
			curData.events = {};

			for (type in events) {
				for (i = 0, l = events[type].length; i < l; i++) {
					jQuery.event.add(dest, type, events[type][i]);
				}
			}
		}

		// make the cloned public data object a copy from the original
		if (curData.data) {
			curData.data = jQuery.extend({}, curData.data);
		}
	}

	function fixCloneNodeIssues(src, dest) {
		var nodeName, e, data;

		// We do not need to do anything for non-Elements
		if (dest.nodeType !== 1) {
			return;
		}

		nodeName = dest.nodeName.toLowerCase();

		// IE6-8 copies events bound via attachEvent when using cloneNode.
		if (!support.noCloneEvent && dest[jQuery.expando]) {
			data = jQuery._data(dest);

			for (e in data.events) {
				jQuery.removeEvent(dest, e, data.handle);
			}

			// Event data gets referenced instead of copied if the expando gets copied too
			dest.removeAttribute(jQuery.expando);
		}

		// IE blanks contents when cloning scripts, and tries to evaluate newly-set text
		if (nodeName === "script" && dest.text !== src.text) {
			disableScript(dest).text = src.text;
			restoreScript(dest);

			// IE6-10 improperly clones children of object elements using classid.
			// IE10 throws NoModificationAllowedError if parent is null, #12132.
		} else if (nodeName === "object") {
			if (dest.parentNode) {
				dest.outerHTML = src.outerHTML;
			}

			// This path appears unavoidable for IE9. When cloning an object
			// element in IE9, the outerHTML strategy above is not sufficient.
			// If the src has innerHTML and the destination does not,
			// copy the src.innerHTML into the dest.innerHTML. #10324
			if (support.html5Clone && src.innerHTML && !jQuery.trim(dest.innerHTML)) {
				dest.innerHTML = src.innerHTML;
			}
		} else if (nodeName === "input" && rcheckableType.test(src.type)) {
			// IE6-8 fails to persist the checked state of a cloned checkbox
			// or radio button. Worse, IE6-7 fail to give the cloned element
			// a checked appearance if the defaultChecked value isn't also set

			dest.defaultChecked = dest.checked = src.checked;

			// IE6-7 get confused and end up setting the value of a cloned
			// checkbox/radio button to an empty string instead of "on"
			if (dest.value !== src.value) {
				dest.value = src.value;
			}

			// IE6-8 fails to return the selected option to the default selected
			// state when cloning options
		} else if (nodeName === "option") {
			dest.defaultSelected = dest.selected = src.defaultSelected;

			// IE6-8 fails to set the defaultValue to the correct value when
			// cloning other types of input fields
		} else if (nodeName === "input" || nodeName === "textarea") {
			dest.defaultValue = src.defaultValue;
		}
	}

	jQuery.extend({
		clone: function clone(elem, dataAndEvents, deepDataAndEvents) {
			var destElements,
			    node,
			    clone,
			    i,
			    srcElements,
			    inPage = jQuery.contains(elem.ownerDocument, elem);

			if (support.html5Clone || jQuery.isXMLDoc(elem) || !rnoshimcache.test("<" + elem.nodeName + ">")) {
				clone = elem.cloneNode(true);

				// IE<=8 does not properly clone detached, unknown element nodes
			} else {
				fragmentDiv.innerHTML = elem.outerHTML;
				fragmentDiv.removeChild(clone = fragmentDiv.firstChild);
			}

			if ((!support.noCloneEvent || !support.noCloneChecked) && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {

				// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
				destElements = getAll(clone);
				srcElements = getAll(elem);

				// Fix all IE cloning issues
				for (i = 0; (node = srcElements[i]) != null; ++i) {
					// Ensure that the destination node is not null; Fixes #9587
					if (destElements[i]) {
						fixCloneNodeIssues(node, destElements[i]);
					}
				}
			}

			// Copy the events from the original to the clone
			if (dataAndEvents) {
				if (deepDataAndEvents) {
					srcElements = srcElements || getAll(elem);
					destElements = destElements || getAll(clone);

					for (i = 0; (node = srcElements[i]) != null; i++) {
						cloneCopyEvent(node, destElements[i]);
					}
				} else {
					cloneCopyEvent(elem, clone);
				}
			}

			// Preserve script evaluation history
			destElements = getAll(clone, "script");
			if (destElements.length > 0) {
				setGlobalEval(destElements, !inPage && getAll(elem, "script"));
			}

			destElements = srcElements = node = null;

			// Return the cloned set
			return clone;
		},

		buildFragment: function buildFragment(elems, context, scripts, selection) {
			var j,
			    elem,
			    contains,
			    tmp,
			    tag,
			    tbody,
			    wrap,
			    l = elems.length,


			// Ensure a safe fragment
			safe = createSafeFragment(context),
			    nodes = [],
			    i = 0;

			for (; i < l; i++) {
				elem = elems[i];

				if (elem || elem === 0) {

					// Add nodes directly
					if (jQuery.type(elem) === "object") {
						jQuery.merge(nodes, elem.nodeType ? [elem] : elem);

						// Convert non-html into a text node
					} else if (!rhtml.test(elem)) {
						nodes.push(context.createTextNode(elem));

						// Convert html into DOM nodes
					} else {
						tmp = tmp || safe.appendChild(context.createElement("div"));

						// Deserialize a standard representation
						tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
						wrap = wrapMap[tag] || wrapMap._default;

						tmp.innerHTML = wrap[1] + elem.replace(rxhtmlTag, "<$1></$2>") + wrap[2];

						// Descend through wrappers to the right content
						j = wrap[0];
						while (j--) {
							tmp = tmp.lastChild;
						}

						// Manually add leading whitespace removed by IE
						if (!support.leadingWhitespace && rleadingWhitespace.test(elem)) {
							nodes.push(context.createTextNode(rleadingWhitespace.exec(elem)[0]));
						}

						// Remove IE's autoinserted <tbody> from table fragments
						if (!support.tbody) {

							// String was a <table>, *may* have spurious <tbody>
							elem = tag === "table" && !rtbody.test(elem) ? tmp.firstChild :

							// String was a bare <thead> or <tfoot>
							wrap[1] === "<table>" && !rtbody.test(elem) ? tmp : 0;

							j = elem && elem.childNodes.length;
							while (j--) {
								if (jQuery.nodeName(tbody = elem.childNodes[j], "tbody") && !tbody.childNodes.length) {
									elem.removeChild(tbody);
								}
							}
						}

						jQuery.merge(nodes, tmp.childNodes);

						// Fix #12392 for WebKit and IE > 9
						tmp.textContent = "";

						// Fix #12392 for oldIE
						while (tmp.firstChild) {
							tmp.removeChild(tmp.firstChild);
						}

						// Remember the top-level container for proper cleanup
						tmp = safe.lastChild;
					}
				}
			}

			// Fix #11356: Clear elements from fragment
			if (tmp) {
				safe.removeChild(tmp);
			}

			// Reset defaultChecked for any radios and checkboxes
			// about to be appended to the DOM in IE 6/7 (#8060)
			if (!support.appendChecked) {
				jQuery.grep(getAll(nodes, "input"), fixDefaultChecked);
			}

			i = 0;
			while (elem = nodes[i++]) {

				// #4087 - If origin and destination elements are the same, and this is
				// that element, do not do anything
				if (selection && jQuery.inArray(elem, selection) !== -1) {
					continue;
				}

				contains = jQuery.contains(elem.ownerDocument, elem);

				// Append to fragment
				tmp = getAll(safe.appendChild(elem), "script");

				// Preserve script evaluation history
				if (contains) {
					setGlobalEval(tmp);
				}

				// Capture executables
				if (scripts) {
					j = 0;
					while (elem = tmp[j++]) {
						if (rscriptType.test(elem.type || "")) {
							scripts.push(elem);
						}
					}
				}
			}

			tmp = null;

			return safe;
		},

		cleanData: function cleanData(elems, /* internal */acceptData) {
			var elem,
			    type,
			    id,
			    data,
			    i = 0,
			    internalKey = jQuery.expando,
			    cache = jQuery.cache,
			    deleteExpando = support.deleteExpando,
			    special = jQuery.event.special;

			for (; (elem = elems[i]) != null; i++) {
				if (acceptData || jQuery.acceptData(elem)) {

					id = elem[internalKey];
					data = id && cache[id];

					if (data) {
						if (data.events) {
							for (type in data.events) {
								if (special[type]) {
									jQuery.event.remove(elem, type);

									// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent(elem, type, data.handle);
								}
							}
						}

						// Remove cache only if it was not already removed by jQuery.event.remove
						if (cache[id]) {

							delete cache[id];

							// IE does not allow us to delete expando properties from nodes,
							// nor does it have a removeAttribute function on Document nodes;
							// we must handle all of these cases
							if (deleteExpando) {
								delete elem[internalKey];
							} else if ((0, _typeof3.default)(elem.removeAttribute) !== strundefined) {
								elem.removeAttribute(internalKey);
							} else {
								elem[internalKey] = null;
							}

							deletedIds.push(id);
						}
					}
				}
			}
		}
	});

	jQuery.fn.extend({
		text: function text(value) {
			return access(this, function (value) {
				return value === undefined ? jQuery.text(this) : this.empty().append((this[0] && this[0].ownerDocument || document).createTextNode(value));
			}, null, value, arguments.length);
		},

		append: function append() {
			return this.domManip(arguments, function (elem) {
				if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
					var target = manipulationTarget(this, elem);
					target.appendChild(elem);
				}
			});
		},

		prepend: function prepend() {
			return this.domManip(arguments, function (elem) {
				if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
					var target = manipulationTarget(this, elem);
					target.insertBefore(elem, target.firstChild);
				}
			});
		},

		before: function before() {
			return this.domManip(arguments, function (elem) {
				if (this.parentNode) {
					this.parentNode.insertBefore(elem, this);
				}
			});
		},

		after: function after() {
			return this.domManip(arguments, function (elem) {
				if (this.parentNode) {
					this.parentNode.insertBefore(elem, this.nextSibling);
				}
			});
		},

		remove: function remove(selector, keepData /* Internal Use Only */) {
			var elem,
			    elems = selector ? jQuery.filter(selector, this) : this,
			    i = 0;

			for (; (elem = elems[i]) != null; i++) {

				if (!keepData && elem.nodeType === 1) {
					jQuery.cleanData(getAll(elem));
				}

				if (elem.parentNode) {
					if (keepData && jQuery.contains(elem.ownerDocument, elem)) {
						setGlobalEval(getAll(elem, "script"));
					}
					elem.parentNode.removeChild(elem);
				}
			}

			return this;
		},

		empty: function empty() {
			var elem,
			    i = 0;

			for (; (elem = this[i]) != null; i++) {
				// Remove element nodes and prevent memory leaks
				if (elem.nodeType === 1) {
					jQuery.cleanData(getAll(elem, false));
				}

				// Remove any remaining nodes
				while (elem.firstChild) {
					elem.removeChild(elem.firstChild);
				}

				// If this is a select, ensure that it displays empty (#12336)
				// Support: IE<9
				if (elem.options && jQuery.nodeName(elem, "select")) {
					elem.options.length = 0;
				}
			}

			return this;
		},

		clone: function clone(dataAndEvents, deepDataAndEvents) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

			return this.map(function () {
				return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
			});
		},

		html: function html(value) {
			return access(this, function (value) {
				var elem = this[0] || {},
				    i = 0,
				    l = this.length;

				if (value === undefined) {
					return elem.nodeType === 1 ? elem.innerHTML.replace(rinlinejQuery, "") : undefined;
				}

				// See if we can take a shortcut and just use innerHTML
				if (typeof value === "string" && !rnoInnerhtml.test(value) && (support.htmlSerialize || !rnoshimcache.test(value)) && (support.leadingWhitespace || !rleadingWhitespace.test(value)) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {

					value = value.replace(rxhtmlTag, "<$1></$2>");

					try {
						for (; i < l; i++) {
							// Remove element nodes and prevent memory leaks
							elem = this[i] || {};
							if (elem.nodeType === 1) {
								jQuery.cleanData(getAll(elem, false));
								elem.innerHTML = value;
							}
						}

						elem = 0;

						// If using innerHTML throws an exception, use the fallback method
					} catch (e) {}
				}

				if (elem) {
					this.empty().append(value);
				}
			}, null, value, arguments.length);
		},

		replaceWith: function replaceWith() {
			var arg = arguments[0];

			// Make the changes, replacing each context element with the new content
			this.domManip(arguments, function (elem) {
				arg = this.parentNode;

				jQuery.cleanData(getAll(this));

				if (arg) {
					arg.replaceChild(elem, this);
				}
			});

			// Force removal if there was no new content (e.g., from empty arguments)
			return arg && (arg.length || arg.nodeType) ? this : this.remove();
		},

		detach: function detach(selector) {
			return this.remove(selector, true);
		},

		domManip: function domManip(args, callback) {

			// Flatten any nested arrays
			args = concat.apply([], args);

			var first,
			    node,
			    hasScripts,
			    scripts,
			    doc,
			    fragment,
			    i = 0,
			    l = this.length,
			    set = this,
			    iNoClone = l - 1,
			    value = args[0],
			    isFunction = jQuery.isFunction(value);

			// We can't cloneNode fragments that contain checked, in WebKit
			if (isFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
				return this.each(function (index) {
					var self = set.eq(index);
					if (isFunction) {
						args[0] = value.call(this, index, self.html());
					}
					self.domManip(args, callback);
				});
			}

			if (l) {
				fragment = jQuery.buildFragment(args, this[0].ownerDocument, false, this);
				first = fragment.firstChild;

				if (fragment.childNodes.length === 1) {
					fragment = first;
				}

				if (first) {
					scripts = jQuery.map(getAll(fragment, "script"), disableScript);
					hasScripts = scripts.length;

					// Use the original fragment for the last item instead of the first because it can end up
					// being emptied incorrectly in certain situations (#8070).
					for (; i < l; i++) {
						node = fragment;

						if (i !== iNoClone) {
							node = jQuery.clone(node, true, true);

							// Keep references to cloned scripts for later restoration
							if (hasScripts) {
								jQuery.merge(scripts, getAll(node, "script"));
							}
						}

						callback.call(this[i], node, i);
					}

					if (hasScripts) {
						doc = scripts[scripts.length - 1].ownerDocument;

						// Reenable scripts
						jQuery.map(scripts, restoreScript);

						// Evaluate executable scripts on first document insertion
						for (i = 0; i < hasScripts; i++) {
							node = scripts[i];
							if (rscriptType.test(node.type || "") && !jQuery._data(node, "globalEval") && jQuery.contains(doc, node)) {

								if (node.src) {
									// Optional AJAX dependency, but won't run scripts if not present
									if (jQuery._evalUrl) {
										jQuery._evalUrl(node.src);
									}
								} else {
									jQuery.globalEval((node.text || node.textContent || node.innerHTML || "").replace(rcleanScript, ""));
								}
							}
						}
					}

					// Fix #11809: Avoid leaking memory
					fragment = first = null;
				}
			}

			return this;
		}
	});

	jQuery.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function (name, original) {
		jQuery.fn[name] = function (selector) {
			var elems,
			    i = 0,
			    ret = [],
			    insert = jQuery(selector),
			    last = insert.length - 1;

			for (; i <= last; i++) {
				elems = i === last ? this : this.clone(true);
				jQuery(insert[i])[original](elems);

				// Modern browsers can apply jQuery collections as arrays, but oldIE needs a .get()
				push.apply(ret, elems.get());
			}

			return this.pushStack(ret);
		};
	});

	var iframe,
	    elemdisplay = {};

	/**
  * Retrieve the actual display of a element
  * @param {String} name nodeName of the element
  * @param {Object} doc Document object
  */
	// Called only from within defaultDisplay
	function actualDisplay(name, doc) {
		var style,
		    elem = jQuery(doc.createElement(name)).appendTo(doc.body),


		// getDefaultComputedStyle might be reliably used only on attached element
		display = window.getDefaultComputedStyle && (style = window.getDefaultComputedStyle(elem[0])) ?

		// Use of this method is a temporary fix (more like optmization) until something better comes along,
		// since it was removed from specification and supported only in FF
		style.display : jQuery.css(elem[0], "display");

		// We don't have any data stored on the element,
		// so use "detach" method as fast way to get rid of the element
		elem.detach();

		return display;
	}

	/**
  * Try to determine the default display value of an element
  * @param {String} nodeName
  */
	function defaultDisplay(nodeName) {
		var doc = document,
		    display = elemdisplay[nodeName];

		if (!display) {
			display = actualDisplay(nodeName, doc);

			// If the simple way fails, read from inside an iframe
			if (display === "none" || !display) {

				// Use the already-created iframe if possible
				iframe = (iframe || jQuery("<iframe frameborder='0' width='0' height='0'/>")).appendTo(doc.documentElement);

				// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
				doc = (iframe[0].contentWindow || iframe[0].contentDocument).document;

				// Support: IE
				doc.write();
				doc.close();

				display = actualDisplay(nodeName, doc);
				iframe.detach();
			}

			// Store the correct default display
			elemdisplay[nodeName] = display;
		}

		return display;
	}

	(function () {
		var shrinkWrapBlocksVal;

		support.shrinkWrapBlocks = function () {
			if (shrinkWrapBlocksVal != null) {
				return shrinkWrapBlocksVal;
			}

			// Will be changed later if needed.
			shrinkWrapBlocksVal = false;

			// Minified: var b,c,d
			var div, body, container;

			body = document.getElementsByTagName("body")[0];
			if (!body || !body.style) {
				// Test fired too early or in an unsupported environment, exit.
				return;
			}

			// Setup
			div = document.createElement("div");
			container = document.createElement("div");
			container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
			body.appendChild(container).appendChild(div);

			// Support: IE6
			// Check if elements with layout shrink-wrap their children
			if ((0, _typeof3.default)(div.style.zoom) !== strundefined) {
				// Reset CSS: box-sizing; display; margin; border
				div.style.cssText =
				// Support: Firefox<29, Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" + "box-sizing:content-box;display:block;margin:0;border:0;" + "padding:1px;width:1px;zoom:1";
				div.appendChild(document.createElement("div")).style.width = "5px";
				shrinkWrapBlocksVal = div.offsetWidth !== 3;
			}

			body.removeChild(container);

			return shrinkWrapBlocksVal;
		};
	})();
	var rmargin = /^margin/;

	var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");

	var getStyles,
	    curCSS,
	    rposition = /^(top|right|bottom|left)$/;

	if (window.getComputedStyle) {
		getStyles = function getStyles(elem) {
			// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			if (elem.ownerDocument.defaultView.opener) {
				return elem.ownerDocument.defaultView.getComputedStyle(elem, null);
			}

			return window.getComputedStyle(elem, null);
		};

		curCSS = function curCSS(elem, name, computed) {
			var width,
			    minWidth,
			    maxWidth,
			    ret,
			    style = elem.style;

			computed = computed || getStyles(elem);

			// getPropertyValue is only needed for .css('filter') in IE9, see #12537
			ret = computed ? computed.getPropertyValue(name) || computed[name] : undefined;

			if (computed) {

				if (ret === "" && !jQuery.contains(elem.ownerDocument, elem)) {
					ret = jQuery.style(elem, name);
				}

				// A tribute to the "awesome hack by Dean Edwards"
				// Chrome < 17 and Safari 5.0 uses "computed value" instead of "used value" for margin-right
				// Safari 5.1.7 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
				// this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
				if (rnumnonpx.test(ret) && rmargin.test(name)) {

					// Remember the original values
					width = style.width;
					minWidth = style.minWidth;
					maxWidth = style.maxWidth;

					// Put in the new values to get a computed value out
					style.minWidth = style.maxWidth = style.width = ret;
					ret = computed.width;

					// Revert the changed values
					style.width = width;
					style.minWidth = minWidth;
					style.maxWidth = maxWidth;
				}
			}

			// Support: IE
			// IE returns zIndex value as an integer.
			return ret === undefined ? ret : ret + "";
		};
	} else if (document.documentElement.currentStyle) {
		getStyles = function getStyles(elem) {
			return elem.currentStyle;
		};

		curCSS = function curCSS(elem, name, computed) {
			var left,
			    rs,
			    rsLeft,
			    ret,
			    style = elem.style;

			computed = computed || getStyles(elem);
			ret = computed ? computed[name] : undefined;

			// Avoid setting ret to empty string here
			// so we don't default to auto
			if (ret == null && style && style[name]) {
				ret = style[name];
			}

			// From the awesome hack by Dean Edwards
			// http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291

			// If we're not dealing with a regular pixel number
			// but a number that has a weird ending, we need to convert it to pixels
			// but not position css attributes, as those are proportional to the parent element instead
			// and we can't measure the parent instead because it might trigger a "stacking dolls" problem
			if (rnumnonpx.test(ret) && !rposition.test(name)) {

				// Remember the original values
				left = style.left;
				rs = elem.runtimeStyle;
				rsLeft = rs && rs.left;

				// Put in the new values to get a computed value out
				if (rsLeft) {
					rs.left = elem.currentStyle.left;
				}
				style.left = name === "fontSize" ? "1em" : ret;
				ret = style.pixelLeft + "px";

				// Revert the changed values
				style.left = left;
				if (rsLeft) {
					rs.left = rsLeft;
				}
			}

			// Support: IE
			// IE returns zIndex value as an integer.
			return ret === undefined ? ret : ret + "" || "auto";
		};
	}

	function addGetHookIf(conditionFn, hookFn) {
		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function get() {
				var condition = conditionFn();

				if (condition == null) {
					// The test was not ready at this point; screw the hook this time
					// but check again when needed next time.
					return;
				}

				if (condition) {
					// Hook not needed (or it's not possible to use it due to missing dependency),
					// remove it.
					// Since there are no other hooks for marginRight, remove the whole object.
					delete this.get;
					return;
				}

				// Hook needed; redefine it so that the support test is not executed again.

				return (this.get = hookFn).apply(this, arguments);
			}
		};
	}

	(function () {
		// Minified: var b,c,d,e,f,g, h,i
		var div, style, a, pixelPositionVal, boxSizingReliableVal, reliableHiddenOffsetsVal, reliableMarginRightVal;

		// Setup
		div = document.createElement("div");
		div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
		a = div.getElementsByTagName("a")[0];
		style = a && a.style;

		// Finish early in limited (non-browser) environments
		if (!style) {
			return;
		}

		style.cssText = "float:left;opacity:.5";

		// Support: IE<9
		// Make sure that element opacity exists (as opposed to filter)
		support.opacity = style.opacity === "0.5";

		// Verify style float existence
		// (IE uses styleFloat instead of cssFloat)
		support.cssFloat = !!style.cssFloat;

		div.style.backgroundClip = "content-box";
		div.cloneNode(true).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";

		// Support: Firefox<29, Android 2.3
		// Vendor-prefix box-sizing
		support.boxSizing = style.boxSizing === "" || style.MozBoxSizing === "" || style.WebkitBoxSizing === "";

		jQuery.extend(support, {
			reliableHiddenOffsets: function reliableHiddenOffsets() {
				if (reliableHiddenOffsetsVal == null) {
					computeStyleTests();
				}
				return reliableHiddenOffsetsVal;
			},

			boxSizingReliable: function boxSizingReliable() {
				if (boxSizingReliableVal == null) {
					computeStyleTests();
				}
				return boxSizingReliableVal;
			},

			pixelPosition: function pixelPosition() {
				if (pixelPositionVal == null) {
					computeStyleTests();
				}
				return pixelPositionVal;
			},

			// Support: Android 2.3
			reliableMarginRight: function reliableMarginRight() {
				if (reliableMarginRightVal == null) {
					computeStyleTests();
				}
				return reliableMarginRightVal;
			}
		});

		function computeStyleTests() {
			// Minified: var b,c,d,j
			var div, body, container, contents;

			body = document.getElementsByTagName("body")[0];
			if (!body || !body.style) {
				// Test fired too early or in an unsupported environment, exit.
				return;
			}

			// Setup
			div = document.createElement("div");
			container = document.createElement("div");
			container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
			body.appendChild(container).appendChild(div);

			div.style.cssText =
			// Support: Firefox<29, Android 2.3
			// Vendor-prefix box-sizing
			"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;" + "box-sizing:border-box;display:block;margin-top:1%;top:1%;" + "border:1px;padding:1px;width:4px;position:absolute";

			// Support: IE<9
			// Assume reasonable values in the absence of getComputedStyle
			pixelPositionVal = boxSizingReliableVal = false;
			reliableMarginRightVal = true;

			// Check for getComputedStyle so that this code is not run in IE<9.
			if (window.getComputedStyle) {
				pixelPositionVal = (window.getComputedStyle(div, null) || {}).top !== "1%";
				boxSizingReliableVal = (window.getComputedStyle(div, null) || { width: "4px" }).width === "4px";

				// Support: Android 2.3
				// Div with explicit width and no margin-right incorrectly
				// gets computed margin-right based on width of container (#3333)
				// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
				contents = div.appendChild(document.createElement("div"));

				// Reset CSS: box-sizing; display; margin; border; padding
				contents.style.cssText = div.style.cssText =
				// Support: Firefox<29, Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" + "box-sizing:content-box;display:block;margin:0;border:0;padding:0";
				contents.style.marginRight = contents.style.width = "0";
				div.style.width = "1px";

				reliableMarginRightVal = !parseFloat((window.getComputedStyle(contents, null) || {}).marginRight);

				div.removeChild(contents);
			}

			// Support: IE8
			// Check if table cells still have offsetWidth/Height when they are set
			// to display:none and there are still other visible table cells in a
			// table row; if so, offsetWidth/Height are not reliable for use when
			// determining if an element has been hidden directly using
			// display:none (it is still safe to use offsets if a parent element is
			// hidden; don safety goggles and see bug #4512 for more information).
			div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
			contents = div.getElementsByTagName("td");
			contents[0].style.cssText = "margin:0;border:0;padding:0;display:none";
			reliableHiddenOffsetsVal = contents[0].offsetHeight === 0;
			if (reliableHiddenOffsetsVal) {
				contents[0].style.display = "";
				contents[1].style.display = "none";
				reliableHiddenOffsetsVal = contents[0].offsetHeight === 0;
			}

			body.removeChild(container);
		}
	})();

	// A method for quickly swapping in/out CSS properties to get correct calculations.
	jQuery.swap = function (elem, options, callback, args) {
		var ret,
		    name,
		    old = {};

		// Remember the old values, and insert the new ones
		for (name in options) {
			old[name] = elem.style[name];
			elem.style[name] = options[name];
		}

		ret = callback.apply(elem, args || []);

		// Revert the old values
		for (name in options) {
			elem.style[name] = old[name];
		}

		return ret;
	};

	var ralpha = /alpha\([^)]*\)/i,
	    ropacity = /opacity\s*=\s*([^)]*)/,


	// swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
	// see here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	    rnumsplit = new RegExp("^(" + pnum + ")(.*)$", "i"),
	    rrelNum = new RegExp("^([+-])=(" + pnum + ")", "i"),
	    cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	    cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},
	    cssPrefixes = ["Webkit", "O", "Moz", "ms"];

	// return a css property mapped to a potentially vendor prefixed property
	function vendorPropName(style, name) {

		// shortcut for names that are not vendor prefixed
		if (name in style) {
			return name;
		}

		// check for vendor prefixed names
		var capName = name.charAt(0).toUpperCase() + name.slice(1),
		    origName = name,
		    i = cssPrefixes.length;

		while (i--) {
			name = cssPrefixes[i] + capName;
			if (name in style) {
				return name;
			}
		}

		return origName;
	}

	function showHide(elements, show) {
		var display,
		    elem,
		    hidden,
		    values = [],
		    index = 0,
		    length = elements.length;

		for (; index < length; index++) {
			elem = elements[index];
			if (!elem.style) {
				continue;
			}

			values[index] = jQuery._data(elem, "olddisplay");
			display = elem.style.display;
			if (show) {
				// Reset the inline display of this element to learn if it is
				// being hidden by cascaded rules or not
				if (!values[index] && display === "none") {
					elem.style.display = "";
				}

				// Set elements which have been overridden with display: none
				// in a stylesheet to whatever the default browser style is
				// for such an element
				if (elem.style.display === "" && isHidden(elem)) {
					values[index] = jQuery._data(elem, "olddisplay", defaultDisplay(elem.nodeName));
				}
			} else {
				hidden = isHidden(elem);

				if (display && display !== "none" || !hidden) {
					jQuery._data(elem, "olddisplay", hidden ? display : jQuery.css(elem, "display"));
				}
			}
		}

		// Set the display of most of the elements in a second loop
		// to avoid the constant reflow
		for (index = 0; index < length; index++) {
			elem = elements[index];
			if (!elem.style) {
				continue;
			}
			if (!show || elem.style.display === "none" || elem.style.display === "") {
				elem.style.display = show ? values[index] || "" : "none";
			}
		}

		return elements;
	}

	function setPositiveNumber(elem, value, subtract) {
		var matches = rnumsplit.exec(value);
		return matches ?
		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max(0, matches[1] - (subtract || 0)) + (matches[2] || "px") : value;
	}

	function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
		var i = extra === (isBorderBox ? "border" : "content") ?
		// If we already have the right measurement, avoid augmentation
		4 :
		// Otherwise initialize for horizontal or vertical properties
		name === "width" ? 1 : 0,
		    val = 0;

		for (; i < 4; i += 2) {
			// both box models exclude margin, so add it if we want it
			if (extra === "margin") {
				val += jQuery.css(elem, extra + cssExpand[i], true, styles);
			}

			if (isBorderBox) {
				// border-box includes padding, so remove it if we want content
				if (extra === "content") {
					val -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
				}

				// at this point, extra isn't border nor margin, so remove border
				if (extra !== "margin") {
					val -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
				}
			} else {
				// at this point, extra isn't content, so add padding
				val += jQuery.css(elem, "padding" + cssExpand[i], true, styles);

				// at this point, extra isn't content nor padding, so add border
				if (extra !== "padding") {
					val += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
				}
			}
		}

		return val;
	}

	function getWidthOrHeight(elem, name, extra) {

		// Start with offset property, which is equivalent to the border-box value
		var valueIsBorderBox = true,
		    val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
		    styles = getStyles(elem),
		    isBorderBox = support.boxSizing && jQuery.css(elem, "boxSizing", false, styles) === "border-box";

		// some non-html elements return undefined for offsetWidth, so check for null/undefined
		// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
		// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
		if (val <= 0 || val == null) {
			// Fall back to computed then uncomputed css if necessary
			val = curCSS(elem, name, styles);
			if (val < 0 || val == null) {
				val = elem.style[name];
			}

			// Computed unit is not pixels. Stop here and return.
			if (rnumnonpx.test(val)) {
				return val;
			}

			// we need the check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox && (support.boxSizingReliable() || val === elem.style[name]);

			// Normalize "", auto, and prepare for extra
			val = parseFloat(val) || 0;
		}

		// use the active box-sizing model to add/subtract irrelevant styles
		return val + augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles) + "px";
	}

	jQuery.extend({
		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function get(elem, computed) {
					if (computed) {
						// We should always get a number back from opacity
						var ret = curCSS(elem, "opacity");
						return ret === "" ? "1" : ret;
					}
				}
			}
		},

		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},

		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
			// normalize float css property
			"float": support.cssFloat ? "cssFloat" : "styleFloat"
		},

		// Get and set the style property on a DOM Node
		style: function style(elem, name, value, extra) {
			// Don't set styles on text and comment nodes
			if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
				return;
			}

			// Make sure that we're working with the right name
			var ret,
			    type,
			    hooks,
			    origName = jQuery.camelCase(name),
			    style = elem.style;

			name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(style, origName));

			// gets hook for the prefixed version
			// followed by the unprefixed version
			hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];

			// Check if we're setting a value
			if (value !== undefined) {
				type = typeof value === "undefined" ? "undefined" : (0, _typeof3.default)(value);

				// convert relative number strings (+= or -=) to relative numbers. #7345
				if (type === "string" && (ret = rrelNum.exec(value))) {
					value = (ret[1] + 1) * ret[2] + parseFloat(jQuery.css(elem, name));
					// Fixes bug #9237
					type = "number";
				}

				// Make sure that null and NaN values aren't set. See: #7116
				if (value == null || value !== value) {
					return;
				}

				// If a number was passed in, add 'px' to the (except for certain CSS properties)
				if (type === "number" && !jQuery.cssNumber[origName]) {
					value += "px";
				}

				// Fixes #8908, it can be done more correctly by specifing setters in cssHooks,
				// but it would mean to define eight (for every problematic property) identical functions
				if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
					style[name] = "inherit";
				}

				// If a hook was provided, use that value, otherwise just set the specified value
				if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {

					// Support: IE
					// Swallow errors from 'invalid' CSS values (#5509)
					try {
						style[name] = value;
					} catch (e) {}
				}
			} else {
				// If a hook was provided get the non-computed value from there
				if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {
					return ret;
				}

				// Otherwise just get the value from the style object
				return style[name];
			}
		},

		css: function css(elem, name, extra, styles) {
			var num,
			    val,
			    hooks,
			    origName = jQuery.camelCase(name);

			// Make sure that we're working with the right name
			name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(elem.style, origName));

			// gets hook for the prefixed version
			// followed by the unprefixed version
			hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];

			// If a hook was provided get the computed value from there
			if (hooks && "get" in hooks) {
				val = hooks.get(elem, true, extra);
			}

			// Otherwise, if a way to get the computed value exists, use that
			if (val === undefined) {
				val = curCSS(elem, name, styles);
			}

			//convert "normal" to computed value
			if (val === "normal" && name in cssNormalTransform) {
				val = cssNormalTransform[name];
			}

			// Return, converting to number if forced or a qualifier was provided and val looks numeric
			if (extra === "" || extra) {
				num = parseFloat(val);
				return extra === true || jQuery.isNumeric(num) ? num || 0 : val;
			}
			return val;
		}
	});

	jQuery.each(["height", "width"], function (i, name) {
		jQuery.cssHooks[name] = {
			get: function get(elem, computed, extra) {
				if (computed) {
					// certain elements can have dimension info if we invisibly show them
					// however, it must have a current display style that would benefit from this
					return rdisplayswap.test(jQuery.css(elem, "display")) && elem.offsetWidth === 0 ? jQuery.swap(elem, cssShow, function () {
						return getWidthOrHeight(elem, name, extra);
					}) : getWidthOrHeight(elem, name, extra);
				}
			},

			set: function set(elem, value, extra) {
				var styles = extra && getStyles(elem);
				return setPositiveNumber(elem, value, extra ? augmentWidthOrHeight(elem, name, extra, support.boxSizing && jQuery.css(elem, "boxSizing", false, styles) === "border-box", styles) : 0);
			}
		};
	});

	if (!support.opacity) {
		jQuery.cssHooks.opacity = {
			get: function get(elem, computed) {
				// IE uses filters for opacity
				return ropacity.test((computed && elem.currentStyle ? elem.currentStyle.filter : elem.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : computed ? "1" : "";
			},

			set: function set(elem, value) {
				var style = elem.style,
				    currentStyle = elem.currentStyle,
				    opacity = jQuery.isNumeric(value) ? "alpha(opacity=" + value * 100 + ")" : "",
				    filter = currentStyle && currentStyle.filter || style.filter || "";

				// IE has trouble with opacity if it does not have layout
				// Force it by setting the zoom level
				style.zoom = 1;

				// if setting opacity to 1, and no other filters exist - attempt to remove filter attribute #6652
				// if value === "", then remove inline opacity #12685
				if ((value >= 1 || value === "") && jQuery.trim(filter.replace(ralpha, "")) === "" && style.removeAttribute) {

					// Setting style.filter to null, "" & " " still leave "filter:" in the cssText
					// if "filter:" is present at all, clearType is disabled, we want to avoid this
					// style.removeAttribute is IE Only, but so apparently is this code path...
					style.removeAttribute("filter");

					// if there is no filter style applied in a css rule or unset inline opacity, we are done
					if (value === "" || currentStyle && !currentStyle.filter) {
						return;
					}
				}

				// otherwise, set new filter values
				style.filter = ralpha.test(filter) ? filter.replace(ralpha, opacity) : filter + " " + opacity;
			}
		};
	}

	jQuery.cssHooks.marginRight = addGetHookIf(support.reliableMarginRight, function (elem, computed) {
		if (computed) {
			// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
			// Work around by temporarily setting element display to inline-block
			return jQuery.swap(elem, { "display": "inline-block" }, curCSS, [elem, "marginRight"]);
		}
	});

	// These hooks are used by animate to expand properties
	jQuery.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function (prefix, suffix) {
		jQuery.cssHooks[prefix + suffix] = {
			expand: function expand(value) {
				var i = 0,
				    expanded = {},


				// assumes a single number if not a string
				parts = typeof value === "string" ? value.split(" ") : [value];

				for (; i < 4; i++) {
					expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
				}

				return expanded;
			}
		};

		if (!rmargin.test(prefix)) {
			jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
		}
	});

	jQuery.fn.extend({
		css: function css(name, value) {
			return access(this, function (elem, name, value) {
				var styles,
				    len,
				    map = {},
				    i = 0;

				if (jQuery.isArray(name)) {
					styles = getStyles(elem);
					len = name.length;

					for (; i < len; i++) {
						map[name[i]] = jQuery.css(elem, name[i], false, styles);
					}

					return map;
				}

				return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
			}, name, value, arguments.length > 1);
		},
		show: function show() {
			return showHide(this, true);
		},
		hide: function hide() {
			return showHide(this);
		},
		toggle: function toggle(state) {
			if (typeof state === "boolean") {
				return state ? this.show() : this.hide();
			}

			return this.each(function () {
				if (isHidden(this)) {
					jQuery(this).show();
				} else {
					jQuery(this).hide();
				}
			});
		}
	});

	function Tween(elem, options, prop, end, easing) {
		return new Tween.prototype.init(elem, options, prop, end, easing);
	}
	jQuery.Tween = Tween;

	Tween.prototype = {
		constructor: Tween,
		init: function init(elem, options, prop, end, easing, unit) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || "swing";
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
		},
		cur: function cur() {
			var hooks = Tween.propHooks[this.prop];

			return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
		},
		run: function run(percent) {
			var eased,
			    hooks = Tween.propHooks[this.prop];

			if (this.options.duration) {
				this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
			} else {
				this.pos = eased = percent;
			}
			this.now = (this.end - this.start) * eased + this.start;

			if (this.options.step) {
				this.options.step.call(this.elem, this.now, this);
			}

			if (hooks && hooks.set) {
				hooks.set(this);
			} else {
				Tween.propHooks._default.set(this);
			}
			return this;
		}
	};

	Tween.prototype.init.prototype = Tween.prototype;

	Tween.propHooks = {
		_default: {
			get: function get(tween) {
				var result;

				if (tween.elem[tween.prop] != null && (!tween.elem.style || tween.elem.style[tween.prop] == null)) {
					return tween.elem[tween.prop];
				}

				// passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails
				// so, simple values such as "10px" are parsed to Float.
				// complex values such as "rotate(1rad)" are returned as is.
				result = jQuery.css(tween.elem, tween.prop, "");
				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function set(tween) {
				// use step hook for back compat - use cssHook if its there - use .style if its
				// available and use plain properties where available
				if (jQuery.fx.step[tween.prop]) {
					jQuery.fx.step[tween.prop](tween);
				} else if (tween.elem.style && (tween.elem.style[jQuery.cssProps[tween.prop]] != null || jQuery.cssHooks[tween.prop])) {
					jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
				} else {
					tween.elem[tween.prop] = tween.now;
				}
			}
		}
	};

	// Support: IE <=9
	// Panic based approach to setting things on disconnected nodes

	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function set(tween) {
			if (tween.elem.nodeType && tween.elem.parentNode) {
				tween.elem[tween.prop] = tween.now;
			}
		}
	};

	jQuery.easing = {
		linear: function linear(p) {
			return p;
		},
		swing: function swing(p) {
			return 0.5 - Math.cos(p * Math.PI) / 2;
		}
	};

	jQuery.fx = Tween.prototype.init;

	// Back Compat <1.8 extension point
	jQuery.fx.step = {};

	var fxNow,
	    timerId,
	    rfxtypes = /^(?:toggle|show|hide)$/,
	    rfxnum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i"),
	    rrun = /queueHooks$/,
	    animationPrefilters = [defaultPrefilter],
	    tweeners = {
		"*": [function (prop, value) {
			var tween = this.createTween(prop, value),
			    target = tween.cur(),
			    parts = rfxnum.exec(value),
			    unit = parts && parts[3] || (jQuery.cssNumber[prop] ? "" : "px"),


			// Starting value computation is required for potential unit mismatches
			start = (jQuery.cssNumber[prop] || unit !== "px" && +target) && rfxnum.exec(jQuery.css(tween.elem, prop)),
			    scale = 1,
			    maxIterations = 20;

			if (start && start[3] !== unit) {
				// Trust units reported by jQuery.css
				unit = unit || start[3];

				// Make sure we update the tween properties later on
				parts = parts || [];

				// Iteratively approximate from a nonzero starting point
				start = +target || 1;

				do {
					// If previous iteration zeroed out, double until we get *something*
					// Use a string for doubling factor so we don't accidentally see scale as unchanged below
					scale = scale || ".5";

					// Adjust and apply
					start = start / scale;
					jQuery.style(tween.elem, prop, start + unit);

					// Update scale, tolerating zero or NaN from tween.cur()
					// And breaking the loop if scale is unchanged or perfect, or if we've just had enough
				} while (scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations);
			}

			// Update tween properties
			if (parts) {
				start = tween.start = +start || +target || 0;
				tween.unit = unit;
				// If a +=/-= token was provided, we're doing a relative animation
				tween.end = parts[1] ? start + (parts[1] + 1) * parts[2] : +parts[2];
			}

			return tween;
		}]
	};

	// Animations created synchronously will run synchronously
	function createFxNow() {
		setTimeout(function () {
			fxNow = undefined;
		});
		return fxNow = jQuery.now();
	}

	// Generate parameters to create a standard animation
	function genFx(type, includeWidth) {
		var which,
		    attrs = { height: type },
		    i = 0;

		// if we include width, step value is 1 to do all cssExpand values,
		// if we don't include width, step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for (; i < 4; i += 2 - includeWidth) {
			which = cssExpand[i];
			attrs["margin" + which] = attrs["padding" + which] = type;
		}

		if (includeWidth) {
			attrs.opacity = attrs.width = type;
		}

		return attrs;
	}

	function createTween(value, prop, animation) {
		var tween,
		    collection = (tweeners[prop] || []).concat(tweeners["*"]),
		    index = 0,
		    length = collection.length;
		for (; index < length; index++) {
			if (tween = collection[index].call(animation, prop, value)) {

				// we're done with this property
				return tween;
			}
		}
	}

	function defaultPrefilter(elem, props, opts) {
		/* jshint validthis: true */
		var prop,
		    value,
		    toggle,
		    tween,
		    hooks,
		    oldfire,
		    display,
		    checkDisplay,
		    anim = this,
		    orig = {},
		    style = elem.style,
		    hidden = elem.nodeType && isHidden(elem),
		    dataShow = jQuery._data(elem, "fxshow");

		// handle queue: false promises
		if (!opts.queue) {
			hooks = jQuery._queueHooks(elem, "fx");
			if (hooks.unqueued == null) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function () {
					if (!hooks.unqueued) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;

			anim.always(function () {
				// doing this makes sure that the complete handler will be called
				// before this completes
				anim.always(function () {
					hooks.unqueued--;
					if (!jQuery.queue(elem, "fx").length) {
						hooks.empty.fire();
					}
				});
			});
		}

		// height/width overflow pass
		if (elem.nodeType === 1 && ("height" in props || "width" in props)) {
			// Make sure that nothing sneaks out
			// Record all 3 overflow attributes because IE does not
			// change the overflow attribute when overflowX and
			// overflowY are set to the same value
			opts.overflow = [style.overflow, style.overflowX, style.overflowY];

			// Set display property to inline-block for height/width
			// animations on inline elements that are having width/height animated
			display = jQuery.css(elem, "display");

			// Test default display if display is currently "none"
			checkDisplay = display === "none" ? jQuery._data(elem, "olddisplay") || defaultDisplay(elem.nodeName) : display;

			if (checkDisplay === "inline" && jQuery.css(elem, "float") === "none") {

				// inline-level elements accept inline-block;
				// block-level elements need to be inline with layout
				if (!support.inlineBlockNeedsLayout || defaultDisplay(elem.nodeName) === "inline") {
					style.display = "inline-block";
				} else {
					style.zoom = 1;
				}
			}
		}

		if (opts.overflow) {
			style.overflow = "hidden";
			if (!support.shrinkWrapBlocks()) {
				anim.always(function () {
					style.overflow = opts.overflow[0];
					style.overflowX = opts.overflow[1];
					style.overflowY = opts.overflow[2];
				});
			}
		}

		// show/hide pass
		for (prop in props) {
			value = props[prop];
			if (rfxtypes.exec(value)) {
				delete props[prop];
				toggle = toggle || value === "toggle";
				if (value === (hidden ? "hide" : "show")) {

					// If there is dataShow left over from a stopped hide or show and we are going to proceed with show, we should pretend to be hidden
					if (value === "show" && dataShow && dataShow[prop] !== undefined) {
						hidden = true;
					} else {
						continue;
					}
				}
				orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);

				// Any non-fx value stops us from restoring the original display value
			} else {
				display = undefined;
			}
		}

		if (!jQuery.isEmptyObject(orig)) {
			if (dataShow) {
				if ("hidden" in dataShow) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = jQuery._data(elem, "fxshow", {});
			}

			// store state if its toggle - enables .stop().toggle() to "reverse"
			if (toggle) {
				dataShow.hidden = !hidden;
			}
			if (hidden) {
				jQuery(elem).show();
			} else {
				anim.done(function () {
					jQuery(elem).hide();
				});
			}
			anim.done(function () {
				var prop;
				jQuery._removeData(elem, "fxshow");
				for (prop in orig) {
					jQuery.style(elem, prop, orig[prop]);
				}
			});
			for (prop in orig) {
				tween = createTween(hidden ? dataShow[prop] : 0, prop, anim);

				if (!(prop in dataShow)) {
					dataShow[prop] = tween.start;
					if (hidden) {
						tween.end = tween.start;
						tween.start = prop === "width" || prop === "height" ? 1 : 0;
					}
				}
			}

			// If this is a noop like .hide().hide(), restore an overwritten display value
		} else if ((display === "none" ? defaultDisplay(elem.nodeName) : display) === "inline") {
			style.display = display;
		}
	}

	function propFilter(props, specialEasing) {
		var index, name, easing, value, hooks;

		// camelCase, specialEasing and expand cssHook pass
		for (index in props) {
			name = jQuery.camelCase(index);
			easing = specialEasing[name];
			value = props[index];
			if (jQuery.isArray(value)) {
				easing = value[1];
				value = props[index] = value[0];
			}

			if (index !== name) {
				props[name] = value;
				delete props[index];
			}

			hooks = jQuery.cssHooks[name];
			if (hooks && "expand" in hooks) {
				value = hooks.expand(value);
				delete props[name];

				// not quite $.extend, this wont overwrite keys already present.
				// also - reusing 'index' from above because we have the correct "name"
				for (index in value) {
					if (!(index in props)) {
						props[index] = value[index];
						specialEasing[index] = easing;
					}
				}
			} else {
				specialEasing[name] = easing;
			}
		}
	}

	function Animation(elem, properties, options) {
		var result,
		    stopped,
		    index = 0,
		    length = animationPrefilters.length,
		    deferred = jQuery.Deferred().always(function () {
			// don't match elem in the :animated selector
			delete tick.elem;
		}),
		    tick = function tick() {
			if (stopped) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
			    remaining = Math.max(0, animation.startTime + animation.duration - currentTime),

			// archaic crash bug won't allow us to use 1 - ( 0.5 || 0 ) (#12497)
			temp = remaining / animation.duration || 0,
			    percent = 1 - temp,
			    index = 0,
			    length = animation.tweens.length;

			for (; index < length; index++) {
				animation.tweens[index].run(percent);
			}

			deferred.notifyWith(elem, [animation, percent, remaining]);

			if (percent < 1 && length) {
				return remaining;
			} else {
				deferred.resolveWith(elem, [animation]);
				return false;
			}
		},
		    animation = deferred.promise({
			elem: elem,
			props: jQuery.extend({}, properties),
			opts: jQuery.extend(true, { specialEasing: {} }, options),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function createTween(prop, end) {
				var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
				animation.tweens.push(tween);
				return tween;
			},
			stop: function stop(gotoEnd) {
				var index = 0,

				// if we are going to the end, we want to run all the tweens
				// otherwise we skip this part
				length = gotoEnd ? animation.tweens.length : 0;
				if (stopped) {
					return this;
				}
				stopped = true;
				for (; index < length; index++) {
					animation.tweens[index].run(1);
				}

				// resolve when we played the last frame
				// otherwise, reject
				if (gotoEnd) {
					deferred.resolveWith(elem, [animation, gotoEnd]);
				} else {
					deferred.rejectWith(elem, [animation, gotoEnd]);
				}
				return this;
			}
		}),
		    props = animation.props;

		propFilter(props, animation.opts.specialEasing);

		for (; index < length; index++) {
			result = animationPrefilters[index].call(animation, elem, props, animation.opts);
			if (result) {
				return result;
			}
		}

		jQuery.map(props, createTween, animation);

		if (jQuery.isFunction(animation.opts.start)) {
			animation.opts.start.call(elem, animation);
		}

		jQuery.fx.timer(jQuery.extend(tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		}));

		// attach callbacks from options
		return animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
	}

	jQuery.Animation = jQuery.extend(Animation, {
		tweener: function tweener(props, callback) {
			if (jQuery.isFunction(props)) {
				callback = props;
				props = ["*"];
			} else {
				props = props.split(" ");
			}

			var prop,
			    index = 0,
			    length = props.length;

			for (; index < length; index++) {
				prop = props[index];
				tweeners[prop] = tweeners[prop] || [];
				tweeners[prop].unshift(callback);
			}
		},

		prefilter: function prefilter(callback, prepend) {
			if (prepend) {
				animationPrefilters.unshift(callback);
			} else {
				animationPrefilters.push(callback);
			}
		}
	});

	jQuery.speed = function (speed, easing, fn) {
		var opt = speed && (typeof speed === "undefined" ? "undefined" : (0, _typeof3.default)(speed)) === "object" ? jQuery.extend({}, speed) : {
			complete: fn || !fn && easing || jQuery.isFunction(speed) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction(easing) && easing
		};

		opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration : opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[opt.duration] : jQuery.fx.speeds._default;

		// normalize opt.queue - true/undefined/null -> "fx"
		if (opt.queue == null || opt.queue === true) {
			opt.queue = "fx";
		}

		// Queueing
		opt.old = opt.complete;

		opt.complete = function () {
			if (jQuery.isFunction(opt.old)) {
				opt.old.call(this);
			}

			if (opt.queue) {
				jQuery.dequeue(this, opt.queue);
			}
		};

		return opt;
	};

	jQuery.fn.extend({
		fadeTo: function fadeTo(speed, to, easing, callback) {

			// show any hidden elements after setting opacity to 0
			return this.filter(isHidden).css("opacity", 0).show()

			// animate to the value specified
			.end().animate({ opacity: to }, speed, easing, callback);
		},
		animate: function animate(prop, speed, easing, callback) {
			var empty = jQuery.isEmptyObject(prop),
			    optall = jQuery.speed(speed, easing, callback),
			    doAnimation = function doAnimation() {
				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation(this, jQuery.extend({}, prop), optall);

				// Empty animations, or finishing resolves immediately
				if (empty || jQuery._data(this, "finish")) {
					anim.stop(true);
				}
			};
			doAnimation.finish = doAnimation;

			return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
		},
		stop: function stop(type, clearQueue, gotoEnd) {
			var stopQueue = function stopQueue(hooks) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop(gotoEnd);
			};

			if (typeof type !== "string") {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if (clearQueue && type !== false) {
				this.queue(type || "fx", []);
			}

			return this.each(function () {
				var dequeue = true,
				    index = type != null && type + "queueHooks",
				    timers = jQuery.timers,
				    data = jQuery._data(this);

				if (index) {
					if (data[index] && data[index].stop) {
						stopQueue(data[index]);
					}
				} else {
					for (index in data) {
						if (data[index] && data[index].stop && rrun.test(index)) {
							stopQueue(data[index]);
						}
					}
				}

				for (index = timers.length; index--;) {
					if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
						timers[index].anim.stop(gotoEnd);
						dequeue = false;
						timers.splice(index, 1);
					}
				}

				// start the next in the queue if the last step wasn't forced
				// timers currently will call their complete callbacks, which will dequeue
				// but only if they were gotoEnd
				if (dequeue || !gotoEnd) {
					jQuery.dequeue(this, type);
				}
			});
		},
		finish: function finish(type) {
			if (type !== false) {
				type = type || "fx";
			}
			return this.each(function () {
				var index,
				    data = jQuery._data(this),
				    queue = data[type + "queue"],
				    hooks = data[type + "queueHooks"],
				    timers = jQuery.timers,
				    length = queue ? queue.length : 0;

				// enable finishing flag on private data
				data.finish = true;

				// empty the queue first
				jQuery.queue(this, type, []);

				if (hooks && hooks.stop) {
					hooks.stop.call(this, true);
				}

				// look for any active animations, and finish them
				for (index = timers.length; index--;) {
					if (timers[index].elem === this && timers[index].queue === type) {
						timers[index].anim.stop(true);
						timers.splice(index, 1);
					}
				}

				// look for any animations in the old queue and finish them
				for (index = 0; index < length; index++) {
					if (queue[index] && queue[index].finish) {
						queue[index].finish.call(this);
					}
				}

				// turn off finishing flag
				delete data.finish;
			});
		}
	});

	jQuery.each(["toggle", "show", "hide"], function (i, name) {
		var cssFn = jQuery.fn[name];
		jQuery.fn[name] = function (speed, easing, callback) {
			return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
		};
	});

	// Generate shortcuts for custom animations
	jQuery.each({
		slideDown: genFx("show"),
		slideUp: genFx("hide"),
		slideToggle: genFx("toggle"),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function (name, props) {
		jQuery.fn[name] = function (speed, easing, callback) {
			return this.animate(props, speed, easing, callback);
		};
	});

	jQuery.timers = [];
	jQuery.fx.tick = function () {
		var timer,
		    timers = jQuery.timers,
		    i = 0;

		fxNow = jQuery.now();

		for (; i < timers.length; i++) {
			timer = timers[i];
			// Checks the timer has not already been removed
			if (!timer() && timers[i] === timer) {
				timers.splice(i--, 1);
			}
		}

		if (!timers.length) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};

	jQuery.fx.timer = function (timer) {
		jQuery.timers.push(timer);
		if (timer()) {
			jQuery.fx.start();
		} else {
			jQuery.timers.pop();
		}
	};

	jQuery.fx.interval = 13;

	jQuery.fx.start = function () {
		if (!timerId) {
			timerId = setInterval(jQuery.fx.tick, jQuery.fx.interval);
		}
	};

	jQuery.fx.stop = function () {
		clearInterval(timerId);
		timerId = null;
	};

	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,
		// Default speed
		_default: 400
	};

	// Based off of the plugin by Clint Helfers, with permission.
	// http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function (time, type) {
		time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
		type = type || "fx";

		return this.queue(type, function (next, hooks) {
			var timeout = setTimeout(next, time);
			hooks.stop = function () {
				clearTimeout(timeout);
			};
		});
	};

	(function () {
		// Minified: var a,b,c,d,e
		var input, div, select, a, opt;

		// Setup
		div = document.createElement("div");
		div.setAttribute("className", "t");
		div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
		a = div.getElementsByTagName("a")[0];

		// First batch of tests.
		select = document.createElement("select");
		opt = select.appendChild(document.createElement("option"));
		input = div.getElementsByTagName("input")[0];

		a.style.cssText = "top:1px";

		// Test setAttribute on camelCase class. If it works, we need attrFixes when doing get/setAttribute (ie6/7)
		support.getSetAttribute = div.className !== "t";

		// Get the style information from getAttribute
		// (IE uses .cssText instead)
		support.style = /top/.test(a.getAttribute("style"));

		// Make sure that URLs aren't manipulated
		// (IE normalizes it by default)
		support.hrefNormalized = a.getAttribute("href") === "/a";

		// Check the default checkbox/radio value ("" on WebKit; "on" elsewhere)
		support.checkOn = !!input.value;

		// Make sure that a selected-by-default option has a working selected property.
		// (WebKit defaults to false instead of true, IE too, if it's in an optgroup)
		support.optSelected = opt.selected;

		// Tests for enctype support on a form (#6743)
		support.enctype = !!document.createElement("form").enctype;

		// Make sure that the options inside disabled selects aren't marked as disabled
		// (WebKit marks them as disabled)
		select.disabled = true;
		support.optDisabled = !opt.disabled;

		// Support: IE8 only
		// Check if we can trust getAttribute("value")
		input = document.createElement("input");
		input.setAttribute("value", "");
		support.input = input.getAttribute("value") === "";

		// Check if an input maintains its value after becoming a radio
		input.value = "t";
		input.setAttribute("type", "radio");
		support.radioValue = input.value === "t";
	})();

	var rreturn = /\r/g;

	jQuery.fn.extend({
		val: function val(value) {
			var hooks,
			    ret,
			    isFunction,
			    elem = this[0];

			if (!arguments.length) {
				if (elem) {
					hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];

					if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
						return ret;
					}

					ret = elem.value;

					return typeof ret === "string" ?
					// handle most common string cases
					ret.replace(rreturn, "") :
					// handle cases where value is null/undef or number
					ret == null ? "" : ret;
				}

				return;
			}

			isFunction = jQuery.isFunction(value);

			return this.each(function (i) {
				var val;

				if (this.nodeType !== 1) {
					return;
				}

				if (isFunction) {
					val = value.call(this, i, jQuery(this).val());
				} else {
					val = value;
				}

				// Treat null/undefined as ""; convert numbers to string
				if (val == null) {
					val = "";
				} else if (typeof val === "number") {
					val += "";
				} else if (jQuery.isArray(val)) {
					val = jQuery.map(val, function (value) {
						return value == null ? "" : value + "";
					});
				}

				hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];

				// If set returns undefined, fall back to normal setting
				if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
					this.value = val;
				}
			});
		}
	});

	jQuery.extend({
		valHooks: {
			option: {
				get: function get(elem) {
					var val = jQuery.find.attr(elem, "value");
					return val != null ? val :
					// Support: IE10-11+
					// option.text throws exceptions (#14686, #14858)
					jQuery.trim(jQuery.text(elem));
				}
			},
			select: {
				get: function get(elem) {
					var value,
					    option,
					    options = elem.options,
					    index = elem.selectedIndex,
					    one = elem.type === "select-one" || index < 0,
					    values = one ? null : [],
					    max = one ? index + 1 : options.length,
					    i = index < 0 ? max : one ? index : 0;

					// Loop through all the selected options
					for (; i < max; i++) {
						option = options[i];

						// oldIE doesn't update selected after form reset (#2551)
						if ((option.selected || i === index) && (
						// Don't return options that are disabled or in a disabled optgroup
						support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null) && (!option.parentNode.disabled || !jQuery.nodeName(option.parentNode, "optgroup"))) {

							// Get the specific value for the option
							value = jQuery(option).val();

							// We don't need an array for one selects
							if (one) {
								return value;
							}

							// Multi-Selects return an array
							values.push(value);
						}
					}

					return values;
				},

				set: function set(elem, value) {
					var optionSet,
					    option,
					    options = elem.options,
					    values = jQuery.makeArray(value),
					    i = options.length;

					while (i--) {
						option = options[i];

						if (jQuery.inArray(jQuery.valHooks.option.get(option), values) >= 0) {

							// Support: IE6
							// When new option element is added to select box we need to
							// force reflow of newly added node in order to workaround delay
							// of initialization properties
							try {
								option.selected = optionSet = true;
							} catch (_) {

								// Will be executed only in IE6
								option.scrollHeight;
							}
						} else {
							option.selected = false;
						}
					}

					// Force browsers to behave consistently when non-matching value is set
					if (!optionSet) {
						elem.selectedIndex = -1;
					}

					return options;
				}
			}
		}
	});

	// Radios and checkboxes getter/setter
	jQuery.each(["radio", "checkbox"], function () {
		jQuery.valHooks[this] = {
			set: function set(elem, value) {
				if (jQuery.isArray(value)) {
					return elem.checked = jQuery.inArray(jQuery(elem).val(), value) >= 0;
				}
			}
		};
		if (!support.checkOn) {
			jQuery.valHooks[this].get = function (elem) {
				// Support: Webkit
				// "" is returned instead of "on" if a value isn't specified
				return elem.getAttribute("value") === null ? "on" : elem.value;
			};
		}
	});

	var nodeHook,
	    boolHook,
	    attrHandle = jQuery.expr.attrHandle,
	    ruseDefault = /^(?:checked|selected)$/i,
	    getSetAttribute = support.getSetAttribute,
	    getSetInput = support.input;

	jQuery.fn.extend({
		attr: function attr(name, value) {
			return access(this, jQuery.attr, name, value, arguments.length > 1);
		},

		removeAttr: function removeAttr(name) {
			return this.each(function () {
				jQuery.removeAttr(this, name);
			});
		}
	});

	jQuery.extend({
		attr: function attr(elem, name, value) {
			var hooks,
			    ret,
			    nType = elem.nodeType;

			// don't get/set attributes on text, comment and attribute nodes
			if (!elem || nType === 3 || nType === 8 || nType === 2) {
				return;
			}

			// Fallback to prop when attributes are not supported
			if ((0, _typeof3.default)(elem.getAttribute) === strundefined) {
				return jQuery.prop(elem, name, value);
			}

			// All attributes are lowercase
			// Grab necessary hook if one is defined
			if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
				name = name.toLowerCase();
				hooks = jQuery.attrHooks[name] || (jQuery.expr.match.bool.test(name) ? boolHook : nodeHook);
			}

			if (value !== undefined) {

				if (value === null) {
					jQuery.removeAttr(elem, name);
				} else if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
					return ret;
				} else {
					elem.setAttribute(name, value + "");
					return value;
				}
			} else if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
				return ret;
			} else {
				ret = jQuery.find.attr(elem, name);

				// Non-existent attributes return null, we normalize to undefined
				return ret == null ? undefined : ret;
			}
		},

		removeAttr: function removeAttr(elem, value) {
			var name,
			    propName,
			    i = 0,
			    attrNames = value && value.match(rnotwhite);

			if (attrNames && elem.nodeType === 1) {
				while (name = attrNames[i++]) {
					propName = jQuery.propFix[name] || name;

					// Boolean attributes get special treatment (#10870)
					if (jQuery.expr.match.bool.test(name)) {
						// Set corresponding property to false
						if (getSetInput && getSetAttribute || !ruseDefault.test(name)) {
							elem[propName] = false;
							// Support: IE<9
							// Also clear defaultChecked/defaultSelected (if appropriate)
						} else {
							elem[jQuery.camelCase("default-" + name)] = elem[propName] = false;
						}

						// See #9699 for explanation of this approach (setting first, then removal)
					} else {
						jQuery.attr(elem, name, "");
					}

					elem.removeAttribute(getSetAttribute ? name : propName);
				}
			}
		},

		attrHooks: {
			type: {
				set: function set(elem, value) {
					if (!support.radioValue && value === "radio" && jQuery.nodeName(elem, "input")) {
						// Setting the type on a radio button after the value resets the value in IE6-9
						// Reset value to default in case type is set after value during creation
						var val = elem.value;
						elem.setAttribute("type", value);
						if (val) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		}
	});

	// Hook for boolean attributes
	boolHook = {
		set: function set(elem, value, name) {
			if (value === false) {
				// Remove boolean attributes when set to false
				jQuery.removeAttr(elem, name);
			} else if (getSetInput && getSetAttribute || !ruseDefault.test(name)) {
				// IE<8 needs the *property* name
				elem.setAttribute(!getSetAttribute && jQuery.propFix[name] || name, name);

				// Use defaultChecked and defaultSelected for oldIE
			} else {
				elem[jQuery.camelCase("default-" + name)] = elem[name] = true;
			}

			return name;
		}
	};

	// Retrieve booleans specially
	jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function (i, name) {

		var getter = attrHandle[name] || jQuery.find.attr;

		attrHandle[name] = getSetInput && getSetAttribute || !ruseDefault.test(name) ? function (elem, name, isXML) {
			var ret, handle;
			if (!isXML) {
				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[name];
				attrHandle[name] = ret;
				ret = getter(elem, name, isXML) != null ? name.toLowerCase() : null;
				attrHandle[name] = handle;
			}
			return ret;
		} : function (elem, name, isXML) {
			if (!isXML) {
				return elem[jQuery.camelCase("default-" + name)] ? name.toLowerCase() : null;
			}
		};
	});

	// fix oldIE attroperties
	if (!getSetInput || !getSetAttribute) {
		jQuery.attrHooks.value = {
			set: function set(elem, value, name) {
				if (jQuery.nodeName(elem, "input")) {
					// Does not return so that setAttribute is also used
					elem.defaultValue = value;
				} else {
					// Use nodeHook if defined (#1954); otherwise setAttribute is fine
					return nodeHook && nodeHook.set(elem, value, name);
				}
			}
		};
	}

	// IE6/7 do not support getting/setting some attributes with get/setAttribute
	if (!getSetAttribute) {

		// Use this for any attribute in IE6/7
		// This fixes almost every IE6/7 issue
		nodeHook = {
			set: function set(elem, value, name) {
				// Set the existing or create a new attribute node
				var ret = elem.getAttributeNode(name);
				if (!ret) {
					elem.setAttributeNode(ret = elem.ownerDocument.createAttribute(name));
				}

				ret.value = value += "";

				// Break association with cloned elements by also using setAttribute (#9646)
				if (name === "value" || value === elem.getAttribute(name)) {
					return value;
				}
			}
		};

		// Some attributes are constructed with empty-string values when not defined
		attrHandle.id = attrHandle.name = attrHandle.coords = function (elem, name, isXML) {
			var ret;
			if (!isXML) {
				return (ret = elem.getAttributeNode(name)) && ret.value !== "" ? ret.value : null;
			}
		};

		// Fixing value retrieval on a button requires this module
		jQuery.valHooks.button = {
			get: function get(elem, name) {
				var ret = elem.getAttributeNode(name);
				if (ret && ret.specified) {
					return ret.value;
				}
			},
			set: nodeHook.set
		};

		// Set contenteditable to false on removals(#10429)
		// Setting to empty string throws an error as an invalid value
		jQuery.attrHooks.contenteditable = {
			set: function set(elem, value, name) {
				nodeHook.set(elem, value === "" ? false : value, name);
			}
		};

		// Set width and height to auto instead of 0 on empty string( Bug #8150 )
		// This is for removals
		jQuery.each(["width", "height"], function (i, name) {
			jQuery.attrHooks[name] = {
				set: function set(elem, value) {
					if (value === "") {
						elem.setAttribute(name, "auto");
						return value;
					}
				}
			};
		});
	}

	if (!support.style) {
		jQuery.attrHooks.style = {
			get: function get(elem) {
				// Return undefined in the case of empty string
				// Note: IE uppercases css property names, but if we were to .toLowerCase()
				// .cssText, that would destroy case senstitivity in URL's, like in "background"
				return elem.style.cssText || undefined;
			},
			set: function set(elem, value) {
				return elem.style.cssText = value + "";
			}
		};
	}

	var rfocusable = /^(?:input|select|textarea|button|object)$/i,
	    rclickable = /^(?:a|area)$/i;

	jQuery.fn.extend({
		prop: function prop(name, value) {
			return access(this, jQuery.prop, name, value, arguments.length > 1);
		},

		removeProp: function removeProp(name) {
			name = jQuery.propFix[name] || name;
			return this.each(function () {
				// try/catch handles cases where IE balks (such as removing a property on window)
				try {
					this[name] = undefined;
					delete this[name];
				} catch (e) {}
			});
		}
	});

	jQuery.extend({
		propFix: {
			"for": "htmlFor",
			"class": "className"
		},

		prop: function prop(elem, name, value) {
			var ret,
			    hooks,
			    notxml,
			    nType = elem.nodeType;

			// don't get/set properties on text, comment and attribute nodes
			if (!elem || nType === 3 || nType === 8 || nType === 2) {
				return;
			}

			notxml = nType !== 1 || !jQuery.isXMLDoc(elem);

			if (notxml) {
				// Fix name and attach hooks
				name = jQuery.propFix[name] || name;
				hooks = jQuery.propHooks[name];
			}

			if (value !== undefined) {
				return hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined ? ret : elem[name] = value;
			} else {
				return hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null ? ret : elem[name];
			}
		},

		propHooks: {
			tabIndex: {
				get: function get(elem) {
					// elem.tabIndex doesn't always return the correct value when it hasn't been explicitly set
					// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr(elem, "tabindex");

					return tabindex ? parseInt(tabindex, 10) : rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href ? 0 : -1;
				}
			}
		}
	});

	// Some attributes require a special call on IE
	// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if (!support.hrefNormalized) {
		// href/src property should get the full normalized URL (#10299/#12915)
		jQuery.each(["href", "src"], function (i, name) {
			jQuery.propHooks[name] = {
				get: function get(elem) {
					return elem.getAttribute(name, 4);
				}
			};
		});
	}

	// Support: Safari, IE9+
	// mis-reports the default selected property of an option
	// Accessing the parent's selectedIndex property fixes it
	if (!support.optSelected) {
		jQuery.propHooks.selected = {
			get: function get(elem) {
				var parent = elem.parentNode;

				if (parent) {
					parent.selectedIndex;

					// Make sure that it also works with optgroups, see #5701
					if (parent.parentNode) {
						parent.parentNode.selectedIndex;
					}
				}
				return null;
			}
		};
	}

	jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
		jQuery.propFix[this.toLowerCase()] = this;
	});

	// IE6/7 call enctype encoding
	if (!support.enctype) {
		jQuery.propFix.enctype = "encoding";
	}

	var rclass = /[\t\r\n\f]/g;

	jQuery.fn.extend({
		addClass: function addClass(value) {
			var classes,
			    elem,
			    cur,
			    clazz,
			    j,
			    finalValue,
			    i = 0,
			    len = this.length,
			    proceed = typeof value === "string" && value;

			if (jQuery.isFunction(value)) {
				return this.each(function (j) {
					jQuery(this).addClass(value.call(this, j, this.className));
				});
			}

			if (proceed) {
				// The disjunction here is for better compressibility (see removeClass)
				classes = (value || "").match(rnotwhite) || [];

				for (; i < len; i++) {
					elem = this[i];
					cur = elem.nodeType === 1 && (elem.className ? (" " + elem.className + " ").replace(rclass, " ") : " ");

					if (cur) {
						j = 0;
						while (clazz = classes[j++]) {
							if (cur.indexOf(" " + clazz + " ") < 0) {
								cur += clazz + " ";
							}
						}

						// only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim(cur);
						if (elem.className !== finalValue) {
							elem.className = finalValue;
						}
					}
				}
			}

			return this;
		},

		removeClass: function removeClass(value) {
			var classes,
			    elem,
			    cur,
			    clazz,
			    j,
			    finalValue,
			    i = 0,
			    len = this.length,
			    proceed = arguments.length === 0 || typeof value === "string" && value;

			if (jQuery.isFunction(value)) {
				return this.each(function (j) {
					jQuery(this).removeClass(value.call(this, j, this.className));
				});
			}
			if (proceed) {
				classes = (value || "").match(rnotwhite) || [];

				for (; i < len; i++) {
					elem = this[i];
					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 && (elem.className ? (" " + elem.className + " ").replace(rclass, " ") : "");

					if (cur) {
						j = 0;
						while (clazz = classes[j++]) {
							// Remove *all* instances
							while (cur.indexOf(" " + clazz + " ") >= 0) {
								cur = cur.replace(" " + clazz + " ", " ");
							}
						}

						// only assign if different to avoid unneeded rendering.
						finalValue = value ? jQuery.trim(cur) : "";
						if (elem.className !== finalValue) {
							elem.className = finalValue;
						}
					}
				}
			}

			return this;
		},

		toggleClass: function toggleClass(value, stateVal) {
			var type = typeof value === "undefined" ? "undefined" : (0, _typeof3.default)(value);

			if (typeof stateVal === "boolean" && type === "string") {
				return stateVal ? this.addClass(value) : this.removeClass(value);
			}

			if (jQuery.isFunction(value)) {
				return this.each(function (i) {
					jQuery(this).toggleClass(value.call(this, i, this.className, stateVal), stateVal);
				});
			}

			return this.each(function () {
				if (type === "string") {
					// toggle individual class names
					var className,
					    i = 0,
					    self = jQuery(this),
					    classNames = value.match(rnotwhite) || [];

					while (className = classNames[i++]) {
						// check each className given, space separated list
						if (self.hasClass(className)) {
							self.removeClass(className);
						} else {
							self.addClass(className);
						}
					}

					// Toggle whole class name
				} else if (type === strundefined || type === "boolean") {
					if (this.className) {
						// store className if set
						jQuery._data(this, "__className__", this.className);
					}

					// If the element has a class name or if we're passed "false",
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					this.className = this.className || value === false ? "" : jQuery._data(this, "__className__") || "";
				}
			});
		},

		hasClass: function hasClass(selector) {
			var className = " " + selector + " ",
			    i = 0,
			    l = this.length;
			for (; i < l; i++) {
				if (this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf(className) >= 0) {
					return true;
				}
			}

			return false;
		}
	});

	// Return jQuery for attributes-only inclusion


	jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup error contextmenu").split(" "), function (i, name) {

		// Handle event binding
		jQuery.fn[name] = function (data, fn) {
			return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
		};
	});

	jQuery.fn.extend({
		hover: function hover(fnOver, fnOut) {
			return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
		},

		bind: function bind(types, data, fn) {
			return this.on(types, null, data, fn);
		},
		unbind: function unbind(types, fn) {
			return this.off(types, null, fn);
		},

		delegate: function delegate(selector, types, data, fn) {
			return this.on(types, selector, data, fn);
		},
		undelegate: function undelegate(selector, types, fn) {
			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
		}
	});

	var nonce = jQuery.now();

	var rquery = /\?/;

	var rvalidtokens = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;

	jQuery.parseJSON = function (data) {
		// Attempt to parse using the native JSON parser first
		if (window.JSON && window.JSON.parse) {
			// Support: Android 2.3
			// Workaround failure to string-cast null input
			return window.JSON.parse(data + "");
		}

		var requireNonComma,
		    depth = null,
		    str = jQuery.trim(data + "");

		// Guard against invalid (and possibly dangerous) input by ensuring that nothing remains
		// after removing valid tokens
		return str && !jQuery.trim(str.replace(rvalidtokens, function (token, comma, open, close) {

			// Force termination if we see a misplaced comma
			if (requireNonComma && comma) {
				depth = 0;
			}

			// Perform no more replacements after returning to outermost depth
			if (depth === 0) {
				return token;
			}

			// Commas must not follow "[", "{", or ","
			requireNonComma = open || comma;

			// Determine new depth
			// array/object open ("[" or "{"): depth += true - false (increment)
			// array/object close ("]" or "}"): depth += false - true (decrement)
			// other cases ("," or primitive): depth += true - true (numeric cast)
			depth += !close - !open;

			// Remove this token
			return "";
		})) ? Function("return " + str)() : jQuery.error("Invalid JSON: " + data);
	};

	// Cross-browser xml parsing
	jQuery.parseXML = function (data) {
		var xml, tmp;
		if (!data || typeof data !== "string") {
			return null;
		}
		try {
			if (window.DOMParser) {
				// Standard
				tmp = new DOMParser();
				xml = tmp.parseFromString(data, "text/xml");
			} else {
				// IE
				xml = new ActiveXObject("Microsoft.XMLDOM");
				xml.async = "false";
				xml.loadXML(data);
			}
		} catch (e) {
			xml = undefined;
		}
		if (!xml || !xml.documentElement || xml.getElementsByTagName("parsererror").length) {
			jQuery.error("Invalid XML: " + data);
		}
		return xml;
	};

	var
	// Document location
	ajaxLocParts,
	    ajaxLocation,
	    rhash = /#.*$/,
	    rts = /([?&])_=[^&]*/,
	    rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
	    // IE leaves an \r character at EOL
	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	    rnoContent = /^(?:GET|HEAD)$/,
	    rprotocol = /^\/\//,
	    rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,


	/* Prefilters
  * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
  * 2) These are called:
  *    - BEFORE asking for a transport
  *    - AFTER param serialization (s.data is a string if s.processData is true)
  * 3) key is the dataType
  * 4) the catchall symbol "*" can be used
  * 5) execution will start with transport dataType and THEN continue down to "*" if needed
  */
	prefilters = {},


	/* Transports bindings
  * 1) key is the dataType
  * 2) the catchall symbol "*" can be used
  * 3) selection will start with transport dataType and THEN go to "*" if needed
  */
	transports = {},


	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat("*");

	// #8138, IE may throw an exception when accessing
	// a field from window.location if document.domain has been set
	try {
		ajaxLocation = location.href;
	} catch (e) {
		// Use the href attribute of an A element
		// since IE will modify it given document.location
		ajaxLocation = document.createElement("a");
		ajaxLocation.href = "";
		ajaxLocation = ajaxLocation.href;
	}

	// Segment location into parts
	ajaxLocParts = rurl.exec(ajaxLocation.toLowerCase()) || [];

	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports(structure) {

		// dataTypeExpression is optional and defaults to "*"
		return function (dataTypeExpression, func) {

			if (typeof dataTypeExpression !== "string") {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}

			var dataType,
			    i = 0,
			    dataTypes = dataTypeExpression.toLowerCase().match(rnotwhite) || [];

			if (jQuery.isFunction(func)) {
				// For each dataType in the dataTypeExpression
				while (dataType = dataTypes[i++]) {
					// Prepend if requested
					if (dataType.charAt(0) === "+") {
						dataType = dataType.slice(1) || "*";
						(structure[dataType] = structure[dataType] || []).unshift(func);

						// Otherwise append
					} else {
						(structure[dataType] = structure[dataType] || []).push(func);
					}
				}
			}
		};
	}

	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {

		var inspected = {},
		    seekingTransport = structure === transports;

		function inspect(dataType) {
			var selected;
			inspected[dataType] = true;
			jQuery.each(structure[dataType] || [], function (_, prefilterOrFactory) {
				var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
				if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
					options.dataTypes.unshift(dataTypeOrTransport);
					inspect(dataTypeOrTransport);
					return false;
				} else if (seekingTransport) {
					return !(selected = dataTypeOrTransport);
				}
			});
			return selected;
		}

		return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
	}

	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend(target, src) {
		var deep,
		    key,
		    flatOptions = jQuery.ajaxSettings.flatOptions || {};

		for (key in src) {
			if (src[key] !== undefined) {
				(flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
			}
		}
		if (deep) {
			jQuery.extend(true, target, deep);
		}

		return target;
	}

	/* Handles responses to an ajax request:
  * - finds the right dataType (mediates between content-type and expected dataType)
  * - returns the corresponding response
  */
	function ajaxHandleResponses(s, jqXHR, responses) {
		var firstDataType,
		    ct,
		    finalDataType,
		    type,
		    contents = s.contents,
		    dataTypes = s.dataTypes;

		// Remove auto dataType and get content-type in the process
		while (dataTypes[0] === "*") {
			dataTypes.shift();
			if (ct === undefined) {
				ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
			}
		}

		// Check if we're dealing with a known content-type
		if (ct) {
			for (type in contents) {
				if (contents[type] && contents[type].test(ct)) {
					dataTypes.unshift(type);
					break;
				}
			}
		}

		// Check to see if we have a response for the expected dataType
		if (dataTypes[0] in responses) {
			finalDataType = dataTypes[0];
		} else {
			// Try convertible dataTypes
			for (type in responses) {
				if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
					finalDataType = type;
					break;
				}
				if (!firstDataType) {
					firstDataType = type;
				}
			}
			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}

		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if (finalDataType) {
			if (finalDataType !== dataTypes[0]) {
				dataTypes.unshift(finalDataType);
			}
			return responses[finalDataType];
		}
	}

	/* Chain conversions given the request and the original response
  * Also sets the responseXXX fields on the jqXHR instance
  */
	function ajaxConvert(s, response, jqXHR, isSuccess) {
		var conv2,
		    current,
		    conv,
		    tmp,
		    prev,
		    converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

		// Create converters map with lowercased keys
		if (dataTypes[1]) {
			for (conv in s.converters) {
				converters[conv.toLowerCase()] = s.converters[conv];
			}
		}

		current = dataTypes.shift();

		// Convert to each sequential dataType
		while (current) {

			if (s.responseFields[current]) {
				jqXHR[s.responseFields[current]] = response;
			}

			// Apply the dataFilter if provided
			if (!prev && isSuccess && s.dataFilter) {
				response = s.dataFilter(response, s.dataType);
			}

			prev = current;
			current = dataTypes.shift();

			if (current) {

				// There's only work to do if current dataType is non-auto
				if (current === "*") {

					current = prev;

					// Convert response if prev dataType is non-auto and differs from current
				} else if (prev !== "*" && prev !== current) {

					// Seek a direct converter
					conv = converters[prev + " " + current] || converters["* " + current];

					// If none found, seek a pair
					if (!conv) {
						for (conv2 in converters) {

							// If conv2 outputs current
							tmp = conv2.split(" ");
							if (tmp[1] === current) {

								// If prev can be converted to accepted input
								conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
								if (conv) {
									// Condense equivalence converters
									if (conv === true) {
										conv = converters[conv2];

										// Otherwise, insert the intermediate dataType
									} else if (converters[conv2] !== true) {
										current = tmp[0];
										dataTypes.unshift(tmp[1]);
									}
									break;
								}
							}
						}
					}

					// Apply converter (if not an equivalence)
					if (conv !== true) {

						// Unless errors are allowed to bubble, catch and return them
						if (conv && s["throws"]) {
							response = conv(response);
						} else {
							try {
								response = conv(response);
							} catch (e) {
								return { state: "parsererror", error: conv ? e : "No conversion from " + prev + " to " + current };
							}
						}
					}
				}
			}
		}

		return { state: "success", data: response };
	}

	jQuery.extend({

		// Counter for holding the number of active queries
		active: 0,

		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},

		ajaxSettings: {
			url: ajaxLocation,
			type: "GET",
			isLocal: rlocalProtocol.test(ajaxLocParts[1]),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			/*
   timeout: 0,
   data: null,
   dataType: null,
   username: null,
   password: null,
   cache: null,
   throws: false,
   traditional: false,
   headers: {},
   */

			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},

			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},

			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},

			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {

				// Convert anything to text
				"* text": String,

				// Text to html (true = no transformation)
				"text html": true,

				// Evaluate text as a json expression
				"text json": jQuery.parseJSON,

				// Parse text as xml
				"text xml": jQuery.parseXML
			},

			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},

		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function ajaxSetup(target, settings) {
			return settings ?

			// Building a settings object
			ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) :

			// Extending ajaxSettings
			ajaxExtend(jQuery.ajaxSettings, target);
		},

		ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
		ajaxTransport: addToPrefiltersOrTransports(transports),

		// Main method
		ajax: function ajax(url, options) {

			// If url is an object, simulate pre-1.5 signature
			if ((typeof url === "undefined" ? "undefined" : (0, _typeof3.default)(url)) === "object") {
				options = url;
				url = undefined;
			}

			// Force options to be an object
			options = options || {};

			var // Cross-domain detection vars
			parts,

			// Loop variable
			i,

			// URL without anti-cache param
			cacheURL,

			// Response headers as string
			responseHeadersString,

			// timeout handle
			timeoutTimer,


			// To know if global events are to be dispatched
			fireGlobals,
			    transport,

			// Response headers
			responseHeaders,

			// Create the final options object
			s = jQuery.ajaxSetup({}, options),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			    completeDeferred = jQuery.Callbacks("once memory"),

			// Status-dependent callbacks
			_statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			    requestHeadersNames = {},

			// The jqXHR state
			state = 0,

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function getResponseHeader(key) {
					var match;
					if (state === 2) {
						if (!responseHeaders) {
							responseHeaders = {};
							while (match = rheaders.exec(responseHeadersString)) {
								responseHeaders[match[1].toLowerCase()] = match[2];
							}
						}
						match = responseHeaders[key.toLowerCase()];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function getAllResponseHeaders() {
					return state === 2 ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function setRequestHeader(name, value) {
					var lname = name.toLowerCase();
					if (!state) {
						name = requestHeadersNames[lname] = requestHeadersNames[lname] || name;
						requestHeaders[name] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function overrideMimeType(type) {
					if (!state) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function statusCode(map) {
					var code;
					if (map) {
						if (state < 2) {
							for (code in map) {
								// Lazy-add the new callback in a way that preserves old ones
								_statusCode[code] = [_statusCode[code], map[code]];
							}
						} else {
							// Execute the appropriate callbacks
							jqXHR.always(map[jqXHR.status]);
						}
					}
					return this;
				},

				// Cancel the request
				abort: function abort(statusText) {
					var finalText = statusText || strAbort;
					if (transport) {
						transport.abort(finalText);
					}
					done(0, finalText);
					return this;
				}
			};

			// Attach deferreds
			deferred.promise(jqXHR).complete = completeDeferred.add;
			jqXHR.success = jqXHR.done;
			jqXHR.error = jqXHR.fail;

			// Remove hash character (#7531: and string promotion)
			// Add protocol if not provided (#5866: IE7 issue with protocol-less urls)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ((url || s.url || ajaxLocation) + "").replace(rhash, "").replace(rprotocol, ajaxLocParts[1] + "//");

			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;

			// Extract dataTypes list
			s.dataTypes = jQuery.trim(s.dataType || "*").toLowerCase().match(rnotwhite) || [""];

			// A cross-domain request is in order when we have a protocol:host:port mismatch
			if (s.crossDomain == null) {
				parts = rurl.exec(s.url.toLowerCase());
				s.crossDomain = !!(parts && (parts[1] !== ajaxLocParts[1] || parts[2] !== ajaxLocParts[2] || (parts[3] || (parts[1] === "http:" ? "80" : "443")) !== (ajaxLocParts[3] || (ajaxLocParts[1] === "http:" ? "80" : "443"))));
			}

			// Convert data if not already a string
			if (s.data && s.processData && typeof s.data !== "string") {
				s.data = jQuery.param(s.data, s.traditional);
			}

			// Apply prefilters
			inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);

			// If request was aborted inside a prefilter, stop there
			if (state === 2) {
				return jqXHR;
			}

			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;

			// Watch for a new set of requests
			if (fireGlobals && jQuery.active++ === 0) {
				jQuery.event.trigger("ajaxStart");
			}

			// Uppercase the type
			s.type = s.type.toUpperCase();

			// Determine if request has content
			s.hasContent = !rnoContent.test(s.type);

			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			cacheURL = s.url;

			// More options handling for requests with no content
			if (!s.hasContent) {

				// If data is available, append data to url
				if (s.data) {
					cacheURL = s.url += (rquery.test(cacheURL) ? "&" : "?") + s.data;
					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}

				// Add anti-cache in url if needed
				if (s.cache === false) {
					s.url = rts.test(cacheURL) ?

					// If there is already a '_' parameter, set its value
					cacheURL.replace(rts, "$1_=" + nonce++) :

					// Otherwise add one to the end
					cacheURL + (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce++;
				}
			}

			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if (s.ifModified) {
				if (jQuery.lastModified[cacheURL]) {
					jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
				}
				if (jQuery.etag[cacheURL]) {
					jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
				}
			}

			// Set the correct header, if data is being sent
			if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
				jqXHR.setRequestHeader("Content-Type", s.contentType);
			}

			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);

			// Check for headers option
			for (i in s.headers) {
				jqXHR.setRequestHeader(i, s.headers[i]);
			}

			// Allow custom headers/mimetypes and early abort
			if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || state === 2)) {
				// Abort if not done already and return
				return jqXHR.abort();
			}

			// aborting is no longer a cancellation
			strAbort = "abort";

			// Install callbacks on deferreds
			for (i in { success: 1, error: 1, complete: 1 }) {
				jqXHR[i](s[i]);
			}

			// Get transport
			transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);

			// If no transport, we auto-abort
			if (!transport) {
				done(-1, "No Transport");
			} else {
				jqXHR.readyState = 1;

				// Send global event
				if (fireGlobals) {
					globalEventContext.trigger("ajaxSend", [jqXHR, s]);
				}
				// Timeout
				if (s.async && s.timeout > 0) {
					timeoutTimer = setTimeout(function () {
						jqXHR.abort("timeout");
					}, s.timeout);
				}

				try {
					state = 1;
					transport.send(requestHeaders, done);
				} catch (e) {
					// Propagate exception as error if not done
					if (state < 2) {
						done(-1, e);
						// Simply rethrow otherwise
					} else {
						throw e;
					}
				}
			}

			// Callback for when everything is done
			function done(status, nativeStatusText, responses, headers) {
				var isSuccess,
				    success,
				    error,
				    response,
				    modified,
				    statusText = nativeStatusText;

				// Called once
				if (state === 2) {
					return;
				}

				// State is "done" now
				state = 2;

				// Clear timeout if it exists
				if (timeoutTimer) {
					clearTimeout(timeoutTimer);
				}

				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;

				// Cache response headers
				responseHeadersString = headers || "";

				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;

				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;

				// Get response data
				if (responses) {
					response = ajaxHandleResponses(s, jqXHR, responses);
				}

				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert(s, response, jqXHR, isSuccess);

				// If successful, handle type chaining
				if (isSuccess) {

					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if (s.ifModified) {
						modified = jqXHR.getResponseHeader("Last-Modified");
						if (modified) {
							jQuery.lastModified[cacheURL] = modified;
						}
						modified = jqXHR.getResponseHeader("etag");
						if (modified) {
							jQuery.etag[cacheURL] = modified;
						}
					}

					// if no content
					if (status === 204 || s.type === "HEAD") {
						statusText = "nocontent";

						// if not modified
					} else if (status === 304) {
						statusText = "notmodified";

						// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {
					// We extract error from statusText
					// then normalize statusText and status for non-aborts
					error = statusText;
					if (status || !statusText) {
						statusText = "error";
						if (status < 0) {
							status = 0;
						}
					}
				}

				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = (nativeStatusText || statusText) + "";

				// Success/Error
				if (isSuccess) {
					deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
				} else {
					deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
				}

				// Status-dependent callbacks
				jqXHR.statusCode(_statusCode);
				_statusCode = undefined;

				if (fireGlobals) {
					globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
				}

				// Complete
				completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);

				if (fireGlobals) {
					globalEventContext.trigger("ajaxComplete", [jqXHR, s]);
					// Handle the global AJAX counter
					if (! --jQuery.active) {
						jQuery.event.trigger("ajaxStop");
					}
				}
			}

			return jqXHR;
		},

		getJSON: function getJSON(url, data, callback) {
			return jQuery.get(url, data, callback, "json");
		},

		getScript: function getScript(url, callback) {
			return jQuery.get(url, undefined, callback, "script");
		}
	});

	jQuery.each(["get", "post"], function (i, method) {
		jQuery[method] = function (url, data, callback, type) {
			// shift arguments if data argument was omitted
			if (jQuery.isFunction(data)) {
				type = type || callback;
				callback = data;
				data = undefined;
			}

			return jQuery.ajax({
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			});
		};
	});

	jQuery._evalUrl = function (url) {
		return jQuery.ajax({
			url: url,
			type: "GET",
			dataType: "script",
			async: false,
			global: false,
			"throws": true
		});
	};

	jQuery.fn.extend({
		wrapAll: function wrapAll(html) {
			if (jQuery.isFunction(html)) {
				return this.each(function (i) {
					jQuery(this).wrapAll(html.call(this, i));
				});
			}

			if (this[0]) {
				// The elements to wrap the target around
				var wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);

				if (this[0].parentNode) {
					wrap.insertBefore(this[0]);
				}

				wrap.map(function () {
					var elem = this;

					while (elem.firstChild && elem.firstChild.nodeType === 1) {
						elem = elem.firstChild;
					}

					return elem;
				}).append(this);
			}

			return this;
		},

		wrapInner: function wrapInner(html) {
			if (jQuery.isFunction(html)) {
				return this.each(function (i) {
					jQuery(this).wrapInner(html.call(this, i));
				});
			}

			return this.each(function () {
				var self = jQuery(this),
				    contents = self.contents();

				if (contents.length) {
					contents.wrapAll(html);
				} else {
					self.append(html);
				}
			});
		},

		wrap: function wrap(html) {
			var isFunction = jQuery.isFunction(html);

			return this.each(function (i) {
				jQuery(this).wrapAll(isFunction ? html.call(this, i) : html);
			});
		},

		unwrap: function unwrap() {
			return this.parent().each(function () {
				if (!jQuery.nodeName(this, "body")) {
					jQuery(this).replaceWith(this.childNodes);
				}
			}).end();
		}
	});

	jQuery.expr.filters.hidden = function (elem) {
		// Support: Opera <= 12.12
		// Opera reports offsetWidths and offsetHeights less than zero on some elements
		return elem.offsetWidth <= 0 && elem.offsetHeight <= 0 || !support.reliableHiddenOffsets() && (elem.style && elem.style.display || jQuery.css(elem, "display")) === "none";
	};

	jQuery.expr.filters.visible = function (elem) {
		return !jQuery.expr.filters.hidden(elem);
	};

	var r20 = /%20/g,
	    rbracket = /\[\]$/,
	    rCRLF = /\r?\n/g,
	    rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	    rsubmittable = /^(?:input|select|textarea|keygen)/i;

	function buildParams(prefix, obj, traditional, add) {
		var name;

		if (jQuery.isArray(obj)) {
			// Serialize array item.
			jQuery.each(obj, function (i, v) {
				if (traditional || rbracket.test(prefix)) {
					// Treat each array item as a scalar.
					add(prefix, v);
				} else {
					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(prefix + "[" + ((typeof v === "undefined" ? "undefined" : (0, _typeof3.default)(v)) === "object" ? i : "") + "]", v, traditional, add);
				}
			});
		} else if (!traditional && jQuery.type(obj) === "object") {
			// Serialize object item.
			for (name in obj) {
				buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
			}
		} else {
			// Serialize scalar item.
			add(prefix, obj);
		}
	}

	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function (a, traditional) {
		var prefix,
		    s = [],
		    add = function add(key, value) {
			// If value is a function, invoke it and return its value
			value = jQuery.isFunction(value) ? value() : value == null ? "" : value;
			s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value);
		};

		// Set traditional to true for jQuery <= 1.3.2 behavior.
		if (traditional === undefined) {
			traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
		}

		// If an array was passed in, assume that it is an array of form elements.
		if (jQuery.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {
			// Serialize the form elements
			jQuery.each(a, function () {
				add(this.name, this.value);
			});
		} else {
			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for (prefix in a) {
				buildParams(prefix, a[prefix], traditional, add);
			}
		}

		// Return the resulting serialization
		return s.join("&").replace(r20, "+");
	};

	jQuery.fn.extend({
		serialize: function serialize() {
			return jQuery.param(this.serializeArray());
		},
		serializeArray: function serializeArray() {
			return this.map(function () {
				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop(this, "elements");
				return elements ? jQuery.makeArray(elements) : this;
			}).filter(function () {
				var type = this.type;
				// Use .is(":disabled") so that fieldset[disabled] works
				return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
			}).map(function (i, elem) {
				var val = jQuery(this).val();

				return val == null ? null : jQuery.isArray(val) ? jQuery.map(val, function (val) {
					return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
				}) : { name: elem.name, value: val.replace(rCRLF, "\r\n") };
			}).get();
		}
	});

	// Create the request object
	// (This is still attached to ajaxSettings for backward compatibility)
	jQuery.ajaxSettings.xhr = window.ActiveXObject !== undefined ?
	// Support: IE6+
	function () {

		// XHR cannot access local files, always use ActiveX for that case
		return !this.isLocal &&

		// Support: IE7-8
		// oldIE XHR does not support non-RFC2616 methods (#13240)
		// See http://msdn.microsoft.com/en-us/library/ie/ms536648(v=vs.85).aspx
		// and http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9
		// Although this check for six methods instead of eight
		// since IE also does not support "trace" and "connect"
		/^(get|post|head|put|delete|options)$/i.test(this.type) && createStandardXHR() || createActiveXHR();
	} :
	// For all other browsers, use the standard XMLHttpRequest object
	createStandardXHR;

	var xhrId = 0,
	    xhrCallbacks = {},
	    xhrSupported = jQuery.ajaxSettings.xhr();

	// Support: IE<10
	// Open requests must be manually aborted on unload (#5280)
	// See https://support.microsoft.com/kb/2856746 for more info
	if (window.attachEvent) {
		window.attachEvent("onunload", function () {
			for (var key in xhrCallbacks) {
				xhrCallbacks[key](undefined, true);
			}
		});
	}

	// Determine support properties
	support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
	xhrSupported = support.ajax = !!xhrSupported;

	// Create transport if the browser can provide an xhr
	if (xhrSupported) {

		jQuery.ajaxTransport(function (options) {
			// Cross domain only allowed if supported through XMLHttpRequest
			if (!options.crossDomain || support.cors) {

				var _callback;

				return {
					send: function send(headers, complete) {
						var i,
						    xhr = options.xhr(),
						    id = ++xhrId;

						// Open the socket
						xhr.open(options.type, options.url, options.async, options.username, options.password);

						// Apply custom fields if provided
						if (options.xhrFields) {
							for (i in options.xhrFields) {
								xhr[i] = options.xhrFields[i];
							}
						}

						// Override mime type if needed
						if (options.mimeType && xhr.overrideMimeType) {
							xhr.overrideMimeType(options.mimeType);
						}

						// X-Requested-With header
						// For cross-domain requests, seeing as conditions for a preflight are
						// akin to a jigsaw puzzle, we simply never set it to be sure.
						// (it can always be set on a per-request basis or even using ajaxSetup)
						// For same-domain requests, won't change header if already provided.
						if (!options.crossDomain && !headers["X-Requested-With"]) {
							headers["X-Requested-With"] = "XMLHttpRequest";
						}

						// Set headers
						for (i in headers) {
							// Support: IE<9
							// IE's ActiveXObject throws a 'Type Mismatch' exception when setting
							// request header to a null-value.
							//
							// To keep consistent with other XHR implementations, cast the value
							// to string and ignore `undefined`.
							if (headers[i] !== undefined) {
								xhr.setRequestHeader(i, headers[i] + "");
							}
						}

						// Do send the request
						// This may raise an exception which is actually
						// handled in jQuery.ajax (so no try/catch here)
						xhr.send(options.hasContent && options.data || null);

						// Listener
						_callback = function callback(_, isAbort) {
							var status, statusText, responses;

							// Was never called and is aborted or complete
							if (_callback && (isAbort || xhr.readyState === 4)) {
								// Clean up
								delete xhrCallbacks[id];
								_callback = undefined;
								xhr.onreadystatechange = jQuery.noop;

								// Abort manually if needed
								if (isAbort) {
									if (xhr.readyState !== 4) {
										xhr.abort();
									}
								} else {
									responses = {};
									status = xhr.status;

									// Support: IE<10
									// Accessing binary-data responseText throws an exception
									// (#11426)
									if (typeof xhr.responseText === "string") {
										responses.text = xhr.responseText;
									}

									// Firefox throws an exception when accessing
									// statusText for faulty cross-domain requests
									try {
										statusText = xhr.statusText;
									} catch (e) {
										// We normalize with Webkit giving an empty statusText
										statusText = "";
									}

									// Filter status for non standard behaviors

									// If the request is local and we have data: assume a success
									// (success with no data won't get notified, that's the best we
									// can do given current implementations)
									if (!status && options.isLocal && !options.crossDomain) {
										status = responses.text ? 200 : 404;
										// IE - #1450: sometimes returns 1223 when it should be 204
									} else if (status === 1223) {
										status = 204;
									}
								}
							}

							// Call complete if needed
							if (responses) {
								complete(status, statusText, responses, xhr.getAllResponseHeaders());
							}
						};

						if (!options.async) {
							// if we're in sync mode we fire the callback
							_callback();
						} else if (xhr.readyState === 4) {
							// (IE6 & IE7) if it's in cache and has been
							// retrieved directly we need to fire the callback
							setTimeout(_callback);
						} else {
							// Add to the list of active xhr callbacks
							xhr.onreadystatechange = xhrCallbacks[id] = _callback;
						}
					},

					abort: function abort() {
						if (_callback) {
							_callback(undefined, true);
						}
					}
				};
			}
		});
	}

	// Functions to create xhrs
	function createStandardXHR() {
		try {
			return new window.XMLHttpRequest();
		} catch (e) {}
	}

	function createActiveXHR() {
		try {
			return new window.ActiveXObject("Microsoft.XMLHTTP");
		} catch (e) {}
	}

	// Install script dataType
	jQuery.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /(?:java|ecma)script/
		},
		converters: {
			"text script": function textScript(text) {
				jQuery.globalEval(text);
				return text;
			}
		}
	});

	// Handle cache's special case and global
	jQuery.ajaxPrefilter("script", function (s) {
		if (s.cache === undefined) {
			s.cache = false;
		}
		if (s.crossDomain) {
			s.type = "GET";
			s.global = false;
		}
	});

	// Bind script tag hack transport
	jQuery.ajaxTransport("script", function (s) {

		// This transport only deals with cross domain requests
		if (s.crossDomain) {

			var script,
			    head = document.head || jQuery("head")[0] || document.documentElement;

			return {

				send: function send(_, callback) {

					script = document.createElement("script");

					script.async = true;

					if (s.scriptCharset) {
						script.charset = s.scriptCharset;
					}

					script.src = s.url;

					// Attach handlers for all browsers
					script.onload = script.onreadystatechange = function (_, isAbort) {

						if (isAbort || !script.readyState || /loaded|complete/.test(script.readyState)) {

							// Handle memory leak in IE
							script.onload = script.onreadystatechange = null;

							// Remove the script
							if (script.parentNode) {
								script.parentNode.removeChild(script);
							}

							// Dereference the script
							script = null;

							// Callback if not abort
							if (!isAbort) {
								callback(200, "success");
							}
						}
					};

					// Circumvent IE6 bugs with base elements (#2709 and #4378) by prepending
					// Use native DOM manipulation to avoid our domManip AJAX trickery
					head.insertBefore(script, head.firstChild);
				},

				abort: function abort() {
					if (script) {
						script.onload(undefined, true);
					}
				}
			};
		}
	});

	var oldCallbacks = [],
	    rjsonp = /(=)\?(?=&|$)|\?\?/;

	// Default jsonp settings
	jQuery.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function jsonpCallback() {
			var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce++;
			this[callback] = true;
			return callback;
		}
	});

	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter("json jsonp", function (s, originalSettings, jqXHR) {

		var callbackName,
		    overwritten,
		    responseContainer,
		    jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && !(s.contentType || "").indexOf("application/x-www-form-urlencoded") && rjsonp.test(s.data) && "data");

		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if (jsonProp || s.dataTypes[0] === "jsonp") {

			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;

			// Insert callback into url or form data
			if (jsonProp) {
				s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
			} else if (s.jsonp !== false) {
				s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
			}

			// Use data converter to retrieve json after script execution
			s.converters["script json"] = function () {
				if (!responseContainer) {
					jQuery.error(callbackName + " was not called");
				}
				return responseContainer[0];
			};

			// force json dataType
			s.dataTypes[0] = "json";

			// Install callback
			overwritten = window[callbackName];
			window[callbackName] = function () {
				responseContainer = arguments;
			};

			// Clean-up function (fires after converters)
			jqXHR.always(function () {
				// Restore preexisting value
				window[callbackName] = overwritten;

				// Save back as free
				if (s[callbackName]) {
					// make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;

					// save the callback name for future use
					oldCallbacks.push(callbackName);
				}

				// Call if it was a function and we have a response
				if (responseContainer && jQuery.isFunction(overwritten)) {
					overwritten(responseContainer[0]);
				}

				responseContainer = overwritten = undefined;
			});

			// Delegate to script
			return "script";
		}
	});

	// data: string of html
	// context (optional): If specified, the fragment will be created in this context, defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function (data, context, keepScripts) {
		if (!data || typeof data !== "string") {
			return null;
		}
		if (typeof context === "boolean") {
			keepScripts = context;
			context = false;
		}
		context = context || document;

		var parsed = rsingleTag.exec(data),
		    scripts = !keepScripts && [];

		// Single tag
		if (parsed) {
			return [context.createElement(parsed[1])];
		}

		parsed = jQuery.buildFragment([data], context, scripts);

		if (scripts && scripts.length) {
			jQuery(scripts).remove();
		}

		return jQuery.merge([], parsed.childNodes);
	};

	// Keep a copy of the old load method
	var _load = jQuery.fn.load;

	/**
  * Load a url into a page
  */
	jQuery.fn.load = function (url, params, callback) {
		if (typeof url !== "string" && _load) {
			return _load.apply(this, arguments);
		}

		var selector,
		    response,
		    type,
		    self = this,
		    off = url.indexOf(" ");

		if (off >= 0) {
			selector = jQuery.trim(url.slice(off, url.length));
			url = url.slice(0, off);
		}

		// If it's a function
		if (jQuery.isFunction(params)) {

			// We assume that it's the callback
			callback = params;
			params = undefined;

			// Otherwise, build a param string
		} else if (params && (typeof params === "undefined" ? "undefined" : (0, _typeof3.default)(params)) === "object") {
			type = "POST";
		}

		// If we have elements to modify, make the request
		if (self.length > 0) {
			jQuery.ajax({
				url: url,

				// if "type" variable is undefined, then "GET" method will be used
				type: type,
				dataType: "html",
				data: params
			}).done(function (responseText) {

				// Save response for use in complete callback
				response = arguments;

				self.html(selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) :

				// Otherwise use the full result
				responseText);
			}).complete(callback && function (jqXHR, status) {
				self.each(callback, response || [jqXHR.responseText, status, jqXHR]);
			});
		}

		return this;
	};

	// Attach a bunch of functions for handling common AJAX events
	jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (i, type) {
		jQuery.fn[type] = function (fn) {
			return this.on(type, fn);
		};
	});

	jQuery.expr.filters.animated = function (elem) {
		return jQuery.grep(jQuery.timers, function (fn) {
			return elem === fn.elem;
		}).length;
	};

	var docElem = window.document.documentElement;

	/**
  * Gets a window from an element
  */
	function getWindow(elem) {
		return jQuery.isWindow(elem) ? elem : elem.nodeType === 9 ? elem.defaultView || elem.parentWindow : false;
	}

	jQuery.offset = {
		setOffset: function setOffset(elem, options, i) {
			var curPosition,
			    curLeft,
			    curCSSTop,
			    curTop,
			    curOffset,
			    curCSSLeft,
			    calculatePosition,
			    position = jQuery.css(elem, "position"),
			    curElem = jQuery(elem),
			    props = {};

			// set position first, in-case top/left are set even on static elem
			if (position === "static") {
				elem.style.position = "relative";
			}

			curOffset = curElem.offset();
			curCSSTop = jQuery.css(elem, "top");
			curCSSLeft = jQuery.css(elem, "left");
			calculatePosition = (position === "absolute" || position === "fixed") && jQuery.inArray("auto", [curCSSTop, curCSSLeft]) > -1;

			// need to be able to calculate position if either top or left is auto and position is either absolute or fixed
			if (calculatePosition) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;
			} else {
				curTop = parseFloat(curCSSTop) || 0;
				curLeft = parseFloat(curCSSLeft) || 0;
			}

			if (jQuery.isFunction(options)) {
				options = options.call(elem, i, curOffset);
			}

			if (options.top != null) {
				props.top = options.top - curOffset.top + curTop;
			}
			if (options.left != null) {
				props.left = options.left - curOffset.left + curLeft;
			}

			if ("using" in options) {
				options.using.call(elem, props);
			} else {
				curElem.css(props);
			}
		}
	};

	jQuery.fn.extend({
		offset: function offset(options) {
			if (arguments.length) {
				return options === undefined ? this : this.each(function (i) {
					jQuery.offset.setOffset(this, options, i);
				});
			}

			var docElem,
			    win,
			    box = { top: 0, left: 0 },
			    elem = this[0],
			    doc = elem && elem.ownerDocument;

			if (!doc) {
				return;
			}

			docElem = doc.documentElement;

			// Make sure it's not a disconnected DOM node
			if (!jQuery.contains(docElem, elem)) {
				return box;
			}

			// If we don't have gBCR, just use 0,0 rather than error
			// BlackBerry 5, iOS 3 (original iPhone)
			if ((0, _typeof3.default)(elem.getBoundingClientRect) !== strundefined) {
				box = elem.getBoundingClientRect();
			}
			win = getWindow(doc);
			return {
				top: box.top + (win.pageYOffset || docElem.scrollTop) - (docElem.clientTop || 0),
				left: box.left + (win.pageXOffset || docElem.scrollLeft) - (docElem.clientLeft || 0)
			};
		},

		position: function position() {
			if (!this[0]) {
				return;
			}

			var offsetParent,
			    offset,
			    parentOffset = { top: 0, left: 0 },
			    elem = this[0];

			// fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is its only offset parent
			if (jQuery.css(elem, "position") === "fixed") {
				// we assume that getBoundingClientRect is available when computed position is fixed
				offset = elem.getBoundingClientRect();
			} else {
				// Get *real* offsetParent
				offsetParent = this.offsetParent();

				// Get correct offsets
				offset = this.offset();
				if (!jQuery.nodeName(offsetParent[0], "html")) {
					parentOffset = offsetParent.offset();
				}

				// Add offsetParent borders
				parentOffset.top += jQuery.css(offsetParent[0], "borderTopWidth", true);
				parentOffset.left += jQuery.css(offsetParent[0], "borderLeftWidth", true);
			}

			// Subtract parent offsets and element margins
			// note: when an element has margin: auto the offsetLeft and marginLeft
			// are the same in Safari causing offset.left to incorrectly be 0
			return {
				top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
				left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
			};
		},

		offsetParent: function offsetParent() {
			return this.map(function () {
				var offsetParent = this.offsetParent || docElem;

				while (offsetParent && !jQuery.nodeName(offsetParent, "html") && jQuery.css(offsetParent, "position") === "static") {
					offsetParent = offsetParent.offsetParent;
				}
				return offsetParent || docElem;
			});
		}
	});

	// Create scrollLeft and scrollTop methods
	jQuery.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (method, prop) {
		var top = /Y/.test(prop);

		jQuery.fn[method] = function (val) {
			return access(this, function (elem, method, val) {
				var win = getWindow(elem);

				if (val === undefined) {
					return win ? prop in win ? win[prop] : win.document.documentElement[method] : elem[method];
				}

				if (win) {
					win.scrollTo(!top ? val : jQuery(win).scrollLeft(), top ? val : jQuery(win).scrollTop());
				} else {
					elem[method] = val;
				}
			}, method, val, arguments.length, null);
		};
	});

	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// getComputedStyle returns percent when specified for top/left/bottom/right
	// rather than make the css module depend on the offset module, we just check for it here
	jQuery.each(["top", "left"], function (i, prop) {
		jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function (elem, computed) {
			if (computed) {
				computed = curCSS(elem, prop);
				// if curCSS returns percentage, fallback to offset
				return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
			}
		});
	});

	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each({ Height: "height", Width: "width" }, function (name, type) {
		jQuery.each({ padding: "inner" + name, content: type, "": "outer" + name }, function (defaultExtra, funcName) {
			// margin is only for outerHeight, outerWidth
			jQuery.fn[funcName] = function (margin, value) {
				var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"),
				    extra = defaultExtra || (margin === true || value === true ? "margin" : "border");

				return access(this, function (elem, type, value) {
					var doc;

					if (jQuery.isWindow(elem)) {
						// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
						// isn't a whole lot we can do. See pull request at this URL for discussion:
						// https://github.com/jquery/jquery/pull/764
						return elem.document.documentElement["client" + name];
					}

					// Get document width or height
					if (elem.nodeType === 9) {
						doc = elem.documentElement;

						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height], whichever is greatest
						// unfortunately, this causes bug #3838 in IE6/8 only, but there is currently no good, small way to fix it.
						return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
					}

					return value === undefined ?
					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css(elem, type, extra) :

					// Set width or height on the element
					jQuery.style(elem, type, value, extra);
				}, type, chainable ? margin : undefined, chainable, null);
			};
		});
	});

	// The number of elements contained in the matched element set
	jQuery.fn.size = function () {
		return this.length;
	};

	jQuery.fn.andSelf = jQuery.fn.addBack;

	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.

	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

	if (typeof define === "function" && define.amd) {
		define("jquery", [], function () {
			return jQuery;
		});
	}

	var
	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,


	// Map over the $ in case of overwrite
	_$ = window.$;

	jQuery.noConflict = function (deep) {
		if (window.$ === jQuery) {
			window.$ = _$;
		}

		if (deep && window.jQuery === jQuery) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	};

	// Expose jQuery and $ identifiers, even in
	// AMD (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ((typeof noGlobal === "undefined" ? "undefined" : (0, _typeof3.default)(noGlobal)) === strundefined) {
		window.jQuery = window.$ = jQuery;
	}

	return jQuery;
});

},{"babel-runtime/helpers/typeof":11}]},{},[94]);
