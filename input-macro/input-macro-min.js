/* Mali's input macro set */

((e=0)=>{function t(e,t){let a,[r,i]=e.args,n=typeof r,s=t.preset.type??"string";if(r instanceof RegExp){if("string"!==s)return this.error(`A ${t.type} input doesn't yield a string, you can't test it against a regular expression.`);a=e=>r.test(e)}else if(r instanceof Date){if("date"!==t.preset.type)return this.error(`A ${t.type} input doesn't yield a date object you can check against.`);a=e=>r.toString()===e.toString()}else if("function"===n)a=r;else{if(n!==s)return this.error(`A ${t.type} input cannot return ${r} (${n}).`);a=e=>e===r}t.on.push({check:a,payload:e.contents.trim(),override:i})}function a(e,t,a){let r={};t instanceof Array||t instanceof Set?t.forEach((e=>r[e]=e)):r=t;for(const t in r){const i=r[t]===a?"selected":"",n=Util.escape(r[t]);e.append(`<option value='${n}' ${i}>${t}</option>`)}}const r={area:{elem:"textarea",attr:{spellcheck:!1}},color:{},checkbox:{type:"boolean"},date:{type:"date"},email:{list:!0},file:{type:"file"},number:{type:"number",list:!0},password:{list:!0},range:{type:"number"},search:{list:!0},select:{elem:"select",list:"onSelf"},tel:{list:!0},text:{list:!0},time:{list:!0},url:{list:!0}},i=Object.keys(r).map((e=>"input-"+e));Macro.add(["input",...i],{tags:["onvalue","default","optionsfrom"],skipArgs:["optionsfrom"],isAsync:!0,types:r,names:i,handler(){const r={type:"text",on:[],value:null,any:this.payload[0].contents.trim(),clamp:{min:Number.MIN_SAFE_INTEGER,max:Number.MAX_SAFE_INTEGER},label:"",sanitize:!1,goto:null,variable:null,listID:"list-"+e++},i=(e=>{let t={},a=0;for(;a<e.length;){const r=e[a];if("object"==typeof r)Array.isArray(r)?e.splice(a--,1,...r):Object.assign(t,r);else{const i=e[a+=1];if(void 0===i)throw new Error("Uneven number of arguments.");if("string"!=typeof r)throw new Error(`Attribute key must be a string, reading: '${r}'.`);t[r.toLowerCase()]=i}a++}return t})(this.args);let n;if(["type","value","goto","label","sanitize","variable"].forEach((e=>{i.hasOwnProperty(e)&&(r[e]=i[e],delete i[e])})),this.name.includes("-")&&(r.type=this.name.slice(6)),r.preset=this.self.types[r.type]??{},n=r.preset.elem?$(document.createElement(r.preset.elem)).attr({tabindex:0}):$("<input>").attr({type:r.type,value:r.value,tabindex:0}),r.variable){if("string"!=typeof r.variable)return this.error(`Variable parameter must be a quoted variable, reading ${r.variable}`);r.value&&State.setVar(r.variable,r.value);const e=State.getVar(r.variable);"checkbox"===r.type?n[0].checked=!!e:null!=e&&"file"!==r.type&&(n[0].value=e)}["min","max"].map((e=>i.hasOwnProperty(e)?r.clamp[e]=i[e]:null));const s=$("<label>").attr({class:"macro-input-label"}).text(r.label);let l;n.attr(r.preset.attr??{}).attr(i).addClass("macro-input").appendTo(s),this.payload.forEach((e=>{switch(e.name){case"onvalue":t.call(this,e,r);break;case"optionsfrom":if(!r.preset.list)return this.error(`${r.type} input cannot have an <<optionsfrom>> argument.`);let i=Scripting.evalJavaScript(`(${e.args.full})`);if("onSelf"===r.preset.list)a(n,i,r.value);else{const e=$(`<datalist id='${r.listID}'>`).appendTo(s);n.attr({list:r.listID}),a(e,i)}break;case"default":r.on.default=e.contents.trim()}})),n.on("change",this.createShadowWrapper((()=>{let e=((e,{clamp:t,preset:a,sanitize:r})=>{switch(a.type){case"boolean":return e.checked;case"file":return e.files;case"number":const a=Math.clamp(Number(e.value),t.min,t.max);return e.value=a,a;case"date":return new Date(e.value);default:return r?Util.escapeMarkup(e.value):e.value}})(n[0],r);const t=r.on.find((t=>t.check(e)));t&&null!=t.override&&(n[0].value=e=t.override),r.variable&&State.setVar(r.variable,e),l=State.temporary.this,State.temporary.this={config:r,value:e,input:n[0],wrapper:s[0]},this.addShadow("_this"),t?$.wiki(t.payload):r.on.default&&$.wiki(r.on.default),$.wiki(r.any)}),(()=>State.temporary.this=l))),n.on("keypress",(e=>{13===e.which&&null!=r.goto&&Engine.play("object"==typeof r.goto?r.goto.link:r.goto)})),s.appendTo(this.output)}})})();

/* End of the input macro set */