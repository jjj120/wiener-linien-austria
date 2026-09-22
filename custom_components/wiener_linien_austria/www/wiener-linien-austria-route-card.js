/*! Wiener Linien Austria — bundled by Rolldown. Edit sources in src/, then `npm run build`. */
//#region \0rolldown/runtime.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) {
		__defProp(target, name, {
			get: all[name],
			enumerable: true
		});
	}
	if (!no_symbols) {
		__defProp(target, Symbol.toStringTag, { value: "Module" });
	}
	return target;
};

//#endregion
//#region node_modules/@lit/reactive-element/css-tag.js
/**
* @license
* Copyright 2019 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const t$3 = globalThis;
const e$3 = t$3.ShadowRoot && (void 0 === t$3.ShadyCSS || t$3.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
const s$2 = Symbol();
const o$5 = /* @__PURE__ */ new WeakMap();
var n$4 = class {
	constructor(t, e, o) {
		if (this._$cssResult$ = !0, o !== s$2) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
		this.cssText = t, this.t = e;
	}
	get styleSheet() {
		let t = this.o;
		const s = this.t;
		if (e$3 && void 0 === t) {
			const e = void 0 !== s && 1 === s.length;
			e && (t = o$5.get(s)), void 0 === t && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), e && o$5.set(s, t));
		}
		return t;
	}
	toString() {
		return this.cssText;
	}
};
const r$4 = (t) => new n$4("string" == typeof t ? t : t + "", void 0, s$2);
const i$5 = (t, ...e) => {
	const o = 1 === t.length ? t[0] : e.reduce((e, s, o) => e + ((t) => {
		if (!0 === t._$cssResult$) return t.cssText;
		if ("number" == typeof t) return t;
		throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
	})(s) + t[o + 1], t[0]);
	return new n$4(o, t, s$2);
};
const S$1 = (s, o) => {
	if (e$3) s.adoptedStyleSheets = o.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
	else for (const e of o) {
		const o = document.createElement("style"), n = t$3.litNonce;
		void 0 !== n && o.setAttribute("nonce", n), o.textContent = e.cssText, s.appendChild(o);
	}
};
const c$2 = e$3 ? (t) => t : (t) => t instanceof CSSStyleSheet ? ((t) => {
	let e = "";
	for (const s of t.cssRules) e += s.cssText;
	return r$4(e);
})(t) : t;

//#endregion
//#region node_modules/@lit/reactive-element/reactive-element.js
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/ const { is: i$4, defineProperty: e$2, getOwnPropertyDescriptor: h$1, getOwnPropertyNames: r$3, getOwnPropertySymbols: o$4, getPrototypeOf: n$3 } = Object, a$1 = globalThis, c$1 = a$1.trustedTypes, l$1 = c$1 ? c$1.emptyScript : "", p$1 = a$1.reactiveElementPolyfillSupport, d$1 = (t, s) => t, u$1 = {
	toAttribute(t, s) {
		switch (s) {
			case Boolean:
				t = t ? l$1 : null;
				break;
			case Object:
			case Array: t = null == t ? t : JSON.stringify(t);
		}
		return t;
	},
	fromAttribute(t, s) {
		let i = t;
		switch (s) {
			case Boolean:
				i = null !== t;
				break;
			case Number:
				i = null === t ? null : Number(t);
				break;
			case Object:
			case Array: try {
				i = JSON.parse(t);
			} catch (t) {
				i = null;
			}
		}
		return i;
	}
}, f$1 = (t, s) => !i$4(t, s), b$1 = {
	attribute: !0,
	type: String,
	converter: u$1,
	reflect: !1,
	useDefault: !1,
	hasChanged: f$1
};
Symbol.metadata ??= Symbol("metadata"), a$1.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
var y$1 = class extends HTMLElement {
	static addInitializer(t) {
		this._$Ei(), (this.l ??= []).push(t);
	}
	static get observedAttributes() {
		return this.finalize(), this._$Eh && [...this._$Eh.keys()];
	}
	static createProperty(t, s = b$1) {
		if (s.state && (s.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((s = Object.create(s)).wrapped = !0), this.elementProperties.set(t, s), !s.noAccessor) {
			const i = Symbol(), h = this.getPropertyDescriptor(t, i, s);
			void 0 !== h && e$2(this.prototype, t, h);
		}
	}
	static getPropertyDescriptor(t, s, i) {
		const { get: e, set: r } = h$1(this.prototype, t) ?? {
			get() {
				return this[s];
			},
			set(t) {
				this[s] = t;
			}
		};
		return {
			get: e,
			set(s) {
				const h = e?.call(this);
				r?.call(this, s), this.requestUpdate(t, h, i);
			},
			configurable: !0,
			enumerable: !0
		};
	}
	static getPropertyOptions(t) {
		return this.elementProperties.get(t) ?? b$1;
	}
	static _$Ei() {
		if (this.hasOwnProperty(d$1("elementProperties"))) return;
		const t = n$3(this);
		t.finalize(), void 0 !== t.l && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
	}
	static finalize() {
		if (this.hasOwnProperty(d$1("finalized"))) return;
		if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(d$1("properties"))) {
			const t = this.properties, s = [...r$3(t), ...o$4(t)];
			for (const i of s) this.createProperty(i, t[i]);
		}
		const t = this[Symbol.metadata];
		if (null !== t) {
			const s = litPropertyMetadata.get(t);
			if (void 0 !== s) for (const [t, i] of s) this.elementProperties.set(t, i);
		}
		this._$Eh = /* @__PURE__ */ new Map();
		for (const [t, s] of this.elementProperties) {
			const i = this._$Eu(t, s);
			void 0 !== i && this._$Eh.set(i, t);
		}
		this.elementStyles = this.finalizeStyles(this.styles);
	}
	static finalizeStyles(s) {
		const i = [];
		if (Array.isArray(s)) {
			const e = new Set(s.flat(1 / 0).reverse());
			for (const s of e) i.unshift(c$2(s));
		} else void 0 !== s && i.push(c$2(s));
		return i;
	}
	static _$Eu(t, s) {
		const i = s.attribute;
		return !1 === i ? void 0 : "string" == typeof i ? i : "string" == typeof t ? t.toLowerCase() : void 0;
	}
	constructor() {
		super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
	}
	_$Ev() {
		this._$ES = new Promise((t) => this.enableUpdating = t), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t) => t(this));
	}
	addController(t) {
		(this._$EO ??= /* @__PURE__ */ new Set()).add(t), void 0 !== this.renderRoot && this.isConnected && t.hostConnected?.();
	}
	removeController(t) {
		this._$EO?.delete(t);
	}
	_$E_() {
		const t = /* @__PURE__ */ new Map(), s = this.constructor.elementProperties;
		for (const i of s.keys()) this.hasOwnProperty(i) && (t.set(i, this[i]), delete this[i]);
		t.size > 0 && (this._$Ep = t);
	}
	createRenderRoot() {
		const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
		return S$1(t, this.constructor.elementStyles), t;
	}
	connectedCallback() {
		this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach((t) => t.hostConnected?.());
	}
	enableUpdating(t) {}
	disconnectedCallback() {
		this._$EO?.forEach((t) => t.hostDisconnected?.());
	}
	attributeChangedCallback(t, s, i) {
		this._$AK(t, i);
	}
	_$ET(t, s) {
		const i = this.constructor.elementProperties.get(t), e = this.constructor._$Eu(t, i);
		if (void 0 !== e && !0 === i.reflect) {
			const h = (void 0 !== i.converter?.toAttribute ? i.converter : u$1).toAttribute(s, i.type);
			this._$Em = t, null == h ? this.removeAttribute(e) : this.setAttribute(e, h), this._$Em = null;
		}
	}
	_$AK(t, s) {
		const i = this.constructor, e = i._$Eh.get(t);
		if (void 0 !== e && this._$Em !== e) {
			const t = i.getPropertyOptions(e), h = "function" == typeof t.converter ? { fromAttribute: t.converter } : void 0 !== t.converter?.fromAttribute ? t.converter : u$1;
			this._$Em = e;
			const r = h.fromAttribute(s, t.type);
			this[e] = r ?? this._$Ej?.get(e) ?? r, this._$Em = null;
		}
	}
	requestUpdate(t, s, i, e = !1, h) {
		if (void 0 !== t) {
			const r = this.constructor;
			if (!1 === e && (h = this[t]), i ??= r.getPropertyOptions(t), !((i.hasChanged ?? f$1)(h, s) || i.useDefault && i.reflect && h === this._$Ej?.get(t) && !this.hasAttribute(r._$Eu(t, i)))) return;
			this.C(t, s, i);
		}
		!1 === this.isUpdatePending && (this._$ES = this._$EP());
	}
	C(t, s, { useDefault: i, reflect: e, wrapped: h }, r) {
		i && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(t) && (this._$Ej.set(t, r ?? s ?? this[t]), !0 !== h || void 0 !== r) || (this._$AL.has(t) || (this.hasUpdated || i || (s = void 0), this._$AL.set(t, s)), !0 === e && this._$Em !== t && (this._$Eq ??= /* @__PURE__ */ new Set()).add(t));
	}
	async _$EP() {
		this.isUpdatePending = !0;
		try {
			await this._$ES;
		} catch (t) {
			Promise.reject(t);
		}
		const t = this.scheduleUpdate();
		return null != t && await t, !this.isUpdatePending;
	}
	scheduleUpdate() {
		return this.performUpdate();
	}
	performUpdate() {
		if (!this.isUpdatePending) return;
		if (!this.hasUpdated) {
			if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
				for (const [t, s] of this._$Ep) this[t] = s;
				this._$Ep = void 0;
			}
			const t = this.constructor.elementProperties;
			if (t.size > 0) for (const [s, i] of t) {
				const { wrapped: t } = i, e = this[s];
				!0 !== t || this._$AL.has(s) || void 0 === e || this.C(s, void 0, i, e);
			}
		}
		let t = !1;
		const s = this._$AL;
		try {
			t = this.shouldUpdate(s), t ? (this.willUpdate(s), this._$EO?.forEach((t) => t.hostUpdate?.()), this.update(s)) : this._$EM();
		} catch (s) {
			throw t = !1, this._$EM(), s;
		}
		t && this._$AE(s);
	}
	willUpdate(t) {}
	_$AE(t) {
		this._$EO?.forEach((t) => t.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
	}
	_$EM() {
		this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
	}
	get updateComplete() {
		return this.getUpdateComplete();
	}
	getUpdateComplete() {
		return this._$ES;
	}
	shouldUpdate(t) {
		return !0;
	}
	update(t) {
		this._$Eq &&= this._$Eq.forEach((t) => this._$ET(t, this[t])), this._$EM();
	}
	updated(t) {}
	firstUpdated(t) {}
};
y$1.elementStyles = [], y$1.shadowRootOptions = { mode: "open" }, y$1[d$1("elementProperties")] = /* @__PURE__ */ new Map(), y$1[d$1("finalized")] = /* @__PURE__ */ new Map(), p$1?.({ ReactiveElement: y$1 }), (a$1.reactiveElementVersions ??= []).push("2.1.2");

