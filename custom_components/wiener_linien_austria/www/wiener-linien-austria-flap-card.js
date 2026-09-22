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
const i$7 = (t, ...e) => {
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
*/ const { is: i$6, defineProperty: e$4, getOwnPropertyDescriptor: h$2, getOwnPropertyNames: r$4, getOwnPropertySymbols: o$4, getPrototypeOf: n$4 } = Object, a$1 = globalThis, c$2 = a$1.trustedTypes, l$3 = c$2 ? c$2.emptyScript : "", p$2 = a$1.reactiveElementPolyfillSupport, d$2 = (t, s) => t, u$2 = {
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
}, f$2 = (t, s) => !i$6(t, s), b$1 = {
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
const i$5 = (t) => t;
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
						ctor: "." === e[1] ? I : "?" === e[1] ? L : "@" === e[1] ? z : H
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
			const s = i$5(t).nextSibling;
			i$5(t).remove(), t = s;
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
	H,
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
var i$4 = class extends y$1 {
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
i$4._$litElement$ = !0, i$4["finalized"] = !0, s$1.litElementHydrateSupport?.({ LitElement: i$4 });
const o$2 = s$1.litElementPolyfillSupport;
o$2?.({ LitElement: i$4 });
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
var i$3 = class {
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
*/ const e$1 = e$2(class extends i$3 {
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
//#region node_modules/lit-html/directive-helpers.js
/**
* @license
* Copyright 2020 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/ const { I: t } = j$1, i$2 = (o) => o, n$1 = (o) => null === o || "object" != typeof o && "function" != typeof o, e = {
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
				const t = i$2(o).nextSibling;
				i$2(l).insertBefore(o, d), o = t;
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
//#region node_modules/lit-html/directives/keyed.js
/**
* @license
* Copyright 2021 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/ const i$1 = e$2(class extends i$3 {
	constructor() {
		super(...arguments), this.key = A;
	}
	render(r, t) {
		return this.key = r, t;
	}
	update(r, [t, e]) {
		return t !== this.key && (p(r), this.key = t), e;
	}
});

//#endregion
//#region node_modules/lit-html/directives/style-map.js
/**
* @license
* Copyright 2018 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/ const n = "important";
const i = " !" + n;
const o = e$2(class extends i$3 {
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
				const r = "string" == typeof e && e.endsWith(i);
				t.includes("-") || r ? s.setProperty(t, r ? e.slice(0, -11) : e, r ? n : "") : s[t] = e;
			}
		}
		return E;
	}
});

//#endregion
//#region src/const.ts
const FLAP_CARD_VERSION = "2.1.0";
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
//#region src/editor/editor-styles.ts
const editorStyles = i$7`
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
const editorTokens = i$7`
  :host {
    --wl-sunken: color-mix(in srgb, var(--primary-text-color) 3%, var(--card-background-color));
    --wl-hover: color-mix(in srgb, var(--primary-text-color) 6%, transparent);
    --wl-ripple: color-mix(in srgb, var(--primary-color) 14%, transparent);
  }
`;

//#endregion
//#region src/editor/header-strip-styles.ts
const headerStripStyles = i$7`
  :host {
    --wl-signage-housing: #0d0d0d;
    --wl-signage-selected: #171717;
    --wl-signage-outline: #3a3a3a;
    --wl-signage-chip: #2a2a2a;
    --wl-signage-ink: #f2f2f2;
  }

  /* Station header strip — direct manipulation.
     The bar mocks a physical black sign, so its surfaces are literal
     colours rather than theme tokens: themed chrome here would stop the
     widget looking like the thing it edits. */

  .wl-strip {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 8px 0 4px;
  }

  .wl-strip-bar {
    display: flex;
    gap: 6px;
    padding: 8px;
    border-radius: 10px;
    background: var(--wl-signage-housing);
    border: 1px solid var(--divider-color);
  }

  .wl-zone {
    flex: 1;
    min-width: 0;
    display: flex;
    align-items: center;
    min-height: 44px;
    padding: 6px 8px;
    border-radius: 6px;
    border: 1px dashed var(--wl-signage-outline);
    background: transparent;
    cursor: pointer;
  }

  .wl-zone--selected {
    border: 2px solid var(--primary-color);
    background: var(--wl-signage-selected);
  }

  .wl-zone:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
  }

  .wl-zone-tokens {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    align-items: center;
    width: 100%;
  }

  /* Right zone right-aligns its tokens so the preview matches how the card
     lays the two sides out against the centre of the strip. */
  .wl-zone--right .wl-zone-tokens {
    justify-content: flex-end;
  }

  .wl-token {
    display: flex;
    align-items: center;
    height: 22px;
    padding: 0 6px;
    border-radius: 3px;
    color: var(--wl-signage-ink);
    font-size: 0.6875rem;
    font-weight: 400;
    line-height: 1;
    white-space: nowrap;
    forced-color-adjust: none;
  }

  .wl-token ha-icon {
    --mdc-icon-size: 16px;
  }

  .wl-token--chip {
    background: var(--wl-signage-chip);
  }

  .wl-strip-switch {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  /* Segmented control — used by the side switch. Enum config fields use
     ha-form's select instead; this exists for editor-local UI state that
     never reaches the config. */

  .wl-seg {
    display: flex;
    gap: 4px;
    padding: 3px;
    background: var(--secondary-background-color);
    border-radius: 8px;
  }

  .wl-seg-btn {
    border: 0;
    cursor: pointer;
    padding: 8px 12px;
    min-height: 34px;
    border-radius: 6px;
    background: transparent;
    color: var(--secondary-text-color);
    font-size: 0.78125rem;
    font-weight: 500;
    line-height: 1.2;
  }

  .wl-seg-btn[aria-pressed="true"] {
    background: var(--card-background-color);
    color: var(--primary-color);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.14);
  }

  .wl-seg-btn:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
  }

  /* Slot panel — the four fields for whichever side is selected. */

  .wl-slot {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 12px;
    border: 1px solid var(--primary-color);
    border-radius: 10px;
    background: var(--wl-sunken);
  }

  .wl-pict-grid,
  .wl-tray {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }

  .wl-pict {
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--divider-color);
    border-radius: 8px;
    background: var(--card-background-color);
    color: var(--primary-text-color);
    cursor: pointer;
  }

  .wl-pict ha-icon,
  .wl-tray-btn ha-icon,
  .wl-pill ha-icon {
    --mdc-icon-size: 18px;
  }

  .wl-pict[aria-pressed="true"],
  .wl-tray-btn[aria-pressed="true"] {
    border-color: var(--primary-color);
    background: var(--wl-ripple);
    color: var(--primary-color);
  }

  .wl-pict:hover,
  .wl-tray-btn:hover {
    background: var(--wl-hover);
  }

  .wl-pict:focus-visible,
  .wl-tray-btn:focus-visible,
  .wl-pill-x:focus-visible,
  .wl-text:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
  }

  .wl-tray-btn {
    display: flex;
    align-items: center;
    gap: 6px;
    min-height: 44px;
    padding: 0 12px;
    border: 1px solid var(--divider-color);
    border-radius: 8px;
    background: var(--card-background-color);
    color: var(--primary-text-color);
    font-size: 0.78125rem;
    font-weight: 500;
    line-height: 1;
    cursor: pointer;
  }

  .wl-text {
    width: 100%;
    box-sizing: border-box;
    min-height: 44px;
    padding: 0 12px;
    border: 1px solid var(--divider-color);
    border-radius: 8px;
    background: var(--card-background-color);
    color: var(--primary-text-color);
    font-size: 0.8125rem;
    line-height: 1.4;
  }

  .wl-pill {
    display: flex;
    align-items: center;
    gap: 6px;
    min-height: 36px;
    padding: 0 6px 0 11px;
    border: 1px solid var(--divider-color);
    border-radius: 18px;
    background: var(--card-background-color);
    color: var(--primary-text-color);
    font-size: 0.78125rem;
    line-height: 1;
  }

  .wl-pill-x {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    border-radius: 12px;
    background: var(--wl-hover);
    color: var(--secondary-text-color);
    cursor: pointer;
  }

  .wl-pill-x ha-icon {
    --mdc-icon-size: 14px;
  }

  /* Forced colours.
     .wl-token opts out so the sign keeps its near-white ink — but its
     container did not, so the bar was forced to Canvas while the ink stayed
     #f2f2f2. White on white, in the one control whose entire premise is that
     the bar IS the preview. The housing and the zones opt out alongside it so
     ground and ink stay a matched pair; the bar then takes a CanvasText edge
     so the widget still has a findable boundary against the forced page. */
  @media (forced-colors: active) {
    .wl-strip-bar,
    .wl-zone {
      forced-color-adjust: none;
    }

    .wl-strip-bar {
      outline: 1px solid CanvasText;
    }

    .wl-seg-btn[aria-pressed="true"]:not(:focus-visible),
    .wl-pict[aria-pressed="true"]:not(:focus-visible),
    .wl-tray-btn[aria-pressed="true"]:not(:focus-visible) {
      outline: 2px solid Highlight;
      outline-offset: -2px;
    }
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
//#region node_modules/lit-html/directives/live.js
/**
* @license
* Copyright 2020 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/ const l = e$2(class extends i$3 {
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
//#region src/utils/retro-station-icons.ts
const RETRO_HEADER_ICONS = {
	exit: {
		kind: "svg",
		viewBox: "0 0 36.29 29.04",
		glyphPointsTo: "left",
		labelKey: "icon_exit",
		shapes: () => w`
      <polygon points="31.29 0 18.99 0 13.99 0 13.99 5 13.99 10.31 18.99 10.31 18.99 5 31.29 5 31.29 24.04 18.99 24.04 18.99 18.44 13.99 18.44 13.99 24.04 13.99 29.04 18.99 29.04 31.29 29.04 36.29 29.04 36.29 24.04 36.29 5 36.29 0 31.29 0"/>
      <polygon points="24.22 12.38 7.65 12.38 12.5 7.53 6.85 7.53 0 14.37 6.85 21.23 12.51 21.23 12.51 21.23 7.66 16.38 24.22 16.38 24.22 12.38"/>
    `
	},
	"exit-access": {
		kind: "svg",
		viewBox: "0 0 36.29 29.04",
		glyphPointsTo: "right",
		labelKey: "icon_exit_access",
		shapes: () => w`
      <polygon points="17.3 18.73 17.3 24.04 5 24.04 5 5 17.3 5 17.3 10.59 22.3 10.59 22.3 5 22.3 0 17.3 0 5 0 0 0 0 5 0 24.04 0 29.04 5 29.04 17.3 29.04 22.3 29.04 22.3 24.04 22.3 18.73 17.3 18.73"/>
      <circle cx="9.97" cy="8.73" r="1.05"/>
      <path d="M9.04,10.69h0v4.12h0c0,.36.5.66,1.12.66h3.48l1.2,2.87h1l-1.2-2.87-.39-.93h-2.97v-1.47h2.32s-.09-.68-.58-.68h-1.74v-1.7h0c0-.36-.5-.66-1.12-.66s-1.12.29-1.12.66Z"/>
      <path d="M11.67,18.74c1.04-.58,1.78-1.63,1.91-2.87h-.72c-.18,1.49-1.45,2.64-2.98,2.64-1.66,0-3.01-1.35-3.01-3.01,0-1.21.71-2.24,1.74-2.72v-.77c-1.43.52-2.45,1.89-2.45,3.49,0,2.05,1.67,3.72,3.72,3.72h6.32v-.48h-4.53Z"/>
      <polygon points="29.44 7.81 23.79 7.81 23.79 7.81 28.63 12.66 17.3 12.66 17.3 16.66 28.64 16.66 23.79 21.51 29.45 21.51 36.29 14.66 29.44 7.81"/>
    `
	},
	wc: {
		kind: "text",
		text: "WC",
		labelKey: "icon_wc"
	},
	escalator: {
		kind: "svg",
		viewBox: "0 0 36.74 28.3",
		labelKey: "icon_escalator",
		shapes: () => w`
      <polygon points="27.05 0 27.05 3.08 23.69 3.08 23.69 6.17 20.32 6.17 20.32 9.25 16.96 9.25 16.96 12.33 13.64 12.33 13.64 15.42 10.28 15.42 10.28 18.5 6.91 18.5 6.91 22.14 0 22.14 0 28.3 7.97 28.3 30.42 6.17 36.74 6.17 36.74 0 27.05 0"/>
    `
	},
	elevator: {
		kind: "svg",
		viewBox: "0 0 24.01 36.69",
		labelKey: "icon_elevator",
		shapes: () => w`
      <path d="M14.82,19.29h-5.63c-.37,0-.68.3-.68.68v5.15c0,.37.3.68.68.68s.68-.3.68-.68v-4.48h.42v12.32c0,.37.3.68.68.68s.68-.3.68-.68v-7.42h.73v7.42c0,.37.3.68.68.68s.68-.3.68-.68v-12.32h.42v4.48c0,.37.3.68.68.68s.68-.3.68-.68v-5.15c0-.37-.3-.68-.68-.68Z"/>
      <circle cx="12" cy="17.3" r="1.57"/>
      <path d="M22.6,14.1v21.18H1.41V14.1h21.18M24.01,12.68H0v24.01h24.01V12.68h0Z"/>
      <polygon points="11.11 4.94 6.17 0 1.23 4.94 1.23 7.6 5.23 3.61 5.23 11.48 7.11 11.48 7.11 3.61 11.11 7.6 11.11 4.94"/>
      <polygon points="12.9 6.54 17.84 11.48 22.78 6.54 22.78 3.87 18.78 7.87 18.78 0 16.9 0 16.9 7.87 12.9 3.87 12.9 6.54"/>
    `
	}
};
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
const RETRO_HEADER_MDI_EXITS = {
	"mdi:exit-run": {
		labelKey: "icon_mdi_exit_run",
		glyphPointsTo: "right"
	},
	"mdi:exit-to-app": {
		labelKey: "icon_mdi_exit_to_app",
		glyphPointsTo: "right"
	},
	"mdi:door-open": { labelKey: "icon_mdi_door_open" },
	"mdi:stairs": { labelKey: "icon_mdi_stairs" }
};
/** Runtime guard — narrows a `string` to a `RetroHeaderMdiExit`. The
*  config normaliser uses this to validate user-supplied values
*  against the curated set, dropping anything outside the registry. */
function isRetroHeaderMdiExit(v) {
	return typeof v === "string" && v in RETRO_HEADER_MDI_EXITS;
}
/** Render a retro-header glyph wrapped in a white-background tile
*  so the (black) glyph reads against the black header strip the
*  way the original Wiener Linien signage does.
*
*  Two render paths, picked by `def.kind`:
*   - `"svg"`: inline `<svg>`. Browser auto-namespace-promotes the
*     element; child shapes inherit that namespace and the tile's
*     `color: #000` cascades into the glyph's currentColor fill.
*   - `"text"`: a centred `<span>` containing literal characters
*     (WC). The tile's flex centering positions them — no manual
*     transform needed. */
function renderRetroHeaderIcon(key, opts) {
	const def = RETRO_HEADER_ICONS[key];
	if (def.kind === "text") return b`<span class="retro-station-header__tile" role="img" aria-label=${opts.ariaLabel}>
      <span class="retro-station-header__monogram" aria-hidden="true">${def.text}</span>
    </span>`;
	const iconClass = opts.flipX ? "retro-station-header__icon retro-station-header__icon--flip-x" : "retro-station-header__icon";
	return b`<span class="retro-station-header__tile" role="img" aria-label=${opts.ariaLabel}>
    <svg
      class=${iconClass}
      viewBox=${def.viewBox}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >${def.shapes()}</svg>
  </span>`;
}
/** Render an MDI icon for the header strip's exit corner — wrapped
*  in the same white tile the WL traced glyphs use, so MDI and SVG
*  variants compose visually on the same row. `<ha-icon>` inherits
*  the tile's `color: #000` via `currentColor`; the icon size token
*  set in the card's CSS keeps the glyph inside the tile padding. */
function renderRetroHeaderMdiIcon(mdiIcon, opts) {
	const iconClass = opts.flipX ? "retro-station-header__mdi retro-station-header__mdi--flip-x" : "retro-station-header__mdi";
	return b`<span class="retro-station-header__tile retro-station-header__tile--mdi" role="img" aria-label=${opts.ariaLabel}>
    <ha-icon class=${iconClass} icon=${mdiIcon}></ha-icon>
  </span>`;
}
/** Render a free-form, user-supplied MDI icon as a header-strip
*  tile. Same DOM as `renderRetroHeaderMdiIcon` but accepts any
*  string (the config normaliser already enforces the `mdi:` prefix
*  + sanity caps) and never flips — auto-flip is a directional
*  concept that only applies to the curated exit-arrow variants. */
function renderRetroHeaderMdiTile(mdiIcon, ariaLabel) {
	return b`<span class="retro-station-header__tile retro-station-header__tile--mdi" role="img" aria-label=${ariaLabel}>
    <ha-icon class="retro-station-header__mdi" icon=${mdiIcon}></ha-icon>
  </span>`;
}

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
* Merge one field into one side of the header strip.
*
* An `undefined` write removes the key outright so the saved YAML never carries
* `text: undefined`.
*/
function patchHeaderSide(current, field, value) {
	const next = {
		...current ?? {},
		[field]: value
	};
	if (value === void 0) delete next[field];
	return next;
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
//#region src/utils/color.ts
/** Lightness band for the accent-as-text token, per scheme (OKLCh L, 0–1). */
const DARK_FLOOR = .72;
const LIGHT_CEILING = .45;
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
//#region src/utils/card-vocabulary.ts
/** Per-card defaults for every concept more than one card exposes.
*  Read by the normalisers — these are the live values, not a copy. */
const CARD_DEFAULTS = {
	show_station_name: {
		retro: false,
		flap: true
	},
	housing: {
		retro: false,
		flap: true
	},
	size: {
		retro: "regular",
		flap: "small"
	},
	unit_caption: {
		retro: false,
		flap: true
	},
	station_bg: {
		retro: "default",
		flap: "line"
	},
	show_platform: {
		retro: true,
		flap: true
	}
};

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
//#region src/utils/config.ts
const RETRO_HEADER_EXIT = /* @__PURE__ */ new Set([
	"none",
	"regular",
	"accessible",
	...RETRO_HEADER_MDI_EXIT_KEYS
]);
/** Trim and bound a free-text config string. Returns undefined for a
*  non-string or an empty result, so callers branch on a single
*  `!== undefined` test. `trim: false` preserves deliberate padding —
*  a date format like " d.m " uses spaces as separators. */
function boundedText(raw, max, trim) {
	if (typeof raw !== "string") return void 0;
	const out = trim ? raw.trim().slice(0, max) : raw.slice(0, max);
	return out.length > 0 ? out : void 0;
}
/** Clean a user-authored string array: drop non-strings, trim, optionally
*  truncate each entry, drop empties and anything `accept` rejects, then
*  cap the count. Returns undefined for an empty result so the caller can
*  omit the key. Tolerant by design — one bad entry in hand-written YAML
*  shouldn't fail the whole side. */
function cleanStringList(raw, opts) {
	if (!Array.isArray(raw)) return void 0;
	const { maxCount, truncateTo, accept } = opts;
	const cleaned = raw.filter((v) => typeof v === "string").map((v) => truncateTo === void 0 ? v.trim() : v.trim().slice(0, truncateTo)).filter((v) => v.length > 0 && (accept === void 0 || accept(v))).slice(0, maxCount);
	return cleaned.length > 0 ? cleaned : void 0;
}
/** Any registered icon set, not just mdi:. The card renders these through
*  <ha-icon>, which resolves whatever sets the instance has installed, so
*  a user with a custom-icons integration can pick `hue:adore-mirror` and
*  it will display. The old mdi:-only rule dated from v1's free-text
*  input, where it guarded against garbage; v2 picks through
*  ha-icon-picker, which only emits icons that actually resolve, so the
*  shape check is all that is needed — and the narrow rule was silently
*  discarding valid picks on save. */
const ICON_KEY_RE = /^[a-z0-9_-]+:[a-z0-9_-]+$/i;
/** Header-strip capacity and length limits.
*
*  Single source of truth, imported by the editor's header strip. These used to
*  exist twice — as `MAX_HEADER_*` constants in the editor and as bare literals
*  here — so raising a cap in the editor let the user add a chip that this
*  normaliser then silently truncated away on save. Whatever the editor offers
*  and whatever the normaliser keeps are now the same numbers by construction. */
const HEADER_MAX_CHIPS = 6;
const HEADER_MAX_ICONS = 3;
const HEADER_MAX_CHIP_LEN = 16;
const HEADER_MAX_TEXT_LEN = 64;
const HEADER_MAX_DATE_FORMAT_LEN = 32;
/** Not exported: the editor picks icons through `ha-icon-picker`, which only
*  emits keys that already resolve, so this bound is a normaliser-side sanity
*  check on hand-written YAML rather than a cap the editor has to mirror. */
const HEADER_MAX_ICON_KEY_LEN = 64;
/** Header-side normaliser. Returns `undefined` when every field is
*  unset / falsy / `"none"`, so the card's "is this side configured
*  at all?" check collapses to a single truthy test. Hard bounds on
*  `text` length defensively guard against a runaway YAML config
*  blowing out the strip width.
*
*  Exported so the flap card's config normaliser can reuse the same
*  header-side validation: the two cards share the `RetroHeaderSide`
*  shape, and the chip / exit / amenity grammar is identical even
*  though each card paints the strip with its own palette. */
function normaliseRetroHeaderSide(raw) {
	if (!raw || typeof raw !== "object") return void 0;
	const r = raw;
	const out = {};
	const exit = RETRO_HEADER_EXIT.has(r.exit) ? r.exit : "none";
	if (exit !== "none") out.exit = exit;
	const text = boundedText(r.text, 64, true);
	if (text !== void 0) out.text = text;
	if (r.show_wc === true) out.show_wc = true;
	if (r.show_escalator === true) out.show_escalator = true;
	if (r.show_elevator === true) out.show_elevator = true;
	if (r.show_clock === true) out.show_clock = true;
	if (r.show_date === true) out.show_date = true;
	const chips = cleanStringList(r.chips, {
		truncateTo: 16,
		maxCount: 6
	});
	if (chips !== void 0) out.chips = chips;
	const extraIcons = cleanStringList(r.extra_icons, {
		maxCount: 3,
		accept: (v) => ICON_KEY_RE.test(v) && v.length <= HEADER_MAX_ICON_KEY_LEN
	});
	if (extraIcons !== void 0) out.extra_icons = extraIcons;
	if (Object.keys(out).length === 0) return void 0;
	const dateFormat = boundedText(r.date_format, 32, false);
	if (dateFormat !== void 0) out.date_format = dateFormat;
	return out;
}
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
//#region src/editor/header-strip.ts
/** Amenity toggles, in the order the card renders them into the chip lane.
*  Keeping this list in render order is what lets the bar preview double as
*  documentation of what the sign will look like. */
const AMENITIES = [
	{
		key: "show_wc",
		icon: "mdi:human-male-female",
		labelKey: "show_wc_short"
	},
	{
		key: "show_escalator",
		icon: "mdi:escalator",
		labelKey: "show_escalator_short"
	},
	{
		key: "show_elevator",
		icon: "mdi:elevator",
		labelKey: "show_elevator_short"
	},
	{
		key: "show_clock",
		icon: "mdi:clock-outline",
		labelKey: "show_clock_short"
	},
	{
		key: "show_date",
		icon: "mdi:calendar",
		labelKey: "show_date_short"
	}
];
/** Exit pictogram choices as a visual grid. The three bespoke signage glyphs
*  come first (they are what the real Vienna signs use), then the MDI
*  alternatives, then "none". */
const EXIT_CHOICES = [
	{
		value: "regular",
		icon: "mdi:exit-run",
		labelKey: "header_exit_regular"
	},
	{
		value: "accessible",
		icon: "mdi:wheelchair-accessibility",
		labelKey: "header_exit_accessible"
	},
	...RETRO_HEADER_MDI_EXIT_KEYS.map((key) => ({
		value: key,
		icon: key,
		labelKey: RETRO_HEADER_MDI_EXITS[key].labelKey
	})),
	{
		value: "none",
		icon: "mdi:close-circle-outline",
		labelKey: "header_exit_none"
	}
];
/** Build the token list for one side in the exact order the card renders it:
*  exit pictogram, free text, amenity icons, extra icons, then text chips. */
function tokensFor(side, emptyLabel, et) {
	const out = [];
	if (!side) return [{
		label: emptyLabel,
		kind: "text",
		name: emptyLabel
	}];
	if (side.exit && side.exit !== "none") {
		const choice = EXIT_CHOICES.find((c) => c.value === side.exit);
		out.push({
			label: "",
			icon: choice?.icon ?? side.exit,
			kind: "icon",
			name: choice ? et(choice.labelKey) : side.exit
		});
	}
	if (side.text) out.push({
		label: side.text,
		kind: "text",
		name: side.text
	});
	for (const a of AMENITIES) if (side[a.key]) out.push({
		label: "",
		icon: a.icon,
		kind: "icon",
		name: et(a.labelKey)
	});
	for (const icon of side.extra_icons ?? []) out.push({
		label: "",
		icon,
		kind: "icon",
		name: icon
	});
	for (const chip of side.chips ?? []) out.push({
		label: chip,
		kind: "chip",
		name: chip
	});
	if (!out.length) out.push({
		label: emptyLabel,
		kind: "text",
		name: emptyLabel
	});
	return out;
}
function renderHeaderStrip(opts, cb) {
	const side = (opts.selected === "header_left" ? opts.left : opts.right) ?? {};
	const empty = opts.et("header_slot_empty");
	const patch = (field, value) => cb.patch(opts.selected, field, value);
	return b`
    <div class="wl-strip">
      <div class="wl-strip-bar" role="group" aria-label=${opts.et("header_bar_aria")}>
        ${renderZone("header_left", opts, cb, empty)}
        ${renderZone("header_right", opts, cb, empty)}
      </div>

      <div class="wl-strip-switch">
        <span class="wl-note wl-label--grow">${opts.et("header_pick_side_hint")}</span>
        <div class="wl-seg" role="group" aria-label=${opts.et("header_side_aria")}>
          ${["header_left", "header_right"].map((key) => b`<button
              type="button"
              class="wl-seg-btn"
              aria-pressed=${opts.selected === key ? "true" : "false"}
              @click=${() => cb.selectSide(key)}
            >
              ${opts.et(key === "header_left" ? "header_left" : "header_right")}
            </button>`)}
        </div>
      </div>

      <div class="wl-slot">
        <div class="wl-group">
          <span class="wl-label">${opts.et("exit")}</span>
          <div class="wl-pict-grid">
            ${EXIT_CHOICES.map((choice) => {
		const on = (side.exit ?? "none") === choice.value;
		const label = opts.et(choice.labelKey);
		return b`<button
                type="button"
                class="wl-pict"
                aria-pressed=${on ? "true" : "false"}
                aria-label=${label}
                title=${label}
                @click=${() => patch("exit", choice.value)}
              >
                <ha-icon icon=${choice.icon} aria-hidden="true"></ha-icon>
              </button>`;
	})}
          </div>
        </div>

        <div class="wl-group">
          <span class="wl-label">${opts.et("text")}</span>
          <input
            type="text"
            class="wl-text"
            maxlength=${64}
            .value=${side.text ?? ""}
            aria-label=${opts.et("text")}
            placeholder=${opts.et("text_placeholder")}
            @keydown=${swallowEditorKeys}
            @keyup=${swallowEditorKeys}
            @keypress=${swallowEditorKeys}
            @change=${(ev) => patch("text", ev.target.value.trim() || void 0)}
          />
        </div>

        <div class="wl-group">
          <span class="wl-label">${opts.et("header_amenities")}</span>
          <div class="wl-tray">
            ${AMENITIES.map((a) => {
		const on = Boolean(side[a.key]);
		const label = opts.et(a.labelKey);
		return b`<button
                type="button"
                class="wl-tray-btn"
                aria-pressed=${on ? "true" : "false"}
                aria-label=${label}
                @click=${() => patch(a.key, !on)}
              >
                <ha-icon icon=${a.icon} aria-hidden="true"></ha-icon>
                ${label}
              </button>`;
	})}
          </div>
          ${side.show_date ? b`<input
                type="text"
                class="wl-text"
                maxlength=${32}
                .value=${side.date_format ?? ""}
                aria-label=${opts.et("date_format")}
                placeholder=${opts.et("date_format_placeholder")}
                @keydown=${swallowEditorKeys}
                @keyup=${swallowEditorKeys}
                @keypress=${swallowEditorKeys}
                @change=${(ev) => patch("date_format", ev.target.value.trim() || void 0)}
              />` : A}
        </div>

        ${renderChipsAndIcons(side, opts, patch)}
      </div>
    </div>
  `;
}
function renderZone(key, opts, cb, empty) {
	const cfg = key === "header_left" ? opts.left : opts.right;
	const selected = opts.selected === key;
	const tokens = tokensFor(cfg, empty, opts.et);
	const sideName = opts.et(key === "header_left" ? "header_left" : "header_right");
	return b`<button
    type="button"
    class=${e$1({
		"wl-zone": true,
		"wl-zone--selected": selected,
		"wl-zone--right": key === "header_right"
	})}
    aria-pressed=${selected ? "true" : "false"}
    aria-label=${`${sideName}: ${tokens.map((t) => t.name).join(", ")}`}
    @click=${() => cb.selectSide(key)}
  >
    <span class="wl-zone-tokens">
      ${tokens.map((t) => b`<span
          class=${e$1({
		"wl-token": true,
		"wl-token--chip": t.kind === "chip"
	})}
          >${t.icon ? b`<ha-icon icon=${t.icon} aria-hidden="true"></ha-icon>` : t.label}</span
        >`)}
    </span>
  </button>`;
}
function renderChipsAndIcons(side, opts, patch) {
	const chips = side.chips ?? [];
	const icons = side.extra_icons ?? [];
	return b`
    <div class="wl-group">
      <span class="wl-label"
        >${opts.et("header_chips_and_icons").replace("{chips}", String(6)).replace("{icons}", String(3))}</span
      >
      <div class="wl-tray">
        ${icons.map((icon, i) => b`<span class="wl-pill">
            <ha-icon icon=${icon} aria-hidden="true"></ha-icon>
            <button
              type="button"
              class="wl-pill-x"
              aria-label=${opts.et("remove_icon_aria").replace("{icon}", icon)}
              @click=${() => patch("extra_icons", removeAt(icons, i))}
            >
              <ha-icon icon="mdi:close" aria-hidden="true"></ha-icon>
            </button>
          </span>`)}
        ${chips.map((chip, i) => b`<span class="wl-pill">
            ${chip}
            <button
              type="button"
              class="wl-pill-x"
              aria-label=${opts.et("remove_chip_aria").replace("{chip}", chip)}
              @click=${() => patch("chips", removeAt(chips, i))}
            >
              <ha-icon icon="mdi:close" aria-hidden="true"></ha-icon>
            </button>
          </span>`)}
      </div>

      ${icons.length < 3 ? b`<ha-icon-picker
            .value=${l("")}
            .label=${opts.et("add_icon")}
            @value-changed=${(ev) => {
		const v = ev.detail?.value;
		if (!v) return;
		patch("extra_icons", [...icons, v].slice(0, 3));
	}}
          ></ha-icon-picker>` : A}
      ${chips.length < 6 ? b`<input
            type="text"
            class="wl-text"
            maxlength=${16}
            aria-label=${opts.et("add_chip")}
            placeholder=${opts.et("add_chip")}
            @keydown=${(ev) => {
		swallowEditorKeys(ev);
		if (ev.key !== "Enter") return;
		const el = ev.target;
		const v = el.value.trim();
		if (!v) return;
		patch("chips", [...chips, v].slice(0, 6));
		el.value = "";
	}}
            @keyup=${swallowEditorKeys}
            @keypress=${swallowEditorKeys}
          />` : A}
    </div>
  `;
}
function removeAt(list, index) {
	const next = list.filter((_, i) => i !== index);
	return next.length ? next : void 0;
}
/** The "Header" section of the retro and flap editors: the `show_header`
*  toggle, and the strip beneath it while the header is on. Both editors
*  render it identically; only where they keep `_headerSide` differs. */
function renderHeaderSection(opts) {
	return renderSection({
		title: opts.et("section_header"),
		hint: opts.et("section_header_hint")
	}, b`
      <ha-form
        .hass=${opts.hass}
        .data=${{ show_header: opts.showHeader }}
        .schema=${[{
		name: "show_header",
		selector: { boolean: {} }
	}]}
        .computeLabel=${opts.computeLabel}
        .computeHelper=${opts.computeHelper}
        @value-changed=${(ev) => {
		ev.stopPropagation();
		opts.onChange(ev.detail.value);
	}}
      ></ha-form>
      ${opts.showHeader ? renderHeaderStrip({
		left: opts.left,
		right: opts.right,
		selected: opts.selected,
		et: opts.et
	}, {
		selectSide: opts.selectSide,
		patch: (side, field, value) => opts.onChange({ [side]: patchHeaderSide(opts.currentSide(side), field, value) })
	}) : A}
    `);
}

//#endregion
//#region src/utils/departures.ts
function lineDirKey(line, direction) {
	return `${line}|${direction}`;
}
/** The direction a stub config (card picker) starts on: `R` only when the
*  stop has live departures and none of them run `H`, else `H`. Prefers the
*  side with data right now so the picker preview isn't an empty board.
*
*  Deliberately reads live departures only, not `directionSurface`: the
*  preview is about what renders this minute, not what the stop serves. */
function stubDirection(departures) {
	if (!Array.isArray(departures)) return "H";
	const deps = departures;
	const hasH = deps.some((d) => d.direction === "H");
	const hasR = deps.some((d) => d.direction === "R");
	return !hasH && hasR ? "R" : "H";
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
//#region src/utils.ts
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
//#region src/utils/flap-config.ts
const FLAP_SIZES = /* @__PURE__ */ new Set([
	"small",
	"medium",
	"regular"
]);
/** Whitelist for station_bg. `"line"` (sentinel) and the two literal
*  colour values are exact-match; `"line:<X>"` is matched by prefix in
*  the normaliser. The renderer resolves `"line"`/`"line:<X>"` against
*  the live GTFS palette at paint time. */
const FLAP_STATION_BG_LITERALS = /* @__PURE__ */ new Set([
	"line",
	"white",
	"black"
]);
function normaliseStationBg(raw) {
	if (typeof raw !== "string") return CARD_DEFAULTS.station_bg.flap;
	if (FLAP_STATION_BG_LITERALS.has(raw)) return raw;
	if (raw.startsWith("line:") && raw.length > 5) return raw;
	return CARD_DEFAULTS.station_bg.flap;
}
function asBool(v, fallback) {
	return typeof v === "boolean" ? v : fallback;
}
function normaliseStopEntry(raw) {
	if (typeof raw === "string") return raw.startsWith("sensor.") ? { entity: raw } : null;
	if (!raw || typeof raw !== "object") return null;
	const r = raw;
	const entity = typeof r.entity === "string" ? r.entity : null;
	if (!entity?.startsWith("sensor.")) return null;
	return normaliseStopFields(entity, r);
}
const FLAP_VALIDATED_KEYS = /* @__PURE__ */ new Set([
	"type",
	"entities",
	"entity",
	"line",
	"lines",
	"direction",
	"walk_times",
	"size",
	"max_rows",
	"show_platform",
	"show_station_name",
	"show_station_header",
	"station_bg",
	"show_min_unit",
	"show_accessibility",
	"accessibility_only",
	"show_header",
	"header_left",
	"header_right",
	"hide_attribution",
	"show_line_column",
	"line_pill",
	"housing"
]);
function normaliseFlapConfig(raw) {
	const size = FLAP_SIZES.has(raw.size) ? raw.size : CARD_DEFAULTS.size.flap;
	const maxRowsRaw = Number(raw.max_rows);
	const max_rowsValid = Number.isFinite(maxRowsRaw);
	if (raw.max_rows !== void 0 && !max_rowsValid) console.warn(`[wiener-linien-austria-flap-card] max_rows ${JSON.stringify(raw.max_rows)} is not a number — falling back to 2`);
	const max_rows = max_rowsValid ? Math.max(1, Math.min(8, Math.round(maxRowsRaw))) : 2;
	let rawEntities = [];
	if (Array.isArray(raw.entities)) rawEntities = raw.entities;
	else if (typeof raw.entity === "string") {
		let legacyLines;
		if (Array.isArray(raw.lines)) legacyLines = raw.lines.filter((l) => typeof l === "string" && l.length > 0);
		else if (typeof raw.line === "string" && raw.line) legacyLines = [raw.line];
		rawEntities = [{
			entity: raw.entity,
			...legacyLines && legacyLines.length ? { lines: legacyLines } : {},
			...raw.direction !== void 0 ? { direction: raw.direction } : {},
			...raw.walk_times !== void 0 ? { walk_times: raw.walk_times } : {}
		}];
	}
	const entities = [];
	const seen = /* @__PURE__ */ new Set();
	for (const r of rawEntities) {
		const stop = normaliseStopEntry(r);
		if (!stop) {
			console.warn("[wiener-linien-austria-flap-card] dropping malformed stop entry", r);
			continue;
		}
		if (seen.has(stop.entity)) continue;
		seen.add(stop.entity);
		entities.push(stop);
	}
	const passthrough = filterPassthrough(raw, FLAP_VALIDATED_KEYS);
	const station_bg = normaliseStationBg(raw.station_bg);
	const legacyStation = raw.show_station_header;
	const show_station_name = typeof raw.show_station_name === "boolean" ? raw.show_station_name : typeof legacyStation === "boolean" ? legacyStation : CARD_DEFAULTS.show_station_name.flap;
	return {
		...passthrough,
		type: raw.type || "custom:wiener-linien-austria-flap-card",
		entities,
		size,
		max_rows,
		show_platform: asBool(raw.show_platform, CARD_DEFAULTS.show_platform.flap),
		show_station_name,
		station_bg,
		show_min_unit: asBool(raw.show_min_unit, CARD_DEFAULTS.unit_caption.flap),
		show_accessibility: asBool(raw.show_accessibility, true),
		accessibility_only: raw.accessibility_only === true,
		show_header: raw.show_header === true,
		header_left: normaliseRetroHeaderSide(raw.header_left),
		header_right: normaliseRetroHeaderSide(raw.header_right),
		hide_attribution: raw.hide_attribution === true,
		show_line_column: raw.show_line_column !== void 0 ? raw.show_line_column === true : raw.line_pill !== true,
		housing: asBool(raw.housing, CARD_DEFAULTS.housing.flap)
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
//#region src/flap-editor.ts
let WienerLinienAustriaFlapCardEditor = class WienerLinienAustriaFlapCardEditor extends i$4 {
	constructor(..._args) {
		super(..._args);
		this._tab = "stops";
		this._headerSide = "header_left";
		this._onEntitiesChanged = (ev) => {
			ev.stopPropagation();
			if (!this._config) return;
			this._commit(normaliseFlapConfig({
				...this._config,
				entities: rebuildStops(this._config.entities, ev.detail.value["entities"])
			}));
		};
		this._computeLabel = (field) => editorLabel(this.hass, this._i18n, field.name);
		this._computeHelper = (field) => {
			const { et } = this._i18n;
			return editorHelper(this._i18n, field.name, { ...this._config?.show_accessibility ? {} : { accessibility_only: et("accessibility_only_requires") } });
		};
	}
	setConfig(config) {
		if (!config || typeof config !== "object") throw new Error("wiener-linien-austria-flap-card-editor: config must be an object");
		if (config.entity !== void 0 && typeof config.entity !== "string") throw new Error("wiener-linien-austria-flap-card-editor: 'entity' must be a string");
		this._config = normaliseFlapConfig(config);
	}
	shouldUpdate(changed) {
		if (!this._config) return false;
		if (changed.has("_config") || changed.has("_tab") || changed.has("_headerSide")) return true;
		const prev = changed.get("hass");
		if (!prev || !this.hass) return true;
		const eids = this._config.entities.map((s) => s.entity);
		if (eids.length === 0) return true;
		return eids.some((eid) => prev.states[eid] !== this.hass.states[eid]);
	}
	get _i18n() {
		return editorTranslators("flap", this.hass?.language);
	}
	_commit(next) {
		this._config = next;
		fireEvent(this, "config-changed", { config: next });
	}
	/** Merge one section form's partial value into the config. Sections emit
	*  only their own fields, so this is a merge, never a replace. */
	_patch(value) {
		if (!this._config) return;
		this._commit(normaliseFlapConfig({
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
			case "tweaks": return this._renderTweaks();
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
			lineColorOverrides: {},
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
      ${renderHeaderSection({
			hass: this.hass,
			showHeader: cfg.show_header,
			left: cfg.header_left,
			right: cfg.header_right,
			selected: this._headerSide,
			et,
			computeLabel: this._computeLabel,
			computeHelper: this._computeHelper,
			currentSide: (side) => this._config?.[side],
			onChange: (v) => this._patch(v),
			selectSide: (side) => {
				this._headerSide = side;
			}
		})}
      ${renderFormSection({
			...common,
			title: et("section_station"),
			data: {
				show_station_name: cfg.show_station_name,
				station_bg: cfg.station_bg
			},
			schema: [{
				name: "show_station_name",
				selector: { boolean: {} }
			}, {
				name: "station_bg",
				selector: { select: {
					mode: "dropdown",
					options: this._stationBgOptions()
				} }
			}]
		})}
      ${renderFormSection({
			...common,
			title: et("section_departure_row"),
			hint: et("section_board"),
			data: {
				max_rows: cfg.max_rows,
				show_platform: cfg.show_platform,
				show_accessibility: cfg.show_accessibility,
				accessibility_only: cfg.accessibility_only
			},
			schema: [
				{
					name: "max_rows",
					selector: { number: {
						min: 1,
						max: 8,
						step: 1,
						mode: "slider"
					} }
				},
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
				}
			]
		})}
    `;
	}
	_renderTweaks() {
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
			title: et("section_board"),
			data: {
				size: cfg.size,
				show_min_unit: cfg.show_min_unit,
				show_line_column: cfg.show_line_column,
				housing: cfg.housing
			},
			schema: [
				{
					name: "size",
					selector: { select: {
						mode: "dropdown",
						options: [
							{
								value: "small",
								label: et("size_small")
							},
							{
								value: "medium",
								label: et("size_medium")
							},
							{
								value: "regular",
								label: et("size_regular")
							}
						]
					} }
				},
				{
					name: "show_min_unit",
					selector: { boolean: {} }
				},
				{
					name: "show_line_column",
					selector: { boolean: {} }
				},
				{
					name: "housing",
					selector: { boolean: {} }
				}
			]
		})}
      ${renderFormSection({
			...common,
			title: et("section_footer"),
			data: { hide_attribution: cfg.hide_attribution },
			schema: [{
				name: "hide_attribution",
				selector: { boolean: {} }
			}]
		})}
    `;
	}
	/** Station-band background options: the sentinel, then one entry per line the
	*  board actually tracks, then the two static colours. Per-line entries come
	*  from each stop's `lines` filter, or the sensor's `tracked_lines` when no
	*  filter is set, so the dropdown offers what this board can actually show. */
	_stationBgOptions() {
		const { et } = this._i18n;
		const options = [{
			value: "line",
			label: et("station_bg_line")
		}];
		const tracked = /* @__PURE__ */ new Set();
		for (const stop of this._config?.entities ?? []) {
			const attrs = this.hass?.states?.[stop.entity]?.attributes;
			const stopLines = stop.lines && stop.lines.length > 0 ? stop.lines : attrs?.tracked_lines;
			for (const ln of stopLines ?? []) if (typeof ln === "string" && ln) tracked.add(ln);
		}
		if (tracked.size === 0) {
			const firstEid = this._config?.entities?.[0]?.entity;
			const lineColors = firstEid ? (this.hass?.states?.[firstEid]?.attributes)?.line_colors : void 0;
			for (const ln of Object.keys(lineColors ?? {})) tracked.add(ln);
		}
		for (const line of [...tracked].sort()) options.push({
			value: `line:${line}`,
			label: line
		});
		options.push({
			value: "white",
			label: et("station_bg_white")
		});
		options.push({
			value: "black",
			label: et("station_bg_black")
		});
		return options;
	}
	static {
		this.styles = [
			editorTokens,
			editorStyles,
			headerStripStyles
		];
	}
};
__decorate([n$2({ attribute: false })], WienerLinienAustriaFlapCardEditor.prototype, "hass", void 0);
__decorate([r$1()], WienerLinienAustriaFlapCardEditor.prototype, "_config", void 0);
__decorate([r$1()], WienerLinienAustriaFlapCardEditor.prototype, "_tab", void 0);
__decorate([r$1()], WienerLinienAustriaFlapCardEditor.prototype, "_headerSide", void 0);
WienerLinienAustriaFlapCardEditor = __decorate([t$2("wiener-linien-austria-flap-card-editor")], WienerLinienAustriaFlapCardEditor);

//#endregion
//#region src/utils/time.ts
function formatClock(serverTime) {
	if (!serverTime) return null;
	const ts = Date.parse(serverTime);
	if (!Number.isFinite(ts)) return null;
	const d = new Date(ts);
	return `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
}
function pad2(n) {
	return String(n).padStart(2, "0");
}
function formatDate(date, format, lang = "de") {
	if (!format) return "";
	const locale = lang === "en" ? "en-GB" : "de-AT";
	const weekdayLong = () => date.toLocaleDateString(locale, { weekday: "long" });
	const weekdayShort = () => date.toLocaleDateString(locale, { weekday: "short" });
	const monthLong = () => date.toLocaleDateString(locale, { month: "long" });
	const monthShort = () => date.toLocaleDateString(locale, { month: "short" });
	let result = "";
	let i = 0;
	while (i < format.length) {
		const c = format[i];
		if (c === "\\" && i + 1 < format.length) {
			result += format[i + 1];
			i += 2;
			continue;
		}
		switch (c) {
			case "d":
				result += pad2(date.getDate());
				break;
			case "j":
				result += String(date.getDate());
				break;
			case "D":
				result += weekdayShort();
				break;
			case "l":
				result += weekdayLong();
				break;
			case "m":
				result += pad2(date.getMonth() + 1);
				break;
			case "n":
				result += String(date.getMonth() + 1);
				break;
			case "M":
				result += monthShort();
				break;
			case "F":
				result += monthLong();
				break;
			case "Y":
				result += String(date.getFullYear());
				break;
			case "y":
				result += pad2(date.getFullYear() % 100);
				break;
			case "H":
				result += pad2(date.getHours());
				break;
			case "G":
				result += String(date.getHours());
				break;
			case "h":
				result += pad2((date.getHours() + 11) % 12 + 1);
				break;
			case "g":
				result += String((date.getHours() + 11) % 12 + 1);
				break;
			case "i":
				result += pad2(date.getMinutes());
				break;
			case "s":
				result += pad2(date.getSeconds());
				break;
			default: result += c ?? "";
		}
		i++;
	}
	return result;
}

//#endregion
//#region src/utils/station-header.ts
/** Format an ISO timestamp as a PHP-style date string for the optional
*  header date chip. Returns `null` when server_time is missing /
*  unparseable or the format string is empty — the caller omits the chip
*  rather than painting an obvious placeholder. */
function formatDateChip(serverTime, format, lang) {
	if (!serverTime || !format) return null;
	const ts = Date.parse(serverTime);
	if (!Number.isFinite(ts)) return null;
	return formatDate(new Date(ts), format, lang);
}
function renderHeaderSide(side, pos, serverTime, t, lang) {
	let exitNode = A;
	if (side.exit === "regular" || side.exit === "accessible") {
		const key = side.exit === "regular" ? "exit" : "exit-access";
		exitNode = renderRetroHeaderIcon(key, {
			ariaLabel: t(`header.${RETRO_HEADER_ICONS[key].labelKey}`),
			flipX: RETRO_HEADER_ICONS[key].glyphPointsTo !== pos
		});
	} else if (side.exit && isRetroHeaderMdiExit(side.exit)) {
		const meta = RETRO_HEADER_MDI_EXITS[side.exit];
		exitNode = renderRetroHeaderMdiIcon(side.exit, {
			ariaLabel: t(`header.${meta.labelKey}`),
			flipX: meta.glyphPointsTo !== void 0 && meta.glyphPointsTo !== pos
		});
	}
	const textNode = side.text ? b`<span class="retro-station-header__text">${side.text}</span>` : A;
	const amenityKey = (key) => renderRetroHeaderIcon(key, { ariaLabel: t(`header.${RETRO_HEADER_ICONS[key].labelKey}`) });
	const wc = side.show_wc ? amenityKey("wc") : A;
	const esc = side.show_escalator ? amenityKey("escalator") : A;
	const elv = side.show_elevator ? amenityKey("elevator") : A;
	const mdiTileNodes = (side.extra_icons ?? []).map((icon) => renderRetroHeaderMdiTile(icon, icon));
	const mdiTilesRightOrder = [...mdiTileNodes].reverse();
	const chipNodes = (side.chips ?? []).map((chipText) => b`<span class="retro-station-header__chip">${chipText}</span>`);
	const chipsRightOrder = [...chipNodes].reverse();
	const clockText = side.show_clock ? formatClock(serverTime) : null;
	const clockNode = clockText ? b`<span
        class="retro-station-header__chip retro-station-header__chip--clock"
      >
        <ha-icon
          class="retro-station-header__chip-icon"
          icon="mdi:clock-outline"
        ></ha-icon>
        <span>${clockText}</span>
      </span>` : A;
	const dateText = side.show_date ? formatDateChip(serverTime, side.date_format ?? "d.m.Y", lang) : null;
	const dateNode = dateText ? b`<span
        class="retro-station-header__chip retro-station-header__chip--date"
        >${dateText}</span
      >` : A;
	return pos === "left" ? b`${exitNode}${textNode}${elv}${esc}${wc}${mdiTileNodes}${chipNodes}${dateNode}${clockNode}` : b`${clockNode}${dateNode}${chipsRightOrder}${mdiTilesRightOrder}${wc}${esc}${elv}${textNode}${exitNode}`;
}
/** Render the black header strip above the orange/cream station band.
*  Returns `nothing` when neither side is configured, so a card with no
*  `header_left` / `header_right` in YAML is byte-identical to its
*  pre-header behaviour.
*
*  Per-side render order, mirrored so the same glyph always sits the same
*  distance from the station name on both sides — wheelchair-relevant info
*  keeps its prominence whichever side it is on. Outward from the text:
*   - LEFT:  [exit] [text] [Elevator] [Escalator] [WC] [icons] [chips] [date] [clock]
*   - RIGHT: [clock] [date] [chips] [icons] [WC] [Escalator] [Elevator] [text] [exit]
*  Index 0 of `extra_icons` / `chips` sits closest to the WC tile on both
*  sides; clock sits innermost so the time is nearest the strip's centre.
*
*  `t` is the card's flat-key translate callback; `lang` is the HA
*  language for the date chip's locale-aware tokens. */
function renderStationHeader(opts) {
	const { left, right, serverTime, t, lang } = opts;
	if (!left && !right) return A;
	return b`
    <div class="retro-station-header" role="group">
      <div class="retro-station-header__side retro-station-header__side--left">
        ${left ? renderHeaderSide(left, "left", serverTime, t, lang) : A}
      </div>
      <div class="retro-station-header__side retro-station-header__side--right">
        ${right ? renderHeaderSide(right, "right", serverTime, t, lang) : A}
      </div>
    </div>
  `;
}

//#endregion
//#region src/wiener-linien-austria-flap-card.ts
const FLAP_MARCH_INTERVAL_MS = 130;
const FLAP_LETTER_SEQUENCE = "ABCDEFGHIJKLMNOPQRSTUVWXYZÄÖÜß";
const FLAP_DIGIT_SEQUENCE = "0123456789";
function nextInSeq(seq, from, to) {
	const next = ((seq.includes(from) ? seq.indexOf(from) : seq.length) + 1) % (seq.length + 1);
	return next === seq.length ? to : seq[next];
}
function flapNextChar(from, to) {
	if (from === to) return to;
	const fromIsLetter = FLAP_LETTER_SEQUENCE.includes(from);
	const fromIsDigit = FLAP_DIGIT_SEQUENCE.includes(from);
	const toIsLetter = FLAP_LETTER_SEQUENCE.includes(to);
	const toIsDigit = FLAP_DIGIT_SEQUENCE.includes(to);
	if ((fromIsLetter || toIsLetter) && !fromIsDigit && !toIsDigit) return nextInSeq(FLAP_LETTER_SEQUENCE, from, to);
	if ((fromIsDigit || toIsDigit) && !fromIsLetter && !toIsLetter) return nextInSeq(FLAP_DIGIT_SEQUENCE, from, to);
	return to;
}
function flipKey(rowIdx, kind) {
	return `row${rowIdx}-${kind}`;
}
const TILE_W_BY_SIZE = {
	small: 22,
	medium: 28,
	regular: 32
};
const TILE_GAP_PX = 2;
const DEST_PICTOGRAM_GAP_PX = 6;
function padCountdown(countdown) {
	const cd = typeof countdown === "number" && Number.isFinite(countdown) ? countdown : null;
	if (cd === null) return "--";
	return String(cd <= 0 ? 0 : cd).padStart(2, " ");
}
{
	const win = window;
	win.customCards = win.customCards ?? [];
	if (!win.customCards.some((c) => c.type === "wiener-linien-austria-flap-card")) win.customCards.push({
		type: "wiener-linien-austria-flap-card",
		name: "Wiener Linien Austria — Flap Board",
		description: pickerText("picker_flap"),
		preview: true,
		getEntitySuggestion: (hass, entityId) => {
			if (!entityId.startsWith("sensor.")) return null;
			if (hass?.entities?.[entityId]?.platform !== "wiener_linien_austria") return null;
			return { config: {
				type: "custom:wiener-linien-austria-flap-card",
				entities: [entityId]
			} };
		}
	});
}
let WienerLinienAustriaFlapCard = class WienerLinienAustriaFlapCard extends i$4 {
	constructor(..._args) {
		super(..._args);
		this._versionMismatch = null;
		this._displayed = {};
		this._target = {};
		this._justFlipped = {};
		this._marchTimer = null;
		this._versionCheckDone = false;
		this._fallbackWarned = false;
	}
	setConfig(config) {
		if (!config || typeof config !== "object") throw new Error("wiener-linien-austria-flap-card: config must be an object");
		if (config.entity !== void 0 && typeof config.entity !== "string") throw new Error("wiener-linien-austria-flap-card: 'entity' must be a string");
		const normalised = normaliseFlapConfig(config);
		if ((Array.isArray(config.entities) ? config.entities.length : typeof config.entity === "string" && config.entity ? 1 : 0) > 0 && normalised.entities.length === 0) throw new Error("wiener-linien-austria-flap-card: every configured entity was rejected (must start with `sensor.`) — see browser console for per-entry details");
		this._config = normalised;
		this._clearFlipTimer();
		this._displayed = {};
		this._target = {};
		this._justFlipped = {};
	}
	getCardSize() {
		return 3;
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
		return document.createElement("wiener-linien-austria-flap-card-editor");
	}
	static getStubConfig(hass) {
		const first = findWienerLinienEntities(hass)[0];
		if (!first) return {};
		return {
			entity: first,
			direction: stubDirection(hass?.states?.[first]?.attributes?.departures)
		};
	}
	connectedCallback() {
		super.connectedCallback();
		registerWlFonts();
		if (!this._versionCheckDone && this.hass?.callWS) {
			this._versionCheckDone = true;
			this._checkCardVersion();
		}
		if (this._hasPendingFlips()) this._ensureMarchTimer();
	}
	/** Any field whose displayed text hasn't reached its target yet — i.e.
	*  the march is unfinished and needs a timer to carry it. */
	_hasPendingFlips() {
		return Object.entries(this._target).some(([key, target]) => this._displayed[key] !== target);
	}
	disconnectedCallback() {
		super.disconnectedCallback();
		this._clearFlipTimer();
	}
	shouldUpdate(changed) {
		if (!this._config) return false;
		if (changed.has("_config") || changed.has("_versionMismatch") || changed.has("_displayed") || changed.has("_target") || changed.has("_justFlipped")) return true;
		const prev = changed.get("hass");
		if (!prev || !this.hass) return true;
		const eids = this._resolveStopEids();
		if (eids.length === 0) return false;
		return eids.some((eid) => prev.states[eid] !== this.hass.states[eid]);
	}
	willUpdate(changed) {
		if (!this._config) return;
		if (!changed.has("hass") && !changed.has("_config")) return;
		const rows = this._gatherRows();
		const maxDestLen = this._maxDestLen(rows);
		const maxLineLen = this._maxLineLen(rows);
		for (let i = 0; i < rows.length; i++) {
			const row = rows[i];
			if (!row) continue;
			this._diffFlipField(flipKey(i, "line"), (row.line ?? "?").toUpperCase().padStart(maxLineLen, " "));
			this._diffFlipField(flipKey(i, "dest"), (row.towards ?? "").toUpperCase().padEnd(maxDestLen, " "));
			this._diffFlipField(flipKey(i, "cd"), padCountdown(row.countdown));
		}
		for (let i = rows.length; i < this._config.max_rows; i++) {
			this._diffFlipField(flipKey(i, "line"), null);
			this._diffFlipField(flipKey(i, "dest"), null);
			this._diffFlipField(flipKey(i, "cd"), null);
		}
	}
	_clearFlipTimer() {
		if (this._marchTimer !== null) {
			clearInterval(this._marchTimer);
			this._marchTimer = null;
		}
	}
	/** Push a new target value for a field. First sighting adopts the
	*  value without marching (initial paint shouldn't flap from
	*  emptiness through the whole alphabet). Subsequent calls set
	*  the target and arm the march timer; the tick handler advances
	*  the displayed string toward the target one char at a time. */
	_diffFlipField(key, currentValue) {
		if (currentValue === null) {
			if (key in this._displayed) {
				const { [key]: _d, ...restD } = this._displayed;
				this._displayed = restD;
			}
			if (key in this._target) {
				const { [key]: _t, ...restT } = this._target;
				this._target = restT;
			}
			if (key in this._justFlipped) {
				const { [key]: _f, ...restF } = this._justFlipped;
				this._justFlipped = restF;
			}
			return;
		}
		if (this._displayed[key] === void 0) {
			this._displayed = {
				...this._displayed,
				[key]: currentValue
			};
			this._target = {
				...this._target,
				[key]: currentValue
			};
			return;
		}
		if (this._target[key] === currentValue) return;
		this._target = {
			...this._target,
			[key]: currentValue
		};
		this._ensureMarchTimer();
	}
	_ensureMarchTimer() {
		if (this._marchTimer !== null) return;
		this._marchTimer = setInterval(() => this._marchTick(), FLAP_MARCH_INTERVAL_MS);
	}
	_marchTick() {
		const nextDisplayed = { ...this._displayed };
		const nextJustFlipped = {};
		let activeAny = false;
		for (const [key, target] of Object.entries(this._target)) {
			const cur = nextDisplayed[key] ?? "";
			if (cur === target) continue;
			const maxLen = Math.max(cur.length, target.length);
			const newChars = [];
			const flipped = {};
			for (let i = 0; i < maxLen; i++) {
				const c = cur[i] ?? " ";
				const t = target[i] ?? " ";
				if (c === t) newChars.push(c);
				else {
					flipped[i] = c;
					newChars.push(flapNextChar(c, t));
				}
			}
			nextDisplayed[key] = newChars.join("");
			if (Object.keys(flipped).length > 0) {
				nextJustFlipped[key] = flipped;
				activeAny = true;
			}
		}
		this._displayed = nextDisplayed;
		this._justFlipped = nextJustFlipped;
		if (!activeAny) this._clearFlipTimer();
	}
	async _checkCardVersion() {
		this._versionMismatch = await checkCardVersionWS(this.hass, "wiener_linien_austria/flap_card_version", FLAP_CARD_VERSION);
	}
	/** Configured stop entity ids that actually exist in hass.states.
	*  When `entities` is empty (fresh card from the picker), fall back
	*  to the first auto-discovered WL sensor so the preview is
	*  populated. */
	_resolveStopEids() {
		const stops = this._config?.entities ?? [];
		const states = this.hass?.states;
		const out = stops.map((s) => s.entity).filter((eid) => states?.[eid]);
		if (out.length === 0 && stops.length === 0) {
			const first = findWienerLinienEntities(this.hass)[0];
			if (first) out.push(first);
		}
		if (out.length === 0 && stops.length > 0 && !this._fallbackWarned) {
			this._fallbackWarned = true;
			console.warn(`[wiener-linien-austria-flap-card] none of the configured entities exist in hass.states (${stops.map((s) => s.entity).join(", ")})`);
		}
		return out;
	}
	/** Longest destination text across the merged row set — drives the
	*  trailing-blank padding so every row carries the same number of
	*  destination tiles. Recomputed per render so a new long
	*  destination arriving (or an old one leaving) updates the
	*  column width on the next paint. */
	_maxDestLen(rows) {
		return Math.max(0, ...rows.map((r) => (r.towards ?? "").length));
	}
	/** Longest line label across the merged row set — drives the
	*  leading-blank padding so every row's line column carries the same
	*  number of tiles. A "48A" row (3 chars) makes every "U1" row
	*  (2 chars) render as a blank + "U1" right-aligned to width 3. */
	_maxLineLen(rows) {
		return Math.max(0, ...rows.map((r) => (r.line ?? "?").length));
	}
	/** Gather and merge departures from every configured stop, applying
	*  per-stop filters (lines, direction, walk_times) + the card-wide
	*  `accessibility_only`. Result is sorted by countdown ascending
	*  and sliced to `max_rows`. Used by both willUpdate (to feed the
	*  flip diff) and render (to paint the rows). */
	_gatherRows() {
		if (!this._config) return [];
		const stops = this._config.entities ?? [];
		const accessibilityOnly = this._config.accessibility_only;
		const merged = [];
		for (const stop of stops) {
			const attrs = this.hass?.states?.[stop.entity]?.attributes ?? {};
			const departures = Array.isArray(attrs.departures) ? attrs.departures : [];
			const filtered = filterDepartures(departures, {
				direction: stop.direction,
				lines: stop.lines,
				line_directions: stop.line_directions,
				walk_times: stop.walk_times,
				accessibility_only: accessibilityOnly
			});
			merged.push(...filtered);
		}
		const cd = (d) => Number.isFinite(d.countdown) ? d.countdown : Number.POSITIVE_INFINITY;
		merged.sort((a, b) => cd(a) - cd(b));
		return merged.slice(0, this._config.max_rows);
	}
	_t(key, replacements) {
		return translate(`flap.${key}`, { hassLanguage: this.hass?.language }, replacements);
	}
	render() {
		if (!this._config) return A;
		const cfg = this._config;
		const eids = this._resolveStopEids();
		const rows = this._gatherRows();
		const firstEid = eids[0] ?? "";
		const firstAttrs = firstEid ? this.hass?.states?.[firstEid]?.attributes ?? {} : {};
		const stationName = firstAttrs.stop_name || firstAttrs.friendly_name || "";
		const serverTime = firstAttrs.server_time;
		const lineColors = mergeLineColorsMaps(this.hass, eids);
		const hasAnyPlatform = cfg.show_platform && rows.some((d) => d.platform);
		const isMetro = (rows[0]?.type ?? "") === LINE_TYPE_METRO;
		const platformLabel = this._t(isMetro ? "gleis" : "steig");
		const isLightTheme = this.hass?.themes?.darkMode === false;
		const classes = {
			flap: true,
			[`flap--size-${cfg.size}`]: cfg.size !== "regular",
			"flap--has-platform": hasAnyPlatform,
			"flap--light": isLightTheme,
			"flap--no-line": !cfg.show_line_column,
			"flap--no-housing": !cfg.housing
		};
		const headerStyle = this._resolveStationHeaderStyle(cfg.station_bg, cfg.entities, rows, lineColors);
		const stationHeaderStrip = cfg.show_header ? renderStationHeader({
			left: cfg.header_left,
			right: cfg.header_right,
			serverTime,
			t: (k) => this._t(k),
			lang: this.hass?.language
		}) : A;
		const attribution = cfg.hide_attribution ? "" : typeof firstAttrs.attribution === "string" && firstAttrs.attribution || "Datenquelle: Wiener Linien (data.wien.gv.at), CC BY 4.0";
		return b`
      <ha-card style="padding:0;overflow:hidden;">
        <div class=${e$1(classes)}>
          ${renderVersionBanner(this._versionMismatch, (k) => this._t(k), "flap-banner")}
          ${stationHeaderStrip}
          ${cfg.show_station_name ? b`<div
                class="flap-header"
                role="group"
                style=${o(headerStyle)}
              >
                <div class="flap-header__station">${stationName}</div>
              </div>` : A}
          <div class="flap-panel">
            ${this._renderBoard(eids, rows, hasAnyPlatform, platformLabel, cfg.show_accessibility, !cfg.show_line_column, lineColors)}
            ${attribution ? b`<div class="flap-foot">${attribution}</div>` : A}
          </div>
        </div>
      </ha-card>
    `;
	}
	/** Resolve the station-name band's bg + fg from cfg.station_bg.
	*
	*  - `"white"` / `"black"`  → static colour pair (text colour picked
	*                              for AAA contrast on each surface).
	*  - `"line"`               → sentinel: use the FIRST tracked line's
	*                              GTFS colour at render time. Looks at
	*                              `entities[0].lines[0]` first (user's
	*                              explicit config), falls back to the
	*                              first row's line (live data) when no
	*                              `lines` filter is set.
	*  - `"line:<X>"`           → use line `<X>`'s GTFS colour
	*                              regardless of which line is dominant.
	*
	*  Returns a `styleMap`-compatible object. WL-orange is the ultimate
	*  fallback so a fresh entry without sensor data ever renders blank.
	*/
	_resolveStationHeaderStyle(bg, entities, rows, lineColors) {
		if (bg === "white") return {
			background: "#ffffff",
			color: "#1a1410"
		};
		if (bg === "black") return {
			background: "#000000",
			color: "var(--flap-cream-hi)"
		};
		let line;
		if (bg === "line") line = entities[0]?.lines?.[0] ?? rows[0]?.line;
		else if (bg.startsWith("line:")) line = bg.slice(5);
		if (!line) return { background: "var(--wl-orange)" };
		const palette = chipPalette(line, {}, lineColors);
		return {
			background: palette.background === "var(--primary-color)" ? "var(--wl-orange)" : palette.background,
			color: "var(--flap-on-color-fg)"
		};
	}
	_renderBoard(eids, rows, hasAnyPlatform, platformLabel, showAccessibility, hideLineColumn, lineColors) {
		const maxDestLen = this._maxDestLen(rows);
		const maxLineLen = this._maxLineLen(rows);
		if (eids.length === 0) return b`<div class="flap-empty">${this._t("no_entity")}</div>`;
		if (rows.length === 0) {
			const anyDepartures = eids.some((eid) => {
				const attrs = this.hass?.states?.[eid]?.attributes ?? {};
				return Array.isArray(attrs.departures) && attrs.departures.length > 0;
			});
			const anyStale = eids.some((eid) => {
				const attrs = this.hass?.states?.[eid]?.attributes ?? {};
				return typeof attrs.stale_departures === "number" && attrs.stale_departures > 0;
			});
			const key = anyDepartures ? "no_data" : anyStale ? "stale_feed" : "betriebsschluss";
			return b`<div class="flap-empty">${this._t(key)}</div>`;
		}
		const tileW = TILE_W_BY_SIZE[this._config?.size ?? "regular"];
		const destStripPx = maxDestLen * tileW + Math.max(0, maxDestLen - 1) * TILE_GAP_PX;
		const destContentPx = showAccessibility ? destStripPx + DEST_PICTOGRAM_GAP_PX + tileW : destStripPx;
		return b`
      <div
        class=${e$1({
			"flap-board": true,
			"flap-board--has-platform": hasAnyPlatform,
			"flap-board--no-line": hideLineColumn
		})}
        role="list"
        aria-label=${this._t("departures_list")}
      >
        <div class="flap-colheader" aria-hidden="true">
          ${hideLineColumn ? A : b`<span class="flap-colheader__line"
                >${this._t("col_line")}</span
              >`}
          <span
            class="flap-colheader__dest"
            style=${o({ maxWidth: `${destContentPx}px` })}
          >
            <span>${this._t("col_dest")}</span>
            ${showAccessibility ? b`<span class="flap-colheader__step-free"
                  >${this._t("col_step_free")}</span
                >` : A}
          </span>
          ${hasAnyPlatform ? b`<span class="flap-colheader__platform"
                >${platformLabel}</span
              >` : A}
          <span class="flap-colheader__cd">${this._t("col_cd")}</span>
        </div>
        ${rows.map((d, i) => this._renderRow(d, i, lineColors, hasAnyPlatform, hideLineColumn, maxDestLen, maxLineLen))}
      </div>
    `;
	}
	_renderRow(d, rowIndex, lineColors, hasAnyPlatform, hideLineColumn, maxDestLen, maxLineLen) {
		const cfg = this._config;
		const cd = Number.isFinite(d.countdown) ? d.countdown : null;
		const isAtPlatform = cd !== null && cd <= 0;
		const rawLine = (d.line ?? "?").toUpperCase();
		const line = rawLine.padStart(maxLineLen, " ");
		const towards = (d.towards ?? "").toUpperCase();
		const rowLabel = [
			rawLine,
			towards,
			cd === null ? this._t("no_data") : isAtPlatform ? this._t("at_platform") : this._t("countdown_minutes", { n: String(cd) }),
			d.timetable ? this._t("timetable_title") : ""
		].filter(Boolean).join(" — ");
		const palette = chipPalette(rawLine, {}, lineColors);
		const lineTileOpts = palette.background !== "var(--primary-color)" ? {
			tileBg: palette.background,
			blankSpace: true
		} : { blankSpace: true };
		const cdContent = this._renderFlipString(padCountdown(d.countdown), flipKey(rowIndex, "cd"), { blankSpace: true });
		const platformCell = hasAnyPlatform ? b`<div class="flap-cell flap-cell--platform" aria-hidden="true">
          ${d.platform ? this._renderTile(d.platform, void 0, 0, { wide: true }) : this._renderTile(" ", void 0, 0, {
			wide: true,
			blankSpace: true
		})}
        </div>` : A;
		return b`
      <div class="flap-row" role="listitem" aria-label=${rowLabel}>
        ${hideLineColumn ? A : b`<div class="flap-cell flap-cell--line" aria-hidden="true">
              ${this._renderFlipString(line, flipKey(rowIndex, "line"), lineTileOpts)}
            </div>`}
        <div class="flap-cell flap-cell--dest" aria-hidden="true">
          ${this._renderFlipString(towards.padEnd(maxDestLen, " "), flipKey(rowIndex, "dest"), { blankSpace: true })}
          ${cfg.show_accessibility ? d.barrier_free ? this._renderPictogramTile("mdi:wheelchair-accessibility", this._t("barrier_free_title")) : this._renderAccessibilityBlankTile(this._t("not_barrier_free_title")) : A}
        </div>
        ${platformCell}
        <div class="flap-cell flap-cell--cd" aria-hidden="true">
          ${d.timetable ? this._renderPictogramTile("mdi:calendar-clock", this._t("timetable_title"), "plain") : A}
          <span class="flap-cd-tiles">${cdContent}</span>
          ${cfg.show_min_unit && cd !== null ? b`<span class="flap-cd-unit">${this._t("unit_min")}</span>` : A}
        </div>
      </div>
    `;
	}
	_renderFlipString(text, key, opts = {}) {
		const chars = (this._displayed[key] ?? text).split("");
		const flipping = this._justFlipped[key] ?? {};
		return b`<span class="flap-tiles" aria-label=${text}
      >${chars.map((char, i) => i$1(`${i}:${char}`, this._renderTile(char, flipping[i], i, opts)))}</span
    >`;
	}
	_renderTile(current, flippingFrom, index, opts = {}) {
		if (current === " " && !opts.blankSpace) return b`<span class="flap-space" aria-hidden="true">&nbsp;</span>`;
		const isBlank = current === " ";
		const effectiveBg = isBlank ? void 0 : opts.tileBg;
		const effectiveFg = isBlank ? void 0 : opts.tileFg;
		const isFlipping = flippingFrom !== void 0;
		const tileStyle = o({
			"--tile-i": String(index),
			...effectiveBg ? { "--tile-bg": effectiveBg } : {},
			...effectiveFg ? { "--tile-fg": effectiveFg } : {}
		});
		const tileClass = e$1({
			"flap-tile": true,
			"flap-tile--wide": opts.wide === true,
			"flap-tile--color": effectiveBg !== void 0,
			"flap-tile--flipping": isFlipping,
			"flap-tile--blank": isBlank
		});
		const glyphContent = current === " " ? "" : current;
		return b`<span class=${tileClass} style=${tileStyle}>
      <span class="flap-tile__half flap-tile__half--top"
        ><span class="flap-tile__glyph">${glyphContent}</span></span
      >
      <span class="flap-tile__half flap-tile__half--bottom"
        ><span class="flap-tile__glyph">${glyphContent}</span></span
      >
      <span class="flap-tile__seam" aria-hidden="true"></span>
      <span class="flap-tile__pin flap-tile__pin--l" aria-hidden="true"></span>
      <span class="flap-tile__pin flap-tile__pin--r" aria-hidden="true"></span>
      ${isFlipping ? b`<span class="flap-tile__leaf"
            ><span class="flap-tile__glyph">${flippingFrom === " " ? "" : flippingFrom}</span></span
          >` : A}
    </span>`;
	}
	_renderPictogramTile(icon, ariaLabel, face = "a11y") {
		return b`<span
      class="flap-tile flap-tile--pictogram${face === "plain" ? " flap-tile--pictogram-plain" : ""}"
      aria-label=${ariaLabel}
    >
      <span class="flap-tile__half flap-tile__half--top"></span>
      <span class="flap-tile__half flap-tile__half--bottom"></span>
      <span class="flap-tile__pictogram-overlay">
        <ha-icon class="flap-tile__pictogram" .icon=${icon}></ha-icon>
      </span>
      <span class="flap-tile__seam" aria-hidden="true"></span>
      <span class="flap-tile__pin flap-tile__pin--l" aria-hidden="true"></span>
      <span class="flap-tile__pin flap-tile__pin--r" aria-hidden="true"></span>
    </span>`;
	}
	/** Empty white-faced tile used in the accessibility slot when a
	*  departure is NOT step-free. Same flap geometry as the cream +
	*  blue tiles — keeps the column width consistent across rows so
	*  the wheelchair tile, when it does appear, sits in the same
	*  horizontal position every time. White (vs cream) so the
	*  "no accessibility info here" reading is distinct from the
	*  cream destination tiles next to it. */
	_renderAccessibilityBlankTile(ariaLabel) {
		return b`<span
      class="flap-tile flap-tile--a11y-blank"
      aria-label=${ariaLabel}
    >
      <span class="flap-tile__half flap-tile__half--top"></span>
      <span class="flap-tile__half flap-tile__half--bottom"></span>
      <span class="flap-tile__seam" aria-hidden="true"></span>
      <span class="flap-tile__pin flap-tile__pin--l" aria-hidden="true"></span>
      <span class="flap-tile__pin flap-tile__pin--r" aria-hidden="true"></span>
    </span>`;
	}
	static {
		this.styles = i$7`
    /* Register --tile-bg as a typed color so CSS can interpolate it
       inside the half / leaf gradients. Without this, transitioning
       a generic --tile-bg would swap as strings — no cross-fade. */
    @property --tile-bg {
      syntax: "<color>";
      inherits: true;
      initial-value: transparent;
    }
    :host {
      display: block;
      /* Stacking context for the housing shadow + tile drop-shadows
         so they only compete with each other, not the surrounding
         HA dashboard chrome. */
      isolation: isolate;
      /* Tells the browser this card supports both light and dark
         schemes so form controls / scrollbars match whichever
         palette the .flap--light class below selects. */
      color-scheme: light dark;
      /* Solari palette — exposed as custom properties so the
         .flap--light block below can flip the board theme in one
         place. Default values = dark mode. */
      --flap-housing: #1a1612;
      --flap-bg: #0d0b08;
      --flap-cream-hi: #f3eacd;
      --flap-cream: #e8ddbe;
      --flap-cream-lo: #cfc29c;
      --flap-ink: #1a1410;
      --flap-seam: rgba(0, 0, 0, 0.6);
      --flap-pin: rgba(0, 0, 0, 0.7);
      --wl-orange: #e97e00;
      /* International Symbol of Access blue (PMS 285 ≈ #0079c2).
         Used for wheelchair pictogram tiles so they read as the
         universally-recognised accessibility marker instead of
         blending into the cream voice of the rest of the board. */
      --flap-a11y: #0079c2;
      --flap-a11y-hi: #1c93d8;
      --flap-a11y-lo: #006099;
      /* Cross-theme semantic values. The board palette flips
         between light and dark modes, but these stay constant so
         saturated coloured surfaces (line tiles, ISA blue tile,
         WL orange band) keep their light glyph in both modes. */
      --flap-on-color-fg: #f3eacd;
      --flap-header-fg: #f3eacd;
      /* Quiet body text (empty state, ticker) — adapts via the
         .flap--light block below so it stays readable on whichever
         board surface is current. */
      --flap-quiet-fg: rgba(255, 255, 255, 0.85);
    }
    /* Light mode — driven by HA's theme (hass.themes.darkMode === false),
       not the OS/browser prefers-color-scheme. HA themes are
       deliberately decoupled from system appearance, so a user on
       a light HA theme inside a dark OS should still see the light
       board. The flag is wired via a class on the .flap element so
       CSS vars cascade to every descendant just like :host. Saturated
       coloured surfaces (WL orange band, line tiles, ISA-blue
       pictogram tile) keep their cream glyph via the --flap-*-fg
       vars which stay constant across both modes. */
    .flap--light {
      --flap-housing: #e0d5b5;
      --flap-bg: #f3eacd;
      --flap-cream-hi: #3a3a3a;
      --flap-cream: #2c2c2c;
      --flap-cream-lo: #1f1f1f;
      --flap-ink: #ffffff;
      --flap-seam: rgba(0, 0, 0, 0.7);
      --flap-pin: rgba(0, 0, 0, 0.85);
      --flap-quiet-fg: rgba(0, 0, 0, 0.6);
    }
    /* Drop the housing's inset bevel and softer drop shadow in
       light mode — the bevel is a depth cue tuned for dark-on-dark
       and reads as a hard black line on cream. Doubled selector
       (.flap.flap--light) bumps specificity above the bare .flap
       rule below so the override actually wins; .flap is declared
       later in source so equal specificity would lose to it. */
    .flap.flap--light {
      box-shadow: 0 6px 22px rgba(0, 0, 0, 0.18);
    }
    .flap {
      background: var(--flap-housing);
      border-radius: 10px;
      padding: 6px;
      box-shadow:
        inset 0 1px 0 rgba(255, 255, 255, 0.05),
        inset 0 -1px 0 rgba(0, 0, 0, 0.6),
        0 6px 22px rgba(0, 0, 0, 0.45);
      font-family: "Barlow Condensed", "Saira Condensed", "WL Sans Condensed",
        "WL Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        Helvetica, Arial, sans-serif;
      color: var(--flap-cream);
      box-sizing: border-box;
    }
    /* WL orange station header band — sits inside the housing, top
       corners rounded to match the housing's inner radius. Station
       name centred, clock right-aligned. Same Solari font for the
       clock so it ties typographically into the board below.
       This is NOT the retro card's station-header strip; it's the
       flap card's own header, intentionally just the orange band. */
    .flap-header {
      background: var(--wl-orange);
      color: var(--flap-header-fg);
      border-radius: 4px 4px 0 0;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 14px;
      height: 50px;
      font-family: "Work Sans", -apple-system, BlinkMacSystemFont, "Segoe UI",
        Roboto, Helvetica, Arial, sans-serif;
      font-weight: 800;
      letter-spacing: 0.02em;
      box-shadow: inset 0 -2px 0 rgba(0, 0, 0, 0.18);
    }
    .flap-header__station {
      text-align: center;
      font-size: 22px;
      letter-spacing: 0.04em;
    }
    /* CC-BY data-source credit — last child INSIDE the dark panel,
       so the panel surface extends all the way to the bottom of the
       cabinet (no cream/dark housing strip showing between rows and
       credit). Same quiet caption voice as the colheader captions
       and MIN unit; word-breaks gracefully on narrow boards. */
    .flap-foot {
      /* margin-top ≈ 1× line-height (14 px for an 11 px / 1.3 caption)
         — clear separator from the dense row above without dragging
         the credit into the rows' visual zone. */
      margin-top: 14px;
      font-family: "Work Sans", "WL Sans", sans-serif;
      font-size: 11px;
      line-height: 1.3;
      letter-spacing: 0.02em;
      /* --flap-cream-lo (not --flap-quiet-fg) — matches the column
         captions and MIN unit voice so all small captions on the
         board read as one material. --flap-quiet-fg is white-ish in
         dark mode and would break the cream voice. */
      color: var(--flap-cream-lo);
      text-align: center;
      overflow-wrap: anywhere;
    }
    /* When the footer is present, keep the panel's bottom padding at
       12 px — slightly less than the top margin (14 px) for optical
       centring: small caps render top-heavy because their x-height
       pulls the visual centre below the geometric one, so symmetric
       padding would LOOK bottom-heavy. :has() keeps the rows-only
       layout (no footer rendered) at the default 12 px. */
    .flap-panel:has(.flap-foot) {
      padding-bottom: 12px;
    }
    /* housing off — drop the cabinet surround (bg, padding, bevel,
       drop shadow). The panel sits flush with the dashboard.
       .flap-header loses its rounded top corners with the surrounding
       padding gone, so we re-pin them here so the band still reads as
       a contained band rather than a bleeding rectangle. */
    .flap--no-housing.flap {
      background: transparent;
      padding: 0;
      box-shadow: none;
    }
    .flap--no-housing .flap-header {
      border-radius: 4px 4px 0 0;
    }
    .flap--no-housing > .flap-panel:first-of-type {
      border-radius: 4px;
    }
    .flap-panel {
      background: var(--flap-bg);
      border-radius: 0 0 4px 4px;
      padding: 10px 14px 12px;
      /* Faint top-down gradient (~3% white) suggests glass cover. */
      background-image: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.025) 0%,
        rgba(255, 255, 255, 0) 30%
      );
    }
    /* When the header is hidden, the panel takes the full housing
       inner radius. */
    .flap > .flap-panel:first-of-type {
      border-radius: 4px;
    }
    /* Board layout — single CSS grid containing the optional column
       header + every row. The header and rows are subgrids that
       inherit the board's column tracks, so the "GLEIS" caption
       aligns to the platform column by construction (vs the
       pre-subgrid version where each row was its own grid and the
       auto-track widths drifted independently). */
    .flap-board {
      display: grid;
      grid-template-columns: auto 1fr auto;
      column-gap: 14px;
      row-gap: 6px;
      align-items: center;
    }
    .flap-board--has-platform {
      grid-template-columns: auto 1fr auto auto;
    }
    /* show_line_column off — the line
       cell + line colheader span are skipped in the template, so the
       grid loses its first auto track and shifts dest into column 1.
       Subgrids on .flap-colheader / .flap-row pick up the new track
       count automatically; no per-cell rules needed. */
    .flap-board--no-line {
      grid-template-columns: 1fr auto;
    }
    .flap-board--no-line.flap-board--has-platform {
      grid-template-columns: 1fr auto auto;
    }
    .flap-colheader {
      display: grid;
      grid-template-columns: subgrid;
      grid-column: 1 / -1;
      align-items: end;
      padding-bottom: 2px;
      /* Match the .flap-cd-unit (MIN) label voice so the two
         column markers — GLEIS above the platform tile and MIN
         beside the countdown — read as one consistent caption
         system rather than two unrelated labels. */
      font-family: "Work Sans", "WL Sans", sans-serif;
      font-weight: 600;
      font-size: 13px;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--flap-cream-lo);
    }
    .flap-colheader__platform {
      text-align: center;
    }
    .flap-colheader__line {
      text-align: start;
    }
    .flap-colheader__dest {
      display: flex;
      align-items: end;
      justify-content: space-between;
      gap: 12px;
      min-width: 0;
    }
    .flap-colheader__step-free {
      /* Sits at the right edge of the dest column via the parent's
         space-between. The wheelchair pictogram lives inside
         .flap-cell--dest at varying x (its position depends on
         maxDestLen), so the caption can't be pixel-pinned to the
         pictogram; instead it labels the column as a whole, matching
         how GLEIS labels the platform column. */
      text-align: end;
    }
    .flap-colheader__cd {
      /* Mirrors .flap-cell--cd justify-content:flex-end so ANKUNFT
         lands above the right-packed countdown digits + MIN suffix. */
      text-align: end;
    }
    .flap-row {
      display: grid;
      grid-template-columns: subgrid;
      grid-column: 1 / -1;
      align-items: center;
      min-height: 44px;
    }
    .flap-cell--line {
      display: inline-flex;
    }
    .flap-cell--dest {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      overflow: hidden;
    }
    .flap-cell--platform {
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
    .flap-cell--cd {
      display: inline-flex;
      align-items: baseline;
      gap: 6px;
      justify-content: flex-end;
    }
    .flap-cd-tiles {
      display: inline-flex;
      gap: 2px;
    }
    .flap-cd-unit {
      font-family: "Work Sans", "WL Sans", sans-serif;
      font-weight: 600;
      font-size: 13px;
      color: var(--flap-cream-lo);
      letter-spacing: 0.12em;
      text-transform: uppercase;
      align-self: end;
      padding-bottom: 6px;
    }
    .flap-tiles {
      display: inline-flex;
      gap: 2px;
    }
    .flap-space {
      display: inline-block;
      width: 0.45em;
    }

    /* ====================================================================
       Tile — the unit cell. Each character is its own perspective
       container so the leaf can rotate without coupling to neighbours.
       drop-shadow renders outside the layout box (overflow:visible on
       the tile keeps it unclipped) — that 1.5 px below the tile is
       what sells "card sits forward of the board".
       ==================================================================== */
    .flap-tile {
      position: relative;
      display: inline-block;
      width: 32px;
      height: 44px;
      perspective: 220px;
      overflow: visible;
      filter: drop-shadow(0 1.5px 0 rgba(0, 0, 0, 0.5));
      /* When opts.tileBg / opts.tileFg are set, --tile-bg / --tile-fg
         override the cream gradient on every face below. The
         transition cross-fades the line palette when a row's
         underlying departure swaps line — visible on shared-char
         positions (e.g. U1 to U3, both U in slot 0); flipping tiles
         re-mount fresh each tick via keyed() so they pick up the
         new colour instantly without a cross-fade. */
      transition: --tile-bg 320ms ease;
    }
    .flap-tile--wide {
      width: 38px;
    }
    .flap-tile__half {
      position: absolute;
      left: 0;
      right: 0;
      height: 50%;
      overflow: hidden;
      display: flex;
      justify-content: center;
      color: var(--flap-ink);
      backface-visibility: hidden;
    }
    .flap-tile__half--top {
      top: 0;
      align-items: flex-start;
      background: linear-gradient(
        180deg,
        var(--flap-cream-hi) 0%,
        var(--flap-cream) 100%
      );
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.45);
      border-radius: 2.5px 2.5px 0 0;
    }
    .flap-tile__half--bottom {
      bottom: 0;
      align-items: flex-end;
      background: linear-gradient(
        180deg,
        var(--flap-cream) 0%,
        var(--flap-cream-lo) 100%
      );
      box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.18);
      border-radius: 0 0 2.5px 2.5px;
    }
    /* Glyph spans the FULL tile height (44 px) inside a half-height
       container — overflow:hidden + align-items clips it to the top
       or bottom half. flex-start on top reveals the top half of the
       glyph; flex-end on bottom reveals the bottom. */
    .flap-tile__glyph {
      display: block;
      height: 44px;
      font-size: 30px;
      line-height: 44px;
      font-weight: 700;
      font-feature-settings: "tnum" 1;
    }
    .flap-tile--wide .flap-tile__glyph {
      font-size: 32px;
    }
    /* Seam — 1 px dark line + 1 px highlight below. THIS is the
       detail that sells the mechanical look. It must visibly cut
       through the glyph; no fade, no gradient — sharp + crisp. */
    .flap-tile__seam {
      position: absolute;
      left: 0;
      right: 0;
      top: calc(50% - 0.5px);
      height: 1px;
      background: var(--flap-seam);
      z-index: 2;
      pointer-events: none;
    }
    .flap-tile__seam::after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      top: 1px;
      height: 1px;
      background: rgba(255, 255, 255, 0.18);
    }
    /* Hinge pins — 3 × 3 px dark dots at the seam's left + right
       edges. The detail that pushes the look from "plausible" to
       "physical". Skip these and the tile reads as a digital
       simulation. */
    .flap-tile__pin {
      position: absolute;
      top: calc(50% - 1.5px);
      width: 3px;
      height: 3px;
      border-radius: 50%;
      background: var(--flap-pin);
      z-index: 3;
      pointer-events: none;
    }
    .flap-tile__pin--l {
      left: -1px;
    }
    .flap-tile__pin--r {
      right: -1px;
    }
    /* Coloured tile (line code) — inherits the same seam + pins +
       glyph alignment as a cream tile; only the face gradient swaps.
       --tile-bg / --tile-fg come from styleMap on the rendered tile. */
    .flap-tile--color .flap-tile__half--top {
      background: linear-gradient(
        180deg,
        color-mix(in oklab, var(--tile-bg, #888) 78%, white 22%) 0%,
        var(--tile-bg, #888) 100%
      );
      color: var(--tile-fg, var(--flap-on-color-fg));
    }
    .flap-tile--color .flap-tile__half--bottom {
      background: linear-gradient(
        180deg,
        var(--tile-bg, #888) 0%,
        color-mix(in oklab, var(--tile-bg, #888) 84%, black 16%) 100%
      );
      color: var(--tile-fg, var(--flap-on-color-fg));
    }
    .flap-tile--color .flap-tile__seam {
      background: rgba(0, 0, 0, 0.4);
    }
    .flap-tile--color .flap-tile__seam::after {
      background: rgba(255, 255, 255, 0.22);
    }
    /* Pictogram tile — same flap geometry as a glyph tile but the
       cream halves swap to the International Symbol of Access blue
       and the ha-icon overlay paints in white. The seam still draws
       at z-index 2 so the mechanical hinge visibly cuts through
       the pictogram, matching the design spec ("vertically centred
       so the seam crosses it"). */
    .flap-tile--pictogram .flap-tile__half--top {
      background: linear-gradient(
        180deg,
        var(--flap-a11y-hi) 0%,
        var(--flap-a11y) 100%
      );
    }
    .flap-tile--pictogram .flap-tile__half--bottom {
      background: linear-gradient(
        180deg,
        var(--flap-a11y) 0%,
        var(--flap-a11y-lo) 100%
      );
    }
    /* Darker seam + slightly brighter highlight on the blue face —
       the cream-palette seam vanishes against the saturated blue. */
    .flap-tile--pictogram .flap-tile__seam {
      background: rgba(0, 0, 0, 0.45);
    }
    .flap-tile--pictogram .flap-tile__seam::after {
      background: rgba(255, 255, 255, 0.28);
    }
    /* Cream face for non-accessibility pictograms (the timetable clock
       on planned S-Bahn rows): same material as the text tiles. */
    .flap-tile--pictogram.flap-tile--pictogram-plain .flap-tile__half--top {
      background: linear-gradient(
        180deg,
        var(--flap-cream-hi) 0%,
        var(--flap-cream) 100%
      );
    }
    .flap-tile--pictogram.flap-tile--pictogram-plain .flap-tile__half--bottom {
      background: linear-gradient(
        180deg,
        var(--flap-cream) 0%,
        var(--flap-cream-lo) 100%
      );
    }
    .flap-tile--pictogram.flap-tile--pictogram-plain .flap-tile__seam {
      background: var(--flap-seam);
    }
    .flap-tile--pictogram-plain .flap-tile__pictogram-overlay,
    .flap-tile--pictogram-plain .flap-tile__pictogram {
      color: var(--flap-ink);
    }
    /* The cd cell aligns its tiles on the baseline; a pictogram tile has
       no text to give it one. */
    .flap-cell--cd > .flap-tile--pictogram {
      align-self: center;
    }
    .flap-tile__pictogram-overlay {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1;
      color: var(--flap-on-color-fg);
      pointer-events: none;
    }
    .flap-tile__pictogram {
      --mdc-icon-size: 26px;
      color: var(--flap-on-color-fg);
    }
    .flap--size-medium .flap-tile__pictogram {
      --mdc-icon-size: 22px;
    }
    .flap--size-small .flap-tile__pictogram {
      --mdc-icon-size: 18px;
    }
    /* Leaf — the OLD top half hinged at the seam, rotating 0 → -90°
       to reveal the static-top NEW glyph underneath. Single leaf
       (real Solari boards only have ONE flapping card visible at a
       time — the static bottom is already the new value, only the
       top needs to flap away). */
    .flap-tile__leaf {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      height: 50%;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      background: linear-gradient(
        180deg,
        var(--flap-cream-hi) 0%,
        var(--flap-cream) 100%
      );
      color: var(--flap-ink);
      box-shadow:
        inset 0 1px 0 rgba(255, 255, 255, 0.45),
        0 1px 2px rgba(0, 0, 0, 0.35);
      border-radius: 2.5px 2.5px 1px 1px;
      z-index: 4;
      backface-visibility: hidden;
      transform-origin: bottom center;
      transform: rotateX(0deg);
    }
    .flap-tile--color .flap-tile__leaf {
      background: linear-gradient(
        180deg,
        color-mix(in oklab, var(--tile-bg, #888) 78%, white 22%) 0%,
        var(--tile-bg, #888) 100%
      );
      color: var(--tile-fg, var(--flap-on-color-fg));
    }
    /* One leaf rotation 0° → -90° per march tick. keyed() re-mounts
       the tile each tick so the animation restarts from 0° instead
       of jumping mid-rotation. */
    .flap-tile--flipping .flap-tile__leaf {
      animation: flapLeaf 130ms cubic-bezier(0.4, 0, 0.7, 1) forwards;
    }
    @keyframes flapLeaf {
      to {
        transform: rotateX(-90deg);
      }
    }

    /* Empty state — body cream so the board stays one cohesive
       cream-on-dark material when no departures are flowing. */
    .flap-empty {
      text-align: center;
      padding: 24px 0;
      font-family: "Barlow Condensed", "WL Sans Condensed", sans-serif;
      font-weight: 600;
      font-size: 20px;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--flap-cream);
    }

    /* Size variants — shrink the tile + glyph proportionally. The
       seam + pins stay at their pixel scale (the mechanical details
       look wrong if they scale linearly with the tile). */
    .flap--size-medium .flap-tile {
      width: 28px;
      height: 38px;
    }
    .flap--size-medium .flap-tile--wide {
      width: 34px;
    }
    .flap--size-medium .flap-tile__glyph {
      height: 38px;
      font-size: 26px;
      line-height: 38px;
    }
    .flap--size-medium .flap-row {
      min-height: 38px;
    }
    .flap--size-small .flap-tile {
      width: 22px;
      height: 30px;
    }
    .flap--size-small .flap-tile--wide {
      width: 28px;
    }
    .flap--size-small .flap-tile__glyph {
      height: 30px;
      font-size: 20px;
      line-height: 30px;
    }
    .flap--size-small .flap-row {
      min-height: 30px;
    }

    /* Banner (version-mismatch handshake) — quieter cream-on-housing
       than the LED card's amber banner, so it doesn't shout against
       the warm palette. */
    .flap-banner {
      background: #ffa000;
      color: #1a1410;
      padding: 6px 10px;
      margin-bottom: 8px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      font-family: "Work Sans", sans-serif;
      border-radius: 4px;
      font-size: 12px;
    }
    .flap-banner button {
      background: #1a1410;
      color: #ffa000;
      border: none;
      border-radius: 3px;
      padding: 3px 10px;
      font-weight: 600;
      cursor: pointer;
      font-family: inherit;
    }

    /* Accessibility — visible focus ring for keyboard users. */
    a:focus-visible,
    button:focus-visible {
      outline: 2px solid var(--flap-cream-hi);
      outline-offset: 2px;
      border-radius: 4px;
    }

    /* ====================================================================
       Station-header strip (signage homage above the WL-orange band).
       Reuses the retro card's helpers from utils/retro-station-icons.ts
       — same .retro-station-header__* classes emitted by those
       helpers — but recoloured for the flap card's warm-cream palette
       so chips + amenity tiles read as flap-pocket material rather
       than as bright-white signage chips. Each card's static-styles
       block is shadow-DOM scoped, so the two cards' CSS for the same
       class names live in independent worlds.
       ==================================================================== */
    .retro-station-header {
      /* Pin the signage strip to dark-palette values so it stays
         visually consistent across HA's light/dark themes. The
         strip is part of the card's branded chrome (like the WL
         orange band below) — it shouldn't recolour with the user's
         dashboard theme. Re-declaring the three flap vars locally
         scopes the override to this block and its descendants. */
      --flap-housing: #1a1612;
      --flap-cream-hi: #f3eacd;
      --flap-ink: #1a1410;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: var(--flap-housing);
      color: var(--flap-cream-hi);
      padding: 6px 10px;
      gap: 8px;
      font-family: "WL Sans Condensed", "WL Sans", -apple-system,
        BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      font-weight: 700;
      font-size: 1.1em;
      letter-spacing: 0.02em;
      border-radius: 4px 4px 0 0;
      box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.6);
    }
    /* When the WL-orange .flap-header is also rendered below the
       signage strip, drop the strip's bottom corners to seam cleanly
       into the orange band. */
    .retro-station-header + .flap-header {
      border-radius: 0;
    }
    .retro-station-header__side {
      display: flex;
      align-items: center;
      gap: 5px;
      min-width: 0;
      flex: 1 1 0;
    }
    .retro-station-header__side--right {
      justify-content: flex-end;
    }
    .retro-station-header__text {
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 1.2em;
      color: var(--flap-cream-hi);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    /* Tile (exit / amenity icons) — recoloured from white-on-black
       to cream-on-dark so the tiles read as flap-pocket material.
       The cream chosen (var(--flap-cream-hi)) is the SAME warm
       gradient top stop the flap tiles use; the icons inside
       inherit dark ink via color: var(--flap-ink). */
    .retro-station-header__tile {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background: var(--flap-cream-hi);
      color: var(--flap-ink);
      flex-shrink: 0;
      width: 1.4em;
      height: 1.4em;
      padding: 0.12em;
      box-sizing: border-box;
      border-radius: 2px;
    }
    .retro-station-header__tile--mdi {
      padding: 0.06em;
    }
    .retro-station-header__icon {
      width: 100%;
      height: 100%;
      display: block;
      fill: currentColor;
    }
    .retro-station-header__icon--flip-x {
      transform: scaleX(-1);
    }
    .retro-station-header__mdi {
      --mdc-icon-size: 1.28em;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: inherit;
    }
    .retro-station-header__mdi--flip-x {
      transform: scaleX(-1);
    }
    .retro-station-header__monogram {
      font-family: "WL Sans Condensed", "WL Sans", -apple-system,
        BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      font-weight: 700;
      font-size: 0.9em;
      line-height: 1;
    }
    /* Chip — same cream pocket as the tile, dynamic width for short
       text labels. Matches the flap tiles' warm-cream voice so the
       strip reads as one cohesive material with the board below. */
    .retro-station-header__chip {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background: var(--flap-cream-hi);
      color: var(--flap-ink);
      flex-shrink: 0;
      height: 1.4em;
      padding: 0 0.4em;
      box-sizing: border-box;
      border-radius: 2px;
      font-family: "WL Sans Condensed", "WL Sans", -apple-system,
        BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      font-weight: 700;
      line-height: 1;
      letter-spacing: 0;
      white-space: nowrap;
    }
    .retro-station-header__chip--clock {
      gap: 0.25em;
      font-variant-numeric: tabular-nums;
    }
    .retro-station-header__chip--date {
      font-variant-numeric: tabular-nums;
    }
    .retro-station-header__chip-icon {
      --mdc-icon-size: 1em;
      display: inline-flex;
      align-items: center;
      color: inherit;
      flex-shrink: 0;
    }
    /* Size-token alignment — match the .flap--size-* scale. */
    .flap--size-medium .retro-station-header {
      font-size: 1em;
      padding: 5px 10px;
    }
    .flap--size-small .retro-station-header {
      font-size: 0.9em;
      padding: 4px 8px;
    }
    /* Narrow-width reflow — drop the destination label so the
       icons stay visible at narrow widths. Container query matches
       the nearest inline-size container. */
    @container (inline-size < 360px) {
      .retro-station-header__text {
        display: none;
      }
    }

    /* prefers-reduced-motion — Solari is showy and continuous. Drop
       the rotation, swap to a 60 ms crossfade. Static bottom still
       carries the value; user sees a smooth swap rather than an
       abrupt snap. */
    @media (prefers-reduced-motion: reduce) {
      .flap-tile {
        /* Skip the --tile-bg cross-fade for motion-sensitive users —
           colour changes snap instantly instead. */
        transition: none;
      }
      .flap-tile--flipping .flap-tile__leaf {
        animation: flapLeafFade 60ms ease-out forwards;
        animation-delay: 0ms;
      }
      @keyframes flapLeafFade {
        to {
          opacity: 0;
        }
      }
    }
  `;
	}
};
__decorate([n$2({ attribute: false })], WienerLinienAustriaFlapCard.prototype, "hass", void 0);
__decorate([r$1()], WienerLinienAustriaFlapCard.prototype, "_config", void 0);
__decorate([r$1()], WienerLinienAustriaFlapCard.prototype, "_versionMismatch", void 0);
__decorate([r$1()], WienerLinienAustriaFlapCard.prototype, "_displayed", void 0);
__decorate([r$1()], WienerLinienAustriaFlapCard.prototype, "_target", void 0);
__decorate([r$1()], WienerLinienAustriaFlapCard.prototype, "_justFlipped", void 0);
WienerLinienAustriaFlapCard = __decorate([t$2("wiener-linien-austria-flap-card")], WienerLinienAustriaFlapCard);

//#endregion
export { WienerLinienAustriaFlapCard };
//# sourceMappingURL=wiener-linien-austria-flap-card.js.map