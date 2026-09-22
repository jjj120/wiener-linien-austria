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
const t$4 = globalThis;
const e$5 = t$4.ShadowRoot && (void 0 === t$4.ShadyCSS || t$4.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
const s$3 = Symbol();
const o$5 = /* @__PURE__ */ new WeakMap();
var n$5 = class {
	constructor(t, e, o) {
		if (this._$cssResult$ = !0, o !== s$3) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
		this.cssText = t, this.t = e;
	}
	get styleSheet() {
		let t = this.o;
		const s = this.t;
		if (e$5 && void 0 === t) {
			const e = void 0 !== s && 1 === s.length;
			e && (t = o$5.get(s)), void 0 === t && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), e && o$5.set(s, t));
		}
		return t;
	}
	toString() {
		return this.cssText;
	}
};
const r$5 = (t) => new n$5("string" == typeof t ? t : t + "", void 0, s$3);
const i$6 = (t, ...e) => {
	const o = 1 === t.length ? t[0] : e.reduce((e, s, o) => e + ((t) => {
		if (!0 === t._$cssResult$) return t.cssText;
		if ("number" == typeof t) return t;
		throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
	})(s) + t[o + 1], t[0]);
	return new n$5(o, t, s$3);
};
const S$1 = (s, o) => {
	if (e$5) s.adoptedStyleSheets = o.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
	else for (const e of o) {
		const o = document.createElement("style"), n = t$4.litNonce;
		void 0 !== n && o.setAttribute("nonce", n), o.textContent = e.cssText, s.appendChild(o);
	}
};
const c$3 = e$5 ? (t) => t : (t) => t instanceof CSSStyleSheet ? ((t) => {
	let e = "";
	for (const s of t.cssRules) e += s.cssText;
	return r$5(e);
})(t) : t;

