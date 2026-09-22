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
const RETRO_CARD_VERSION = "2.1.0";
const NIGHTLINE_BG = "#1b1464";
const NIGHTLINE_FG = "#fef200";

//#endregion
//#region src/utils.ts
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
/** Rows rendered by each card. Retro exposes no config key — the LED
*  panel's layout is built for exactly two rows — so its cap lives here
*  rather than as a bare `slice(0, 2)` in the render path. */
const ROW_CAP = { retro: 2 };

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
//#region src/utils/config.ts
/** Coerce an unknown config value to a boolean. `true` / `false` pass
*  through; anything else (undefined, null, a YAML typo, a number)
*  falls back to `fallback`. Lets the modern normaliser take a raw,
*  untyped config record without trusting its field types. */
function asBool(v, fallback) {
	return typeof v === "boolean" ? v : fallback;
}
const RETRO_SIZES = /* @__PURE__ */ new Set([
	"small",
	"medium",
	"regular"
]);
const RETRO_STATION_BG = /* @__PURE__ */ new Set([
	"default",
	"white",
	"black"
]);
const RETRO_STYLES = /* @__PURE__ */ new Set([
	"classic",
	"warm",
	"pixel"
]);
const RETRO_PLATFORM_SIDES = /* @__PURE__ */ new Set([
	"auto",
	"left",
	"right"
]);
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
const RETRO_VALIDATED_KEYS = /* @__PURE__ */ new Set([
	"type",
	"entity",
	"direction",
	"line",
	"lines",
	"line_directions",
	"show_platform",
	"platform_side",
	"show_station_name",
	"station_bg",
	"size",
	"style",
	"flicker",
	"wheelchair_race",
	"accessibility_only",
	"message_ticker",
	"message_text",
	"walk_times",
	"show_header",
	"header_left",
	"header_right",
	"show_line_pill",
	"line_pill",
	"line_stripe",
	"housing",
	"show_unit"
]);
function normaliseRetroConfig(raw) {
	const direction = raw.direction === "R" || raw.direction === "H" ? raw.direction : raw.lines !== void 0 || raw.line_directions !== void 0 ? void 0 : "H";
	const lines = Array.isArray(raw.lines) ? raw.lines.filter((line) => typeof line === "string" && line.length > 0) : typeof raw.line === "string" && raw.line ? [raw.line] : void 0;
	const lineDirections = normaliseLineDirections(raw.line_directions, true);
	const size = RETRO_SIZES.has(raw.size) ? raw.size : CARD_DEFAULTS.size.retro;
	const station_bg = RETRO_STATION_BG.has(raw.station_bg) ? raw.station_bg : CARD_DEFAULTS.station_bg.retro;
	const style = RETRO_STYLES.has(raw.style) ? raw.style : "classic";
	return {
		...filterPassthrough(raw, RETRO_VALIDATED_KEYS),
		type: raw.type || "custom:wiener-linien-austria-retro-card",
		entity: typeof raw.entity === "string" && raw.entity.startsWith("sensor.") ? raw.entity : void 0,
		direction,
		line: lines?.[0],
		lines,
		line_directions: lineDirections,
		show_platform: asBool(raw.show_platform, CARD_DEFAULTS.show_platform.retro),
		platform_side: RETRO_PLATFORM_SIDES.has(raw.platform_side) ? raw.platform_side : "auto",
		show_station_name: asBool(raw.show_station_name, CARD_DEFAULTS.show_station_name.retro),
		station_bg,
		size,
		style,
		flicker: raw.flicker === true,
		wheelchair_race: raw.wheelchair_race === true,
		accessibility_only: raw.accessibility_only === true,
		message_ticker: raw.message_ticker === true,
		message_text: typeof raw.message_text === "string" && raw.message_text.trim() ? raw.message_text.slice(0, 160) : void 0,
		walk_times: normaliseWalkTimes(raw.walk_times),
		show_header: raw.show_header === true,
		header_left: normaliseRetroHeaderSide(raw.header_left),
		header_right: normaliseRetroHeaderSide(raw.header_right),
		show_line_pill: raw.show_line_pill !== void 0 ? raw.show_line_pill === true : raw.line_pill === true,
		line_stripe: raw.line_stripe === true,
		housing: asBool(raw.housing, CARD_DEFAULTS.housing.retro),
		show_unit: asBool(raw.show_unit, CARD_DEFAULTS.unit_caption.retro)
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
//#region src/utils/retro-view.ts
function deriveRetroView(cfg, attrs) {
	const departures = Array.isArray(attrs.departures) ? attrs.departures : [];
	const matching = filterDepartures(departures, {
		direction: cfg.direction,
		lines: cfg.lines,
		line_directions: cfg.line_directions,
		walk_times: cfg.walk_times,
		accessibility_only: cfg.accessibility_only
	});
	const rows = matching.slice(0, ROW_CAP.retro);
	const rawPlatform = rows.find((d) => d.platform)?.platform ?? null;
	const platform = cfg.show_platform ? rawPlatform : null;
	let gleisLeft;
	switch (cfg.platform_side) {
		case "left":
			gleisLeft = true;
			break;
		case "right":
			gleisLeft = false;
			break;
		default: gleisLeft = platform === "2";
	}
	const isMetro = (rows[0]?.type ?? "") === LINE_TYPE_METRO;
	return {
		rows,
		matching,
		departures,
		platform,
		gleisLeft,
		platformLabelKey: isMetro ? "gleis" : "steig",
		stopName: attrs.stop_name || attrs.friendly_name || ""
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
//#region src/utils/race.ts
const RACE_PATTERNS = [
	[
		"A",
		"A",
		"B"
	],
	[
		"B",
		"B",
		"A"
	],
	[
		"A",
		"B",
		"B"
	],
	[
		"B",
		"A",
		"A"
	],
	[
		"A",
		"B",
		"A"
	],
	[
		"B",
		"A",
		"B"
	]
];
const RACE_CROSS_BASE_MIN_MS = 2400;
const RACE_CROSS_BASE_MAX_MS = 2700;
const RACE_DUR_TAIL_MIN = 1.08;
const RACE_DUR_TAIL_MAX = 1.15;
const RACE_MARGIN_CLOSE_MS = [100, 250];
const RACE_MARGIN_MEDIUM_MS = [200, 500];
const RACE_MARGIN_DECISIVE_MS = [500, 900];
const RACE_PROB_CLOSE = .4;
const RACE_PROB_COMEBACK = .3;
const RACE_TRACK_END_CQW = 92;
const RACE_TRACK_MIN_LENGTH_CQW = 20;
const RACE_CHECKPOINT_FRACS = [
	.25,
	.5,
	.75
];
const RACE_CHECKPOINT_HALF_GAPS_CQW = [
	3,
	2.5,
	2.5
];
const RACE_EXIT_MIN_CQW = 102;
const RACE_EXIT_MAX_CQW = 135;
/** Compute every per-racer parameter for one race, given measured
*  start positions and finish line. Returns the reconciled winner
*  AND the CSS variables the card should set on its host element.
*  Pure: no DOM access, no internal state. The math itself is the
*  same algorithm as the previous in-card implementation. */
function computeRaceParams(measurements) {
	const rand = (min, max) => min + Math.random() * (max - min);
	const jitter = (base, amount) => base + (Math.random() * 2 - 1) * amount;
	const intendedWinner = Math.random() < .5 ? "A" : "B";
	const patternLeader = Math.random() < RACE_PROB_COMEBACK ? intendedWinner === "A" ? "B" : "A" : intendedWinner;
	const patternPool = RACE_PATTERNS.filter((p) => p[2] === patternLeader);
	const pattern = patternPool[Math.floor(Math.random() * patternPool.length)];
	const marginRoll = Math.random();
	const margin = marginRoll < RACE_PROB_CLOSE ? rand(RACE_MARGIN_CLOSE_MS[0], RACE_MARGIN_CLOSE_MS[1]) : marginRoll < .75 ? rand(RACE_MARGIN_MEDIUM_MS[0], RACE_MARGIN_MEDIUM_MS[1]) : rand(RACE_MARGIN_DECISIVE_MS[0], RACE_MARGIN_DECISIVE_MS[1]);
	const winnerCrossT = rand(RACE_CROSS_BASE_MIN_MS, RACE_CROSS_BASE_MAX_MS);
	const loserCrossT = winnerCrossT + margin;
	const winnerDur = winnerCrossT * rand(RACE_DUR_TAIL_MIN, RACE_DUR_TAIL_MAX);
	const loserDur = loserCrossT * rand(RACE_DUR_TAIL_MIN, RACE_DUR_TAIL_MAX);
	const durA = intendedWinner === "A" ? winnerDur : loserDur;
	const durB = intendedWinner === "B" ? winnerDur : loserDur;
	const crossTargetA = intendedWinner === "A" ? winnerCrossT : loserCrossT;
	const crossTargetB = intendedWinner === "B" ? winnerCrossT : loserCrossT;
	const startA = measurements.a;
	const startB = measurements.b;
	const finishX = measurements.finishCqw;
	const maxStart = Math.max(startA, startB);
	const trackLength = Math.max(RACE_TRACK_MIN_LENGTH_CQW, RACE_TRACK_END_CQW - maxStart);
	const targetXAbs = (racer, idx) => {
		const center = maxStart + RACE_CHECKPOINT_FRACS[idx] * trackLength;
		const isLead = pattern[idx] === racer;
		const halfGap = RACE_CHECKPOINT_HALF_GAPS_CQW[idx];
		return jitter(center + (isLead ? halfGap : -halfGap), .6);
	};
	const t25A = targetXAbs("A", 0);
	const t50A = targetXAbs("A", 1);
	const t75A = targetXAbs("A", 2);
	const t25B = targetXAbs("B", 0);
	const t50B = targetXAbs("B", 1);
	const t75B = targetXAbs("B", 2);
	const computeExit = (crossT, dur, t75) => {
		const distance = finishX - t75;
		const segmentTime = crossT - .75 * dur;
		if (distance <= 0 || segmentTime <= 1) return Math.max(t75 + 5, RACE_EXIT_MIN_CQW);
		const exit = t75 + distance * .25 * dur / segmentTime;
		return Math.max(RACE_EXIT_MIN_CQW, Math.min(RACE_EXIT_MAX_CQW, exit));
	};
	const exitA = computeExit(crossTargetA, durA, t75A);
	const exitB = computeExit(crossTargetB, durB, t75B);
	const actualCrossT = (startX, t25, t50, t75, exit, dur) => {
		const segments = [
			[
				0,
				.25,
				startX,
				t25
			],
			[
				.25,
				.5,
				t25,
				t50
			],
			[
				.5,
				.75,
				t50,
				t75
			],
			[
				.75,
				1,
				t75,
				exit
			]
		];
		for (const [tStart, tEnd, xStart, xEnd] of segments) {
			if (xStart >= finishX) return tStart * dur;
			if (xEnd >= finishX) return (tStart + (finishX - xStart) / (xEnd - xStart) * (tEnd - tStart)) * dur;
		}
		return Number.POSITIVE_INFINITY;
	};
	const crossA = actualCrossT(startA, t25A, t50A, t75A, exitA, durA);
	const crossB = actualCrossT(startB, t25B, t50B, t75B, exitB, durB);
	return {
		winner: crossA <= crossB ? "A" : "B",
		winnerCrossT: Math.min(crossA, crossB),
		cssVars: {
			"--race-a-duration": `${durA}ms`,
			"--race-b-duration": `${durB}ms`,
			"--race-a-end": `${exitA - startA}cqw`,
			"--race-b-end": `${exitB - startB}cqw`,
			"--race-a-x-25": `${t25A - startA}cqw`,
			"--race-a-x-50": `${t50A - startA}cqw`,
			"--race-a-x-75": `${t75A - startA}cqw`,
			"--race-b-x-25": `${t25B - startB}cqw`,
			"--race-b-x-50": `${t50B - startB}cqw`,
			"--race-b-x-75": `${t75B - startB}cqw`
		}
	};
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
//#region \0@oxc-project+runtime@0.149.0/helpers/esm/decorate.js
function __decorate(decorators, target, key, desc) {
	var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	return c > 3 && r && Object.defineProperty(target, key, r), r;
}

//#endregion
//#region src/retro-editor.ts
let WienerLinienAustriaRetroCardEditor = class WienerLinienAustriaRetroCardEditor extends i$4 {
	constructor(..._args) {
		super(..._args);
		this._tab = "stops";
		this._headerSide = "header_left";
		this._onEntityChanged = (ev) => {
			ev.stopPropagation();
			if (!this._config) return;
			const raw = ev.detail.value["entity"];
			const entity = typeof raw === "string" ? raw : void 0;
			if (entity === this._config.entity) return;
			const next = {
				...this._config,
				entity
			};
			delete next.line;
			delete next.lines;
			delete next.line_directions;
			this._commit(next);
		};
		this._computeLabel = (field) => editorLabel(this.hass, this._i18n, field.name);
		this._computeHelper = (field) => {
			const { et } = this._i18n;
			return editorHelper(this._i18n, field.name, {
				...this._config?.message_ticker ? {} : { message_text: et("message_text_requires") },
				...this._config?.show_platform ? {} : { platform_side: et("platform_side_requires") }
			});
		};
	}
	setConfig(config) {
		this._config = normaliseRetroConfig(config);
	}
	shouldUpdate(changed) {
		if (!this._config) return false;
		if (changed.has("_config") || changed.has("_tab") || changed.has("_headerSide")) return true;
		const prev = changed.get("hass");
		if (!prev || !this.hass) return true;
		const eid = this._config.entity;
		if (!eid) return true;
		return prev.states[eid] !== this.hass.states[eid];
	}
	get _i18n() {
		return editorTranslators("retro", this.hass?.language);
	}
	/** Assign `_config` BEFORE dispatching — see editor/editor-common.ts.
	*  Centralised so the write paths cannot drift on the invariant. */
	_commit(next) {
		this._config = next;
		fireEvent(this, "config-changed", { config: next });
	}
	_patch(value) {
		if (!this._config) return;
		this._commit(normaliseRetroConfig({
			...this._config,
			...value
		}));
	}
	get _stopView() {
		const cfg = this._config;
		return {
			entity: cfg.entity ?? "",
			lines: cfg.lines,
			direction: cfg.direction,
			line_directions: cfg.line_directions,
			walk_times: cfg.walk_times
		};
	}
	get _stopCallbacks() {
		return {
			toggleLine: (_eid, line) => {
				if (!this._config) return;
				const next = { ...this._config };
				const lines = new Set(next.lines ?? []);
				if (lines.has(line)) lines.delete(line);
				else lines.add(line);
				if (lines.size) {
					next.lines = [...lines];
					next.line = next.lines[0];
				} else {
					delete next.lines;
					delete next.line;
				}
				this._commit(next);
			},
			setDirections: (_eid, next) => {
				if (!this._config) return;
				const cfg = { ...this._config };
				if (next.direction === null) delete cfg.direction;
				else cfg.direction = next.direction;
				cfg.line_directions = Object.keys(next.lineDirections).length ? next.lineDirections : {};
				this._commit(cfg);
			},
			setWalkTime: (_eid, key, minutes) => {
				if (!this._config) return;
				const cur = { ...this._config.walk_times ?? {} };
				if (minutes === null) delete cur[key];
				else cur[key] = minutes;
				const next = { ...this._config };
				if (Object.keys(cur).length) next.walk_times = cur;
				else delete next.walk_times;
				this._commit(next);
			}
		};
	}
	render() {
		if (!this._config) return A;
		const { et } = this._i18n;
		return b`
      <div class="wl-editor">
        ${renderTabs([
			{
				key: "stops",
				label: et("tab_stop")
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
			case "stops": return this._renderStop();
			case "display": return this._renderDisplay();
			case "tweaks": return this._renderTweaks();
		}
	}
	_renderStop() {
		const cfg = this._config;
		const { t, et } = this._i18n;
		return b`
      <ha-form
        .hass=${this.hass}
        .data=${{ entity: cfg.entity }}
        .schema=${[{
			name: "entity",
			required: true,
			selector: { entity: { include_entities: departureBoardOptions(this.hass, cfg.entity ? [cfg.entity] : []) } }
		}]}
        .computeLabel=${this._computeLabel}
        .computeHelper=${this._computeHelper}
        @value-changed=${this._onEntityChanged}
      ></ha-form>
      ${cfg.entity ? renderStopBlock(this.hass, this._stopView, {
			index: 1,
			total: 1,
			lineColorOverrides: {},
			t,
			et
		}, this._stopCallbacks) : A}
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
					options: [
						{
							value: "default",
							label: et("station_bg_default")
						},
						{
							value: "white",
							label: et("station_bg_white")
						},
						{
							value: "black",
							label: et("station_bg_black")
						}
					]
				} }
			}]
		})}
      ${renderFormSection({
			...common,
			title: et("section_departure_row"),
			hint: et("section_led_panel"),
			data: {
				show_platform: cfg.show_platform,
				platform_side: cfg.platform_side,
				accessibility_only: cfg.accessibility_only
			},
			schema: [
				{
					name: "show_platform",
					selector: { boolean: {} }
				},
				{
					name: "platform_side",
					disabled: !cfg.show_platform,
					selector: { select: {
						mode: "dropdown",
						options: [
							{
								value: "auto",
								label: et("platform_side_auto")
							},
							{
								value: "left",
								label: et("platform_side_left")
							},
							{
								value: "right",
								label: et("platform_side_right")
							}
						]
					} }
				},
				{
					name: "accessibility_only",
					selector: { boolean: {} }
				}
			]
		})}
      ${renderFormSection({
			...common,
			title: et("section_extras"),
			hint: et("section_extras_hint"),
			data: {
				message_ticker: cfg.message_ticker,
				message_text: cfg.message_text ?? "",
				wheelchair_race: cfg.wheelchair_race
			},
			schema: [
				{
					name: "message_ticker",
					selector: { boolean: {} }
				},
				{
					name: "message_text",
					disabled: !cfg.message_ticker,
					selector: { text: {} }
				},
				{
					name: "wheelchair_race",
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
			title: et("section_led_panel"),
			data: {
				size: cfg.size,
				style: cfg.style,
				show_unit: cfg.show_unit,
				show_line_pill: cfg.show_line_pill,
				line_stripe: cfg.line_stripe,
				housing: cfg.housing,
				flicker: cfg.flicker
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
					name: "style",
					selector: { select: {
						mode: "dropdown",
						options: [
							{
								value: "classic",
								label: et("style_classic")
							},
							{
								value: "warm",
								label: et("style_warm")
							},
							{
								value: "pixel",
								label: et("style_pixel")
							}
						]
					} }
				},
				{
					name: "show_unit",
					selector: { boolean: {} }
				},
				{
					name: "show_line_pill",
					selector: { boolean: {} }
				},
				{
					name: "line_stripe",
					selector: { boolean: {} }
				},
				{
					name: "housing",
					selector: { boolean: {} }
				},
				{
					name: "flicker",
					selector: { boolean: {} }
				}
			]
		})}
    `;
	}
	static {
		this.styles = [
			editorTokens,
			editorStyles,
			headerStripStyles
		];
	}
};
__decorate([n$2({ attribute: false })], WienerLinienAustriaRetroCardEditor.prototype, "hass", void 0);
__decorate([r$1()], WienerLinienAustriaRetroCardEditor.prototype, "_config", void 0);
__decorate([r$1()], WienerLinienAustriaRetroCardEditor.prototype, "_tab", void 0);
__decorate([r$1()], WienerLinienAustriaRetroCardEditor.prototype, "_headerSide", void 0);
WienerLinienAustriaRetroCardEditor = __decorate([t$2("wiener-linien-austria-retro-card-editor")], WienerLinienAustriaRetroCardEditor);

//#endregion
//#region src/wiener-linien-austria-retro-card.ts
const VICTORY_DURATION_MS = 4e3;
const VIA_TICK_MS = 4e3;
const FREEZE_DELAY_AFTER_WINNER_MS = 150;
const FREEZE_DURATION_MS = 1500;
const NEXT_RACE_MIN_MS = 6e4;
const COUNTDOWN_DIGIT_MS = 800;
const COUNTDOWN_TOTAL_MS = COUNTDOWN_DIGIT_MS * 3;
const MESSAGE_TICKER_INTERVAL_MS = 3e5;
const MESSAGE_TICKER_PREVIEW_DELAY_MS = 1500;
const MESSAGE_TICKER_RACE_DEFER_MS = 2e4;
{
	const win = window;
	win.customCards = win.customCards ?? [];
	if (!win.customCards.some((c) => c.type === "wiener-linien-austria-retro-card")) win.customCards.push({
		type: "wiener-linien-austria-retro-card",
		name: "Wiener Linien Austria — Retro",
		description: pickerText("picker_retro"),
		preview: true,
		getEntitySuggestion: (hass, entityId) => {
			if (!entityId.startsWith("sensor.")) return null;
			if (hass?.entities?.[entityId]?.platform !== "wiener_linien_austria") return null;
			return { config: {
				type: "custom:wiener-linien-austria-retro-card",
				entity: entityId
			} };
		}
	});
}
let WienerLinienAustriaRetroCard = class WienerLinienAustriaRetroCard extends i$4 {
	constructor(..._args) {
		super(..._args);
		this._versionMismatch = null;
		this._raceState = "idle";
		this._countdownDigit = null;
		this._raceWinner = null;
		this._tickerActive = false;
		this._tickerTimer = null;
		this._viaPhase = "towards";
		this._viaTimer = null;
		this._anyViaInRows = false;
		this._versionCheckDone = false;
		this._fallbackWarned = false;
		this._cachedEid = null;
		this._raceTimers = /* @__PURE__ */ new Set();
		this._countdownStartAt = null;
		this._raceEndAt = null;
		this._freezeEndAt = null;
		this._victoryEndAt = null;
		this._handleCardClick = () => {
			if (this._tickerActive) {
				this._tickerActive = false;
				this._scheduleTicker(MESSAGE_TICKER_INTERVAL_MS);
				return;
			}
			if (!this._config?.wheelchair_race) return;
			if (this._raceState !== "idle") return;
			if (typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
			this._clearRaceTimers();
			this._startRace();
		};
		this._handleCardKeydown = (e) => {
			if (e.key !== "Enter" && e.key !== " ") return;
			e.preventDefault();
			this._handleCardClick();
		};
		this._onTickerDone = () => {
			this._tickerActive = false;
			this._scheduleTicker(MESSAGE_TICKER_INTERVAL_MS);
		};
	}
	setConfig(config) {
		if (!config || typeof config !== "object") throw new Error("wiener-linien-austria-retro-card: config must be an object");
		if (config.entity !== void 0 && typeof config.entity !== "string") throw new Error("wiener-linien-austria-retro-card: 'entity' must be a string");
		if (typeof config.entity === "string" && config.entity && !config.entity.startsWith("sensor.")) throw new Error(`wiener-linien-austria-retro-card: 'entity' must be in the sensor domain (got "${config.entity}")`);
		this._config = normaliseRetroConfig(config);
		this._clearRaceTimers();
		this._clearTickerTimer();
		this._clearViaTimer();
		this._raceState = "idle";
		this._countdownDigit = null;
		this._countdownStartAt = null;
		this._raceEndAt = null;
		this._freezeEndAt = null;
		this._victoryEndAt = null;
		this._raceWinner = null;
		this._tickerActive = false;
		this._fallbackWarned = false;
		this._cachedEid = null;
	}
	getCardSize() {
		return 2;
	}
	getGridOptions() {
		return {
			columns: 12,
			rows: "auto",
			min_columns: 4,
			min_rows: 2
		};
	}
	static getConfigElement() {
		return document.createElement("wiener-linien-austria-retro-card-editor");
	}
	static getStubConfig(hass) {
		const first = findWienerLinienEntities(hass)[0] || "";
		return {
			entity: first,
			direction: stubDirection(hass?.states?.[first]?.attributes?.departures),
			size: "small"
		};
	}
	connectedCallback() {
		super.connectedCallback();
		registerWlFonts();
		if (typeof document !== "undefined" && document.fonts?.ready) document.fonts.ready.then(() => {
			if (!document.fonts.check("700 16px \"WL Mono\"")) console.warn("[wiener-linien-austria-retro-card] \"WL Mono\" 700 not loaded — falling back to Courier New (less authentic). Check /wiener-linien-austria/fonts/ is served by the integration.");
		}).catch((err) => {
			console.warn("[wiener-linien-austria-retro-card] document.fonts.ready rejected", err);
		});
		if (!this._versionCheckDone && this.hass?.callWS) {
			this._versionCheckDone = true;
			this._checkCardVersion();
		}
		if (this._raceState !== "idle") {
			if (this._config?.wheelchair_race) this._armStateTransitions();
			else {
				this._raceState = "idle";
				this._clearRaceTimers();
			}
		}
		if (this._config?.message_ticker && this._config?.message_text) this._scheduleTicker(MESSAGE_TICKER_INTERVAL_MS);
	}
	disconnectedCallback() {
		super.disconnectedCallback();
		this._clearRaceTimers();
		this._clearTickerTimer();
		this._clearViaTimer();
	}
	shouldUpdate(changed) {
		if (!this._config) return false;
		if (changed.has("_config") || changed.has("_versionMismatch") || changed.has("_raceState") || changed.has("_countdownDigit") || changed.has("_raceWinner") || changed.has("_tickerActive") || changed.has("_viaPhase")) return true;
		const prev = changed.get("hass");
		if (!prev || !this.hass) return true;
		const eid = this._resolveEntity();
		if (!eid) return false;
		return prev.states[eid] !== this.hass.states[eid];
	}
	updated(changed) {
		super.updated(changed);
		if (this._anyViaInRows) this._armViaTimer();
		else if (this._viaTimer !== null) this._clearViaTimer();
	}
	willUpdate(changed) {
		if (!changed.has("_config")) return;
		const prev = changed.get("_config");
		const wasOn = prev?.wheelchair_race === true;
		const isOn = this._config?.wheelchair_race === true;
		if (isOn && !wasOn) {
			this._clearRaceTimers();
			this._startRace();
		} else if (!isOn && wasOn) {
			this._clearRaceTimers();
			this._raceState = "idle";
			this._countdownStartAt = null;
			this._countdownDigit = null;
			this._raceEndAt = null;
			this._freezeEndAt = null;
			this._victoryEndAt = null;
			this._raceWinner = null;
		}
		const tickerWasOn = prev?.message_ticker === true && !!prev?.message_text;
		const tickerIsOn = this._config?.message_ticker === true && !!this._config?.message_text;
		const textChanged = prev?.message_text !== this._config?.message_text;
		if (tickerIsOn && (!tickerWasOn || textChanged)) {
			this._tickerActive = false;
			this._scheduleTicker(MESSAGE_TICKER_PREVIEW_DELAY_MS);
		} else if (!tickerIsOn && tickerWasOn) {
			this._clearTickerTimer();
			this._tickerActive = false;
		}
	}
	_t(key, replacements) {
		return translate(`retro.${key}`, { hassLanguage: this.hass?.language }, replacements);
	}
	async _checkCardVersion() {
		this._versionMismatch = await checkCardVersionWS(this.hass, "wiener_linien_austria/retro_card_version", RETRO_CARD_VERSION);
	}
	/** Cache-aware: returns the configured entity if it's in hass.states,
	*  else the first auto-discovered WL sensor as a fallback. Cached on
	*  this._cachedEid because both shouldUpdate and render call it on
	*  every hass tick — recomputing the fallback (which iterates
	*  hass.states) on every tick adds up on large dashboards. The cache
	*  is invalidated on setConfig and when the configured entity's
	*  presence in hass.states changes. */
	_resolveEntity() {
		const configured = this._config?.entity;
		if (configured && this.hass?.states?.[configured]) {
			this._cachedEid = configured;
			return configured;
		}
		if (this._cachedEid && this.hass?.states?.[this._cachedEid]) return this._cachedEid;
		const first = findWienerLinienEntities(this.hass)[0] ?? null;
		if (first && configured && !this._fallbackWarned) {
			this._fallbackWarned = true;
			console.warn(`[wiener-linien-austria-retro-card] configured entity "${configured}" not in hass.states; falling back to "${first}"`);
		}
		this._cachedEid = first;
		return first;
	}
	_clearRaceTimers() {
		for (const t of this._raceTimers) clearTimeout(t);
		this._raceTimers.clear();
	}
	/** Schedule a timeout AND track it on `_raceTimers` so a teardown can
	*  cancel it. The handle self-removes on fire so the set doesn't
	*  accumulate dead handles between `_clearRaceTimers` calls. Use this
	*  in place of bare `setTimeout`. */
	_scheduleRaceTimer(cb, delayMs) {
		const handle = setTimeout(() => {
			this._raceTimers.delete(handle);
			cb();
		}, delayMs);
		this._raceTimers.add(handle);
	}
	_scheduleRace(delayMs) {
		this._scheduleRaceTimer(() => this._startRace(), delayMs);
	}
	_clearTickerTimer() {
		if (this._tickerTimer !== null) {
			clearTimeout(this._tickerTimer);
			this._tickerTimer = null;
		}
	}
	/** Arm the single ticker timer. Clears any pending handle first so
	*  the scheduler can never fan out into multiple overlapping runs. */
	_scheduleTicker(delayMs) {
		this._clearTickerTimer();
		this._tickerTimer = setTimeout(() => {
			this._tickerTimer = null;
			this._runTicker();
		}, delayMs);
	}
	/** Fire one marquee run — or defer it. The next run is armed by
	*  `_onTickerDone` (on animationend), so the interval counts from
	*  when a message finishes scrolling, not when it starts. */
	_runTicker() {
		if (!this._config?.message_ticker || !this._config?.message_text) return;
		if (this._raceState !== "idle") {
			this._scheduleTicker(MESSAGE_TICKER_RACE_DEFER_MS);
			return;
		}
		if (typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
			this._scheduleTicker(MESSAGE_TICKER_INTERVAL_MS);
			return;
		}
		this._tickerActive = true;
	}
	/** Scroll duration in seconds — proportional to message length so the
	*  reading pace stays roughly constant. Clamped so a one-word message
	*  still lingers and a maxed-out 160-char message doesn't crawl. */
	_tickerDurationSeconds(text) {
		return Math.min(40, Math.max(8, 5 + text.length * .18));
	}
	/** Arm the via-tick interval only when at least one visible row
	*  actually carries `via`. _viaPhase is in shouldUpdate's change-key
	*  list, so an always-on tick would re-render every retro card on
	*  every dashboard every VIA_TICK_MS — a non-trivial cost when
	*  multiplied across the board. Re-evaluated on hass / config tick
	*  via _evaluateViaTimer. */
	_armViaTimer() {
		if (this._viaTimer !== null) return;
		this._viaTimer = setInterval(() => {
			this._viaPhase = this._viaPhase === "towards" ? "via" : "towards";
		}, VIA_TICK_MS);
	}
	_clearViaTimer() {
		if (this._viaTimer !== null) {
			clearInterval(this._viaTimer);
			this._viaTimer = null;
		}
		this._viaPhase = "towards";
	}
	_startRace() {
		if (!this._config?.wheelchair_race) return;
		if (typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
			this._scheduleRace(this._nextRaceDelay());
			return;
		}
		if (this._currentBarrierFreeCount() < 2) {
			this._scheduleRace(this._nextRaceDelay());
			return;
		}
		if (this._tickerActive) {
			this._scheduleRace(this._nextRaceDelay());
			return;
		}
		const { winnerCrossT } = this._randomizeRaceParams();
		const now = Date.now();
		this._raceState = "countdown";
		this._countdownStartAt = now;
		this._countdownDigit = 3;
		this._raceEndAt = now + COUNTDOWN_TOTAL_MS + winnerCrossT + FREEZE_DELAY_AFTER_WINNER_MS;
		this._freezeEndAt = this._raceEndAt + FREEZE_DURATION_MS;
		this._victoryEndAt = this._freezeEndAt + VICTORY_DURATION_MS;
		this._scheduleCountdownTick();
	}
	_scheduleCountdownTick() {
		if (this._raceState !== "countdown" || this._countdownStartAt === null) return;
		const now = Date.now();
		const elapsed = now - this._countdownStartAt;
		if (elapsed >= COUNTDOWN_TOTAL_MS) {
			this._beginRacing();
			return;
		}
		const digit = Math.max(1, Math.min(3, 3 - Math.floor(elapsed / COUNTDOWN_DIGIT_MS)));
		if (this._countdownDigit !== digit) this._countdownDigit = digit;
		const nextDigitAt = this._countdownStartAt + (Math.floor(elapsed / COUNTDOWN_DIGIT_MS) + 1) * COUNTDOWN_DIGIT_MS;
		const wait = Math.max(50, nextDigitAt - now);
		this._scheduleRaceTimer(() => this._scheduleCountdownTick(), wait);
	}
	_beginRacing() {
		this._raceState = "racing";
		this._countdownDigit = null;
		this._countdownStartAt = null;
		this._armStateTransitions();
	}
	_measureRaceStartPositions() {
		const card = this.shadowRoot?.querySelector(".retro");
		if (!card) return null;
		const cardRect = card.getBoundingClientRect();
		if (cardRect.width <= 0) return null;
		const wheels = this.shadowRoot?.querySelectorAll(".retro-row .retro-wheelchair");
		if (!wheels || wheels.length < 2) return null;
		const wheelA = wheels[0];
		const wheelB = wheels[1];
		if (!wheelA || !wheelB) return null;
		const aRect = wheelA.getBoundingClientRect();
		const bRect = wheelB.getBoundingClientRect();
		const aLeft = aRect.left - cardRect.left;
		const bLeft = bRect.left - cardRect.left;
		const finishCqw = 100 - (this._config?.size === "small" ? 10 : 14) / cardRect.width * 100 - aRect.width / cardRect.width * 100;
		return {
			a: aLeft / cardRect.width * 100,
			b: bLeft / cardRect.width * 100,
			finishCqw
		};
	}
	_randomizeRaceParams() {
		const measured = this._measureRaceStartPositions();
		const params = computeRaceParams({
			a: measured?.a ?? 0,
			b: measured?.b ?? 0,
			finishCqw: measured?.finishCqw ?? 96
		});
		this._raceWinner = params.winner;
		for (const [name, value] of Object.entries(params.cssVars)) this.style.setProperty(name, value);
		return { winnerCrossT: params.winnerCrossT };
	}
	_armStateTransitions() {
		this._clearRaceTimers();
		const now = Date.now();
		switch (this._raceState) {
			case "idle": return;
			case "countdown":
				if (this._countdownStartAt !== null) this._scheduleCountdownTick();
				return;
			case "racing":
				if (this._raceEndAt !== null) this._scheduleRaceTimer(() => {
					this._raceState = "freeze";
					this._raceEndAt = null;
					this._armStateTransitions();
				}, Math.max(0, this._raceEndAt - now));
				return;
			case "freeze":
				if (this._freezeEndAt !== null) this._scheduleRaceTimer(() => {
					this._raceState = "victory";
					this._freezeEndAt = null;
					this._armStateTransitions();
				}, Math.max(0, this._freezeEndAt - now));
				return;
			case "victory":
				if (this._victoryEndAt !== null) this._scheduleRaceTimer(() => {
					this._raceState = "idle";
					this._victoryEndAt = null;
					if (this._config?.wheelchair_race) this._scheduleRace(this._nextRaceDelay());
				}, Math.max(0, this._victoryEndAt - now));
				return;
			default: {
				const _exhaustive = this._raceState;
				throw new Error(`unhandled race state: ${String(_exhaustive)}`);
			}
		}
	}
	_nextRaceDelay() {
		return NEXT_RACE_MIN_MS + Math.random() * 12e4;
	}
	_currentBarrierFreeCount() {
		if (!this._config) return 0;
		const eid = this._resolveEntity();
		if (!eid || !this.hass) return 0;
		const attrs = this.hass.states[eid]?.attributes ?? {};
		const departures = Array.isArray(attrs.departures) ? attrs.departures : [];
		return filterDepartures(departures, {
			direction: this._config.direction,
			lines: this._config.lines,
			line_directions: this._config.line_directions,
			walk_times: this._config.walk_times,
			accessibility_only: this._config.accessibility_only
		}).slice(0, 2).filter((r) => r.barrier_free).length;
	}
	render() {
		if (!this._config) return A;
		const cfg = this._config;
		const eid = this._resolveEntity();
		const attrs = eid ? this.hass?.states?.[eid]?.attributes ?? {} : {};
		const { rows, matching, departures, platform, gleisLeft, platformLabelKey, stopName } = deriveRetroView(cfg, attrs);
		const platformLabel = this._t(platformLabelKey);
		const stationPanel = cfg.show_station_name && !!stopName ? this._renderStationName(stopName, matching, departures, cfg.station_bg, attrs.line_colors ?? {}, cfg.line) : A;
		const stationHeader = cfg.show_header ? renderStationHeader({
			left: cfg.header_left,
			right: cfg.header_right,
			serverTime: attrs.server_time,
			t: (k) => this._t(k),
			lang: this.hass?.language
		}) : A;
		const raceCountdown = cfg.wheelchair_race && this._raceState === "countdown";
		const raceActive = cfg.wheelchair_race && this._raceState === "racing";
		const raceFreeze = cfg.wheelchair_race && this._raceState === "freeze";
		const raceVictory = cfg.wheelchair_race && this._raceState === "victory";
		const clickable = cfg.wheelchair_race && this._raceState === "idle" || this._tickerActive;
		const winnerLane = this._raceWinner === "A" ? 1 : this._raceWinner === "B" ? 2 : null;
		this._anyViaInRows = rows.some((d) => !!d.via);
		const retroClasses = {
			retro: true,
			"retro--gleis-left": !!platform && gleisLeft,
			"retro--gleis-right": !!platform && !gleisLeft,
			"retro--no-gleis": !platform,
			[`retro--size-${cfg.size}`]: cfg.size !== "regular",
			[`retro--style-${cfg.style}`]: cfg.style !== "classic",
			"retro--flicker": cfg.flicker,
			"retro--race-countdown": raceCountdown,
			"retro--race-active": raceActive,
			"retro--race-freeze": raceFreeze,
			"retro--race-victory": raceVictory,
			"retro--clickable": clickable,
			"retro--line-pill": cfg.show_line_pill,
			"retro--line-stripe": cfg.line_stripe,
			"retro--housing": cfg.housing
		};
		const interactiveAttrs = clickable ? {
			role: "button",
			tabindex: "0",
			"aria-label": this._tickerActive ? this._t("aria_dismiss_message") : this._t("aria_start_race")
		} : {};
		return b`
      <ha-card style="padding:0;overflow:hidden;">
        <div
          class=${e$1(retroClasses)}
          role=${interactiveAttrs.role ?? A}
          tabindex=${interactiveAttrs.tabindex ?? A}
          aria-label=${interactiveAttrs["aria-label"] ?? A}
          @click=${this._handleCardClick}
          @keydown=${clickable ? this._handleCardKeydown : A}>
          ${renderVersionBanner(this._versionMismatch, (k) => this._t(k), "retro-banner")}
          ${stationHeader}
          ${stationPanel}
          <div class="retro-led">
            ${this._renderMain(eid, rows, departures, platform, platformLabel, attrs.server_time, attrs.line_colors ?? {}, typeof attrs.stale_departures === "number" ? attrs.stale_departures : 0)}
            ${this._tickerActive && cfg.message_text ? b`<div class="retro-ticker" role="status" aria-live="polite">
                  <div
                    class="retro-ticker-text"
                    style=${`animation-duration:${this._tickerDurationSeconds(cfg.message_text)}s`}
                    @animationend=${this._onTickerDone}
                  >
                    ${cfg.message_text}
                  </div>
                </div>` : A}
            ${raceCountdown && this._countdownDigit !== null ? b`<div class="retro-countdown" role="status" aria-live="polite">
                  ${i$1(this._countdownDigit, b`<span class="retro-countdown-digit" aria-hidden="true">${this._countdownDigit}</span>`)}
                  <span class="retro-victory-sr">
                    ${this._t("race_starting_in", { n: this._countdownDigit })}
                  </span>
                </div>` : A}
            ${raceCountdown || raceActive || raceFreeze ? b`<div class="retro-finish-line" aria-hidden="true"></div>` : A}
            ${raceVictory ? b`<div class="retro-victory" role="status" aria-live="polite">
                  <div class="retro-victory-flag" aria-hidden="true"></div>
                  ${winnerLane !== null ? b`<div class="retro-victory-winner" aria-hidden="true">
                        <ha-icon class="retro-winner-trophy" icon="mdi:trophy"></ha-icon>
                        <span class="retro-winner-num">${winnerLane}</span>
                      </div>` : A}
                  <span class="retro-victory-sr">
                    ${winnerLane !== null ? this._t("race_winner_announce", { n: winnerLane }) : this._t("race_finished")}
                  </span>
                </div>` : A}
          </div>
        </div>
      </ha-card>
    `;
	}
	_renderMain(eid, rows, allDepartures, platform, platformLabel, serverTime, lineColors, staleDropped) {
		if (!eid) return b`<div class="retro-empty" role="status" aria-live="polite">${this._t("no_entity")}</div>`;
		if (rows.length === 0) {
			const dir = this._config.direction;
			const lineFilter = this._config.line;
			const inDirection = allDepartures.filter((d) => d.direction === dir);
			let key = "no_data";
			if (allDepartures.length === 0 && staleDropped > 0) key = "stale_feed";
			else if (allDepartures.length === 0 && serverTime) key = "betriebsschluss";
			else if (allDepartures.length > 0 && inDirection.length === 0) key = "no_data_wrong_direction";
			else if (lineFilter && inDirection.length > 0) key = "no_data_wrong_line";
			return b`<div class="retro-empty" role="status" aria-live="polite">${this._t(key)}</div>`;
		}
		return b`
      <ul class="retro-rows" role="list" aria-label=${this._t("departures_list")}>
        ${rows.map((d, i) => this._renderRow(d, i, lineColors))}
      </ul>
      ${platform ? this._renderGleis(platform, platformLabel) : A}
    `;
	}
	_renderRow(d, rowIndex, lineColors) {
		const cd = Number.isFinite(d.countdown) ? d.countdown : null;
		const isAtPlatform = cd !== null && cd <= 0;
		const line = d.line || "?";
		const towards = d.towards || "";
		const via = typeof d.via === "string" && d.via.trim() ? d.via.trim() : null;
		const rowLabel = this._rowLabel(d, line, towards, via);
		const palette = chipPalette(line, {}, lineColors);
		const hasResolvedColor = palette.background !== "var(--primary-color)";
		const stripeColor = hasResolvedColor ? palette.background : "var(--led-amber)";
		const pillFg = palette.color ?? (hasResolvedColor ? "#fff" : "var(--led-bg)");
		const rowStyle = o({
			"--row-i": String(rowIndex),
			"--retro-line-color": stripeColor,
			"--retro-line-fg": pillFg
		});
		const showVia = !!via;
		return b`
      <li class="retro-row" style=${rowStyle} aria-label=${rowLabel}>
        <div class="retro-line" aria-hidden="true">
          <span class="retro-line__label">${line}</span>
        </div>
        <div class="retro-dest" aria-hidden="true">
          <span class="retro-dest-stack">
            <span class="retro-dest-text retro-dest-text--layout">${deText(towards)}</span>
            ${showVia ? b`
                  <span
                    class=${e$1({
			"retro-dest-text": true,
			"retro-dest-text--absolute": true,
			"retro-dest-text--visible": this._viaPhase === "towards"
		})}
                  >${deText(towards)}</span>
                  <span
                    class=${e$1({
			"retro-dest-text": true,
			"retro-dest-text--absolute": true,
			"retro-dest-text--via": true,
			"retro-dest-text--visible": this._viaPhase === "via"
		})}
                  >${this._t("via_prefix")} ${deText(via)}</span>
                ` : A}
          </span>
          ${d.timetable ? b`<ha-icon
                class="retro-timetable"
                icon="mdi:calendar-clock"
                title=${this._t("timetable_title")}
              ></ha-icon>` : A}
          ${d.barrier_free ? b`<ha-icon
                class="retro-wheelchair"
                icon="mdi:wheelchair-accessibility"
                title=${this._t("barrier_free_title")}
              ></ha-icon>` : A}
        </div>
        <div class="retro-cd" aria-hidden="true">
          ${cd === null ? "--" : isAtPlatform ? b`<span class="retro-stars"><span>*</span><span>*</span></span>` : this._config?.show_unit ? b`<span class="retro-cd-num">${cd}</span><span class="retro-cd-unit">${this._t("unit_min")}</span>` : String(cd)}
        </div>
      </li>
    `;
	}
	/** What a screen reader hears for a row, since the LED cells themselves
	*  are hidden from it: line, destination, via, countdown, then the
	*  timetable and step-free notes where they apply. */
	_rowLabel(d, line, towards, via) {
		const cd = Number.isFinite(d.countdown) ? d.countdown : null;
		const cdLabel = cd === null ? this._t("no_data") : cd <= 0 ? this._t("at_platform") : this._t("countdown_minutes", { n: String(cd) });
		return [
			line,
			towards,
			via ? `${this._t("via_prefix")} ${via}` : "",
			cdLabel,
			d.timetable ? this._t("timetable_title") : "",
			d.barrier_free ? this._t("barrier_free_title") : ""
		].filter(Boolean).join(" — ");
	}
	_renderGleis(platform, label) {
		return b`
      <div class="retro-gleis">
        <div class="retro-gleis-label">${label}</div>
        <div class="retro-gleis-number">${platform}</div>
      </div>
    `;
	}
	_renderStationName(stopName, matching, allDepartures, bgChoice, lineColors, configuredLine) {
		let bg;
		let fg;
		if (bgChoice === "white") {
			bg = "#fff";
			fg = "#000";
		} else if (bgChoice === "black") {
			bg = "#000";
			fg = "#fff";
		} else {
			const pool = matching.length ? matching : allDepartures;
			const sourceLine = configuredLine || pool[0]?.line;
			if (sourceLine) {
				const palette = chipPalette(sourceLine, {}, lineColors);
				bg = palette.background;
				fg = palette.color ?? "#fff";
				if (bg === "var(--primary-color)") {
					bg = "#fff";
					fg = "#000";
				}
			} else {
				bg = "#fff";
				fg = "#000";
			}
		}
		return b`
      <div class="retro-station" style=${o({
			background: bg,
			color: fg
		})}>
        <div class="retro-station-name">${deText(stopName)}</div>
      </div>
    `;
	}
	static {
		this.styles = i$7`
    :host {
      display: block;
      /* Create a stacking context on the host so the high z-indexes
         inside (screen-door overlay z=30, victory overlay z=20,
         winner badge z=22, etc.) only compete with other elements
         inside this card. Without this, race overlays and the LED
         dot pattern can render above HA's dashboard chrome. */
      isolation: isolate;
    }
    .retro {
      /* Classic defaults — swapped wholesale by .retro--style-warm below. */
      --led-amber: #FFC700;
      --led-bg: #000;
      --led-substrate: #1a0d2a;
      --led-glow-rgb: 255 199 0;
      --led-dot-size: 0.5px;
      --led-dot-edge: 1px;
      --led-dot-pitch: 4px;

      /* LED area inner padding. Lives on the LED element; declared here so
         size/gleis variants can override via the .retro cascade. */
      --retro-pad-y: 14px;
      --retro-pad-r: 22px;
      --retro-pad-l: 22px;

      /* Establish a container so the race exit animation can translate
         wheelchairs by 100cqw (= full card width) regardless of size. */
      container-type: inline-size;
      position: relative;
      display: flex;
      flex-direction: column;
      /* WL Mono is the subsetted TeX Gyre Cursor face shipped with
         this integration — Courier-metric so the Courier New stack is
         a clean fallback during the woff2 fetch window. The bold
         variant ships separately so weight: 700 picks up real glyphs
         instead of faux-bold synthesis. */
      font-family: "WL Mono", "Courier New", Courier, monospace;
      font-weight: 700;
      letter-spacing: 0.08em;
      overflow: hidden;
      min-height: 110px;
    }
    .retro-led {
      /* The actual LED display area — own positioning context so the
         race finish-line and victory overlay fill it edge-to-edge with a
         simple inset:0, no negative-margin gymnastics. */
      flex: 1;
      position: relative;
      display: flex;
      align-items: stretch;
      background: var(--led-bg);
      background-image: radial-gradient(
        circle,
        var(--led-substrate) var(--led-dot-size),
        transparent var(--led-dot-edge)
      );
      background-size: var(--led-dot-pitch) var(--led-dot-pitch);
      padding: var(--retro-pad-y) var(--retro-pad-r) var(--retro-pad-y) var(--retro-pad-l);
    }
    /* Pixel style — vintage LED-dot-matrix departure-board look. A
       layer above all panel content is transparent at the substrate-
       dot positions and opaque LED-bg between them, so amber text +
       glow + race choreography (wheelchairs, finish strip, countdown
       digit, victory flag, trophy badge) all show through *only* at
       dot positions — aligned with the substrate dot pattern beneath.
       Everything in the LED area becomes discrete "lit LED dots" for a
       consistently dotty panel material.
       Pixel inherits the warm color palette (3px dot pitch) because
       the classic style's 4px pitch is too coarse for the screen-door
       and small text becomes illegible. z-index 30 sits above the
       wheelchair (4), finish strip (3), countdown (18), victory (20)
       — and the trophy badge inside victory's isolated stacking
       context (which appears at z=20 from .retro-led's perspective). */
    .retro--style-pixel .retro-led::after {
      content: '';
      position: absolute;
      inset: 0;
      background-image: radial-gradient(
        circle,
        transparent var(--led-dot-size),
        var(--led-bg) var(--led-dot-edge)
      );
      background-size: var(--led-dot-pitch) var(--led-dot-pitch);
      pointer-events: none;
      z-index: 30;
    }
    .retro--clickable {
      cursor: pointer;
    }
    .retro--style-warm,
    .retro--style-pixel {
      --led-amber: #FFB000;
      --led-bg: #050302;
      --led-substrate: #2a1805;
      --led-glow-rgb: 255 176 0;
      --led-dot-size: 0.9px;
      --led-dot-edge: 1.4px;
      --led-dot-pitch: 3px;
    }
    .retro--gleis-left .retro-gleis { order: -1; }
    .retro--gleis-right { --retro-pad-r: 14px; }
    .retro--gleis-left { --retro-pad-l: 14px; }
    .retro-rows {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 8px;
      color: var(--led-amber);
      text-shadow: 0 0 6px rgb(var(--led-glow-rgb) / 0.7);
      font-size: 1.9em;
      line-height: 1;
      /* <ul> for semantic departure list — reset UA list chrome. */
      list-style: none;
      margin: 0;
      padding: 0;
    }
    .retro-row {
      display: grid;
      grid-template-columns: 2.5em 1fr auto;
      /* Baseline alignment — not center. Both grid cells render the
         same uppercase WL Mono at the same font-size, so aligning by
         alphabetic baseline makes the cap-tops line up automatically
         (by construction, not by tuning). Center alignment used to
         centre the cells' BOXES, but WL Mono's uppercase glyphs sit
         in the upper-middle of their line-box — so identical boxes
         centred geometrically still showed mismatched visible ink.
         Baseline alignment retires both empirical translateY hacks
         that used to live on the pill and its inner label. */
      align-items: baseline;
      gap: 12px;
      white-space: nowrap;
      /* Position context for the line-stripe ::before Tweak and the
         absolute via-cross-fade pair inside .retro-dest. */
      position: relative;
    }
    .retro-line {
      /* Default (no Tweak): plain amber text, left-aligned. The pill
         layout below kicks in only under .retro--line-pill so the
         pre-Tweak look is byte-identical. Center alignment matches
         the row's align-items: center so the line cell vertically
         lines up with the destination text and countdown digits. */
      font-weight: 400;
      text-align: left;
      transition: opacity 0.15s ease-out;
    }
    /* Line-pill Tweak — render the line code inside a filled rounded
       rectangle using --retro-line-color (resolved per row in JS).
       Structural decisions (NOT empirical magic numbers — see below
       for the history):
       1. align-items: baseline (inherited from .retro-row). Pill text
          shares its baseline with the destination text in the next
          grid cell; same font + same size means cap-tops line up by
          construction. No translateY needed.
       2. NO fixed height. Pill grows from symmetric em padding
          around its inner label, so the visual capsule is always
          centred top-to-bottom on the text. Previous height: 1em
          made the pill BOX drift relative to its visible glyph,
          which every per-em translateY hack was empirically fighting.
       3. NO transform optical-nudge. Earlier passes tried -0.05em,
          0, +0.03em on the pill and -0.04em, 0, +0.08em on the
          label; baseline alignment retires all of them.
       Padding 0.08em block / 0.4em inline is the design spec; em
       sizing lets medium / small variants inherit proportions
       automatically. */
    .retro--line-pill .retro-line {
      display: inline-flex;
      align-items: baseline;
      justify-content: center;
      box-sizing: border-box;
      font-weight: 700;
      text-align: center;
      min-width: 2em;
      padding: 0.08em 0.4em;
      border-radius: 0.18em;
      background: var(--retro-line-color, transparent);
      color: var(--retro-line-fg, var(--led-amber));
      text-shadow: none;
      box-shadow: 0 0 6px var(--retro-line-color, rgb(var(--led-glow-rgb) / 0.4));
    }
    .retro--line-pill .retro-line__label {
      /* Kept as a render-time wrapper so the markup stays uniform
         across pill and non-pill modes (the renderer always emits
         the span — keying off it from --race-victory or future
         tweaks stays cheap). inline-block makes the span a valid
         transform target if a future tweak needs one; currently no
         transform is applied because baseline alignment on the
         grid row handles centring structurally. */
      display: inline-block;
    }
    .retro-dest {
      display: flex;
      align-items: center;
      gap: 0.35em;
      /* No overflow: hidden on the flex container itself — the
         destination-text stack carries its own overflow:hidden /
         text-overflow:ellipsis, and clipping at this level would
         shave the bottom off the wheelchair icon at the row's
         right edge. Keeping overflow visible lets the icon render
         in full while the text inside still ellipsises. */
      text-transform: uppercase;
      min-width: 0;
      transition: opacity 0.15s ease-out;
    }
    /* Stack the towards / via labels on top of each other. The
       --layout span occupies the row height (so the row never
       collapses on cross-fade); the two --absolute spans sit on top
       and swap visibility via --visible. Rows with no via payload
       skip the absolute pair entirely and render only the layout span,
       so existing dashboards are unaffected. */
    .retro-dest-stack {
      position: relative;
      display: inline-block;
      overflow: hidden;
      flex: 0 1 auto;
      min-width: 0;
      max-width: 100%;
    }
    .retro-dest-text {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      min-width: 0;
      max-width: 100%;
      display: block;
    }
    .retro-dest-text--layout {
      /* Sized but invisible while via-cross-fade is mounted — the two
         absolute siblings carry the painted text. A row without a via
         payload omits the absolute pair, so the layout span stays
         visible and renders the towards text directly. */
      visibility: visible;
    }
    .retro-dest-stack:has(.retro-dest-text--absolute) .retro-dest-text--layout {
      visibility: hidden;
    }
    .retro-dest-text--absolute {
      position: absolute;
      inset: 0;
      opacity: 0;
      transition: opacity 0.4s ease-in-out;
      will-change: opacity;
    }
    .retro-dest-text--visible {
      opacity: 1;
    }
    /* The timetable pictogram marks a planned S-Bahn row (no live time)
       and shares the wheelchair's sizing and optical-centre nudge. */
    .retro-wheelchair,
    .retro-timetable {
      flex: 0 0 auto;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      /* Sized slightly smaller than 1em so the icon sits comfortably
         inside the row's line-height: 1 box with the row centred —
         a full-em icon was clipping at the bottom under the previous
         overflow:hidden + baseline-translate combo on smaller sizes. */
      --mdc-icon-size: 0.9em;
      width: 0.9em;
      height: 0.9em;
      color: inherit;
      filter: drop-shadow(0 0 6px rgb(var(--led-glow-rgb) / 0.7));
      /* Optical-centre correction. WL Mono is a Courier-derived face
         with a tall ascender / shallow descender, so uppercase glyphs
         (SIMMERING) sit in the upper-middle of their line-box. An
         icon centred in the line-box geometrically ends up visibly
         above the cap-height of the text next to it. Nudging the
         icon down ~0.12em lands its visual centre on the cap-height
         centre of the adjacent SIMMERING glyphs. */
      transform: translateY(0.12em);
    }
    .retro-cd {
      font-variant-numeric: tabular-nums;
      text-align: right;
      min-width: 2.5em;
      transition: opacity 0.4s ease-out;
      display: inline-flex;
      align-items: baseline;
      justify-content: flex-end;
      gap: 0.25em;
    }
    .retro-cd-num {
      /* Holds the tabular-nums alignment for the digit while letting
         the unit sit at a smaller size next to it without throwing off
         the right-edge alignment of the column. */
      display: inline-block;
    }
    .retro-cd-unit {
      /* Small amber-caps unit ("min") trailing the countdown number.
         Tied to em so it tracks the row's font-size token. Hidden at
         narrow widths via a container query below — the row prefers
         to surrender the unit over the destination text when room is
         tight. The text-shadow inherited from .retro-rows is already
         the right glow, so no overrides here. */
      display: inline-block;
      font-size: 0.5em;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      opacity: 0.85;
      transform: translateY(-0.05em);
    }
    @container (inline-size < 360px) {
      .retro-cd-unit { display: none; }
    }
    .retro-stars {
      display: inline-flex;
      gap: 0.08em;
      justify-content: flex-end;
    }
    .retro-stars > span {
      animation: retroStarBlink 1s infinite;
    }
    .retro-stars > span:nth-child(2) {
      animation-delay: 0.5s;
    }
    @keyframes retroStarBlink {
      0%, 49.99% { opacity: 1; }
      50%, 100%  { opacity: 0; }
    }
    /* Irregular, mostly-on flicker — brief dips and rare blackouts on the
       line badge. Keeps full opacity ~95% of the loop so it reads as a
       struggling bulb rather than a blinking sign. */
    @keyframes retroLineFlicker {
      0%, 6.9%   { opacity: 1; }
      7.1%       { opacity: 0.38; }
      7.5%       { opacity: 1; }
      22.9%      { opacity: 1; }
      23.1%      { opacity: 0.08; }
      23.35%     { opacity: 1; }
      23.7%      { opacity: 0.55; }
      24%        { opacity: 1; }
      51.9%      { opacity: 1; }
      52.15%     { opacity: 0.45; }
      52.4%      { opacity: 1; }
      75.9%      { opacity: 1; }
      76.1%      { opacity: 0.15; }
      76.35%     { opacity: 1; }
      77%        { opacity: 0.6; }
      77.3%      { opacity: 1; }
      100%       { opacity: 1; }
    }
    @media (prefers-reduced-motion: no-preference) {
      .retro--flicker .retro-line {
        animation: retroLineFlicker 7.3s infinite;
        will-change: opacity;
      }
      /* Offset the second row so the two badges don't flicker in lockstep. */
      .retro--flicker .retro-row:nth-child(2) .retro-line {
        animation-duration: 8.1s;
        animation-delay: -2.4s;
      }
    }
    /* Wheelchair race — per-race pattern encodes who's ahead at 25/50/
       75%, so each run has at least one overtake. Per-racer waypoints
       (--race-x-25/50/75), end offset, and duration come from CSS
       custom properties that JS sets at race start. Keyframe preserves
       the 0.18em baseline offset so the icon doesn't jump vertically.
       Per-keyframe timing-functions: ease-out for the launch (burst
       out of the gate) and a symmetric cubic-bezier for every middle
       segment. The cubic-bezier (0.4, 0.2, 0.6, 0.8) has endpoint
       slopes of ~0.5× the segment's average velocity, peaking ~1.5×
       in the middle — so when the swap pattern flips lead/trail at a
       checkpoint, the velocity transition reads as a smooth ease
       instead of an abrupt lurch. */
    @keyframes retroWheelExit {
      0%   { transform: translate(0, 0.18em); animation-timing-function: ease-out; }
      25%  { transform: translate(var(--race-x-25, 25cqw), 0.18em); animation-timing-function: cubic-bezier(0.4, 0.2, 0.6, 0.8); }
      50%  { transform: translate(var(--race-x-50, 50cqw), 0.18em); animation-timing-function: cubic-bezier(0.4, 0.2, 0.6, 0.8); }
      75%  { transform: translate(var(--race-x-75, 75cqw), 0.18em); animation-timing-function: cubic-bezier(0.4, 0.2, 0.6, 0.8); }
      100% { transform: translate(var(--race-end, 110cqw), 0.18em); }
    }
    @media (prefers-reduced-motion: no-preference) {
      /* LED prep: countdown, racing, and the photo-finish freeze all
         share the same row-clearing + overflow-visible setup. */
      .retro--race-countdown .retro-dest,
      .retro--race-active .retro-dest,
      .retro--race-freeze .retro-dest {
        overflow: visible;
      }
      .retro--race-countdown .retro-cd,
      .retro--race-active .retro-cd,
      .retro--race-freeze .retro-cd {
        opacity: 0;
      }
      /* Only fade Gleis/Steig during the prep when it's on the right —
         that's the wheelchairs' path. Left-side Gleis stays lit. */
      .retro--race-countdown.retro--gleis-right .retro-gleis,
      .retro--race-active.retro--gleis-right .retro-gleis,
      .retro--race-freeze.retro--gleis-right .retro-gleis {
        opacity: 0;
      }
      /* Animation declarations apply during both active and freeze so
         the in-flight animation keeps its identity across the state
         flip — animation-play-state: paused below freezes the frame
         instead of restarting from 0%. */
      .retro--race-active .retro-row:nth-child(1) .retro-wheelchair,
      .retro--race-freeze .retro-row:nth-child(1) .retro-wheelchair {
        --race-end: var(--race-a-end, 110cqw);
        --race-x-25: var(--race-a-x-25, 25cqw);
        --race-x-50: var(--race-a-x-50, 50cqw);
        --race-x-75: var(--race-a-x-75, 75cqw);
        animation: retroWheelExit var(--race-a-duration, 3.3s) linear forwards;
      }
      .retro--race-active .retro-row:nth-child(2) .retro-wheelchair,
      .retro--race-freeze .retro-row:nth-child(2) .retro-wheelchair {
        --race-end: var(--race-b-end, 110cqw);
        --race-x-25: var(--race-b-x-25, 25cqw);
        --race-x-50: var(--race-b-x-50, 50cqw);
        --race-x-75: var(--race-b-x-75, 75cqw);
        animation: retroWheelExit var(--race-b-duration, 3.3s) linear forwards;
      }
      /* Photo-finish freeze: pauses both wheelchair animations at
         the moment shortly after the winner crosses the finish line.
         The viewer gets a clear still frame — winner at the strip,
         loser caught a step behind — before the trophy appears. */
      .retro--race-freeze .retro-wheelchair {
        animation-play-state: paused;
      }
      /* Pass wheelchairs in front of the finish-line strip so the
         crossing reads as "through" rather than "behind the barrier". */
      .retro--race-active .retro-wheelchair,
      .retro--race-freeze .retro-wheelchair {
        position: relative;
        z-index: 4;
      }
      /* Victory holds the racers off-screen until the idle reset. */
      .retro--race-victory .retro-wheelchair {
        opacity: 0;
      }
    }
    /* Hide all row text during victory so nothing bleeds through the
       (slightly transparent) checker flag. */
    .retro--race-victory .retro-line,
    .retro--race-victory .retro-dest,
    .retro--race-victory .retro-cd,
    .retro--race-victory .retro-gleis {
      opacity: 0;
    }
    /* Flicker keyframes set their own opacity values, which win over
       the static opacity:0 above while the animation is running.
       Disable the flicker entirely during victory so the line badge
       hides cleanly with the rest of the row text. */
    .retro--race-victory.retro--flicker .retro-line {
      animation: none;
    }
    /* Message-ticker overlay — when \`message_ticker\` is on, this fills
       the LED panel every few minutes and scrolls \`message_text\`
       across once as a marquee, then removes itself (animationend → a
       JS handler clears _tickerActive). Opaque --led-bg plus the same
       substrate dot-pattern as .retro-led so the departures vanish
       cleanly and the panel material stays consistent. z-index 16
       keeps it below the countdown (18) / victory (20) AND below the
       pixel screen-door ::after (30), so in pixel style the scrolling
       text is dotted like the rest of the board. */
    .retro-ticker {
      position: absolute;
      inset: 0;
      z-index: 16;
      overflow: hidden;
      display: flex;
      align-items: center;
      pointer-events: none;
      background: var(--led-bg);
      background-image: radial-gradient(
        circle,
        var(--led-substrate) var(--led-dot-size),
        transparent var(--led-dot-edge)
      );
      background-size: var(--led-dot-pitch) var(--led-dot-pitch);
      border-radius: inherit;
      /* Query container so the scroll keyframes can start the text one
         full panel-width off the right edge via 100cqw. */
      container-type: inline-size;
    }
    .retro-ticker-text {
      /* flex: none keeps the text's natural (over-wide) width — the
         parent's overflow:hidden clips it. The parent's align-items:
         center handles vertical centring, so the keyframes touch only
         translateX and never fight a translateY. */
      flex: none;
      white-space: nowrap;
      /* Match the departure rows: same amber, glow, size and uppercase
         board lettering. Font, weight and tracking inherit from .retro. */
      font-size: 1.9em;
      line-height: 1;
      color: var(--led-amber);
      text-shadow: 0 0 6px rgb(var(--led-glow-rgb) / 0.7);
      text-transform: uppercase;
      will-change: transform;
      animation-name: retroTickerScroll;
      animation-timing-function: linear;
      animation-iteration-count: 1;
      /* both → text waits off-screen-right before the run and rests
         off-screen-left after it, with no flash at the layout origin.
         animation-duration is set inline, scaled to message length. */
      animation-fill-mode: both;
    }
    @keyframes retroTickerScroll {
      /* Start one full panel-width off the right (100cqw), end one
         full text-width off the left (-100%). */
      from { transform: translateX(100cqw); }
      to   { transform: translateX(-100%); }
    }
    /* Pixelated finish-line strip on the right edge during the race.
       Same conic-gradient checker technique as the victory flag, but
       as a narrow 14px column so ~2 squares wide read as chunky "8-bit
       goal posts". Clipped by the card's border-radius via overflow. */
    .retro-finish-line {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      width: 14px;
      z-index: 3;
      pointer-events: none;
      background-image: conic-gradient(
        transparent 0deg 90deg,
        var(--led-amber) 90deg 180deg,
        transparent 180deg 270deg,
        var(--led-amber) 270deg 360deg
      );
      background-size: 14px 14px;
      filter: drop-shadow(0 0 4px rgb(var(--led-glow-rgb) / 0.7));
      animation: retroFinishLineAppear 0.3s ease-out both;
    }
    @keyframes retroFinishLineAppear {
      0%   { opacity: 0; transform: scaleX(0.2); transform-origin: right; }
      100% { opacity: 1; transform: scaleX(1); }
    }
    /* Smaller strip on the small variant so it doesn't dominate. */
    .retro--size-small .retro-finish-line {
      width: 10px;
      background-size: 10px 10px;
    }
    /* Victory overlay: 90s-racing-sim checkered flag scrolling horizontally
       with a pulsing trophy centered on top. */
    .retro-victory {
      position: absolute;
      inset: 0;
      z-index: 20;
      display: flex;
      align-items: center;
      justify-content: center;
      pointer-events: none;
      overflow: hidden;
      border-radius: inherit;
      opacity: 1;
      isolation: isolate;
      /* Size container so the flag can query card height via cqh and
         keep its checker squares actually square regardless of size. */
      container-type: size;
      animation: retroVictoryAppear 0.22s ease-out both;
    }
    /* Screen-reader-only label inside the victory overlay. The overlay
       is purely visual (checkered flag animation) so we ship a hidden
       text announcement in a role="status"/aria-live region — screen
       readers speak it when the race finishes, sighted users see the
       animation. */
    .retro-victory-sr {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    }
    .retro-victory-flag {
      position: absolute;
      inset: 0;
      /* Transparent "dark" tiles let the LED substrate dot pattern of the
         card show through; only the amber rectangles are painted, then the
         drop-shadow filter gives each one the same glow as the row text. */
      background-image: conic-gradient(
        transparent 0deg 90deg,
        var(--led-amber) 90deg 180deg,
        transparent 180deg 270deg,
        var(--led-amber) 270deg 360deg
      );
      /* Tile = 50cqh × 50cqh — square, so height divides the card into
         2 tile rows (= 4 rectangle rows) and the individual rectangles
         stay square at every card size. */
      background-size: 50cqh 50cqh;
      filter: drop-shadow(0 0 6px rgb(var(--led-glow-rgb) / 0.7));
      animation: retroVictoryFlag 0.4s linear infinite;
    }
    @keyframes retroVictoryAppear {
      0%   { opacity: 0; }
      100% { opacity: 1; }
    }
    @keyframes retroVictoryFlag {
      0%   { background-position: 0 0; }
      100% { background-position: 100cqh 0; }
    }

    /* Pre-race countdown overlay — "3, 2, 1" punch-in over the LED
       panel before the racers leave the gate. Single big chunky
       monospace numeral in LED-amber, glowing, with a punch-scale
       animation per digit (Lit re-mounts the <span> via keyed() so
       the keyframe re-fires each tick). The overlay dims the LED
       behind it slightly so the digit reads cleanly. */
    .retro-countdown {
      position: absolute;
      inset: 0;
      z-index: 18;
      display: flex;
      align-items: center;
      justify-content: center;
      pointer-events: none;
      background: rgba(0, 0, 0, 0.6);
      border-radius: inherit;
      overflow: hidden;
      isolation: isolate;
      container-type: size;
      animation: retroCountdownAppear 0.18s ease-out both;
    }
    @keyframes retroCountdownAppear {
      0%   { opacity: 0; }
      100% { opacity: 1; }
    }
    .retro-countdown-digit {
      display: block;
      font-family: ui-monospace, "SF Mono", Menlo, Monaco, Consolas, monospace;
      font-weight: 900;
      font-size: 60cqh;
      line-height: 1;
      color: var(--led-amber);
      letter-spacing: -0.04em;
      text-shadow:
        0 0 10px rgb(var(--led-glow-rgb) / 0.9),
        0 0 24px rgb(var(--led-glow-rgb) / 0.7),
        0 0 40px rgb(var(--led-glow-rgb) / 0.4);
      animation: retroCountdownPunch 0.8s ease-out both;
      will-change: transform, opacity;
    }
    @keyframes retroCountdownPunch {
      0%   { opacity: 0; transform: scale(0.4); }
      18%  { opacity: 1; transform: scale(1.18); }
      30%  {              transform: scale(1); }
      72%  { opacity: 1; transform: scale(1); }
      100% { opacity: 0; transform: scale(0.85); }
    }

    /* Winner badge — circular cut-out centered on the victory checker
       flag. Background = the card's LED substrate (--led-bg, black in
       classic, dark warm-amber in warm mode) so the badge reads as
       "punched through" the checker flag rather than sitting on top of
       it. Amber LED ring + glow gives it the same lit-from-within
       feel as the rest of the LED panel. mdi:trophy is the visual
       anchor; the lane number sits on its plinth. */
    .retro-victory-winner {
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 22;
      /* +10% over the previous 41cqmin / 82px / 172px sizing so the
         trophy + lane number have more breathing room inside the LED
         ring without crowding the embossed numerals. */
      width: 45cqmin;
      height: 45cqmin;
      min-width: 90px;
      min-height: 90px;
      max-width: 190px;
      max-height: 190px;
      border-radius: 50%;
      background-color: var(--led-bg);
      background-image: radial-gradient(
        circle,
        var(--led-substrate) var(--led-dot-size),
        transparent var(--led-dot-edge)
      );
      background-size: var(--led-dot-pitch) var(--led-dot-pitch);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--led-amber);
      transform: translate(-50%, -50%) scale(0.2);
      opacity: 0;
      animation: retroWinnerBadgeAppear 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) 0.18s forwards;
    }
    @keyframes retroWinnerBadgeAppear {
      0%   { opacity: 0; transform: translate(-50%, -50%) scale(0.2); }
      100% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
    }
    .retro-winner-trophy {
      --mdc-icon-size: 57cqmin;
      color: var(--led-amber);
      filter: drop-shadow(0 0 4px rgb(var(--led-glow-rgb) / 0.85))
              drop-shadow(0 0 10px rgb(var(--led-glow-rgb) / 0.45));
    }
    /* Lane number on the trophy cup. Coloured with --led-substrate (the
       same dot colour the rest of the panel uses for unlit pixels) so
       the digit reads as a hole punched out of the trophy's lit amber
       — matching the dotted-board / Punktmatrix aesthetic across all
       three style variants. No text-shadow / embossing: with the
       substrate-tone digit, any lit-edge highlight reads as a halo
       around a "missing pixel" hole, which is the wrong material. */
    .retro-winner-num {
      position: absolute;
      top: 44%;
      left: 0;
      right: 0;
      transform: translateY(-50%);
      text-align: center;
      font-family: "Arial Black", "Helvetica Neue", Helvetica, Arial, sans-serif;
      font-weight: 900;
      /* -10% from the previous 22cqmin so the digit sits inside the
         cup bowl rather than overflowing onto the trophy stem. */
      font-size: 20cqmin;
      line-height: 1;
      color: var(--led-substrate);
      letter-spacing: -0.04em;
      pointer-events: none;
    }
    /* Tighter on the small variant so trophy + number still fit. */
    .retro--size-small .retro-winner-trophy {
      --mdc-icon-size: 51cqmin;
    }
    .retro--size-small .retro-winner-num {
      /* -10% from the previous 19cqmin, same rationale as base. */
      font-size: 17cqmin;
      /* On small the badge hits its 82px min-width while the trophy
         icon scales down independently — so the cup ends up a touch
         higher in the badge than on regular/medium. Nudge the number
         up the same amount so it lands on the cup body, not below it. */
      top: 37%;
    }
    /* Pixel mode alignment fix: drop the trophy badge's own substrate
       gradient. The badge's gradient origin doesn't coregister with
       the panel-wide screen-door overlay, so its dots fight the
       overlay's dots inside the badge area. Without it, the trophy
       circle is a clean solid LED-bg cutout from the dotted panel —
       a dark frame around the dotted trophy icon and number. */
    .retro--style-pixel .retro-victory-winner {
      background-image: none;
    }
    /* Pixel style: add 1px of breathing room between the countdown
       digits and the gleis indicator. The screen-door overlay can
       make the dotted digits feel jammed against the gleis dots, so
       a single extra pixel of separation reads cleanly. Covers
       gleis-right (default), gleis-left (platform 2), and the small
       size variant where the base margin starts smaller. */
    .retro--style-pixel .retro-gleis {
      margin-left: 13px;
    }
    .retro--style-pixel.retro--gleis-left .retro-gleis {
      margin-right: 13px;
    }
    .retro--style-pixel.retro--size-small .retro-gleis {
      margin-left: 9px;
    }
    .retro--style-pixel.retro--size-small.retro--gleis-left .retro-gleis {
      margin-right: 9px;
    }

    .retro-gleis {
      flex: 0 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0 14px 0 18px;
      margin-left: 12px;
      color: var(--led-amber);
      text-shadow: 0 0 6px rgb(var(--led-glow-rgb) / 0.7);
      transition: opacity 0.4s ease-out;
      /* Position context for the dotted-divider pseudo. The previous
         border-left: 1px hairline read as a CSS edge, not LED material.
         A 2 px-wide column painted with the same substrate radial-
         gradient as the panel renders the divider as missing pixels —
         i.e. an unlit column on the dot-matrix. Pitch + dot size + dot
         edge inherit from the same custom properties .retro-led uses
         (4 px classic, 3 px warm / pixel) so the column always lines
         up with the substrate behind it. */
      position: relative;
    }
    .retro-gleis::before {
      content: '';
      position: absolute;
      top: 8%;
      bottom: 8%;
      left: 0;
      width: 2px;
      background-image: radial-gradient(
        circle,
        rgb(var(--led-glow-rgb) / 0.55) var(--led-dot-size),
        transparent var(--led-dot-edge)
      );
      background-size: var(--led-dot-pitch) var(--led-dot-pitch);
      pointer-events: none;
    }
    .retro--gleis-left .retro-gleis {
      padding: 0 18px 0 14px;
      margin-left: 0;
      margin-right: 12px;
    }
    .retro--gleis-left .retro-gleis::before {
      left: auto;
      right: 0;
    }
    .retro-gleis-label {
      font-size: 0.9em;
      letter-spacing: 2px;
      margin-bottom: 2px;
      opacity: 0.9;
    }
    .retro-gleis-number {
      font-size: 3em;
      line-height: 1;
      font-weight: 400;
    }

    /* ---- size variants ---- */
    .retro--size-medium {
      --retro-pad-y: 11px;
      --retro-pad-r: 18px;
      --retro-pad-l: 18px;
      min-height: 92px;
    }
    .retro--size-medium.retro--gleis-right { --retro-pad-r: 10px; }
    .retro--size-medium.retro--gleis-left { --retro-pad-l: 10px; }
    .retro--size-medium .retro-rows { font-size: 1.55em; gap: 6px; }
    .retro--size-medium .retro-gleis { padding: 0 10px 0 14px; min-width: 48px; }
    .retro--size-medium.retro--gleis-left .retro-gleis {
      padding: 0 14px 0 10px;
    }
    .retro--size-medium .retro-gleis-number { font-size: 2.3em; }
    .retro--size-medium .retro-gleis-label {
      font-size: 0.8em;
      letter-spacing: 1.5px;
    }

    .retro--size-small {
      --retro-pad-y: 8px;
      --retro-pad-r: 14px;
      --retro-pad-l: 14px;
      min-height: 72px;
    }
    .retro--size-small.retro--gleis-right { --retro-pad-r: 6px; }
    .retro--size-small.retro--gleis-left { --retro-pad-l: 6px; }
    .retro--size-small .retro-rows { font-size: 1.25em; gap: 4px; }
    .retro--size-small .retro-row {
      grid-template-columns: 2em 1fr auto;
      gap: 8px;
    }
    .retro--size-small .retro-gleis {
      padding: 0 8px 0 10px;
      min-width: 38px;
      margin-left: 8px;
    }
    .retro--size-small.retro--gleis-left .retro-gleis {
      padding: 0 10px 0 8px;
      margin-left: 0;
      margin-right: 8px;
    }
    .retro--size-small .retro-gleis-number { font-size: 1.75em; }
    .retro--size-small .retro-gleis-label {
      font-size: 0.68em;
      letter-spacing: 1px;
      margin-bottom: 0;
    }
    .retro-empty {
      flex: 1;
      text-align: center;
      align-self: center;
      color: var(--led-amber);
      text-shadow: 0 0 6px rgb(var(--led-glow-rgb) / 0.7);
      font-size: 1.4em;
      padding: 20px 0;
      letter-spacing: 2px;
    }
    .retro-station {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 11px 16px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
                   Helvetica, Arial, sans-serif;
      font-weight: 700;
      letter-spacing: 0.01em;
      line-height: 1.05;
      font-size: 1.95em;
    }
    .retro-station-name {
      text-shadow: none;
    }
    .retro--size-medium .retro-station {
      padding: 9px 14px;
      font-size: 1.65em;
    }
    .retro--size-small .retro-station {
      padding: 7px 10px;
      font-size: 1.35em;
    }

    /* ----- Station header strip -----------------------------------
       A homage to the real Wiener Linien U-Bahn station signage —
       a black band above the orange station name with per-side
       exit / amenity icons + a destination label. Colours are
       hardcoded (#000 / #fff) on purpose: the original signage is
       intentionally black-and-white, the same authenticity rule the
       .retro-station rule above follows. Spacing flows through HA
       Design System tokens with px fallbacks per
       ha-portfolio-design (§ 4). */
    .retro-station-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: #000;
      color: #fff;
      padding: var(--ha-space-2, 8px) var(--ha-space-3, 12px);
      gap: var(--ha-space-2, 8px);
      /* WL Sans Condensed is the subsetted TeX Gyre Heros Cn face —
         the condensed proportion matches real Wiener Linien station
         signage. Ships only at weight 700 (the only weight the
         signage uses); a regular-weight request would fall through
         to WL Sans regular, then the Apple system stack. */
      font-family: "WL Sans Condensed", "WL Sans", -apple-system,
                   BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
                   Arial, sans-serif;
      font-weight: 700;
      /* 1.1em (up from 1em): more device pixels per glyph is the only
         lever that genuinely de-steps the small condensed signage text
         on every engine — CSS antialiasing can't. The whole strip is
         em-based (text, chips, tiles), so this one knob scales it all
         together. The retro--size-medium / -small variants below carry
         their own absolute em values and are unaffected. */
      font-size: 1.1em;
      letter-spacing: 0.02em;
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
      /* Bumped from inherited 1em — WL Sans Condensed is ~25% narrower
         than the regular Apple-stack sans, so the sign text can scale
         up without crowding the amenity tiles next to it. Stays
         proportional with the retro--size-* tokens because the parent
         .retro-station-header's font-size scales (1em / 0.9em / 0.8em),
         and this multiplier compounds on top. */
      font-size: 1.2em;
      /* White-on-black signage text — render it with grayscale
         antialiasing instead of subpixel. On a dark strip subpixel AA
         fringes the glyph edges and blooms the condensed strokes
         heavier than drawn; grayscale keeps them crisp. Scoped to this
         element (NOT the strip) on purpose: the chips and WC monogram
         are black-on-white, the opposite polarity, and keep the
         default subpixel AA which renders dark-on-light more solidly.
         A WebKit/Blink-on-macOS + iOS lever only — the Android System
         WebView always uses grayscale AA, so it's a no-op there. */
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    .retro-station-header__tile {
      /* White SQUARE tile hosting the (black) glyph — mirrors the
         real Wiener Linien station signage where each icon sits on
         a small white square within the black header strip. The
         square aspect is non-negotiable per the reference photo;
         the inner SVG fits via preserveAspectRatio=meet so portrait
         glyphs (elevator) and landscape glyphs (exit, wc) both
         centre cleanly inside the same square.
         Default 0.12em padding suits the WL-traced glyphs and the
         WC monogram — their authored paths use the full viewBox so a
         small white margin matches the look of the real station-sign
         photos. The --mdi modifier overrides to a tighter padding
         (see rule below) because MDI icons carry their own viewBox
         padding internally. */
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background: #fff;
      color: #000;
      flex-shrink: 0;
      width: 1.4em;
      height: 1.4em;
      padding: 0.12em;
      box-sizing: border-box;
    }
    .retro-station-header__tile--mdi {
      /* MDI glyphs ship with ~10% internal viewBox padding baked
         into the icon set, so the default tile padding stacks on top
         and makes them look noticeably smaller than the WL-traced
         tiles next to them. Halving the tile padding to 0.06em
         compensates — the rendered glyph ends up the same visual
         weight as a WL-traced glyph in a default-padded tile. */
      padding: 0.06em;
    }
    .retro-station-header__icon {
      width: 100%;
      height: 100%;
      display: block;
      /* SVG default fill is black per spec, but be explicit so the
         tile's color: #000 propagates if a future glyph adopts
         fill=currentColor. */
      fill: currentColor;
    }
    .retro-station-header__icon--flip-x {
      transform: scaleX(-1);
    }
    .retro-station-header__mdi {
      /* MDI variant sibling to .retro-station-header__icon. ha-icon
         renders an inline SVG sized by the --mdc-icon-size token; we
         pin it to fill the tile's content box (1.4em tile − 2 ×
         0.06em padding = 1.28em). Color cascades from the tile's
         color: #000 via ha-icon's currentColor fill. */
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
      /* WC tile content. Tile is already flex-centred, so the span
         positions itself. font-size is 0.9em — em-tied so it
         scales with the parent header's em-scale (1em / 0.9em /
         0.8em via retro--size-* tokens), shrunk ~10 % from the
         original 1em so the W / C letterforms don't overpower the
         surrounding amenity glyphs (the WL signage WC monogram
         reads as a small, paired label, not a heavyweight chip).
         font-family + weight are declared explicitly (rather than
         relying on inheritance from .retro-station-header) so a
         future header-rule rewrite can't accidentally regress the
         letterforms back to a non-condensed face. */
      font-family: "WL Sans Condensed", "WL Sans", -apple-system,
                   BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
                   Arial, sans-serif;
      font-weight: 700;
      font-size: 0.9em;
      line-height: 1;
    }
    .retro-station-header__chip {
      /* Auxiliary text label — same height as the icon tiles
         (1.4em) but with dynamic width so short labels (platform
         numbers, line designators) sit in a snug white box and
         longer labels grow horizontally. Composes visually with the
         icon tiles next to it via the same height + colour scheme.
         Padding is horizontal-only — the flex-centred line shares
         vertical alignment with the icon glyphs on the same row.
         Font is WL Sans Condensed 700 — the SAME signage face as the
         destination text and WC monogram. The strip is a signage
         homage; one coherent typographic voice across the whole band
         reads "station sign", whereas a regular-width or lighter face
         reads "web UI element stuck onto a sign".
         No explicit font-size: chip inherits the parent header's
         em-scale (1em / 0.9em / 0.8em via retro--size-* tokens), so
         height: 1.4em resolves to the SAME pixel value as the icon
         tiles. Setting a different font-size here (e.g. 0.75rem)
         would produce visibly shorter chips next to the tiles
         because em is relative to the element's own font-size. */
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background: #fff;
      color: #000;
      flex-shrink: 0;
      height: 1.4em;
      padding: 0 0.4em;
      box-sizing: border-box;
      font-family: "WL Sans Condensed", "WL Sans", -apple-system,
                   BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
                   Arial, sans-serif;
      /* 700 — WL Sans Condensed ships only at 700, and that IS the
         intent: chips should read as solid signage, not as a lighter
         UI tier. Hierarchy on the strip comes from size and position
         (the destination text is condensed 1.2em), never from mixing
         weight or width onto the same band. */
      font-weight: 700;
      line-height: 1;
      /* Reset the 0.02em letter-spacing inherited from .retro-station-header
         — the tracked-out feel of the header text doesn't suit
         chip-style labels where width is dynamic and longer entries
         (Schlafzimmer, etc.) add up visibly. */
      letter-spacing: 0;
      white-space: nowrap;
    }
    /* Size-token alignment — match the .retro--size-* scale. */
    .retro--size-medium .retro-station-header {
      font-size: 0.9em;
      padding: 6px var(--ha-space-2, 8px);
    }
    .retro--size-small .retro-station-header {
      font-size: 0.8em;
      padding: 5px var(--ha-space-2, 8px);
    }
    /* Narrow-width reflow (WCAG 1.4.10 AA) — drop the destination
       label so the icons stay visible at a 320 px section-view
       column. Unnamed container query — matches the nearest
       inline-size container, which is .retro (the outer wrapper).
       The size containers on overlays are not ancestors of the
       header strip, so they don't interfere. */
    @container (inline-size < 320px) {
      .retro-station-header__text {
        display: none;
      }
    }
    .retro-banner {
      background: #ffa000;
      color: #000;
      padding: 6px 10px;
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      font-family: sans-serif;
      border-radius: 4px;
      letter-spacing: normal;
      font-size: 0.75em;
    }
    .retro-banner button {
      background: #000;
      color: #ffa000;
      border: none;
      border-radius: 3px;
      padding: 3px 10px;
      font-weight: 600;
      cursor: pointer;
      font-family: sans-serif;
    }

    /* Accessibility: visible focus ring for keyboard users. */
    a:focus-visible,
    button:focus-visible {
      outline: 2px solid var(--led-amber, #ffa000);
      outline-offset: 2px;
      border-radius: 4px;
    }

    /* First-paint stagger — LED rows cascade in on mount via
       per-row style="--row-i: N"; capped at 6 so long boards don't
       take ages to settle. Collapsed to instant by the
       prefers-reduced-motion catch-all below. */
    @keyframes retroRowReveal {
      from {
        opacity: 0;
        transform: translateY(3px);
        filter: brightness(0.4);
      }
      to {
        opacity: 1;
        transform: none;
        filter: brightness(1);
      }
    }
    .retro-row {
      animation: retroRowReveal 380ms cubic-bezier(0.2, 0.7, 0.2, 1) both;
      animation-delay: calc(min(var(--row-i, 0), 6) * 80ms);
    }

    /* Optional clock chip inside the station-header strip. Renders
       as a base .retro-station-header__chip (white box, black text,
       condensed WL signage face) with a small clock glyph in front
       of the HH:MM digits. Inherits everything else from the chip
       rule — no font / weight / spacing override here, so it sits
       indistinguishably next to the other chips except for the
       leading icon. */
    .retro-station-header__chip--clock {
      gap: 0.25em;
    }
    .retro-station-header__chip-icon {
      /* MDI icon sized to the chip's cap height so it sits centred
         next to the digits. ha-icon ships an inline SVG controlled
         by --mdc-icon-size; pin it to 1em and let the chip's flex
         centring handle vertical alignment. */
      --mdc-icon-size: 1em;
      display: inline-flex;
      align-items: center;
      color: inherit;
      flex-shrink: 0;
    }

    /* Line-stripe Tweak — 4 px coloured bar at the left edge of each
       row in the line's resolved colour with a faint matching glow.
       --retro-line-color is the same var the line pill paints with, so
       the stripe always matches the pill (one source of truth). */
    .retro--line-stripe .retro-row {
      padding-left: 10px;
    }
    .retro--line-stripe .retro-row::before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      width: 4px;
      background: var(--retro-line-color, var(--led-amber));
      filter: drop-shadow(0 0 4px var(--retro-line-color, rgb(var(--led-glow-rgb) / 0.45)));
      pointer-events: none;
      border-radius: 1px;
    }

    /* Housing Tweak — wrap the LED panel in an outer dark frame with
       a soft inner highlight and a glass-reflection gradient over
       the display. Defaults off; existing dashboards keep their
       flush edge-to-edge look. */
    .retro--housing {
      padding: 6px;
      background: #111;
      border-radius: 10px;
      box-shadow:
        inset 0 1px 0 rgba(255, 255, 255, 0.06),
        0 2px 8px rgba(0, 0, 0, 0.5);
    }
    .retro--housing .retro-led {
      border-radius: 6px;
    }
    /* Glass reflection — a 30 % top gradient sitting OVER the LED
       content (z=2). 4 % white is subtle enough to not wash out the
       row text but reads as a real reflection on a glossy bezel. */
    .retro--housing .retro-led::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(180deg, rgba(255, 255, 255, 0.04), transparent 40%);
      pointer-events: none;
      z-index: 2;
      border-radius: inherit;
    }
    /* Housing-on station header and station name plate also pick up
       the inner border-radius so the bezel corners look right. */
    .retro--housing .retro-station-header {
      border-top-left-radius: 6px;
      border-top-right-radius: 6px;
    }
    .retro--housing .retro-station:last-child,
    .retro--housing .retro-station-header:last-child {
      border-bottom-left-radius: 6px;
      border-bottom-right-radius: 6px;
    }

    /* Accessibility: honour user motion preference.
       Catch-all: nukes any animation/transition the feature-gated
       @media (prefers-reduced-motion: no-preference) blocks above
       don't already exclude. */
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
	}
};
__decorate([n$2({ attribute: false })], WienerLinienAustriaRetroCard.prototype, "hass", void 0);
__decorate([r$1()], WienerLinienAustriaRetroCard.prototype, "_config", void 0);
__decorate([r$1()], WienerLinienAustriaRetroCard.prototype, "_versionMismatch", void 0);
__decorate([r$1()], WienerLinienAustriaRetroCard.prototype, "_raceState", void 0);
__decorate([r$1()], WienerLinienAustriaRetroCard.prototype, "_countdownDigit", void 0);
__decorate([r$1()], WienerLinienAustriaRetroCard.prototype, "_raceWinner", void 0);
__decorate([r$1()], WienerLinienAustriaRetroCard.prototype, "_tickerActive", void 0);
__decorate([r$1()], WienerLinienAustriaRetroCard.prototype, "_viaPhase", void 0);
WienerLinienAustriaRetroCard = __decorate([t$2("wiener-linien-austria-retro-card")], WienerLinienAustriaRetroCard);

//#endregion
export { WienerLinienAustriaRetroCard };
//# sourceMappingURL=wiener-linien-austria-retro-card.js.map