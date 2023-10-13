(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".modal-container{position:fixed;left:0;top:0;height:100%;width:100%;display:flex;align-items:center;justify-content:center;background-color:#3e3e3e21;cursor:pointer}.modal-item{cursor:default}.modal-list-enter-active,.modal-list-leave-active,.modal-list-enter-active .modal-item,.modal-list-leave-active .modal-item{transition:all .2s ease}.modal-list-enter-from,.modal-list-leave-to{opacity:0!important}.modal-list-enter-from .modal-item,.modal-list-leave-to .modal-item{transform:translateY(-60px)}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import { ref as y, watch as R, reactive as T, computed as P, markRaw as N, getCurrentInstance as z, openBlock as k, createElementBlock as G, createBlock as B, resolveDynamicComponent as D, unref as b, mergeProps as A, toHandlers as Q, onMounted as U, h as I, TransitionGroup as V } from "vue";
/*!
  * jenesius-vue-modal v1.9.2
  * (c) 2023 Jenesius
  * @license MIT
  */
var M = function(t, e) {
  return M = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
    n.__proto__ = i;
  } || function(n, i) {
    for (var r in i)
      Object.prototype.hasOwnProperty.call(i, r) && (n[r] = i[r]);
  }, M(t, e);
};
function W(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  M(t, e);
  function n() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
}
function v(t, e, n, i) {
  function r(o) {
    return o instanceof n ? o : new n(function(a) {
      a(o);
    });
  }
  return new (n || (n = Promise))(function(o, a) {
    function l(d) {
      try {
        u(i.next(d));
      } catch (w) {
        a(w);
      }
    }
    function c(d) {
      try {
        u(i.throw(d));
      } catch (w) {
        a(w);
      }
    }
    function u(d) {
      d.done ? o(d.value) : r(d.value).then(l, c);
    }
    u((i = i.apply(t, e || [])).next());
  });
}
function h(t, e) {
  var n = { label: 0, sent: function() {
    if (o[0] & 1)
      throw o[1];
    return o[1];
  }, trys: [], ops: [] }, i, r, o, a;
  return a = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
    return this;
  }), a;
  function l(u) {
    return function(d) {
      return c([u, d]);
    };
  }
  function c(u) {
    if (i)
      throw new TypeError("Generator is already executing.");
    for (; a && (a = 0, u[0] && (n = 0)), n; )
      try {
        if (i = 1, r && (o = u[0] & 2 ? r.return : u[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, u[1])).done)
          return o;
        switch (r = 0, o && (u = [u[0] & 2, o.value]), u[0]) {
          case 0:
          case 1:
            o = u;
            break;
          case 4:
            return n.label++, { value: u[1], done: !1 };
          case 5:
            n.label++, r = u[1], u = [0];
            continue;
          case 7:
            u = n.ops.pop(), n.trys.pop();
            continue;
          default:
            if (o = n.trys, !(o = o.length > 0 && o[o.length - 1]) && (u[0] === 6 || u[0] === 2)) {
              n = 0;
              continue;
            }
            if (u[0] === 3 && (!o || u[1] > o[0] && u[1] < o[3])) {
              n.label = u[1];
              break;
            }
            if (u[0] === 6 && n.label < o[1]) {
              n.label = o[1], o = u;
              break;
            }
            if (o && n.label < o[2]) {
              n.label = o[2], n.ops.push(u);
              break;
            }
            o[2] && n.ops.pop(), n.trys.pop();
            continue;
        }
        u = e.call(t, n);
      } catch (d) {
        u = [6, d], r = 0;
      } finally {
        i = o = 0;
      }
    if (u[0] & 5)
      throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}