//#endregion
//#region node_modules/lit-html/lit-html.js
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const t$2 = globalThis;
const i$3 = (t) => t;
const s$1 = t$2.trustedTypes;
const e$1 = s$1 ? s$1.createPolicy("lit-html", { createHTML: (t) => t }) : void 0;
const h = "$lit$";
const o$3 = `lit$${Math.random().toFixed(9).slice(2)}$`;
const n$2 = "?" + o$3;
const r$2 = `<${n$2}>`;
const l = document;
const c = () => l.createComment("");
const a = (t) => null === t || "object" != typeof t && "function" != typeof t;
const u = Array.isArray;
const d = (t) => u(t) || "function" == typeof t?.[Symbol.iterator];
const f = "[ 	\n\f\r]";
const v = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
const _ = /-->/g;
const m = />/g;
const p = RegExp(`>|${f}(?:([^\\s"'>=/]+)(${f}*=${f}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g");
const g = /'/g;
const $ = /"/g;
const y = /^(?:script|style|textarea|title)$/i;
const x = (t) => (i, ...s) => ({
	_$litType$: t,
	strings: i,
	values: s
});
const b = x(1);
const w = x(2);
const T = x(3);
const E = Symbol.for("lit-noChange");
const A = Symbol.for("lit-nothing");
const C = /* @__PURE__ */ new WeakMap();
const P = l.createTreeWalker(l, 129);
function V(t, i) {
	if (!u(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
	return void 0 !== e$1 ? e$1.createHTML(i) : i;
}
const N = (t, i) => {
	const s = t.length - 1, e = [];
	let n, l = 2 === i ? "<svg>" : 3 === i ? "<math>" : "", c = v;
	for (let i = 0; i < s; i++) {
		const s = t[i];
		let a, u, d = -1, f = 0;
		for (; f < s.length && (c.lastIndex = f, u = c.exec(s), null !== u);) f = c.lastIndex, c === v ? "!--" === u[1] ? c = _ : void 0 !== u[1] ? c = m : void 0 !== u[2] ? (y.test(u[2]) && (n = RegExp("</" + u[2], "g")), c = p) : void 0 !== u[3] && (c = p) : c === p ? ">" === u[0] ? (c = n ?? v, d = -1) : void 0 === u[1] ? d = -2 : (d = c.lastIndex - u[2].length, a = u[1], c = void 0 === u[3] ? p : "\"" === u[3] ? $ : g) : c === $ || c === g ? c = p : c === _ || c === m ? c = v : (c = p, n = void 0);
		const x = c === p && t[i + 1].startsWith("/>") ? " " : "";
		l += c === v ? s + r$2 : d >= 0 ? (e.push(a), s.slice(0, d) + h + s.slice(d) + o$3 + x) : s + o$3 + (-2 === d ? i : x);
	}
	return [V(t, l + (t[s] || "<?>") + (2 === i ? "</svg>" : 3 === i ? "</math>" : "")), e];
};
var S = class S {
	constructor({ strings: t, _$litType$: i }, e) {
		let r;
		this.parts = [];
		let l = 0, a = 0;
		const u = t.length - 1, d = this.parts, [f, v] = N(t, i);
		if (this.el = S.createElement(f, e), P.currentNode = this.el.content, 2 === i || 3 === i) {
			const t = this.el.content.firstChild;
			t.replaceWith(...t.childNodes);
		}
		for (; null !== (r = P.nextNode()) && d.length < u;) {
			if (1 === r.nodeType) {
				if (r.hasAttributes()) for (const t of r.getAttributeNames()) if (t.endsWith(h)) {
					const i = v[a++], s = r.getAttribute(t).split(o$3), e = /([.?@])?(.*)/.exec(i);
					d.push({
						type: 1,
						index: l,
						name: e[2],
						strings: s,
						ctor: "." === e[1] ? I : "?" === e[1] ? L : "@" === e[1] ? z : H
					}), r.removeAttribute(t);
				} else t.startsWith(o$3) && (d.push({
					type: 6,
					index: l
				}), r.removeAttribute(t));
				if (y.test(r.tagName)) {
					const t = r.textContent.split(o$3), i = t.length - 1;
					if (i > 0) {
						r.textContent = s$1 ? s$1.emptyScript : "";
						for (let s = 0; s < i; s++) r.append(t[s], c()), P.nextNode(), d.push({
							type: 2,
							index: ++l
						});
						r.append(t[i], c());
					}
				}
			} else if (8 === r.nodeType) if (r.data === n$2) d.push({
				type: 2,
				index: l
			});
			else {
				let t = -1;
				for (; -1 !== (t = r.data.indexOf(o$3, t + 1));) d.push({
					type: 7,
					index: l
				}), t += o$3.length - 1;
			}
			l++;
		}
	}
	static createElement(t, i) {
		const s = l.createElement("template");
		return s.innerHTML = t, s;
	}
};
function M(t, i, s = t, e) {
	if (i === E) return i;
	let h = void 0 !== e ? s._$Co?.[e] : s._$Cl;
	const o = a(i) ? void 0 : i._$litDirective$;
	return h?.constructor !== o && (h?._$AO?.(!1), void 0 === o ? h = void 0 : (h = new o(t), h._$AT(t, s, e)), void 0 !== e ? (s._$Co ??= [])[e] = h : s._$Cl = h), void 0 !== h && (i = M(t, h._$AS(t, i.values), h, e)), i;
}
var R = class {
	constructor(t, i) {
		this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = i;
	}
	get parentNode() {
		return this._$AM.parentNode;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	u(t) {
		const { el: { content: i }, parts: s } = this._$AD, e = (t?.creationScope ?? l).importNode(i, !0);
		P.currentNode = e;
		let h = P.nextNode(), o = 0, n = 0, r = s[0];
		for (; void 0 !== r;) {
			if (o === r.index) {
				let i;
				2 === r.type ? i = new k(h, h.nextSibling, this, t) : 1 === r.type ? i = new r.ctor(h, r.name, r.strings, this, t) : 6 === r.type && (i = new Z(h, this, t)), this._$AV.push(i), r = s[++n];
			}
			o !== r?.index && (h = P.nextNode(), o++);
		}
		return P.currentNode = l, e;
	}
	p(t) {
		let i = 0;
		for (const s of this._$AV) void 0 !== s && (void 0 !== s.strings ? (s._$AI(t, s, i), i += s.strings.length - 2) : s._$AI(t[i])), i++;
	}
};
var k = class k {
	get _$AU() {
		return this._$AM?._$AU ?? this._$Cv;
	}
	constructor(t, i, s, e) {
		this.type = 2, this._$AH = A, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = e, this._$Cv = e?.isConnected ?? !0;
	}
	get parentNode() {
		let t = this._$AA.parentNode;
		const i = this._$AM;
		return void 0 !== i && 11 === t?.nodeType && (t = i.parentNode), t;
	}
	get startNode() {
		return this._$AA;
	}
	get endNode() {
		return this._$AB;
	}
	_$AI(t, i = this) {
		t = M(this, t, i), a(t) ? t === A || null == t || "" === t ? (this._$AH !== A && this._$AR(), this._$AH = A) : t !== this._$AH && t !== E && this._(t) : void 0 !== t._$litType$ ? this.$(t) : void 0 !== t.nodeType ? this.T(t) : d(t) ? this.k(t) : this._(t);
	}
	O(t) {
		return this._$AA.parentNode.insertBefore(t, this._$AB);
	}
	T(t) {
		this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
	}
	_(t) {
		this._$AH !== A && a(this._$AH) ? this._$AA.nextSibling.data = t : this.T(l.createTextNode(t)), this._$AH = t;
	}
	$(t) {
		const { values: i, _$litType$: s } = t, e = "number" == typeof s ? this._$AC(t) : (void 0 === s.el && (s.el = S.createElement(V(s.h, s.h[0]), this.options)), s);
		if (this._$AH?._$AD === e) this._$AH.p(i);
		else {
			const t = new R(e, this), s = t.u(this.options);
			t.p(i), this.T(s), this._$AH = t;
		}
	}
	_$AC(t) {
		let i = C.get(t.strings);
		return void 0 === i && C.set(t.strings, i = new S(t)), i;
	}
	k(t) {
		u(this._$AH) || (this._$AH = [], this._$AR());
		const i = this._$AH;
		let s, e = 0;
		for (const h of t) e === i.length ? i.push(s = new k(this.O(c()), this.O(c()), this, this.options)) : s = i[e], s._$AI(h), e++;
		e < i.length && (this._$AR(s && s._$AB.nextSibling, e), i.length = e);
	}
	_$AR(t = this._$AA.nextSibling, s) {
		for (this._$AP?.(!1, !0, s); t !== this._$AB;) {
			const s = i$3(t).nextSibling;
			i$3(t).remove(), t = s;
		}
	}
	setConnected(t) {
		void 0 === this._$AM && (this._$Cv = t, this._$AP?.(t));
	}
};
var H = class {
	get tagName() {
		return this.element.tagName;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	constructor(t, i, s, e, h) {
		this.type = 1, this._$AH = A, this._$AN = void 0, this.element = t, this.name = i, this._$AM = e, this.options = h, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this._$AH = Array(s.length - 1).fill(/* @__PURE__ */ new String()), this.strings = s) : this._$AH = A;
	}
	_$AI(t, i = this, s, e) {
		const h = this.strings;
		let o = !1;
		if (void 0 === h) t = M(this, t, i, 0), o = !a(t) || t !== this._$AH && t !== E, o && (this._$AH = t);
		else {
			const e = t;
			let n, r;
			for (t = h[0], n = 0; n < h.length - 1; n++) r = M(this, e[s + n], i, n), r === E && (r = this._$AH[n]), o ||= !a(r) || r !== this._$AH[n], r === A ? t = A : t !== A && (t += (r ?? "") + h[n + 1]), this._$AH[n] = r;
		}
		o && !e && this.j(t);
	}
	j(t) {
		t === A ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
	}
};
var I = class extends H {
	constructor() {
		super(...arguments), this.type = 3;
	}
	j(t) {
		this.element[this.name] = t === A ? void 0 : t;
	}
};
var L = class extends H {
	constructor() {
		super(...arguments), this.type = 4;
	}
	j(t) {
		this.element.toggleAttribute(this.name, !!t && t !== A);
	}
};
var z = class extends H {
	constructor(t, i, s, e, h) {
		super(t, i, s, e, h), this.type = 5;
	}
	_$AI(t, i = this) {
		if ((t = M(this, t, i, 0) ?? A) === E) return;
		const s = this._$AH, e = t === A && s !== A || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, h = t !== A && (s === A || e);
		e && this.element.removeEventListener(this.name, this, s), h && this.element.addEventListener(this.name, this, t), this._$AH = t;
	}
	handleEvent(t) {
		"function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t);
	}
};
var Z = class {
	constructor(t, i, s) {
		this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	_$AI(t) {
		M(this, t);
	}
};
const B = t$2.litHtmlPolyfillSupport;
B?.(S, k), (t$2.litHtmlVersions ??= []).push("3.3.3");
const D = (t, i, s) => {
	const e = s?.renderBefore ?? i;
	let h = e._$litPart$;
	if (void 0 === h) {
		const t = s?.renderBefore ?? null;
		e._$litPart$ = h = new k(i.insertBefore(c(), t), t, void 0, s ?? {});
	}
	return h._$AI(t), h;
};

//#endregion
//#region node_modules/lit-element/lit-element.js
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/ const s = globalThis;
var i$2 = class extends y$1 {
	constructor() {
		super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
	}
	createRenderRoot() {
		const t = super.createRenderRoot();
		return this.renderOptions.renderBefore ??= t.firstChild, t;
	}
	update(t) {
		const r = this.render();
		this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = D(r, this.renderRoot, this.renderOptions);
	}
	connectedCallback() {
		super.connectedCallback(), this._$Do?.setConnected(!0);
	}
	disconnectedCallback() {
		super.disconnectedCallback(), this._$Do?.setConnected(!1);
	}
	render() {
		return E;
	}
};
i$2._$litElement$ = !0, i$2["finalized"] = !0, s.litElementHydrateSupport?.({ LitElement: i$2 });
const o$2 = s.litElementPolyfillSupport;
o$2?.({ LitElement: i$2 });
(s.litElementVersions ??= []).push("4.2.2");

//#endregion
//#region node_modules/@lit/reactive-element/decorators/custom-element.js
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const t$1 = (t) => (e, o) => {
	void 0 !== o ? o.addInitializer(() => {
		customElements.define(t, e);
	}) : customElements.define(t, e);
};

//#endregion
//#region node_modules/@lit/reactive-element/decorators/property.js
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/ const o$1 = {
	attribute: !0,
	type: String,
	converter: u$1,
	reflect: !1,
	hasChanged: f$1
};
const r$1 = (t = o$1, e, r) => {
	const { kind: n, metadata: i } = r;
	let s = globalThis.litPropertyMetadata.get(i);
	if (void 0 === s && globalThis.litPropertyMetadata.set(i, s = /* @__PURE__ */ new Map()), "setter" === n && ((t = Object.create(t)).wrapped = !0), s.set(r.name, t), "accessor" === n) {
		const { name: o } = r;
		return {
			set(r) {
				const n = e.get.call(this);
				e.set.call(this, r), this.requestUpdate(o, n, t, !0, r);
			},
			init(e) {
				return void 0 !== e && this.C(o, void 0, t, e), e;
			}
		};
	}
	if ("setter" === n) {
		const { name: o } = r;
		return function(r) {
			const n = this[o];
			e.call(this, r), this.requestUpdate(o, n, t, !0, r);
		};
	}
	throw Error("Unsupported decorator location: " + n);
};
function n$1(t) {
	return (e, o) => "object" == typeof o ? r$1(t, e, o) : ((t, e, o) => {
		const r = e.hasOwnProperty(o);
		return e.constructor.createProperty(o, t), r ? Object.getOwnPropertyDescriptor(e, o) : void 0;
	})(t, e, o);
}

//#endregion
//#region node_modules/@lit/reactive-element/decorators/state.js
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/ function r(r) {
	return n$1({
		...r,
		state: !0,
		attribute: !1
	});
}

//#endregion
//#region node_modules/lit-html/directive.js
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const t = {
	ATTRIBUTE: 1,
	CHILD: 2,
	PROPERTY: 3,
	BOOLEAN_ATTRIBUTE: 4,
	EVENT: 5,
	ELEMENT: 6
};
const e = (t) => (...e) => ({
	_$litDirective$: t,
	values: e
});
var i$1 = class {
	constructor(t) {}
	get _$AU() {
		return this._$AM._$AU;
	}
	_$AT(t, e, i) {
		this._$Ct = t, this._$AM = e, this._$Ci = i;
	}
	_$AS(t, e) {
		return this.update(t, e);
	}
	update(t, e) {
		return this.render(...e);
	}
};

//#endregion
//#region node_modules/lit-html/directives/style-map.js
/**
* @license
* Copyright 2018 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/ const n = "important";
const i = " !" + n;
const o = e(class extends i$1 {
	constructor(t$4) {
		if (super(t$4), t$4.type !== t.ATTRIBUTE || "style" !== t$4.name || t$4.strings?.length > 2) throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
	}
	render(t) {
		return Object.keys(t).reduce((e, r) => {
			const s = t[r];
			return null == s ? e : e + `${r = r.includes("-") ? r : r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase()}:${s};`;
		}, "");
	}
	update(e, [r]) {
		const { style: s } = e.element;
		if (void 0 === this.ft) return this.ft = new Set(Object.keys(r)), this.render(r);
		for (const t of this.ft) r[t] ?? (this.ft.delete(t), t.includes("-") ? s.removeProperty(t) : s[t] = null);
		for (const t in r) {
			const e = r[t];
			if (null != e) {
				this.ft.add(t);
				const r = "string" == typeof e && e.endsWith(i);
				t.includes("-") || r ? s.setProperty(t, r ? e.slice(0, -11) : e, r ? n : "") : s[t] = e;
			}
		}
		return E;
	}
});

//#endregion
//#region src/const.ts
const ROUTE_CARD_VERSION = "2.1.0";
const ATTRIBUTION_FALLBACK = "Datenquelle: Wiener Linien (data.wien.gv.at), CC BY 4.0";
const NIGHTLINE_BG = "#1b1464";
const NIGHTLINE_FG = "#fef200";

//#endregion
//#region src/font-face.ts
const WL_FONT_FACE_CSS = `
@font-face {
  font-family: "WL Sans";
  src: url("/wiener-linien-austria/fonts/wl-sans-regular.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "WL Sans";
  src: url("/wiener-linien-austria/fonts/wl-sans-bold.woff2") format("woff2");
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "WL Sans Condensed";
  src: url("/wiener-linien-austria/fonts/wl-sans-condensed-bold.woff2") format("woff2");
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "WL Mono";
  src: url("/wiener-linien-austria/fonts/wl-mono-regular.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "WL Mono";
  src: url("/wiener-linien-austria/fonts/wl-mono-bold.woff2") format("woff2");
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
`;
const WL_FONTS_STYLE_ID = "wl-austria-fonts";
/**
* Register the WL webfont @font-face rules on the main document.
*
* Idempotent: guarded by the `<style>`'s id, so calling it from every
* card's `connectedCallback()` — which HA may fire repeatedly as it
* attaches/detaches the card — injects the block exactly once, and a
* page mixing the modern and retro cards still ends up with a single
* declaration. Safe to call before first render: the browser keeps
* lazy-fetching each woff2 only on first use of its family, so a card
* that never renders (say) WL Sans Condensed pays nothing for it.
*/
function registerWlFonts() {
	if (typeof document === "undefined") return;
	if (document.getElementById(WL_FONTS_STYLE_ID)) return;
	const style = document.createElement("style");
	style.id = WL_FONTS_STYLE_ID;
	style.textContent = WL_FONT_FACE_CSS;
	document.head.appendChild(style);
}

//#endregion
//#region src/localize/languages/de.json
var de_exports = /* @__PURE__ */ __exportAll({
	common: () => common$1,
	default: () => de_default,
	flap: () => flap$1,
	modern: () => modern$1,
	retro: () => retro$1,
	route: () => route$1
});
var common$1 = {
	"picker": {
		"picker_modern": "Abfahrten mit Störungen und Aufzugsinfos",
		"picker_retro": "LED-Anzeige wie in den Wiener-Linien-Stationen",
		"picker_flap": "Abfahrten als Fallblattanzeige",
		"picker_route": "Nächste Verbindung von A nach B, mit Puffer beim Umsteigen"
	},
	"editor": {
		"add_chip": "Chip hinzufügen",
		"add_icon": "Symbol hinzufügen",
		"date_format_placeholder": "d.m.Y",
		"direction_label": "Fahrtrichtung",
		"direction_not_served": "nicht bedient",
		"direction_note_one_way": "Rückfahrt deaktiviert: {line} endet hier.",
		"direction_unavailable": "Keine Abfahrten in dieser Richtung",
		"entities": "Haltestellen",
		"entity": "Haltestelle",
		"header_amenities": "Symbole in diesem Slot",
		"header_bar_aria": "Stationsanzeige — Seite wählen",
		"header_chips_and_icons": "Textchips (max. {chips}) und Extra-Symbole (max. {icons})",
		"header_left": "Linke Seite",
		"header_pick_side_hint": "Seite antippen, dann unten füllen",
		"header_right": "Rechte Seite",
		"header_side_aria": "Seite der Stationsanzeige",
		"header_slot_empty": "leer",
		"line_active_aria": "Linie {line} aktiv",
		"line_inactive_aria": "Linie {line} inaktiv",
		"lines_empty_means_all": "leer = alle Linien",
		"lines_label": "Linien an dieser Haltestelle",
		"lines_selected": "{n} von {total}",
		"no_lines_hint": "Die Linien erscheinen, sobald diese Haltestelle Abfahrten meldet.",
		"no_lines_title": "Noch keine Linien verfügbar",
		"per_line_direction_aria": "Linie {line}: {direction}",
		"remove_chip_aria": "Chip {chip} entfernen",
		"remove_icon_aria": "Symbol {icon} entfernen",
		"remove_stop": "Haltestelle entfernen",
		"section_board": "Fallblatt-Tafel",
		"section_departure_row": "Abfahrtszeile",
		"section_extras": "Extras",
		"section_extras_hint": "optional",
		"section_footer": "Fußzeile",
		"section_header": "Stationsanzeige",
		"section_header_hint": "Direkt am Balken",
		"section_led_panel": "LED-Anzeige",
		"section_station": "Stationsband",
		"section_walk_time": "Gehzeit zur Haltestelle",
		"show_clock_short": "Uhr",
		"show_date_short": "Datum",
		"show_elevator_short": "Lift",
		"show_escalator_short": "Rolltreppe",
		"show_wc_short": "WC",
		"size_medium": "Mittel",
		"size_regular": "Standard",
		"size_small": "Klein",
		"tab_display": "Anzeige",
		"tab_stop": "Haltestelle",
		"tab_stops": "Haltestellen",
		"tab_tweaks": "Stil",
		"text_placeholder": "z. B. Name der nächsten Station",
		"walk_time_aria": "Gehzeit in Minuten für Linie {line} Richtung {towards}",
		"walk_time_branching_hint": "Gilt für alle Endstationen in dieser Richtung",
		"walk_time_hint": "Blendet Abfahrten aus, die ohne dich abfahren würden. Leer = kein Filter.",
		"walk_time_less_aria": "Gehzeit für Linie {line} verringern",
		"walk_time_more_aria": "Gehzeit für Linie {line} erhöhen",
		"walk_time_placeholder": "–",
		"walk_time_unit": "Minuten"
	}
};
var modern$1 = {
	"no_data": "Keine Abfahrten verfügbar",
	"betriebsschluss": "Betriebsschluss",
	"stale_feed": "Keine aktuellen Daten",
	"stale_feed_detail": "Die Wiener Linien melden für diese Haltestelle veraltete Abfahrtszeiten. Sobald wieder Echtzeitdaten kommen, füllt sich die Anzeige automatisch.",
	"stale_feed_since": "Letzte gemeldete Abfahrt: {time}",
	"stale_feed_partial": "Einzelne Linien melden keine aktuellen Zeiten.",
	"min": "Min",
	"now": "Jetzt",
	"platform_short_rail": "Gleis",
	"platform_short_bus": "Steig",
	"version_update": "Wiener Linien Austria wurde auf v{v} aktualisiert — bitte neu laden",
	"version_reload": "Neu laden",
	"version_reload_stuck": "Neu laden hat die neue Version nicht übernommen. Schließe diesen Browser-Tab und öffne das Dashboard erneut, oder lösche die Website-Daten für Home Assistant in den Browser-Einstellungen.",
	"entity_missing": "Sensor {entity} existiert nicht mehr. Wähle einen anderen Sensor oder entferne ihn aus den Haltestellen dieser Karte.",
	"no_entities_picked": "Keine Haltestelle ausgewählt",
	"no_entities_available": "Keine Wiener-Linien-Sensoren gefunden",
	"departures_list": "Kommende Abfahrten",
	"barrier_free_title": "Barrierefrei zugänglich",
	"cooling_title": "Klimatisiert",
	"disturbance_title": "Verkehrsbehinderung gemeldet",
	"stops_ahead_aria_show": "Streckenverlauf für {line} Richtung {towards} anzeigen",
	"stops_ahead_aria_hide": "Streckenverlauf für {line} Richtung {towards} ausblenden",
	"stops_ahead_other_show": "{count} weitere Linien bei {stop} anzeigen",
	"stops_ahead_other_hide": "Weitere Linien bei {stop} ausblenden",
	"dir_h": "Hinfahrt",
	"dir_r": "Rückfahrt",
	"dir_h_short": "H",
	"dir_r_short": "R",
	"dir_both": "Beide",
	"traffic_label": "Störung",
	"traffic_until": "Bis",
	"traffic_updated": "aktualisiert",
	"elevator_until": "Bis",
	"open_in_maps": "In Karte öffnen",
	"qr_open": "QR-Code anzeigen",
	"qr_dialog_title": "QR-Code für Haltestelle",
	"qr_dialog_hint": "Mit dem Smartphone scannen — öffnet die Haltestelle in der Karten-App.",
	"qr_dialog_close": "QR-Code schließen",
	"delay_singular": "1 Min. verspätet",
	"delay_plural": "{n} Min. verspätet",
	"devmode_title": "DEV",
	"devmode_traffic_btn": "Störung testen",
	"devmode_elevator_btn": "Aufzug testen",
	"devmode_colors_btn": "Linienfarben",
	"devmode_clear_btn": "Löschen",
	"editor": {
		"accessibility_only": "Nur barrierefreie Abfahrten anzeigen",
		"accessibility_only_requires": "Braucht „Barrierefrei-Symbol anzeigen“.",
		"colors_empty_hint": "Wähle im ersten Reiter Haltestellen aus — ihre Linien erscheinen dann hier.",
		"colors_hint": "Optional. Ohne Überschreibung gilt die offizielle Linienfarbe.",
		"hide_attribution": "Datenquelle ausblenden",
		"hide_attribution_helper": "Wenn aktiv, wird die Quellenangabe ausgeblendet.",
		"hide_header": "Kopfzeile ausblenden",
		"hide_header_helper": "Wenn aktiv, wird die Titelleiste der Karte ausgeblendet.",
		"layout": "Layout mehrerer Haltestellen",
		"layout_requires": "Wirkt erst ab zwei Haltestellen.",
		"layout_stacked": "Gestapelt",
		"layout_tabs": "Reiter",
		"max_departures": "Anzahl Abfahrten pro Haltestelle",
		"mode_badner": "Badner Bahn",
		"mode_bus": "Bus",
		"mode_hidden_aria": "{mode} ist ausgeblendet",
		"mode_metro": "U-Bahn",
		"mode_night": "NightLine",
		"mode_sbahn": "S-Bahn",
		"mode_shown_aria": "{mode} wird angezeigt",
		"mode_tram": "Straßenbahn",
		"pick_color_for_line": "Farbe für Linie {line} wählen",
		"reset_color": "Auf Standard zurücksetzen",
		"reset_color_aria": "Linienfarbe {line} auf Standard zurücksetzen",
		"section_colors": "Linienfarben",
		"section_colors_hint": "überschreibt API-Farbe",
		"section_departure_row_hint": "pro Zeile",
		"section_disruptions": "Störungen & Verspätungen",
		"section_layout": "Aufbau",
		"section_layout_hint": "Struktur",
		"section_transfers": "Umsteigemöglichkeiten",
		"section_transfers_hint": "im Streckenverlauf",
		"show_accessibility": "Barrierefrei-Symbol anzeigen",
		"show_cooling": "Klimaanlagen-Symbol anzeigen",
		"show_cooling_helper": "Zeigt eine Schneeflocke neben Abfahrten mit klimatisiertem Fahrzeug. Wiener Linien melden das pro Fahrzeug — ältere Garnituren liefern die Angabe nicht.",
		"show_delay": "Verspätungen anzeigen",
		"show_delay_colors": "Verspätungen farblich hervorheben",
		"show_delay_colors_helper": "Färbt die Minutenzahl rot, wenn eine Abfahrt verspätet ist, und grün, wenn sie zu früh kommt.",
		"show_delay_colors_requires": "Braucht „Verspätungen anzeigen“.",
		"show_departures": "Abfahrtsliste anzeigen",
		"show_elevator_info": "Aufzugsausfälle anzeigen",
		"show_hero_metric": "Nächste Abfahrt groß anzeigen",
		"show_platform": "Gleis/Steig anzeigen",
		"show_qr_button": "QR-Code-Schaltfläche anzeigen",
		"show_stops_ahead": "Zwischenstationen anzeigen",
		"show_traffic_info": "Störungen anzeigen",
		"show_type_icon": "Verkehrsmittel-Symbol anzeigen",
		"transfer_modes_hint": "Diese Verkehrsmittel erscheinen als Chips neben den Zwischenstationen.",
		"transfer_modes_requires": "Braucht „Zwischenstationen anzeigen“."
	},
	"timetable_only": "nur Fahrplan",
	"timetable_title": "Fahrplanzeit, keine Echtzeitdaten"
};
var retro$1 = {
	"editor": {
		"accessibility_only": "Nur barrierefreie Abfahrten anzeigen",
		"chips": "Zusätzliche Beschriftungen",
		"date_format": "Datumsformat",
		"exit": "Ausgangssymbol",
		"extra_icons": "Zusätzliche Symbole",
		"flicker": "LED-Flackern simulieren",
		"header_exit_accessible": "Stufenloser Ausgang",
		"header_exit_none": "Kein",
		"header_exit_regular": "Ausgang",
		"housing": "LED-Gehäuserahmen anzeigen",
		"housing_helper": "Dunkler Rahmen um die LED-Anzeige mit dezentem Glas-Reflex obenauf.",
		"icon_mdi_door_open": "Offene Tür",
		"icon_mdi_exit_run": "Ausgang (laufende Person)",
		"icon_mdi_exit_to_app": "Ausgang (Tür)",
		"icon_mdi_stairs": "Treppe",
		"line_stripe": "Seitlichen Linienstreifen anzeigen",
		"line_stripe_helper": "4-Pixel-Balken am linken Rand jeder Zeile in der Linienfarbe.",
		"message_text": "Nachricht",
		"message_text_requires": "Braucht „Lauftext anzeigen“.",
		"message_ticker": "Laufschrift",
		"message_ticker_helper": "Zeigt alle 5 Minuten eine eigene Nachricht als Laufschrift über die Anzeige.",
		"platform_side": "Gleis/Steig-Seite",
		"platform_side_auto": "Automatisch (1 = rechts, 2 = links)",
		"platform_side_helper": "Standard folgt der Wiener-Linien-Beschilderung (Gleis 2 links, sonst rechts). Manuell überschreibbar.",
		"platform_side_left": "Immer links",
		"platform_side_requires": "Braucht „Steig anzeigen“.",
		"platform_side_right": "Immer rechts",
		"show_clock": "Uhr-Plakette anzeigen",
		"show_date": "Datums-Plakette anzeigen",
		"show_header": "Stationsanzeige anzeigen",
		"show_header_helper": "Hauptschalter. Einstellungen pro Seite bleiben gespeichert.",
		"show_line_pill": "Linien-Plakette anzeigen",
		"show_line_pill_helper": "Liniencode als gefüllte Plakette in der Linienfarbe statt als schlichter Text.",
		"show_platform": "Steig anzeigen",
		"show_station_name": "Stationsnamen anzeigen",
		"show_unit": "Einheit „min“ anzeigen",
		"show_unit_helper": "Kleines „min“ in Amber-Versalien nach jeder Minutenzahl.",
		"size": "Größe",
		"station_bg": "Stationsschild-Hintergrund",
		"station_bg_black": "Schwarz",
		"station_bg_default": "Standard",
		"station_bg_white": "Weiß",
		"style": "Stil",
		"style_classic": "Klassisch",
		"style_pixel": "Punktmatrix",
		"style_warm": "Warm",
		"text": "Beschriftung",
		"wheelchair_race": "Rollstuhl-Rennen (Easter Egg)"
	},
	"aria_dismiss_message": "Lauftext schließen",
	"aria_start_race": "Barrierefreiheits-Rennen starten",
	"at_platform": "Einfahrt",
	"barrier_free_title": "Barrierefrei zugänglich",
	"betriebsschluss": "Betriebsschluss",
	"countdown_minutes": "{n} Minuten",
	"departures_list": "Kommende Abfahrten",
	"dir_both": "Beide",
	"dir_h": "Hinfahrt",
	"dir_h_short": "H",
	"dir_r": "Rückfahrt",
	"dir_r_short": "R",
	"entity_missing": "Sensor {entity} existiert nicht mehr. Wähle oben einen anderen Sensor.",
	"gleis": "GLEIS",
	"header": {
		"icon_exit": "Ausgang",
		"icon_exit_access": "Stufenloser Ausgang",
		"icon_wc": "WC",
		"icon_escalator": "Rolltreppe",
		"icon_elevator": "Aufzug",
		"icon_mdi_exit_run": "Ausgang (laufende Person)",
		"icon_mdi_exit_to_app": "Ausgang (Tür)",
		"icon_mdi_door_open": "Offene Tür",
		"icon_mdi_stairs": "Treppe"
	},
	"no_data": "Keine Abfahrten",
	"no_data_wrong_direction": "Keine Abfahrten in dieser Richtung",
	"no_data_wrong_line": "Keine Abfahrten für diese Linie",
	"no_entity": "Keine Haltestelle ausgewählt",
	"race_finished": "Barrierefreiheits-Rennen beendet",
	"race_starting_in": "Rennen startet in {n}",
	"race_winner_announce": "Rollstuhl {n} gewinnt das Barrierefreiheits-Rennen",
	"stale_feed": "Keine aktuellen Daten",
	"steig": "STEIG",
	"unit_min": "min",
	"version_reload": "Neu laden",
	"version_reload_stuck": "Neu laden hat die neue Version nicht übernommen. Schließe diesen Browser-Tab und öffne das Dashboard erneut, oder lösche die Website-Daten für Home Assistant in den Browser-Einstellungen.",
	"version_update": "Retro-Karte wurde auf v{v} aktualisiert — bitte neu laden",
	"via_prefix": "ÜBER",
	"timetable_title": "Fahrplanzeit, keine Echtzeitdaten"
};
var flap$1 = {
	"no_entity": "Keine Haltestelle ausgewählt",
	"no_data": "Keine Abfahrten",
	"no_data_wrong_direction": "Keine Abfahrten in dieser Richtung",
	"no_data_wrong_line": "Keine Abfahrten für diese Linie",
	"betriebsschluss": "Betriebsschluss",
	"stale_feed": "Keine aktuellen Daten",
	"dir_h": "Hinfahrt",
	"dir_r": "Rückfahrt",
	"dir_h_short": "H",
	"dir_r_short": "R",
	"gleis": "GLEIS",
	"steig": "STEIG",
	"col_line": "LINIE",
	"col_dest": "RICHTUNG",
	"col_step_free": "STUFENLOS",
	"col_cd": "ANKUNFT",
	"version_update": "Klappanzeige wurde auf v{v} aktualisiert — bitte neu laden",
	"version_reload": "Neu laden",
	"version_reload_stuck": "Neu laden hat die neue Version nicht übernommen. Schließe diesen Browser-Tab und öffne das Dashboard erneut, oder lösche die Website-Daten für Home Assistant in den Browser-Einstellungen.",
	"entity_missing": "Sensor {entity} existiert nicht mehr. Wähle oben einen anderen Sensor.",
	"departures_list": "Kommende Abfahrten",
	"at_platform": "Einfahrt",
	"countdown_minutes": "{n} Minuten",
	"barrier_free_title": "Barrierefrei zugänglich",
	"not_barrier_free_title": "Nicht barrierefrei",
	"unit_min": "min",
	"dir_both": "Beide",
	"header": {
		"icon_exit": "Ausgang",
		"icon_exit_access": "Stufenloser Ausgang",
		"icon_wc": "WC",
		"icon_escalator": "Rolltreppe",
		"icon_elevator": "Aufzug",
		"icon_mdi_exit_run": "Ausgang (laufende Person)",
		"icon_mdi_exit_to_app": "Ausgang (Tür)",
		"icon_mdi_door_open": "Offene Tür",
		"icon_mdi_stairs": "Treppe"
	},
	"editor": {
		"accessibility_only": "Nur barrierefreie Abfahrten anzeigen",
		"accessibility_only_requires": "Braucht „Rollstuhl-Plakette anzeigen“.",
		"chips": "Zusätzliche Beschriftungen",
		"date_format": "Datumsformat",
		"exit": "Ausgangssymbol",
		"extra_icons": "Zusätzliche Symbole",
		"header_exit_accessible": "Stufenloser Ausgang",
		"header_exit_none": "Kein",
		"header_exit_regular": "Ausgang",
		"hide_attribution": "Datenquelle ausblenden",
		"hide_attribution_helper": "Wenn aktiv, wird die CC-BY-Quellenangabe am unteren Rand der Karte ausgeblendet. Die OGD-Lizenz der Wiener Linien verlangt eine sichtbare Quellenangabe, sofern der Hinweis nicht an anderer Stelle im Dashboard erscheint.",
		"housing": "Gehäuserahmen anzeigen",
		"housing_helper": "Umrahmt die Tafel mit dem Gehäuse inkl. dezenter Innenkante und Schlagschatten. Gehäusefarbe folgt dem HA-Theme (cremefarben im Hellmodus, dunkel im Dunkelmodus). Aus = Tafel sitzt bündig auf dem Dashboard.",
		"icon_mdi_door_open": "Offene Tür",
		"icon_mdi_exit_run": "Ausgang (laufende Person)",
		"icon_mdi_exit_to_app": "Ausgang (Tür)",
		"icon_mdi_stairs": "Treppe",
		"max_rows": "Anzahl Zeilen",
		"max_rows_helper": "Wie viele Abfahrten die Tafel zeigt (1–8). Über alle Haltestellen zusammengeführt, nach Abfahrtszeit sortiert.",
		"show_accessibility": "Rollstuhl-Plakette anzeigen",
		"show_accessibility_helper": "Zeigt eine Rollstuhl-Plakette neben barrierefreien Abfahrten.",
		"show_clock": "Uhr-Plakette anzeigen",
		"show_date": "Datums-Plakette anzeigen",
		"show_header": "Stationsanzeige anzeigen",
		"show_header_helper": "Hauptschalter. Einstellungen pro Seite bleiben gespeichert.",
		"show_line_column": "Linienspalte anzeigen",
		"show_line_column_helper": "Zeigt die Spalte mit dem Liniencode. Ausschalten, wenn die Tafel ohnehin nur eine Linie zeigt.",
		"show_min_unit": "Einheit „min“ anzeigen",
		"show_min_unit_helper": "Kleines „min“ neben der Minutenzahl, wie auf echten Stationstafeln.",
		"show_platform": "Gleis/Steig anzeigen",
		"show_platform_helper": "Fügt jeder Zeile eine eigene Gleis-Plakette zwischen Ziel und Minutenzahl hinzu. Wird nur eingeblendet, wenn mindestens eine sichtbare Zeile einen Gleis-Wert hat.",
		"show_station_name": "Stationsnamen anzeigen",
		"show_station_name_helper": "Farbiges Band mit Stationsname und Uhrzeit am oberen Rand der Karte.",
		"size": "Größe",
		"station_bg": "Hintergrund Stationsschild",
		"station_bg_black": "Schwarz",
		"station_bg_helper": "Standard ist die Farbe der ersten erfassten Linie (z. B. Rot für U1, Orange für U3). Bei mehreren Linien kann eine bestimmte Linie gewählt oder auf Weiß bzw. Schwarz umgestellt werden.",
		"station_bg_line": "Erste Linie",
		"station_bg_white": "Weiß",
		"text": "Beschriftung"
	},
	"timetable_title": "Fahrplanzeit, keine Echtzeitdaten"
};
var route$1 = {
	"heading_fallback": "Verbindung",
	"arrival": "Ankunft",
	"open_in_city_map": "Im Stadtplan öffnen",
	"find_on_map": "In Karte suchen",
	"leave_in": "Abfahrt in",
	"now": "Jetzt",
	"minutes": "{n} min",
	"minutes_long": "{n} Minuten",
	"direct": "Direkt",
	"changes_one": "1 Umstieg",
	"changes_many": "{n} Umstiege",
	"platform_track": "Gleis {p}",
	"platform_stop": "Steig {p}",
	"stops_one": "1 Station",
	"stops_many": "{n} Stationen",
	"walk": "{n} min Fußweg",
	"towards": "Richtung {towards}",
	"late": "{n} min später",
	"risk_ok": "{n} min Puffer",
	"risk_tight": "Knapp: {n} min Puffer",
	"risk_at_risk": "Anschluss gefährdet: {n} min zu wenig",
	"transfer": "Umstieg",
	"replan_from_here": "Ab hier suchen",
	"replan_from_here_label": "Andere Verbindung ab {stop} suchen",
	"replan_announce": "Suche Verbindungen ab {stop}.",
	"replan_back": "Zurück zu {stop}",
	"alternatives": "Weitere Verbindungen ({n})",
	"disruption": "Störung",
	"inactive": "Außerhalb des Zeitfensters",
	"inactive_detail": "Aktualisiert {when}.",
	"no_trips": "Gerade keine Verbindung",
	"no_trips_detail": "Der Routenplaner findet nichts. Die nächste Aktualisierung versucht es erneut.",
	"unavailable": "Routenplaner nicht erreichbar",
	"unavailable_detail": "Verbindungen erscheinen wieder, sobald er antwortet.",
	"entity_missing": "Sensor {entity} existiert nicht mehr. Wähle im Editor eine andere Verbindung.",
	"trip_summary": "{dep} bis {arr}, {changes}",
	"version_update": "Verbindungskarte wurde auf v{v} aktualisiert — bitte neu laden",
	"version_reload": "Neu laden",
	"version_reload_stuck": "Neu laden hat die neue Version nicht übernommen. Schließe diesen Browser-Tab und öffne das Dashboard erneut, oder lösche die Website-Daten für Home Assistant in den Browser-Einstellungen.",
	"updated": "Zuletzt aktualisiert {time}",
	"adhoc_heading": "Verbindung suchen",
	"adhoc_legend": "Start und Ziel",
	"adhoc_from": "Von",
	"adhoc_to": "Nach",
	"adhoc_swap": "Start und Ziel tauschen",
	"adhoc_stops_loading": "Haltestellen werden geladen …",
	"adhoc_pick": "Wähle Start und Ziel",
	"adhoc_pick_detail": "Die nächsten Verbindungen erscheinen, sobald beides gewählt ist.",
	"adhoc_loading": "Suche Verbindungen …",
	"adhoc_no_trips": "Keine Verbindung gefunden",
	"adhoc_no_trips_detail": "Probier eine andere Haltestelle oder versuch es später nochmal.",
	"adhoc_stale": "Gerade zu viele Verbindungsabfragen, darum ein etwas älterer Stand.",
	"adhoc_paused": "Aktualisierung pausiert",
	"adhoc_resume": "Wieder aktualisieren",
	"adhoc_announce": "Abfahrt in {n} Minuten. {summary}",
	"adhoc_announce_now": "Abfahrt jetzt. {summary}",
	"adhoc_no_match": "Keine passende Haltestelle. Wähle einen Vorschlag aus der Liste.",
	"adhoc_show_stops": "Haltestellen anzeigen",
	"adhoc_no_results": "Keine Haltestelle gefunden",
	"adhoc_matches": "{n} Treffer",
	"adhoc_matches_more": "{shown} von {total} Treffern. Tipp weiter, um einzugrenzen.",
	"adhoc_error_same_stop": "Start und Ziel sind dieselbe Haltestelle",
	"adhoc_error_same_stop_detail": "Wähle ein anderes Ziel.",
	"adhoc_error_upstream": "Routenplaner nicht erreichbar",
	"adhoc_error_retry_detail": "Neuer Versuch in {s} s.",
	"adhoc_error_rate_limited": "Gerade zu viele Verbindungsabfragen",
	"adhoc_error_not_loaded": "Wiener Linien Austria ist nicht geladen",
	"adhoc_error_not_loaded_detail": "Richte in der Integration eine Haltestelle oder Verbindung ein. Die Karte schaut jede Minute nach.",
	"adhoc_error_catalogue": "Haltestellenliste nicht verfügbar",
	"adhoc_error_invalid_stop": "Haltestelle nicht gefunden",
	"adhoc_error_invalid_stop_detail": "Wähle eine andere Haltestelle.",
	"adhoc_error_too_close": "Die Haltestellen liegen zu nah beieinander",
	"adhoc_error_too_close_detail": "Wähle Haltestellen, die weiter auseinander liegen.",
	"adhoc_error_stop_unknown": "Der Routenplaner kennt diese Haltestelle nicht",
	"adhoc_error_stop_unknown_detail": "Wähle eine andere Haltestelle.",
	"adhoc_error_no_timetable": "Für heute ist kein Fahrplan veröffentlicht",
	"adhoc_error_no_timetable_detail": "Die Karte schaut in ein paar Minuten wieder nach.",
	"adhoc_error_refused": "Der Routenplaner kann diese Verbindung nicht planen",
	"adhoc_error_refused_detail": "Wähle andere Haltestellen.",
	"adhoc_error_unknown": "Verbindungssuche fehlgeschlagen",
	"not_a_route": "Das ist ein Abfahrtsmonitor, keine Verbindung. Wähle im Editor eine Verbindung.",
	"when_legend": "Wann",
	"when_now": "Jetzt",
	"when_depart": "Abfahrt um",
	"when_arrive": "Ankunft bis",
	"when_input": "Datum und Uhrzeit",
	"planned_departs": "Abfahrt {day}",
	"planned_arrives": "Ankunft {time}",
	"day_today": "heute",
	"day_tomorrow": "morgen",
	"adhoc_announce_planned": "Abfahrt {day} um {time}. {summary}",
	"live": "Echtzeit",
	"every_minutes": "alle {n} min",
	"then_at": "danach {times}",
	"access_elevator": "Aufzug",
	"access_elevator_up": "Aufzug nach oben",
	"access_elevator_down": "Aufzug nach unten",
	"access_stairs": "Stiegen",
	"access_stairs_up": "Stiegen hinauf",
	"access_stairs_down": "Stiegen hinunter",
	"access_escalator": "Rolltreppe",
	"access_escalator_up": "Rolltreppe nach oben",
	"access_escalator_down": "Rolltreppe nach unten",
	"access_ramp": "Rampe",
	"access_ramp_up": "Rampe hinauf",
	"access_ramp_down": "Rampe hinunter",
	"lift_out": "außer Betrieb",
	"lift_out_notice": "Aufzug außer Betrieb: {station}",
	"low_floor": "Niederflurfahrzeug",
	"stops_between": "Stationen dazwischen, {line}",
	"last_connection": "Letzte Verbindung ohne Nachtbus {time}",
	"planned_late": "geplant {time}, {n} min später",
	"next_catchable": "Nächster erreichbar: {time}",
	"editor": {
		"entity": "Verbindung",
		"entity_helper": "Leer lassen, um Start und Ziel direkt auf der Karte zu wählen. Zur Wahl stehen nur eingerichtete Verbindungen.",
		"title": "Überschrift",
		"title_helper": "Leer lassen für „Start → Ziel“.",
		"alternatives": "Weitere Verbindungen",
		"alternatives_helper": "Wie viele spätere Verbindungen unter der besten stehen. 0 blendet sie aus.",
		"replan_from_change": "Ab Umstieg neu suchen",
		"replan_from_change_helper": "Ein Button an jedem Umstieg sucht, was ab dieser Station weiterfährt. Hilft vor allem, wenn ein Anschluss knapp ist.",
		"show_map_pins": "Karten-Pins anzeigen",
		"show_map_pins_helper": "Ein Pin nach jeder Einstiegshaltestelle und nach dem Ziel öffnet die Haltestelle im Stadtplan.",
		"hide_attribution": "Datenquelle ausblenden",
		"hide_attribution_helper": "Die OGD-Lizenz der Wiener Linien verlangt eine sichtbare Quellenangabe, sofern sie nicht an anderer Stelle im Dashboard steht.",
		"no_routes": "Noch keine Verbindung eingerichtet. Start und Ziel lassen sich direkt auf der Karte wählen, oder du richtest eine feste Verbindung ein.",
		"add_route": "Verbindung einrichten",
		"from": "Vorauswahl Start",
		"from_helper": "Gilt, bis jemand auf diesem Gerät eine andere Haltestelle wählt.",
		"to": "Vorauswahl Ziel",
		"to_helper": "Gilt, bis jemand auf diesem Gerät eine andere Haltestelle wählt.",
		"step_free": "Stufenlos",
		"step_free_helper": "Nur Verbindungen mit Aufzug oder Rampe statt Stiegen und Rolltreppen, und mit Niederflurfahrzeugen."
	}
};
var de_default = {
	common: common$1,
	modern: modern$1,
	retro: retro$1,
	flap: flap$1,
	route: route$1
};

//#endregion
//#region src/localize/languages/en.json
var en_exports = /* @__PURE__ */ __exportAll({
	common: () => common,
	default: () => en_default,
	flap: () => flap,
	modern: () => modern,
	retro: () => retro,
	route: () => route
});
var common = {
	"picker": {
		"picker_modern": "Departures with disruptions and lift status",
		"picker_retro": "LED display like the ones at Wiener Linien stations",
		"picker_flap": "Departures on a split-flap board",
		"picker_route": "Next connection from A to B, with time to spare at each change"
	},
	"editor": {
		"add_chip": "Add chip",
		"add_icon": "Add icon",
		"date_format_placeholder": "d.m.Y",
		"direction_label": "Direction",
		"direction_not_served": "not served",
		"direction_note_one_way": "Return direction disabled: {line} terminates here.",
		"direction_unavailable": "No departures in this direction",
		"entities": "Stops",
		"entity": "Stop",
		"header_amenities": "Icons in this slot",
		"header_bar_aria": "Station sign — choose a side",
		"header_chips_and_icons": "Text chips (max. {chips}) and extra icons (max. {icons})",
		"header_left": "Left side",
		"header_pick_side_hint": "Tap a side, then fill it in below",
		"header_right": "Right side",
		"header_side_aria": "Station sign side",
		"header_slot_empty": "empty",
		"line_active_aria": "Line {line} active",
		"line_inactive_aria": "Line {line} inactive",
		"lines_empty_means_all": "empty = all lines",
		"lines_label": "Lines at this stop",
		"lines_selected": "{n} of {total}",
		"no_lines_hint": "Lines appear as soon as this stop reports departures.",
		"no_lines_title": "No lines yet",
		"per_line_direction_aria": "Line {line}: {direction}",
		"remove_chip_aria": "Remove chip {chip}",
		"remove_icon_aria": "Remove icon {icon}",
		"remove_stop": "Remove stop",
		"section_board": "Split-flap board",
		"section_departure_row": "Departure row",
		"section_extras": "Extras",
		"section_extras_hint": "optional",
		"section_footer": "Footer",
		"section_header": "Station sign",
		"section_header_hint": "Edit on the bar",
		"section_led_panel": "LED panel",
		"section_station": "Station band",
		"section_walk_time": "Walking time to the stop",
		"show_clock_short": "Clock",
		"show_date_short": "Date",
		"show_elevator_short": "Elevator",
		"show_escalator_short": "Escalator",
		"show_wc_short": "WC",
		"size_medium": "Medium",
		"size_regular": "Standard",
		"size_small": "Small",
		"tab_display": "Display",
		"tab_stop": "Stop",
		"tab_stops": "Stops",
		"tab_tweaks": "Style",
		"text_placeholder": "e.g. name of the next station",
		"walk_time_aria": "Walking time in minutes for line {line} towards {towards}",
		"walk_time_branching_hint": "Applies to every terminus in this direction",
		"walk_time_hint": "Hides departures that would leave without you. Empty = no filter.",
		"walk_time_less_aria": "Decrease walking time for line {line}",
		"walk_time_more_aria": "Increase walking time for line {line}",
		"walk_time_placeholder": "–",
		"walk_time_unit": "minutes"
	}
};
var modern = {
	"no_data": "No departures available",
	"betriebsschluss": "End of service",
	"stale_feed": "No live data",
	"stale_feed_detail": "Wiener Linien is sending out-of-date departure times for this stop. Departures return automatically once live data resumes.",
	"stale_feed_since": "Last reported departure: {time}",
	"stale_feed_partial": "Some lines aren't reporting current times.",
	"min": "min",
	"now": "Now",
	"platform_short_rail": "Track",
	"platform_short_bus": "Bay",
	"version_update": "Wiener Linien Austria updated to v{v} — please reload",
	"version_reload": "Reload",
	"version_reload_stuck": "Reload didn't pick up the new version. Close this browser tab and reopen the dashboard, or clear your browser's site data for Home Assistant.",
	"entity_missing": "Sensor {entity} no longer exists. Pick a different sensor, or remove it from this card's stops.",
	"no_entities_picked": "No stop selected",
	"no_entities_available": "No Wiener Linien sensors found",
	"departures_list": "Upcoming departures",
	"barrier_free_title": "Step-free access",
	"cooling_title": "Air conditioned",
	"disturbance_title": "Traffic disruption reported",
	"stops_ahead_aria_show": "Show stops ahead for {line} towards {towards}",
	"stops_ahead_aria_hide": "Hide stops ahead for {line} towards {towards}",
	"stops_ahead_other_show": "Show {count} more lines at {stop}",
	"stops_ahead_other_hide": "Hide other lines at {stop}",
	"dir_h": "Outbound",
	"dir_r": "Return",
	"dir_h_short": "H",
	"dir_r_short": "R",
	"dir_both": "Both",
	"traffic_label": "Disruption",
	"traffic_until": "Until",
	"traffic_updated": "updated",
	"elevator_until": "Until",
	"open_in_maps": "Open in maps",
	"qr_open": "Show QR code",
	"qr_dialog_title": "QR code for stop",
	"qr_dialog_hint": "Scan with your phone — opens the stop in your maps app.",
	"qr_dialog_close": "Close QR code",
	"delay_singular": "1 min. late",
	"delay_plural": "{n} min. late",
	"devmode_title": "DEV",
	"devmode_traffic_btn": "Test disruption",
	"devmode_elevator_btn": "Test elevator",
	"devmode_colors_btn": "Line colours",
	"devmode_clear_btn": "Clear",
	"editor": {
		"accessibility_only": "Only show step-free departures",
		"accessibility_only_requires": "Requires “Show accessibility icon”.",
		"colors_empty_hint": "Pick stops on the Stops tab — their lines will show up here.",
		"colors_hint": "Optional. Without an override the official line colour applies.",
		"hide_attribution": "Hide data source",
		"hide_attribution_helper": "When on, the data-source credit is hidden.",
		"hide_header": "Hide header",
		"hide_header_helper": "When on, the card title bar is hidden.",
		"layout": "Multi-stop layout",
		"layout_requires": "Only takes effect with two or more stops.",
		"layout_stacked": "Stacked",
		"layout_tabs": "Tabs",
		"max_departures": "Departures per stop",
		"mode_badner": "Badner Bahn",
		"mode_bus": "Bus",
		"mode_hidden_aria": "{mode} hidden",
		"mode_metro": "Metro",
		"mode_night": "NightLine",
		"mode_sbahn": "S-Bahn",
		"mode_shown_aria": "{mode} shown",
		"mode_tram": "Tram",
		"pick_color_for_line": "Pick colour for line {line}",
		"reset_color": "Reset to default",
		"reset_color_aria": "Reset line colour {line} to default",
		"section_colors": "Line colours",
		"section_colors_hint": "overrides the API colour",
		"section_departure_row_hint": "per row",
		"section_disruptions": "Disruptions & delays",
		"section_layout": "Structure",
		"section_layout_hint": "Layout",
		"section_transfers": "Transfer options",
		"section_transfers_hint": "in the stops trail",
		"show_accessibility": "Show step-free icon",
		"show_cooling": "Show air-conditioning icon",
		"show_cooling_helper": "Shows a snowflake beside departures with an air-conditioned vehicle. Wiener Linien report this per vehicle — older trains and trams don't send it.",
		"show_delay": "Show delays",
		"show_delay_colors": "Colour-code delays",
		"show_delay_colors_helper": "Turns the countdown number red when a departure runs late and green when it runs early.",
		"show_delay_colors_requires": "Requires “Show delays”.",
		"show_departures": "Show departure list",
		"show_elevator_info": "Show elevator outages",
		"show_hero_metric": "Show next departure large",
		"show_platform": "Show platform / track",
		"show_qr_button": "Show QR-code button",
		"show_stops_ahead": "Show intermediate stops",
		"show_traffic_info": "Show disruption alerts",
		"show_type_icon": "Show vehicle-type icon",
		"transfer_modes_hint": "These modes appear as chips beside each intermediate stop.",
		"transfer_modes_requires": "Requires “Show intermediate stops”."
	},
	"timetable_only": "Timetable only",
	"timetable_title": "Scheduled time, no live data"
};
var retro = {
	"editor": {
		"accessibility_only": "Only show step-free departures",
		"chips": "Extra labels",
		"date_format": "Date format",
		"exit": "Exit icon",
		"extra_icons": "Extra icons",
		"flicker": "Simulate LED flicker",
		"header_exit_accessible": "Step-free exit",
		"header_exit_none": "None",
		"header_exit_regular": "Exit",
		"housing": "Show LED cabinet frame",
		"housing_helper": "Dark bezel around the LED panel with a subtle glass reflection on top.",
		"icon_mdi_door_open": "Open door",
		"icon_mdi_exit_run": "Exit (running person)",
		"icon_mdi_exit_to_app": "Exit (door)",
		"icon_mdi_stairs": "Stairs",
		"line_stripe": "Show line stripe",
		"line_stripe_helper": "A 4 px coloured bar at the left edge of each row, matched to the line.",
		"message_text": "Message",
		"message_text_requires": "Requires “Show ticker”.",
		"message_ticker": "Scrolling message",
		"message_ticker_helper": "Runs a custom message across the display every 5 minutes.",
		"platform_side": "Platform side",
		"platform_side_auto": "Auto (1 = right, 2 = left)",
		"platform_side_helper": "Default follows Wiener Linien signage (platform 2 on the left, otherwise right). Override manually if needed.",
		"platform_side_left": "Always left",
		"platform_side_requires": "Requires “Show platform”.",
		"platform_side_right": "Always right",
		"show_clock": "Show clock chip",
		"show_date": "Show date chip",
		"show_header": "Show station sign",
		"show_header_helper": "Master switch. Per-side settings are kept.",
		"show_line_pill": "Show line badge",
		"show_line_pill_helper": "Renders the line code as a filled badge in the line colour rather than plain text.",
		"show_platform": "Show platform",
		"show_station_name": "Show station name",
		"show_unit": "Show the “min” unit",
		"show_unit_helper": "Trail each countdown number with a small amber \"min\" caption.",
		"size": "Size",
		"station_bg": "Station-name background",
		"station_bg_black": "Black",
		"station_bg_default": "Default",
		"station_bg_white": "White",
		"style": "Style",
		"style_classic": "Classic",
		"style_pixel": "Dot matrix",
		"style_warm": "Warm",
		"text": "Sign text",
		"wheelchair_race": "Wheelchair race (easter egg)"
	},
	"aria_dismiss_message": "Dismiss scrolling message",
	"aria_start_race": "Start accessibility race",
	"at_platform": "Arriving",
	"barrier_free_title": "Step-free access",
	"betriebsschluss": "End of service",
	"countdown_minutes": "{n} minutes",
	"departures_list": "Upcoming departures",
	"dir_both": "Both",
	"dir_h": "Outbound",
	"dir_h_short": "H",
	"dir_r": "Return",
	"dir_r_short": "R",
	"entity_missing": "Sensor {entity} no longer exists. Pick a different sensor in the entity selector above.",
	"gleis": "PLATF.",
	"header": {
		"icon_exit": "Exit",
		"icon_exit_access": "Step-free exit",
		"icon_wc": "Toilet",
		"icon_escalator": "Escalator",
		"icon_elevator": "Elevator",
		"icon_mdi_exit_run": "Exit (running person)",
		"icon_mdi_exit_to_app": "Exit (door)",
		"icon_mdi_door_open": "Open door",
		"icon_mdi_stairs": "Stairs"
	},
	"no_data": "No departures",
	"no_data_wrong_direction": "No departures in this direction",
	"no_data_wrong_line": "No departures for this line",
	"no_entity": "No stop selected",
	"race_finished": "Accessibility race finished",
	"race_starting_in": "Race starting in {n}",
	"race_winner_announce": "Wheelchair {n} wins the accessibility race",
	"stale_feed": "No live data",
	"steig": "BAY",
	"unit_min": "min",
	"version_reload": "Reload",
	"version_reload_stuck": "Reload didn't pick up the new version. Close this browser tab and reopen the dashboard, or clear your browser's site data for Home Assistant.",
	"version_update": "Retro card updated to v{v} — please reload",
	"via_prefix": "VIA",
	"timetable_title": "Scheduled time, no live data"
};
var flap = {
	"no_entity": "No stop selected",
	"no_data": "No departures",
	"no_data_wrong_direction": "No departures in this direction",
	"no_data_wrong_line": "No departures for this line",
	"betriebsschluss": "End of service",
	"stale_feed": "No live data",
	"dir_h": "Outbound",
	"dir_r": "Return",
	"dir_h_short": "H",
	"dir_r_short": "R",
	"gleis": "PLATF.",
	"steig": "BAY",
	"col_line": "LINE",
	"col_dest": "DIRECTION",
	"col_step_free": "STEP-FREE",
	"col_cd": "ARRIVAL",
	"version_update": "Flap card updated to v{v} — please reload",
	"version_reload": "Reload",
	"version_reload_stuck": "Reload didn't pick up the new version. Close this browser tab and reopen the dashboard, or clear your browser's site data for Home Assistant.",
	"entity_missing": "Sensor {entity} no longer exists. Pick a different sensor in the entity selector above.",
	"departures_list": "Upcoming departures",
	"at_platform": "Arriving",
	"countdown_minutes": "{n} minutes",
	"barrier_free_title": "Step-free access",
	"not_barrier_free_title": "Step-free access not available",
	"unit_min": "min",
	"dir_both": "Both",
	"header": {
		"icon_exit": "Exit",
		"icon_exit_access": "Step-free exit",
		"icon_wc": "Toilet",
		"icon_escalator": "Escalator",
		"icon_elevator": "Elevator",
		"icon_mdi_exit_run": "Exit (running person)",
		"icon_mdi_exit_to_app": "Exit (door)",
		"icon_mdi_door_open": "Open door",
		"icon_mdi_stairs": "Stairs"
	},
	"editor": {
		"accessibility_only": "Only show step-free departures",
		"accessibility_only_requires": "Requires “Show wheelchair badge”.",
		"chips": "Extra labels",
		"date_format": "Date format",
		"exit": "Exit icon",
		"extra_icons": "Extra icons",
		"header_exit_accessible": "Step-free exit",
		"header_exit_none": "None",
		"header_exit_regular": "Exit",
		"hide_attribution": "Hide data source",
		"hide_attribution_helper": "When on, the CC-BY credit at the bottom of the card is hidden. The Wiener Linien Open Government Data licence requires visible attribution unless you keep the credit elsewhere on the dashboard.",
		"housing": "Show cabinet frame",
		"housing_helper": "Wraps the board in the cabinet with a soft inset bevel and drop shadow. Cabinet colour follows your HA theme (cream on light, dark on dark). When off, the board sits flush against the dashboard.",
		"icon_mdi_door_open": "Open door",
		"icon_mdi_exit_run": "Exit (running person)",
		"icon_mdi_exit_to_app": "Exit (door)",
		"icon_mdi_stairs": "Stairs",
		"max_rows": "Number of rows",
		"max_rows_helper": "How many departures to show on the board (1–8). Merged across all stops, sorted by countdown.",
		"show_accessibility": "Show step-free tile",
		"show_accessibility_helper": "Add a wheelchair pictogram tile next to step-free departures.",
		"show_clock": "Show clock chip",
		"show_date": "Show date chip",
		"show_header": "Show station sign",
		"show_header_helper": "Master switch. Per-side settings are kept.",
		"show_line_column": "Show line column",
		"show_line_column_helper": "Shows the column carrying the line code. Turn it off when the board only ever shows one line.",
		"show_min_unit": "Show \"min\" caption",
		"show_min_unit_helper": "Small label next to the countdown number, like real station boards.",
		"show_platform": "Show platform / track",
		"show_platform_helper": "Adds a per-row platform tile between the destination and the countdown. Only shown when at least one visible row has a platform value.",
		"show_station_name": "Show station name",
		"show_station_name_helper": "Coloured band with the station name and current time at the top of the card.",
		"size": "Size",
		"station_bg": "Station-name background",
		"station_bg_black": "Black",
		"station_bg_helper": "Default is the colour of the first tracked line (e.g. red for U1, orange for U3). On multi-line boards you can pick a specific line, or override with solid white or black.",
		"station_bg_line": "First line",
		"station_bg_white": "White",
		"text": "Sign text"
	},
	"timetable_title": "Scheduled time, no live data"
};
var route = {
	"heading_fallback": "Route",
	"arrival": "Arrival",
	"open_in_city_map": "Open in city map",
	"find_on_map": "Find on map",
	"leave_in": "Leave in",
	"now": "Now",
	"minutes": "{n} min",
	"minutes_long": "{n} minutes",
	"direct": "Direct",
	"changes_one": "1 change",
	"changes_many": "{n} changes",
	"platform_track": "Platform {p}",
	"platform_stop": "Stop {p}",
	"stops_one": "1 stop",
	"stops_many": "{n} stops",
	"walk": "{n} min walk",
	"towards": "towards {towards}",
	"late": "{n} min late",
	"risk_ok": "{n} min to spare",
	"risk_tight": "Tight: {n} min to spare",
	"risk_at_risk": "Connection at risk: {n} min short",
	"transfer": "Change",
	"replan_from_here": "Search from here",
	"replan_from_here_label": "Find another connection from {stop}",
	"replan_announce": "Searching for connections from {stop}.",
	"replan_back": "Back to {stop}",
	"alternatives": "More connections ({n})",
	"disruption": "Disruption",
	"inactive": "Outside the refresh window",
	"inactive_detail": "Updates {when}.",
	"no_trips": "No connection right now",
	"no_trips_detail": "The trip planner found nothing. The next update tries again.",
	"unavailable": "Can't reach the trip planner",
	"unavailable_detail": "Connections come back as soon as it answers.",
	"entity_missing": "Sensor {entity} no longer exists. Pick another route in the editor.",
	"trip_summary": "{dep} to {arr}, {changes}",
	"version_update": "Route card updated to v{v} — please reload",
	"version_reload": "Reload",
	"version_reload_stuck": "Reloading didn't pick up the new version. Close this browser tab and open the dashboard again, or clear the site data for Home Assistant in your browser settings.",
	"updated": "Last updated {time}",
	"adhoc_heading": "Plan a trip",
	"adhoc_legend": "Origin and destination",
	"adhoc_from": "From",
	"adhoc_to": "To",
	"adhoc_swap": "Swap origin and destination",
	"adhoc_stops_loading": "Loading stops …",
	"adhoc_pick": "Pick an origin and a destination",
	"adhoc_pick_detail": "The next connections show up once both are set.",
	"adhoc_loading": "Finding connections …",
	"adhoc_no_trips": "No connection found",
	"adhoc_no_trips_detail": "Try another stop, or try again later.",
	"adhoc_stale": "Too many route requests right now, so this is a slightly older plan.",
	"adhoc_paused": "Updates paused",
	"adhoc_resume": "Resume updates",
	"adhoc_announce": "Leave in {n} minutes. {summary}",
	"adhoc_announce_now": "Leave now. {summary}",
	"adhoc_no_match": "No matching stop. Pick a suggestion from the list.",
	"adhoc_show_stops": "Show stops",
	"adhoc_no_results": "No stop found",
	"adhoc_matches": "Matches: {n}",
	"adhoc_matches_more": "Showing {shown} of {total}. Keep typing to narrow it down.",
	"adhoc_error_same_stop": "Origin and destination are the same stop",
	"adhoc_error_same_stop_detail": "Pick a different destination.",
	"adhoc_error_upstream": "Can't reach the trip planner",
	"adhoc_error_retry_detail": "Trying again in {s} s.",
	"adhoc_error_rate_limited": "Too many route requests right now",
	"adhoc_error_not_loaded": "Wiener Linien Austria isn't loaded",
	"adhoc_error_not_loaded_detail": "Set up a stop or a route in the integration. The card checks again every minute.",
	"adhoc_error_catalogue": "Stop list unavailable",
	"adhoc_error_invalid_stop": "Stop not found",
	"adhoc_error_invalid_stop_detail": "Pick another stop.",
	"adhoc_error_too_close": "These stops are too close together",
	"adhoc_error_too_close_detail": "Pick stops further apart.",
	"adhoc_error_stop_unknown": "The trip planner doesn't know this stop",
	"adhoc_error_stop_unknown_detail": "Pick a different stop.",
	"adhoc_error_no_timetable": "No timetable published for today",
	"adhoc_error_no_timetable_detail": "The card checks again in a few minutes.",
	"adhoc_error_refused": "The trip planner can't plan this trip",
	"adhoc_error_refused_detail": "Pick different stops.",
	"adhoc_error_unknown": "Trip search failed",
	"not_a_route": "This is a departure board, not a route. Pick a route in the editor.",
	"when_legend": "When",
	"when_now": "Now",
	"when_depart": "Depart at",
	"when_arrive": "Arrive by",
	"when_input": "Date and time",
	"planned_departs": "Leave {day}",
	"planned_arrives": "Arrive {time}",
	"day_today": "today",
	"day_tomorrow": "tomorrow",
	"adhoc_announce_planned": "Leave {day} at {time}. {summary}",
	"live": "Live",
	"every_minutes": "every {n} min",
	"then_at": "then {times}",
	"access_elevator": "Lift",
	"access_elevator_up": "Lift up",
	"access_elevator_down": "Lift down",
	"access_stairs": "Stairs",
	"access_stairs_up": "Stairs up",
	"access_stairs_down": "Stairs down",
	"access_escalator": "Escalator",
	"access_escalator_up": "Escalator up",
	"access_escalator_down": "Escalator down",
	"access_ramp": "Ramp",
	"access_ramp_up": "Ramp up",
	"access_ramp_down": "Ramp down",
	"lift_out": "out of service",
	"lift_out_notice": "Lift out of service: {station}",
	"low_floor": "Low-floor vehicle",
	"stops_between": "Stops in between, {line}",
	"last_connection": "Last connection without night bus {time}",
	"planned_late": "scheduled {time}, {n} min late",
	"next_catchable": "Next you can catch: {time}",
	"editor": {
		"entity": "Route",
		"entity_helper": "Leave empty to pick origin and destination right on the card. Only routes you've set up are listed.",
		"title": "Heading",
		"title_helper": "Leave empty for “Start → Destination”.",
		"alternatives": "More connections",
		"alternatives_helper": "How many later connections to list under the best one. 0 hides them.",
		"replan_from_change": "Search again from a change",
		"replan_from_change_helper": "A button at each change looks up what else goes onward from that stop. Most useful when a connection is tight.",
		"show_map_pins": "Show map pins",
		"show_map_pins_helper": "A pin after each boarding stop and the destination opens that stop on the city map.",
		"hide_attribution": "Hide data source",
		"hide_attribution_helper": "The Wiener Linien OGD licence requires a visible credit unless it appears elsewhere on the dashboard.",
		"no_routes": "No route set up yet. You can pick origin and destination right on the card, or set up a fixed route.",
		"add_route": "Set up a route",
		"from": "Preselected origin",
		"from_helper": "Applies until someone picks another stop on this device.",
		"to": "Preselected destination",
		"to_helper": "Applies until someone picks another stop on this device.",
		"step_free": "Step-free",
		"step_free_helper": "Only connections with lifts or ramps instead of stairs and escalators, and with low-floor vehicles."
	}
};
var en_default = {
	common,
	modern,
	retro,
	flap,
	route
};

//#endregion
//#region src/localize/localize.ts
const languages = {
	de: de_exports,
	en: en_exports
};
const FALLBACK_DICT = languages.de ?? {};
function resolvePath(path, dictionary) {
	return path.split(".").reduce((acc, key) => {
		if (acc && typeof acc === "object" && key in acc) return acc[key];
	}, dictionary);
}
function resolveString(path, dictionary) {
	const v = resolvePath(path, dictionary);
	return typeof v === "string" ? v : void 0;
}
function resolveLang(ctx) {
	return ((ctx.configLanguage || ctx.hassLanguage || "de").split(/[-_]/)[0] ?? "de") === "en" ? "en" : "de";
}
function translate(key, ctx, replacements) {
	const lang = resolveLang(ctx);
	let s = resolveString(key, languages[lang] ?? FALLBACK_DICT);
	if (s === void 0) s = resolveString(key, FALLBACK_DICT);
	if (s === void 0) return key;
	if (replacements) for (const [k, v] of Object.entries(replacements)) s = s.replace(`{${k}}`, String(v));
	return s;
}
/**
* A card-picker string. Cards register into `window.customCards` when the
* bundle loads, before any card has a `hass`, so the language comes from the
* page instead: HA sets `<html lang>` to the user's language, and keeps the
* picked one in localStorage as `selectedLanguage` (a JSON string).
*/
function pickerText(key) {
	let stored;
	try {
		const raw = window.localStorage?.getItem("selectedLanguage");
		stored = raw ? JSON.parse(raw) : void 0;
	} catch {
		stored = void 0;
	}
	const hassLanguage = document.documentElement.lang || stored || navigator.language || void 0;
	return translate(`common.picker.${key}`, { hassLanguage });
}

//#endregion
//#region src/editor/editor-common.ts
/**
* Resolve an `ha-form` field label.
*
* The card's own catalogue wins, and HA core's generic labels are the fallback.
* That order is deliberate and was previously inverted: HA core defines
* `entity` / `entities` but none of this integration's own field names, so
* core-first meant the one control all three editors share was the only one
* core could answer for — and it answered "Entität" while the flap editor,
* which bypassed this resolver entirely, said "Haltestellen". Card-first gives
* the whole editor surface one vocabulary and keeps core as the safety net for
* anything the catalogue has not named.
*/
function editorLabel(hass, i18n, name) {
	const own = i18n.et(name);
	if (own !== name) return own;
	return hass?.localize?.(`ui.panel.lovelace.editor.card.generic.${name}`) || name;
}
/**
* Resolve an `ha-form` field helper from the `<field>_helper` convention,
* returning undefined when the catalogue has no entry (which is how `et`
* signals a miss — it echoes the key back).
*
* Dependency reasons ("needs X switched on") are passed in by the caller as
* `overrides`, because which field gates which is per-card. Putting the reason
* on the field it gates rather than in a loose note is what lets a disabled row
* teach its own rule.
*/
function editorHelper(i18n, name, overrides) {
	const override = overrides?.[name];
	if (override !== void 0) return override;
	const key = `${name}_helper`;
	const value = i18n.et(key);
	return value === key ? void 0 : value;
}

//#endregion
//#region src/editor/editor-i18n.ts
function editorTranslators(cardNamespace, language) {
	const ctx = { hassLanguage: language };
	return {
		t: (key) => translate(`${cardNamespace}.${key}`, ctx),
		et: (key) => {
			const scopedKey = `${cardNamespace}.editor.${key}`;
			const scoped = translate(scopedKey, ctx);
			if (scoped !== scopedKey) return scoped;
			const commonKey = `common.editor.${key}`;
			const common = translate(commonKey, ctx);
			return common === commonKey ? key : common;
		}
	};
}

//#endregion
//#region src/utils.ts
/**
* Trust-boundary guard for upstream-supplied URIs that get rendered into
* `<a href>` attributes. Lit's `${}` interpolation is safe against
* tag/attribute injection but does NOT block `javascript:` or `data:`
* URIs — a compromised upstream feed could otherwise execute arbitrary
* JS in HA's frontend origin when the user clicks the link. Allowlist
* HTTP/HTTPS only; everything else collapses to an empty string and the
* call site treats it as "no link available".
*
* Defence in depth: apply at every URL boundary even when the URL is
* built from hardcoded `https://` literals — the next contributor adding
* a different upstream URL field shouldn't have to remember the trust
* boundary.
*/
function safeHttpsUri(raw) {
	if (typeof raw !== "string") return "";
	return /^https?:\/\//i.test(raw) ? raw : "";
}
/**
* Dispatch a CustomEvent that crosses Shadow DOM. `bubbles: true` +
* `composed: true` are required so dashboard / card-editor listeners
* outside the card's shadow root receive it.
*/
function fireEvent(node, type, detail) {
	node.dispatchEvent(new CustomEvent(type, {
		detail,
		bubbles: true,
		composed: true
	}));
}

//#endregion
//#region src/utils/mot.ts
const LINE_TYPE_METRO = "ptMetro";
const LINE_TYPE_TRAM = "ptTram";
const LINE_TYPE_BUS_DAY = "ptBusCity";
const LINE_TYPE_BUS_NIGHT = "ptBusNight";
const LINE_TYPE_S_BAHN = "ptTrainS";
/**
* Resolve the MDI icon name for a `/monitor`-published vehicle type, or
* null when the type is unrecognised — Wiener Linien has occasionally
* added new MoT values (e.g. for tourist trains). Callers that need a
* glyph regardless go through `headerIconForType` below, which supplies
* the generic fallback; callers that want "no icon at all" branch on the
* null themselves.
*/
function lineTypeIcon(type) {
	switch (type) {
		case LINE_TYPE_METRO: return "mdi:subway-variant";
		case LINE_TYPE_TRAM: return "mdi:tram";
		case LINE_TYPE_BUS_DAY:
		case LINE_TYPE_BUS_NIGHT: return "mdi:bus";
		case LINE_TYPE_S_BAHN: return "mdi:train";
		default: return null;
	}
}

//#endregion
//#region src/utils/retro-station-icons.ts
/** Curated MDI icons offered alongside the WL-traced "regular" /
*  "accessible" exit glyphs on the header strip's exit corner.
*  Scope: exit-corner pictograms only — alternative exit arrows
*  (`mdi:exit-run`, `mdi:exit-to-app`) for when the WL traced glyph
*  isn't quite the right idiom, plus pedestrian-connection icons
*  (`mdi:door-open`, `mdi:stairs`) for non-arrow signage cases.
*
*  `glyphPointsTo` mirrors the WL svg variant's meaning — set ONLY on
*  exit-arrow style MDI icons so the render auto-flips them outward.
*  Doorway / stairs icons aren't directional and stay un-flipped on
*  both sides. */
const RETRO_HEADER_MDI_EXIT_KEYS = [
	"mdi:exit-run",
	"mdi:exit-to-app",
	"mdi:door-open",
	"mdi:stairs"
];

//#endregion
//#region src/utils/config.ts
const RETRO_HEADER_EXIT = /* @__PURE__ */ new Set([
	"none",
	"regular",
	"accessible",
	...RETRO_HEADER_MDI_EXIT_KEYS
]);
/** Returns the subset of `raw` whose keys are NOT in `validated` —
*  the HA-injected dashboard layout fields (grid_options, view_layout,
*  visibility) that must survive a normalise round-trip unchanged.
*  Filtering by an allowlist of validated keys also prevents the raw
*  pre-normalisation value of a validated key from leaking through. */
function filterPassthrough(raw, validated) {
	const out = {};
	if (!raw || typeof raw !== "object") return out;
	for (const [k, v] of Object.entries(raw)) if (!validated.has(k)) out[k] = v;
	return out;
}
function chipPalette(line, overrides, gtfsColors = {}, fallback = "var(--primary-color)") {
	const upper = line.toUpperCase();
	if (overrides[upper] !== void 0) return { background: overrides[upper] };
	if (/^N\d/.test(upper)) return {
		background: NIGHTLINE_BG,
		color: NIGHTLINE_FG
	};
	const gtfs = gtfsColors[line] ?? gtfsColors[upper];
	if (gtfs?.bg) return gtfs.fg ? {
		background: `#${gtfs.bg}`,
		color: `#${gtfs.fg}`
	} : { background: `#${gtfs.bg}` };
	return { background: fallback };
}

//#endregion
//#region src/utils/entities.ts
/** Sensor entity ids whose attributes pass `matches`, sorted. The walk the
*  stop and route cards share; each supplies its own fingerprint, which is
*  the part that must keep the two from picking up each other's sensors. */
function findSensors(hass, matches) {
	if (!hass) return [];
	const found = [];
	for (const [eid, state] of Object.entries(hass.states ?? {})) {
		if (!eid.startsWith("sensor.")) continue;
		if (matches(state?.attributes ?? {})) found.push(eid);
	}
	return found.sort();
}

//#endregion
//#region src/utils/route.ts
const ROUTE_CARD_TYPE = "wiener-linien-austria-route-card";
const DEFAULT_ALTERNATIVES = 2;
/** Keys `normaliseRouteConfig` validates; everything else passes through. */
const ROUTE_VALIDATED_KEYS = /* @__PURE__ */ new Set([
	"type",
	"entity",
	"from",
	"to",
	"title",
	"alternatives",
	"hide_attribution",
	"step_free",
	"show_map_pins",
	"replan_from_change"
]);
const MAX_ALTERNATIVES = 3;
function findRouteEntities(hass) {
	return findSensors(hass, (attrs) => Array.isArray(attrs.trips) && typeof attrs.origin === "string" && typeof attrs.destination === "string" && typeof attrs.active === "boolean");
}
/** Validate + default a route card config. Throws the messages Lovelace shows
*  in its error card, exactly like the other three cards' setConfig guards. */
function normaliseRouteConfig(config) {
	if (!config || typeof config !== "object") throw new Error(`${ROUTE_CARD_TYPE}: config must be an object`);
	if (config.entity !== void 0 && typeof config.entity !== "string") throw new Error(`${ROUTE_CARD_TYPE}: 'entity' must be a string`);
	if (typeof config.entity === "string" && config.entity && !config.entity.startsWith("sensor.")) throw new Error(`${ROUTE_CARD_TYPE}: 'entity' must be a sensor`);
	const from = stopIdOf(config.from, "from");
	const to = stopIdOf(config.to, "to");
	const raw = Number(config.alternatives ?? DEFAULT_ALTERNATIVES);
	const alternatives = Number.isFinite(raw) ? Math.min(3, Math.max(0, Math.round(raw))) : DEFAULT_ALTERNATIVES;
	return {
		...filterPassthrough(config, ROUTE_VALIDATED_KEYS),
		type: config.type,
		entity: config.entity ?? "",
		from,
		to,
		title: typeof config.title === "string" ? config.title : "",
		alternatives,
		hide_attribution: config.hide_attribution === true,
		step_free: config.step_free === true,
		show_map_pins: config.show_map_pins !== false,
		replan_from_change: config.replan_from_change === true
	};
}
function stopIdOf(value, field) {
	if (value === void 0 || value === null || value === "") return "";
	const text = String(value).trim();
	if (!/^\d+$/.test(text)) throw new Error(`${ROUTE_CARD_TYPE}: '${field}' must be a stop number (DIVA)`);
	return text;
}
/** Whole minutes until `iso`, never negative. Null when unparseable.
*  Floors, so "1 min" never turns up after the vehicle has gone. */
function minutesUntil(iso, nowMs) {
	if (!iso) return null;
	const ts = Date.parse(iso);
	if (!Number.isFinite(ts)) return null;
	return Math.max(0, Math.floor((ts - nowMs) / 6e4));
}
/** HH:MM in the server's own wall-clock time. The timestamps carry their
*  Vienna offset; slicing the ISO string keeps the printed time identical to
*  station signage even when the dashboard's browser sits in another zone. */
function clockOf(iso) {
	if (!iso) return "";
	return /T(\d{2}:\d{2})/.exec(iso)?.[1] ?? "";
}
/** The connections still ahead, soonest first. The sensor already ranks
*  them; this only drops the ones that have left since its last refresh.
*  A plan for a chosen time (`planned_for`) keeps them all: that is what
*  was asked for, whatever the clock says now. */
function upcomingTrips(attrs, nowMs) {
	const trips = Array.isArray(attrs?.trips) ? attrs.trips : [];
	const planned = !!attrs?.planned_for;
	return trips.filter((trip) => {
		if (trip.cancelled) return false;
		if (planned) return true;
		const ts = trip.departure ? Date.parse(trip.departure) : NaN;
		return !Number.isFinite(ts) || ts >= nowMs - 3e4;
	});
}
/** HH:MM in Vienna rounded to the nearest minute. Live estimates carry
*  seconds; slicing them off would print 09:37:40 as 09:37 next to a
*  departure that rounded 09:36:40 up to 09:37. */
function roundedClock(iso) {
	const ts = iso ? Date.parse(iso) : NaN;
	if (!Number.isFinite(ts)) return "";
	return viennaClock((/* @__PURE__ */ new Date(Math.round(ts / 6e4) * 6e4)).toISOString());
}
/** For a change that no longer fits: the first later departure of the next
*  ride that can still be reached, arrival plus walk, from the departure
*  board's times. Null when the change isn't at risk or no such departure
*  is known. */
function catchableDeparture(arriving, transfer, departing) {
	if (transfer.risk !== "at_risk") return null;
	const arrival = Date.parse(arriving.destination.estimated ?? arriving.destination.planned ?? "");
	if (!Number.isFinite(arrival)) return null;
	const ready = arrival + transfer.walk_minutes * 6e4;
	return (departing.next_departures ?? []).find((iso) => Date.parse(iso) >= ready) ?? null;
}
/** Whether a ride's arrival and the next ride's boarding are one stop: the
*  same DIVA, or the same coordinates. The trip planner names one stop
*  differently by platform area ("Ottakring" / "Ottakring (Huttengasse)"),
*  so names don't count. Without either to compare, they are not known to be
*  the same. */
function sameStop(a, b) {
	if (a.stop_id && b.stop_id && a.stop_id === b.stop_id) return true;
	return typeof a.latitude === "number" && typeof a.longitude === "number" && a.latitude === b.latitude && a.longitude === b.longitude;
}
/** The planned and the expected clock time of a stop that runs late, or null
*  when it doesn't (or the two print as the same minute). The expected time
*  rounds to the nearest minute: a live estimate carries seconds, and a
*  vehicle 40 s late shouldn't show "09:22 → 09:22". */
function delayedClock(stop) {
	if (!stop.planned || !stop.estimated) return null;
	const planned = Date.parse(stop.planned);
	const estimated = Date.parse(stop.estimated);
	if (!Number.isFinite(planned) || !Number.isFinite(estimated) || estimated <= planned) return null;
	const expected = roundedClock(stop.estimated);
	const plannedClock = clockOf(stop.planned);
	return expected && expected !== plannedClock ? {
		planned: plannedClock,
		expected
	} : null;
}
/** Up to this headway a line counts as frequent: "alle 3 min" says all
*  anyone needs, and the next exact times would only add reading. */
const FREQUENT_HEADWAY_MINUTES = 5;
/** What the card says about how often a ride's line runs: the headway for a
*  frequent line, otherwise the next departures, otherwise the headway if
*  that is all there is. */
function rideFrequency(leg) {
	const headway = leg.headway_minutes ?? null;
	const next = (leg.next_departures ?? []).map(clockOf).filter(Boolean);
	if (headway !== null && headway <= FREQUENT_HEADWAY_MINUTES) return { every: headway };
	if (next.length) return { then: next };
	if (headway !== null) return { every: headway };
	return null;
}
/** A ride's identity across refreshes: line, direction and boarding stop
*  and time, all of which a new plan for the same vehicle repeats. */
function rideKey(leg) {
	return [
		leg.line,
		leg.direction,
		leg.origin.stop_id,
		leg.origin.planned
	].join("|");
}
/** Identifies a connection across refreshes, for the alternatives a user has
*  opened. Built from its rides' `rideKey`s, which use planned times, so a
*  delay arriving in the next update doesn't close the row under someone
*  reading it. A connection with no ride (walk only) falls back to its
*  departure time. */
function tripKey(trip) {
	const rides = transitLegs(trip).map(rideKey);
	return rides.length ? rides.join(">") : `walk|${trip.departure}`;
}
function transitLegs(trip) {
	return trip.legs.filter((leg) => !leg.walk && !!leg.line);
}
/** Lifts and stairs on the walk before the first ride ("start") or after
*  the last one ("end"): the way to and from the platform. */
function walkAccess(trip, where) {
	const legs = where === "start" ? trip.legs : [...trip.legs].reverse();
	const steps = [];
	for (const leg of legs) {
		if (!leg.walk) break;
		steps.push(...leg.access ?? []);
	}
	return where === "start" ? steps : steps.reverse();
}
/** Every lift and stairs step the trip takes, walks and changes alike. */
function tripAccessSteps(trip) {
	return [...trip.legs.flatMap((leg) => leg.access ?? []), ...trip.transfers.flatMap((transfer) => transfer.access ?? [])];
}
const ACCESS_ICON = {
	elevator: "mdi:elevator-passenger",
	stairs: "mdi:stairs",
	escalator: "mdi:escalator",
	ramp: "mdi:slope-uphill"
};
/** The icon for a step. A ramp down gets the downhill slope; the other
*  kinds have no up/down pair in MDI and keep one icon either way. */
function accessIcon(step) {
	if (step.kind === "ramp" && step.level === "down") return "mdi:slope-downhill";
	return ACCESS_ICON[step.kind] ?? "mdi:walk";
}
/** Written out rather than built from parts, so every key is findable. */
const ACCESS_KEYS = {
	elevator: {
		any: "access_elevator",
		up: "access_elevator_up",
		down: "access_elevator_down"
	},
	stairs: {
		any: "access_stairs",
		up: "access_stairs_up",
		down: "access_stairs_down"
	},
	escalator: {
		any: "access_escalator",
		up: "access_escalator_up",
		down: "access_escalator_down"
	},
	ramp: {
		any: "access_ramp",
		up: "access_ramp_up",
		down: "access_ramp_down"
	}
};
/** The `route.` localisation key for a step, or null for a kind the card
*  has no words for (it is then left out rather than shown raw). */
function accessKey(step) {
	const keys = ACCESS_KEYS[step.kind];
	if (!keys) return null;
	return step.level === "up" ? keys.up : step.level === "down" ? keys.down : keys.any;
}
const RISK_ICON = {
	ok: "mdi:check-circle-outline",
	tight: "mdi:clock-alert-outline",
	at_risk: "mdi:alert-circle-outline"
};
/** "06:30–09:00", or "" when no window is set. */
function windowRange(window) {
	if (!window?.from || !window.to) return "";
	return `${window.from.slice(0, 5)}–${window.to.slice(0, 5)}`;
}
const WEEKDAY_ORDER = [
	"mon",
	"tue",
	"wed",
	"thu",
	"fri",
	"sat",
	"sun"
];
/** Localised short weekday names for a window's days, in week order, with
*  runs of three or more collapsed ("Mo.–Fr."). Empty when every day (or
*  none) is selected — "every day" needs no label. */
function windowDays(window, lang) {
	const days = (window?.days ?? []).filter((d) => WEEKDAY_ORDER.includes(d));
	if (days.length === 0 || days.length === 7) return "";
	const formatter = new Intl.DateTimeFormat(lang === "en" ? "en-GB" : "de-AT", {
		weekday: "short",
		timeZone: "UTC"
	});
	const name = (index) => formatter.format(Date.UTC(2024, 0, 1 + index));
	const indices = WEEKDAY_ORDER.map((d, i) => days.includes(d) ? i : -1).filter((i) => i >= 0);
	const parts = [];
	let start = 0;
	while (start < indices.length) {
		let end = start;
		while (end + 1 < indices.length && indices[end + 1] === indices[end] + 1) end++;
		const run = indices.slice(start, end + 1);
		if (run.length >= 3) parts.push(`${name(run[0])}–${name(run[run.length - 1])}`);
		else parts.push(...run.map(name));
		start = end + 1;
	}
	return parts.join(", ");
}
/** Vehicle icon for a route leg. Routes reach modes a stop board never shows
*  (S-Bahn, regional trains and buses), so this extends `lineTypeIcon` rather
*  than widening it for all four cards. An "S" + number label is always the
*  S-Bahn, whatever type the trip planner reported. */
function legTypeIcon(type, line) {
	if (line && /^S\d/i.test(line)) return "mdi:train";
	switch (type) {
		case "ptTrain":
		case "ptTrainS": return "mdi:train";
		case "ptBusRegion":
		case "ptBusOnDemand": return "mdi:bus";
		case "ptCableCar": return "mdi:gondola";
		case "ptShip": return "mdi:ferry";
		default: return lineTypeIcon(type ?? void 0);
	}
}
/** "07:40" in Vienna time for a UTC stamp such as `fetched_at`. `clockOf`
*  slices the ISO string, which is right for timetable stamps carrying their
*  Vienna offset but would print UTC for these. Empty when unparseable. */
function viennaClock(iso) {
	if (!iso) return "";
	const ts = Date.parse(iso);
	if (!Number.isFinite(ts)) return "";
	return new Intl.DateTimeFormat("de-AT", {
		hour: "2-digit",
		minute: "2-digit",
		hourCycle: "h23",
		timeZone: "Europe/Vienna"
	}).format(ts);
}
const VIENNA_PARTS = new Intl.DateTimeFormat("en-GB", {
	year: "numeric",
	month: "2-digit",
	day: "2-digit",
	hour: "2-digit",
	minute: "2-digit",
	hourCycle: "h23",
	timeZone: "Europe/Vienna"
});
/** `{year, month, day, hour, minute}` of an instant on a Vienna wall clock. */
function viennaParts(ms) {
	const parts = {};
	for (const part of VIENNA_PARTS.formatToParts(ms)) parts[part.type] = part.value;
	return parts;
}
/** A `datetime-local` value ("2026-09-15T07:35") for `nowMs` on the Vienna
*  clock, rounded up to the next five minutes: the time field's starting
*  point when someone switches away from "now". */
function viennaInputValue(nowMs) {
	const step = 3e5;
	const p = viennaParts(Math.ceil(nowMs / step) * step);
	return `${p["year"]}-${p["month"]}-${p["day"]}T${p["hour"]}:${p["minute"]}`;
}
/** A `datetime-local` value for one exact instant on the Vienna clock, with
*  no rounding. `viennaInputValue` rounds up to the next five minutes, which
*  is right for "pick a time" but wrong for "plan from the minute this ride
*  gets in": that would push the query up to five minutes past the arrival
*  and hide the connections leaving in between. */
function viennaInputAt(ms) {
	const p = viennaParts(ms);
	return `${p["year"]}-${p["month"]}-${p["day"]}T${p["hour"]}:${p["minute"]}`;
}
/** When someone standing at a change could realistically board again: the
*  ride's arrival there plus the walk between the two platforms. Live time
*  where there is one, so a late arrival moves the question with it.
*
*  Null when the arrival has no usable time — the trip is then still drawn,
*  it just can't be re-planned from, since a plan for "now" would offer
*  departures from a station nobody has reached yet.
*/
function replanDeparture(arrival, walkMinutes, nowMs) {
	const ts = Date.parse(arrival.estimated ?? arrival.planned ?? "");
	if (!Number.isFinite(ts)) return null;
	return viennaInputAt(Math.max(ts + Math.max(walkMinutes, 0) * 6e4, nowMs));
}
/** A well-formed `datetime-local` value, as the plan command accepts it. */
function isInputDateTime(value) {
	return /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/.test(value);
}
/** Calendar days from today to the day of `iso`, both on the Vienna clock:
*  0 today, 1 tomorrow, -1 yesterday. Null when unparseable. */
function viennaDayOffset(iso, nowMs) {
	const ts = iso ? Date.parse(iso) : NaN;
	if (!Number.isFinite(ts)) return null;
	const day = (ms) => {
		const p = viennaParts(ms);
		return Date.UTC(Number(p["year"]), Number(p["month"]) - 1, Number(p["day"]));
	};
	return Math.round((day(ts) - day(nowMs)) / 864e5);
}
/** "Tue, 15/09" / "Di., 15.09." for a Vienna calendar day. */
function viennaShortDate(iso, lang) {
	return new Intl.DateTimeFormat(lang === "en" ? "en-GB" : "de-AT", {
		weekday: "short",
		day: "2-digit",
		month: "2-digit",
		timeZone: "Europe/Vienna"
	}).format(Date.parse(iso));
}
/** Refresh cadence while the card is on screen. Matches the route entries'
*  poll floor (`MIN_ROUTE_POLL_SECONDS`): a connection plan changes on the
*  scale of minutes, and every open dashboard multiplies this. */
const ADHOC_REFRESH_MS = 12e4;
/** Never refresh sooner than this after the best connection leaves
*  (`MIN_ROUTE_ROLLOVER_SECONDS`), so a departure in ten seconds can't turn
*  into a tight loop. */
const ADHOC_ROLLOVER_FLOOR_MS = 6e4;
/** No interaction for this long pauses refreshing, so a wall tablet left open
*  stops asking the upstream after half an hour. */
const ADHOC_IDLE_MS = 18e5;
/** Wait after an upstream failure that didn't say how long to wait. */
const ADHOC_RETRY_MS = 6e4;
/** When to refresh next: shortly after the best connection departs, but
*  within [floor, cadence]. */
function adhocRefreshDelay(trips, nowMs) {
	const next = trips.filter((trip) => !trip.cancelled && trip.departure).map((trip) => Date.parse(trip.departure)).find((ts) => Number.isFinite(ts) && ts + 3e4 > nowMs);
	if (next === void 0) return ADHOC_REFRESH_MS;
	const untilRollover = next + 3e4 - nowMs;
	return Math.min(ADHOC_REFRESH_MS, Math.max(ADHOC_ROLLOVER_FLOOR_MS, untilRollover));
}
/** Refresh cadence for a plan at a chosen time. Its connections don't roll
*  over as the clock runs, so the usual two minutes would only spend budget;
*  this still picks up a timetable change or a disruption within minutes. */
const ADHOC_PLANNED_REFRESH_MS = 6e5;
/** When to refresh after a plan arrived. A stale plan means the request
*  budget is spent, so asking before `retry_after` would only get it again. */
function adhocPlanRefreshDelay(plan, nowMs) {
	const base = plan.planned_for ? ADHOC_PLANNED_REFRESH_MS : adhocRefreshDelay(plan.trips ?? [], nowMs);
	const retryAfter = plan.stale ? Number(plan.retry_after) : NaN;
	return Number.isFinite(retryAfter) && retryAfter > 0 ? Math.max(base, retryAfter * 1e3) : base;
}
/** How long a card with no loaded integration waits before asking again.
*  Right after an HA restart the card can reach HA before the integration
*  has loaded, so this can't be a dead end. */
const ADHOC_NOT_LOADED_RETRY_MS = 6e4;
/** A query the trip planner has no timetable for won't change within
*  minutes; ask again much later rather than on the usual cadence. */
const ADHOC_NO_TIMETABLE_RETRY_MS = 6e5;
const ADHOC_UNKNOWN_ERROR = {
	icon: "mdi:alert-circle-outline",
	title: "adhoc_error_unknown",
	retry: "countdown"
};
/** Keyed by the WebSocket error code, the one table both the message and the
*  retry decision read from. */
const ADHOC_ERRORS = {
	same_stop: {
		icon: "mdi:map-marker-alert-outline",
		title: "adhoc_error_same_stop",
		detail: "adhoc_error_same_stop_detail",
		retry: null
	},
	rate_limited: {
		icon: "mdi:timer-sand",
		title: "adhoc_error_rate_limited",
		retry: "countdown"
	},
	not_loaded: {
		icon: "mdi:power-plug-off-outline",
		title: "adhoc_error_not_loaded",
		detail: "adhoc_error_not_loaded_detail",
		retry: ADHOC_NOT_LOADED_RETRY_MS
	},
	invalid_stop: {
		icon: "mdi:map-marker-question-outline",
		title: "adhoc_error_invalid_stop",
		detail: "adhoc_error_invalid_stop_detail",
		retry: null
	},
	catalogue_unavailable: {
		icon: "mdi:cloud-off-outline",
		title: "adhoc_error_catalogue",
		retry: "countdown"
	},
	upstream: {
		icon: "mdi:cloud-off-outline",
		title: "adhoc_error_upstream",
		retry: "countdown"
	}
};
/** `invalid_query` — the trip planner refused the query itself — told apart
*  by the backend's translation key. Asking again soon gets the same answer. */
const ADHOC_QUERY_ERRORS = {
	route_too_close: {
		icon: "mdi:map-marker-distance",
		title: "adhoc_error_too_close",
		detail: "adhoc_error_too_close_detail",
		retry: null
	},
	route_stop_invalid: {
		icon: "mdi:map-marker-question-outline",
		title: "adhoc_error_stop_unknown",
		detail: "adhoc_error_stop_unknown_detail",
		retry: null
	},
	route_outside_timetable: {
		icon: "mdi:calendar-remove-outline",
		title: "adhoc_error_no_timetable",
		detail: "adhoc_error_no_timetable_detail",
		retry: ADHOC_NO_TIMETABLE_RETRY_MS
	}
};
const ADHOC_QUERY_ERROR_FALLBACK = {
	icon: "mdi:map-marker-alert-outline",
	title: "adhoc_error_refused",
	detail: "adhoc_error_refused_detail",
	retry: null
};
function adhocErrorSpec(code, translationKey) {
	if (code === "invalid_query") return translationKey && ADHOC_QUERY_ERRORS[translationKey] || ADHOC_QUERY_ERROR_FALLBACK;
	return ADHOC_ERRORS[code] ?? ADHOC_UNKNOWN_ERROR;
}
/** After how long to retry an error on its own, or null to wait for the user. */
function adhocRetryDelay(spec, retryAfterSeconds) {
	if (spec.retry === "countdown") return Math.max(1, retryAfterSeconds ?? 6e4 / 1e3) * 1e3;
	return spec.retry;
}
const ADHOC_STORAGE_KEY = "wiener-linien-austria-route-adhoc";
/** The last pick on this device, or null. Stays in this browser: a stop pair
*  is a movement pattern and has no business in HA's storage. */
function loadAdhocSelection() {
	try {
		const raw = window.localStorage?.getItem(ADHOC_STORAGE_KEY);
		if (!raw) return null;
		const parsed = JSON.parse(raw);
		const from = typeof parsed.from === "string" && /^\d*$/.test(parsed.from) ? parsed.from : "";
		const to = typeof parsed.to === "string" && /^\d*$/.test(parsed.to) ? parsed.to : "";
		return from || to ? {
			from,
			to
		} : null;
	} catch {
		return null;
	}
}
function saveAdhocSelection(selection) {
	try {
		window.localStorage?.setItem(ADHOC_STORAGE_KEY, JSON.stringify(selection));
	} catch {}
}
/** Lower-case, accents and ß folded, so "wahringer" finds "Währinger" and
*  "strasse" finds "Straße". */
function foldStopText(text) {
	return text.normalize("NFD").replace(/\p{Diacritic}/gu, "").replace(/ß/g, "ss").toLowerCase();
}
/** Every label folded by `foldStopText`, index for index. */
function foldStopLabels(stops) {
	return stops.map((stop) => foldStopText(stop.label));
}
/** How many suggestions the stop combobox lists at once. Enough to scroll
*  through, few enough that each keystroke re-renders instantly. */
const STOP_SUGGESTION_LIMIT = 50;
/** Stops matching `query`, best first, capped at `limit`.
*
*  Every word of the query has to appear. A label that starts with the query
*  ranks first, then one where a word starts with it, then any other hit.
*  Within a rank the list keeps its order, which is nearest to home first, so
*  "Stephansplatz" near home beats a namesake across town. An empty query
*  returns the list as it came.
*
*  `folded` is `foldStopLabels(stops)`, passed in by a caller that filters the
*  same list on every keystroke so ~1,800 labels aren't folded each time. */
function filterStops(stops, query, limit = STOP_SUGGESTION_LIMIT, folded) {
	const words = foldStopText(query).split(/\s+/).filter(Boolean);
	if (words.length === 0) return {
		matches: stops.slice(0, limit),
		total: stops.length
	};
	const first = words[0];
	const ranked = [];
	stops.forEach((stop, index) => {
		const label = folded?.[index] ?? foldStopText(stop.label);
		if (!words.every((word) => label.includes(word))) return;
		const rank = label.startsWith(first) ? 0 : new RegExp(`(^|[\\s(\\-/·])${first.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`).test(label) ? 1 : 2;
		ranked.push({
			stop,
			rank,
			index
		});
	});
	ranked.sort((a, b) => a.rank - b.rank || a.index - b.index);
	return {
		matches: ranked.slice(0, limit).map((r) => r.stop),
		total: ranked.length
	};
}

//#endregion
//#region \0@oxc-project+runtime@0.149.0/helpers/esm/decorate.js
function __decorate(decorators, target, key, desc) {
	var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	return c > 3 && r && Object.defineProperty(target, key, r), r;
}

//#endregion
//#region src/route-editor.ts
/** Route setup lives in the integration, not the card: a route is polled
*  once by the backend and shared by every dashboard showing it. This is the
*  My-link that opens that flow from inside Home Assistant. */
const ADD_ROUTE_HREF = "/_my_redirect/config_flow_start?domain=wiener_linien_austria";
/** `include_entities` rather than an integration filter: the integration
*  filter also matches every departure-board sensor, and picking one of those
*  gives a card with nothing to show. */
function schema(routes, adhoc, stopSelector) {
	return [
		{
			name: "entity",
			selector: { entity: { include_entities: routes } }
		},
		{
			name: "title",
			selector: { text: {} }
		},
		...adhoc && stopSelector ? [{
			name: "from",
			selector: stopSelector
		}, {
			name: "to",
			selector: stopSelector
		}] : [],
		{
			name: "alternatives",
			selector: { number: {
				min: 0,
				max: 3,
				step: 1,
				mode: "slider"
			} }
		},
		...adhoc && stopSelector ? [{
			name: "step_free",
			selector: { boolean: {} }
		}, {
			name: "replan_from_change",
			selector: { boolean: {} }
		}] : [],
		{
			name: "show_map_pins",
			selector: { boolean: {} }
		},
		{
			name: "hide_attribution",
			selector: { boolean: {} }
		}
	];
}
let WienerLinienAustriaRouteCardEditor = class WienerLinienAustriaRouteCardEditor extends i$2 {
	constructor(..._args) {
		super(..._args);
		this._stopSelector = null;
		this._stopsRequested = false;
		this._computeLabel = (field) => editorLabel(this.hass, this._i18n, field.name);
		this._computeHelper = (field) => editorHelper(this._i18n, field.name);
	}
	setConfig(config) {
		this._config = normaliseRouteConfig(config);
	}
	get _i18n() {
		return editorTranslators("route", this.hass?.language);
	}
	_onValueChanged(ev) {
		if (!this._config) return;
		const value = ev.detail.value;
		const next = {
			...this._config,
			...value
		};
		if (!next.entity) delete next.entity;
		if (next.entity || !next.from) delete next.from;
		if (next.entity || !next.to) delete next.to;
		if (!next.title) delete next.title;
		if (next.entity || next.step_free !== true) delete next.step_free;
		if (next.show_map_pins !== false) delete next.show_map_pins;
		if (next.entity || next.replan_from_change !== true) delete next.replan_from_change;
		if (next.hide_attribution !== true) delete next.hide_attribution;
		this._config = normaliseRouteConfig(next);
		fireEvent(this, "config-changed", { config: next });
	}
	updated() {
		if (this._stopsRequested || !this._config || this._config.entity || !this.hass?.callWS) return;
		this._stopsRequested = true;
		this.hass.callWS({ type: "wiener_linien_austria/stops" }).then((result) => {
			const stops = Array.isArray(result?.stops) ? result.stops : [];
			this._stopSelector = { select: {
				mode: "dropdown",
				sort: false,
				options: stops
			} };
		}).catch((err) => {
			console.warn(`[${ROUTE_CARD_TYPE}-editor] stop list unavailable`, err);
		});
	}
	render() {
		if (!this._config) return A;
		const routes = findRouteEntities(this.hass);
		const { et } = this._i18n;
		return b`
      ${routes.length === 0 ? b`<ha-alert alert-type="info">
            ${et("no_routes")}
            <a slot="action" href=${ADD_ROUTE_HREF}>${et("add_route")}</a>
          </ha-alert>` : A}
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${schema(routes, !this._config.entity, this._stopSelector)}
        .computeLabel=${this._computeLabel}
        .computeHelper=${this._computeHelper}
        @value-changed=${this._onValueChanged}
      ></ha-form>
    `;
	}
};
__decorate([n$1({ attribute: false })], WienerLinienAustriaRouteCardEditor.prototype, "hass", void 0);
__decorate([r()], WienerLinienAustriaRouteCardEditor.prototype, "_config", void 0);
__decorate([r()], WienerLinienAustriaRouteCardEditor.prototype, "_stopSelector", void 0);
WienerLinienAustriaRouteCardEditor = __decorate([t$1(`${ROUTE_CARD_TYPE}-editor`)], WienerLinienAustriaRouteCardEditor);

//#endregion
//#region src/shared-render.ts
/**
* Probe the backend's card-version WebSocket command. Returns the
* server-reported version when it differs from the bundled version
* (i.e. banner should appear), or null otherwise. Silent on transport
* error — older HA installs without the handler simply don't surface a
* mismatch, which is correct (cache-buster URL still applies).
*
* Never rejects: the cards call it bare, without a catch of their own.
*/
async function checkCardVersionWS(hass, type, bundleVersion) {
	if (!hass?.callWS) return null;
	try {
		const r = await hass.callWS({ type });
		if (r?.version && r.version !== bundleVersion) return r.version;
	} catch {}
	return null;
}
/**
* Best-effort cache-storage wipe followed by a hard reload. The reload
* picks up the freshly-cached JS bundle so the version-mismatch banner
* clears on next mount. Stamps a sessionStorage flag BEFORE reloading —
* see `wasReloadAttemptedFor` below for what reads it.
*/
function reloadAfterCacheWipe(forVersion) {
	try {
		window.caches?.keys?.().then((keys) => {
			keys.forEach((k) => window.caches?.delete?.(k));
		});
	} catch {}
	if (forVersion) try {
		window.sessionStorage?.setItem(`wl-reload-attempted-${forVersion}`, "1");
	} catch {}
	window.location.reload();
}
/**
* Did the user already click reload for this exact mismatch in the
* current tab session? When true, the banner should switch from
* "Reload" to a stuck-state message (caches/Service Worker/CDN won't
* invalidate; reloading again will just loop). sessionStorage survives
* page reloads in the same tab but clears when the tab closes, which
* is the right scope: after closing and reopening, the user gets a
* fresh reload attempt.
*/
function wasReloadAttemptedFor(version) {
	if (!version) return false;
	try {
		return window.sessionStorage?.getItem(`wl-reload-attempted-${version}`) === "1";
	} catch {
		return false;
	}
}
/**
* Render the version-mismatch banner. Returns the lit `nothing` sentinel
* when there is no mismatch so call sites can splat it unconditionally
* into their template.
*
* `t` is the card's flat-key translate callback — the `version_update`
* string carries a `{v}` placeholder; this helper substitutes it inline.
* Localisation strings stay in each card's bundle, not in this module.
*
* `className` defaults to "banner" (modern card); pass "retro-banner"
* for the retro card so its styled CSS class still matches.
*/
function renderVersionBanner(mismatch, t, className = "banner") {
	if (!mismatch) return A;
	if (wasReloadAttemptedFor(mismatch)) {
		const stuckMsg = t("version_reload_stuck");
		return b`
      <div class=${className} role="alert" aria-live="assertive">
        <span>${stuckMsg}</span>
      </div>
    `;
	}
	const updateMsg = t("version_update").replace("{v}", mismatch);
	const reloadLabel = t("version_reload");
	return b`
    <div class=${className} role="alert" aria-live="assertive">
      <span>${updateMsg}</span>
      <button
        type="button"
        aria-label=${reloadLabel}
        @click=${() => reloadAfterCacheWipe(mismatch)}
      >
        ${reloadLabel}
      </button>
    </div>
  `;
}

//#endregion
//#region src/stop-combobox.ts
const STOP_COMBOBOX_TAG = "wiener-linien-austria-stop-combobox";
/** How long typing has to pause before the match count is announced, so a
*  screen reader doesn't read out a count for every keystroke. */
const STOP_STATUS_DELAY_MS = 500;
let WienerLinienStopCombobox = class WienerLinienStopCombobox extends i$2 {
	constructor(..._args) {
		super(..._args);
		this.stops = [];
		this.value = "";
		this.idBase = "stop";
		this.strings = {
			label: "",
			toggle: "",
			noMatch: "",
			noResults: "",
			count: () => ""
		};
		this._text = "";
		this._open = false;
		this._active = -1;
		this._invalid = false;
		this._filtering = false;
		this._status = "";
		this._labelByValue = /* @__PURE__ */ new Map();
		this._folded = [];
		this._statusTimer = null;
	}
	createRenderRoot() {
		return this;
	}
	disconnectedCallback() {
		super.disconnectedCallback();
		this._clearStatus();
	}
	willUpdate(changed) {
		if (changed.has("stops")) {
			this._labelByValue = new Map(this.stops.map((stop) => [stop.value, stop.label]));
			this._folded = foldStopLabels(this.stops);
		}
		if ((changed.has("value") || changed.has("stops")) && !this._hasFocus()) this._revert();
	}
	updated() {
		if (this._open && this._active >= 0) this.querySelector(`#${this.idBase}-option-${this._active}`)?.scrollIntoView?.({ block: "nearest" });
	}
	get _results() {
		return filterStops(this.stops, this._filtering ? this._text : "", void 0, this._folded);
	}
	_hasFocus() {
		const input = this._input;
		const root = this.getRootNode();
		return !!input && root.activeElement === input;
	}
	get _input() {
		return this.querySelector("input");
	}
	_pick(stop) {
		const value = stop?.value ?? "";
		this._text = stop?.label ?? "";
		this._filtering = false;
		this._invalid = false;
		this._open = false;
		this._active = -1;
		this._clearStatus();
		if (value !== this.value) this.dispatchEvent(new CustomEvent("stop-picked", { detail: { value } }));
	}
	_onInput(ev) {
		this._text = ev.target.value;
		this._filtering = true;
		this._invalid = false;
		this._open = true;
		this._active = -1;
		this._scheduleStatus();
	}
	_scheduleStatus() {
		if (this._statusTimer !== null) clearTimeout(this._statusTimer);
		this._statusTimer = setTimeout(() => {
			this._statusTimer = null;
			if (!this._open || !this._filtering) return;
			const { matches, total } = this._results;
			this._status = this.strings.count(matches.length, total);
		}, 500);
	}
	_clearStatus() {
		if (this._statusTimer !== null) clearTimeout(this._statusTimer);
		this._statusTimer = null;
		this._status = "";
	}
	_onKeyDown(ev) {
		const { matches } = this._results;
		switch (ev.key) {
			case "ArrowDown":
				ev.preventDefault();
				if (!this._open) {
					this._open = true;
					if (!ev.altKey) this._active = matches.length ? 0 : -1;
					return;
				}
				this._active = Math.min(this._active + 1, matches.length - 1);
				return;
			case "ArrowUp":
				ev.preventDefault();
				if (!this._open) {
					this._open = true;
					this._active = matches.length - 1;
					return;
				}
				this._active = matches.length ? Math.max(this._active - 1, 0) : -1;
				return;
			case "Enter": {
				if (!this._open) return;
				ev.preventDefault();
				const choice = matches[this._active >= 0 ? this._active : 0];
				if (choice) this._pick(choice);
				return;
			}
			case "Escape":
				if (this._open) {
					ev.preventDefault();
					this._open = false;
					this._active = -1;
					this._clearStatus();
				} else if (this._filtering || this._invalid) {
					ev.preventDefault();
					this._revert();
				}
				return;
			default: return;
		}
	}
	/** Leaving the field commits an exact match, clears on empty text, and
	*  otherwise keeps the text but flags it, instead of silently guessing. */
	_onBlur() {
		this._open = false;
		this._active = -1;
		this._clearStatus();
		if (!this._filtering) return;
		const text = foldStopText(this._text.trim());
		if (!text) {
			this._pick(null);
			return;
		}
		const exact = this.stops[this._folded.indexOf(text)];
		if (exact) {
			this._pick(exact);
			return;
		}
		this._invalid = true;
	}
	_revert() {
		this._text = this._labelByValue.get(this.value) ?? "";
		this._filtering = false;
		this._invalid = false;
	}
	_toggle() {
		this._open = !this._open;
		this._active = -1;
		this._clearStatus();
		if (this._open) this._filtering = false;
		this._input?.focus();
	}
	render() {
		const id = this.idBase;
		const { matches, total } = this._results;
		const listId = `${id}-list`;
		const activeId = this._open && this._active >= 0 ? `${id}-option-${this._active}` : "";
		const describedBy = this._invalid ? `${id}-error` : A;
		const enterTarget = this._filtering && this._active < 0 ? 0 : -1;
		return b`
      <label class="combo-label" for=${`${id}-input`}>${this.strings.label}</label>
      <div class="combo-field" ?data-open=${this._open}>
        <input
          id=${`${id}-input`}
          type="text"
          role="combobox"
          autocomplete="off"
          autocapitalize="off"
          spellcheck="false"
          aria-autocomplete="list"
          aria-expanded=${this._open ? "true" : "false"}
          aria-controls=${listId}
          aria-activedescendant=${activeId || A}
          aria-invalid=${this._invalid ? "true" : "false"}
          aria-describedby=${describedBy}
          .value=${this._text}
          @input=${this._onInput}
          @keydown=${this._onKeyDown}
          @blur=${this._onBlur}
          @focus=${(ev) => ev.target.select()}
        />
        <button
          type="button"
          class="combo-toggle"
          tabindex="-1"
          aria-label=${this.strings.toggle}
          aria-controls=${listId}
          aria-expanded=${this._open ? "true" : "false"}
          @pointerdown=${(ev) => ev.preventDefault()}
          @click=${this._toggle}
        >
          <ha-icon
            icon=${this._open ? "mdi:chevron-up" : "mdi:chevron-down"}
            aria-hidden="true"
          ></ha-icon>
        </button>
      </div>
      <ul
        class="combo-list"
        id=${listId}
        role="listbox"
        aria-label=${this.strings.label}
        ?hidden=${!this._open}
      >
        ${this._open ? matches.map((stop, index) => b`<li
                id=${`${id}-option-${index}`}
                role="option"
                class="combo-option"
                aria-selected=${index === this._active ? "true" : "false"}
                ?data-current=${stop.value === this.value}
                ?data-enter=${index === enterTarget}
                @pointerdown=${(ev) => ev.preventDefault()}
                @click=${() => this._pick(stop)}
              >
                ${stop.label}
              </li>`) : A}
      </ul>
      ${this._open && total === 0 ? b`<p class="combo-note">${this.strings.noResults}</p>` : A}
      ${this._open && total > matches.length ? b`<p class="combo-note" aria-hidden="true">${this.strings.count(matches.length, total)}</p>` : A}
      <span class="sr-only" role="status">${this._open ? this._status : ""}</span>
      ${this._invalid ? b`<p class="field-error" id=${`${id}-error`}>${this.strings.noMatch}</p>` : A}
    `;
	}
};
__decorate([n$1({ attribute: false })], WienerLinienStopCombobox.prototype, "stops", void 0);
__decorate([n$1({ attribute: false })], WienerLinienStopCombobox.prototype, "value", void 0);
__decorate([n$1({ attribute: false })], WienerLinienStopCombobox.prototype, "idBase", void 0);
__decorate([n$1({ attribute: false })], WienerLinienStopCombobox.prototype, "strings", void 0);
__decorate([r()], WienerLinienStopCombobox.prototype, "_text", void 0);
__decorate([r()], WienerLinienStopCombobox.prototype, "_open", void 0);
__decorate([r()], WienerLinienStopCombobox.prototype, "_active", void 0);
__decorate([r()], WienerLinienStopCombobox.prototype, "_invalid", void 0);
__decorate([r()], WienerLinienStopCombobox.prototype, "_filtering", void 0);
__decorate([r()], WienerLinienStopCombobox.prototype, "_status", void 0);
WienerLinienStopCombobox = __decorate([t$1(STOP_COMBOBOX_TAG)], WienerLinienStopCombobox);

//#endregion
//#region src/utils/html.ts
/** Slugify an entity id (or any string) into a value safe for use in DOM
*  id / aria-controls attributes. Replaces anything outside [A-Za-z0-9_]
*  with `_`. Keeps the original casing because aria-controls is
*  case-sensitive (lower-cased ids would mis-pair with refs). */
function safeDomId(s) {
	return s.replace(/[^A-Za-z0-9_]/g, "_");
}

//#endregion
//#region src/utils/map-url.ts
/**
* Link a stop to the official Vienna city map (beta viewer) —
* stadtplan.wien.gv.at, maintained by Magistrat der Stadt Wien. Built on
* basemap.at tiles, renders the Wiener-Linien stop network natively, and
* exposes a hash-based permalink with a stable WGS84 contract:
*
*   #/@<lon>,<lat>,<zoom>,<rotation>,<tilt>,<basemap>/<theme>
*
* Used by the departure card (header map button, dialog link) and the route
* card (the pin after each stop name). Falls back to an OpenStreetMap search
* by name when there are no coordinates: a departure sensor seeds them from
* the static catalogue at config-flow time, a route stop only when the
* catalogue knows its DIVA (S-Bahn-only stations don't).
*
* Always `https://`: the HA Companion WebView drops `geo:` links.
*/
function stopMapUrl(stopName, lat, lon) {
	let url = null;
	if (typeof lat === "number" && typeof lon === "number") url = `https://stadtplan.wien.gv.at/#/@${lon},${lat},17.5,0,0,standard/themes`;
	else if (stopName) url = `https://www.openstreetmap.org/search?query=${encodeURIComponent(`${stopName}, Wien`)}`;
	return url ? safeHttpsUri(url) || null : null;
}

//#endregion
//#region src/wiener-linien-austria-route-card.ts
const TICK_MS = 15e3;
const MAX_NOTICES = 2;
function adhocErrorOf(err) {
	const wsError = err;
	const retryAfter = Number(wsError?.translation_placeholders?.["retry_after"]);
	return {
		code: typeof wsError?.code === "string" ? wsError.code : "unknown",
		retryAfter: Number.isFinite(retryAfter) ? retryAfter : null,
		translationKey: wsError?.translation_key ?? null
	};
}
const TIME_MODES = [
	"now",
	"depart",
	"arrive"
];
{
	const win = window;
	win.customCards = win.customCards ?? [];
	if (!win.customCards.some((c) => c.type === "wiener-linien-austria-route-card")) win.customCards.push({
		type: ROUTE_CARD_TYPE,
		name: "Wiener Linien Austria — Route",
		description: pickerText("picker_route"),
		preview: true,
		getEntitySuggestion: (hass, entityId) => {
			if (!entityId.startsWith("sensor.")) return null;
			if (hass?.entities?.[entityId]?.platform !== "wiener_linien_austria") return null;
			if (!findRouteEntities(hass).includes(entityId)) return null;
			return { config: {
				type: `custom:${ROUTE_CARD_TYPE}`,
				entity: entityId
			} };
		}
	});
}
let WienerLinienAustriaRouteCard = class WienerLinienAustriaRouteCard extends i$2 {
	constructor(..._args) {
		super(..._args);
		this._versionMismatch = null;
		this._now = Date.now();
		this._alternativesOpen = false;
		this._openRides = /* @__PURE__ */ new Set();
		this._openAlternatives = /* @__PURE__ */ new Set();
		this._stops = null;
		this._stopsError = null;
		this._from = "";
		this._to = "";
		this._timeMode = "now";
		this._when = "";
		this._plan = null;
		this._replanFrom = null;
		this._phase = "idle";
		this._error = null;
		this._announcement = "";
		this._tick = null;
		this._versionCheckDone = false;
		this._adhocStarted = false;
		this._planKey = "";
		this._planSeq = 0;
		this._revealAlternatives = false;
		this._refreshTimer = null;
		this._nextRefreshAt = null;
		this._comboStringsCache = /* @__PURE__ */ new Map();
		this._debounceTimer = null;
		this._stopsRetryTimer = null;
		this._stopsLoading = false;
		this._pendingRefresh = false;
		this._onScreen = true;
		this._lastInteraction = Date.now();
		this._observer = null;
		this._onVisibilityChange = () => {
			this._catchUp();
		};
		this._onCardActivity = () => {
			if (!this._isAdhoc) return;
			this._lastInteraction = Date.now();
			if (this._phase === "paused") this._runPlan(true);
		};
		this._onWhen = (ev) => {
			const value = ev.target.value;
			if (!isInputDateTime(value) || value === this._when) return;
			this._when = value;
			this._lastInteraction = Date.now();
			this._requestPlan(true);
		};
		this._swap = () => {
			[this._from, this._to] = [this._to, this._from];
			this._replanFrom = null;
			this._revealAlternatives = false;
			saveAdhocSelection({
				from: this._from,
				to: this._to
			});
			this._lastInteraction = Date.now();
			this._requestPlan(true);
		};
		this._backToOrigin = () => {
			const origin = this._replanFrom;
			if (!origin) return;
			this._replanFrom = null;
			this._revealAlternatives = false;
			this._from = origin.from;
			this._timeMode = origin.timeMode;
			this._when = origin.when;
			this._lastInteraction = Date.now();
			this._requestPlan(true);
		};
	}
	setConfig(config) {
		const previous = this._config;
		this._config = normaliseRouteConfig(config);
		if (this._config.entity) {
			this._stopAdhoc();
			return;
		}
		const cfg = this._config;
		if (this._adhocStarted && previous && (previous.from !== cfg.from || previous.to !== cfg.to || previous.step_free !== cfg.step_free)) {
			if (cfg.from) this._from = cfg.from;
			if (cfg.to) this._to = cfg.to;
			this._requestPlan(false);
		}
		this._startAdhoc();
	}
	get _isAdhoc() {
		return !!this._config && !this._config.entity;
	}
	getCardSize() {
		return 6;
	}
	/** Sections-view sizing, per the HA custom-card docs: half the 12-column
	*  section by default (a multiple of 3, as the docs recommend), never
	*  narrower than the pickers and strand stay readable at. `rows` is left out
	*  on purpose — the docs' way to say "size to content", which this card
	*  needs because opening the alternatives or a stop list grows it. A size
	*  set in the dashboard's layout tab lands in `grid_options` and wins over
	*  these defaults. */
	getGridOptions() {
		return {
			columns: 6,
			min_columns: 4
		};
	}
	static getConfigElement() {
		return document.createElement(`${ROUTE_CARD_TYPE}-editor`);
	}
	static getStubConfig(hass) {
		const first = findRouteEntities(hass)[0];
		return first ? { entity: first } : {};
	}
	connectedCallback() {
		super.connectedCallback();
		registerWlFonts();
		this._now = Date.now();
		this._tick = setInterval(() => {
			this._now = Date.now();
		}, TICK_MS);
		if (!this._versionCheckDone && this.hass?.callWS) {
			this._versionCheckDone = true;
			this._checkCardVersion();
		}
		this._lastInteraction = Date.now();
		document.addEventListener("visibilitychange", this._onVisibilityChange);
		this._startAdhoc();
	}
	disconnectedCallback() {
		super.disconnectedCallback();
		if (this._tick !== null) clearInterval(this._tick);
		this._tick = null;
		document.removeEventListener("visibilitychange", this._onVisibilityChange);
		this._stopAdhoc();
	}
	updated(changed) {
		if (changed.has("hass") && !this._versionCheckDone && this.hass?.callWS) {
			this._versionCheckDone = true;
			this._checkCardVersion();
		}
		if (changed.has("hass")) this._startAdhoc();
	}
	shouldUpdate(changed) {
		if (!this._config) return false;
		if (!changed.has("hass") || changed.size > 1) return true;
		const prev = changed.get("hass");
		if (!prev) return true;
		const eid = this._config.entity;
		if (!eid) return prev.language !== this.hass?.language;
		return prev.states[eid] !== this.hass?.states[eid];
	}
	_startAdhoc() {
		if (this._adhocStarted || !this._isAdhoc || !this.isConnected || !this.hass?.callWS) return;
		this._adhocStarted = true;
		const cfg = this._config;
		if (!this._from && !this._to) {
			const saved = loadAdhocSelection();
			this._from = saved?.from || cfg.from;
			this._to = saved?.to || cfg.to;
		}
		this._loadStops();
		if (typeof IntersectionObserver !== "undefined") {
			this._observer = new IntersectionObserver((entries) => {
				this._onScreen = entries.some((entry) => entry.isIntersecting);
				this._catchUp();
			});
			this._observer.observe(this);
		}
		if (this._from && this._to) {
			if (this._plan && this._planKey === this._queryKey()) {
				const remaining = this._nextRefreshAt === null ? 0 : this._nextRefreshAt - Date.now();
				if (remaining > 0) this._schedule(remaining);
				else {
					this._pendingRefresh = true;
					this._catchUp();
				}
			} else this._runPlan(false);
		}
	}
	_stopAdhoc() {
		this._adhocStarted = false;
		for (const timer of [
			this._refreshTimer,
			this._debounceTimer,
			this._stopsRetryTimer
		]) if (timer !== null) clearTimeout(timer);
		this._refreshTimer = this._debounceTimer = this._stopsRetryTimer = null;
		this._observer?.disconnect();
		this._observer = null;
	}
	/** Whether a refresh would be seen. Off screen or in a background tab it
	*  would only spend the upstream's time. */
	_canRefresh() {
		return this.isConnected && this._onScreen && document.visibilityState !== "hidden";
	}
	_catchUp() {
		if (this._pendingRefresh && this._canRefresh()) {
			this._pendingRefresh = false;
			this._refreshDue();
		}
	}
	_refreshDue() {
		if (!this._canRefresh()) {
			this._pendingRefresh = true;
			return;
		}
		if (Date.now() - this._lastInteraction > 18e5) {
			this._phase = "paused";
			return;
		}
		this._runPlan(false);
	}
	_schedule(delayMs) {
		if (this._refreshTimer !== null) clearTimeout(this._refreshTimer);
		this._refreshTimer = null;
		this._nextRefreshAt = Date.now() + delayMs;
		if (!this._adhocStarted) return;
		this._refreshTimer = setTimeout(() => {
			this._refreshTimer = null;
			this._refreshDue();
		}, delayMs);
	}
	_requestPlan(userInitiated) {
		if (this._debounceTimer !== null) clearTimeout(this._debounceTimer);
		this._debounceTimer = setTimeout(() => {
			this._debounceTimer = null;
			this._runPlan(userInitiated);
		}, 400);
	}
	async _loadStops() {
		if (this._stops || this._stopsLoading || !this.hass?.callWS) return;
		this._stopsLoading = true;
		try {
			const result = await this.hass.callWS({ type: "wiener_linien_austria/stops" });
			const stops = Array.isArray(result?.stops) ? result.stops : [];
			this._stops = stops;
			this._stopsError = null;
		} catch (err) {
			const error = adhocErrorOf(err);
			this._stopsError = error;
			const delay = adhocRetryDelay(adhocErrorSpec(error.code), error.retryAfter);
			if (delay !== null && this._adhocStarted) this._stopsRetryTimer = setTimeout(() => {
				this._stopsRetryTimer = null;
				this._loadStops();
			}, delay);
		} finally {
			this._stopsLoading = false;
		}
	}
	async _runPlan(userInitiated) {
		if (this._refreshTimer !== null) clearTimeout(this._refreshTimer);
		this._refreshTimer = null;
		this._nextRefreshAt = null;
		this._pendingRefresh = false;
		const { _from: from, _to: to } = this;
		const seq = ++this._planSeq;
		if (!from || !to) {
			this._plan = null;
			this._planKey = "";
			this._error = null;
			this._phase = "idle";
			return;
		}
		if (from === to) {
			this._plan = null;
			this._planKey = "";
			this._error = {
				code: "same_stop",
				retryAfter: null,
				translationKey: null
			};
			this._phase = "error";
			if (userInitiated) this._announce(this._adhocError(this._error).title);
			return;
		}
		if (!this.hass?.callWS) return;
		const key = this._queryKey();
		if (this._planKey !== key) {
			this._plan = null;
			this._alternativesOpen = false;
			this._openAlternatives = /* @__PURE__ */ new Set();
		}
		if (!this._plan) this._phase = "loading";
		try {
			const planned = this._timeMode !== "now" && isInputDateTime(this._when);
			const plan = await this.hass.callWS({
				type: "wiener_linien_austria/plan",
				origin: Number(from),
				destination: Number(to),
				...planned ? {
					datetime: this._when,
					arrive_by: this._timeMode === "arrive"
				} : {},
				...this._config?.step_free ? { step_free: true } : {}
			});
			if (seq !== this._planSeq) return;
			this._plan = plan;
			this._planKey = key;
			this._error = null;
			this._phase = "ready";
			if (this._revealAlternatives) {
				this._alternativesOpen = true;
				this._revealAlternatives = false;
			}
			if (userInitiated) this._announce(this._planAnnouncement(plan));
			this._schedule(adhocPlanRefreshDelay(plan, Date.now()));
		} catch (err) {
			if (seq !== this._planSeq) return;
			const error = adhocErrorOf(err);
			this._error = error;
			this._revealAlternatives = false;
			this._plan = null;
			this._planKey = "";
			this._phase = "error";
			if (userInitiated) this._announce(this._adhocError(error).title);
			const delay = adhocRetryDelay(adhocErrorSpec(error.code, error.translationKey), error.retryAfter);
			if (delay !== null) this._schedule(delay);
		}
	}
	_onPick(which, value) {
		const next = typeof value === "string" || typeof value === "number" ? String(value) : "";
		if (which === "from") this._from = next;
		else this._to = next;
		this._replanFrom = null;
		this._revealAlternatives = false;
		saveAdhocSelection({
			from: this._from,
			to: this._to
		});
		this._lastInteraction = Date.now();
		this._requestPlan(true);
	}
	/** Identifies what is being asked, so an answer for an older question
	*  never stands in for the current one. */
	_queryKey() {
		const when = this._timeMode === "now" ? "now" : `${this._timeMode}@${this._when}`;
		return `${this._from}>${this._to}|${when}|${this._config?.step_free ? "step-free" : ""}`;
	}
	_onTimeMode(mode) {
		if (mode === this._timeMode) return;
		if (mode !== "now" && !isInputDateTime(this._when)) this._when = viennaInputValue(Date.now());
		this._timeMode = mode;
		this._lastInteraction = Date.now();
		this._requestPlan(true);
	}
	/** Whether this stop can stand in as an origin. Three things have to hold,
	*  and the backend would answer an error for each of them:
	*
	*  - It has to be a stop the catalogue tracks. `stop_id` is the DIVA the
	*    plan command takes, but the strand also names stops the catalogue
	*    doesn't hold — an S-Bahn-only station, a Badner Bahn stop past the
	*    city border — and those come back as `adhoc_invalid_stop`. The picker
	*    list is the same set the backend accepts, so it is the gate.
	*  - It can't be the destination itself (`adhoc_same_stop`).
	*/
	_canReplanFrom(stop) {
		const cfg = this._config;
		if (!this._isAdhoc || !this._to || !cfg?.replan_from_change || !cfg.alternatives) return false;
		const diva = stop.stop_id;
		if (!diva || diva === this._to) return false;
		return this._stops?.some((option) => option.value === diva) === true;
	}
	/** The origin the current plan was asked for, named the way the strand
	*  names it. `legs[0]` rather than the first ride: a trip that starts with
	*  a walk boards somewhere else, and the button back has to offer the stop
	*  that was searched for, not the one the first tram leaves from. */
	_originName() {
		return (this._plan ? upcomingTrips(this._plan, this._now)[0] : void 0)?.legs[0]?.origin.name ?? "";
	}
	/** Plan the rest of the journey again from a change, for the minute someone
	*  standing there could actually board.
	*
	*  Planning it for "now" would be the wrong question and a convincing wrong
	*  answer: from the sofa, half an hour before leaving, it would list trains
	*  out of a station nobody has reached yet. The destination is left alone —
	*  this only asks "what else goes from here", never where to.
	*
	*  Deliberately not written to the saved selection: a look at one change is
	*  not a change of the journey this dashboard opens on. */
	_replanFromHere(stop, when) {
		const diva = stop.stop_id;
		if (!diva) return;
		this._replanFrom ??= {
			from: this._from,
			timeMode: this._timeMode,
			when: this._when,
			name: this._originName()
		};
		this._from = diva;
		this._revealAlternatives = true;
		this._timeMode = "depart";
		this._when = when;
		this._lastInteraction = Date.now();
		this._announce(this._t("replan_announce", { stop: stop.name }));
		this._requestPlan(true);
	}
	/** Re-setting identical text wouldn't be announced, so nudge it. */
	_announce(text) {
		this._announcement = text === this._announcement ? `${text} ` : text;
	}
	_planAnnouncement(plan) {
		const best = upcomingTrips(plan, Date.now())[0];
		if (!best) return this._t("adhoc_no_trips");
		const summary = this._tripSummary(best);
		if (plan.planned_for) return this._t("adhoc_announce_planned", {
			day: this._dayText(best.departure),
			time: clockOf(best.departure),
			summary
		});
		const minutes = minutesUntil(best.departure, Date.now());
		return minutes === 0 ? this._t("adhoc_announce_now", { summary }) : this._t("adhoc_announce", {
			n: minutes ?? 0,
			summary
		});
	}
	_adhocError(error) {
		const spec = adhocErrorSpec(error.code, error.translationKey);
		const detail = spec.retry === "countdown" ? this._t("adhoc_error_retry_detail", { s: error.retryAfter ?? Math.round(6e4 / 1e3) }) : spec.detail && this._t(spec.detail);
		return {
			icon: spec.icon,
			title: this._t(spec.title),
			...detail ? { detail } : {}
		};
	}
	async _checkCardVersion() {
		this._versionMismatch = await checkCardVersionWS(this.hass, "wiener_linien_austria/route_card_version", ROUTE_CARD_VERSION);
	}
	_t(key, replacements) {
		return translate(`route.${key}`, { hassLanguage: this.hass?.language }, replacements);
	}
	/** "heute", "morgen" or "Di., 15.09." for a departure. */
	_dayText(iso) {
		const offset = viennaDayOffset(iso, this._now);
		if (offset === 0) return this._t("day_today");
		if (offset === 1) return this._t("day_tomorrow");
		return iso ? viennaShortDate(iso, this._lang) : "";
	}
	get _lang() {
		return (this.hass?.language ?? "de").startsWith("en") ? "en" : "de";
	}
	render() {
		const cfg = this._config;
		if (!cfg) return A;
		const adhoc = !cfg.entity;
		const state = cfg.entity ? this.hass?.states[cfg.entity] : void 0;
		const attrs = (adhoc ? this._plan : state?.attributes) ?? {};
		const heading = cfg.title || (adhoc ? this._t("adhoc_heading") : attrs.origin && attrs.destination ? `${attrs.origin} → ${attrs.destination}` : this._t("heading_fallback"));
		const attribution = cfg.hide_attribution ? "" : typeof attrs.attribution === "string" && attrs.attribution || "Datenquelle: Wiener Linien (data.wien.gv.at), CC BY 4.0";
		return b`
      <ha-card @pointerdown=${this._onCardActivity} @keydown=${this._onCardActivity}>
        <div class="wrap">
          ${renderVersionBanner(this._versionMismatch, (k) => this._t(k))}
          <div class="header">
            <h2 class="heading">
              <ha-icon icon="mdi:map-marker-path" aria-hidden="true"></ha-icon>
              <span>${heading}</span>
            </h2>
            ${this._renderUpdated(attrs.fetched_at)}
          </div>
          ${adhoc ? b`
                ${this._renderPickers()} ${this._renderTimeControl()}
                <p class="sr-only" role="status" aria-live="polite">${this._announcement}</p>
                <div class="results" aria-busy=${this._phase === "loading" ? "true" : "false"}>
                  ${this._renderAdhocBody(cfg)}
                </div>
              ` : this._renderBody(cfg, state?.state, attrs)}
          ${attribution ? b`<div class="attribution">${attribution}</div>` : A}
        </div>
      </ha-card>
    `;
	}
	/** "Zuletzt aktualisiert 07:40": when the upstream last answered, so a
	*  plan kept on screen through an outage can't pass for a fresh one. */
	_renderUpdated(fetchedAt) {
		const clock = viennaClock(fetchedAt);
		if (!clock || !fetchedAt) return A;
		return b`<p class="updated">
      <ha-icon icon="mdi:update" aria-hidden="true"></ha-icon>
      <time datetime=${fetchedAt}>${this._t("updated", { time: clock })}</time>
    </p>`;
	}
	_renderPickers() {
		if (this._stops === null) {
			if (this._stopsError) return b``;
			return b`<p class="picker-status">${this._t("adhoc_stops_loading")}</p>`;
		}
		return b`
      <fieldset class="pickers">
        <legend class="sr-only">${this._t("adhoc_legend")}</legend>
        ${this._renderPicker("from", this._t("adhoc_from"))}
        <button
          type="button"
          class="swap"
          aria-label=${this._t("adhoc_swap")}
          title=${this._t("adhoc_swap")}
          ?disabled=${!this._from && !this._to}
          @click=${this._swap}
        >
          <ha-icon icon="mdi:swap-vertical" aria-hidden="true"></ha-icon>
        </button>
        ${this._renderPicker("to", this._t("adhoc_to"))}
      </fieldset>
    `;
	}
	/** Now / depart at / arrive by, plus the time field once it matters.
	*  Native radios give arrow-key movement and one tab stop for free. */
	_renderTimeControl() {
		if (this._stops === null) return A;
		const labels = {
			now: this._t("when_now"),
			depart: this._t("when_depart"),
			arrive: this._t("when_arrive")
		};
		return b`
      <fieldset class="when">
        <legend class="sr-only">${this._t("when_legend")}</legend>
        <div class="when-modes">
          ${TIME_MODES.map((mode) => b`<label class="when-mode">
              <input
                type="radio"
                name="wl-adhoc-when"
                .checked=${this._timeMode === mode}
                @change=${() => this._onTimeMode(mode)}
              />
              <span>${labels[mode]}</span>
            </label>`)}
        </div>
        ${this._timeMode === "now" ? A : b`<label class="when-field">
              <span class="sr-only">${this._t("when_input")}</span>
              <input type="datetime-local" .value=${this._when} @change=${this._onWhen} />
            </label>`}
      </fieldset>
    `;
	}
	/** One strings object per picker and language: a fresh object on every
	*  render (the clock ticks every 15 s) would re-render both pickers. */
	_comboStrings(label) {
		const cacheKey = `${this.hass?.language ?? ""}|${label}`;
		let strings = this._comboStringsCache.get(cacheKey);
		if (!strings) {
			strings = {
				label,
				toggle: this._t("adhoc_show_stops"),
				noMatch: this._t("adhoc_no_match"),
				noResults: this._t("adhoc_no_results"),
				count: (shown, total) => shown < total ? this._t("adhoc_matches_more", {
					shown,
					total
				}) : this._t("adhoc_matches", { n: total })
			};
			this._comboStringsCache.set(cacheKey, strings);
		}
		return strings;
	}
	_renderPicker(which, label) {
		return b`<wiener-linien-austria-stop-combobox
      class=${`picker picker--${which}`}
      .stops=${this._stops ?? []}
      .value=${which === "from" ? this._from : this._to}
      .idBase=${`wl-adhoc-${which}`}
      .strings=${this._comboStrings(label)}
      @stop-picked=${(ev) => this._onPick(which, ev.detail.value)}
    ></wiener-linien-austria-stop-combobox>`;
	}
	_renderAdhocBody(cfg) {
		if (this._stopsError) {
			const { icon, title, detail } = this._adhocError(this._stopsError);
			return this._empty(icon, title, detail, false);
		}
		if (this._stops === null) return b``;
		if (!this._from || !this._to) return this._empty("mdi:map-search-outline", this._t("adhoc_pick"), this._t("adhoc_pick_detail"), false);
		const back = this._renderReplanBack();
		if (this._phase === "error" && this._error) {
			const { icon, title, detail } = this._adhocError(this._error);
			return b`${back}${this._empty(icon, title, detail, false)}`;
		}
		const paused = this._phase === "paused" ? b`<div class="paused">
            <ha-icon icon="mdi:pause-circle-outline" aria-hidden="true"></ha-icon>
            <span>${this._t("adhoc_paused")}</span>
            <button type="button" @click=${this._onCardActivity}>${this._t("adhoc_resume")}</button>
          </div>` : A;
		const plan = this._plan;
		if (!plan) return this._phase === "paused" ? b`${back}${paused}` : b`${back}${this._empty("mdi:timer-sand", this._t("adhoc_loading"), void 0, false)}`;
		const stale = plan.stale && this._phase !== "paused" ? b`<p class="stale-note">
            <ha-icon icon="mdi:timer-sand" aria-hidden="true"></ha-icon>
            <span>${this._t("adhoc_stale")}</span>
          </p>` : A;
		const trips = upcomingTrips(plan, this._now);
		if (!trips[0]) return b`${back}${paused}${stale}${this._empty("mdi:timetable", this._t("adhoc_no_trips"), this._t("adhoc_no_trips_detail"), false)}`;
		return b`${back}${paused}${stale}${this._renderTrips(trips, plan, cfg)}`;
	}
	_renderBody(cfg, stateValue, attrs) {
		if (stateValue === void 0) return this._empty("mdi:help-circle-outline", this._t("entity_missing", { entity: cfg.entity }));
		if (!findRouteEntities(this.hass).includes(cfg.entity) && stateValue !== "unavailable") return this._empty("mdi:swap-horizontal", this._t("not_a_route"));
		if (stateValue === "unavailable") return this._empty("mdi:cloud-off-outline", this._t("unavailable"), this._t("unavailable_detail"));
		if (attrs.active === false) {
			const when = [windowDays(attrs.active_window, this._lang), windowRange(attrs.active_window)].filter(Boolean).join(" ");
			return this._empty("mdi:sleep", this._t("inactive"), when ? this._t("inactive_detail", { when }) : void 0);
		}
		const trips = upcomingTrips(attrs, this._now);
		if (!trips[0]) return this._empty("mdi:timetable", this._t("no_trips"), this._t("no_trips_detail"));
		return this._renderTrips(trips, attrs, cfg);
	}
	/** The best connection expanded, then the alternatives. Both modes render
	*  through here: an ad-hoc plan arrives in the route sensor's attribute
	*  shape precisely so this stays one path. */
	_renderTrips(trips, attrs, cfg) {
		const best = trips[0];
		const alternatives = trips.slice(1, 1 + cfg.alternatives);
		return b`
      ${this._renderHero(best, attrs)}
      ${this._renderNotices(best, attrs)}
      ${this._renderStrand(best, attrs)}
      ${alternatives.length ? this._renderAlternatives(alternatives, attrs) : A}
      ${this._renderLastConnection(attrs)}
    `;
	}
	/** "Letzte Verbindung ohne Nachtbus 00:20" with its lines, late in the
	*  evening. Gone once it has left, like any other connection. */
	_renderLastConnection(attrs) {
		const last = attrs.last_connection;
		if (!last || !upcomingTrips({ trips: [last] }, this._now).length) return A;
		return b`
      <p class="last-connection">
        <ha-icon icon="mdi:weather-night" aria-hidden="true"></ha-icon>
        <span>${this._t("last_connection", { time: clockOf(last.departure) })}</span>
        <span class="alt-lines">
          ${transitLegs(last).map((leg) => this._renderBadge(leg, attrs))}
        </span>
      </p>
    `;
	}
	_empty(icon, title, detail, live = true) {
		return b`
      <div class="empty" role=${live ? "status" : A}>
        <ha-icon icon=${icon} aria-hidden="true"></ha-icon>
        <p class="empty-title">${title}</p>
        ${detail ? b`<p class="empty-detail">${detail}</p>` : A}
      </div>
    `;
	}
	_changesText(trip) {
		if (trip.interchanges === 0) return this._t("direct");
		if (trip.interchanges === 1) return this._t("changes_one");
		return this._t("changes_many", { n: trip.interchanges });
	}
	/** "07:57 to 08:11, 1 change" — the spoken form of a times range. */
	_tripSummary(trip) {
		return this._t("trip_summary", {
			dep: clockOf(trip.departure),
			arr: clockOf(trip.arrival),
			changes: this._changesText(trip)
		});
	}
	/** "26 min, 1 Umstieg": the line under either hero. */
	_heroSub(trip) {
		return [trip.duration_minutes !== null ? this._t("minutes", { n: trip.duration_minutes }) : "", this._changesText(trip)].filter(Boolean).join(", ");
	}
	_renderHero(trip, attrs) {
		if (attrs.planned_for) return this._renderPlannedHero(trip);
		const minutes = minutesUntil(trip.departure, this._now);
		const isNow = minutes === 0;
		const spoken = isNow ? this._t("now") : this._t("minutes_long", { n: minutes ?? 0 });
		const sub = this._heroSub(trip);
		return b`
      <div class="hero">
        <p class="hero-count">
          <span class="hero-label">${this._t("leave_in")}</span>
          <span class="hero-metric" aria-hidden="true">
            ${isNow ? this._t("now") : b`${minutes ?? "–"}<span class="hero-unit">min</span>`}
          </span>
          <span class="sr-only">${spoken}</span>
        </p>
        <div class="hero-meta">
          <p class="hero-times">
            <span aria-hidden="true">${clockOf(trip.departure)} – ${clockOf(trip.arrival)}</span>
            <span class="sr-only">${this._tripSummary(trip)}</span>
          </p>
          <p class="hero-sub">${sub}</p>
        </div>
      </div>
    `;
	}
	/** A plan for a chosen time answers "when do I leave?" with a clock time
	*  and its day; a countdown to tomorrow morning would say nothing useful. */
	_renderPlannedHero(trip) {
		const sub = this._heroSub(trip);
		return b`
      <div class="hero">
        <p class="hero-count">
          <span class="hero-label">${this._t("planned_departs", { day: this._dayText(trip.departure) })}</span>
          <time class="hero-metric" datetime=${trip.departure ?? ""}>${clockOf(trip.departure)}</time>
        </p>
        <div class="hero-meta">
          <p class="hero-times">${this._t("planned_arrives", { time: clockOf(trip.arrival) })}</p>
          <p class="hero-sub">${sub}</p>
        </div>
      </div>
    `;
	}
	_renderNotices(trip, attrs) {
		const lines = new Set(transitLegs(trip).map((leg) => leg.line ?? ""));
		const lifts = this._liftOutages(trip, attrs).map((outage) => ({
			title: this._t("lift_out_notice", { station: outage.station ?? "" }),
			detail: [outage.description, outage.reason].map((part) => (part ?? "").trim()).filter(Boolean).join(" · ")
		}));
		const notices = [...lifts, ...(attrs.traffic_info ?? []).filter((n) => (n.related_lines ?? []).some((line) => lines.has(line))).map((n) => ({
			title: n.title,
			detail: ""
		}))].slice(0, MAX_NOTICES + lifts.length);
		if (!notices.length) return A;
		return b`
      <ul class="notices">
        ${notices.map((n) => b`
            <li class="notice">
              <ha-icon icon="mdi:alert-outline" aria-hidden="true"></ha-icon>
              <span>
                <span class="sr-only">${this._t("disruption")}: </span>${n.title ?? ""}
                ${n.detail ? b`<span class="notice-detail">${n.detail}</span>` : A}
              </span>
            </li>
          `)}
      </ul>
    `;
	}
	/** Lift outages at a station this trip takes a lift at. */
	_liftOutages(trip, attrs) {
		const stations = new Set(tripAccessSteps(trip).filter((step) => step.kind === "elevator" && step.stop_id).map((step) => step.stop_id));
		return (attrs.elevator_info ?? []).filter((outage) => (outage.stop_ids ?? []).some((id) => stations.has(id)));
	}
	/** "Aufzug nach unten" and friends, with "außer Betrieb" on a lift at a
	*  station that has an outage. Words and an icon, never colour alone. */
	_renderAccess(steps, attrs) {
		const known = (steps ?? []).filter((step) => accessKey(step));
		if (!known.length) return A;
		const broken = new Set((attrs.elevator_info ?? []).flatMap((outage) => outage.stop_ids ?? []));
		return b`${known.map((step) => {
			const out = step.kind === "elevator" && !!step.stop_id && broken.has(step.stop_id);
			return b`<span class=${out ? "access access--out" : "access"}>
        <ha-icon
          class=${!out && step.kind === "ramp" ? "access-icon--ramp" : ""}
          icon=${out ? "mdi:alert-outline" : accessIcon(step)}
          aria-hidden="true"
        ></ha-icon>
        ${this._t(accessKey(step))}${out ? b` · ${this._t("lift_out")}` : A}
      </span>`;
		})}`;
	}
	_lineStyle(line, attrs) {
		return chipPalette(line, {}, attrs.line_colors ?? {});
	}
	_renderBadge(leg, attrs) {
		const palette = this._lineStyle(leg.line ?? "", attrs);
		return b`<span
      class="line-badge"
      style=${o({
			background: palette.background,
			color: palette.color ?? "#fff"
		})}
      >${leg.line}</span
    >`;
	}
	_platformText(leg) {
		const platform = leg.origin.platform;
		if (!platform) return "";
		const track = leg.type === "ptMetro" || leg.type?.startsWith("ptTrain");
		return this._t(track ? "platform_track" : "platform_stop", { p: platform });
	}
	/** `scope` keeps an alternative's strand apart from the best one's. Two
	*  connections often share their first ride and differ only at the change,
	*  and a shared ride would otherwise mean duplicate ids in one shadow root
	*  and one stops list opening both. The best connection passes none, so its
	*  open lists keep their keys across refreshes as before. */
	_renderStrand(trip, attrs, scope = "") {
		const legs = transitLegs(trip);
		const last = legs[legs.length - 1];
		return b`
      <ol class="strand">
        ${legs.map((leg, i) => {
			const colour = this._lineStyle(leg.line ?? "", attrs).background;
			const transfer = trip.transfers[i];
			return b`
            ${this._renderLeg(leg, colour, i === 0, attrs, !!transfer && i < legs.length - 1, legs[i + 1], i === 0 ? walkAccess(trip, "start") : void 0, scope)}
            ${transfer && i < legs.length - 1 ? this._renderTransfer(transfer, attrs, catchableDeparture(leg, transfer, legs[i + 1]), leg.destination, legs[i + 1].origin) : A}
          `;
		})}
        ${last ? b`
              <li class="stop stop--end">
                <span class="node node--end" aria-hidden="true"></span>
                ${this._renderStopTime(last.destination)}
                <span class="stop-name">${last.destination.name}</span>
                ${this._renderMapLink(last.destination)}
                ${this._renderAccess(walkAccess(trip, "end"), attrs)}
              </li>
            ` : A}
      </ol>
    `;
	}
	_renderLeg(leg, colour, first, attrs, beforeTransfer, nextLeg, accessBefore, scope = "") {
		const icon = legTypeIcon(leg.type, leg.line);
		const stops = leg.stop_count === 1 ? this._t("stops_one") : this._t("stops_many", { n: leg.stop_count });
		const between = leg.stops ?? [];
		const late = !!delayedClock(leg.origin);
		const key = scope ? `${scope}#${rideKey(leg)}` : rideKey(leg);
		const open = between.length > 0 && this._openRides.has(key);
		const listId = safeDomId(`route-stops-${key}`);
		const platform = this._platformText(leg);
		return b`
      <li
        class=${beforeTransfer ? "leg leg--before-transfer" : "leg"}
        style=${o({ "--leg-colour": colour })}
      >
        <div class="stop">
          <span class=${first ? "node node--start" : "node"} aria-hidden="true"></span>
          ${this._renderStopTime(leg.origin)}
          ${this._renderLiveMark(leg)}
          <span class="stop-name">${leg.origin.name}</span>
          ${this._renderMapLink(leg.origin)}
          ${first ? this._renderAccess(accessBefore, attrs) : A}
        </div>
        <div class="ride">
          ${this._renderBadge(leg, attrs)}
          ${icon ? b`<ha-icon class="type-icon" icon=${icon} aria-hidden="true"></ha-icon>` : A}
          ${leg.low_floor && attrs.step_free ? b`<ha-icon
                  class="type-icon"
                  icon="mdi:wheelchair-accessibility"
                  aria-hidden="true"
                ></ha-icon
                ><span class="sr-only">${this._t("low_floor")}</span>` : A}
          <span class="towards"
            >${leg.towards ? this._t("towards", { towards: leg.towards }) : ""}${platform ? b` <span class="platform">${platform}</span>` : A}</span
          >
        </div>
        <div class="ride-detail">
          ${between.length ? b`<button
                type="button"
                class="stops-toggle"
                aria-expanded=${open ? "true" : "false"}
                aria-controls=${listId}
                @click=${() => this._toggleRide(key)}
              >
                ${stops}
                <ha-icon
                  icon=${open ? "mdi:chevron-up" : "mdi:chevron-down"}
                  aria-hidden="true"
                ></ha-icon>
              </button>` : b`<span class="ride-meta">${stops}</span>`}
          ${this._renderFrequency(leg)}
        </div>
        ${between.length ? b`<ol
              class="leg-stops"
              id=${listId}
              aria-label=${this._t("stops_between", { line: leg.line ?? "" })}
              ?hidden=${!open}
            >
              ${between.map((stop) => b`<li class="leg-stop">
                  <span class="leg-stop-dot" aria-hidden="true"></span>
                  <time class=${late ? "time-late" : ""} datetime=${stop.time ?? ""}
                    >${late ? roundedClock(stop.time) : clockOf(stop.time)}</time
                  >
                  <span class="leg-stop-name">${stop.name}</span>
                </li>`)}
            </ol>` : A}
        ${nextLeg ? b`<div class="stop stop--arrive">
              <span class="node" aria-hidden="true"></span>
              <span class="sr-only">${this._t("arrival")}</span>
              ${this._renderStopTime(leg.destination)}
              <span class="stop-name">${leg.destination.name}</span>
              ${sameStop(leg.destination, nextLeg.origin) ? A : this._renderMapLink(leg.destination)}
            </div>` : A}
      </li>
    `;
	}
	/** A pin after a stop name that opens the stop on the city map, or searches
	*  for it by name where the catalogue gave no coordinates. The label says
	*  which of the two it does. Boarding stops and the destination get one, and
	*  an arrival only where the next ride leaves from a different stop (the
	*  boarding pin below it already covers the same one). The stops in between
	*  sit too close together for a 24px target each. */
	_renderMapLink(stop) {
		if (this._config?.show_map_pins === false) return A;
		const url = stopMapUrl(stop.name, stop.latitude, stop.longitude);
		if (!url) return A;
		const label = this._t(typeof stop.latitude === "number" && typeof stop.longitude === "number" ? "open_in_city_map" : "find_on_map");
		return b`<a
      class="map-link"
      href=${url}
      target="_blank"
      rel="noopener noreferrer"
      title=${label}
      aria-label="${label}: ${stop.name}"
      ><ha-icon icon="mdi:map-marker" aria-hidden="true"></ha-icon
    ></a>`;
	}
	_toggleRide(key) {
		const next = new Set(this._openRides);
		if (!next.delete(key)) next.add(key);
		this._openRides = next;
	}
	/** A stop's time. Running late, it reads the way DB Navigator and Google
	*  Maps show it: the planned time struck through, then the expected time
	*  in red. The strike and the second time carry the delay, not the colour
	*  alone, and screen readers hear "geplant 09:22, 3 min später". */
	_renderStopTime(stop) {
		const shown = stop.estimated ?? stop.planned;
		const delayed = delayedClock(stop);
		if (!delayed) return b`<time datetime=${shown ?? ""}>${clockOf(shown)}</time>`;
		return b`<span class="time-change">
      <s class="time-planned" aria-hidden="true">${delayed.planned}</s>
      <time class="time-late" datetime=${stop.estimated ?? ""}>${delayed.expected}</time>
      <span class="sr-only"
        >${this._t("planned_late", {
			time: delayed.planned,
			n: stop.delay_minutes ?? 0
		})}</span
      >
    </span>`;
	}
	/** A small live icon after the time of every ride with a live time, late or
	*  not. Leaving it off a late ride made that ride look like the one on the
	*  timetable when the ride before it carried the icon. */
	_renderLiveMark(leg) {
		if (!leg.realtime) return A;
		return b`<ha-icon class="live-mark" icon="mdi:access-point" aria-hidden="true"></ha-icon
      ><span class="sr-only">${this._t("live")}</span>`;
	}
	/** How often to expect this line: "alle 3 min" where it runs often enough
	*  that exact times don't matter, otherwise the next two departures. */
	_renderFrequency(leg) {
		const frequency = rideFrequency(leg);
		if (!frequency) return A;
		return b`<span class="ride-frequency">
      ${"every" in frequency ? this._t("every_minutes", { n: frequency.every }) : this._t("then_at", { times: frequency.then.join(", ") })}
    </span>`;
	}
	_riskText(transfer) {
		switch (transfer.risk) {
			case "at_risk": return this._t("risk_at_risk", { n: Math.abs(transfer.slack_minutes) });
			case "tight": return this._t("risk_tight", { n: transfer.slack_minutes });
			default: return this._t("risk_ok", { n: transfer.slack_minutes });
		}
	}
	_renderRisk(transfer) {
		return b`
      <span class="risk" data-risk=${transfer.risk}>
        <ha-icon icon=${RISK_ICON[transfer.risk]} aria-hidden="true"></ha-icon>
        <span>${this._riskText(transfer)}</span>
      </span>
    `;
	}
	_renderTransfer(transfer, attrs, catchable = null, arrival, boarding) {
		return b`
      <li class="transfer" data-risk=${transfer.risk}>
        <span class="node node--transfer" aria-hidden="true"></span>
        <span class="transfer-at">${this._t("transfer")}</span>
        ${transfer.walk_minutes > 0 ? b`<span class="walk">
              <ha-icon icon="mdi:walk" aria-hidden="true"></ha-icon>
              ${this._t("walk", { n: transfer.walk_minutes })}
            </span>` : A}
        ${this._renderAccess(transfer.access, attrs)}
        ${this._renderRisk(transfer)}
        ${catchable ? b`<span class="catchable">
              ${this._t("next_catchable", { time: roundedClock(catchable) })}
            </span>` : A}
        ${this._renderReplan(transfer, arrival, boarding)}
      </li>
    `;
	}
	/** "Search from here" on a change: the buffer badge above it says the
	*  connection is tight, and until now the card said nothing about what to
	*  do about it. This asks the planner the obvious follow-up — what else
	*  leaves this station for where I'm going — without making anyone retype
	*  a journey they already entered.
	*
	*  Ad-hoc mode only. A card bound to a route entity is showing that route's
	*  sensor, and there is no query of its own to redirect. */
	_renderReplan(transfer, arrival, boarding) {
		if (!arrival || !boarding) return A;
		const when = replanDeparture(arrival, transfer.walk_minutes, this._now);
		if (when === null || !this._canReplanFrom(boarding)) return A;
		return b`<button
      type="button"
      class="replan"
      ?disabled=${this._phase === "loading"}
      aria-label=${this._t("replan_from_here_label", { stop: boarding.name })}
      @click=${() => this._replanFromHere(boarding, when)}
    >
      <ha-icon icon="mdi:directions-fork" aria-hidden="true"></ha-icon>
      <span>${this._t("replan_from_here")}</span>
    </button>`;
	}
	/** The way back after a jump. The From picker already shows the change as
	*  the new origin, so this only has to undo it — including the time, which
	*  the jump moved to the arrival at that change. */
	_renderReplanBack() {
		const origin = this._replanFrom;
		if (!origin) return A;
		return b`<button type="button" class="replan-back" @click=${this._backToOrigin}>
      <ha-icon icon="mdi:arrow-u-left-top" aria-hidden="true"></ha-icon>
      <span>${this._t("replan_back", { stop: origin.name })}</span>
    </button>`;
	}
	_renderAlternatives(trips, attrs) {
		const listId = safeDomId(`route-alt-${this._config?.entity ?? ""}`);
		return b`
      <div class="alternatives">
        <button
          type="button"
          class="alt-toggle"
          aria-expanded=${this._alternativesOpen ? "true" : "false"}
          aria-controls=${listId}
          @click=${() => {
			this._alternativesOpen = !this._alternativesOpen;
		}}
        >
          <ha-icon
            icon=${this._alternativesOpen ? "mdi:chevron-up" : "mdi:chevron-down"}
            aria-hidden="true"
          ></ha-icon>
          ${this._t("alternatives", { n: trips.length })}
        </button>
        <ul class="alt-list" id=${listId} ?hidden=${!this._alternativesOpen}>
          ${trips.map((trip) => this._renderAlternative(trip, attrs))}
        </ul>
      </div>
    `;
	}
	/** One more connection: a summary row that opens into the same strand the
	*  best connection shows, from data the plan already carries. No request,
	*  and it can't turn into a different connection than the one clicked. */
	_renderAlternative(trip, attrs) {
		const worst = trip.transfers.reduce((acc, t) => acc === void 0 || t.slack_minutes < acc.slack_minutes ? t : acc, void 0);
		const first = trip.legs[0];
		const delayed = first && !first.walk ? delayedClock(first.origin) : null;
		const key = tripKey(trip);
		const open = this._openAlternatives.has(key);
		const detailId = safeDomId(`route-alt-detail-${key}`);
		return b`
      <li class=${open ? "alt alt--open" : "alt"}>
        <button
          type="button"
          class="alt-summary"
          aria-expanded=${open ? "true" : "false"}
          aria-controls=${detailId}
          @click=${() => this._toggleAlternative(key)}
        >
          <span class="alt-times">
            <span aria-hidden="true"
              >${delayed ? b`<s class="time-planned">${delayed.planned}</s>
                    <span class="time-late">${delayed.expected}</span>` : clockOf(trip.departure)}
              – ${clockOf(trip.arrival)}</span
            >
            <span class="sr-only"
              >${this._tripSummary(trip)}${delayed ? `, ${this._t("planned_late", {
			time: delayed.planned,
			n: first?.origin.delay_minutes ?? 0
		})}` : ""}</span
            >
          </span>
          <span class="alt-lines">
            ${transitLegs(trip).map((leg) => this._renderBadge(leg, attrs))}
          </span>
          <span class="alt-meta">
            ${trip.duration_minutes !== null ? this._t("minutes", { n: trip.duration_minutes }) : ""}
          </span>
          ${worst ? this._renderRisk(worst) : A}
          <ha-icon
            class="alt-chevron"
            icon=${open ? "mdi:chevron-up" : "mdi:chevron-down"}
            aria-hidden="true"
          ></ha-icon>
        </button>
        <!-- Always in the DOM so aria-controls resolves; filled only when open,
             since every alternative drawing its strand up front would be most
             of the card's DOM for rows nobody opened. -->
        <div class="alt-detail" id=${detailId} ?hidden=${!open}>
          ${open ? b`${this._renderNotices(trip, attrs)}
              ${this._renderStrand(trip, attrs, `alt-${key}`)}` : A}
        </div>
      </li>
    `;
	}
	_toggleAlternative(key) {
		const next = new Set(this._openAlternatives);
		if (!next.delete(key)) next.add(key);
		this._openAlternatives = next;
	}
	static {
		this.styles = i$5`
    :host {
      color-scheme: light dark;
      display: block;
      container-type: inline-size;

      /* Portfolio tokens. Values mirror the :host block in card-styles.ts
         byte-for-byte — route-card.test.ts pins them, so a theme change
         made there cannot quietly leave this card behind. */
      --wl-rt: var(--success-color, #43a047);
      --wl-warning: var(--warning-color, #ffa000);
      --wl-error: var(--error-color, #db4437);
      /* One alarm look for everything that is actually wrong (a late
         departure, a change that no longer fits, a lift out of service):
         solid fill, white text. The theme's error red, darkened just enough
         that white text keeps about 5.3:1 on it in light and dark themes. A
         tint or a red text colour read as decoration, not as an alarm. */
      --wl-alarm: color-mix(in srgb, var(--wl-error) 88%, #000);
      --wl-on-alarm: #fff;
      /* The two calmer transfer grades take the same solid shape, so the
         three read as one set: a fresh green for enough buffer (white text
         4.7:1) and anthracite for a tight change (10:1). Fixed values, not
         theme tokens: the theme's success green needs so much darkening to
         carry white text that it turns olive, and a tint of it or of the
         warning amber looked muddy on the dark card. */
      --wl-ok: #16853f;
      --wl-tight: #3d434a;
      --wl-radius-sm: var(--ha-border-radius-sm, 4px);
      --wl-radius-md: var(--ha-border-radius-md, 8px);
      --wl-pad-x: var(--ha-space-4, 16px);
      --wl-pad-y: var(--ha-space-3, 12px);
      --wl-row-gap: var(--ha-space-3, 12px);
      --wl-metric-size: 2.25rem;

      --strand-width: 4px;
      --node-size: 12px;
      --node-top: 5px;
      /* Where a stop's node is centred, measured from the top of its row.
         Every rail segment starts or ends here, so nodes sit exactly on the
         joins instead of the segments guessing at a shared offset. */
      --node-centre: calc(var(--node-top) + var(--node-size) / 2);
      --stop-row: 22px;
      --strand-x: 6px;
      --leg-colour: var(--primary-color);
    }

    ha-card {
      overflow: hidden;
      font-family: "WL Sans", var(--ha-font-family-body, system-ui), sans-serif;
    }
    .wrap {
      display: flex;
      flex-direction: column;
      gap: var(--wl-row-gap);
      padding: var(--wl-pad-y) var(--wl-pad-x);
    }
    p {
      margin: 0;
    }
    time {
      font-variant-numeric: tabular-nums;
    }
    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      overflow: hidden;
      clip-path: inset(50%);
      white-space: nowrap;
    }

    /* Heading left, "Zuletzt aktualisiert" right on the same line. On a
       narrow card the time wraps under the heading and stays right-aligned. */
    .header {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 2px 12px;
    }
    .heading {
      display: flex;
      align-items: center;
      gap: 8px;
      min-width: 0;
      margin: 0;
      font-size: 1rem;
      font-weight: 600;
      line-height: 1.3;
      color: var(--primary-text-color);
    }
    .heading ha-icon {
      --mdc-icon-size: 20px;
      color: var(--secondary-text-color);
      flex: none;
    }

    /* Hero: the countdown is the answer to "when do I go?" */
    .hero {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-end;
      justify-content: space-between;
      gap: 4px 16px;
    }
    .hero-count {
      display: flex;
      flex-direction: column;
    }
    .hero-label {
      font-size: 0.85rem;
      color: var(--secondary-text-color);
    }
    .hero-metric {
      font-size: var(--wl-metric-size);
      font-weight: 700;
      line-height: 1;
      font-variant-numeric: tabular-nums;
      color: var(--primary-text-color);
    }
    .hero-unit {
      font-size: 1rem;
      font-weight: 600;
      margin-inline-start: 4px;
    }
    .hero-meta {
      text-align: end;
    }
    .hero-times {
      font-size: 1.15rem;
      font-weight: 600;
      color: var(--primary-text-color);
    }
    .hero-sub {
      font-size: 0.85rem;
      color: var(--secondary-text-color);
    }

    /* The strand. Each ride leg paints its own segment in the line colour
       via --leg-colour; transfers and the end stop sit on nodes. The rail is
       decorative: every fact it shows is also written out as text. */
    .strand {
      list-style: none;
      margin: 0;
      padding: 0;
    }
    .leg,
    .transfer,
    .stop--end {
      position: relative;
      padding-inline-start: calc(var(--strand-x) * 2 + var(--node-size));
    }
    /* A ride runs from its boarding node down into the next stop's node. */
    .leg::before {
      content: "";
      position: absolute;
      inset-inline-start: calc(var(--strand-x) + var(--node-size) / 2 - var(--strand-width) / 2);
      top: var(--node-centre);
      bottom: calc(-1 * var(--node-centre));
      width: var(--strand-width);
      border-radius: 2px;
      background: var(--leg-colour);
    }
    /* Before a change the ride ends in its arrival node, and the dotted walk
       picks up from that node. Both assume the arrival row is one line high,
       as its time and stop name are on any card wider than a phone. */
    .leg--before-transfer::before {
      bottom: calc(var(--stop-row) - var(--node-centre));
    }
    /* The walk spans the whole transfer row and reaches down into the next
       ride's boarding node, which covers the end of it. */
    .transfer::before {
      content: "";
      position: absolute;
      inset-inline-start: calc(var(--strand-x) + var(--node-size) / 2 - 1px);
      top: calc(var(--node-centre) - var(--stop-row));
      bottom: calc(-1 * var(--node-centre));
      border-inline-start: 2px dotted var(--secondary-text-color);
    }
    .node {
      position: absolute;
      inset-inline-start: var(--strand-x);
      top: var(--node-top);
      width: var(--node-size);
      height: var(--node-size);
      box-sizing: border-box;
      border-radius: 50%;
      background: var(--card-background-color, var(--ha-card-background, #fff));
      border: 3px solid var(--leg-colour);
      z-index: 1;
    }
    .node--start {
      background: var(--leg-colour);
    }
    .node--transfer {
      top: 50%;
      transform: translateY(-50%);
      border-color: var(--secondary-text-color);
    }
    .node--end {
      border-color: var(--primary-text-color);
      background: var(--primary-text-color);
    }

    .stop {
      display: flex;
      flex-wrap: wrap;
      align-items: baseline;
      gap: 2px 8px;
      min-height: var(--stop-row);
    }
    .stop time {
      font-weight: 700;
      color: var(--primary-text-color);
    }
    /* Where a ride is left: quieter than a boarding stop, which is what you
       act on. Its node sits on the rail, backed out of the row's indent. */
    .stop--arrive {
      position: relative;
    }
    .stop--arrive .node {
      inset-inline-start: calc(var(--strand-x) - (var(--strand-x) * 2 + var(--node-size)));
    }
    .stop--arrive time {
      font-weight: 600;
    }
    .stop--arrive .stop-name {
      font-weight: 400;
    }
    .stop-name {
      font-weight: 600;
      color: var(--primary-text-color);
    }
    /* The map pin after a stop name: an icon in the quiet text colour, no box.
       The 16px icon keeps the row at its height; the ::before reaches the
       24px target (WCAG 2.5.8) around it without taking up layout space. */
    /* On the text baseline, not centred: the row is taller than its line of
       text, so centring sat the pin below the name. The pin's tip on the
       baseline reads as marking the word. */
    .map-link {
      position: relative;
      display: inline-flex;
      align-self: baseline;
      margin-inline-start: -4px;
      border-radius: var(--wl-radius-sm);
      color: var(--secondary-text-color);
      --mdc-icon-size: 16px;
    }
    .map-link::before {
      content: "";
      position: absolute;
      inset: -4px;
    }
    .map-link:hover {
      color: var(--primary-text-color);
    }
    .map-link ha-icon {
      display: block;
    }
    /* Inside the direction text, so the two share one baseline. A real space
       separates them for screen readers; the margin tops it up to the gap. */
    .towards .platform {
      margin-inline-start: 4px;
    }
    .platform {
      font-size: 0.8rem;
      color: var(--secondary-text-color);
    }
    /* A ride reads in two lines: what you board (badge, direction), then
       the quieter detail (stop list, how often it runs). */
    .ride {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 4px 8px;
      padding-block: 6px 2px;
      font-size: 0.9rem;
      color: var(--secondary-text-color);
    }
    .line-badge {
      display: inline-block;
      min-width: 2.4em;
      padding: 2px 8px;
      border-radius: 6px;
      text-align: center;
      font-weight: 700;
      font-size: 0.85rem;
      color: #fff;
      forced-color-adjust: none;
    }
    .type-icon {
      --mdc-icon-size: 18px;
    }
    .towards {
      color: var(--primary-text-color);
    }
    .ride-detail {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 2px 12px;
      padding-block: 0 12px;
      font-size: 0.85rem;
      color: var(--secondary-text-color);
    }
    .ride-frequency {
      margin-inline-start: auto;
    }
    /* A delay is a plain number beside the time it moves. */
    .time-change {
      display: inline-flex;
      align-items: baseline;
      gap: 6px;
    }
    .time-planned {
      font-weight: 400;
      color: var(--secondary-text-color);
      text-decoration-thickness: 1.5px;
      font-variant-numeric: tabular-nums;
    }
    /* A late time is red type, not a chip, so the row keeps its height. The
       theme's error red with 15% of the body text mixed in: barely visible
       as a shift, but enough to lift it to 4.5:1 on a dark card (the raw
       token measures 4.0:1 there) and past 5:1 on a light one. */
    /* Two classes, so it outranks ".stop time", which sets every stop time
       to body text and would otherwise paint a late time white again. */
    .time-change .time-late,
    .alt-times .time-late,
    .leg-stop .time-late {
      color: color-mix(in srgb, var(--wl-error) 85%, var(--primary-text-color));
      font-weight: 700;
    }
    /* Centred on the TIME's optical centre, not on the row.
       align-self: center centred it against the .stop box instead, which
       min-height: var(--stop-row) makes taller than its line of text — so
       the text sat baseline-aligned near the top while the icon centred in
       the whole 22px, and the icon read low. Same trap the map pin and the
       .access row above each document.
       So: explicit width/height for a box of exactly the glyph (no
       line-height or descender space in it), bottom edge on the text
       baseline, then down by the difference between that box's centre and
       the cap-height centre of the text. 0.35em is half a cap height, which
       keeps this correct if the row's font-size ever changes. */
    .live-mark {
      --mdc-icon-size: 16px;
      display: flex;
      align-self: baseline;
      width: var(--mdc-icon-size);
      height: var(--mdc-icon-size);
      transform: translateY(calc(var(--mdc-icon-size) / 2 - 0.35em));
      color: var(--wl-rt);
    }
    /* The label's text carries the box's baseline, so on the baseline-aligned
       stop rows it lines up with the stop name. Centring every item instead
       handed the baseline to the icon's bottom edge: the label rode 3-4px
       high and pushed the whole end row, name and pin, down off its node. */
    .access {
      display: inline-flex;
      align-items: baseline;
      gap: 2px;
      font-size: 0.8rem;
      color: var(--secondary-text-color);
    }
    /* Flex box of exactly the glyph's size: an inline ha-icon sits on the
       text baseline and reserves descender space, which drops the glyph
       below the label's centre. Same fix as the modern card's buttons. */
    .access ha-icon {
      --mdc-icon-size: 16px;
      display: flex;
      align-self: center;
      width: var(--mdc-icon-size);
      height: var(--mdc-icon-size);
    }
    /* The slope glyphs draw their solid wedge in the lower half of the
       24-unit box (y 13 to 22), so centred they still read low. */
    .access ha-icon.access-icon--ramp {
      transform: translateY(-2px);
    }
    .access--out {
      padding: 2px 6px;
      border-radius: var(--wl-radius-sm);
      background: var(--wl-alarm);
      color: var(--wl-on-alarm);
      font-weight: 600;
    }
    /* Stops along a ride: the departure board's stops-ahead dots, sat on
       this ride's own rail so they read as stations the line passes. */
    .stops-toggle {
      display: inline-flex;
      align-items: center;
      gap: 2px;
      min-height: 32px;
      padding: 0 4px;
      margin-inline-start: -4px;
      border: none;
      border-radius: var(--wl-radius-sm);
      background: none;
      color: inherit;
      font: inherit;
      cursor: pointer;
    }
    .stops-toggle ha-icon {
      --mdc-icon-size: 18px;
    }
    .leg-stops {
      --stops-ahead-dot-size: 8px;
      list-style: none;
      margin: 0;
      /* Padding, not margin: a bottom margin collapses through the ride's
         <li>, which ends the ride's box early and leaves a gap before the
         dotted transfer walk (or the end node) picks the line up. */
      padding: 0 0 12px;
      display: flex;
      flex-direction: column;
      gap: 6px;
      font-size: 0.85rem;
      color: var(--secondary-text-color);
    }
    .leg-stops[hidden] {
      display: none;
    }
    .leg-stop {
      position: relative;
      display: flex;
      align-items: baseline;
      gap: 8px;
    }
    .leg-stop time {
      font-variant-numeric: tabular-nums;
    }
    .leg-stop-name {
      color: var(--primary-text-color);
    }
    /* Centred on the rail: back out of the row's indent to the strand. */
    .leg-stop-dot {
      position: absolute;
      inset-inline-start: calc(
        var(--strand-x) + var(--node-size) / 2 - var(--stops-ahead-dot-size) / 2 -
          (var(--strand-x) * 2 + var(--node-size))
      );
      top: 50%;
      width: var(--stops-ahead-dot-size);
      height: var(--stops-ahead-dot-size);
      box-sizing: border-box;
      transform: translateY(-50%);
      border-radius: 50%;
      background: var(--card-background-color, var(--ha-card-background, #fff));
      border: 2px solid var(--leg-colour);
      z-index: 1;
    }

    .transfer {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 4px 8px;
      padding-block: 8px;
      font-size: 0.85rem;
      color: var(--secondary-text-color);
    }
    .catchable {
      font-weight: 600;
      color: var(--primary-text-color);
    }
    .walk {
      display: inline-flex;
      align-items: center;
      gap: 2px;
    }
    .walk ha-icon {
      --mdc-icon-size: 16px;
    }

    /* "Search from here" belongs to the strand's disclosure family — the same
       borderless text-and-icon shape as "6 Stationen" and "Weitere
       Verbindungen", because it does the same kind of thing. It carried a
       border and a tint first, which made the one pressable item in the row
       heavier than the red badge warning the change won't hold.

       Pushed to the trailing edge, where it lines up with the ride meta
       ("alle 3 min") above and below it. Three changes then put three of
       these in one column instead of three blocks against the rail. */
    .replan {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      /* Clears WCAG 2.5.8's target size without drawing a box to do it. */
      min-height: 32px;
      margin-inline-start: auto;
      padding: 0 6px;
      border: none;
      border-radius: var(--wl-radius-sm);
      background: none;
      color: var(--primary-color);
      font: inherit;
      font-size: 0.8rem;
      font-weight: 600;
      cursor: pointer;
    }
    .replan ha-icon {
      display: block;
      --mdc-icon-size: 16px;
    }
    .replan[disabled] {
      opacity: 0.5;
      cursor: default;
    }
    @media (hover: hover) {
      .replan:hover:not([disabled]) {
        background: color-mix(in srgb, var(--primary-color) 12%, transparent);
      }
    }

    /* The way back out of a jump. Above the connection rather than beside the
       pickers: the From field already shows where we ended up, so this is a
       property of the answer on screen, not of the form. */
    .replan-back {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      min-height: 36px;
      margin-block-end: 4px;
      padding: 0 10px 0 6px;
      border: none;
      border-radius: var(--wl-radius-md);
      background: var(--secondary-background-color, rgb(127 127 127 / 0.12));
      color: var(--primary-text-color);
      font: inherit;
      font-size: 0.85rem;
      font-weight: 600;
      cursor: pointer;
    }
    .replan-back ha-icon {
      --mdc-icon-size: 18px;
      color: var(--primary-color);
    }
    .stop--end {
      display: flex;
      flex-wrap: wrap;
      align-items: baseline;
      gap: 2px 8px;
    }

    /* Transfer grade: a solid chip with white text, green for enough buffer,
       anthracite for tight, the alarm red for a change that no longer fits.
       The words carry the grade; the colour only backs them up. */
    .risk {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      padding: 4px 8px;
      border-radius: var(--wl-radius-sm);
      background: var(--wl-ok);
      color: var(--wl-on-alarm);
      font-size: 0.8rem;
      font-weight: 600;
      /* The inherited line box carries the font's tall ascender, which sat
         the words visibly below the icon's centre. */
      line-height: 1;
    }
    .risk > span {
      text-box: trim-both cap alphabetic;
    }
    .risk ha-icon {
      display: block;
    }
    .risk[data-risk="tight"] {
      background: var(--wl-tight);
      /* Anthracite sits close to a dark card's ground; a faint light edge
         keeps it a chip there and is invisible on a light card. */
      box-shadow: inset 0 0 0 1px rgb(255 255 255 / 0.14);
    }
    .risk[data-risk="at_risk"] {
      background: var(--wl-alarm);
      color: var(--wl-on-alarm);
    }
    .risk ha-icon {
      --mdc-icon-size: 16px;
    }

    .notices {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    .notice {
      display: flex;
      gap: 8px;
      align-items: flex-start;
      padding: 8px 10px;
      border-radius: var(--wl-radius-md);
      background: color-mix(in srgb, var(--wl-warning) 18%, transparent);
      color: var(--primary-text-color);
      font-size: 0.85rem;
    }
    .notice ha-icon {
      --mdc-icon-size: 18px;
      flex: none;
    }
    /* Which lift and why, under the station name. Its own line rather
       than a longer first line: the station is what's scanned for, the
       location is what's read once it has been found. */
    .notice-detail {
      display: block;
      margin-top: 2px;
      font-size: 0.8rem;
      color: var(--secondary-text-color);
    }

    .alternatives {
      border-top: 1px solid var(--divider-color, rgba(127, 127, 127, 0.3));
      padding-top: 8px;
    }
    .alt-toggle {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      min-height: 44px;
      padding: 0 8px 0 0;
      border: none;
      background: none;
      color: var(--primary-text-color);
      font: inherit;
      font-weight: 600;
      cursor: pointer;
    }
    .alt-list {
      list-style: none;
      margin: 0;
      padding: 0;
    }
    .alt-list[hidden] {
      display: none;
    }
    .alt {
      border-top: 1px solid var(--divider-color, rgba(127, 127, 127, 0.3));
    }
    /* The whole row is the button. Nothing inside it is interactive (no map
       pins in the summary), so there is no nested control to fight. The
       negative margin bleeds the hover wash 8px past the text, keeping the
       times aligned with the toggle above; the card pads at least 12px and
       ha-card clips, so the bleed and focus ring stay inside the card. */
    .alt-summary {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 6px 10px;
      width: calc(100% + 16px);
      min-height: 44px;
      margin-inline: -8px;
      padding: 8px;
      border: none;
      border-radius: var(--wl-radius-sm);
      background: none;
      color: inherit;
      font: inherit;
      text-align: start;
      cursor: pointer;
    }
    .alt-summary:hover {
      background: color-mix(in srgb, var(--primary-text-color) 6%, transparent);
    }
    /* Pushed to the end of the row, so the times stay where the eye looks. */
    .alt-chevron {
      --mdc-icon-size: 20px;
      margin-inline-start: auto;
      color: var(--secondary-text-color);
    }
    .alt-detail {
      display: flex;
      flex-direction: column;
      gap: 8px;
      padding-block: 4px 12px;
    }
    .alt-detail[hidden] {
      display: none;
    }
    .alt:first-child {
      border-top: none;
    }
    .alt-times {
      font-weight: 700;
      color: var(--primary-text-color);
    }
    .alt-lines {
      display: inline-flex;
      flex-wrap: wrap;
      gap: 4px;
    }
    .alt-meta {
      font-size: 0.85rem;
      color: var(--secondary-text-color);
    }

    .last-connection {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 6px 8px;
      font-size: 0.85rem;
      color: var(--primary-text-color);
    }
    .last-connection ha-icon {
      --mdc-icon-size: 18px;
      color: var(--secondary-text-color);
    }
    .empty {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
      padding: 18px 12px;
      text-align: center;
    }
    .empty ha-icon {
      --mdc-icon-size: 28px;
      color: var(--secondary-text-color);
    }
    .empty-title {
      font-weight: 600;
      color: var(--primary-text-color);
    }
    .empty-detail {
      font-size: 0.85rem;
      color: var(--secondary-text-color);
    }

    .attribution {
      font-size: 0.7rem;
      color: var(--secondary-text-color);
    }
    .updated {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      margin-inline-start: auto;
      font-size: 0.75rem;
      white-space: nowrap;
      color: var(--secondary-text-color);
    }
    .updated ha-icon {
      --mdc-icon-size: 14px;
    }

    /* Ad-hoc pickers: From above To, the swap button beside both. DOM order
       (From, swap, To) is the tab order, so the grid only places. */
    .pickers {
      display: grid;
      grid-template-columns: minmax(0, 1fr) auto;
      gap: 8px;
      align-items: center;
      margin: 0;
      padding: 0;
      border: none;
      min-inline-size: 0;
    }
    .pickers > .picker--from {
      grid-column: 1;
      grid-row: 1;
    }
    .pickers > .picker--to {
      grid-column: 1;
      grid-row: 2;
    }
    .pickers > .picker {
      display: flex;
      flex-direction: column;
      gap: 4px;
      min-width: 0;
    }
    .swap {
      grid-column: 2;
      grid-row: 1 / span 2;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 44px;
      height: 44px;
      padding: 0;
      border: 1px solid var(--divider-color, rgba(127, 127, 127, 0.3));
      border-radius: 50%;
      background: transparent;
      color: var(--primary-text-color);
      cursor: pointer;
    }
    .swap:disabled {
      cursor: default;
      color: var(--disabled-text-color, var(--secondary-text-color));
    }
    .combo-label {
      font-size: 0.85rem;
      color: var(--secondary-text-color);
    }
    .combo-field {
      position: relative;
      display: flex;
      align-items: center;
    }
    .combo-field input {
      min-height: 44px;
      box-sizing: border-box;
      width: 100%;
      padding: 0 44px 0 12px;
      border: 1px solid var(--divider-color, rgba(127, 127, 127, 0.5));
      border-radius: var(--wl-radius-md);
      background: var(--card-background-color, transparent);
      color: var(--primary-text-color);
      font: inherit;
    }
    .combo-field[data-open] input {
      border-color: var(--primary-color);
    }
    .combo-field input[aria-invalid="true"] {
      border-color: var(--wl-error);
    }
    .combo-toggle {
      position: absolute;
      inset-inline-end: 0;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 44px;
      height: 44px;
      padding: 0;
      border: none;
      background: none;
      color: var(--secondary-text-color);
      cursor: pointer;
    }
    /* In flow, not an overlay: ha-card clips anything that pokes out. */
    .combo-list {
      list-style: none;
      margin: 0;
      padding: 4px 0;
      max-height: 240px;
      overflow-y: auto;
      overscroll-behavior: contain;
      border: 1px solid var(--divider-color, rgba(127, 127, 127, 0.3));
      border-radius: var(--wl-radius-md);
      background: var(--card-background-color, var(--ha-card-background, #fff));
    }
    .combo-list[hidden] {
      display: none;
    }
    .combo-option {
      display: flex;
      align-items: center;
      min-height: 40px;
      padding: 4px 12px;
      color: var(--primary-text-color);
      cursor: pointer;
    }
    .combo-option[data-enter] {
      background: color-mix(in srgb, var(--primary-text-color) 8%, transparent);
      box-shadow: inset 3px 0 0 var(--primary-color);
    }
    .combo-option[data-current] {
      font-weight: 600;
    }
    .combo-option:hover {
      background: color-mix(in srgb, var(--primary-text-color) 8%, transparent);
    }
    .combo-option[aria-selected="true"] {
      background: color-mix(in srgb, var(--primary-color) 20%, transparent);
      outline: 2px solid var(--primary-color);
      outline-offset: -2px;
    }
    .combo-note {
      font-size: 0.8rem;
      color: var(--secondary-text-color);
    }
    .field-error {
      font-size: 0.8rem;
      color: var(--primary-text-color);
    }
    /* Time control: three compact chips, the field beside them when needed. */
    .when {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 8px;
      margin: 0;
      padding: 0;
      border: none;
      min-inline-size: 0;
    }
    .when-modes {
      display: inline-flex;
      flex-wrap: wrap;
      gap: 4px;
    }
    .when-mode {
      position: relative;
      display: inline-flex;
    }
    .when-mode input {
      position: absolute;
      inset: 0;
      margin: 0;
      opacity: 0;
      cursor: pointer;
    }
    .when-mode span {
      display: inline-flex;
      align-items: center;
      /* 32px keeps the chips compact beside the pickers and still clears
         the 24px target minimum (WCAG 2.5.8); the radio covers the chip. */
      min-height: 32px;
      padding: 0 12px;
      box-sizing: border-box;
      border: 1px solid var(--divider-color, rgba(127, 127, 127, 0.5));
      border-radius: 999px;
      color: var(--primary-text-color);
      font-size: 0.85rem;
      font-weight: 600;
    }
    .when-mode input:checked + span {
      border-color: var(--primary-color);
      background: color-mix(in srgb, var(--primary-color) 20%, transparent);
    }
    .when-mode input:focus-visible + span {
      outline: 2px solid var(--primary-color);
      outline-offset: 2px;
    }
    .when-field {
      display: inline-flex;
      flex: 1 1 12rem;
      min-width: 0;
    }
    .when-field input {
      width: 100%;
      min-height: 32px;
      box-sizing: border-box;
      padding: 0 12px;
      border: 1px solid var(--divider-color, rgba(127, 127, 127, 0.5));
      border-radius: var(--wl-radius-md);
      background: var(--card-background-color, transparent);
      color: var(--primary-text-color);
      font: inherit;
    }
    .picker-status {
      font-size: 0.85rem;
      color: var(--secondary-text-color);
    }
    .results {
      display: flex;
      flex-direction: column;
      gap: var(--wl-row-gap);
    }
    .paused {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 8px;
      padding: 6px 10px;
      border-radius: var(--wl-radius-md);
      background: color-mix(in srgb, var(--secondary-text-color) 12%, transparent);
      color: var(--primary-text-color);
      font-size: 0.85rem;
    }
    .paused > span {
      flex: 1;
    }
    .paused ha-icon {
      --mdc-icon-size: 18px;
    }
    .stale-note {
      display: flex;
      align-items: center;
      gap: 6px;
      margin: 0;
      font-size: 0.8rem;
      color: var(--secondary-text-color);
    }
    .stale-note ha-icon {
      --mdc-icon-size: 16px;
    }
    .paused > button {
      min-height: 44px;
      padding: 0 14px;
      border: 1px solid var(--primary-text-color);
      border-radius: 999px;
      background: transparent;
      color: var(--primary-text-color);
      font: inherit;
      font-weight: 600;
      cursor: pointer;
    }

    .banner {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px 12px;
      border-radius: var(--wl-radius-md);
      background: color-mix(in srgb, var(--wl-warning) 16%, transparent);
      color: var(--primary-text-color);
      font-size: 0.85rem;
    }
    .banner > span {
      flex: 1;
    }
    .banner > button {
      min-height: 32px;
      padding: 0 14px;
      border: 1px solid var(--primary-text-color);
      border-radius: 999px;
      background: transparent;
      color: var(--primary-text-color);
      font: inherit;
      font-weight: 600;
      cursor: pointer;
    }

    @container (max-width: 320px) {
      .hero-meta {
        text-align: start;
      }
    }

    .alt-toggle:focus-visible,
    .alt-summary:focus-visible,
    .stops-toggle:focus-visible,
    .map-link:focus-visible,
    .combo-field input:focus-visible,
    .when-field input:focus-visible,
    button:focus-visible {
      outline: 2px solid var(--primary-color);
      outline-offset: 2px;
      border-radius: 6px;
    }

    @media (forced-colors: active) {
      .access--out {
        outline: 1px solid CanvasText;
      }
      .when-mode input:checked + span {
        forced-color-adjust: none;
        background: Highlight;
        color: HighlightText;
      }
      .line-badge,
      .risk,
      .notice {
        outline: 1px solid CanvasText;
      }
      .combo-option[aria-selected="true"] {
        forced-color-adjust: none;
        background: Highlight;
        color: HighlightText;
      }
      .combo-option[data-enter] {
        outline: 1px dashed Highlight;
        outline-offset: -2px;
      }
      .leg::before,
      .leg-stop-dot,
      .node {
        forced-color-adjust: none;
        background: CanvasText;
        border-color: CanvasText;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      *,
      *::before,
      *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
    }
  `;
	}
};
__decorate([n$1({ attribute: false })], WienerLinienAustriaRouteCard.prototype, "hass", void 0);
__decorate([r()], WienerLinienAustriaRouteCard.prototype, "_config", void 0);
__decorate([r()], WienerLinienAustriaRouteCard.prototype, "_versionMismatch", void 0);
__decorate([r()], WienerLinienAustriaRouteCard.prototype, "_now", void 0);
__decorate([r()], WienerLinienAustriaRouteCard.prototype, "_alternativesOpen", void 0);
__decorate([r()], WienerLinienAustriaRouteCard.prototype, "_openRides", void 0);
__decorate([r()], WienerLinienAustriaRouteCard.prototype, "_openAlternatives", void 0);
__decorate([r()], WienerLinienAustriaRouteCard.prototype, "_stops", void 0);
__decorate([r()], WienerLinienAustriaRouteCard.prototype, "_stopsError", void 0);
__decorate([r()], WienerLinienAustriaRouteCard.prototype, "_from", void 0);
__decorate([r()], WienerLinienAustriaRouteCard.prototype, "_to", void 0);
__decorate([r()], WienerLinienAustriaRouteCard.prototype, "_timeMode", void 0);
__decorate([r()], WienerLinienAustriaRouteCard.prototype, "_when", void 0);
__decorate([r()], WienerLinienAustriaRouteCard.prototype, "_plan", void 0);
__decorate([r()], WienerLinienAustriaRouteCard.prototype, "_replanFrom", void 0);
__decorate([r()], WienerLinienAustriaRouteCard.prototype, "_phase", void 0);
__decorate([r()], WienerLinienAustriaRouteCard.prototype, "_error", void 0);
__decorate([r()], WienerLinienAustriaRouteCard.prototype, "_announcement", void 0);
WienerLinienAustriaRouteCard = __decorate([t$1(ROUTE_CARD_TYPE)], WienerLinienAustriaRouteCard);

//#endregion
export { WienerLinienAustriaRouteCard };
//# sourceMappingURL=wiener-linien-austria-route-card.js.map