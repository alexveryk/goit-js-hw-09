function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},t=n.parcelRequired7c6;null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in r){var n=r[e];delete r[e];var t={id:e,exports:{}};return o[e]=t,n.call(t.exports,t,t.exports),t.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){r[e]=n},n.parcelRequired7c6=t);var i=t("eWCmQ");const l=document.querySelector(".form");function s(e,n){return new Promise(((o,r)=>{setTimeout((()=>{Math.random()>.3?o(`✅ Fulfilled promise ${e} in ${n}ms`):r(`❌ Rejected promise ${e} in ${n}ms`)}),n)}))}l.addEventListener("submit",(function(n){n.preventDefault();const{elements:{delay:o,step:r,amount:t}}=n.currentTarget;for(let n=0,l=Number(o.value);n<Number(t.value);n++,l+=Number(r.value)){s(n+1,l).then(((n,o)=>{console.log(`✅ Fulfilled promise ${n} in ${o}ms`),e(i).Notify.success(`✅ Fulfilled promise ${n} in ${o}ms`)})).catch(((n,o)=>{console.log(`❌ Rejected promise ${n} in ${o}ms`),e(i).Notify.failure(`❌ Rejected promise ${n} in ${o}ms`)}))}l.reset()}));
//# sourceMappingURL=03-promises.a7b907e0.js.map