var f = (
  /** @class */
  function(t) {
    W(e, t);
    function e(n, i) {
      i === void 0 && (i = null);
      var r = t.call(this) || this;
      return r.isModalError = !0, r.message = n, r.details = i, r;
    }
    return e.Undefined = function(n) {
      return new e("Modal with id: ".concat(n, " not founded. The modal window may have been closed earlier."));
    }, e.UndefinedGuardName = function(n) {
      return new e("Guard's name ".concat(n, " is not declaration."));
    }, e.NextReject = function(n) {
      return new e("Guard returned false. Modal navigation was stopped. Modal id ".concat(n));
    }, e.GuardDeclarationType = function(n) {
      return new e("Guard's type should be a function. Provided:", n);
    }, e.ConfigurationType = function(n) {
      return new e("Configuration type must be an Object. Provided", n);
    }, e.ConfigurationUndefinedParam = function(n, i) {
      return new e("In configuration founded unknown parameter: ".concat(n, ". Available are ").concat(i.join(", "), " "));
    }, e.QueueNoEmpty = function() {
      return new e("Modal's queue is not empty. Probably some modal reject closing by onClose hook.");
    }, e.EmptyModalQueue = function() {
      return new e("Modal queue is empty.");
    }, e.NotInitialized = function() {
      return new e("Modal Container not found. Put container from jenesius-vue-modal in App's template. Check documentation for more information https://modal.jenesius.com/docs.html/installation#getting-started.");
    }, e.ModalComponentNotProvided = function() {
      return new e("The first parameter(VueComponent) was not specified.");
    }, e.DuplicatedRouterIntegration = function() {
      return new e("useModalRouter.init should escaped only once.");
    }, e.ModalRouterIntegrationNotInitialized = function() {
      return new e("The integration was not initialized. Please, use useModalRouter.init(router). For more information: https://modal.jenesius.com/docs.html/integration-vue-router#installation");
    }, e.ModalEventNameMustBeString = function(n) {
      return new e("Event name must be a string. Provided: ".concat(n));
    }, e.ModalNotExistsInStore = function(n) {
      return new e("Provided name(".concat(n, ") don't exist in the store. Has the given name been added to the store?"));
    }, e;
  }(Error)
), m = {
  scrollLock: !0,
  animation: "modal-list",
  backgroundClose: !0,
  escClose: !0,
  store: {}
};
function re(t) {
  if (typeof t != "object")
    throw f.ConfigurationType(t);
  Object.assign(m, t);
}
var s = y([]), g = {
  initialized: !1,
  instanceStorage: {}
};
R(s.value, function() {
  m.scrollLock && (s.value.length ? document.body.style.overflowY = "hidden" : document.body.style.overflowY = "auto");
});
var p = {
  store: {},
  add: function(t, e, n) {
    var i;
    if (typeof n != "function")
      throw f.GuardDeclarationType(n);
    this.store[t] || (this.store[t] = (i = {}, i[e] = [], i)), this.store[t][e] || (this.store[t][e] = []), this.store[t][e].push(n);
  },
  get: function(t, e) {
    return t in this.store ? e in this.store[t] ? this.store[t][e] : [] : [];
  },
  delete: function(t) {
    t in this.store && delete this.store[t];
  }
};
function x(t) {
  return t.reduce(function(e, n) {
    return e.then(function() {
      return n();
    });
  }, Promise.resolve());
}
function F(t, e, n) {
  return function() {
    return new Promise(function(i, r) {
      var o = function(a) {
        a === void 0 && (a = !0), a === !1 && r(f.NextReject(e)), i();
      };
      Promise.resolve(t.call(g.instanceStorage[e], n)).then(o).catch(function(a) {
        return r(a);
      });
    });
  };
}
function $(t) {
  return t === void 0 && (t = ""), x(s.value.filter(function(e) {
    return !t || !e.containerId || e.containerId === t;
  }).map(function(e) {
    return function() {
      return e.close();
    };
  }));
}
function O(t) {
  if (t === void 0 && (t = ""), t) {
    if (s.value.filter(function(n) {
      return !n.containerId || n.containerId === t;
    }).length === 0)
      return;
    var e = function() {
      for (var n = s.value.length - 1; n >= 0; n--)
        if (s.value[n].containerId === t)
          return n;
      return -1;
    };
    return s.value[e()];
  } else
    return s.value.length === 0 ? void 0 : s.value[s.value.length - 1];
}
function oe(t) {
  t === void 0 && (t = "");
  var e = O(t);
  return e ? e.close() : Promise.resolve();
}
function q(t) {
  t === void 0 && (t = {});
  var e = {
    background: !1,
    esc: !1
  };
  return Object.assign(e, t);
}
function C(t, e) {
  e === void 0 && (e = {});
  var n = s.value.findIndex(function(r) {
    return r.id === t;
  });
  if (n === -1)
    return Promise.reject(f.Undefined(t));
  var i = p.get(t, "close").map(function(r) {
    return F(r, t, q(e));
  });
  return x(i).then(function() {
    s.value.splice(n, 1), delete g.instanceStorage[t], p.delete(t);
  });
}
function H(t, e) {
  g.instanceStorage[t] = e;
}
function L(t) {
  return g.instanceStorage[t];
}
function Y(t) {
  var e = {
    backgroundClose: m.backgroundClose,
    isRoute: !1,
    containerId: ""
  };
  return t.backgroundClose !== void 0 && (e.backgroundClose = t.backgroundClose), t.isRoute && (e.isRoute = t.isRoute), t.containerId && (e.containerId = t.containerId), e;
}
var S = (
  /** @class */
  function() {
    function t(e, n, i) {
      var r = this;
      this.events = T({}), this.backgroundClose = !0, this.isRoute = !1, this.containerId = "", this.id = t.modalId++, this.component = e, this.props = y(n), this.closed = P(function() {
        return !s.value.includes(r);
      }), e.beforeModalClose && p.add(this.id, "close", e.beforeModalClose);
      var o = Y(i);
      this.backgroundClose = o.backgroundClose, this.isRoute = o.isRoute, this.containerId = o.containerId;
    }
    return t.prototype.close = function() {
      return C(this.id);
    }, Object.defineProperty(t.prototype, "onclose", {
      /**
       * @description Hook for handling modal closing
       * */
      set: function(e) {
        p.add(this.id, "close", e);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "instance", {
      /**
       * @description Return instance of modal component
       * */
      get: function() {
        return L(this.id);
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.on = function(e, n) {
      var i = this;
      return Array.isArray(this.events[e]) || (this.events[e] = []), this.events[e].push(n), function() {
        var r = i.events[e].indexOf(n);
        r !== -1 && i.events[e].splice(r, 1);
      };
    }, t.modalId = 0, t.EVENT_PROMPT = "jenesius-vue-modal:____P____R____O____M____P____T", t;
  }()
);
function J(t, e, n) {
  if (!g.initialized)
    throw f.NotInitialized();
  if (typeof t == "string") {
    var i = X(t);
    if (!i)
      throw f.ModalNotExistsInStore(t);
    t = i;
  }
  if (!t)
    throw f.ModalComponentNotProvided();
  var r = new S(t, e, n);
  return s.value.push(N(r)), r;
}
function j(t, e, n) {
  return e === void 0 && (e = {}), n === void 0 && (n = {}), Promise.resolve().then(function() {
    return J(t, e, n);
  });
}
function K(t, e, n) {
  return e === void 0 && (e = {}), n === void 0 && (n = {}), $(n.containerId).then(function() {
    return j(t, e, n);
  });
}
function ie(t) {
  var e, n, i, r = z(), o = String(((e = r == null ? void 0 : r.props) === null || e === void 0 ? void 0 : e.modalId) || ((n = r == null ? void 0 : r.props) === null || n === void 0 ? void 0 : n["modal-id"]) || ((i = r == null ? void 0 : r.attrs) === null || i === void 0 ? void 0 : i.modalId)), a = o.replace(/[^0-9]/g, "");
  p.add(Number(a), "close", t);
}
function ue(t, e, n) {
  return e === void 0 && (e = {}), n === void 0 && (n = {}), v(this, void 0, void 0, function() {
    var i, r = this;
    return h(this, function(o) {
      switch (o.label) {
        case 0:
          return [4, j(t, e, n)];
        case 1:
          return i = o.sent(), [2, new Promise(function(a) {
            i.on(S.EVENT_PROMPT, function(l) {
              return v(r, void 0, void 0, function() {
                return h(this, function(c) {
                  switch (c.label) {
                    case 0:
                      return [4, i.close()];
                    case 1:
                      return c.sent(), a(l), [
                        2
                        /*return*/
                      ];
                  }
                });
              });
            });
          })];
      }
    });
  });
}
function X(t) {
  return m.store[t] || void 0;
}
const E = {
  __name: "WidgetModalContainerItem",
  props: {
    id: Number
  },
  setup(t) {
    const e = t, n = y(null), i = y(null), r = o(e.id);
    function o(l) {
      return s.value.find((c) => c.id === l);
    }
    function a(l) {
      if (l.target === i.value && r.backgroundClose)
        return C(r.id, { background: !0 }).catch(() => {
        });
    }
    return R(() => n.value, (l) => {
      H(e.id, l);
    }), (l, c) => (k(), G("div", {
      class: "widget__modal-container__item modal-container",
      ref_key: "containerRef",
      ref: i,
      onClick: a
    }, [
      (k(), B(D(b(r).component), A(b(r).props.value, {
        class: "modal-item widget__modal-wrap",
        modalId: `_modal_${t.id}`,
        ref_key: "modalRef",
        ref: n
      }, Q(b(r).events)), null, 16, ["modalId"]))
    ], 512));
  }
};
function Z() {
  g.initialized = !0, document.addEventListener("keyup", function(t) {
    if (m.escClose && (t.key === "Escape" || t.code === "Escape")) {
      var e = O();
      if (!e)
        return;
      C(e.id, { esc: !0 });
    }
  });
}
const ae = {
  setup(t) {
    return U(Z), () => I(V, { name: m.animation }, {
      default: () => s.value.filter((e) => !e.containerId || e.containerId === t.containerId).map((e) => I(E, {
        key: e.id,
        id: e.id
      }))
    });
  },
  components: { WidgetContainerModalItem: E },
  props: {
    containerId: {
      type: String,
      default: ""
    }
  }
};
var _ = {
  router: null
};
function ee(t) {
  var e = this;
  if (_.router)
    throw f.DuplicatedRouterIntegration();
  _.router = t;
  function n(i) {
    for (var r = i.matched.length - 1; r >= 0; r--) {
      var o = i.matched[r].components, a = Object.values(o).find(function(l) {
        return l._isModal;
      });
      if (a)
        return a;
    }
    return null;
  }
  t.beforeEach(function(i, r) {
    return v(e, void 0, void 0, function() {
      var o, a, l;
      return h(this, function(c) {
        switch (c.label) {
          case 0:
            return c.trys.push([0, 3, , 4]), o = n(r), o && !(!((l = (a = o.getModalObject()) === null || a === void 0 ? void 0 : a.closed) === null || l === void 0) && l.value) ? [4, o.close(!0)] : [3, 2];
          case 1:
            c.sent(), c.label = 2;
          case 2:
            return [3, 4];
          case 3:
            return c.sent(), [2, !1];
          case 4:
            return [
              2
              /*return*/
            ];
        }
      });
    });
  }), t.afterEach(function(i) {
    return v(e, void 0, void 0, function() {
      var r;
      return h(this, function(o) {
        switch (o.label) {
          case 0:
            return r = n(i), r ? [4, r.initialize()] : [3, 2];
          case 1:
            o.sent(), o.label = 2;
          case 2:
            return [
              2
              /*return*/
            ];
        }
      });
    });
  });
}
function te(t) {
  var e = null, n = !1;
  function i() {
    return v(this, void 0, void 0, function() {
      return h(this, function(r) {
        switch (r.label) {
          case 0:
            if (!_.router)
              throw f.ModalRouterIntegrationNotInitialized();
            return n = !1, e = null, [4, K(t, P(function() {
              var o;
              return (o = _.router) === null || o === void 0 ? void 0 : o.currentRoute.value.params;
            }), { isRoute: !0 })];
          case 1:
            return e = r.sent(), e.onclose = function() {
              var o;
              n || (o = _.router) === null || o === void 0 || o.back();
            }, [
              2
              /*return*/
            ];
        }
      });
    });
  }
  return {
    getModalObject: function() {
      return e;
    },
    /**
     Флаг, использующийся для определения того, что данная компонента -
     обёртка модального окна
     */
    _isModal: !0,
    close: function(r) {
      return r === void 0 && (r = !1), v(this, void 0, void 0, function() {
        return h(this, function(o) {
          switch (o.label) {
            case 0:
              return n = r, e ? [4, e.close()] : [3, 2];
            case 1:
              return [2, o.sent()];
            case 2:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    },
    initialize: i,
    /**
     * Мнимая обёртка. Для того, чтобы рендеринг запускался.
     * -----
     * (19.02.2022)
     * Try to change null to RouterView, using this way we can use children
     * in router configuration.
     * */
    setup: function() {
      return function() {
        return null;
      };
    }
  };
}
te.init = ee;
export {
  S as Modal,
  C as closeById,
  $ as closeModal,
  re as config,
  ae as container,
  X as getComponentFromStore,
  O as getCurrentModal,
  s as modalQueue,
  ie as onBeforeModalClose,
  K as openModal,
  oe as popModal,
  ue as promptModal,
  j as pushModal,
  te as useModalRouter
};
//# sourceMappingURL=jenesius-vue-modal.es.js.map
