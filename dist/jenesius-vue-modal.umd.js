(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".modal-container{position:fixed;left:0;top:0;height:100%;width:100%;display:flex;align-items:center;justify-content:center;background-color:#3e3e3e21;cursor:pointer}.modal-item{cursor:default}.modal-list-enter-active,.modal-list-leave-active,.modal-list-enter-active .modal-item,.modal-list-leave-active .modal-item{transition:all .2s ease}.modal-list-enter-from,.modal-list-leave-to{opacity:0!important}.modal-list-enter-from .modal-item,.modal-list-leave-to .modal-item{transform:translateY(-60px)}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
(function(c,a){typeof exports=="object"&&typeof module<"u"?a(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],a):(c=typeof globalThis<"u"?globalThis:c||self,a(c.JenesiusVueModal={},c.Vue))})(this,function(c,a){"use strict";/*!
  * jenesius-vue-modal v1.9.2
  * (c) 2023 Jenesius
  * @license MIT
  */var M=function(n,e){return M=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])},M(n,e)};function N(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");M(n,e);function t(){this.constructor=n}n.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}function m(n,e,t,i){function r(o){return o instanceof t?o:new t(function(l){l(o)})}return new(t||(t=Promise))(function(o,l){function s(v){try{u(i.next(v))}catch(R){l(R)}}function f(v){try{u(i.throw(v))}catch(R){l(R)}}function u(v){v.done?o(v.value):r(v.value).then(s,f)}u((i=i.apply(n,e||[])).next())})}function g(n,e){var t={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},i,r,o,l;return l={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(l[Symbol.iterator]=function(){return this}),l;function s(u){return function(v){return f([u,v])}}function f(u){if(i)throw new TypeError("Generator is already executing.");for(;l&&(l=0,u[0]&&(t=0)),t;)try{if(i=1,r&&(o=u[0]&2?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[u[0]&2,o.value]),u[0]){case 0:case 1:o=u;break;case 4:return t.label++,{value:u[1],done:!1};case 5:t.label++,r=u[1],u=[0];continue;case 7:u=t.ops.pop(),t.trys.pop();continue;default:if(o=t.trys,!(o=o.length>0&&o[o.length-1])&&(u[0]===6||u[0]===2)){t=0;continue}if(u[0]===3&&(!o||u[1]>o[0]&&u[1]<o[3])){t.label=u[1];break}if(u[0]===6&&t.label<o[1]){t.label=o[1],o=u;break}if(o&&t.label<o[2]){t.label=o[2],t.ops.push(u);break}o[2]&&t.ops.pop(),t.trys.pop();continue}u=e.call(n,t)}catch(v){u=[6,v],r=0}finally{i=o=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}typeof SuppressedError=="function"&&SuppressedError;var h=function(n){N(e,n);function e(t,i){i===void 0&&(i=null);var r=n.call(this)||this;return r.isModalError=!0,r.message=t,r.details=i,r}return e.Undefined=function(t){return new e("Modal with id: ".concat(t," not founded. The modal window may have been closed earlier."))},e.UndefinedGuardName=function(t){return new e("Guard's name ".concat(t," is not declaration."))},e.NextReject=function(t){return new e("Guard returned false. Modal navigation was stopped. Modal id ".concat(t))},e.GuardDeclarationType=function(t){return new e("Guard's type should be a function. Provided:",t)},e.ConfigurationType=function(t){return new e("Configuration type must be an Object. Provided",t)},e.ConfigurationUndefinedParam=function(t,i){return new e("In configuration founded unknown parameter: ".concat(t,". Available are ").concat(i.join(", ")," "))},e.QueueNoEmpty=function(){return new e("Modal's queue is not empty. Probably some modal reject closing by onClose hook.")},e.EmptyModalQueue=function(){return new e("Modal queue is empty.")},e.NotInitialized=function(){return new e("Modal Container not found. Put container from jenesius-vue-modal in App's template. Check documentation for more information https://modal.jenesius.com/docs.html/installation#getting-started.")},e.ModalComponentNotProvided=function(){return new e("The first parameter(VueComponent) was not specified.")},e.DuplicatedRouterIntegration=function(){return new e("useModalRouter.init should escaped only once.")},e.ModalRouterIntegrationNotInitialized=function(){return new e("The integration was not initialized. Please, use useModalRouter.init(router). For more information: https://modal.jenesius.com/docs.html/integration-vue-router#installation")},e.ModalEventNameMustBeString=function(t){return new e("Event name must be a string. Provided: ".concat(t))},e.ModalNotExistsInStore=function(t){return new e("Provided name(".concat(t,") don't exist in the store. Has the given name been added to the store?"))},e}(Error),_={scrollLock:!0,animation:"modal-list",backgroundClose:!0,escClose:!0,store:{}};function z(n){if(typeof n!="object")throw h.ConfigurationType(n);Object.assign(_,n)}var d=a.ref([]),y={initialized:!1,instanceStorage:{}};a.watch(d.value,function(){_.scrollLock&&(d.value.length?document.body.style.overflowY="hidden":document.body.style.overflowY="auto")});var p={store:{},add:function(n,e,t){var i;if(typeof t!="function")throw h.GuardDeclarationType(t);this.store[n]||(this.store[n]=(i={},i[e]=[],i)),this.store[n][e]||(this.store[n][e]=[]),this.store[n][e].push(t)},get:function(n,e){return n in this.store?e in this.store[n]?this.store[n][e]:[]:[]},delete:function(n){n in this.store&&delete this.store[n]}};function E(n){return n.reduce(function(e,t){return e.then(function(){return t()})},Promise.resolve())}function x(n,e,t){return function(){return new Promise(function(i,r){var o=function(l){l===void 0&&(l=!0),l===!1&&r(h.NextReject(e)),i()};Promise.resolve(n.call(y.instanceStorage[e],t)).then(o).catch(function(l){return r(l)})})}}function P(n){return n===void 0&&(n=""),E(d.value.filter(function(e){return!n||!e.containerId||e.containerId===n}).map(function(e){return function(){return e.close()}}))}function C(n){if(n===void 0&&(n=""),n){if(d.value.filter(function(t){return!t.containerId||t.containerId===n}).length===0)return;var e=function(){for(var t=d.value.length-1;t>=0;t--)if(d.value[t].containerId===n)return t;return-1};return d.value[e()]}else return d.value.length===0?void 0:d.value[d.value.length-1]}function B(n){n===void 0&&(n="");var e=C(n);return e?e.close():Promise.resolve()}function G(n){n===void 0&&(n={});var e={background:!1,esc:!1};return Object.assign(e,n)}function b(n,e){e===void 0&&(e={});var t=d.value.findIndex(function(r){return r.id===n});if(t===-1)return Promise.reject(h.Undefined(n));var i=p.get(n,"close").map(function(r){return x(r,n,G(e))});return E(i).then(function(){d.value.splice(t,1),delete y.instanceStorage[n],p.delete(n)})}function D(n,e){y.instanceStorage[n]=e}function V(n){return y.instanceStorage[n]}function A(n){var e={backgroundClose:_.backgroundClose,isRoute:!1,containerId:""};return n.backgroundClose!==void 0&&(e.backgroundClose=n.backgroundClose),n.isRoute&&(e.isRoute=n.isRoute),n.containerId&&(e.containerId=n.containerId),e}var k=function(){function n(e,t,i){var r=this;this.events=a.reactive({}),this.backgroundClose=!0,this.isRoute=!1,this.containerId="",this.id=n.modalId++,this.component=e,this.props=a.ref(t),this.closed=a.computed(function(){return!d.value.includes(r)}),e.beforeModalClose&&p.add(this.id,"close",e.beforeModalClose);var o=A(i);this.backgroundClose=o.backgroundClose,this.isRoute=o.isRoute,this.containerId=o.containerId}return n.prototype.close=function(){return b(this.id)},Object.defineProperty(n.prototype,"onclose",{set:function(e){p.add(this.id,"close",e)},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"instance",{get:function(){return V(this.id)},enumerable:!1,configurable:!0}),n.prototype.on=function(e,t){var i=this;return Array.isArray(this.events[e])||(this.events[e]=[]),this.events[e].push(t),function(){var r=i.events[e].indexOf(t);r!==-1&&i.events[e].splice(r,1)}},n.modalId=0,n.EVENT_PROMPT="jenesius-vue-modal:____P____R____O____M____P____T",n}();function Q(n,e,t){if(!y.initialized)throw h.NotInitialized();if(typeof n=="string"){var i=j(n);if(!i)throw h.ModalNotExistsInStore(n);n=i}if(!n)throw h.ModalComponentNotProvided();var r=new k(n,e,t);return d.value.push(a.markRaw(r)),r}function I(n,e,t){return e===void 0&&(e={}),t===void 0&&(t={}),Promise.resolve().then(function(){return Q(n,e,t)})}function S(n,e,t){return e===void 0&&(e={}),t===void 0&&(t={}),P(t.containerId).then(function(){return I(n,e,t)})}function F(n){var e,t,i,r=a.getCurrentInstance(),o=String(((e=r==null?void 0:r.props)===null||e===void 0?void 0:e.modalId)||((t=r==null?void 0:r.props)===null||t===void 0?void 0:t["modal-id"])||((i=r==null?void 0:r.attrs)===null||i===void 0?void 0:i.modalId)),l=o.replace(/[^0-9]/g,"");p.add(Number(l),"close",n)}function U(n,e,t){return e===void 0&&(e={}),t===void 0&&(t={}),m(this,void 0,void 0,function(){var i,r=this;return g(this,function(o){switch(o.label){case 0:return[4,I(n,e,t)];case 1:return i=o.sent(),[2,new Promise(function(l){i.on(k.EVENT_PROMPT,function(s){return m(r,void 0,void 0,function(){return g(this,function(f){switch(f.label){case 0:return[4,i.close()];case 1:return f.sent(),l(s),[2]}})})})})]}})})}function j(n){return _.store[n]||void 0}const H="",O={__name:"WidgetModalContainerItem",props:{id:Number},setup(n){const e=n,t=a.ref(null),i=a.ref(null),r=o(e.id);function o(s){return d.value.find(f=>f.id===s)}function l(s){if(s.target===i.value&&r.backgroundClose)return b(r.id,{background:!0}).catch(()=>{})}return a.watch(()=>t.value,s=>{D(e.id,s)}),(s,f)=>(a.openBlock(),a.createElementBlock("div",{class:"widget__modal-container__item modal-container",ref_key:"containerRef",ref:i,onClick:l},[(a.openBlock(),a.createBlock(a.resolveDynamicComponent(a.unref(r).component),a.mergeProps(a.unref(r).props.value,{class:"modal-item widget__modal-wrap",modalId:`_modal_${n.id}`,ref_key:"modalRef",ref:t},a.toHandlers(a.unref(r).events)),null,16,["modalId"]))],512))}};function W(){y.initialized=!0,document.addEventListener("keyup",function(n){if(_.escClose&&(n.key==="Escape"||n.code==="Escape")){var e=C();if(!e)return;b(e.id,{esc:!0})}})}const L="",q={setup(n){return a.onMounted(W),()=>a.h(a.TransitionGroup,{name:_.animation},{default:()=>d.value.filter(e=>!e.containerId||e.containerId===n.containerId).map(e=>a.h(O,{key:e.id,id:e.id}))})},components:{WidgetContainerModalItem:O},props:{containerId:{type:String,default:""}}};var w={router:null};function $(n){var e=this;if(w.router)throw h.DuplicatedRouterIntegration();w.router=n;function t(i){for(var r=i.matched.length-1;r>=0;r--){var o=i.matched[r].components,l=Object.values(o).find(function(s){return s._isModal});if(l)return l}return null}n.beforeEach(function(i,r){return m(e,void 0,void 0,function(){var o,l,s;return g(this,function(f){switch(f.label){case 0:return f.trys.push([0,3,,4]),o=t(r),o&&!(!((s=(l=o.getModalObject())===null||l===void 0?void 0:l.closed)===null||s===void 0)&&s.value)?[4,o.close(!0)]:[3,2];case 1:f.sent(),f.label=2;case 2:return[3,4];case 3:return f.sent(),[2,!1];case 4:return[2]}})})}),n.afterEach(function(i){return m(e,void 0,void 0,function(){var r;return g(this,function(o){switch(o.label){case 0:return r=t(i),r?[4,r.initialize()]:[3,2];case 1:o.sent(),o.label=2;case 2:return[2]}})})})}function T(n){var e=null,t=!1;function i(){return m(this,void 0,void 0,function(){return g(this,function(r){switch(r.label){case 0:if(!w.router)throw h.ModalRouterIntegrationNotInitialized();return t=!1,e=null,[4,S(n,a.computed(function(){var o;return(o=w.router)===null||o===void 0?void 0:o.currentRoute.value.params}),{isRoute:!0})];case 1:return e=r.sent(),e.onclose=function(){var o;t||(o=w.router)===null||o===void 0||o.back()},[2]}})})}return{getModalObject:function(){return e},_isModal:!0,close:function(r){return r===void 0&&(r=!1),m(this,void 0,void 0,function(){return g(this,function(o){switch(o.label){case 0:return t=r,e?[4,e.close()]:[3,2];case 1:return[2,o.sent()];case 2:return[2]}})})},initialize:i,setup:function(){return function(){return null}}}}T.init=$,c.Modal=k,c.closeById=b,c.closeModal=P,c.config=z,c.container=q,c.getComponentFromStore=j,c.getCurrentModal=C,c.modalQueue=d,c.onBeforeModalClose=F,c.openModal=S,c.popModal=B,c.promptModal=U,c.pushModal=I,c.useModalRouter=T,Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});
//# sourceMappingURL=jenesius-vue-modal.umd.js.map