//#endregion
//#region node_modules/@lit/reactive-element/reactive-element.js
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/ const { is: i$5, defineProperty: e$4, getOwnPropertyDescriptor: h$2, getOwnPropertyNames: r$4, getOwnPropertySymbols: o$4, getPrototypeOf: n$4 } = Object, a$1 = globalThis, c$2 = a$1.trustedTypes, l$3 = c$2 ? c$2.emptyScript : "", p$2 = a$1.reactiveElementPolyfillSupport, d$2 = (t, s) => t, u$2 = {
	toAttribute(t, s) {
		switch (s) {
			case Boolean:
				t = t ? l$3 : null;
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
}, f$2 = (t, s) => !i$5(t, s), b$1 = {
	attribute: !0,
	type: String,
	converter: u$2,
	reflect: !1,
	useDefault: !1,
	hasChanged: f$2
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
			void 0 !== h && e$4(this.prototype, t, h);
		}
	}
	static getPropertyDescriptor(t, s, i) {
		const { get: e, set: r } = h$2(this.prototype, t) ?? {
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
		if (this.hasOwnProperty(d$2("elementProperties"))) return;
		const t = n$4(this);
		t.finalize(), void 0 !== t.l && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
	}
	static finalize() {
		if (this.hasOwnProperty(d$2("finalized"))) return;
		if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(d$2("properties"))) {
			const t = this.properties, s = [...r$4(t), ...o$4(t)];
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
			for (const s of e) i.unshift(c$3(s));
		} else void 0 !== s && i.push(c$3(s));
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
			const h = (void 0 !== i.converter?.toAttribute ? i.converter : u$2).toAttribute(s, i.type);
			this._$Em = t, null == h ? this.removeAttribute(e) : this.setAttribute(e, h), this._$Em = null;
		}
	}
	_$AK(t, s) {
		const i = this.constructor, e = i._$Eh.get(t);
		if (void 0 !== e && this._$Em !== e) {
			const t = i.getPropertyOptions(e), h = "function" == typeof t.converter ? { fromAttribute: t.converter } : void 0 !== t.converter?.fromAttribute ? t.converter : u$2;
			this._$Em = e;
			const r = h.fromAttribute(s, t.type);
			this[e] = r ?? this._$Ej?.get(e) ?? r, this._$Em = null;
		}
	}
	requestUpdate(t, s, i, e = !1, h) {
		if (void 0 !== t) {
			const r = this.constructor;
			if (!1 === e && (h = this[t]), i ??= r.getPropertyOptions(t), !((i.hasChanged ?? f$2)(h, s) || i.useDefault && i.reflect && h === this._$Ej?.get(t) && !this.hasAttribute(r._$Eu(t, i)))) return;
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
y$1.elementStyles = [], y$1.shadowRootOptions = { mode: "open" }, y$1[d$2("elementProperties")] = /* @__PURE__ */ new Map(), y$1[d$2("finalized")] = /* @__PURE__ */ new Map(), p$2?.({ ReactiveElement: y$1 }), (a$1.reactiveElementVersions ??= []).push("2.1.2");

//#endregion
//#region node_modules/lit-html/lit-html.js
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const t$3 = globalThis;
const i$4 = (t) => t;
const s$2 = t$3.trustedTypes;
const e$3 = s$2 ? s$2.createPolicy("lit-html", { createHTML: (t) => t }) : void 0;
const h$1 = "$lit$";
const o$3 = `lit$${Math.random().toFixed(9).slice(2)}$`;
const n$3 = "?" + o$3;
const r$3 = `<${n$3}>`;
const l$2 = document;
const c$1 = () => l$2.createComment("");
const a = (t) => null === t || "object" != typeof t && "function" != typeof t;
const u$1 = Array.isArray;
const d$1 = (t) => u$1(t) || "function" == typeof t?.[Symbol.iterator];
const f$1 = "[ 	\n\f\r]";
const v$1 = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
const _ = /-->/g;
const m$1 = />/g;
const p$1 = RegExp(`>|${f$1}(?:([^\\s"'>=/]+)(${f$1}*=${f$1}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g");
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
const P = l$2.createTreeWalker(l$2, 129);
function V(t, i) {
	if (!u$1(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
	return void 0 !== e$3 ? e$3.createHTML(i) : i;
}
const N = (t, i) => {
	const s = t.length - 1, e = [];
	let n, l = 2 === i ? "<svg>" : 3 === i ? "<math>" : "", c = v$1;
	for (let i = 0; i < s; i++) {
		const s = t[i];
		let a, u, d = -1, f = 0;
		for (; f < s.length && (c.lastIndex = f, u = c.exec(s), null !== u);) f = c.lastIndex, c === v$1 ? "!--" === u[1] ? c = _ : void 0 !== u[1] ? c = m$1 : void 0 !== u[2] ? (y.test(u[2]) && (n = RegExp("</" + u[2], "g")), c = p$1) : void 0 !== u[3] && (c = p$1) : c === p$1 ? ">" === u[0] ? (c = n ?? v$1, d = -1) : void 0 === u[1] ? d = -2 : (d = c.lastIndex - u[2].length, a = u[1], c = void 0 === u[3] ? p$1 : "\"" === u[3] ? $ : g) : c === $ || c === g ? c = p$1 : c === _ || c === m$1 ? c = v$1 : (c = p$1, n = void 0);
		const x = c === p$1 && t[i + 1].startsWith("/>") ? " " : "";
		l += c === v$1 ? s + r$3 : d >= 0 ? (e.push(a), s.slice(0, d) + h$1 + s.slice(d) + o$3 + x) : s + o$3 + (-2 === d ? i : x);
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
				if (r.hasAttributes()) for (const t of r.getAttributeNames()) if (t.endsWith(h$1)) {
					const i = v[a++], s = r.getAttribute(t).split(o$3), e = /([.?@])?(.*)/.exec(i);
					d.push({
						type: 1,
						index: l,
						name: e[2],
						strings: s,
						ctor: "." === e[1] ? I : "?" === e[1] ? L : "@" === e[1] ? z : H$1
					}), r.removeAttribute(t);
				} else t.startsWith(o$3) && (d.push({
					type: 6,
					index: l
				}), r.removeAttribute(t));
				if (y.test(r.tagName)) {
					const t = r.textContent.split(o$3), i = t.length - 1;
					if (i > 0) {
						r.textContent = s$2 ? s$2.emptyScript : "";
						for (let s = 0; s < i; s++) r.append(t[s], c$1()), P.nextNode(), d.push({
							type: 2,
							index: ++l
						});
						r.append(t[i], c$1());
					}
				}
			} else if (8 === r.nodeType) if (r.data === n$3) d.push({
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
		const s = l$2.createElement("template");
		return s.innerHTML = t, s;
	}
};
function M$1(t, i, s = t, e) {
	if (i === E) return i;
	let h = void 0 !== e ? s._$Co?.[e] : s._$Cl;
	const o = a(i) ? void 0 : i._$litDirective$;
	return h?.constructor !== o && (h?._$AO?.(!1), void 0 === o ? h = void 0 : (h = new o(t), h._$AT(t, s, e)), void 0 !== e ? (s._$Co ??= [])[e] = h : s._$Cl = h), void 0 !== h && (i = M$1(t, h._$AS(t, i.values), h, e)), i;
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
		const { el: { content: i }, parts: s } = this._$AD, e = (t?.creationScope ?? l$2).importNode(i, !0);
		P.currentNode = e;
		let h = P.nextNode(), o = 0, n = 0, r = s[0];
		for (; void 0 !== r;) {
			if (o === r.index) {
				let i;
				2 === r.type ? i = new k(h, h.nextSibling, this, t) : 1 === r.type ? i = new r.ctor(h, r.name, r.strings, this, t) : 6 === r.type && (i = new Z(h, this, t)), this._$AV.push(i), r = s[++n];
			}
			o !== r?.index && (h = P.nextNode(), o++);
		}
		return P.currentNode = l$2, e;
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
		t = M$1(this, t, i), a(t) ? t === A || null == t || "" === t ? (this._$AH !== A && this._$AR(), this._$AH = A) : t !== this._$AH && t !== E && this._(t) : void 0 !== t._$litType$ ? this.$(t) : void 0 !== t.nodeType ? this.T(t) : d$1(t) ? this.k(t) : this._(t);
	}
	O(t) {
		return this._$AA.parentNode.insertBefore(t, this._$AB);
	}
	T(t) {
		this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
	}
	_(t) {
		this._$AH !== A && a(this._$AH) ? this._$AA.nextSibling.data = t : this.T(l$2.createTextNode(t)), this._$AH = t;
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
		u$1(this._$AH) || (this._$AH = [], this._$AR());
		const i = this._$AH;
		let s, e = 0;
		for (const h of t) e === i.length ? i.push(s = new k(this.O(c$1()), this.O(c$1()), this, this.options)) : s = i[e], s._$AI(h), e++;
		e < i.length && (this._$AR(s && s._$AB.nextSibling, e), i.length = e);
	}
	_$AR(t = this._$AA.nextSibling, s) {
		for (this._$AP?.(!1, !0, s); t !== this._$AB;) {
			const s = i$4(t).nextSibling;
			i$4(t).remove(), t = s;
		}
	}
	setConnected(t) {
		void 0 === this._$AM && (this._$Cv = t, this._$AP?.(t));
	}
};
var H$1 = class {
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
		if (void 0 === h) t = M$1(this, t, i, 0), o = !a(t) || t !== this._$AH && t !== E, o && (this._$AH = t);
		else {
			const e = t;
			let n, r;
			for (t = h[0], n = 0; n < h.length - 1; n++) r = M$1(this, e[s + n], i, n), r === E && (r = this._$AH[n]), o ||= !a(r) || r !== this._$AH[n], r === A ? t = A : t !== A && (t += (r ?? "") + h[n + 1]), this._$AH[n] = r;
		}
		o && !e && this.j(t);
	}
	j(t) {
		t === A ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
	}
};
var I = class extends H$1 {
	constructor() {
		super(...arguments), this.type = 3;
	}
	j(t) {
		this.element[this.name] = t === A ? void 0 : t;
	}
};
var L = class extends H$1 {
	constructor() {
		super(...arguments), this.type = 4;
	}
	j(t) {
		this.element.toggleAttribute(this.name, !!t && t !== A);
	}
};
var z = class extends H$1 {
	constructor(t, i, s, e, h) {
		super(t, i, s, e, h), this.type = 5;
	}
	_$AI(t, i = this) {
		if ((t = M$1(this, t, i, 0) ?? A) === E) return;
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
		M$1(this, t);
	}
};
const j$1 = {
	M: h$1,
	P: o$3,
	A: n$3,
	C: 1,
	L: N,
	R,
	D: d$1,
	V: M$1,
	I: k,
	H: H$1,
	N: L,
	U: z,
	B: I,
	F: Z
};
const B = t$3.litHtmlPolyfillSupport;
B?.(S, k), (t$3.litHtmlVersions ??= []).push("3.3.3");
const D = (t, i, s) => {
	const e = s?.renderBefore ?? i;
	let h = e._$litPart$;
	if (void 0 === h) {
		const t = s?.renderBefore ?? null;
		e._$litPart$ = h = new k(i.insertBefore(c$1(), t), t, void 0, s ?? {});
	}
	return h._$AI(t), h;
};

//#endregion
//#region node_modules/lit-element/lit-element.js
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/ const s$1 = globalThis;
var i$3 = class extends y$1 {
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
i$3._$litElement$ = !0, i$3["finalized"] = !0, s$1.litElementHydrateSupport?.({ LitElement: i$3 });
const o$2 = s$1.litElementPolyfillSupport;
o$2?.({ LitElement: i$3 });
(s$1.litElementVersions ??= []).push("4.2.2");

//#endregion
//#region node_modules/@lit/reactive-element/decorators/custom-element.js
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const t$2 = (t) => (e, o) => {
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
	converter: u$2,
	reflect: !1,
	hasChanged: f$2
};
const r$2 = (t = o$1, e, r) => {
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
function n$2(t) {
	return (e, o) => "object" == typeof o ? r$2(t, e, o) : ((t, e, o) => {
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
*/ function r$1(r) {
	return n$2({
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
const t$1 = {
	ATTRIBUTE: 1,
	CHILD: 2,
	PROPERTY: 3,
	BOOLEAN_ATTRIBUTE: 4,
	EVENT: 5,
	ELEMENT: 6
};
const e$2 = (t) => (...e) => ({
	_$litDirective$: t,
	values: e
});
var i$2 = class {
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
//#region node_modules/lit-html/directives/class-map.js
/**
* @license
* Copyright 2018 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/ const e$1 = e$2(class extends i$2 {
	constructor(t) {
		if (super(t), t.type !== t$1.ATTRIBUTE || "class" !== t.name || t.strings?.length > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
	}
	render(t) {
		return " " + Object.keys(t).filter((s) => t[s]).join(" ") + " ";
	}
	update(s, [i]) {
		if (void 0 === this.st) {
			this.st = /* @__PURE__ */ new Set(), void 0 !== s.strings && (this.nt = new Set(s.strings.join(" ").split(/\s/).filter((t) => "" !== t)));
			for (const t in i) i[t] && !this.nt?.has(t) && this.st.add(t);
			return this.render(i);
		}
		const r = s.element.classList;
		for (const t of this.st) t in i || (r.remove(t), this.st.delete(t));
		for (const t in i) {
			const s = !!i[t];
			s === this.st.has(t) || this.nt?.has(t) || (s ? (r.add(t), this.st.add(t)) : (r.remove(t), this.st.delete(t)));
		}
		return E;
	}
});

//#endregion
//#region node_modules/lit-html/directives/style-map.js
/**
* @license
* Copyright 2018 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/ const n$1 = "important";
const i$1 = " !" + n$1;
const o = e$2(class extends i$2 {
	constructor(t) {
		if (super(t), t.type !== t$1.ATTRIBUTE || "style" !== t.name || t.strings?.length > 2) throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
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
				const r = "string" == typeof e && e.endsWith(i$1);
				t.includes("-") || r ? s.setProperty(t, r ? e.slice(0, -11) : e, r ? n$1 : "") : s[t] = e;
			}
		}
		return E;
	}
});

//#endregion
//#region node_modules/qr-creator/dist/qr-creator.es6.min.js
let G = null;
var H = class {};
H.render = function(w, B) {
	G(w, B);
};
self.QrCreator = H;
(function(w) {
	function B(t, c, a, e) {
		var b = {}, h = w(a, c);
		h.u(t);
		h.J();
		e = e || 0;
		var r = h.h(), d = h.h() + 2 * e;
		b.text = t;
		b.level = c;
		b.version = a;
		b.O = d;
		b.a = function(b, a) {
			b -= e;
			a -= e;
			return 0 > b || b >= r || 0 > a || a >= r ? !1 : h.a(b, a);
		};
		return b;
	}
	function C(t, c, a, e, b, h, r, d, g, x) {
		function u(b, a, f, c, d, r, g) {
			b ? (t.lineTo(a + r, f + g), t.arcTo(a, f, c, d, h)) : t.lineTo(a, f);
		}
		r ? t.moveTo(c + h, a) : t.moveTo(c, a);
		u(d, e, a, e, b, -h, 0);
		u(g, e, b, c, b, 0, -h);
		u(x, c, b, c, a, h, 0);
		u(r, c, a, e, a, 0, h);
	}
	function z(t, c, a, e, b, h, r, d, g, x) {
		function u(b, a, c, d) {
			t.moveTo(b + c, a);
			t.lineTo(b, a);
			t.lineTo(b, a + d);
			t.arcTo(b, a, b + c, a, h);
		}
		r && u(c, a, h, h);
		d && u(e, a, -h, h);
		g && u(e, b, -h, -h);
		x && u(c, b, h, -h);
	}
	function A(t, c) {
		var a = c.fill;
		if ("string" === typeof a) t.fillStyle = a;
		else {
			var e = a.type, b = a.colorStops;
			a = a.position.map((b) => Math.round(b * c.size));
			if ("linear-gradient" === e) var h = t.createLinearGradient.apply(t, a);
			else if ("radial-gradient" === e) h = t.createRadialGradient.apply(t, a);
			else throw Error("Unsupported fill");
			b.forEach(([b, a]) => {
				h.addColorStop(b, a);
			});
			t.fillStyle = h;
		}
	}
	function y(t, c) {
		a: {
			var a = c.text, e = c.v, b = c.N, h = c.K, r = c.P;
			b = Math.max(1, b || 1);
			for (h = Math.min(40, h || 40); b <= h; b += 1) try {
				var d = B(a, e, b, r);
				break a;
			} catch (J) {}
			d = void 0;
		}
		if (!d) return null;
		a = t.getContext("2d");
		c.background && (a.fillStyle = c.background, a.fillRect(c.left, c.top, c.size, c.size));
		e = d.O;
		h = c.size / e;
		a.beginPath();
		for (r = 0; r < e; r += 1) for (b = 0; b < e; b += 1) {
			var g = a, x = c.left + b * h, u = c.top + r * h, p = r, q = b, f = d.a, k = x + h, m = u + h, D = p - 1, E = p + 1, n = q - 1, l = q + 1, y = Math.floor(Math.min(.5, Math.max(0, c.R)) * h), v = f(p, q), I = f(D, n), w = f(D, q);
			D = f(D, l);
			var F = f(p, l);
			l = f(E, l);
			q = f(E, q);
			E = f(E, n);
			p = f(p, n);
			x = Math.round(x);
			u = Math.round(u);
			k = Math.round(k);
			m = Math.round(m);
			v ? C(g, x, u, k, m, y, !w && !p, !w && !F, !q && !F, !q && !p) : z(g, x, u, k, m, y, w && p && I, w && F && D, q && F && l, q && p && E);
		}
		A(a, c);
		a.fill();
		return t;
	}
	var v = {
		minVersion: 1,
		maxVersion: 40,
		ecLevel: "L",
		left: 0,
		top: 0,
		size: 200,
		fill: "#000",
		background: null,
		text: "no text",
		radius: .5,
		quiet: 0
	};
	G = function(t, c) {
		var a = {};
		Object.assign(a, v, t);
		a.N = a.minVersion;
		a.K = a.maxVersion;
		a.v = a.ecLevel;
		a.left = a.left;
		a.top = a.top;
		a.size = a.size;
		a.fill = a.fill;
		a.background = a.background;
		a.text = a.text;
		a.R = a.radius;
		a.P = a.quiet;
		if (c instanceof HTMLCanvasElement) {
			if (c.width !== a.size || c.height !== a.size) c.width = a.size, c.height = a.size;
			c.getContext("2d").clearRect(0, 0, c.width, c.height);
			y(c, a);
		} else t = document.createElement("canvas"), t.width = a.size, t.height = a.size, a = y(t, a), c.appendChild(a);
	};
})(function() {
	function w(c) {
		var a = C.s(c);
		return {
			S: function() {
				return 4;
			},
			b: function() {
				return a.length;
			},
			write: function(c) {
				for (var b = 0; b < a.length; b += 1) c.put(a[b], 8);
			}
		};
	}
	function B() {
		var c = [], a = 0, e = {
			B: function() {
				return c;
			},
			c: function(b) {
				return 1 == (c[Math.floor(b / 8)] >>> 7 - b % 8 & 1);
			},
			put: function(b, h) {
				for (var a = 0; a < h; a += 1) e.m(1 == (b >>> h - a - 1 & 1));
			},
			f: function() {
				return a;
			},
			m: function(b) {
				var h = Math.floor(a / 8);
				c.length <= h && c.push(0);
				b && (c[h] |= 128 >>> a % 8);
				a += 1;
			}
		};
		return e;
	}
	function C(c, a) {
		function e(b, h) {
			for (var a = -1; 7 >= a; a += 1) if (!(-1 >= b + a || d <= b + a)) for (var c = -1; 7 >= c; c += 1) -1 >= h + c || d <= h + c || (r[b + a][h + c] = 0 <= a && 6 >= a && (0 == c || 6 == c) || 0 <= c && 6 >= c && (0 == a || 6 == a) || 2 <= a && 4 >= a && 2 <= c && 4 >= c ? !0 : !1);
		}
		function b(b, a) {
			for (var f = d = 4 * c + 17, k = Array(f), m = 0; m < f; m += 1) {
				k[m] = Array(f);
				for (var p = 0; p < f; p += 1) k[m][p] = null;
			}
			r = k;
			e(0, 0);
			e(d - 7, 0);
			e(0, d - 7);
			f = y.G(c);
			for (k = 0; k < f.length; k += 1) for (m = 0; m < f.length; m += 1) {
				p = f[k];
				var q = f[m];
				if (null == r[p][q]) for (var n = -2; 2 >= n; n += 1) for (var l = -2; 2 >= l; l += 1) r[p + n][q + l] = -2 == n || 2 == n || -2 == l || 2 == l || 0 == n && 0 == l;
			}
			for (f = 8; f < d - 8; f += 1) r[f][6] ?? (r[f][6] = 0 == f % 2);
			for (f = 8; f < d - 8; f += 1) r[6][f] ?? (r[6][f] = 0 == f % 2);
			f = y.w(h << 3 | a);
			for (k = 0; 15 > k; k += 1) m = !b && 1 == (f >> k & 1), r[6 > k ? k : 8 > k ? k + 1 : d - 15 + k][8] = m, r[8][8 > k ? d - k - 1 : 9 > k ? 15 - k : 14 - k] = m;
			r[d - 8][8] = !b;
			if (7 <= c) {
				f = y.A(c);
				for (k = 0; 18 > k; k += 1) m = !b && 1 == (f >> k & 1), r[Math.floor(k / 3)][k % 3 + d - 8 - 3] = m;
				for (k = 0; 18 > k; k += 1) m = !b && 1 == (f >> k & 1), r[k % 3 + d - 8 - 3][Math.floor(k / 3)] = m;
			}
			if (null == g) {
				b = t.I(c, h);
				f = B();
				for (k = 0; k < x.length; k += 1) m = x[k], f.put(4, 4), f.put(m.b(), y.f(4, c)), m.write(f);
				for (k = m = 0; k < b.length; k += 1) m += b[k].j;
				if (f.f() > 8 * m) throw Error("code length overflow. (" + f.f() + ">" + 8 * m + ")");
				for (f.f() + 4 <= 8 * m && f.put(0, 4); 0 != f.f() % 8;) f.m(!1);
				for (; !(f.f() >= 8 * m);) {
					f.put(236, 8);
					if (f.f() >= 8 * m) break;
					f.put(17, 8);
				}
				var u = 0;
				m = k = 0;
				p = Array(b.length);
				q = Array(b.length);
				for (n = 0; n < b.length; n += 1) {
					var v = b[n].j, w = b[n].o - v;
					k = Math.max(k, v);
					m = Math.max(m, w);
					p[n] = Array(v);
					for (l = 0; l < p[n].length; l += 1) p[n][l] = 255 & f.B()[l + u];
					u += v;
					l = y.C(w);
					v = z(p[n], l.b() - 1).l(l);
					q[n] = Array(l.b() - 1);
					for (l = 0; l < q[n].length; l += 1) w = l + v.b() - q[n].length, q[n][l] = 0 <= w ? v.c(w) : 0;
				}
				for (l = f = 0; l < b.length; l += 1) f += b[l].o;
				f = Array(f);
				for (l = u = 0; l < k; l += 1) for (n = 0; n < b.length; n += 1) l < p[n].length && (f[u] = p[n][l], u += 1);
				for (l = 0; l < m; l += 1) for (n = 0; n < b.length; n += 1) l < q[n].length && (f[u] = q[n][l], u += 1);
				g = f;
			}
			b = g;
			f = -1;
			k = d - 1;
			m = 7;
			p = 0;
			a = y.F(a);
			for (q = d - 1; 0 < q; q -= 2) for (6 == q && --q;;) {
				for (n = 0; 2 > n; n += 1) r[k][q - n] ?? (l = !1, p < b.length && (l = 1 == (b[p] >>> m & 1)), a(k, q - n) && (l = !l), r[k][q - n] = l, --m, -1 == m && (p += 1, m = 7));
				k += f;
				if (0 > k || d <= k) {
					k -= f;
					f = -f;
					break;
				}
			}
		}
		var h = A[a], r = null, d = 0, g = null, x = [], u = {
			u: function(b) {
				b = w(b);
				x.push(b);
				g = null;
			},
			a: function(b, a) {
				if (0 > b || d <= b || 0 > a || d <= a) throw Error(b + "," + a);
				return r[b][a];
			},
			h: function() {
				return d;
			},
			J: function() {
				for (var a = 0, h = 0, c = 0; 8 > c; c += 1) {
					b(!0, c);
					var d = y.D(u);
					if (0 == c || a > d) a = d, h = c;
				}
				b(!1, h);
			}
		};
		return u;
	}
	function z(c, a) {
		if ("undefined" == typeof c.length) throw Error(c.length + "/" + a);
		var e = function() {
			for (var b = 0; b < c.length && 0 == c[b];) b += 1;
			for (var r = Array(c.length - b + a), d = 0; d < c.length - b; d += 1) r[d] = c[d + b];
			return r;
		}(), b = {
			c: function(b) {
				return e[b];
			},
			b: function() {
				return e.length;
			},
			multiply: function(a) {
				for (var h = Array(b.b() + a.b() - 1), c = 0; c < b.b(); c += 1) for (var g = 0; g < a.b(); g += 1) h[c + g] ^= v.i(v.g(b.c(c)) + v.g(a.c(g)));
				return z(h, 0);
			},
			l: function(a) {
				if (0 > b.b() - a.b()) return b;
				for (var c = v.g(b.c(0)) - v.g(a.c(0)), h = Array(b.b()), g = 0; g < b.b(); g += 1) h[g] = b.c(g);
				for (g = 0; g < a.b(); g += 1) h[g] ^= v.i(v.g(a.c(g)) + c);
				return z(h, 0).l(a);
			}
		};
		return b;
	}
	C.s = function(c) {
		for (var a = [], e = 0; e < c.length; e++) {
			var b = c.charCodeAt(e);
			128 > b ? a.push(b) : 2048 > b ? a.push(192 | b >> 6, 128 | b & 63) : 55296 > b || 57344 <= b ? a.push(224 | b >> 12, 128 | b >> 6 & 63, 128 | b & 63) : (e++, b = 65536 + ((b & 1023) << 10 | c.charCodeAt(e) & 1023), a.push(240 | b >> 18, 128 | b >> 12 & 63, 128 | b >> 6 & 63, 128 | b & 63));
		}
		return a;
	};
	var A = {
		L: 1,
		M: 0,
		Q: 3,
		H: 2
	}, y = function() {
		function c(b) {
			for (var a = 0; 0 != b;) a += 1, b >>>= 1;
			return a;
		}
		var a = [
			[],
			[6, 18],
			[6, 22],
			[6, 26],
			[6, 30],
			[6, 34],
			[
				6,
				22,
				38
			],
			[
				6,
				24,
				42
			],
			[
				6,
				26,
				46
			],
			[
				6,
				28,
				50
			],
			[
				6,
				30,
				54
			],
			[
				6,
				32,
				58
			],
			[
				6,
				34,
				62
			],
			[
				6,
				26,
				46,
				66
			],
			[
				6,
				26,
				48,
				70
			],
			[
				6,
				26,
				50,
				74
			],
			[
				6,
				30,
				54,
				78
			],
			[
				6,
				30,
				56,
				82
			],
			[
				6,
				30,
				58,
				86
			],
			[
				6,
				34,
				62,
				90
			],
			[
				6,
				28,
				50,
				72,
				94
			],
			[
				6,
				26,
				50,
				74,
				98
			],
			[
				6,
				30,
				54,
				78,
				102
			],
			[
				6,
				28,
				54,
				80,
				106
			],
			[
				6,
				32,
				58,
				84,
				110
			],
			[
				6,
				30,
				58,
				86,
				114
			],
			[
				6,
				34,
				62,
				90,
				118
			],
			[
				6,
				26,
				50,
				74,
				98,
				122
			],
			[
				6,
				30,
				54,
				78,
				102,
				126
			],
			[
				6,
				26,
				52,
				78,
				104,
				130
			],
			[
				6,
				30,
				56,
				82,
				108,
				134
			],
			[
				6,
				34,
				60,
				86,
				112,
				138
			],
			[
				6,
				30,
				58,
				86,
				114,
				142
			],
			[
				6,
				34,
				62,
				90,
				118,
				146
			],
			[
				6,
				30,
				54,
				78,
				102,
				126,
				150
			],
			[
				6,
				24,
				50,
				76,
				102,
				128,
				154
			],
			[
				6,
				28,
				54,
				80,
				106,
				132,
				158
			],
			[
				6,
				32,
				58,
				84,
				110,
				136,
				162
			],
			[
				6,
				26,
				54,
				82,
				110,
				138,
				166
			],
			[
				6,
				30,
				58,
				86,
				114,
				142,
				170
			]
		];
		return {
			w: function(b) {
				for (var a = b << 10; 0 <= c(a) - c(1335);) a ^= 1335 << c(a) - c(1335);
				return (b << 10 | a) ^ 21522;
			},
			A: function(b) {
				for (var a = b << 12; 0 <= c(a) - c(7973);) a ^= 7973 << c(a) - c(7973);
				return b << 12 | a;
			},
			G: function(b) {
				return a[b - 1];
			},
			F: function(b) {
				switch (b) {
					case 0: return function(b, a) {
						return 0 == (b + a) % 2;
					};
					case 1: return function(b) {
						return 0 == b % 2;
					};
					case 2: return function(b, a) {
						return 0 == a % 3;
					};
					case 3: return function(b, a) {
						return 0 == (b + a) % 3;
					};
					case 4: return function(b, a) {
						return 0 == (Math.floor(b / 2) + Math.floor(a / 3)) % 2;
					};
					case 5: return function(b, a) {
						return 0 == b * a % 2 + b * a % 3;
					};
					case 6: return function(b, a) {
						return 0 == (b * a % 2 + b * a % 3) % 2;
					};
					case 7: return function(b, a) {
						return 0 == (b * a % 3 + (b + a) % 2) % 2;
					};
					default: throw Error("bad maskPattern:" + b);
				}
			},
			C: function(b) {
				for (var a = z([1], 0), c = 0; c < b; c += 1) a = a.multiply(z([1, v.i(c)], 0));
				return a;
			},
			f: function(b, a) {
				if (4 != b || 1 > a || 40 < a) throw Error("mode: " + b + "; type: " + a);
				return 10 > a ? 8 : 16;
			},
			D: function(b) {
				for (var a = b.h(), c = 0, d = 0; d < a; d += 1) for (var g = 0; g < a; g += 1) {
					for (var e = 0, t = b.a(d, g), p = -1; 1 >= p; p += 1) if (!(0 > d + p || a <= d + p)) for (var q = -1; 1 >= q; q += 1) 0 > g + q || a <= g + q || (0 != p || 0 != q) && t == b.a(d + p, g + q) && (e += 1);
					5 < e && (c += 3 + e - 5);
				}
				for (d = 0; d < a - 1; d += 1) for (g = 0; g < a - 1; g += 1) if (e = 0, b.a(d, g) && (e += 1), b.a(d + 1, g) && (e += 1), b.a(d, g + 1) && (e += 1), b.a(d + 1, g + 1) && (e += 1), 0 == e || 4 == e) c += 3;
				for (d = 0; d < a; d += 1) for (g = 0; g < a - 6; g += 1) b.a(d, g) && !b.a(d, g + 1) && b.a(d, g + 2) && b.a(d, g + 3) && b.a(d, g + 4) && !b.a(d, g + 5) && b.a(d, g + 6) && (c += 40);
				for (g = 0; g < a; g += 1) for (d = 0; d < a - 6; d += 1) b.a(d, g) && !b.a(d + 1, g) && b.a(d + 2, g) && b.a(d + 3, g) && b.a(d + 4, g) && !b.a(d + 5, g) && b.a(d + 6, g) && (c += 40);
				for (g = e = 0; g < a; g += 1) for (d = 0; d < a; d += 1) b.a(d, g) && (e += 1);
				return c += Math.abs(100 * e / a / a - 50) / 5 * 10;
			}
		};
	}(), v = function() {
		for (var c = Array(256), a = Array(256), e = 0; 8 > e; e += 1) c[e] = 1 << e;
		for (e = 8; 256 > e; e += 1) c[e] = c[e - 4] ^ c[e - 5] ^ c[e - 6] ^ c[e - 8];
		for (e = 0; 255 > e; e += 1) a[c[e]] = e;
		return {
			g: function(b) {
				if (1 > b) throw Error("glog(" + b + ")");
				return a[b];
			},
			i: function(b) {
				for (; 0 > b;) b += 255;
				for (; 256 <= b;) b -= 255;
				return c[b];
			}
		};
	}(), t = function() {
		function c(b, c) {
			switch (c) {
				case A.L: return a[4 * (b - 1)];
				case A.M: return a[4 * (b - 1) + 1];
				case A.Q: return a[4 * (b - 1) + 2];
				case A.H: return a[4 * (b - 1) + 3];
			}
		}
		var a = [
			[
				1,
				26,
				19
			],
			[
				1,
				26,
				16
			],
			[
				1,
				26,
				13
			],
			[
				1,
				26,
				9
			],
			[
				1,
				44,
				34
			],
			[
				1,
				44,
				28
			],
			[
				1,
				44,
				22
			],
			[
				1,
				44,
				16
			],
			[
				1,
				70,
				55
			],
			[
				1,
				70,
				44
			],
			[
				2,
				35,
				17
			],
			[
				2,
				35,
				13
			],
			[
				1,
				100,
				80
			],
			[
				2,
				50,
				32
			],
			[
				2,
				50,
				24
			],
			[
				4,
				25,
				9
			],
			[
				1,
				134,
				108
			],
			[
				2,
				67,
				43
			],
			[
				2,
				33,
				15,
				2,
				34,
				16
			],
			[
				2,
				33,
				11,
				2,
				34,
				12
			],
			[
				2,
				86,
				68
			],
			[
				4,
				43,
				27
			],
			[
				4,
				43,
				19
			],
			[
				4,
				43,
				15
			],
			[
				2,
				98,
				78
			],
			[
				4,
				49,
				31
			],
			[
				2,
				32,
				14,
				4,
				33,
				15
			],
			[
				4,
				39,
				13,
				1,
				40,
				14
			],
			[
				2,
				121,
				97
			],
			[
				2,
				60,
				38,
				2,
				61,
				39
			],
			[
				4,
				40,
				18,
				2,
				41,
				19
			],
			[
				4,
				40,
				14,
				2,
				41,
				15
			],
			[
				2,
				146,
				116
			],
			[
				3,
				58,
				36,
				2,
				59,
				37
			],
			[
				4,
				36,
				16,
				4,
				37,
				17
			],
			[
				4,
				36,
				12,
				4,
				37,
				13
			],
			[
				2,
				86,
				68,
				2,
				87,
				69
			],
			[
				4,
				69,
				43,
				1,
				70,
				44
			],
			[
				6,
				43,
				19,
				2,
				44,
				20
			],
			[
				6,
				43,
				15,
				2,
				44,
				16
			],
			[
				4,
				101,
				81
			],
			[
				1,
				80,
				50,
				4,
				81,
				51
			],
			[
				4,
				50,
				22,
				4,
				51,
				23
			],
			[
				3,
				36,
				12,
				8,
				37,
				13
			],
			[
				2,
				116,
				92,
				2,
				117,
				93
			],
			[
				6,
				58,
				36,
				2,
				59,
				37
			],
			[
				4,
				46,
				20,
				6,
				47,
				21
			],
			[
				7,
				42,
				14,
				4,
				43,
				15
			],
			[
				4,
				133,
				107
			],
			[
				8,
				59,
				37,
				1,
				60,
				38
			],
			[
				8,
				44,
				20,
				4,
				45,
				21
			],
			[
				12,
				33,
				11,
				4,
				34,
				12
			],
			[
				3,
				145,
				115,
				1,
				146,
				116
			],
			[
				4,
				64,
				40,
				5,
				65,
				41
			],
			[
				11,
				36,
				16,
				5,
				37,
				17
			],
			[
				11,
				36,
				12,
				5,
				37,
				13
			],
			[
				5,
				109,
				87,
				1,
				110,
				88
			],
			[
				5,
				65,
				41,
				5,
				66,
				42
			],
			[
				5,
				54,
				24,
				7,
				55,
				25
			],
			[
				11,
				36,
				12,
				7,
				37,
				13
			],
			[
				5,
				122,
				98,
				1,
				123,
				99
			],
			[
				7,
				73,
				45,
				3,
				74,
				46
			],
			[
				15,
				43,
				19,
				2,
				44,
				20
			],
			[
				3,
				45,
				15,
				13,
				46,
				16
			],
			[
				1,
				135,
				107,
				5,
				136,
				108
			],
			[
				10,
				74,
				46,
				1,
				75,
				47
			],
			[
				1,
				50,
				22,
				15,
				51,
				23
			],
			[
				2,
				42,
				14,
				17,
				43,
				15
			],
			[
				5,
				150,
				120,
				1,
				151,
				121
			],
			[
				9,
				69,
				43,
				4,
				70,
				44
			],
			[
				17,
				50,
				22,
				1,
				51,
				23
			],
			[
				2,
				42,
				14,
				19,
				43,
				15
			],
			[
				3,
				141,
				113,
				4,
				142,
				114
			],
			[
				3,
				70,
				44,
				11,
				71,
				45
			],
			[
				17,
				47,
				21,
				4,
				48,
				22
			],
			[
				9,
				39,
				13,
				16,
				40,
				14
			],
			[
				3,
				135,
				107,
				5,
				136,
				108
			],
			[
				3,
				67,
				41,
				13,
				68,
				42
			],
			[
				15,
				54,
				24,
				5,
				55,
				25
			],
			[
				15,
				43,
				15,
				10,
				44,
				16
			],
			[
				4,
				144,
				116,
				4,
				145,
				117
			],
			[
				17,
				68,
				42
			],
			[
				17,
				50,
				22,
				6,
				51,
				23
			],
			[
				19,
				46,
				16,
				6,
				47,
				17
			],
			[
				2,
				139,
				111,
				7,
				140,
				112
			],
			[
				17,
				74,
				46
			],
			[
				7,
				54,
				24,
				16,
				55,
				25
			],
			[
				34,
				37,
				13
			],
			[
				4,
				151,
				121,
				5,
				152,
				122
			],
			[
				4,
				75,
				47,
				14,
				76,
				48
			],
			[
				11,
				54,
				24,
				14,
				55,
				25
			],
			[
				16,
				45,
				15,
				14,
				46,
				16
			],
			[
				6,
				147,
				117,
				4,
				148,
				118
			],
			[
				6,
				73,
				45,
				14,
				74,
				46
			],
			[
				11,
				54,
				24,
				16,
				55,
				25
			],
			[
				30,
				46,
				16,
				2,
				47,
				17
			],
			[
				8,
				132,
				106,
				4,
				133,
				107
			],
			[
				8,
				75,
				47,
				13,
				76,
				48
			],
			[
				7,
				54,
				24,
				22,
				55,
				25
			],
			[
				22,
				45,
				15,
				13,
				46,
				16
			],
			[
				10,
				142,
				114,
				2,
				143,
				115
			],
			[
				19,
				74,
				46,
				4,
				75,
				47
			],
			[
				28,
				50,
				22,
				6,
				51,
				23
			],
			[
				33,
				46,
				16,
				4,
				47,
				17
			],
			[
				8,
				152,
				122,
				4,
				153,
				123
			],
			[
				22,
				73,
				45,
				3,
				74,
				46
			],
			[
				8,
				53,
				23,
				26,
				54,
				24
			],
			[
				12,
				45,
				15,
				28,
				46,
				16
			],
			[
				3,
				147,
				117,
				10,
				148,
				118
			],
			[
				3,
				73,
				45,
				23,
				74,
				46
			],
			[
				4,
				54,
				24,
				31,
				55,
				25
			],
			[
				11,
				45,
				15,
				31,
				46,
				16
			],
			[
				7,
				146,
				116,
				7,
				147,
				117
			],
			[
				21,
				73,
				45,
				7,
				74,
				46
			],
			[
				1,
				53,
				23,
				37,
				54,
				24
			],
			[
				19,
				45,
				15,
				26,
				46,
				16
			],
			[
				5,
				145,
				115,
				10,
				146,
				116
			],
			[
				19,
				75,
				47,
				10,
				76,
				48
			],
			[
				15,
				54,
				24,
				25,
				55,
				25
			],
			[
				23,
				45,
				15,
				25,
				46,
				16
			],
			[
				13,
				145,
				115,
				3,
				146,
				116
			],
			[
				2,
				74,
				46,
				29,
				75,
				47
			],
			[
				42,
				54,
				24,
				1,
				55,
				25
			],
			[
				23,
				45,
				15,
				28,
				46,
				16
			],
			[
				17,
				145,
				115
			],
			[
				10,
				74,
				46,
				23,
				75,
				47
			],
			[
				10,
				54,
				24,
				35,
				55,
				25
			],
			[
				19,
				45,
				15,
				35,
				46,
				16
			],
			[
				17,
				145,
				115,
				1,
				146,
				116
			],
			[
				14,
				74,
				46,
				21,
				75,
				47
			],
			[
				29,
				54,
				24,
				19,
				55,
				25
			],
			[
				11,
				45,
				15,
				46,
				46,
				16
			],
			[
				13,
				145,
				115,
				6,
				146,
				116
			],
			[
				14,
				74,
				46,
				23,
				75,
				47
			],
			[
				44,
				54,
				24,
				7,
				55,
				25
			],
			[
				59,
				46,
				16,
				1,
				47,
				17
			],
			[
				12,
				151,
				121,
				7,
				152,
				122
			],
			[
				12,
				75,
				47,
				26,
				76,
				48
			],
			[
				39,
				54,
				24,
				14,
				55,
				25
			],
			[
				22,
				45,
				15,
				41,
				46,
				16
			],
			[
				6,
				151,
				121,
				14,
				152,
				122
			],
			[
				6,
				75,
				47,
				34,
				76,
				48
			],
			[
				46,
				54,
				24,
				10,
				55,
				25
			],
			[
				2,
				45,
				15,
				64,
				46,
				16
			],
			[
				17,
				152,
				122,
				4,
				153,
				123
			],
			[
				29,
				74,
				46,
				14,
				75,
				47
			],
			[
				49,
				54,
				24,
				10,
				55,
				25
			],
			[
				24,
				45,
				15,
				46,
				46,
				16
			],
			[
				4,
				152,
				122,
				18,
				153,
				123
			],
			[
				13,
				74,
				46,
				32,
				75,
				47
			],
			[
				48,
				54,
				24,
				14,
				55,
				25
			],
			[
				42,
				45,
				15,
				32,
				46,
				16
			],
			[
				20,
				147,
				117,
				4,
				148,
				118
			],
			[
				40,
				75,
				47,
				7,
				76,
				48
			],
			[
				43,
				54,
				24,
				22,
				55,
				25
			],
			[
				10,
				45,
				15,
				67,
				46,
				16
			],
			[
				19,
				148,
				118,
				6,
				149,
				119
			],
			[
				18,
				75,
				47,
				31,
				76,
				48
			],
			[
				34,
				54,
				24,
				34,
				55,
				25
			],
			[
				20,
				45,
				15,
				61,
				46,
				16
			]
		];
		return { I: function(b, a) {
			var e = c(b, a);
			if ("undefined" == typeof e) throw Error("bad rs block @ typeNumber:" + b + "/errorCorrectLevel:" + a);
			b = e.length / 3;
			a = [];
			for (var d = 0; d < b; d += 1) for (var g = e[3 * d], h = e[3 * d + 1], t = e[3 * d + 2], p = 0; p < g; p += 1) {
				var q = t, f = {};
				f.o = h;
				f.j = q;
				a.push(f);
			}
			return a;
		} };
	}();
	return C;
}());
var qr_creator_es6_min_default = QrCreator;

//#endregion
//#region src/card-styles.ts
const cardStyles = i$6`
  :host {
    /* color-scheme enables light-dark() and steers forced-colors
       palette selection (WCAG 1.4.11). HA's active theme drives the
       resolution; the card just opts in. */
    color-scheme: light dark;
    display: block;
    container-type: inline-size;
    container-name: wlcard;

    /* Brand accent inherits HA's primary. Per-station accent override
       lands inline on .station via style="--wl-accent: …;". */
    --wl-accent: var(--primary-color);

    /* The .line-badge box, as one authoritative pair. The badge derives
       its min-width from these rather than declaring its own, so the
       token can never disagree with the element it describes — the
       departure trail aligns its stroke to the badge's right border and
       any drift between the two shows up as a misaligned connector.
       No line label is wide enough to beat the 2.4em min-width, so
       every badge is exactly --wl-badge-width across. */
    --wl-badge-pad-x: 8px;
    --wl-badge-width: calc(0.85rem * 2.4 + var(--wl-badge-pad-x) * 2);

    /* Trail geometry. All of it lives on :host rather than on .dep-list,
       because BOTH trails read it: the departure list and the hero. That
       is not cosmetic tidying — a token declared on .dep-list is simply
       absent inside .hero, so any calc() referencing it there is invalid
       at computed-value time and the whole declaration is dropped. That
       silently cost the hero its connector once already: the trail fell
       back to flush-left while the corner-squaring rule, which contains
       no var(), still applied to the opposite corner.

       --stops-ahead-name-gap is the dot-to-station-name gap; the
       departure row reads it to line its direction text up with the stop
       names below. --wl-row-pad-left is where a badge's left border
       falls, derived rather than picked: the trail can't sit further
       left than half a dot without .stops-ahead needing negative
       padding, which would slide the dots off the line, so the badge
       moves to the trail instead of the reverse. */
    --stops-ahead-dot-size: 10px;
    --stops-ahead-line-width: 2px;
    --stops-ahead-name-gap: var(--ha-space-2, 8px);
    --wl-row-pad-left: calc(
      var(--stops-ahead-dot-size) / 2 - var(--stops-ahead-line-width) / 2
    );

    /* Text-safe companion to --wl-accent. GTFS route_color is a
       *background* colour — Wiener Linien ships 0A295D for city buses
       and 000000 for the Badner Bahn, both fine behind white badge text
       and both around 1.19:1 when painted *as* text on a dark card.
       Anything colouring glyphs reads from this token; backgrounds keep
       using --wl-accent directly.

       The lightness-clamped value lands inline on .station alongside
       --wl-accent, computed in accentTextColor() (utils/color.ts) —
       not in CSS, because the relative-colour declaration that did the
       clamp until v1.7.3 mis-resolved on older embedded WebViews and
       @supports cannot probe it (issue #95). This declaration is the
       fallback for the cases the helper declines: no theme polarity
       yet, or an accent it can't resolve (the neutral
       var(--primary-color)). Legible but hueless, never invisible. */
    --wl-accent-text: var(--primary-text-color);

    /* Semantic state tokens layered over HA's official semantic palette
       so theme authors can recolour the whole portfolio in one place;
       hard-coded fallbacks for older HA versions. */
    --wl-rt:      var(--success-color, #43a047);
    --wl-warning: var(--warning-color, #ffa000);
    --wl-error:   var(--error-color,   #db4437);
    --wl-info:    var(--info-color,    #1565c0);
    /* ISA / ISO 7001 accessibility blue (Pantone 285 C). Kept on its
       own token — separate from --wl-info — so the wheelchair pill
       always renders in the standards-correct colour, while themes can
       still override if they need to. */
    --wl-a11y:    #0072CE;
    /* Air conditioning. Deliberately NOT --wl-info: comfort is not a
       standards-defined accessibility guarantee.
       4.84:1 behind the white glyph, past the 4.5:1 AA text bar and well
       past the 3:1 of SC 1.4.11 that governs an icon. Brighter cyans
       look fresher and fail it — #00B8CC is 2.41:1 — so raising the
       lightness here means giving up the white glyph.
       It shares its hue with --wl-a11y (both 207deg), differing only in
       saturation and lightness, so the two badges deliberately read as a
       matched pair rather than as contrasting colours. WCAG 1.4.1 is
       satisfied by the glyph shapes, not by the fills. */
    --wl-cooling: #3276AE;

    /* Spacing / radius / sizing — layered over the HA Design System
       so the card moves with HA when tokens evolve. Values match
       linz-linien-austria so a stacked dashboard reads as one
       family. */
    --wl-radius-sm: var(--ha-border-radius-sm, 4px);
    --wl-radius-md: var(--ha-border-radius-md, 8px);
    --wl-radius-lg: var(--ha-card-border-radius, var(--ha-border-radius-lg, 12px));
    /* These names were wrong until v1.7.6 and nothing complained: var()
       on a token HA does not define is not an error, it just resolves to
       the fallback. So the card ran entirely on its own literals while
       looking theme-aware — which is how --ha-spacing-3 came to mean
       14px on one line and 12px on the next.

       Verified against the frontend's src/resources/theme/core.globals.ts:
         --ha-space-N          4px grid, 1…20   (was --ha-spacing-N)
         --ha-font-size-*      xs 10 / s 12 / m 14 / l 16 / xl 20px.
                               typography.globals.ts sets the root to
                               font-size:14px, so -m is 1rem, NOT 0.875 —
                               do the rem maths at 14px or just write px.
         --ha-border-radius-*  sm 4 / md 8 / lg 12 / xl 16 / pill / circle
                                                (was --ha-radius-*)
         --ha-animation-duration-*  none 1 / instant 75 / fast 150 /
                                    normal 250 / slow 350ms
                                                (was --ha-transition-duration-*)
       There is no easing token — --ha-transition-easing-standard never
       existed either, so easings are now named directly.

       Fallbacks are kept and now match the token they stand in for.
       Adopting a new --ha-* token means checking core.globals.ts first;
       a typo here is invisible. */
    --wl-pad-x:     var(--ha-space-4, 16px);
    --wl-pad-y:     var(--ha-space-3, 12px);
    --wl-row-gap:   var(--ha-space-3, 12px);
    --wl-tile-size: 40px;
    --wl-slot-radius: var(--ha-border-radius-md, 8px);
    --wl-slot-gap: 6px;
    --wl-slot-min-h: 44px;
    --wl-metric-size: 2.25rem;
  }

  ha-card {
    overflow: hidden;
  }

  .wrap {
    display: flex;
    flex-direction: column;
    gap: var(--wl-row-gap);
    padding: var(--wl-pad-y) var(--wl-pad-x);
  }

  /* Tabs sit flush with the card edge — direct child of <ha-card>, not
     inside .wrap. Three active cues (colour + weight + inset underline)
     so the active tab reads without colour vision. */
  /* The strip is split in two: .tabs scrolls horizontally on its own,
     .tab-actions stays pinned outside that scroller so the buttons
     don't drift off-screen with a long tab list. */
  .tabbar {
    display: flex;
    align-items: stretch;
    height: 44px;
    padding: 0 14px;
    border-bottom: 1px solid var(--divider-color, rgba(255, 255, 255, 0.12));
  }
  /* Holds the scroller and the two arrows laid over its ends. The arrows
     are absolutely positioned, so one appearing never changes the width
     the tabs get and nothing re-flows while scrolling. */
  .tabs-viewport {
    /* The arrow's own width is fully clear, so its chevron never sits on
       top of letters; the fade runs from there to --wl-tab-fade. */
    --wl-tab-clear: 26px;
    --wl-tab-fade: 56px;
    position: relative;
    display: flex;
    flex: 1;
    min-width: 0;
  }
  .tabs {
    position: relative;
    display: flex;
    flex: 1;
    min-width: 0;
    overflow-x: auto;
    scrollbar-width: none;
    overscroll-behavior-x: contain;
    /* The fade is the "more this way" signal; it only exists on a side
       that hides tabs. A 0px stop is a hard edge, i.e. no fade. */
    --wl-clear-start: 0px;
    --wl-clear-end: 0px;
    --wl-fade-start: 0px;
    --wl-fade-end: 0px;
    mask-image: linear-gradient(
      to right,
      transparent 0,
      transparent var(--wl-clear-start),
      #000 var(--wl-fade-start),
      #000 calc(100% - var(--wl-fade-end)),
      transparent calc(100% - var(--wl-clear-end)),
      transparent 100%
    );
  }
  .fade-start .tabs {
    --wl-clear-start: var(--wl-tab-clear);
    --wl-fade-start: var(--wl-tab-fade);
  }
  .fade-end .tabs {
    --wl-clear-end: var(--wl-tab-clear);
    --wl-fade-end: var(--wl-tab-fade);
  }
  .tabs:dir(rtl) {
    mask-image: linear-gradient(
      to left,
      transparent 0,
      transparent var(--wl-clear-start),
      #000 var(--wl-fade-start),
      #000 calc(100% - var(--wl-fade-end)),
      transparent calc(100% - var(--wl-clear-end)),
      transparent 100%
    );
  }
  .tab-scroll {
    position: absolute;
    top: 50%;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    padding: 0;
    border: none;
    border-radius: 50%;
    background: transparent;
    color: var(--secondary-text-color);
    cursor: pointer;
    opacity: 0;
    pointer-events: none;
    transform: translateY(-50%);
    transition: opacity var(--ha-animation-duration-fast, 150ms) ease, background-color var(--ha-animation-duration-fast, 150ms) ease, color var(--ha-animation-duration-fast, 150ms) ease;
  }
  .tab-scroll--start {
    inset-inline-start: -6px;
  }
  .tab-scroll--end {
    inset-inline-end: -6px;
  }
  .tab-scroll.visible {
    opacity: 1;
    pointer-events: auto;
  }
  .tab-scroll:hover {
    background: color-mix(in srgb, var(--primary-color) 12%, transparent);
    color: var(--primary-text-color);
  }
  .tab-scroll ha-icon {
    --mdc-icon-size: 20px;
    display: flex;
  }
  .tab-scroll--start ha-icon:dir(rtl),
  .tab-scroll--end ha-icon:dir(rtl) {
    transform: scaleX(-1);
  }
  .tabs::-webkit-scrollbar {
    display: none;
  }
  .tab-actions {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 2px;
    flex: 0 0 auto;
    padding-left: 8px;
  }
  /* Two 32px buttons + the 2px gap. Held even when the active stop has
     no coordinates and the QR button drops out, so switching tabs never
     re-flows the tab widths. */
  .tab-actions.reserved {
    min-width: 66px;
  }
  .tab-actions .icon-action {
    width: 32px;
    height: 32px;
  }
  .tab-actions .icon-action ha-icon {
    --mdc-icon-size: 18px;
  }
  .tab {
    flex: 1 0 auto;
    min-width: 0;
    padding: 0 12px;
    background: none;
    border: none;
    color: var(--secondary-text-color);
    font-family: inherit;
    font-size: 0.85rem;
    font-weight: 500;
    cursor: pointer;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: color var(--ha-animation-duration-fast, 150ms) ease, box-shadow var(--ha-animation-duration-fast, 150ms) ease;
  }
  .tab:hover {
    color: var(--primary-text-color);
  }
  .tab.active {
    color: var(--primary-color);
    font-weight: var(--ha-font-weight-bold, 700);
    box-shadow: inset 0 -2px 0 var(--primary-color);
  }

  /* Per-station section. Inline --wl-accent on this element drives the
     icon-tile tint, line-badge fallback, alert tints, and CTA fill —
     and the atmospheric radial wash below. */
  .station {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: var(--wl-row-gap);
    /* Soft radial wash from the top-left in the station's line accent.
       Picks up the per-station --wl-accent automatically, adds depth
       without competing with user themes. Tuned conservatively (6%
       opacity, 70% radius) so it reads as a tint rather than a tile —
       theme-agnostic atmosphere, frontend-design audit. */
    background-image: radial-gradient(
      ellipse 80% 70% at top left,
      color-mix(in srgb, var(--wl-accent) 6%, transparent),
      transparent 70%
    );
  }
  .station + .station {
    margin-top: var(--wl-row-gap);
    padding-top: var(--wl-row-gap);
    border-top: 1px solid var(--divider-color, rgba(0, 0, 0, 0.08));
  }

  /* Header: square accent tile (left), title block (centre), circular
     icon-action (right). Mirrors HA's hui-tile-card composition. */
  .head {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .icon-tile {
    width: var(--wl-tile-size);
    height: var(--wl-tile-size);
    border-radius: var(--wl-radius-md);
    background: color-mix(in srgb, var(--wl-accent) 18%, transparent);
    color: var(--wl-accent-text);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    forced-color-adjust: none;
  }
  .icon-tile ha-icon {
    --mdc-icon-size: 22px;
  }
  .title-block {
    display: flex;
    flex-direction: column;
    min-width: 0;
    flex: 1;
  }
  .title {
    margin: 0;
    font-size: var(--ha-font-size-m, 14px);
    font-weight: 600;
    color: var(--primary-text-color);
    line-height: 1.2;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .subtitle {
    margin: 2px 0 0;
    font-size: 0.75rem;
    color: var(--secondary-text-color);
    line-height: 1.2;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .head-actions {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    margin-left: auto;
  }
  .icon-action {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    flex: 0 0 auto;
    /* The QR toggle is a <button>, the maps link an <a>: without this
       reset the button keeps its UA padding and the two boxes disagree,
       so the round hover surface stops being a circle centred on the
       glyph. */
    padding: 0;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: transparent;
    color: var(--secondary-text-color);
    text-decoration: none;
    border: none;
    cursor: pointer;
    transition: background-color var(--ha-animation-duration-fast, 150ms) ease, color var(--ha-animation-duration-fast, 150ms) ease;
  }
  .icon-action:hover {
    background: color-mix(in srgb, var(--primary-color) 12%, transparent);
    color: var(--primary-text-color);
  }
  /* Same inline-baseline correction as .hero-a11y: ha-icon is
     inline-level, so the ha-svg-icon inside it sits on a text baseline
     and reserves descender space below the glyph. Inside a round
     button that lifts the icon above true centre and the hover circle
     reads as misaligned. Sizing ha-icon as a flex box of exactly the
     glyph's size removes the line box, and with it the offset. */
  .icon-action ha-icon {
    --mdc-icon-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--mdc-icon-size);
    height: var(--mdc-icon-size);
  }

  /* Hero block — Linz-Linien-aligned layout: tinted background, big
     countdown on the left, line-badge + direction column on the right.
     Matches linz-linien-austria so a stacked dashboard reads as one
     visual family. The per-station --wl-accent (set inline on .station)
     drives the tint and the big-number colour; the row beside lists
     the next departure's line, direction, platform, and a realtime
     pill if applicable. */
  .hero {
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: var(--ha-space-3, 12px);
    /* Named so the hero connector stub can bridge it, and so the item
       margins below can reuse the one value. */
    --wl-hero-row-gap: 6px;
    /* Spacing lives on the items, NOT on the track gap. An expandable
       entry always emits a .hero-detail panel; collapsed, that panel is
       a zero-height grid row, so a row-gap would apply above AND below
       it and leave two gaps between the entries it separates, while an
       entry without stops_ahead emits no panel and got one. Two heroes
       on the same dashboard then measured differently.

       A negative margin on the panel does NOT fix this: a margin changes
       an item's contribution to its own track, never the fixed space
       the grid inserts between tracks. Only removing the gap does. This
       is the same reason .dep-list spaces its rows with padding and
       borders rather than a gap. */
    row-gap: 0;
    align-items: center;
    /* Cosmetics (background, padding, radius) live on .hero-host so
       the tinted surface visually contains both the grid and any
       expanded stops_ahead panel below. The .hero grid itself just
       does layout — entries + their panels live in column 2 in
       interleaved row order so each panel sits directly below its
       trigger entry; .hero-time pins to row 1 of column 1 and stays
       vertically centred against the first entry regardless of
       which panels expand below. */
  }
  .hero > .hero-time {
    grid-column: 1;
    grid-row: 1;
    /* The metric (2.5rem on wide cards) is taller than an entry, so it
       sized grid row 1 and left the first entry reading ~7px further
       from the second than every other pair in the trail. Symmetric
       negative margins cancel its own height, so it contributes nothing
       to the row while the glyphs stay put: they overflow equally up
       into hero-host's padding and down into column 1, which is empty
       on every row below. Nothing clips them — ha-card is the only
       overflow: hidden ancestor and it wraps the whole card.

       Not height: 0 — this is a baseline flex line, and collapsing the
       box makes its content hang below the box rather than stay centred
       on it — which dropped the countdown well under the badge on a
       one-entry hero, where there was no second row to disguise it.
       Margins shrink the box's footprint without moving its content.
       Halving --wl-metric-size slightly over-shrinks (the line box can
       exceed the font size), and over-shrinking is the safe direction:
       the row falls back to entry height and the box stays centred. */
    align-self: center;
    margin-block: calc(var(--wl-metric-size) / -2);
    /* Optical correction. Centring the BOX is not centring the INK:
       wl-sans-bold (TeX Gyre Heros, 1000 upm) declares hhea ascent 1125
       / descent -307 and leaves USE_TYPO_METRICS off, so browsers use
       those. Under line-height: 1 that puts the baseline 0.909em below
       the line-box top, and the ink of "Jetzt" (yMax 729, yMin -12)
       centres 0.0505em BELOW the box centre — about 2px low at 2.5rem,
       which is what a one-entry hero shows plainly. Digits measure
       0.047em to 0.0545em, so one constant covers every value the
       metric renders. A transform rather than a margin: it must not
       feed back into row sizing. */
    translate: 0 calc(var(--wl-metric-size) * -0.05);
  }
  .hero > .hero-entry {
    grid-column: 2;
  }
  /* Every entry but the first carries the gap above it. A closed panel
     between two entries adds nothing, so the spacing is identical
     whether or not the stop has trail data. */
  .hero > .hero-entry ~ .hero-entry {
    margin-top: var(--wl-hero-row-gap);
  }
  /* Detail panel spans both columns so its dot column starts at the
     hero-host's left padding — long station names get the full inner
     width to render before they need to truncate. */
  .hero > .hero-detail {
    grid-column: 1 / -1;
  }
  .hero-time {
    display: flex;
    align-items: baseline;
    gap: 4px;
    color: var(--wl-accent-text);
  }
  .hero-min {
    font-family: "WL Sans", var(--ha-font-family-body, system-ui), sans-serif;
    font-size: var(--wl-metric-size);
    font-weight: 700;
    font-variant-numeric: tabular-nums;
    line-height: 1;
    letter-spacing: -0.5px;
  }
  .hero-unit {
    font-size: var(--ha-font-size-m, 1rem);
    font-weight: 600;
    color: var(--secondary-text-color);
  }
  /* hero-host carries the cosmetics (background, padding, radius)
     so the tinted surface wraps both the .hero grid and any
     expanded stops_ahead panels in one continuous block. */
  .hero-host {
    display: flex;
    flex-direction: column;
    min-width: 0;
    padding: var(--ha-space-3, 12px) var(--wl-pad-x);
    background: color-mix(in srgb, var(--wl-accent) 12%, transparent);
    border-radius: var(--wl-radius-lg);
  }
  .hero-entry {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px;
    min-width: 0;
  }
  .hero-entry.expandable {
    cursor: pointer;
    user-select: none;
    border-radius: 6px;
    /* Containing block for the connector stub (wide cards only). */
    position: relative;
  }
  /* The dep-row version leans on .type-icon's own margin-right for its
     spacing; .hero-entry is a flex row with its own gap, so the margin
     would double up. */
  .hero-entry .type-icon {
    margin-right: 0;
  }
  .hero-chevron {
    --mdc-icon-size: 18px;
    color: var(--secondary-text-color);
    margin-left: auto;
    flex-shrink: 0;
    /* will-change promotes the chevron to its own composite layer so
       the rotation animates on the GPU instead of triggering a layout
       pass that nudges flex siblings during the transition. */
    will-change: transform;
    transition: transform
      var(--ha-animation-duration-fast, 150ms)
 ease;
  }
  .hero-entry.expanded .hero-chevron {
    transform: rotate(180deg);
  }
  /* Hero-side collapsible panel — same 0fr↔1fr trick as
     .dep-row-detail so the trail animates to intrinsic height. The
     entry itself reuses the same .stops-ahead inner styling. */
  .hero-detail {
    display: grid;
    grid-template-rows: 0fr;
    transition:
      grid-template-rows 0.24s ease,
      margin-top 0.24s ease;
    /* Closed, this panel is a zero-height row that must cost nothing —
       .hero carries no row-gap (see there), so it doesn't. Open, it
       buys its own gap below the entry it belongs to; the entry after
       it already carries one. Transitioned with grid-template-rows so
       the gap grows with the panel instead of snapping at frame one,
       and so the connector stub (which reaches exactly one gap past the
       entry's bottom edge) always meets the trail's top. */
  }
  .hero-detail-inner {
    overflow: hidden;
    min-height: 0;
  }
  .hero-detail.expanded {
    grid-template-rows: 1fr;
    margin-top: var(--wl-hero-row-gap);
  }
  .hero-direction {
    font-weight: 500;
    color: var(--primary-text-color);
    /* Single-line ellipsis. Long Wiener Linien direction names like
       "Floridsdorf, U-Bahn-Station" otherwise wrap onto a 2nd or 3rd
       line and inflate the hero's vertical footprint. min-width: 0 is
       required for text-overflow: ellipsis to work inside flex. */
    flex: 1 1 0;
    min-width: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .hero-platform {
    font-size: var(--ha-font-size-xs, 10px);
    font-weight: 500;
    color: var(--primary-text-color);
    font-variant-numeric: tabular-nums;
    padding: 2px 8px;
    border-radius: 999px;
    background: color-mix(
      in srgb,
      var(--primary-text-color) 10%,
      transparent
    );
  }
  /* Planned S-Bahn departure: the countdown runs off the timetable, not a
     live feed. Text rather than an icon-only badge, because "no live data"
     is the one thing here nobody can guess from a glyph. Secondary text
     colour: it qualifies the time, it isn't a warning. */
  .hero-timetable {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-size: var(--ha-font-size-xs, 10px);
    font-weight: 500;
    color: var(--secondary-text-color);
    white-space: nowrap;
    padding: 2px 8px;
    border-radius: 999px;
    background: color-mix(
      in srgb,
      var(--primary-text-color) 10%,
      transparent
    );
  }
  .hero-timetable ha-icon {
    --mdc-icon-size: 12px;
    display: flex;
  }
  /* Hero status flags — icon-only badges on the next departure, each
     rendered only when its condition holds AND the user enabled it
     (show_accessibility / show_cooling).
     Sized rather than padded: 2px/6px padding around a 16px glyph
     resolves to 20x28, so the previous border-radius:999px produced a
     lozenge, not the circle it reads as at a glance. A fixed 24px box
     keeps both badges identical whatever glyph sits inside. */
  .hero-a11y,
  .hero-cooling {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    flex-shrink: 0;
    forced-color-adjust: none;
    color: #fff;
  }
  .hero-a11y {
    background: var(--wl-a11y);
  }
  /* Comfort flag, rendered only with show_cooling on. Same circle and
     the same white glyph as .hero-a11y so a row carrying both reads as
     one set; only the fill differs. */
  .hero-cooling {
    background: var(--wl-cooling);
  }
  /* ha-icon is inline-level by default, so the ha-svg-icon inside it sits
     on a text baseline and reserves descender space underneath. Inside a
     24px circle that lifts the glyph a couple of pixels above true centre
     — visible on a shape this small. Making ha-icon a flex box of exactly
     the glyph's size removes the line box, and with it the offset. */
  .hero-a11y ha-icon,
  .hero-cooling ha-icon {
    --mdc-icon-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
  }

  /* Version banner — accent surface that uses warning tokens. The
     button is rendered bare by renderVersionBanner (shared-render.ts);
     the .banner > button selector below tints it to match. */
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
    height: 32px;
    padding: 0 14px;
    border: none;
    border-radius: 999px;
    background: var(--wl-warning);
    color: var(--text-primary-color, #fff);
    font-family: inherit;
    font-size: 0.75rem;
    font-weight: 600;
    cursor: pointer;
    box-shadow: 0 1px 2px color-mix(in srgb, #000 12%, transparent);
    transition: filter var(--ha-animation-duration-fast, 150ms) ease, transform 0.06s ease;
    forced-color-adjust: none;
  }
  .banner > button:hover {
    filter: brightness(1.08);
  }
  .banner > button:active {
    transform: translateY(1px);
  }

  /* Alerts: traffic + elevator items use the same expandable surface. */
  .alert-list {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .alert {
    display: flex;
    gap: 10px;
    align-items: flex-start;
    padding: 10px 12px;
    border-radius: var(--wl-radius-md);
    background: color-mix(in srgb, var(--wl-warning) 12%, transparent);
    box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--wl-warning) 22%, transparent);
    font-size: 0.85rem;
    cursor: pointer;
    user-select: none;
    forced-color-adjust: none;
  }
  .alert.no-detail {
    cursor: default;
  }
  .alert > ha-icon {
    --mdc-icon-size: 18px;
    color: var(--wl-warning);
    flex-shrink: 0;
    margin-top: 1px;
  }
  .alert-body {
    display: flex;
    flex-direction: column;
    gap: 4px;
    min-width: 0;
    flex: 1;
  }
  .alert-summary {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 6px 8px;
  }
  .alert-title {
    font-weight: 600;
    color: var(--primary-text-color);
  }

  /* Lift location rendered as the path it is — "U3 Mittelbahnsteig ›
     Ausgang Schlachthausgasse › Ausgang Hainburger Weg". The separator is
     decorative and aria-hidden; the row's aria-label still carries the
     original unsegmented string, so the accessible name is unchanged. */
  .lift-path {
    display: inline;
  }
  .lift-path-sep {
    margin: 0 5px;
    color: var(--secondary-text-color);
    font-weight: 400;
  }
  /* Reason line with its category pictogram. flex-start keeps the icon on
     the first line when the reason wraps to several. */
  .lift-reason {
    display: flex;
    align-items: flex-start;
    gap: 6px;
  }
  .lift-reason ha-icon {
    --mdc-icon-size: 16px;
    flex-shrink: 0;
    margin-top: 1px;
    color: var(--wl-accent-text);
  }
  .alert-lines {
    display: inline-flex;
    flex-wrap: wrap;
    gap: 4px;
  }
  .alert-line-badge {
    display: inline-block;
    padding: 1px 6px;
    border-radius: 4px;
    font-size: 0.78rem;
    font-weight: var(--ha-font-weight-bold, 700);
    color: #fff;
    background: var(--primary-color);
    forced-color-adjust: none;
  }
  /* Modern reveal: 0fr ↔ 1fr animates to intrinsic height without
     clipping multi-line traffic descriptions. */
  .alert-detail {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows 0.24s ease;
  }
  .alert-detail > .alert-detail-inner {
    overflow: hidden;
    min-height: 0;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .alert.expanded .alert-detail {
    grid-template-rows: 1fr;
  }
  /* Disruption body. utils/traffic-notice.ts recovers the structure the
     operator writes in prose but never marks up — per-line headings,
     statements, and the trailing labelled facts — so the layout can do
     what the <p> soup can't: let someone scan for their own line, or for
     the reason, without reading the whole notice. */
  .alert-desc {
    color: var(--secondary-text-color);
    line-height: 1.45;
  }
  .alert-desc p {
    margin: 0 0 8px;
  }
  .alert-desc p:last-child {
    margin-bottom: 0;
  }

  /* "Linie 43:" / "Linien 40, 41, 42:" — the section header of a per-line
     block. Signage-style: accent rule, uppercase, tracked out. A notice
     covering seven tram lines is unreadable without these.

     Only rendered when a notice has two or more — a lone heading segments
     nothing and merely restates the line already in the alert title, so
     _renderTrafficNotice drops it. */
  /* No accent rule down the side: the caps, weight and tracking already mark
     this as a heading, and the bar spent the line colour — which on this card
     means "this line" — on something carrying no line. Flush left, so the
     per-line blocks share one edge with the prose under them. */
  .alert-desc-heading {
    margin: 14px 0 6px;
    color: var(--primary-text-color);
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    line-height: 1.3;
  }
  /* No leading gap when the notice opens with a heading. */
  .alert-desc-heading:first-child {
    margin-top: 0;
  }

  /* Labelled facts (Grund / Voraussichtliche Dauer). Pulled out of the
     prose flow and set as label→value pairs above the timing meta row, so
     the two most-asked questions — why, and until when — are findable at
     a glance instead of buried in the last sentence. */
  .alert-facts {
    display: grid;
    gap: 4px 10px;
    margin: 10px 0 0;
    padding-top: 8px;
    border-top: 1px solid var(--divider-color, rgba(255, 255, 255, 0.12));
  }
  /* Label column sizes to its own text — no minimum. A floor here padded
     the short label ("Grund") out to a width set by nothing in particular,
     which reads as a stray gap rather than as alignment. Rows size
     independently on purpose: with two facts of very different label
     lengths, a shared column would push every value out to the width of
     "Voraussichtliche Dauer". */
  .alert-fact {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 4px 10px;
    align-items: baseline;
  }
  .alert-fact dt {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    color: var(--secondary-text-color);
    font-size: 0.68rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    line-height: 1.5;
    white-space: nowrap;
  }
  /* Pictogram for the reason category (excavator, ambulance, …) and the
     date/time distinction. Decorative — the label text beside it already
     names the field, so it carries aria-hidden and adds nothing for a
     screen reader. Sized off the label rather than the body text so it
     stays subordinate to the value. */
  .alert-fact dt ha-icon {
    --mdc-icon-size: 14px;
    flex-shrink: 0;
    color: var(--wl-accent-text);
  }
  .alert-fact dd {
    margin: 0;
    color: var(--primary-text-color);
  }
  /* Narrow cards can't hold a label column beside "Voraussichtliche
     Dauer" — stack instead of letting the value squeeze to two words a
     line. Matches the 360px breakpoint the rest of the card uses. */
  @container wlcard (inline-size < 360px) {
    .alert-fact {
      grid-template-columns: 1fr;
      gap: 0;
    }
  }
  .alert-meta {
    display: inline-flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;
    color: var(--secondary-text-color);
    font-size: 0.78rem;
    font-variant-numeric: tabular-nums;
  }
  .alert-location-chip {
    display: inline-flex;
    align-items: center;
    gap: 3px;
  }
  .alert-location-chip ha-icon {
    --mdc-icon-size: 14px;
    color: var(--secondary-text-color);
  }
  .alert-chevron {
    margin-left: auto;
    --mdc-icon-size: 20px;
    color: var(--secondary-text-color);
    transition: transform var(--ha-animation-duration-fast, 150ms) ease;
    flex-shrink: 0;
  }
  .alert.expanded .alert-chevron {
    transform: rotate(180deg);
  }

  /* Departure rows: rack-style repeated unit. Soft accent surface so the
     section reads as a single coherent block rather than a row of
     dividers. */
  /* Snap the badge box to whole pixels. Unrounded it is 48.64px
     (0.85rem × 2.4 + 16px at a 16px root), which leaves both the badge's
     right border and the trail aligned to it on a fractional x. The
     row's connector stub and the panel's segments resolve to the same
     coordinate but sit in different containing blocks, so the browser
     rounds their edges independently and the stub paints a device pixel
     wider than the line it continues.

     Rounding the token alone is not enough — that moves the trail off a
     badge which is still 48.64px, which is the misalignment this
     replaced. Because .line-badge derives its min-width from the same
     token, snapping here moves the badge and the trail together: badge
     48px, right border and stroke both landing on 52px.

     Guarded because a failing round() would make the token invalid at
     computed-value time, cascading into both the badge's min-width and
     --wl-trail-x. */
  @supports (width: round(down, 1px, 1px)) {
    :host {
      --wl-badge-width: round(
        down,
        calc(0.85rem * 2.4 + var(--wl-badge-pad-x) * 2),
        1px
      );
    }
  }
  .dep-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    /* x of the trail's stroke centre, measured from a row's left edge.
       The open row's connector stub, the trail's line and its dots all
       derive from this one value, which is what guarantees they meet.

       The stroke sits flush inside one of the badge's vertical borders,
       so it reads as that border carrying on downwards: the left one on
       narrow cards, where the trail stays at the card's edge and long
       station names keep their full width, and the right one once the
       container-query override further down has room to indent it.
       Either way the stroke is inside the badge's footprint, which is
       what lets the stub emerge from under the badge.

       --wl-badge-width (on :host) is exact rather than approximate:
       nothing resets box-sizing in this shadow root, so .line-badge is
       content-box, and it derives its min-width from that same token.
       Kept in rem, not em, so nothing re-resolves against a
       descendant's own font-size. */
    /* The .dep-row grid's column gap, named so the direction cell can
       subtract it when aligning itself to the stop names. */
    --wl-dep-col-gap: var(--ha-space-2, 8px);
    --wl-trail-x: calc(var(--stops-ahead-dot-size) / 2);
  }
  .dep-row {
    display: grid;
    grid-template-columns: max-content 1fr auto auto auto;
    align-items: center;
    gap: var(--wl-dep-col-gap);
    /* Symmetric: the old right-hand 2px matched nothing and left every
       row sitting 2px left of centre in its container. */
    padding: var(--ha-space-2, 8px) var(--wl-row-pad-left);
    border-bottom: 1px solid var(--divider-color, rgba(0, 0, 0, 0.08));
    transition: background-color
      var(--ha-animation-duration-fast, 150ms)
 ease;
  }
  .dep-row:last-child {
    border-bottom: none;
  }
  /* Soft tint on hover so brushing the cursor across the list reads
     as interactive without flashing. Mirrors the Linz card. The
     prefers-reduced-motion block at the bottom of this stylesheet
     neutralises the transition for users who opt out. */
  .dep-row:hover {
    background: color-mix(
      in srgb,
      var(--primary-text-color) 4%,
      transparent
    );
  }
  /* When the row carries a stops_ahead panel, the entire row becomes a
     button-like surface. Cursor and user-select cues mirror the alert
     pattern (.alert) so the affordance is consistent across the card. */
  .dep-row.expandable {
    cursor: pointer;
    user-select: none;
    /* Containing block for the open row's connector stub below. */
    position: relative;
    /* Divider moves to the trailing .dep-row-detail (which an expandable
       row always emits, expanded or not) so the rule falls BELOW the
       stops-ahead trail: the trail reads as part of this departure and
       the line separates it from the next one. */
    border-bottom: none;
  }
  .row-chevron {
    --mdc-icon-size: 18px;
    color: var(--secondary-text-color);
    flex-shrink: 0;
    transition: transform
      var(--ha-animation-duration-fast, 150ms)
 ease;
  }
  .dep-row.expanded .row-chevron {
    transform: rotate(180deg);
  }
  /* Connector stub: bridges the gap between the line-badge and the trail
     in the panel below, so the trail reads as growing out of the badge
     rather than floating under it. It spans from the row's vertical
     centre to the row's bottom edge, and .line-badge (z-index 1) paints
     over the upper half — that way the stub appears to start exactly at
     the badge's bottom edge without hard-coding the badge's height. The
     panel's own line starts at its top edge, which is flush against the
     row's bottom, so the two form one continuous stroke. */
  .dep-row.expanded::after {
    content: "";
    position: absolute;
    left: calc(var(--wl-trail-x) - var(--stops-ahead-line-width) / 2);
    top: 50%;
    bottom: 0;
    width: var(--stops-ahead-line-width);
    background: var(--stops-ahead-line, var(--primary-color));
  }
  /* Square off the badge corner the trail leaves from, so the stroke
     reads as continuing out of the badge rather than sliding past a
     rounded edge. Which corner that is follows --wl-trail-x: a
     flush-left trail leaves from the badge's leading edge, an indented
     one from its trailing edge (flipped in the wide-card override). */
  .dep-row.expanded .line-badge {
    border-bottom-left-radius: 0;
  }
  /* Detail panel: sibling <li> rendered immediately below an expandable
     .dep-row. The 0fr ↔ 1fr trick mirrors .alert-detail and animates to
     intrinsic height so the stop list never clips. The panel is always
     in the DOM (inside aria-hidden) so screen readers can step into it
     when expanded; collapse just zeroes the row track. */
  .dep-row-detail {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows 0.24s ease;
    list-style: none;
    /* Carries the divider on behalf of its .dep-row (see above). Applied
       in both states rather than only on .expanded: collapsed the panel
       is zero-height, so the rule lands exactly where the row's own
       border used to sit, and it then travels smoothly with the panel
       instead of snapping between two positions mid-animation. */
    border-bottom: 1px solid var(--divider-color, rgba(0, 0, 0, 0.08));
  }
  .dep-row-detail:last-child {
    border-bottom: none;
  }
  .dep-row-detail-inner {
    overflow: hidden;
    min-height: 0;
  }
  .dep-row-detail.expanded {
    grid-template-rows: 1fr;
  }
  /* Metro-map style trail: a vertical line in the line's brand colour
     with one filled dot per stop. Indent matches the row's line-badge
     (min-width 2.4em) + gap (8px) so the line visually descends from
     under the badge. The connecting line is drawn as a 3px-wide pseudo-
     element under the dot column; dots overlap it so they appear "on"
     the line. The terminus stop highlights with a hollow ring + bold
     name to anchor the destination. */
  .stops-ahead {
    --stops-ahead-line: var(--primary-color);
    /* Doubles as the gap between stops and the panel's top padding, so
       a stop's connector segment can bridge either with one offset. */
    --stops-ahead-gap: var(--ha-space-2, 8px);
    list-style: none;
    margin: 0;
    /* Symmetric top and bottom. The old 10px bottom existed to feed the
       removed single stroke's end calculation (bottom: 10px + half a
       dot); with the line drawn per stop it described nothing. */
    padding: var(--stops-ahead-gap) var(--ha-space-2, 8px)
      var(--stops-ahead-gap) 0;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: var(--stops-ahead-gap);
    color: var(--secondary-text-color);
    font-size: 0.85rem;
    line-height: 1.3;
  }
  /* The vertical line, drawn per stop rather than as one stroke down the
     whole list. Each stop carries an upper segment (from the gap above
     down to its own dot) and a lower one (from its dot to its bottom
     edge); the first stop has no upper segment and the last no lower
     one, so the line begins and ends exactly on a dot.

     A single stroke pinned to the list's top and bottom was simpler but
     assumed every stop is one row tall. Expanding the terminus's
     transfer chips makes that entry taller while its dot stays centred
     in it, so the stroke overshot the ring. Segments are measured
     against each stop's own box, so any stop can grow without the ends
     drifting. They sit behind the dots, which carry z-index 1. */
  .stops-ahead-stop:not(:first-child)::before,
  .dep-row-detail .stops-ahead-stop::before,
  .stops-ahead-stop:not(:last-child)::after {
    content: "";
    position: absolute;
    left: calc(var(--stops-ahead-dot-size) / 2 - var(--stops-ahead-line-width) / 2);
    width: var(--stops-ahead-line-width);
    background: var(--stops-ahead-line);
    /* Square ends, deliberately. The single stroke this replaced carried
       border-radius: 2px, which only ever rounded the two far ends of a
       list-long bar. On segments a fraction of that length, a 2px radius
       on a 2px-wide bar curves away enough of both ends to read as a
       thinner line than the row's connector stub, and to pinch every
       join into an apparent gap. Butt joins are what make the segments
       read as one stroke. */
  }
  /* Upper segment. In a departure panel the first stop gets one too, so
     the line reaches the panel's top edge and meets the row's connector
     stub — the panel's top padding equals the inter-stop gap, so the
     same offset covers both cases. The hero panel has no stub, so its
     first stop keeps the line starting at the dot. */
  .stops-ahead-stop:not(:first-child)::before,
  .dep-row-detail .stops-ahead-stop::before {
    top: calc(-1 * var(--stops-ahead-gap));
    height: calc(50% + var(--stops-ahead-gap));
  }
  /* Lower segment: runs to the stop's bottom edge, where the next stop's
     upper segment picks it up across the gap. */
  .stops-ahead-stop:not(:last-child)::after {
    top: 50%;
    bottom: 0;
  }
  /* Departure-row trail: driven by --wl-trail-x so it always shares an
     axis with its row's connector stub. Indenting the list is enough —
     the dots and their segments are positioned inside each stop, so they
     follow. Two classes of specificity, so this wins over the wide-card
     override further down without being repeated inside that container
     query. The hero's copy of .stops-ahead is unaffected — it has no
     badge to grow from. */
  .dep-row-detail .stops-ahead {
    padding-left: calc(var(--wl-trail-x) - var(--stops-ahead-dot-size) / 2);
  }
  .stops-ahead-stop {
    position: relative;
    display: flex;
    flex-direction: column;
    /* Owns the space under the name row on its own — .stops-ahead-others
       used to add a further 2px margin-top, so the real gap was 6px and
       you had to find both declarations to know it. */
    gap: var(--ha-space-1, 4px);
    padding-left: calc(
      var(--stops-ahead-dot-size) + var(--stops-ahead-name-gap)
    );
    min-height: var(--stops-ahead-dot-size);
  }
  .stops-ahead-row {
    display: flex;
    align-items: center;
    gap: var(--ha-space-2, 8px);
    min-height: var(--stops-ahead-dot-size);
  }
  /* Pointer cursor on intermediate stops the user can actually click —
     the row gets role=button only when the stop has transfer-to-
     other-lines (otherLines length above zero) and is therefore an
     expand/collapse affordance for the +N transfer panel. Stops with
     U-Bahn-only inline chips (no toggle) stay text-cursor since
     there is nothing to click. */
  .stops-ahead-row[role="button"] {
    cursor: pointer;
  }
  .stops-ahead-dot {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: var(--stops-ahead-dot-size);
    height: var(--stops-ahead-dot-size);
    border-radius: 50%;
    background: var(--stops-ahead-line);
    z-index: 1;
    forced-color-adjust: none;
  }
  .stops-ahead-name {
    color: var(--primary-text-color);
    flex: 0 1 auto;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .stops-ahead-stop.terminus .stops-ahead-name {
    font-weight: 600;
  }
  .stops-ahead-stop.terminus .stops-ahead-dot {
    /* Hollow ring at the terminus, anchoring "this is where you end up". */
    background: var(--card-background-color, var(--ha-card-background, #fff));
    box-shadow: inset 0 0 0 var(--stops-ahead-line-width) var(--stops-ahead-line);
  }
  /* Transfer-line chips: small pill badges. U-Bahn chips sit inline
     immediately after the station name (always visible, brand-coloured).
     Tram/bus/night transfers sit behind the right-aligned toggle button
     ("+N" with a chevron) and wrap to a second row inside the same
     stop entry when expanded. */
  .stops-ahead-metros {
    display: inline-flex;
    flex-wrap: wrap;
    gap: var(--ha-space-1, 4px);
    flex-shrink: 0;
  }
  .stops-ahead-line-chip {
    display: inline-block;
    padding: 1px 6px;
    border-radius: 4px;
    font-size: 0.7rem;
    font-weight: var(--ha-font-weight-bold, 700);
    color: #fff;
    background: var(--primary-color);
    line-height: 1.4;
    forced-color-adjust: none;
  }
  /* "+N ▾" toggle button: pill-shaped, neutral background, chevron
     rotates when the non-metro chip group below is expanded. Pinned
     to the right via margin-left:auto. */
  .stops-ahead-other-toggle {
    margin-left: auto;
    display: inline-flex;
    align-items: center;
    gap: 2px;
    padding: 1px 4px 1px 6px;
    border: 0;
    border-radius: 999px;
    background: color-mix(
      in srgb,
      var(--secondary-text-color) 14%,
      transparent
    );
    color: var(--secondary-text-color);
    font-size: 0.7rem;
    font-weight: var(--ha-font-weight-bold, 700);
    cursor: pointer;
    flex-shrink: 0;
    line-height: 1.4;
  }
  .stops-ahead-other-toggle ha-icon {
    --mdc-icon-size: 14px;
    transition: transform
      var(--ha-animation-duration-fast, 150ms)
 ease;
  }
  .stops-ahead-stop.transfers-expanded .stops-ahead-other-toggle ha-icon {
    transform: rotate(180deg);
  }
  /* Second-row container for non-metro chips. Wraps freely; sits below
     the station-name row so its width never pushes the layout. */
  .stops-ahead-others {
    display: flex;
    flex-wrap: wrap;
    gap: var(--ha-space-1, 4px);
  }
  /* Non-metro chips render slightly lighter so the inline U-Bahn chips
     stay the dominant signal. */
  .stops-ahead-line-chip--other {
    opacity: 0.92;
  }
  .line-badge {
    /* Paints over the upper half of an open row's connector stub, so the
       stub emerges from the badge's bottom edge. */
    position: relative;
    z-index: 1;
    /* Declared here rather than on the .expanded rule so the corner
       eases back on collapse too. The reduced-motion block at the foot
       of this stylesheet neutralises it for users who opt out. */
    transition: border-radius
      var(--ha-animation-duration-fast, 150ms)
 ease;
    text-align: center;
    font-family: "WL Sans", var(--ha-font-family-body, system-ui), sans-serif;
    font-weight: 700;
    color: #fff;
    border-radius: 6px;
    padding: 3px var(--wl-badge-pad-x);
    min-width: calc(var(--wl-badge-width) - var(--wl-badge-pad-x) * 2);
    font-size: 0.85rem;
    background: var(--primary-color);
    forced-color-adjust: none;
  }
  /* Towards cell: type-icon sits as a sibling of .towards-rows so when
     the delay wraps under the direction name, both rows share the same
     left edge — aligned with the direction's text, not the icon. */
  .towards {
    display: flex;
    align-items: baseline;
    min-width: 0;
    color: var(--primary-text-color);
  }
  .towards-rows {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    column-gap: 6px;
    row-gap: 2px;
    flex: 1 1 auto;
    min-width: 0;
  }
  .towards-name {
    flex: 1 1 auto;
    min-width: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .type-icon {
    --mdc-icon-size: 16px;
    color: var(--secondary-text-color);
    margin-right: 4px;
    vertical-align: 1px;
  }
  /* Sits in the same wrap slot as .delay; see .hero-timetable. */
  .timetable-note {
    display: inline-flex;
    align-items: center;
    gap: 3px;
    color: var(--secondary-text-color);
    font-size: 0.85rem;
    font-weight: 500;
    white-space: nowrap;
    flex-shrink: 0;
  }
  .timetable-note ha-icon {
    --mdc-icon-size: 14px;
    display: flex;
  }
  .delay {
    color: var(--wl-warning);
    font-size: 0.85rem;
    font-weight: 500;
    white-space: nowrap;
    flex-shrink: 0;
  }
  /* Trailing column container — holds the optional platform pill and
     the optional flags icons in one grid cell. Inline-flex so platform
     sits left of flags (and thus left of the wheelchair icon, per the
     portfolio convention). */
  .row-end {
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }
  /* Platform pill — small, muted, monospace digits so "Steig 7" /
     "Gleis 12" line up visually across rows. Same shape as Linz's
     .row-platform with the wiener-namespace tokens. */
  .row-platform {
    font-size: var(--ha-font-size-xs, 10px);
    color: var(--secondary-text-color);
    font-variant-numeric: tabular-nums;
    white-space: nowrap;
    padding: 1px 6px;
    border-radius: 4px;
    background: color-mix(
      in srgb,
      var(--secondary-text-color) 12%,
      transparent
    );
  }
  .row-flags {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    color: var(--secondary-text-color);
  }
  .row-flags ha-icon {
    --mdc-icon-size: 16px;
  }
  .row-flags .disturbance {
    color: var(--wl-warning);
  }
  .countdown {
    font-family: "WL Sans", var(--ha-font-family-body, system-ui), sans-serif;
    font-variant-numeric: tabular-nums;
    font-weight: 700;
    min-width: 50px;
    text-align: right;
    color: var(--secondary-text-color);
    white-space: nowrap;
  }
  /* State colours — Linz parity. now / late / early class lights up
     the countdown so the user catches the schedule deviation at a
     glance without parsing the delay text. The Wiener Linien API does
     not expose a realtime-vs-scheduled distinction, so the live-pulse
     dot Linz uses isn't applicable here — countdowns are coloured
     purely by their delay state. */
  /* .now is per-ROW, not per-station: the row re-declares
     --wl-accent-text from its own line (see _rowAccentText), because the
     value inherited from .station is the hero lead's colour — two lines
     both at Jetzt otherwise paint the same hue. Only this list surface
     resolves per row; the hero and header keep the station accent. */
  .countdown.now   { color: var(--wl-accent-text); }
  .countdown.late  { color: var(--wl-error); }
  .countdown.early { color: var(--wl-rt); }

  /* Empty / fallback states */
  .empty {
    padding: 18px 0;
    color: var(--secondary-text-color);
    text-align: center;
    font-size: 0.85rem;
  }

  /* Stale-feed empty state: a headline in the same voice as the other
     empty states, then the explanation. Horizontal padding (absent on the
     plain .empty, which is a single short line) keeps the detail sentence
     off the card edge on narrow dashboards. */
  .empty.stale {
    padding: 18px 12px;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .empty .empty-title {
    font-weight: 500;
    color: var(--primary-text-color);
  }
  .empty .empty-detail {
    /* 34em keeps the sentence near the 45-75 character measure that
       reads comfortably, without forcing a width on narrow cards. */
    max-width: 34em;
    margin: 0 auto;
    line-height: 1.4;
  }
  .empty .empty-meta {
    font-size: 0.78rem;
    opacity: 0.75;
  }

  /* Partial staleness: some lines at this stop still report, so the board
     renders normally and this note explains the gap rather than replacing
     the list. Deliberately quiet — the departures are the content. */
  .stale-note {
    padding: 4px 0 8px;
    color: var(--secondary-text-color);
    font-size: 0.78rem;
  }

  /* Footer: attribution timestamp / etc. Right-pin via margin-left:auto.
     Lives inside .wrap (which already pads horizontally), so padding
     stays vertical-only. */
  .foot {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 8px 0;
    /* Eat .wrap's flex gap above and bottom padding below, so .foot
       butts up against the last row's bottom edge AND bottoms-out at
       the card edge — matching linz-linien (where .foot is a direct
       ha-card child with no gap above and no padding below). Without
       margin-top, .wrap's --wl-row-gap pushes the divider 12px below
       the last row; without margin-bottom, the timestamp sits 8px +
       --wl-pad-y above the card edge instead of being vertically
       centred between divider and edge. */
    margin-top: calc(-1 * var(--wl-row-gap));
    margin-bottom: calc(-1 * var(--wl-pad-y));
    border-top: 1px solid var(--divider-color, rgba(0, 0, 0, 0.08));
    font-size: 0.7rem;
    color: var(--secondary-text-color);
  }
  .timestamp {
    margin-left: auto;
  }

  /* Dev-mode strip — visible only with ?wl_debug=1 or localStorage.wl_debug=1 */
  .dev-strip {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 6px 10px;
    border: 1px dashed var(--secondary-text-color, rgba(0, 0, 0, 0.3));
    border-radius: var(--wl-radius-sm);
    font-size: 0.7rem;
    color: var(--secondary-text-color);
  }
  .dev-strip-label {
    font-weight: 600;
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }
  .dev-strip button {
    padding: 4px 10px;
    border-radius: var(--wl-radius-sm);
    border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.2));
    background: transparent;
    color: var(--primary-text-color);
    font-family: inherit;
    font-size: 0.78rem;
    cursor: pointer;
  }
  .dev-strip button:hover {
    opacity: 0.8;
  }
  .dev-strip .dev-strip-clear {
    margin-left: auto;
    color: var(--secondary-text-color);
  }

  /* Dev-mode palette panel. Every row shows one accent resolved for both
     schemes at once, on both accented surfaces the countdown lands on —
     so it deliberately does NOT follow the active theme: the two scheme
     blocks carry HA's stock card backgrounds inline. */
  .dev-palette {
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-top: 6px;
    padding: 8px;
    border: 1px dashed var(--secondary-text-color, rgba(0, 0, 0, 0.3));
    border-radius: var(--wl-radius-sm);
    overflow-x: auto;
  }
  .dev-pal-row {
    display: grid;
    grid-template-columns: 8.5rem 1fr 1fr;
    align-items: stretch;
    gap: 6px;
    min-width: 30rem;
  }
  .dev-pal-id {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3px;
    min-width: 0;
  }
  .dev-pal-id code {
    font-size: 0.62rem;
    color: var(--secondary-text-color);
  }
  .dev-pal-badge {
    align-self: flex-start;
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 0.68rem;
    font-weight: 700;
    color: #fff;
    forced-color-adjust: none;
  }
  .dev-pal-scheme {
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 5px 6px;
    border-radius: var(--wl-radius-sm);
    border: 1px solid rgba(128, 128, 128, 0.35);
  }
  /* Deliberately a plain horizontal label: writing-mode + rotate would
     save a few px but this panel exists to be read on the old WebViews
     that motivated the fix in the first place. */
  .dev-pal-scheme-label {
    font-size: 0.58rem;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: #8a8a8a;
    flex-shrink: 0;
  }
  .dev-pal-chip {
    display: flex;
    align-items: baseline;
    gap: 5px;
    padding: 4px 6px;
    border-radius: 4px;
    min-width: 0;
  }
  .dev-pal-word {
    font-weight: 700;
    font-size: 0.85rem;
    white-space: nowrap;
  }
  .dev-pal-ratio {
    font-size: 0.62rem;
    font-variant-numeric: tabular-nums;
  }
  .dev-pal-ratio.pass {
    color: #4caf50;
  }
  .dev-pal-ratio.fail {
    color: #ff5252;
  }
  .dev-pal-surface {
    font-size: 0.55rem;
    color: #8a8a8a;
  }
  .dev-pal-out {
    margin-left: auto;
    font-size: 0.6rem;
    color: #8a8a8a;
  }

  /* QR icon button — gentle accent tint while the panel is expanded
     so the toggle state reads at a glance, mirroring how dep-row's
     row-chevron flips on expand. */
  .qr-toggle.expanded {
    background: color-mix(in srgb, var(--primary-color) 14%, transparent);
    color: var(--primary-text-color);
  }
  /* Inline QR panel — same 0fr↔1fr grid-template-rows trick as
     .dep-row-detail and .stops-ahead-detail so the panel animates to
     its intrinsic height and never clips the canvas mid-transition.
     Sits between the header and the hero so the QR feels like an
     extension of the stop card rather than a modal interruption. */
  .qr-panel {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows 0.24s ease;
  }
  .qr-panel.expanded {
    grid-template-rows: 1fr;
  }
  .qr-panel-inner {
    overflow: hidden;
    min-height: 0;
  }
  .qr-panel-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    padding: 12px 0 4px;
    cursor: pointer;
  }
  /* Canvas wrapper — qr-creator appends a 220×220 canvas; the white
     plate gives the QR a quiet zone independent of theme background
     so contrast stays clean in dark mode too. */
  .qr-canvas {
    padding: 10px;
    background: #fff;
    border-radius: var(--wl-radius-md);
    line-height: 0;
    forced-color-adjust: none;
  }
  .qr-canvas canvas {
    display: block;
    width: 100%;
    max-width: 220px;
    height: auto;
  }
  .qr-panel-hint {
    margin: 0;
    text-align: center;
    font-size: 0.78rem;
    color: var(--secondary-text-color);
    line-height: 1.4;
    max-width: 280px;
  }

  /* Container density ladder. One token tweak per breakpoint cascades
     through every component above. */
  @container wlcard (inline-size < 360px) {
    :host {
      --wl-pad-x: 12px;
      --wl-pad-y: 12px;
      --wl-tile-size: 36px;
      --wl-slot-min-h: 40px;
      --wl-metric-size: 2rem;
    }
    .tabs {
      padding: 0 8px;
    }
    .tab {
      padding: 0 8px;
      font-size: 0.8125rem;
    }
  }

  /* Narrow cards (sidebar dashboards, mobile portrait) — the hero
     stacks "Jetzt"/countdown above the line + towards row so the
     direction name gets the full container width instead of being
     truncated next to a wide "Jetzt". */
  @container wlcard (inline-size < 420px) {
    .hero {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      /* No gap here either — flex spaces a zero-height closed panel
         exactly the way grid does. The item margins carry it. */
    }
    /* The negative margins above are a grid-row-sizing fix. Here the
       hero is a flex column, the countdown is its own stacked line, and
       it must take its natural footprint and full width back — left as
       is, the margins would pull the entry below up into it. Selector is
       kept at .hero > .hero-time: a container query adds no specificity,
       so a bare .hero-time would lose to the base rule. */
    .hero > .hero-time {
      align-self: stretch;
      /* Stacked above the first entry, so it buys the gap the entry's
         own ~ rule doesn't give it (that rule skips the first entry). */
      margin-block: 0 var(--wl-hero-row-gap);
    }
  }

  @container wlcard (inline-size > 480px) {
    :host {
      --wl-pad-x: 20px;
      --wl-pad-y: 16px;
      --wl-tile-size: 44px;
      --wl-metric-size: 2.5rem;
    }
    .icon-tile ha-icon {
      --mdc-icon-size: 24px;
    }
    /* Wide enough to afford the metro-map indent. The stroke's right
       edge sits flush with the badge's right border (hence the half
       line-width back-off), so with that corner squared off the line
       reads as the border itself continuing downwards rather than as a
       separate stroke starting near it. Narrow cards keep the
       flush-left layout for readability of long station names. Moving
       the token moves the stub, the line and the dots together. */
    .dep-list {
      --wl-trail-x: calc(
        var(--wl-row-pad-left) + var(--wl-badge-width) -
          var(--stops-ahead-line-width) / 2
      );
    }
    /* Nudge the direction text onto the same axis as the stop names
       below it. The grid puts this cell at badge + column-gap; a stop
       name sits at the dot column + its name gap, and the dot column is
       inset from the badge's right border by half a dot less half the
       stroke. The difference is what's added back here — 6px at the
       default tokens. Wide cards only: on narrow ones the trail runs
       flush left, so the stop names are far to the LEFT of the direction
       and closing the gap would drag this text under the badge. */
    .towards {
      margin-left: calc(
        var(--stops-ahead-dot-size) / 2 - var(--stops-ahead-line-width) / 2 +
          var(--stops-ahead-name-gap) - var(--wl-dep-col-gap)
      );
    }
    /* Trail is indented out here, so it leaves the badge's trailing
       edge — square that corner instead of the leading one. */
    .dep-row.expanded .line-badge {
      border-bottom-left-radius: 6px;
      border-bottom-right-radius: 0;
    }
    /* Hero trail gets the same badge connector as a departure row, but
       only at this width: .hero-detail moves into grid column 2 here
       (below), so it finally shares a left edge with .hero-entry and
       therefore with the badge that starts it. Narrow cards span the
       panel across both columns for station-name width, which puts its
       left edge left of the badge entirely — nothing to connect to, and
       the narrow hero is deliberately left exactly as it was before the
       connector existed. */
    .hero {
      /* Leading edge, not trailing. A departure row can afford to indent
         its trail out to the badge's right border because the row is a
         grid and the stop names get the whole 1fr column back. The hero
         panel is a single column under a much larger metric, so pushing
         the trail a badge-width right just eats station-name space for
         symmetry nobody asked for. Flush left it is — same value the
         narrow departure list uses. */
      --wl-hero-trail-x: calc(var(--stops-ahead-dot-size) / 2);
    }
    /* Shifts the badge's left border onto the stroke, rather than the
       stroke onto the border — the trail can't go further left without
       negative padding. Same trick, and same 4px, as .dep-row. */
    .hero-entry {
      padding-left: var(--wl-row-pad-left);
      /* The first entry shares its grid row with .hero-time, which is far
         taller than a badge. Under the grid's align-items: center that
         entry's own box is only badge-height, floating mid-row — so a
         stub measured from its bottom edge stopped short of the panel by
         half the height difference, and only ever on the first entry.
         Stretching the box to fill the row puts its bottom edge where the
         row actually ends; the flex content inside stays centred, so the
         badge does not move and top: 50% is still its centre.

         Since .hero-time's negative margins cancel its footprint this
         is a no-op in practice — row 1 is now entry-height like the
         rest. Kept as a guard so the stub still lands correctly if
         anything ever makes row 1 taller than its entry again. */
      align-self: stretch;
    }
    .hero-detail .stops-ahead {
      padding-left: calc(
        var(--wl-hero-trail-x) - var(--stops-ahead-dot-size) / 2
      );
    }
    /* First stop gets an upper segment so the line reaches the panel's
       top edge and meets the stub. Outside this query the hero's first
       stop deliberately has none. */
    .hero-detail .stops-ahead-stop::before {
      content: "";
      position: absolute;
      left: calc(
        var(--stops-ahead-dot-size) / 2 - var(--stops-ahead-line-width) / 2
      );
      width: var(--stops-ahead-line-width);
      background: var(--stops-ahead-line);
      top: calc(-1 * var(--stops-ahead-gap));
      height: calc(50% + var(--stops-ahead-gap));
    }
    /* Runs from the badge's centre — .line-badge paints over the upper
       half — down past the grid's row gap to the panel below. Assumes
       .hero-entry has not wrapped; at this width it is a single line. */
    .hero-entry.expanded::after {
      content: "";
      position: absolute;
      left: calc(
        var(--wl-hero-trail-x) - var(--stops-ahead-line-width) / 2
      );
      top: 50%;
      bottom: calc(-1 * var(--wl-hero-row-gap));
      width: var(--stops-ahead-line-width);
      background: var(--stops-ahead-line, var(--primary-color));
    }
    /* Left corner: the hero trail leaves the badge's leading edge, not
       its trailing one. */
    .hero-entry.expanded .line-badge {
      border-bottom-left-radius: 0;
    }
    .hero > .hero-detail {
      grid-column: 2;
    }
  }

  /* Accessibility primitives — verbatim from the project spec. */
  .tab:focus-visible,
  .alert:focus-visible,
  .dep-row.expandable:focus-visible,
  .hero-entry.expandable:focus-visible,
  .stops-ahead-other-toggle:focus-visible,
  .icon-action:focus-visible,
  a:focus-visible,
  button:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
    border-radius: 6px;
  }
  /* …except the round icon buttons, which would otherwise take a
     rounded-rect ring around a circular surface. */
  .icon-action:focus-visible {
    border-radius: 50%;
  }
  @media (forced-colors: active) {
    .tab-scroll {
      color: ButtonText;
    }
    .icon-tile,
    .line-badge,
    .alert,
    .dep-row {
      forced-color-adjust: none;
      outline: 1px solid CanvasText;
    }
  }

  /* First-paint stagger (frontend-design audit) — subtle cascading
     reveal on initial mount. Each departure row inlines its
     position-in-list via style="--row-i: N"; the keyframe runs once
     forwards. Capped at 6 rows so long lists don't take ages to
     settle. The motion-reduce catch-all below collapses the
     animation duration to 0.01ms, leaving the end-state visible
     instantly for users who opt out. */
  @keyframes wlRowReveal {
    from {
      opacity: 0;
      transform: translateY(4px);
    }
    to {
      opacity: 1;
      transform: none;
    }
  }
  .dep-row,
  .hero-host {
    animation: wlRowReveal 360ms cubic-bezier(0.2, 0.7, 0.2, 1) both;
    animation-delay: calc(min(var(--row-i, 0), 6) * 55ms);
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;

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
//#region src/const.ts
const CARD_VERSION = "2.1.0";
const ATTRIBUTION_FALLBACK = "Datenquelle: Wiener Linien (data.wien.gv.at), CC BY 4.0";
const NIGHTLINE_BG = "#1b1464";
const NIGHTLINE_FG = "#fef200";

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
* Wrap API-sourced German strings (station names, destinations,
* disturbance text) in a `<span lang="de">` so screen readers pick the
* German voice even when the dashboard locale is non-German. ASCII
* fallbacks (entity ids, etc.) are returned unwrapped — the lang hint
* would be inaccurate and AT handles ASCII fine.
*/
function deText(raw, fallback) {
	if (raw) return b`<span lang="de">${raw}</span>`;
	return fallback ?? "";
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
/**
* Header tile icon — derives from the next departure's vehicle type so
* the card visually announces *what's coming* (bus / tram / metro).
* Falls back to a generic transit glyph when no rows are available or
* the type is unrecognised.
*/
function headerIconForType(type) {
	return lineTypeIcon(type) ?? "mdi:bus-stop";
}
/** The five categories a user can show or hide, in signage order. */
const TRANSFER_MODES = [
	"metro",
	"sbahn",
	"tram",
	"badner",
	"bus",
	"night"
];
/** MDI glyph per category — the editor's chips and nothing else so far. */
const TRANSFER_MODE_ICONS = {
	metro: "mdi:subway-variant",
	sbahn: "mdi:train",
	tram: "mdi:tram",
	badner: "mdi:tram-side",
	bus: "mdi:bus",
	night: "mdi:weather-night"
};
/** The Badner Bahn's realtime label. `LB` is the `linien.csv` spelling and is
*  folded onto this one by `canonicalLineLabel` before any classification, so
*  matching the realtime label alone is sufficient here. */
const BADNER_BAHN_LABEL = "WLB";
/**
* Classify a Wiener Linien line label into one of `TRANSFER_MODES`.
*
* Order matters. `N25` is a bus by vehicle but a NightLine by category, and
* the user toggles it as one — so the N-prefix is tested before the bus
* shape it would otherwise match. After the three prefixed families, a
* digits-then-letter label (`13A`, `25B`) is a city bus; everything left is
* a tram, which correctly catches the numeric lines (`1`, `71`) and the
* letter lines (`D`, `O`).
*
* The Badner Bahn is its own category rather than a tram, matching the rest
* of the codebase: `linien.csv` tags LineID 399 `ptTramWLB` (not `ptTram`),
* `_MOT_SORT_RANK` in static.py gives it a dedicated tier — so the chips
* already arrive ordered Metro → Tram → Badner Bahn → Bus → Nightline — and
* it carries the palette's only pure-black colour. It is a single named
* line, so this is an exact match, not a heuristic like the tram fallback.
*
* An unrecognised future label lands in `tram` rather than being dropped:
* a category toggle the user left ON should not silently swallow a line the
* heuristic has not met yet.
*/
function transferModeOf(label) {
	const upper = label.toUpperCase();
	if (/^N\d/.test(upper)) return "night";
	if (/^U\d/.test(upper)) return "metro";
	if (/^S\d/.test(upper)) return "sbahn";
	if (upper === BADNER_BAHN_LABEL) return "badner";
	if (/^\d+[A-Z]$/.test(upper)) return "bus";
	return "tram";
}

//#endregion
//#region src/utils/color.ts
/** Lightness band for the accent-as-text token, per scheme (OKLCh L, 0–1). */
const DARK_FLOOR = .72;
const LIGHT_CEILING = .45;
/**
* The hueless fallback — legible but carrying no line identity. Mirrors the
* `--wl-accent-text` default on `:host` in card-styles.ts, for the callers
* that have to state it rather than leave the token unset (a nested element
* would otherwise inherit an ancestor's line colour).
*/
const NEUTRAL_ACCENT_TEXT = "var(--primary-text-color)";
/**
* The theme's polarity, read from HA's own themes state.
*
* `undefined` means "not known yet" (the theme has not loaded), and callers
* must treat that as a reason not to guess: leave the accent-as-text token
* unset so the theme's own text colour stands — legible but hueless, never
* invisible. Shared by the cards and the editors so the two cannot end up
* clamping against different polarities on the same screen.
*/
function colorSchemeOf(hass) {
	if (hass?.themes?.darkMode === true) return "dark";
	if (hass?.themes?.darkMode === false) return "light";
}
const clamp01 = (v) => Math.min(1, Math.max(0, v));
const srgbToLinear = (v) => v <= .04045 ? v / 12.92 : ((v + .055) / 1.055) ** 2.4;
const linearToSrgb = (v) => v <= .0031308 ? v * 12.92 : 1.055 * v ** (1 / 2.4) - .055;
/**
* Parse a CSS colour into linear-light sRGB, or null when it isn't a colour
* we can resolve up front.
*
* Hex is handled directly (the GTFS palette and the editor's colour picker
* both emit `#rrggbb`); anything else is normalised through CSSOM, which
* serialises named colours, `rgb()` and `hsl()` to `rgb(…)` and yields ""
* for values it rejects. `var(--primary-color)` — the card's neutral
* fallback accent — deliberately lands in the null branch: it can't be
* resolved without a live element, and the caller wants the theme's own
* text colour there anyway.
*/
function parseColor(value) {
	const input = value.trim();
	if (!input || input.includes("var(")) return null;
	let hex = /^#[0-9a-f]{3,8}$/i.test(input) ? input.slice(1) : "";
	if (!hex) {
		let serialised = "";
		try {
			const probe = document.createElement("span").style;
			probe.color = input;
			serialised = probe.color.trim();
		} catch {
			return null;
		}
		const match = /^rgba?\(([^)]+)\)$/.exec(serialised);
		if (!match?.[1]) return null;
		const [r, g, b] = match[1].split(/[,\s/]+/).filter(Boolean).map(Number);
		if (r === void 0 || g === void 0 || b === void 0) return null;
		if (![
			r,
			g,
			b
		].every(Number.isFinite)) return null;
		return [
			srgbToLinear(r / 255),
			srgbToLinear(g / 255),
			srgbToLinear(b / 255)
		];
	}
	if (hex.length === 3 || hex.length === 4) hex = [...hex.slice(0, 3)].map((c) => c + c).join("");
	if (hex.length !== 6 && hex.length !== 8) return null;
	const int = Number.parseInt(hex.slice(0, 6), 16);
	if (!Number.isFinite(int)) return null;
	return [
		srgbToLinear((int >> 16 & 255) / 255),
		srgbToLinear((int >> 8 & 255) / 255),
		srgbToLinear((int & 255) / 255)
	];
}
/** Linear sRGB → OKLab (Björn Ottosson's matrices, as used by CSS Color 4). */
function linearToOklab([r, g, b]) {
	const l = Math.cbrt(.4122214708 * r + .5363325363 * g + .0514459929 * b);
	const m = Math.cbrt(.2119034982 * r + .6806995451 * g + .1073969566 * b);
	const s = Math.cbrt(.0883024619 * r + .2817188376 * g + .6299787005 * b);
	return [
		.2104542553 * l + .793617785 * m - .0040720468 * s,
		1.9779984951 * l - 2.428592205 * m + .4505937099 * s,
		.0259040371 * l + .7827717662 * m - .808675766 * s
	];
}
/** OKLab → linear sRGB. May land outside the gamut; the caller clips. */
function oklabToLinear([lightness, a, b]) {
	const l = (lightness + .3963377774 * a + .2158037573 * b) ** 3;
	const m = (lightness - .1055613458 * a - .0638541728 * b) ** 3;
	const s = (lightness - .0894841775 * a - 1.291485548 * b) ** 3;
	return [
		4.0767416621 * l - 3.3077115913 * m + .2309699292 * s,
		-1.2684380046 * l + 2.6097574011 * m - .3413193965 * s,
		-.0041960863 * l - .7034186147 * m + 1.707614701 * s
	];
}
const toHex = ([r, g, b]) => "#" + [
	r,
	g,
	b
].map((v) => Math.round(clamp01(linearToSrgb(v)) * 255).toString(16).padStart(2, "0")).join("");
/** WCAG 2.x relative luminance, from linear-light sRGB. */
const relativeLuminance = ([r, g, b]) => .2126 * r + .7152 * g + .0722 * b;
/**
* WCAG contrast ratio between two colours, or null if either won't parse.
* Used by the dev-mode palette panel to label each combination pass/fail.
*/
function contrastRatio(a, b) {
	const first = parseColor(a);
	const second = parseColor(b);
	if (!first || !second) return null;
	const one = relativeLuminance(first);
	const two = relativeLuminance(second);
	return (Math.max(one, two) + .05) / (Math.min(one, two) + .05);
}
/**
* `accent` at `ratio` over `ground`, mixed in sRGB — the JS equivalent of the
* `color-mix(in srgb, var(--wl-accent) N%, transparent)` surfaces the card
* paints its accented blocks with, composited onto the card background.
* Returns null if either colour won't parse.
*/
function mixOver(accent, ground, ratio) {
	const top = parseColor(accent);
	const base = parseColor(ground);
	if (!top || !base) return null;
	return "#" + [
		0,
		1,
		2
	].map((i) => clamp01(linearToSrgb(top[i]) * ratio + linearToSrgb(base[i]) * (1 - ratio))).map((v) => Math.round(v * 255).toString(16).padStart(2, "0")).join("");
}
/**
* Return `accent` with its OKLCh lightness clamped into the legible band for
* `scheme`, as `#rrggbb` — or null when the accent isn't resolvable or the
* scheme is unknown, in which case the caller should leave the token unset so
* the theme's own text colour stands (legible but hueless, never invisible).
*
* Being a clamp rather than a blend, it only moves the lines that need it:
* U3 orange passes through nearly unchanged, bus navy is lifted to #80A5E3.
* Lifting lightness can push a saturated accent outside sRGB; the channels are
* then clipped, which is what browsers do for `oklch()` in practice — so these
* values are byte-identical to what v1.7.3's relative-colour CSS painted
* wherever it worked (verified against a canvas read-back of Chrome's own
* output for all eight published lines, both schemes). Deliberately NOT the
* CSS Color 4 §13.2 chroma-reduction gamut map: that is the more correct
* algorithm, but it lands U1 on #FF7163 where the browser paints #FF5347, and
* matching the shipped colour matters more than matching the spec.
*
* Worst case across the published palette, measured against the 12%
* accent-tinted row the countdown actually sits on (not the flat card):
* 5.06:1 dark, 5.70:1 light — AA for normal text, not just large.
*/
function accentTextColor(accent, scheme) {
	if (scheme === void 0) return null;
	const linear = parseColor(accent);
	if (!linear) return null;
	const [lightness, a, b] = linearToOklab(linear);
	const clamped = scheme === "dark" ? Math.max(DARK_FLOOR, lightness) : Math.min(LIGHT_CEILING, lightness);
	if (clamped === lightness) return toHex(linear);
	const chroma = Math.hypot(a, b);
	const hue = Math.atan2(b, a);
	const lifted = oklabToLinear([
		clamped,
		chroma * Math.cos(hue),
		chroma * Math.sin(hue)
	]);
	return toHex([
		clamp01(lifted[0]),
		clamp01(lifted[1]),
		clamp01(lifted[2])
	]);
}

//#endregion
//#region src/utils/line-labels.ts
const LEGACY_LINE_LABELS = {
	LB: "WLB",
	"25BR": "25B"
};
/** Map a configured line label onto the spelling live departures use.
*  Anything not in the table passes through untouched. */
function canonicalLineLabel(label) {
	return LEGACY_LINE_LABELS[label] ?? label;
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
/** Coerce an unknown config value to a boolean. `true` / `false` pass
*  through; anything else (undefined, null, a YAML typo, a number)
*  falls back to `fallback`. Lets the modern normaliser take a raw,
*  untyped config record without trusting its field types. */
function asBool(v, fallback) {
	return typeof v === "boolean" ? v : fallback;
}
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
function normaliseWalkTimes(raw) {
	if (!raw || typeof raw !== "object") return void 0;
	const out = {};
	for (const [k, v] of Object.entries(raw)) {
		const n = typeof v === "number" ? v : typeof v === "string" ? Number(v) : NaN;
		if (!Number.isFinite(n) || n < 0 || n > 120) {
			console.warn(`[wiener-linien-austria] walk_times["${k}"] = ${JSON.stringify(v)} is not a finite number in 0..120 — dropping`);
			continue;
		}
		const parts = k.split("|");
		const key = parts.length >= 3 ? `${parts[0]}|${parts[1]}` : k;
		const rounded = Math.round(n);
		const prev = out[key];
		out[key] = prev === void 0 ? rounded : Math.max(prev, rounded);
	}
	return Object.keys(out).length ? out : void 0;
}
function normaliseLineDirections(raw, preserveEmpty = false) {
	if (!raw || typeof raw !== "object") return void 0;
	const out = {};
	for (const [k, v] of Object.entries(raw)) {
		if (typeof k !== "string" || !k.length) continue;
		const lineKey = k.toUpperCase();
		if (v === "H" || v === "R") {
			out[lineKey] = v;
			continue;
		}
		if (v !== void 0 && v !== "" && v !== "Both") console.warn(`[wiener-linien-austria] line_directions["${k}"] = ${JSON.stringify(v)} is not "H" / "R" / "Both" — dropping`);
	}
	return preserveEmpty || Object.keys(out).length ? out : void 0;
}
function normaliseStopEntry(raw) {
	if (typeof raw === "string") {
		if (raw.startsWith("sensor.")) return { entity: raw };
		console.warn(`[wiener-linien-austria] entities[] entry ${JSON.stringify(raw)} is not a sensor.* entity — dropping`);
		return null;
	}
	if (!raw || typeof raw !== "object") {
		console.warn(`[wiener-linien-austria] entities[] entry ${JSON.stringify(raw)} is not a string or object — dropping`);
		return null;
	}
	const r = raw;
	const entity = typeof r.entity === "string" ? r.entity : null;
	if (!entity?.startsWith("sensor.")) {
		console.warn(`[wiener-linien-austria] entities[] entry has missing or non-sensor.* entity field`, raw);
		return null;
	}
	return normaliseStopFields(entity, r);
}
/** The per-stop filters of an `entities[]` entry whose `entity` has already
*  been validated. Shared by the modern and flap normalisers, which differ
*  only in how loudly they reject a malformed entry. */
function normaliseStopFields(entity, r) {
	const stop = { entity };
	if (Array.isArray(r.lines)) {
		const lines = r.lines.filter((l) => typeof l === "string" && l.length > 0).map(canonicalLineLabel);
		if (lines.length) stop.lines = lines;
	}
	if (r.direction === "H" || r.direction === "R") stop.direction = r.direction;
	const lineDirs = normaliseLineDirections(r.line_directions);
	if (lineDirs) stop.line_directions = lineDirs;
	const walk = normaliseWalkTimes(r.walk_times);
	if (walk) stop.walk_times = walk;
	return stop;
}
const MODERN_VALIDATED_KEYS = /* @__PURE__ */ new Set([
	"type",
	"entities",
	"entity",
	"lines",
	"direction",
	"walk_times",
	"max_departures",
	"line_colors",
	"show_accessibility",
	"accessibility_only",
	"show_cooling",
	"show_traffic_info",
	"show_elevator_info",
	"show_delay",
	"show_delay_colors",
	"show_type_icon",
	"show_platform",
	"show_hero_metric",
	"show_departures",
	"show_stops_ahead",
	"stops_ahead_modes",
	"show_qr_button",
	"hide_header",
	"hide_attribution",
	"layout"
]);
const MODERN_DEFAULTS = {
	max_departures: 6,
	show_accessibility: false,
	accessibility_only: false,
	show_cooling: false,
	show_traffic_info: true,
	show_elevator_info: true,
	show_delay: true,
	show_delay_colors: true,
	show_type_icon: false,
	show_platform: true,
	show_hero_metric: true,
	show_departures: true,
	show_stops_ahead: true,
	show_qr_button: true,
	hide_header: false,
	hide_attribution: false,
	layout: "stacked"
};
function normaliseTransferModes(raw) {
	if (!Array.isArray(raw)) return [...TRANSFER_MODES];
	const valid = new Set(TRANSFER_MODES);
	const seen = /* @__PURE__ */ new Set();
	for (const v of raw) if (typeof v === "string" && valid.has(v)) seen.add(v);
	return TRANSFER_MODES.filter((m) => seen.has(m));
}
function normaliseModernConfig(raw) {
	let rawEntities = [];
	if (Array.isArray(raw.entities)) rawEntities = raw.entities;
	else if (typeof raw.entity === "string") rawEntities = [{
		entity: raw.entity,
		lines: raw.lines,
		direction: raw.direction,
		walk_times: raw.walk_times
	}];
	const entities = [];
	const seen = /* @__PURE__ */ new Set();
	for (const r of rawEntities) {
		const stop = normaliseStopEntry(r);
		if (!stop) continue;
		if (seen.has(stop.entity)) continue;
		seen.add(stop.entity);
		entities.push(stop);
	}
	const maxRaw = Number(raw.max_departures);
	const maxClamped = Number.isFinite(maxRaw) ? Math.max(0, Math.min(20, Math.round(maxRaw))) : MODERN_DEFAULTS.max_departures;
	const lineColors = {};
	if (raw.line_colors && typeof raw.line_colors === "object") {
		const HEX_RE = /^#(?:[0-9A-Fa-f]{3,4}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/;
		for (const [k, v] of Object.entries(raw.line_colors)) if (typeof v === "string" && HEX_RE.test(v.trim())) lineColors[k.toUpperCase()] = v.trim();
	}
	return {
		...filterPassthrough(raw, MODERN_VALIDATED_KEYS),
		type: typeof raw.type === "string" && raw.type ? raw.type : "custom:wiener-linien-austria-card",
		entities,
		max_departures: maxClamped,
		line_colors: lineColors,
		show_accessibility: asBool(raw.show_accessibility, MODERN_DEFAULTS.show_accessibility),
		accessibility_only: asBool(raw.accessibility_only, MODERN_DEFAULTS.accessibility_only),
		show_cooling: asBool(raw.show_cooling, MODERN_DEFAULTS.show_cooling),
		show_traffic_info: asBool(raw.show_traffic_info, MODERN_DEFAULTS.show_traffic_info),
		show_elevator_info: asBool(raw.show_elevator_info, MODERN_DEFAULTS.show_elevator_info),
		show_delay: asBool(raw.show_delay, MODERN_DEFAULTS.show_delay),
		show_delay_colors: asBool(raw.show_delay_colors, MODERN_DEFAULTS.show_delay_colors),
		show_type_icon: asBool(raw.show_type_icon, MODERN_DEFAULTS.show_type_icon),
		show_platform: asBool(raw.show_platform, MODERN_DEFAULTS.show_platform),
		show_hero_metric: asBool(raw.show_hero_metric, MODERN_DEFAULTS.show_hero_metric),
		show_departures: asBool(raw.show_departures, MODERN_DEFAULTS.show_departures),
		show_stops_ahead: asBool(raw.show_stops_ahead, MODERN_DEFAULTS.show_stops_ahead),
		stops_ahead_modes: normaliseTransferModes(raw.stops_ahead_modes),
		show_qr_button: asBool(raw.show_qr_button, MODERN_DEFAULTS.show_qr_button),
		hide_header: asBool(raw.hide_header, MODERN_DEFAULTS.hide_header),
		hide_attribution: asBool(raw.hide_attribution, MODERN_DEFAULTS.hide_attribution),
		layout: raw.layout === "tabs" ? "tabs" : "stacked"
	};
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
function colorForLine(line, overrides, gtfsColors = {}, fallback = "var(--primary-color)") {
	return chipPalette(line, overrides, gtfsColors, fallback).background;
}
/**
* The three colours a line chip needs, off the one `chipPalette` ladder.
*
* - `fill` — the line's background colour, for surfaces that are FILLED with
*   it: a selected chip, a read-only badge.
* - `ink` — what to write on that fill. The paired foreground when the palette
*   publishes one (a nightline is bright yellow on deep navy, per Wiener
*   Linien's signage), otherwise undefined so the caller's white default
*   stands — matching `chipPalette`, which deliberately declines to guess a
*   foreground for an arbitrary user override.
* - `text` — the line's colour written as TEXT on the card ground, lightness-
*   clamped into the legible band for `scheme` by `accentTextColor`.
*
* `text` is the rung the editor used to skip. It painted `fill` as the chip's
* label and border, so a nightline's deep navy (#1b1464) sat on the dark
* editor card at roughly 1.3:1 and the chip read as an empty outline — the
* exact failure `accentTextColor` was written for. `undefined` when the theme
* polarity isn't known yet, so the caller leaves the token unset and the
* theme's own text colour stands.
*/
function lineChipColors(line, overrides, gtfsColors = {}, scheme, fallback = "var(--primary-color)") {
	const palette = chipPalette(line, overrides, gtfsColors, fallback);
	return {
		fill: palette.background,
		ink: palette.color,
		text: accentTextColor(palette.background, scheme) ?? void 0
	};
}

//#endregion
//#region src/utils/entities.ts
function findWienerLinienEntities(hass) {
	return findSensors(hass, (attrs) => typeof attrs.diva === "number" && Array.isArray(attrs.departures) && !!attrs.next_by_line && typeof attrs.next_by_line === "object");
}
/** The entity ids a departure-board editor's picker offers: every stop
*  sensor, plus whatever the card already has configured.
*
*  `include_entities` rather than an integration filter, for the mirror of
*  the reason in route-editor.ts: the integration also owns the route
*  sensors, and picking one of those gives a board with nothing to show.
*  Configured ids are kept even when they no longer fingerprint as a stop —
*  an unavailable sensor publishes no attributes, and dropping it from its
*  own picker would make the entry look unset. */
function departureBoardOptions(hass, selected = []) {
	const options = new Set(findWienerLinienEntities(hass));
	for (const id of selected) if (id) options.add(id);
	return [...options].sort();
}
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
function lineColorsFor(hass, entityId) {
	if (!hass || !entityId) return {};
	return (hass.states?.[entityId]?.attributes)?.line_colors ?? {};
}
function mergeLineColorsMaps(hass, entityIds) {
	if (!hass) return {};
	const merged = {};
	for (const eid of entityIds) for (const [label, palette] of Object.entries(lineColorsFor(hass, eid))) if (!(label in merged)) merged[label] = palette;
	return merged;
}

//#endregion
//#region src/utils/departures.ts
function lineDirKey(line, direction) {
	return `${line}|${direction}`;
}
function tripletsAtStop(attrs) {
	const out = [];
	const seen = /* @__PURE__ */ new Set();
	for (const d of attrs?.departures ?? []) {
		const dir = String(d.direction ?? "");
		const key = `${d.line}|${dir}|${d.towards}`;
		if (seen.has(key)) continue;
		seen.add(key);
		out.push({
			line: d.line,
			direction: dir,
			towards: d.towards,
			type: d.type
		});
	}
	out.sort((a, b) => a.line === b.line ? a.towards.localeCompare(b.towards) : a.line.localeCompare(b.line));
	return out;
}
function pairsAtStop(attrs) {
	const byKey = /* @__PURE__ */ new Map();
	for (const d of attrs?.departures ?? []) {
		const dir = String(d.direction ?? "");
		const k = lineDirKey(d.line, dir);
		let pair = byKey.get(k);
		if (!pair) {
			pair = {
				line: d.line,
				direction: dir,
				type: d.type,
				termini: []
			};
			byKey.set(k, pair);
		}
		if (d.towards && !pair.termini.includes(d.towards)) pair.termini.push(d.towards);
	}
	const out = Array.from(byKey.values());
	out.sort((a, b) => a.line === b.line ? a.direction.localeCompare(b.direction) : a.line.localeCompare(b.line));
	return out;
}
/** Render a "H: Oberlaa / Alaudagasse" / "R: Floridsdorf" / fallback
*  "Hinfahrt" label. Caps at 3 termini, joined by " / ", with a
*  trailing "+N" overflow for hub stops with many lines. Sorting is
*  the caller's responsibility — the editors pass an already-sorted
*  list. Shared between the modern and retro editors so the rule
*  doesn't drift when one side adjusts the cap or the separator. */
function formatDirectionPillLabel(termini, strings) {
	if (!termini.length) return strings.full;
	const head = termini.slice(0, 3).join(" / ");
	const more = termini.length > 3 ? ` +${termini.length - 3}` : "";
	return `${strings.short}: ${head}${more}`;
}
function directionSurface(attrs, line) {
	const available = /* @__PURE__ */ new Set();
	for (const key of attrs?.tracked_line_keys ?? []) {
		const [keyLine, dir] = key.split("|", 2);
		if (line && keyLine !== line) continue;
		if (dir === "H" || dir === "R") available.add(dir);
	}
	if (available.size === 0) for (const d of attrs?.departures ?? []) {
		if (line && d.line !== line) continue;
		if (d.direction === "H" || d.direction === "R") available.add(d.direction);
	}
	const only = [...available];
	return {
		available,
		unknown: available.size === 0,
		oneWay: available.size === 1 ? only[0] ?? null : null
	};
}
/** The lines actually in play for a stop: the picked ones when the user has
*  narrowed the selection, every line at the stop otherwise (an empty
*  selection means "all").
*
*  A picked line missing from `lines` is kept rather than dropped. The saved
*  config referencing a line the current list does not mention is a data gap,
*  not a deselection — dropping it silently emptied retro's walk-time section
*  whenever a stop's tracked lines changed under a saved card. Shared so the
*  chip row, the direction controls and the walk-time rows cannot disagree
*  about which lines this stop is showing.
*/
function effectiveLines(lines, picked) {
	if (picked.size === 0) return [...lines];
	const out = lines.filter((l) => picked.has(l));
	for (const l of picked) if (!out.includes(l)) out.push(l);
	return out;
}
function linesAtStop(attrs) {
	if (attrs?.tracked_lines?.length) return [...attrs.tracked_lines].sort();
	const s = /* @__PURE__ */ new Set();
	if (attrs?.lines_at_stop?.length) for (const l of attrs.lines_at_stop) s.add(l);
	for (const d of attrs?.departures ?? []) if (d.line) s.add(d.line);
	return Array.from(s).sort();
}
function collectLinesInSelection(hass, entityIds) {
	const s = /* @__PURE__ */ new Set();
	for (const eid of entityIds) {
		const attrs = hass?.states?.[eid]?.attributes;
		for (const l of linesAtStop(attrs)) s.add(l);
	}
	return Array.from(s).sort();
}
function filterDepartures(departures, filter) {
	const { lines, direction, line_directions, walk_times, accessibility_only } = filter;
	const lineSet = lines && lines.length ? new Set(lines.map(canonicalLineLabel)) : null;
	return departures.filter((d) => {
		if (lineSet && !lineSet.has(d.line)) return false;
		const effectiveDir = line_directions?.[d.line] ?? direction;
		if (effectiveDir && d.direction !== effectiveDir) return false;
		if (walk_times) {
			const min = walk_times[lineDirKey(d.line, String(d.direction ?? ""))];
			if (typeof min === "number" && d.countdown < min) return false;
		}
		if (accessibility_only && !d.barrier_free) return false;
		return true;
	});
}
/** Whether the given departure should render its stops_ahead expandable
*  affordance — gated on the user-configurable `show_stops_ahead`
*  toggle (default true) AND on the actual presence of upstream
*  trip-pattern data. Centralised so the modern card's three render
*  helpers (row list, hero entry, hero-panel companion) share one
*  rule rather than each carrying their own copy of the gate. */
function shouldShowStopsAhead(showStopsAhead, d) {
	return showStopsAhead !== false && Array.isArray(d.stops_ahead) && d.stops_ahead.length > 0;
}
/**
* The (line, direction) rows the walk-time control offers for one stop.
*
* Live departures supply real termini. A line the user tracks that has no
* live departures right now — a nightline in the afternoon — still gets
* rows, because otherwise its walk time is only configurable during the
* hours it actually runs, which for a nightline is the middle of the
* night. Those synthetic rows carry no termini (there is no data to name
* one), so the caller labels them with the direction instead.
*
* Rows are filtered to the direction the line resolves to: its own
* override, else the stop-wide setting, else both.
*/
function walkTimePairs(attrs, opts) {
	const { lines, picked, lineDirections, stopDirection } = opts;
	const resolved = (line) => lineDirections[line] ?? stopDirection;
	const live = pairsAtStop(attrs).filter((p) => {
		if (picked.size > 0 && !picked.has(p.line)) return false;
		const eff = resolved(p.line);
		return !eff || p.direction === eff;
	});
	const seen = new Set(live.map((p) => p.line));
	const effective = effectiveLines(lines, picked);
	const synthetic = [];
	for (const line of effective) {
		if (seen.has(line)) continue;
		const eff = resolved(line);
		for (const dir of eff ? [eff] : ["H", "R"]) synthetic.push({
			line,
			direction: dir,
			type: "",
			termini: []
		});
	}
	return [...live, ...synthetic].sort((a, b) => a.line === b.line ? a.direction.localeCompare(b.direction) : a.line.localeCompare(b.line));
}

//#endregion
//#region src/utils/html.ts
/** Slugify an entity id (or any string) into a value safe for use in DOM
*  id / aria-controls attributes. Replaces anything outside [A-Za-z0-9_]
*  with `_`. Keeps the original casing because aria-controls is
*  case-sensitive (lower-cased ids would mis-pair with refs). */
function safeDomId(s) {
	return s.replace(/[^A-Za-z0-9_]/g, "_");
}
/** Idempotent toggle on a reactive Set — returns a NEW Set with `key`
*  present iff it wasn't before. Lit's change detection needs a fresh
*  reference for the @state field to re-render, so in-place mutation
*  via `.add` / `.delete` would silently drop the update. */
function toggleInSet(set, key) {
	const next = new Set(set);
	if (next.has(key)) next.delete(key);
	else next.add(key);
	return next;
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
//#region src/utils/traffic-notice.ts
/** Labels the operator uses for trailing facts, longest first so a prefix
*  can't shadow a longer label. These are matched literally — extending the
*  list is the intended way to cover new operator wording. */
const FACT_LABELS = ["Voraussichtliche Dauer", "Grund"];
/** `Linie 43:` / `Linien 40, 41, 42:` — a per-line section header. Bounded
*  length so a sentence that merely starts with "Linie" and happens to
*  contain a colon later can't be swallowed as a heading. */
const HEADING_RE = /^(Linien?\s+[^:]{1,60}):\s*/;
/** The same heading, but consuming the whole piece — nothing follows the
*  colon. Built from {@link HEADING_RE}'s source rather than written out
*  again so the bounded length can't drift between the two. */
const HEADING_ONLY_RE = new RegExp(`${HEADING_RE.source}$`);
const FACT_RE = new RegExp(`^(${FACT_LABELS.join("|")}):\\s*(.+)$`);
/** Split point before a glued label: any label occurrence that isn't already
*  at the start of its line. */
const GLUED_FACT_RE = new RegExp(`(?<=\\S)\\s*(?=(?:${FACT_LABELS.join("|")}):)`, "g");
/** The same two facts as {@link FACT_LABELS}, written as prose instead of the
*  `Label:` template. The operator emits BOTH forms: a survey of the live
*  `stoerunglang` feed on 2026-09-08 caught the two concurrent entries using
*  one each — "Grund: Gleisschaden im Haltestellenbereich Quartier Belvedere
*  S." against "Grund dafür ist ein Rettungseinsatz im Haltestellenbereich
*  Donauinsel." Reading only the templated form leaves the facts block empty
*  for the prose half, which is what it did until now.
*
*  Each pattern consumes the WHOLE piece. These are recognised only when the
*  sentence stands alone as its own line, which is how the operator writes
*  them. Matching mid-paragraph is deliberately not attempted: unlike the
*  literal labels, a prose sentence has no unambiguous start marker, so
*  `GLUED_FACT_RE` stays anchored to literals for the reason the module
*  header gives. Prose left in place still reads correctly as prose, so
*  declining to split costs nothing. */
const PROSE_FACT_PATTERNS = [[new RegExp(`^Die\\s+(?:${[
	"Störung",
	"Sperre",
	"Umleitung",
	"Unterbrechung",
	"Behinderung"
].join("|")})\\s+dauert\\s+voraussichtlich\\s+bis\\s+(.+)$`, "i"), "Voraussichtliche Dauer"], [/^Grund\s+(?:dafür|hierfür)\s+(?:ist|sind)\s+(?:eine?\s+)?(.+)$/i, "Grund"]];
/** First prose pattern that consumes `piece` whole, or `null`. */
function matchProseFact(piece) {
	for (const [pattern, label] of PROSE_FACT_PATTERNS) {
		const match = pattern.exec(piece);
		if (match?.[1]) return {
			label,
			value: match[1]
		};
	}
	return null;
}
/** Neutral fallback — a circled "i". Used whenever the reason doesn't match
*  a known category, which is the safe default: a wrong pictogram states
*  something false about the disruption, a generic one only states that
*  there is information. */
const FALLBACK_ICON = "mdi:information-outline";
/** Reason → pictogram, first match wins, so put the specific patterns above
*  the general ones. Keyed off the operator's own vocabulary: the live feed
*  is dominated by Gleisbauarbeiten / Bauarbeiten / Verkehrsunfall, with
*  Rettungseinsatz and the Störung family close behind. Matching is on a
*  substring so the compounds work — "Gleisbauarbeiten" contains
*  "bauarbeiten", "Weichenstörung" contains "störung". */
const REASON_ICONS = [
	[/bauarbeit|baustelle|gleisbau|bauma(ß|ss)nahme/i, "mdi:excavator"],
	[/verkehrsunfall|unfall|kollision|zusammensto(ß|ss)/i, "mdi:car-emergency"],
	[/rettung|sanit(ä|ae)|notarzt/i, "mdi:ambulance"],
	[/feuerwehr|brand/i, "mdi:fire-truck"],
	[/polizei/i, "mdi:police-badge"],
	[/demonstration|kundgebung|veranstaltung|umzug|marathon/i, "mdi:account-group"],
	[/schnee|\beis|vereis|\bglatt|gl(ä|ae)tte/i, "mdi:snowflake"],
	[/sturm|unwetter|witterung|gewitter|hitze/i, "mdi:weather-lightning-rainy"],
	[/gebrechen|defekt|schaden|st(ö|oe)rung|reparatur|erneuerung|instandsetzung|ma(ß|ss)nahme|wartung/i, "mdi:wrench"]
];
/** Pictogram for a lift outage reason. Same category table as the traffic
*  reasons — the lift feed shares the operator's vocabulary ("wegen
*  Bauarbeiten", "AUFZUGSERNEUERUNG") — with the same neutral fallback when
*  nothing matches. */
function iconForElevatorReason(reason) {
	for (const [pattern, icon] of REASON_ICONS) if (pattern.test(reason)) return icon;
	return FALLBACK_ICON;
}
/** Split a lift location into its path segments.
*
*  The feed writes these as a route through the station — "U3
*  Mittelbahnsteig - Ausgang Schlachthausgasse - Ausgang Hainburger Weg" —
*  using " - " as the separator in all 14 live entries. Segmenting lets the
*  card show it as the path it is instead of one long hyphenated run.
*
*  Requires spaces around the hyphen, so hyphenated names ("Franz-Josefs-
*  Bahnhof", "Stefan-Fadinger-Platz") stay intact. Returns a single-element
*  array when there is no separator, so callers need no special case. */
function splitLocationPath(location) {
	return location.split(/\s+-\s+/).map((part) => part.trim().replace(/\.$/, "")).filter(Boolean);
}
/** A bare clock time ("11:30 Uhr") means later today; anything else carries
*  a date ("31. August.", "Montag, 03. August 2026, 04:00 Uhr"). */
const TIME_ONLY_RE = /^\d{1,2}[:.]\d{2}(\s*Uhr)?\.?$/i;
/** Drop the sentence-final period the operator writes on a fact value
*  ("31. August." → "31. August"). In a label→value block the value reads
*  as data, not prose, and the terminal period looks like a typo —
*  especially next to a German ordinal, where the value already ends in a
*  date that contains its own dots ("31.07.2026.").
*
*  Only ONE trailing period is removed, and never from a bare ordinal
*  ("31." would lose its meaning), so "31. August" keeps the ordinal dot
*  that belongs to the day. */
function trimTerminalPeriod(value) {
	const trimmed = value.trim();
	if (!trimmed.endsWith(".")) return trimmed;
	if (/^\d+\.$/.test(trimmed)) return trimmed;
	return trimmed.slice(0, -1);
}
/** Pictogram for one labelled fact. "Grund" reads its category off the
*  value's own wording; "Voraussichtliche Dauer" splits on whether the
*  value is a bare clock time (today — clock) or carries a date (calendar),
*  which is the distinction a reader is actually making when they glance
*  at it. Unknown labels take the neutral fallback. */
function iconForFact(label, value) {
	if (label === "Grund") {
		for (const [pattern, icon] of REASON_ICONS) if (pattern.test(value)) return icon;
		return FALLBACK_ICON;
	}
	if (label === "Voraussichtliche Dauer") return TIME_ONLY_RE.test(value.trim()) ? "mdi:clock-outline" : "mdi:calendar-clock";
	return FALLBACK_ICON;
}
/** Elements whose END tag is a line break in the rendered prose. */
const BLOCK_TAGS = /* @__PURE__ */ new Set([
	"P",
	"DIV",
	"LI",
	"UL",
	"OL",
	"TR",
	"H1",
	"H2",
	"H3",
	"H4",
	"H5",
	"H6"
]);
/** Elements whose content is markup or styling, never prose — dropped
*  wholesale rather than descended into. */
const SKIP_TAGS = /* @__PURE__ */ new Set([
	"SCRIPT",
	"STYLE",
	"TEMPLATE",
	"IFRAME",
	"SVG",
	"NOSCRIPT"
]);
/** Reduce the payload to plain-text lines. Accepts either `descriptionHTML`
*  or the plain `description`; markup handling is simply inert on the latter,
*  and the run-on repair in `splitRunOns` is what makes the plain variant
*  readable at all.
*
*  Uses the browser's own HTML parser rather than regex tag-stripping. The
*  regex version had to be iterated to a fixpoint because removing a tag
*  could reassemble the tag it was removing — `<scr<script>ipt src=x>` — and
*  it still mis-read attribute values containing ">" (`<p title="a>b">`).
*  Both are whole classes of bug that a real parser doesn't have, and it
*  decodes entities for free, so there is no named-entity table to keep in
*  sync with whatever the operator's CMS emits.
*
*  `parseFromString` is inert by construction: it neither executes scripts
*  nor fetches resources, and the document it returns is detached — never
*  adopted into the live tree. Nothing here is an injection boundary anyway,
*  since the extracted text reaches the DOM through ordinary escaped Lit
*  bindings; that is why the `unsafeHTML` path was dropped. */
function toLines(raw) {
	const doc = new DOMParser().parseFromString(raw, "text/html");
	const lines = [];
	let buffer = "";
	const flush = () => {
		const line = buffer.replace(/\s+/g, " ").trim();
		if (line) lines.push(line);
		buffer = "";
	};
	const addText = (value) => {
		const parts = value.split(/\r?\n/);
		buffer += parts[0] ?? "";
		for (let i = 1; i < parts.length; i += 1) {
			flush();
			buffer += parts[i] ?? "";
		}
	};
	const walk = (node) => {
		const children = node.childNodes;
		for (let i = 0; i < children.length; i += 1) {
			const child = children[i];
			if (!child) continue;
			if (child.nodeType === Node.TEXT_NODE) {
				addText(child.nodeValue ?? "");
				continue;
			}
			if (child.nodeType !== Node.ELEMENT_NODE) continue;
			const tag = child.tagName.toUpperCase();
			if (SKIP_TAGS.has(tag)) continue;
			if (tag === "BR") {
				flush();
				continue;
			}
			walk(child);
			if (BLOCK_TAGS.has(tag)) flush();
		}
	};
	walk(doc.body);
	flush();
	return lines;
}
/** Detach a heading that upstream glued to its first statement
*  ("Linie 43:Betrieb nur zwischen…") and split off glued facts. */
function splitRunOns(line) {
	const out = [];
	let rest = line;
	const heading = HEADING_RE.exec(rest);
	if (heading) {
		out.push(`${heading[1]}:`);
		rest = rest.slice(heading[0].length);
	}
	for (const part of rest.split(GLUED_FACT_RE)) {
		const trimmed = part.trim();
		if (trimmed) out.push(trimmed);
	}
	return out;
}
/** Parse one disruption description into headings, prose and labelled facts.
*  Returns empty collections for empty input — callers can test
*  `blocks.length || facts.length` for "is there anything to show". */
function parseTrafficNotice(raw) {
	const blocks = [];
	const facts = [];
	const seenFacts = /* @__PURE__ */ new Set();
	for (const line of toLines(String(raw ?? ""))) for (const piece of splitRunOns(line)) {
		const fact = FACT_RE.exec(piece);
		if (fact?.[1] && fact[2]) {
			if (seenFacts.has(fact[1])) continue;
			seenFacts.add(fact[1]);
			const value = trimTerminalPeriod(fact[2]);
			facts.push({
				label: fact[1],
				value,
				icon: iconForFact(fact[1], value)
			});
			continue;
		}
		const prose = matchProseFact(piece);
		if (prose && !seenFacts.has(prose.label)) {
			seenFacts.add(prose.label);
			const value = trimTerminalPeriod(prose.value);
			facts.push({
				label: prose.label,
				value,
				icon: iconForFact(prose.label, value)
			});
			continue;
		}
		const headingOnly = HEADING_ONLY_RE.exec(piece);
		if (headingOnly?.[1]) {
			blocks.push({
				kind: "heading",
				text: headingOnly[1]
			});
			continue;
		}
		blocks.push({
			kind: "para",
			text: piece
		});
	}
	return {
		blocks,
		facts
	};
}
/** Line-list prefix on an alert title: "11A, 59A, 48A: Verkehrsüberlastung",
*  "U1: Verspätungen", "Linien 40, 41: Umleitung". The operator writes the
*  affected lines into the title, and the card already shows them as coloured
*  badges beside it — so on the card the prefix is the same fact twice, in the
*  row where space is tightest. */
const TITLE_LINE_PREFIX_RE = /^(?:Linien?\s+)?([^:]{1,80}):\s*(\S.*)$/;
/**
* Drop the leading line list from an alert title when the badges beside it
* already carry every line it names.
*
* Conservative on purpose — it returns the title untouched unless each token
* before the colon is one of `lines`:
*
*   - a title naming a line with no badge ("13A, 59A: …" against a 13A badge
*     alone) keeps its prefix, because dropping it would lose the 59A;
*   - a colon that isn't a line list ("Achtung: Ersatzverkehr") is left
*     alone, since "Achtung" matches no badge;
*   - a title that is ONLY a line list keeps it, because the regex needs
*     something after the colon and there would otherwise be no title left.
*
* Labels are compared through `canonicalLineLabel`, so a title written in the
* catalogue's spelling still matches a badge carrying the realtime one.
*/
function trimTitleLinePrefix(title, lines) {
	const match = TITLE_LINE_PREFIX_RE.exec(title.trim());
	if (!match) return title;
	const [, prefix, rest] = match;
	const shown = new Set(lines.map((l) => canonicalLineLabel(l.trim()).toUpperCase()));
	if (!shown.size) return title;
	const tokens = prefix.split(/\s*(?:,|\/|\bund\b)\s*/).map((t) => t.trim()).filter(Boolean);
	if (!tokens.length) return title;
	return tokens.every((t) => shown.has(canonicalLineLabel(t).toUpperCase())) ? rest : title;
}

//#endregion
//#region src/utils/mdi-paths.ts
/** MDI `mdiSubwayVariant` (v7.4.47) — 24x24 viewBox. */
const mdiSubwayVariant = "M18,11H13V6H18M16.5,17A1.5,1.5 0 0,1 15,15.5A1.5,1.5 0 0,1 16.5,14A1.5,1.5 0 0,1 18,15.5A1.5,1.5 0 0,1 16.5,17M11,11H6V6H11M7.5,17A1.5,1.5 0 0,1 6,15.5A1.5,1.5 0 0,1 7.5,14A1.5,1.5 0 0,1 9,15.5A1.5,1.5 0 0,1 7.5,17M12,2C7.58,2 4,2.5 4,6V15.5A3.5,3.5 0 0,0 7.5,19L6,20.5V21H18V20.5L16.5,19A3.5,3.5 0 0,0 20,15.5V6C20,2.5 16.42,2 12,2Z";
/** MDI `mdiTram` (v7.4.47) — 24x24 viewBox. */
const mdiTram = "M19,16.94V8.5C19,5.71 16.39,5.1 13,5L13.75,3.5H17V2H7V3.5H11.75L11,5C7.86,5.11 5,5.73 5,8.5V16.94C5,18.39 6.19,19.6 7.59,19.91L6,21.5V22H8.23L10.23,20H14L16,22H18V21.5L16.5,20H16.42C18.11,20 19,18.63 19,16.94M12,18.5A1.5,1.5 0 0,1 10.5,17A1.5,1.5 0 0,1 12,15.5A1.5,1.5 0 0,1 13.5,17A1.5,1.5 0 0,1 12,18.5M17,14H7V9H17V14Z";
/** MDI `mdiBus` (v7.4.47) — 24x24 viewBox. */
const mdiBus = "M18,11H6V6H18M16.5,17A1.5,1.5 0 0,1 15,15.5A1.5,1.5 0 0,1 16.5,14A1.5,1.5 0 0,1 18,15.5A1.5,1.5 0 0,1 16.5,17M7.5,17A1.5,1.5 0 0,1 6,15.5A1.5,1.5 0 0,1 7.5,14A1.5,1.5 0 0,1 9,15.5A1.5,1.5 0 0,1 7.5,17M4,16C4,16.88 4.39,17.67 5,18.22V20A1,1 0 0,0 6,21H7A1,1 0 0,0 8,20V19H16V20A1,1 0 0,0 17,21H18A1,1 0 0,0 19,20V18.22C19.61,17.67 20,16.88 20,16V6C20,2.5 16.42,2 12,2C7.58,2 4,2.5 4,6V16Z";
/** MDI `mdiTrain` (v7.4.47) — 24x24 viewBox. For the S-Bahn rows the
*  timetable adds to a board. Copied from @mdi/svg 7.4.47 `svg/train.svg`,
*  the same geometry @mdi/js ships. */
const mdiTrain = "M12,2C8,2 4,2.5 4,6V15.5A3.5,3.5 0 0,0 7.5,19L6,20.5V21H8.23L10.23,19H14L16,21H18V20.5L16.5,19A3.5,3.5 0 0,0 20,15.5V6C20,2.5 16.42,2 12,2M7.5,17A1.5,1.5 0 0,1 6,15.5A1.5,1.5 0 0,1 7.5,14A1.5,1.5 0 0,1 9,15.5A1.5,1.5 0 0,1 7.5,17M11,10H6V6H11V10M13,10V6H18V10H13M16.5,17A1.5,1.5 0 0,1 15,15.5A1.5,1.5 0 0,1 16.5,14A1.5,1.5 0 0,1 18,15.5A1.5,1.5 0 0,1 16.5,17Z";
/** MDI `mdiBusStop` (v7.4.47) — 24x24 viewBox. */
const mdiBusStop = "M22 7V16C22 16.71 21.62 17.36 21 17.72V19.25C21 19.66 20.66 20 20.25 20H19.75C19.34 20 19 19.66 19 19.25V18H12V19.25C12 19.66 11.66 20 11.25 20H10.75C10.34 20 10 19.66 10 19.25V17.72C9.39 17.36 9 16.71 9 16V7C9 4 12 4 15.5 4S22 4 22 7M13 15C13 14.45 12.55 14 12 14S11 14.45 11 15 11.45 16 12 16 13 15.55 13 15M20 15C20 14.45 19.55 14 19 14S18 14.45 18 15 18.45 16 19 16 20 15.55 20 15M20 7H11V11H20V7M7 9.5C6.97 8.12 5.83 7 4.45 7.05C3.07 7.08 1.97 8.22 2 9.6C2.03 10.77 2.86 11.77 4 12V20H5V12C6.18 11.76 7 10.71 7 9.5Z";
/**
* Map an MDI icon NAME (as returned by `lineTypeIcon` /
* `headerIconForType` in ./mot.ts) to its raw SVG path data.
*
* Unknown names fall through to the generic stop glyph, mirroring
* `headerIconForType`'s own fallback: Wiener Linien has added new
* MeansOfTransport values before, and the QR canvas should degrade to a
* generic icon rather than throw inside Path2D.
*/
function mdiPathForIcon(iconName) {
	switch (iconName) {
		case "mdi:subway-variant": return mdiSubwayVariant;
		case "mdi:tram": return mdiTram;
		case "mdi:bus": return mdiBus;
		case "mdi:train": return mdiTrain;
		default: return mdiBusStop;
	}
}

//#endregion
//#region src/utils/tab-scroll.ts
/** Sub-pixel slack: fractional `scrollLeft` values at the ends would
*  otherwise leave an arrow showing with nothing left to scroll. */
const EDGE_SLACK_PX = 1;
function tabEdges(scrollStart, clientWidth, scrollWidth) {
	const offset = Math.abs(scrollStart);
	return {
		start: offset > EDGE_SLACK_PX,
		end: offset + clientWidth < scrollWidth - EDGE_SLACK_PX
	};
}
/**
* The scroll offset that brings a tab fully into view, or null when it
* already is.
*
* `inset` keeps the tab clear of the edge fade and the arrow sitting in it,
* so a revealed tab reads in full rather than half-faded. Near either end of
* the strip the target is clamped, and the first and last tabs land flush.
*/
function revealOffset(tabStart, tabWidth, scrollStart, clientWidth, scrollWidth, inset) {
	const max = Math.max(0, scrollWidth - clientWidth);
	const clamp = (value) => Math.min(max, Math.max(0, value));
	if (tabStart - inset < scrollStart) {
		const target = clamp(tabStart - inset);
		return target === scrollStart ? null : target;
	}
	const tabEnd = tabStart + tabWidth;
	if (tabEnd + inset > scrollStart + clientWidth) {
		const target = clamp(tabEnd + inset - clientWidth);
		return target === scrollStart ? null : target;
	}
	return null;
}
/** How far one arrow press moves the strip: most of a view, so the tab
*  that was cut off at the edge stays in sight as a landmark. */
function arrowStep(clientWidth) {
	return Math.max(48, Math.round(clientWidth * .7));
}

//#endregion
//#region src/utils/time.ts
function delayMinutes(timePlanned, timeReal) {
	if (!timePlanned || !timeReal) return null;
	const planned = Date.parse(timePlanned);
	const real = Date.parse(timeReal);
	if (!Number.isFinite(planned) || !Number.isFinite(real)) return null;
	return Math.round((real - planned) / 6e4);
}
function formatTime(iso, lang = "de") {
	if (!iso) return "";
	const ts = Date.parse(iso);
	if (!Number.isFinite(ts)) return iso;
	try {
		return new Date(ts).toLocaleString(lang === "en" ? "en-GB" : "de-AT", {
			hour: "2-digit",
			minute: "2-digit",
			day: "2-digit",
			month: "2-digit"
		});
	} catch {
		return iso;
	}
}

//#endregion
//#region src/utils/row-state.ts
function deriveRowState(d, opts) {
	const countdown = Number.isFinite(d.countdown) ? d.countdown : null;
	const signedDelay = delayMinutes(d.time_planned, d.time_real);
	let cdState = "";
	if (countdown !== null && countdown <= 0) cdState = "now";
	else if (!opts.showDelayColors || signedDelay === null) cdState = "";
	else if (signedDelay >= 1) cdState = "late";
	else if (signedDelay <= -1) cdState = "early";
	const hasFlags = Boolean(d.traffic_jam || opts.showAccessibility && d.barrier_free || opts.showCooling && d.cooling);
	return {
		countdown,
		signedDelay,
		cdState,
		hasFlags,
		platform: opts.showPlatform && d.platform ? String(d.platform) : null
	};
}

//#endregion
//#region src/utils/hero-group.ts
function countdownOf(d) {
	return Number.isFinite(d.countdown) ? d.countdown : Number.POSITIVE_INFINITY;
}
/**
* The departures sharing the soonest countdown — the hero group.
*
* Two edge cases carry real behaviour:
* - When anything is already due or overdue (countdown <= 0), the hero is
*   EVERY such departure, not just the soonest. Two trams both at the
*   platform both belong in the hero.
* - When no departure has a usable countdown, the first is surfaced
*   anyway rather than showing an empty hero — the caller has already
*   guaranteed there is at least one.
*/
function computeHeroGroup(filtered) {
	if (filtered.length === 0) return [];
	const minCd = Math.min(...filtered.map(countdownOf));
	if (!Number.isFinite(minCd)) return [filtered[0]];
	if (minCd <= 0) return filtered.filter((d) => countdownOf(d) <= 0);
	return filtered.filter((d) => countdownOf(d) === minCd);
}
/**
* Split a filtered feed into the hero block and the row list.
*
* With the hero metric off, nothing is removed from the row list — the
* hero group is still computed (callers may still want the lead) but the
* rows show everything, because there is no hero above them duplicating
* it. The dedupe relies on object identity, which holds because
* `computeHeroGroup` returns references into the same array.
*/
function splitHeroAndRows(filtered, opts) {
	const heroGroup = computeHeroGroup(filtered);
	const dedupe = opts.showHeroMetric ? new Set(heroGroup) : /* @__PURE__ */ new Set();
	const remaining = filtered.filter((d) => !dedupe.has(d));
	return {
		heroGroup,
		heroLead: heroGroup[0],
		rows: remaining.slice(0, opts.maxDepartures)
	};
}

//#endregion
//#region src/editor/editor-styles.ts
const editorStyles = i$6`
  :host {
    display: block;
  }

  /* Shell: tab bar + scrolling column */

  .wl-editor {
    display: flex;
    flex-direction: column;
  }

  /* Sticky so the tabs stay reachable while a long Anzeige tab scrolls.
     z-index beats ha-form's own focused-field elevation. */
  .wl-tabs {
    display: flex;
    gap: 2px;
    padding: 0 8px;
    background: var(--card-background-color);
    border-bottom: 1px solid var(--divider-color);
    position: sticky;
    top: 0;
    z-index: 3;
  }

  .wl-tab {
    flex: 1;
    /* Flex children refuse to shrink below their content by default, so
       without this a long label (German "Haltestellen") widens the tab bar
       past the dialog instead of ellipsing. */
    min-width: 0;
    border: 0;
    background: transparent;
    cursor: pointer;
    padding: 12px 8px 0;
    font-size: 0.78125rem;
    font-weight: 500;
    line-height: 1.2;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: var(--secondary-text-color);
  }

  .wl-tab[aria-selected="true"] {
    color: var(--primary-color);
  }

  /* Ellipsis lives on the label rather than on the button: overflow:hidden
     on .wl-tab would clip the underline's negative-margin bleed below. */
  .wl-tab-label {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  /* The underline is a child element rather than a border-bottom so it can
     bleed past the button's horizontal padding to the full tab width. */
  .wl-tab-underline {
    display: block;
    height: 2px;
    margin: 7px -8px -1px;
    border-radius: 2px 2px 0 0;
    background: transparent;
  }

  .wl-tab[aria-selected="true"] .wl-tab-underline {
    background: var(--primary-color);
  }

  .wl-tab:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: -2px;
  }

  .wl-panel {
    padding: 14px 16px 22px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .wl-panel--stops {
    gap: 14px;
  }

  /* Section */

  .wl-section {
    border: 1px solid var(--divider-color);
    border-radius: 10px;
    background: var(--card-background-color);
    overflow: hidden;
  }

  .wl-section-header {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 12px;
    background: var(--secondary-background-color);
    border-bottom: 1px solid var(--divider-color);
  }

  .wl-section-title {
    flex: 1;
    min-width: 0;
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.35;
    color: var(--primary-text-color);
    overflow-wrap: anywhere;
  }

  .wl-section-hint {
    font-size: 0.71875rem;
    font-weight: 400;
    line-height: 1.35;
    color: var(--secondary-text-color);
    text-align: right;
  }

  .wl-section-body {
    padding: 6px 12px 12px;
    display: flex;
    flex-direction: column;
  }

  /* ha-form sets its own vertical rhythm between fields; the section already
     supplies the outer padding, so strip the top gap it would add. */
  .wl-section-body ha-form {
    display: block;
  }

  /* Bespoke rows (chips / direction / walk time / colour) */

  .wl-group {
    display: flex;
    flex-direction: column;
    gap: 7px;
  }

  .wl-group-head {
    display: flex;
    align-items: baseline;
    gap: 8px;
  }

  .wl-label {
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 1.4;
    color: var(--secondary-text-color);
  }

  .wl-label--grow {
    flex: 1;
    min-width: 0;
  }

  .wl-note {
    font-size: 0.71875rem;
    font-weight: 400;
    line-height: 1.5;
    color: var(--secondary-text-color);
  }

  .wl-divide {
    padding-top: 12px;
    border-top: 1px solid var(--divider-color);
  }

  /* Line chip — 34px tall for density, 44px hit area for WCAG 2.2 (2.5.8).
     The ::before overlay is what buys both; do not replace it with padding. */

  .wl-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
  }

  /* Three tokens, mirroring the cards' --wl-accent / --wl-accent-text split:
     --wl-chip-color is the line's FILL, --wl-chip-text is that same colour
     lightness-clamped for use as TEXT, and --wl-chip-ink is what gets written
     on top of the fill. The GTFS palette is a set of background colours;
     several are illegible painted as text (bus navy #0A295D is 1.21:1 on a
     dark card), which is why the outlined chip must never use the fill for
     its label. See utils/color.ts and lineChipColors(). */
  .wl-chip {
    --wl-chip-color: var(--primary-color);
    /* Hueless but legible default — the same policy the card applies when the
       theme polarity is unknown. Never fall back to the fill here. */
    --wl-chip-text: var(--primary-text-color);
    --wl-chip-ink: #fff;
    position: relative;
    display: flex;
    align-items: center;
    gap: 5px;
    height: 34px;
    padding: 0 10px;
    border-radius: 5px;
    border: 2px solid var(--wl-chip-text);
    background: transparent;
    color: var(--wl-chip-text);
    font-size: 0.8125rem;
    font-weight: 700;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    forced-color-adjust: none;
  }

  .wl-chip::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: -5px;
    bottom: -5px;
  }

  .wl-chip[aria-pressed="true"] {
    background: var(--wl-chip-color);
    /* Filled: the paired foreground the palette publishes for this line. */
    border-color: var(--wl-chip-color);
    color: var(--wl-chip-ink);
  }

  .wl-chip:hover {
    background: color-mix(in srgb, var(--wl-chip-color) 16%, transparent);
  }

  .wl-chip[aria-pressed="true"]:hover {
    background: color-mix(in srgb, var(--wl-chip-color) 88%, #000);
  }

  /* Dashed rather than merely faded, matching .wl-dir: the border style
     survives forced-colors mode, where opacity does not. Declared after the
     [aria-pressed="true"] rules so a chip that is both on and unavailable
     reads as unavailable — equal specificity, so source order decides. */
  .wl-chip[aria-disabled="true"],
  .wl-chip[aria-disabled="true"]:hover {
    border-style: dashed;
    border-color: var(--secondary-text-color);
    background: transparent;
    color: var(--secondary-text-color);
    opacity: 0.65;
    cursor: not-allowed;
  }

  /* Offset outline rather than box-shadow: on a chip filled with its own line
     colour a shadow-based ring disappears into the fill. */
  .wl-chip:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
  }

  .wl-chip-mode {
    font-size: 0.6875rem;
    font-weight: 700;
    line-height: 1;
    opacity: 0.85;
  }

  .wl-chip-mode ha-icon {
    --mdc-icon-size: 14px;
    display: block;
  }

  /* Read-only line badge */

  /* Always a filled surface, so it takes the paired ink rather than a
     hardcoded white — a nightline badge is yellow-on-navy, as on the sign. */
  .wl-badge {
    --wl-chip-ink: #fff;
    flex: none;
    min-width: 34px;
    height: 24px;
    padding: 0 7px;
    box-sizing: border-box;
    border-radius: 5px;
    color: var(--wl-chip-ink);
    font-size: 0.75rem;
    font-weight: 700;
    line-height: 24px;
    text-align: center;
    forced-color-adjust: none;
  }

  /* Direction buttons */

  .wl-dirs {
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
  }

  .wl-dir {
    flex: 1;
    min-width: 0;
    min-height: 34px;
    padding: 4px 9px;
    border-radius: 6px;
    border: 1px solid var(--divider-color);
    background: var(--card-background-color);
    color: var(--primary-text-color);
    font-size: 0.78125rem;
    font-weight: 500;
    line-height: 1.3;
    text-align: center;
    overflow-wrap: anywhere;
    cursor: pointer;
  }

  .wl-dir[aria-pressed="true"] {
    border-color: var(--primary-color);
    background: var(--wl-ripple);
    color: var(--primary-color);
  }

  .wl-dir:hover:not([aria-disabled="true"]) {
    background: var(--wl-hover);
  }

  /* Dashed rather than merely faded: the border style survives forced-colors
     mode, where opacity does not. */
  .wl-dir[aria-disabled="true"] {
    border-style: dashed;
    background: transparent;
    color: var(--secondary-text-color);
    opacity: 0.65;
    cursor: not-allowed;
  }

  .wl-dir:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
  }

  .wl-dir--compact {
    flex: 1 1 0;
    min-width: 44px;
  }

  .wl-dir--compact ha-icon {
    --mdc-icon-size: 16px;
  }

  .wl-override-row {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
  }

  .wl-override-row .wl-dirs {
    flex: 1;
    min-width: 0;
    gap: 5px;
  }

  /* Walk-time row */

  .wl-walk-list {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .wl-walk-row {
    display: flex;
    align-items: center;
    gap: 8px;
    min-height: 44px;
  }

  .wl-walk-dest {
    flex: 1;
    min-width: 0;
    font-size: 0.8125rem;
    font-weight: 400;
    line-height: 1.35;
    color: var(--primary-text-color);
    overflow-wrap: anywhere;
  }

  /* Stepper shell. The mockup specified −/value/+ only; the value stays a real
     text input so a 12-minute walk is one keystroke rather than twelve taps. */
  .wl-stepper {
    display: flex;
    align-items: center;
    flex: none;
    border: 1px solid var(--divider-color);
    border-radius: 6px;
    overflow: hidden;
    background: var(--card-background-color);
  }

  .wl-step-btn {
    width: 34px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    background: transparent;
    color: var(--secondary-text-color);
    cursor: pointer;
  }

  .wl-step-btn ha-icon {
    --mdc-icon-size: 18px;
  }

  .wl-step-btn:hover:not(:disabled) {
    background: var(--wl-hover);
  }

  .wl-step-btn:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  .wl-step-btn:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: -2px;
  }

  .wl-step-value {
    width: 38px;
    box-sizing: border-box;
    padding: 0 2px;
    border: 0;
    border-left: 1px solid var(--divider-color);
    border-right: 1px solid var(--divider-color);
    background: transparent;
    color: var(--primary-text-color);
    font-size: 0.84375rem;
    font-weight: 500;
    line-height: 36px;
    text-align: center;
    font-variant-numeric: tabular-nums;
    /* Native spinners duplicate the −/+ buttons and shrink the hit area. */
    -moz-appearance: textfield;
    appearance: textfield;
  }

  .wl-step-value::-webkit-outer-spin-button,
  .wl-step-value::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .wl-step-value:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: -2px;
  }

  /* Colour override row */

  .wl-color-row {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
  }

  .wl-color-field {
    position: relative;
    flex: 1;
    display: flex;
    align-items: center;
    gap: 8px;
    min-height: 44px;
    padding: 0 10px;
    border: 1px solid var(--divider-color);
    border-radius: 8px;
    background: var(--card-background-color);
    cursor: pointer;
  }

  .wl-swatch {
    width: 22px;
    height: 22px;
    border-radius: 5px;
    border: 1px solid var(--divider-color);
    forced-color-adjust: none;
  }

  .wl-color-hex {
    font-size: 0.78125rem;
    line-height: 1;
    font-family: ui-monospace, Menlo, monospace;
    color: var(--primary-text-color);
  }

  /* The real input is transparent and covers the field, so its own focus ring
     is invisible — lift the ring onto the field (WCAG 2.4.7). */
  .wl-color-input {
    position: absolute;
    inset: 0;
    opacity: 0;
    cursor: pointer;
  }

  .wl-color-field:focus-within {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
  }

  .wl-icon-btn {
    flex: none;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--divider-color);
    border-radius: 8px;
    background: var(--card-background-color);
    color: var(--secondary-text-color);
    cursor: pointer;
  }

  .wl-icon-btn:hover:not(:disabled) {
    background: var(--wl-hover);
  }

  .wl-icon-btn:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }

  .wl-icon-btn:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
  }

  /* Stop block, empty state, add button */

  .wl-stop-body {
    padding: 12px;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .wl-index {
    flex: none;
    width: 22px;
    height: 22px;
    box-sizing: border-box;
    border-radius: 11px;
    background: var(--card-background-color);
    border: 1px solid var(--divider-color);
    color: var(--secondary-text-color);
    font-size: 0.6875rem;
    font-weight: 600;
    line-height: 20px;
    text-align: center;
  }

  .wl-empty {
    display: flex;
    flex-direction: column;
    gap: 4px;
    align-items: center;
    text-align: center;
    padding: 18px 14px;
    border: 1px dashed var(--divider-color);
    border-radius: 8px;
    background: var(--wl-sunken);
  }

  .wl-empty-title {
    font-size: 0.8125rem;
    font-weight: 500;
    line-height: 1.4;
    color: var(--primary-text-color);
  }

  .wl-add {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    min-height: 44px;
    border: 1px dashed var(--divider-color);
    border-radius: 10px;
    background: transparent;
    color: var(--primary-color);
    font-size: 0.84375rem;
    font-weight: 500;
    line-height: 1;
    cursor: pointer;
  }

  .wl-add:hover {
    background: var(--wl-hover);
  }

  .wl-add:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
  }

  /* Forced colours.
     Several surfaces above carry forced-color-adjust:none, because a line
     chip that loses its line colour stops being identifiable. Opting out also
     forfeits the guaranteed contrast the forced palette provides, so each one
     gets a CanvasText boundary back — the trade card-styles.ts already makes
     at the end of its own sheet. Selected state is a --wl-ripple tint in the
     normal palette and a tint is exactly what forced-colors flattens, so it is
     restated as a Highlight outline; the :not(:focus-visible) keeps the focus
     ring winning, since this block sits after the focus rules. */
  @media (forced-colors: active) {
    .wl-chip,
    .wl-badge,
    .wl-swatch {
      outline: 1px solid CanvasText;
    }

    .wl-chip[aria-pressed="true"]:not(:focus-visible),
    .wl-dir[aria-pressed="true"]:not(:focus-visible) {
      outline: 2px solid Highlight;
      outline-offset: -2px;
    }
  }
`;

//#endregion
//#region src/editor/editor-tokens.ts
const editorTokens = i$6`
  :host {
    --wl-sunken: color-mix(in srgb, var(--primary-text-color) 3%, var(--card-background-color));
    --wl-hover: color-mix(in srgb, var(--primary-text-color) 6%, transparent);
    --wl-ripple: color-mix(in srgb, var(--primary-color) 14%, transparent);
  }
`;

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
//#region src/editor/editor-shell.ts
/** Tab bar. `tablist` / `tab` roles rather than plain buttons so a screen
*  reader announces "tab 2 of 3" and arrow keys behave the way users expect
*  from every other tabbed surface in HA. */
function renderTabs(tabs, active, onSelect) {
	const focusSibling = (ev, index) => {
		const delta = ev.key === "ArrowRight" ? 1 : ev.key === "ArrowLeft" ? -1 : 0;
		if (!delta) return;
		ev.preventDefault();
		const nextIndex = (index + delta + tabs.length) % tabs.length;
		const next = tabs[nextIndex];
		if (!next) return;
		onSelect(next.key);
		const target = ev.currentTarget.parentElement?.children[nextIndex];
		if (target instanceof HTMLElement) target.focus();
	};
	return b`
    <div class="wl-tabs" role="tablist">
      ${tabs.map((tab, i) => b`<button
          type="button"
          class="wl-tab"
          role="tab"
          id=${`wl-tab-${tab.key}`}
          aria-selected=${active === tab.key ? "true" : "false"}
          aria-controls=${active === tab.key ? `wl-panel-${tab.key}` : A}
          tabindex=${active === tab.key ? "0" : "-1"}
          @click=${() => onSelect(tab.key)}
          @keydown=${(ev) => focusSibling(ev, i)}
        >
          <span class="wl-tab-label">${tab.label}</span>
          <span class="wl-tab-underline" aria-hidden="true"></span>
        </button>`)}
    </div>
  `;
}
function renderPanel(active, content) {
	return b`
    <div
      class=${active === "stops" ? "wl-panel wl-panel--stops" : "wl-panel"}
      role="tabpanel"
      id=${`wl-panel-${active}`}
      aria-labelledby=${`wl-tab-${active}`}
    >
      ${content}
    </div>
  `;
}
/** Section chrome around arbitrary content — used for the bespoke sections
*  (line colours, the header strip). */
function renderSection(opts, content) {
	return b`
    <section class="wl-section">
      <header class="wl-section-header">
        <span class="wl-section-title">${opts.title}</span>
        ${opts.hint ? b`<span class="wl-section-hint">${opts.hint}</span>` : A}
      </header>
      <div class="wl-section-body">${content}</div>
    </section>
  `;
}
/** Section whose rows are one `<ha-form>` schema slice.
*
*  One form per section rather than one form for the whole tab: it is what
*  lets a section carry its own header and hint while its rows stay HA-native
*  components, and it keeps each slice small enough to read. The change handler
*  receives only that section's fields, so the editor merges rather than
*  replacing the whole config.
*
*  Note there is no `expandable` anywhere in v2's schemas. The tab already did
*  the hiding, and nesting a collapsible inside a tab inside a dialog is the
*  depth that made v1's header config unfindable. That also sidesteps the
*  `flatten: true` footgun entirely — with no expandable, there is no nesting
*  for ha-form to scope values under. */
function renderFormSection(opts) {
	return renderSection(opts, b`<ha-form
      .hass=${opts.hass}
      .data=${opts.data}
      .schema=${opts.schema}
      .computeLabel=${opts.computeLabel}
      .computeHelper=${opts.computeHelper}
      @value-changed=${(ev) => {
		ev.stopPropagation();
		opts.onChange(ev.detail.value);
	}}
    ></ha-form>`);
}

//#endregion
//#region node_modules/lit-html/directive-helpers.js
/**
* @license
* Copyright 2020 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/ const { I: t } = j$1, i = (o) => o, n = (o) => null === o || "object" != typeof o && "function" != typeof o, e = {
	HTML: 1,
	SVG: 2,
	MATHML: 3
}, l$1 = (o, t) => void 0 === t ? void 0 !== o?._$litType$ : o?._$litType$ === t, d = (o) => null != o?._$litType$?.h, c = (o) => void 0 !== o?._$litDirective$, f = (o) => o?._$litDirective$, r = (o) => void 0 === o.strings, s = () => document.createComment(""), v = (o, n, e) => {
	const l = o._$AA.parentNode, d = void 0 === n ? o._$AB : n._$AA;
	if (void 0 === e) {
		const i = l.insertBefore(s(), d), n = l.insertBefore(s(), d);
		e = new t(i, n, o, o.options);
	} else {
		const t = e._$AB.nextSibling, n = e._$AM, c = n !== o;
		if (c) {
			let t;
			e._$AQ?.(o), e._$AM = o, void 0 !== e._$AP && (t = o._$AU) !== n._$AU && e._$AP(t);
		}
		if (t !== d || c) {
			let o = e._$AA;
			for (; o !== t;) {
				const t = i(o).nextSibling;
				i(l).insertBefore(o, d), o = t;
			}
		}
	}
	return e;
}, u = (o, t, i = o) => (o._$AI(t, i), o), m = {}, p = (o, t = m) => o._$AH = t, M = (o) => o._$AH, h = (o) => {
	o._$AR(), o._$AA.remove();
}, j = (o) => {
	o._$AR();
};

//#endregion
//#region node_modules/lit-html/directives/live.js
/**
* @license
* Copyright 2020 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/ const l = e$2(class extends i$2 {
	constructor(r$6) {
		if (super(r$6), r$6.type !== t$1.PROPERTY && r$6.type !== t$1.ATTRIBUTE && r$6.type !== t$1.BOOLEAN_ATTRIBUTE) throw Error("The `live` directive is not allowed on child or event bindings");
		if (!r(r$6)) throw Error("`live` bindings can only contain a single expression");
	}
	render(r) {
		return r;
	}
	update(i, [t]) {
		if (t === E || t === A) return t;
		const o = i.element, l = i.name;
		if (i.type === t$1.PROPERTY) {
			if (t === o[l]) return E;
		} else if (i.type === t$1.BOOLEAN_ATTRIBUTE) {
			if (!!t === o.hasAttribute(l)) return E;
		} else if (i.type === t$1.ATTRIBUTE && o.getAttribute(l) === t + "") return E;
		return p(i), t;
	}
});

//#endregion
//#region src/editor-shared.ts
/** HA's card-editor dialog steals arrow keys (and others) for its own
*  navigation. Number/text inputs in the bespoke editor sections must
*  stop propagation so the user can actually edit values. Shared so the
*  modern and retro editors bind one identical handler.
*
*  Escape and Tab are deliberately let through. Escape is how every HA dialog
*  closes and Tab is how focus leaves the field; swallowing them made the
*  bespoke inputs the only place in the editor where those two keys did
*  nothing, which reads as a stuck dialog rather than a feature. */
function swallowEditorKeys(ev) {
	if (ev.key === "Escape" || ev.key === "Tab") return;
	ev.stopPropagation();
}
/** Coerce a raw walk-time input into a clamped minutes value, or null to
*  clear. Shared by all three card editors so the parse / clamp / warn
*  rules can't drift. Empty input clears silently; non-numeric input
*  ("5min") warns — so a typo doesn't vanish without a signal — then
*  clears. Valid values round and clamp to 1..120 minutes. `context`
*  identifies the field in the warning (e.g. `"sensor.x/U1|H"`). */
function coerceWalkTime(raw, context) {
	const trimmed = raw.trim();
	const n = trimmed === "" ? NaN : Number(trimmed);
	if (trimmed !== "" && !Number.isFinite(n)) console.warn(`[wiener-linien-austria] walk-time "${raw}" for ${context} is not a number — clearing`);
	return Number.isFinite(n) && n > 0 ? Math.min(120, Math.round(n)) : null;
}

//#endregion
//#region src/editor/stop-block.ts
/** Chip tokens. `--wl-chip-text` is left unset when the theme polarity is
*  unknown, so the CSS default (`--primary-text-color`) stands rather than the
*  fill — legible but hueless, never invisible. Same policy as the cards. */
function chipStyle(c) {
	return {
		"--wl-chip-color": c.fill,
		...c.text ? { "--wl-chip-text": c.text } : {},
		...c.ink ? { "--wl-chip-ink": c.ink } : {}
	};
}
/** Badges are always filled, so they need the fill and its paired ink only. */
function badgeStyle(c) {
	return {
		background: c.fill,
		...c.ink ? { "--wl-chip-ink": c.ink } : {}
	};
}
const WALK_MIN = 1;
const WALK_MAX = 120;
function attrsOf(hass, entity) {
	return hass?.states?.[entity]?.attributes;
}
/** Termini reachable in `dir`, optionally narrowed to one line. Feeds the
*  direction-button labels, which name real destinations rather than the
*  abstract H/R the API uses — the one v1 affordance worth keeping verbatim. */
function terminiFor(triplets, dir, line) {
	const out = /* @__PURE__ */ new Set();
	for (const t of triplets) {
		if (t.direction !== dir) continue;
		if (line && t.line !== line) continue;
		if (t.towards) out.add(t.towards);
	}
	return [...out].sort();
}
/** Per-line rows replace the stop-wide control once two or more lines are in
*  play. Below that the stop-wide control is the only direction picker there
*  is — which is the whole of retro's model, so it can never be dropped
*  outright. */
function showPerLineDirections(opts, ctx) {
	if (opts.singleLine) return false;
	return effectiveLines(ctx.lines, ctx.picked).length >= 2;
}
function renderStopBlock(hass, stop, opts, cb) {
	const attrs = attrsOf(hass, stop.entity);
	const missing = !attrs;
	const stopName = attrs?.stop_name || stop.entity;
	const lineColors = attrs?.line_colors ?? {};
	const scheme = colorSchemeOf(hass);
	const colorOf = (line) => lineChipColors(line, opts.lineColorOverrides, lineColors, scheme, "#5b6470");
	const picked = new Set(stop.lines ?? []);
	const known = linesAtStop(attrs);
	const lines = picked.size ? [.../* @__PURE__ */ new Set([...known, ...picked])].sort() : known;
	const triplets = tripletsAtStop(attrs);
	const typeByLine = /* @__PURE__ */ new Map();
	for (const d of attrs?.departures ?? []) if (d.line && d.type && !typeByLine.has(d.line)) typeByLine.set(d.line, d.type);
	const dirStrings = (dir) => ({
		full: opts.t(dir === "H" ? "dir_h" : "dir_r"),
		short: opts.t(dir === "H" ? "dir_h_short" : "dir_r_short")
	});
	return b`
    <section class="wl-section">
      <header class="wl-section-header">
        ${opts.total > 1 ? b`<span class="wl-index" aria-hidden="true">${opts.index}</span>` : A}
        <span class="wl-section-title">${stopName}</span>
      </header>
      <div class="wl-stop-body">
        ${missing ? renderMissing(stop, opts, cb) : A}
        ${renderLines(stop, opts, cb, {
		lines,
		picked,
		colorOf,
		typeByLine
	})}
        ${!missing && lines.length ? showPerLineDirections(opts, {
		lines,
		picked
	}) ? renderOverrides(stop, opts, cb, {
		attrs,
		triplets,
		picked,
		lines,
		colorOf,
		dirStrings
	}) : renderDirection(stop, opts, cb, {
		attrs,
		triplets,
		picked,
		lines,
		dirStrings
	}) : A}
        ${!missing ? renderWalkTimes(stop, opts, cb, {
		attrs,
		picked,
		colorOf,
		lines,
		dirStrings
	}) : A}
      </div>
    </section>
  `;
}
function renderMissing(stop, opts, cb) {
	return b`
    <ha-alert alert-type="error">
      ${opts.t("entity_missing").replace("{entity}", stop.entity)}
      ${cb.remove ? b`<button
            type="button"
            slot="action"
            class="wl-add"
            @click=${() => cb.remove?.(stop.entity)}
          >
            ${opts.et("remove_stop")}
          </button>` : A}
    </ha-alert>
  `;
}
function renderLines(stop, opts, cb, ctx) {
	const { lines, picked, colorOf, typeByLine } = ctx;
	const hint = picked.size ? opts.et("lines_selected").replace("{n}", String(picked.size)).replace("{total}", String(lines.length)) : opts.et("lines_empty_means_all");
	return b`
    <div class="wl-group">
      <div class="wl-group-head">
        <span class="wl-label wl-label--grow">${opts.et("lines_label")}</span>
        ${lines.length ? b`<span class="wl-note">${hint}</span>` : A}
      </div>
      ${lines.length ? b`<div class="wl-chips">
            ${lines.map((line) => {
		const on = opts.singleLine ? picked.has(line) : picked.size === 0 || picked.has(line);
		const icon = lineTypeIcon(typeByLine.get(line));
		return b`<button
                type="button"
                class="wl-chip"
                style=${o(chipStyle(colorOf(line)))}
                aria-pressed=${on ? "true" : "false"}
                aria-label=${opts.et(on ? "line_active_aria" : "line_inactive_aria").replace("{line}", line)}
                @click=${() => cb.toggleLine(stop.entity, line)}
              >
                ${icon ? b`<span class="wl-chip-mode"
                      ><ha-icon icon=${icon} aria-hidden="true"></ha-icon
                    ></span>` : A}
                ${line}
              </button>`;
	})}
          </div>` : b`<div class="wl-empty">
            <span class="wl-empty-title">${opts.et("no_lines_title")}</span>
            <span class="wl-note">${opts.et("no_lines_hint")}</span>
          </div>`}
    </div>
  `;
}
function renderDirection(stop, opts, cb, ctx) {
	const { attrs, triplets, picked, lines, dirStrings } = ctx;
	const effective = effectiveLines(lines, picked);
	const scope = effective.length === 1 ? effective[0] : void 0;
	const dir = stop.direction ?? null;
	const surface = directionSurface(attrs, scope);
	const hasH = surface.available.has("H");
	const hasR = surface.available.has("R");
	const onlyOne = surface.oneWay !== null;
	const activeH = dir === "H" || dir === null && surface.oneWay === "H";
	const activeR = dir === "R" || dir === null && surface.oneWay === "R";
	const activeBoth = dir === null && !onlyOne;
	const commit = (next) => {
		const kept = {};
		for (const [line, value] of Object.entries(stop.line_directions ?? {})) if (!effective.includes(line)) kept[line] = value;
		cb.setDirections(stop.entity, {
			direction: next,
			lineDirections: kept
		});
	};
	const label = (d) => surface.unknown || surface.available.has(d) ? formatDirectionPillLabel(terminiFor(triplets, d, scope), dirStrings(d)) : `${dirStrings(d).short}: ${opts.et("direction_not_served")}`;
	const note = surface.oneWay !== null && effective.length === 1 ? opts.et("direction_note_one_way").replace("{line}", effective[0] ?? "") : "";
	return b`
    <div class="wl-group">
      <span class="wl-label">${opts.et("direction_label")}</span>
      <div class="wl-dirs">
        ${dirButton({
		label: label("H"),
		active: activeH,
		disabled: !surface.unknown && !hasH,
		title: hasH || surface.unknown ? opts.t("dir_h") : opts.et("direction_unavailable"),
		onClick: () => commit("H")
	})}
        ${dirButton({
		label: label("R"),
		active: activeR,
		disabled: !surface.unknown && !hasR,
		title: hasR || surface.unknown ? opts.t("dir_r") : opts.et("direction_unavailable"),
		onClick: () => commit("R")
	})}
        ${opts.singleLine ? A : dirButton({
		label: opts.t("dir_both"),
		active: activeBoth,
		disabled: onlyOne,
		title: onlyOne ? opts.et("direction_unavailable") : opts.t("dir_both"),
		onClick: () => commit(null)
	})}
      </div>
      ${note ? b`<span class="wl-note">${note}</span>` : A}
    </div>
  `;
}
function dirButton(spec) {
	return b`<button
    type="button"
    class=${e$1({
		"wl-dir": true,
		"wl-dir--compact": !!spec.compact
	})}
    aria-pressed=${spec.active ? "true" : "false"}
    aria-disabled=${spec.disabled ? "true" : "false"}
    aria-label=${spec.ariaLabel ?? spec.label}
    title=${spec.title}
    @click=${(ev) => {
		if (spec.disabled) {
			ev.preventDefault();
			return;
		}
		spec.onClick();
	}}
  >
    ${spec.icon ? b`<ha-icon icon=${spec.icon} aria-hidden="true"></ha-icon>` : spec.label}
  </button>`;
}
function renderOverrides(stop, opts, cb, ctx) {
	const { attrs, triplets, picked, lines, colorOf, dirStrings } = ctx;
	const effective = effectiveLines(lines, picked);
	const lineDirs = stop.line_directions ?? {};
	const stopDir = stop.direction ?? null;
	const explicitBoth = stop.direction === void 0 && stop.line_directions !== void 0 && Object.keys(stop.line_directions).length === 0;
	/** What a line actually resolves to right now. A line with no override
	*  inherits the stop-wide value, and showing that inherited value is the
	*  point: v1 displayed "both" for every un-overridden line, so the per-line
	*  rows appeared to contradict the stop-wide row above them. */
	const effectiveDir = (line) => lineDirs[line] ?? stopDir;
	/** Write the whole picture at once: materialise every line's currently
	*  effective direction, apply the user's change, and clear the stop-wide key.
	*  Clearing it is what makes the "both" button mean both — while
	*  `stop.direction` is set, an absent override re-inherits instead. */
	const commit = (line, next) => {
		const lineDirections = {};
		for (const l of effective) {
			const value = l === line ? next : effectiveDir(l);
			if (value) lineDirections[l] = value;
		}
		for (const [l, value] of Object.entries(lineDirs)) if (!effective.includes(l)) lineDirections[l] = value;
		cb.setDirections(stop.entity, {
			direction: null,
			lineDirections
		});
	};
	return b`
    <div class="wl-group">
      <span class="wl-label">${opts.et("direction_label")}</span>
      ${effective.map((line) => {
		const surface = directionSurface(attrs, line);
		const cur = explicitBoth ? null : effectiveDir(line);
		const hasH = surface.available.has("H");
		const hasR = surface.available.has("R");
		const onlyOne = surface.oneWay !== null;
		const unknown = surface.unknown;
		const aria = (d) => opts.et("per_line_direction_aria").replace("{line}", line).replace("{direction}", d === null ? opts.t("dir_both") : formatDirectionPillLabel(terminiFor(triplets, d, line), dirStrings(d)));
		return b`
          <div class="wl-override-row">
            <span class="wl-badge" style=${o(badgeStyle(colorOf(line)))}
              >${line}</span
            >
            <div class="wl-dirs">
              ${dirButton({
			label: dirStrings("H").short,
			active: cur === "H" || cur === null && surface.oneWay === "H",
			disabled: !unknown && !hasH,
			compact: true,
			title: terminiFor(triplets, "H", line).join(" / ") || opts.t("dir_h"),
			ariaLabel: aria("H"),
			onClick: () => commit(line, "H")
		})}
              ${dirButton({
			label: dirStrings("R").short,
			active: cur === "R" || cur === null && surface.oneWay === "R",
			disabled: !unknown && !hasR,
			compact: true,
			title: terminiFor(triplets, "R", line).join(" / ") || opts.t("dir_r"),
			ariaLabel: aria("R"),
			onClick: () => commit(line, "R")
		})}
              ${dirButton({
			label: "",
			icon: "mdi:swap-horizontal",
			active: cur === null && (!onlyOne || explicitBoth),
			disabled: onlyOne && !explicitBoth,
			compact: true,
			title: opts.t("dir_both"),
			ariaLabel: aria(null),
			onClick: () => commit(line, null)
		})}
            </div>
          </div>
        `;
	})}
    </div>
  `;
}
function renderWalkTimes(stop, opts, cb, ctx) {
	const { attrs, picked, colorOf, lines, dirStrings } = ctx;
	const lineDirs = stop.line_directions ?? {};
	const stopDir = stop.direction ?? null;
	const pairs = walkTimePairs(attrs, {
		lines,
		picked,
		lineDirections: lineDirs,
		stopDirection: stopDir
	});
	if (!pairs.length) return A;
	return b`
    <div class="wl-group wl-divide">
      <div class="wl-group-head">
        <span class="wl-label wl-label--grow">${opts.et("section_walk_time")}</span>
        <span class="wl-note">${opts.et("walk_time_unit")}</span>
      </div>
      <span class="wl-note">${opts.et("walk_time_hint")}</span>
      <div class="wl-walk-list">
        ${pairs.map((p) => {
		const key = lineDirKey(p.line, p.direction);
		const val = stop.walk_times?.[key];
		const terminus = p.termini.length ? p.termini.join(" / ") : p.direction === "H" || p.direction === "R" ? dirStrings(p.direction).full : "";
		const aria = opts.et("walk_time_aria").replace("{line}", p.line).replace("{towards}", terminus);
		const bump = (delta) => {
			const next = (val ?? 0) + delta;
			cb.setWalkTime(stop.entity, key, next < WALK_MIN ? null : Math.min(WALK_MAX, next));
		};
		return b`
            <div class="wl-walk-row">
              <span class="wl-badge" style=${o(badgeStyle(colorOf(p.line)))}
                >${p.line}</span
              >
              <span
                class="wl-walk-dest"
                title=${p.termini.length > 1 ? opts.et("walk_time_branching_hint") : terminus}
                >→ ${terminus}</span
              >
              <span class="wl-stepper">
                <button
                  type="button"
                  class="wl-step-btn"
                  ?disabled=${val === void 0}
                  aria-label=${opts.et("walk_time_less_aria").replace("{line}", p.line)}
                  @click=${() => bump(-1)}
                >
                  <ha-icon icon="mdi:minus" aria-hidden="true"></ha-icon>
                </button>
                <input
                  type="number"
                  class="wl-step-value"
                  min=${WALK_MIN}
                  max=${WALK_MAX}
                  step="1"
                  inputmode="numeric"
                  placeholder=${opts.et("walk_time_placeholder")}
                  aria-label=${aria}
                  .value=${l(val !== void 0 ? String(val) : "")}
                  @keydown=${swallowEditorKeys}
                  @keyup=${swallowEditorKeys}
                  @keypress=${swallowEditorKeys}
                  @change=${(ev) => cb.setWalkTime(stop.entity, key, coerceWalkTime(ev.target.value, `${stop.entity}/${key}`))}
                />
                <button
                  type="button"
                  class="wl-step-btn"
                  ?disabled=${(val ?? 0) >= WALK_MAX}
                  aria-label=${opts.et("walk_time_more_aria").replace("{line}", p.line)}
                  @click=${() => bump(1)}
                >
                  <ha-icon icon="mdi:plus" aria-hidden="true"></ha-icon>
                </button>
              </span>
            </div>
          `;
	})}
      </div>
    </div>
  `;
}

//#endregion
//#region src/editor/editor-common.ts
/**
* The four stop-block callbacks for a multi-stop editor.
*
* `commit` receives the whole rebuilt entities array and is responsible for
* assigning `_config` BEFORE dispatching `config-changed`. That ordering is
* the load-bearing invariant of every editor here: custom editors get no
* re-`setConfig()` after `config-changed`, so a fireEvent-only path leaves
* `_config` stale and the next render reverts the form.
*
* Every mutation tidies to absence rather than an empty container, so saved
* YAML never accumulates `lines: []` or `walk_times: {}`.
*/
function multiStopCallbacks(getStops, commit) {
	const update = (eid, mutator) => {
		const stops = getStops();
		if (!stops) return;
		commit(stops.map((s) => s.entity === eid ? mutator({ ...s }) : s));
	};
	return {
		toggleLine: (eid, line) => update(eid, (s) => {
			const cur = new Set(s.lines ?? []);
			if (cur.has(line)) cur.delete(line);
			else cur.add(line);
			if (cur.size) s.lines = [...cur];
			else delete s.lines;
			return s;
		}),
		setDirections: (eid, next) => update(eid, (s) => {
			if (next.direction === null) delete s.direction;
			else s.direction = next.direction;
			if (Object.keys(next.lineDirections).length) s.line_directions = next.lineDirections;
			else delete s.line_directions;
			return s;
		}),
		setWalkTime: (eid, key, minutes) => update(eid, (s) => {
			const cur = { ...s.walk_times ?? {} };
			if (minutes === null) delete cur[key];
			else cur[key] = minutes;
			if (Object.keys(cur).length) s.walk_times = cur;
			else delete s.walk_times;
			return s;
		}),
		remove: (eid) => {
			const stops = getStops();
			if (!stops) return;
			commit(stops.filter((s) => s.entity !== eid));
		}
	};
}
/**
* Rebuild the entities array from the entity selector's flat `string[]`,
* preserving each surviving stop's saved overrides.
*
* Without this every add/remove cycle would silently wipe every stop's lines,
* direction and walk times — ha-form's entity selector knows nothing about the
* per-stop config hanging off each id. Order follows the selector so the
* user-visible order tracks what they dragged; a newly added entity gets a bare
* placeholder for the normaliser to fill in.
*/
function rebuildStops(current, raw) {
	const ids = Array.isArray(raw) ? raw.filter((s) => typeof s === "string" && s.length > 0) : [];
	const byEntity = new Map(current.map((s) => [s.entity, s]));
	return ids.map((eid) => byEntity.get(eid) ?? { entity: eid });
}
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
//#region \0@oxc-project+runtime@0.149.0/helpers/esm/decorate.js
function __decorate(decorators, target, key, desc) {
	var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	return c > 3 && r && Object.defineProperty(target, key, r), r;
}

//#endregion
//#region src/editor.ts
/** Editor label key per transfer mode. Spelled out rather than built as
*  `mode_${mode}`: the orphaned-key check in localize/localize.test.ts finds a
*  string by grepping the source for its leaf, so an interpolated key reads as
*  unreferenced and the catalogue entry looks safe to delete. */
const TRANSFER_MODE_LABEL_KEYS = {
	metro: "mode_metro",
	sbahn: "mode_sbahn",
	tram: "mode_tram",
	badner: "mode_badner",
	bus: "mode_bus",
	night: "mode_night"
};
let WienerLinienAustriaCardEditor = class WienerLinienAustriaCardEditor extends i$3 {
	constructor(..._args) {
		super(..._args);
		this._tab = "stops";
		this._onEntitiesChanged = (ev) => {
			ev.stopPropagation();
			if (!this._config) return;
			this._commit(normaliseModernConfig({
				...this._config,
				entities: rebuildStops(this._config.entities, ev.detail.value["entities"])
			}));
		};
		this._computeLabel = (field) => editorLabel(this.hass, this._i18n, field.name);
		this._computeHelper = (field) => {
			const { et } = this._i18n;
			const cfg = this._config;
			return editorHelper(this._i18n, field.name, {
				...cfg?.show_accessibility ? {} : { accessibility_only: et("accessibility_only_requires") },
				...cfg?.show_delay ? {} : { show_delay_colors: et("show_delay_colors_requires") },
				...(cfg?.entities.length ?? 0) >= 2 ? {} : { layout: et("layout_requires") }
			});
		};
	}
	setConfig(config) {
		this._config = normaliseModernConfig(config);
	}
	shouldUpdate(changed) {
		if (!this._config) return false;
		if (changed.has("_config") || changed.has("_tab")) return true;
		const prev = changed.get("hass");
		if (!prev || !this.hass) return true;
		return this._config.entities.map((s) => s.entity).some((eid) => prev.states[eid] !== this.hass.states[eid]);
	}
	get _i18n() {
		return editorTranslators("modern", this.hass?.language);
	}
	_commit(next) {
		this._config = next;
		fireEvent(this, "config-changed", { config: next });
	}
	_patch(value) {
		if (!this._config) return;
		this._commit(normaliseModernConfig({
			...this._config,
			...value
		}));
	}
	get _stopCallbacks() {
		return multiStopCallbacks(() => this._config?.entities, (entities) => {
			if (this._config) this._commit({
				...this._config,
				entities
			});
		});
	}
	render() {
		if (!this._config) return A;
		const { et } = this._i18n;
		return b`
      <div class="wl-editor">
        ${renderTabs([
			{
				key: "stops",
				label: et("tab_stops")
			},
			{
				key: "display",
				label: et("tab_display")
			},
			{
				key: "tweaks",
				label: et("tab_tweaks")
			}
		], this._tab, (key) => {
			this._tab = key;
		})}
        ${renderPanel(this._tab, this._renderActiveTab())}
      </div>
    `;
	}
	_renderActiveTab() {
		switch (this._tab) {
			case "stops": return this._renderStops();
			case "display": return this._renderDisplay();
			case "tweaks": return this._renderMisc();
		}
	}
	_renderStops() {
		const cfg = this._config;
		const { t, et } = this._i18n;
		return b`
      <ha-form
        .hass=${this.hass}
        .data=${{ entities: cfg.entities.map((s) => s.entity) }}
        .schema=${[{
			name: "entities",
			required: true,
			selector: { entity: {
				multiple: true,
				include_entities: departureBoardOptions(this.hass, cfg.entities.map((s) => s.entity))
			} }
		}]}
        .computeLabel=${this._computeLabel}
        .computeHelper=${this._computeHelper}
        @value-changed=${this._onEntitiesChanged}
      ></ha-form>
      ${cfg.entities.map((stop, i) => renderStopBlock(this.hass, stop, {
			index: i + 1,
			total: cfg.entities.length,
			lineColorOverrides: cfg.line_colors,
			t,
			et
		}, this._stopCallbacks))}
    `;
	}
	_renderDisplay() {
		const cfg = this._config;
		const { et } = this._i18n;
		const common = {
			hass: this.hass,
			computeLabel: this._computeLabel,
			computeHelper: this._computeHelper,
			onChange: (v) => this._patch(v)
		};
		return b`
      ${renderFormSection({
			...common,
			title: et("section_layout"),
			hint: et("section_layout_hint"),
			data: {
				layout: cfg.layout,
				max_departures: cfg.max_departures,
				hide_header: cfg.hide_header,
				show_hero_metric: cfg.show_hero_metric,
				show_departures: cfg.show_departures,
				show_stops_ahead: cfg.show_stops_ahead,
				show_qr_button: cfg.show_qr_button
			},
			schema: [
				{
					name: "layout",
					disabled: cfg.entities.length < 2,
					selector: { select: {
						mode: "dropdown",
						options: [{
							value: "stacked",
							label: et("layout_stacked")
						}, {
							value: "tabs",
							label: et("layout_tabs")
						}]
					} }
				},
				{
					name: "max_departures",
					selector: { number: {
						min: 0,
						max: 20,
						step: 1,
						mode: "slider"
					} }
				},
				{
					name: "hide_header",
					selector: { boolean: {} }
				},
				{
					name: "show_hero_metric",
					selector: { boolean: {} }
				},
				{
					name: "show_departures",
					selector: { boolean: {} }
				},
				{
					name: "show_stops_ahead",
					selector: { boolean: {} }
				},
				{
					name: "show_qr_button",
					selector: { boolean: {} }
				}
			]
		})}
      ${this._renderTransferModes()}
      ${renderFormSection({
			...common,
			title: et("section_departure_row"),
			hint: et("section_departure_row_hint"),
			data: {
				show_platform: cfg.show_platform,
				show_accessibility: cfg.show_accessibility,
				accessibility_only: cfg.accessibility_only,
				show_cooling: cfg.show_cooling,
				show_type_icon: cfg.show_type_icon
			},
			schema: [
				{
					name: "show_platform",
					selector: { boolean: {} }
				},
				{
					name: "show_accessibility",
					selector: { boolean: {} }
				},
				{
					name: "accessibility_only",
					disabled: !cfg.show_accessibility,
					selector: { boolean: {} }
				},
				{
					name: "show_cooling",
					selector: { boolean: {} }
				},
				{
					name: "show_type_icon",
					selector: { boolean: {} }
				}
			]
		})}
      ${renderFormSection({
			...common,
			title: et("section_disruptions"),
			data: {
				show_traffic_info: cfg.show_traffic_info,
				show_elevator_info: cfg.show_elevator_info,
				show_delay: cfg.show_delay,
				show_delay_colors: cfg.show_delay_colors
			},
			schema: [
				{
					name: "show_traffic_info",
					selector: { boolean: {} }
				},
				{
					name: "show_elevator_info",
					selector: { boolean: {} }
				},
				{
					name: "show_delay",
					selector: { boolean: {} }
				},
				{
					name: "show_delay_colors",
					disabled: !cfg.show_delay,
					selector: { boolean: {} }
				}
			]
		})}
    `;
	}
	/** Which vehicle categories get a transfer chip in the stops-ahead trail.
	*
	*  A chip row rather than five `boolean` schema rows: five near-identical
	*  switches distinguish themselves only by their words, whereas a glyph
	*  reads at a glance — and the row visually rhymes with the chips it
	*  governs in the card. It reuses `.wl-chip`, the stop block's line-toggle
	*  idiom, deliberately WITHOUT a colour override: a category is not a line,
	*  and painting "Metro" in U1's red would assert something untrue. The
	*  glyph identifies, the accent fill carries state.
	*
	*  Bespoke rather than a `select` with `multiple: true` for the same reason
	*  the line colours are bespoke — this is a set, and ha-form's multi-select
	*  renders it as a dropdown of words. */
	_renderTransferModes() {
		const cfg = this._config;
		const { et } = this._i18n;
		const inert = !cfg.show_stops_ahead;
		const picked = new Set(cfg.stops_ahead_modes);
		return renderSection({
			title: et("section_transfers"),
			hint: et("section_transfers_hint")
		}, b`<div class="wl-group">
        <span class="wl-note">
          ${inert ? et("transfer_modes_requires") : et("transfer_modes_hint")}
        </span>
        <div class="wl-chips">
          ${TRANSFER_MODES.map((mode) => {
			const on = picked.has(mode);
			const label = et(TRANSFER_MODE_LABEL_KEYS[mode]);
			return b`<button
              type="button"
              class="wl-chip"
              aria-pressed=${on ? "true" : "false"}
              aria-disabled=${inert ? "true" : "false"}
              aria-label=${et(on ? "mode_shown_aria" : "mode_hidden_aria").replace("{mode}", label)}
              @click=${(ev) => {
				if (inert) {
					ev.preventDefault();
					return;
				}
				this._toggleTransferMode(mode);
			}}
            >
              <span class="wl-chip-mode"
                ><ha-icon icon=${TRANSFER_MODE_ICONS[mode]} aria-hidden="true"></ha-icon
              ></span>
              ${label}
            </button>`;
		})}
        </div>
      </div>`);
	}
	_toggleTransferMode(mode) {
		const cfg = this._config;
		if (!cfg) return;
		const next = cfg.stops_ahead_modes.includes(mode) ? cfg.stops_ahead_modes.filter((m) => m !== mode) : [...cfg.stops_ahead_modes, mode];
		this._patch({ stops_ahead_modes: next });
	}
	_renderMisc() {
		const cfg = this._config;
		const { et } = this._i18n;
		return b`
      ${this._renderColors()}
      ${renderFormSection({
			hass: this.hass,
			title: et("section_footer"),
			data: { hide_attribution: cfg.hide_attribution },
			schema: [{
				name: "hide_attribution",
				selector: { boolean: {} }
			}],
			computeLabel: this._computeLabel,
			computeHelper: this._computeHelper,
			onChange: (v) => this._patch(v)
		})}
    `;
	}
	/** Per-line colour overrides. Bespoke because this is a Record whose keys are
	*  discovered at runtime from the selected stops — exactly the residue
	*  ha-form is not meant to model. Only lines currently in the selection get a
	*  row; an override for a line no longer selected stays in the config
	*  untouched rather than being silently dropped. */
	_renderColors() {
		const cfg = this._config;
		const { et } = this._i18n;
		const eids = cfg.entities.map((s) => s.entity);
		const lines = collectLinesInSelection(this.hass, eids);
		const gtfs = mergeLineColorsMaps(this.hass, eids);
		return renderSection({
			title: et("section_colors"),
			hint: et("section_colors_hint")
		}, lines.length ? b`<div class="wl-group">
            <span class="wl-note">${et("colors_hint")}</span>
            ${lines.map((line) => {
			const palette = lineChipColors(line, cfg.line_colors, gtfs, colorSchemeOf(this.hass), "#888888");
			const current = palette.fill;
			const hex = current.startsWith("#") ? current : "#888888";
			const overridden = Boolean(cfg.line_colors[line.toUpperCase()]);
			const pick = et("pick_color_for_line").replace("{line}", line);
			return b`
                <div class="wl-color-row">
                  <span
                    class="wl-badge"
                    style=${o({
				background: current,
				...palette.ink ? { "--wl-chip-ink": palette.ink } : {}
			})}
                    aria-hidden="true"
                    >${line}</span
                  >
                  <label class="wl-color-field" title=${pick}>
                    <span
                      class="wl-swatch"
                      style=${o({ background: hex })}
                      aria-hidden="true"
                    ></span>
                    <span class="wl-color-hex">${hex.toUpperCase()}</span>
                    <input
                      type="color"
                      class="wl-color-input"
                      .value=${hex}
                      aria-label=${pick}
                      @input=${(ev) => this._setLineColor(line, ev.target.value)}
                      @change=${(ev) => this._setLineColor(line, ev.target.value)}
                    />
                  </label>
                  <button
                    type="button"
                    class="wl-icon-btn"
                    ?disabled=${!overridden}
                    aria-label=${et("reset_color_aria").replace("{line}", line)}
                    title=${et("reset_color")}
                    @click=${() => this._resetLineColor(line)}
                  >
                    <ha-icon icon="mdi:restore" aria-hidden="true"></ha-icon>
                  </button>
                </div>
              `;
		})}
          </div>` : b`<div class="wl-empty">
            <span class="wl-empty-title">${et("no_lines_title")}</span>
            <span class="wl-note">${et("colors_empty_hint")}</span>
          </div>`);
	}
	/** Both `@input` and `@change` are wired on purpose: `input` fires
	*  continuously while the user drags inside the OS picker, `change` once on
	*  commit. Without `input` the card preview only recolours after the picker
	*  closes, so the user cannot see the colour they are choosing. */
	_setLineColor(line, color) {
		if (!this._config) return;
		this._commit({
			...this._config,
			line_colors: {
				...this._config.line_colors,
				[line.toUpperCase()]: color
			}
		});
	}
	_resetLineColor(line) {
		if (!this._config) return;
		const line_colors = { ...this._config.line_colors };
		delete line_colors[line.toUpperCase()];
		this._commit({
			...this._config,
			line_colors
		});
	}
	static {
		this.styles = [editorTokens, editorStyles];
	}
};
__decorate([n$2({ attribute: false })], WienerLinienAustriaCardEditor.prototype, "hass", void 0);
__decorate([r$1()], WienerLinienAustriaCardEditor.prototype, "_config", void 0);
__decorate([r$1()], WienerLinienAustriaCardEditor.prototype, "_tab", void 0);
WienerLinienAustriaCardEditor = __decorate([t$2("wiener-linien-austria-card-editor")], WienerLinienAustriaCardEditor);

//#endregion
//#region src/wiener-linien-austria-card.ts
var _WienerLinienAustriaCard;
{
	const win = window;
	win.customCards = win.customCards ?? [];
	if (!win.customCards.some((c) => c.type === "wiener-linien-austria-card")) win.customCards.push({
		type: "wiener-linien-austria-card",
		name: "Wiener Linien Austria",
		description: pickerText("picker_modern"),
		preview: true,
		getEntitySuggestion: (hass, entityId) => {
			if (!entityId.startsWith("sensor.")) return null;
			if (hass?.entities?.[entityId]?.platform !== "wiener_linien_austria") return null;
			return { config: {
				type: "custom:wiener-linien-austria-card",
				entities: [entityId]
			} };
		}
	});
}
/** Space kept between a revealed tab and the strip's edge: the width of
*  the edge fade the scroll arrow sits in. Matches `--wl-tab-fade` in
*  card-styles.ts. */
const TAB_FADE_INSET_PX = 56;
function platformLabelKey(type) {
	if (type === "ptMetro" || type === "ptTrainS") return "platform_short_rail";
	return "platform_short_bus";
}
const _nightlineHourFormatters = /* @__PURE__ */ new Map();
function _nightlineHourFormatter(tz) {
	let fmt = _nightlineHourFormatters.get(tz);
	if (!fmt) {
		fmt = new Intl.DateTimeFormat("en-GB", {
			timeZone: tz,
			hour: "2-digit",
			minute: "2-digit",
			hour12: false
		});
		_nightlineHourFormatters.set(tz, fmt);
	}
	return fmt;
}
let WienerLinienAustriaCard = class WienerLinienAustriaCard extends i$3 {
	static {
		_WienerLinienAustriaCard = this;
	}
	constructor(..._args) {
		super(..._args);
		this._activeTab = 0;
		this._tabEdges = {
			start: false,
			end: false
		};
		this._tabResize = null;
		this._observedTabs = null;
		this._versionMismatch = null;
		this._expandedTraffic = /* @__PURE__ */ new Set();
		this._expandedElevator = /* @__PURE__ */ new Set();
		this._expandedRows = /* @__PURE__ */ new Set();
		this._expandedTransfers = /* @__PURE__ */ new Set();
		this._debugTraffic = [];
		this._debugElevator = [];
		this._qrOpenFor = null;
		this._devPaletteOpen = false;
		this._versionCheckDone = false;
		this._fallbackWarned = false;
		this._resolvedStopsMemo = null;
		this._nightlineHourMemo = null;
		this._measureTabs = () => {
			const tabs = this._observedTabs;
			if (!tabs) return;
			const next = tabEdges(tabs.scrollLeft, tabs.clientWidth, tabs.scrollWidth);
			if (next.start !== this._tabEdges.start || next.end !== this._tabEdges.end) this._tabEdges = next;
		};
		this._devTogglePalette = () => {
			this._devPaletteOpen = !this._devPaletteOpen;
		};
		this._devTrafficVariant = 0;
		this._devElevatorVariant = 0;
		this._devTestTraffic = () => {
			const stops = this._resolveStops();
			const pool = [];
			for (const s of stops) for (const d of this._attrs(s.entity).departures ?? []) if (d.line && d.towards) pool.push(d);
			const pick = this._randomFrom(pool);
			const line = pick?.line || "U?";
			const towards = pick?.towards || "Unbekannt";
			const now = /* @__PURE__ */ new Date();
			const shapes = _WienerLinienAustriaCard.DEV_TRAFFIC_SHAPES;
			const shape = shapes[this._devTrafficVariant % shapes.length];
			this._devTrafficVariant += 1;
			const html = shape.html(line, towards);
			this._debugTraffic = [...this._debugTraffic, {
				name: `DEBUG-T-${Date.now()}`,
				title: `${line}: ${shape.label}`,
				description: html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim(),
				description_html: html,
				location: "Debug-Stelle",
				related_lines: [line],
				time_start: (/* @__PURE__ */ new Date(now.getTime() - 18e5)).toISOString(),
				time_end: new Date(now.getTime() + 108e5).toISOString(),
				time_created: (/* @__PURE__ */ new Date(now.getTime() - 18e5)).toISOString(),
				time_last_update: now.toISOString(),
				status: "active"
			}];
		};
		this._devTestElevator = () => {
			const stops = this._resolveStops();
			const pick = this._randomFrom(stops);
			if (!pick) return;
			const attrs = this._attrs(pick.entity);
			const station = attrs.stop_name || pick.entity;
			const deps = attrs.departures ?? [];
			const sample = this._randomFrom(deps);
			const anyLine = sample?.line || "";
			const towards = sample?.towards || "Unbekannt";
			const now = /* @__PURE__ */ new Date();
			const shapes = [
				{
					description: `${anyLine || "U3"} Mittelbahnsteig - Zwischengeschoss Zugang ${station} - Ausgang ${station}`,
					reason: "Aufzug ist wegen Bauarbeiten bis 03.08.2026 außer Betrieb!"
				},
				{
					description: `${anyLine || "U6"} Bahnsteig Richtung ${towards} - Ausgang ${station}`,
					reason: "An der Instandsetzung wird bereits gearbeitet."
				},
				{
					description: `Ausgang ${station}`,
					reason: "Der Aufzug steht aus nicht näher bekannter Ursache still."
				}
			];
			const shape = shapes[this._devElevatorVariant % shapes.length];
			this._devElevatorVariant += 1;
			this._debugElevator = [...this._debugElevator, {
				__debug_entity: pick.entity,
				name: `DEBUG-E-${Date.now()}`,
				station,
				description: shape.description,
				reason: shape.reason,
				status: "außer Betrieb",
				related_lines: anyLine ? [anyLine] : [],
				time_start: (/* @__PURE__ */ new Date(now.getTime() - 27e5)).toISOString(),
				time_end: new Date(now.getTime() + 144e5).toISOString()
			}];
		};
		this._devClear = () => {
			this._debugTraffic = [];
			this._debugElevator = [];
			this._devPaletteOpen = false;
		};
	}
	setConfig(config) {
		if (!config || typeof config !== "object") throw new Error("wiener-linien-austria-card: config must be an object");
		const hasEntities = Array.isArray(config.entities);
		const hasEntity = typeof config.entity === "string";
		if (!hasEntities && !hasEntity) throw new Error("wiener-linien-austria-card: 'entities' (array) or legacy 'entity' (string) is required");
		const normalised = normaliseModernConfig(config);
		if ((Array.isArray(config.entities) ? config.entities.length : hasEntity ? 1 : 0) > 0 && normalised.entities.length === 0) throw new Error("wiener-linien-austria-card: every configured entity was rejected (must start with `sensor.`) — see browser console for per-entry details");
		this._config = normalised;
		this._expandedRows = /* @__PURE__ */ new Set();
		this._expandedTraffic = /* @__PURE__ */ new Set();
		this._expandedElevator = /* @__PURE__ */ new Set();
		this._expandedTransfers = /* @__PURE__ */ new Set();
		this._qrOpenFor = null;
		this._activeTab = 0;
		this._fallbackWarned = false;
		this._debugTraffic = [];
		this._debugElevator = [];
	}
	getCardSize() {
		const n = this._config?.entities.length ?? 1;
		return Math.min(12, 3 + n * 3);
	}
	getGridOptions() {
		return {
			columns: 12,
			rows: "auto",
			min_columns: 6,
			min_rows: 3
		};
	}
	static getConfigElement() {
		return document.createElement("wiener-linien-austria-card-editor");
	}
	static getStubConfig(hass) {
		const first = findWienerLinienEntities(hass)[0];
		return {
			entities: first ? [first] : [],
			max_departures: 6
		};
	}
	connectedCallback() {
		super.connectedCallback();
		registerWlFonts();
		if (!this._versionCheckDone && this.hass?.callWS) {
			this._versionCheckDone = true;
			this._checkCardVersion();
		}
	}
	willUpdate(changed) {
		this._resolvedStopsMemo = null;
		this._nightlineHourMemo = null;
		if (!this._config) return;
		if (changed.has("_config") || changed.has("hass")) {
			const stops = this._resolveStops();
			if (stops.length && this._activeTab >= stops.length) this._activeTab = 0;
			if (this._qrOpenFor) {
				if (!new Set(stops.map((s) => s.entity)).has(this._qrOpenFor)) this._qrOpenFor = null;
			}
		}
	}
	disconnectedCallback() {
		super.disconnectedCallback();
		this._tabResize?.disconnect();
		this._tabResize = null;
		this._observedTabs = null;
	}
	updated(changed) {
		this._syncTabStrip(changed);
		if (!changed.has("_qrOpenFor") && !changed.has("hass") && !changed.has("_config")) return;
		if (!this._qrOpenFor) return;
		const host = this.renderRoot.querySelector(".qr-panel.expanded .qr-canvas");
		if (!host) return;
		const wantText = host.getAttribute("data-qr-text") ?? "";
		const haveText = host.getAttribute("data-qr-rendered-for") ?? "";
		if (wantText && wantText !== haveText) {
			this._renderTintedQr(host);
			host.setAttribute("data-qr-rendered-for", wantText);
		}
	}
	/**
	* Render the QR tinted with the per-station accent colour, then
	* overlay the MOT (mode-of-transport) MDI icon at the centre in
	* the same accent on a small white plate. Uses ecLevel "H"
	* (≈30% damage tolerance) so the obscured centre stays scannable.
	*
	* Accent comes from the closest `.station` ancestor's computed
	* `--wl-accent` — same token the icon-tile, line-badge, and hero
	* tints already track, so the QR shares the colour identity of
	* the station it belongs to.
	*/
	_renderTintedQr(host) {
		const station = host.closest(".station");
		const accent = station ? getComputedStyle(station).getPropertyValue("--wl-accent").trim() || "#000" : "#000";
		while (host.firstChild) host.removeChild(host.firstChild);
		qr_creator_es6_min_default.render({
			text: host.getAttribute("data-qr-text") ?? "",
			radius: 0,
			ecLevel: "H",
			fill: accent,
			background: "#fff",
			size: 220
		}, host);
		const canvas = host.querySelector("canvas");
		if (!(canvas instanceof HTMLCanvasElement)) {
			console.error("[wiener-linien-austria-card] QR canvas unavailable");
			return;
		}
		const ctx = canvas.getContext("2d");
		if (!ctx) {
			console.error("[wiener-linien-austria-card] QR canvas unavailable");
			return;
		}
		const iconName = host.getAttribute("data-qr-icon") ?? "mdi:bus-stop";
		const iconPath = mdiPathForIcon(iconName);
		const cw = canvas.width;
		const ch = canvas.height;
		const iconSize = Math.round(cw * .22);
		const iconX = Math.round((cw - iconSize) / 2);
		const iconY = Math.round((ch - iconSize) / 2);
		const padding = Math.round(iconSize * .18);
		const plateX = iconX - padding;
		const plateY = iconY - padding;
		const plateSize = iconSize + padding * 2;
		const plateRadius = Math.round(iconSize * .2);
		ctx.fillStyle = "#fff";
		if (typeof ctx.roundRect === "function") {
			ctx.beginPath();
			ctx.roundRect(plateX, plateY, plateSize, plateSize, plateRadius);
			ctx.fill();
		} else ctx.fillRect(plateX, plateY, plateSize, plateSize);
		ctx.save();
		ctx.translate(iconX, iconY);
		ctx.scale(iconSize / 24, iconSize / 24);
		ctx.fillStyle = accent;
		ctx.fill(new Path2D(iconPath));
		ctx.restore();
	}
	shouldUpdate(changed) {
		if (!this._config) return false;
		if (changed.has("_config") || changed.has("_activeTab") || changed.has("_versionMismatch") || changed.has("_expandedTraffic") || changed.has("_expandedElevator") || changed.has("_expandedRows") || changed.has("_expandedTransfers") || changed.has("_qrOpenFor") || changed.has("_debugTraffic") || changed.has("_debugElevator")) return true;
		const prev = changed.get("hass");
		if (!prev || !this.hass) return true;
		return this._resolveStops().map((s) => s.entity).some((eid) => prev.states[eid] !== this.hass.states[eid]);
	}
	_lang() {
		return this.hass?.language?.startsWith("de") ? "de" : "en";
	}
	_t(key, replacements) {
		return translate(`modern.${key}`, { hassLanguage: this.hass?.language }, replacements);
	}
	async _checkCardVersion() {
		this._versionMismatch = await checkCardVersionWS(this.hass, "wiener_linien_austria/card_version", CARD_VERSION);
	}
	_resolveStops() {
		if (this._resolvedStopsMemo !== null) return this._resolvedStopsMemo;
		const result = this._computeResolvedStops();
		this._resolvedStopsMemo = result;
		return result;
	}
	_computeResolvedStops() {
		const picked = (this._config?.entities ?? []).filter((s) => this.hass?.states?.[s.entity]);
		if (picked.length) return picked;
		const first = findWienerLinienEntities(this.hass)[0];
		if (first) {
			if (!this._fallbackWarned && (this._config?.entities?.length ?? 0) > 0) {
				this._fallbackWarned = true;
				const requested = this._config?.entities.map((s) => s.entity).join(", ");
				console.warn(`[wiener-linien-austria-card] configured entity "${requested}" not in hass.states; falling back to "${first}"`);
			}
			return [{ entity: first }];
		}
		return [];
	}
	_attrs(entityId) {
		return this.hass?.states?.[entityId]?.attributes ?? {};
	}
	render() {
		if (!this._config) return A;
		if (!this.hass) return b`<ha-card><div class="wrap"></div></ha-card>`;
		const cfg = this._config;
		const stops = this._resolveStops();
		const useTabs = cfg.layout === "tabs" && stops.length >= 2;
		const attribution = cfg.hide_attribution ? "" : stops.map((s) => this._attrs(s.entity).attribution).find((v) => typeof v === "string" && v.length > 0) || "Datenquelle: Wiener Linien (data.wien.gv.at), CC BY 4.0";
		return b`
      <ha-card>
        ${useTabs ? this._renderTabs(stops, this._activeTab) : A}
        <div class="wrap">
          ${renderVersionBanner(this._versionMismatch, (k) => this._t(k))}
          ${cfg.show_traffic_info ? this._renderTrafficBanner(this._bannerStops(stops, useTabs)) : A}
          ${this._renderBody(stops, useTabs)}
          ${this._renderFooter(attribution)}
        </div>
      </ha-card>
    `;
	}
	_renderFooter(attribution) {
		const dev = this._isDevMode();
		if (!attribution && !dev) return A;
		return b`
      ${attribution ? b`<div class="foot">
            <span class="timestamp">${attribution}</span>
          </div>` : A}
      ${dev ? this._renderDevModePanel() : A}
    `;
	}
	/** Which stops the alert banner speaks for.
	*
	*  The banner sits above the body, outside the tab panel, so in `tabs`
	*  layout it would otherwise pool the alerts of every configured stop
	*  and show them under whichever tab is open — a Taubstummengasse
	*  disruption announced on the Westbahnhof tab. Scope it to the stop
	*  the reader is actually looking at. In `stacked` layout every stop is
	*  on screen at once, so the pooled banner is right as it stands.
	*/
	_bannerStops(stops, useTabs) {
		if (!useTabs || !stops.length) return stops;
		return [stops[this._activeTab] ?? stops[0]];
	}
	_renderBody(stops, useTabs) {
		if (!stops.length) return this._renderEmpty();
		if (useTabs) {
			const active = stops[this._activeTab] ?? stops[0];
			return b`${this._renderStop(active, this._activeTab)}`;
		}
		return b`${stops.map((s) => this._renderStop(s))}`;
	}
	_renderEmpty() {
		const key = findWienerLinienEntities(this.hass).length ? "no_entities_picked" : "no_entities_available";
		return b`<div class="empty" role="status" aria-live="polite">${this._t(key)}</div>`;
	}
	_renderTabs(stops, activeIndex) {
		const edges = this._tabEdges;
		const arrow = (side) => b`<button
      type="button"
      class=${e$1({
			"tab-scroll": true,
			[`tab-scroll--${side}`]: true,
			visible: edges[side]
		})}
      tabindex="-1"
      aria-hidden="true"
      @click=${() => this._scrollTabs(side)}
    >
      <ha-icon icon=${side === "start" ? "mdi:chevron-left" : "mdi:chevron-right"}></ha-icon>
    </button>`;
		return b`
      <div class="tabbar">
        <div
          class=${e$1({
			"tabs-viewport": true,
			"fade-start": edges.start,
			"fade-end": edges.end
		})}
        >
        ${arrow("start")}
        <div class="tabs" role="tablist" @scroll=${this._measureTabs}>
        ${stops.map((s, i) => {
			const attrs = this._attrs(s.entity);
			const label = attrs.stop_name || attrs.friendly_name || s.entity;
			const classes = {
				tab: true,
				active: i === activeIndex
			};
			const selected = i === activeIndex;
			return b`<button
            type="button"
            role="tab"
            id=${`wl-tab-${i}`}
            aria-controls=${`wl-tabpanel-${i}`}
            class=${e$1(classes)}
            aria-selected=${selected ? "true" : "false"}
            tabindex=${selected ? "0" : "-1"}
            title=${label}
            @click=${() => this._setActiveTab(i)}
            @keydown=${(ev) => this._onTabKeydown(ev, i, stops.length)}
          >${label}</button>`;
		})}
        </div>
        ${arrow("end")}
        </div>
        ${this._renderTabActions(stops, activeIndex)}
      </div>
    `;
	}
	/** Tab-strip home for the QR + map actions.
	*
	*  Only used when `hide_header` is set — otherwise the header owns
	*  them and rendering here too would duplicate the pair. The strip is
	*  a card-level sibling of the body, so unlike the header path the
	*  active stop's geo data has to be resolved here rather than
	*  inherited from `_renderStop`. Both helpers are pure functions of
	*  (title, lat, lon), so this stays a derivation, not a second source
	*  of truth.
	*
	*  The slot keeps a fixed width whenever the config asks for a QR
	*  button: a stop with no coordinates yields `geoUri === null` and
	*  drops the button, and without the reservation the tabs
	*  (`flex: 1 0 auto`) would visibly re-flow as you switch between a
	*  stop that has coordinates and one that doesn't. */
	_renderTabActions(stops, activeIndex) {
		if (!this._config.hide_header) return A;
		const active = stops[activeIndex] ?? stops[0];
		if (!active) return A;
		const attrs = this._attrs(active.entity);
		const title = attrs.stop_name || attrs.friendly_name || active.entity;
		const mapUrl = stopMapUrl(title, attrs.latitude, attrs.longitude);
		const geoUri = this._stopGeoUri(title, attrs.latitude, attrs.longitude);
		const qrConfigured = this._config.show_qr_button !== false;
		const showQrButton = qrConfigured && geoUri !== null;
		if (!mapUrl && !showQrButton) return A;
		return b`<div
      class=${e$1({
			"tab-actions": true,
			reserved: qrConfigured
		})}
    >
      ${this._renderStopActions(active.entity, title, mapUrl, showQrButton)}
    </div>`;
	}
	_setActiveTab(i) {
		if (!Number.isFinite(i)) return;
		const stops = this._resolveStops();
		const clamped = Math.max(0, Math.min(stops.length - 1, Math.floor(i)));
		if (clamped === this._activeTab) return;
		const prevEntity = stops[this._activeTab]?.entity;
		const nextEntity = stops[clamped]?.entity;
		if (prevEntity && nextEntity && this._qrOpenFor === prevEntity) this._qrOpenFor = nextEntity;
		this._activeTab = clamped;
	}
	/** Keep the tab strip's edge state current and the active tab in view.
	*
	*  Runs after every render. The strip element can come and go (a
	*  config switching layouts, the stop list dropping below two), so the
	*  observer follows whichever `.tabs` is in the DOM now. Measuring on
	*  each render as well catches a stop name changing length, which
	*  changes the content width without resizing the strip itself. */
	_syncTabStrip(changed) {
		const tabs = this.renderRoot.querySelector(".tabs");
		const appeared = tabs !== this._observedTabs;
		if (appeared) {
			this._tabResize?.disconnect();
			this._observedTabs = tabs;
			if (tabs && typeof ResizeObserver !== "undefined") {
				this._tabResize ??= new ResizeObserver(() => this._measureTabs());
				this._tabResize.observe(tabs);
			}
		}
		if (!tabs) return;
		this._measureTabs();
		if (appeared || changed.has("_activeTab")) this._revealActiveTab(tabs, !appeared);
	}
	/** Scroll the strip just far enough to show the active tab clear of
	*  the edge fade. Sets `scrollLeft` directly rather than calling
	*  `scrollIntoView`, which would also scroll the dashboard to bring
	*  the card on screen: on first render the card may well be below
	*  the fold, and the page must not jump to it. */
	_revealActiveTab(tabs, smooth) {
		if (getComputedStyle(tabs).direction === "rtl") return;
		const tab = tabs.querySelectorAll("[role=\"tab\"]")[this._activeTab];
		if (!tab) return;
		const target = revealOffset(tab.offsetLeft, tab.offsetWidth, tabs.scrollLeft, tabs.clientWidth, tabs.scrollWidth, TAB_FADE_INSET_PX);
		if (target === null) return;
		tabs.scrollTo({
			left: target,
			behavior: smooth ? this._scrollBehavior() : "auto"
		});
	}
	_scrollTabs(side) {
		const tabs = this._observedTabs;
		if (!tabs) return;
		const rtl = getComputedStyle(tabs).direction === "rtl";
		const toStart = side === "start" !== rtl;
		const step = arrowStep(tabs.clientWidth);
		tabs.scrollBy({
			left: toStart ? -step : step,
			behavior: this._scrollBehavior()
		});
	}
	_scrollBehavior() {
		return window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
	}
	_onTabKeydown(ev, index, count) {
		let next = index;
		switch (ev.key) {
			case "ArrowRight":
				next = (index + 1) % count;
				break;
			case "ArrowLeft":
				next = (index - 1 + count) % count;
				break;
			case "Home":
				next = 0;
				break;
			case "End":
				next = count - 1;
				break;
			default: return;
		}
		ev.preventDefault();
		this._setActiveTab(next);
		this.updateComplete.then(() => {
			(this.shadowRoot?.querySelectorAll(".tabs [role=\"tab\"]"))?.[next]?.focus();
		}).catch((err) => {
			console.warn("[wiener-linien-austria-card] tab focus skipped", err);
		});
	}
	/** The `<header>` block of the stop section: icon tile, title +
	*  subtitle, action buttons (QR + open-in-maps). Self-contained
	*  except for the locals it shares with the hero block (heroLead,
	*  headerIcon) — those stay computed in `_renderStop`. */
	_renderStopHeader(stopCfg, apiName, title, heroLead, headerIcon, mapUrl, showQrButton) {
		return b`<header class="head">
      <span class="icon-tile" aria-hidden="true">
        <ha-icon icon=${headerIcon}></ha-icon>
      </span>
      <div class="title-block">
        <h3 class="title">${deText(apiName, stopCfg.entity)}</h3>
        ${heroLead?.line ? b`<p class="subtitle">${deText(heroLead.towards)}</p>` : A}
      </div>
      ${mapUrl || showQrButton ? b`<div class="head-actions">
            ${this._renderStopActions(stopCfg.entity, title, mapUrl, showQrButton)}
          </div>` : A}
    </header>`;
	}
	/** The QR toggle + open-in-maps pair, without a container — the two
	*  call sites bring their own. Normally they sit in `<header>`; when
	*  `hide_header` is set they move to the tab strip instead, which is
	*  why this takes a bare entity id rather than the stop config. */
	_renderStopActions(entity, title, mapUrl, showQrButton) {
		const openInMaps = this._t("open_in_maps");
		const qrOpenLabel = this._t("qr_open");
		return b`
      ${showQrButton ? b`<button
            type="button"
            class=${e$1({
			"icon-action": true,
			"qr-toggle": true,
			expanded: this._qrOpenFor === entity
		})}
            title=${qrOpenLabel}
            aria-label="${qrOpenLabel}: ${title}"
            aria-expanded=${this._qrOpenFor === entity ? "true" : "false"}
            aria-controls="wl-qr-${safeDomId(entity)}"
            @click=${() => this._toggleQrFor(entity)}
          ><ha-icon icon="mdi:qrcode" aria-hidden="true"></ha-icon></button>` : A}
      ${mapUrl ? b`<a
            class="icon-action"
            href=${mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            title=${openInMaps}
            aria-label="${openInMaps}: ${title}"
          ><ha-icon icon="mdi:map-marker" aria-hidden="true"></ha-icon></a>` : A}
    `;
	}
	/** The hero block: big countdown number + per-entry chip rows. The
	*  hero panels (stops_ahead detail) are interleaved with the entries
	*  via `_renderHeroPanelForEntry`. */
	_renderStopHero(stopCfg, heroGroup, heroValue, heroUnit) {
		return b`<div class="hero-host">
      <div class="hero">
        <div class="hero-time" aria-live="polite" aria-atomic="true">
          <span class="hero-min">${heroValue}</span>
          ${heroUnit ? b`<span class="hero-unit">${heroUnit}</span>` : A}
        </div>
        ${heroGroup.flatMap((d) => [this._renderHeroEntry(d, stopCfg.entity), this._renderHeroPanelForEntry(d, stopCfg.entity)])}
      </div>
    </div>`;
	}
	_renderStop(stopCfg, tabIndex) {
		const attrs = this._attrs(stopCfg.entity);
		const apiName = attrs.stop_name || attrs.friendly_name;
		const title = apiName || stopCfg.entity;
		const departures = Array.isArray(attrs.departures) ? attrs.departures : [];
		const filtered = filterDepartures(departures, {
			...stopCfg,
			accessibility_only: this._config.accessibility_only
		});
		const realElevator = Array.isArray(attrs.elevator_info) ? attrs.elevator_info : [];
		const debugElevator = this._debugElevator.filter((e) => e.__debug_entity === stopCfg.entity);
		const elevatorInfos = [...realElevator, ...debugElevator];
		const showElevator = this._config.show_elevator_info && elevatorInfos.length > 0;
		const mapUrl = stopMapUrl(title, attrs.latitude, attrs.longitude);
		const geoUri = this._stopGeoUri(title, attrs.latitude, attrs.longitude);
		const showQrButton = this._config.show_qr_button !== false && geoUri !== null;
		const hasQrToggle = !this._config.hide_header || tabIndex !== void 0;
		const { heroGroup, heroLead, rows } = splitHeroAndRows(filtered, {
			showHeroMetric: this._config.show_hero_metric,
			maxDepartures: this._config.max_departures
		});
		const staleDropped = typeof attrs.stale_departures === "number" ? attrs.stale_departures : 0;
		const lineColors = lineColorsFor(this.hass, stopCfg.entity);
		const accent = heroLead ? colorForLine(heroLead.line || "", this._config.line_colors, lineColors) : "var(--primary-color)";
		const headerIcon = headerIconForType(heroLead?.type);
		const cd = heroLead && Number.isFinite(heroLead.countdown) ? heroLead.countdown : null;
		const heroValue = cd === null ? "—" : cd <= 0 ? this._t("now") : String(cd);
		const heroUnit = cd !== null && cd > 0 ? this._t("min") : "";
		const accentText = accentTextColor(accent, this._colorScheme());
		const isPanel = tabIndex !== void 0;
		return b`
      <section
        class="station"
        style="--wl-accent: ${accent};${accentText ? ` --wl-accent-text: ${accentText};` : ""}"
        id=${isPanel ? `wl-tabpanel-${tabIndex}` : A}
        role=${isPanel ? "tabpanel" : A}
        aria-labelledby=${isPanel ? `wl-tab-${tabIndex}` : A}
        tabindex=${isPanel ? "0" : A}
        aria-label=${title}
      >
        ${this._config.hide_header ? A : this._renderStopHeader(stopCfg, apiName, title, heroLead, headerIcon, mapUrl, showQrButton)}
        ${showQrButton && geoUri && hasQrToggle ? this._renderQrPanel(stopCfg.entity, title, geoUri, headerIcon, this._qrOpenFor === stopCfg.entity) : A}

        ${this._config.show_hero_metric && heroLead ? this._renderStopHero(stopCfg, heroGroup, heroValue, heroUnit) : A}
        ${showElevator ? this._renderElevatorDetails(elevatorInfos) : A}
        ${this._config.show_departures && this._config.max_departures > 0 ? rows.length ? b`${staleDropped > 0 ? b`<div class="stale-note" role="status" aria-live="polite">
                      ${this._t("stale_feed_partial")}
                    </div>` : A}
                <ul class="dep-list" role="list" aria-label=${this._t("departures_list")}>
                  ${rows.map((d, i) => this._renderRow(d, stopCfg.entity, i))}
                </ul>` : this._renderEmptyState(attrs, staleDropped) : A}
      </section>
    `;
	}
	/** Empty departure board, with the reason. Three distinct causes, and
	*  conflating them is what made a frozen upstream feed read as a normal
	*  end-of-service board for two and a half days (issue #103):
	*
	*  - stale feed — the coordinator dropped every record because upstream
	*    stopped advancing their planned times. Named explicitly, because
	*    the user's first instinct is otherwise that the card is broken.
	*  - end of service — the API answered (server_time present) and the
	*    stop genuinely has nothing left tonight.
	*  - no data — no successful poll yet.
	*/
	_renderEmptyState(attrs, staleDropped) {
		if (staleDropped > 0) {
			const frozenAt = attrs.stale_since ? formatTime(attrs.stale_since, this._lang()) : "";
			return b`<div class="empty stale" role="status" aria-live="polite">
        <div class="empty-title">${this._t("stale_feed")}</div>
        <div class="empty-detail">${this._t("stale_feed_detail")}</div>
        ${frozenAt ? b`<div class="empty-meta">
              ${this._t("stale_feed_since", { time: frozenAt })}
            </div>` : A}
      </div>`;
		}
		return b`<div class="empty" role="status" aria-live="polite">
      ${this._t(attrs.server_time ? "betriebsschluss" : "no_data")}
    </div>`;
	}
	_renderElevatorDetails(infos) {
		return b`
      <div class="alert-list">
        ${infos.map((e) => this._renderElevatorDetail(e))}
      </div>
    `;
	}
	_renderElevatorDetail(e) {
		const location = e.description || e.station || "";
		const path = splitLocationPath(location);
		const reason = e.reason || "";
		const reasonIcon = iconForElevatorReason(reason);
		const until = formatTime(e.time_end, this._lang());
		const hasDetail = Boolean(reason || until);
		const expanded = this._expandedElevator.has(e.name);
		return b`
      <div
        class=${e$1({
			alert: true,
			expanded,
			"no-detail": !hasDetail
		})}
        role=${hasDetail ? "button" : "group"}
        tabindex=${hasDetail ? "0" : "-1"}
        aria-expanded=${hasDetail ? expanded ? "true" : "false" : A}
        aria-label=${location}
        @click=${() => hasDetail && this._toggleElevator(e.name)}
        @keydown=${(ev) => this._onExpanderKeydown(ev, hasDetail, () => this._toggleElevator(e.name))}
      >
        <ha-icon icon="mdi:elevator-passenger-off" aria-hidden="true"></ha-icon>
        <div class="alert-body">
          <div class="alert-summary">
            <div class="alert-title">
              <span lang="de" class="lift-path"
                >${path.map((seg, i) => b`${i ? b`<span class="lift-path-sep" aria-hidden="true">›</span>` : A}<span>${seg}</span>`)}</span
              >
            </div>
          </div>
          ${hasDetail ? b`<div class="alert-detail">
                <div class="alert-detail-inner">
                  ${reason ? b`<div class="alert-desc lift-reason">
                        <ha-icon icon=${reasonIcon} aria-hidden="true"></ha-icon>
                        <span lang="de">${reason}</span>
                      </div>` : A}
                  ${until ? b`<div class="alert-meta">
                        <span>${this._t("elevator_until")} ${until}</span>
                      </div>` : A}
                </div>
              </div>` : A}
        </div>
        ${hasDetail ? b`<ha-icon class="alert-chevron" icon="mdi:chevron-down" aria-hidden="true"></ha-icon>` : A}
      </div>
    `;
	}
	_toggleElevator(name) {
		this._expandedElevator = toggleInSet(this._expandedElevator, name);
	}
	_onExpanderKeydown(ev, hasDetail, activate) {
		if (!hasDetail) return;
		if (ev.key !== "Enter" && ev.key !== " ") return;
		ev.preventDefault();
		activate();
	}
	_renderTrafficBanner(stops) {
		const seen = /* @__PURE__ */ new Set();
		const items = [];
		for (const s of stops) for (const t of this._attrs(s.entity).traffic_info ?? []) {
			if (seen.has(t.name)) continue;
			seen.add(t.name);
			items.push(t);
		}
		for (const t of this._debugTraffic) {
			if (seen.has(t.name)) continue;
			seen.add(t.name);
			items.push(t);
		}
		if (!items.length) return A;
		const lineColors = mergeLineColorsMaps(this.hass, this._config.entities.map((s) => s.entity));
		return b`
      <div class="alert-list">
        ${items.map((t) => this._renderTrafficItem(t, lineColors))}
      </div>
    `;
	}
	/** Lay out a parsed disruption notice: per-line headings, prose, then the
	*  labelled facts as a definition list.
	*
	*  Everything here is a plain Lit text binding — upstream text is escaped
	*  by the template, never interpreted as markup. `lang="de"` because the
	*  OGD feed publishes German only, whatever locale the card runs in;
	*  without it a screen reader in an English UI reads street names with
	*  English phonetics. */
	_renderTrafficNotice(notice) {
		const blocks = notice.blocks.reduce((n, b) => b.kind === "heading" ? n + 1 : n, 0) > 1 ? notice.blocks : notice.blocks.filter((b) => b.kind !== "heading");
		return b`
      <div class="alert-desc" lang="de">
        ${blocks.map((b$2) => b$2.kind === "heading" ? b`<p class="alert-desc-heading">${b$2.text}</p>` : b`<p>${b$2.text}</p>`)}
        ${notice.facts.length ? b`<dl class="alert-facts">
              ${notice.facts.map((f) => b`<div class="alert-fact">
                  <dt>
                    <ha-icon icon=${f.icon} aria-hidden="true"></ha-icon>${f.label}
                  </dt>
                  <dd>${f.value}</dd>
                </div>`)}
            </dl>` : A}
      </div>
    `;
	}
	_renderTrafficItem(t, lineColors) {
		const overrides = this._config.line_colors;
		const related = Array.isArray(t.related_lines) ? t.related_lines : [];
		const inferred = Array.isArray(t.inferred_lines) ? t.inferred_lines : [];
		const lines = related.length ? related : inferred;
		const descSource = t.description_html || t.description || "";
		const notice = parseTrafficNotice(descSource);
		const hasNotice = notice.blocks.length > 0 || notice.facts.length > 0;
		const until = formatTime(t.time_end, this._lang());
		const updatedRaw = formatTime(t.time_last_update, this._lang());
		const created = formatTime(t.time_created, this._lang());
		const updated = updatedRaw && updatedRaw !== created ? updatedRaw : "";
		const hasMeta = Boolean(t.location || until || updated);
		const hasDetail = Boolean(hasNotice || hasMeta);
		const expanded = this._expandedTraffic.has(t.name);
		const classes = {
			alert: true,
			expanded,
			"no-detail": !hasDetail
		};
		const trafficAriaLabel = t.title || this._t("traffic_label");
		return b`
      <div
        class=${e$1(classes)}
        role=${hasDetail ? "button" : "group"}
        tabindex=${hasDetail ? "0" : "-1"}
        aria-expanded=${hasDetail ? expanded ? "true" : "false" : A}
        aria-label=${trafficAriaLabel}
        @click=${() => hasDetail && this._toggleTraffic(t.name)}
        @keydown=${(ev) => this._onExpanderKeydown(ev, hasDetail, () => this._toggleTraffic(t.name))}
      >
        <ha-icon icon="mdi:alert-octagon" aria-hidden="true"></ha-icon>
        <div class="alert-body">
          <div class="alert-summary">
            ${lines.length ? b`<div class="alert-lines">
                  ${lines.map((l) => b`<span
                      class="alert-line-badge"
                      style=${o(chipPalette(l, overrides, lineColors))}
                    >${l}</span>`)}
                </div>` : A}
            <!-- The badges above already name the lines, so the title drops
                 the line list it repeats (see trimTitleLinePrefix). -->
            <div class="alert-title">
              ${t.title ? deText(trimTitleLinePrefix(t.title, lines)) : this._t("traffic_label")}
            </div>
          </div>
          ${hasDetail ? b`<div class="alert-detail">
                <div class="alert-detail-inner">
                  ${hasNotice ? this._renderTrafficNotice(notice) : A}
                  ${hasMeta ? b`<div class="alert-meta">
                        ${t.location ? b`<span class="alert-location-chip">
                              <ha-icon icon="mdi:map-marker" aria-hidden="true"></ha-icon>${deText(t.location)}
                            </span>` : A}
                        ${until ? b`<span>${this._t("traffic_until")} ${until}</span>` : A}
                        ${updated ? b`<span>${this._t("traffic_updated")} ${updated}</span>` : A}
                      </div>` : A}
                </div>
              </div>` : A}
        </div>
        ${hasDetail ? b`<ha-icon class="alert-chevron" icon="mdi:chevron-down" aria-hidden="true"></ha-icon>` : A}
      </div>
    `;
	}
	_toggleTraffic(name) {
		this._expandedTraffic = toggleInSet(this._expandedTraffic, name);
	}
	/** Resolve the expand-to-show-stops_ahead state for a departure rendered
	*  either in the hero block or in the row list. Both surfaces share the
	*  same `rowKey`, so opening the panel from one leaves the same panel
	*  open on the other when both currently surface the same departure. */
	_expandState(d, entityId, kind) {
		const hasStopsAhead = shouldShowStopsAhead(this._config.show_stops_ahead, d);
		const rowKey = this._rowKey(d, entityId);
		const expanded = hasStopsAhead && this._expandedRows.has(rowKey);
		const panelId = this._panelId(d, entityId, kind);
		const ariaLabelKey = expanded ? "stops_ahead_aria_hide" : "stops_ahead_aria_show";
		return {
			hasStopsAhead,
			rowKey,
			expanded,
			panelId,
			ariaLabel: hasStopsAhead ? this._t(ariaLabelKey, {
				line: d.line || "?",
				towards: d.towards || ""
			}) : ""
		};
	}
	/** The shared `<ol>` body rendered inside both the hero detail panel
	*  and the row detail panel. Wrappers (`<div class="hero-detail">` /
	*  `<li class="dep-row-detail">`) differ because each lives in a
	*  different container, but the inner stops list is identical. */
	_renderStopsAheadInner(stops, currentLine, rowKey, entityId) {
		const overrides = this._config.line_colors;
		const lineColors = lineColorsFor(this.hass, entityId);
		return b`
      <ol
        class="stops-ahead"
        style=${o({ "--stops-ahead-line": colorForLine(currentLine, overrides, lineColors) })}
      >
        ${stops.map((s, idx) => this._renderStopAhead(s, idx, rowKey, overrides, lineColors))}
      </ol>
    `;
	}
	/**
	* Render one hero-entry row (line badge + direction + optional
	* platform pill + optional wheelchair pill). Used inside the
	* hero-meta column; one entry per departure in the hero group.
	*/
	_renderHeroEntry(d, entityId) {
		const accentLine = d.line || "";
		const accentStyle = chipPalette(accentLine, this._config.line_colors, lineColorsFor(this.hass, entityId));
		const typeIcon = this._config.show_type_icon ? lineTypeIcon(d.type) : null;
		const { hasStopsAhead, rowKey, expanded, panelId, ariaLabel } = this._expandState(d, entityId, "hero");
		const entryClasses = {
			"hero-entry": true,
			expandable: hasStopsAhead,
			expanded
		};
		const line = d.line || "?";
		return b`
      <div
        class=${e$1(entryClasses)}
        style=${hasStopsAhead ? `--stops-ahead-line: ${accentStyle.background};` : A}
        role=${hasStopsAhead ? "button" : A}
        tabindex=${hasStopsAhead ? "0" : A}
        aria-expanded=${hasStopsAhead ? expanded ? "true" : "false" : A}
        aria-controls=${hasStopsAhead ? panelId : A}
        aria-label=${hasStopsAhead ? ariaLabel : A}
        @click=${() => hasStopsAhead && this._toggleRow(rowKey)}
        @keydown=${(ev) => this._onExpanderKeydown(ev, hasStopsAhead, () => this._toggleRow(rowKey))}
      >
        <span
          class="line-badge"
          style=${o(accentStyle)}
        >${line}</span>
        ${typeIcon ? b`<ha-icon
              class="type-icon"
              icon=${typeIcon}
              aria-hidden="true"
            ></ha-icon>` : A}
        <span class="hero-direction">${deText(d.towards)}</span>
        ${this._renderHeroBadges(d)}
        ${hasStopsAhead ? b`<ha-icon
              class="hero-chevron"
              icon="mdi:chevron-down"
              aria-hidden="true"
            ></ha-icon>` : A}
      </div>
    `;
	}
	/** The pills after a hero entry's direction: platform, timetable-only,
	*  step-free and air-conditioned, each only when it applies and (for the
	*  last two) the user turned it on. */
	_renderHeroBadges(d) {
		const cfg = this._config;
		const platform = cfg.show_platform && d.platform ? String(d.platform) : null;
		const flag = (cls, title, icon) => b`<span
      class=${cls}
      role="img"
      aria-label=${title}
      title=${title}
    >
      <ha-icon icon=${icon} aria-hidden="true"></ha-icon>
    </span>`;
		return b`
      ${platform ? b`<span class="hero-platform"
            >${this._t(platformLabelKey(d.type))} ${platform}</span
          >` : A}
      ${d.timetable ? b`<span class="hero-timetable" title=${this._t("timetable_title")}>
            <ha-icon icon="mdi:calendar-clock" aria-hidden="true"></ha-icon>
            ${this._t("timetable_only")}
          </span>` : A}
      ${d.barrier_free && cfg.show_accessibility ? flag("hero-a11y", this._t("barrier_free_title"), "mdi:wheelchair-accessibility") : A}
      ${d.cooling && cfg.show_cooling ? flag("hero-cooling", this._t("cooling_title"), "mdi:snowflake") : A}
    `;
	}
	_renderHeroPanelForEntry(d, entityId) {
		const { hasStopsAhead, rowKey, expanded, panelId } = this._expandState(d, entityId, "hero");
		if (!hasStopsAhead) return A;
		return this._renderStopsAheadPanel("hero", d.stops_ahead, panelId, expanded, d.line || "?", rowKey, entityId);
	}
	/**
	* The expandable stops-ahead panel, in both places it appears.
	*
	* The hero panel is a `<div>` and the row panel a `<li>` (the row list
	* is a `<ul>`, so the panel has to be a list item to stay valid) — that
	* is the ONLY difference, and it is why this isn't a single template.
	* Everything else, including the ARIA wiring, is computed once above
	* the branch: the two used to be separate methods, which is how an
	* accessibility or expand-state fix could land on one panel and quietly
	* miss the other.
	*/
	_renderStopsAheadPanel(variant, stops, panelId, expanded, currentLine, rowKey, entityId) {
		const base = variant === "hero" ? "hero-detail" : "dep-row-detail";
		const cls = e$1({
			[base]: true,
			expanded
		});
		const hidden = expanded ? "false" : "true";
		const body = b`
      <div class="${base}-inner">
        ${this._renderStopsAheadInner(stops, currentLine, rowKey, entityId)}
      </div>
    `;
		return variant === "hero" ? b`<div
          class=${cls}
          id=${panelId}
          role="region"
          aria-hidden=${hidden}
        >
          ${body}
        </div>` : b`<li class=${cls} id=${panelId} role="region" aria-hidden=${hidden}>
          ${body}
        </li>`;
	}
	/**
	* Scheme polarity for `--wl-accent-text` (see utils/color.ts). Follows
	* HA's own theme rather than light-dark() / prefers-color-scheme, both
	* of which read the OS and would pick the wrong branch for a dark HA
	* theme on a light-mode desktop — same call the flap card makes for
	* .flap--light. Tri-state on purpose: `undefined` before themes have
	* loaded yields no token, so the hueless `:host` fallback stands
	* instead of us guessing a polarity.
	*/
	_colorScheme() {
		return colorSchemeOf(this.hass);
	}
	/**
	* Accent-as-text colour for one departure row's OWN line.
	*
	* `.station` sets `--wl-accent-text` from the hero lead, and every row
	* inherits it — so a row at Jetzt painted the hero line's colour rather
	* than its own. Invisible until two lines are at Jetzt at once, where
	* both countdowns came out the same hue.
	*
	* Returns null when the polarity isn't known yet — there the station
	* leaves the token unset too, so the hueless `:host` default already
	* stands for every row. An accent the clamp can't resolve (the neutral
	* `var(--primary-color)`) falls back to that same default explicitly:
	* "unset" would mean inheriting the hero's hue, which is the bug.
	*/
	_rowAccentText(accent) {
		const scheme = this._colorScheme();
		if (scheme === void 0) return null;
		return accentTextColor(accent, scheme) ?? "var(--primary-text-color)";
	}
	_renderRow(d, entityId, rowIndex = 0) {
		const overrides = this._config.line_colors;
		const lineColors = lineColorsFor(this.hass, entityId);
		const line = d.line || "?";
		const badgeStyle = chipPalette(line, overrides, lineColors);
		const { countdown: cd, signedDelay, cdState, hasFlags, platform: rowPlatform } = deriveRowState(d, {
			showDelayColors: this._config.show_delay_colors,
			showAccessibility: this._config.show_accessibility,
			showCooling: this._config.show_cooling,
			showPlatform: this._config.show_platform
		});
		const showA11y = this._config.show_accessibility;
		const showCooling = this._config.show_cooling;
		const cdLabel = cd === null ? "—" : cd <= 0 ? this._t("now") : `${cd} ${this._t("min")}`;
		const delayText = this._config.show_delay && signedDelay !== null && signedDelay >= 1 ? signedDelay === 1 ? this._t("delay_singular") : this._t("delay_plural", { n: signedDelay }) : "";
		const nowColor = cdState === "now" ? this._rowAccentText(badgeStyle.background) : null;
		const typeIcon = this._config.show_type_icon ? lineTypeIcon(d.type) : null;
		const { hasStopsAhead, rowKey, expanded, panelId, ariaLabel } = this._expandState(d, entityId, "row");
		const rowTpl = b`
      <li
        class=${e$1({
			"dep-row": true,
			expandable: hasStopsAhead,
			expanded
		})}
        style=${`--row-i: ${rowIndex};${nowColor ? ` --wl-accent-text: ${nowColor};` : ""}${hasStopsAhead ? ` --stops-ahead-line: ${badgeStyle.background};` : ""}`}
        role=${hasStopsAhead ? "button" : A}
        tabindex=${hasStopsAhead ? "0" : A}
        aria-expanded=${hasStopsAhead ? expanded ? "true" : "false" : A}
        aria-controls=${hasStopsAhead ? panelId : A}
        aria-label=${hasStopsAhead ? ariaLabel : A}
        @click=${() => hasStopsAhead && this._toggleRow(rowKey)}
        @keydown=${(ev) => this._onExpanderKeydown(ev, hasStopsAhead, () => this._toggleRow(rowKey))}
      >
        <div class="line-badge" style=${o(badgeStyle)}>${line}</div>
        <div class="towards">
          ${typeIcon ? b`<ha-icon class="type-icon" icon=${typeIcon} aria-hidden="true"></ha-icon>` : A}
          <div class="towards-rows">
            <span class="towards-name">${deText(d.towards)}</span>${delayText ? b`<span class="delay">${delayText}</span>` : A}${d.timetable ? b`<span class="timetable-note" title=${this._t("timetable_title")}
                  ><ha-icon icon="mdi:calendar-clock" aria-hidden="true"></ha-icon
                  >${this._t("timetable_only")}</span
                >` : A}
          </div>
        </div>
        ${rowPlatform || hasFlags ? b`<span class="row-end">
              ${rowPlatform ? b`<span class="row-platform"
                    >${this._t(platformLabelKey(d.type))} ${rowPlatform}</span
                  >` : A}
              ${hasFlags ? b`<span class="row-flags">
                    ${d.traffic_jam ? b`<ha-icon
                          class="disturbance"
                          icon="mdi:alert-circle"
                          role="img"
                          aria-label=${this._t("disturbance_title")}
                          title=${this._t("disturbance_title")}
                        ></ha-icon>` : A}
                    ${showA11y && d.barrier_free ? b`<ha-icon
                          class="a11y"
                          icon="mdi:wheelchair-accessibility"
                          role="img"
                          aria-label=${this._t("barrier_free_title")}
                          title=${this._t("barrier_free_title")}
                        ></ha-icon>` : A}
                    ${showCooling && d.cooling ? b`<ha-icon
                          class="cooling"
                          icon="mdi:snowflake"
                          role="img"
                          aria-label=${this._t("cooling_title")}
                          title=${this._t("cooling_title")}
                        ></ha-icon>` : A}
                  </span>` : A}
            </span>` : b`<span></span>`}
        <!-- Conditional spread avoids classMap({ "": true }) when cdState is "". -->
        <div class=${e$1({
			countdown: true,
			...cdState ? { [cdState]: true } : {}
		})}>${cdLabel}</div>
        ${hasStopsAhead ? b`<ha-icon
              class="row-chevron"
              icon="mdi:chevron-down"
              aria-hidden="true"
            ></ha-icon>` : A}
      </li>
    `;
		if (!hasStopsAhead) return rowTpl;
		return [rowTpl, this._renderStopsAheadPanel("row", d.stops_ahead, panelId, expanded, line, rowKey, entityId)];
	}
	_renderStopAhead(s, idx, rowKey, overrides, lineColors) {
		const allowedModes = this._config.stops_ahead_modes;
		const allLines = (s.lines ?? []).filter((l) => allowedModes.includes(transferModeOf(l)));
		const nightActive = this._isNightlineHour();
		const inlineLines = [];
		const otherLines = [];
		for (const l of allLines) if (/^[US]\d/.test(l) || nightActive && /^N\d/.test(l)) inlineLines.push(l);
		else otherLines.push(l);
		const transferKey = this._transferKey(rowKey, idx);
		const transfersExpanded = this._expandedTransfers.has(transferKey);
		const stopClasses = {
			"stops-ahead-stop": true,
			terminus: !!s.is_terminus,
			"transfers-expanded": transfersExpanded
		};
		const metroChips = inlineLines.length ? b`<span class="stops-ahead-metros">
          ${inlineLines.map((line) => b`<span
              class="stops-ahead-line-chip"
              style=${o(chipPalette(line, overrides, lineColors))}
              >${line}</span
            >`)}
        </span>` : A;
		const otherToggle = otherLines.length ? b`<button
          type="button"
          class="stops-ahead-other-toggle"
          aria-expanded=${transfersExpanded ? "true" : "false"}
          aria-label=${this._t(transfersExpanded ? "stops_ahead_other_hide" : "stops_ahead_other_show", {
			count: otherLines.length,
			stop: s.name
		})}
          @click=${(ev) => {
			ev.stopPropagation();
			this._toggleTransfers(transferKey);
		}}
          @keydown=${(ev) => {
			if (ev.key === "Enter" || ev.key === " ") ev.stopPropagation();
		}}
        >
          <span class="stops-ahead-other-count">+${otherLines.length}</span>
          <ha-icon icon="mdi:chevron-down" aria-hidden="true"></ha-icon>
        </button>` : A;
		const otherPanel = otherLines.length && transfersExpanded ? b`<div class="stops-ahead-others">
            ${otherLines.map((line) => b`<span
                class="stops-ahead-line-chip stops-ahead-line-chip--other"
                style=${o(chipPalette(line, overrides, lineColors))}
                >${line}</span
              >`)}
          </div>` : A;
		const rowInteractive = otherLines.length > 0;
		const rowAriaLabel = rowInteractive ? this._t(transfersExpanded ? "stops_ahead_other_hide" : "stops_ahead_other_show", {
			count: otherLines.length,
			stop: s.name
		}) : "";
		return b`
      <li class=${e$1(stopClasses)}>
        <div
          class="stops-ahead-row"
          role=${rowInteractive ? "button" : A}
          tabindex=${rowInteractive ? "0" : A}
          aria-expanded=${rowInteractive ? transfersExpanded ? "true" : "false" : A}
          aria-label=${rowInteractive ? rowAriaLabel : A}
          @click=${rowInteractive ? (ev) => {
			ev.stopPropagation();
			this._toggleTransfers(transferKey);
		} : A}
          @keydown=${rowInteractive ? (ev) => {
			if (ev.key === "Enter" || ev.key === " ") {
				ev.preventDefault();
				ev.stopPropagation();
				this._toggleTransfers(transferKey);
			}
		} : A}
        >
          <span class="stops-ahead-dot" aria-hidden="true"></span>
          <span class="stops-ahead-name">${deText(s.name)}</span>
          ${metroChips} ${otherToggle}
        </div>
        ${otherPanel}
      </li>
    `;
	}
	_toggleTransfers(key) {
		this._expandedTransfers = toggleInSet(this._expandedTransfers, key);
	}
	_isNightlineHour() {
		if (this._nightlineHourMemo !== null) return this._nightlineHourMemo;
		const parts = _nightlineHourFormatter("Europe/Vienna").formatToParts(/* @__PURE__ */ new Date());
		const hour = Number(parts.find((p) => p.type === "hour")?.value ?? "0");
		const minute = Number(parts.find((p) => p.type === "minute")?.value ?? "0");
		const minutesIntoDay = hour * 60 + minute;
		const result = minutesIntoDay >= 1435 || minutesIntoDay <= 315;
		this._nightlineHourMemo = result;
		return result;
	}
	_rowKey(d, entityId) {
		const stableId = d.time_planned ?? `cd${d.countdown}`;
		return `${entityId}|${d.line}|${d.direction}|${d.towards ?? ""}|${stableId}`;
	}
	_panelId(d, entityId, prefix) {
		const safeEid = safeDomId(entityId);
		const suffix = prefix === "hero" ? "wl-hero-stopsahead" : "wl-stopsahead";
		const stableId = (d.time_planned ?? `cd${d.countdown}`).replace(/[^a-z0-9_-]/gi, "_");
		return `${suffix}-${safeEid}-${d.line}-${d.direction}-${stableId}`;
	}
	_toggleRow(key) {
		this._expandedRows = toggleInSet(this._expandedRows, key);
	}
	/** Composite key for the per-stop "show transfers" toggle inside an
	*  expanded panel. Symmetric with `_rowKey` — every read + write goes
	*  through this so the `|`-delimited grammar lives in one place. */
	_transferKey(rowKey, stopIndex) {
		return `${rowKey}|${stopIndex}`;
	}
	/**
	* Platform-native map intent. RFC 5870 + Android Intent extensions.
	* Encoded into the QR so phone scanners hand off to whichever maps
	* app the user has set as their default — Apple Maps on iOS,
	* Google Maps / OsmAnd / Organic Maps on Android, Magic Earth, etc.
	* No vendor preference baked in. Falls back to the HTTPS OSM URL
	* when we don't have lat/lon (the QR scanner will open the browser).
	*/
	_stopGeoUri(stopName, lat, lon) {
		if (typeof lat !== "number" || typeof lon !== "number") return null;
		return `geo:${lat},${lon}?q=${lat},${lon}${stopName ? `(${encodeURIComponent(stopName)})` : ""}`;
	}
	_toggleQrFor(entityId) {
		this._qrOpenFor = this._qrOpenFor === entityId ? null : entityId;
	}
	/** Same 0fr↔1fr grid-template-rows trick as `.dep-row-detail` /
	*  `.stops-ahead-detail` so the panel animates to its intrinsic
	*  height. */
	_renderQrPanel(entityId, title, qrTarget, motIcon, expanded) {
		const panelId = `wl-qr-${safeDomId(entityId)}`;
		const dialogTitle = this._t("qr_dialog_title");
		const hint = this._t("qr_dialog_hint");
		return b`
      <div
        class=${e$1({
			"qr-panel": true,
			expanded
		})}
        id=${panelId}
        role="region"
        aria-hidden=${expanded ? "false" : "true"}
        aria-label="${dialogTitle}: ${title}"
      >
        <div class="qr-panel-inner">
          <div
            class="qr-panel-body"
            role="button"
            tabindex=${expanded ? "0" : "-1"}
            aria-label=${this._t("qr_dialog_close")}
            @click=${() => this._toggleQrFor(entityId)}
            @keydown=${(ev) => this._onExpanderKeydown(ev, true, () => this._toggleQrFor(entityId))}
          >
            <div
              class="qr-canvas"
              role="img"
              aria-label="${dialogTitle}: ${title}"
              data-qr-text=${qrTarget}
              data-qr-icon=${motIcon}
            ></div>
            <p class="qr-panel-hint">${hint}</p>
          </div>
        </div>
      </div>
    `;
	}
	_isDevMode() {
		try {
			if ((window.location.search || "").includes("wl_debug=1")) return true;
			if (window.localStorage?.getItem("wl_debug") === "1") return true;
		} catch (err) {
			console.warn("[wiener-linien-austria-card] dev-mode probe failed (SSR/restricted ctx?)", err);
		}
		return false;
	}
	_renderDevModePanel() {
		if (!this._isDevMode()) return A;
		return b`
      <div class="dev-strip">
        <span class="dev-strip-label">${this._t("devmode_title")}</span>
        <button type="button" @click=${this._devTestTraffic}>${this._t("devmode_traffic_btn")}</button>
        <button type="button" @click=${this._devTestElevator}>${this._t("devmode_elevator_btn")}</button>
        <button
          type="button"
          aria-expanded=${this._devPaletteOpen ? "true" : "false"}
          @click=${this._devTogglePalette}
        >
          ${this._t("devmode_colors_btn")}
        </button>
        <button type="button" class="dev-strip-clear" @click=${this._devClear}>
          ${this._t("devmode_clear_btn")}
        </button>
      </div>
      ${this._devPaletteOpen ? this._renderDevPalette() : A}
    `;
	}
	static {
		this.DEV_GROUNDS = {
			dark: "#1c1c1c",
			light: "#ffffff"
		};
	}
	static {
		this.DEV_SURFACES = [{
			label: "hero",
			ratio: .12
		}, {
			label: "row",
			ratio: .06
		}];
	}
	static {
		this.DEV_PALETTE = [
			{
				label: "U1",
				hex: "#E3000F"
			},
			{
				label: "U2",
				hex: "#A862A4"
			},
			{
				label: "U3",
				hex: "#EF7C00"
			},
			{
				label: "U4",
				hex: "#319F49"
			},
			{
				label: "U6",
				hex: "#9D6830"
			},
			{
				label: "Tram",
				hex: "#C00808"
			},
			{
				label: "Bus",
				hex: "#0A295D"
			},
			{
				label: "Nightline",
				hex: NIGHTLINE_BG
			},
			{
				label: "Badner Bahn",
				hex: "#000000"
			},
			{
				label: "Weiß",
				hex: "#FFFFFF"
			}
		];
	}
	/** Fixture first, then any live GTFS colour the fixture doesn't already cover. */
	_devPaletteEntries() {
		const entries = _WienerLinienAustriaCard.DEV_PALETTE.map((e) => ({
			...e,
			live: false
		}));
		const seen = new Set(entries.map((e) => e.hex.toUpperCase()));
		const live = mergeLineColorsMaps(this.hass, (this._config?.entities ?? []).map((s) => s.entity));
		for (const [line, colors] of Object.entries(live)) {
			if (!colors?.bg) continue;
			const hex = `#${colors.bg}`.toUpperCase();
			if (seen.has(hex)) continue;
			seen.add(hex);
			entries.push({
				label: line,
				hex,
				live: true
			});
		}
		return entries;
	}
	_renderDevPalette() {
		return b`
      <div class="dev-palette">
        ${this._devPaletteEntries().map((entry) => this._renderDevPaletteRow(entry))}
      </div>
    `;
	}
	_renderDevPaletteRow(entry) {
		return b`
      <div class="dev-pal-row">
        <div class="dev-pal-id">
          <span class="dev-pal-badge" style="background: ${entry.hex};">${entry.label}</span>
          <code>${entry.hex.toUpperCase()}${entry.live ? " ·live" : ""}</code>
        </div>
        ${["dark", "light"].map((scheme) => {
			const text = accentTextColor(entry.hex, scheme);
			const ground = _WienerLinienAustriaCard.DEV_GROUNDS[scheme];
			return b`
            <div class="dev-pal-scheme" style="background: ${ground};">
              <span class="dev-pal-scheme-label">${scheme}</span>
              ${_WienerLinienAustriaCard.DEV_SURFACES.map((surface) => {
				const plate = mixOver(entry.hex, ground, surface.ratio) ?? ground;
				const ratio = text ? contrastRatio(text, plate) : null;
				const pass = ratio !== null && ratio >= 4.5;
				return b`
                  <div class="dev-pal-chip" style="background: ${plate};">
                    <span
                      class="dev-pal-word"
                      style=${text ? `color: ${text};` : A}
                      >${this._t("now")}</span
                    >
                    <span class="dev-pal-ratio ${pass ? "pass" : "fail"}">
                      ${ratio === null ? "—" : ratio.toFixed(2)}
                    </span>
                    <span class="dev-pal-surface">${surface.label}</span>
                  </div>
                `;
			})}
              <code class="dev-pal-out">${(text ?? "—").toUpperCase()}</code>
            </div>
          `;
		})}
      </div>
    `;
	}
	_randomFrom(arr) {
		if (arr.length === 0) return null;
		return arr[Math.floor(Math.random() * arr.length)];
	}
	static {
		this.DEV_TRAFFIC_SHAPES = [
			{
				label: "Bauarbeiten",
				html: (line, towards) => `<p>Die Linie ${line} fährt derzeit nicht Richtung ${towards}.</p><p><br></p><p>Weichen Sie ersatzweise auf die Linien E3, 46 und 49 aus.</p><p><br></p><p>Voraussichtliche Dauer: 31. August.</p><p><br></p><p>Grund: Bauarbeiten im Bereich zwischen Westbahnhof U und Hütteldorfer Straße U.</p>`
			},
			{
				label: "Run-on (ungetrennt)",
				html: (line) => `<p>Linie ${line}:Betrieb nur zwischen Schottentor U und Dornbach. Weichen Sie ersatzweise auf die Linie 43A aus.Voraussichtliche Dauer: 31.07.2026.Grund: Gleisbauarbeiten im Bereich Dornbacher Straße.</p>`
			},
			{
				label: "Mehrere Linien",
				html: (line) => `<p>Linie ${line}:</p><p>Kein Betrieb zwischen Lerchenfelder Straße und Franz-Josefs-Bahnhof S.</p><p>Betrieb zwischen Westbahnhof S U und Lerchenfelder Straße.</p><p>Linie 12:</p><p>Betrieb nur zwischen Hillerstraße und Franz-Josefs-Bahnhof S.</p><p>Linien 40, 41, 42:</p><p>Kein Betrieb. Die Außenäste werden von den Linien 37 und 38 übernommen.</p><p>Die Störung dauert voraussichtlich bis Ende August.</p>`
			},
			{
				label: "Unfall, Uhrzeit",
				html: (line) => `<p>Linie ${line}:</p><p>Unregelmäßige Intervalle in beiden Richtungen.</p><p>Voraussichtliche Dauer: 11:30 Uhr.</p><p>Grund: Verkehrsunfall im Bereich Gersthofer Straße 140.</p>`
			},
			{
				label: "Unbekannter Grund",
				html: (line) => `<p>Linie ${line}:</p><p>Es kommt zu Verzögerungen im Betrieb.</p><p>Voraussichtliche Dauer: Ende August.</p><p>Grund: Vorübergehend nicht näher bekannte Ursache.</p>`
			}
		];
	}
	static {
		this.styles = cardStyles;
	}
};
__decorate([n$2({ attribute: false })], WienerLinienAustriaCard.prototype, "hass", void 0);
__decorate([r$1()], WienerLinienAustriaCard.prototype, "_config", void 0);
__decorate([r$1()], WienerLinienAustriaCard.prototype, "_activeTab", void 0);
__decorate([r$1()], WienerLinienAustriaCard.prototype, "_tabEdges", void 0);
__decorate([r$1()], WienerLinienAustriaCard.prototype, "_versionMismatch", void 0);
__decorate([r$1()], WienerLinienAustriaCard.prototype, "_expandedTraffic", void 0);
__decorate([r$1()], WienerLinienAustriaCard.prototype, "_expandedElevator", void 0);
__decorate([r$1()], WienerLinienAustriaCard.prototype, "_expandedRows", void 0);
__decorate([r$1()], WienerLinienAustriaCard.prototype, "_expandedTransfers", void 0);
__decorate([r$1()], WienerLinienAustriaCard.prototype, "_debugTraffic", void 0);
__decorate([r$1()], WienerLinienAustriaCard.prototype, "_debugElevator", void 0);
__decorate([r$1()], WienerLinienAustriaCard.prototype, "_qrOpenFor", void 0);
__decorate([r$1()], WienerLinienAustriaCard.prototype, "_devPaletteOpen", void 0);
WienerLinienAustriaCard = _WienerLinienAustriaCard = __decorate([t$2("wiener-linien-austria-card")], WienerLinienAustriaCard);

//#endregion
export { WienerLinienAustriaCard };
//# sourceMappingURL=wiener-linien-austria-card.js.map