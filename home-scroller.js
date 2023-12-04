var l1 = Object.defineProperty;
var sp = Object.getOwnPropertySymbols;
var c1 = Object.prototype.hasOwnProperty
  , u1 = Object.prototype.propertyIsEnumerable;
var op = (Ln,$t,Pt)=>$t in Ln ? l1(Ln, $t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: Pt
}) : Ln[$t] = Pt
  , Vc = (Ln,$t)=>{
    for (var Pt in $t || ($t = {}))
        c1.call($t, Pt) && op(Ln, Pt, $t[Pt]);
    if (sp)
        for (var Pt of sp($t))
            u1.call($t, Pt) && op(Ln, Pt, $t[Pt]);
    return Ln
}
;
var __vite_style__ = document.createElement("style");
__vite_style__.innerHTML = `.image-content{opacity:0}
`;
document.head.appendChild(__vite_style__);
(function(Ln) {
    typeof define == "function" && define.amd ? define(Ln) : Ln()
}
)(function() {
    "use strict";
    var Ln = "";
    /**
* @license
* Copyright 2010-2022 Three.js Authors
* SPDX-License-Identifier: MIT
*/
    const $t = "143"
      , Pt = {
        LEFT: 0,
        MIDDLE: 1,
        RIGHT: 2,
        ROTATE: 0,
        DOLLY: 1,
        PAN: 2
    }
      , Rr = {
        ROTATE: 0,
        PAN: 1,
        DOLLY_PAN: 2,
        DOLLY_ROTATE: 3
    }
      , ap = 0
      , Hc = 1
      , lp = 2
      , Wc = 1
      , cp = 2
      , Es = 3
      , Cs = 0
      , Rn = 1
      , Ir = 2
      , up = 1
      , yi = 0
      , Fr = 1
      , Xc = 2
      , qc = 3
      , Yc = 4
      , fp = 5
      , zr = 100
      , hp = 101
      , dp = 102
      , $c = 103
      , jc = 104
      , pp = 200
      , mp = 201
      , gp = 202
      , _p = 203
      , Zc = 204
      , Kc = 205
      , xp = 206
      , vp = 207
      , yp = 208
      , bp = 209
      , Mp = 210
      , Sp = 0
      , wp = 1
      , Tp = 2
      , ka = 3
      , Ep = 4
      , Cp = 5
      , Ap = 6
      , Pp = 7
      , Jc = 0
      , Dp = 1
      , Lp = 2
      , ti = 0
      , Rp = 1
      , Ip = 2
      , Fp = 3
      , zp = 4
      , Op = 5
      , Qc = 300
      , Or = 301
      , Nr = 302
      , Ba = 303
      , Ga = 304
      , bo = 306
      , Va = 1e3
      , In = 1001
      , Ha = 1002
      , jt = 1003
      , eu = 1004
      , tu = 1005
      , mn = 1006
      , Np = 1007
      , Mo = 1008
      , qi = 1009
      , Up = 1010
      , kp = 1011
      , nu = 1012
      , Bp = 1013
      , Yi = 1014
      , $i = 1015
      , As = 1016
      , Gp = 1017
      , Vp = 1018
      , Ur = 1020
      , Hp = 1021
      , Wp = 1022
      , qn = 1023
      , Xp = 1024
      , qp = 1025
      , ji = 1026
      , kr = 1027
      , Yp = 1028
      , $p = 1029
      , jp = 1030
      , Zp = 1031
      , Kp = 1033
      , Wa = 33776
      , Xa = 33777
      , qa = 33778
      , Ya = 33779
      , iu = 35840
      , ru = 35841
      , su = 35842
      , ou = 35843
      , Jp = 36196
      , au = 37492
      , lu = 37496
      , cu = 37808
      , uu = 37809
      , fu = 37810
      , hu = 37811
      , du = 37812
      , pu = 37813
      , mu = 37814
      , gu = 37815
      , _u = 37816
      , xu = 37817
      , vu = 37818
      , yu = 37819
      , bu = 37820
      , Mu = 37821
      , Su = 36492
      , Zi = 3e3
      , at = 3001
      , Qp = 3200
      , em = 3201
      , tm = 0
      , nm = 1
      , ni = "srgb"
      , Ki = "srgb-linear"
      , $a = 7680
      , im = 519
      , wu = 35044
      , Tu = "300 es"
      , ja = 1035;
    class Ji {
        addEventListener(e, t) {
            this._listeners === void 0 && (this._listeners = {});
            const n = this._listeners;
            n[e] === void 0 && (n[e] = []),
            n[e].indexOf(t) === -1 && n[e].push(t)
        }
        hasEventListener(e, t) {
            if (this._listeners === void 0)
                return !1;
            const n = this._listeners;
            return n[e] !== void 0 && n[e].indexOf(t) !== -1
        }
        removeEventListener(e, t) {
            if (this._listeners === void 0)
                return;
            const i = this._listeners[e];
            if (i !== void 0) {
                const r = i.indexOf(t);
                r !== -1 && i.splice(r, 1)
            }
        }
        dispatchEvent(e) {
            if (this._listeners === void 0)
                return;
            const n = this._listeners[e.type];
            if (n !== void 0) {
                e.target = this;
                const i = n.slice(0);
                for (let r = 0, a = i.length; r < a; r++)
                    i[r].call(this, e);
                e.target = null
            }
        }
    }
    const Ft = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"]
      , Za = Math.PI / 180
      , Eu = 180 / Math.PI;
    function Ps() {
        const s = Math.random() * 4294967295 | 0
          , e = Math.random() * 4294967295 | 0
          , t = Math.random() * 4294967295 | 0
          , n = Math.random() * 4294967295 | 0;
        return (Ft[s & 255] + Ft[s >> 8 & 255] + Ft[s >> 16 & 255] + Ft[s >> 24 & 255] + "-" + Ft[e & 255] + Ft[e >> 8 & 255] + "-" + Ft[e >> 16 & 15 | 64] + Ft[e >> 24 & 255] + "-" + Ft[t & 63 | 128] + Ft[t >> 8 & 255] + "-" + Ft[t >> 16 & 255] + Ft[t >> 24 & 255] + Ft[n & 255] + Ft[n >> 8 & 255] + Ft[n >> 16 & 255] + Ft[n >> 24 & 255]).toLowerCase()
    }
    function Zt(s, e, t) {
        return Math.max(e, Math.min(t, s))
    }
    function rm(s, e) {
        return (s % e + e) % e
    }
    function Ka(s, e, t) {
        return (1 - t) * s + t * e
    }
    function Cu(s) {
        return (s & s - 1) == 0 && s !== 0
    }
    function Ja(s) {
        return Math.pow(2, Math.floor(Math.log(s) / Math.LN2))
    }
    class ke {
        constructor(e=0, t=0) {
            ke.prototype.isVector2 = !0,
            this.x = e,
            this.y = t
        }
        get width() {
            return this.x
        }
        set width(e) {
            this.x = e
        }
        get height() {
            return this.y
        }
        set height(e) {
            this.y = e
        }
        set(e, t) {
            return this.x = e,
            this.y = t,
            this
        }
        setScalar(e) {
            return this.x = e,
            this.y = e,
            this
        }
        setX(e) {
            return this.x = e,
            this
        }
        setY(e) {
            return this.y = e,
            this
        }
        setComponent(e, t) {
            switch (e) {
            case 0:
                this.x = t;
                break;
            case 1:
                this.y = t;
                break;
            default:
                throw new Error("index is out of range: " + e)
            }
            return this
        }
        getComponent(e) {
            switch (e) {
            case 0:
                return this.x;
            case 1:
                return this.y;
            default:
                throw new Error("index is out of range: " + e)
            }
        }
        clone() {
            return new this.constructor(this.x,this.y)
        }
        copy(e) {
            return this.x = e.x,
            this.y = e.y,
            this
        }
        add(e) {
            return this.x += e.x,
            this.y += e.y,
            this
        }
        addScalar(e) {
            return this.x += e,
            this.y += e,
            this
        }
        addVectors(e, t) {
            return this.x = e.x + t.x,
            this.y = e.y + t.y,
            this
        }
        addScaledVector(e, t) {
            return this.x += e.x * t,
            this.y += e.y * t,
            this
        }
        sub(e) {
            return this.x -= e.x,
            this.y -= e.y,
            this
        }
        subScalar(e) {
            return this.x -= e,
            this.y -= e,
            this
        }
        subVectors(e, t) {
            return this.x = e.x - t.x,
            this.y = e.y - t.y,
            this
        }
        multiply(e) {
            return this.x *= e.x,
            this.y *= e.y,
            this
        }
        multiplyScalar(e) {
            return this.x *= e,
            this.y *= e,
            this
        }
        divide(e) {
            return this.x /= e.x,
            this.y /= e.y,
            this
        }
        divideScalar(e) {
            return this.multiplyScalar(1 / e)
        }
        applyMatrix3(e) {
            const t = this.x
              , n = this.y
              , i = e.elements;
            return this.x = i[0] * t + i[3] * n + i[6],
            this.y = i[1] * t + i[4] * n + i[7],
            this
        }
        min(e) {
            return this.x = Math.min(this.x, e.x),
            this.y = Math.min(this.y, e.y),
            this
        }
        max(e) {
            return this.x = Math.max(this.x, e.x),
            this.y = Math.max(this.y, e.y),
            this
        }
        clamp(e, t) {
            return this.x = Math.max(e.x, Math.min(t.x, this.x)),
            this.y = Math.max(e.y, Math.min(t.y, this.y)),
            this
        }
        clampScalar(e, t) {
            return this.x = Math.max(e, Math.min(t, this.x)),
            this.y = Math.max(e, Math.min(t, this.y)),
            this
        }
        clampLength(e, t) {
            const n = this.length();
            return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)))
        }
        floor() {
            return this.x = Math.floor(this.x),
            this.y = Math.floor(this.y),
            this
        }
        ceil() {
            return this.x = Math.ceil(this.x),
            this.y = Math.ceil(this.y),
            this
        }
        round() {
            return this.x = Math.round(this.x),
            this.y = Math.round(this.y),
            this
        }
        roundToZero() {
            return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x),
            this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y),
            this
        }
        negate() {
            return this.x = -this.x,
            this.y = -this.y,
            this
        }
        dot(e) {
            return this.x * e.x + this.y * e.y
        }
        cross(e) {
            return this.x * e.y - this.y * e.x
        }
        lengthSq() {
            return this.x * this.x + this.y * this.y
        }
        length() {
            return Math.sqrt(this.x * this.x + this.y * this.y)
        }
        manhattanLength() {
            return Math.abs(this.x) + Math.abs(this.y)
        }
        normalize() {
            return this.divideScalar(this.length() || 1)
        }
        angle() {
            return Math.atan2(-this.y, -this.x) + Math.PI
        }
        distanceTo(e) {
            return Math.sqrt(this.distanceToSquared(e))
        }
        distanceToSquared(e) {
            const t = this.x - e.x
              , n = this.y - e.y;
            return t * t + n * n
        }
        manhattanDistanceTo(e) {
            return Math.abs(this.x - e.x) + Math.abs(this.y - e.y)
        }
        setLength(e) {
            return this.normalize().multiplyScalar(e)
        }
        lerp(e, t) {
            return this.x += (e.x - this.x) * t,
            this.y += (e.y - this.y) * t,
            this
        }
        lerpVectors(e, t, n) {
            return this.x = e.x + (t.x - e.x) * n,
            this.y = e.y + (t.y - e.y) * n,
            this
        }
        equals(e) {
            return e.x === this.x && e.y === this.y
        }
        fromArray(e, t=0) {
            return this.x = e[t],
            this.y = e[t + 1],
            this
        }
        toArray(e=[], t=0) {
            return e[t] = this.x,
            e[t + 1] = this.y,
            e
        }
        fromBufferAttribute(e, t) {
            return this.x = e.getX(t),
            this.y = e.getY(t),
            this
        }
        rotateAround(e, t) {
            const n = Math.cos(t)
              , i = Math.sin(t)
              , r = this.x - e.x
              , a = this.y - e.y;
            return this.x = r * n - a * i + e.x,
            this.y = r * i + a * n + e.y,
            this
        }
        random() {
            return this.x = Math.random(),
            this.y = Math.random(),
            this
        }
        *[Symbol.iterator]() {
            yield this.x,
            yield this.y
        }
    }
    class gn {
        constructor() {
            gn.prototype.isMatrix3 = !0,
            this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]
        }
        set(e, t, n, i, r, a, o, c, l) {
            const u = this.elements;
            return u[0] = e,
            u[1] = i,
            u[2] = o,
            u[3] = t,
            u[4] = r,
            u[5] = c,
            u[6] = n,
            u[7] = a,
            u[8] = l,
            this
        }
        identity() {
            return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1),
            this
        }
        copy(e) {
            const t = this.elements
              , n = e.elements;
            return t[0] = n[0],
            t[1] = n[1],
            t[2] = n[2],
            t[3] = n[3],
            t[4] = n[4],
            t[5] = n[5],
            t[6] = n[6],
            t[7] = n[7],
            t[8] = n[8],
            this
        }
        extractBasis(e, t, n) {
            return e.setFromMatrix3Column(this, 0),
            t.setFromMatrix3Column(this, 1),
            n.setFromMatrix3Column(this, 2),
            this
        }
        setFromMatrix4(e) {
            const t = e.elements;
            return this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]),
            this
        }
        multiply(e) {
            return this.multiplyMatrices(this, e)
        }
        premultiply(e) {
            return this.multiplyMatrices(e, this)
        }
        multiplyMatrices(e, t) {
            const n = e.elements
              , i = t.elements
              , r = this.elements
              , a = n[0]
              , o = n[3]
              , c = n[6]
              , l = n[1]
              , u = n[4]
              , f = n[7]
              , h = n[2]
              , m = n[5]
              , g = n[8]
              , d = i[0]
              , p = i[3]
              , _ = i[6]
              , y = i[1]
              , M = i[4]
              , x = i[7]
              , b = i[2]
              , S = i[5]
              , A = i[8];
            return r[0] = a * d + o * y + c * b,
            r[3] = a * p + o * M + c * S,
            r[6] = a * _ + o * x + c * A,
            r[1] = l * d + u * y + f * b,
            r[4] = l * p + u * M + f * S,
            r[7] = l * _ + u * x + f * A,
            r[2] = h * d + m * y + g * b,
            r[5] = h * p + m * M + g * S,
            r[8] = h * _ + m * x + g * A,
            this
        }
        multiplyScalar(e) {
            const t = this.elements;
            return t[0] *= e,
            t[3] *= e,
            t[6] *= e,
            t[1] *= e,
            t[4] *= e,
            t[7] *= e,
            t[2] *= e,
            t[5] *= e,
            t[8] *= e,
            this
        }
        determinant() {
            const e = this.elements
              , t = e[0]
              , n = e[1]
              , i = e[2]
              , r = e[3]
              , a = e[4]
              , o = e[5]
              , c = e[6]
              , l = e[7]
              , u = e[8];
            return t * a * u - t * o * l - n * r * u + n * o * c + i * r * l - i * a * c
        }
        invert() {
            const e = this.elements
              , t = e[0]
              , n = e[1]
              , i = e[2]
              , r = e[3]
              , a = e[4]
              , o = e[5]
              , c = e[6]
              , l = e[7]
              , u = e[8]
              , f = u * a - o * l
              , h = o * c - u * r
              , m = l * r - a * c
              , g = t * f + n * h + i * m;
            if (g === 0)
                return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
            const d = 1 / g;
            return e[0] = f * d,
            e[1] = (i * l - u * n) * d,
            e[2] = (o * n - i * a) * d,
            e[3] = h * d,
            e[4] = (u * t - i * c) * d,
            e[5] = (i * r - o * t) * d,
            e[6] = m * d,
            e[7] = (n * c - l * t) * d,
            e[8] = (a * t - n * r) * d,
            this
        }
        transpose() {
            let e;
            const t = this.elements;
            return e = t[1],
            t[1] = t[3],
            t[3] = e,
            e = t[2],
            t[2] = t[6],
            t[6] = e,
            e = t[5],
            t[5] = t[7],
            t[7] = e,
            this
        }
        getNormalMatrix(e) {
            return this.setFromMatrix4(e).invert().transpose()
        }
        transposeIntoArray(e) {
            const t = this.elements;
            return e[0] = t[0],
            e[1] = t[3],
            e[2] = t[6],
            e[3] = t[1],
            e[4] = t[4],
            e[5] = t[7],
            e[6] = t[2],
            e[7] = t[5],
            e[8] = t[8],
            this
        }
        setUvTransform(e, t, n, i, r, a, o) {
            const c = Math.cos(r)
              , l = Math.sin(r);
            return this.set(n * c, n * l, -n * (c * a + l * o) + a + e, -i * l, i * c, -i * (-l * a + c * o) + o + t, 0, 0, 1),
            this
        }
        scale(e, t) {
            const n = this.elements;
            return n[0] *= e,
            n[3] *= e,
            n[6] *= e,
            n[1] *= t,
            n[4] *= t,
            n[7] *= t,
            this
        }
        rotate(e) {
            const t = Math.cos(e)
              , n = Math.sin(e)
              , i = this.elements
              , r = i[0]
              , a = i[3]
              , o = i[6]
              , c = i[1]
              , l = i[4]
              , u = i[7];
            return i[0] = t * r + n * c,
            i[3] = t * a + n * l,
            i[6] = t * o + n * u,
            i[1] = -n * r + t * c,
            i[4] = -n * a + t * l,
            i[7] = -n * o + t * u,
            this
        }
        translate(e, t) {
            const n = this.elements;
            return n[0] += e * n[2],
            n[3] += e * n[5],
            n[6] += e * n[8],
            n[1] += t * n[2],
            n[4] += t * n[5],
            n[7] += t * n[8],
            this
        }
        equals(e) {
            const t = this.elements
              , n = e.elements;
            for (let i = 0; i < 9; i++)
                if (t[i] !== n[i])
                    return !1;
            return !0
        }
        fromArray(e, t=0) {
            for (let n = 0; n < 9; n++)
                this.elements[n] = e[n + t];
            return this
        }
        toArray(e=[], t=0) {
            const n = this.elements;
            return e[t] = n[0],
            e[t + 1] = n[1],
            e[t + 2] = n[2],
            e[t + 3] = n[3],
            e[t + 4] = n[4],
            e[t + 5] = n[5],
            e[t + 6] = n[6],
            e[t + 7] = n[7],
            e[t + 8] = n[8],
            e
        }
        clone() {
            return new this.constructor().fromArray(this.elements)
        }
    }
    function Au(s) {
        for (let e = s.length - 1; e >= 0; --e)
            if (s[e] > 65535)
                return !0;
        return !1
    }
    function Ds(s) {
        return document.createElementNS("http://www.w3.org/1999/xhtml", s)
    }
    function Qi(s) {
        return s < .04045 ? s * .0773993808 : Math.pow(s * .9478672986 + .0521327014, 2.4)
    }
    function So(s) {
        return s < .0031308 ? s * 12.92 : 1.055 * Math.pow(s, .41666) - .055
    }
    const Qa = {
        [ni]: {
            [Ki]: Qi
        },
        [Ki]: {
            [ni]: So
        }
    }
      , Fn = {
        legacyMode: !0,
        get workingColorSpace() {
            return Ki
        },
        set workingColorSpace(s) {
            console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")
        },
        convert: function(s, e, t) {
            if (this.legacyMode || e === t || !e || !t)
                return s;
            if (Qa[e] && Qa[e][t] !== void 0) {
                const n = Qa[e][t];
                return s.r = n(s.r),
                s.g = n(s.g),
                s.b = n(s.b),
                s
            }
            throw new Error("Unsupported color space conversion.")
        },
        fromWorkingColorSpace: function(s, e) {
            return this.convert(s, this.workingColorSpace, e)
        },
        toWorkingColorSpace: function(s, e) {
            return this.convert(s, e, this.workingColorSpace)
        }
    }
      , Pu = {
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        rebeccapurple: 6697881,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
    }
      , vt = {
        r: 0,
        g: 0,
        b: 0
    }
      , zn = {
        h: 0,
        s: 0,
        l: 0
    }
      , wo = {
        h: 0,
        s: 0,
        l: 0
    };
    function el(s, e, t) {
        return t < 0 && (t += 1),
        t > 1 && (t -= 1),
        t < 1 / 6 ? s + (e - s) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? s + (e - s) * 6 * (2 / 3 - t) : s
    }
    function To(s, e) {
        return e.r = s.r,
        e.g = s.g,
        e.b = s.b,
        e
    }
    class rt {
        constructor(e, t, n) {
            return this.isColor = !0,
            this.r = 1,
            this.g = 1,
            this.b = 1,
            t === void 0 && n === void 0 ? this.set(e) : this.setRGB(e, t, n)
        }
        set(e) {
            return e && e.isColor ? this.copy(e) : typeof e == "number" ? this.setHex(e) : typeof e == "string" && this.setStyle(e),
            this
        }
        setScalar(e) {
            return this.r = e,
            this.g = e,
            this.b = e,
            this
        }
        setHex(e, t=ni) {
            return e = Math.floor(e),
            this.r = (e >> 16 & 255) / 255,
            this.g = (e >> 8 & 255) / 255,
            this.b = (e & 255) / 255,
            Fn.toWorkingColorSpace(this, t),
            this
        }
        setRGB(e, t, n, i=Ki) {
            return this.r = e,
            this.g = t,
            this.b = n,
            Fn.toWorkingColorSpace(this, i),
            this
        }
        setHSL(e, t, n, i=Ki) {
            if (e = rm(e, 1),
            t = Zt(t, 0, 1),
            n = Zt(n, 0, 1),
            t === 0)
                this.r = this.g = this.b = n;
            else {
                const r = n <= .5 ? n * (1 + t) : n + t - n * t
                  , a = 2 * n - r;
                this.r = el(a, r, e + 1 / 3),
                this.g = el(a, r, e),
                this.b = el(a, r, e - 1 / 3)
            }
            return Fn.toWorkingColorSpace(this, i),
            this
        }
        setStyle(e, t=ni) {
            function n(r) {
                r !== void 0 && parseFloat(r) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.")
            }
            let i;
            if (i = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)) {
                let r;
                const a = i[1]
                  , o = i[2];
                switch (a) {
                case "rgb":
                case "rgba":
                    if (r = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
                        return this.r = Math.min(255, parseInt(r[1], 10)) / 255,
                        this.g = Math.min(255, parseInt(r[2], 10)) / 255,
                        this.b = Math.min(255, parseInt(r[3], 10)) / 255,
                        Fn.toWorkingColorSpace(this, t),
                        n(r[4]),
                        this;
                    if (r = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
                        return this.r = Math.min(100, parseInt(r[1], 10)) / 100,
                        this.g = Math.min(100, parseInt(r[2], 10)) / 100,
                        this.b = Math.min(100, parseInt(r[3], 10)) / 100,
                        Fn.toWorkingColorSpace(this, t),
                        n(r[4]),
                        this;
                    break;
                case "hsl":
                case "hsla":
                    if (r = /^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) {
                        const c = parseFloat(r[1]) / 360
                          , l = parseInt(r[2], 10) / 100
                          , u = parseInt(r[3], 10) / 100;
                        return n(r[4]),
                        this.setHSL(c, l, u, t)
                    }
                    break
                }
            } else if (i = /^\#([A-Fa-f\d]+)$/.exec(e)) {
                const r = i[1]
                  , a = r.length;
                if (a === 3)
                    return this.r = parseInt(r.charAt(0) + r.charAt(0), 16) / 255,
                    this.g = parseInt(r.charAt(1) + r.charAt(1), 16) / 255,
                    this.b = parseInt(r.charAt(2) + r.charAt(2), 16) / 255,
                    Fn.toWorkingColorSpace(this, t),
                    this;
                if (a === 6)
                    return this.r = parseInt(r.charAt(0) + r.charAt(1), 16) / 255,
                    this.g = parseInt(r.charAt(2) + r.charAt(3), 16) / 255,
                    this.b = parseInt(r.charAt(4) + r.charAt(5), 16) / 255,
                    Fn.toWorkingColorSpace(this, t),
                    this
            }
            return e && e.length > 0 ? this.setColorName(e, t) : this
        }
        setColorName(e, t=ni) {
            const n = Pu[e.toLowerCase()];
            return n !== void 0 ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e),
            this
        }
        clone() {
            return new this.constructor(this.r,this.g,this.b)
        }
        copy(e) {
            return this.r = e.r,
            this.g = e.g,
            this.b = e.b,
            this
        }
        copySRGBToLinear(e) {
            return this.r = Qi(e.r),
            this.g = Qi(e.g),
            this.b = Qi(e.b),
            this
        }
        copyLinearToSRGB(e) {
            return this.r = So(e.r),
            this.g = So(e.g),
            this.b = So(e.b),
            this
        }
        convertSRGBToLinear() {
            return this.copySRGBToLinear(this),
            this
        }
        convertLinearToSRGB() {
            return this.copyLinearToSRGB(this),
            this
        }
        getHex(e=ni) {
            return Fn.fromWorkingColorSpace(To(this, vt), e),
            Zt(vt.r * 255, 0, 255) << 16 ^ Zt(vt.g * 255, 0, 255) << 8 ^ Zt(vt.b * 255, 0, 255) << 0
        }
        getHexString(e=ni) {
            return ("000000" + this.getHex(e).toString(16)).slice(-6)
        }
        getHSL(e, t=Ki) {
            Fn.fromWorkingColorSpace(To(this, vt), t);
            const n = vt.r
              , i = vt.g
              , r = vt.b
              , a = Math.max(n, i, r)
              , o = Math.min(n, i, r);
            let c, l;
            const u = (o + a) / 2;
            if (o === a)
                c = 0,
                l = 0;
            else {
                const f = a - o;
                switch (l = u <= .5 ? f / (a + o) : f / (2 - a - o),
                a) {
                case n:
                    c = (i - r) / f + (i < r ? 6 : 0);
                    break;
                case i:
                    c = (r - n) / f + 2;
                    break;
                case r:
                    c = (n - i) / f + 4;
                    break
                }
                c /= 6
            }
            return e.h = c,
            e.s = l,
            e.l = u,
            e
        }
        getRGB(e, t=Ki) {
            return Fn.fromWorkingColorSpace(To(this, vt), t),
            e.r = vt.r,
            e.g = vt.g,
            e.b = vt.b,
            e
        }
        getStyle(e=ni) {
            return Fn.fromWorkingColorSpace(To(this, vt), e),
            e !== ni ? `color(${e} ${vt.r} ${vt.g} ${vt.b})` : `rgb(${vt.r * 255 | 0},${vt.g * 255 | 0},${vt.b * 255 | 0})`
        }
        offsetHSL(e, t, n) {
            return this.getHSL(zn),
            zn.h += e,
            zn.s += t,
            zn.l += n,
            this.setHSL(zn.h, zn.s, zn.l),
            this
        }
        add(e) {
            return this.r += e.r,
            this.g += e.g,
            this.b += e.b,
            this
        }
        addColors(e, t) {
            return this.r = e.r + t.r,
            this.g = e.g + t.g,
            this.b = e.b + t.b,
            this
        }
        addScalar(e) {
            return this.r += e,
            this.g += e,
            this.b += e,
            this
        }
        sub(e) {
            return this.r = Math.max(0, this.r - e.r),
            this.g = Math.max(0, this.g - e.g),
            this.b = Math.max(0, this.b - e.b),
            this
        }
        multiply(e) {
            return this.r *= e.r,
            this.g *= e.g,
            this.b *= e.b,
            this
        }
        multiplyScalar(e) {
            return this.r *= e,
            this.g *= e,
            this.b *= e,
            this
        }
        lerp(e, t) {
            return this.r += (e.r - this.r) * t,
            this.g += (e.g - this.g) * t,
            this.b += (e.b - this.b) * t,
            this
        }
        lerpColors(e, t, n) {
            return this.r = e.r + (t.r - e.r) * n,
            this.g = e.g + (t.g - e.g) * n,
            this.b = e.b + (t.b - e.b) * n,
            this
        }
        lerpHSL(e, t) {
            this.getHSL(zn),
            e.getHSL(wo);
            const n = Ka(zn.h, wo.h, t)
              , i = Ka(zn.s, wo.s, t)
              , r = Ka(zn.l, wo.l, t);
            return this.setHSL(n, i, r),
            this
        }
        equals(e) {
            return e.r === this.r && e.g === this.g && e.b === this.b
        }
        fromArray(e, t=0) {
            return this.r = e[t],
            this.g = e[t + 1],
            this.b = e[t + 2],
            this
        }
        toArray(e=[], t=0) {
            return e[t] = this.r,
            e[t + 1] = this.g,
            e[t + 2] = this.b,
            e
        }
        fromBufferAttribute(e, t) {
            return this.r = e.getX(t),
            this.g = e.getY(t),
            this.b = e.getZ(t),
            e.normalized === !0 && (this.r /= 255,
            this.g /= 255,
            this.b /= 255),
            this
        }
        toJSON() {
            return this.getHex()
        }
        *[Symbol.iterator]() {
            yield this.r,
            yield this.g,
            yield this.b
        }
    }
    rt.NAMES = Pu;
    let Br;
    class Du {
        static getDataURL(e) {
            if (/^data:/i.test(e.src) || typeof HTMLCanvasElement == "undefined")
                return e.src;
            let t;
            if (e instanceof HTMLCanvasElement)
                t = e;
            else {
                Br === void 0 && (Br = Ds("canvas")),
                Br.width = e.width,
                Br.height = e.height;
                const n = Br.getContext("2d");
                e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height),
                t = Br
            }
            return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e),
            t.toDataURL("image/jpeg", .6)) : t.toDataURL("image/png")
        }
        static sRGBToLinear(e) {
            if (typeof HTMLImageElement != "undefined" && e instanceof HTMLImageElement || typeof HTMLCanvasElement != "undefined" && e instanceof HTMLCanvasElement || typeof ImageBitmap != "undefined" && e instanceof ImageBitmap) {
                const t = Ds("canvas");
                t.width = e.width,
                t.height = e.height;
                const n = t.getContext("2d");
                n.drawImage(e, 0, 0, e.width, e.height);
                const i = n.getImageData(0, 0, e.width, e.height)
                  , r = i.data;
                for (let a = 0; a < r.length; a++)
                    r[a] = Qi(r[a] / 255) * 255;
                return n.putImageData(i, 0, 0),
                t
            } else if (e.data) {
                const t = e.data.slice(0);
                for (let n = 0; n < t.length; n++)
                    t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(Qi(t[n] / 255) * 255) : t[n] = Qi(t[n]);
                return {
                    data: t,
                    width: e.width,
                    height: e.height
                }
            } else
                return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),
                e
        }
    }
    class Lu {
        constructor(e=null) {
            this.isSource = !0,
            this.uuid = Ps(),
            this.data = e,
            this.version = 0
        }
        set needsUpdate(e) {
            e === !0 && this.version++
        }
        toJSON(e) {
            const t = e === void 0 || typeof e == "string";
            if (!t && e.images[this.uuid] !== void 0)
                return e.images[this.uuid];
            const n = {
                uuid: this.uuid,
                url: ""
            }
              , i = this.data;
            if (i !== null) {
                let r;
                if (Array.isArray(i)) {
                    r = [];
                    for (let a = 0, o = i.length; a < o; a++)
                        i[a].isDataTexture ? r.push(tl(i[a].image)) : r.push(tl(i[a]))
                } else
                    r = tl(i);
                n.url = r
            }
            return t || (e.images[this.uuid] = n),
            n
        }
    }
    function tl(s) {
        return typeof HTMLImageElement != "undefined" && s instanceof HTMLImageElement || typeof HTMLCanvasElement != "undefined" && s instanceof HTMLCanvasElement || typeof ImageBitmap != "undefined" && s instanceof ImageBitmap ? Du.getDataURL(s) : s.data ? {
            data: Array.from(s.data),
            width: s.width,
            height: s.height,
            type: s.data.constructor.name
        } : (console.warn("THREE.Texture: Unable to serialize Texture."),
        {})
    }
    let sm = 0;
    class on extends Ji {
        constructor(e=on.DEFAULT_IMAGE, t=on.DEFAULT_MAPPING, n=In, i=In, r=mn, a=Mo, o=qn, c=qi, l=1, u=Zi) {
            super();
            this.isTexture = !0,
            Object.defineProperty(this, "id", {
                value: sm++
            }),
            this.uuid = Ps(),
            this.name = "",
            this.source = new Lu(e),
            this.mipmaps = [],
            this.mapping = t,
            this.wrapS = n,
            this.wrapT = i,
            this.magFilter = r,
            this.minFilter = a,
            this.anisotropy = l,
            this.format = o,
            this.internalFormat = null,
            this.type = c,
            this.offset = new ke(0,0),
            this.repeat = new ke(1,1),
            this.center = new ke(0,0),
            this.rotation = 0,
            this.matrixAutoUpdate = !0,
            this.matrix = new gn,
            this.generateMipmaps = !0,
            this.premultiplyAlpha = !1,
            this.flipY = !0,
            this.unpackAlignment = 4,
            this.encoding = u,
            this.userData = {},
            this.version = 0,
            this.onUpdate = null,
            this.isRenderTargetTexture = !1,
            this.needsPMREMUpdate = !1
        }
        get image() {
            return this.source.data
        }
        set image(e) {
            this.source.data = e
        }
        updateMatrix() {
            this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y)
        }
        clone() {
            return new this.constructor().copy(this)
        }
        copy(e) {
            return this.name = e.name,
            this.source = e.source,
            this.mipmaps = e.mipmaps.slice(0),
            this.mapping = e.mapping,
            this.wrapS = e.wrapS,
            this.wrapT = e.wrapT,
            this.magFilter = e.magFilter,
            this.minFilter = e.minFilter,
            this.anisotropy = e.anisotropy,
            this.format = e.format,
            this.internalFormat = e.internalFormat,
            this.type = e.type,
            this.offset.copy(e.offset),
            this.repeat.copy(e.repeat),
            this.center.copy(e.center),
            this.rotation = e.rotation,
            this.matrixAutoUpdate = e.matrixAutoUpdate,
            this.matrix.copy(e.matrix),
            this.generateMipmaps = e.generateMipmaps,
            this.premultiplyAlpha = e.premultiplyAlpha,
            this.flipY = e.flipY,
            this.unpackAlignment = e.unpackAlignment,
            this.encoding = e.encoding,
            this.userData = JSON.parse(JSON.stringify(e.userData)),
            this.needsUpdate = !0,
            this
        }
        toJSON(e) {
            const t = e === void 0 || typeof e == "string";
            if (!t && e.textures[this.uuid] !== void 0)
                return e.textures[this.uuid];
            const n = {
                metadata: {
                    version: 4.5,
                    type: "Texture",
                    generator: "Texture.toJSON"
                },
                uuid: this.uuid,
                name: this.name,
                image: this.source.toJSON(e).uuid,
                mapping: this.mapping,
                repeat: [this.repeat.x, this.repeat.y],
                offset: [this.offset.x, this.offset.y],
                center: [this.center.x, this.center.y],
                rotation: this.rotation,
                wrap: [this.wrapS, this.wrapT],
                format: this.format,
                type: this.type,
                encoding: this.encoding,
                minFilter: this.minFilter,
                magFilter: this.magFilter,
                anisotropy: this.anisotropy,
                flipY: this.flipY,
                premultiplyAlpha: this.premultiplyAlpha,
                unpackAlignment: this.unpackAlignment
            };
            return JSON.stringify(this.userData) !== "{}" && (n.userData = this.userData),
            t || (e.textures[this.uuid] = n),
            n
        }
        dispose() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
        transformUv(e) {
            if (this.mapping !== Qc)
                return e;
            if (e.applyMatrix3(this.matrix),
            e.x < 0 || e.x > 1)
                switch (this.wrapS) {
                case Va:
                    e.x = e.x - Math.floor(e.x);
                    break;
                case In:
                    e.x = e.x < 0 ? 0 : 1;
                    break;
                case Ha:
                    Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
                    break
                }
            if (e.y < 0 || e.y > 1)
                switch (this.wrapT) {
                case Va:
                    e.y = e.y - Math.floor(e.y);
                    break;
                case In:
                    e.y = e.y < 0 ? 0 : 1;
                    break;
                case Ha:
                    Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
                    break
                }
            return this.flipY && (e.y = 1 - e.y),
            e
        }
        set needsUpdate(e) {
            e === !0 && (this.version++,
            this.source.needsUpdate = !0)
        }
    }
    on.DEFAULT_IMAGE = null,
    on.DEFAULT_MAPPING = Qc;
    class Mt {
        constructor(e=0, t=0, n=0, i=1) {
            Mt.prototype.isVector4 = !0,
            this.x = e,
            this.y = t,
            this.z = n,
            this.w = i
        }
        get width() {
            return this.z
        }
        set width(e) {
            this.z = e
        }
        get height() {
            return this.w
        }
        set height(e) {
            this.w = e
        }
        set(e, t, n, i) {
            return this.x = e,
            this.y = t,
            this.z = n,
            this.w = i,
            this
        }
        setScalar(e) {
            return this.x = e,
            this.y = e,
            this.z = e,
            this.w = e,
            this
        }
        setX(e) {
            return this.x = e,
            this
        }
        setY(e) {
            return this.y = e,
            this
        }
        setZ(e) {
            return this.z = e,
            this
        }
        setW(e) {
            return this.w = e,
            this
        }
        setComponent(e, t) {
            switch (e) {
            case 0:
                this.x = t;
                break;
            case 1:
                this.y = t;
                break;
            case 2:
                this.z = t;
                break;
            case 3:
                this.w = t;
                break;
            default:
                throw new Error("index is out of range: " + e)
            }
            return this
        }
        getComponent(e) {
            switch (e) {
            case 0:
                return this.x;
            case 1:
                return this.y;
            case 2:
                return this.z;
            case 3:
                return this.w;
            default:
                throw new Error("index is out of range: " + e)
            }
        }
        clone() {
            return new this.constructor(this.x,this.y,this.z,this.w)
        }
        copy(e) {
            return this.x = e.x,
            this.y = e.y,
            this.z = e.z,
            this.w = e.w !== void 0 ? e.w : 1,
            this
        }
        add(e) {
            return this.x += e.x,
            this.y += e.y,
            this.z += e.z,
            this.w += e.w,
            this
        }
        addScalar(e) {
            return this.x += e,
            this.y += e,
            this.z += e,
            this.w += e,
            this
        }
        addVectors(e, t) {
            return this.x = e.x + t.x,
            this.y = e.y + t.y,
            this.z = e.z + t.z,
            this.w = e.w + t.w,
            this
        }
        addScaledVector(e, t) {
            return this.x += e.x * t,
            this.y += e.y * t,
            this.z += e.z * t,
            this.w += e.w * t,
            this
        }
        sub(e) {
            return this.x -= e.x,
            this.y -= e.y,
            this.z -= e.z,
            this.w -= e.w,
            this
        }
        subScalar(e) {
            return this.x -= e,
            this.y -= e,
            this.z -= e,
            this.w -= e,
            this
        }
        subVectors(e, t) {
            return this.x = e.x - t.x,
            this.y = e.y - t.y,
            this.z = e.z - t.z,
            this.w = e.w - t.w,
            this
        }
        multiply(e) {
            return this.x *= e.x,
            this.y *= e.y,
            this.z *= e.z,
            this.w *= e.w,
            this
        }
        multiplyScalar(e) {
            return this.x *= e,
            this.y *= e,
            this.z *= e,
            this.w *= e,
            this
        }
        applyMatrix4(e) {
            const t = this.x
              , n = this.y
              , i = this.z
              , r = this.w
              , a = e.elements;
            return this.x = a[0] * t + a[4] * n + a[8] * i + a[12] * r,
            this.y = a[1] * t + a[5] * n + a[9] * i + a[13] * r,
            this.z = a[2] * t + a[6] * n + a[10] * i + a[14] * r,
            this.w = a[3] * t + a[7] * n + a[11] * i + a[15] * r,
            this
        }
        divideScalar(e) {
            return this.multiplyScalar(1 / e)
        }
        setAxisAngleFromQuaternion(e) {
            this.w = 2 * Math.acos(e.w);
            const t = Math.sqrt(1 - e.w * e.w);
            return t < 1e-4 ? (this.x = 1,
            this.y = 0,
            this.z = 0) : (this.x = e.x / t,
            this.y = e.y / t,
            this.z = e.z / t),
            this
        }
        setAxisAngleFromRotationMatrix(e) {
            let t, n, i, r;
            const a = .01
              , o = .1
              , c = e.elements
              , l = c[0]
              , u = c[4]
              , f = c[8]
              , h = c[1]
              , m = c[5]
              , g = c[9]
              , d = c[2]
              , p = c[6]
              , _ = c[10];
            if (Math.abs(u - h) < a && Math.abs(f - d) < a && Math.abs(g - p) < a) {
                if (Math.abs(u + h) < o && Math.abs(f + d) < o && Math.abs(g + p) < o && Math.abs(l + m + _ - 3) < o)
                    return this.set(1, 0, 0, 0),
                    this;
                t = Math.PI;
                const M = (l + 1) / 2
                  , x = (m + 1) / 2
                  , b = (_ + 1) / 2
                  , S = (u + h) / 4
                  , A = (f + d) / 4
                  , v = (g + p) / 4;
                return M > x && M > b ? M < a ? (n = 0,
                i = .707106781,
                r = .707106781) : (n = Math.sqrt(M),
                i = S / n,
                r = A / n) : x > b ? x < a ? (n = .707106781,
                i = 0,
                r = .707106781) : (i = Math.sqrt(x),
                n = S / i,
                r = v / i) : b < a ? (n = .707106781,
                i = .707106781,
                r = 0) : (r = Math.sqrt(b),
                n = A / r,
                i = v / r),
                this.set(n, i, r, t),
                this
            }
            let y = Math.sqrt((p - g) * (p - g) + (f - d) * (f - d) + (h - u) * (h - u));
            return Math.abs(y) < .001 && (y = 1),
            this.x = (p - g) / y,
            this.y = (f - d) / y,
            this.z = (h - u) / y,
            this.w = Math.acos((l + m + _ - 1) / 2),
            this
        }
        min(e) {
            return this.x = Math.min(this.x, e.x),
            this.y = Math.min(this.y, e.y),
            this.z = Math.min(this.z, e.z),
            this.w = Math.min(this.w, e.w),
            this
        }
        max(e) {
            return this.x = Math.max(this.x, e.x),
            this.y = Math.max(this.y, e.y),
            this.z = Math.max(this.z, e.z),
            this.w = Math.max(this.w, e.w),
            this
        }
        clamp(e, t) {
            return this.x = Math.max(e.x, Math.min(t.x, this.x)),
            this.y = Math.max(e.y, Math.min(t.y, this.y)),
            this.z = Math.max(e.z, Math.min(t.z, this.z)),
            this.w = Math.max(e.w, Math.min(t.w, this.w)),
            this
        }
        clampScalar(e, t) {
            return this.x = Math.max(e, Math.min(t, this.x)),
            this.y = Math.max(e, Math.min(t, this.y)),
            this.z = Math.max(e, Math.min(t, this.z)),
            this.w = Math.max(e, Math.min(t, this.w)),
            this
        }
        clampLength(e, t) {
            const n = this.length();
            return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)))
        }
        floor() {
            return this.x = Math.floor(this.x),
            this.y = Math.floor(this.y),
            this.z = Math.floor(this.z),
            this.w = Math.floor(this.w),
            this
        }
        ceil() {
            return this.x = Math.ceil(this.x),
            this.y = Math.ceil(this.y),
            this.z = Math.ceil(this.z),
            this.w = Math.ceil(this.w),
            this
        }
        round() {
            return this.x = Math.round(this.x),
            this.y = Math.round(this.y),
            this.z = Math.round(this.z),
            this.w = Math.round(this.w),
            this
        }
        roundToZero() {
            return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x),
            this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y),
            this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z),
            this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w),
            this
        }
        negate() {
            return this.x = -this.x,
            this.y = -this.y,
            this.z = -this.z,
            this.w = -this.w,
            this
        }
        dot(e) {
            return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w
        }
        lengthSq() {
            return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
        }
        length() {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
        }
        manhattanLength() {
            return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
        }
        normalize() {
            return this.divideScalar(this.length() || 1)
        }
        setLength(e) {
            return this.normalize().multiplyScalar(e)
        }
        lerp(e, t) {
            return this.x += (e.x - this.x) * t,
            this.y += (e.y - this.y) * t,
            this.z += (e.z - this.z) * t,
            this.w += (e.w - this.w) * t,
            this
        }
        lerpVectors(e, t, n) {
            return this.x = e.x + (t.x - e.x) * n,
            this.y = e.y + (t.y - e.y) * n,
            this.z = e.z + (t.z - e.z) * n,
            this.w = e.w + (t.w - e.w) * n,
            this
        }
        equals(e) {
            return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w
        }
        fromArray(e, t=0) {
            return this.x = e[t],
            this.y = e[t + 1],
            this.z = e[t + 2],
            this.w = e[t + 3],
            this
        }
        toArray(e=[], t=0) {
            return e[t] = this.x,
            e[t + 1] = this.y,
            e[t + 2] = this.z,
            e[t + 3] = this.w,
            e
        }
        fromBufferAttribute(e, t) {
            return this.x = e.getX(t),
            this.y = e.getY(t),
            this.z = e.getZ(t),
            this.w = e.getW(t),
            this
        }
        random() {
            return this.x = Math.random(),
            this.y = Math.random(),
            this.z = Math.random(),
            this.w = Math.random(),
            this
        }
        *[Symbol.iterator]() {
            yield this.x,
            yield this.y,
            yield this.z,
            yield this.w
        }
    }
    class bi extends Ji {
        constructor(e, t, n={}) {
            super();
            this.isWebGLRenderTarget = !0,
            this.width = e,
            this.height = t,
            this.depth = 1,
            this.scissor = new Mt(0,0,e,t),
            this.scissorTest = !1,
            this.viewport = new Mt(0,0,e,t);
            const i = {
                width: e,
                height: t,
                depth: 1
            };
            this.texture = new on(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),
            this.texture.isRenderTargetTexture = !0,
            this.texture.flipY = !1,
            this.texture.generateMipmaps = n.generateMipmaps !== void 0 ? n.generateMipmaps : !1,
            this.texture.internalFormat = n.internalFormat !== void 0 ? n.internalFormat : null,
            this.texture.minFilter = n.minFilter !== void 0 ? n.minFilter : mn,
            this.depthBuffer = n.depthBuffer !== void 0 ? n.depthBuffer : !0,
            this.stencilBuffer = n.stencilBuffer !== void 0 ? n.stencilBuffer : !1,
            this.depthTexture = n.depthTexture !== void 0 ? n.depthTexture : null,
            this.samples = n.samples !== void 0 ? n.samples : 0
        }
        setSize(e, t, n=1) {
            (this.width !== e || this.height !== t || this.depth !== n) && (this.width = e,
            this.height = t,
            this.depth = n,
            this.texture.image.width = e,
            this.texture.image.height = t,
            this.texture.image.depth = n,
            this.dispose()),
            this.viewport.set(0, 0, e, t),
            this.scissor.set(0, 0, e, t)
        }
        clone() {
            return new this.constructor().copy(this)
        }
        copy(e) {
            this.width = e.width,
            this.height = e.height,
            this.depth = e.depth,
            this.viewport.copy(e.viewport),
            this.texture = e.texture.clone(),
            this.texture.isRenderTargetTexture = !0;
            const t = Object.assign({}, e.texture.image);
            return this.texture.source = new Lu(t),
            this.depthBuffer = e.depthBuffer,
            this.stencilBuffer = e.stencilBuffer,
            e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()),
            this.samples = e.samples,
            this
        }
        dispose() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    }
    class Ru extends on {
        constructor(e=null, t=1, n=1, i=1) {
            super(null);
            this.isDataArrayTexture = !0,
            this.image = {
                data: e,
                width: t,
                height: n,
                depth: i
            },
            this.magFilter = jt,
            this.minFilter = jt,
            this.wrapR = In,
            this.generateMipmaps = !1,
            this.flipY = !1,
            this.unpackAlignment = 1
        }
    }
    class om extends on {
        constructor(e=null, t=1, n=1, i=1) {
            super(null);
            this.isData3DTexture = !0,
            this.image = {
                data: e,
                width: t,
                height: n,
                depth: i
            },
            this.magFilter = jt,
            this.minFilter = jt,
            this.wrapR = In,
            this.generateMipmaps = !1,
            this.flipY = !1,
            this.unpackAlignment = 1
        }
    }
    class er {
        constructor(e=0, t=0, n=0, i=1) {
            this.isQuaternion = !0,
            this._x = e,
            this._y = t,
            this._z = n,
            this._w = i
        }
        static slerpFlat(e, t, n, i, r, a, o) {
            let c = n[i + 0]
              , l = n[i + 1]
              , u = n[i + 2]
              , f = n[i + 3];
            const h = r[a + 0]
              , m = r[a + 1]
              , g = r[a + 2]
              , d = r[a + 3];
            if (o === 0) {
                e[t + 0] = c,
                e[t + 1] = l,
                e[t + 2] = u,
                e[t + 3] = f;
                return
            }
            if (o === 1) {
                e[t + 0] = h,
                e[t + 1] = m,
                e[t + 2] = g,
                e[t + 3] = d;
                return
            }
            if (f !== d || c !== h || l !== m || u !== g) {
                let p = 1 - o;
                const _ = c * h + l * m + u * g + f * d
                  , y = _ >= 0 ? 1 : -1
                  , M = 1 - _ * _;
                if (M > Number.EPSILON) {
                    const b = Math.sqrt(M)
                      , S = Math.atan2(b, _ * y);
                    p = Math.sin(p * S) / b,
                    o = Math.sin(o * S) / b
                }
                const x = o * y;
                if (c = c * p + h * x,
                l = l * p + m * x,
                u = u * p + g * x,
                f = f * p + d * x,
                p === 1 - o) {
                    const b = 1 / Math.sqrt(c * c + l * l + u * u + f * f);
                    c *= b,
                    l *= b,
                    u *= b,
                    f *= b
                }
            }
            e[t] = c,
            e[t + 1] = l,
            e[t + 2] = u,
            e[t + 3] = f
        }
        static multiplyQuaternionsFlat(e, t, n, i, r, a) {
            const o = n[i]
              , c = n[i + 1]
              , l = n[i + 2]
              , u = n[i + 3]
              , f = r[a]
              , h = r[a + 1]
              , m = r[a + 2]
              , g = r[a + 3];
            return e[t] = o * g + u * f + c * m - l * h,
            e[t + 1] = c * g + u * h + l * f - o * m,
            e[t + 2] = l * g + u * m + o * h - c * f,
            e[t + 3] = u * g - o * f - c * h - l * m,
            e
        }
        get x() {
            return this._x
        }
        set x(e) {
            this._x = e,
            this._onChangeCallback()
        }
        get y() {
            return this._y
        }
        set y(e) {
            this._y = e,
            this._onChangeCallback()
        }
        get z() {
            return this._z
        }
        set z(e) {
            this._z = e,
            this._onChangeCallback()
        }
        get w() {
            return this._w
        }
        set w(e) {
            this._w = e,
            this._onChangeCallback()
        }
        set(e, t, n, i) {
            return this._x = e,
            this._y = t,
            this._z = n,
            this._w = i,
            this._onChangeCallback(),
            this
        }
        clone() {
            return new this.constructor(this._x,this._y,this._z,this._w)
        }
        copy(e) {
            return this._x = e.x,
            this._y = e.y,
            this._z = e.z,
            this._w = e.w,
            this._onChangeCallback(),
            this
        }
        setFromEuler(e, t) {
            if (!(e && e.isEuler))
                throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");
            const n = e._x
              , i = e._y
              , r = e._z
              , a = e._order
              , o = Math.cos
              , c = Math.sin
              , l = o(n / 2)
              , u = o(i / 2)
              , f = o(r / 2)
              , h = c(n / 2)
              , m = c(i / 2)
              , g = c(r / 2);
            switch (a) {
            case "XYZ":
                this._x = h * u * f + l * m * g,
                this._y = l * m * f - h * u * g,
                this._z = l * u * g + h * m * f,
                this._w = l * u * f - h * m * g;
                break;
            case "YXZ":
                this._x = h * u * f + l * m * g,
                this._y = l * m * f - h * u * g,
                this._z = l * u * g - h * m * f,
                this._w = l * u * f + h * m * g;
                break;
            case "ZXY":
                this._x = h * u * f - l * m * g,
                this._y = l * m * f + h * u * g,
                this._z = l * u * g + h * m * f,
                this._w = l * u * f - h * m * g;
                break;
            case "ZYX":
                this._x = h * u * f - l * m * g,
                this._y = l * m * f + h * u * g,
                this._z = l * u * g - h * m * f,
                this._w = l * u * f + h * m * g;
                break;
            case "YZX":
                this._x = h * u * f + l * m * g,
                this._y = l * m * f + h * u * g,
                this._z = l * u * g - h * m * f,
                this._w = l * u * f - h * m * g;
                break;
            case "XZY":
                this._x = h * u * f - l * m * g,
                this._y = l * m * f - h * u * g,
                this._z = l * u * g + h * m * f,
                this._w = l * u * f + h * m * g;
                break;
            default:
                console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a)
            }
            return t !== !1 && this._onChangeCallback(),
            this
        }
        setFromAxisAngle(e, t) {
            const n = t / 2
              , i = Math.sin(n);
            return this._x = e.x * i,
            this._y = e.y * i,
            this._z = e.z * i,
            this._w = Math.cos(n),
            this._onChangeCallback(),
            this
        }
        setFromRotationMatrix(e) {
            const t = e.elements
              , n = t[0]
              , i = t[4]
              , r = t[8]
              , a = t[1]
              , o = t[5]
              , c = t[9]
              , l = t[2]
              , u = t[6]
              , f = t[10]
              , h = n + o + f;
            if (h > 0) {
                const m = .5 / Math.sqrt(h + 1);
                this._w = .25 / m,
                this._x = (u - c) * m,
                this._y = (r - l) * m,
                this._z = (a - i) * m
            } else if (n > o && n > f) {
                const m = 2 * Math.sqrt(1 + n - o - f);
                this._w = (u - c) / m,
                this._x = .25 * m,
                this._y = (i + a) / m,
                this._z = (r + l) / m
            } else if (o > f) {
                const m = 2 * Math.sqrt(1 + o - n - f);
                this._w = (r - l) / m,
                this._x = (i + a) / m,
                this._y = .25 * m,
                this._z = (c + u) / m
            } else {
                const m = 2 * Math.sqrt(1 + f - n - o);
                this._w = (a - i) / m,
                this._x = (r + l) / m,
                this._y = (c + u) / m,
                this._z = .25 * m
            }
            return this._onChangeCallback(),
            this
        }
        setFromUnitVectors(e, t) {
            let n = e.dot(t) + 1;
            return n < Number.EPSILON ? (n = 0,
            Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y,
            this._y = e.x,
            this._z = 0,
            this._w = n) : (this._x = 0,
            this._y = -e.z,
            this._z = e.y,
            this._w = n)) : (this._x = e.y * t.z - e.z * t.y,
            this._y = e.z * t.x - e.x * t.z,
            this._z = e.x * t.y - e.y * t.x,
            this._w = n),
            this.normalize()
        }
        angleTo(e) {
            return 2 * Math.acos(Math.abs(Zt(this.dot(e), -1, 1)))
        }
        rotateTowards(e, t) {
            const n = this.angleTo(e);
            if (n === 0)
                return this;
            const i = Math.min(1, t / n);
            return this.slerp(e, i),
            this
        }
        identity() {
            return this.set(0, 0, 0, 1)
        }
        invert() {
            return this.conjugate()
        }
        conjugate() {
            return this._x *= -1,
            this._y *= -1,
            this._z *= -1,
            this._onChangeCallback(),
            this
        }
        dot(e) {
            return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w
        }
        lengthSq() {
            return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
        }
        length() {
            return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
        }
        normalize() {
            let e = this.length();
            return e === 0 ? (this._x = 0,
            this._y = 0,
            this._z = 0,
            this._w = 1) : (e = 1 / e,
            this._x = this._x * e,
            this._y = this._y * e,
            this._z = this._z * e,
            this._w = this._w * e),
            this._onChangeCallback(),
            this
        }
        multiply(e) {
            return this.multiplyQuaternions(this, e)
        }
        premultiply(e) {
            return this.multiplyQuaternions(e, this)
        }
        multiplyQuaternions(e, t) {
            const n = e._x
              , i = e._y
              , r = e._z
              , a = e._w
              , o = t._x
              , c = t._y
              , l = t._z
              , u = t._w;
            return this._x = n * u + a * o + i * l - r * c,
            this._y = i * u + a * c + r * o - n * l,
            this._z = r * u + a * l + n * c - i * o,
            this._w = a * u - n * o - i * c - r * l,
            this._onChangeCallback(),
            this
        }
        slerp(e, t) {
            if (t === 0)
                return this;
            if (t === 1)
                return this.copy(e);
            const n = this._x
              , i = this._y
              , r = this._z
              , a = this._w;
            let o = a * e._w + n * e._x + i * e._y + r * e._z;
            if (o < 0 ? (this._w = -e._w,
            this._x = -e._x,
            this._y = -e._y,
            this._z = -e._z,
            o = -o) : this.copy(e),
            o >= 1)
                return this._w = a,
                this._x = n,
                this._y = i,
                this._z = r,
                this;
            const c = 1 - o * o;
            if (c <= Number.EPSILON) {
                const m = 1 - t;
                return this._w = m * a + t * this._w,
                this._x = m * n + t * this._x,
                this._y = m * i + t * this._y,
                this._z = m * r + t * this._z,
                this.normalize(),
                this._onChangeCallback(),
                this
            }
            const l = Math.sqrt(c)
              , u = Math.atan2(l, o)
              , f = Math.sin((1 - t) * u) / l
              , h = Math.sin(t * u) / l;
            return this._w = a * f + this._w * h,
            this._x = n * f + this._x * h,
            this._y = i * f + this._y * h,
            this._z = r * f + this._z * h,
            this._onChangeCallback(),
            this
        }
        slerpQuaternions(e, t, n) {
            return this.copy(e).slerp(t, n)
        }
        random() {
            const e = Math.random()
              , t = Math.sqrt(1 - e)
              , n = Math.sqrt(e)
              , i = 2 * Math.PI * Math.random()
              , r = 2 * Math.PI * Math.random();
            return this.set(t * Math.cos(i), n * Math.sin(r), n * Math.cos(r), t * Math.sin(i))
        }
        equals(e) {
            return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w
        }
        fromArray(e, t=0) {
            return this._x = e[t],
            this._y = e[t + 1],
            this._z = e[t + 2],
            this._w = e[t + 3],
            this._onChangeCallback(),
            this
        }
        toArray(e=[], t=0) {
            return e[t] = this._x,
            e[t + 1] = this._y,
            e[t + 2] = this._z,
            e[t + 3] = this._w,
            e
        }
        fromBufferAttribute(e, t) {
            return this._x = e.getX(t),
            this._y = e.getY(t),
            this._z = e.getZ(t),
            this._w = e.getW(t),
            this
        }
        _onChange(e) {
            return this._onChangeCallback = e,
            this
        }
        _onChangeCallback() {}
        *[Symbol.iterator]() {
            yield this._x,
            yield this._y,
            yield this._z,
            yield this._w
        }
    }
    class B {
        constructor(e=0, t=0, n=0) {
            B.prototype.isVector3 = !0,
            this.x = e,
            this.y = t,
            this.z = n
        }
        set(e, t, n) {
            return n === void 0 && (n = this.z),
            this.x = e,
            this.y = t,
            this.z = n,
            this
        }
        setScalar(e) {
            return this.x = e,
            this.y = e,
            this.z = e,
            this
        }
        setX(e) {
            return this.x = e,
            this
        }
        setY(e) {
            return this.y = e,
            this
        }
        setZ(e) {
            return this.z = e,
            this
        }
        setComponent(e, t) {
            switch (e) {
            case 0:
                this.x = t;
                break;
            case 1:
                this.y = t;
                break;
            case 2:
                this.z = t;
                break;
            default:
                throw new Error("index is out of range: " + e)
            }
            return this
        }
        getComponent(e) {
            switch (e) {
            case 0:
                return this.x;
            case 1:
                return this.y;
            case 2:
                return this.z;
            default:
                throw new Error("index is out of range: " + e)
            }
        }
        clone() {
            return new this.constructor(this.x,this.y,this.z)
        }
        copy(e) {
            return this.x = e.x,
            this.y = e.y,
            this.z = e.z,
            this
        }
        add(e) {
            return this.x += e.x,
            this.y += e.y,
            this.z += e.z,
            this
        }
        addScalar(e) {
            return this.x += e,
            this.y += e,
            this.z += e,
            this
        }
        addVectors(e, t) {
            return this.x = e.x + t.x,
            this.y = e.y + t.y,
            this.z = e.z + t.z,
            this
        }
        addScaledVector(e, t) {
            return this.x += e.x * t,
            this.y += e.y * t,
            this.z += e.z * t,
            this
        }
        sub(e) {
            return this.x -= e.x,
            this.y -= e.y,
            this.z -= e.z,
            this
        }
        subScalar(e) {
            return this.x -= e,
            this.y -= e,
            this.z -= e,
            this
        }
        subVectors(e, t) {
            return this.x = e.x - t.x,
            this.y = e.y - t.y,
            this.z = e.z - t.z,
            this
        }
        multiply(e) {
            return this.x *= e.x,
            this.y *= e.y,
            this.z *= e.z,
            this
        }
        multiplyScalar(e) {
            return this.x *= e,
            this.y *= e,
            this.z *= e,
            this
        }
        multiplyVectors(e, t) {
            return this.x = e.x * t.x,
            this.y = e.y * t.y,
            this.z = e.z * t.z,
            this
        }
        applyEuler(e) {
            return this.applyQuaternion(Iu.setFromEuler(e))
        }
        applyAxisAngle(e, t) {
            return this.applyQuaternion(Iu.setFromAxisAngle(e, t))
        }
        applyMatrix3(e) {
            const t = this.x
              , n = this.y
              , i = this.z
              , r = e.elements;
            return this.x = r[0] * t + r[3] * n + r[6] * i,
            this.y = r[1] * t + r[4] * n + r[7] * i,
            this.z = r[2] * t + r[5] * n + r[8] * i,
            this
        }
        applyNormalMatrix(e) {
            return this.applyMatrix3(e).normalize()
        }
        applyMatrix4(e) {
            const t = this.x
              , n = this.y
              , i = this.z
              , r = e.elements
              , a = 1 / (r[3] * t + r[7] * n + r[11] * i + r[15]);
            return this.x = (r[0] * t + r[4] * n + r[8] * i + r[12]) * a,
            this.y = (r[1] * t + r[5] * n + r[9] * i + r[13]) * a,
            this.z = (r[2] * t + r[6] * n + r[10] * i + r[14]) * a,
            this
        }
        applyQuaternion(e) {
            const t = this.x
              , n = this.y
              , i = this.z
              , r = e.x
              , a = e.y
              , o = e.z
              , c = e.w
              , l = c * t + a * i - o * n
              , u = c * n + o * t - r * i
              , f = c * i + r * n - a * t
              , h = -r * t - a * n - o * i;
            return this.x = l * c + h * -r + u * -o - f * -a,
            this.y = u * c + h * -a + f * -r - l * -o,
            this.z = f * c + h * -o + l * -a - u * -r,
            this
        }
        project(e) {
            return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)
        }
        unproject(e) {
            return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)
        }
        transformDirection(e) {
            const t = this.x
              , n = this.y
              , i = this.z
              , r = e.elements;
            return this.x = r[0] * t + r[4] * n + r[8] * i,
            this.y = r[1] * t + r[5] * n + r[9] * i,
            this.z = r[2] * t + r[6] * n + r[10] * i,
            this.normalize()
        }
        divide(e) {
            return this.x /= e.x,
            this.y /= e.y,
            this.z /= e.z,
            this
        }
        divideScalar(e) {
            return this.multiplyScalar(1 / e)
        }
        min(e) {
            return this.x = Math.min(this.x, e.x),
            this.y = Math.min(this.y, e.y),
            this.z = Math.min(this.z, e.z),
            this
        }
        max(e) {
            return this.x = Math.max(this.x, e.x),
            this.y = Math.max(this.y, e.y),
            this.z = Math.max(this.z, e.z),
            this
        }
        clamp(e, t) {
            return this.x = Math.max(e.x, Math.min(t.x, this.x)),
            this.y = Math.max(e.y, Math.min(t.y, this.y)),
            this.z = Math.max(e.z, Math.min(t.z, this.z)),
            this
        }
        clampScalar(e, t) {
            return this.x = Math.max(e, Math.min(t, this.x)),
            this.y = Math.max(e, Math.min(t, this.y)),
            this.z = Math.max(e, Math.min(t, this.z)),
            this
        }
        clampLength(e, t) {
            const n = this.length();
            return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)))
        }
        floor() {
            return this.x = Math.floor(this.x),
            this.y = Math.floor(this.y),
            this.z = Math.floor(this.z),
            this
        }
        ceil() {
            return this.x = Math.ceil(this.x),
            this.y = Math.ceil(this.y),
            this.z = Math.ceil(this.z),
            this
        }
        round() {
            return this.x = Math.round(this.x),
            this.y = Math.round(this.y),
            this.z = Math.round(this.z),
            this
        }
        roundToZero() {
            return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x),
            this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y),
            this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z),
            this
        }
        negate() {
            return this.x = -this.x,
            this.y = -this.y,
            this.z = -this.z,
            this
        }
        dot(e) {
            return this.x * e.x + this.y * e.y + this.z * e.z
        }
        lengthSq() {
            return this.x * this.x + this.y * this.y + this.z * this.z
        }
        length() {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
        }
        manhattanLength() {
            return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
        }
        normalize() {
            return this.divideScalar(this.length() || 1)
        }
        setLength(e) {
            return this.normalize().multiplyScalar(e)
        }
        lerp(e, t) {
            return this.x += (e.x - this.x) * t,
            this.y += (e.y - this.y) * t,
            this.z += (e.z - this.z) * t,
            this
        }
        lerpVectors(e, t, n) {
            return this.x = e.x + (t.x - e.x) * n,
            this.y = e.y + (t.y - e.y) * n,
            this.z = e.z + (t.z - e.z) * n,
            this
        }
        cross(e) {
            return this.crossVectors(this, e)
        }
        crossVectors(e, t) {
            const n = e.x
              , i = e.y
              , r = e.z
              , a = t.x
              , o = t.y
              , c = t.z;
            return this.x = i * c - r * o,
            this.y = r * a - n * c,
            this.z = n * o - i * a,
            this
        }
        projectOnVector(e) {
            const t = e.lengthSq();
            if (t === 0)
                return this.set(0, 0, 0);
            const n = e.dot(this) / t;
            return this.copy(e).multiplyScalar(n)
        }
        projectOnPlane(e) {
            return nl.copy(this).projectOnVector(e),
            this.sub(nl)
        }
        reflect(e) {
            return this.sub(nl.copy(e).multiplyScalar(2 * this.dot(e)))
        }
        angleTo(e) {
            const t = Math.sqrt(this.lengthSq() * e.lengthSq());
            if (t === 0)
                return Math.PI / 2;
            const n = this.dot(e) / t;
            return Math.acos(Zt(n, -1, 1))
        }
        distanceTo(e) {
            return Math.sqrt(this.distanceToSquared(e))
        }
        distanceToSquared(e) {
            const t = this.x - e.x
              , n = this.y - e.y
              , i = this.z - e.z;
            return t * t + n * n + i * i
        }
        manhattanDistanceTo(e) {
            return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z)
        }
        setFromSpherical(e) {
            return this.setFromSphericalCoords(e.radius, e.phi, e.theta)
        }
        setFromSphericalCoords(e, t, n) {
            const i = Math.sin(t) * e;
            return this.x = i * Math.sin(n),
            this.y = Math.cos(t) * e,
            this.z = i * Math.cos(n),
            this
        }
        setFromCylindrical(e) {
            return this.setFromCylindricalCoords(e.radius, e.theta, e.y)
        }
        setFromCylindricalCoords(e, t, n) {
            return this.x = e * Math.sin(t),
            this.y = n,
            this.z = e * Math.cos(t),
            this
        }
        setFromMatrixPosition(e) {
            const t = e.elements;
            return this.x = t[12],
            this.y = t[13],
            this.z = t[14],
            this
        }
        setFromMatrixScale(e) {
            const t = this.setFromMatrixColumn(e, 0).length()
              , n = this.setFromMatrixColumn(e, 1).length()
              , i = this.setFromMatrixColumn(e, 2).length();
            return this.x = t,
            this.y = n,
            this.z = i,
            this
        }
        setFromMatrixColumn(e, t) {
            return this.fromArray(e.elements, t * 4)
        }
        setFromMatrix3Column(e, t) {
            return this.fromArray(e.elements, t * 3)
        }
        setFromEuler(e) {
            return this.x = e._x,
            this.y = e._y,
            this.z = e._z,
            this
        }
        equals(e) {
            return e.x === this.x && e.y === this.y && e.z === this.z
        }
        fromArray(e, t=0) {
            return this.x = e[t],
            this.y = e[t + 1],
            this.z = e[t + 2],
            this
        }
        toArray(e=[], t=0) {
            return e[t] = this.x,
            e[t + 1] = this.y,
            e[t + 2] = this.z,
            e
        }
        fromBufferAttribute(e, t) {
            return this.x = e.getX(t),
            this.y = e.getY(t),
            this.z = e.getZ(t),
            this
        }
        random() {
            return this.x = Math.random(),
            this.y = Math.random(),
            this.z = Math.random(),
            this
        }
        randomDirection() {
            const e = (Math.random() - .5) * 2
              , t = Math.random() * Math.PI * 2
              , n = Math.sqrt(1 - e ** 2);
            return this.x = n * Math.cos(t),
            this.y = n * Math.sin(t),
            this.z = e,
            this
        }
        *[Symbol.iterator]() {
            yield this.x,
            yield this.y,
            yield this.z
        }
    }
    const nl = new B
      , Iu = new er;
    class Ls {
        constructor(e=new B(1 / 0,1 / 0,1 / 0), t=new B(-1 / 0,-1 / 0,-1 / 0)) {
            this.isBox3 = !0,
            this.min = e,
            this.max = t
        }
        set(e, t) {
            return this.min.copy(e),
            this.max.copy(t),
            this
        }
        setFromArray(e) {
            let t = 1 / 0
              , n = 1 / 0
              , i = 1 / 0
              , r = -1 / 0
              , a = -1 / 0
              , o = -1 / 0;
            for (let c = 0, l = e.length; c < l; c += 3) {
                const u = e[c]
                  , f = e[c + 1]
                  , h = e[c + 2];
                u < t && (t = u),
                f < n && (n = f),
                h < i && (i = h),
                u > r && (r = u),
                f > a && (a = f),
                h > o && (o = h)
            }
            return this.min.set(t, n, i),
            this.max.set(r, a, o),
            this
        }
        setFromBufferAttribute(e) {
            let t = 1 / 0
              , n = 1 / 0
              , i = 1 / 0
              , r = -1 / 0
              , a = -1 / 0
              , o = -1 / 0;
            for (let c = 0, l = e.count; c < l; c++) {
                const u = e.getX(c)
                  , f = e.getY(c)
                  , h = e.getZ(c);
                u < t && (t = u),
                f < n && (n = f),
                h < i && (i = h),
                u > r && (r = u),
                f > a && (a = f),
                h > o && (o = h)
            }
            return this.min.set(t, n, i),
            this.max.set(r, a, o),
            this
        }
        setFromPoints(e) {
            this.makeEmpty();
            for (let t = 0, n = e.length; t < n; t++)
                this.expandByPoint(e[t]);
            return this
        }
        setFromCenterAndSize(e, t) {
            const n = tr.copy(t).multiplyScalar(.5);
            return this.min.copy(e).sub(n),
            this.max.copy(e).add(n),
            this
        }
        setFromObject(e, t=!1) {
            return this.makeEmpty(),
            this.expandByObject(e, t)
        }
        clone() {
            return new this.constructor().copy(this)
        }
        copy(e) {
            return this.min.copy(e.min),
            this.max.copy(e.max),
            this
        }
        makeEmpty() {
            return this.min.x = this.min.y = this.min.z = 1 / 0,
            this.max.x = this.max.y = this.max.z = -1 / 0,
            this
        }
        isEmpty() {
            return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
        }
        getCenter(e) {
            return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(.5)
        }
        getSize(e) {
            return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min)
        }
        expandByPoint(e) {
            return this.min.min(e),
            this.max.max(e),
            this
        }
        expandByVector(e) {
            return this.min.sub(e),
            this.max.add(e),
            this
        }
        expandByScalar(e) {
            return this.min.addScalar(-e),
            this.max.addScalar(e),
            this
        }
        expandByObject(e, t=!1) {
            e.updateWorldMatrix(!1, !1);
            const n = e.geometry;
            if (n !== void 0)
                if (t && n.attributes != null && n.attributes.position !== void 0) {
                    const r = n.attributes.position;
                    for (let a = 0, o = r.count; a < o; a++)
                        tr.fromBufferAttribute(r, a).applyMatrix4(e.matrixWorld),
                        this.expandByPoint(tr)
                } else
                    n.boundingBox === null && n.computeBoundingBox(),
                    il.copy(n.boundingBox),
                    il.applyMatrix4(e.matrixWorld),
                    this.union(il);
            const i = e.children;
            for (let r = 0, a = i.length; r < a; r++)
                this.expandByObject(i[r], t);
            return this
        }
        containsPoint(e) {
            return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y || e.z < this.min.z || e.z > this.max.z)
        }
        containsBox(e) {
            return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z
        }
        getParameter(e, t) {
            return t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z))
        }
        intersectsBox(e) {
            return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y || e.max.z < this.min.z || e.min.z > this.max.z)
        }
        intersectsSphere(e) {
            return this.clampPoint(e.center, tr),
            tr.distanceToSquared(e.center) <= e.radius * e.radius
        }
        intersectsPlane(e) {
            let t, n;
            return e.normal.x > 0 ? (t = e.normal.x * this.min.x,
            n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x,
            n = e.normal.x * this.min.x),
            e.normal.y > 0 ? (t += e.normal.y * this.min.y,
            n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y,
            n += e.normal.y * this.min.y),
            e.normal.z > 0 ? (t += e.normal.z * this.min.z,
            n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z,
            n += e.normal.z * this.min.z),
            t <= -e.constant && n >= -e.constant
        }
        intersectsTriangle(e) {
            if (this.isEmpty())
                return !1;
            this.getCenter(Rs),
            Eo.subVectors(this.max, Rs),
            Gr.subVectors(e.a, Rs),
            Vr.subVectors(e.b, Rs),
            Hr.subVectors(e.c, Rs),
            Mi.subVectors(Vr, Gr),
            Si.subVectors(Hr, Vr),
            nr.subVectors(Gr, Hr);
            let t = [0, -Mi.z, Mi.y, 0, -Si.z, Si.y, 0, -nr.z, nr.y, Mi.z, 0, -Mi.x, Si.z, 0, -Si.x, nr.z, 0, -nr.x, -Mi.y, Mi.x, 0, -Si.y, Si.x, 0, -nr.y, nr.x, 0];
            return !rl(t, Gr, Vr, Hr, Eo) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1],
            !rl(t, Gr, Vr, Hr, Eo)) ? !1 : (Co.crossVectors(Mi, Si),
            t = [Co.x, Co.y, Co.z],
            rl(t, Gr, Vr, Hr, Eo))
        }
        clampPoint(e, t) {
            return t.copy(e).clamp(this.min, this.max)
        }
        distanceToPoint(e) {
            return tr.copy(e).clamp(this.min, this.max).sub(e).length()
        }
        getBoundingSphere(e) {
            return this.getCenter(e.center),
            e.radius = this.getSize(tr).length() * .5,
            e
        }
        intersect(e) {
            return this.min.max(e.min),
            this.max.min(e.max),
            this.isEmpty() && this.makeEmpty(),
            this
        }
        union(e) {
            return this.min.min(e.min),
            this.max.max(e.max),
            this
        }
        applyMatrix4(e) {
            return this.isEmpty() ? this : (ii[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e),
            ii[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e),
            ii[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e),
            ii[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e),
            ii[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e),
            ii[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e),
            ii[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e),
            ii[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e),
            this.setFromPoints(ii),
            this)
        }
        translate(e) {
            return this.min.add(e),
            this.max.add(e),
            this
        }
        equals(e) {
            return e.min.equals(this.min) && e.max.equals(this.max)
        }
    }
    const ii = [new B, new B, new B, new B, new B, new B, new B, new B]
      , tr = new B
      , il = new Ls
      , Gr = new B
      , Vr = new B
      , Hr = new B
      , Mi = new B
      , Si = new B
      , nr = new B
      , Rs = new B
      , Eo = new B
      , Co = new B
      , ir = new B;
    function rl(s, e, t, n, i) {
        for (let r = 0, a = s.length - 3; r <= a; r += 3) {
            ir.fromArray(s, r);
            const o = i.x * Math.abs(ir.x) + i.y * Math.abs(ir.y) + i.z * Math.abs(ir.z)
              , c = e.dot(ir)
              , l = t.dot(ir)
              , u = n.dot(ir);
            if (Math.max(-Math.max(c, l, u), Math.min(c, l, u)) > o)
                return !1
        }
        return !0
    }
    const am = new Ls
      , Fu = new B
      , Ao = new B
      , sl = new B;
    class ol {
        constructor(e=new B, t=-1) {
            this.center = e,
            this.radius = t
        }
        set(e, t) {
            return this.center.copy(e),
            this.radius = t,
            this
        }
        setFromPoints(e, t) {
            const n = this.center;
            t !== void 0 ? n.copy(t) : am.setFromPoints(e).getCenter(n);
            let i = 0;
            for (let r = 0, a = e.length; r < a; r++)
                i = Math.max(i, n.distanceToSquared(e[r]));
            return this.radius = Math.sqrt(i),
            this
        }
        copy(e) {
            return this.center.copy(e.center),
            this.radius = e.radius,
            this
        }
        isEmpty() {
            return this.radius < 0
        }
        makeEmpty() {
            return this.center.set(0, 0, 0),
            this.radius = -1,
            this
        }
        containsPoint(e) {
            return e.distanceToSquared(this.center) <= this.radius * this.radius
        }
        distanceToPoint(e) {
            return e.distanceTo(this.center) - this.radius
        }
        intersectsSphere(e) {
            const t = this.radius + e.radius;
            return e.center.distanceToSquared(this.center) <= t * t
        }
        intersectsBox(e) {
            return e.intersectsSphere(this)
        }
        intersectsPlane(e) {
            return Math.abs(e.distanceToPoint(this.center)) <= this.radius
        }
        clampPoint(e, t) {
            const n = this.center.distanceToSquared(e);
            return t.copy(e),
            n > this.radius * this.radius && (t.sub(this.center).normalize(),
            t.multiplyScalar(this.radius).add(this.center)),
            t
        }
        getBoundingBox(e) {
            return this.isEmpty() ? (e.makeEmpty(),
            e) : (e.set(this.center, this.center),
            e.expandByScalar(this.radius),
            e)
        }
        applyMatrix4(e) {
            return this.center.applyMatrix4(e),
            this.radius = this.radius * e.getMaxScaleOnAxis(),
            this
        }
        translate(e) {
            return this.center.add(e),
            this
        }
        expandByPoint(e) {
            sl.subVectors(e, this.center);
            const t = sl.lengthSq();
            if (t > this.radius * this.radius) {
                const n = Math.sqrt(t)
                  , i = (n - this.radius) * .5;
                this.center.add(sl.multiplyScalar(i / n)),
                this.radius += i
            }
            return this
        }
        union(e) {
            return this.center.equals(e.center) === !0 ? Ao.set(0, 0, 1).multiplyScalar(e.radius) : Ao.subVectors(e.center, this.center).normalize().multiplyScalar(e.radius),
            this.expandByPoint(Fu.copy(e.center).add(Ao)),
            this.expandByPoint(Fu.copy(e.center).sub(Ao)),
            this
        }
        equals(e) {
            return e.center.equals(this.center) && e.radius === this.radius
        }
        clone() {
            return new this.constructor().copy(this)
        }
    }
    const ri = new B
      , al = new B
      , Po = new B
      , wi = new B
      , ll = new B
      , Do = new B
      , cl = new B;
    class zu {
        constructor(e=new B, t=new B(0,0,-1)) {
            this.origin = e,
            this.direction = t
        }
        set(e, t) {
            return this.origin.copy(e),
            this.direction.copy(t),
            this
        }
        copy(e) {
            return this.origin.copy(e.origin),
            this.direction.copy(e.direction),
            this
        }
        at(e, t) {
            return t.copy(this.direction).multiplyScalar(e).add(this.origin)
        }
        lookAt(e) {
            return this.direction.copy(e).sub(this.origin).normalize(),
            this
        }
        recast(e) {
            return this.origin.copy(this.at(e, ri)),
            this
        }
        closestPointToPoint(e, t) {
            t.subVectors(e, this.origin);
            const n = t.dot(this.direction);
            return n < 0 ? t.copy(this.origin) : t.copy(this.direction).multiplyScalar(n).add(this.origin)
        }
        distanceToPoint(e) {
            return Math.sqrt(this.distanceSqToPoint(e))
        }
        distanceSqToPoint(e) {
            const t = ri.subVectors(e, this.origin).dot(this.direction);
            return t < 0 ? this.origin.distanceToSquared(e) : (ri.copy(this.direction).multiplyScalar(t).add(this.origin),
            ri.distanceToSquared(e))
        }
        distanceSqToSegment(e, t, n, i) {
            al.copy(e).add(t).multiplyScalar(.5),
            Po.copy(t).sub(e).normalize(),
            wi.copy(this.origin).sub(al);
            const r = e.distanceTo(t) * .5
              , a = -this.direction.dot(Po)
              , o = wi.dot(this.direction)
              , c = -wi.dot(Po)
              , l = wi.lengthSq()
              , u = Math.abs(1 - a * a);
            let f, h, m, g;
            if (u > 0)
                if (f = a * c - o,
                h = a * o - c,
                g = r * u,
                f >= 0)
                    if (h >= -g)
                        if (h <= g) {
                            const d = 1 / u;
                            f *= d,
                            h *= d,
                            m = f * (f + a * h + 2 * o) + h * (a * f + h + 2 * c) + l
                        } else
                            h = r,
                            f = Math.max(0, -(a * h + o)),
                            m = -f * f + h * (h + 2 * c) + l;
                    else
                        h = -r,
                        f = Math.max(0, -(a * h + o)),
                        m = -f * f + h * (h + 2 * c) + l;
                else
                    h <= -g ? (f = Math.max(0, -(-a * r + o)),
                    h = f > 0 ? -r : Math.min(Math.max(-r, -c), r),
                    m = -f * f + h * (h + 2 * c) + l) : h <= g ? (f = 0,
                    h = Math.min(Math.max(-r, -c), r),
                    m = h * (h + 2 * c) + l) : (f = Math.max(0, -(a * r + o)),
                    h = f > 0 ? r : Math.min(Math.max(-r, -c), r),
                    m = -f * f + h * (h + 2 * c) + l);
            else
                h = a > 0 ? -r : r,
                f = Math.max(0, -(a * h + o)),
                m = -f * f + h * (h + 2 * c) + l;
            return n && n.copy(this.direction).multiplyScalar(f).add(this.origin),
            i && i.copy(Po).multiplyScalar(h).add(al),
            m
        }
        intersectSphere(e, t) {
            ri.subVectors(e.center, this.origin);
            const n = ri.dot(this.direction)
              , i = ri.dot(ri) - n * n
              , r = e.radius * e.radius;
            if (i > r)
                return null;
            const a = Math.sqrt(r - i)
              , o = n - a
              , c = n + a;
            return o < 0 && c < 0 ? null : o < 0 ? this.at(c, t) : this.at(o, t)
        }
        intersectsSphere(e) {
            return this.distanceSqToPoint(e.center) <= e.radius * e.radius
        }
        distanceToPlane(e) {
            const t = e.normal.dot(this.direction);
            if (t === 0)
                return e.distanceToPoint(this.origin) === 0 ? 0 : null;
            const n = -(this.origin.dot(e.normal) + e.constant) / t;
            return n >= 0 ? n : null
        }
        intersectPlane(e, t) {
            const n = this.distanceToPlane(e);
            return n === null ? null : this.at(n, t)
        }
        intersectsPlane(e) {
            const t = e.distanceToPoint(this.origin);
            return t === 0 || e.normal.dot(this.direction) * t < 0
        }
        intersectBox(e, t) {
            let n, i, r, a, o, c;
            const l = 1 / this.direction.x
              , u = 1 / this.direction.y
              , f = 1 / this.direction.z
              , h = this.origin;
            return l >= 0 ? (n = (e.min.x - h.x) * l,
            i = (e.max.x - h.x) * l) : (n = (e.max.x - h.x) * l,
            i = (e.min.x - h.x) * l),
            u >= 0 ? (r = (e.min.y - h.y) * u,
            a = (e.max.y - h.y) * u) : (r = (e.max.y - h.y) * u,
            a = (e.min.y - h.y) * u),
            n > a || r > i || ((r > n || n !== n) && (n = r),
            (a < i || i !== i) && (i = a),
            f >= 0 ? (o = (e.min.z - h.z) * f,
            c = (e.max.z - h.z) * f) : (o = (e.max.z - h.z) * f,
            c = (e.min.z - h.z) * f),
            n > c || o > i) || ((o > n || n !== n) && (n = o),
            (c < i || i !== i) && (i = c),
            i < 0) ? null : this.at(n >= 0 ? n : i, t)
        }
        intersectsBox(e) {
            return this.intersectBox(e, ri) !== null
        }
        intersectTriangle(e, t, n, i, r) {
            ll.subVectors(t, e),
            Do.subVectors(n, e),
            cl.crossVectors(ll, Do);
            let a = this.direction.dot(cl), o;
            if (a > 0) {
                if (i)
                    return null;
                o = 1
            } else if (a < 0)
                o = -1,
                a = -a;
            else
                return null;
            wi.subVectors(this.origin, e);
            const c = o * this.direction.dot(Do.crossVectors(wi, Do));
            if (c < 0)
                return null;
            const l = o * this.direction.dot(ll.cross(wi));
            if (l < 0 || c + l > a)
                return null;
            const u = -o * wi.dot(cl);
            return u < 0 ? null : this.at(u / a, r)
        }
        applyMatrix4(e) {
            return this.origin.applyMatrix4(e),
            this.direction.transformDirection(e),
            this
        }
        equals(e) {
            return e.origin.equals(this.origin) && e.direction.equals(this.direction)
        }
        clone() {
            return new this.constructor().copy(this)
        }
    }
    class Dt {
        constructor() {
            Dt.prototype.isMatrix4 = !0,
            this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
        }
        set(e, t, n, i, r, a, o, c, l, u, f, h, m, g, d, p) {
            const _ = this.elements;
            return _[0] = e,
            _[4] = t,
            _[8] = n,
            _[12] = i,
            _[1] = r,
            _[5] = a,
            _[9] = o,
            _[13] = c,
            _[2] = l,
            _[6] = u,
            _[10] = f,
            _[14] = h,
            _[3] = m,
            _[7] = g,
            _[11] = d,
            _[15] = p,
            this
        }
        identity() {
            return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1),
            this
        }
        clone() {
            return new Dt().fromArray(this.elements)
        }
        copy(e) {
            const t = this.elements
              , n = e.elements;
            return t[0] = n[0],
            t[1] = n[1],
            t[2] = n[2],
            t[3] = n[3],
            t[4] = n[4],
            t[5] = n[5],
            t[6] = n[6],
            t[7] = n[7],
            t[8] = n[8],
            t[9] = n[9],
            t[10] = n[10],
            t[11] = n[11],
            t[12] = n[12],
            t[13] = n[13],
            t[14] = n[14],
            t[15] = n[15],
            this
        }
        copyPosition(e) {
            const t = this.elements
              , n = e.elements;
            return t[12] = n[12],
            t[13] = n[13],
            t[14] = n[14],
            this
        }
        setFromMatrix3(e) {
            const t = e.elements;
            return this.set(t[0], t[3], t[6], 0, t[1], t[4], t[7], 0, t[2], t[5], t[8], 0, 0, 0, 0, 1),
            this
        }
        extractBasis(e, t, n) {
            return e.setFromMatrixColumn(this, 0),
            t.setFromMatrixColumn(this, 1),
            n.setFromMatrixColumn(this, 2),
            this
        }
        makeBasis(e, t, n) {
            return this.set(e.x, t.x, n.x, 0, e.y, t.y, n.y, 0, e.z, t.z, n.z, 0, 0, 0, 0, 1),
            this
        }
        extractRotation(e) {
            const t = this.elements
              , n = e.elements
              , i = 1 / Wr.setFromMatrixColumn(e, 0).length()
              , r = 1 / Wr.setFromMatrixColumn(e, 1).length()
              , a = 1 / Wr.setFromMatrixColumn(e, 2).length();
            return t[0] = n[0] * i,
            t[1] = n[1] * i,
            t[2] = n[2] * i,
            t[3] = 0,
            t[4] = n[4] * r,
            t[5] = n[5] * r,
            t[6] = n[6] * r,
            t[7] = 0,
            t[8] = n[8] * a,
            t[9] = n[9] * a,
            t[10] = n[10] * a,
            t[11] = 0,
            t[12] = 0,
            t[13] = 0,
            t[14] = 0,
            t[15] = 1,
            this
        }
        makeRotationFromEuler(e) {
            const t = this.elements
              , n = e.x
              , i = e.y
              , r = e.z
              , a = Math.cos(n)
              , o = Math.sin(n)
              , c = Math.cos(i)
              , l = Math.sin(i)
              , u = Math.cos(r)
              , f = Math.sin(r);
            if (e.order === "XYZ") {
                const h = a * u
                  , m = a * f
                  , g = o * u
                  , d = o * f;
                t[0] = c * u,
                t[4] = -c * f,
                t[8] = l,
                t[1] = m + g * l,
                t[5] = h - d * l,
                t[9] = -o * c,
                t[2] = d - h * l,
                t[6] = g + m * l,
                t[10] = a * c
            } else if (e.order === "YXZ") {
                const h = c * u
                  , m = c * f
                  , g = l * u
                  , d = l * f;
                t[0] = h + d * o,
                t[4] = g * o - m,
                t[8] = a * l,
                t[1] = a * f,
                t[5] = a * u,
                t[9] = -o,
                t[2] = m * o - g,
                t[6] = d + h * o,
                t[10] = a * c
            } else if (e.order === "ZXY") {
                const h = c * u
                  , m = c * f
                  , g = l * u
                  , d = l * f;
                t[0] = h - d * o,
                t[4] = -a * f,
                t[8] = g + m * o,
                t[1] = m + g * o,
                t[5] = a * u,
                t[9] = d - h * o,
                t[2] = -a * l,
                t[6] = o,
                t[10] = a * c
            } else if (e.order === "ZYX") {
                const h = a * u
                  , m = a * f
                  , g = o * u
                  , d = o * f;
                t[0] = c * u,
                t[4] = g * l - m,
                t[8] = h * l + d,
                t[1] = c * f,
                t[5] = d * l + h,
                t[9] = m * l - g,
                t[2] = -l,
                t[6] = o * c,
                t[10] = a * c
            } else if (e.order === "YZX") {
                const h = a * c
                  , m = a * l
                  , g = o * c
                  , d = o * l;
                t[0] = c * u,
                t[4] = d - h * f,
                t[8] = g * f + m,
                t[1] = f,
                t[5] = a * u,
                t[9] = -o * u,
                t[2] = -l * u,
                t[6] = m * f + g,
                t[10] = h - d * f
            } else if (e.order === "XZY") {
                const h = a * c
                  , m = a * l
                  , g = o * c
                  , d = o * l;
                t[0] = c * u,
                t[4] = -f,
                t[8] = l * u,
                t[1] = h * f + d,
                t[5] = a * u,
                t[9] = m * f - g,
                t[2] = g * f - m,
                t[6] = o * u,
                t[10] = d * f + h
            }
            return t[3] = 0,
            t[7] = 0,
            t[11] = 0,
            t[12] = 0,
            t[13] = 0,
            t[14] = 0,
            t[15] = 1,
            this
        }
        makeRotationFromQuaternion(e) {
            return this.compose(lm, e, cm)
        }
        lookAt(e, t, n) {
            const i = this.elements;
            return an.subVectors(e, t),
            an.lengthSq() === 0 && (an.z = 1),
            an.normalize(),
            Ti.crossVectors(n, an),
            Ti.lengthSq() === 0 && (Math.abs(n.z) === 1 ? an.x += 1e-4 : an.z += 1e-4,
            an.normalize(),
            Ti.crossVectors(n, an)),
            Ti.normalize(),
            Lo.crossVectors(an, Ti),
            i[0] = Ti.x,
            i[4] = Lo.x,
            i[8] = an.x,
            i[1] = Ti.y,
            i[5] = Lo.y,
            i[9] = an.y,
            i[2] = Ti.z,
            i[6] = Lo.z,
            i[10] = an.z,
            this
        }
        multiply(e) {
            return this.multiplyMatrices(this, e)
        }
        premultiply(e) {
            return this.multiplyMatrices(e, this)
        }
        multiplyMatrices(e, t) {
            const n = e.elements
              , i = t.elements
              , r = this.elements
              , a = n[0]
              , o = n[4]
              , c = n[8]
              , l = n[12]
              , u = n[1]
              , f = n[5]
              , h = n[9]
              , m = n[13]
              , g = n[2]
              , d = n[6]
              , p = n[10]
              , _ = n[14]
              , y = n[3]
              , M = n[7]
              , x = n[11]
              , b = n[15]
              , S = i[0]
              , A = i[4]
              , v = i[8]
              , w = i[12]
              , L = i[1]
              , F = i[5]
              , V = i[9]
              , K = i[13]
              , R = i[2]
              , U = i[6]
              , z = i[10]
              , W = i[14]
              , X = i[3]
              , G = i[7]
              , P = i[11]
              , ee = i[15];
            return r[0] = a * S + o * L + c * R + l * X,
            r[4] = a * A + o * F + c * U + l * G,
            r[8] = a * v + o * V + c * z + l * P,
            r[12] = a * w + o * K + c * W + l * ee,
            r[1] = u * S + f * L + h * R + m * X,
            r[5] = u * A + f * F + h * U + m * G,
            r[9] = u * v + f * V + h * z + m * P,
            r[13] = u * w + f * K + h * W + m * ee,
            r[2] = g * S + d * L + p * R + _ * X,
            r[6] = g * A + d * F + p * U + _ * G,
            r[10] = g * v + d * V + p * z + _ * P,
            r[14] = g * w + d * K + p * W + _ * ee,
            r[3] = y * S + M * L + x * R + b * X,
            r[7] = y * A + M * F + x * U + b * G,
            r[11] = y * v + M * V + x * z + b * P,
            r[15] = y * w + M * K + x * W + b * ee,
            this
        }
        multiplyScalar(e) {
            const t = this.elements;
            return t[0] *= e,
            t[4] *= e,
            t[8] *= e,
            t[12] *= e,
            t[1] *= e,
            t[5] *= e,
            t[9] *= e,
            t[13] *= e,
            t[2] *= e,
            t[6] *= e,
            t[10] *= e,
            t[14] *= e,
            t[3] *= e,
            t[7] *= e,
            t[11] *= e,
            t[15] *= e,
            this
        }
        determinant() {
            const e = this.elements
              , t = e[0]
              , n = e[4]
              , i = e[8]
              , r = e[12]
              , a = e[1]
              , o = e[5]
              , c = e[9]
              , l = e[13]
              , u = e[2]
              , f = e[6]
              , h = e[10]
              , m = e[14]
              , g = e[3]
              , d = e[7]
              , p = e[11]
              , _ = e[15];
            return g * (+r * c * f - i * l * f - r * o * h + n * l * h + i * o * m - n * c * m) + d * (+t * c * m - t * l * h + r * a * h - i * a * m + i * l * u - r * c * u) + p * (+t * l * f - t * o * m - r * a * f + n * a * m + r * o * u - n * l * u) + _ * (-i * o * u - t * c * f + t * o * h + i * a * f - n * a * h + n * c * u)
        }
        transpose() {
            const e = this.elements;
            let t;
            return t = e[1],
            e[1] = e[4],
            e[4] = t,
            t = e[2],
            e[2] = e[8],
            e[8] = t,
            t = e[6],
            e[6] = e[9],
            e[9] = t,
            t = e[3],
            e[3] = e[12],
            e[12] = t,
            t = e[7],
            e[7] = e[13],
            e[13] = t,
            t = e[11],
            e[11] = e[14],
            e[14] = t,
            this
        }
        setPosition(e, t, n) {
            const i = this.elements;
            return e.isVector3 ? (i[12] = e.x,
            i[13] = e.y,
            i[14] = e.z) : (i[12] = e,
            i[13] = t,
            i[14] = n),
            this
        }
        invert() {
            const e = this.elements
              , t = e[0]
              , n = e[1]
              , i = e[2]
              , r = e[3]
              , a = e[4]
              , o = e[5]
              , c = e[6]
              , l = e[7]
              , u = e[8]
              , f = e[9]
              , h = e[10]
              , m = e[11]
              , g = e[12]
              , d = e[13]
              , p = e[14]
              , _ = e[15]
              , y = f * p * l - d * h * l + d * c * m - o * p * m - f * c * _ + o * h * _
              , M = g * h * l - u * p * l - g * c * m + a * p * m + u * c * _ - a * h * _
              , x = u * d * l - g * f * l + g * o * m - a * d * m - u * o * _ + a * f * _
              , b = g * f * c - u * d * c - g * o * h + a * d * h + u * o * p - a * f * p
              , S = t * y + n * M + i * x + r * b;
            if (S === 0)
                return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
            const A = 1 / S;
            return e[0] = y * A,
            e[1] = (d * h * r - f * p * r - d * i * m + n * p * m + f * i * _ - n * h * _) * A,
            e[2] = (o * p * r - d * c * r + d * i * l - n * p * l - o * i * _ + n * c * _) * A,
            e[3] = (f * c * r - o * h * r - f * i * l + n * h * l + o * i * m - n * c * m) * A,
            e[4] = M * A,
            e[5] = (u * p * r - g * h * r + g * i * m - t * p * m - u * i * _ + t * h * _) * A,
            e[6] = (g * c * r - a * p * r - g * i * l + t * p * l + a * i * _ - t * c * _) * A,
            e[7] = (a * h * r - u * c * r + u * i * l - t * h * l - a * i * m + t * c * m) * A,
            e[8] = x * A,
            e[9] = (g * f * r - u * d * r - g * n * m + t * d * m + u * n * _ - t * f * _) * A,
            e[10] = (a * d * r - g * o * r + g * n * l - t * d * l - a * n * _ + t * o * _) * A,
            e[11] = (u * o * r - a * f * r - u * n * l + t * f * l + a * n * m - t * o * m) * A,
            e[12] = b * A,
            e[13] = (u * d * i - g * f * i + g * n * h - t * d * h - u * n * p + t * f * p) * A,
            e[14] = (g * o * i - a * d * i - g * n * c + t * d * c + a * n * p - t * o * p) * A,
            e[15] = (a * f * i - u * o * i + u * n * c - t * f * c - a * n * h + t * o * h) * A,
            this
        }
        scale(e) {
            const t = this.elements
              , n = e.x
              , i = e.y
              , r = e.z;
            return t[0] *= n,
            t[4] *= i,
            t[8] *= r,
            t[1] *= n,
            t[5] *= i,
            t[9] *= r,
            t[2] *= n,
            t[6] *= i,
            t[10] *= r,
            t[3] *= n,
            t[7] *= i,
            t[11] *= r,
            this
        }
        getMaxScaleOnAxis() {
            const e = this.elements
              , t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2]
              , n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6]
              , i = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
            return Math.sqrt(Math.max(t, n, i))
        }
        makeTranslation(e, t, n) {
            return this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1),
            this
        }
        makeRotationX(e) {
            const t = Math.cos(e)
              , n = Math.sin(e);
            return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1),
            this
        }
        makeRotationY(e) {
            const t = Math.cos(e)
              , n = Math.sin(e);
            return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1),
            this
        }
        makeRotationZ(e) {
            const t = Math.cos(e)
              , n = Math.sin(e);
            return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1),
            this
        }
        makeRotationAxis(e, t) {
            const n = Math.cos(t)
              , i = Math.sin(t)
              , r = 1 - n
              , a = e.x
              , o = e.y
              , c = e.z
              , l = r * a
              , u = r * o;
            return this.set(l * a + n, l * o - i * c, l * c + i * o, 0, l * o + i * c, u * o + n, u * c - i * a, 0, l * c - i * o, u * c + i * a, r * c * c + n, 0, 0, 0, 0, 1),
            this
        }
        makeScale(e, t, n) {
            return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1),
            this
        }
        makeShear(e, t, n, i, r, a) {
            return this.set(1, n, r, 0, e, 1, a, 0, t, i, 1, 0, 0, 0, 0, 1),
            this
        }
        compose(e, t, n) {
            const i = this.elements
              , r = t._x
              , a = t._y
              , o = t._z
              , c = t._w
              , l = r + r
              , u = a + a
              , f = o + o
              , h = r * l
              , m = r * u
              , g = r * f
              , d = a * u
              , p = a * f
              , _ = o * f
              , y = c * l
              , M = c * u
              , x = c * f
              , b = n.x
              , S = n.y
              , A = n.z;
            return i[0] = (1 - (d + _)) * b,
            i[1] = (m + x) * b,
            i[2] = (g - M) * b,
            i[3] = 0,
            i[4] = (m - x) * S,
            i[5] = (1 - (h + _)) * S,
            i[6] = (p + y) * S,
            i[7] = 0,
            i[8] = (g + M) * A,
            i[9] = (p - y) * A,
            i[10] = (1 - (h + d)) * A,
            i[11] = 0,
            i[12] = e.x,
            i[13] = e.y,
            i[14] = e.z,
            i[15] = 1,
            this
        }
        decompose(e, t, n) {
            const i = this.elements;
            let r = Wr.set(i[0], i[1], i[2]).length();
            const a = Wr.set(i[4], i[5], i[6]).length()
              , o = Wr.set(i[8], i[9], i[10]).length();
            this.determinant() < 0 && (r = -r),
            e.x = i[12],
            e.y = i[13],
            e.z = i[14],
            On.copy(this);
            const l = 1 / r
              , u = 1 / a
              , f = 1 / o;
            return On.elements[0] *= l,
            On.elements[1] *= l,
            On.elements[2] *= l,
            On.elements[4] *= u,
            On.elements[5] *= u,
            On.elements[6] *= u,
            On.elements[8] *= f,
            On.elements[9] *= f,
            On.elements[10] *= f,
            t.setFromRotationMatrix(On),
            n.x = r,
            n.y = a,
            n.z = o,
            this
        }
        makePerspective(e, t, n, i, r, a) {
            const o = this.elements
              , c = 2 * r / (t - e)
              , l = 2 * r / (n - i)
              , u = (t + e) / (t - e)
              , f = (n + i) / (n - i)
              , h = -(a + r) / (a - r)
              , m = -2 * a * r / (a - r);
            return o[0] = c,
            o[4] = 0,
            o[8] = u,
            o[12] = 0,
            o[1] = 0,
            o[5] = l,
            o[9] = f,
            o[13] = 0,
            o[2] = 0,
            o[6] = 0,
            o[10] = h,
            o[14] = m,
            o[3] = 0,
            o[7] = 0,
            o[11] = -1,
            o[15] = 0,
            this
        }
        makeOrthographic(e, t, n, i, r, a) {
            const o = this.elements
              , c = 1 / (t - e)
              , l = 1 / (n - i)
              , u = 1 / (a - r)
              , f = (t + e) * c
              , h = (n + i) * l
              , m = (a + r) * u;
            return o[0] = 2 * c,
            o[4] = 0,
            o[8] = 0,
            o[12] = -f,
            o[1] = 0,
            o[5] = 2 * l,
            o[9] = 0,
            o[13] = -h,
            o[2] = 0,
            o[6] = 0,
            o[10] = -2 * u,
            o[14] = -m,
            o[3] = 0,
            o[7] = 0,
            o[11] = 0,
            o[15] = 1,
            this
        }
        equals(e) {
            const t = this.elements
              , n = e.elements;
            for (let i = 0; i < 16; i++)
                if (t[i] !== n[i])
                    return !1;
            return !0
        }
        fromArray(e, t=0) {
            for (let n = 0; n < 16; n++)
                this.elements[n] = e[n + t];
            return this
        }
        toArray(e=[], t=0) {
            const n = this.elements;
            return e[t] = n[0],
            e[t + 1] = n[1],
            e[t + 2] = n[2],
            e[t + 3] = n[3],
            e[t + 4] = n[4],
            e[t + 5] = n[5],
            e[t + 6] = n[6],
            e[t + 7] = n[7],
            e[t + 8] = n[8],
            e[t + 9] = n[9],
            e[t + 10] = n[10],
            e[t + 11] = n[11],
            e[t + 12] = n[12],
            e[t + 13] = n[13],
            e[t + 14] = n[14],
            e[t + 15] = n[15],
            e
        }
    }
    const Wr = new B
      , On = new Dt
      , lm = new B(0,0,0)
      , cm = new B(1,1,1)
      , Ti = new B
      , Lo = new B
      , an = new B
      , Ou = new Dt
      , Nu = new er;
    class Is {
        constructor(e=0, t=0, n=0, i=Is.DefaultOrder) {
            this.isEuler = !0,
            this._x = e,
            this._y = t,
            this._z = n,
            this._order = i
        }
        get x() {
            return this._x
        }
        set x(e) {
            this._x = e,
            this._onChangeCallback()
        }
        get y() {
            return this._y
        }
        set y(e) {
            this._y = e,
            this._onChangeCallback()
        }
        get z() {
            return this._z
        }
        set z(e) {
            this._z = e,
            this._onChangeCallback()
        }
        get order() {
            return this._order
        }
        set order(e) {
            this._order = e,
            this._onChangeCallback()
        }
        set(e, t, n, i=this._order) {
            return this._x = e,
            this._y = t,
            this._z = n,
            this._order = i,
            this._onChangeCallback(),
            this
        }
        clone() {
            return new this.constructor(this._x,this._y,this._z,this._order)
        }
        copy(e) {
            return this._x = e._x,
            this._y = e._y,
            this._z = e._z,
            this._order = e._order,
            this._onChangeCallback(),
            this
        }
        setFromRotationMatrix(e, t=this._order, n=!0) {
            const i = e.elements
              , r = i[0]
              , a = i[4]
              , o = i[8]
              , c = i[1]
              , l = i[5]
              , u = i[9]
              , f = i[2]
              , h = i[6]
              , m = i[10];
            switch (t) {
            case "XYZ":
                this._y = Math.asin(Zt(o, -1, 1)),
                Math.abs(o) < .9999999 ? (this._x = Math.atan2(-u, m),
                this._z = Math.atan2(-a, r)) : (this._x = Math.atan2(h, l),
                this._z = 0);
                break;
            case "YXZ":
                this._x = Math.asin(-Zt(u, -1, 1)),
                Math.abs(u) < .9999999 ? (this._y = Math.atan2(o, m),
                this._z = Math.atan2(c, l)) : (this._y = Math.atan2(-f, r),
                this._z = 0);
                break;
            case "ZXY":
                this._x = Math.asin(Zt(h, -1, 1)),
                Math.abs(h) < .9999999 ? (this._y = Math.atan2(-f, m),
                this._z = Math.atan2(-a, l)) : (this._y = 0,
                this._z = Math.atan2(c, r));
                break;
            case "ZYX":
                this._y = Math.asin(-Zt(f, -1, 1)),
                Math.abs(f) < .9999999 ? (this._x = Math.atan2(h, m),
                this._z = Math.atan2(c, r)) : (this._x = 0,
                this._z = Math.atan2(-a, l));
                break;
            case "YZX":
                this._z = Math.asin(Zt(c, -1, 1)),
                Math.abs(c) < .9999999 ? (this._x = Math.atan2(-u, l),
                this._y = Math.atan2(-f, r)) : (this._x = 0,
                this._y = Math.atan2(o, m));
                break;
            case "XZY":
                this._z = Math.asin(-Zt(a, -1, 1)),
                Math.abs(a) < .9999999 ? (this._x = Math.atan2(h, l),
                this._y = Math.atan2(o, r)) : (this._x = Math.atan2(-u, m),
                this._y = 0);
                break;
            default:
                console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t)
            }
            return this._order = t,
            n === !0 && this._onChangeCallback(),
            this
        }
        setFromQuaternion(e, t, n) {
            return Ou.makeRotationFromQuaternion(e),
            this.setFromRotationMatrix(Ou, t, n)
        }
        setFromVector3(e, t=this._order) {
            return this.set(e.x, e.y, e.z, t)
        }
        reorder(e) {
            return Nu.setFromEuler(this),
            this.setFromQuaternion(Nu, e)
        }
        equals(e) {
            return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order
        }
        fromArray(e) {
            return this._x = e[0],
            this._y = e[1],
            this._z = e[2],
            e[3] !== void 0 && (this._order = e[3]),
            this._onChangeCallback(),
            this
        }
        toArray(e=[], t=0) {
            return e[t] = this._x,
            e[t + 1] = this._y,
            e[t + 2] = this._z,
            e[t + 3] = this._order,
            e
        }
        _onChange(e) {
            return this._onChangeCallback = e,
            this
        }
        _onChangeCallback() {}
        *[Symbol.iterator]() {
            yield this._x,
            yield this._y,
            yield this._z,
            yield this._order
        }
        toVector3() {
            console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")
        }
    }
    Is.DefaultOrder = "XYZ",
    Is.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"];
    class ul {
        constructor() {
            this.mask = 1 | 0
        }
        set(e) {
            this.mask = (1 << e | 0) >>> 0
        }
        enable(e) {
            this.mask |= 1 << e | 0
        }
        enableAll() {
            this.mask = 4294967295 | 0
        }
        toggle(e) {
            this.mask ^= 1 << e | 0
        }
        disable(e) {
            this.mask &= ~(1 << e | 0)
        }
        disableAll() {
            this.mask = 0
        }
        test(e) {
            return (this.mask & e.mask) != 0
        }
        isEnabled(e) {
            return (this.mask & (1 << e | 0)) != 0
        }
    }
    let um = 0;
    const Uu = new B
      , Xr = new er
      , si = new Dt
      , Ro = new B
      , Fs = new B
      , fm = new B
      , hm = new er
      , ku = new B(1,0,0)
      , Bu = new B(0,1,0)
      , Gu = new B(0,0,1)
      , dm = {
        type: "added"
    }
      , Vu = {
        type: "removed"
    };
    class Nn extends Ji {
        constructor() {
            super();
            this.isObject3D = !0,
            Object.defineProperty(this, "id", {
                value: um++
            }),
            this.uuid = Ps(),
            this.name = "",
            this.type = "Object3D",
            this.parent = null,
            this.children = [],
            this.up = Nn.DefaultUp.clone();
            const e = new B
              , t = new Is
              , n = new er
              , i = new B(1,1,1);
            function r() {
                n.setFromEuler(t, !1)
            }
            function a() {
                t.setFromQuaternion(n, void 0, !1)
            }
            t._onChange(r),
            n._onChange(a),
            Object.defineProperties(this, {
                position: {
                    configurable: !0,
                    enumerable: !0,
                    value: e
                },
                rotation: {
                    configurable: !0,
                    enumerable: !0,
                    value: t
                },
                quaternion: {
                    configurable: !0,
                    enumerable: !0,
                    value: n
                },
                scale: {
                    configurable: !0,
                    enumerable: !0,
                    value: i
                },
                modelViewMatrix: {
                    value: new Dt
                },
                normalMatrix: {
                    value: new gn
                }
            }),
            this.matrix = new Dt,
            this.matrixWorld = new Dt,
            this.matrixAutoUpdate = Nn.DefaultMatrixAutoUpdate,
            this.matrixWorldNeedsUpdate = !1,
            this.layers = new ul,
            this.visible = !0,
            this.castShadow = !1,
            this.receiveShadow = !1,
            this.frustumCulled = !0,
            this.renderOrder = 0,
            this.animations = [],
            this.userData = {}
        }
        onBeforeRender() {}
        onAfterRender() {}
        applyMatrix4(e) {
            this.matrixAutoUpdate && this.updateMatrix(),
            this.matrix.premultiply(e),
            this.matrix.decompose(this.position, this.quaternion, this.scale)
        }
        applyQuaternion(e) {
            return this.quaternion.premultiply(e),
            this
        }
        setRotationFromAxisAngle(e, t) {
            this.quaternion.setFromAxisAngle(e, t)
        }
        setRotationFromEuler(e) {
            this.quaternion.setFromEuler(e, !0)
        }
        setRotationFromMatrix(e) {
            this.quaternion.setFromRotationMatrix(e)
        }
        setRotationFromQuaternion(e) {
            this.quaternion.copy(e)
        }
        rotateOnAxis(e, t) {
            return Xr.setFromAxisAngle(e, t),
            this.quaternion.multiply(Xr),
            this
        }
        rotateOnWorldAxis(e, t) {
            return Xr.setFromAxisAngle(e, t),
            this.quaternion.premultiply(Xr),
            this
        }
        rotateX(e) {
            return this.rotateOnAxis(ku, e)
        }
        rotateY(e) {
            return this.rotateOnAxis(Bu, e)
        }
        rotateZ(e) {
            return this.rotateOnAxis(Gu, e)
        }
        translateOnAxis(e, t) {
            return Uu.copy(e).applyQuaternion(this.quaternion),
            this.position.add(Uu.multiplyScalar(t)),
            this
        }
        translateX(e) {
            return this.translateOnAxis(ku, e)
        }
        translateY(e) {
            return this.translateOnAxis(Bu, e)
        }
        translateZ(e) {
            return this.translateOnAxis(Gu, e)
        }
        localToWorld(e) {
            return e.applyMatrix4(this.matrixWorld)
        }
        worldToLocal(e) {
            return e.applyMatrix4(si.copy(this.matrixWorld).invert())
        }
        lookAt(e, t, n) {
            e.isVector3 ? Ro.copy(e) : Ro.set(e, t, n);
            const i = this.parent;
            this.updateWorldMatrix(!0, !1),
            Fs.setFromMatrixPosition(this.matrixWorld),
            this.isCamera || this.isLight ? si.lookAt(Fs, Ro, this.up) : si.lookAt(Ro, Fs, this.up),
            this.quaternion.setFromRotationMatrix(si),
            i && (si.extractRotation(i.matrixWorld),
            Xr.setFromRotationMatrix(si),
            this.quaternion.premultiply(Xr.invert()))
        }
        add(e) {
            if (arguments.length > 1) {
                for (let t = 0; t < arguments.length; t++)
                    this.add(arguments[t]);
                return this
            }
            return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e),
            this) : (e && e.isObject3D ? (e.parent !== null && e.parent.remove(e),
            e.parent = this,
            this.children.push(e),
            e.dispatchEvent(dm)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e),
            this)
        }
        remove(e) {
            if (arguments.length > 1) {
                for (let n = 0; n < arguments.length; n++)
                    this.remove(arguments[n]);
                return this
            }
            const t = this.children.indexOf(e);
            return t !== -1 && (e.parent = null,
            this.children.splice(t, 1),
            e.dispatchEvent(Vu)),
            this
        }
        removeFromParent() {
            const e = this.parent;
            return e !== null && e.remove(this),
            this
        }
        clear() {
            for (let e = 0; e < this.children.length; e++) {
                const t = this.children[e];
                t.parent = null,
                t.dispatchEvent(Vu)
            }
            return this.children.length = 0,
            this
        }
        attach(e) {
            return this.updateWorldMatrix(!0, !1),
            si.copy(this.matrixWorld).invert(),
            e.parent !== null && (e.parent.updateWorldMatrix(!0, !1),
            si.multiply(e.parent.matrixWorld)),
            e.applyMatrix4(si),
            this.add(e),
            e.updateWorldMatrix(!1, !0),
            this
        }
        getObjectById(e) {
            return this.getObjectByProperty("id", e)
        }
        getObjectByName(e) {
            return this.getObjectByProperty("name", e)
        }
        getObjectByProperty(e, t) {
            if (this[e] === t)
                return this;
            for (let n = 0, i = this.children.length; n < i; n++) {
                const a = this.children[n].getObjectByProperty(e, t);
                if (a !== void 0)
                    return a
            }
        }
        getWorldPosition(e) {
            return this.updateWorldMatrix(!0, !1),
            e.setFromMatrixPosition(this.matrixWorld)
        }
        getWorldQuaternion(e) {
            return this.updateWorldMatrix(!0, !1),
            this.matrixWorld.decompose(Fs, e, fm),
            e
        }
        getWorldScale(e) {
            return this.updateWorldMatrix(!0, !1),
            this.matrixWorld.decompose(Fs, hm, e),
            e
        }
        getWorldDirection(e) {
            this.updateWorldMatrix(!0, !1);
            const t = this.matrixWorld.elements;
            return e.set(t[8], t[9], t[10]).normalize()
        }
        raycast() {}
        traverse(e) {
            e(this);
            const t = this.children;
            for (let n = 0, i = t.length; n < i; n++)
                t[n].traverse(e)
        }
        traverseVisible(e) {
            if (this.visible === !1)
                return;
            e(this);
            const t = this.children;
            for (let n = 0, i = t.length; n < i; n++)
                t[n].traverseVisible(e)
        }
        traverseAncestors(e) {
            const t = this.parent;
            t !== null && (e(t),
            t.traverseAncestors(e))
        }
        updateMatrix() {
            this.matrix.compose(this.position, this.quaternion, this.scale),
            this.matrixWorldNeedsUpdate = !0
        }
        updateMatrixWorld(e) {
            this.matrixAutoUpdate && this.updateMatrix(),
            (this.matrixWorldNeedsUpdate || e) && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix),
            this.matrixWorldNeedsUpdate = !1,
            e = !0);
            const t = this.children;
            for (let n = 0, i = t.length; n < i; n++)
                t[n].updateMatrixWorld(e)
        }
        updateWorldMatrix(e, t) {
            const n = this.parent;
            if (e === !0 && n !== null && n.updateWorldMatrix(!0, !1),
            this.matrixAutoUpdate && this.updateMatrix(),
            this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix),
            t === !0) {
                const i = this.children;
                for (let r = 0, a = i.length; r < a; r++)
                    i[r].updateWorldMatrix(!1, !0)
            }
        }
        toJSON(e) {
            const t = e === void 0 || typeof e == "string"
              , n = {};
            t && (e = {
                geometries: {},
                materials: {},
                textures: {},
                images: {},
                shapes: {},
                skeletons: {},
                animations: {},
                nodes: {}
            },
            n.metadata = {
                version: 4.5,
                type: "Object",
                generator: "Object3D.toJSON"
            });
            const i = {};
            i.uuid = this.uuid,
            i.type = this.type,
            this.name !== "" && (i.name = this.name),
            this.castShadow === !0 && (i.castShadow = !0),
            this.receiveShadow === !0 && (i.receiveShadow = !0),
            this.visible === !1 && (i.visible = !1),
            this.frustumCulled === !1 && (i.frustumCulled = !1),
            this.renderOrder !== 0 && (i.renderOrder = this.renderOrder),
            JSON.stringify(this.userData) !== "{}" && (i.userData = this.userData),
            i.layers = this.layers.mask,
            i.matrix = this.matrix.toArray(),
            this.matrixAutoUpdate === !1 && (i.matrixAutoUpdate = !1),
            this.isInstancedMesh && (i.type = "InstancedMesh",
            i.count = this.count,
            i.instanceMatrix = this.instanceMatrix.toJSON(),
            this.instanceColor !== null && (i.instanceColor = this.instanceColor.toJSON()));
            function r(o, c) {
                return o[c.uuid] === void 0 && (o[c.uuid] = c.toJSON(e)),
                c.uuid
            }
            if (this.isScene)
                this.background && (this.background.isColor ? i.background = this.background.toJSON() : this.background.isTexture && (i.background = this.background.toJSON(e).uuid)),
                this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (i.environment = this.environment.toJSON(e).uuid);
            else if (this.isMesh || this.isLine || this.isPoints) {
                i.geometry = r(e.geometries, this.geometry);
                const o = this.geometry.parameters;
                if (o !== void 0 && o.shapes !== void 0) {
                    const c = o.shapes;
                    if (Array.isArray(c))
                        for (let l = 0, u = c.length; l < u; l++) {
                            const f = c[l];
                            r(e.shapes, f)
                        }
                    else
                        r(e.shapes, c)
                }
            }
            if (this.isSkinnedMesh && (i.bindMode = this.bindMode,
            i.bindMatrix = this.bindMatrix.toArray(),
            this.skeleton !== void 0 && (r(e.skeletons, this.skeleton),
            i.skeleton = this.skeleton.uuid)),
            this.material !== void 0)
                if (Array.isArray(this.material)) {
                    const o = [];
                    for (let c = 0, l = this.material.length; c < l; c++)
                        o.push(r(e.materials, this.material[c]));
                    i.material = o
                } else
                    i.material = r(e.materials, this.material);
            if (this.children.length > 0) {
                i.children = [];
                for (let o = 0; o < this.children.length; o++)
                    i.children.push(this.children[o].toJSON(e).object)
            }
            if (this.animations.length > 0) {
                i.animations = [];
                for (let o = 0; o < this.animations.length; o++) {
                    const c = this.animations[o];
                    i.animations.push(r(e.animations, c))
                }
            }
            if (t) {
                const o = a(e.geometries)
                  , c = a(e.materials)
                  , l = a(e.textures)
                  , u = a(e.images)
                  , f = a(e.shapes)
                  , h = a(e.skeletons)
                  , m = a(e.animations)
                  , g = a(e.nodes);
                o.length > 0 && (n.geometries = o),
                c.length > 0 && (n.materials = c),
                l.length > 0 && (n.textures = l),
                u.length > 0 && (n.images = u),
                f.length > 0 && (n.shapes = f),
                h.length > 0 && (n.skeletons = h),
                m.length > 0 && (n.animations = m),
                g.length > 0 && (n.nodes = g)
            }
            return n.object = i,
            n;
            function a(o) {
                const c = [];
                for (const l in o) {
                    const u = o[l];
                    delete u.metadata,
                    c.push(u)
                }
                return c
            }
        }
        clone(e) {
            return new this.constructor().copy(this, e)
        }
        copy(e, t=!0) {
            if (this.name = e.name,
            this.up.copy(e.up),
            this.position.copy(e.position),
            this.rotation.order = e.rotation.order,
            this.quaternion.copy(e.quaternion),
            this.scale.copy(e.scale),
            this.matrix.copy(e.matrix),
            this.matrixWorld.copy(e.matrixWorld),
            this.matrixAutoUpdate = e.matrixAutoUpdate,
            this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate,
            this.layers.mask = e.layers.mask,
            this.visible = e.visible,
            this.castShadow = e.castShadow,
            this.receiveShadow = e.receiveShadow,
            this.frustumCulled = e.frustumCulled,
            this.renderOrder = e.renderOrder,
            this.userData = JSON.parse(JSON.stringify(e.userData)),
            t === !0)
                for (let n = 0; n < e.children.length; n++) {
                    const i = e.children[n];
                    this.add(i.clone())
                }
            return this
        }
    }
    Nn.DefaultUp = new B(0,1,0),
    Nn.DefaultMatrixAutoUpdate = !0;
    const Un = new B
      , oi = new B
      , fl = new B
      , ai = new B
      , qr = new B
      , Yr = new B
      , Hu = new B
      , hl = new B
      , dl = new B
      , pl = new B;
    class li {
        constructor(e=new B, t=new B, n=new B) {
            this.a = e,
            this.b = t,
            this.c = n
        }
        static getNormal(e, t, n, i) {
            i.subVectors(n, t),
            Un.subVectors(e, t),
            i.cross(Un);
            const r = i.lengthSq();
            return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0)
        }
        static getBarycoord(e, t, n, i, r) {
            Un.subVectors(i, t),
            oi.subVectors(n, t),
            fl.subVectors(e, t);
            const a = Un.dot(Un)
              , o = Un.dot(oi)
              , c = Un.dot(fl)
              , l = oi.dot(oi)
              , u = oi.dot(fl)
              , f = a * l - o * o;
            if (f === 0)
                return r.set(-2, -1, -1);
            const h = 1 / f
              , m = (l * c - o * u) * h
              , g = (a * u - o * c) * h;
            return r.set(1 - m - g, g, m)
        }
        static containsPoint(e, t, n, i) {
            return this.getBarycoord(e, t, n, i, ai),
            ai.x >= 0 && ai.y >= 0 && ai.x + ai.y <= 1
        }
        static getUV(e, t, n, i, r, a, o, c) {
            return this.getBarycoord(e, t, n, i, ai),
            c.set(0, 0),
            c.addScaledVector(r, ai.x),
            c.addScaledVector(a, ai.y),
            c.addScaledVector(o, ai.z),
            c
        }
        static isFrontFacing(e, t, n, i) {
            return Un.subVectors(n, t),
            oi.subVectors(e, t),
            Un.cross(oi).dot(i) < 0
        }
        set(e, t, n) {
            return this.a.copy(e),
            this.b.copy(t),
            this.c.copy(n),
            this
        }
        setFromPointsAndIndices(e, t, n, i) {
            return this.a.copy(e[t]),
            this.b.copy(e[n]),
            this.c.copy(e[i]),
            this
        }
        setFromAttributeAndIndices(e, t, n, i) {
            return this.a.fromBufferAttribute(e, t),
            this.b.fromBufferAttribute(e, n),
            this.c.fromBufferAttribute(e, i),
            this
        }
        clone() {
            return new this.constructor().copy(this)
        }
        copy(e) {
            return this.a.copy(e.a),
            this.b.copy(e.b),
            this.c.copy(e.c),
            this
        }
        getArea() {
            return Un.subVectors(this.c, this.b),
            oi.subVectors(this.a, this.b),
            Un.cross(oi).length() * .5
        }
        getMidpoint(e) {
            return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
        }
        getNormal(e) {
            return li.getNormal(this.a, this.b, this.c, e)
        }
        getPlane(e) {
            return e.setFromCoplanarPoints(this.a, this.b, this.c)
        }
        getBarycoord(e, t) {
            return li.getBarycoord(e, this.a, this.b, this.c, t)
        }
        getUV(e, t, n, i, r) {
            return li.getUV(e, this.a, this.b, this.c, t, n, i, r)
        }
        containsPoint(e) {
            return li.containsPoint(e, this.a, this.b, this.c)
        }
        isFrontFacing(e) {
            return li.isFrontFacing(this.a, this.b, this.c, e)
        }
        intersectsBox(e) {
            return e.intersectsTriangle(this)
        }
        closestPointToPoint(e, t) {
            const n = this.a
              , i = this.b
              , r = this.c;
            let a, o;
            qr.subVectors(i, n),
            Yr.subVectors(r, n),
            hl.subVectors(e, n);
            const c = qr.dot(hl)
              , l = Yr.dot(hl);
            if (c <= 0 && l <= 0)
                return t.copy(n);
            dl.subVectors(e, i);
            const u = qr.dot(dl)
              , f = Yr.dot(dl);
            if (u >= 0 && f <= u)
                return t.copy(i);
            const h = c * f - u * l;
            if (h <= 0 && c >= 0 && u <= 0)
                return a = c / (c - u),
                t.copy(n).addScaledVector(qr, a);
            pl.subVectors(e, r);
            const m = qr.dot(pl)
              , g = Yr.dot(pl);
            if (g >= 0 && m <= g)
                return t.copy(r);
            const d = m * l - c * g;
            if (d <= 0 && l >= 0 && g <= 0)
                return o = l / (l - g),
                t.copy(n).addScaledVector(Yr, o);
            const p = u * g - m * f;
            if (p <= 0 && f - u >= 0 && m - g >= 0)
                return Hu.subVectors(r, i),
                o = (f - u) / (f - u + (m - g)),
                t.copy(i).addScaledVector(Hu, o);
            const _ = 1 / (p + d + h);
            return a = d * _,
            o = h * _,
            t.copy(n).addScaledVector(qr, a).addScaledVector(Yr, o)
        }
        equals(e) {
            return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c)
        }
    }
    let pm = 0;
    class Io extends Ji {
        constructor() {
            super();
            this.isMaterial = !0,
            Object.defineProperty(this, "id", {
                value: pm++
            }),
            this.uuid = Ps(),
            this.name = "",
            this.type = "Material",
            this.blending = Fr,
            this.side = Cs,
            this.vertexColors = !1,
            this.opacity = 1,
            this.transparent = !1,
            this.blendSrc = Zc,
            this.blendDst = Kc,
            this.blendEquation = zr,
            this.blendSrcAlpha = null,
            this.blendDstAlpha = null,
            this.blendEquationAlpha = null,
            this.depthFunc = ka,
            this.depthTest = !0,
            this.depthWrite = !0,
            this.stencilWriteMask = 255,
            this.stencilFunc = im,
            this.stencilRef = 0,
            this.stencilFuncMask = 255,
            this.stencilFail = $a,
            this.stencilZFail = $a,
            this.stencilZPass = $a,
            this.stencilWrite = !1,
            this.clippingPlanes = null,
            this.clipIntersection = !1,
            this.clipShadows = !1,
            this.shadowSide = null,
            this.colorWrite = !0,
            this.precision = null,
            this.polygonOffset = !1,
            this.polygonOffsetFactor = 0,
            this.polygonOffsetUnits = 0,
            this.dithering = !1,
            this.alphaToCoverage = !1,
            this.premultipliedAlpha = !1,
            this.visible = !0,
            this.toneMapped = !0,
            this.userData = {},
            this.version = 0,
            this._alphaTest = 0
        }
        get alphaTest() {
            return this._alphaTest
        }
        set alphaTest(e) {
            this._alphaTest > 0 != e > 0 && this.version++,
            this._alphaTest = e
        }
        onBuild() {}
        onBeforeRender() {}
        onBeforeCompile() {}
        customProgramCacheKey() {
            return this.onBeforeCompile.toString()
        }
        setValues(e) {
            if (e !== void 0)
                for (const t in e) {
                    const n = e[t];
                    if (n === void 0) {
                        console.warn("THREE.Material: '" + t + "' parameter is undefined.");
                        continue
                    }
                    if (t === "shading") {
                        console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."),
                        this.flatShading = n === up;
                        continue
                    }
                    const i = this[t];
                    if (i === void 0) {
                        console.warn("THREE." + this.type + ": '" + t + "' is not a property of this material.");
                        continue
                    }
                    i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[t] = n
                }
        }
        toJSON(e) {
            const t = e === void 0 || typeof e == "string";
            t && (e = {
                textures: {},
                images: {}
            });
            const n = {
                metadata: {
                    version: 4.5,
                    type: "Material",
                    generator: "Material.toJSON"
                }
            };
            n.uuid = this.uuid,
            n.type = this.type,
            this.name !== "" && (n.name = this.name),
            this.color && this.color.isColor && (n.color = this.color.getHex()),
            this.roughness !== void 0 && (n.roughness = this.roughness),
            this.metalness !== void 0 && (n.metalness = this.metalness),
            this.sheen !== void 0 && (n.sheen = this.sheen),
            this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()),
            this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness),
            this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()),
            this.emissiveIntensity && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity),
            this.specular && this.specular.isColor && (n.specular = this.specular.getHex()),
            this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity),
            this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()),
            this.shininess !== void 0 && (n.shininess = this.shininess),
            this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat),
            this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness),
            this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid),
            this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid),
            this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid,
            n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()),
            this.iridescence !== void 0 && (n.iridescence = this.iridescence),
            this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR),
            this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange),
            this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid),
            this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid),
            this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid),
            this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid),
            this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid),
            this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid,
            n.lightMapIntensity = this.lightMapIntensity),
            this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid,
            n.aoMapIntensity = this.aoMapIntensity),
            this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid,
            n.bumpScale = this.bumpScale),
            this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid,
            n.normalMapType = this.normalMapType,
            n.normalScale = this.normalScale.toArray()),
            this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid,
            n.displacementScale = this.displacementScale,
            n.displacementBias = this.displacementBias),
            this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid),
            this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid),
            this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid),
            this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid),
            this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid),
            this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid),
            this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid,
            this.combine !== void 0 && (n.combine = this.combine)),
            this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity),
            this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity),
            this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio),
            this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid),
            this.transmission !== void 0 && (n.transmission = this.transmission),
            this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid),
            this.thickness !== void 0 && (n.thickness = this.thickness),
            this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid),
            this.attenuationDistance !== void 0 && (n.attenuationDistance = this.attenuationDistance),
            this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()),
            this.size !== void 0 && (n.size = this.size),
            this.shadowSide !== null && (n.shadowSide = this.shadowSide),
            this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation),
            this.blending !== Fr && (n.blending = this.blending),
            this.side !== Cs && (n.side = this.side),
            this.vertexColors && (n.vertexColors = !0),
            this.opacity < 1 && (n.opacity = this.opacity),
            this.transparent === !0 && (n.transparent = this.transparent),
            n.depthFunc = this.depthFunc,
            n.depthTest = this.depthTest,
            n.depthWrite = this.depthWrite,
            n.colorWrite = this.colorWrite,
            n.stencilWrite = this.stencilWrite,
            n.stencilWriteMask = this.stencilWriteMask,
            n.stencilFunc = this.stencilFunc,
            n.stencilRef = this.stencilRef,
            n.stencilFuncMask = this.stencilFuncMask,
            n.stencilFail = this.stencilFail,
            n.stencilZFail = this.stencilZFail,
            n.stencilZPass = this.stencilZPass,
            this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation),
            this.polygonOffset === !0 && (n.polygonOffset = !0),
            this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor),
            this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits),
            this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth),
            this.dashSize !== void 0 && (n.dashSize = this.dashSize),
            this.gapSize !== void 0 && (n.gapSize = this.gapSize),
            this.scale !== void 0 && (n.scale = this.scale),
            this.dithering === !0 && (n.dithering = !0),
            this.alphaTest > 0 && (n.alphaTest = this.alphaTest),
            this.alphaToCoverage === !0 && (n.alphaToCoverage = this.alphaToCoverage),
            this.premultipliedAlpha === !0 && (n.premultipliedAlpha = this.premultipliedAlpha),
            this.wireframe === !0 && (n.wireframe = this.wireframe),
            this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth),
            this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap),
            this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin),
            this.flatShading === !0 && (n.flatShading = this.flatShading),
            this.visible === !1 && (n.visible = !1),
            this.toneMapped === !1 && (n.toneMapped = !1),
            this.fog === !1 && (n.fog = !1),
            JSON.stringify(this.userData) !== "{}" && (n.userData = this.userData);
            function i(r) {
                const a = [];
                for (const o in r) {
                    const c = r[o];
                    delete c.metadata,
                    a.push(c)
                }
                return a
            }
            if (t) {
                const r = i(e.textures)
                  , a = i(e.images);
                r.length > 0 && (n.textures = r),
                a.length > 0 && (n.images = a)
            }
            return n
        }
        clone() {
            return new this.constructor().copy(this)
        }
        copy(e) {
            this.name = e.name,
            this.blending = e.blending,
            this.side = e.side,
            this.vertexColors = e.vertexColors,
            this.opacity = e.opacity,
            this.transparent = e.transparent,
            this.blendSrc = e.blendSrc,
            this.blendDst = e.blendDst,
            this.blendEquation = e.blendEquation,
            this.blendSrcAlpha = e.blendSrcAlpha,
            this.blendDstAlpha = e.blendDstAlpha,
            this.blendEquationAlpha = e.blendEquationAlpha,
            this.depthFunc = e.depthFunc,
            this.depthTest = e.depthTest,
            this.depthWrite = e.depthWrite,
            this.stencilWriteMask = e.stencilWriteMask,
            this.stencilFunc = e.stencilFunc,
            this.stencilRef = e.stencilRef,
            this.stencilFuncMask = e.stencilFuncMask,
            this.stencilFail = e.stencilFail,
            this.stencilZFail = e.stencilZFail,
            this.stencilZPass = e.stencilZPass,
            this.stencilWrite = e.stencilWrite;
            const t = e.clippingPlanes;
            let n = null;
            if (t !== null) {
                const i = t.length;
                n = new Array(i);
                for (let r = 0; r !== i; ++r)
                    n[r] = t[r].clone()
            }
            return this.clippingPlanes = n,
            this.clipIntersection = e.clipIntersection,
            this.clipShadows = e.clipShadows,
            this.shadowSide = e.shadowSide,
            this.colorWrite = e.colorWrite,
            this.precision = e.precision,
            this.polygonOffset = e.polygonOffset,
            this.polygonOffsetFactor = e.polygonOffsetFactor,
            this.polygonOffsetUnits = e.polygonOffsetUnits,
            this.dithering = e.dithering,
            this.alphaTest = e.alphaTest,
            this.alphaToCoverage = e.alphaToCoverage,
            this.premultipliedAlpha = e.premultipliedAlpha,
            this.visible = e.visible,
            this.toneMapped = e.toneMapped,
            this.userData = JSON.parse(JSON.stringify(e.userData)),
            this
        }
        dispose() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
        set needsUpdate(e) {
            e === !0 && this.version++
        }
    }
    class Wu extends Io {
        constructor(e) {
            super();
            this.isMeshBasicMaterial = !0,
            this.type = "MeshBasicMaterial",
            this.color = new rt(16777215),
            this.map = null,
            this.lightMap = null,
            this.lightMapIntensity = 1,
            this.aoMap = null,
            this.aoMapIntensity = 1,
            this.specularMap = null,
            this.alphaMap = null,
            this.envMap = null,
            this.combine = Jc,
            this.reflectivity = 1,
            this.refractionRatio = .98,
            this.wireframe = !1,
            this.wireframeLinewidth = 1,
            this.wireframeLinecap = "round",
            this.wireframeLinejoin = "round",
            this.fog = !0,
            this.setValues(e)
        }
        copy(e) {
            return super.copy(e),
            this.color.copy(e.color),
            this.map = e.map,
            this.lightMap = e.lightMap,
            this.lightMapIntensity = e.lightMapIntensity,
            this.aoMap = e.aoMap,
            this.aoMapIntensity = e.aoMapIntensity,
            this.specularMap = e.specularMap,
            this.alphaMap = e.alphaMap,
            this.envMap = e.envMap,
            this.combine = e.combine,
            this.reflectivity = e.reflectivity,
            this.refractionRatio = e.refractionRatio,
            this.wireframe = e.wireframe,
            this.wireframeLinewidth = e.wireframeLinewidth,
            this.wireframeLinecap = e.wireframeLinecap,
            this.wireframeLinejoin = e.wireframeLinejoin,
            this.fog = e.fog,
            this
        }
    }
    const mt = new B
      , Fo = new ke;
    class Yn {
        constructor(e, t, n) {
            if (Array.isArray(e))
                throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
            this.isBufferAttribute = !0,
            this.name = "",
            this.array = e,
            this.itemSize = t,
            this.count = e !== void 0 ? e.length / t : 0,
            this.normalized = n === !0,
            this.usage = wu,
            this.updateRange = {
                offset: 0,
                count: -1
            },
            this.version = 0
        }
        onUploadCallback() {}
        set needsUpdate(e) {
            e === !0 && this.version++
        }
        setUsage(e) {
            return this.usage = e,
            this
        }
        copy(e) {
            return this.name = e.name,
            this.array = new e.array.constructor(e.array),
            this.itemSize = e.itemSize,
            this.count = e.count,
            this.normalized = e.normalized,
            this.usage = e.usage,
            this
        }
        copyAt(e, t, n) {
            e *= this.itemSize,
            n *= t.itemSize;
            for (let i = 0, r = this.itemSize; i < r; i++)
                this.array[e + i] = t.array[n + i];
            return this
        }
        copyArray(e) {
            return this.array.set(e),
            this
        }
        copyColorsArray(e) {
            const t = this.array;
            let n = 0;
            for (let i = 0, r = e.length; i < r; i++) {
                let a = e[i];
                a === void 0 && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", i),
                a = new rt),
                t[n++] = a.r,
                t[n++] = a.g,
                t[n++] = a.b
            }
            return this
        }
        copyVector2sArray(e) {
            const t = this.array;
            let n = 0;
            for (let i = 0, r = e.length; i < r; i++) {
                let a = e[i];
                a === void 0 && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", i),
                a = new ke),
                t[n++] = a.x,
                t[n++] = a.y
            }
            return this
        }
        copyVector3sArray(e) {
            const t = this.array;
            let n = 0;
            for (let i = 0, r = e.length; i < r; i++) {
                let a = e[i];
                a === void 0 && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", i),
                a = new B),
                t[n++] = a.x,
                t[n++] = a.y,
                t[n++] = a.z
            }
            return this
        }
        copyVector4sArray(e) {
            const t = this.array;
            let n = 0;
            for (let i = 0, r = e.length; i < r; i++) {
                let a = e[i];
                a === void 0 && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", i),
                a = new Mt),
                t[n++] = a.x,
                t[n++] = a.y,
                t[n++] = a.z,
                t[n++] = a.w
            }
            return this
        }
        applyMatrix3(e) {
            if (this.itemSize === 2)
                for (let t = 0, n = this.count; t < n; t++)
                    Fo.fromBufferAttribute(this, t),
                    Fo.applyMatrix3(e),
                    this.setXY(t, Fo.x, Fo.y);
            else if (this.itemSize === 3)
                for (let t = 0, n = this.count; t < n; t++)
                    mt.fromBufferAttribute(this, t),
                    mt.applyMatrix3(e),
                    this.setXYZ(t, mt.x, mt.y, mt.z);
            return this
        }
        applyMatrix4(e) {
            for (let t = 0, n = this.count; t < n; t++)
                mt.fromBufferAttribute(this, t),
                mt.applyMatrix4(e),
                this.setXYZ(t, mt.x, mt.y, mt.z);
            return this
        }
        applyNormalMatrix(e) {
            for (let t = 0, n = this.count; t < n; t++)
                mt.fromBufferAttribute(this, t),
                mt.applyNormalMatrix(e),
                this.setXYZ(t, mt.x, mt.y, mt.z);
            return this
        }
        transformDirection(e) {
            for (let t = 0, n = this.count; t < n; t++)
                mt.fromBufferAttribute(this, t),
                mt.transformDirection(e),
                this.setXYZ(t, mt.x, mt.y, mt.z);
            return this
        }
        set(e, t=0) {
            return this.array.set(e, t),
            this
        }
        getX(e) {
            return this.array[e * this.itemSize]
        }
        setX(e, t) {
            return this.array[e * this.itemSize] = t,
            this
        }
        getY(e) {
            return this.array[e * this.itemSize + 1]
        }
        setY(e, t) {
            return this.array[e * this.itemSize + 1] = t,
            this
        }
        getZ(e) {
            return this.array[e * this.itemSize + 2]
        }
        setZ(e, t) {
            return this.array[e * this.itemSize + 2] = t,
            this
        }
        getW(e) {
            return this.array[e * this.itemSize + 3]
        }
        setW(e, t) {
            return this.array[e * this.itemSize + 3] = t,
            this
        }
        setXY(e, t, n) {
            return e *= this.itemSize,
            this.array[e + 0] = t,
            this.array[e + 1] = n,
            this
        }
        setXYZ(e, t, n, i) {
            return e *= this.itemSize,
            this.array[e + 0] = t,
            this.array[e + 1] = n,
            this.array[e + 2] = i,
            this
        }
        setXYZW(e, t, n, i, r) {
            return e *= this.itemSize,
            this.array[e + 0] = t,
            this.array[e + 1] = n,
            this.array[e + 2] = i,
            this.array[e + 3] = r,
            this
        }
        onUpload(e) {
            return this.onUploadCallback = e,
            this
        }
        clone() {
            return new this.constructor(this.array,this.itemSize).copy(this)
        }
        toJSON() {
            const e = {
                itemSize: this.itemSize,
                type: this.array.constructor.name,
                array: Array.from(this.array),
                normalized: this.normalized
            };
            return this.name !== "" && (e.name = this.name),
            this.usage !== wu && (e.usage = this.usage),
            (this.updateRange.offset !== 0 || this.updateRange.count !== -1) && (e.updateRange = this.updateRange),
            e
        }
    }
    class Xu extends Yn {
        constructor(e, t, n) {
            super(new Uint16Array(e), t, n)
        }
    }
    class qu extends Yn {
        constructor(e, t, n) {
            super(new Uint32Array(e), t, n)
        }
    }
    class kn extends Yn {
        constructor(e, t, n) {
            super(new Float32Array(e), t, n)
        }
    }
    let mm = 0;
    const _n = new Dt
      , ml = new Nn
      , $r = new B
      , ln = new Ls
      , zs = new Ls
      , St = new B;
    class ci extends Ji {
        constructor() {
            super();
            this.isBufferGeometry = !0,
            Object.defineProperty(this, "id", {
                value: mm++
            }),
            this.uuid = Ps(),
            this.name = "",
            this.type = "BufferGeometry",
            this.index = null,
            this.attributes = {},
            this.morphAttributes = {},
            this.morphTargetsRelative = !1,
            this.groups = [],
            this.boundingBox = null,
            this.boundingSphere = null,
            this.drawRange = {
                start: 0,
                count: 1 / 0
            },
            this.userData = {}
        }
        getIndex() {
            return this.index
        }
        setIndex(e) {
            return Array.isArray(e) ? this.index = new (Au(e) ? qu : Xu)(e,1) : this.index = e,
            this
        }
        getAttribute(e) {
            return this.attributes[e]
        }
        setAttribute(e, t) {
            return this.attributes[e] = t,
            this
        }
        deleteAttribute(e) {
            return delete this.attributes[e],
            this
        }
        hasAttribute(e) {
            return this.attributes[e] !== void 0
        }
        addGroup(e, t, n=0) {
            this.groups.push({
                start: e,
                count: t,
                materialIndex: n
            })
        }
        clearGroups() {
            this.groups = []
        }
        setDrawRange(e, t) {
            this.drawRange.start = e,
            this.drawRange.count = t
        }
        applyMatrix4(e) {
            const t = this.attributes.position;
            t !== void 0 && (t.applyMatrix4(e),
            t.needsUpdate = !0);
            const n = this.attributes.normal;
            if (n !== void 0) {
                const r = new gn().getNormalMatrix(e);
                n.applyNormalMatrix(r),
                n.needsUpdate = !0
            }
            const i = this.attributes.tangent;
            return i !== void 0 && (i.transformDirection(e),
            i.needsUpdate = !0),
            this.boundingBox !== null && this.computeBoundingBox(),
            this.boundingSphere !== null && this.computeBoundingSphere(),
            this
        }
        applyQuaternion(e) {
            return _n.makeRotationFromQuaternion(e),
            this.applyMatrix4(_n),
            this
        }
        rotateX(e) {
            return _n.makeRotationX(e),
            this.applyMatrix4(_n),
            this
        }
        rotateY(e) {
            return _n.makeRotationY(e),
            this.applyMatrix4(_n),
            this
        }
        rotateZ(e) {
            return _n.makeRotationZ(e),
            this.applyMatrix4(_n),
            this
        }
        translate(e, t, n) {
            return _n.makeTranslation(e, t, n),
            this.applyMatrix4(_n),
            this
        }
        scale(e, t, n) {
            return _n.makeScale(e, t, n),
            this.applyMatrix4(_n),
            this
        }
        lookAt(e) {
            return ml.lookAt(e),
            ml.updateMatrix(),
            this.applyMatrix4(ml.matrix),
            this
        }
        center() {
            return this.computeBoundingBox(),
            this.boundingBox.getCenter($r).negate(),
            this.translate($r.x, $r.y, $r.z),
            this
        }
        setFromPoints(e) {
            const t = [];
            for (let n = 0, i = e.length; n < i; n++) {
                const r = e[n];
                t.push(r.x, r.y, r.z || 0)
            }
            return this.setAttribute("position", new kn(t,3)),
            this
        }
        computeBoundingBox() {
            this.boundingBox === null && (this.boundingBox = new Ls);
            const e = this.attributes.position
              , t = this.morphAttributes.position;
            if (e && e.isGLBufferAttribute) {
                console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this),
                this.boundingBox.set(new B(-1 / 0,-1 / 0,-1 / 0), new B(1 / 0,1 / 0,1 / 0));
                return
            }
            if (e !== void 0) {
                if (this.boundingBox.setFromBufferAttribute(e),
                t)
                    for (let n = 0, i = t.length; n < i; n++) {
                        const r = t[n];
                        ln.setFromBufferAttribute(r),
                        this.morphTargetsRelative ? (St.addVectors(this.boundingBox.min, ln.min),
                        this.boundingBox.expandByPoint(St),
                        St.addVectors(this.boundingBox.max, ln.max),
                        this.boundingBox.expandByPoint(St)) : (this.boundingBox.expandByPoint(ln.min),
                        this.boundingBox.expandByPoint(ln.max))
                    }
            } else
                this.boundingBox.makeEmpty();
            (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this)
        }
        computeBoundingSphere() {
            this.boundingSphere === null && (this.boundingSphere = new ol);
            const e = this.attributes.position
              , t = this.morphAttributes.position;
            if (e && e.isGLBufferAttribute) {
                console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this),
                this.boundingSphere.set(new B, 1 / 0);
                return
            }
            if (e) {
                const n = this.boundingSphere.center;
                if (ln.setFromBufferAttribute(e),
                t)
                    for (let r = 0, a = t.length; r < a; r++) {
                        const o = t[r];
                        zs.setFromBufferAttribute(o),
                        this.morphTargetsRelative ? (St.addVectors(ln.min, zs.min),
                        ln.expandByPoint(St),
                        St.addVectors(ln.max, zs.max),
                        ln.expandByPoint(St)) : (ln.expandByPoint(zs.min),
                        ln.expandByPoint(zs.max))
                    }
                ln.getCenter(n);
                let i = 0;
                for (let r = 0, a = e.count; r < a; r++)
                    St.fromBufferAttribute(e, r),
                    i = Math.max(i, n.distanceToSquared(St));
                if (t)
                    for (let r = 0, a = t.length; r < a; r++) {
                        const o = t[r]
                          , c = this.morphTargetsRelative;
                        for (let l = 0, u = o.count; l < u; l++)
                            St.fromBufferAttribute(o, l),
                            c && ($r.fromBufferAttribute(e, l),
                            St.add($r)),
                            i = Math.max(i, n.distanceToSquared(St))
                    }
                this.boundingSphere.radius = Math.sqrt(i),
                isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this)
            }
        }
        computeTangents() {
            const e = this.index
              , t = this.attributes;
            if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
                console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
                return
            }
            const n = e.array
              , i = t.position.array
              , r = t.normal.array
              , a = t.uv.array
              , o = i.length / 3;
            this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new Yn(new Float32Array(4 * o),4));
            const c = this.getAttribute("tangent").array
              , l = []
              , u = [];
            for (let L = 0; L < o; L++)
                l[L] = new B,
                u[L] = new B;
            const f = new B
              , h = new B
              , m = new B
              , g = new ke
              , d = new ke
              , p = new ke
              , _ = new B
              , y = new B;
            function M(L, F, V) {
                f.fromArray(i, L * 3),
                h.fromArray(i, F * 3),
                m.fromArray(i, V * 3),
                g.fromArray(a, L * 2),
                d.fromArray(a, F * 2),
                p.fromArray(a, V * 2),
                h.sub(f),
                m.sub(f),
                d.sub(g),
                p.sub(g);
                const K = 1 / (d.x * p.y - p.x * d.y);
                !isFinite(K) || (_.copy(h).multiplyScalar(p.y).addScaledVector(m, -d.y).multiplyScalar(K),
                y.copy(m).multiplyScalar(d.x).addScaledVector(h, -p.x).multiplyScalar(K),
                l[L].add(_),
                l[F].add(_),
                l[V].add(_),
                u[L].add(y),
                u[F].add(y),
                u[V].add(y))
            }
            let x = this.groups;
            x.length === 0 && (x = [{
                start: 0,
                count: n.length
            }]);
            for (let L = 0, F = x.length; L < F; ++L) {
                const V = x[L]
                  , K = V.start
                  , R = V.count;
                for (let U = K, z = K + R; U < z; U += 3)
                    M(n[U + 0], n[U + 1], n[U + 2])
            }
            const b = new B
              , S = new B
              , A = new B
              , v = new B;
            function w(L) {
                A.fromArray(r, L * 3),
                v.copy(A);
                const F = l[L];
                b.copy(F),
                b.sub(A.multiplyScalar(A.dot(F))).normalize(),
                S.crossVectors(v, F);
                const K = S.dot(u[L]) < 0 ? -1 : 1;
                c[L * 4] = b.x,
                c[L * 4 + 1] = b.y,
                c[L * 4 + 2] = b.z,
                c[L * 4 + 3] = K
            }
            for (let L = 0, F = x.length; L < F; ++L) {
                const V = x[L]
                  , K = V.start
                  , R = V.count;
                for (let U = K, z = K + R; U < z; U += 3)
                    w(n[U + 0]),
                    w(n[U + 1]),
                    w(n[U + 2])
            }
        }
        computeVertexNormals() {
            const e = this.index
              , t = this.getAttribute("position");
            if (t !== void 0) {
                let n = this.getAttribute("normal");
                if (n === void 0)
                    n = new Yn(new Float32Array(t.count * 3),3),
                    this.setAttribute("normal", n);
                else
                    for (let h = 0, m = n.count; h < m; h++)
                        n.setXYZ(h, 0, 0, 0);
                const i = new B
                  , r = new B
                  , a = new B
                  , o = new B
                  , c = new B
                  , l = new B
                  , u = new B
                  , f = new B;
                if (e)
                    for (let h = 0, m = e.count; h < m; h += 3) {
                        const g = e.getX(h + 0)
                          , d = e.getX(h + 1)
                          , p = e.getX(h + 2);
                        i.fromBufferAttribute(t, g),
                        r.fromBufferAttribute(t, d),
                        a.fromBufferAttribute(t, p),
                        u.subVectors(a, r),
                        f.subVectors(i, r),
                        u.cross(f),
                        o.fromBufferAttribute(n, g),
                        c.fromBufferAttribute(n, d),
                        l.fromBufferAttribute(n, p),
                        o.add(u),
                        c.add(u),
                        l.add(u),
                        n.setXYZ(g, o.x, o.y, o.z),
                        n.setXYZ(d, c.x, c.y, c.z),
                        n.setXYZ(p, l.x, l.y, l.z)
                    }
                else
                    for (let h = 0, m = t.count; h < m; h += 3)
                        i.fromBufferAttribute(t, h + 0),
                        r.fromBufferAttribute(t, h + 1),
                        a.fromBufferAttribute(t, h + 2),
                        u.subVectors(a, r),
                        f.subVectors(i, r),
                        u.cross(f),
                        n.setXYZ(h + 0, u.x, u.y, u.z),
                        n.setXYZ(h + 1, u.x, u.y, u.z),
                        n.setXYZ(h + 2, u.x, u.y, u.z);
                this.normalizeNormals(),
                n.needsUpdate = !0
            }
        }
        merge(e, t) {
            if (!(e && e.isBufferGeometry)) {
                console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", e);
                return
            }
            t === void 0 && (t = 0,
            console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));
            const n = this.attributes;
            for (const i in n) {
                if (e.attributes[i] === void 0)
                    continue;
                const a = n[i].array
                  , o = e.attributes[i]
                  , c = o.array
                  , l = o.itemSize * t
                  , u = Math.min(c.length, a.length - l);
                for (let f = 0, h = l; f < u; f++,
                h++)
                    a[h] = c[f]
            }
            return this
        }
        normalizeNormals() {
            const e = this.attributes.normal;
            for (let t = 0, n = e.count; t < n; t++)
                St.fromBufferAttribute(e, t),
                St.normalize(),
                e.setXYZ(t, St.x, St.y, St.z)
        }
        toNonIndexed() {
            function e(o, c) {
                const l = o.array
                  , u = o.itemSize
                  , f = o.normalized
                  , h = new l.constructor(c.length * u);
                let m = 0
                  , g = 0;
                for (let d = 0, p = c.length; d < p; d++) {
                    o.isInterleavedBufferAttribute ? m = c[d] * o.data.stride + o.offset : m = c[d] * u;
                    for (let _ = 0; _ < u; _++)
                        h[g++] = l[m++]
                }
                return new Yn(h,u,f)
            }
            if (this.index === null)
                return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),
                this;
            const t = new ci
              , n = this.index.array
              , i = this.attributes;
            for (const o in i) {
                const c = i[o]
                  , l = e(c, n);
                t.setAttribute(o, l)
            }
            const r = this.morphAttributes;
            for (const o in r) {
                const c = []
                  , l = r[o];
                for (let u = 0, f = l.length; u < f; u++) {
                    const h = l[u]
                      , m = e(h, n);
                    c.push(m)
                }
                t.morphAttributes[o] = c
            }
            t.morphTargetsRelative = this.morphTargetsRelative;
            const a = this.groups;
            for (let o = 0, c = a.length; o < c; o++) {
                const l = a[o];
                t.addGroup(l.start, l.count, l.materialIndex)
            }
            return t
        }
        toJSON() {
            const e = {
                metadata: {
                    version: 4.5,
                    type: "BufferGeometry",
                    generator: "BufferGeometry.toJSON"
                }
            };
            if (e.uuid = this.uuid,
            e.type = this.type,
            this.name !== "" && (e.name = this.name),
            Object.keys(this.userData).length > 0 && (e.userData = this.userData),
            this.parameters !== void 0) {
                const c = this.parameters;
                for (const l in c)
                    c[l] !== void 0 && (e[l] = c[l]);
                return e
            }
            e.data = {
                attributes: {}
            };
            const t = this.index;
            t !== null && (e.data.index = {
                type: t.array.constructor.name,
                array: Array.prototype.slice.call(t.array)
            });
            const n = this.attributes;
            for (const c in n) {
                const l = n[c];
                e.data.attributes[c] = l.toJSON(e.data)
            }
            const i = {};
            let r = !1;
            for (const c in this.morphAttributes) {
                const l = this.morphAttributes[c]
                  , u = [];
                for (let f = 0, h = l.length; f < h; f++) {
                    const m = l[f];
                    u.push(m.toJSON(e.data))
                }
                u.length > 0 && (i[c] = u,
                r = !0)
            }
            r && (e.data.morphAttributes = i,
            e.data.morphTargetsRelative = this.morphTargetsRelative);
            const a = this.groups;
            a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
            const o = this.boundingSphere;
            return o !== null && (e.data.boundingSphere = {
                center: o.center.toArray(),
                radius: o.radius
            }),
            e
        }
        clone() {
            return new this.constructor().copy(this)
        }
        copy(e) {
            this.index = null,
            this.attributes = {},
            this.morphAttributes = {},
            this.groups = [],
            this.boundingBox = null,
            this.boundingSphere = null;
            const t = {};
            this.name = e.name;
            const n = e.index;
            n !== null && this.setIndex(n.clone(t));
            const i = e.attributes;
            for (const l in i) {
                const u = i[l];
                this.setAttribute(l, u.clone(t))
            }
            const r = e.morphAttributes;
            for (const l in r) {
                const u = []
                  , f = r[l];
                for (let h = 0, m = f.length; h < m; h++)
                    u.push(f[h].clone(t));
                this.morphAttributes[l] = u
            }
            this.morphTargetsRelative = e.morphTargetsRelative;
            const a = e.groups;
            for (let l = 0, u = a.length; l < u; l++) {
                const f = a[l];
                this.addGroup(f.start, f.count, f.materialIndex)
            }
            const o = e.boundingBox;
            o !== null && (this.boundingBox = o.clone());
            const c = e.boundingSphere;
            return c !== null && (this.boundingSphere = c.clone()),
            this.drawRange.start = e.drawRange.start,
            this.drawRange.count = e.drawRange.count,
            this.userData = e.userData,
            e.parameters !== void 0 && (this.parameters = Object.assign({}, e.parameters)),
            this
        }
        dispose() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    }
    const Yu = new Dt
      , jr = new zu
      , gl = new ol
      , Ei = new B
      , Ci = new B
      , Ai = new B
      , _l = new B
      , xl = new B
      , vl = new B
      , zo = new B
      , Oo = new B
      , No = new B
      , Uo = new ke
      , ko = new ke
      , Bo = new ke
      , yl = new B
      , Go = new B;
    class Bn extends Nn {
        constructor(e=new ci, t=new Wu) {
            super();
            this.isMesh = !0,
            this.type = "Mesh",
            this.geometry = e,
            this.material = t,
            this.updateMorphTargets()
        }
        copy(e, t) {
            return super.copy(e, t),
            e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()),
            e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)),
            this.material = e.material,
            this.geometry = e.geometry,
            this
        }
        updateMorphTargets() {
            const t = this.geometry.morphAttributes
              , n = Object.keys(t);
            if (n.length > 0) {
                const i = t[n[0]];
                if (i !== void 0) {
                    this.morphTargetInfluences = [],
                    this.morphTargetDictionary = {};
                    for (let r = 0, a = i.length; r < a; r++) {
                        const o = i[r].name || String(r);
                        this.morphTargetInfluences.push(0),
                        this.morphTargetDictionary[o] = r
                    }
                }
            }
        }
        raycast(e, t) {
            const n = this.geometry
              , i = this.material
              , r = this.matrixWorld;
            if (i === void 0 || (n.boundingSphere === null && n.computeBoundingSphere(),
            gl.copy(n.boundingSphere),
            gl.applyMatrix4(r),
            e.ray.intersectsSphere(gl) === !1) || (Yu.copy(r).invert(),
            jr.copy(e.ray).applyMatrix4(Yu),
            n.boundingBox !== null && jr.intersectsBox(n.boundingBox) === !1))
                return;
            let a;
            const o = n.index
              , c = n.attributes.position
              , l = n.morphAttributes.position
              , u = n.morphTargetsRelative
              , f = n.attributes.uv
              , h = n.attributes.uv2
              , m = n.groups
              , g = n.drawRange;
            if (o !== null)
                if (Array.isArray(i))
                    for (let d = 0, p = m.length; d < p; d++) {
                        const _ = m[d]
                          , y = i[_.materialIndex]
                          , M = Math.max(_.start, g.start)
                          , x = Math.min(o.count, Math.min(_.start + _.count, g.start + g.count));
                        for (let b = M, S = x; b < S; b += 3) {
                            const A = o.getX(b)
                              , v = o.getX(b + 1)
                              , w = o.getX(b + 2);
                            a = Vo(this, y, e, jr, c, l, u, f, h, A, v, w),
                            a && (a.faceIndex = Math.floor(b / 3),
                            a.face.materialIndex = _.materialIndex,
                            t.push(a))
                        }
                    }
                else {
                    const d = Math.max(0, g.start)
                      , p = Math.min(o.count, g.start + g.count);
                    for (let _ = d, y = p; _ < y; _ += 3) {
                        const M = o.getX(_)
                          , x = o.getX(_ + 1)
                          , b = o.getX(_ + 2);
                        a = Vo(this, i, e, jr, c, l, u, f, h, M, x, b),
                        a && (a.faceIndex = Math.floor(_ / 3),
                        t.push(a))
                    }
                }
            else if (c !== void 0)
                if (Array.isArray(i))
                    for (let d = 0, p = m.length; d < p; d++) {
                        const _ = m[d]
                          , y = i[_.materialIndex]
                          , M = Math.max(_.start, g.start)
                          , x = Math.min(c.count, Math.min(_.start + _.count, g.start + g.count));
                        for (let b = M, S = x; b < S; b += 3) {
                            const A = b
                              , v = b + 1
                              , w = b + 2;
                            a = Vo(this, y, e, jr, c, l, u, f, h, A, v, w),
                            a && (a.faceIndex = Math.floor(b / 3),
                            a.face.materialIndex = _.materialIndex,
                            t.push(a))
                        }
                    }
                else {
                    const d = Math.max(0, g.start)
                      , p = Math.min(c.count, g.start + g.count);
                    for (let _ = d, y = p; _ < y; _ += 3) {
                        const M = _
                          , x = _ + 1
                          , b = _ + 2;
                        a = Vo(this, i, e, jr, c, l, u, f, h, M, x, b),
                        a && (a.faceIndex = Math.floor(_ / 3),
                        t.push(a))
                    }
                }
        }
    }
    function gm(s, e, t, n, i, r, a, o) {
        let c;
        if (e.side === Rn ? c = n.intersectTriangle(a, r, i, !0, o) : c = n.intersectTriangle(i, r, a, e.side !== Ir, o),
        c === null)
            return null;
        Go.copy(o),
        Go.applyMatrix4(s.matrixWorld);
        const l = t.ray.origin.distanceTo(Go);
        return l < t.near || l > t.far ? null : {
            distance: l,
            point: Go.clone(),
            object: s
        }
    }
    function Vo(s, e, t, n, i, r, a, o, c, l, u, f) {
        Ei.fromBufferAttribute(i, l),
        Ci.fromBufferAttribute(i, u),
        Ai.fromBufferAttribute(i, f);
        const h = s.morphTargetInfluences;
        if (r && h) {
            zo.set(0, 0, 0),
            Oo.set(0, 0, 0),
            No.set(0, 0, 0);
            for (let g = 0, d = r.length; g < d; g++) {
                const p = h[g]
                  , _ = r[g];
                p !== 0 && (_l.fromBufferAttribute(_, l),
                xl.fromBufferAttribute(_, u),
                vl.fromBufferAttribute(_, f),
                a ? (zo.addScaledVector(_l, p),
                Oo.addScaledVector(xl, p),
                No.addScaledVector(vl, p)) : (zo.addScaledVector(_l.sub(Ei), p),
                Oo.addScaledVector(xl.sub(Ci), p),
                No.addScaledVector(vl.sub(Ai), p)))
            }
            Ei.add(zo),
            Ci.add(Oo),
            Ai.add(No)
        }
        s.isSkinnedMesh && (s.boneTransform(l, Ei),
        s.boneTransform(u, Ci),
        s.boneTransform(f, Ai));
        const m = gm(s, e, t, n, Ei, Ci, Ai, yl);
        if (m) {
            o && (Uo.fromBufferAttribute(o, l),
            ko.fromBufferAttribute(o, u),
            Bo.fromBufferAttribute(o, f),
            m.uv = li.getUV(yl, Ei, Ci, Ai, Uo, ko, Bo, new ke)),
            c && (Uo.fromBufferAttribute(c, l),
            ko.fromBufferAttribute(c, u),
            Bo.fromBufferAttribute(c, f),
            m.uv2 = li.getUV(yl, Ei, Ci, Ai, Uo, ko, Bo, new ke));
            const g = {
                a: l,
                b: u,
                c: f,
                normal: new B,
                materialIndex: 0
            };
            li.getNormal(Ei, Ci, Ai, g.normal),
            m.face = g
        }
        return m
    }
    class Os extends ci {
        constructor(e=1, t=1, n=1, i=1, r=1, a=1) {
            super();
            this.type = "BoxGeometry",
            this.parameters = {
                width: e,
                height: t,
                depth: n,
                widthSegments: i,
                heightSegments: r,
                depthSegments: a
            };
            const o = this;
            i = Math.floor(i),
            r = Math.floor(r),
            a = Math.floor(a);
            const c = []
              , l = []
              , u = []
              , f = [];
            let h = 0
              , m = 0;
            g("z", "y", "x", -1, -1, n, t, e, a, r, 0),
            g("z", "y", "x", 1, -1, n, t, -e, a, r, 1),
            g("x", "z", "y", 1, 1, e, n, t, i, a, 2),
            g("x", "z", "y", 1, -1, e, n, -t, i, a, 3),
            g("x", "y", "z", 1, -1, e, t, n, i, r, 4),
            g("x", "y", "z", -1, -1, e, t, -n, i, r, 5),
            this.setIndex(c),
            this.setAttribute("position", new kn(l,3)),
            this.setAttribute("normal", new kn(u,3)),
            this.setAttribute("uv", new kn(f,2));
            function g(d, p, _, y, M, x, b, S, A, v, w) {
                const L = x / A
                  , F = b / v
                  , V = x / 2
                  , K = b / 2
                  , R = S / 2
                  , U = A + 1
                  , z = v + 1;
                let W = 0
                  , X = 0;
                const G = new B;
                for (let P = 0; P < z; P++) {
                    const ee = P * F - K;
                    for (let te = 0; te < U; te++) {
                        const ie = te * L - V;
                        G[d] = ie * y,
                        G[p] = ee * M,
                        G[_] = R,
                        l.push(G.x, G.y, G.z),
                        G[d] = 0,
                        G[p] = 0,
                        G[_] = S > 0 ? 1 : -1,
                        u.push(G.x, G.y, G.z),
                        f.push(te / A),
                        f.push(1 - P / v),
                        W += 1
                    }
                }
                for (let P = 0; P < v; P++)
                    for (let ee = 0; ee < A; ee++) {
                        const te = h + ee + U * P
                          , ie = h + ee + U * (P + 1)
                          , ce = h + (ee + 1) + U * (P + 1)
                          , Me = h + (ee + 1) + U * P;
                        c.push(te, ie, Me),
                        c.push(ie, ce, Me),
                        X += 6
                    }
                o.addGroup(m, X, w),
                m += X,
                h += W
            }
        }
        static fromJSON(e) {
            return new Os(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)
        }
    }
    function Zr(s) {
        const e = {};
        for (const t in s) {
            e[t] = {};
            for (const n in s[t]) {
                const i = s[t][n];
                i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture || i.isQuaternion) ? e[t][n] = i.clone() : Array.isArray(i) ? e[t][n] = i.slice() : e[t][n] = i
            }
        }
        return e
    }
    function zt(s) {
        const e = {};
        for (let t = 0; t < s.length; t++) {
            const n = Zr(s[t]);
            for (const i in n)
                e[i] = n[i]
        }
        return e
    }
    function _m(s) {
        const e = [];
        for (let t = 0; t < s.length; t++)
            e.push(s[t].clone());
        return e
    }
    const $u = {
        clone: Zr,
        merge: zt
    };
    var xm = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`
      , vm = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
    class Gn extends Io {
        constructor(e) {
            super();
            this.isShaderMaterial = !0,
            this.type = "ShaderMaterial",
            this.defines = {},
            this.uniforms = {},
            this.uniformsGroups = [],
            this.vertexShader = xm,
            this.fragmentShader = vm,
            this.linewidth = 1,
            this.wireframe = !1,
            this.wireframeLinewidth = 1,
            this.fog = !1,
            this.lights = !1,
            this.clipping = !1,
            this.extensions = {
                derivatives: !1,
                fragDepth: !1,
                drawBuffers: !1,
                shaderTextureLOD: !1
            },
            this.defaultAttributeValues = {
                color: [1, 1, 1],
                uv: [0, 0],
                uv2: [0, 0]
            },
            this.index0AttributeName = void 0,
            this.uniformsNeedUpdate = !1,
            this.glslVersion = null,
            e !== void 0 && (e.attributes !== void 0 && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),
            this.setValues(e))
        }
        copy(e) {
            return super.copy(e),
            this.fragmentShader = e.fragmentShader,
            this.vertexShader = e.vertexShader,
            this.uniforms = Zr(e.uniforms),
            this.uniformsGroups = _m(e.uniformsGroups),
            this.defines = Object.assign({}, e.defines),
            this.wireframe = e.wireframe,
            this.wireframeLinewidth = e.wireframeLinewidth,
            this.fog = e.fog,
            this.lights = e.lights,
            this.clipping = e.clipping,
            this.extensions = Object.assign({}, e.extensions),
            this.glslVersion = e.glslVersion,
            this
        }
        toJSON(e) {
            const t = super.toJSON(e);
            t.glslVersion = this.glslVersion,
            t.uniforms = {};
            for (const i in this.uniforms) {
                const a = this.uniforms[i].value;
                a && a.isTexture ? t.uniforms[i] = {
                    type: "t",
                    value: a.toJSON(e).uuid
                } : a && a.isColor ? t.uniforms[i] = {
                    type: "c",
                    value: a.getHex()
                } : a && a.isVector2 ? t.uniforms[i] = {
                    type: "v2",
                    value: a.toArray()
                } : a && a.isVector3 ? t.uniforms[i] = {
                    type: "v3",
                    value: a.toArray()
                } : a && a.isVector4 ? t.uniforms[i] = {
                    type: "v4",
                    value: a.toArray()
                } : a && a.isMatrix3 ? t.uniforms[i] = {
                    type: "m3",
                    value: a.toArray()
                } : a && a.isMatrix4 ? t.uniforms[i] = {
                    type: "m4",
                    value: a.toArray()
                } : t.uniforms[i] = {
                    value: a
                }
            }
            Object.keys(this.defines).length > 0 && (t.defines = this.defines),
            t.vertexShader = this.vertexShader,
            t.fragmentShader = this.fragmentShader;
            const n = {};
            for (const i in this.extensions)
                this.extensions[i] === !0 && (n[i] = !0);
            return Object.keys(n).length > 0 && (t.extensions = n),
            t
        }
    }
    class ju extends Nn {
        constructor() {
            super();
            this.isCamera = !0,
            this.type = "Camera",
            this.matrixWorldInverse = new Dt,
            this.projectionMatrix = new Dt,
            this.projectionMatrixInverse = new Dt
        }
        copy(e, t) {
            return super.copy(e, t),
            this.matrixWorldInverse.copy(e.matrixWorldInverse),
            this.projectionMatrix.copy(e.projectionMatrix),
            this.projectionMatrixInverse.copy(e.projectionMatrixInverse),
            this
        }
        getWorldDirection(e) {
            this.updateWorldMatrix(!0, !1);
            const t = this.matrixWorld.elements;
            return e.set(-t[8], -t[9], -t[10]).normalize()
        }
        updateMatrixWorld(e) {
            super.updateMatrixWorld(e),
            this.matrixWorldInverse.copy(this.matrixWorld).invert()
        }
        updateWorldMatrix(e, t) {
            super.updateWorldMatrix(e, t),
            this.matrixWorldInverse.copy(this.matrixWorld).invert()
        }
        clone() {
            return new this.constructor().copy(this)
        }
    }
    class xn extends ju {
        constructor(e=50, t=1, n=.1, i=2e3) {
            super();
            this.isPerspectiveCamera = !0,
            this.type = "PerspectiveCamera",
            this.fov = e,
            this.zoom = 1,
            this.near = n,
            this.far = i,
            this.focus = 10,
            this.aspect = t,
            this.view = null,
            this.filmGauge = 35,
            this.filmOffset = 0,
            this.updateProjectionMatrix()
        }
        copy(e, t) {
            return super.copy(e, t),
            this.fov = e.fov,
            this.zoom = e.zoom,
            this.near = e.near,
            this.far = e.far,
            this.focus = e.focus,
            this.aspect = e.aspect,
            this.view = e.view === null ? null : Object.assign({}, e.view),
            this.filmGauge = e.filmGauge,
            this.filmOffset = e.filmOffset,
            this
        }
        setFocalLength(e) {
            const t = .5 * this.getFilmHeight() / e;
            this.fov = Eu * 2 * Math.atan(t),
            this.updateProjectionMatrix()
        }
        getFocalLength() {
            const e = Math.tan(Za * .5 * this.fov);
            return .5 * this.getFilmHeight() / e
        }
        getEffectiveFOV() {
            return Eu * 2 * Math.atan(Math.tan(Za * .5 * this.fov) / this.zoom)
        }
        getFilmWidth() {
            return this.filmGauge * Math.min(this.aspect, 1)
        }
        getFilmHeight() {
            return this.filmGauge / Math.max(this.aspect, 1)
        }
        setViewOffset(e, t, n, i, r, a) {
            this.aspect = e / t,
            this.view === null && (this.view = {
                enabled: !0,
                fullWidth: 1,
                fullHeight: 1,
                offsetX: 0,
                offsetY: 0,
                width: 1,
                height: 1
            }),
            this.view.enabled = !0,
            this.view.fullWidth = e,
            this.view.fullHeight = t,
            this.view.offsetX = n,
            this.view.offsetY = i,
            this.view.width = r,
            this.view.height = a,
            this.updateProjectionMatrix()
        }
        clearViewOffset() {
            this.view !== null && (this.view.enabled = !1),
            this.updateProjectionMatrix()
        }
        updateProjectionMatrix() {
            const e = this.near;
            let t = e * Math.tan(Za * .5 * this.fov) / this.zoom
              , n = 2 * t
              , i = this.aspect * n
              , r = -.5 * i;
            const a = this.view;
            if (this.view !== null && this.view.enabled) {
                const c = a.fullWidth
                  , l = a.fullHeight;
                r += a.offsetX * i / c,
                t -= a.offsetY * n / l,
                i *= a.width / c,
                n *= a.height / l
            }
            const o = this.filmOffset;
            o !== 0 && (r += e * o / this.getFilmWidth()),
            this.projectionMatrix.makePerspective(r, r + i, t, t - n, e, this.far),
            this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
        }
        toJSON(e) {
            const t = super.toJSON(e);
            return t.object.fov = this.fov,
            t.object.zoom = this.zoom,
            t.object.near = this.near,
            t.object.far = this.far,
            t.object.focus = this.focus,
            t.object.aspect = this.aspect,
            this.view !== null && (t.object.view = Object.assign({}, this.view)),
            t.object.filmGauge = this.filmGauge,
            t.object.filmOffset = this.filmOffset,
            t
        }
    }
    const Kr = 90
      , Jr = 1;
    class ym extends Nn {
        constructor(e, t, n) {
            super();
            if (this.type = "CubeCamera",
            n.isWebGLCubeRenderTarget !== !0) {
                console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");
                return
            }
            this.renderTarget = n;
            const i = new xn(Kr,Jr,e,t);
            i.layers = this.layers,
            i.up.set(0, -1, 0),
            i.lookAt(new B(1,0,0)),
            this.add(i);
            const r = new xn(Kr,Jr,e,t);
            r.layers = this.layers,
            r.up.set(0, -1, 0),
            r.lookAt(new B(-1,0,0)),
            this.add(r);
            const a = new xn(Kr,Jr,e,t);
            a.layers = this.layers,
            a.up.set(0, 0, 1),
            a.lookAt(new B(0,1,0)),
            this.add(a);
            const o = new xn(Kr,Jr,e,t);
            o.layers = this.layers,
            o.up.set(0, 0, -1),
            o.lookAt(new B(0,-1,0)),
            this.add(o);
            const c = new xn(Kr,Jr,e,t);
            c.layers = this.layers,
            c.up.set(0, -1, 0),
            c.lookAt(new B(0,0,1)),
            this.add(c);
            const l = new xn(Kr,Jr,e,t);
            l.layers = this.layers,
            l.up.set(0, -1, 0),
            l.lookAt(new B(0,0,-1)),
            this.add(l)
        }
        update(e, t) {
            this.parent === null && this.updateMatrixWorld();
            const n = this.renderTarget
              , [i,r,a,o,c,l] = this.children
              , u = e.getRenderTarget()
              , f = e.toneMapping
              , h = e.xr.enabled;
            e.toneMapping = ti,
            e.xr.enabled = !1;
            const m = n.texture.generateMipmaps;
            n.texture.generateMipmaps = !1,
            e.setRenderTarget(n, 0),
            e.render(t, i),
            e.setRenderTarget(n, 1),
            e.render(t, r),
            e.setRenderTarget(n, 2),
            e.render(t, a),
            e.setRenderTarget(n, 3),
            e.render(t, o),
            e.setRenderTarget(n, 4),
            e.render(t, c),
            n.texture.generateMipmaps = m,
            e.setRenderTarget(n, 5),
            e.render(t, l),
            e.setRenderTarget(u),
            e.toneMapping = f,
            e.xr.enabled = h,
            n.texture.needsPMREMUpdate = !0
        }
    }
    class Zu extends on {
        constructor(e, t, n, i, r, a, o, c, l, u) {
            e = e !== void 0 ? e : [],
            t = t !== void 0 ? t : Or;
            super(e, t, n, i, r, a, o, c, l, u);
            this.isCubeTexture = !0,
            this.flipY = !1
        }
        get images() {
            return this.image
        }
        set images(e) {
            this.image = e
        }
    }
    class bm extends bi {
        constructor(e, t={}) {
            super(e, e, t);
            this.isWebGLCubeRenderTarget = !0;
            const n = {
                width: e,
                height: e,
                depth: 1
            }
              , i = [n, n, n, n, n, n];
            this.texture = new Zu(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),
            this.texture.isRenderTargetTexture = !0,
            this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : !1,
            this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : mn
        }
        fromEquirectangularTexture(e, t) {
            this.texture.type = t.type,
            this.texture.encoding = t.encoding,
            this.texture.generateMipmaps = t.generateMipmaps,
            this.texture.minFilter = t.minFilter,
            this.texture.magFilter = t.magFilter;
            const n = {
                uniforms: {
                    tEquirect: {
                        value: null
                    }
                },
                vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
                fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
            }
              , i = new Os(5,5,5)
              , r = new Gn({
                name: "CubemapFromEquirect",
                uniforms: Zr(n.uniforms),
                vertexShader: n.vertexShader,
                fragmentShader: n.fragmentShader,
                side: Rn,
                blending: yi
            });
            r.uniforms.tEquirect.value = t;
            const a = new Bn(i,r)
              , o = t.minFilter;
            return t.minFilter === Mo && (t.minFilter = mn),
            new ym(1,10,this).update(e, a),
            t.minFilter = o,
            a.geometry.dispose(),
            a.material.dispose(),
            this
        }
        clear(e, t, n, i) {
            const r = e.getRenderTarget();
            for (let a = 0; a < 6; a++)
                e.setRenderTarget(this, a),
                e.clear(t, n, i);
            e.setRenderTarget(r)
        }
    }
    const bl = new B
      , Mm = new B
      , Sm = new gn;
    class rr {
        constructor(e=new B(1,0,0), t=0) {
            this.isPlane = !0,
            this.normal = e,
            this.constant = t
        }
        set(e, t) {
            return this.normal.copy(e),
            this.constant = t,
            this
        }
        setComponents(e, t, n, i) {
            return this.normal.set(e, t, n),
            this.constant = i,
            this
        }
        setFromNormalAndCoplanarPoint(e, t) {
            return this.normal.copy(e),
            this.constant = -t.dot(this.normal),
            this
        }
        setFromCoplanarPoints(e, t, n) {
            const i = bl.subVectors(n, t).cross(Mm.subVectors(e, t)).normalize();
            return this.setFromNormalAndCoplanarPoint(i, e),
            this
        }
        copy(e) {
            return this.normal.copy(e.normal),
            this.constant = e.constant,
            this
        }
        normalize() {
            const e = 1 / this.normal.length();
            return this.normal.multiplyScalar(e),
            this.constant *= e,
            this
        }
        negate() {
            return this.constant *= -1,
            this.normal.negate(),
            this
        }
        distanceToPoint(e) {
            return this.normal.dot(e) + this.constant
        }
        distanceToSphere(e) {
            return this.distanceToPoint(e.center) - e.radius
        }
        projectPoint(e, t) {
            return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)
        }
        intersectLine(e, t) {
            const n = e.delta(bl)
              , i = this.normal.dot(n);
            if (i === 0)
                return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
            const r = -(e.start.dot(this.normal) + this.constant) / i;
            return r < 0 || r > 1 ? null : t.copy(n).multiplyScalar(r).add(e.start)
        }
        intersectsLine(e) {
            const t = this.distanceToPoint(e.start)
              , n = this.distanceToPoint(e.end);
            return t < 0 && n > 0 || n < 0 && t > 0
        }
        intersectsBox(e) {
            return e.intersectsPlane(this)
        }
        intersectsSphere(e) {
            return e.intersectsPlane(this)
        }
        coplanarPoint(e) {
            return e.copy(this.normal).multiplyScalar(-this.constant)
        }
        applyMatrix4(e, t) {
            const n = t || Sm.getNormalMatrix(e)
              , i = this.coplanarPoint(bl).applyMatrix4(e)
              , r = this.normal.applyMatrix3(n).normalize();
            return this.constant = -i.dot(r),
            this
        }
        translate(e) {
            return this.constant -= e.dot(this.normal),
            this
        }
        equals(e) {
            return e.normal.equals(this.normal) && e.constant === this.constant
        }
        clone() {
            return new this.constructor().copy(this)
        }
    }
    const Qr = new ol
      , Ho = new B;
    class Ku {
        constructor(e=new rr, t=new rr, n=new rr, i=new rr, r=new rr, a=new rr) {
            this.planes = [e, t, n, i, r, a]
        }
        set(e, t, n, i, r, a) {
            const o = this.planes;
            return o[0].copy(e),
            o[1].copy(t),
            o[2].copy(n),
            o[3].copy(i),
            o[4].copy(r),
            o[5].copy(a),
            this
        }
        copy(e) {
            const t = this.planes;
            for (let n = 0; n < 6; n++)
                t[n].copy(e.planes[n]);
            return this
        }
        setFromProjectionMatrix(e) {
            const t = this.planes
              , n = e.elements
              , i = n[0]
              , r = n[1]
              , a = n[2]
              , o = n[3]
              , c = n[4]
              , l = n[5]
              , u = n[6]
              , f = n[7]
              , h = n[8]
              , m = n[9]
              , g = n[10]
              , d = n[11]
              , p = n[12]
              , _ = n[13]
              , y = n[14]
              , M = n[15];
            return t[0].setComponents(o - i, f - c, d - h, M - p).normalize(),
            t[1].setComponents(o + i, f + c, d + h, M + p).normalize(),
            t[2].setComponents(o + r, f + l, d + m, M + _).normalize(),
            t[3].setComponents(o - r, f - l, d - m, M - _).normalize(),
            t[4].setComponents(o - a, f - u, d - g, M - y).normalize(),
            t[5].setComponents(o + a, f + u, d + g, M + y).normalize(),
            this
        }
        intersectsObject(e) {
            const t = e.geometry;
            return t.boundingSphere === null && t.computeBoundingSphere(),
            Qr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),
            this.intersectsSphere(Qr)
        }
        intersectsSprite(e) {
            return Qr.center.set(0, 0, 0),
            Qr.radius = .7071067811865476,
            Qr.applyMatrix4(e.matrixWorld),
            this.intersectsSphere(Qr)
        }
        intersectsSphere(e) {
            const t = this.planes
              , n = e.center
              , i = -e.radius;
            for (let r = 0; r < 6; r++)
                if (t[r].distanceToPoint(n) < i)
                    return !1;
            return !0
        }
        intersectsBox(e) {
            const t = this.planes;
            for (let n = 0; n < 6; n++) {
                const i = t[n];
                if (Ho.x = i.normal.x > 0 ? e.max.x : e.min.x,
                Ho.y = i.normal.y > 0 ? e.max.y : e.min.y,
                Ho.z = i.normal.z > 0 ? e.max.z : e.min.z,
                i.distanceToPoint(Ho) < 0)
                    return !1
            }
            return !0
        }
        containsPoint(e) {
            const t = this.planes;
            for (let n = 0; n < 6; n++)
                if (t[n].distanceToPoint(e) < 0)
                    return !1;
            return !0
        }
        clone() {
            return new this.constructor().copy(this)
        }
    }
    function Ju() {
        let s = null
          , e = !1
          , t = null
          , n = null;
        function i(r, a) {
            t(r, a),
            n = s.requestAnimationFrame(i)
        }
        return {
            start: function() {
                e !== !0 && t !== null && (n = s.requestAnimationFrame(i),
                e = !0)
            },
            stop: function() {
                s.cancelAnimationFrame(n),
                e = !1
            },
            setAnimationLoop: function(r) {
                t = r
            },
            setContext: function(r) {
                s = r
            }
        }
    }
    function wm(s, e) {
        const t = e.isWebGL2
          , n = new WeakMap;
        function i(l, u) {
            const f = l.array
              , h = l.usage
              , m = s.createBuffer();
            s.bindBuffer(u, m),
            s.bufferData(u, f, h),
            l.onUploadCallback();
            let g;
            if (f instanceof Float32Array)
                g = 5126;
            else if (f instanceof Uint16Array)
                if (l.isFloat16BufferAttribute)
                    if (t)
                        g = 5131;
                    else
                        throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");
                else
                    g = 5123;
            else if (f instanceof Int16Array)
                g = 5122;
            else if (f instanceof Uint32Array)
                g = 5125;
            else if (f instanceof Int32Array)
                g = 5124;
            else if (f instanceof Int8Array)
                g = 5120;
            else if (f instanceof Uint8Array)
                g = 5121;
            else if (f instanceof Uint8ClampedArray)
                g = 5121;
            else
                throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + f);
            return {
                buffer: m,
                type: g,
                bytesPerElement: f.BYTES_PER_ELEMENT,
                version: l.version
            }
        }
        function r(l, u, f) {
            const h = u.array
              , m = u.updateRange;
            s.bindBuffer(f, l),
            m.count === -1 ? s.bufferSubData(f, 0, h) : (t ? s.bufferSubData(f, m.offset * h.BYTES_PER_ELEMENT, h, m.offset, m.count) : s.bufferSubData(f, m.offset * h.BYTES_PER_ELEMENT, h.subarray(m.offset, m.offset + m.count)),
            m.count = -1)
        }
        function a(l) {
            return l.isInterleavedBufferAttribute && (l = l.data),
            n.get(l)
        }
        function o(l) {
            l.isInterleavedBufferAttribute && (l = l.data);
            const u = n.get(l);
            u && (s.deleteBuffer(u.buffer),
            n.delete(l))
        }
        function c(l, u) {
            if (l.isGLBufferAttribute) {
                const h = n.get(l);
                (!h || h.version < l.version) && n.set(l, {
                    buffer: l.buffer,
                    type: l.type,
                    bytesPerElement: l.elementSize,
                    version: l.version
                });
                return
            }
            l.isInterleavedBufferAttribute && (l = l.data);
            const f = n.get(l);
            f === void 0 ? n.set(l, i(l, u)) : f.version < l.version && (r(f.buffer, l, u),
            f.version = l.version)
        }
        return {
            get: a,
            remove: o,
            update: c
        }
    }
    class Ns extends ci {
        constructor(e=1, t=1, n=1, i=1) {
            super();
            this.type = "PlaneGeometry",
            this.parameters = {
                width: e,
                height: t,
                widthSegments: n,
                heightSegments: i
            };
            const r = e / 2
              , a = t / 2
              , o = Math.floor(n)
              , c = Math.floor(i)
              , l = o + 1
              , u = c + 1
              , f = e / o
              , h = t / c
              , m = []
              , g = []
              , d = []
              , p = [];
            for (let _ = 0; _ < u; _++) {
                const y = _ * h - a;
                for (let M = 0; M < l; M++) {
                    const x = M * f - r;
                    g.push(x, -y, 0),
                    d.push(0, 0, 1),
                    p.push(M / o),
                    p.push(1 - _ / c)
                }
            }
            for (let _ = 0; _ < c; _++)
                for (let y = 0; y < o; y++) {
                    const M = y + l * _
                      , x = y + l * (_ + 1)
                      , b = y + 1 + l * (_ + 1)
                      , S = y + 1 + l * _;
                    m.push(M, x, S),
                    m.push(x, b, S)
                }
            this.setIndex(m),
            this.setAttribute("position", new kn(g,3)),
            this.setAttribute("normal", new kn(d,3)),
            this.setAttribute("uv", new kn(p,2))
        }
        static fromJSON(e) {
            return new Ns(e.width,e.height,e.widthSegments,e.heightSegments)
        }
    }
    var Tm = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`
      , Em = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`
      , Cm = `#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`
      , Am = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`
      , Pm = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`
      , Dm = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`
      , Lm = "vec3 transformed = vec3( position );"
      , Rm = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`
      , Im = `vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`
      , Fm = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`
      , zm = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`
      , Om = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`
      , Nm = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`
      , Um = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`
      , km = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`
      , Bm = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`
      , Gm = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`
      , Vm = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`
      , Hm = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`
      , Wm = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`
      , Xm = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`
      , qm = `vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`
      , Ym = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`
      , $m = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`
      , jm = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`
      , Zm = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`
      , Km = "gl_FragColor = linearToOutputTexel( gl_FragColor );"
      , Jm = `vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`
      , Qm = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`
      , eg = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`
      , tg = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`
      , ng = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`
      , ig = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`
      , rg = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`
      , sg = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`
      , og = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`
      , ag = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`
      , lg = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`
      , cg = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`
      , ug = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`
      , fg = `vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`
      , hg = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`
      , dg = `#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`
      , pg = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`
      , mg = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`
      , gg = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`
      , _g = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`
      , xg = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`
      , vg = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`
      , yg = `
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`
      , bg = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`
      , Mg = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`
      , Sg = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`
      , wg = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`
      , Tg = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`
      , Eg = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`
      , Cg = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`
      , Ag = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`
      , Pg = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`
      , Dg = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`
      , Lg = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`
      , Rg = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`
      , Ig = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`
      , Fg = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`
      , zg = `#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`
      , Og = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`
      , Ng = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`
      , Ug = `#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`
      , kg = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`
      , Bg = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`
      , Gg = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`
      , Vg = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`
      , Hg = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`
      , Wg = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`
      , Xg = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`
      , qg = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`
      , Yg = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`
      , $g = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`
      , jg = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`
      , Zg = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`
      , Kg = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`
      , Jg = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`
      , Qg = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`
      , e_ = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`
      , t_ = `#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`
      , n_ = `#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`
      , i_ = `#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`
      , r_ = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`
      , s_ = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`
      , o_ = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`
      , a_ = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`
      , l_ = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`
      , c_ = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`
      , u_ = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`
      , f_ = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`
      , h_ = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`
      , d_ = `#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`
      , p_ = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`
      , m_ = `#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`
      , g_ = `#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`
      , __ = `#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`
      , x_ = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`
      , v_ = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`
      , y_ = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`
      , b_ = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
    const Ge = {
        alphamap_fragment: Tm,
        alphamap_pars_fragment: Em,
        alphatest_fragment: Cm,
        alphatest_pars_fragment: Am,
        aomap_fragment: Pm,
        aomap_pars_fragment: Dm,
        begin_vertex: Lm,
        beginnormal_vertex: Rm,
        bsdfs: Im,
        iridescence_fragment: Fm,
        bumpmap_pars_fragment: zm,
        clipping_planes_fragment: Om,
        clipping_planes_pars_fragment: Nm,
        clipping_planes_pars_vertex: Um,
        clipping_planes_vertex: km,
        color_fragment: Bm,
        color_pars_fragment: Gm,
        color_pars_vertex: Vm,
        color_vertex: Hm,
        common: Wm,
        cube_uv_reflection_fragment: Xm,
        defaultnormal_vertex: qm,
        displacementmap_pars_vertex: Ym,
        displacementmap_vertex: $m,
        emissivemap_fragment: jm,
        emissivemap_pars_fragment: Zm,
        encodings_fragment: Km,
        encodings_pars_fragment: Jm,
        envmap_fragment: Qm,
        envmap_common_pars_fragment: eg,
        envmap_pars_fragment: tg,
        envmap_pars_vertex: ng,
        envmap_physical_pars_fragment: dg,
        envmap_vertex: ig,
        fog_vertex: rg,
        fog_pars_vertex: sg,
        fog_fragment: og,
        fog_pars_fragment: ag,
        gradientmap_pars_fragment: lg,
        lightmap_fragment: cg,
        lightmap_pars_fragment: ug,
        lights_lambert_vertex: fg,
        lights_pars_begin: hg,
        lights_toon_fragment: pg,
        lights_toon_pars_fragment: mg,
        lights_phong_fragment: gg,
        lights_phong_pars_fragment: _g,
        lights_physical_fragment: xg,
        lights_physical_pars_fragment: vg,
        lights_fragment_begin: yg,
        lights_fragment_maps: bg,
        lights_fragment_end: Mg,
        logdepthbuf_fragment: Sg,
        logdepthbuf_pars_fragment: wg,
        logdepthbuf_pars_vertex: Tg,
        logdepthbuf_vertex: Eg,
        map_fragment: Cg,
        map_pars_fragment: Ag,
        map_particle_fragment: Pg,
        map_particle_pars_fragment: Dg,
        metalnessmap_fragment: Lg,
        metalnessmap_pars_fragment: Rg,
        morphcolor_vertex: Ig,
        morphnormal_vertex: Fg,
        morphtarget_pars_vertex: zg,
        morphtarget_vertex: Og,
        normal_fragment_begin: Ng,
        normal_fragment_maps: Ug,
        normal_pars_fragment: kg,
        normal_pars_vertex: Bg,
        normal_vertex: Gg,
        normalmap_pars_fragment: Vg,
        clearcoat_normal_fragment_begin: Hg,
        clearcoat_normal_fragment_maps: Wg,
        clearcoat_pars_fragment: Xg,
        iridescence_pars_fragment: qg,
        output_fragment: Yg,
        packing: $g,
        premultiplied_alpha_fragment: jg,
        project_vertex: Zg,
        dithering_fragment: Kg,
        dithering_pars_fragment: Jg,
        roughnessmap_fragment: Qg,
        roughnessmap_pars_fragment: e_,
        shadowmap_pars_fragment: t_,
        shadowmap_pars_vertex: n_,
        shadowmap_vertex: i_,
        shadowmask_pars_fragment: r_,
        skinbase_vertex: s_,
        skinning_pars_vertex: o_,
        skinning_vertex: a_,
        skinnormal_vertex: l_,
        specularmap_fragment: c_,
        specularmap_pars_fragment: u_,
        tonemapping_fragment: f_,
        tonemapping_pars_fragment: h_,
        transmission_fragment: d_,
        transmission_pars_fragment: p_,
        uv_pars_fragment: m_,
        uv_pars_vertex: g_,
        uv_vertex: __,
        uv2_pars_fragment: x_,
        uv2_pars_vertex: v_,
        uv2_vertex: y_,
        worldpos_vertex: b_,
        background_vert: `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,
        background_frag: `uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
        cube_vert: `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
        cube_frag: `#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
        depth_vert: `#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,
        depth_frag: `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,
        distanceRGBA_vert: `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,
        distanceRGBA_frag: `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,
        equirect_vert: `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,
        equirect_frag: `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
        linedashed_vert: `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
        linedashed_frag: `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
        meshbasic_vert: `#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,
        meshbasic_frag: `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
        meshlambert_vert: `#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
        meshlambert_frag: `uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
        meshmatcap_vert: `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,
        meshmatcap_frag: `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
        meshnormal_vert: `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,
        meshnormal_frag: `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,
        meshphong_vert: `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
        meshphong_frag: `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
        meshphysical_vert: `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,
        meshphysical_frag: `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
        meshtoon_vert: `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
        meshtoon_frag: `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
        points_vert: `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,
        points_frag: `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
        shadow_vert: `#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
        shadow_frag: `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,
        sprite_vert: `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
        sprite_frag: `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`
    }
      , pe = {
        common: {
            diffuse: {
                value: new rt(16777215)
            },
            opacity: {
                value: 1
            },
            map: {
                value: null
            },
            uvTransform: {
                value: new gn
            },
            uv2Transform: {
                value: new gn
            },
            alphaMap: {
                value: null
            },
            alphaTest: {
                value: 0
            }
        },
        specularmap: {
            specularMap: {
                value: null
            }
        },
        envmap: {
            envMap: {
                value: null
            },
            flipEnvMap: {
                value: -1
            },
            reflectivity: {
                value: 1
            },
            ior: {
                value: 1.5
            },
            refractionRatio: {
                value: .98
            }
        },
        aomap: {
            aoMap: {
                value: null
            },
            aoMapIntensity: {
                value: 1
            }
        },
        lightmap: {
            lightMap: {
                value: null
            },
            lightMapIntensity: {
                value: 1
            }
        },
        emissivemap: {
            emissiveMap: {
                value: null
            }
        },
        bumpmap: {
            bumpMap: {
                value: null
            },
            bumpScale: {
                value: 1
            }
        },
        normalmap: {
            normalMap: {
                value: null
            },
            normalScale: {
                value: new ke(1,1)
            }
        },
        displacementmap: {
            displacementMap: {
                value: null
            },
            displacementScale: {
                value: 1
            },
            displacementBias: {
                value: 0
            }
        },
        roughnessmap: {
            roughnessMap: {
                value: null
            }
        },
        metalnessmap: {
            metalnessMap: {
                value: null
            }
        },
        gradientmap: {
            gradientMap: {
                value: null
            }
        },
        fog: {
            fogDensity: {
                value: 25e-5
            },
            fogNear: {
                value: 1
            },
            fogFar: {
                value: 2e3
            },
            fogColor: {
                value: new rt(16777215)
            }
        },
        lights: {
            ambientLightColor: {
                value: []
            },
            lightProbe: {
                value: []
            },
            directionalLights: {
                value: [],
                properties: {
                    direction: {},
                    color: {}
                }
            },
            directionalLightShadows: {
                value: [],
                properties: {
                    shadowBias: {},
                    shadowNormalBias: {},
                    shadowRadius: {},
                    shadowMapSize: {}
                }
            },
            directionalShadowMap: {
                value: []
            },
            directionalShadowMatrix: {
                value: []
            },
            spotLights: {
                value: [],
                properties: {
                    color: {},
                    position: {},
                    direction: {},
                    distance: {},
                    coneCos: {},
                    penumbraCos: {},
                    decay: {}
                }
            },
            spotLightShadows: {
                value: [],
                properties: {
                    shadowBias: {},
                    shadowNormalBias: {},
                    shadowRadius: {},
                    shadowMapSize: {}
                }
            },
            spotShadowMap: {
                value: []
            },
            spotShadowMatrix: {
                value: []
            },
            pointLights: {
                value: [],
                properties: {
                    color: {},
                    position: {},
                    decay: {},
                    distance: {}
                }
            },
            pointLightShadows: {
                value: [],
                properties: {
                    shadowBias: {},
                    shadowNormalBias: {},
                    shadowRadius: {},
                    shadowMapSize: {},
                    shadowCameraNear: {},
                    shadowCameraFar: {}
                }
            },
            pointShadowMap: {
                value: []
            },
            pointShadowMatrix: {
                value: []
            },
            hemisphereLights: {
                value: [],
                properties: {
                    direction: {},
                    skyColor: {},
                    groundColor: {}
                }
            },
            rectAreaLights: {
                value: [],
                properties: {
                    color: {},
                    position: {},
                    width: {},
                    height: {}
                }
            },
            ltc_1: {
                value: null
            },
            ltc_2: {
                value: null
            }
        },
        points: {
            diffuse: {
                value: new rt(16777215)
            },
            opacity: {
                value: 1
            },
            size: {
                value: 1
            },
            scale: {
                value: 1
            },
            map: {
                value: null
            },
            alphaMap: {
                value: null
            },
            alphaTest: {
                value: 0
            },
            uvTransform: {
                value: new gn
            }
        },
        sprite: {
            diffuse: {
                value: new rt(16777215)
            },
            opacity: {
                value: 1
            },
            center: {
                value: new ke(.5,.5)
            },
            rotation: {
                value: 0
            },
            map: {
                value: null
            },
            alphaMap: {
                value: null
            },
            alphaTest: {
                value: 0
            },
            uvTransform: {
                value: new gn
            }
        }
    }
      , $n = {
        basic: {
            uniforms: zt([pe.common, pe.specularmap, pe.envmap, pe.aomap, pe.lightmap, pe.fog]),
            vertexShader: Ge.meshbasic_vert,
            fragmentShader: Ge.meshbasic_frag
        },
        lambert: {
            uniforms: zt([pe.common, pe.specularmap, pe.envmap, pe.aomap, pe.lightmap, pe.emissivemap, pe.fog, pe.lights, {
                emissive: {
                    value: new rt(0)
                }
            }]),
            vertexShader: Ge.meshlambert_vert,
            fragmentShader: Ge.meshlambert_frag
        },
        phong: {
            uniforms: zt([pe.common, pe.specularmap, pe.envmap, pe.aomap, pe.lightmap, pe.emissivemap, pe.bumpmap, pe.normalmap, pe.displacementmap, pe.fog, pe.lights, {
                emissive: {
                    value: new rt(0)
                },
                specular: {
                    value: new rt(1118481)
                },
                shininess: {
                    value: 30
                }
            }]),
            vertexShader: Ge.meshphong_vert,
            fragmentShader: Ge.meshphong_frag
        },
        standard: {
            uniforms: zt([pe.common, pe.envmap, pe.aomap, pe.lightmap, pe.emissivemap, pe.bumpmap, pe.normalmap, pe.displacementmap, pe.roughnessmap, pe.metalnessmap, pe.fog, pe.lights, {
                emissive: {
                    value: new rt(0)
                },
                roughness: {
                    value: 1
                },
                metalness: {
                    value: 0
                },
                envMapIntensity: {
                    value: 1
                }
            }]),
            vertexShader: Ge.meshphysical_vert,
            fragmentShader: Ge.meshphysical_frag
        },
        toon: {
            uniforms: zt([pe.common, pe.aomap, pe.lightmap, pe.emissivemap, pe.bumpmap, pe.normalmap, pe.displacementmap, pe.gradientmap, pe.fog, pe.lights, {
                emissive: {
                    value: new rt(0)
                }
            }]),
            vertexShader: Ge.meshtoon_vert,
            fragmentShader: Ge.meshtoon_frag
        },
        matcap: {
            uniforms: zt([pe.common, pe.bumpmap, pe.normalmap, pe.displacementmap, pe.fog, {
                matcap: {
                    value: null
                }
            }]),
            vertexShader: Ge.meshmatcap_vert,
            fragmentShader: Ge.meshmatcap_frag
        },
        points: {
            uniforms: zt([pe.points, pe.fog]),
            vertexShader: Ge.points_vert,
            fragmentShader: Ge.points_frag
        },
        dashed: {
            uniforms: zt([pe.common, pe.fog, {
                scale: {
                    value: 1
                },
                dashSize: {
                    value: 1
                },
                totalSize: {
                    value: 2
                }
            }]),
            vertexShader: Ge.linedashed_vert,
            fragmentShader: Ge.linedashed_frag
        },
        depth: {
            uniforms: zt([pe.common, pe.displacementmap]),
            vertexShader: Ge.depth_vert,
            fragmentShader: Ge.depth_frag
        },
        normal: {
            uniforms: zt([pe.common, pe.bumpmap, pe.normalmap, pe.displacementmap, {
                opacity: {
                    value: 1
                }
            }]),
            vertexShader: Ge.meshnormal_vert,
            fragmentShader: Ge.meshnormal_frag
        },
        sprite: {
            uniforms: zt([pe.sprite, pe.fog]),
            vertexShader: Ge.sprite_vert,
            fragmentShader: Ge.sprite_frag
        },
        background: {
            uniforms: {
                uvTransform: {
                    value: new gn
                },
                t2D: {
                    value: null
                }
            },
            vertexShader: Ge.background_vert,
            fragmentShader: Ge.background_frag
        },
        cube: {
            uniforms: zt([pe.envmap, {
                opacity: {
                    value: 1
                }
            }]),
            vertexShader: Ge.cube_vert,
            fragmentShader: Ge.cube_frag
        },
        equirect: {
            uniforms: {
                tEquirect: {
                    value: null
                }
            },
            vertexShader: Ge.equirect_vert,
            fragmentShader: Ge.equirect_frag
        },
        distanceRGBA: {
            uniforms: zt([pe.common, pe.displacementmap, {
                referencePosition: {
                    value: new B
                },
                nearDistance: {
                    value: 1
                },
                farDistance: {
                    value: 1e3
                }
            }]),
            vertexShader: Ge.distanceRGBA_vert,
            fragmentShader: Ge.distanceRGBA_frag
        },
        shadow: {
            uniforms: zt([pe.lights, pe.fog, {
                color: {
                    value: new rt(0)
                },
                opacity: {
                    value: 1
                }
            }]),
            vertexShader: Ge.shadow_vert,
            fragmentShader: Ge.shadow_frag
        }
    };
    $n.physical = {
        uniforms: zt([$n.standard.uniforms, {
            clearcoat: {
                value: 0
            },
            clearcoatMap: {
                value: null
            },
            clearcoatRoughness: {
                value: 0
            },
            clearcoatRoughnessMap: {
                value: null
            },
            clearcoatNormalScale: {
                value: new ke(1,1)
            },
            clearcoatNormalMap: {
                value: null
            },
            iridescence: {
                value: 0
            },
            iridescenceMap: {
                value: null
            },
            iridescenceIOR: {
                value: 1.3
            },
            iridescenceThicknessMinimum: {
                value: 100
            },
            iridescenceThicknessMaximum: {
                value: 400
            },
            iridescenceThicknessMap: {
                value: null
            },
            sheen: {
                value: 0
            },
            sheenColor: {
                value: new rt(0)
            },
            sheenColorMap: {
                value: null
            },
            sheenRoughness: {
                value: 1
            },
            sheenRoughnessMap: {
                value: null
            },
            transmission: {
                value: 0
            },
            transmissionMap: {
                value: null
            },
            transmissionSamplerSize: {
                value: new ke
            },
            transmissionSamplerMap: {
                value: null
            },
            thickness: {
                value: 0
            },
            thicknessMap: {
                value: null
            },
            attenuationDistance: {
                value: 0
            },
            attenuationColor: {
                value: new rt(0)
            },
            specularIntensity: {
                value: 1
            },
            specularIntensityMap: {
                value: null
            },
            specularColor: {
                value: new rt(1,1,1)
            },
            specularColorMap: {
                value: null
            }
        }]),
        vertexShader: Ge.meshphysical_vert,
        fragmentShader: Ge.meshphysical_frag
    };
    function M_(s, e, t, n, i, r) {
        const a = new rt(0);
        let o = i === !0 ? 0 : 1, c, l, u = null, f = 0, h = null;
        function m(d, p) {
            let _ = !1
              , y = p.isScene === !0 ? p.background : null;
            y && y.isTexture && (y = e.get(y));
            const M = s.xr
              , x = M.getSession && M.getSession();
            x && x.environmentBlendMode === "additive" && (y = null),
            y === null ? g(a, o) : y && y.isColor && (g(y, 1),
            _ = !0),
            (s.autoClear || _) && s.clear(s.autoClearColor, s.autoClearDepth, s.autoClearStencil),
            y && (y.isCubeTexture || y.mapping === bo) ? (l === void 0 && (l = new Bn(new Os(1,1,1),new Gn({
                name: "BackgroundCubeMaterial",
                uniforms: Zr($n.cube.uniforms),
                vertexShader: $n.cube.vertexShader,
                fragmentShader: $n.cube.fragmentShader,
                side: Rn,
                depthTest: !1,
                depthWrite: !1,
                fog: !1
            })),
            l.geometry.deleteAttribute("normal"),
            l.geometry.deleteAttribute("uv"),
            l.onBeforeRender = function(b, S, A) {
                this.matrixWorld.copyPosition(A.matrixWorld)
            }
            ,
            Object.defineProperty(l.material, "envMap", {
                get: function() {
                    return this.uniforms.envMap.value
                }
            }),
            n.update(l)),
            l.material.uniforms.envMap.value = y,
            l.material.uniforms.flipEnvMap.value = y.isCubeTexture && y.isRenderTargetTexture === !1 ? -1 : 1,
            (u !== y || f !== y.version || h !== s.toneMapping) && (l.material.needsUpdate = !0,
            u = y,
            f = y.version,
            h = s.toneMapping),
            l.layers.enableAll(),
            d.unshift(l, l.geometry, l.material, 0, 0, null)) : y && y.isTexture && (c === void 0 && (c = new Bn(new Ns(2,2),new Gn({
                name: "BackgroundMaterial",
                uniforms: Zr($n.background.uniforms),
                vertexShader: $n.background.vertexShader,
                fragmentShader: $n.background.fragmentShader,
                side: Cs,
                depthTest: !1,
                depthWrite: !1,
                fog: !1
            })),
            c.geometry.deleteAttribute("normal"),
            Object.defineProperty(c.material, "map", {
                get: function() {
                    return this.uniforms.t2D.value
                }
            }),
            n.update(c)),
            c.material.uniforms.t2D.value = y,
            y.matrixAutoUpdate === !0 && y.updateMatrix(),
            c.material.uniforms.uvTransform.value.copy(y.matrix),
            (u !== y || f !== y.version || h !== s.toneMapping) && (c.material.needsUpdate = !0,
            u = y,
            f = y.version,
            h = s.toneMapping),
            c.layers.enableAll(),
            d.unshift(c, c.geometry, c.material, 0, 0, null))
        }
        function g(d, p) {
            t.buffers.color.setClear(d.r, d.g, d.b, p, r)
        }
        return {
            getClearColor: function() {
                return a
            },
            setClearColor: function(d, p=1) {
                a.set(d),
                o = p,
                g(a, o)
            },
            getClearAlpha: function() {
                return o
            },
            setClearAlpha: function(d) {
                o = d,
                g(a, o)
            },
            render: m
        }
    }
    function S_(s, e, t, n) {
        const i = s.getParameter(34921)
          , r = n.isWebGL2 ? null : e.get("OES_vertex_array_object")
          , a = n.isWebGL2 || r !== null
          , o = {}
          , c = p(null);
        let l = c
          , u = !1;
        function f(R, U, z, W, X) {
            let G = !1;
            if (a) {
                const P = d(W, z, U);
                l !== P && (l = P,
                m(l.object)),
                G = _(R, W, z, X),
                G && y(R, W, z, X)
            } else {
                const P = U.wireframe === !0;
                (l.geometry !== W.id || l.program !== z.id || l.wireframe !== P) && (l.geometry = W.id,
                l.program = z.id,
                l.wireframe = P,
                G = !0)
            }
            X !== null && t.update(X, 34963),
            (G || u) && (u = !1,
            v(R, U, z, W),
            X !== null && s.bindBuffer(34963, t.get(X).buffer))
        }
        function h() {
            return n.isWebGL2 ? s.createVertexArray() : r.createVertexArrayOES()
        }
        function m(R) {
            return n.isWebGL2 ? s.bindVertexArray(R) : r.bindVertexArrayOES(R)
        }
        function g(R) {
            return n.isWebGL2 ? s.deleteVertexArray(R) : r.deleteVertexArrayOES(R)
        }
        function d(R, U, z) {
            const W = z.wireframe === !0;
            let X = o[R.id];
            X === void 0 && (X = {},
            o[R.id] = X);
            let G = X[U.id];
            G === void 0 && (G = {},
            X[U.id] = G);
            let P = G[W];
            return P === void 0 && (P = p(h()),
            G[W] = P),
            P
        }
        function p(R) {
            const U = []
              , z = []
              , W = [];
            for (let X = 0; X < i; X++)
                U[X] = 0,
                z[X] = 0,
                W[X] = 0;
            return {
                geometry: null,
                program: null,
                wireframe: !1,
                newAttributes: U,
                enabledAttributes: z,
                attributeDivisors: W,
                object: R,
                attributes: {},
                index: null
            }
        }
        function _(R, U, z, W) {
            const X = l.attributes
              , G = U.attributes;
            let P = 0;
            const ee = z.getAttributes();
            for (const te in ee)
                if (ee[te].location >= 0) {
                    const ce = X[te];
                    let Me = G[te];
                    if (Me === void 0 && (te === "instanceMatrix" && R.instanceMatrix && (Me = R.instanceMatrix),
                    te === "instanceColor" && R.instanceColor && (Me = R.instanceColor)),
                    ce === void 0 || ce.attribute !== Me || Me && ce.data !== Me.data)
                        return !0;
                    P++
                }
            return l.attributesNum !== P || l.index !== W
        }
        function y(R, U, z, W) {
            const X = {}
              , G = U.attributes;
            let P = 0;
            const ee = z.getAttributes();
            for (const te in ee)
                if (ee[te].location >= 0) {
                    let ce = G[te];
                    ce === void 0 && (te === "instanceMatrix" && R.instanceMatrix && (ce = R.instanceMatrix),
                    te === "instanceColor" && R.instanceColor && (ce = R.instanceColor));
                    const Me = {};
                    Me.attribute = ce,
                    ce && ce.data && (Me.data = ce.data),
                    X[te] = Me,
                    P++
                }
            l.attributes = X,
            l.attributesNum = P,
            l.index = W
        }
        function M() {
            const R = l.newAttributes;
            for (let U = 0, z = R.length; U < z; U++)
                R[U] = 0
        }
        function x(R) {
            b(R, 0)
        }
        function b(R, U) {
            const z = l.newAttributes
              , W = l.enabledAttributes
              , X = l.attributeDivisors;
            z[R] = 1,
            W[R] === 0 && (s.enableVertexAttribArray(R),
            W[R] = 1),
            X[R] !== U && ((n.isWebGL2 ? s : e.get("ANGLE_instanced_arrays"))[n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](R, U),
            X[R] = U)
        }
        function S() {
            const R = l.newAttributes
              , U = l.enabledAttributes;
            for (let z = 0, W = U.length; z < W; z++)
                U[z] !== R[z] && (s.disableVertexAttribArray(z),
                U[z] = 0)
        }
        function A(R, U, z, W, X, G) {
            n.isWebGL2 === !0 && (z === 5124 || z === 5125) ? s.vertexAttribIPointer(R, U, z, X, G) : s.vertexAttribPointer(R, U, z, W, X, G)
        }
        function v(R, U, z, W) {
            if (n.isWebGL2 === !1 && (R.isInstancedMesh || W.isInstancedBufferGeometry) && e.get("ANGLE_instanced_arrays") === null)
                return;
            M();
            const X = W.attributes
              , G = z.getAttributes()
              , P = U.defaultAttributeValues;
            for (const ee in G) {
                const te = G[ee];
                if (te.location >= 0) {
                    let ie = X[ee];
                    if (ie === void 0 && (ee === "instanceMatrix" && R.instanceMatrix && (ie = R.instanceMatrix),
                    ee === "instanceColor" && R.instanceColor && (ie = R.instanceColor)),
                    ie !== void 0) {
                        const ce = ie.normalized
                          , Me = ie.itemSize
                          , H = t.get(ie);
                        if (H === void 0)
                            continue;
                        const Le = H.buffer
                          , xe = H.type
                          , Ce = H.bytesPerElement;
                        if (ie.isInterleavedBufferAttribute) {
                            const oe = ie.data
                              , Ne = oe.stride
                              , me = ie.offset;
                            if (oe.isInstancedInterleavedBuffer) {
                                for (let _e = 0; _e < te.locationSize; _e++)
                                    b(te.location + _e, oe.meshPerAttribute);
                                R.isInstancedMesh !== !0 && W._maxInstanceCount === void 0 && (W._maxInstanceCount = oe.meshPerAttribute * oe.count)
                            } else
                                for (let _e = 0; _e < te.locationSize; _e++)
                                    x(te.location + _e);
                            s.bindBuffer(34962, Le);
                            for (let _e = 0; _e < te.locationSize; _e++)
                                A(te.location + _e, Me / te.locationSize, xe, ce, Ne * Ce, (me + Me / te.locationSize * _e) * Ce)
                        } else {
                            if (ie.isInstancedBufferAttribute) {
                                for (let oe = 0; oe < te.locationSize; oe++)
                                    b(te.location + oe, ie.meshPerAttribute);
                                R.isInstancedMesh !== !0 && W._maxInstanceCount === void 0 && (W._maxInstanceCount = ie.meshPerAttribute * ie.count)
                            } else
                                for (let oe = 0; oe < te.locationSize; oe++)
                                    x(te.location + oe);
                            s.bindBuffer(34962, Le);
                            for (let oe = 0; oe < te.locationSize; oe++)
                                A(te.location + oe, Me / te.locationSize, xe, ce, Me * Ce, Me / te.locationSize * oe * Ce)
                        }
                    } else if (P !== void 0) {
                        const ce = P[ee];
                        if (ce !== void 0)
                            switch (ce.length) {
                            case 2:
                                s.vertexAttrib2fv(te.location, ce);
                                break;
                            case 3:
                                s.vertexAttrib3fv(te.location, ce);
                                break;
                            case 4:
                                s.vertexAttrib4fv(te.location, ce);
                                break;
                            default:
                                s.vertexAttrib1fv(te.location, ce)
                            }
                    }
                }
            }
            S()
        }
        function w() {
            V();
            for (const R in o) {
                const U = o[R];
                for (const z in U) {
                    const W = U[z];
                    for (const X in W)
                        g(W[X].object),
                        delete W[X];
                    delete U[z]
                }
                delete o[R]
            }
        }
        function L(R) {
            if (o[R.id] === void 0)
                return;
            const U = o[R.id];
            for (const z in U) {
                const W = U[z];
                for (const X in W)
                    g(W[X].object),
                    delete W[X];
                delete U[z]
            }
            delete o[R.id]
        }
        function F(R) {
            for (const U in o) {
                const z = o[U];
                if (z[R.id] === void 0)
                    continue;
                const W = z[R.id];
                for (const X in W)
                    g(W[X].object),
                    delete W[X];
                delete z[R.id]
            }
        }
        function V() {
            K(),
            u = !0,
            l !== c && (l = c,
            m(l.object))
        }
        function K() {
            c.geometry = null,
            c.program = null,
            c.wireframe = !1
        }
        return {
            setup: f,
            reset: V,
            resetDefaultState: K,
            dispose: w,
            releaseStatesOfGeometry: L,
            releaseStatesOfProgram: F,
            initAttributes: M,
            enableAttribute: x,
            disableUnusedAttributes: S
        }
    }
    function w_(s, e, t, n) {
        const i = n.isWebGL2;
        let r;
        function a(l) {
            r = l
        }
        function o(l, u) {
            s.drawArrays(r, l, u),
            t.update(u, r, 1)
        }
        function c(l, u, f) {
            if (f === 0)
                return;
            let h, m;
            if (i)
                h = s,
                m = "drawArraysInstanced";
            else if (h = e.get("ANGLE_instanced_arrays"),
            m = "drawArraysInstancedANGLE",
            h === null) {
                console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
                return
            }
            h[m](r, l, u, f),
            t.update(u, r, f)
        }
        this.setMode = a,
        this.render = o,
        this.renderInstances = c
    }
    function T_(s, e, t) {
        let n;
        function i() {
            if (n !== void 0)
                return n;
            if (e.has("EXT_texture_filter_anisotropic") === !0) {
                const A = e.get("EXT_texture_filter_anisotropic");
                n = s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)
            } else
                n = 0;
            return n
        }
        function r(A) {
            if (A === "highp") {
                if (s.getShaderPrecisionFormat(35633, 36338).precision > 0 && s.getShaderPrecisionFormat(35632, 36338).precision > 0)
                    return "highp";
                A = "mediump"
            }
            return A === "mediump" && s.getShaderPrecisionFormat(35633, 36337).precision > 0 && s.getShaderPrecisionFormat(35632, 36337).precision > 0 ? "mediump" : "lowp"
        }
        const a = typeof WebGL2RenderingContext != "undefined" && s instanceof WebGL2RenderingContext || typeof WebGL2ComputeRenderingContext != "undefined" && s instanceof WebGL2ComputeRenderingContext;
        let o = t.precision !== void 0 ? t.precision : "highp";
        const c = r(o);
        c !== o && (console.warn("THREE.WebGLRenderer:", o, "not supported, using", c, "instead."),
        o = c);
        const l = a || e.has("WEBGL_draw_buffers")
          , u = t.logarithmicDepthBuffer === !0
          , f = s.getParameter(34930)
          , h = s.getParameter(35660)
          , m = s.getParameter(3379)
          , g = s.getParameter(34076)
          , d = s.getParameter(34921)
          , p = s.getParameter(36347)
          , _ = s.getParameter(36348)
          , y = s.getParameter(36349)
          , M = h > 0
          , x = a || e.has("OES_texture_float")
          , b = M && x
          , S = a ? s.getParameter(36183) : 0;
        return {
            isWebGL2: a,
            drawBuffers: l,
            getMaxAnisotropy: i,
            getMaxPrecision: r,
            precision: o,
            logarithmicDepthBuffer: u,
            maxTextures: f,
            maxVertexTextures: h,
            maxTextureSize: m,
            maxCubemapSize: g,
            maxAttributes: d,
            maxVertexUniforms: p,
            maxVaryings: _,
            maxFragmentUniforms: y,
            vertexTextures: M,
            floatFragmentTextures: x,
            floatVertexTextures: b,
            maxSamples: S
        }
    }
    function E_(s) {
        const e = this;
        let t = null
          , n = 0
          , i = !1
          , r = !1;
        const a = new rr
          , o = new gn
          , c = {
            value: null,
            needsUpdate: !1
        };
        this.uniform = c,
        this.numPlanes = 0,
        this.numIntersection = 0,
        this.init = function(f, h, m) {
            const g = f.length !== 0 || h || n !== 0 || i;
            return i = h,
            t = u(f, m, 0),
            n = f.length,
            g
        }
        ,
        this.beginShadows = function() {
            r = !0,
            u(null)
        }
        ,
        this.endShadows = function() {
            r = !1,
            l()
        }
        ,
        this.setState = function(f, h, m) {
            const g = f.clippingPlanes
              , d = f.clipIntersection
              , p = f.clipShadows
              , _ = s.get(f);
            if (!i || g === null || g.length === 0 || r && !p)
                r ? u(null) : l();
            else {
                const y = r ? 0 : n
                  , M = y * 4;
                let x = _.clippingState || null;
                c.value = x,
                x = u(g, h, M, m);
                for (let b = 0; b !== M; ++b)
                    x[b] = t[b];
                _.clippingState = x,
                this.numIntersection = d ? this.numPlanes : 0,
                this.numPlanes += y
            }
        }
        ;
        function l() {
            c.value !== t && (c.value = t,
            c.needsUpdate = n > 0),
            e.numPlanes = n,
            e.numIntersection = 0
        }
        function u(f, h, m, g) {
            const d = f !== null ? f.length : 0;
            let p = null;
            if (d !== 0) {
                if (p = c.value,
                g !== !0 || p === null) {
                    const _ = m + d * 4
                      , y = h.matrixWorldInverse;
                    o.getNormalMatrix(y),
                    (p === null || p.length < _) && (p = new Float32Array(_));
                    for (let M = 0, x = m; M !== d; ++M,
                    x += 4)
                        a.copy(f[M]).applyMatrix4(y, o),
                        a.normal.toArray(p, x),
                        p[x + 3] = a.constant
                }
                c.value = p,
                c.needsUpdate = !0
            }
            return e.numPlanes = d,
            e.numIntersection = 0,
            p
        }
    }
    function C_(s) {
        let e = new WeakMap;
        function t(a, o) {
            return o === Ba ? a.mapping = Or : o === Ga && (a.mapping = Nr),
            a
        }
        function n(a) {
            if (a && a.isTexture && a.isRenderTargetTexture === !1) {
                const o = a.mapping;
                if (o === Ba || o === Ga)
                    if (e.has(a)) {
                        const c = e.get(a).texture;
                        return t(c, a.mapping)
                    } else {
                        const c = a.image;
                        if (c && c.height > 0) {
                            const l = new bm(c.height / 2);
                            return l.fromEquirectangularTexture(s, a),
                            e.set(a, l),
                            a.addEventListener("dispose", i),
                            t(l.texture, a.mapping)
                        } else
                            return null
                    }
            }
            return a
        }
        function i(a) {
            const o = a.target;
            o.removeEventListener("dispose", i);
            const c = e.get(o);
            c !== void 0 && (e.delete(o),
            c.dispose())
        }
        function r() {
            e = new WeakMap
        }
        return {
            get: n,
            dispose: r
        }
    }
    class Ml extends ju {
        constructor(e=-1, t=1, n=1, i=-1, r=.1, a=2e3) {
            super();
            this.isOrthographicCamera = !0,
            this.type = "OrthographicCamera",
            this.zoom = 1,
            this.view = null,
            this.left = e,
            this.right = t,
            this.top = n,
            this.bottom = i,
            this.near = r,
            this.far = a,
            this.updateProjectionMatrix()
        }
        copy(e, t) {
            return super.copy(e, t),
            this.left = e.left,
            this.right = e.right,
            this.top = e.top,
            this.bottom = e.bottom,
            this.near = e.near,
            this.far = e.far,
            this.zoom = e.zoom,
            this.view = e.view === null ? null : Object.assign({}, e.view),
            this
        }
        setViewOffset(e, t, n, i, r, a) {
            this.view === null && (this.view = {
                enabled: !0,
                fullWidth: 1,
                fullHeight: 1,
                offsetX: 0,
                offsetY: 0,
                width: 1,
                height: 1
            }),
            this.view.enabled = !0,
            this.view.fullWidth = e,
            this.view.fullHeight = t,
            this.view.offsetX = n,
            this.view.offsetY = i,
            this.view.width = r,
            this.view.height = a,
            this.updateProjectionMatrix()
        }
        clearViewOffset() {
            this.view !== null && (this.view.enabled = !1),
            this.updateProjectionMatrix()
        }
        updateProjectionMatrix() {
            const e = (this.right - this.left) / (2 * this.zoom)
              , t = (this.top - this.bottom) / (2 * this.zoom)
              , n = (this.right + this.left) / 2
              , i = (this.top + this.bottom) / 2;
            let r = n - e
              , a = n + e
              , o = i + t
              , c = i - t;
            if (this.view !== null && this.view.enabled) {
                const l = (this.right - this.left) / this.view.fullWidth / this.zoom
                  , u = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
                r += l * this.view.offsetX,
                a = r + l * this.view.width,
                o -= u * this.view.offsetY,
                c = o - u * this.view.height
            }
            this.projectionMatrix.makeOrthographic(r, a, o, c, this.near, this.far),
            this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
        }
        toJSON(e) {
            const t = super.toJSON(e);
            return t.object.zoom = this.zoom,
            t.object.left = this.left,
            t.object.right = this.right,
            t.object.top = this.top,
            t.object.bottom = this.bottom,
            t.object.near = this.near,
            t.object.far = this.far,
            this.view !== null && (t.object.view = Object.assign({}, this.view)),
            t
        }
    }
    const es = 4
      , Qu = [.125, .215, .35, .446, .526, .582]
      , sr = 20
      , Sl = new Ml
      , ef = new rt;
    let wl = null;
    const or = (1 + Math.sqrt(5)) / 2
      , ts = 1 / or
      , tf = [new B(1,1,1), new B(-1,1,1), new B(1,1,-1), new B(-1,1,-1), new B(0,or,ts), new B(0,or,-ts), new B(ts,0,or), new B(-ts,0,or), new B(or,ts,0), new B(-or,ts,0)];
    class nf {
        constructor(e) {
            this._renderer = e,
            this._pingPongRenderTarget = null,
            this._lodMax = 0,
            this._cubeSize = 0,
            this._lodPlanes = [],
            this._sizeLods = [],
            this._sigmas = [],
            this._blurMaterial = null,
            this._cubemapMaterial = null,
            this._equirectMaterial = null,
            this._compileMaterial(this._blurMaterial)
        }
        fromScene(e, t=0, n=.1, i=100) {
            wl = this._renderer.getRenderTarget(),
            this._setSize(256);
            const r = this._allocateTargets();
            return r.depthBuffer = !0,
            this._sceneToCubeUV(e, n, i, r),
            t > 0 && this._blur(r, 0, 0, t),
            this._applyPMREM(r),
            this._cleanup(r),
            r
        }
        fromEquirectangular(e, t=null) {
            return this._fromTexture(e, t)
        }
        fromCubemap(e, t=null) {
            return this._fromTexture(e, t)
        }
        compileCubemapShader() {
            this._cubemapMaterial === null && (this._cubemapMaterial = of(),
            this._compileMaterial(this._cubemapMaterial))
        }
        compileEquirectangularShader() {
            this._equirectMaterial === null && (this._equirectMaterial = sf(),
            this._compileMaterial(this._equirectMaterial))
        }
        dispose() {
            this._dispose(),
            this._cubemapMaterial !== null && this._cubemapMaterial.dispose(),
            this._equirectMaterial !== null && this._equirectMaterial.dispose()
        }
        _setSize(e) {
            this._lodMax = Math.floor(Math.log2(e)),
            this._cubeSize = Math.pow(2, this._lodMax)
        }
        _dispose() {
            this._blurMaterial !== null && this._blurMaterial.dispose(),
            this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
            for (let e = 0; e < this._lodPlanes.length; e++)
                this._lodPlanes[e].dispose()
        }
        _cleanup(e) {
            this._renderer.setRenderTarget(wl),
            e.scissorTest = !1,
            Wo(e, 0, 0, e.width, e.height)
        }
        _fromTexture(e, t) {
            e.mapping === Or || e.mapping === Nr ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4),
            wl = this._renderer.getRenderTarget();
            const n = t || this._allocateTargets();
            return this._textureToCubeUV(e, n),
            this._applyPMREM(n),
            this._cleanup(n),
            n
        }
        _allocateTargets() {
            const e = 3 * Math.max(this._cubeSize, 16 * 7)
              , t = 4 * this._cubeSize
              , n = {
                magFilter: mn,
                minFilter: mn,
                generateMipmaps: !1,
                type: As,
                format: qn,
                encoding: Zi,
                depthBuffer: !1
            }
              , i = rf(e, t, n);
            if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e) {
                this._pingPongRenderTarget !== null && this._dispose(),
                this._pingPongRenderTarget = rf(e, t, n);
                const {_lodMax: r} = this;
                ({sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas} = A_(r)),
                this._blurMaterial = P_(r, e, t)
            }
            return i
        }
        _compileMaterial(e) {
            const t = new Bn(this._lodPlanes[0],e);
            this._renderer.compile(t, Sl)
        }
        _sceneToCubeUV(e, t, n, i) {
            const r = 90
              , a = 1
              , o = new xn(r,a,t,n)
              , c = [1, -1, 1, 1, 1, 1]
              , l = [1, 1, 1, -1, -1, -1]
              , u = this._renderer
              , f = u.autoClear
              , h = u.toneMapping;
            u.getClearColor(ef),
            u.toneMapping = ti,
            u.autoClear = !1;
            const m = new Wu({
                name: "PMREM.Background",
                side: Rn,
                depthWrite: !1,
                depthTest: !1
            })
              , g = new Bn(new Os,m);
            let d = !1;
            const p = e.background;
            p ? p.isColor && (m.color.copy(p),
            e.background = null,
            d = !0) : (m.color.copy(ef),
            d = !0);
            for (let _ = 0; _ < 6; _++) {
                const y = _ % 3;
                y === 0 ? (o.up.set(0, c[_], 0),
                o.lookAt(l[_], 0, 0)) : y === 1 ? (o.up.set(0, 0, c[_]),
                o.lookAt(0, l[_], 0)) : (o.up.set(0, c[_], 0),
                o.lookAt(0, 0, l[_]));
                const M = this._cubeSize;
                Wo(i, y * M, _ > 2 ? M : 0, M, M),
                u.setRenderTarget(i),
                d && u.render(g, o),
                u.render(e, o)
            }
            g.geometry.dispose(),
            g.material.dispose(),
            u.toneMapping = h,
            u.autoClear = f,
            e.background = p
        }
        _textureToCubeUV(e, t) {
            const n = this._renderer
              , i = e.mapping === Or || e.mapping === Nr;
            i ? (this._cubemapMaterial === null && (this._cubemapMaterial = of()),
            this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = sf());
            const r = i ? this._cubemapMaterial : this._equirectMaterial
              , a = new Bn(this._lodPlanes[0],r)
              , o = r.uniforms;
            o.envMap.value = e;
            const c = this._cubeSize;
            Wo(t, 0, 0, 3 * c, 2 * c),
            n.setRenderTarget(t),
            n.render(a, Sl)
        }
        _applyPMREM(e) {
            const t = this._renderer
              , n = t.autoClear;
            t.autoClear = !1;
            for (let i = 1; i < this._lodPlanes.length; i++) {
                const r = Math.sqrt(this._sigmas[i] * this._sigmas[i] - this._sigmas[i - 1] * this._sigmas[i - 1])
                  , a = tf[(i - 1) % tf.length];
                this._blur(e, i - 1, i, r, a)
            }
            t.autoClear = n
        }
        _blur(e, t, n, i, r) {
            const a = this._pingPongRenderTarget;
            this._halfBlur(e, a, t, n, i, "latitudinal", r),
            this._halfBlur(a, e, n, n, i, "longitudinal", r)
        }
        _halfBlur(e, t, n, i, r, a, o) {
            const c = this._renderer
              , l = this._blurMaterial;
            a !== "latitudinal" && a !== "longitudinal" && console.error("blur direction must be either latitudinal or longitudinal!");
            const u = 3
              , f = new Bn(this._lodPlanes[i],l)
              , h = l.uniforms
              , m = this._sizeLods[n] - 1
              , g = isFinite(r) ? Math.PI / (2 * m) : 2 * Math.PI / (2 * sr - 1)
              , d = r / g
              , p = isFinite(r) ? 1 + Math.floor(u * d) : sr;
            p > sr && console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${sr}`);
            const _ = [];
            let y = 0;
            for (let A = 0; A < sr; ++A) {
                const v = A / d
                  , w = Math.exp(-v * v / 2);
                _.push(w),
                A === 0 ? y += w : A < p && (y += 2 * w)
            }
            for (let A = 0; A < _.length; A++)
                _[A] = _[A] / y;
            h.envMap.value = e.texture,
            h.samples.value = p,
            h.weights.value = _,
            h.latitudinal.value = a === "latitudinal",
            o && (h.poleAxis.value = o);
            const {_lodMax: M} = this;
            h.dTheta.value = g,
            h.mipInt.value = M - n;
            const x = this._sizeLods[i]
              , b = 3 * x * (i > M - es ? i - M + es : 0)
              , S = 4 * (this._cubeSize - x);
            Wo(t, b, S, 3 * x, 2 * x),
            c.setRenderTarget(t),
            c.render(f, Sl)
        }
    }
    function A_(s) {
        const e = []
          , t = []
          , n = [];
        let i = s;
        const r = s - es + 1 + Qu.length;
        for (let a = 0; a < r; a++) {
            const o = Math.pow(2, i);
            t.push(o);
            let c = 1 / o;
            a > s - es ? c = Qu[a - s + es - 1] : a === 0 && (c = 0),
            n.push(c);
            const l = 1 / (o - 2)
              , u = -l
              , f = 1 + l
              , h = [u, u, f, u, f, f, u, u, f, f, u, f]
              , m = 6
              , g = 6
              , d = 3
              , p = 2
              , _ = 1
              , y = new Float32Array(d * g * m)
              , M = new Float32Array(p * g * m)
              , x = new Float32Array(_ * g * m);
            for (let S = 0; S < m; S++) {
                const A = S % 3 * 2 / 3 - 1
                  , v = S > 2 ? 0 : -1
                  , w = [A, v, 0, A + 2 / 3, v, 0, A + 2 / 3, v + 1, 0, A, v, 0, A + 2 / 3, v + 1, 0, A, v + 1, 0];
                y.set(w, d * g * S),
                M.set(h, p * g * S);
                const L = [S, S, S, S, S, S];
                x.set(L, _ * g * S)
            }
            const b = new ci;
            b.setAttribute("position", new Yn(y,d)),
            b.setAttribute("uv", new Yn(M,p)),
            b.setAttribute("faceIndex", new Yn(x,_)),
            e.push(b),
            i > es && i--
        }
        return {
            lodPlanes: e,
            sizeLods: t,
            sigmas: n
        }
    }
    function rf(s, e, t) {
        const n = new bi(s,e,t);
        return n.texture.mapping = bo,
        n.texture.name = "PMREM.cubeUv",
        n.scissorTest = !0,
        n
    }
    function Wo(s, e, t, n, i) {
        s.viewport.set(e, t, n, i),
        s.scissor.set(e, t, n, i)
    }
    function P_(s, e, t) {
        const n = new Float32Array(sr)
          , i = new B(0,1,0);
        return new Gn({
            name: "SphericalGaussianBlur",
            defines: {
                n: sr,
                CUBEUV_TEXEL_WIDTH: 1 / e,
                CUBEUV_TEXEL_HEIGHT: 1 / t,
                CUBEUV_MAX_MIP: `${s}.0`
            },
            uniforms: {
                envMap: {
                    value: null
                },
                samples: {
                    value: 1
                },
                weights: {
                    value: n
                },
                latitudinal: {
                    value: !1
                },
                dTheta: {
                    value: 0
                },
                mipInt: {
                    value: 0
                },
                poleAxis: {
                    value: i
                }
            },
            vertexShader: Tl(),
            fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,
            blending: yi,
            depthTest: !1,
            depthWrite: !1
        })
    }
    function sf() {
        return new Gn({
            name: "EquirectangularToCubeUV",
            uniforms: {
                envMap: {
                    value: null
                }
            },
            vertexShader: Tl(),
            fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,
            blending: yi,
            depthTest: !1,
            depthWrite: !1
        })
    }
    function of() {
        return new Gn({
            name: "CubemapToCubeUV",
            uniforms: {
                envMap: {
                    value: null
                },
                flipEnvMap: {
                    value: -1
                }
            },
            vertexShader: Tl(),
            fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,
            blending: yi,
            depthTest: !1,
            depthWrite: !1
        })
    }
    function Tl() {
        return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`
    }
    function D_(s) {
        let e = new WeakMap
          , t = null;
        function n(o) {
            if (o && o.isTexture) {
                const c = o.mapping
                  , l = c === Ba || c === Ga
                  , u = c === Or || c === Nr;
                if (l || u)
                    if (o.isRenderTargetTexture && o.needsPMREMUpdate === !0) {
                        o.needsPMREMUpdate = !1;
                        let f = e.get(o);
                        return t === null && (t = new nf(s)),
                        f = l ? t.fromEquirectangular(o, f) : t.fromCubemap(o, f),
                        e.set(o, f),
                        f.texture
                    } else {
                        if (e.has(o))
                            return e.get(o).texture;
                        {
                            const f = o.image;
                            if (l && f && f.height > 0 || u && f && i(f)) {
                                t === null && (t = new nf(s));
                                const h = l ? t.fromEquirectangular(o) : t.fromCubemap(o);
                                return e.set(o, h),
                                o.addEventListener("dispose", r),
                                h.texture
                            } else
                                return null
                        }
                    }
            }
            return o
        }
        function i(o) {
            let c = 0;
            const l = 6;
            for (let u = 0; u < l; u++)
                o[u] !== void 0 && c++;
            return c === l
        }
        function r(o) {
            const c = o.target;
            c.removeEventListener("dispose", r);
            const l = e.get(c);
            l !== void 0 && (e.delete(c),
            l.dispose())
        }
        function a() {
            e = new WeakMap,
            t !== null && (t.dispose(),
            t = null)
        }
        return {
            get: n,
            dispose: a
        }
    }
    function L_(s) {
        const e = {};
        function t(n) {
            if (e[n] !== void 0)
                return e[n];
            let i;
            switch (n) {
            case "WEBGL_depth_texture":
                i = s.getExtension("WEBGL_depth_texture") || s.getExtension("MOZ_WEBGL_depth_texture") || s.getExtension("WEBKIT_WEBGL_depth_texture");
                break;
            case "EXT_texture_filter_anisotropic":
                i = s.getExtension("EXT_texture_filter_anisotropic") || s.getExtension("MOZ_EXT_texture_filter_anisotropic") || s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
                break;
            case "WEBGL_compressed_texture_s3tc":
                i = s.getExtension("WEBGL_compressed_texture_s3tc") || s.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
                break;
            case "WEBGL_compressed_texture_pvrtc":
                i = s.getExtension("WEBGL_compressed_texture_pvrtc") || s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
                break;
            default:
                i = s.getExtension(n)
            }
            return e[n] = i,
            i
        }
        return {
            has: function(n) {
                return t(n) !== null
            },
            init: function(n) {
                n.isWebGL2 ? t("EXT_color_buffer_float") : (t("WEBGL_depth_texture"),
                t("OES_texture_float"),
                t("OES_texture_half_float"),
                t("OES_texture_half_float_linear"),
                t("OES_standard_derivatives"),
                t("OES_element_index_uint"),
                t("OES_vertex_array_object"),
                t("ANGLE_instanced_arrays")),
                t("OES_texture_float_linear"),
                t("EXT_color_buffer_half_float"),
                t("WEBGL_multisampled_render_to_texture")
            },
            get: function(n) {
                const i = t(n);
                return i === null && console.warn("THREE.WebGLRenderer: " + n + " extension not supported."),
                i
            }
        }
    }
    function R_(s, e, t, n) {
        const i = {}
          , r = new WeakMap;
        function a(f) {
            const h = f.target;
            h.index !== null && e.remove(h.index);
            for (const g in h.attributes)
                e.remove(h.attributes[g]);
            h.removeEventListener("dispose", a),
            delete i[h.id];
            const m = r.get(h);
            m && (e.remove(m),
            r.delete(h)),
            n.releaseStatesOfGeometry(h),
            h.isInstancedBufferGeometry === !0 && delete h._maxInstanceCount,
            t.memory.geometries--
        }
        function o(f, h) {
            return i[h.id] === !0 || (h.addEventListener("dispose", a),
            i[h.id] = !0,
            t.memory.geometries++),
            h
        }
        function c(f) {
            const h = f.attributes;
            for (const g in h)
                e.update(h[g], 34962);
            const m = f.morphAttributes;
            for (const g in m) {
                const d = m[g];
                for (let p = 0, _ = d.length; p < _; p++)
                    e.update(d[p], 34962)
            }
        }
        function l(f) {
            const h = []
              , m = f.index
              , g = f.attributes.position;
            let d = 0;
            if (m !== null) {
                const y = m.array;
                d = m.version;
                for (let M = 0, x = y.length; M < x; M += 3) {
                    const b = y[M + 0]
                      , S = y[M + 1]
                      , A = y[M + 2];
                    h.push(b, S, S, A, A, b)
                }
            } else {
                const y = g.array;
                d = g.version;
                for (let M = 0, x = y.length / 3 - 1; M < x; M += 3) {
                    const b = M + 0
                      , S = M + 1
                      , A = M + 2;
                    h.push(b, S, S, A, A, b)
                }
            }
            const p = new (Au(h) ? qu : Xu)(h,1);
            p.version = d;
            const _ = r.get(f);
            _ && e.remove(_),
            r.set(f, p)
        }
        function u(f) {
            const h = r.get(f);
            if (h) {
                const m = f.index;
                m !== null && h.version < m.version && l(f)
            } else
                l(f);
            return r.get(f)
        }
        return {
            get: o,
            update: c,
            getWireframeAttribute: u
        }
    }
    function I_(s, e, t, n) {
        const i = n.isWebGL2;
        let r;
        function a(h) {
            r = h
        }
        let o, c;
        function l(h) {
            o = h.type,
            c = h.bytesPerElement
        }
        function u(h, m) {
            s.drawElements(r, m, o, h * c),
            t.update(m, r, 1)
        }
        function f(h, m, g) {
            if (g === 0)
                return;
            let d, p;
            if (i)
                d = s,
                p = "drawElementsInstanced";
            else if (d = e.get("ANGLE_instanced_arrays"),
            p = "drawElementsInstancedANGLE",
            d === null) {
                console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
                return
            }
            d[p](r, m, o, h * c, g),
            t.update(m, r, g)
        }
        this.setMode = a,
        this.setIndex = l,
        this.render = u,
        this.renderInstances = f
    }
    function F_(s) {
        const e = {
            geometries: 0,
            textures: 0
        }
          , t = {
            frame: 0,
            calls: 0,
            triangles: 0,
            points: 0,
            lines: 0
        };
        function n(r, a, o) {
            switch (t.calls++,
            a) {
            case 4:
                t.triangles += o * (r / 3);
                break;
            case 1:
                t.lines += o * (r / 2);
                break;
            case 3:
                t.lines += o * (r - 1);
                break;
            case 2:
                t.lines += o * r;
                break;
            case 0:
                t.points += o * r;
                break;
            default:
                console.error("THREE.WebGLInfo: Unknown draw mode:", a);
                break
            }
        }
        function i() {
            t.frame++,
            t.calls = 0,
            t.triangles = 0,
            t.points = 0,
            t.lines = 0
        }
        return {
            memory: e,
            render: t,
            programs: null,
            autoReset: !0,
            reset: i,
            update: n
        }
    }
    function z_(s, e) {
        return s[0] - e[0]
    }
    function O_(s, e) {
        return Math.abs(e[1]) - Math.abs(s[1])
    }
    function El(s, e) {
        let t = 1;
        const n = e.isInterleavedBufferAttribute ? e.data.array : e.array;
        n instanceof Int8Array ? t = 127 : n instanceof Uint8Array ? t = 255 : n instanceof Uint16Array ? t = 65535 : n instanceof Int16Array ? t = 32767 : n instanceof Int32Array ? t = 2147483647 : console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ", n),
        s.divideScalar(t)
    }
    function N_(s, e, t) {
        const n = {}
          , i = new Float32Array(8)
          , r = new WeakMap
          , a = new Mt
          , o = [];
        for (let l = 0; l < 8; l++)
            o[l] = [l, 0];
        function c(l, u, f, h) {
            const m = l.morphTargetInfluences;
            if (e.isWebGL2 === !0) {
                const g = u.morphAttributes.position || u.morphAttributes.normal || u.morphAttributes.color
                  , d = g !== void 0 ? g.length : 0;
                let p = r.get(u);
                if (p === void 0 || p.count !== d) {
                    let U = function() {
                        K.dispose(),
                        r.delete(u),
                        u.removeEventListener("dispose", U)
                    };
                    p !== void 0 && p.texture.dispose();
                    const M = u.morphAttributes.position !== void 0
                      , x = u.morphAttributes.normal !== void 0
                      , b = u.morphAttributes.color !== void 0
                      , S = u.morphAttributes.position || []
                      , A = u.morphAttributes.normal || []
                      , v = u.morphAttributes.color || [];
                    let w = 0;
                    M === !0 && (w = 1),
                    x === !0 && (w = 2),
                    b === !0 && (w = 3);
                    let L = u.attributes.position.count * w
                      , F = 1;
                    L > e.maxTextureSize && (F = Math.ceil(L / e.maxTextureSize),
                    L = e.maxTextureSize);
                    const V = new Float32Array(L * F * 4 * d)
                      , K = new Ru(V,L,F,d);
                    K.type = $i,
                    K.needsUpdate = !0;
                    const R = w * 4;
                    for (let z = 0; z < d; z++) {
                        const W = S[z]
                          , X = A[z]
                          , G = v[z]
                          , P = L * F * 4 * z;
                        for (let ee = 0; ee < W.count; ee++) {
                            const te = ee * R;
                            M === !0 && (a.fromBufferAttribute(W, ee),
                            W.normalized === !0 && El(a, W),
                            V[P + te + 0] = a.x,
                            V[P + te + 1] = a.y,
                            V[P + te + 2] = a.z,
                            V[P + te + 3] = 0),
                            x === !0 && (a.fromBufferAttribute(X, ee),
                            X.normalized === !0 && El(a, X),
                            V[P + te + 4] = a.x,
                            V[P + te + 5] = a.y,
                            V[P + te + 6] = a.z,
                            V[P + te + 7] = 0),
                            b === !0 && (a.fromBufferAttribute(G, ee),
                            G.normalized === !0 && El(a, G),
                            V[P + te + 8] = a.x,
                            V[P + te + 9] = a.y,
                            V[P + te + 10] = a.z,
                            V[P + te + 11] = G.itemSize === 4 ? a.w : 1)
                        }
                    }
                    p = {
                        count: d,
                        texture: K,
                        size: new ke(L,F)
                    },
                    r.set(u, p),
                    u.addEventListener("dispose", U)
                }
                let _ = 0;
                for (let M = 0; M < m.length; M++)
                    _ += m[M];
                const y = u.morphTargetsRelative ? 1 : 1 - _;
                h.getUniforms().setValue(s, "morphTargetBaseInfluence", y),
                h.getUniforms().setValue(s, "morphTargetInfluences", m),
                h.getUniforms().setValue(s, "morphTargetsTexture", p.texture, t),
                h.getUniforms().setValue(s, "morphTargetsTextureSize", p.size)
            } else {
                const g = m === void 0 ? 0 : m.length;
                let d = n[u.id];
                if (d === void 0 || d.length !== g) {
                    d = [];
                    for (let x = 0; x < g; x++)
                        d[x] = [x, 0];
                    n[u.id] = d
                }
                for (let x = 0; x < g; x++) {
                    const b = d[x];
                    b[0] = x,
                    b[1] = m[x]
                }
                d.sort(O_);
                for (let x = 0; x < 8; x++)
                    x < g && d[x][1] ? (o[x][0] = d[x][0],
                    o[x][1] = d[x][1]) : (o[x][0] = Number.MAX_SAFE_INTEGER,
                    o[x][1] = 0);
                o.sort(z_);
                const p = u.morphAttributes.position
                  , _ = u.morphAttributes.normal;
                let y = 0;
                for (let x = 0; x < 8; x++) {
                    const b = o[x]
                      , S = b[0]
                      , A = b[1];
                    S !== Number.MAX_SAFE_INTEGER && A ? (p && u.getAttribute("morphTarget" + x) !== p[S] && u.setAttribute("morphTarget" + x, p[S]),
                    _ && u.getAttribute("morphNormal" + x) !== _[S] && u.setAttribute("morphNormal" + x, _[S]),
                    i[x] = A,
                    y += A) : (p && u.hasAttribute("morphTarget" + x) === !0 && u.deleteAttribute("morphTarget" + x),
                    _ && u.hasAttribute("morphNormal" + x) === !0 && u.deleteAttribute("morphNormal" + x),
                    i[x] = 0)
                }
                const M = u.morphTargetsRelative ? 1 : 1 - y;
                h.getUniforms().setValue(s, "morphTargetBaseInfluence", M),
                h.getUniforms().setValue(s, "morphTargetInfluences", i)
            }
        }
        return {
            update: c
        }
    }
    function U_(s, e, t, n) {
        let i = new WeakMap;
        function r(c) {
            const l = n.render.frame
              , u = c.geometry
              , f = e.get(c, u);
            return i.get(f) !== l && (e.update(f),
            i.set(f, l)),
            c.isInstancedMesh && (c.hasEventListener("dispose", o) === !1 && c.addEventListener("dispose", o),
            t.update(c.instanceMatrix, 34962),
            c.instanceColor !== null && t.update(c.instanceColor, 34962)),
            f
        }
        function a() {
            i = new WeakMap
        }
        function o(c) {
            const l = c.target;
            l.removeEventListener("dispose", o),
            t.remove(l.instanceMatrix),
            l.instanceColor !== null && t.remove(l.instanceColor)
        }
        return {
            update: r,
            dispose: a
        }
    }
    const af = new on
      , lf = new Ru
      , cf = new om
      , uf = new Zu
      , ff = []
      , hf = []
      , df = new Float32Array(16)
      , pf = new Float32Array(9)
      , mf = new Float32Array(4);
    function ns(s, e, t) {
        const n = s[0];
        if (n <= 0 || n > 0)
            return s;
        const i = e * t;
        let r = ff[i];
        if (r === void 0 && (r = new Float32Array(i),
        ff[i] = r),
        e !== 0) {
            n.toArray(r, 0);
            for (let a = 1, o = 0; a !== e; ++a)
                o += t,
                s[a].toArray(r, o)
        }
        return r
    }
    function kt(s, e) {
        if (s.length !== e.length)
            return !1;
        for (let t = 0, n = s.length; t < n; t++)
            if (s[t] !== e[t])
                return !1;
        return !0
    }
    function Bt(s, e) {
        for (let t = 0, n = e.length; t < n; t++)
            s[t] = e[t]
    }
    function Xo(s, e) {
        let t = hf[e];
        t === void 0 && (t = new Int32Array(e),
        hf[e] = t);
        for (let n = 0; n !== e; ++n)
            t[n] = s.allocateTextureUnit();
        return t
    }
    function k_(s, e) {
        const t = this.cache;
        t[0] !== e && (s.uniform1f(this.addr, e),
        t[0] = e)
    }
    function B_(s, e) {
        const t = this.cache;
        if (e.x !== void 0)
            (t[0] !== e.x || t[1] !== e.y) && (s.uniform2f(this.addr, e.x, e.y),
            t[0] = e.x,
            t[1] = e.y);
        else {
            if (kt(t, e))
                return;
            s.uniform2fv(this.addr, e),
            Bt(t, e)
        }
    }
    function G_(s, e) {
        const t = this.cache;
        if (e.x !== void 0)
            (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (s.uniform3f(this.addr, e.x, e.y, e.z),
            t[0] = e.x,
            t[1] = e.y,
            t[2] = e.z);
        else if (e.r !== void 0)
            (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (s.uniform3f(this.addr, e.r, e.g, e.b),
            t[0] = e.r,
            t[1] = e.g,
            t[2] = e.b);
        else {
            if (kt(t, e))
                return;
            s.uniform3fv(this.addr, e),
            Bt(t, e)
        }
    }
    function V_(s, e) {
        const t = this.cache;
        if (e.x !== void 0)
            (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (s.uniform4f(this.addr, e.x, e.y, e.z, e.w),
            t[0] = e.x,
            t[1] = e.y,
            t[2] = e.z,
            t[3] = e.w);
        else {
            if (kt(t, e))
                return;
            s.uniform4fv(this.addr, e),
            Bt(t, e)
        }
    }
    function H_(s, e) {
        const t = this.cache
          , n = e.elements;
        if (n === void 0) {
            if (kt(t, e))
                return;
            s.uniformMatrix2fv(this.addr, !1, e),
            Bt(t, e)
        } else {
            if (kt(t, n))
                return;
            mf.set(n),
            s.uniformMatrix2fv(this.addr, !1, mf),
            Bt(t, n)
        }
    }
    function W_(s, e) {
        const t = this.cache
          , n = e.elements;
        if (n === void 0) {
            if (kt(t, e))
                return;
            s.uniformMatrix3fv(this.addr, !1, e),
            Bt(t, e)
        } else {
            if (kt(t, n))
                return;
            pf.set(n),
            s.uniformMatrix3fv(this.addr, !1, pf),
            Bt(t, n)
        }
    }
    function X_(s, e) {
        const t = this.cache
          , n = e.elements;
        if (n === void 0) {
            if (kt(t, e))
                return;
            s.uniformMatrix4fv(this.addr, !1, e),
            Bt(t, e)
        } else {
            if (kt(t, n))
                return;
            df.set(n),
            s.uniformMatrix4fv(this.addr, !1, df),
            Bt(t, n)
        }
    }
    function q_(s, e) {
        const t = this.cache;
        t[0] !== e && (s.uniform1i(this.addr, e),
        t[0] = e)
    }
    function Y_(s, e) {
        const t = this.cache;
        kt(t, e) || (s.uniform2iv(this.addr, e),
        Bt(t, e))
    }
    function $_(s, e) {
        const t = this.cache;
        kt(t, e) || (s.uniform3iv(this.addr, e),
        Bt(t, e))
    }
    function j_(s, e) {
        const t = this.cache;
        kt(t, e) || (s.uniform4iv(this.addr, e),
        Bt(t, e))
    }
    function Z_(s, e) {
        const t = this.cache;
        t[0] !== e && (s.uniform1ui(this.addr, e),
        t[0] = e)
    }
    function K_(s, e) {
        const t = this.cache;
        kt(t, e) || (s.uniform2uiv(this.addr, e),
        Bt(t, e))
    }
    function J_(s, e) {
        const t = this.cache;
        kt(t, e) || (s.uniform3uiv(this.addr, e),
        Bt(t, e))
    }
    function Q_(s, e) {
        const t = this.cache;
        kt(t, e) || (s.uniform4uiv(this.addr, e),
        Bt(t, e))
    }
    function e0(s, e, t) {
        const n = this.cache
          , i = t.allocateTextureUnit();
        n[0] !== i && (s.uniform1i(this.addr, i),
        n[0] = i),
        t.setTexture2D(e || af, i)
    }
    function t0(s, e, t) {
        const n = this.cache
          , i = t.allocateTextureUnit();
        n[0] !== i && (s.uniform1i(this.addr, i),
        n[0] = i),
        t.setTexture3D(e || cf, i)
    }
    function n0(s, e, t) {
        const n = this.cache
          , i = t.allocateTextureUnit();
        n[0] !== i && (s.uniform1i(this.addr, i),
        n[0] = i),
        t.setTextureCube(e || uf, i)
    }
    function i0(s, e, t) {
        const n = this.cache
          , i = t.allocateTextureUnit();
        n[0] !== i && (s.uniform1i(this.addr, i),
        n[0] = i),
        t.setTexture2DArray(e || lf, i)
    }
    function r0(s) {
        switch (s) {
        case 5126:
            return k_;
        case 35664:
            return B_;
        case 35665:
            return G_;
        case 35666:
            return V_;
        case 35674:
            return H_;
        case 35675:
            return W_;
        case 35676:
            return X_;
        case 5124:
        case 35670:
            return q_;
        case 35667:
        case 35671:
            return Y_;
        case 35668:
        case 35672:
            return $_;
        case 35669:
        case 35673:
            return j_;
        case 5125:
            return Z_;
        case 36294:
            return K_;
        case 36295:
            return J_;
        case 36296:
            return Q_;
        case 35678:
        case 36198:
        case 36298:
        case 36306:
        case 35682:
            return e0;
        case 35679:
        case 36299:
        case 36307:
            return t0;
        case 35680:
        case 36300:
        case 36308:
        case 36293:
            return n0;
        case 36289:
        case 36303:
        case 36311:
        case 36292:
            return i0
        }
    }
    function s0(s, e) {
        s.uniform1fv(this.addr, e)
    }
    function o0(s, e) {
        const t = ns(e, this.size, 2);
        s.uniform2fv(this.addr, t)
    }
    function a0(s, e) {
        const t = ns(e, this.size, 3);
        s.uniform3fv(this.addr, t)
    }
    function l0(s, e) {
        const t = ns(e, this.size, 4);
        s.uniform4fv(this.addr, t)
    }
    function c0(s, e) {
        const t = ns(e, this.size, 4);
        s.uniformMatrix2fv(this.addr, !1, t)
    }
    function u0(s, e) {
        const t = ns(e, this.size, 9);
        s.uniformMatrix3fv(this.addr, !1, t)
    }
    function f0(s, e) {
        const t = ns(e, this.size, 16);
        s.uniformMatrix4fv(this.addr, !1, t)
    }
    function h0(s, e) {
        s.uniform1iv(this.addr, e)
    }
    function d0(s, e) {
        s.uniform2iv(this.addr, e)
    }
    function p0(s, e) {
        s.uniform3iv(this.addr, e)
    }
    function m0(s, e) {
        s.uniform4iv(this.addr, e)
    }
    function g0(s, e) {
        s.uniform1uiv(this.addr, e)
    }
    function _0(s, e) {
        s.uniform2uiv(this.addr, e)
    }
    function x0(s, e) {
        s.uniform3uiv(this.addr, e)
    }
    function v0(s, e) {
        s.uniform4uiv(this.addr, e)
    }
    function y0(s, e, t) {
        const n = e.length
          , i = Xo(t, n);
        s.uniform1iv(this.addr, i);
        for (let r = 0; r !== n; ++r)
            t.setTexture2D(e[r] || af, i[r])
    }
    function b0(s, e, t) {
        const n = e.length
          , i = Xo(t, n);
        s.uniform1iv(this.addr, i);
        for (let r = 0; r !== n; ++r)
            t.setTexture3D(e[r] || cf, i[r])
    }
    function M0(s, e, t) {
        const n = e.length
          , i = Xo(t, n);
        s.uniform1iv(this.addr, i);
        for (let r = 0; r !== n; ++r)
            t.setTextureCube(e[r] || uf, i[r])
    }
    function S0(s, e, t) {
        const n = e.length
          , i = Xo(t, n);
        s.uniform1iv(this.addr, i);
        for (let r = 0; r !== n; ++r)
            t.setTexture2DArray(e[r] || lf, i[r])
    }
    function w0(s) {
        switch (s) {
        case 5126:
            return s0;
        case 35664:
            return o0;
        case 35665:
            return a0;
        case 35666:
            return l0;
        case 35674:
            return c0;
        case 35675:
            return u0;
        case 35676:
            return f0;
        case 5124:
        case 35670:
            return h0;
        case 35667:
        case 35671:
            return d0;
        case 35668:
        case 35672:
            return p0;
        case 35669:
        case 35673:
            return m0;
        case 5125:
            return g0;
        case 36294:
            return _0;
        case 36295:
            return x0;
        case 36296:
            return v0;
        case 35678:
        case 36198:
        case 36298:
        case 36306:
        case 35682:
            return y0;
        case 35679:
        case 36299:
        case 36307:
            return b0;
        case 35680:
        case 36300:
        case 36308:
        case 36293:
            return M0;
        case 36289:
        case 36303:
        case 36311:
        case 36292:
            return S0
        }
    }
    class T0 {
        constructor(e, t, n) {
            this.id = e,
            this.addr = n,
            this.cache = [],
            this.setValue = r0(t.type)
        }
    }
    class E0 {
        constructor(e, t, n) {
            this.id = e,
            this.addr = n,
            this.cache = [],
            this.size = t.size,
            this.setValue = w0(t.type)
        }
    }
    class C0 {
        constructor(e) {
            this.id = e,
            this.seq = [],
            this.map = {}
        }
        setValue(e, t, n) {
            const i = this.seq;
            for (let r = 0, a = i.length; r !== a; ++r) {
                const o = i[r];
                o.setValue(e, t[o.id], n)
            }
        }
    }
    const Cl = /(\w+)(\])?(\[|\.)?/g;
    function gf(s, e) {
        s.seq.push(e),
        s.map[e.id] = e
    }
    function A0(s, e, t) {
        const n = s.name
          , i = n.length;
        for (Cl.lastIndex = 0; ; ) {
            const r = Cl.exec(n)
              , a = Cl.lastIndex;
            let o = r[1];
            const c = r[2] === "]"
              , l = r[3];
            if (c && (o = o | 0),
            l === void 0 || l === "[" && a + 2 === i) {
                gf(t, l === void 0 ? new T0(o,s,e) : new E0(o,s,e));
                break
            } else {
                let f = t.map[o];
                f === void 0 && (f = new C0(o),
                gf(t, f)),
                t = f
            }
        }
    }
    class qo {
        constructor(e, t) {
            this.seq = [],
            this.map = {};
            const n = e.getProgramParameter(t, 35718);
            for (let i = 0; i < n; ++i) {
                const r = e.getActiveUniform(t, i)
                  , a = e.getUniformLocation(t, r.name);
                A0(r, a, this)
            }
        }
        setValue(e, t, n, i) {
            const r = this.map[t];
            r !== void 0 && r.setValue(e, n, i)
        }
        setOptional(e, t, n) {
            const i = t[n];
            i !== void 0 && this.setValue(e, n, i)
        }
        static upload(e, t, n, i) {
            for (let r = 0, a = t.length; r !== a; ++r) {
                const o = t[r]
                  , c = n[o.id];
                c.needsUpdate !== !1 && o.setValue(e, c.value, i)
            }
        }
        static seqWithValue(e, t) {
            const n = [];
            for (let i = 0, r = e.length; i !== r; ++i) {
                const a = e[i];
                a.id in t && n.push(a)
            }
            return n
        }
    }
    function _f(s, e, t) {
        const n = s.createShader(e);
        return s.shaderSource(n, t),
        s.compileShader(n),
        n
    }
    let P0 = 0;
    function D0(s, e) {
        const t = s.split(`
`)
          , n = []
          , i = Math.max(e - 6, 0)
          , r = Math.min(e + 6, t.length);
        for (let a = i; a < r; a++) {
            const o = a + 1;
            n.push(`${o === e ? ">" : " "} ${o}: ${t[a]}`)
        }
        return n.join(`
`)
    }
    function L0(s) {
        switch (s) {
        case Zi:
            return ["Linear", "( value )"];
        case at:
            return ["sRGB", "( value )"];
        default:
            return console.warn("THREE.WebGLProgram: Unsupported encoding:", s),
            ["Linear", "( value )"]
        }
    }
    function xf(s, e, t) {
        const n = s.getShaderParameter(e, 35713)
          , i = s.getShaderInfoLog(e).trim();
        if (n && i === "")
            return "";
        const r = /ERROR: 0:(\d+)/.exec(i);
        if (r) {
            const a = parseInt(r[1]);
            return t.toUpperCase() + `

` + i + `

` + D0(s.getShaderSource(e), a)
        } else
            return i
    }
    function R0(s, e) {
        const t = L0(e);
        return "vec4 " + s + "( vec4 value ) { return LinearTo" + t[0] + t[1] + "; }"
    }
    function I0(s, e) {
        let t;
        switch (e) {
        case Rp:
            t = "Linear";
            break;
        case Ip:
            t = "Reinhard";
            break;
        case Fp:
            t = "OptimizedCineon";
            break;
        case zp:
            t = "ACESFilmic";
            break;
        case Op:
            t = "Custom";
            break;
        default:
            console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e),
            t = "Linear"
        }
        return "vec3 " + s + "( vec3 color ) { return " + t + "ToneMapping( color ); }"
    }
    function F0(s) {
        return [s.extensionDerivatives || !!s.envMapCubeUVHeight || s.bumpMap || s.tangentSpaceNormalMap || s.clearcoatNormalMap || s.flatShading || s.shaderID === "physical" ? "#extension GL_OES_standard_derivatives : enable" : "", (s.extensionFragDepth || s.logarithmicDepthBuffer) && s.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "", s.extensionDrawBuffers && s.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "", (s.extensionShaderTextureLOD || s.envMap || s.transmission) && s.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""].filter(Us).join(`
`)
    }
    function z0(s) {
        const e = [];
        for (const t in s) {
            const n = s[t];
            n !== !1 && e.push("#define " + t + " " + n)
        }
        return e.join(`
`)
    }
    function O0(s, e) {
        const t = {}
          , n = s.getProgramParameter(e, 35721);
        for (let i = 0; i < n; i++) {
            const r = s.getActiveAttrib(e, i)
              , a = r.name;
            let o = 1;
            r.type === 35674 && (o = 2),
            r.type === 35675 && (o = 3),
            r.type === 35676 && (o = 4),
            t[a] = {
                type: r.type,
                location: s.getAttribLocation(e, a),
                locationSize: o
            }
        }
        return t
    }
    function Us(s) {
        return s !== ""
    }
    function vf(s, e) {
        return s.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows)
    }
    function yf(s, e) {
        return s.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection)
    }
    const N0 = /^[ \t]*#include +<([\w\d./]+)>/gm;
    function Al(s) {
        return s.replace(N0, U0)
    }
    function U0(s, e) {
        const t = Ge[e];
        if (t === void 0)
            throw new Error("Can not resolve #include <" + e + ">");
        return Al(t)
    }
    const k0 = /#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g
      , B0 = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
    function bf(s) {
        return s.replace(B0, Mf).replace(k0, G0)
    }
    function G0(s, e, t, n) {
        return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),
        Mf(s, e, t, n)
    }
    function Mf(s, e, t, n) {
        let i = "";
        for (let r = parseInt(e); r < parseInt(t); r++)
            i += n.replace(/\[\s*i\s*\]/g, "[ " + r + " ]").replace(/UNROLLED_LOOP_INDEX/g, r);
        return i
    }
    function Sf(s) {
        let e = "precision " + s.precision + ` float;
precision ` + s.precision + " int;";
        return s.precision === "highp" ? e += `
#define HIGH_PRECISION` : s.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : s.precision === "lowp" && (e += `
#define LOW_PRECISION`),
        e
    }
    function V0(s) {
        let e = "SHADOWMAP_TYPE_BASIC";
        return s.shadowMapType === Wc ? e = "SHADOWMAP_TYPE_PCF" : s.shadowMapType === cp ? e = "SHADOWMAP_TYPE_PCF_SOFT" : s.shadowMapType === Es && (e = "SHADOWMAP_TYPE_VSM"),
        e
    }
    function H0(s) {
        let e = "ENVMAP_TYPE_CUBE";
        if (s.envMap)
            switch (s.envMapMode) {
            case Or:
            case Nr:
                e = "ENVMAP_TYPE_CUBE";
                break;
            case bo:
                e = "ENVMAP_TYPE_CUBE_UV";
                break
            }
        return e
    }
    function W0(s) {
        let e = "ENVMAP_MODE_REFLECTION";
        if (s.envMap)
            switch (s.envMapMode) {
            case Nr:
                e = "ENVMAP_MODE_REFRACTION";
                break
            }
        return e
    }
    function X0(s) {
        let e = "ENVMAP_BLENDING_NONE";
        if (s.envMap)
            switch (s.combine) {
            case Jc:
                e = "ENVMAP_BLENDING_MULTIPLY";
                break;
            case Dp:
                e = "ENVMAP_BLENDING_MIX";
                break;
            case Lp:
                e = "ENVMAP_BLENDING_ADD";
                break
            }
        return e
    }
    function q0(s) {
        const e = s.envMapCubeUVHeight;
        if (e === null)
            return null;
        const t = Math.log2(e) - 2
          , n = 1 / e;
        return {
            texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)),
            texelHeight: n,
            maxMip: t
        }
    }
    function Y0(s, e, t, n) {
        const i = s.getContext()
          , r = t.defines;
        let a = t.vertexShader
          , o = t.fragmentShader;
        const c = V0(t)
          , l = H0(t)
          , u = W0(t)
          , f = X0(t)
          , h = q0(t)
          , m = t.isWebGL2 ? "" : F0(t)
          , g = z0(r)
          , d = i.createProgram();
        let p, _, y = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
        t.isRawShaderMaterial ? (p = [g].filter(Us).join(`
`),
        p.length > 0 && (p += `
`),
        _ = [m, g].filter(Us).join(`
`),
        _.length > 0 && (_ += `
`)) : (p = [Sf(t), "#define SHADER_NAME " + t.shaderName, g, t.instancing ? "#define USE_INSTANCING" : "", t.instancingColor ? "#define USE_INSTANCING_COLOR" : "", t.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", t.useFog && t.fog ? "#define USE_FOG" : "", t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "", t.map ? "#define USE_MAP" : "", t.envMap ? "#define USE_ENVMAP" : "", t.envMap ? "#define " + u : "", t.lightMap ? "#define USE_LIGHTMAP" : "", t.aoMap ? "#define USE_AOMAP" : "", t.emissiveMap ? "#define USE_EMISSIVEMAP" : "", t.bumpMap ? "#define USE_BUMPMAP" : "", t.normalMap ? "#define USE_NORMALMAP" : "", t.normalMap && t.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", t.normalMap && t.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", t.displacementMap && t.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", t.specularMap ? "#define USE_SPECULARMAP" : "", t.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "", t.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "", t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", t.metalnessMap ? "#define USE_METALNESSMAP" : "", t.alphaMap ? "#define USE_ALPHAMAP" : "", t.transmission ? "#define USE_TRANSMISSION" : "", t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", t.thicknessMap ? "#define USE_THICKNESSMAP" : "", t.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "", t.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "", t.vertexTangents ? "#define USE_TANGENT" : "", t.vertexColors ? "#define USE_COLOR" : "", t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", t.vertexUvs ? "#define USE_UV" : "", t.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", t.flatShading ? "#define FLAT_SHADED" : "", t.skinning ? "#define USE_SKINNING" : "", t.morphTargets ? "#define USE_MORPHTARGETS" : "", t.morphNormals && t.flatShading === !1 ? "#define USE_MORPHNORMALS" : "", t.morphColors && t.isWebGL2 ? "#define USE_MORPHCOLORS" : "", t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_TEXTURE" : "", t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "", t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "", t.doubleSided ? "#define DOUBLE_SIDED" : "", t.flipSided ? "#define FLIP_SIDED" : "", t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", t.shadowMapEnabled ? "#define " + c : "", t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "	attribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "	attribute vec3 instanceColor;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_TANGENT", "	attribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "	attribute vec4 color;", "#elif defined( USE_COLOR )", "	attribute vec3 color;", "#endif", "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )", "	attribute vec3 morphTarget0;", "	attribute vec3 morphTarget1;", "	attribute vec3 morphTarget2;", "	attribute vec3 morphTarget3;", "	#ifdef USE_MORPHNORMALS", "		attribute vec3 morphNormal0;", "		attribute vec3 morphNormal1;", "		attribute vec3 morphNormal2;", "		attribute vec3 morphNormal3;", "	#else", "		attribute vec3 morphTarget4;", "		attribute vec3 morphTarget5;", "		attribute vec3 morphTarget6;", "		attribute vec3 morphTarget7;", "	#endif", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", `
`].filter(Us).join(`
`),
        _ = [m, Sf(t), "#define SHADER_NAME " + t.shaderName, g, t.useFog && t.fog ? "#define USE_FOG" : "", t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "", t.map ? "#define USE_MAP" : "", t.matcap ? "#define USE_MATCAP" : "", t.envMap ? "#define USE_ENVMAP" : "", t.envMap ? "#define " + l : "", t.envMap ? "#define " + u : "", t.envMap ? "#define " + f : "", h ? "#define CUBEUV_TEXEL_WIDTH " + h.texelWidth : "", h ? "#define CUBEUV_TEXEL_HEIGHT " + h.texelHeight : "", h ? "#define CUBEUV_MAX_MIP " + h.maxMip + ".0" : "", t.lightMap ? "#define USE_LIGHTMAP" : "", t.aoMap ? "#define USE_AOMAP" : "", t.emissiveMap ? "#define USE_EMISSIVEMAP" : "", t.bumpMap ? "#define USE_BUMPMAP" : "", t.normalMap ? "#define USE_NORMALMAP" : "", t.normalMap && t.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", t.normalMap && t.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", t.clearcoat ? "#define USE_CLEARCOAT" : "", t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", t.iridescence ? "#define USE_IRIDESCENCE" : "", t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", t.specularMap ? "#define USE_SPECULARMAP" : "", t.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "", t.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "", t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", t.metalnessMap ? "#define USE_METALNESSMAP" : "", t.alphaMap ? "#define USE_ALPHAMAP" : "", t.alphaTest ? "#define USE_ALPHATEST" : "", t.sheen ? "#define USE_SHEEN" : "", t.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "", t.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "", t.transmission ? "#define USE_TRANSMISSION" : "", t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", t.thicknessMap ? "#define USE_THICKNESSMAP" : "", t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "", t.vertexTangents ? "#define USE_TANGENT" : "", t.vertexColors || t.instancingColor ? "#define USE_COLOR" : "", t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", t.vertexUvs ? "#define USE_UV" : "", t.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", t.gradientMap ? "#define USE_GRADIENTMAP" : "", t.flatShading ? "#define FLAT_SHADED" : "", t.doubleSided ? "#define DOUBLE_SIDED" : "", t.flipSided ? "#define FLIP_SIDED" : "", t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", t.shadowMapEnabled ? "#define " + c : "", t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", t.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", t.toneMapping !== ti ? "#define TONE_MAPPING" : "", t.toneMapping !== ti ? Ge.tonemapping_pars_fragment : "", t.toneMapping !== ti ? I0("toneMapping", t.toneMapping) : "", t.dithering ? "#define DITHERING" : "", t.opaque ? "#define OPAQUE" : "", Ge.encodings_pars_fragment, R0("linearToOutputTexel", t.outputEncoding), t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "", `
`].filter(Us).join(`
`)),
        a = Al(a),
        a = vf(a, t),
        a = yf(a, t),
        o = Al(o),
        o = vf(o, t),
        o = yf(o, t),
        a = bf(a),
        o = bf(o),
        t.isWebGL2 && t.isRawShaderMaterial !== !0 && (y = `#version 300 es
`,
        p = ["precision mediump sampler2DArray;", "#define attribute in", "#define varying out", "#define texture2D texture"].join(`
`) + `
` + p,
        _ = ["#define varying in", t.glslVersion === Tu ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", t.glslVersion === Tu ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join(`
`) + `
` + _);
        const M = y + p + a
          , x = y + _ + o
          , b = _f(i, 35633, M)
          , S = _f(i, 35632, x);
        if (i.attachShader(d, b),
        i.attachShader(d, S),
        t.index0AttributeName !== void 0 ? i.bindAttribLocation(d, 0, t.index0AttributeName) : t.morphTargets === !0 && i.bindAttribLocation(d, 0, "position"),
        i.linkProgram(d),
        s.debug.checkShaderErrors) {
            const w = i.getProgramInfoLog(d).trim()
              , L = i.getShaderInfoLog(b).trim()
              , F = i.getShaderInfoLog(S).trim();
            let V = !0
              , K = !0;
            if (i.getProgramParameter(d, 35714) === !1) {
                V = !1;
                const R = xf(i, b, "vertex")
                  , U = xf(i, S, "fragment");
                console.error("THREE.WebGLProgram: Shader Error " + i.getError() + " - VALIDATE_STATUS " + i.getProgramParameter(d, 35715) + `

Program Info Log: ` + w + `
` + R + `
` + U)
            } else
                w !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", w) : (L === "" || F === "") && (K = !1);
            K && (this.diagnostics = {
                runnable: V,
                programLog: w,
                vertexShader: {
                    log: L,
                    prefix: p
                },
                fragmentShader: {
                    log: F,
                    prefix: _
                }
            })
        }
        i.deleteShader(b),
        i.deleteShader(S);
        let A;
        this.getUniforms = function() {
            return A === void 0 && (A = new qo(i,d)),
            A
        }
        ;
        let v;
        return this.getAttributes = function() {
            return v === void 0 && (v = O0(i, d)),
            v
        }
        ,
        this.destroy = function() {
            n.releaseStatesOfProgram(this),
            i.deleteProgram(d),
            this.program = void 0
        }
        ,
        this.name = t.shaderName,
        this.id = P0++,
        this.cacheKey = e,
        this.usedTimes = 1,
        this.program = d,
        this.vertexShader = b,
        this.fragmentShader = S,
        this
    }
    let $0 = 0;
    class j0 {
        constructor() {
            this.shaderCache = new Map,
            this.materialCache = new Map
        }
        update(e) {
            const t = e.vertexShader
              , n = e.fragmentShader
              , i = this._getShaderStage(t)
              , r = this._getShaderStage(n)
              , a = this._getShaderCacheForMaterial(e);
            return a.has(i) === !1 && (a.add(i),
            i.usedTimes++),
            a.has(r) === !1 && (a.add(r),
            r.usedTimes++),
            this
        }
        remove(e) {
            const t = this.materialCache.get(e);
            for (const n of t)
                n.usedTimes--,
                n.usedTimes === 0 && this.shaderCache.delete(n.code);
            return this.materialCache.delete(e),
            this
        }
        getVertexShaderID(e) {
            return this._getShaderStage(e.vertexShader).id
        }
        getFragmentShaderID(e) {
            return this._getShaderStage(e.fragmentShader).id
        }
        dispose() {
            this.shaderCache.clear(),
            this.materialCache.clear()
        }
        _getShaderCacheForMaterial(e) {
            const t = this.materialCache;
            return t.has(e) === !1 && t.set(e, new Set),
            t.get(e)
        }
        _getShaderStage(e) {
            const t = this.shaderCache;
            if (t.has(e) === !1) {
                const n = new Z0(e);
                t.set(e, n)
            }
            return t.get(e)
        }
    }
    class Z0 {
        constructor(e) {
            this.id = $0++,
            this.code = e,
            this.usedTimes = 0
        }
    }
    function K0(s, e, t, n, i, r, a) {
        const o = new ul
          , c = new j0
          , l = []
          , u = i.isWebGL2
          , f = i.logarithmicDepthBuffer
          , h = i.vertexTextures;
        let m = i.precision;
        const g = {
            MeshDepthMaterial: "depth",
            MeshDistanceMaterial: "distanceRGBA",
            MeshNormalMaterial: "normal",
            MeshBasicMaterial: "basic",
            MeshLambertMaterial: "lambert",
            MeshPhongMaterial: "phong",
            MeshToonMaterial: "toon",
            MeshStandardMaterial: "physical",
            MeshPhysicalMaterial: "physical",
            MeshMatcapMaterial: "matcap",
            LineBasicMaterial: "basic",
            LineDashedMaterial: "dashed",
            PointsMaterial: "points",
            ShadowMaterial: "shadow",
            SpriteMaterial: "sprite"
        };
        function d(v, w, L, F, V) {
            const K = F.fog
              , R = V.geometry
              , U = v.isMeshStandardMaterial ? F.environment : null
              , z = (v.isMeshStandardMaterial ? t : e).get(v.envMap || U)
              , W = !!z && z.mapping === bo ? z.image.height : null
              , X = g[v.type];
            v.precision !== null && (m = i.getMaxPrecision(v.precision),
            m !== v.precision && console.warn("THREE.WebGLProgram.getParameters:", v.precision, "not supported, using", m, "instead."));
            const G = R.morphAttributes.position || R.morphAttributes.normal || R.morphAttributes.color
              , P = G !== void 0 ? G.length : 0;
            let ee = 0;
            R.morphAttributes.position !== void 0 && (ee = 1),
            R.morphAttributes.normal !== void 0 && (ee = 2),
            R.morphAttributes.color !== void 0 && (ee = 3);
            let te, ie, ce, Me;
            if (X) {
                const Ne = $n[X];
                te = Ne.vertexShader,
                ie = Ne.fragmentShader
            } else
                te = v.vertexShader,
                ie = v.fragmentShader,
                c.update(v),
                ce = c.getVertexShaderID(v),
                Me = c.getFragmentShaderID(v);
            const H = s.getRenderTarget()
              , Le = v.alphaTest > 0
              , xe = v.clearcoat > 0
              , Ce = v.iridescence > 0;
            return {
                isWebGL2: u,
                shaderID: X,
                shaderName: v.type,
                vertexShader: te,
                fragmentShader: ie,
                defines: v.defines,
                customVertexShaderID: ce,
                customFragmentShaderID: Me,
                isRawShaderMaterial: v.isRawShaderMaterial === !0,
                glslVersion: v.glslVersion,
                precision: m,
                instancing: V.isInstancedMesh === !0,
                instancingColor: V.isInstancedMesh === !0 && V.instanceColor !== null,
                supportsVertexTextures: h,
                outputEncoding: H === null ? s.outputEncoding : H.isXRRenderTarget === !0 ? H.texture.encoding : Zi,
                map: !!v.map,
                matcap: !!v.matcap,
                envMap: !!z,
                envMapMode: z && z.mapping,
                envMapCubeUVHeight: W,
                lightMap: !!v.lightMap,
                aoMap: !!v.aoMap,
                emissiveMap: !!v.emissiveMap,
                bumpMap: !!v.bumpMap,
                normalMap: !!v.normalMap,
                objectSpaceNormalMap: v.normalMapType === nm,
                tangentSpaceNormalMap: v.normalMapType === tm,
                decodeVideoTexture: !!v.map && v.map.isVideoTexture === !0 && v.map.encoding === at,
                clearcoat: xe,
                clearcoatMap: xe && !!v.clearcoatMap,
                clearcoatRoughnessMap: xe && !!v.clearcoatRoughnessMap,
                clearcoatNormalMap: xe && !!v.clearcoatNormalMap,
                iridescence: Ce,
                iridescenceMap: Ce && !!v.iridescenceMap,
                iridescenceThicknessMap: Ce && !!v.iridescenceThicknessMap,
                displacementMap: !!v.displacementMap,
                roughnessMap: !!v.roughnessMap,
                metalnessMap: !!v.metalnessMap,
                specularMap: !!v.specularMap,
                specularIntensityMap: !!v.specularIntensityMap,
                specularColorMap: !!v.specularColorMap,
                opaque: v.transparent === !1 && v.blending === Fr,
                alphaMap: !!v.alphaMap,
                alphaTest: Le,
                gradientMap: !!v.gradientMap,
                sheen: v.sheen > 0,
                sheenColorMap: !!v.sheenColorMap,
                sheenRoughnessMap: !!v.sheenRoughnessMap,
                transmission: v.transmission > 0,
                transmissionMap: !!v.transmissionMap,
                thicknessMap: !!v.thicknessMap,
                combine: v.combine,
                vertexTangents: !!v.normalMap && !!R.attributes.tangent,
                vertexColors: v.vertexColors,
                vertexAlphas: v.vertexColors === !0 && !!R.attributes.color && R.attributes.color.itemSize === 4,
                vertexUvs: !!v.map || !!v.bumpMap || !!v.normalMap || !!v.specularMap || !!v.alphaMap || !!v.emissiveMap || !!v.roughnessMap || !!v.metalnessMap || !!v.clearcoatMap || !!v.clearcoatRoughnessMap || !!v.clearcoatNormalMap || !!v.iridescenceMap || !!v.iridescenceThicknessMap || !!v.displacementMap || !!v.transmissionMap || !!v.thicknessMap || !!v.specularIntensityMap || !!v.specularColorMap || !!v.sheenColorMap || !!v.sheenRoughnessMap,
                uvsVertexOnly: !(!!v.map || !!v.bumpMap || !!v.normalMap || !!v.specularMap || !!v.alphaMap || !!v.emissiveMap || !!v.roughnessMap || !!v.metalnessMap || !!v.clearcoatNormalMap || !!v.iridescenceMap || !!v.iridescenceThicknessMap || v.transmission > 0 || !!v.transmissionMap || !!v.thicknessMap || !!v.specularIntensityMap || !!v.specularColorMap || v.sheen > 0 || !!v.sheenColorMap || !!v.sheenRoughnessMap) && !!v.displacementMap,
                fog: !!K,
                useFog: v.fog === !0,
                fogExp2: K && K.isFogExp2,
                flatShading: !!v.flatShading,
                sizeAttenuation: v.sizeAttenuation,
                logarithmicDepthBuffer: f,
                skinning: V.isSkinnedMesh === !0,
                morphTargets: R.morphAttributes.position !== void 0,
                morphNormals: R.morphAttributes.normal !== void 0,
                morphColors: R.morphAttributes.color !== void 0,
                morphTargetsCount: P,
                morphTextureStride: ee,
                numDirLights: w.directional.length,
                numPointLights: w.point.length,
                numSpotLights: w.spot.length,
                numRectAreaLights: w.rectArea.length,
                numHemiLights: w.hemi.length,
                numDirLightShadows: w.directionalShadowMap.length,
                numPointLightShadows: w.pointShadowMap.length,
                numSpotLightShadows: w.spotShadowMap.length,
                numClippingPlanes: a.numPlanes,
                numClipIntersection: a.numIntersection,
                dithering: v.dithering,
                shadowMapEnabled: s.shadowMap.enabled && L.length > 0,
                shadowMapType: s.shadowMap.type,
                toneMapping: v.toneMapped ? s.toneMapping : ti,
                physicallyCorrectLights: s.physicallyCorrectLights,
                premultipliedAlpha: v.premultipliedAlpha,
                doubleSided: v.side === Ir,
                flipSided: v.side === Rn,
                useDepthPacking: !!v.depthPacking,
                depthPacking: v.depthPacking || 0,
                index0AttributeName: v.index0AttributeName,
                extensionDerivatives: v.extensions && v.extensions.derivatives,
                extensionFragDepth: v.extensions && v.extensions.fragDepth,
                extensionDrawBuffers: v.extensions && v.extensions.drawBuffers,
                extensionShaderTextureLOD: v.extensions && v.extensions.shaderTextureLOD,
                rendererExtensionFragDepth: u || n.has("EXT_frag_depth"),
                rendererExtensionDrawBuffers: u || n.has("WEBGL_draw_buffers"),
                rendererExtensionShaderTextureLod: u || n.has("EXT_shader_texture_lod"),
                customProgramCacheKey: v.customProgramCacheKey()
            }
        }
        function p(v) {
            const w = [];
            if (v.shaderID ? w.push(v.shaderID) : (w.push(v.customVertexShaderID),
            w.push(v.customFragmentShaderID)),
            v.defines !== void 0)
                for (const L in v.defines)
                    w.push(L),
                    w.push(v.defines[L]);
            return v.isRawShaderMaterial === !1 && (_(w, v),
            y(w, v),
            w.push(s.outputEncoding)),
            w.push(v.customProgramCacheKey),
            w.join()
        }
        function _(v, w) {
            v.push(w.precision),
            v.push(w.outputEncoding),
            v.push(w.envMapMode),
            v.push(w.envMapCubeUVHeight),
            v.push(w.combine),
            v.push(w.vertexUvs),
            v.push(w.fogExp2),
            v.push(w.sizeAttenuation),
            v.push(w.morphTargetsCount),
            v.push(w.morphAttributeCount),
            v.push(w.numDirLights),
            v.push(w.numPointLights),
            v.push(w.numSpotLights),
            v.push(w.numHemiLights),
            v.push(w.numRectAreaLights),
            v.push(w.numDirLightShadows),
            v.push(w.numPointLightShadows),
            v.push(w.numSpotLightShadows),
            v.push(w.shadowMapType),
            v.push(w.toneMapping),
            v.push(w.numClippingPlanes),
            v.push(w.numClipIntersection),
            v.push(w.depthPacking)
        }
        function y(v, w) {
            o.disableAll(),
            w.isWebGL2 && o.enable(0),
            w.supportsVertexTextures && o.enable(1),
            w.instancing && o.enable(2),
            w.instancingColor && o.enable(3),
            w.map && o.enable(4),
            w.matcap && o.enable(5),
            w.envMap && o.enable(6),
            w.lightMap && o.enable(7),
            w.aoMap && o.enable(8),
            w.emissiveMap && o.enable(9),
            w.bumpMap && o.enable(10),
            w.normalMap && o.enable(11),
            w.objectSpaceNormalMap && o.enable(12),
            w.tangentSpaceNormalMap && o.enable(13),
            w.clearcoat && o.enable(14),
            w.clearcoatMap && o.enable(15),
            w.clearcoatRoughnessMap && o.enable(16),
            w.clearcoatNormalMap && o.enable(17),
            w.iridescence && o.enable(18),
            w.iridescenceMap && o.enable(19),
            w.iridescenceThicknessMap && o.enable(20),
            w.displacementMap && o.enable(21),
            w.specularMap && o.enable(22),
            w.roughnessMap && o.enable(23),
            w.metalnessMap && o.enable(24),
            w.gradientMap && o.enable(25),
            w.alphaMap && o.enable(26),
            w.alphaTest && o.enable(27),
            w.vertexColors && o.enable(28),
            w.vertexAlphas && o.enable(29),
            w.vertexUvs && o.enable(30),
            w.vertexTangents && o.enable(31),
            w.uvsVertexOnly && o.enable(32),
            w.fog && o.enable(33),
            v.push(o.mask),
            o.disableAll(),
            w.useFog && o.enable(0),
            w.flatShading && o.enable(1),
            w.logarithmicDepthBuffer && o.enable(2),
            w.skinning && o.enable(3),
            w.morphTargets && o.enable(4),
            w.morphNormals && o.enable(5),
            w.morphColors && o.enable(6),
            w.premultipliedAlpha && o.enable(7),
            w.shadowMapEnabled && o.enable(8),
            w.physicallyCorrectLights && o.enable(9),
            w.doubleSided && o.enable(10),
            w.flipSided && o.enable(11),
            w.useDepthPacking && o.enable(12),
            w.dithering && o.enable(13),
            w.specularIntensityMap && o.enable(14),
            w.specularColorMap && o.enable(15),
            w.transmission && o.enable(16),
            w.transmissionMap && o.enable(17),
            w.thicknessMap && o.enable(18),
            w.sheen && o.enable(19),
            w.sheenColorMap && o.enable(20),
            w.sheenRoughnessMap && o.enable(21),
            w.decodeVideoTexture && o.enable(22),
            w.opaque && o.enable(23),
            v.push(o.mask)
        }
        function M(v) {
            const w = g[v.type];
            let L;
            if (w) {
                const F = $n[w];
                L = $u.clone(F.uniforms)
            } else
                L = v.uniforms;
            return L
        }
        function x(v, w) {
            let L;
            for (let F = 0, V = l.length; F < V; F++) {
                const K = l[F];
                if (K.cacheKey === w) {
                    L = K,
                    ++L.usedTimes;
                    break
                }
            }
            return L === void 0 && (L = new Y0(s,w,v,r),
            l.push(L)),
            L
        }
        function b(v) {
            if (--v.usedTimes == 0) {
                const w = l.indexOf(v);
                l[w] = l[l.length - 1],
                l.pop(),
                v.destroy()
            }
        }
        function S(v) {
            c.remove(v)
        }
        function A() {
            c.dispose()
        }
        return {
            getParameters: d,
            getProgramCacheKey: p,
            getUniforms: M,
            acquireProgram: x,
            releaseProgram: b,
            releaseShaderCache: S,
            programs: l,
            dispose: A
        }
    }
    function J0() {
        let s = new WeakMap;
        function e(r) {
            let a = s.get(r);
            return a === void 0 && (a = {},
            s.set(r, a)),
            a
        }
        function t(r) {
            s.delete(r)
        }
        function n(r, a, o) {
            s.get(r)[a] = o
        }
        function i() {
            s = new WeakMap
        }
        return {
            get: e,
            remove: t,
            update: n,
            dispose: i
        }
    }
    function Q0(s, e) {
        return s.groupOrder !== e.groupOrder ? s.groupOrder - e.groupOrder : s.renderOrder !== e.renderOrder ? s.renderOrder - e.renderOrder : s.material.id !== e.material.id ? s.material.id - e.material.id : s.z !== e.z ? s.z - e.z : s.id - e.id
    }
    function wf(s, e) {
        return s.groupOrder !== e.groupOrder ? s.groupOrder - e.groupOrder : s.renderOrder !== e.renderOrder ? s.renderOrder - e.renderOrder : s.z !== e.z ? e.z - s.z : s.id - e.id
    }
    function Tf() {
        const s = [];
        let e = 0;
        const t = []
          , n = []
          , i = [];
        function r() {
            e = 0,
            t.length = 0,
            n.length = 0,
            i.length = 0
        }
        function a(f, h, m, g, d, p) {
            let _ = s[e];
            return _ === void 0 ? (_ = {
                id: f.id,
                object: f,
                geometry: h,
                material: m,
                groupOrder: g,
                renderOrder: f.renderOrder,
                z: d,
                group: p
            },
            s[e] = _) : (_.id = f.id,
            _.object = f,
            _.geometry = h,
            _.material = m,
            _.groupOrder = g,
            _.renderOrder = f.renderOrder,
            _.z = d,
            _.group = p),
            e++,
            _
        }
        function o(f, h, m, g, d, p) {
            const _ = a(f, h, m, g, d, p);
            m.transmission > 0 ? n.push(_) : m.transparent === !0 ? i.push(_) : t.push(_)
        }
        function c(f, h, m, g, d, p) {
            const _ = a(f, h, m, g, d, p);
            m.transmission > 0 ? n.unshift(_) : m.transparent === !0 ? i.unshift(_) : t.unshift(_)
        }
        function l(f, h) {
            t.length > 1 && t.sort(f || Q0),
            n.length > 1 && n.sort(h || wf),
            i.length > 1 && i.sort(h || wf)
        }
        function u() {
            for (let f = e, h = s.length; f < h; f++) {
                const m = s[f];
                if (m.id === null)
                    break;
                m.id = null,
                m.object = null,
                m.geometry = null,
                m.material = null,
                m.group = null
            }
        }
        return {
            opaque: t,
            transmissive: n,
            transparent: i,
            init: r,
            push: o,
            unshift: c,
            finish: u,
            sort: l
        }
    }
    function ex() {
        let s = new WeakMap;
        function e(n, i) {
            let r;
            return s.has(n) === !1 ? (r = new Tf,
            s.set(n, [r])) : i >= s.get(n).length ? (r = new Tf,
            s.get(n).push(r)) : r = s.get(n)[i],
            r
        }
        function t() {
            s = new WeakMap
        }
        return {
            get: e,
            dispose: t
        }
    }
    function tx() {
        const s = {};
        return {
            get: function(e) {
                if (s[e.id] !== void 0)
                    return s[e.id];
                let t;
                switch (e.type) {
                case "DirectionalLight":
                    t = {
                        direction: new B,
                        color: new rt
                    };
                    break;
                case "SpotLight":
                    t = {
                        position: new B,
                        direction: new B,
                        color: new rt,
                        distance: 0,
                        coneCos: 0,
                        penumbraCos: 0,
                        decay: 0
                    };
                    break;
                case "PointLight":
                    t = {
                        position: new B,
                        color: new rt,
                        distance: 0,
                        decay: 0
                    };
                    break;
                case "HemisphereLight":
                    t = {
                        direction: new B,
                        skyColor: new rt,
                        groundColor: new rt
                    };
                    break;
                case "RectAreaLight":
                    t = {
                        color: new rt,
                        position: new B,
                        halfWidth: new B,
                        halfHeight: new B
                    };
                    break
                }
                return s[e.id] = t,
                t
            }
        }
    }
    function nx() {
        const s = {};
        return {
            get: function(e) {
                if (s[e.id] !== void 0)
                    return s[e.id];
                let t;
                switch (e.type) {
                case "DirectionalLight":
                    t = {
                        shadowBias: 0,
                        shadowNormalBias: 0,
                        shadowRadius: 1,
                        shadowMapSize: new ke
                    };
                    break;
                case "SpotLight":
                    t = {
                        shadowBias: 0,
                        shadowNormalBias: 0,
                        shadowRadius: 1,
                        shadowMapSize: new ke
                    };
                    break;
                case "PointLight":
                    t = {
                        shadowBias: 0,
                        shadowNormalBias: 0,
                        shadowRadius: 1,
                        shadowMapSize: new ke,
                        shadowCameraNear: 1,
                        shadowCameraFar: 1e3
                    };
                    break
                }
                return s[e.id] = t,
                t
            }
        }
    }
    let ix = 0;
    function rx(s, e) {
        return (e.castShadow ? 1 : 0) - (s.castShadow ? 1 : 0)
    }
    function sx(s, e) {
        const t = new tx
          , n = nx()
          , i = {
            version: 0,
            hash: {
                directionalLength: -1,
                pointLength: -1,
                spotLength: -1,
                rectAreaLength: -1,
                hemiLength: -1,
                numDirectionalShadows: -1,
                numPointShadows: -1,
                numSpotShadows: -1
            },
            ambient: [0, 0, 0],
            probe: [],
            directional: [],
            directionalShadow: [],
            directionalShadowMap: [],
            directionalShadowMatrix: [],
            spot: [],
            spotShadow: [],
            spotShadowMap: [],
            spotShadowMatrix: [],
            rectArea: [],
            rectAreaLTC1: null,
            rectAreaLTC2: null,
            point: [],
            pointShadow: [],
            pointShadowMap: [],
            pointShadowMatrix: [],
            hemi: []
        };
        for (let u = 0; u < 9; u++)
            i.probe.push(new B);
        const r = new B
          , a = new Dt
          , o = new Dt;
        function c(u, f) {
            let h = 0
              , m = 0
              , g = 0;
            for (let w = 0; w < 9; w++)
                i.probe[w].set(0, 0, 0);
            let d = 0
              , p = 0
              , _ = 0
              , y = 0
              , M = 0
              , x = 0
              , b = 0
              , S = 0;
            u.sort(rx);
            const A = f !== !0 ? Math.PI : 1;
            for (let w = 0, L = u.length; w < L; w++) {
                const F = u[w]
                  , V = F.color
                  , K = F.intensity
                  , R = F.distance
                  , U = F.shadow && F.shadow.map ? F.shadow.map.texture : null;
                if (F.isAmbientLight)
                    h += V.r * K * A,
                    m += V.g * K * A,
                    g += V.b * K * A;
                else if (F.isLightProbe)
                    for (let z = 0; z < 9; z++)
                        i.probe[z].addScaledVector(F.sh.coefficients[z], K);
                else if (F.isDirectionalLight) {
                    const z = t.get(F);
                    if (z.color.copy(F.color).multiplyScalar(F.intensity * A),
                    F.castShadow) {
                        const W = F.shadow
                          , X = n.get(F);
                        X.shadowBias = W.bias,
                        X.shadowNormalBias = W.normalBias,
                        X.shadowRadius = W.radius,
                        X.shadowMapSize = W.mapSize,
                        i.directionalShadow[d] = X,
                        i.directionalShadowMap[d] = U,
                        i.directionalShadowMatrix[d] = F.shadow.matrix,
                        x++
                    }
                    i.directional[d] = z,
                    d++
                } else if (F.isSpotLight) {
                    const z = t.get(F);
                    if (z.position.setFromMatrixPosition(F.matrixWorld),
                    z.color.copy(V).multiplyScalar(K * A),
                    z.distance = R,
                    z.coneCos = Math.cos(F.angle),
                    z.penumbraCos = Math.cos(F.angle * (1 - F.penumbra)),
                    z.decay = F.decay,
                    F.castShadow) {
                        const W = F.shadow
                          , X = n.get(F);
                        X.shadowBias = W.bias,
                        X.shadowNormalBias = W.normalBias,
                        X.shadowRadius = W.radius,
                        X.shadowMapSize = W.mapSize,
                        i.spotShadow[_] = X,
                        i.spotShadowMap[_] = U,
                        i.spotShadowMatrix[_] = F.shadow.matrix,
                        S++
                    }
                    i.spot[_] = z,
                    _++
                } else if (F.isRectAreaLight) {
                    const z = t.get(F);
                    z.color.copy(V).multiplyScalar(K),
                    z.halfWidth.set(F.width * .5, 0, 0),
                    z.halfHeight.set(0, F.height * .5, 0),
                    i.rectArea[y] = z,
                    y++
                } else if (F.isPointLight) {
                    const z = t.get(F);
                    if (z.color.copy(F.color).multiplyScalar(F.intensity * A),
                    z.distance = F.distance,
                    z.decay = F.decay,
                    F.castShadow) {
                        const W = F.shadow
                          , X = n.get(F);
                        X.shadowBias = W.bias,
                        X.shadowNormalBias = W.normalBias,
                        X.shadowRadius = W.radius,
                        X.shadowMapSize = W.mapSize,
                        X.shadowCameraNear = W.camera.near,
                        X.shadowCameraFar = W.camera.far,
                        i.pointShadow[p] = X,
                        i.pointShadowMap[p] = U,
                        i.pointShadowMatrix[p] = F.shadow.matrix,
                        b++
                    }
                    i.point[p] = z,
                    p++
                } else if (F.isHemisphereLight) {
                    const z = t.get(F);
                    z.skyColor.copy(F.color).multiplyScalar(K * A),
                    z.groundColor.copy(F.groundColor).multiplyScalar(K * A),
                    i.hemi[M] = z,
                    M++
                }
            }
            y > 0 && (e.isWebGL2 || s.has("OES_texture_float_linear") === !0 ? (i.rectAreaLTC1 = pe.LTC_FLOAT_1,
            i.rectAreaLTC2 = pe.LTC_FLOAT_2) : s.has("OES_texture_half_float_linear") === !0 ? (i.rectAreaLTC1 = pe.LTC_HALF_1,
            i.rectAreaLTC2 = pe.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),
            i.ambient[0] = h,
            i.ambient[1] = m,
            i.ambient[2] = g;
            const v = i.hash;
            (v.directionalLength !== d || v.pointLength !== p || v.spotLength !== _ || v.rectAreaLength !== y || v.hemiLength !== M || v.numDirectionalShadows !== x || v.numPointShadows !== b || v.numSpotShadows !== S) && (i.directional.length = d,
            i.spot.length = _,
            i.rectArea.length = y,
            i.point.length = p,
            i.hemi.length = M,
            i.directionalShadow.length = x,
            i.directionalShadowMap.length = x,
            i.pointShadow.length = b,
            i.pointShadowMap.length = b,
            i.spotShadow.length = S,
            i.spotShadowMap.length = S,
            i.directionalShadowMatrix.length = x,
            i.pointShadowMatrix.length = b,
            i.spotShadowMatrix.length = S,
            v.directionalLength = d,
            v.pointLength = p,
            v.spotLength = _,
            v.rectAreaLength = y,
            v.hemiLength = M,
            v.numDirectionalShadows = x,
            v.numPointShadows = b,
            v.numSpotShadows = S,
            i.version = ix++)
        }
        function l(u, f) {
            let h = 0
              , m = 0
              , g = 0
              , d = 0
              , p = 0;
            const _ = f.matrixWorldInverse;
            for (let y = 0, M = u.length; y < M; y++) {
                const x = u[y];
                if (x.isDirectionalLight) {
                    const b = i.directional[h];
                    b.direction.setFromMatrixPosition(x.matrixWorld),
                    r.setFromMatrixPosition(x.target.matrixWorld),
                    b.direction.sub(r),
                    b.direction.transformDirection(_),
                    h++
                } else if (x.isSpotLight) {
                    const b = i.spot[g];
                    b.position.setFromMatrixPosition(x.matrixWorld),
                    b.position.applyMatrix4(_),
                    b.direction.setFromMatrixPosition(x.matrixWorld),
                    r.setFromMatrixPosition(x.target.matrixWorld),
                    b.direction.sub(r),
                    b.direction.transformDirection(_),
                    g++
                } else if (x.isRectAreaLight) {
                    const b = i.rectArea[d];
                    b.position.setFromMatrixPosition(x.matrixWorld),
                    b.position.applyMatrix4(_),
                    o.identity(),
                    a.copy(x.matrixWorld),
                    a.premultiply(_),
                    o.extractRotation(a),
                    b.halfWidth.set(x.width * .5, 0, 0),
                    b.halfHeight.set(0, x.height * .5, 0),
                    b.halfWidth.applyMatrix4(o),
                    b.halfHeight.applyMatrix4(o),
                    d++
                } else if (x.isPointLight) {
                    const b = i.point[m];
                    b.position.setFromMatrixPosition(x.matrixWorld),
                    b.position.applyMatrix4(_),
                    m++
                } else if (x.isHemisphereLight) {
                    const b = i.hemi[p];
                    b.direction.setFromMatrixPosition(x.matrixWorld),
                    b.direction.transformDirection(_),
                    p++
                }
            }
        }
        return {
            setup: c,
            setupView: l,
            state: i
        }
    }
    function Ef(s, e) {
        const t = new sx(s,e)
          , n = []
          , i = [];
        function r() {
            n.length = 0,
            i.length = 0
        }
        function a(f) {
            n.push(f)
        }
        function o(f) {
            i.push(f)
        }
        function c(f) {
            t.setup(n, f)
        }
        function l(f) {
            t.setupView(n, f)
        }
        return {
            init: r,
            state: {
                lightsArray: n,
                shadowsArray: i,
                lights: t
            },
            setupLights: c,
            setupLightsView: l,
            pushLight: a,
            pushShadow: o
        }
    }
    function ox(s, e) {
        let t = new WeakMap;
        function n(r, a=0) {
            let o;
            return t.has(r) === !1 ? (o = new Ef(s,e),
            t.set(r, [o])) : a >= t.get(r).length ? (o = new Ef(s,e),
            t.get(r).push(o)) : o = t.get(r)[a],
            o
        }
        function i() {
            t = new WeakMap
        }
        return {
            get: n,
            dispose: i
        }
    }
    class ax extends Io {
        constructor(e) {
            super();
            this.isMeshDepthMaterial = !0,
            this.type = "MeshDepthMaterial",
            this.depthPacking = Qp,
            this.map = null,
            this.alphaMap = null,
            this.displacementMap = null,
            this.displacementScale = 1,
            this.displacementBias = 0,
            this.wireframe = !1,
            this.wireframeLinewidth = 1,
            this.setValues(e)
        }
        copy(e) {
            return super.copy(e),
            this.depthPacking = e.depthPacking,
            this.map = e.map,
            this.alphaMap = e.alphaMap,
            this.displacementMap = e.displacementMap,
            this.displacementScale = e.displacementScale,
            this.displacementBias = e.displacementBias,
            this.wireframe = e.wireframe,
            this.wireframeLinewidth = e.wireframeLinewidth,
            this
        }
    }
    class lx extends Io {
        constructor(e) {
            super();
            this.isMeshDistanceMaterial = !0,
            this.type = "MeshDistanceMaterial",
            this.referencePosition = new B,
            this.nearDistance = 1,
            this.farDistance = 1e3,
            this.map = null,
            this.alphaMap = null,
            this.displacementMap = null,
            this.displacementScale = 1,
            this.displacementBias = 0,
            this.setValues(e)
        }
        copy(e) {
            return super.copy(e),
            this.referencePosition.copy(e.referencePosition),
            this.nearDistance = e.nearDistance,
            this.farDistance = e.farDistance,
            this.map = e.map,
            this.alphaMap = e.alphaMap,
            this.displacementMap = e.displacementMap,
            this.displacementScale = e.displacementScale,
            this.displacementBias = e.displacementBias,
            this
        }
    }
    const cx = `void main() {
	gl_Position = vec4( position, 1.0 );
}`
      , ux = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
    function fx(s, e, t) {
        let n = new Ku;
        const i = new ke
          , r = new ke
          , a = new Mt
          , o = new ax({
            depthPacking: em
        })
          , c = new lx
          , l = {}
          , u = t.maxTextureSize
          , f = {
            0: Rn,
            1: Cs,
            2: Ir
        }
          , h = new Gn({
            defines: {
                VSM_SAMPLES: 8
            },
            uniforms: {
                shadow_pass: {
                    value: null
                },
                resolution: {
                    value: new ke
                },
                radius: {
                    value: 4
                }
            },
            vertexShader: cx,
            fragmentShader: ux
        })
          , m = h.clone();
        m.defines.HORIZONTAL_PASS = 1;
        const g = new ci;
        g.setAttribute("position", new Yn(new Float32Array([-1, -1, .5, 3, -1, .5, -1, 3, .5]),3));
        const d = new Bn(g,h)
          , p = this;
        this.enabled = !1,
        this.autoUpdate = !0,
        this.needsUpdate = !1,
        this.type = Wc,
        this.render = function(x, b, S) {
            if (p.enabled === !1 || p.autoUpdate === !1 && p.needsUpdate === !1 || x.length === 0)
                return;
            const A = s.getRenderTarget()
              , v = s.getActiveCubeFace()
              , w = s.getActiveMipmapLevel()
              , L = s.state;
            L.setBlending(yi),
            L.buffers.color.setClear(1, 1, 1, 1),
            L.buffers.depth.setTest(!0),
            L.setScissorTest(!1);
            for (let F = 0, V = x.length; F < V; F++) {
                const K = x[F]
                  , R = K.shadow;
                if (R === void 0) {
                    console.warn("THREE.WebGLShadowMap:", K, "has no shadow.");
                    continue
                }
                if (R.autoUpdate === !1 && R.needsUpdate === !1)
                    continue;
                i.copy(R.mapSize);
                const U = R.getFrameExtents();
                if (i.multiply(U),
                r.copy(R.mapSize),
                (i.x > u || i.y > u) && (i.x > u && (r.x = Math.floor(u / U.x),
                i.x = r.x * U.x,
                R.mapSize.x = r.x),
                i.y > u && (r.y = Math.floor(u / U.y),
                i.y = r.y * U.y,
                R.mapSize.y = r.y)),
                R.map === null) {
                    const W = this.type !== Es ? {
                        minFilter: jt,
                        magFilter: jt
                    } : {};
                    R.map = new bi(i.x,i.y,W),
                    R.map.texture.name = K.name + ".shadowMap",
                    R.camera.updateProjectionMatrix()
                }
                s.setRenderTarget(R.map),
                s.clear();
                const z = R.getViewportCount();
                for (let W = 0; W < z; W++) {
                    const X = R.getViewport(W);
                    a.set(r.x * X.x, r.y * X.y, r.x * X.z, r.y * X.w),
                    L.viewport(a),
                    R.updateMatrices(K, W),
                    n = R.getFrustum(),
                    M(b, S, R.camera, K, this.type)
                }
                R.isPointLightShadow !== !0 && this.type === Es && _(R, S),
                R.needsUpdate = !1
            }
            p.needsUpdate = !1,
            s.setRenderTarget(A, v, w)
        }
        ;
        function _(x, b) {
            const S = e.update(d);
            h.defines.VSM_SAMPLES !== x.blurSamples && (h.defines.VSM_SAMPLES = x.blurSamples,
            m.defines.VSM_SAMPLES = x.blurSamples,
            h.needsUpdate = !0,
            m.needsUpdate = !0),
            x.mapPass === null && (x.mapPass = new bi(i.x,i.y)),
            h.uniforms.shadow_pass.value = x.map.texture,
            h.uniforms.resolution.value = x.mapSize,
            h.uniforms.radius.value = x.radius,
            s.setRenderTarget(x.mapPass),
            s.clear(),
            s.renderBufferDirect(b, null, S, h, d, null),
            m.uniforms.shadow_pass.value = x.mapPass.texture,
            m.uniforms.resolution.value = x.mapSize,
            m.uniforms.radius.value = x.radius,
            s.setRenderTarget(x.map),
            s.clear(),
            s.renderBufferDirect(b, null, S, m, d, null)
        }
        function y(x, b, S, A, v, w) {
            let L = null;
            const F = S.isPointLight === !0 ? x.customDistanceMaterial : x.customDepthMaterial;
            if (F !== void 0 ? L = F : L = S.isPointLight === !0 ? c : o,
            s.localClippingEnabled && b.clipShadows === !0 && Array.isArray(b.clippingPlanes) && b.clippingPlanes.length !== 0 || b.displacementMap && b.displacementScale !== 0 || b.alphaMap && b.alphaTest > 0) {
                const V = L.uuid
                  , K = b.uuid;
                let R = l[V];
                R === void 0 && (R = {},
                l[V] = R);
                let U = R[K];
                U === void 0 && (U = L.clone(),
                R[K] = U),
                L = U
            }
            return L.visible = b.visible,
            L.wireframe = b.wireframe,
            w === Es ? L.side = b.shadowSide !== null ? b.shadowSide : b.side : L.side = b.shadowSide !== null ? b.shadowSide : f[b.side],
            L.alphaMap = b.alphaMap,
            L.alphaTest = b.alphaTest,
            L.clipShadows = b.clipShadows,
            L.clippingPlanes = b.clippingPlanes,
            L.clipIntersection = b.clipIntersection,
            L.displacementMap = b.displacementMap,
            L.displacementScale = b.displacementScale,
            L.displacementBias = b.displacementBias,
            L.wireframeLinewidth = b.wireframeLinewidth,
            L.linewidth = b.linewidth,
            S.isPointLight === !0 && L.isMeshDistanceMaterial === !0 && (L.referencePosition.setFromMatrixPosition(S.matrixWorld),
            L.nearDistance = A,
            L.farDistance = v),
            L
        }
        function M(x, b, S, A, v) {
            if (x.visible === !1)
                return;
            if (x.layers.test(b.layers) && (x.isMesh || x.isLine || x.isPoints) && (x.castShadow || x.receiveShadow && v === Es) && (!x.frustumCulled || n.intersectsObject(x))) {
                x.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse, x.matrixWorld);
                const F = e.update(x)
                  , V = x.material;
                if (Array.isArray(V)) {
                    const K = F.groups;
                    for (let R = 0, U = K.length; R < U; R++) {
                        const z = K[R]
                          , W = V[z.materialIndex];
                        if (W && W.visible) {
                            const X = y(x, W, A, S.near, S.far, v);
                            s.renderBufferDirect(S, null, F, X, x, z)
                        }
                    }
                } else if (V.visible) {
                    const K = y(x, V, A, S.near, S.far, v);
                    s.renderBufferDirect(S, null, F, K, x, null)
                }
            }
            const L = x.children;
            for (let F = 0, V = L.length; F < V; F++)
                M(L[F], b, S, A, v)
        }
    }
    function hx(s, e, t) {
        const n = t.isWebGL2;
        function i() {
            let I = !1;
            const ae = new Mt;
            let q = null;
            const de = new Mt(0,0,0,0);
            return {
                setMask: function(fe) {
                    q !== fe && !I && (s.colorMask(fe, fe, fe, fe),
                    q = fe)
                },
                setLocked: function(fe) {
                    I = fe
                },
                setClear: function(fe, Be, st, Ze, sn) {
                    sn === !0 && (fe *= Ze,
                    Be *= Ze,
                    st *= Ze),
                    ae.set(fe, Be, st, Ze),
                    de.equals(ae) === !1 && (s.clearColor(fe, Be, st, Ze),
                    de.copy(ae))
                },
                reset: function() {
                    I = !1,
                    q = null,
                    de.set(-1, 0, 0, 0)
                }
            }
        }
        function r() {
            let I = !1
              , ae = null
              , q = null
              , de = null;
            return {
                setTest: function(fe) {
                    fe ? Le(2929) : xe(2929)
                },
                setMask: function(fe) {
                    ae !== fe && !I && (s.depthMask(fe),
                    ae = fe)
                },
                setFunc: function(fe) {
                    if (q !== fe) {
                        if (fe)
                            switch (fe) {
                            case Sp:
                                s.depthFunc(512);
                                break;
                            case wp:
                                s.depthFunc(519);
                                break;
                            case Tp:
                                s.depthFunc(513);
                                break;
                            case ka:
                                s.depthFunc(515);
                                break;
                            case Ep:
                                s.depthFunc(514);
                                break;
                            case Cp:
                                s.depthFunc(518);
                                break;
                            case Ap:
                                s.depthFunc(516);
                                break;
                            case Pp:
                                s.depthFunc(517);
                                break;
                            default:
                                s.depthFunc(515)
                            }
                        else
                            s.depthFunc(515);
                        q = fe
                    }
                },
                setLocked: function(fe) {
                    I = fe
                },
                setClear: function(fe) {
                    de !== fe && (s.clearDepth(fe),
                    de = fe)
                },
                reset: function() {
                    I = !1,
                    ae = null,
                    q = null,
                    de = null
                }
            }
        }
        function a() {
            let I = !1
              , ae = null
              , q = null
              , de = null
              , fe = null
              , Be = null
              , st = null
              , Ze = null
              , sn = null;
            return {
                setTest: function(tt) {
                    I || (tt ? Le(2960) : xe(2960))
                },
                setMask: function(tt) {
                    ae !== tt && !I && (s.stencilMask(tt),
                    ae = tt)
                },
                setFunc: function(tt, ze, J) {
                    (q !== tt || de !== ze || fe !== J) && (s.stencilFunc(tt, ze, J),
                    q = tt,
                    de = ze,
                    fe = J)
                },
                setOp: function(tt, ze, J) {
                    (Be !== tt || st !== ze || Ze !== J) && (s.stencilOp(tt, ze, J),
                    Be = tt,
                    st = ze,
                    Ze = J)
                },
                setLocked: function(tt) {
                    I = tt
                },
                setClear: function(tt) {
                    sn !== tt && (s.clearStencil(tt),
                    sn = tt)
                },
                reset: function() {
                    I = !1,
                    ae = null,
                    q = null,
                    de = null,
                    fe = null,
                    Be = null,
                    st = null,
                    Ze = null,
                    sn = null
                }
            }
        }
        const o = new i
          , c = new r
          , l = new a
          , u = new WeakMap
          , f = new WeakMap;
        let h = {}
          , m = {}
          , g = new WeakMap
          , d = []
          , p = null
          , _ = !1
          , y = null
          , M = null
          , x = null
          , b = null
          , S = null
          , A = null
          , v = null
          , w = !1
          , L = null
          , F = null
          , V = null
          , K = null
          , R = null;
        const U = s.getParameter(35661);
        let z = !1
          , W = 0;
        const X = s.getParameter(7938);
        X.indexOf("WebGL") !== -1 ? (W = parseFloat(/^WebGL (\d)/.exec(X)[1]),
        z = W >= 1) : X.indexOf("OpenGL ES") !== -1 && (W = parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),
        z = W >= 2);
        let G = null
          , P = {};
        const ee = s.getParameter(3088)
          , te = s.getParameter(2978)
          , ie = new Mt().fromArray(ee)
          , ce = new Mt().fromArray(te);
        function Me(I, ae, q) {
            const de = new Uint8Array(4)
              , fe = s.createTexture();
            s.bindTexture(I, fe),
            s.texParameteri(I, 10241, 9728),
            s.texParameteri(I, 10240, 9728);
            for (let Be = 0; Be < q; Be++)
                s.texImage2D(ae + Be, 0, 6408, 1, 1, 0, 6408, 5121, de);
            return fe
        }
        const H = {};
        H[3553] = Me(3553, 3553, 1),
        H[34067] = Me(34067, 34069, 6),
        o.setClear(0, 0, 0, 1),
        c.setClear(1),
        l.setClear(0),
        Le(2929),
        c.setFunc(ka),
        Xe(!1),
        Y(Hc),
        Le(2884),
        qe(yi);
        function Le(I) {
            h[I] !== !0 && (s.enable(I),
            h[I] = !0)
        }
        function xe(I) {
            h[I] !== !1 && (s.disable(I),
            h[I] = !1)
        }
        function Ce(I, ae) {
            return m[I] !== ae ? (s.bindFramebuffer(I, ae),
            m[I] = ae,
            n && (I === 36009 && (m[36160] = ae),
            I === 36160 && (m[36009] = ae)),
            !0) : !1
        }
        function oe(I, ae) {
            let q = d
              , de = !1;
            if (I)
                if (q = g.get(ae),
                q === void 0 && (q = [],
                g.set(ae, q)),
                I.isWebGLMultipleRenderTargets) {
                    const fe = I.texture;
                    if (q.length !== fe.length || q[0] !== 36064) {
                        for (let Be = 0, st = fe.length; Be < st; Be++)
                            q[Be] = 36064 + Be;
                        q.length = fe.length,
                        de = !0
                    }
                } else
                    q[0] !== 36064 && (q[0] = 36064,
                    de = !0);
            else
                q[0] !== 1029 && (q[0] = 1029,
                de = !0);
            de && (t.isWebGL2 ? s.drawBuffers(q) : e.get("WEBGL_draw_buffers").drawBuffersWEBGL(q))
        }
        function Ne(I) {
            return p !== I ? (s.useProgram(I),
            p = I,
            !0) : !1
        }
        const me = {
            [zr]: 32774,
            [hp]: 32778,
            [dp]: 32779
        };
        if (n)
            me[$c] = 32775,
            me[jc] = 32776;
        else {
            const I = e.get("EXT_blend_minmax");
            I !== null && (me[$c] = I.MIN_EXT,
            me[jc] = I.MAX_EXT)
        }
        const _e = {
            [pp]: 0,
            [mp]: 1,
            [gp]: 768,
            [Zc]: 770,
            [Mp]: 776,
            [yp]: 774,
            [xp]: 772,
            [_p]: 769,
            [Kc]: 771,
            [bp]: 775,
            [vp]: 773
        };
        function qe(I, ae, q, de, fe, Be, st, Ze) {
            if (I === yi) {
                _ === !0 && (xe(3042),
                _ = !1);
                return
            }
            if (_ === !1 && (Le(3042),
            _ = !0),
            I !== fp) {
                if (I !== y || Ze !== w) {
                    if ((M !== zr || S !== zr) && (s.blendEquation(32774),
                    M = zr,
                    S = zr),
                    Ze)
                        switch (I) {
                        case Fr:
                            s.blendFuncSeparate(1, 771, 1, 771);
                            break;
                        case Xc:
                            s.blendFunc(1, 1);
                            break;
                        case qc:
                            s.blendFuncSeparate(0, 769, 0, 1);
                            break;
                        case Yc:
                            s.blendFuncSeparate(0, 768, 0, 770);
                            break;
                        default:
                            console.error("THREE.WebGLState: Invalid blending: ", I);
                            break
                        }
                    else
                        switch (I) {
                        case Fr:
                            s.blendFuncSeparate(770, 771, 1, 771);
                            break;
                        case Xc:
                            s.blendFunc(770, 1);
                            break;
                        case qc:
                            s.blendFuncSeparate(0, 769, 0, 1);
                            break;
                        case Yc:
                            s.blendFunc(0, 768);
                            break;
                        default:
                            console.error("THREE.WebGLState: Invalid blending: ", I);
                            break
                        }
                    x = null,
                    b = null,
                    A = null,
                    v = null,
                    y = I,
                    w = Ze
                }
                return
            }
            fe = fe || ae,
            Be = Be || q,
            st = st || de,
            (ae !== M || fe !== S) && (s.blendEquationSeparate(me[ae], me[fe]),
            M = ae,
            S = fe),
            (q !== x || de !== b || Be !== A || st !== v) && (s.blendFuncSeparate(_e[q], _e[de], _e[Be], _e[st]),
            x = q,
            b = de,
            A = Be,
            v = st),
            y = I,
            w = null
        }
        function et(I, ae) {
            I.side === Ir ? xe(2884) : Le(2884);
            let q = I.side === Rn;
            ae && (q = !q),
            Xe(q),
            I.blending === Fr && I.transparent === !1 ? qe(yi) : qe(I.blending, I.blendEquation, I.blendSrc, I.blendDst, I.blendEquationAlpha, I.blendSrcAlpha, I.blendDstAlpha, I.premultipliedAlpha),
            c.setFunc(I.depthFunc),
            c.setTest(I.depthTest),
            c.setMask(I.depthWrite),
            o.setMask(I.colorWrite);
            const de = I.stencilWrite;
            l.setTest(de),
            de && (l.setMask(I.stencilWriteMask),
            l.setFunc(I.stencilFunc, I.stencilRef, I.stencilFuncMask),
            l.setOp(I.stencilFail, I.stencilZFail, I.stencilZPass)),
            De(I.polygonOffset, I.polygonOffsetFactor, I.polygonOffsetUnits),
            I.alphaToCoverage === !0 ? Le(32926) : xe(32926)
        }
        function Xe(I) {
            L !== I && (I ? s.frontFace(2304) : s.frontFace(2305),
            L = I)
        }
        function Y(I) {
            I !== ap ? (Le(2884),
            I !== F && (I === Hc ? s.cullFace(1029) : I === lp ? s.cullFace(1028) : s.cullFace(1032))) : xe(2884),
            F = I
        }
        function Qe(I) {
            I !== V && (z && s.lineWidth(I),
            V = I)
        }
        function De(I, ae, q) {
            I ? (Le(32823),
            (K !== ae || R !== q) && (s.polygonOffset(ae, q),
            K = ae,
            R = q)) : xe(32823)
        }
        function pt(I) {
            I ? Le(3089) : xe(3089)
        }
        function ft(I) {
            I === void 0 && (I = 33984 + U - 1),
            G !== I && (s.activeTexture(I),
            G = I)
        }
        function D(I, ae) {
            G === null && ft();
            let q = P[G];
            q === void 0 && (q = {
                type: void 0,
                texture: void 0
            },
            P[G] = q),
            (q.type !== I || q.texture !== ae) && (s.bindTexture(I, ae || H[I]),
            q.type = I,
            q.texture = ae)
        }
        function T() {
            const I = P[G];
            I !== void 0 && I.type !== void 0 && (s.bindTexture(I.type, null),
            I.type = void 0,
            I.texture = void 0)
        }
        function j() {
            try {
                s.compressedTexImage2D.apply(s, arguments)
            } catch (I) {
                console.error("THREE.WebGLState:", I)
            }
        }
        function re() {
            try {
                s.texSubImage2D.apply(s, arguments)
            } catch (I) {
                console.error("THREE.WebGLState:", I)
            }
        }
        function ne() {
            try {
                s.texSubImage3D.apply(s, arguments)
            } catch (I) {
                console.error("THREE.WebGLState:", I)
            }
        }
        function le() {
            try {
                s.compressedTexSubImage2D.apply(s, arguments)
            } catch (I) {
                console.error("THREE.WebGLState:", I)
            }
        }
        function be() {
            try {
                s.texStorage2D.apply(s, arguments)
            } catch (I) {
                console.error("THREE.WebGLState:", I)
            }
        }
        function C() {
            try {
                s.texStorage3D.apply(s, arguments)
            } catch (I) {
                console.error("THREE.WebGLState:", I)
            }
        }
        function Q() {
            try {
                s.texImage2D.apply(s, arguments)
            } catch (I) {
                console.error("THREE.WebGLState:", I)
            }
        }
        function se() {
            try {
                s.texImage3D.apply(s, arguments)
            } catch (I) {
                console.error("THREE.WebGLState:", I)
            }
        }
        function he(I) {
            ie.equals(I) === !1 && (s.scissor(I.x, I.y, I.z, I.w),
            ie.copy(I))
        }
        function ue(I) {
            ce.equals(I) === !1 && (s.viewport(I.x, I.y, I.z, I.w),
            ce.copy(I))
        }
        function we(I, ae) {
            let q = f.get(ae);
            q === void 0 && (q = new WeakMap,
            f.set(ae, q));
            let de = q.get(I);
            de === void 0 && (de = s.getUniformBlockIndex(ae, I.name),
            q.set(I, de))
        }
        function Ue(I, ae) {
            const de = f.get(ae).get(I);
            u.get(I) !== de && (s.uniformBlockBinding(ae, de, I.__bindingPointIndex),
            u.set(I, de))
        }
        function Te() {
            s.disable(3042),
            s.disable(2884),
            s.disable(2929),
            s.disable(32823),
            s.disable(3089),
            s.disable(2960),
            s.disable(32926),
            s.blendEquation(32774),
            s.blendFunc(1, 0),
            s.blendFuncSeparate(1, 0, 1, 0),
            s.colorMask(!0, !0, !0, !0),
            s.clearColor(0, 0, 0, 0),
            s.depthMask(!0),
            s.depthFunc(513),
            s.clearDepth(1),
            s.stencilMask(4294967295),
            s.stencilFunc(519, 0, 4294967295),
            s.stencilOp(7680, 7680, 7680),
            s.clearStencil(0),
            s.cullFace(1029),
            s.frontFace(2305),
            s.polygonOffset(0, 0),
            s.activeTexture(33984),
            s.bindFramebuffer(36160, null),
            n === !0 && (s.bindFramebuffer(36009, null),
            s.bindFramebuffer(36008, null)),
            s.useProgram(null),
            s.lineWidth(1),
            s.scissor(0, 0, s.canvas.width, s.canvas.height),
            s.viewport(0, 0, s.canvas.width, s.canvas.height),
            h = {},
            G = null,
            P = {},
            m = {},
            g = new WeakMap,
            d = [],
            p = null,
            _ = !1,
            y = null,
            M = null,
            x = null,
            b = null,
            S = null,
            A = null,
            v = null,
            w = !1,
            L = null,
            F = null,
            V = null,
            K = null,
            R = null,
            ie.set(0, 0, s.canvas.width, s.canvas.height),
            ce.set(0, 0, s.canvas.width, s.canvas.height),
            o.reset(),
            c.reset(),
            l.reset()
        }
        return {
            buffers: {
                color: o,
                depth: c,
                stencil: l
            },
            enable: Le,
            disable: xe,
            bindFramebuffer: Ce,
            drawBuffers: oe,
            useProgram: Ne,
            setBlending: qe,
            setMaterial: et,
            setFlipSided: Xe,
            setCullFace: Y,
            setLineWidth: Qe,
            setPolygonOffset: De,
            setScissorTest: pt,
            activeTexture: ft,
            bindTexture: D,
            unbindTexture: T,
            compressedTexImage2D: j,
            texImage2D: Q,
            texImage3D: se,
            updateUBOMapping: we,
            uniformBlockBinding: Ue,
            texStorage2D: be,
            texStorage3D: C,
            texSubImage2D: re,
            texSubImage3D: ne,
            compressedTexSubImage2D: le,
            scissor: he,
            viewport: ue,
            reset: Te
        }
    }
    function dx(s, e, t, n, i, r, a) {
        const o = i.isWebGL2
          , c = i.maxTextures
          , l = i.maxCubemapSize
          , u = i.maxTextureSize
          , f = i.maxSamples
          , h = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null
          , m = /OculusBrowser/g.test(navigator.userAgent)
          , g = new WeakMap;
        let d;
        const p = new WeakMap;
        let _ = !1;
        try {
            _ = typeof OffscreenCanvas != "undefined" && new OffscreenCanvas(1,1).getContext("2d") !== null
        } catch {}
        function y(D, T) {
            return _ ? new OffscreenCanvas(D,T) : Ds("canvas")
        }
        function M(D, T, j, re) {
            let ne = 1;
            if ((D.width > re || D.height > re) && (ne = re / Math.max(D.width, D.height)),
            ne < 1 || T === !0)
                if (typeof HTMLImageElement != "undefined" && D instanceof HTMLImageElement || typeof HTMLCanvasElement != "undefined" && D instanceof HTMLCanvasElement || typeof ImageBitmap != "undefined" && D instanceof ImageBitmap) {
                    const le = T ? Ja : Math.floor
                      , be = le(ne * D.width)
                      , C = le(ne * D.height);
                    d === void 0 && (d = y(be, C));
                    const Q = j ? y(be, C) : d;
                    return Q.width = be,
                    Q.height = C,
                    Q.getContext("2d").drawImage(D, 0, 0, be, C),
                    console.warn("THREE.WebGLRenderer: Texture has been resized from (" + D.width + "x" + D.height + ") to (" + be + "x" + C + ")."),
                    Q
                } else
                    return "data"in D && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + D.width + "x" + D.height + ")."),
                    D;
            return D
        }
        function x(D) {
            return Cu(D.width) && Cu(D.height)
        }
        function b(D) {
            return o ? !1 : D.wrapS !== In || D.wrapT !== In || D.minFilter !== jt && D.minFilter !== mn
        }
        function S(D, T) {
            return D.generateMipmaps && T && D.minFilter !== jt && D.minFilter !== mn
        }
        function A(D) {
            s.generateMipmap(D)
        }
        function v(D, T, j, re, ne=!1) {
            if (o === !1)
                return T;
            if (D !== null) {
                if (s[D] !== void 0)
                    return s[D];
                console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + D + "'")
            }
            let le = T;
            return T === 6403 && (j === 5126 && (le = 33326),
            j === 5131 && (le = 33325),
            j === 5121 && (le = 33321)),
            T === 33319 && (j === 5126 && (le = 33328),
            j === 5131 && (le = 33327),
            j === 5121 && (le = 33323)),
            T === 6408 && (j === 5126 && (le = 34836),
            j === 5131 && (le = 34842),
            j === 5121 && (le = re === at && ne === !1 ? 35907 : 32856),
            j === 32819 && (le = 32854),
            j === 32820 && (le = 32855)),
            (le === 33325 || le === 33326 || le === 33327 || le === 33328 || le === 34842 || le === 34836) && e.get("EXT_color_buffer_float"),
            le
        }
        function w(D, T, j) {
            return S(D, j) === !0 || D.isFramebufferTexture && D.minFilter !== jt && D.minFilter !== mn ? Math.log2(Math.max(T.width, T.height)) + 1 : D.mipmaps !== void 0 && D.mipmaps.length > 0 ? D.mipmaps.length : D.isCompressedTexture && Array.isArray(D.image) ? T.mipmaps.length : 1
        }
        function L(D) {
            return D === jt || D === eu || D === tu ? 9728 : 9729
        }
        function F(D) {
            const T = D.target;
            T.removeEventListener("dispose", F),
            K(T),
            T.isVideoTexture && g.delete(T)
        }
        function V(D) {
            const T = D.target;
            T.removeEventListener("dispose", V),
            U(T)
        }
        function K(D) {
            const T = n.get(D);
            if (T.__webglInit === void 0)
                return;
            const j = D.source
              , re = p.get(j);
            if (re) {
                const ne = re[T.__cacheKey];
                ne.usedTimes--,
                ne.usedTimes === 0 && R(D),
                Object.keys(re).length === 0 && p.delete(j)
            }
            n.remove(D)
        }
        function R(D) {
            const T = n.get(D);
            s.deleteTexture(T.__webglTexture);
            const j = D.source
              , re = p.get(j);
            delete re[T.__cacheKey],
            a.memory.textures--
        }
        function U(D) {
            const T = D.texture
              , j = n.get(D)
              , re = n.get(T);
            if (re.__webglTexture !== void 0 && (s.deleteTexture(re.__webglTexture),
            a.memory.textures--),
            D.depthTexture && D.depthTexture.dispose(),
            D.isWebGLCubeRenderTarget)
                for (let ne = 0; ne < 6; ne++)
                    s.deleteFramebuffer(j.__webglFramebuffer[ne]),
                    j.__webglDepthbuffer && s.deleteRenderbuffer(j.__webglDepthbuffer[ne]);
            else {
                if (s.deleteFramebuffer(j.__webglFramebuffer),
                j.__webglDepthbuffer && s.deleteRenderbuffer(j.__webglDepthbuffer),
                j.__webglMultisampledFramebuffer && s.deleteFramebuffer(j.__webglMultisampledFramebuffer),
                j.__webglColorRenderbuffer)
                    for (let ne = 0; ne < j.__webglColorRenderbuffer.length; ne++)
                        j.__webglColorRenderbuffer[ne] && s.deleteRenderbuffer(j.__webglColorRenderbuffer[ne]);
                j.__webglDepthRenderbuffer && s.deleteRenderbuffer(j.__webglDepthRenderbuffer)
            }
            if (D.isWebGLMultipleRenderTargets)
                for (let ne = 0, le = T.length; ne < le; ne++) {
                    const be = n.get(T[ne]);
                    be.__webglTexture && (s.deleteTexture(be.__webglTexture),
                    a.memory.textures--),
                    n.remove(T[ne])
                }
            n.remove(T),
            n.remove(D)
        }
        let z = 0;
        function W() {
            z = 0
        }
        function X() {
            const D = z;
            return D >= c && console.warn("THREE.WebGLTextures: Trying to use " + D + " texture units while this GPU supports only " + c),
            z += 1,
            D
        }
        function G(D) {
            const T = [];
            return T.push(D.wrapS),
            T.push(D.wrapT),
            T.push(D.magFilter),
            T.push(D.minFilter),
            T.push(D.anisotropy),
            T.push(D.internalFormat),
            T.push(D.format),
            T.push(D.type),
            T.push(D.generateMipmaps),
            T.push(D.premultiplyAlpha),
            T.push(D.flipY),
            T.push(D.unpackAlignment),
            T.push(D.encoding),
            T.join()
        }
        function P(D, T) {
            const j = n.get(D);
            if (D.isVideoTexture && pt(D),
            D.isRenderTargetTexture === !1 && D.version > 0 && j.__version !== D.version) {
                const re = D.image;
                if (re === null)
                    console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
                else if (re.complete === !1)
                    console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
                else {
                    xe(j, D, T);
                    return
                }
            }
            t.activeTexture(33984 + T),
            t.bindTexture(3553, j.__webglTexture)
        }
        function ee(D, T) {
            const j = n.get(D);
            if (D.version > 0 && j.__version !== D.version) {
                xe(j, D, T);
                return
            }
            t.activeTexture(33984 + T),
            t.bindTexture(35866, j.__webglTexture)
        }
        function te(D, T) {
            const j = n.get(D);
            if (D.version > 0 && j.__version !== D.version) {
                xe(j, D, T);
                return
            }
            t.activeTexture(33984 + T),
            t.bindTexture(32879, j.__webglTexture)
        }
        function ie(D, T) {
            const j = n.get(D);
            if (D.version > 0 && j.__version !== D.version) {
                Ce(j, D, T);
                return
            }
            t.activeTexture(33984 + T),
            t.bindTexture(34067, j.__webglTexture)
        }
        const ce = {
            [Va]: 10497,
            [In]: 33071,
            [Ha]: 33648
        }
          , Me = {
            [jt]: 9728,
            [eu]: 9984,
            [tu]: 9986,
            [mn]: 9729,
            [Np]: 9985,
            [Mo]: 9987
        };
        function H(D, T, j) {
            if (j ? (s.texParameteri(D, 10242, ce[T.wrapS]),
            s.texParameteri(D, 10243, ce[T.wrapT]),
            (D === 32879 || D === 35866) && s.texParameteri(D, 32882, ce[T.wrapR]),
            s.texParameteri(D, 10240, Me[T.magFilter]),
            s.texParameteri(D, 10241, Me[T.minFilter])) : (s.texParameteri(D, 10242, 33071),
            s.texParameteri(D, 10243, 33071),
            (D === 32879 || D === 35866) && s.texParameteri(D, 32882, 33071),
            (T.wrapS !== In || T.wrapT !== In) && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),
            s.texParameteri(D, 10240, L(T.magFilter)),
            s.texParameteri(D, 10241, L(T.minFilter)),
            T.minFilter !== jt && T.minFilter !== mn && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),
            e.has("EXT_texture_filter_anisotropic") === !0) {
                const re = e.get("EXT_texture_filter_anisotropic");
                if (T.type === $i && e.has("OES_texture_float_linear") === !1 || o === !1 && T.type === As && e.has("OES_texture_half_float_linear") === !1)
                    return;
                (T.anisotropy > 1 || n.get(T).__currentAnisotropy) && (s.texParameterf(D, re.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(T.anisotropy, i.getMaxAnisotropy())),
                n.get(T).__currentAnisotropy = T.anisotropy)
            }
        }
        function Le(D, T) {
            let j = !1;
            D.__webglInit === void 0 && (D.__webglInit = !0,
            T.addEventListener("dispose", F));
            const re = T.source;
            let ne = p.get(re);
            ne === void 0 && (ne = {},
            p.set(re, ne));
            const le = G(T);
            if (le !== D.__cacheKey) {
                ne[le] === void 0 && (ne[le] = {
                    texture: s.createTexture(),
                    usedTimes: 0
                },
                a.memory.textures++,
                j = !0),
                ne[le].usedTimes++;
                const be = ne[D.__cacheKey];
                be !== void 0 && (ne[D.__cacheKey].usedTimes--,
                be.usedTimes === 0 && R(T)),
                D.__cacheKey = le,
                D.__webglTexture = ne[le].texture
            }
            return j
        }
        function xe(D, T, j) {
            let re = 3553;
            T.isDataArrayTexture && (re = 35866),
            T.isData3DTexture && (re = 32879);
            const ne = Le(D, T)
              , le = T.source;
            if (t.activeTexture(33984 + j),
            t.bindTexture(re, D.__webglTexture),
            le.version !== le.__currentVersion || ne === !0) {
                s.pixelStorei(37440, T.flipY),
                s.pixelStorei(37441, T.premultiplyAlpha),
                s.pixelStorei(3317, T.unpackAlignment),
                s.pixelStorei(37443, 0);
                const be = b(T) && x(T.image) === !1;
                let C = M(T.image, be, !1, u);
                C = ft(T, C);
                const Q = x(C) || o
                  , se = r.convert(T.format, T.encoding);
                let he = r.convert(T.type)
                  , ue = v(T.internalFormat, se, he, T.encoding, T.isVideoTexture);
                H(re, T, Q);
                let we;
                const Ue = T.mipmaps
                  , Te = o && T.isVideoTexture !== !0
                  , I = le.__currentVersion === void 0 || ne === !0
                  , ae = w(T, C, Q);
                if (T.isDepthTexture)
                    ue = 6402,
                    o ? T.type === $i ? ue = 36012 : T.type === Yi ? ue = 33190 : T.type === Ur ? ue = 35056 : ue = 33189 : T.type === $i && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),
                    T.format === ji && ue === 6402 && T.type !== nu && T.type !== Yi && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),
                    T.type = Yi,
                    he = r.convert(T.type)),
                    T.format === kr && ue === 6402 && (ue = 34041,
                    T.type !== Ur && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),
                    T.type = Ur,
                    he = r.convert(T.type))),
                    I && (Te ? t.texStorage2D(3553, 1, ue, C.width, C.height) : t.texImage2D(3553, 0, ue, C.width, C.height, 0, se, he, null));
                else if (T.isDataTexture)
                    if (Ue.length > 0 && Q) {
                        Te && I && t.texStorage2D(3553, ae, ue, Ue[0].width, Ue[0].height);
                        for (let q = 0, de = Ue.length; q < de; q++)
                            we = Ue[q],
                            Te ? t.texSubImage2D(3553, q, 0, 0, we.width, we.height, se, he, we.data) : t.texImage2D(3553, q, ue, we.width, we.height, 0, se, he, we.data);
                        T.generateMipmaps = !1
                    } else
                        Te ? (I && t.texStorage2D(3553, ae, ue, C.width, C.height),
                        t.texSubImage2D(3553, 0, 0, 0, C.width, C.height, se, he, C.data)) : t.texImage2D(3553, 0, ue, C.width, C.height, 0, se, he, C.data);
                else if (T.isCompressedTexture) {
                    Te && I && t.texStorage2D(3553, ae, ue, Ue[0].width, Ue[0].height);
                    for (let q = 0, de = Ue.length; q < de; q++)
                        we = Ue[q],
                        T.format !== qn ? se !== null ? Te ? t.compressedTexSubImage2D(3553, q, 0, 0, we.width, we.height, se, we.data) : t.compressedTexImage2D(3553, q, ue, we.width, we.height, 0, we.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Te ? t.texSubImage2D(3553, q, 0, 0, we.width, we.height, se, he, we.data) : t.texImage2D(3553, q, ue, we.width, we.height, 0, se, he, we.data)
                } else if (T.isDataArrayTexture)
                    Te ? (I && t.texStorage3D(35866, ae, ue, C.width, C.height, C.depth),
                    t.texSubImage3D(35866, 0, 0, 0, 0, C.width, C.height, C.depth, se, he, C.data)) : t.texImage3D(35866, 0, ue, C.width, C.height, C.depth, 0, se, he, C.data);
                else if (T.isData3DTexture)
                    Te ? (I && t.texStorage3D(32879, ae, ue, C.width, C.height, C.depth),
                    t.texSubImage3D(32879, 0, 0, 0, 0, C.width, C.height, C.depth, se, he, C.data)) : t.texImage3D(32879, 0, ue, C.width, C.height, C.depth, 0, se, he, C.data);
                else if (T.isFramebufferTexture) {
                    if (I)
                        if (Te)
                            t.texStorage2D(3553, ae, ue, C.width, C.height);
                        else {
                            let q = C.width
                              , de = C.height;
                            for (let fe = 0; fe < ae; fe++)
                                t.texImage2D(3553, fe, ue, q, de, 0, se, he, null),
                                q >>= 1,
                                de >>= 1
                        }
                } else if (Ue.length > 0 && Q) {
                    Te && I && t.texStorage2D(3553, ae, ue, Ue[0].width, Ue[0].height);
                    for (let q = 0, de = Ue.length; q < de; q++)
                        we = Ue[q],
                        Te ? t.texSubImage2D(3553, q, 0, 0, se, he, we) : t.texImage2D(3553, q, ue, se, he, we);
                    T.generateMipmaps = !1
                } else
                    Te ? (I && t.texStorage2D(3553, ae, ue, C.width, C.height),
                    t.texSubImage2D(3553, 0, 0, 0, se, he, C)) : t.texImage2D(3553, 0, ue, se, he, C);
                S(T, Q) && A(re),
                le.__currentVersion = le.version,
                T.onUpdate && T.onUpdate(T)
            }
            D.__version = T.version
        }
        function Ce(D, T, j) {
            if (T.image.length !== 6)
                return;
            const re = Le(D, T)
              , ne = T.source;
            if (t.activeTexture(33984 + j),
            t.bindTexture(34067, D.__webglTexture),
            ne.version !== ne.__currentVersion || re === !0) {
                s.pixelStorei(37440, T.flipY),
                s.pixelStorei(37441, T.premultiplyAlpha),
                s.pixelStorei(3317, T.unpackAlignment),
                s.pixelStorei(37443, 0);
                const le = T.isCompressedTexture || T.image[0].isCompressedTexture
                  , be = T.image[0] && T.image[0].isDataTexture
                  , C = [];
                for (let q = 0; q < 6; q++)
                    !le && !be ? C[q] = M(T.image[q], !1, !0, l) : C[q] = be ? T.image[q].image : T.image[q],
                    C[q] = ft(T, C[q]);
                const Q = C[0]
                  , se = x(Q) || o
                  , he = r.convert(T.format, T.encoding)
                  , ue = r.convert(T.type)
                  , we = v(T.internalFormat, he, ue, T.encoding)
                  , Ue = o && T.isVideoTexture !== !0
                  , Te = ne.__currentVersion === void 0 || re === !0;
                let I = w(T, Q, se);
                H(34067, T, se);
                let ae;
                if (le) {
                    Ue && Te && t.texStorage2D(34067, I, we, Q.width, Q.height);
                    for (let q = 0; q < 6; q++) {
                        ae = C[q].mipmaps;
                        for (let de = 0; de < ae.length; de++) {
                            const fe = ae[de];
                            T.format !== qn ? he !== null ? Ue ? t.compressedTexSubImage2D(34069 + q, de, 0, 0, fe.width, fe.height, he, fe.data) : t.compressedTexImage2D(34069 + q, de, we, fe.width, fe.height, 0, fe.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : Ue ? t.texSubImage2D(34069 + q, de, 0, 0, fe.width, fe.height, he, ue, fe.data) : t.texImage2D(34069 + q, de, we, fe.width, fe.height, 0, he, ue, fe.data)
                        }
                    }
                } else {
                    ae = T.mipmaps,
                    Ue && Te && (ae.length > 0 && I++,
                    t.texStorage2D(34067, I, we, C[0].width, C[0].height));
                    for (let q = 0; q < 6; q++)
                        if (be) {
                            Ue ? t.texSubImage2D(34069 + q, 0, 0, 0, C[q].width, C[q].height, he, ue, C[q].data) : t.texImage2D(34069 + q, 0, we, C[q].width, C[q].height, 0, he, ue, C[q].data);
                            for (let de = 0; de < ae.length; de++) {
                                const Be = ae[de].image[q].image;
                                Ue ? t.texSubImage2D(34069 + q, de + 1, 0, 0, Be.width, Be.height, he, ue, Be.data) : t.texImage2D(34069 + q, de + 1, we, Be.width, Be.height, 0, he, ue, Be.data)
                            }
                        } else {
                            Ue ? t.texSubImage2D(34069 + q, 0, 0, 0, he, ue, C[q]) : t.texImage2D(34069 + q, 0, we, he, ue, C[q]);
                            for (let de = 0; de < ae.length; de++) {
                                const fe = ae[de];
                                Ue ? t.texSubImage2D(34069 + q, de + 1, 0, 0, he, ue, fe.image[q]) : t.texImage2D(34069 + q, de + 1, we, he, ue, fe.image[q])
                            }
                        }
                }
                S(T, se) && A(34067),
                ne.__currentVersion = ne.version,
                T.onUpdate && T.onUpdate(T)
            }
            D.__version = T.version
        }
        function oe(D, T, j, re, ne) {
            const le = r.convert(j.format, j.encoding)
              , be = r.convert(j.type)
              , C = v(j.internalFormat, le, be, j.encoding);
            n.get(T).__hasExternalTextures || (ne === 32879 || ne === 35866 ? t.texImage3D(ne, 0, C, T.width, T.height, T.depth, 0, le, be, null) : t.texImage2D(ne, 0, C, T.width, T.height, 0, le, be, null)),
            t.bindFramebuffer(36160, D),
            De(T) ? h.framebufferTexture2DMultisampleEXT(36160, re, ne, n.get(j).__webglTexture, 0, Qe(T)) : s.framebufferTexture2D(36160, re, ne, n.get(j).__webglTexture, 0),
            t.bindFramebuffer(36160, null)
        }
        function Ne(D, T, j) {
            if (s.bindRenderbuffer(36161, D),
            T.depthBuffer && !T.stencilBuffer) {
                let re = 33189;
                if (j || De(T)) {
                    const ne = T.depthTexture;
                    ne && ne.isDepthTexture && (ne.type === $i ? re = 36012 : ne.type === Yi && (re = 33190));
                    const le = Qe(T);
                    De(T) ? h.renderbufferStorageMultisampleEXT(36161, le, re, T.width, T.height) : s.renderbufferStorageMultisample(36161, le, re, T.width, T.height)
                } else
                    s.renderbufferStorage(36161, re, T.width, T.height);
                s.framebufferRenderbuffer(36160, 36096, 36161, D)
            } else if (T.depthBuffer && T.stencilBuffer) {
                const re = Qe(T);
                j && De(T) === !1 ? s.renderbufferStorageMultisample(36161, re, 35056, T.width, T.height) : De(T) ? h.renderbufferStorageMultisampleEXT(36161, re, 35056, T.width, T.height) : s.renderbufferStorage(36161, 34041, T.width, T.height),
                s.framebufferRenderbuffer(36160, 33306, 36161, D)
            } else {
                const re = T.isWebGLMultipleRenderTargets === !0 ? T.texture : [T.texture];
                for (let ne = 0; ne < re.length; ne++) {
                    const le = re[ne]
                      , be = r.convert(le.format, le.encoding)
                      , C = r.convert(le.type)
                      , Q = v(le.internalFormat, be, C, le.encoding)
                      , se = Qe(T);
                    j && De(T) === !1 ? s.renderbufferStorageMultisample(36161, se, Q, T.width, T.height) : De(T) ? h.renderbufferStorageMultisampleEXT(36161, se, Q, T.width, T.height) : s.renderbufferStorage(36161, Q, T.width, T.height)
                }
            }
            s.bindRenderbuffer(36161, null)
        }
        function me(D, T) {
            if (T && T.isWebGLCubeRenderTarget)
                throw new Error("Depth Texture with cube render targets is not supported");
            if (t.bindFramebuffer(36160, D),
            !(T.depthTexture && T.depthTexture.isDepthTexture))
                throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
            (!n.get(T.depthTexture).__webglTexture || T.depthTexture.image.width !== T.width || T.depthTexture.image.height !== T.height) && (T.depthTexture.image.width = T.width,
            T.depthTexture.image.height = T.height,
            T.depthTexture.needsUpdate = !0),
            P(T.depthTexture, 0);
            const re = n.get(T.depthTexture).__webglTexture
              , ne = Qe(T);
            if (T.depthTexture.format === ji)
                De(T) ? h.framebufferTexture2DMultisampleEXT(36160, 36096, 3553, re, 0, ne) : s.framebufferTexture2D(36160, 36096, 3553, re, 0);
            else if (T.depthTexture.format === kr)
                De(T) ? h.framebufferTexture2DMultisampleEXT(36160, 33306, 3553, re, 0, ne) : s.framebufferTexture2D(36160, 33306, 3553, re, 0);
            else
                throw new Error("Unknown depthTexture format")
        }
        function _e(D) {
            const T = n.get(D)
              , j = D.isWebGLCubeRenderTarget === !0;
            if (D.depthTexture && !T.__autoAllocateDepthBuffer) {
                if (j)
                    throw new Error("target.depthTexture not supported in Cube render targets");
                me(T.__webglFramebuffer, D)
            } else if (j) {
                T.__webglDepthbuffer = [];
                for (let re = 0; re < 6; re++)
                    t.bindFramebuffer(36160, T.__webglFramebuffer[re]),
                    T.__webglDepthbuffer[re] = s.createRenderbuffer(),
                    Ne(T.__webglDepthbuffer[re], D, !1)
            } else
                t.bindFramebuffer(36160, T.__webglFramebuffer),
                T.__webglDepthbuffer = s.createRenderbuffer(),
                Ne(T.__webglDepthbuffer, D, !1);
            t.bindFramebuffer(36160, null)
        }
        function qe(D, T, j) {
            const re = n.get(D);
            T !== void 0 && oe(re.__webglFramebuffer, D, D.texture, 36064, 3553),
            j !== void 0 && _e(D)
        }
        function et(D) {
            const T = D.texture
              , j = n.get(D)
              , re = n.get(T);
            D.addEventListener("dispose", V),
            D.isWebGLMultipleRenderTargets !== !0 && (re.__webglTexture === void 0 && (re.__webglTexture = s.createTexture()),
            re.__version = T.version,
            a.memory.textures++);
            const ne = D.isWebGLCubeRenderTarget === !0
              , le = D.isWebGLMultipleRenderTargets === !0
              , be = x(D) || o;
            if (ne) {
                j.__webglFramebuffer = [];
                for (let C = 0; C < 6; C++)
                    j.__webglFramebuffer[C] = s.createFramebuffer()
            } else {
                if (j.__webglFramebuffer = s.createFramebuffer(),
                le)
                    if (i.drawBuffers) {
                        const C = D.texture;
                        for (let Q = 0, se = C.length; Q < se; Q++) {
                            const he = n.get(C[Q]);
                            he.__webglTexture === void 0 && (he.__webglTexture = s.createTexture(),
                            a.memory.textures++)
                        }
                    } else
                        console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");
                if (o && D.samples > 0 && De(D) === !1) {
                    const C = le ? T : [T];
                    j.__webglMultisampledFramebuffer = s.createFramebuffer(),
                    j.__webglColorRenderbuffer = [],
                    t.bindFramebuffer(36160, j.__webglMultisampledFramebuffer);
                    for (let Q = 0; Q < C.length; Q++) {
                        const se = C[Q];
                        j.__webglColorRenderbuffer[Q] = s.createRenderbuffer(),
                        s.bindRenderbuffer(36161, j.__webglColorRenderbuffer[Q]);
                        const he = r.convert(se.format, se.encoding)
                          , ue = r.convert(se.type)
                          , we = v(se.internalFormat, he, ue, se.encoding)
                          , Ue = Qe(D);
                        s.renderbufferStorageMultisample(36161, Ue, we, D.width, D.height),
                        s.framebufferRenderbuffer(36160, 36064 + Q, 36161, j.__webglColorRenderbuffer[Q])
                    }
                    s.bindRenderbuffer(36161, null),
                    D.depthBuffer && (j.__webglDepthRenderbuffer = s.createRenderbuffer(),
                    Ne(j.__webglDepthRenderbuffer, D, !0)),
                    t.bindFramebuffer(36160, null)
                }
            }
            if (ne) {
                t.bindTexture(34067, re.__webglTexture),
                H(34067, T, be);
                for (let C = 0; C < 6; C++)
                    oe(j.__webglFramebuffer[C], D, T, 36064, 34069 + C);
                S(T, be) && A(34067),
                t.unbindTexture()
            } else if (le) {
                const C = D.texture;
                for (let Q = 0, se = C.length; Q < se; Q++) {
                    const he = C[Q]
                      , ue = n.get(he);
                    t.bindTexture(3553, ue.__webglTexture),
                    H(3553, he, be),
                    oe(j.__webglFramebuffer, D, he, 36064 + Q, 3553),
                    S(he, be) && A(3553)
                }
                t.unbindTexture()
            } else {
                let C = 3553;
                (D.isWebGL3DRenderTarget || D.isWebGLArrayRenderTarget) && (o ? C = D.isWebGL3DRenderTarget ? 32879 : 35866 : console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),
                t.bindTexture(C, re.__webglTexture),
                H(C, T, be),
                oe(j.__webglFramebuffer, D, T, 36064, C),
                S(T, be) && A(C),
                t.unbindTexture()
            }
            D.depthBuffer && _e(D)
        }
        function Xe(D) {
            const T = x(D) || o
              , j = D.isWebGLMultipleRenderTargets === !0 ? D.texture : [D.texture];
            for (let re = 0, ne = j.length; re < ne; re++) {
                const le = j[re];
                if (S(le, T)) {
                    const be = D.isWebGLCubeRenderTarget ? 34067 : 3553
                      , C = n.get(le).__webglTexture;
                    t.bindTexture(be, C),
                    A(be),
                    t.unbindTexture()
                }
            }
        }
        function Y(D) {
            if (o && D.samples > 0 && De(D) === !1) {
                const T = D.isWebGLMultipleRenderTargets ? D.texture : [D.texture]
                  , j = D.width
                  , re = D.height;
                let ne = 16384;
                const le = []
                  , be = D.stencilBuffer ? 33306 : 36096
                  , C = n.get(D)
                  , Q = D.isWebGLMultipleRenderTargets === !0;
                if (Q)
                    for (let se = 0; se < T.length; se++)
                        t.bindFramebuffer(36160, C.__webglMultisampledFramebuffer),
                        s.framebufferRenderbuffer(36160, 36064 + se, 36161, null),
                        t.bindFramebuffer(36160, C.__webglFramebuffer),
                        s.framebufferTexture2D(36009, 36064 + se, 3553, null, 0);
                t.bindFramebuffer(36008, C.__webglMultisampledFramebuffer),
                t.bindFramebuffer(36009, C.__webglFramebuffer);
                for (let se = 0; se < T.length; se++) {
                    le.push(36064 + se),
                    D.depthBuffer && le.push(be);
                    const he = C.__ignoreDepthValues !== void 0 ? C.__ignoreDepthValues : !1;
                    if (he === !1 && (D.depthBuffer && (ne |= 256),
                    D.stencilBuffer && (ne |= 1024)),
                    Q && s.framebufferRenderbuffer(36008, 36064, 36161, C.__webglColorRenderbuffer[se]),
                    he === !0 && (s.invalidateFramebuffer(36008, [be]),
                    s.invalidateFramebuffer(36009, [be])),
                    Q) {
                        const ue = n.get(T[se]).__webglTexture;
                        s.framebufferTexture2D(36009, 36064, 3553, ue, 0)
                    }
                    s.blitFramebuffer(0, 0, j, re, 0, 0, j, re, ne, 9728),
                    m && s.invalidateFramebuffer(36008, le)
                }
                if (t.bindFramebuffer(36008, null),
                t.bindFramebuffer(36009, null),
                Q)
                    for (let se = 0; se < T.length; se++) {
                        t.bindFramebuffer(36160, C.__webglMultisampledFramebuffer),
                        s.framebufferRenderbuffer(36160, 36064 + se, 36161, C.__webglColorRenderbuffer[se]);
                        const he = n.get(T[se]).__webglTexture;
                        t.bindFramebuffer(36160, C.__webglFramebuffer),
                        s.framebufferTexture2D(36009, 36064 + se, 3553, he, 0)
                    }
                t.bindFramebuffer(36009, C.__webglMultisampledFramebuffer)
            }
        }
        function Qe(D) {
            return Math.min(f, D.samples)
        }
        function De(D) {
            const T = n.get(D);
            return o && D.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && T.__useRenderToTexture !== !1
        }
        function pt(D) {
            const T = a.render.frame;
            g.get(D) !== T && (g.set(D, T),
            D.update())
        }
        function ft(D, T) {
            const j = D.encoding
              , re = D.format
              , ne = D.type;
            return D.isCompressedTexture === !0 || D.isVideoTexture === !0 || D.format === ja || j !== Zi && (j === at ? o === !1 ? e.has("EXT_sRGB") === !0 && re === qn ? (D.format = ja,
            D.minFilter = mn,
            D.generateMipmaps = !1) : T = Du.sRGBToLinear(T) : (re !== qn || ne !== qi) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture encoding:", j)),
            T
        }
        this.allocateTextureUnit = X,
        this.resetTextureUnits = W,
        this.setTexture2D = P,
        this.setTexture2DArray = ee,
        this.setTexture3D = te,
        this.setTextureCube = ie,
        this.rebindTextures = qe,
        this.setupRenderTarget = et,
        this.updateRenderTargetMipmap = Xe,
        this.updateMultisampleRenderTarget = Y,
        this.setupDepthRenderbuffer = _e,
        this.setupFrameBufferTexture = oe,
        this.useMultisampledRTT = De
    }
    function px(s, e, t) {
        const n = t.isWebGL2;
        function i(r, a=null) {
            let o;
            if (r === qi)
                return 5121;
            if (r === Gp)
                return 32819;
            if (r === Vp)
                return 32820;
            if (r === Up)
                return 5120;
            if (r === kp)
                return 5122;
            if (r === nu)
                return 5123;
            if (r === Bp)
                return 5124;
            if (r === Yi)
                return 5125;
            if (r === $i)
                return 5126;
            if (r === As)
                return n ? 5131 : (o = e.get("OES_texture_half_float"),
                o !== null ? o.HALF_FLOAT_OES : null);
            if (r === Hp)
                return 6406;
            if (r === qn)
                return 6408;
            if (r === Xp)
                return 6409;
            if (r === qp)
                return 6410;
            if (r === ji)
                return 6402;
            if (r === kr)
                return 34041;
            if (r === Yp)
                return 6403;
            if (r === Wp)
                return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),
                6408;
            if (r === ja)
                return o = e.get("EXT_sRGB"),
                o !== null ? o.SRGB_ALPHA_EXT : null;
            if (r === $p)
                return 36244;
            if (r === jp)
                return 33319;
            if (r === Zp)
                return 33320;
            if (r === Kp)
                return 36249;
            if (r === Wa || r === Xa || r === qa || r === Ya)
                if (a === at)
                    if (o = e.get("WEBGL_compressed_texture_s3tc_srgb"),
                    o !== null) {
                        if (r === Wa)
                            return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;
                        if (r === Xa)
                            return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
                        if (r === qa)
                            return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
                        if (r === Ya)
                            return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT
                    } else
                        return null;
                else if (o = e.get("WEBGL_compressed_texture_s3tc"),
                o !== null) {
                    if (r === Wa)
                        return o.COMPRESSED_RGB_S3TC_DXT1_EXT;
                    if (r === Xa)
                        return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                    if (r === qa)
                        return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                    if (r === Ya)
                        return o.COMPRESSED_RGBA_S3TC_DXT5_EXT
                } else
                    return null;
            if (r === iu || r === ru || r === su || r === ou)
                if (o = e.get("WEBGL_compressed_texture_pvrtc"),
                o !== null) {
                    if (r === iu)
                        return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                    if (r === ru)
                        return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                    if (r === su)
                        return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                    if (r === ou)
                        return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
                } else
                    return null;
            if (r === Jp)
                return o = e.get("WEBGL_compressed_texture_etc1"),
                o !== null ? o.COMPRESSED_RGB_ETC1_WEBGL : null;
            if (r === au || r === lu)
                if (o = e.get("WEBGL_compressed_texture_etc"),
                o !== null) {
                    if (r === au)
                        return a === at ? o.COMPRESSED_SRGB8_ETC2 : o.COMPRESSED_RGB8_ETC2;
                    if (r === lu)
                        return a === at ? o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : o.COMPRESSED_RGBA8_ETC2_EAC
                } else
                    return null;
            if (r === cu || r === uu || r === fu || r === hu || r === du || r === pu || r === mu || r === gu || r === _u || r === xu || r === vu || r === yu || r === bu || r === Mu)
                if (o = e.get("WEBGL_compressed_texture_astc"),
                o !== null) {
                    if (r === cu)
                        return a === at ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : o.COMPRESSED_RGBA_ASTC_4x4_KHR;
                    if (r === uu)
                        return a === at ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : o.COMPRESSED_RGBA_ASTC_5x4_KHR;
                    if (r === fu)
                        return a === at ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : o.COMPRESSED_RGBA_ASTC_5x5_KHR;
                    if (r === hu)
                        return a === at ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : o.COMPRESSED_RGBA_ASTC_6x5_KHR;
                    if (r === du)
                        return a === at ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : o.COMPRESSED_RGBA_ASTC_6x6_KHR;
                    if (r === pu)
                        return a === at ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : o.COMPRESSED_RGBA_ASTC_8x5_KHR;
                    if (r === mu)
                        return a === at ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : o.COMPRESSED_RGBA_ASTC_8x6_KHR;
                    if (r === gu)
                        return a === at ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : o.COMPRESSED_RGBA_ASTC_8x8_KHR;
                    if (r === _u)
                        return a === at ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : o.COMPRESSED_RGBA_ASTC_10x5_KHR;
                    if (r === xu)
                        return a === at ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : o.COMPRESSED_RGBA_ASTC_10x6_KHR;
                    if (r === vu)
                        return a === at ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : o.COMPRESSED_RGBA_ASTC_10x8_KHR;
                    if (r === yu)
                        return a === at ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : o.COMPRESSED_RGBA_ASTC_10x10_KHR;
                    if (r === bu)
                        return a === at ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : o.COMPRESSED_RGBA_ASTC_12x10_KHR;
                    if (r === Mu)
                        return a === at ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : o.COMPRESSED_RGBA_ASTC_12x12_KHR
                } else
                    return null;
            if (r === Su)
                if (o = e.get("EXT_texture_compression_bptc"),
                o !== null) {
                    if (r === Su)
                        return a === at ? o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : o.COMPRESSED_RGBA_BPTC_UNORM_EXT
                } else
                    return null;
            return r === Ur ? n ? 34042 : (o = e.get("WEBGL_depth_texture"),
            o !== null ? o.UNSIGNED_INT_24_8_WEBGL : null) : s[r] !== void 0 ? s[r] : null
        }
        return {
            convert: i
        }
    }
    class mx extends xn {
        constructor(e=[]) {
            super();
            this.isArrayCamera = !0,
            this.cameras = e
        }
    }
    class Yo extends Nn {
        constructor() {
            super();
            this.isGroup = !0,
            this.type = "Group"
        }
    }
    const gx = {
        type: "move"
    };
    class Pl {
        constructor() {
            this._targetRay = null,
            this._grip = null,
            this._hand = null
        }
        getHandSpace() {
            return this._hand === null && (this._hand = new Yo,
            this._hand.matrixAutoUpdate = !1,
            this._hand.visible = !1,
            this._hand.joints = {},
            this._hand.inputState = {
                pinching: !1
            }),
            this._hand
        }
        getTargetRaySpace() {
            return this._targetRay === null && (this._targetRay = new Yo,
            this._targetRay.matrixAutoUpdate = !1,
            this._targetRay.visible = !1,
            this._targetRay.hasLinearVelocity = !1,
            this._targetRay.linearVelocity = new B,
            this._targetRay.hasAngularVelocity = !1,
            this._targetRay.angularVelocity = new B),
            this._targetRay
        }
        getGripSpace() {
            return this._grip === null && (this._grip = new Yo,
            this._grip.matrixAutoUpdate = !1,
            this._grip.visible = !1,
            this._grip.hasLinearVelocity = !1,
            this._grip.linearVelocity = new B,
            this._grip.hasAngularVelocity = !1,
            this._grip.angularVelocity = new B),
            this._grip
        }
        dispatchEvent(e) {
            return this._targetRay !== null && this._targetRay.dispatchEvent(e),
            this._grip !== null && this._grip.dispatchEvent(e),
            this._hand !== null && this._hand.dispatchEvent(e),
            this
        }
        disconnect(e) {
            return this.dispatchEvent({
                type: "disconnected",
                data: e
            }),
            this._targetRay !== null && (this._targetRay.visible = !1),
            this._grip !== null && (this._grip.visible = !1),
            this._hand !== null && (this._hand.visible = !1),
            this
        }
        update(e, t, n) {
            let i = null
              , r = null
              , a = null;
            const o = this._targetRay
              , c = this._grip
              , l = this._hand;
            if (e && t.session.visibilityState !== "visible-blurred") {
                if (l && e.hand) {
                    a = !0;
                    for (const d of e.hand.values()) {
                        const p = t.getJointPose(d, n);
                        if (l.joints[d.jointName] === void 0) {
                            const y = new Yo;
                            y.matrixAutoUpdate = !1,
                            y.visible = !1,
                            l.joints[d.jointName] = y,
                            l.add(y)
                        }
                        const _ = l.joints[d.jointName];
                        p !== null && (_.matrix.fromArray(p.transform.matrix),
                        _.matrix.decompose(_.position, _.rotation, _.scale),
                        _.jointRadius = p.radius),
                        _.visible = p !== null
                    }
                    const u = l.joints["index-finger-tip"]
                      , f = l.joints["thumb-tip"]
                      , h = u.position.distanceTo(f.position)
                      , m = .02
                      , g = .005;
                    l.inputState.pinching && h > m + g ? (l.inputState.pinching = !1,
                    this.dispatchEvent({
                        type: "pinchend",
                        handedness: e.handedness,
                        target: this
                    })) : !l.inputState.pinching && h <= m - g && (l.inputState.pinching = !0,
                    this.dispatchEvent({
                        type: "pinchstart",
                        handedness: e.handedness,
                        target: this
                    }))
                } else
                    c !== null && e.gripSpace && (r = t.getPose(e.gripSpace, n),
                    r !== null && (c.matrix.fromArray(r.transform.matrix),
                    c.matrix.decompose(c.position, c.rotation, c.scale),
                    r.linearVelocity ? (c.hasLinearVelocity = !0,
                    c.linearVelocity.copy(r.linearVelocity)) : c.hasLinearVelocity = !1,
                    r.angularVelocity ? (c.hasAngularVelocity = !0,
                    c.angularVelocity.copy(r.angularVelocity)) : c.hasAngularVelocity = !1));
                o !== null && (i = t.getPose(e.targetRaySpace, n),
                i === null && r !== null && (i = r),
                i !== null && (o.matrix.fromArray(i.transform.matrix),
                o.matrix.decompose(o.position, o.rotation, o.scale),
                i.linearVelocity ? (o.hasLinearVelocity = !0,
                o.linearVelocity.copy(i.linearVelocity)) : o.hasLinearVelocity = !1,
                i.angularVelocity ? (o.hasAngularVelocity = !0,
                o.angularVelocity.copy(i.angularVelocity)) : o.hasAngularVelocity = !1,
                this.dispatchEvent(gx)))
            }
            return o !== null && (o.visible = i !== null),
            c !== null && (c.visible = r !== null),
            l !== null && (l.visible = a !== null),
            this
        }
    }
    class _x extends on {
        constructor(e, t, n, i, r, a, o, c, l, u) {
            if (u = u !== void 0 ? u : ji,
            u !== ji && u !== kr)
                throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
            n === void 0 && u === ji && (n = Yi),
            n === void 0 && u === kr && (n = Ur);
            super(null, i, r, a, o, c, u, n, l);
            this.isDepthTexture = !0,
            this.image = {
                width: e,
                height: t
            },
            this.magFilter = o !== void 0 ? o : jt,
            this.minFilter = c !== void 0 ? c : jt,
            this.flipY = !1,
            this.generateMipmaps = !1
        }
    }
    class xx extends Ji {
        constructor(e, t) {
            super();
            const n = this;
            let i = null
              , r = 1
              , a = null
              , o = "local-floor"
              , c = null
              , l = null
              , u = null
              , f = null
              , h = null
              , m = null;
            const g = t.getContextAttributes();
            let d = null
              , p = null;
            const _ = []
              , y = []
              , M = new xn;
            M.layers.enable(1),
            M.viewport = new Mt;
            const x = new xn;
            x.layers.enable(2),
            x.viewport = new Mt;
            const b = [M, x]
              , S = new mx;
            S.layers.enable(1),
            S.layers.enable(2);
            let A = null
              , v = null;
            this.cameraAutoUpdate = !0,
            this.enabled = !1,
            this.isPresenting = !1,
            this.getController = function(G) {
                let P = _[G];
                return P === void 0 && (P = new Pl,
                _[G] = P),
                P.getTargetRaySpace()
            }
            ,
            this.getControllerGrip = function(G) {
                let P = _[G];
                return P === void 0 && (P = new Pl,
                _[G] = P),
                P.getGripSpace()
            }
            ,
            this.getHand = function(G) {
                let P = _[G];
                return P === void 0 && (P = new Pl,
                _[G] = P),
                P.getHandSpace()
            }
            ;
            function w(G) {
                const P = y.indexOf(G.inputSource);
                if (P === -1)
                    return;
                const ee = _[P];
                ee !== void 0 && ee.dispatchEvent({
                    type: G.type,
                    data: G.inputSource
                })
            }
            function L() {
                i.removeEventListener("select", w),
                i.removeEventListener("selectstart", w),
                i.removeEventListener("selectend", w),
                i.removeEventListener("squeeze", w),
                i.removeEventListener("squeezestart", w),
                i.removeEventListener("squeezeend", w),
                i.removeEventListener("end", L),
                i.removeEventListener("inputsourceschange", F);
                for (let G = 0; G < _.length; G++) {
                    const P = y[G];
                    P !== null && (y[G] = null,
                    _[G].disconnect(P))
                }
                A = null,
                v = null,
                e.setRenderTarget(d),
                h = null,
                f = null,
                u = null,
                i = null,
                p = null,
                X.stop(),
                n.isPresenting = !1,
                n.dispatchEvent({
                    type: "sessionend"
                })
            }
            this.setFramebufferScaleFactor = function(G) {
                r = G,
                n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")
            }
            ,
            this.setReferenceSpaceType = function(G) {
                o = G,
                n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")
            }
            ,
            this.getReferenceSpace = function() {
                return c || a
            }
            ,
            this.setReferenceSpace = function(G) {
                c = G
            }
            ,
            this.getBaseLayer = function() {
                return f !== null ? f : h
            }
            ,
            this.getBinding = function() {
                return u
            }
            ,
            this.getFrame = function() {
                return m
            }
            ,
            this.getSession = function() {
                return i
            }
            ,
            this.setSession = async function(G) {
                if (i = G,
                i !== null) {
                    if (d = e.getRenderTarget(),
                    i.addEventListener("select", w),
                    i.addEventListener("selectstart", w),
                    i.addEventListener("selectend", w),
                    i.addEventListener("squeeze", w),
                    i.addEventListener("squeezestart", w),
                    i.addEventListener("squeezeend", w),
                    i.addEventListener("end", L),
                    i.addEventListener("inputsourceschange", F),
                    g.xrCompatible !== !0 && await t.makeXRCompatible(),
                    i.renderState.layers === void 0 || e.capabilities.isWebGL2 === !1) {
                        const P = {
                            antialias: i.renderState.layers === void 0 ? g.antialias : !0,
                            alpha: g.alpha,
                            depth: g.depth,
                            stencil: g.stencil,
                            framebufferScaleFactor: r
                        };
                        h = new XRWebGLLayer(i,t,P),
                        i.updateRenderState({
                            baseLayer: h
                        }),
                        p = new bi(h.framebufferWidth,h.framebufferHeight,{
                            format: qn,
                            type: qi,
                            encoding: e.outputEncoding
                        })
                    } else {
                        let P = null
                          , ee = null
                          , te = null;
                        g.depth && (te = g.stencil ? 35056 : 33190,
                        P = g.stencil ? kr : ji,
                        ee = g.stencil ? Ur : Yi);
                        const ie = {
                            colorFormat: 32856,
                            depthFormat: te,
                            scaleFactor: r
                        };
                        u = new XRWebGLBinding(i,t),
                        f = u.createProjectionLayer(ie),
                        i.updateRenderState({
                            layers: [f]
                        }),
                        p = new bi(f.textureWidth,f.textureHeight,{
                            format: qn,
                            type: qi,
                            depthTexture: new _x(f.textureWidth,f.textureHeight,ee,void 0,void 0,void 0,void 0,void 0,void 0,P),
                            stencilBuffer: g.stencil,
                            encoding: e.outputEncoding,
                            samples: g.antialias ? 4 : 0
                        });
                        const ce = e.properties.get(p);
                        ce.__ignoreDepthValues = f.ignoreDepthValues
                    }
                    p.isXRRenderTarget = !0,
                    this.setFoveation(1),
                    c = null,
                    a = await i.requestReferenceSpace(o),
                    X.setContext(i),
                    X.start(),
                    n.isPresenting = !0,
                    n.dispatchEvent({
                        type: "sessionstart"
                    })
                }
            }
            ;
            function F(G) {
                for (let P = 0; P < G.removed.length; P++) {
                    const ee = G.removed[P]
                      , te = y.indexOf(ee);
                    te >= 0 && (y[te] = null,
                    _[te].dispatchEvent({
                        type: "disconnected",
                        data: ee
                    }))
                }
                for (let P = 0; P < G.added.length; P++) {
                    const ee = G.added[P];
                    let te = y.indexOf(ee);
                    if (te === -1) {
                        for (let ce = 0; ce < _.length; ce++)
                            if (ce >= y.length) {
                                y.push(ee),
                                te = ce;
                                break
                            } else if (y[ce] === null) {
                                y[ce] = ee,
                                te = ce;
                                break
                            }
                        if (te === -1)
                            break
                    }
                    const ie = _[te];
                    ie && ie.dispatchEvent({
                        type: "connected",
                        data: ee
                    })
                }
            }
            const V = new B
              , K = new B;
            function R(G, P, ee) {
                V.setFromMatrixPosition(P.matrixWorld),
                K.setFromMatrixPosition(ee.matrixWorld);
                const te = V.distanceTo(K)
                  , ie = P.projectionMatrix.elements
                  , ce = ee.projectionMatrix.elements
                  , Me = ie[14] / (ie[10] - 1)
                  , H = ie[14] / (ie[10] + 1)
                  , Le = (ie[9] + 1) / ie[5]
                  , xe = (ie[9] - 1) / ie[5]
                  , Ce = (ie[8] - 1) / ie[0]
                  , oe = (ce[8] + 1) / ce[0]
                  , Ne = Me * Ce
                  , me = Me * oe
                  , _e = te / (-Ce + oe)
                  , qe = _e * -Ce;
                P.matrixWorld.decompose(G.position, G.quaternion, G.scale),
                G.translateX(qe),
                G.translateZ(_e),
                G.matrixWorld.compose(G.position, G.quaternion, G.scale),
                G.matrixWorldInverse.copy(G.matrixWorld).invert();
                const et = Me + _e
                  , Xe = H + _e
                  , Y = Ne - qe
                  , Qe = me + (te - qe)
                  , De = Le * H / Xe * et
                  , pt = xe * H / Xe * et;
                G.projectionMatrix.makePerspective(Y, Qe, De, pt, et, Xe)
            }
            function U(G, P) {
                P === null ? G.matrixWorld.copy(G.matrix) : G.matrixWorld.multiplyMatrices(P.matrixWorld, G.matrix),
                G.matrixWorldInverse.copy(G.matrixWorld).invert()
            }
            this.updateCamera = function(G) {
                if (i === null)
                    return;
                S.near = x.near = M.near = G.near,
                S.far = x.far = M.far = G.far,
                (A !== S.near || v !== S.far) && (i.updateRenderState({
                    depthNear: S.near,
                    depthFar: S.far
                }),
                A = S.near,
                v = S.far);
                const P = G.parent
                  , ee = S.cameras;
                U(S, P);
                for (let ie = 0; ie < ee.length; ie++)
                    U(ee[ie], P);
                S.matrixWorld.decompose(S.position, S.quaternion, S.scale),
                G.position.copy(S.position),
                G.quaternion.copy(S.quaternion),
                G.scale.copy(S.scale),
                G.matrix.copy(S.matrix),
                G.matrixWorld.copy(S.matrixWorld);
                const te = G.children;
                for (let ie = 0, ce = te.length; ie < ce; ie++)
                    te[ie].updateMatrixWorld(!0);
                ee.length === 2 ? R(S, M, x) : S.projectionMatrix.copy(M.projectionMatrix)
            }
            ,
            this.getCamera = function() {
                return S
            }
            ,
            this.getFoveation = function() {
                if (f !== null)
                    return f.fixedFoveation;
                if (h !== null)
                    return h.fixedFoveation
            }
            ,
            this.setFoveation = function(G) {
                f !== null && (f.fixedFoveation = G),
                h !== null && h.fixedFoveation !== void 0 && (h.fixedFoveation = G)
            }
            ;
            let z = null;
            function W(G, P) {
                if (l = P.getViewerPose(c || a),
                m = P,
                l !== null) {
                    const ee = l.views;
                    h !== null && (e.setRenderTargetFramebuffer(p, h.framebuffer),
                    e.setRenderTarget(p));
                    let te = !1;
                    ee.length !== S.cameras.length && (S.cameras.length = 0,
                    te = !0);
                    for (let ie = 0; ie < ee.length; ie++) {
                        const ce = ee[ie];
                        let Me = null;
                        if (h !== null)
                            Me = h.getViewport(ce);
                        else {
                            const Le = u.getViewSubImage(f, ce);
                            Me = Le.viewport,
                            ie === 0 && (e.setRenderTargetTextures(p, Le.colorTexture, f.ignoreDepthValues ? void 0 : Le.depthStencilTexture),
                            e.setRenderTarget(p))
                        }
                        let H = b[ie];
                        H === void 0 && (H = new xn,
                        H.layers.enable(ie),
                        H.viewport = new Mt,
                        b[ie] = H),
                        H.matrix.fromArray(ce.transform.matrix),
                        H.projectionMatrix.fromArray(ce.projectionMatrix),
                        H.viewport.set(Me.x, Me.y, Me.width, Me.height),
                        ie === 0 && S.matrix.copy(H.matrix),
                        te === !0 && S.cameras.push(H)
                    }
                }
                for (let ee = 0; ee < _.length; ee++) {
                    const te = y[ee]
                      , ie = _[ee];
                    te !== null && ie !== void 0 && ie.update(te, P, c || a)
                }
                z && z(G, P),
                m = null
            }
            const X = new Ju;
            X.setAnimationLoop(W),
            this.setAnimationLoop = function(G) {
                z = G
            }
            ,
            this.dispose = function() {}
        }
    }
    function vx(s, e) {
        function t(d, p) {
            d.fogColor.value.copy(p.color),
            p.isFog ? (d.fogNear.value = p.near,
            d.fogFar.value = p.far) : p.isFogExp2 && (d.fogDensity.value = p.density)
        }
        function n(d, p, _, y, M) {
            p.isMeshBasicMaterial || p.isMeshLambertMaterial ? i(d, p) : p.isMeshToonMaterial ? (i(d, p),
            u(d, p)) : p.isMeshPhongMaterial ? (i(d, p),
            l(d, p)) : p.isMeshStandardMaterial ? (i(d, p),
            f(d, p),
            p.isMeshPhysicalMaterial && h(d, p, M)) : p.isMeshMatcapMaterial ? (i(d, p),
            m(d, p)) : p.isMeshDepthMaterial ? i(d, p) : p.isMeshDistanceMaterial ? (i(d, p),
            g(d, p)) : p.isMeshNormalMaterial ? i(d, p) : p.isLineBasicMaterial ? (r(d, p),
            p.isLineDashedMaterial && a(d, p)) : p.isPointsMaterial ? o(d, p, _, y) : p.isSpriteMaterial ? c(d, p) : p.isShadowMaterial ? (d.color.value.copy(p.color),
            d.opacity.value = p.opacity) : p.isShaderMaterial && (p.uniformsNeedUpdate = !1)
        }
        function i(d, p) {
            d.opacity.value = p.opacity,
            p.color && d.diffuse.value.copy(p.color),
            p.emissive && d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),
            p.map && (d.map.value = p.map),
            p.alphaMap && (d.alphaMap.value = p.alphaMap),
            p.bumpMap && (d.bumpMap.value = p.bumpMap,
            d.bumpScale.value = p.bumpScale,
            p.side === Rn && (d.bumpScale.value *= -1)),
            p.displacementMap && (d.displacementMap.value = p.displacementMap,
            d.displacementScale.value = p.displacementScale,
            d.displacementBias.value = p.displacementBias),
            p.emissiveMap && (d.emissiveMap.value = p.emissiveMap),
            p.normalMap && (d.normalMap.value = p.normalMap,
            d.normalScale.value.copy(p.normalScale),
            p.side === Rn && d.normalScale.value.negate()),
            p.specularMap && (d.specularMap.value = p.specularMap),
            p.alphaTest > 0 && (d.alphaTest.value = p.alphaTest);
            const _ = e.get(p).envMap;
            if (_ && (d.envMap.value = _,
            d.flipEnvMap.value = _.isCubeTexture && _.isRenderTargetTexture === !1 ? -1 : 1,
            d.reflectivity.value = p.reflectivity,
            d.ior.value = p.ior,
            d.refractionRatio.value = p.refractionRatio),
            p.lightMap) {
                d.lightMap.value = p.lightMap;
                const x = s.physicallyCorrectLights !== !0 ? Math.PI : 1;
                d.lightMapIntensity.value = p.lightMapIntensity * x
            }
            p.aoMap && (d.aoMap.value = p.aoMap,
            d.aoMapIntensity.value = p.aoMapIntensity);
            let y;
            p.map ? y = p.map : p.specularMap ? y = p.specularMap : p.displacementMap ? y = p.displacementMap : p.normalMap ? y = p.normalMap : p.bumpMap ? y = p.bumpMap : p.roughnessMap ? y = p.roughnessMap : p.metalnessMap ? y = p.metalnessMap : p.alphaMap ? y = p.alphaMap : p.emissiveMap ? y = p.emissiveMap : p.clearcoatMap ? y = p.clearcoatMap : p.clearcoatNormalMap ? y = p.clearcoatNormalMap : p.clearcoatRoughnessMap ? y = p.clearcoatRoughnessMap : p.iridescenceMap ? y = p.iridescenceMap : p.iridescenceThicknessMap ? y = p.iridescenceThicknessMap : p.specularIntensityMap ? y = p.specularIntensityMap : p.specularColorMap ? y = p.specularColorMap : p.transmissionMap ? y = p.transmissionMap : p.thicknessMap ? y = p.thicknessMap : p.sheenColorMap ? y = p.sheenColorMap : p.sheenRoughnessMap && (y = p.sheenRoughnessMap),
            y !== void 0 && (y.isWebGLRenderTarget && (y = y.texture),
            y.matrixAutoUpdate === !0 && y.updateMatrix(),
            d.uvTransform.value.copy(y.matrix));
            let M;
            p.aoMap ? M = p.aoMap : p.lightMap && (M = p.lightMap),
            M !== void 0 && (M.isWebGLRenderTarget && (M = M.texture),
            M.matrixAutoUpdate === !0 && M.updateMatrix(),
            d.uv2Transform.value.copy(M.matrix))
        }
        function r(d, p) {
            d.diffuse.value.copy(p.color),
            d.opacity.value = p.opacity
        }
        function a(d, p) {
            d.dashSize.value = p.dashSize,
            d.totalSize.value = p.dashSize + p.gapSize,
            d.scale.value = p.scale
        }
        function o(d, p, _, y) {
            d.diffuse.value.copy(p.color),
            d.opacity.value = p.opacity,
            d.size.value = p.size * _,
            d.scale.value = y * .5,
            p.map && (d.map.value = p.map),
            p.alphaMap && (d.alphaMap.value = p.alphaMap),
            p.alphaTest > 0 && (d.alphaTest.value = p.alphaTest);
            let M;
            p.map ? M = p.map : p.alphaMap && (M = p.alphaMap),
            M !== void 0 && (M.matrixAutoUpdate === !0 && M.updateMatrix(),
            d.uvTransform.value.copy(M.matrix))
        }
        function c(d, p) {
            d.diffuse.value.copy(p.color),
            d.opacity.value = p.opacity,
            d.rotation.value = p.rotation,
            p.map && (d.map.value = p.map),
            p.alphaMap && (d.alphaMap.value = p.alphaMap),
            p.alphaTest > 0 && (d.alphaTest.value = p.alphaTest);
            let _;
            p.map ? _ = p.map : p.alphaMap && (_ = p.alphaMap),
            _ !== void 0 && (_.matrixAutoUpdate === !0 && _.updateMatrix(),
            d.uvTransform.value.copy(_.matrix))
        }
        function l(d, p) {
            d.specular.value.copy(p.specular),
            d.shininess.value = Math.max(p.shininess, 1e-4)
        }
        function u(d, p) {
            p.gradientMap && (d.gradientMap.value = p.gradientMap)
        }
        function f(d, p) {
            d.roughness.value = p.roughness,
            d.metalness.value = p.metalness,
            p.roughnessMap && (d.roughnessMap.value = p.roughnessMap),
            p.metalnessMap && (d.metalnessMap.value = p.metalnessMap),
            e.get(p).envMap && (d.envMapIntensity.value = p.envMapIntensity)
        }
        function h(d, p, _) {
            d.ior.value = p.ior,
            p.sheen > 0 && (d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),
            d.sheenRoughness.value = p.sheenRoughness,
            p.sheenColorMap && (d.sheenColorMap.value = p.sheenColorMap),
            p.sheenRoughnessMap && (d.sheenRoughnessMap.value = p.sheenRoughnessMap)),
            p.clearcoat > 0 && (d.clearcoat.value = p.clearcoat,
            d.clearcoatRoughness.value = p.clearcoatRoughness,
            p.clearcoatMap && (d.clearcoatMap.value = p.clearcoatMap),
            p.clearcoatRoughnessMap && (d.clearcoatRoughnessMap.value = p.clearcoatRoughnessMap),
            p.clearcoatNormalMap && (d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),
            d.clearcoatNormalMap.value = p.clearcoatNormalMap,
            p.side === Rn && d.clearcoatNormalScale.value.negate())),
            p.iridescence > 0 && (d.iridescence.value = p.iridescence,
            d.iridescenceIOR.value = p.iridescenceIOR,
            d.iridescenceThicknessMinimum.value = p.iridescenceThicknessRange[0],
            d.iridescenceThicknessMaximum.value = p.iridescenceThicknessRange[1],
            p.iridescenceMap && (d.iridescenceMap.value = p.iridescenceMap),
            p.iridescenceThicknessMap && (d.iridescenceThicknessMap.value = p.iridescenceThicknessMap)),
            p.transmission > 0 && (d.transmission.value = p.transmission,
            d.transmissionSamplerMap.value = _.texture,
            d.transmissionSamplerSize.value.set(_.width, _.height),
            p.transmissionMap && (d.transmissionMap.value = p.transmissionMap),
            d.thickness.value = p.thickness,
            p.thicknessMap && (d.thicknessMap.value = p.thicknessMap),
            d.attenuationDistance.value = p.attenuationDistance,
            d.attenuationColor.value.copy(p.attenuationColor)),
            d.specularIntensity.value = p.specularIntensity,
            d.specularColor.value.copy(p.specularColor),
            p.specularIntensityMap && (d.specularIntensityMap.value = p.specularIntensityMap),
            p.specularColorMap && (d.specularColorMap.value = p.specularColorMap)
        }
        function m(d, p) {
            p.matcap && (d.matcap.value = p.matcap)
        }
        function g(d, p) {
            d.referencePosition.value.copy(p.referencePosition),
            d.nearDistance.value = p.nearDistance,
            d.farDistance.value = p.farDistance
        }
        return {
            refreshFogUniforms: t,
            refreshMaterialUniforms: n
        }
    }
    function yx(s, e, t, n) {
        let i = {}
          , r = {}
          , a = [];
        const o = t.isWebGL2 ? s.getParameter(35375) : 0;
        function c(y, M) {
            const x = M.program;
            n.uniformBlockBinding(y, x)
        }
        function l(y, M) {
            let x = i[y.id];
            x === void 0 && (g(y),
            x = u(y),
            i[y.id] = x,
            y.addEventListener("dispose", p));
            const b = M.program;
            n.updateUBOMapping(y, b);
            const S = e.render.frame;
            r[y.id] !== S && (h(y),
            r[y.id] = S)
        }
        function u(y) {
            const M = f();
            y.__bindingPointIndex = M;
            const x = s.createBuffer()
              , b = y.__size
              , S = y.usage;
            return s.bindBuffer(35345, x),
            s.bufferData(35345, b, S),
            s.bindBuffer(35345, null),
            s.bindBufferBase(35345, M, x),
            x
        }
        function f() {
            for (let y = 0; y < o; y++)
                if (a.indexOf(y) === -1)
                    return a.push(y),
                    y;
            return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),
            0
        }
        function h(y) {
            const M = i[y.id]
              , x = y.uniforms
              , b = y.__cache;
            s.bindBuffer(35345, M);
            for (let S = 0, A = x.length; S < A; S++) {
                const v = x[S];
                if (m(v, S, b) === !0) {
                    const w = v.value
                      , L = v.__offset;
                    typeof w == "number" ? (v.__data[0] = w,
                    s.bufferSubData(35345, L, v.__data)) : (v.value.isMatrix3 ? (v.__data[0] = v.value.elements[0],
                    v.__data[1] = v.value.elements[1],
                    v.__data[2] = v.value.elements[2],
                    v.__data[3] = v.value.elements[0],
                    v.__data[4] = v.value.elements[3],
                    v.__data[5] = v.value.elements[4],
                    v.__data[6] = v.value.elements[5],
                    v.__data[7] = v.value.elements[0],
                    v.__data[8] = v.value.elements[6],
                    v.__data[9] = v.value.elements[7],
                    v.__data[10] = v.value.elements[8],
                    v.__data[11] = v.value.elements[0]) : w.toArray(v.__data),
                    s.bufferSubData(35345, L, v.__data))
                }
            }
            s.bindBuffer(35345, null)
        }
        function m(y, M, x) {
            const b = y.value;
            if (x[M] === void 0)
                return typeof b == "number" ? x[M] = b : x[M] = b.clone(),
                !0;
            if (typeof b == "number") {
                if (x[M] !== b)
                    return x[M] = b,
                    !0
            } else {
                const S = x[M];
                if (S.equals(b) === !1)
                    return S.copy(b),
                    !0
            }
            return !1
        }
        function g(y) {
            const M = y.uniforms;
            let x = 0;
            const b = 16;
            let S = 0;
            for (let A = 0, v = M.length; A < v; A++) {
                const w = M[A]
                  , L = d(w);
                if (w.__data = new Float32Array(L.storage / Float32Array.BYTES_PER_ELEMENT),
                w.__offset = x,
                A > 0) {
                    S = x % b;
                    const F = b - S;
                    S !== 0 && F - L.boundary < 0 && (x += b - S,
                    w.__offset = x)
                }
                x += L.storage
            }
            return S = x % b,
            S > 0 && (x += b - S),
            y.__size = x,
            y.__cache = {},
            this
        }
        function d(y) {
            const M = y.value
              , x = {
                boundary: 0,
                storage: 0
            };
            return typeof M == "number" ? (x.boundary = 4,
            x.storage = 4) : M.isVector2 ? (x.boundary = 8,
            x.storage = 8) : M.isVector3 || M.isColor ? (x.boundary = 16,
            x.storage = 12) : M.isVector4 ? (x.boundary = 16,
            x.storage = 16) : M.isMatrix3 ? (x.boundary = 48,
            x.storage = 48) : M.isMatrix4 ? (x.boundary = 64,
            x.storage = 64) : M.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", M),
            x
        }
        function p(y) {
            const M = y.target;
            M.removeEventListener("dispose", p);
            const x = a.indexOf(M.__bindingPointIndex);
            a.splice(x, 1),
            s.deleteBuffer(i[M.id]),
            delete i[M.id],
            delete r[M.id]
        }
        function _() {
            for (const y in i)
                s.deleteBuffer(i[y]);
            a = [],
            i = {},
            r = {}
        }
        return {
            bind: c,
            update: l,
            dispose: _
        }
    }
    function bx() {
        const s = Ds("canvas");
        return s.style.display = "block",
        s
    }
    function Cf(s={}) {
        this.isWebGLRenderer = !0;
        const e = s.canvas !== void 0 ? s.canvas : bx()
          , t = s.context !== void 0 ? s.context : null
          , n = s.depth !== void 0 ? s.depth : !0
          , i = s.stencil !== void 0 ? s.stencil : !0
          , r = s.antialias !== void 0 ? s.antialias : !1
          , a = s.premultipliedAlpha !== void 0 ? s.premultipliedAlpha : !0
          , o = s.preserveDrawingBuffer !== void 0 ? s.preserveDrawingBuffer : !1
          , c = s.powerPreference !== void 0 ? s.powerPreference : "default"
          , l = s.failIfMajorPerformanceCaveat !== void 0 ? s.failIfMajorPerformanceCaveat : !1;
        let u;
        t !== null ? u = t.getContextAttributes().alpha : u = s.alpha !== void 0 ? s.alpha : !1;
        let f = null
          , h = null;
        const m = []
          , g = [];
        this.domElement = e,
        this.debug = {
            checkShaderErrors: !0
        },
        this.autoClear = !0,
        this.autoClearColor = !0,
        this.autoClearDepth = !0,
        this.autoClearStencil = !0,
        this.sortObjects = !0,
        this.clippingPlanes = [],
        this.localClippingEnabled = !1,
        this.outputEncoding = Zi,
        this.physicallyCorrectLights = !1,
        this.toneMapping = ti,
        this.toneMappingExposure = 1,
        Object.defineProperties(this, {
            gammaFactor: {
                get: function() {
                    return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),
                    2
                },
                set: function() {
                    console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")
                }
            }
        });
        const d = this;
        let p = !1
          , _ = 0
          , y = 0
          , M = null
          , x = -1
          , b = null;
        const S = new Mt
          , A = new Mt;
        let v = null
          , w = e.width
          , L = e.height
          , F = 1
          , V = null
          , K = null;
        const R = new Mt(0,0,w,L)
          , U = new Mt(0,0,w,L);
        let z = !1;
        const W = new Ku;
        let X = !1
          , G = !1
          , P = null;
        const ee = new Dt
          , te = new ke
          , ie = new B
          , ce = {
            background: null,
            fog: null,
            environment: null,
            overrideMaterial: null,
            isScene: !0
        };
        function Me() {
            return M === null ? F : 1
        }
        let H = t;
        function Le(E, O) {
            for (let k = 0; k < E.length; k++) {
                const N = E[k]
                  , Z = e.getContext(N, O);
                if (Z !== null)
                    return Z
            }
            return null
        }
        try {
            const E = {
                alpha: !0,
                depth: n,
                stencil: i,
                antialias: r,
                premultipliedAlpha: a,
                preserveDrawingBuffer: o,
                powerPreference: c,
                failIfMajorPerformanceCaveat: l
            };
            if ("setAttribute"in e && e.setAttribute("data-engine", `three.js r ${$t}`),
            e.addEventListener("webglcontextlost", we, !1),
            e.addEventListener("webglcontextrestored", Ue, !1),
            e.addEventListener("webglcontextcreationerror", Te, !1),
            H === null) {
                const O = ["webgl2", "webgl", "experimental-webgl"];
                if (d.isWebGL1Renderer === !0 && O.shift(),
                H = Le(O, E),
                H === null)
                    throw Le(O) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.")
            }
            H.getShaderPrecisionFormat === void 0 && (H.getShaderPrecisionFormat = function() {
                return {
                    rangeMin: 1,
                    rangeMax: 1,
                    precision: 1
                }
            }
            )
        } catch (E) {
            throw console.error("THREE.WebGLRenderer: " + E.message),
            E
        }
        let xe, Ce, oe, Ne, me, _e, qe, et, Xe, Y, Qe, De, pt, ft, D, T, j, re, ne, le, be, C, Q, se;
        function he() {
            xe = new L_(H),
            Ce = new T_(H,xe,s),
            xe.init(Ce),
            C = new px(H,xe,Ce),
            oe = new hx(H,xe,Ce),
            Ne = new F_,
            me = new J0,
            _e = new dx(H,xe,oe,me,Ce,C,Ne),
            qe = new C_(d),
            et = new D_(d),
            Xe = new wm(H,Ce),
            Q = new S_(H,xe,Xe,Ce),
            Y = new R_(H,Xe,Ne,Q),
            Qe = new U_(H,Y,Xe,Ne),
            ne = new N_(H,Ce,_e),
            T = new E_(me),
            De = new K0(d,qe,et,xe,Ce,Q,T),
            pt = new vx(d,me),
            ft = new ex,
            D = new ox(xe,Ce),
            re = new M_(d,qe,oe,Qe,u,a),
            j = new fx(d,Qe,Ce),
            se = new yx(H,Ne,Ce,oe),
            le = new w_(H,xe,Ne,Ce),
            be = new I_(H,xe,Ne,Ce),
            Ne.programs = De.programs,
            d.capabilities = Ce,
            d.extensions = xe,
            d.properties = me,
            d.renderLists = ft,
            d.shadowMap = j,
            d.state = oe,
            d.info = Ne
        }
        he();
        const ue = new xx(d,H);
        this.xr = ue,
        this.getContext = function() {
            return H
        }
        ,
        this.getContextAttributes = function() {
            return H.getContextAttributes()
        }
        ,
        this.forceContextLoss = function() {
            const E = xe.get("WEBGL_lose_context");
            E && E.loseContext()
        }
        ,
        this.forceContextRestore = function() {
            const E = xe.get("WEBGL_lose_context");
            E && E.restoreContext()
        }
        ,
        this.getPixelRatio = function() {
            return F
        }
        ,
        this.setPixelRatio = function(E) {
            E !== void 0 && (F = E,
            this.setSize(w, L, !1))
        }
        ,
        this.getSize = function(E) {
            return E.set(w, L)
        }
        ,
        this.setSize = function(E, O, k) {
            if (ue.isPresenting) {
                console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
                return
            }
            w = E,
            L = O,
            e.width = Math.floor(E * F),
            e.height = Math.floor(O * F),
            k !== !1 && (e.style.width = E + "px",
            e.style.height = O + "px"),
            this.setViewport(0, 0, E, O)
        }
        ,
        this.getDrawingBufferSize = function(E) {
            return E.set(w * F, L * F).floor()
        }
        ,
        this.setDrawingBufferSize = function(E, O, k) {
            w = E,
            L = O,
            F = k,
            e.width = Math.floor(E * k),
            e.height = Math.floor(O * k),
            this.setViewport(0, 0, E, O)
        }
        ,
        this.getCurrentViewport = function(E) {
            return E.copy(S)
        }
        ,
        this.getViewport = function(E) {
            return E.copy(R)
        }
        ,
        this.setViewport = function(E, O, k, N) {
            E.isVector4 ? R.set(E.x, E.y, E.z, E.w) : R.set(E, O, k, N),
            oe.viewport(S.copy(R).multiplyScalar(F).floor())
        }
        ,
        this.getScissor = function(E) {
            return E.copy(U)
        }
        ,
        this.setScissor = function(E, O, k, N) {
            E.isVector4 ? U.set(E.x, E.y, E.z, E.w) : U.set(E, O, k, N),
            oe.scissor(A.copy(U).multiplyScalar(F).floor())
        }
        ,
        this.getScissorTest = function() {
            return z
        }
        ,
        this.setScissorTest = function(E) {
            oe.setScissorTest(z = E)
        }
        ,
        this.setOpaqueSort = function(E) {
            V = E
        }
        ,
        this.setTransparentSort = function(E) {
            K = E
        }
        ,
        this.getClearColor = function(E) {
            return E.copy(re.getClearColor())
        }
        ,
        this.setClearColor = function() {
            re.setClearColor.apply(re, arguments)
        }
        ,
        this.getClearAlpha = function() {
            return re.getClearAlpha()
        }
        ,
        this.setClearAlpha = function() {
            re.setClearAlpha.apply(re, arguments)
        }
        ,
        this.clear = function(E=!0, O=!0, k=!0) {
            let N = 0;
            E && (N |= 16384),
            O && (N |= 256),
            k && (N |= 1024),
            H.clear(N)
        }
        ,
        this.clearColor = function() {
            this.clear(!0, !1, !1)
        }
        ,
        this.clearDepth = function() {
            this.clear(!1, !0, !1)
        }
        ,
        this.clearStencil = function() {
            this.clear(!1, !1, !0)
        }
        ,
        this.dispose = function() {
            e.removeEventListener("webglcontextlost", we, !1),
            e.removeEventListener("webglcontextrestored", Ue, !1),
            e.removeEventListener("webglcontextcreationerror", Te, !1),
            ft.dispose(),
            D.dispose(),
            me.dispose(),
            qe.dispose(),
            et.dispose(),
            Qe.dispose(),
            Q.dispose(),
            se.dispose(),
            De.dispose(),
            ue.dispose(),
            ue.removeEventListener("sessionstart", Be),
            ue.removeEventListener("sessionend", st),
            P && (P.dispose(),
            P = null),
            Ze.stop()
        }
        ;
        function we(E) {
            E.preventDefault(),
            console.log("THREE.WebGLRenderer: Context Lost."),
            p = !0
        }
        function Ue() {
            console.log("THREE.WebGLRenderer: Context Restored."),
            p = !1;
            const E = Ne.autoReset
              , O = j.enabled
              , k = j.autoUpdate
              , N = j.needsUpdate
              , Z = j.type;
            he(),
            Ne.autoReset = E,
            j.enabled = O,
            j.autoUpdate = k,
            j.needsUpdate = N,
            j.type = Z
        }
        function Te(E) {
            console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", E.statusMessage)
        }
        function I(E) {
            const O = E.target;
            O.removeEventListener("dispose", I),
            ae(O)
        }
        function ae(E) {
            q(E),
            me.remove(E)
        }
        function q(E) {
            const O = me.get(E).programs;
            O !== void 0 && (O.forEach(function(k) {
                De.releaseProgram(k)
            }),
            E.isShaderMaterial && De.releaseShaderCache(E))
        }
        this.renderBufferDirect = function(E, O, k, N, Z, ge) {
            O === null && (O = ce);
            const ye = Z.isMesh && Z.matrixWorld.determinant() < 0
              , Se = bt(E, O, k, N, Z);
            oe.setMaterial(N, ye);
            let Fe = k.index;
            const Ve = k.attributes.position;
            if (Fe === null) {
                if (Ve === void 0 || Ve.count === 0)
                    return
            } else if (Fe.count === 0)
                return;
            let Ae = 1;
            N.wireframe === !0 && (Fe = Y.getWireframeAttribute(k),
            Ae = 2),
            Q.setup(Z, N, Se, k, Fe);
            let Pe, $e = le;
            Fe !== null && (Pe = Xe.get(Fe),
            $e = be,
            $e.setIndex(Pe));
            const Xn = Fe !== null ? Fe.count : Ve.count
              , vi = k.drawRange.start * Ae
              , An = k.drawRange.count * Ae
              , Pn = ge !== null ? ge.start * Ae : 0
              , Je = ge !== null ? ge.count * Ae : 1 / 0
              , Ts = Math.max(vi, Pn)
              , xt = Math.min(Xn, vi + An, Pn + Je) - 1
              , Dn = Math.max(0, xt - Ts + 1);
            if (Dn !== 0) {
                if (Z.isMesh)
                    N.wireframe === !0 ? (oe.setLineWidth(N.wireframeLinewidth * Me()),
                    $e.setMode(1)) : $e.setMode(4);
                else if (Z.isLine) {
                    let Xi = N.linewidth;
                    Xi === void 0 && (Xi = 1),
                    oe.setLineWidth(Xi * Me()),
                    Z.isLineSegments ? $e.setMode(1) : Z.isLineLoop ? $e.setMode(2) : $e.setMode(3)
                } else
                    Z.isPoints ? $e.setMode(0) : Z.isSprite && $e.setMode(4);
                if (Z.isInstancedMesh)
                    $e.renderInstances(Ts, Dn, Z.count);
                else if (k.isInstancedBufferGeometry) {
                    const Xi = Math.min(k.instanceCount, k._maxInstanceCount);
                    $e.renderInstances(Ts, Dn, Xi)
                } else
                    $e.render(Ts, Dn)
            }
        }
        ,
        this.compile = function(E, O) {
            h = D.get(E),
            h.init(),
            g.push(h),
            E.traverseVisible(function(k) {
                k.isLight && k.layers.test(O.layers) && (h.pushLight(k),
                k.castShadow && h.pushShadow(k))
            }),
            h.setupLights(d.physicallyCorrectLights),
            E.traverse(function(k) {
                const N = k.material;
                if (N)
                    if (Array.isArray(N))
                        for (let Z = 0; Z < N.length; Z++) {
                            const ge = N[Z];
                            Ee(ge, E, k)
                        }
                    else
                        Ee(N, E, k)
            }),
            g.pop(),
            h = null
        }
        ;
        let de = null;
        function fe(E) {
            de && de(E)
        }
        function Be() {
            Ze.stop()
        }
        function st() {
            Ze.start()
        }
        const Ze = new Ju;
        Ze.setAnimationLoop(fe),
        typeof self != "undefined" && Ze.setContext(self),
        this.setAnimationLoop = function(E) {
            de = E,
            ue.setAnimationLoop(E),
            E === null ? Ze.stop() : Ze.start()
        }
        ,
        ue.addEventListener("sessionstart", Be),
        ue.addEventListener("sessionend", st),
        this.render = function(E, O) {
            if (O !== void 0 && O.isCamera !== !0) {
                console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
                return
            }
            if (p === !0)
                return;
            E.autoUpdate === !0 && E.updateMatrixWorld(),
            O.parent === null && O.updateMatrixWorld(),
            ue.enabled === !0 && ue.isPresenting === !0 && (ue.cameraAutoUpdate === !0 && ue.updateCamera(O),
            O = ue.getCamera()),
            E.isScene === !0 && E.onBeforeRender(d, E, O, M),
            h = D.get(E, g.length),
            h.init(),
            g.push(h),
            ee.multiplyMatrices(O.projectionMatrix, O.matrixWorldInverse),
            W.setFromProjectionMatrix(ee),
            G = this.localClippingEnabled,
            X = T.init(this.clippingPlanes, G, O),
            f = ft.get(E, m.length),
            f.init(),
            m.push(f),
            sn(E, O, 0, d.sortObjects),
            f.finish(),
            d.sortObjects === !0 && f.sort(V, K),
            X === !0 && T.beginShadows();
            const k = h.state.shadowsArray;
            if (j.render(k, E, O),
            X === !0 && T.endShadows(),
            this.info.autoReset === !0 && this.info.reset(),
            re.render(f, E),
            h.setupLights(d.physicallyCorrectLights),
            O.isArrayCamera) {
                const N = O.cameras;
                for (let Z = 0, ge = N.length; Z < ge; Z++) {
                    const ye = N[Z];
                    tt(f, E, ye, ye.viewport)
                }
            } else
                tt(f, E, O);
            M !== null && (_e.updateMultisampleRenderTarget(M),
            _e.updateRenderTargetMipmap(M)),
            E.isScene === !0 && E.onAfterRender(d, E, O),
            Q.resetDefaultState(),
            x = -1,
            b = null,
            g.pop(),
            g.length > 0 ? h = g[g.length - 1] : h = null,
            m.pop(),
            m.length > 0 ? f = m[m.length - 1] : f = null
        }
        ;
        function sn(E, O, k, N) {
            if (E.visible === !1)
                return;
            if (E.layers.test(O.layers)) {
                if (E.isGroup)
                    k = E.renderOrder;
                else if (E.isLOD)
                    E.autoUpdate === !0 && E.update(O);
                else if (E.isLight)
                    h.pushLight(E),
                    E.castShadow && h.pushShadow(E);
                else if (E.isSprite) {
                    if (!E.frustumCulled || W.intersectsSprite(E)) {
                        N && ie.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ee);
                        const ye = Qe.update(E)
                          , Se = E.material;
                        Se.visible && f.push(E, ye, Se, k, ie.z, null)
                    }
                } else if ((E.isMesh || E.isLine || E.isPoints) && (E.isSkinnedMesh && E.skeleton.frame !== Ne.render.frame && (E.skeleton.update(),
                E.skeleton.frame = Ne.render.frame),
                !E.frustumCulled || W.intersectsObject(E))) {
                    N && ie.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ee);
                    const ye = Qe.update(E)
                      , Se = E.material;
                    if (Array.isArray(Se)) {
                        const Fe = ye.groups;
                        for (let Ve = 0, Ae = Fe.length; Ve < Ae; Ve++) {
                            const Pe = Fe[Ve]
                              , $e = Se[Pe.materialIndex];
                            $e && $e.visible && f.push(E, ye, $e, k, ie.z, Pe)
                        }
                    } else
                        Se.visible && f.push(E, ye, Se, k, ie.z, null)
                }
            }
            const ge = E.children;
            for (let ye = 0, Se = ge.length; ye < Se; ye++)
                sn(ge[ye], O, k, N)
        }
        function tt(E, O, k, N) {
            const Z = E.opaque
              , ge = E.transmissive
              , ye = E.transparent;
            h.setupLightsView(k),
            ge.length > 0 && ze(Z, O, k),
            N && oe.viewport(S.copy(N)),
            Z.length > 0 && J(Z, O, k),
            ge.length > 0 && J(ge, O, k),
            ye.length > 0 && J(ye, O, k),
            oe.buffers.depth.setTest(!0),
            oe.buffers.depth.setMask(!0),
            oe.buffers.color.setMask(!0),
            oe.setPolygonOffset(!1)
        }
        function ze(E, O, k) {
            const N = Ce.isWebGL2;
            P === null && (P = new bi(1,1,{
                generateMipmaps: !0,
                type: xe.has("EXT_color_buffer_half_float") ? As : qi,
                minFilter: Mo,
                samples: N && r === !0 ? 4 : 0
            })),
            d.getDrawingBufferSize(te),
            N ? P.setSize(te.x, te.y) : P.setSize(Ja(te.x), Ja(te.y));
            const Z = d.getRenderTarget();
            d.setRenderTarget(P),
            d.clear();
            const ge = d.toneMapping;
            d.toneMapping = ti,
            J(E, O, k),
            d.toneMapping = ge,
            _e.updateMultisampleRenderTarget(P),
            _e.updateRenderTargetMipmap(P),
            d.setRenderTarget(Z)
        }
        function J(E, O, k) {
            const N = O.isScene === !0 ? O.overrideMaterial : null;
            for (let Z = 0, ge = E.length; Z < ge; Z++) {
                const ye = E[Z]
                  , Se = ye.object
                  , Fe = ye.geometry
                  , Ve = N === null ? ye.material : N
                  , Ae = ye.group;
                Se.layers.test(k.layers) && ve(Se, O, k, Fe, Ve, Ae)
            }
        }
        function ve(E, O, k, N, Z, ge) {
            E.onBeforeRender(d, O, k, N, Z, ge),
            E.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse, E.matrixWorld),
            E.normalMatrix.getNormalMatrix(E.modelViewMatrix),
            Z.onBeforeRender(d, O, k, N, E, ge),
            Z.transparent === !0 && Z.side === Ir ? (Z.side = Rn,
            Z.needsUpdate = !0,
            d.renderBufferDirect(k, O, N, Z, E, ge),
            Z.side = Cs,
            Z.needsUpdate = !0,
            d.renderBufferDirect(k, O, N, Z, E, ge),
            Z.side = Ir) : d.renderBufferDirect(k, O, N, Z, E, ge),
            E.onAfterRender(d, O, k, N, Z, ge)
        }
        function Ee(E, O, k) {
            O.isScene !== !0 && (O = ce);
            const N = me.get(E)
              , Z = h.state.lights
              , ge = h.state.shadowsArray
              , ye = Z.state.version
              , Se = De.getParameters(E, Z.state, ge, O, k)
              , Fe = De.getProgramCacheKey(Se);
            let Ve = N.programs;
            N.environment = E.isMeshStandardMaterial ? O.environment : null,
            N.fog = O.fog,
            N.envMap = (E.isMeshStandardMaterial ? et : qe).get(E.envMap || N.environment),
            Ve === void 0 && (E.addEventListener("dispose", I),
            Ve = new Map,
            N.programs = Ve);
            let Ae = Ve.get(Fe);
            if (Ae !== void 0) {
                if (N.currentProgram === Ae && N.lightsStateVersion === ye)
                    return Re(E, Se),
                    Ae
            } else
                Se.uniforms = De.getUniforms(E),
                E.onBuild(k, Se, d),
                E.onBeforeCompile(Se, d),
                Ae = De.acquireProgram(Se, Fe),
                Ve.set(Fe, Ae),
                N.uniforms = Se.uniforms;
            const Pe = N.uniforms;
            (!E.isShaderMaterial && !E.isRawShaderMaterial || E.clipping === !0) && (Pe.clippingPlanes = T.uniform),
            Re(E, Se),
            N.needsLights = ht(E),
            N.lightsStateVersion = ye,
            N.needsLights && (Pe.ambientLightColor.value = Z.state.ambient,
            Pe.lightProbe.value = Z.state.probe,
            Pe.directionalLights.value = Z.state.directional,
            Pe.directionalLightShadows.value = Z.state.directionalShadow,
            Pe.spotLights.value = Z.state.spot,
            Pe.spotLightShadows.value = Z.state.spotShadow,
            Pe.rectAreaLights.value = Z.state.rectArea,
            Pe.ltc_1.value = Z.state.rectAreaLTC1,
            Pe.ltc_2.value = Z.state.rectAreaLTC2,
            Pe.pointLights.value = Z.state.point,
            Pe.pointLightShadows.value = Z.state.pointShadow,
            Pe.hemisphereLights.value = Z.state.hemi,
            Pe.directionalShadowMap.value = Z.state.directionalShadowMap,
            Pe.directionalShadowMatrix.value = Z.state.directionalShadowMatrix,
            Pe.spotShadowMap.value = Z.state.spotShadowMap,
            Pe.spotShadowMatrix.value = Z.state.spotShadowMatrix,
            Pe.pointShadowMap.value = Z.state.pointShadowMap,
            Pe.pointShadowMatrix.value = Z.state.pointShadowMatrix);
            const $e = Ae.getUniforms()
              , Xn = qo.seqWithValue($e.seq, Pe);
            return N.currentProgram = Ae,
            N.uniformsList = Xn,
            Ae
        }
        function Re(E, O) {
            const k = me.get(E);
            k.outputEncoding = O.outputEncoding,
            k.instancing = O.instancing,
            k.skinning = O.skinning,
            k.morphTargets = O.morphTargets,
            k.morphNormals = O.morphNormals,
            k.morphColors = O.morphColors,
            k.morphTargetsCount = O.morphTargetsCount,
            k.numClippingPlanes = O.numClippingPlanes,
            k.numIntersection = O.numClipIntersection,
            k.vertexAlphas = O.vertexAlphas,
            k.vertexTangents = O.vertexTangents,
            k.toneMapping = O.toneMapping
        }
        function bt(E, O, k, N, Z) {
            O.isScene !== !0 && (O = ce),
            _e.resetTextureUnits();
            const ge = O.fog
              , ye = N.isMeshStandardMaterial ? O.environment : null
              , Se = M === null ? d.outputEncoding : M.isXRRenderTarget === !0 ? M.texture.encoding : Zi
              , Fe = (N.isMeshStandardMaterial ? et : qe).get(N.envMap || ye)
              , Ve = N.vertexColors === !0 && !!k.attributes.color && k.attributes.color.itemSize === 4
              , Ae = !!N.normalMap && !!k.attributes.tangent
              , Pe = !!k.morphAttributes.position
              , $e = !!k.morphAttributes.normal
              , Xn = !!k.morphAttributes.color
              , vi = N.toneMapped ? d.toneMapping : ti
              , An = k.morphAttributes.position || k.morphAttributes.normal || k.morphAttributes.color
              , Pn = An !== void 0 ? An.length : 0
              , Je = me.get(N)
              , Ts = h.state.lights;
            if (X === !0 && (G === !0 || E !== b)) {
                const pn = E === b && N.id === x;
                T.setState(N, E, pn)
            }
            let xt = !1;
            N.version === Je.__version ? (Je.needsLights && Je.lightsStateVersion !== Ts.state.version || Je.outputEncoding !== Se || Z.isInstancedMesh && Je.instancing === !1 || !Z.isInstancedMesh && Je.instancing === !0 || Z.isSkinnedMesh && Je.skinning === !1 || !Z.isSkinnedMesh && Je.skinning === !0 || Je.envMap !== Fe || N.fog === !0 && Je.fog !== ge || Je.numClippingPlanes !== void 0 && (Je.numClippingPlanes !== T.numPlanes || Je.numIntersection !== T.numIntersection) || Je.vertexAlphas !== Ve || Je.vertexTangents !== Ae || Je.morphTargets !== Pe || Je.morphNormals !== $e || Je.morphColors !== Xn || Je.toneMapping !== vi || Ce.isWebGL2 === !0 && Je.morphTargetsCount !== Pn) && (xt = !0) : (xt = !0,
            Je.__version = N.version);
            let Dn = Je.currentProgram;
            xt === !0 && (Dn = Ee(N, O, Z));
            let Xi = !1
              , vo = !1
              , kc = !1;
            const Yt = Dn.getUniforms()
              , yo = Je.uniforms;
            if (oe.useProgram(Dn.program) && (Xi = !0,
            vo = !0,
            kc = !0),
            N.id !== x && (x = N.id,
            vo = !0),
            Xi || b !== E) {
                if (Yt.setValue(H, "projectionMatrix", E.projectionMatrix),
                Ce.logarithmicDepthBuffer && Yt.setValue(H, "logDepthBufFC", 2 / (Math.log(E.far + 1) / Math.LN2)),
                b !== E && (b = E,
                vo = !0,
                kc = !0),
                N.isShaderMaterial || N.isMeshPhongMaterial || N.isMeshToonMaterial || N.isMeshStandardMaterial || N.envMap) {
                    const pn = Yt.map.cameraPosition;
                    pn !== void 0 && pn.setValue(H, ie.setFromMatrixPosition(E.matrixWorld))
                }
                (N.isMeshPhongMaterial || N.isMeshToonMaterial || N.isMeshLambertMaterial || N.isMeshBasicMaterial || N.isMeshStandardMaterial || N.isShaderMaterial) && Yt.setValue(H, "isOrthographic", E.isOrthographicCamera === !0),
                (N.isMeshPhongMaterial || N.isMeshToonMaterial || N.isMeshLambertMaterial || N.isMeshBasicMaterial || N.isMeshStandardMaterial || N.isShaderMaterial || N.isShadowMaterial || Z.isSkinnedMesh) && Yt.setValue(H, "viewMatrix", E.matrixWorldInverse)
            }
            if (Z.isSkinnedMesh) {
                Yt.setOptional(H, Z, "bindMatrix"),
                Yt.setOptional(H, Z, "bindMatrixInverse");
                const pn = Z.skeleton;
                pn && (Ce.floatVertexTextures ? (pn.boneTexture === null && pn.computeBoneTexture(),
                Yt.setValue(H, "boneTexture", pn.boneTexture, _e),
                Yt.setValue(H, "boneTextureSize", pn.boneTextureSize)) : console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))
            }
            const Bc = k.morphAttributes;
            if ((Bc.position !== void 0 || Bc.normal !== void 0 || Bc.color !== void 0 && Ce.isWebGL2 === !0) && ne.update(Z, k, N, Dn),
            (vo || Je.receiveShadow !== Z.receiveShadow) && (Je.receiveShadow = Z.receiveShadow,
            Yt.setValue(H, "receiveShadow", Z.receiveShadow)),
            vo && (Yt.setValue(H, "toneMappingExposure", d.toneMappingExposure),
            Je.needsLights && Oe(yo, kc),
            ge && N.fog === !0 && pt.refreshFogUniforms(yo, ge),
            pt.refreshMaterialUniforms(yo, N, F, L, P),
            qo.upload(H, Je.uniformsList, yo, _e)),
            N.isShaderMaterial && N.uniformsNeedUpdate === !0 && (qo.upload(H, Je.uniformsList, yo, _e),
            N.uniformsNeedUpdate = !1),
            N.isSpriteMaterial && Yt.setValue(H, "center", Z.center),
            Yt.setValue(H, "modelViewMatrix", Z.modelViewMatrix),
            Yt.setValue(H, "normalMatrix", Z.normalMatrix),
            Yt.setValue(H, "modelMatrix", Z.matrixWorld),
            N.isShaderMaterial || N.isRawShaderMaterial) {
                const pn = N.uniformsGroups;
                for (let Gc = 0, a1 = pn.length; Gc < a1; Gc++)
                    if (Ce.isWebGL2) {
                        const rp = pn[Gc];
                        se.update(rp, Dn),
                        se.bind(rp, Dn)
                    } else
                        console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")
            }
            return Dn
        }
        function Oe(E, O) {
            E.ambientLightColor.needsUpdate = O,
            E.lightProbe.needsUpdate = O,
            E.directionalLights.needsUpdate = O,
            E.directionalLightShadows.needsUpdate = O,
            E.pointLights.needsUpdate = O,
            E.pointLightShadows.needsUpdate = O,
            E.spotLights.needsUpdate = O,
            E.spotLightShadows.needsUpdate = O,
            E.rectAreaLights.needsUpdate = O,
            E.hemisphereLights.needsUpdate = O
        }
        function ht(E) {
            return E.isMeshLambertMaterial || E.isMeshToonMaterial || E.isMeshPhongMaterial || E.isMeshStandardMaterial || E.isShadowMaterial || E.isShaderMaterial && E.lights === !0
        }
        this.getActiveCubeFace = function() {
            return _
        }
        ,
        this.getActiveMipmapLevel = function() {
            return y
        }
        ,
        this.getRenderTarget = function() {
            return M
        }
        ,
        this.setRenderTargetTextures = function(E, O, k) {
            me.get(E.texture).__webglTexture = O,
            me.get(E.depthTexture).__webglTexture = k;
            const N = me.get(E);
            N.__hasExternalTextures = !0,
            N.__hasExternalTextures && (N.__autoAllocateDepthBuffer = k === void 0,
            N.__autoAllocateDepthBuffer || xe.has("WEBGL_multisampled_render_to_texture") === !0 && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),
            N.__useRenderToTexture = !1))
        }
        ,
        this.setRenderTargetFramebuffer = function(E, O) {
            const k = me.get(E);
            k.__webglFramebuffer = O,
            k.__useDefaultFramebuffer = O === void 0
        }
        ,
        this.setRenderTarget = function(E, O=0, k=0) {
            M = E,
            _ = O,
            y = k;
            let N = !0;
            if (E) {
                const Fe = me.get(E);
                Fe.__useDefaultFramebuffer !== void 0 ? (oe.bindFramebuffer(36160, null),
                N = !1) : Fe.__webglFramebuffer === void 0 ? _e.setupRenderTarget(E) : Fe.__hasExternalTextures && _e.rebindTextures(E, me.get(E.texture).__webglTexture, me.get(E.depthTexture).__webglTexture)
            }
            let Z = null
              , ge = !1
              , ye = !1;
            if (E) {
                const Fe = E.texture;
                (Fe.isData3DTexture || Fe.isDataArrayTexture) && (ye = !0);
                const Ve = me.get(E).__webglFramebuffer;
                E.isWebGLCubeRenderTarget ? (Z = Ve[O],
                ge = !0) : Ce.isWebGL2 && E.samples > 0 && _e.useMultisampledRTT(E) === !1 ? Z = me.get(E).__webglMultisampledFramebuffer : Z = Ve,
                S.copy(E.viewport),
                A.copy(E.scissor),
                v = E.scissorTest
            } else
                S.copy(R).multiplyScalar(F).floor(),
                A.copy(U).multiplyScalar(F).floor(),
                v = z;
            if (oe.bindFramebuffer(36160, Z) && Ce.drawBuffers && N && oe.drawBuffers(E, Z),
            oe.viewport(S),
            oe.scissor(A),
            oe.setScissorTest(v),
            ge) {
                const Fe = me.get(E.texture);
                H.framebufferTexture2D(36160, 36064, 34069 + O, Fe.__webglTexture, k)
            } else if (ye) {
                const Fe = me.get(E.texture)
                  , Ve = O || 0;
                H.framebufferTextureLayer(36160, 36064, Fe.__webglTexture, k || 0, Ve)
            }
            x = -1
        }
        ,
        this.readRenderTargetPixels = function(E, O, k, N, Z, ge, ye) {
            if (!(E && E.isWebGLRenderTarget)) {
                console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
                return
            }
            let Se = me.get(E).__webglFramebuffer;
            if (E.isWebGLCubeRenderTarget && ye !== void 0 && (Se = Se[ye]),
            Se) {
                oe.bindFramebuffer(36160, Se);
                try {
                    const Fe = E.texture
                      , Ve = Fe.format
                      , Ae = Fe.type;
                    if (Ve !== qn && C.convert(Ve) !== H.getParameter(35739)) {
                        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
                        return
                    }
                    const Pe = Ae === As && (xe.has("EXT_color_buffer_half_float") || Ce.isWebGL2 && xe.has("EXT_color_buffer_float"));
                    if (Ae !== qi && C.convert(Ae) !== H.getParameter(35738) && !(Ae === $i && (Ce.isWebGL2 || xe.has("OES_texture_float") || xe.has("WEBGL_color_buffer_float"))) && !Pe) {
                        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
                        return
                    }
                    O >= 0 && O <= E.width - N && k >= 0 && k <= E.height - Z && H.readPixels(O, k, N, Z, C.convert(Ve), C.convert(Ae), ge)
                } finally {
                    const Fe = M !== null ? me.get(M).__webglFramebuffer : null;
                    oe.bindFramebuffer(36160, Fe)
                }
            }
        }
        ,
        this.copyFramebufferToTexture = function(E, O, k=0) {
            const N = Math.pow(2, -k)
              , Z = Math.floor(O.image.width * N)
              , ge = Math.floor(O.image.height * N);
            _e.setTexture2D(O, 0),
            H.copyTexSubImage2D(3553, k, 0, 0, E.x, E.y, Z, ge),
            oe.unbindTexture()
        }
        ,
        this.copyTextureToTexture = function(E, O, k, N=0) {
            const Z = O.image.width
              , ge = O.image.height
              , ye = C.convert(k.format)
              , Se = C.convert(k.type);
            _e.setTexture2D(k, 0),
            H.pixelStorei(37440, k.flipY),
            H.pixelStorei(37441, k.premultiplyAlpha),
            H.pixelStorei(3317, k.unpackAlignment),
            O.isDataTexture ? H.texSubImage2D(3553, N, E.x, E.y, Z, ge, ye, Se, O.image.data) : O.isCompressedTexture ? H.compressedTexSubImage2D(3553, N, E.x, E.y, O.mipmaps[0].width, O.mipmaps[0].height, ye, O.mipmaps[0].data) : H.texSubImage2D(3553, N, E.x, E.y, ye, Se, O.image),
            N === 0 && k.generateMipmaps && H.generateMipmap(3553),
            oe.unbindTexture()
        }
        ,
        this.copyTextureToTexture3D = function(E, O, k, N, Z=0) {
            if (d.isWebGL1Renderer) {
                console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
                return
            }
            const ge = E.max.x - E.min.x + 1
              , ye = E.max.y - E.min.y + 1
              , Se = E.max.z - E.min.z + 1
              , Fe = C.convert(N.format)
              , Ve = C.convert(N.type);
            let Ae;
            if (N.isData3DTexture)
                _e.setTexture3D(N, 0),
                Ae = 32879;
            else if (N.isDataArrayTexture)
                _e.setTexture2DArray(N, 0),
                Ae = 35866;
            else {
                console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
                return
            }
            H.pixelStorei(37440, N.flipY),
            H.pixelStorei(37441, N.premultiplyAlpha),
            H.pixelStorei(3317, N.unpackAlignment);
            const Pe = H.getParameter(3314)
              , $e = H.getParameter(32878)
              , Xn = H.getParameter(3316)
              , vi = H.getParameter(3315)
              , An = H.getParameter(32877)
              , Pn = k.isCompressedTexture ? k.mipmaps[0] : k.image;
            H.pixelStorei(3314, Pn.width),
            H.pixelStorei(32878, Pn.height),
            H.pixelStorei(3316, E.min.x),
            H.pixelStorei(3315, E.min.y),
            H.pixelStorei(32877, E.min.z),
            k.isDataTexture || k.isData3DTexture ? H.texSubImage3D(Ae, Z, O.x, O.y, O.z, ge, ye, Se, Fe, Ve, Pn.data) : k.isCompressedTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),
            H.compressedTexSubImage3D(Ae, Z, O.x, O.y, O.z, ge, ye, Se, Fe, Pn.data)) : H.texSubImage3D(Ae, Z, O.x, O.y, O.z, ge, ye, Se, Fe, Ve, Pn),
            H.pixelStorei(3314, Pe),
            H.pixelStorei(32878, $e),
            H.pixelStorei(3316, Xn),
            H.pixelStorei(3315, vi),
            H.pixelStorei(32877, An),
            Z === 0 && N.generateMipmaps && H.generateMipmap(Ae),
            oe.unbindTexture()
        }
        ,
        this.initTexture = function(E) {
            E.isCubeTexture ? _e.setTextureCube(E, 0) : E.isData3DTexture ? _e.setTexture3D(E, 0) : E.isDataArrayTexture ? _e.setTexture2DArray(E, 0) : _e.setTexture2D(E, 0),
            oe.unbindTexture()
        }
        ,
        this.resetState = function() {
            _ = 0,
            y = 0,
            M = null,
            oe.reset(),
            Q.reset()
        }
        ,
        typeof __THREE_DEVTOOLS__ != "undefined" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{
            detail: this
        }))
    }
    class Mx extends Cf {
    }
    Mx.prototype.isWebGL1Renderer = !0;
    class Sx extends Nn {
        constructor() {
            super();
            this.isScene = !0,
            this.type = "Scene",
            this.background = null,
            this.environment = null,
            this.fog = null,
            this.overrideMaterial = null,
            this.autoUpdate = !0,
            typeof __THREE_DEVTOOLS__ != "undefined" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{
                detail: this
            }))
        }
        copy(e, t) {
            return super.copy(e, t),
            e.background !== null && (this.background = e.background.clone()),
            e.environment !== null && (this.environment = e.environment.clone()),
            e.fog !== null && (this.fog = e.fog.clone()),
            e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()),
            this.autoUpdate = e.autoUpdate,
            this.matrixAutoUpdate = e.matrixAutoUpdate,
            this
        }
        toJSON(e) {
            const t = super.toJSON(e);
            return this.fog !== null && (t.object.fog = this.fog.toJSON()),
            t
        }
    }
    const Af = {
        enabled: !1,
        files: {},
        add: function(s, e) {
            this.enabled !== !1 && (this.files[s] = e)
        },
        get: function(s) {
            if (this.enabled !== !1)
                return this.files[s]
        },
        remove: function(s) {
            delete this.files[s]
        },
        clear: function() {
            this.files = {}
        }
    };
    class wx {
        constructor(e, t, n) {
            const i = this;
            let r = !1, a = 0, o = 0, c;
            const l = [];
            this.onStart = void 0,
            this.onLoad = e,
            this.onProgress = t,
            this.onError = n,
            this.itemStart = function(u) {
                o++,
                r === !1 && i.onStart !== void 0 && i.onStart(u, a, o),
                r = !0
            }
            ,
            this.itemEnd = function(u) {
                a++,
                i.onProgress !== void 0 && i.onProgress(u, a, o),
                a === o && (r = !1,
                i.onLoad !== void 0 && i.onLoad())
            }
            ,
            this.itemError = function(u) {
                i.onError !== void 0 && i.onError(u)
            }
            ,
            this.resolveURL = function(u) {
                return c ? c(u) : u
            }
            ,
            this.setURLModifier = function(u) {
                return c = u,
                this
            }
            ,
            this.addHandler = function(u, f) {
                return l.push(u, f),
                this
            }
            ,
            this.removeHandler = function(u) {
                const f = l.indexOf(u);
                return f !== -1 && l.splice(f, 2),
                this
            }
            ,
            this.getHandler = function(u) {
                for (let f = 0, h = l.length; f < h; f += 2) {
                    const m = l[f]
                      , g = l[f + 1];
                    if (m.global && (m.lastIndex = 0),
                    m.test(u))
                        return g
                }
                return null
            }
        }
    }
    const Tx = new wx;
    class Pf {
        constructor(e) {
            this.manager = e !== void 0 ? e : Tx,
            this.crossOrigin = "anonymous",
            this.withCredentials = !1,
            this.path = "",
            this.resourcePath = "",
            this.requestHeader = {}
        }
        load() {}
        loadAsync(e, t) {
            const n = this;
            return new Promise(function(i, r) {
                n.load(e, i, t, r)
            }
            )
        }
        parse() {}
        setCrossOrigin(e) {
            return this.crossOrigin = e,
            this
        }
        setWithCredentials(e) {
            return this.withCredentials = e,
            this
        }
        setPath(e) {
            return this.path = e,
            this
        }
        setResourcePath(e) {
            return this.resourcePath = e,
            this
        }
        setRequestHeader(e) {
            return this.requestHeader = e,
            this
        }
    }
    class Ex extends Pf {
        constructor(e) {
            super(e)
        }
        load(e, t, n, i) {
            this.path !== void 0 && (e = this.path + e),
            e = this.manager.resolveURL(e);
            const r = this
              , a = Af.get(e);
            if (a !== void 0)
                return r.manager.itemStart(e),
                setTimeout(function() {
                    t && t(a),
                    r.manager.itemEnd(e)
                }, 0),
                a;
            const o = Ds("img");
            function c() {
                u(),
                Af.add(e, this),
                t && t(this),
                r.manager.itemEnd(e)
            }
            function l(f) {
                u(),
                i && i(f),
                r.manager.itemError(e),
                r.manager.itemEnd(e)
            }
            function u() {
                o.removeEventListener("load", c, !1),
                o.removeEventListener("error", l, !1)
            }
            return o.addEventListener("load", c, !1),
            o.addEventListener("error", l, !1),
            e.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (o.crossOrigin = this.crossOrigin),
            r.manager.itemStart(e),
            o.src = e,
            o
        }
    }
    class Cx extends Pf {
        constructor(e) {
            super(e)
        }
        load(e, t, n, i) {
            const r = new on
              , a = new Ex(this.manager);
            return a.setCrossOrigin(this.crossOrigin),
            a.setPath(this.path),
            a.load(e, function(o) {
                r.image = o,
                r.needsUpdate = !0,
                t !== void 0 && t(r)
            }, n, i),
            r
        }
    }
    class Ax {
        constructor(e=!0) {
            this.autoStart = e,
            this.startTime = 0,
            this.oldTime = 0,
            this.elapsedTime = 0,
            this.running = !1
        }
        start() {
            this.startTime = Df(),
            this.oldTime = this.startTime,
            this.elapsedTime = 0,
            this.running = !0
        }
        stop() {
            this.getElapsedTime(),
            this.running = !1,
            this.autoStart = !1
        }
        getElapsedTime() {
            return this.getDelta(),
            this.elapsedTime
        }
        getDelta() {
            let e = 0;
            if (this.autoStart && !this.running)
                return this.start(),
                0;
            if (this.running) {
                const t = Df();
                e = (t - this.oldTime) / 1e3,
                this.oldTime = t,
                this.elapsedTime += e
            }
            return e
        }
    }
    function Df() {
        return (typeof performance == "undefined" ? Date : performance).now()
    }
    "" + "\\[\\]\\.:\\/".replace("\\.", "");
    class Px {
        constructor(e, t, n=0, i=1 / 0) {
            this.ray = new zu(e,t),
            this.near = n,
            this.far = i,
            this.camera = null,
            this.layers = new ul,
            this.params = {
                Mesh: {},
                Line: {
                    threshold: 1
                },
                LOD: {},
                Points: {
                    threshold: 1
                },
                Sprite: {}
            }
        }
        set(e, t) {
            this.ray.set(e, t)
        }
        setFromCamera(e, t) {
            t.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(t.matrixWorld),
            this.ray.direction.set(e.x, e.y, .5).unproject(t).sub(this.ray.origin).normalize(),
            this.camera = t) : t.isOrthographicCamera ? (this.ray.origin.set(e.x, e.y, (t.near + t.far) / (t.near - t.far)).unproject(t),
            this.ray.direction.set(0, 0, -1).transformDirection(t.matrixWorld),
            this.camera = t) : console.error("THREE.Raycaster: Unsupported camera type: " + t.type)
        }
        intersectObject(e, t=!0, n=[]) {
            return Dl(e, this, n, t),
            n.sort(Lf),
            n
        }
        intersectObjects(e, t=!0, n=[]) {
            for (let i = 0, r = e.length; i < r; i++)
                Dl(e[i], this, n, t);
            return n.sort(Lf),
            n
        }
    }
    function Lf(s, e) {
        return s.distance - e.distance
    }
    function Dl(s, e, t, n) {
        if (s.layers.test(e.layers) && s.raycast(e, t),
        n === !0) {
            const i = s.children;
            for (let r = 0, a = i.length; r < a; r++)
                Dl(i[r], e, t, !0)
        }
    }
    class Rf {
        constructor(e=1, t=0, n=0) {
            return this.radius = e,
            this.phi = t,
            this.theta = n,
            this
        }
        set(e, t, n) {
            return this.radius = e,
            this.phi = t,
            this.theta = n,
            this
        }
        copy(e) {
            return this.radius = e.radius,
            this.phi = e.phi,
            this.theta = e.theta,
            this
        }
        makeSafe() {
            const e = 1e-6;
            return this.phi = Math.max(e, Math.min(Math.PI - e, this.phi)),
            this
        }
        setFromVector3(e) {
            return this.setFromCartesianCoords(e.x, e.y, e.z)
        }
        setFromCartesianCoords(e, t, n) {
            return this.radius = Math.sqrt(e * e + t * t + n * n),
            this.radius === 0 ? (this.theta = 0,
            this.phi = 0) : (this.theta = Math.atan2(e, n),
            this.phi = Math.acos(Zt(t / this.radius, -1, 1))),
            this
        }
        clone() {
            return new this.constructor().copy(this)
        }
    }
    typeof __THREE_DEVTOOLS__ != "undefined" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{
        detail: {
            revision: $t
        }
    })),
    typeof window != "undefined" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = $t);
    const If = {
        type: "change"
    }
      , Ll = {
        type: "start"
    }
      , Ff = {
        type: "end"
    };
    class Dx extends Ji {
        constructor(e, t) {
            super();
            t === void 0 && console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),
            t === document && console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),
            this.object = e,
            this.domElement = t,
            this.domElement.style.touchAction = "none",
            this.enabled = !0,
            this.target = new B,
            this.minDistance = 0,
            this.maxDistance = 1 / 0,
            this.minZoom = 0,
            this.maxZoom = 1 / 0,
            this.minPolarAngle = 0,
            this.maxPolarAngle = Math.PI,
            this.minAzimuthAngle = -1 / 0,
            this.maxAzimuthAngle = 1 / 0,
            this.enableDamping = !1,
            this.dampingFactor = .05,
            this.enableZoom = !0,
            this.zoomSpeed = 1,
            this.enableRotate = !0,
            this.rotateSpeed = 1,
            this.enablePan = !0,
            this.panSpeed = 1,
            this.screenSpacePanning = !0,
            this.keyPanSpeed = 7,
            this.autoRotate = !1,
            this.autoRotateSpeed = 2,
            this.keys = {
                LEFT: "ArrowLeft",
                UP: "ArrowUp",
                RIGHT: "ArrowRight",
                BOTTOM: "ArrowDown"
            },
            this.mouseButtons = {
                LEFT: Pt.ROTATE,
                MIDDLE: Pt.DOLLY,
                RIGHT: Pt.PAN
            },
            this.touches = {
                ONE: Rr.ROTATE,
                TWO: Rr.DOLLY_PAN
            },
            this.target0 = this.target.clone(),
            this.position0 = this.object.position.clone(),
            this.zoom0 = this.object.zoom,
            this._domElementKeyEvents = null,
            this.getPolarAngle = function() {
                return o.phi
            }
            ,
            this.getAzimuthalAngle = function() {
                return o.theta
            }
            ,
            this.getDistance = function() {
                return this.object.position.distanceTo(this.target)
            }
            ,
            this.listenToKeyEvents = function(C) {
                C.addEventListener("keydown", ft),
                this._domElementKeyEvents = C
            }
            ,
            this.saveState = function() {
                n.target0.copy(n.target),
                n.position0.copy(n.object.position),
                n.zoom0 = n.object.zoom
            }
            ,
            this.reset = function() {
                n.target.copy(n.target0),
                n.object.position.copy(n.position0),
                n.object.zoom = n.zoom0,
                n.object.updateProjectionMatrix(),
                n.dispatchEvent(If),
                n.update(),
                r = i.NONE
            }
            ,
            this.update = function() {
                const C = new B
                  , Q = new er().setFromUnitVectors(e.up, new B(0,1,0))
                  , se = Q.clone().invert()
                  , he = new B
                  , ue = new er
                  , we = 2 * Math.PI;
                return function() {
                    const Te = n.object.position;
                    C.copy(Te).sub(n.target),
                    C.applyQuaternion(Q),
                    o.setFromVector3(C),
                    n.autoRotate && r === i.NONE && w(A()),
                    n.enableDamping ? (o.theta += c.theta * n.dampingFactor,
                    o.phi += c.phi * n.dampingFactor) : (o.theta += c.theta,
                    o.phi += c.phi);
                    let I = n.minAzimuthAngle
                      , ae = n.maxAzimuthAngle;
                    return isFinite(I) && isFinite(ae) && (I < -Math.PI ? I += we : I > Math.PI && (I -= we),
                    ae < -Math.PI ? ae += we : ae > Math.PI && (ae -= we),
                    I <= ae ? o.theta = Math.max(I, Math.min(ae, o.theta)) : o.theta = o.theta > (I + ae) / 2 ? Math.max(I, o.theta) : Math.min(ae, o.theta)),
                    o.phi = Math.max(n.minPolarAngle, Math.min(n.maxPolarAngle, o.phi)),
                    o.makeSafe(),
                    o.radius *= l,
                    o.radius = Math.max(n.minDistance, Math.min(n.maxDistance, o.radius)),
                    n.enableDamping === !0 ? n.target.addScaledVector(u, n.dampingFactor) : n.target.add(u),
                    C.setFromSpherical(o),
                    C.applyQuaternion(se),
                    Te.copy(n.target).add(C),
                    n.object.lookAt(n.target),
                    n.enableDamping === !0 ? (c.theta *= 1 - n.dampingFactor,
                    c.phi *= 1 - n.dampingFactor,
                    u.multiplyScalar(1 - n.dampingFactor)) : (c.set(0, 0, 0),
                    u.set(0, 0, 0)),
                    l = 1,
                    f || he.distanceToSquared(n.object.position) > a || 8 * (1 - ue.dot(n.object.quaternion)) > a ? (n.dispatchEvent(If),
                    he.copy(n.object.position),
                    ue.copy(n.object.quaternion),
                    f = !1,
                    !0) : !1
                }
            }(),
            this.dispose = function() {
                n.domElement.removeEventListener("contextmenu", j),
                n.domElement.removeEventListener("pointerdown", qe),
                n.domElement.removeEventListener("pointercancel", Y),
                n.domElement.removeEventListener("wheel", pt),
                n.domElement.removeEventListener("pointermove", et),
                n.domElement.removeEventListener("pointerup", Xe),
                n._domElementKeyEvents !== null && n._domElementKeyEvents.removeEventListener("keydown", ft)
            }
            ;
            const n = this
              , i = {
                NONE: -1,
                ROTATE: 0,
                DOLLY: 1,
                PAN: 2,
                TOUCH_ROTATE: 3,
                TOUCH_PAN: 4,
                TOUCH_DOLLY_PAN: 5,
                TOUCH_DOLLY_ROTATE: 6
            };
            let r = i.NONE;
            const a = 1e-6
              , o = new Rf
              , c = new Rf;
            let l = 1;
            const u = new B;
            let f = !1;
            const h = new ke
              , m = new ke
              , g = new ke
              , d = new ke
              , p = new ke
              , _ = new ke
              , y = new ke
              , M = new ke
              , x = new ke
              , b = []
              , S = {};
            function A() {
                return 2 * Math.PI / 60 / 60 * n.autoRotateSpeed
            }
            function v() {
                return Math.pow(.95, n.zoomSpeed)
            }
            function w(C) {
                c.theta -= C
            }
            function L(C) {
                c.phi -= C
            }
            const F = function() {
                const C = new B;
                return function(se, he) {
                    C.setFromMatrixColumn(he, 0),
                    C.multiplyScalar(-se),
                    u.add(C)
                }
            }()
              , V = function() {
                const C = new B;
                return function(se, he) {
                    n.screenSpacePanning === !0 ? C.setFromMatrixColumn(he, 1) : (C.setFromMatrixColumn(he, 0),
                    C.crossVectors(n.object.up, C)),
                    C.multiplyScalar(se),
                    u.add(C)
                }
            }()
              , K = function() {
                const C = new B;
                return function(se, he) {
                    const ue = n.domElement;
                    if (n.object.isPerspectiveCamera) {
                        const we = n.object.position;
                        C.copy(we).sub(n.target);
                        let Ue = C.length();
                        Ue *= Math.tan(n.object.fov / 2 * Math.PI / 180),
                        F(2 * se * Ue / ue.clientHeight, n.object.matrix),
                        V(2 * he * Ue / ue.clientHeight, n.object.matrix)
                    } else
                        n.object.isOrthographicCamera ? (F(se * (n.object.right - n.object.left) / n.object.zoom / ue.clientWidth, n.object.matrix),
                        V(he * (n.object.top - n.object.bottom) / n.object.zoom / ue.clientHeight, n.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),
                        n.enablePan = !1)
                }
            }();
            function R(C) {
                n.object.isPerspectiveCamera ? l /= C : n.object.isOrthographicCamera ? (n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom * C)),
                n.object.updateProjectionMatrix(),
                f = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),
                n.enableZoom = !1)
            }
            function U(C) {
                n.object.isPerspectiveCamera ? l *= C : n.object.isOrthographicCamera ? (n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom / C)),
                n.object.updateProjectionMatrix(),
                f = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),
                n.enableZoom = !1)
            }
            function z(C) {
                h.set(C.clientX, C.clientY)
            }
            function W(C) {
                y.set(C.clientX, C.clientY)
            }
            function X(C) {
                d.set(C.clientX, C.clientY)
            }
            function G(C) {
                m.set(C.clientX, C.clientY),
                g.subVectors(m, h).multiplyScalar(n.rotateSpeed);
                const Q = n.domElement;
                w(2 * Math.PI * g.x / Q.clientHeight),
                L(2 * Math.PI * g.y / Q.clientHeight),
                h.copy(m),
                n.update()
            }
            function P(C) {
                M.set(C.clientX, C.clientY),
                x.subVectors(M, y),
                x.y > 0 ? R(v()) : x.y < 0 && U(v()),
                y.copy(M),
                n.update()
            }
            function ee(C) {
                p.set(C.clientX, C.clientY),
                _.subVectors(p, d).multiplyScalar(n.panSpeed),
                K(_.x, _.y),
                d.copy(p),
                n.update()
            }
            function te(C) {
                C.deltaY < 0 ? U(v()) : C.deltaY > 0 && R(v()),
                n.update()
            }
            function ie(C) {
                let Q = !1;
                switch (C.code) {
                case n.keys.UP:
                    K(0, n.keyPanSpeed),
                    Q = !0;
                    break;
                case n.keys.BOTTOM:
                    K(0, -n.keyPanSpeed),
                    Q = !0;
                    break;
                case n.keys.LEFT:
                    K(n.keyPanSpeed, 0),
                    Q = !0;
                    break;
                case n.keys.RIGHT:
                    K(-n.keyPanSpeed, 0),
                    Q = !0;
                    break
                }
                Q && (C.preventDefault(),
                n.update())
            }
            function ce() {
                if (b.length === 1)
                    h.set(b[0].pageX, b[0].pageY);
                else {
                    const C = .5 * (b[0].pageX + b[1].pageX)
                      , Q = .5 * (b[0].pageY + b[1].pageY);
                    h.set(C, Q)
                }
            }
            function Me() {
                if (b.length === 1)
                    d.set(b[0].pageX, b[0].pageY);
                else {
                    const C = .5 * (b[0].pageX + b[1].pageX)
                      , Q = .5 * (b[0].pageY + b[1].pageY);
                    d.set(C, Q)
                }
            }
            function H() {
                const C = b[0].pageX - b[1].pageX
                  , Q = b[0].pageY - b[1].pageY
                  , se = Math.sqrt(C * C + Q * Q);
                y.set(0, se)
            }
            function Le() {
                n.enableZoom && H(),
                n.enablePan && Me()
            }
            function xe() {
                n.enableZoom && H(),
                n.enableRotate && ce()
            }
            function Ce(C) {
                if (b.length == 1)
                    m.set(C.pageX, C.pageY);
                else {
                    const se = be(C)
                      , he = .5 * (C.pageX + se.x)
                      , ue = .5 * (C.pageY + se.y);
                    m.set(he, ue)
                }
                g.subVectors(m, h).multiplyScalar(n.rotateSpeed);
                const Q = n.domElement;
                w(2 * Math.PI * g.x / Q.clientHeight),
                L(2 * Math.PI * g.y / Q.clientHeight),
                h.copy(m)
            }
            function oe(C) {
                if (b.length === 1)
                    p.set(C.pageX, C.pageY);
                else {
                    const Q = be(C)
                      , se = .5 * (C.pageX + Q.x)
                      , he = .5 * (C.pageY + Q.y);
                    p.set(se, he)
                }
                _.subVectors(p, d).multiplyScalar(n.panSpeed),
                K(_.x, _.y),
                d.copy(p)
            }
            function Ne(C) {
                const Q = be(C)
                  , se = C.pageX - Q.x
                  , he = C.pageY - Q.y
                  , ue = Math.sqrt(se * se + he * he);
                M.set(0, ue),
                x.set(0, Math.pow(M.y / y.y, n.zoomSpeed)),
                R(x.y),
                y.copy(M)
            }
            function me(C) {
                n.enableZoom && Ne(C),
                n.enablePan && oe(C)
            }
            function _e(C) {
                n.enableZoom && Ne(C),
                n.enableRotate && Ce(C)
            }
            function qe(C) {
                n.enabled !== !1 && (b.length === 0 && (n.domElement.setPointerCapture(C.pointerId),
                n.domElement.addEventListener("pointermove", et),
                n.domElement.addEventListener("pointerup", Xe)),
                re(C),
                C.pointerType === "touch" ? D(C) : Qe(C))
            }
            function et(C) {
                n.enabled !== !1 && (C.pointerType === "touch" ? T(C) : De(C))
            }
            function Xe(C) {
                ne(C),
                b.length === 0 && (n.domElement.releasePointerCapture(C.pointerId),
                n.domElement.removeEventListener("pointermove", et),
                n.domElement.removeEventListener("pointerup", Xe)),
                n.dispatchEvent(Ff),
                r = i.NONE
            }
            function Y(C) {
                ne(C)
            }
            function Qe(C) {
                let Q;
                switch (C.button) {
                case 0:
                    Q = n.mouseButtons.LEFT;
                    break;
                case 1:
                    Q = n.mouseButtons.MIDDLE;
                    break;
                case 2:
                    Q = n.mouseButtons.RIGHT;
                    break;
                default:
                    Q = -1
                }
                switch (Q) {
                case Pt.DOLLY:
                    if (n.enableZoom === !1)
                        return;
                    W(C),
                    r = i.DOLLY;
                    break;
                case Pt.ROTATE:
                    if (C.ctrlKey || C.metaKey || C.shiftKey) {
                        if (n.enablePan === !1)
                            return;
                        X(C),
                        r = i.PAN
                    } else {
                        if (n.enableRotate === !1)
                            return;
                        z(C),
                        r = i.ROTATE
                    }
                    break;
                case Pt.PAN:
                    if (C.ctrlKey || C.metaKey || C.shiftKey) {
                        if (n.enableRotate === !1)
                            return;
                        z(C),
                        r = i.ROTATE
                    } else {
                        if (n.enablePan === !1)
                            return;
                        X(C),
                        r = i.PAN
                    }
                    break;
                default:
                    r = i.NONE
                }
                r !== i.NONE && n.dispatchEvent(Ll)
            }
            function De(C) {
                switch (r) {
                case i.ROTATE:
                    if (n.enableRotate === !1)
                        return;
                    G(C);
                    break;
                case i.DOLLY:
                    if (n.enableZoom === !1)
                        return;
                    P(C);
                    break;
                case i.PAN:
                    if (n.enablePan === !1)
                        return;
                    ee(C);
                    break
                }
            }
            function pt(C) {
                n.enabled === !1 || n.enableZoom === !1 || r !== i.NONE || (C.preventDefault(),
                n.dispatchEvent(Ll),
                te(C),
                n.dispatchEvent(Ff))
            }
            function ft(C) {
                n.enabled === !1 || n.enablePan === !1 || ie(C)
            }
            function D(C) {
                switch (le(C),
                b.length) {
                case 1:
                    switch (n.touches.ONE) {
                    case Rr.ROTATE:
                        if (n.enableRotate === !1)
                            return;
                        ce(),
                        r = i.TOUCH_ROTATE;
                        break;
                    case Rr.PAN:
                        if (n.enablePan === !1)
                            return;
                        Me(),
                        r = i.TOUCH_PAN;
                        break;
                    default:
                        r = i.NONE
                    }
                    break;
                case 2:
                    switch (n.touches.TWO) {
                    case Rr.DOLLY_PAN:
                        if (n.enableZoom === !1 && n.enablePan === !1)
                            return;
                        Le(),
                        r = i.TOUCH_DOLLY_PAN;
                        break;
                    case Rr.DOLLY_ROTATE:
                        if (n.enableZoom === !1 && n.enableRotate === !1)
                            return;
                        xe(),
                        r = i.TOUCH_DOLLY_ROTATE;
                        break;
                    default:
                        r = i.NONE
                    }
                    break;
                default:
                    r = i.NONE
                }
                r !== i.NONE && n.dispatchEvent(Ll)
            }
            function T(C) {
                switch (le(C),
                r) {
                case i.TOUCH_ROTATE:
                    if (n.enableRotate === !1)
                        return;
                    Ce(C),
                    n.update();
                    break;
                case i.TOUCH_PAN:
                    if (n.enablePan === !1)
                        return;
                    oe(C),
                    n.update();
                    break;
                case i.TOUCH_DOLLY_PAN:
                    if (n.enableZoom === !1 && n.enablePan === !1)
                        return;
                    me(C),
                    n.update();
                    break;
                case i.TOUCH_DOLLY_ROTATE:
                    if (n.enableZoom === !1 && n.enableRotate === !1)
                        return;
                    _e(C),
                    n.update();
                    break;
                default:
                    r = i.NONE
                }
            }
            function j(C) {
                n.enabled !== !1 && C.preventDefault()
            }
            function re(C) {
                b.push(C)
            }
            function ne(C) {
                delete S[C.pointerId];
                for (let Q = 0; Q < b.length; Q++)
                    if (b[Q].pointerId == C.pointerId) {
                        b.splice(Q, 1);
                        return
                    }
            }
            function le(C) {
                let Q = S[C.pointerId];
                Q === void 0 && (Q = new ke,
                S[C.pointerId] = Q),
                Q.set(C.pageX, C.pageY)
            }
            function be(C) {
                const Q = C.pointerId === b[0].pointerId ? b[1] : b[0];
                return S[Q.pointerId]
            }
            n.domElement.addEventListener("contextmenu", j),
            n.domElement.addEventListener("pointerdown", qe),
            n.domElement.addEventListener("pointercancel", Y),
            n.domElement.addEventListener("wheel", pt, {
                passive: !1
            }),
            this.update()
        }
    }
    const Lx = (s,e,t)=>(1 - t) * s + t * e;
    class Rx {
        constructor() {
            this.DOM = {
                main: document.querySelector("div[data-scroll-parent]")
            },
            this.DOM.scrollable = this.DOM.main.querySelector("div[data-scroll]"),
            this.docScroll = 0,
            this.scrollToRender = 0,
            this.current = 0,
            this.ease = .15,
            this.speed = 0,
            this.speedTarget = 0,
            this.setSize(),
            this.getScroll(),
            this.init(),
            this.style(),
            this.initEvents(),
            requestAnimationFrame(()=>this.render())
        }
        init() {
            for (const e in this.renderedStyles)
                this.current = this.scrollToRender = this.getScroll();
            this.setPosition(),
            this.shouldRender = !0
        }
        style() {
            this.DOM.main.style.position = "fixed",
            this.DOM.main.style.width = this.DOM.main.style.height = "100%",
            this.DOM.main.style.top = this.DOM.main.style.left = 0,
            this.DOM.main.style.overflow = "hidden"
        }
        getScroll() {
            return this.docScroll = window.pageYOffset || document.documentElement.scrollTop,
            this.docScroll
            console.log(this.docScroll);
        }
        initEvents() {
            window.onbeforeunload = function() {
                window.scrollTo(0, 0)
            }
            ,
            window.addEventListener("resize", ()=>this.setSize()),
            window.addEventListener("scroll", this.getScroll.bind(this))
        }
        setSize() {
            var test = `${this.DOM.scrollable.scrollHeight}px`;
            document.querySelector(".services-display-section").style.height = test;
        }
        setPosition() {
            (Math.round(this.scrollToRender) !== Math.round(this.current) || this.scrollToRender < 10) && (this.DOM.scrollable.style.transform = `translate3d(0,${(-1 * this.scrollToRender)}px,0)`)
        }
        render() {
            this.speed = Math.min(Math.abs(this.current - this.scrollToRender), 200) / 200,
            this.speedTarget += (this.speed - this.speedTarget) * .2,
            this.current = this.getScroll(),
            this.scrollToRender = Lx(this.scrollToRender, this.current, this.ease),
            this.setPosition()
        }
    }
    function ui(s) {
        if (s === void 0)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return s
    }
    function zf(s, e) {
        s.prototype = Object.create(e.prototype),
        s.prototype.constructor = s,
        s.__proto__ = e
    }
    /*!
 * GSAP 3.10.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
    var cn = {
        autoSleep: 120,
        force3D: "auto",
        nullTargetWarn: 1,
        units: {
            lineHeight: ""
        }
    }, is = {
        duration: .5,
        overwrite: !1,
        delay: 0
    }, Rl, vn = 1e8, nt = 1 / vn, Il = Math.PI * 2, Ix = Il / 4, Fx = 0, Of = Math.sqrt, zx = Math.cos, Ox = Math.sin, wt = function(e) {
        return typeof e == "string"
    }, Tt = function(e) {
        return typeof e == "function"
    }, fi = function(e) {
        return typeof e == "number"
    }, Fl = function(e) {
        return typeof e == "undefined"
    }, hi = function(e) {
        return typeof e == "object"
    }, Kt = function(e) {
        return e !== !1
    }, Nf = function() {
        return typeof window != "undefined"
    }, $o = function(e) {
        return Tt(e) || wt(e)
    }, Uf = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {}
    , Ot = Array.isArray, zl = /(?:-?\.?\d|\.)+/gi, kf = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, rs = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, Ol = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, Bf = /[+-]=-?[.\d]+/, Gf = /[^,'"\[\]\s]+/gi, Nx = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, ot, jn, Nl, Ul, un = {}, jo = {}, Vf, Hf = function(e) {
        return (jo = lr(e, un)) && Vn
    }, kl = function(e, t) {
        return console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()")
    }, Zo = function(e, t) {
        return !t && console.warn(e)
    }, Wf = function(e, t) {
        return e && (un[e] = t) && jo && (jo[e] = t) || un
    }, ks = function() {
        return 0
    }, Bl = {}, Pi = [], Gl = {}, Xf, fn = {}, Vl = {}, qf = 30, Ko = [], Hl = "", Wl = function(e) {
        var t = e[0], n, i;
        if (hi(t) || Tt(t) || (e = [e]),
        !(n = (t._gsap || {}).harness)) {
            for (i = Ko.length; i-- && !Ko[i].targetTest(t); )
                ;
            n = Ko[i]
        }
        for (i = e.length; i--; )
            e[i] && (e[i]._gsap || (e[i]._gsap = new vh(e[i],n))) || e.splice(i, 1);
        return e
    }, ar = function(e) {
        return e._gsap || Wl(Mn(e))[0]._gsap
    }, Yf = function(e, t, n) {
        return (n = e[t]) && Tt(n) ? e[t]() : Fl(n) && e.getAttribute && e.getAttribute(t) || n
    }, Jt = function(e, t) {
        return (e = e.split(",")).forEach(t) || e
    }, dt = function(e) {
        return Math.round(e * 1e5) / 1e5 || 0
    }, Nt = function(e) {
        return Math.round(e * 1e7) / 1e7 || 0
    }, ss = function(e, t) {
        var n = t.charAt(0)
          , i = parseFloat(t.substr(2));
        return e = parseFloat(e),
        n === "+" ? e + i : n === "-" ? e - i : n === "*" ? e * i : e / i
    }, Ux = function(e, t) {
        for (var n = t.length, i = 0; e.indexOf(t[i]) < 0 && ++i < n; )
            ;
        return i < n
    }, Jo = function() {
        var e = Pi.length, t = Pi.slice(0), n, i;
        for (Gl = {},
        Pi.length = 0,
        n = 0; n < e; n++)
            i = t[n],
            i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0)
    }, $f = function(e, t, n, i) {
        Pi.length && Jo(),
        e.render(t, n, i),
        Pi.length && Jo()
    }, jf = function(e) {
        var t = parseFloat(e);
        return (t || t === 0) && (e + "").match(Gf).length < 2 ? t : wt(e) ? e.trim() : e
    }, Zf = function(e) {
        return e
    }, yn = function(e, t) {
        for (var n in t)
            n in e || (e[n] = t[n]);
        return e
    }, kx = function(e) {
        return function(t, n) {
            for (var i in n)
                i in t || i === "duration" && e || i === "ease" || (t[i] = n[i])
        }
    }, lr = function(e, t) {
        for (var n in t)
            e[n] = t[n];
        return e
    }, Kf = function s(e, t) {
        for (var n in t)
            n !== "__proto__" && n !== "constructor" && n !== "prototype" && (e[n] = hi(t[n]) ? s(e[n] || (e[n] = {}), t[n]) : t[n]);
        return e
    }, Qo = function(e, t) {
        var n = {}, i;
        for (i in e)
            i in t || (n[i] = e[i]);
        return n
    }, Bs = function(e) {
        var t = e.parent || ot
          , n = e.keyframes ? kx(Ot(e.keyframes)) : yn;
        if (Kt(e.inherit))
            for (; t; )
                n(e, t.vars.defaults),
                t = t.parent || t._dp;
        return e
    }, Bx = function(e, t) {
        for (var n = e.length, i = n === t.length; i && n-- && e[n] === t[n]; )
            ;
        return n < 0
    }, Jf = function(e, t, n, i, r) {
        n === void 0 && (n = "_first"),
        i === void 0 && (i = "_last");
        var a = e[i], o;
        if (r)
            for (o = t[r]; a && a[r] > o; )
                a = a._prev;
        return a ? (t._next = a._next,
        a._next = t) : (t._next = e[n],
        e[n] = t),
        t._next ? t._next._prev = t : e[i] = t,
        t._prev = a,
        t.parent = t._dp = e,
        t
    }, ea = function(e, t, n, i) {
        n === void 0 && (n = "_first"),
        i === void 0 && (i = "_last");
        var r = t._prev
          , a = t._next;
        r ? r._next = a : e[n] === t && (e[n] = a),
        a ? a._prev = r : e[i] === t && (e[i] = r),
        t._next = t._prev = t.parent = null
    }, di = function(e, t) {
        e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove(e),
        e._act = 0
    }, cr = function(e, t) {
        if (e && (!t || t._end > e._dur || t._start < 0))
            for (var n = e; n; )
                n._dirty = 1,
                n = n.parent;
        return e
    }, Gx = function(e) {
        for (var t = e.parent; t && t.parent; )
            t._dirty = 1,
            t.totalDuration(),
            t = t.parent;
        return e
    }, Vx = function s(e) {
        return !e || e._ts && s(e.parent)
    }, Qf = function(e) {
        return e._repeat ? os(e._tTime, e = e.duration() + e._rDelay) * e : 0
    }, os = function(e, t) {
        var n = Math.floor(e /= t);
        return e && n === e ? n - 1 : n
    }, ta = function(e, t) {
        return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
    }, na = function(e) {
        return e._end = Nt(e._start + (e._tDur / Math.abs(e._ts || e._rts || nt) || 0))
    }, Xl = function(e, t) {
        var n = e._dp;
        return n && n.smoothChildTiming && e._ts && (e._start = Nt(n._time - (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)),
        na(e),
        n._dirty || cr(n, e)),
        e
    }, eh = function(e, t) {
        var n;
        if ((t._time || t._initted && !t._dur) && (n = ta(e.rawTime(), t),
        (!t._dur || Vs(0, t.totalDuration(), n) - t._tTime > nt) && t.render(n, !0)),
        cr(e, t)._dp && e._initted && e._time >= e._dur && e._ts) {
            if (e._dur < e.duration())
                for (n = e; n._dp; )
                    n.rawTime() >= 0 && n.totalTime(n._tTime),
                    n = n._dp;
            e._zTime = -nt
        }
    }, Zn = function(e, t, n, i) {
        return t.parent && di(t),
        t._start = Nt((fi(n) ? n : n || e !== ot ? bn(e, n, t) : e._time) + t._delay),
        t._end = Nt(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)),
        Jf(e, t, "_first", "_last", e._sort ? "_start" : 0),
        ql(t) || (e._recent = t),
        i || eh(e, t),
        e
    }, th = function(e, t) {
        return (un.ScrollTrigger || kl("scrollTrigger", t)) && un.ScrollTrigger.create(t, e)
    }, nh = function(e, t, n, i) {
        if (ec(e, t),
        !e._initted)
            return 1;
        if (!n && e._pt && (e._dur && e.vars.lazy !== !1 || !e._dur && e.vars.lazy) && Xf !== hn.frame)
            return Pi.push(e),
            e._lazy = [t, i],
            1
    }, Hx = function s(e) {
        var t = e.parent;
        return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || s(t))
    }, ql = function(e) {
        var t = e.data;
        return t === "isFromStart" || t === "isStart"
    }, Wx = function(e, t, n, i) {
        var r = e.ratio, a = t < 0 || !t && (!e._start && Hx(e) && !(!e._initted && ql(e)) || (e._ts < 0 || e._dp._ts < 0) && !ql(e)) ? 0 : 1, o = e._rDelay, c = 0, l, u, f;
        if (o && e._repeat && (c = Vs(0, e._tDur, t),
        u = os(c, o),
        e._yoyo && u & 1 && (a = 1 - a),
        u !== os(e._tTime, o) && (r = 1 - a,
        e.vars.repeatRefresh && e._initted && e.invalidate())),
        a !== r || i || e._zTime === nt || !t && e._zTime) {
            if (!e._initted && nh(e, t, i, n))
                return;
            for (f = e._zTime,
            e._zTime = t || (n ? nt : 0),
            n || (n = t && !f),
            e.ratio = a,
            e._from && (a = 1 - a),
            e._time = 0,
            e._tTime = c,
            l = e._pt; l; )
                l.r(a, l.d),
                l = l._next;
            e._startAt && t < 0 && e._startAt.render(t, !0, !0),
            e._onUpdate && !n && Sn(e, "onUpdate"),
            c && e._repeat && !n && e.parent && Sn(e, "onRepeat"),
            (t >= e._tDur || t < 0) && e.ratio === a && (a && di(e, 1),
            n || (Sn(e, a ? "onComplete" : "onReverseComplete", !0),
            e._prom && e._prom()))
        } else
            e._zTime || (e._zTime = t)
    }, Xx = function(e, t, n) {
        var i;
        if (n > t)
            for (i = e._first; i && i._start <= n; ) {
                if (i.data === "isPause" && i._start > t)
                    return i;
                i = i._next
            }
        else
            for (i = e._last; i && i._start >= n; ) {
                if (i.data === "isPause" && i._start < t)
                    return i;
                i = i._prev
            }
    }, as = function(e, t, n, i) {
        var r = e._repeat
          , a = Nt(t) || 0
          , o = e._tTime / e._tDur;
        return o && !i && (e._time *= a / e._dur),
        e._dur = a,
        e._tDur = r ? r < 0 ? 1e10 : Nt(a * (r + 1) + e._rDelay * r) : a,
        o > 0 && !i ? Xl(e, e._tTime = e._tDur * o) : e.parent && na(e),
        n || cr(e.parent, e),
        e
    }, ih = function(e) {
        return e instanceof Qt ? cr(e) : as(e, e._dur)
    }, qx = {
        _start: 0,
        endTime: ks,
        totalDuration: ks
    }, bn = function s(e, t, n) {
        var i = e.labels, r = e._recent || qx, a = e.duration() >= vn ? r.endTime(!1) : e._dur, o, c, l;
        return wt(t) && (isNaN(t) || t in i) ? (c = t.charAt(0),
        l = t.substr(-1) === "%",
        o = t.indexOf("="),
        c === "<" || c === ">" ? (o >= 0 && (t = t.replace(/=/, "")),
        (c === "<" ? r._start : r.endTime(r._repeat >= 0)) + (parseFloat(t.substr(1)) || 0) * (l ? (o < 0 ? r : n).totalDuration() / 100 : 1)) : o < 0 ? (t in i || (i[t] = a),
        i[t]) : (c = parseFloat(t.charAt(o - 1) + t.substr(o + 1)),
        l && n && (c = c / 100 * (Ot(n) ? n[0] : n).totalDuration()),
        o > 1 ? s(e, t.substr(0, o - 1), n) + c : a + c)) : t == null ? a : +t
    }, Gs = function(e, t, n) {
        var i = fi(t[1]), r = (i ? 2 : 1) + (e < 2 ? 0 : 1), a = t[r], o, c;
        if (i && (a.duration = t[1]),
        a.parent = n,
        e) {
            for (o = a,
            c = n; c && !("immediateRender"in o); )
                o = c.vars.defaults || {},
                c = Kt(c.vars.inherit) && c.parent;
            a.immediateRender = Kt(o.immediateRender),
            e < 2 ? a.runBackwards = 1 : a.startAt = t[r - 1]
        }
        return new Et(t[0],a,t[r + 1])
    }, Di = function(e, t) {
        return e || e === 0 ? t(e) : t
    }, Vs = function(e, t, n) {
        return n < e ? e : n > t ? t : n
    }, Ut = function(e, t) {
        return !wt(e) || !(t = Nx.exec(e)) ? "" : t[1]
    }, Yx = function(e, t, n) {
        return Di(n, function(i) {
            return Vs(e, t, i)
        })
    }, Yl = [].slice, rh = function(e, t) {
        return e && hi(e) && "length"in e && (!t && !e.length || e.length - 1 in e && hi(e[0])) && !e.nodeType && e !== jn
    }, $x = function(e, t, n) {
        return n === void 0 && (n = []),
        e.forEach(function(i) {
            var r;
            return wt(i) && !t || rh(i, 1) ? (r = n).push.apply(r, Mn(i)) : n.push(i)
        }) || n
    }, Mn = function(e, t, n) {
        return wt(e) && !n && (Nl || !cs()) ? Yl.call((t || Ul).querySelectorAll(e), 0) : Ot(e) ? $x(e, n) : rh(e) ? Yl.call(e, 0) : e ? [e] : []
    }, jx = function(e) {
        return e = Mn(e)[0] || Zo("Invalid scope") || {},
        function(t) {
            var n = e.current || e.nativeElement || e;
            return Mn(t, n.querySelectorAll ? n : n === e ? Zo("Invalid scope") || Ul.createElement("div") : e)
        }
    }, sh = function(e) {
        return e.sort(function() {
            return .5 - Math.random()
        })
    }, oh = function(e) {
        if (Tt(e))
            return e;
        var t = hi(e) ? e : {
            each: e
        }
          , n = ur(t.ease)
          , i = t.from || 0
          , r = parseFloat(t.base) || 0
          , a = {}
          , o = i > 0 && i < 1
          , c = isNaN(i) || o
          , l = t.axis
          , u = i
          , f = i;
        return wt(i) ? u = f = {
            center: .5,
            edges: .5,
            end: 1
        }[i] || 0 : !o && c && (u = i[0],
        f = i[1]),
        function(h, m, g) {
            var d = (g || t).length, p = a[d], _, y, M, x, b, S, A, v, w;
            if (!p) {
                if (w = t.grid === "auto" ? 0 : (t.grid || [1, vn])[1],
                !w) {
                    for (A = -vn; A < (A = g[w++].getBoundingClientRect().left) && w < d; )
                        ;
                    w--
                }
                for (p = a[d] = [],
                _ = c ? Math.min(w, d) * u - .5 : i % w,
                y = w === vn ? 0 : c ? d * f / w - .5 : i / w | 0,
                A = 0,
                v = vn,
                S = 0; S < d; S++)
                    M = S % w - _,
                    x = y - (S / w | 0),
                    p[S] = b = l ? Math.abs(l === "y" ? x : M) : Of(M * M + x * x),
                    b > A && (A = b),
                    b < v && (v = b);
                i === "random" && sh(p),
                p.max = A - v,
                p.min = v,
                p.v = d = (parseFloat(t.amount) || parseFloat(t.each) * (w > d ? d - 1 : l ? l === "y" ? d / w : w : Math.max(w, d / w)) || 0) * (i === "edges" ? -1 : 1),
                p.b = d < 0 ? r - d : r,
                p.u = Ut(t.amount || t.each) || 0,
                n = n && d < 0 ? gh(n) : n
            }
            return d = (p[h] - p.min) / p.max || 0,
            Nt(p.b + (n ? n(d) : d) * p.v) + p.u
        }
    }, $l = function(e) {
        var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
        return function(n) {
            var i = Math.round(parseFloat(n) / e) * e * t;
            return (i - i % 1) / t + (fi(n) ? 0 : Ut(n))
        }
    }, ah = function(e, t) {
        var n = Ot(e), i, r;
        return !n && hi(e) && (i = n = e.radius || vn,
        e.values ? (e = Mn(e.values),
        (r = !fi(e[0])) && (i *= i)) : e = $l(e.increment)),
        Di(t, n ? Tt(e) ? function(a) {
            return r = e(a),
            Math.abs(r - a) <= i ? r : a
        }
        : function(a) {
            for (var o = parseFloat(r ? a.x : a), c = parseFloat(r ? a.y : 0), l = vn, u = 0, f = e.length, h, m; f--; )
                r ? (h = e[f].x - o,
                m = e[f].y - c,
                h = h * h + m * m) : h = Math.abs(e[f] - o),
                h < l && (l = h,
                u = f);
            return u = !i || l <= i ? e[u] : a,
            r || u === a || fi(a) ? u : u + Ut(a)
        }
        : $l(e))
    }, lh = function(e, t, n, i) {
        return Di(Ot(e) ? !t : n === !0 ? !!(n = 0) : !i, function() {
            return Ot(e) ? e[~~(Math.random() * e.length)] : (n = n || 1e-5) && (i = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) && Math.floor(Math.round((e - n / 2 + Math.random() * (t - e + n * .99)) / n) * n * i) / i
        })
    }, Zx = function() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
        return function(i) {
            return t.reduce(function(r, a) {
                return a(r)
            }, i)
        }
    }, Kx = function(e, t) {
        return function(n) {
            return e(parseFloat(n)) + (t || Ut(n))
        }
    }, Jx = function(e, t, n) {
        return uh(e, t, 0, 1, n)
    }, ch = function(e, t, n) {
        return Di(n, function(i) {
            return e[~~t(i)]
        })
    }, Qx = function s(e, t, n) {
        var i = t - e;
        return Ot(e) ? ch(e, s(0, e.length), t) : Di(n, function(r) {
            return (i + (r - e) % i) % i + e
        })
    }, ev = function s(e, t, n) {
        var i = t - e
          , r = i * 2;
        return Ot(e) ? ch(e, s(0, e.length - 1), t) : Di(n, function(a) {
            return a = (r + (a - e) % r) % r || 0,
            e + (a > i ? r - a : a)
        })
    }, Hs = function(e) {
        for (var t = 0, n = "", i, r, a, o; ~(i = e.indexOf("random(", t)); )
            a = e.indexOf(")", i),
            o = e.charAt(i + 7) === "[",
            r = e.substr(i + 7, a - i - 7).match(o ? Gf : zl),
            n += e.substr(t, i - t) + lh(o ? r : +r[0], o ? 0 : +r[1], +r[2] || 1e-5),
            t = a + 1;
        return n + e.substr(t, e.length - t)
    }, uh = function(e, t, n, i, r) {
        var a = t - e
          , o = i - n;
        return Di(r, function(c) {
            return n + ((c - e) / a * o || 0)
        })
    }, tv = function s(e, t, n, i) {
        var r = isNaN(e + t) ? 0 : function(m) {
            return (1 - m) * e + m * t
        }
        ;
        if (!r) {
            var a = wt(e), o = {}, c, l, u, f, h;
            if (n === !0 && (i = 1) && (n = null),
            a)
                e = {
                    p: e
                },
                t = {
                    p: t
                };
            else if (Ot(e) && !Ot(t)) {
                for (u = [],
                f = e.length,
                h = f - 2,
                l = 1; l < f; l++)
                    u.push(s(e[l - 1], e[l]));
                f--,
                r = function(g) {
                    g *= f;
                    var d = Math.min(h, ~~g);
                    return u[d](g - d)
                }
                ,
                n = t
            } else
                i || (e = lr(Ot(e) ? [] : {}, e));
            if (!u) {
                for (c in t)
                    Jl.call(o, e, c, "get", t[c]);
                r = function(g) {
                    return ic(g, o) || (a ? e.p : e)
                }
            }
        }
        return Di(n, r)
    }, fh = function(e, t, n) {
        var i = e.labels, r = vn, a, o, c;
        for (a in i)
            o = i[a] - t,
            o < 0 == !!n && o && r > (o = Math.abs(o)) && (c = a,
            r = o);
        return c
    }, Sn = function(e, t, n) {
        var i = e.vars, r = i[t], a, o;
        if (!!r)
            return a = i[t + "Params"],
            o = i.callbackScope || e,
            n && Pi.length && Jo(),
            a ? r.apply(o, a) : r.call(o)
    }, Ws = function(e) {
        return di(e),
        e.scrollTrigger && e.scrollTrigger.kill(!1),
        e.progress() < 1 && Sn(e, "onInterrupt"),
        e
    }, ls, nv = function(e) {
        e = !e.name && e.default || e;
        var t = e.name
          , n = Tt(e)
          , i = t && !n && e.init ? function() {
            this._props = []
        }
        : e
          , r = {
            init: ks,
            render: ic,
            add: Jl,
            kill: xv,
            modifier: _v,
            rawVars: 0
        }
          , a = {
            targetTest: 0,
            get: 0,
            getSetter: nc,
            aliases: {},
            register: 0
        };
        if (cs(),
        e !== i) {
            if (fn[t])
                return;
            yn(i, yn(Qo(e, r), a)),
            lr(i.prototype, lr(r, Qo(e, a))),
            fn[i.prop = t] = i,
            e.targetTest && (Ko.push(i),
            Bl[t] = 1),
            t = (t === "css" ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin"
        }
        Wf(t, i),
        e.register && e.register(Vn, i, en)
    }, it = 255, Xs = {
        aqua: [0, it, it],
        lime: [0, it, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, it],
        navy: [0, 0, 128],
        white: [it, it, it],
        olive: [128, 128, 0],
        yellow: [it, it, 0],
        orange: [it, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [it, 0, 0],
        pink: [it, 192, 203],
        cyan: [0, it, it],
        transparent: [it, it, it, 0]
    }, jl = function(e, t, n) {
        return e += e < 0 ? 1 : e > 1 ? -1 : 0,
        (e * 6 < 1 ? t + (n - t) * e * 6 : e < .5 ? n : e * 3 < 2 ? t + (n - t) * (2 / 3 - e) * 6 : t) * it + .5 | 0
    }, hh = function(e, t, n) {
        var i = e ? fi(e) ? [e >> 16, e >> 8 & it, e & it] : 0 : Xs.black, r, a, o, c, l, u, f, h, m, g;
        if (!i) {
            if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)),
            Xs[e])
                i = Xs[e];
            else if (e.charAt(0) === "#") {
                if (e.length < 6 && (r = e.charAt(1),
                a = e.charAt(2),
                o = e.charAt(3),
                e = "#" + r + r + a + a + o + o + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")),
                e.length === 9)
                    return i = parseInt(e.substr(1, 6), 16),
                    [i >> 16, i >> 8 & it, i & it, parseInt(e.substr(7), 16) / 255];
                e = parseInt(e.substr(1), 16),
                i = [e >> 16, e >> 8 & it, e & it]
            } else if (e.substr(0, 3) === "hsl") {
                if (i = g = e.match(zl),
                !t)
                    c = +i[0] % 360 / 360,
                    l = +i[1] / 100,
                    u = +i[2] / 100,
                    a = u <= .5 ? u * (l + 1) : u + l - u * l,
                    r = u * 2 - a,
                    i.length > 3 && (i[3] *= 1),
                    i[0] = jl(c + 1 / 3, r, a),
                    i[1] = jl(c, r, a),
                    i[2] = jl(c - 1 / 3, r, a);
                else if (~e.indexOf("="))
                    return i = e.match(kf),
                    n && i.length < 4 && (i[3] = 1),
                    i
            } else
                i = e.match(zl) || Xs.transparent;
            i = i.map(Number)
        }
        return t && !g && (r = i[0] / it,
        a = i[1] / it,
        o = i[2] / it,
        f = Math.max(r, a, o),
        h = Math.min(r, a, o),
        u = (f + h) / 2,
        f === h ? c = l = 0 : (m = f - h,
        l = u > .5 ? m / (2 - f - h) : m / (f + h),
        c = f === r ? (a - o) / m + (a < o ? 6 : 0) : f === a ? (o - r) / m + 2 : (r - a) / m + 4,
        c *= 60),
        i[0] = ~~(c + .5),
        i[1] = ~~(l * 100 + .5),
        i[2] = ~~(u * 100 + .5)),
        n && i.length < 4 && (i[3] = 1),
        i
    }, dh = function(e) {
        var t = []
          , n = []
          , i = -1;
        return e.split(Li).forEach(function(r) {
            var a = r.match(rs) || [];
            t.push.apply(t, a),
            n.push(i += a.length + 1)
        }),
        t.c = n,
        t
    }, ph = function(e, t, n) {
        var i = "", r = (e + i).match(Li), a = t ? "hsla(" : "rgba(", o = 0, c, l, u, f;
        if (!r)
            return e;
        if (r = r.map(function(h) {
            return (h = hh(h, t, 1)) && a + (t ? h[0] + "," + h[1] + "%," + h[2] + "%," + h[3] : h.join(",")) + ")"
        }),
        n && (u = dh(e),
        c = n.c,
        c.join(i) !== u.c.join(i)))
            for (l = e.replace(Li, "1").split(rs),
            f = l.length - 1; o < f; o++)
                i += l[o] + (~c.indexOf(o) ? r.shift() || a + "0,0,0,0)" : (u.length ? u : r.length ? r : n).shift());
        if (!l)
            for (l = e.split(Li),
            f = l.length - 1; o < f; o++)
                i += l[o] + r[o];
        return i + l[f]
    }, Li = function() {
        var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", e;
        for (e in Xs)
            s += "|" + e + "\\b";
        return new RegExp(s + ")","gi")
    }(), iv = /hsl[a]?\(/, mh = function(e) {
        var t = e.join(" "), n;
        if (Li.lastIndex = 0,
        Li.test(t))
            return n = iv.test(t),
            e[1] = ph(e[1], n),
            e[0] = ph(e[0], n, dh(e[1])),
            !0
    }, qs, hn = function() {
        var s = Date.now, e = 500, t = 33, n = s(), i = n, r = 1e3 / 240, a = r, o = [], c, l, u, f, h, m, g = function d(p) {
            var _ = s() - i, y = p === !0, M, x, b, S;
            if (_ > e && (n += _ - t),
            i += _,
            b = i - n,
            M = b - a,
            (M > 0 || y) && (S = ++f.frame,
            h = b - f.time * 1e3,
            f.time = b = b / 1e3,
            a += M + (M >= r ? 4 : r - M),
            x = 1),
            y || (c = l(d)),
            x)
                for (m = 0; m < o.length; m++)
                    o[m](b, h, S, p)
        };
        return f = {
            time: 0,
            frame: 0,
            tick: function() {
                g(!0)
            },
            deltaRatio: function(p) {
                return h / (1e3 / (p || 60))
            },
            wake: function() {
                Vf && (!Nl && Nf() && (jn = Nl = window,
                Ul = jn.document || {},
                un.gsap = Vn,
                (jn.gsapVersions || (jn.gsapVersions = [])).push(Vn.version),
                Hf(jo || jn.GreenSockGlobals || !jn.gsap && jn || {}),
                u = jn.requestAnimationFrame),
                c && f.sleep(),
                l = u || function(p) {
                    return setTimeout(p, a - f.time * 1e3 + 1 | 0)
                }
                ,
                qs = 1,
                g(2))
            },
            sleep: function() {
                (u ? jn.cancelAnimationFrame : clearTimeout)(c),
                qs = 0,
                l = ks
            },
            lagSmoothing: function(p, _) {
                e = p || 1 / nt,
                t = Math.min(_, e, 0)
            },
            fps: function(p) {
                r = 1e3 / (p || 240),
                a = f.time * 1e3 + r
            },
            add: function(p, _, y) {
                var M = _ ? function(x, b, S, A) {
                    p(x, b, S, A),
                    f.remove(M)
                }
                : p;
                return f.remove(p),
                o[y ? "unshift" : "push"](M),
                cs(),
                M
            },
            remove: function(p, _) {
                ~(_ = o.indexOf(p)) && o.splice(_, 1) && m >= _ && m--
            },
            _listeners: o
        },
        f
    }(), cs = function() {
        return !qs && hn.wake()
    }, He = {}, rv = /^[\d.\-M][\d.\-,\s]/, sv = /["']/g, ov = function(e) {
        for (var t = {}, n = e.substr(1, e.length - 3).split(":"), i = n[0], r = 1, a = n.length, o, c, l; r < a; r++)
            c = n[r],
            o = r !== a - 1 ? c.lastIndexOf(",") : c.length,
            l = c.substr(0, o),
            t[i] = isNaN(l) ? l.replace(sv, "").trim() : +l,
            i = c.substr(o + 1).trim();
        return t
    }, av = function(e) {
        var t = e.indexOf("(") + 1
          , n = e.indexOf(")")
          , i = e.indexOf("(", t);
        return e.substring(t, ~i && i < n ? e.indexOf(")", n + 1) : n)
    }, lv = function(e) {
        var t = (e + "").split("(")
          , n = He[t[0]];
        return n && t.length > 1 && n.config ? n.config.apply(null, ~e.indexOf("{") ? [ov(t[1])] : av(e).split(",").map(jf)) : He._CE && rv.test(e) ? He._CE("", e) : n
    }, gh = function(e) {
        return function(t) {
            return 1 - e(1 - t)
        }
    }, _h = function s(e, t) {
        for (var n = e._first, i; n; )
            n instanceof Qt ? s(n, t) : n.vars.yoyoEase && (!n._yoyo || !n._repeat) && n._yoyo !== t && (n.timeline ? s(n.timeline, t) : (i = n._ease,
            n._ease = n._yEase,
            n._yEase = i,
            n._yoyo = t)),
            n = n._next
    }, ur = function(e, t) {
        return e && (Tt(e) ? e : He[e] || lv(e)) || t
    }, fr = function(e, t, n, i) {
        n === void 0 && (n = function(c) {
            return 1 - t(1 - c)
        }
        ),
        i === void 0 && (i = function(c) {
            return c < .5 ? t(c * 2) / 2 : 1 - t((1 - c) * 2) / 2
        }
        );
        var r = {
            easeIn: t,
            easeOut: n,
            easeInOut: i
        }, a;
        return Jt(e, function(o) {
            He[o] = un[o] = r,
            He[a = o.toLowerCase()] = n;
            for (var c in r)
                He[a + (c === "easeIn" ? ".in" : c === "easeOut" ? ".out" : ".inOut")] = He[o + "." + c] = r[c]
        }),
        r
    }, xh = function(e) {
        return function(t) {
            return t < .5 ? (1 - e(1 - t * 2)) / 2 : .5 + e((t - .5) * 2) / 2
        }
    }, Zl = function s(e, t, n) {
        var i = t >= 1 ? t : 1
          , r = (n || (e ? .3 : .45)) / (t < 1 ? t : 1)
          , a = r / Il * (Math.asin(1 / i) || 0)
          , o = function(u) {
            return u === 1 ? 1 : i * Math.pow(2, -10 * u) * Ox((u - a) * r) + 1
        }
          , c = e === "out" ? o : e === "in" ? function(l) {
            return 1 - o(1 - l)
        }
        : xh(o);
        return r = Il / r,
        c.config = function(l, u) {
            return s(e, l, u)
        }
        ,
        c
    }, Kl = function s(e, t) {
        t === void 0 && (t = 1.70158);
        var n = function(a) {
            return a ? --a * a * ((t + 1) * a + t) + 1 : 0
        }
          , i = e === "out" ? n : e === "in" ? function(r) {
            return 1 - n(1 - r)
        }
        : xh(n);
        return i.config = function(r) {
            return s(e, r)
        }
        ,
        i
    };
    Jt("Linear,Quad,Cubic,Quart,Quint,Strong", function(s, e) {
        var t = e < 5 ? e + 1 : e;
        fr(s + ",Power" + (t - 1), e ? function(n) {
            return Math.pow(n, t)
        }
        : function(n) {
            return n
        }
        , function(n) {
            return 1 - Math.pow(1 - n, t)
        }, function(n) {
            return n < .5 ? Math.pow(n * 2, t) / 2 : 1 - Math.pow((1 - n) * 2, t) / 2
        })
    }),
    He.Linear.easeNone = He.none = He.Linear.easeIn,
    fr("Elastic", Zl("in"), Zl("out"), Zl()),
    function(s, e) {
        var t = 1 / e
          , n = 2 * t
          , i = 2.5 * t
          , r = function(o) {
            return o < t ? s * o * o : o < n ? s * Math.pow(o - 1.5 / e, 2) + .75 : o < i ? s * (o -= 2.25 / e) * o + .9375 : s * Math.pow(o - 2.625 / e, 2) + .984375
        };
        fr("Bounce", function(a) {
            return 1 - r(1 - a)
        }, r)
    }(7.5625, 2.75),
    fr("Expo", function(s) {
        return s ? Math.pow(2, 10 * (s - 1)) : 0
    }),
    fr("Circ", function(s) {
        return -(Of(1 - s * s) - 1)
    }),
    fr("Sine", function(s) {
        return s === 1 ? 1 : -zx(s * Ix) + 1
    }),
    fr("Back", Kl("in"), Kl("out"), Kl()),
    He.SteppedEase = He.steps = un.SteppedEase = {
        config: function(e, t) {
            e === void 0 && (e = 1);
            var n = 1 / e
              , i = e + (t ? 0 : 1)
              , r = t ? 1 : 0
              , a = 1 - nt;
            return function(o) {
                return ((i * Vs(0, a, o) | 0) + r) * n
            }
        }
    },
    is.ease = He["quad.out"],
    Jt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(s) {
        return Hl += s + "," + s + "Params,"
    });
    var vh = function(e, t) {
        this.id = Fx++,
        e._gsap = this,
        this.target = e,
        this.harness = t,
        this.get = t ? t.get : Yf,
        this.set = t ? t.getSetter : nc
    }
      , Ys = function() {
        function s(t) {
            this.vars = t,
            this._delay = +t.delay || 0,
            (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0,
            this._yoyo = !!t.yoyo || !!t.yoyoEase),
            this._ts = 1,
            as(this, +t.duration, 1, 1),
            this.data = t.data,
            qs || hn.wake()
        }
        var e = s.prototype;
        return e.delay = function(n) {
            return n || n === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + n - this._delay),
            this._delay = n,
            this) : this._delay
        }
        ,
        e.duration = function(n) {
            return arguments.length ? this.totalDuration(this._repeat > 0 ? n + (n + this._rDelay) * this._repeat : n) : this.totalDuration() && this._dur
        }
        ,
        e.totalDuration = function(n) {
            return arguments.length ? (this._dirty = 0,
            as(this, this._repeat < 0 ? n : (n - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
        }
        ,
        e.totalTime = function(n, i) {
            if (cs(),
            !arguments.length)
                return this._tTime;
            var r = this._dp;
            if (r && r.smoothChildTiming && this._ts) {
                for (Xl(this, n),
                !r._dp || r.parent || eh(r, this); r && r.parent; )
                    r.parent._time !== r._start + (r._ts >= 0 ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0),
                    r = r.parent;
                !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && n < this._tDur || this._ts < 0 && n > 0 || !this._tDur && !n) && Zn(this._dp, this, this._start - this._delay)
            }
            return (this._tTime !== n || !this._dur && !i || this._initted && Math.abs(this._zTime) === nt || !n && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = n),
            $f(this, n, i)),
            this
        }
        ,
        e.time = function(n, i) {
            return arguments.length ? this.totalTime(Math.min(this.totalDuration(), n + Qf(this)) % (this._dur + this._rDelay) || (n ? this._dur : 0), i) : this._time
        }
        ,
        e.totalProgress = function(n, i) {
            return arguments.length ? this.totalTime(this.totalDuration() * n, i) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
        }
        ,
        e.progress = function(n, i) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - n : n) + Qf(this), i) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
        }
        ,
        e.iteration = function(n, i) {
            var r = this.duration() + this._rDelay;
            return arguments.length ? this.totalTime(this._time + (n - 1) * r, i) : this._repeat ? os(this._tTime, r) + 1 : 1
        }
        ,
        e.timeScale = function(n) {
            if (!arguments.length)
                return this._rts === -nt ? 0 : this._rts;
            if (this._rts === n)
                return this;
            var i = this.parent && this._ts ? ta(this.parent._time, this) : this._tTime;
            return this._rts = +n || 0,
            this._ts = this._ps || n === -nt ? 0 : this._rts,
            this.totalTime(Vs(-this._delay, this._tDur, i), !0),
            na(this),
            Gx(this)
        }
        ,
        e.paused = function(n) {
            return arguments.length ? (this._ps !== n && (this._ps = n,
            n ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()),
            this._ts = this._act = 0) : (cs(),
            this._ts = this._rts,
            this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== nt && (this._tTime -= nt)))),
            this) : this._ps
        }
        ,
        e.startTime = function(n) {
            if (arguments.length) {
                this._start = n;
                var i = this.parent || this._dp;
                return i && (i._sort || !this.parent) && Zn(i, this, n - this._delay),
                this
            }
            return this._start
        }
        ,
        e.endTime = function(n) {
            return this._start + (Kt(n) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
        }
        ,
        e.rawTime = function(n) {
            var i = this.parent || this._dp;
            return i ? n && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? ta(i.rawTime(n), this) : this._tTime : this._tTime
        }
        ,
        e.globalTime = function(n) {
            for (var i = this, r = arguments.length ? n : i.rawTime(); i; )
                r = i._start + r / (i._ts || 1),
                i = i._dp;
            return r
        }
        ,
        e.repeat = function(n) {
            return arguments.length ? (this._repeat = n === 1 / 0 ? -2 : n,
            ih(this)) : this._repeat === -2 ? 1 / 0 : this._repeat
        }
        ,
        e.repeatDelay = function(n) {
            if (arguments.length) {
                var i = this._time;
                return this._rDelay = n,
                ih(this),
                i ? this.time(i) : this
            }
            return this._rDelay
        }
        ,
        e.yoyo = function(n) {
            return arguments.length ? (this._yoyo = n,
            this) : this._yoyo
        }
        ,
        e.seek = function(n, i) {
            return this.totalTime(bn(this, n), Kt(i))
        }
        ,
        e.restart = function(n, i) {
            return this.play().totalTime(n ? -this._delay : 0, Kt(i))
        }
        ,
        e.play = function(n, i) {
            return n != null && this.seek(n, i),
            this.reversed(!1).paused(!1)
        }
        ,
        e.reverse = function(n, i) {
            return n != null && this.seek(n || this.totalDuration(), i),
            this.reversed(!0).paused(!1)
        }
        ,
        e.pause = function(n, i) {
            return n != null && this.seek(n, i),
            this.paused(!0)
        }
        ,
        e.resume = function() {
            return this.paused(!1)
        }
        ,
        e.reversed = function(n) {
            return arguments.length ? (!!n !== this.reversed() && this.timeScale(-this._rts || (n ? -nt : 0)),
            this) : this._rts < 0
        }
        ,
        e.invalidate = function() {
            return this._initted = this._act = 0,
            this._zTime = -nt,
            this
        }
        ,
        e.isActive = function() {
            var n = this.parent || this._dp, i = this._start, r;
            return !!(!n || this._ts && this._initted && n.isActive() && (r = n.rawTime(!0)) >= i && r < this.endTime(!0) - nt)
        }
        ,
        e.eventCallback = function(n, i, r) {
            var a = this.vars;
            return arguments.length > 1 ? (i ? (a[n] = i,
            r && (a[n + "Params"] = r),
            n === "onUpdate" && (this._onUpdate = i)) : delete a[n],
            this) : a[n]
        }
        ,
        e.then = function(n) {
            var i = this;
            return new Promise(function(r) {
                var a = Tt(n) ? n : Zf
                  , o = function() {
                    var l = i.then;
                    i.then = null,
                    Tt(a) && (a = a(i)) && (a.then || a === i) && (i.then = l),
                    r(a),
                    i.then = l
                };
                i._initted && i.totalProgress() === 1 && i._ts >= 0 || !i._tTime && i._ts < 0 ? o() : i._prom = o
            }
            )
        }
        ,
        e.kill = function() {
            Ws(this)
        }
        ,
        s
    }();
    yn(Ys.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -nt,
        _prom: 0,
        _ps: !1,
        _rts: 1
    });
    var Qt = function(s) {
        zf(e, s);
        function e(n, i) {
            var r;
            return n === void 0 && (n = {}),
            r = s.call(this, n) || this,
            r.labels = {},
            r.smoothChildTiming = !!n.smoothChildTiming,
            r.autoRemoveChildren = !!n.autoRemoveChildren,
            r._sort = Kt(n.sortChildren),
            ot && Zn(n.parent || ot, ui(r), i),
            n.reversed && r.reverse(),
            n.paused && r.paused(!0),
            n.scrollTrigger && th(ui(r), n.scrollTrigger),
            r
        }
        var t = e.prototype;
        return t.to = function(i, r, a) {
            return Gs(0, arguments, this),
            this
        }
        ,
        t.from = function(i, r, a) {
            return Gs(1, arguments, this),
            this
        }
        ,
        t.fromTo = function(i, r, a, o) {
            return Gs(2, arguments, this),
            this
        }
        ,
        t.set = function(i, r, a) {
            return r.duration = 0,
            r.parent = this,
            Bs(r).repeatDelay || (r.repeat = 0),
            r.immediateRender = !!r.immediateRender,
            new Et(i,r,bn(this, a),1),
            this
        }
        ,
        t.call = function(i, r, a) {
            return Zn(this, Et.delayedCall(0, i, r), a)
        }
        ,
        t.staggerTo = function(i, r, a, o, c, l, u) {
            return a.duration = r,
            a.stagger = a.stagger || o,
            a.onComplete = l,
            a.onCompleteParams = u,
            a.parent = this,
            new Et(i,a,bn(this, c)),
            this
        }
        ,
        t.staggerFrom = function(i, r, a, o, c, l, u) {
            return a.runBackwards = 1,
            Bs(a).immediateRender = Kt(a.immediateRender),
            this.staggerTo(i, r, a, o, c, l, u)
        }
        ,
        t.staggerFromTo = function(i, r, a, o, c, l, u, f) {
            return o.startAt = a,
            Bs(o).immediateRender = Kt(o.immediateRender),
            this.staggerTo(i, r, o, c, l, u, f)
        }
        ,
        t.render = function(i, r, a) {
            var o = this._time, c = this._dirty ? this.totalDuration() : this._tDur, l = this._dur, u = i <= 0 ? 0 : Nt(i), f = this._zTime < 0 != i < 0 && (this._initted || !l), h, m, g, d, p, _, y, M, x, b, S, A;
            if (this !== ot && u > c && i >= 0 && (u = c),
            u !== this._tTime || a || f) {
                if (o !== this._time && l && (u += this._time - o,
                i += this._time - o),
                h = u,
                x = this._start,
                M = this._ts,
                _ = !M,
                f && (l || (o = this._zTime),
                (i || !r) && (this._zTime = i)),
                this._repeat) {
                    if (S = this._yoyo,
                    p = l + this._rDelay,
                    this._repeat < -1 && i < 0)
                        return this.totalTime(p * 100 + i, r, a);
                    if (h = Nt(u % p),
                    u === c ? (d = this._repeat,
                    h = l) : (d = ~~(u / p),
                    d && d === u / p && (h = l,
                    d--),
                    h > l && (h = l)),
                    b = os(this._tTime, p),
                    !o && this._tTime && b !== d && (b = d),
                    S && d & 1 && (h = l - h,
                    A = 1),
                    d !== b && !this._lock) {
                        var v = S && b & 1
                          , w = v === (S && d & 1);
                        if (d < b && (v = !v),
                        o = v ? 0 : l,
                        this._lock = 1,
                        this.render(o || (A ? 0 : Nt(d * p)), r, !l)._lock = 0,
                        this._tTime = u,
                        !r && this.parent && Sn(this, "onRepeat"),
                        this.vars.repeatRefresh && !A && (this.invalidate()._lock = 1),
                        o && o !== this._time || _ !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
                            return this;
                        if (l = this._dur,
                        c = this._tDur,
                        w && (this._lock = 2,
                        o = v ? l : -1e-4,
                        this.render(o, !0),
                        this.vars.repeatRefresh && !A && this.invalidate()),
                        this._lock = 0,
                        !this._ts && !_)
                            return this;
                        _h(this, A)
                    }
                }
                if (this._hasPause && !this._forcing && this._lock < 2 && (y = Xx(this, Nt(o), Nt(h)),
                y && (u -= h - (h = y._start))),
                this._tTime = u,
                this._time = h,
                this._act = !M,
                this._initted || (this._onUpdate = this.vars.onUpdate,
                this._initted = 1,
                this._zTime = i,
                o = 0),
                !o && h && !r && (Sn(this, "onStart"),
                this._tTime !== u))
                    return this;
                if (h >= o && i >= 0)
                    for (m = this._first; m; ) {
                        if (g = m._next,
                        (m._act || h >= m._start) && m._ts && y !== m) {
                            if (m.parent !== this)
                                return this.render(i, r, a);
                            if (m.render(m._ts > 0 ? (h - m._start) * m._ts : (m._dirty ? m.totalDuration() : m._tDur) + (h - m._start) * m._ts, r, a),
                            h !== this._time || !this._ts && !_) {
                                y = 0,
                                g && (u += this._zTime = -nt);
                                break
                            }
                        }
                        m = g
                    }
                else {
                    m = this._last;
                    for (var L = i < 0 ? i : h; m; ) {
                        if (g = m._prev,
                        (m._act || L <= m._end) && m._ts && y !== m) {
                            if (m.parent !== this)
                                return this.render(i, r, a);
                            if (m.render(m._ts > 0 ? (L - m._start) * m._ts : (m._dirty ? m.totalDuration() : m._tDur) + (L - m._start) * m._ts, r, a),
                            h !== this._time || !this._ts && !_) {
                                y = 0,
                                g && (u += this._zTime = L ? -nt : nt);
                                break
                            }
                        }
                        m = g
                    }
                }
                if (y && !r && (this.pause(),
                y.render(h >= o ? 0 : -nt)._zTime = h >= o ? 1 : -1,
                this._ts))
                    return this._start = x,
                    na(this),
                    this.render(i, r, a);
                this._onUpdate && !r && Sn(this, "onUpdate", !0),
                (u === c && this._tTime >= this.totalDuration() || !u && o) && (x === this._start || Math.abs(M) !== Math.abs(this._ts)) && (this._lock || ((i || !l) && (u === c && this._ts > 0 || !u && this._ts < 0) && di(this, 1),
                !r && !(i < 0 && !o) && (u || o || !c) && (Sn(this, u === c && i >= 0 ? "onComplete" : "onReverseComplete", !0),
                this._prom && !(u < c && this.timeScale() > 0) && this._prom())))
            }
            return this
        }
        ,
        t.add = function(i, r) {
            var a = this;
            if (fi(r) || (r = bn(this, r, i)),
            !(i instanceof Ys)) {
                if (Ot(i))
                    return i.forEach(function(o) {
                        return a.add(o, r)
                    }),
                    this;
                if (wt(i))
                    return this.addLabel(i, r);
                if (Tt(i))
                    i = Et.delayedCall(0, i);
                else
                    return this
            }
            return this !== i ? Zn(this, i, r) : this
        }
        ,
        t.getChildren = function(i, r, a, o) {
            i === void 0 && (i = !0),
            r === void 0 && (r = !0),
            a === void 0 && (a = !0),
            o === void 0 && (o = -vn);
            for (var c = [], l = this._first; l; )
                l._start >= o && (l instanceof Et ? r && c.push(l) : (a && c.push(l),
                i && c.push.apply(c, l.getChildren(!0, r, a)))),
                l = l._next;
            return c
        }
        ,
        t.getById = function(i) {
            for (var r = this.getChildren(1, 1, 1), a = r.length; a--; )
                if (r[a].vars.id === i)
                    return r[a]
        }
        ,
        t.remove = function(i) {
            return wt(i) ? this.removeLabel(i) : Tt(i) ? this.killTweensOf(i) : (ea(this, i),
            i === this._recent && (this._recent = this._last),
            cr(this))
        }
        ,
        t.totalTime = function(i, r) {
            return arguments.length ? (this._forcing = 1,
            !this._dp && this._ts && (this._start = Nt(hn.time - (this._ts > 0 ? i / this._ts : (this.totalDuration() - i) / -this._ts))),
            s.prototype.totalTime.call(this, i, r),
            this._forcing = 0,
            this) : this._tTime
        }
        ,
        t.addLabel = function(i, r) {
            return this.labels[i] = bn(this, r),
            this
        }
        ,
        t.removeLabel = function(i) {
            return delete this.labels[i],
            this
        }
        ,
        t.addPause = function(i, r, a) {
            var o = Et.delayedCall(0, r || ks, a);
            return o.data = "isPause",
            this._hasPause = 1,
            Zn(this, o, bn(this, i))
        }
        ,
        t.removePause = function(i) {
            var r = this._first;
            for (i = bn(this, i); r; )
                r._start === i && r.data === "isPause" && di(r),
                r = r._next
        }
        ,
        t.killTweensOf = function(i, r, a) {
            for (var o = this.getTweensOf(i, a), c = o.length; c--; )
                Ri !== o[c] && o[c].kill(i, r);
            return this
        }
        ,
        t.getTweensOf = function(i, r) {
            for (var a = [], o = Mn(i), c = this._first, l = fi(r), u; c; )
                c instanceof Et ? Ux(c._targets, o) && (l ? (!Ri || c._initted && c._ts) && c.globalTime(0) <= r && c.globalTime(c.totalDuration()) > r : !r || c.isActive()) && a.push(c) : (u = c.getTweensOf(o, r)).length && a.push.apply(a, u),
                c = c._next;
            return a
        }
        ,
        t.tweenTo = function(i, r) {
            r = r || {};
            var a = this, o = bn(a, i), c = r, l = c.startAt, u = c.onStart, f = c.onStartParams, h = c.immediateRender, m, g = Et.to(a, yn({
                ease: r.ease || "none",
                lazy: !1,
                immediateRender: !1,
                time: o,
                overwrite: "auto",
                duration: r.duration || Math.abs((o - (l && "time"in l ? l.time : a._time)) / a.timeScale()) || nt,
                onStart: function() {
                    if (a.pause(),
                    !m) {
                        var p = r.duration || Math.abs((o - (l && "time"in l ? l.time : a._time)) / a.timeScale());
                        g._dur !== p && as(g, p, 0, 1).render(g._time, !0, !0),
                        m = 1
                    }
                    u && u.apply(g, f || [])
                }
            }, r));
            return h ? g.render(0) : g
        }
        ,
        t.tweenFromTo = function(i, r, a) {
            return this.tweenTo(r, yn({
                startAt: {
                    time: bn(this, i)
                }
            }, a))
        }
        ,
        t.recent = function() {
            return this._recent
        }
        ,
        t.nextLabel = function(i) {
            return i === void 0 && (i = this._time),
            fh(this, bn(this, i))
        }
        ,
        t.previousLabel = function(i) {
            return i === void 0 && (i = this._time),
            fh(this, bn(this, i), 1)
        }
        ,
        t.currentLabel = function(i) {
            return arguments.length ? this.seek(i, !0) : this.previousLabel(this._time + nt)
        }
        ,
        t.shiftChildren = function(i, r, a) {
            a === void 0 && (a = 0);
            for (var o = this._first, c = this.labels, l; o; )
                o._start >= a && (o._start += i,
                o._end += i),
                o = o._next;
            if (r)
                for (l in c)
                    c[l] >= a && (c[l] += i);
            return cr(this)
        }
        ,
        t.invalidate = function() {
            var i = this._first;
            for (this._lock = 0; i; )
                i.invalidate(),
                i = i._next;
            return s.prototype.invalidate.call(this)
        }
        ,
        t.clear = function(i) {
            i === void 0 && (i = !0);
            for (var r = this._first, a; r; )
                a = r._next,
                this.remove(r),
                r = a;
            return this._dp && (this._time = this._tTime = this._pTime = 0),
            i && (this.labels = {}),
            cr(this)
        }
        ,
        t.totalDuration = function(i) {
            var r = 0, a = this, o = a._last, c = vn, l, u, f;
            if (arguments.length)
                return a.timeScale((a._repeat < 0 ? a.duration() : a.totalDuration()) / (a.reversed() ? -i : i));
            if (a._dirty) {
                for (f = a.parent; o; )
                    l = o._prev,
                    o._dirty && o.totalDuration(),
                    u = o._start,
                    u > c && a._sort && o._ts && !a._lock ? (a._lock = 1,
                    Zn(a, o, u - o._delay, 1)._lock = 0) : c = u,
                    u < 0 && o._ts && (r -= u,
                    (!f && !a._dp || f && f.smoothChildTiming) && (a._start += u / a._ts,
                    a._time -= u,
                    a._tTime -= u),
                    a.shiftChildren(-u, !1, -1 / 0),
                    c = 0),
                    o._end > r && o._ts && (r = o._end),
                    o = l;
                as(a, a === ot && a._time > r ? a._time : r, 1, 1),
                a._dirty = 0
            }
            return a._tDur
        }
        ,
        e.updateRoot = function(i) {
            if (ot._ts && ($f(ot, ta(i, ot)),
            Xf = hn.frame),
            hn.frame >= qf) {
                qf += cn.autoSleep || 120;
                var r = ot._first;
                if ((!r || !r._ts) && cn.autoSleep && hn._listeners.length < 2) {
                    for (; r && !r._ts; )
                        r = r._next;
                    r || hn.sleep()
                }
            }
        }
        ,
        e
    }(Ys);
    yn(Qt.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
    });
    var cv = function(e, t, n, i, r, a, o) {
        var c = new en(this._pt,e,t,0,1,Th,null,r), l = 0, u = 0, f, h, m, g, d, p, _, y;
        for (c.b = n,
        c.e = i,
        n += "",
        i += "",
        (_ = ~i.indexOf("random(")) && (i = Hs(i)),
        a && (y = [n, i],
        a(y, e, t),
        n = y[0],
        i = y[1]),
        h = n.match(Ol) || []; f = Ol.exec(i); )
            g = f[0],
            d = i.substring(l, f.index),
            m ? m = (m + 1) % 5 : d.substr(-5) === "rgba(" && (m = 1),
            g !== h[u++] && (p = parseFloat(h[u - 1]) || 0,
            c._pt = {
                _next: c._pt,
                p: d || u === 1 ? d : ",",
                s: p,
                c: g.charAt(1) === "=" ? ss(p, g) - p : parseFloat(g) - p,
                m: m && m < 4 ? Math.round : 0
            },
            l = Ol.lastIndex);
        return c.c = l < i.length ? i.substring(l, i.length) : "",
        c.fp = o,
        (Bf.test(i) || _) && (c.e = 0),
        this._pt = c,
        c
    }, Jl = function(e, t, n, i, r, a, o, c, l) {
        Tt(i) && (i = i(r || 0, e, a));
        var u = e[t], f = n !== "get" ? n : Tt(u) ? l ? e[t.indexOf("set") || !Tt(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](l) : e[t]() : u, h = Tt(u) ? l ? pv : Sh : tc, m;
        if (wt(i) && (~i.indexOf("random(") && (i = Hs(i)),
        i.charAt(1) === "=" && (m = ss(f, i) + (Ut(f) || 0),
        (m || m === 0) && (i = m))),
        f !== i || Ql)
            return !isNaN(f * i) && i !== "" ? (m = new en(this._pt,e,t,+f || 0,i - (f || 0),typeof u == "boolean" ? gv : wh,0,h),
            l && (m.fp = l),
            o && m.modifier(o, this, e),
            this._pt = m) : (!u && !(t in e) && kl(t, i),
            cv.call(this, e, t, f, i, h, c || cn.stringFilter, l))
    }, uv = function(e, t, n, i, r) {
        if (Tt(e) && (e = $s(e, r, t, n, i)),
        !hi(e) || e.style && e.nodeType || Ot(e) || Uf(e))
            return wt(e) ? $s(e, r, t, n, i) : e;
        var a = {}, o;
        for (o in e)
            a[o] = $s(e[o], r, t, n, i);
        return a
    }, yh = function(e, t, n, i, r, a) {
        var o, c, l, u;
        if (fn[e] && (o = new fn[e]).init(r, o.rawVars ? t[e] : uv(t[e], i, r, a, n), n, i, a) !== !1 && (n._pt = c = new en(n._pt,r,e,0,1,o.render,o,0,o.priority),
        n !== ls))
            for (l = n._ptLookup[n._targets.indexOf(r)],
            u = o._props.length; u--; )
                l[o._props[u]] = c;
        return o
    }, Ri, Ql, ec = function s(e, t) {
        var n = e.vars, i = n.ease, r = n.startAt, a = n.immediateRender, o = n.lazy, c = n.onUpdate, l = n.onUpdateParams, u = n.callbackScope, f = n.runBackwards, h = n.yoyoEase, m = n.keyframes, g = n.autoRevert, d = e._dur, p = e._startAt, _ = e._targets, y = e.parent, M = y && y.data === "nested" ? y.parent._targets : _, x = e._overwrite === "auto" && !Rl, b = e.timeline, S, A, v, w, L, F, V, K, R, U, z, W, X;
        if (b && (!m || !i) && (i = "none"),
        e._ease = ur(i, is.ease),
        e._yEase = h ? gh(ur(h === !0 ? i : h, is.ease)) : 0,
        h && e._yoyo && !e._repeat && (h = e._yEase,
        e._yEase = e._ease,
        e._ease = h),
        e._from = !b && !!n.runBackwards,
        !b || m && !n.stagger) {
            if (K = _[0] ? ar(_[0]).harness : 0,
            W = K && n[K.prop],
            S = Qo(n, Bl),
            p && (di(p.render(-1, !0)),
            p._lazy = 0),
            r)
                if (di(e._startAt = Et.set(_, yn({
                    data: "isStart",
                    overwrite: !1,
                    parent: y,
                    immediateRender: !0,
                    lazy: Kt(o),
                    startAt: null,
                    delay: 0,
                    onUpdate: c,
                    onUpdateParams: l,
                    callbackScope: u,
                    stagger: 0
                }, r))),
                t < 0 && !a && !g && e._startAt.render(-1, !0),
                a) {
                    if (t > 0 && !g && (e._startAt = 0),
                    d && t <= 0) {
                        t && (e._zTime = t);
                        return
                    }
                } else
                    g === !1 && (e._startAt = 0);
            else if (f && d) {
                if (p)
                    !g && (e._startAt = 0);
                else if (t && (a = !1),
                v = yn({
                    overwrite: !1,
                    data: "isFromStart",
                    lazy: a && Kt(o),
                    immediateRender: a,
                    stagger: 0,
                    parent: y
                }, S),
                W && (v[K.prop] = W),
                di(e._startAt = Et.set(_, v)),
                t < 0 && e._startAt.render(-1, !0),
                e._zTime = t,
                !a)
                    s(e._startAt, nt);
                else if (!t)
                    return
            }
            for (e._pt = e._ptCache = 0,
            o = d && Kt(o) || o && !d,
            A = 0; A < _.length; A++) {
                if (L = _[A],
                V = L._gsap || Wl(_)[A]._gsap,
                e._ptLookup[A] = U = {},
                Gl[V.id] && Pi.length && Jo(),
                z = M === _ ? A : M.indexOf(L),
                K && (R = new K).init(L, W || S, e, z, M) !== !1 && (e._pt = w = new en(e._pt,L,R.name,0,1,R.render,R,0,R.priority),
                R._props.forEach(function(G) {
                    U[G] = w
                }),
                R.priority && (F = 1)),
                !K || W)
                    for (v in S)
                        fn[v] && (R = yh(v, S, e, z, L, M)) ? R.priority && (F = 1) : U[v] = w = Jl.call(e, L, v, "get", S[v], z, M, 0, n.stringFilter);
                e._op && e._op[A] && e.kill(L, e._op[A]),
                x && e._pt && (Ri = e,
                ot.killTweensOf(L, U, e.globalTime(t)),
                X = !e.parent,
                Ri = 0),
                e._pt && o && (Gl[V.id] = 1)
            }
            F && Eh(e),
            e._onInit && e._onInit(e)
        }
        e._onUpdate = c,
        e._initted = (!e._op || e._pt) && !X,
        m && t <= 0 && b.render(vn, !0, !0)
    }, fv = function(e, t, n, i, r, a, o) {
        var c = (e._pt && e._ptCache || (e._ptCache = {}))[t], l, u, f;
        if (!c)
            for (c = e._ptCache[t] = [],
            u = e._ptLookup,
            f = e._targets.length; f--; ) {
                if (l = u[f][t],
                l && l.d && l.d._pt)
                    for (l = l.d._pt; l && l.p !== t; )
                        l = l._next;
                if (!l)
                    return Ql = 1,
                    e.vars[t] = "+=0",
                    ec(e, o),
                    Ql = 0,
                    1;
                c.push(l)
            }
        for (f = c.length; f--; )
            l = c[f],
            l.s = (i || i === 0) && !r ? i : l.s + (i || 0) + a * l.c,
            l.c = n - l.s,
            l.e && (l.e = dt(n) + Ut(l.e)),
            l.b && (l.b = l.s + Ut(l.b))
    }, hv = function(e, t) {
        var n = e[0] ? ar(e[0]).harness : 0, i = n && n.aliases, r, a, o, c;
        if (!i)
            return t;
        r = lr({}, t);
        for (a in i)
            if (a in r)
                for (c = i[a].split(","),
                o = c.length; o--; )
                    r[c[o]] = r[a];
        return r
    }, dv = function(e, t, n, i) {
        var r = t.ease || i || "power1.inOut", a, o;
        if (Ot(t))
            o = n[e] || (n[e] = []),
            t.forEach(function(c, l) {
                return o.push({
                    t: l / (t.length - 1) * 100,
                    v: c,
                    e: r
                })
            });
        else
            for (a in t)
                o = n[a] || (n[a] = []),
                a === "ease" || o.push({
                    t: parseFloat(e),
                    v: t[a],
                    e: r
                })
    }, $s = function(e, t, n, i, r) {
        return Tt(e) ? e.call(t, n, i, r) : wt(e) && ~e.indexOf("random(") ? Hs(e) : e
    }, bh = Hl + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", Mh = {};
    Jt(bh + ",id,stagger,delay,duration,paused,scrollTrigger", function(s) {
        return Mh[s] = 1
    });
    var Et = function(s) {
        zf(e, s);
        function e(n, i, r, a) {
            var o;
            typeof i == "number" && (r.duration = i,
            i = r,
            r = null),
            o = s.call(this, a ? i : Bs(i)) || this;
            var c = o.vars, l = c.duration, u = c.delay, f = c.immediateRender, h = c.stagger, m = c.overwrite, g = c.keyframes, d = c.defaults, p = c.scrollTrigger, _ = c.yoyoEase, y = i.parent || ot, M = (Ot(n) || Uf(n) ? fi(n[0]) : "length"in i) ? [n] : Mn(n), x, b, S, A, v, w, L, F;
            if (o._targets = M.length ? Wl(M) : Zo("GSAP target " + n + " not found. https://greensock.com", !cn.nullTargetWarn) || [],
            o._ptLookup = [],
            o._overwrite = m,
            g || h || $o(l) || $o(u)) {
                if (i = o.vars,
                x = o.timeline = new Qt({
                    data: "nested",
                    defaults: d || {}
                }),
                x.kill(),
                x.parent = x._dp = ui(o),
                x._start = 0,
                h || $o(l) || $o(u)) {
                    if (A = M.length,
                    L = h && oh(h),
                    hi(h))
                        for (v in h)
                            ~bh.indexOf(v) && (F || (F = {}),
                            F[v] = h[v]);
                    for (b = 0; b < A; b++)
                        S = Qo(i, Mh),
                        S.stagger = 0,
                        _ && (S.yoyoEase = _),
                        F && lr(S, F),
                        w = M[b],
                        S.duration = +$s(l, ui(o), b, w, M),
                        S.delay = (+$s(u, ui(o), b, w, M) || 0) - o._delay,
                        !h && A === 1 && S.delay && (o._delay = u = S.delay,
                        o._start += u,
                        S.delay = 0),
                        x.to(w, S, L ? L(b, w, M) : 0),
                        x._ease = He.none;
                    x.duration() ? l = u = 0 : o.timeline = 0
                } else if (g) {
                    Bs(yn(x.vars.defaults, {
                        ease: "none"
                    })),
                    x._ease = ur(g.ease || i.ease || "none");
                    var V = 0, K, R, U;
                    if (Ot(g))
                        g.forEach(function(z) {
                            return x.to(M, z, ">")
                        });
                    else {
                        S = {};
                        for (v in g)
                            v === "ease" || v === "easeEach" || dv(v, g[v], S, g.easeEach);
                        for (v in S)
                            for (K = S[v].sort(function(z, W) {
                                return z.t - W.t
                            }),
                            V = 0,
                            b = 0; b < K.length; b++)
                                R = K[b],
                                U = {
                                    ease: R.e,
                                    duration: (R.t - (b ? K[b - 1].t : 0)) / 100 * l
                                },
                                U[v] = R.v,
                                x.to(M, U, V),
                                V += U.duration;
                        x.duration() < l && x.to({}, {
                            duration: l - x.duration()
                        })
                    }
                }
                l || o.duration(l = x.duration())
            } else
                o.timeline = 0;
            return m === !0 && !Rl && (Ri = ui(o),
            ot.killTweensOf(M),
            Ri = 0),
            Zn(y, ui(o), r),
            i.reversed && o.reverse(),
            i.paused && o.paused(!0),
            (f || !l && !g && o._start === Nt(y._time) && Kt(f) && Vx(ui(o)) && y.data !== "nested") && (o._tTime = -nt,
            o.render(Math.max(0, -u))),
            p && th(ui(o), p),
            o
        }
        var t = e.prototype;
        return t.render = function(i, r, a) {
            var o = this._time, c = this._tDur, l = this._dur, u = i > c - nt && i >= 0 ? c : i < nt ? 0 : i, f, h, m, g, d, p, _, y, M;
            if (!l)
                Wx(this, i, r, a);
            else if (u !== this._tTime || !i || a || !this._initted && this._tTime || this._startAt && this._zTime < 0 != i < 0) {
                if (f = u,
                y = this.timeline,
                this._repeat) {
                    if (g = l + this._rDelay,
                    this._repeat < -1 && i < 0)
                        return this.totalTime(g * 100 + i, r, a);
                    if (f = Nt(u % g),
                    u === c ? (m = this._repeat,
                    f = l) : (m = ~~(u / g),
                    m && m === u / g && (f = l,
                    m--),
                    f > l && (f = l)),
                    p = this._yoyo && m & 1,
                    p && (M = this._yEase,
                    f = l - f),
                    d = os(this._tTime, g),
                    f === o && !a && this._initted)
                        return this._tTime = u,
                        this;
                    m !== d && (y && this._yEase && _h(y, p),
                    this.vars.repeatRefresh && !p && !this._lock && (this._lock = a = 1,
                    this.render(Nt(g * m), !0).invalidate()._lock = 0))
                }
                if (!this._initted) {
                    if (nh(this, i < 0 ? i : f, a, r))
                        return this._tTime = 0,
                        this;
                    if (o !== this._time)
                        return this;
                    if (l !== this._dur)
                        return this.render(i, r, a)
                }
                if (this._tTime = u,
                this._time = f,
                !this._act && this._ts && (this._act = 1,
                this._lazy = 0),
                this.ratio = _ = (M || this._ease)(f / l),
                this._from && (this.ratio = _ = 1 - _),
                f && !o && !r && (Sn(this, "onStart"),
                this._tTime !== u))
                    return this;
                for (h = this._pt; h; )
                    h.r(_, h.d),
                    h = h._next;
                y && y.render(i < 0 ? i : !f && p ? -nt : y._dur * y._ease(f / this._dur), r, a) || this._startAt && (this._zTime = i),
                this._onUpdate && !r && (i < 0 && this._startAt && this._startAt.render(i, !0, a),
                Sn(this, "onUpdate")),
                this._repeat && m !== d && this.vars.onRepeat && !r && this.parent && Sn(this, "onRepeat"),
                (u === this._tDur || !u) && this._tTime === u && (i < 0 && this._startAt && !this._onUpdate && this._startAt.render(i, !0, !0),
                (i || !l) && (u === this._tDur && this._ts > 0 || !u && this._ts < 0) && di(this, 1),
                !r && !(i < 0 && !o) && (u || o) && (Sn(this, u === c ? "onComplete" : "onReverseComplete", !0),
                this._prom && !(u < c && this.timeScale() > 0) && this._prom()))
            }
            return this
        }
        ,
        t.targets = function() {
            return this._targets
        }
        ,
        t.invalidate = function() {
            return this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0,
            this._ptLookup = [],
            this.timeline && this.timeline.invalidate(),
            s.prototype.invalidate.call(this)
        }
        ,
        t.resetTo = function(i, r, a, o) {
            qs || hn.wake(),
            this._ts || this.play();
            var c = Math.min(this._dur, (this._dp._time - this._start) * this._ts), l;
            return this._initted || ec(this, c),
            l = this._ease(c / this._dur),
            fv(this, i, r, a, o, l, c) ? this.resetTo(i, r, a, o) : (Xl(this, 0),
            this.parent || Jf(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0),
            this.render(0))
        }
        ,
        t.kill = function(i, r) {
            if (r === void 0 && (r = "all"),
            !i && (!r || r === "all"))
                return this._lazy = this._pt = 0,
                this.parent ? Ws(this) : this;
            if (this.timeline) {
                var a = this.timeline.totalDuration();
                return this.timeline.killTweensOf(i, r, Ri && Ri.vars.overwrite !== !0)._first || Ws(this),
                this.parent && a !== this.timeline.totalDuration() && as(this, this._dur * this.timeline._tDur / a, 0, 1),
                this
            }
            var o = this._targets, c = i ? Mn(i) : o, l = this._ptLookup, u = this._pt, f, h, m, g, d, p, _;
            if ((!r || r === "all") && Bx(o, c))
                return r === "all" && (this._pt = 0),
                Ws(this);
            for (f = this._op = this._op || [],
            r !== "all" && (wt(r) && (d = {},
            Jt(r, function(y) {
                return d[y] = 1
            }),
            r = d),
            r = hv(o, r)),
            _ = o.length; _--; )
                if (~c.indexOf(o[_])) {
                    h = l[_],
                    r === "all" ? (f[_] = r,
                    g = h,
                    m = {}) : (m = f[_] = f[_] || {},
                    g = r);
                    for (d in g)
                        p = h && h[d],
                        p && ((!("kill"in p.d) || p.d.kill(d) === !0) && ea(this, p, "_pt"),
                        delete h[d]),
                        m !== "all" && (m[d] = 1)
                }
            return this._initted && !this._pt && u && Ws(this),
            this
        }
        ,
        e.to = function(i, r) {
            return new e(i,r,arguments[2])
        }
        ,
        e.from = function(i, r) {
            return Gs(1, arguments)
        }
        ,
        e.delayedCall = function(i, r, a, o) {
            return new e(r,0,{
                immediateRender: !1,
                lazy: !1,
                overwrite: !1,
                delay: i,
                onComplete: r,
                onReverseComplete: r,
                onCompleteParams: a,
                onReverseCompleteParams: a,
                callbackScope: o
            })
        }
        ,
        e.fromTo = function(i, r, a) {
            return Gs(2, arguments)
        }
        ,
        e.set = function(i, r) {
            return r.duration = 0,
            r.repeatDelay || (r.repeat = 0),
            new e(i,r)
        }
        ,
        e.killTweensOf = function(i, r, a) {
            return ot.killTweensOf(i, r, a)
        }
        ,
        e
    }(Ys);
    yn(Et.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
    }),
    Jt("staggerTo,staggerFrom,staggerFromTo", function(s) {
        Et[s] = function() {
            var e = new Qt
              , t = Yl.call(arguments, 0);
            return t.splice(s === "staggerFromTo" ? 5 : 4, 0, 0),
            e[s].apply(e, t)
        }
    });
    var tc = function(e, t, n) {
        return e[t] = n
    }
      , Sh = function(e, t, n) {
        return e[t](n)
    }
      , pv = function(e, t, n, i) {
        return e[t](i.fp, n)
    }
      , mv = function(e, t, n) {
        return e.setAttribute(t, n)
    }
      , nc = function(e, t) {
        return Tt(e[t]) ? Sh : Fl(e[t]) && e.setAttribute ? mv : tc
    }
      , wh = function(e, t) {
        return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t)
    }
      , gv = function(e, t) {
        return t.set(t.t, t.p, !!(t.s + t.c * e), t)
    }
      , Th = function(e, t) {
        var n = t._pt
          , i = "";
        if (!e && t.b)
            i = t.b;
        else if (e === 1 && t.e)
            i = t.e;
        else {
            for (; n; )
                i = n.p + (n.m ? n.m(n.s + n.c * e) : Math.round((n.s + n.c * e) * 1e4) / 1e4) + i,
                n = n._next;
            i += t.c
        }
        t.set(t.t, t.p, i, t)
    }
      , ic = function(e, t) {
        for (var n = t._pt; n; )
            n.r(e, n.d),
            n = n._next
    }
      , _v = function(e, t, n, i) {
        for (var r = this._pt, a; r; )
            a = r._next,
            r.p === i && r.modifier(e, t, n),
            r = a
    }
      , xv = function(e) {
        for (var t = this._pt, n, i; t; )
            i = t._next,
            t.p === e && !t.op || t.op === e ? ea(this, t, "_pt") : t.dep || (n = 1),
            t = i;
        return !n
    }
      , vv = function(e, t, n, i) {
        i.mSet(e, t, i.m.call(i.tween, n, i.mt), i)
    }
      , Eh = function(e) {
        for (var t = e._pt, n, i, r, a; t; ) {
            for (n = t._next,
            i = r; i && i.pr > t.pr; )
                i = i._next;
            (t._prev = i ? i._prev : a) ? t._prev._next = t : r = t,
            (t._next = i) ? i._prev = t : a = t,
            t = n
        }
        e._pt = r
    }
      , en = function() {
        function s(t, n, i, r, a, o, c, l, u) {
            this.t = n,
            this.s = r,
            this.c = a,
            this.p = i,
            this.r = o || wh,
            this.d = c || this,
            this.set = l || tc,
            this.pr = u || 0,
            this._next = t,
            t && (t._prev = this)
        }
        var e = s.prototype;
        return e.modifier = function(n, i, r) {
            this.mSet = this.mSet || this.set,
            this.set = vv,
            this.m = n,
            this.mt = r,
            this.tween = i
        }
        ,
        s
    }();
    Jt(Hl + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(s) {
        return Bl[s] = 1
    }),
    un.TweenMax = un.TweenLite = Et,
    un.TimelineLite = un.TimelineMax = Qt,
    ot = new Qt({
        sortChildren: !1,
        defaults: is,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
    }),
    cn.stringFilter = mh;
    var ia = {
        registerPlugin: function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            t.forEach(function(i) {
                return nv(i)
            })
        },
        timeline: function(e) {
            return new Qt(e)
        },
        getTweensOf: function(e, t) {
            return ot.getTweensOf(e, t)
        },
        getProperty: function(e, t, n, i) {
            wt(e) && (e = Mn(e)[0]);
            var r = ar(e || {}).get
              , a = n ? Zf : jf;
            return n === "native" && (n = ""),
            e && (t ? a((fn[t] && fn[t].get || r)(e, t, n, i)) : function(o, c, l) {
                return a((fn[o] && fn[o].get || r)(e, o, c, l))
            }
            )
        },
        quickSetter: function(e, t, n) {
            if (e = Mn(e),
            e.length > 1) {
                var i = e.map(function(u) {
                    return Vn.quickSetter(u, t, n)
                })
                  , r = i.length;
                return function(u) {
                    for (var f = r; f--; )
                        i[f](u)
                }
            }
            e = e[0] || {};
            var a = fn[t]
              , o = ar(e)
              , c = o.harness && (o.harness.aliases || {})[t] || t
              , l = a ? function(u) {
                var f = new a;
                ls._pt = 0,
                f.init(e, n ? u + n : u, ls, 0, [e]),
                f.render(1, f),
                ls._pt && ic(1, ls)
            }
            : o.set(e, c);
            return a ? l : function(u) {
                return l(e, c, n ? u + n : u, o, 1)
            }
        },
        quickTo: function(e, t, n) {
            var i, r = Vn.to(e, lr((i = {},
            i[t] = "+=0.1",
            i.paused = !0,
            i), n || {})), a = function(c, l, u) {
                return r.resetTo(t, c, l, u)
            };
            return a.tween = r,
            a
        },
        isTweening: function(e) {
            return ot.getTweensOf(e, !0).length > 0
        },
        defaults: function(e) {
            return e && e.ease && (e.ease = ur(e.ease, is.ease)),
            Kf(is, e || {})
        },
        config: function(e) {
            return Kf(cn, e || {})
        },
        registerEffect: function(e) {
            var t = e.name
              , n = e.effect
              , i = e.plugins
              , r = e.defaults
              , a = e.extendTimeline;
            (i || "").split(",").forEach(function(o) {
                return o && !fn[o] && !un[o] && Zo(t + " effect requires " + o + " plugin.")
            }),
            Vl[t] = function(o, c, l) {
                return n(Mn(o), yn(c || {}, r), l)
            }
            ,
            a && (Qt.prototype[t] = function(o, c, l) {
                return this.add(Vl[t](o, hi(c) ? c : (l = c) && {}, this), l)
            }
            )
        },
        registerEase: function(e, t) {
            He[e] = ur(t)
        },
        parseEase: function(e, t) {
            return arguments.length ? ur(e, t) : He
        },
        getById: function(e) {
            return ot.getById(e)
        },
        exportRoot: function(e, t) {
            e === void 0 && (e = {});
            var n = new Qt(e), i, r;
            for (n.smoothChildTiming = Kt(e.smoothChildTiming),
            ot.remove(n),
            n._dp = 0,
            n._time = n._tTime = ot._time,
            i = ot._first; i; )
                r = i._next,
                (t || !(!i._dur && i instanceof Et && i.vars.onComplete === i._targets[0])) && Zn(n, i, i._start - i._delay),
                i = r;
            return Zn(ot, n, 0),
            n
        },
        utils: {
            wrap: Qx,
            wrapYoyo: ev,
            distribute: oh,
            random: lh,
            snap: ah,
            normalize: Jx,
            getUnit: Ut,
            clamp: Yx,
            splitColor: hh,
            toArray: Mn,
            selector: jx,
            mapRange: uh,
            pipe: Zx,
            unitize: Kx,
            interpolate: tv,
            shuffle: sh
        },
        install: Hf,
        effects: Vl,
        ticker: hn,
        updateRoot: Qt.updateRoot,
        plugins: fn,
        globalTimeline: ot,
        core: {
            PropTween: en,
            globals: Wf,
            Tween: Et,
            Timeline: Qt,
            Animation: Ys,
            getCache: ar,
            _removeLinkedListItem: ea,
            suppressOverwrites: function(e) {
                return Rl = e
            }
        }
    };
    Jt("to,from,fromTo,delayedCall,set,killTweensOf", function(s) {
        return ia[s] = Et[s]
    }),
    hn.add(Qt.updateRoot),
    ls = ia.to({}, {
        duration: 0
    });
    var yv = function(e, t) {
        for (var n = e._pt; n && n.p !== t && n.op !== t && n.fp !== t; )
            n = n._next;
        return n
    }
      , bv = function(e, t) {
        var n = e._targets, i, r, a;
        for (i in t)
            for (r = n.length; r--; )
                a = e._ptLookup[r][i],
                a && (a = a.d) && (a._pt && (a = yv(a, i)),
                a && a.modifier && a.modifier(t[i], e, n[r], i))
    }
      , rc = function(e, t) {
        return {
            name: e,
            rawVars: 1,
            init: function(i, r, a) {
                a._onInit = function(o) {
                    var c, l;
                    if (wt(r) && (c = {},
                    Jt(r, function(u) {
                        return c[u] = 1
                    }),
                    r = c),
                    t) {
                        c = {};
                        for (l in r)
                            c[l] = t(r[l]);
                        r = c
                    }
                    bv(o, r)
                }
            }
        }
    }
      , Vn = ia.registerPlugin({
        name: "attr",
        init: function(e, t, n, i, r) {
            var a, o;
            for (a in t)
                o = this.add(e, "setAttribute", (e.getAttribute(a) || 0) + "", t[a], i, r, 0, 0, a),
                o && (o.op = a),
                this._props.push(a)
        }
    }, {
        name: "endArray",
        init: function(e, t) {
            for (var n = t.length; n--; )
                this.add(e, n, e[n] || 0, t[n])
        }
    }, rc("roundProps", $l), rc("modifiers"), rc("snap", ah)) || ia;
    Et.version = Qt.version = Vn.version = "3.10.4",
    Vf = 1,
    Nf() && cs(),
    He.Power0,
    He.Power1;
    var hr = He.Power2;
    He.Power3,
    He.Power4,
    He.Linear,
    He.Quad,
    He.Cubic,
    He.Quart,
    He.Quint,
    He.Strong,
    He.Elastic,
    He.Back,
    He.SteppedEase,
    He.Bounce;
    var Ii = He.Sine;
    He.Expo,
    He.Circ;
    /*!
 * CSSPlugin 3.10.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
    var Ch, Fi, us, sc, dr, Ah, Mv = function() {
        return typeof window != "undefined"
    }, zi = {}, pr = 180 / Math.PI, fs = Math.PI / 180, hs = Math.atan2, Ph = 1e8, Dh = /([A-Z])/g, Sv = /(left|right|width|margin|padding|x)/i, wv = /[\s,\(]\S/, Oi = {
        autoAlpha: "opacity,visibility",
        scale: "scaleX,scaleY",
        alpha: "opacity"
    }, Lh = function(e, t) {
        return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t)
    }, Tv = function(e, t) {
        return t.set(t.t, t.p, e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t)
    }, Ev = function(e, t) {
        return t.set(t.t, t.p, e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t)
    }, Cv = function(e, t) {
        var n = t.s + t.c * e;
        t.set(t.t, t.p, ~~(n + (n < 0 ? -.5 : .5)) + t.u, t)
    }, Rh = function(e, t) {
        return t.set(t.t, t.p, e ? t.e : t.b, t)
    }, Ih = function(e, t) {
        return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t)
    }, Av = function(e, t, n) {
        return e.style[t] = n
    }, Pv = function(e, t, n) {
        return e.style.setProperty(t, n)
    }, Dv = function(e, t, n) {
        return e._gsap[t] = n
    }, Lv = function(e, t, n) {
        return e._gsap.scaleX = e._gsap.scaleY = n
    }, Rv = function(e, t, n, i, r) {
        var a = e._gsap;
        a.scaleX = a.scaleY = n,
        a.renderTransform(r, a)
    }, Iv = function(e, t, n, i, r) {
        var a = e._gsap;
        a[t] = n,
        a.renderTransform(r, a)
    }, Lt = "transform", Ni = Lt + "Origin", Fh, oc = function(e, t) {
        var n = Fi.createElementNS ? Fi.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : Fi.createElement(e);
        return n.style ? n : Fi.createElement(e)
    }, pi = function s(e, t, n) {
        var i = getComputedStyle(e);
        return i[t] || i.getPropertyValue(t.replace(Dh, "-$1").toLowerCase()) || i.getPropertyValue(t) || !n && s(e, ds(t) || t, 1) || ""
    }, zh = "O,Moz,ms,Ms,Webkit".split(","), ds = function(e, t, n) {
        var i = t || dr
          , r = i.style
          , a = 5;
        if (e in r && !n)
            return e;
        for (e = e.charAt(0).toUpperCase() + e.substr(1); a-- && !(zh[a] + e in r); )
            ;
        return a < 0 ? null : (a === 3 ? "ms" : a >= 0 ? zh[a] : "") + e
    }, ac = function() {
        Mv() && window.document && (Ch = window,
        Fi = Ch.document,
        us = Fi.documentElement,
        dr = oc("div") || {
            style: {}
        },
        oc("div"),
        Lt = ds(Lt),
        Ni = Lt + "Origin",
        dr.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0",
        Fh = !!ds("perspective"),
        sc = 1)
    }, lc = function s(e) {
        var t = oc("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), n = this.parentNode, i = this.nextSibling, r = this.style.cssText, a;
        if (us.appendChild(t),
        t.appendChild(this),
        this.style.display = "block",
        e)
            try {
                a = this.getBBox(),
                this._gsapBBox = this.getBBox,
                this.getBBox = s
            } catch {}
        else
            this._gsapBBox && (a = this._gsapBBox());
        return n && (i ? n.insertBefore(this, i) : n.appendChild(this)),
        us.removeChild(t),
        this.style.cssText = r,
        a
    }, Oh = function(e, t) {
        for (var n = t.length; n--; )
            if (e.hasAttribute(t[n]))
                return e.getAttribute(t[n])
    }, Nh = function(e) {
        var t;
        try {
            t = e.getBBox()
        } catch {
            t = lc.call(e, !0)
        }
        return t && (t.width || t.height) || e.getBBox === lc || (t = lc.call(e, !0)),
        t && !t.width && !t.x && !t.y ? {
            x: +Oh(e, ["x", "cx", "x1"]) || 0,
            y: +Oh(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
        } : t
    }, Uh = function(e) {
        return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && Nh(e))
    }, js = function(e, t) {
        if (t) {
            var n = e.style;
            t in zi && t !== Ni && (t = Lt),
            n.removeProperty ? ((t.substr(0, 2) === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t),
            n.removeProperty(t.replace(Dh, "-$1").toLowerCase())) : n.removeAttribute(t)
        }
    }, Ui = function(e, t, n, i, r, a) {
        var o = new en(e._pt,t,n,0,1,a ? Ih : Rh);
        return e._pt = o,
        o.b = i,
        o.e = r,
        e._props.push(n),
        o
    }, kh = {
        deg: 1,
        rad: 1,
        turn: 1
    }, ki = function s(e, t, n, i) {
        var r = parseFloat(n) || 0, a = (n + "").trim().substr((r + "").length) || "px", o = dr.style, c = Sv.test(t), l = e.tagName.toLowerCase() === "svg", u = (l ? "client" : "offset") + (c ? "Width" : "Height"), f = 100, h = i === "px", m = i === "%", g, d, p, _;
        return i === a || !r || kh[i] || kh[a] ? r : (a !== "px" && !h && (r = s(e, t, n, "px")),
        _ = e.getCTM && Uh(e),
        (m || a === "%") && (zi[t] || ~t.indexOf("adius")) ? (g = _ ? e.getBBox()[c ? "width" : "height"] : e[u],
        dt(m ? r / g * f : r / 100 * g)) : (o[c ? "width" : "height"] = f + (h ? a : i),
        d = ~t.indexOf("adius") || i === "em" && e.appendChild && !l ? e : e.parentNode,
        _ && (d = (e.ownerSVGElement || {}).parentNode),
        (!d || d === Fi || !d.appendChild) && (d = Fi.body),
        p = d._gsap,
        p && m && p.width && c && p.time === hn.time ? dt(r / p.width * f) : ((m || a === "%") && (o.position = pi(e, "position")),
        d === e && (o.position = "static"),
        d.appendChild(dr),
        g = dr[u],
        d.removeChild(dr),
        o.position = "absolute",
        c && m && (p = ar(d),
        p.time = hn.time,
        p.width = d[u]),
        dt(h ? g * r / f : g && r ? f / g * r : 0))))
    }, mr = function(e, t, n, i) {
        var r;
        return sc || ac(),
        t in Oi && t !== "transform" && (t = Oi[t],
        ~t.indexOf(",") && (t = t.split(",")[0])),
        zi[t] && t !== "transform" ? (r = Ks(e, i),
        r = t !== "transformOrigin" ? r[t] : r.svg ? r.origin : sa(pi(e, Ni)) + " " + r.zOrigin + "px") : (r = e.style[t],
        (!r || r === "auto" || i || ~(r + "").indexOf("calc(")) && (r = ra[t] && ra[t](e, t, n) || pi(e, t) || Yf(e, t) || (t === "opacity" ? 1 : 0))),
        n && !~(r + "").trim().indexOf(" ") ? ki(e, t, r, n) + n : r
    }, Fv = function(e, t, n, i) {
        if (!n || n === "none") {
            var r = ds(t, e, 1)
              , a = r && pi(e, r, 1);
            a && a !== n ? (t = r,
            n = a) : t === "borderColor" && (n = pi(e, "borderTopColor"))
        }
        var o = new en(this._pt,e.style,t,0,1,Th), c = 0, l = 0, u, f, h, m, g, d, p, _, y, M, x, b;
        if (o.b = n,
        o.e = i,
        n += "",
        i += "",
        i === "auto" && (e.style[t] = i,
        i = pi(e, t) || i,
        e.style[t] = n),
        u = [n, i],
        mh(u),
        n = u[0],
        i = u[1],
        h = n.match(rs) || [],
        b = i.match(rs) || [],
        b.length) {
            for (; f = rs.exec(i); )
                p = f[0],
                y = i.substring(c, f.index),
                g ? g = (g + 1) % 5 : (y.substr(-5) === "rgba(" || y.substr(-5) === "hsla(") && (g = 1),
                p !== (d = h[l++] || "") && (m = parseFloat(d) || 0,
                x = d.substr((m + "").length),
                p.charAt(1) === "=" && (p = ss(m, p) + x),
                _ = parseFloat(p),
                M = p.substr((_ + "").length),
                c = rs.lastIndex - M.length,
                M || (M = M || cn.units[t] || x,
                c === i.length && (i += M,
                o.e += M)),
                x !== M && (m = ki(e, t, d, M) || 0),
                o._pt = {
                    _next: o._pt,
                    p: y || l === 1 ? y : ",",
                    s: m,
                    c: _ - m,
                    m: g && g < 4 || t === "zIndex" ? Math.round : 0
                });
            o.c = c < i.length ? i.substring(c, i.length) : ""
        } else
            o.r = t === "display" && i === "none" ? Ih : Rh;
        return Bf.test(i) && (o.e = 0),
        this._pt = o,
        o
    }, Bh = {
        top: "0%",
        bottom: "100%",
        left: "0%",
        right: "100%",
        center: "50%"
    }, zv = function(e) {
        var t = e.split(" ")
          , n = t[0]
          , i = t[1] || "50%";
        return (n === "top" || n === "bottom" || i === "left" || i === "right") && (e = n,
        n = i,
        i = e),
        t[0] = Bh[n] || n,
        t[1] = Bh[i] || i,
        t.join(" ")
    }, Ov = function(e, t) {
        if (t.tween && t.tween._time === t.tween._dur) {
            var n = t.t, i = n.style, r = t.u, a = n._gsap, o, c, l;
            if (r === "all" || r === !0)
                i.cssText = "",
                c = 1;
            else
                for (r = r.split(","),
                l = r.length; --l > -1; )
                    o = r[l],
                    zi[o] && (c = 1,
                    o = o === "transformOrigin" ? Ni : Lt),
                    js(n, o);
            c && (js(n, Lt),
            a && (a.svg && n.removeAttribute("transform"),
            Ks(n, 1),
            a.uncache = 1))
        }
    }, ra = {
        clearProps: function(e, t, n, i, r) {
            if (r.data !== "isFromStart") {
                var a = e._pt = new en(e._pt,t,n,0,0,Ov);
                return a.u = i,
                a.pr = -10,
                a.tween = r,
                e._props.push(n),
                1
            }
        }
    }, Zs = [1, 0, 0, 1, 0, 0], Gh = {}, Vh = function(e) {
        return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e
    }, Hh = function(e) {
        var t = pi(e, Lt);
        return Vh(t) ? Zs : t.substr(7).match(kf).map(dt)
    }, cc = function(e, t) {
        var n = e._gsap || ar(e), i = e.style, r = Hh(e), a, o, c, l;
        return n.svg && e.getAttribute("transform") ? (c = e.transform.baseVal.consolidate().matrix,
        r = [c.a, c.b, c.c, c.d, c.e, c.f],
        r.join(",") === "1,0,0,1,0,0" ? Zs : r) : (r === Zs && !e.offsetParent && e !== us && !n.svg && (c = i.display,
        i.display = "block",
        a = e.parentNode,
        (!a || !e.offsetParent) && (l = 1,
        o = e.nextSibling,
        us.appendChild(e)),
        r = Hh(e),
        c ? i.display = c : js(e, "display"),
        l && (o ? a.insertBefore(e, o) : a ? a.appendChild(e) : us.removeChild(e))),
        t && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r)
    }, uc = function(e, t, n, i, r, a) {
        var o = e._gsap, c = r || cc(e, !0), l = o.xOrigin || 0, u = o.yOrigin || 0, f = o.xOffset || 0, h = o.yOffset || 0, m = c[0], g = c[1], d = c[2], p = c[3], _ = c[4], y = c[5], M = t.split(" "), x = parseFloat(M[0]) || 0, b = parseFloat(M[1]) || 0, S, A, v, w;
        n ? c !== Zs && (A = m * p - g * d) && (v = x * (p / A) + b * (-d / A) + (d * y - p * _) / A,
        w = x * (-g / A) + b * (m / A) - (m * y - g * _) / A,
        x = v,
        b = w) : (S = Nh(e),
        x = S.x + (~M[0].indexOf("%") ? x / 100 * S.width : x),
        b = S.y + (~(M[1] || M[0]).indexOf("%") ? b / 100 * S.height : b)),
        i || i !== !1 && o.smooth ? (_ = x - l,
        y = b - u,
        o.xOffset = f + (_ * m + y * d) - _,
        o.yOffset = h + (_ * g + y * p) - y) : o.xOffset = o.yOffset = 0,
        o.xOrigin = x,
        o.yOrigin = b,
        o.smooth = !!i,
        o.origin = t,
        o.originIsAbsolute = !!n,
        e.style[Ni] = "0px 0px",
        a && (Ui(a, o, "xOrigin", l, x),
        Ui(a, o, "yOrigin", u, b),
        Ui(a, o, "xOffset", f, o.xOffset),
        Ui(a, o, "yOffset", h, o.yOffset)),
        e.setAttribute("data-svg-origin", x + " " + b)
    }, Ks = function(e, t) {
        var n = e._gsap || new vh(e);
        if ("x"in n && !t && !n.uncache)
            return n;
        var i = e.style, r = n.scaleX < 0, a = "px", o = "deg", c = pi(e, Ni) || "0", l, u, f, h, m, g, d, p, _, y, M, x, b, S, A, v, w, L, F, V, K, R, U, z, W, X, G, P, ee, te, ie, ce;
        return l = u = f = g = d = p = _ = y = M = 0,
        h = m = 1,
        n.svg = !!(e.getCTM && Uh(e)),
        S = cc(e, n.svg),
        n.svg && (z = (!n.uncache || c === "0px 0px") && !t && e.getAttribute("data-svg-origin"),
        uc(e, z || c, !!z || n.originIsAbsolute, n.smooth !== !1, S)),
        x = n.xOrigin || 0,
        b = n.yOrigin || 0,
        S !== Zs && (L = S[0],
        F = S[1],
        V = S[2],
        K = S[3],
        l = R = S[4],
        u = U = S[5],
        S.length === 6 ? (h = Math.sqrt(L * L + F * F),
        m = Math.sqrt(K * K + V * V),
        g = L || F ? hs(F, L) * pr : 0,
        _ = V || K ? hs(V, K) * pr + g : 0,
        _ && (m *= Math.abs(Math.cos(_ * fs))),
        n.svg && (l -= x - (x * L + b * V),
        u -= b - (x * F + b * K))) : (ce = S[6],
        te = S[7],
        G = S[8],
        P = S[9],
        ee = S[10],
        ie = S[11],
        l = S[12],
        u = S[13],
        f = S[14],
        A = hs(ce, ee),
        d = A * pr,
        A && (v = Math.cos(-A),
        w = Math.sin(-A),
        z = R * v + G * w,
        W = U * v + P * w,
        X = ce * v + ee * w,
        G = R * -w + G * v,
        P = U * -w + P * v,
        ee = ce * -w + ee * v,
        ie = te * -w + ie * v,
        R = z,
        U = W,
        ce = X),
        A = hs(-V, ee),
        p = A * pr,
        A && (v = Math.cos(-A),
        w = Math.sin(-A),
        z = L * v - G * w,
        W = F * v - P * w,
        X = V * v - ee * w,
        ie = K * w + ie * v,
        L = z,
        F = W,
        V = X),
        A = hs(F, L),
        g = A * pr,
        A && (v = Math.cos(A),
        w = Math.sin(A),
        z = L * v + F * w,
        W = R * v + U * w,
        F = F * v - L * w,
        U = U * v - R * w,
        L = z,
        R = W),
        d && Math.abs(d) + Math.abs(g) > 359.9 && (d = g = 0,
        p = 180 - p),
        h = dt(Math.sqrt(L * L + F * F + V * V)),
        m = dt(Math.sqrt(U * U + ce * ce)),
        A = hs(R, U),
        _ = Math.abs(A) > 2e-4 ? A * pr : 0,
        M = ie ? 1 / (ie < 0 ? -ie : ie) : 0),
        n.svg && (z = e.getAttribute("transform"),
        n.forceCSS = e.setAttribute("transform", "") || !Vh(pi(e, Lt)),
        z && e.setAttribute("transform", z))),
        Math.abs(_) > 90 && Math.abs(_) < 270 && (r ? (h *= -1,
        _ += g <= 0 ? 180 : -180,
        g += g <= 0 ? 180 : -180) : (m *= -1,
        _ += _ <= 0 ? 180 : -180)),
        t = t || n.uncache,
        n.x = l - ((n.xPercent = l && (!t && n.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-l) ? -50 : 0))) ? e.offsetWidth * n.xPercent / 100 : 0) + a,
        n.y = u - ((n.yPercent = u && (!t && n.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-u) ? -50 : 0))) ? e.offsetHeight * n.yPercent / 100 : 0) + a,
        n.z = f + a,
        n.scaleX = dt(h),
        n.scaleY = dt(m),
        n.rotation = dt(g) + o,
        n.rotationX = dt(d) + o,
        n.rotationY = dt(p) + o,
        n.skewX = _ + o,
        n.skewY = y + o,
        n.transformPerspective = M + a,
        (n.zOrigin = parseFloat(c.split(" ")[2]) || 0) && (i[Ni] = sa(c)),
        n.xOffset = n.yOffset = 0,
        n.force3D = cn.force3D,
        n.renderTransform = n.svg ? Uv : Fh ? Wh : Nv,
        n.uncache = 0,
        n
    }, sa = function(e) {
        return (e = e.split(" "))[0] + " " + e[1]
    }, fc = function(e, t, n) {
        var i = Ut(t);
        return dt(parseFloat(t) + parseFloat(ki(e, "x", n + "px", i))) + i
    }, Nv = function(e, t) {
        t.z = "0px",
        t.rotationY = t.rotationX = "0deg",
        t.force3D = 0,
        Wh(e, t)
    }, gr = "0deg", Js = "0px", _r = ") ", Wh = function(e, t) {
        var n = t || this
          , i = n.xPercent
          , r = n.yPercent
          , a = n.x
          , o = n.y
          , c = n.z
          , l = n.rotation
          , u = n.rotationY
          , f = n.rotationX
          , h = n.skewX
          , m = n.skewY
          , g = n.scaleX
          , d = n.scaleY
          , p = n.transformPerspective
          , _ = n.force3D
          , y = n.target
          , M = n.zOrigin
          , x = ""
          , b = _ === "auto" && e && e !== 1 || _ === !0;
        if (M && (f !== gr || u !== gr)) {
            var S = parseFloat(u) * fs, A = Math.sin(S), v = Math.cos(S), w;
            S = parseFloat(f) * fs,
            w = Math.cos(S),
            a = fc(y, a, A * w * -M),
            o = fc(y, o, -Math.sin(S) * -M),
            c = fc(y, c, v * w * -M + M)
        }
        p !== Js && (x += "perspective(" + p + _r),
        (i || r) && (x += "translate(" + i + "%, " + r + "%) "),
        (b || a !== Js || o !== Js || c !== Js) && (x += c !== Js || b ? "translate3d(" + a + ", " + o + ", " + c + ") " : "translate(" + a + ", " + o + _r),
        l !== gr && (x += "rotate(" + l + _r),
        u !== gr && (x += "rotateY(" + u + _r),
        f !== gr && (x += "rotateX(" + f + _r),
        (h !== gr || m !== gr) && (x += "skew(" + h + ", " + m + _r),
        (g !== 1 || d !== 1) && (x += "scale(" + g + ", " + d + _r),
        y.style[Lt] = x || "translate(0, 0)"
    }, Uv = function(e, t) {
        var n = t || this, i = n.xPercent, r = n.yPercent, a = n.x, o = n.y, c = n.rotation, l = n.skewX, u = n.skewY, f = n.scaleX, h = n.scaleY, m = n.target, g = n.xOrigin, d = n.yOrigin, p = n.xOffset, _ = n.yOffset, y = n.forceCSS, M = parseFloat(a), x = parseFloat(o), b, S, A, v, w;
        c = parseFloat(c),
        l = parseFloat(l),
        u = parseFloat(u),
        u && (u = parseFloat(u),
        l += u,
        c += u),
        c || l ? (c *= fs,
        l *= fs,
        b = Math.cos(c) * f,
        S = Math.sin(c) * f,
        A = Math.sin(c - l) * -h,
        v = Math.cos(c - l) * h,
        l && (u *= fs,
        w = Math.tan(l - u),
        w = Math.sqrt(1 + w * w),
        A *= w,
        v *= w,
        u && (w = Math.tan(u),
        w = Math.sqrt(1 + w * w),
        b *= w,
        S *= w)),
        b = dt(b),
        S = dt(S),
        A = dt(A),
        v = dt(v)) : (b = f,
        v = h,
        S = A = 0),
        (M && !~(a + "").indexOf("px") || x && !~(o + "").indexOf("px")) && (M = ki(m, "x", a, "px"),
        x = ki(m, "y", o, "px")),
        (g || d || p || _) && (M = dt(M + g - (g * b + d * A) + p),
        x = dt(x + d - (g * S + d * v) + _)),
        (i || r) && (w = m.getBBox(),
        M = dt(M + i / 100 * w.width),
        x = dt(x + r / 100 * w.height)),
        w = "matrix(" + b + "," + S + "," + A + "," + v + "," + M + "," + x + ")",
        m.setAttribute("transform", w),
        y && (m.style[Lt] = w)
    }, kv = function(e, t, n, i, r) {
        var a = 360, o = wt(r), c = parseFloat(r) * (o && ~r.indexOf("rad") ? pr : 1), l = c - i, u = i + l + "deg", f, h;
        return o && (f = r.split("_")[1],
        f === "short" && (l %= a,
        l !== l % (a / 2) && (l += l < 0 ? a : -a)),
        f === "cw" && l < 0 ? l = (l + a * Ph) % a - ~~(l / a) * a : f === "ccw" && l > 0 && (l = (l - a * Ph) % a - ~~(l / a) * a)),
        e._pt = h = new en(e._pt,t,n,i,l,Tv),
        h.e = u,
        h.u = "deg",
        e._props.push(n),
        h
    }, Xh = function(e, t) {
        for (var n in t)
            e[n] = t[n];
        return e
    }, Bv = function(e, t, n) {
        var i = Xh({}, n._gsap), r = "perspective,force3D,transformOrigin,svgOrigin", a = n.style, o, c, l, u, f, h, m, g;
        i.svg ? (l = n.getAttribute("transform"),
        n.setAttribute("transform", ""),
        a[Lt] = t,
        o = Ks(n, 1),
        js(n, Lt),
        n.setAttribute("transform", l)) : (l = getComputedStyle(n)[Lt],
        a[Lt] = t,
        o = Ks(n, 1),
        a[Lt] = l);
        for (c in zi)
            l = i[c],
            u = o[c],
            l !== u && r.indexOf(c) < 0 && (m = Ut(l),
            g = Ut(u),
            f = m !== g ? ki(n, c, l, g) : parseFloat(l),
            h = parseFloat(u),
            e._pt = new en(e._pt,o,c,f,h - f,Lh),
            e._pt.u = g || 0,
            e._props.push(c));
        Xh(o, i)
    };
    Jt("padding,margin,Width,Radius", function(s, e) {
        var t = "Top"
          , n = "Right"
          , i = "Bottom"
          , r = "Left"
          , a = (e < 3 ? [t, n, i, r] : [t + r, t + n, i + n, i + r]).map(function(o) {
            return e < 2 ? s + o : "border" + o + s
        });
        ra[e > 1 ? "border" + s : s] = function(o, c, l, u, f) {
            var h, m;
            if (arguments.length < 4)
                return h = a.map(function(g) {
                    return mr(o, g, l)
                }),
                m = h.join(" "),
                m.split(h[0]).length === 5 ? h[0] : m;
            h = (u + "").split(" "),
            m = {},
            a.forEach(function(g, d) {
                return m[g] = h[d] = h[d] || h[(d - 1) / 2 | 0]
            }),
            o.init(c, m, f)
        }
    });
    var qh = {
        name: "css",
        register: ac,
        targetTest: function(e) {
            return e.style && e.nodeType
        },
        init: function(e, t, n, i, r) {
            var a = this._props, o = e.style, c = n.vars.startAt, l, u, f, h, m, g, d, p, _, y, M, x, b, S, A;
            sc || ac();
            for (d in t)
                if (d !== "autoRound" && (u = t[d],
                !(fn[d] && yh(d, t, n, i, e, r)))) {
                    if (m = typeof u,
                    g = ra[d],
                    m === "function" && (u = u.call(n, i, e, r),
                    m = typeof u),
                    m === "string" && ~u.indexOf("random(") && (u = Hs(u)),
                    g)
                        g(this, e, d, u, n) && (A = 1);
                    else if (d.substr(0, 2) === "--")
                        l = (getComputedStyle(e).getPropertyValue(d) + "").trim(),
                        u += "",
                        Li.lastIndex = 0,
                        Li.test(l) || (p = Ut(l),
                        _ = Ut(u)),
                        _ ? p !== _ && (l = ki(e, d, l, _) + _) : p && (u += p),
                        this.add(o, "setProperty", l, u, i, r, 0, 0, d),
                        a.push(d);
                    else if (m !== "undefined") {
                        if (c && d in c ? (l = typeof c[d] == "function" ? c[d].call(n, i, e, r) : c[d],
                        wt(l) && ~l.indexOf("random(") && (l = Hs(l)),
                        Ut(l + "") || (l += cn.units[d] || Ut(mr(e, d)) || ""),
                        (l + "").charAt(1) === "=" && (l = mr(e, d))) : l = mr(e, d),
                        h = parseFloat(l),
                        y = m === "string" && u.charAt(1) === "=" && u.substr(0, 2),
                        y && (u = u.substr(2)),
                        f = parseFloat(u),
                        d in Oi && (d === "autoAlpha" && (h === 1 && mr(e, "visibility") === "hidden" && f && (h = 0),
                        Ui(this, o, "visibility", h ? "inherit" : "hidden", f ? "inherit" : "hidden", !f)),
                        d !== "scale" && d !== "transform" && (d = Oi[d],
                        ~d.indexOf(",") && (d = d.split(",")[0]))),
                        M = d in zi,
                        M) {
                            if (x || (b = e._gsap,
                            b.renderTransform && !t.parseTransform || Ks(e, t.parseTransform),
                            S = t.smoothOrigin !== !1 && b.smooth,
                            x = this._pt = new en(this._pt,o,Lt,0,1,b.renderTransform,b,0,-1),
                            x.dep = 1),
                            d === "scale")
                                this._pt = new en(this._pt,b,"scaleY",b.scaleY,(y ? ss(b.scaleY, y + f) : f) - b.scaleY || 0),
                                a.push("scaleY", d),
                                d += "X";
                            else if (d === "transformOrigin") {
                                u = zv(u),
                                b.svg ? uc(e, u, 0, S, 0, this) : (_ = parseFloat(u.split(" ")[2]) || 0,
                                _ !== b.zOrigin && Ui(this, b, "zOrigin", b.zOrigin, _),
                                Ui(this, o, d, sa(l), sa(u)));
                                continue
                            } else if (d === "svgOrigin") {
                                uc(e, u, 1, S, 0, this);
                                continue
                            } else if (d in Gh) {
                                kv(this, b, d, h, y ? ss(h, y + u) : u);
                                continue
                            } else if (d === "smoothOrigin") {
                                Ui(this, b, "smooth", b.smooth, u);
                                continue
                            } else if (d === "force3D") {
                                b[d] = u;
                                continue
                            } else if (d === "transform") {
                                Bv(this, u, e);
                                continue
                            }
                        } else
                            d in o || (d = ds(d) || d);
                        if (M || (f || f === 0) && (h || h === 0) && !wv.test(u) && d in o)
                            p = (l + "").substr((h + "").length),
                            f || (f = 0),
                            _ = Ut(u) || (d in cn.units ? cn.units[d] : p),
                            p !== _ && (h = ki(e, d, l, _)),
                            this._pt = new en(this._pt,M ? b : o,d,h,(y ? ss(h, y + f) : f) - h,!M && (_ === "px" || d === "zIndex") && t.autoRound !== !1 ? Cv : Lh),
                            this._pt.u = _ || 0,
                            p !== _ && _ !== "%" && (this._pt.b = l,
                            this._pt.r = Ev);
                        else if (d in o)
                            Fv.call(this, e, d, l, y ? y + u : u);
                        else if (d in e)
                            this.add(e, d, l || e[d], y ? y + u : u, i, r);
                        else {
                            kl(d, u);
                            continue
                        }
                        a.push(d)
                    }
                }
            A && Eh(this)
        },
        get: mr,
        aliases: Oi,
        getSetter: function(e, t, n) {
            var i = Oi[t];
            return i && i.indexOf(",") < 0 && (t = i),
            t in zi && t !== Ni && (e._gsap.x || mr(e, "x")) ? n && Ah === n ? t === "scale" ? Lv : Dv : (Ah = n || {}) && (t === "scale" ? Rv : Iv) : e.style && !Fl(e.style[t]) ? Av : ~t.indexOf("-") ? Pv : nc(e, t)
        },
        core: {
            _removeProperty: js,
            _getMatrix: cc
        }
    };
    Vn.utils.checkPrefix = ds,
    function(s, e, t, n) {
        var i = Jt(s + "," + e + "," + t, function(r) {
            zi[r] = 1
        });
        Jt(e, function(r) {
            cn.units[r] = "deg",
            Gh[r] = 1
        }),
        Oi[i[13]] = s + "," + e,
        Jt(n, function(r) {
            var a = r.split(":");
            Oi[a[1]] = i[a[0]]
        })
    }("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"),
    Jt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(s) {
        cn.units[s] = "px"
    }),
    Vn.registerPlugin(qh);
    var Ct = Vn.registerPlugin(qh) || Vn;
    Ct.core.Tween;
    const Yh = {
        uniforms: {
            tDiffuse: {
                value: null
            },
            opacity: {
                value: 1
            }
        },
        vertexShader: `

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,
        fragmentShader: `

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`
    };
    class oa {
        constructor() {
            this.enabled = !0,
            this.needsSwap = !0,
            this.clear = !1,
            this.renderToScreen = !1
        }
        setSize() {}
        render() {
            console.error("THREE.Pass: .render() must be implemented in derived pass.")
        }
    }
    const Gv = new Ml(-1,1,1,-1,0,1)
      , hc = new ci;
    hc.setAttribute("position", new kn([-1, 3, 0, -1, -1, 0, 3, -1, 0],3)),
    hc.setAttribute("uv", new kn([0, 2, 0, 0, 2, 0],2));
    class Vv {
        constructor(e) {
            this._mesh = new Bn(hc,e)
        }
        dispose() {
            this._mesh.geometry.dispose()
        }
        render(e) {
            e.render(this._mesh, Gv)
        }
        get material() {
            return this._mesh.material
        }
        set material(e) {
            this._mesh.material = e
        }
    }
    class dc extends oa {
        constructor(e, t) {
            super();
            this.textureID = t !== void 0 ? t : "tDiffuse",
            e instanceof Gn ? (this.uniforms = e.uniforms,
            this.material = e) : e && (this.uniforms = $u.clone(e.uniforms),
            this.material = new Gn({
                defines: Object.assign({}, e.defines),
                uniforms: this.uniforms,
                vertexShader: e.vertexShader,
                fragmentShader: e.fragmentShader
            })),
            this.fsQuad = new Vv(this.material)
        }
        render(e, t, n) {
            this.uniforms[this.textureID] && (this.uniforms[this.textureID].value = n.texture),
            this.fsQuad.material = this.material,
            this.renderToScreen ? (e.setRenderTarget(null),
            this.fsQuad.render(e)) : (e.setRenderTarget(t),
            this.clear && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil),
            this.fsQuad.render(e))
        }
    }
    class $h extends oa {
        constructor(e, t) {
            super();
            this.scene = e,
            this.camera = t,
            this.clear = !0,
            this.needsSwap = !1,
            this.inverse = !1
        }
        render(e, t, n) {
            const i = e.getContext()
              , r = e.state;
            r.buffers.color.setMask(!1),
            r.buffers.depth.setMask(!1),
            r.buffers.color.setLocked(!0),
            r.buffers.depth.setLocked(!0);
            let a, o;
            this.inverse ? (a = 0,
            o = 1) : (a = 1,
            o = 0),
            r.buffers.stencil.setTest(!0),
            r.buffers.stencil.setOp(i.REPLACE, i.REPLACE, i.REPLACE),
            r.buffers.stencil.setFunc(i.ALWAYS, a, 4294967295),
            r.buffers.stencil.setClear(o),
            r.buffers.stencil.setLocked(!0),
            e.setRenderTarget(n),
            this.clear && e.clear(),
            e.render(this.scene, this.camera),
            e.setRenderTarget(t),
            this.clear && e.clear(),
            e.render(this.scene, this.camera),
            r.buffers.color.setLocked(!1),
            r.buffers.depth.setLocked(!1),
            r.buffers.stencil.setLocked(!1),
            r.buffers.stencil.setFunc(i.EQUAL, 1, 4294967295),
            r.buffers.stencil.setOp(i.KEEP, i.KEEP, i.KEEP),
            r.buffers.stencil.setLocked(!0)
        }
    }
    class Hv extends oa {
        constructor() {
            super();
            this.needsSwap = !1
        }
        render(e) {
            e.state.buffers.stencil.setLocked(!1),
            e.state.buffers.stencil.setTest(!1)
        }
    }
    class Wv {
        constructor(e, t) {
            if (this.renderer = e,
            t === void 0) {
                const n = e.getSize(new ke);
                this._pixelRatio = e.getPixelRatio(),
                this._width = n.width,
                this._height = n.height,
                t = new bi(this._width * this._pixelRatio,this._height * this._pixelRatio),
                t.texture.name = "EffectComposer.rt1"
            } else
                this._pixelRatio = 1,
                this._width = t.width,
                this._height = t.height;
            this.renderTarget1 = t,
            this.renderTarget2 = t.clone(),
            this.renderTarget2.texture.name = "EffectComposer.rt2",
            this.writeBuffer = this.renderTarget1,
            this.readBuffer = this.renderTarget2,
            this.renderToScreen = !0,
            this.passes = [],
            Yh === void 0 && console.error("THREE.EffectComposer relies on CopyShader"),
            dc === void 0 && console.error("THREE.EffectComposer relies on ShaderPass"),
            this.copyPass = new dc(Yh),
            this.clock = new Ax
        }
        swapBuffers() {
            const e = this.readBuffer;
            this.readBuffer = this.writeBuffer,
            this.writeBuffer = e
        }
        addPass(e) {
            this.passes.push(e),
            e.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio)
        }
        insertPass(e, t) {
            this.passes.splice(t, 0, e),
            e.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio)
        }
        removePass(e) {
            const t = this.passes.indexOf(e);
            t !== -1 && this.passes.splice(t, 1)
        }
        isLastEnabledPass(e) {
            for (let t = e + 1; t < this.passes.length; t++)
                if (this.passes[t].enabled)
                    return !1;
            return !0
        }
        render(e) {
            e === void 0 && (e = this.clock.getDelta());
            const t = this.renderer.getRenderTarget();
            let n = !1;
            for (let i = 0, r = this.passes.length; i < r; i++) {
                const a = this.passes[i];
                if (a.enabled !== !1) {
                    if (a.renderToScreen = this.renderToScreen && this.isLastEnabledPass(i),
                    a.render(this.renderer, this.writeBuffer, this.readBuffer, e, n),
                    a.needsSwap) {
                        if (n) {
                            const o = this.renderer.getContext()
                              , c = this.renderer.state.buffers.stencil;
                            c.setFunc(o.NOTEQUAL, 1, 4294967295),
                            this.copyPass.render(this.renderer, this.writeBuffer, this.readBuffer, e),
                            c.setFunc(o.EQUAL, 1, 4294967295)
                        }
                        this.swapBuffers()
                    }
                    $h !== void 0 && (a instanceof $h ? n = !0 : a instanceof Hv && (n = !1))
                }
            }
            this.renderer.setRenderTarget(t)
        }
        reset(e) {
            if (e === void 0) {
                const t = this.renderer.getSize(new ke);
                this._pixelRatio = this.renderer.getPixelRatio(),
                this._width = t.width,
                this._height = t.height,
                e = this.renderTarget1.clone(),
                e.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio)
            }
            this.renderTarget1.dispose(),
            this.renderTarget2.dispose(),
            this.renderTarget1 = e,
            this.renderTarget2 = e.clone(),
            this.writeBuffer = this.renderTarget1,
            this.readBuffer = this.renderTarget2
        }
        setSize(e, t) {
            this._width = e,
            this._height = t;
            const n = this._width * this._pixelRatio
              , i = this._height * this._pixelRatio;
            this.renderTarget1.setSize(n, i),
            this.renderTarget2.setSize(n, i);
            for (let r = 0; r < this.passes.length; r++)
                this.passes[r].setSize(n, i)
        }
        setPixelRatio(e) {
            this._pixelRatio = e,
            this.setSize(this._width, this._height)
        }
    }
    new Ml(-1,1,1,-1,0,1);
    const jh = new ci;
    jh.setAttribute("position", new kn([-1, 3, 0, -1, -1, 0, 3, -1, 0],3)),
    jh.setAttribute("uv", new kn([0, 2, 0, 0, 2, 0],2));
    class Xv extends oa {
        constructor(e, t, n, i, r) {
            super();
            this.scene = e,
            this.camera = t,
            this.overrideMaterial = n,
            this.clearColor = i,
            this.clearAlpha = r !== void 0 ? r : 0,
            this.clear = !0,
            this.clearDepth = !1,
            this.needsSwap = !1,
            this._oldClearColor = new rt
        }
        render(e, t, n) {
            const i = e.autoClear;
            e.autoClear = !1;
            let r, a;
            this.overrideMaterial !== void 0 && (a = this.scene.overrideMaterial,
            this.scene.overrideMaterial = this.overrideMaterial),
            this.clearColor && (e.getClearColor(this._oldClearColor),
            r = e.getClearAlpha(),
            e.setClearColor(this.clearColor, this.clearAlpha)),
            this.clearDepth && e.clearDepth(),
            e.setRenderTarget(this.renderToScreen ? null : n),
            this.clear && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil),
            e.render(this.scene, this.camera),
            this.clearColor && e.setClearColor(this._oldClearColor, r),
            this.overrideMaterial !== void 0 && (this.scene.overrideMaterial = a),
            e.autoClear = i
        }
    }
    var qv = `vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
vec3 fade(vec3 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}

float cnoise(vec3 P){
  vec3 Pi0 = floor(P); 
  vec3 Pi1 = Pi0 + vec3(1.0); 
  Pi0 = mod(Pi0, 289.0);
  Pi1 = mod(Pi1, 289.0);
  vec3 Pf0 = fract(P); 
  vec3 Pf1 = Pf0 - vec3(1.0); 
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 / 7.0;
  vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 / 7.0;
  vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
  return 2.2 * n_xyz;
}
    varying vec2 vUv; 
    varying float vNoise;
    uniform float uTimes;
    

    void main()
    { 
      float PI = 3.14159265359; 
      vec3 newPosition = position;
      
      
      float noise = cnoise(vec3(position.x * 4.0 , position.y * 4.0, .1) + uTimes / 5.0); 
      
      

      
    
      
      newPosition.z += .11 * noise;
      
      
 
      vNoise = noise;
  
      vUv = uv;

      gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
    }`
      , Yv = `precision highp float;
  uniform sampler2D bgTexture;
  varying vec2 vUv;
  uniform float uTimes;
  varying float vNoise;

 
  void main()

  { 
    float dist = distance(vUv, vec2(0.35));
    vec2 newUV = vUv;   

    newUV = vec2(newUV.x, newUV.y + dist * (0.50 * sin(newUV.y * 25.0 - uTimes / 12.0)));
 
    vec4 bgView = texture2D(bgTexture, newUV);

    

    
 
    gl_FragColor = bgView + 0.045 * vec4(vNoise);
    
    
   

    
  }`
      , $v = `precision highp float;

  
  varying float vNoise;
  varying vec2 vUv;
  uniform sampler2D uImage;
  uniform float uTime;

  void main()

  { 

    vec2 newUV = vUv;  

    vec4 imageText = texture2D(uImage, newUV);

    
    
    
    
    gl_FragColor = imageText; 
     
     
    
  }`
      , jv = `vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
vec3 fade(vec3 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}

float cnoise(vec3 P){
  vec3 Pi0 = floor(P); 
  vec3 Pi1 = Pi0 + vec3(1.0); 
  Pi0 = mod(Pi0, 289.0);
  Pi1 = mod(Pi1, 289.0);
  vec3 Pf0 = fract(P); 
  vec3 Pf1 = Pf0 - vec3(1.0); 
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 / 7.0;
  vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 / 7.0;
  vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
  return 2.2 * n_xyz;
}

uniform float uTime; 
uniform vec2 uHover;
uniform float hoverState;
varying float vNoise;
varying vec2 vUv;

    void main()

    {

      vec3 newPosition = position;
      float PI = 3.1415925;

      
      float noise = cnoise(3. * vec3(position.x, position.y, position.z  + uTime / 30.0));
      
      
      float dist = distance(uv, uHover);
      newPosition.z +=  6. * sin(dist * 6. + uTime);

      

      vNoise = dist;
      vUv = uv;
       
      
       

      gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
    }`;
    class Zv {
        constructor(e) {
            this.time = 1,
            this.container = e.dom,
            this.scene = new Sx,
            this.width = this.container.offsetWidth,
            this.height = this.container.offsetHeight,
            this.camera = new xn(70,this.width / this.height,100,2e3),
            this.camera.position.z = 600,
            this.camera.fov = 2 * Math.atan(this.height / 2 / 600) * (180 / Math.PI),
            this.renderer = new Cf({
                antialias: !0,
                alpha: !0
            }),
            this.container.appendChild(this.renderer.domElement),
            this.controls = new Dx(this.camera,this.renderer.domElement),
            this.images = [...document.querySelectorAll("img")],
            this.currentScroll = 0,
            this.scroll = new Rx,
            this.raycaster = new Px,
            this.mouse = new ke,
            this.addObject(),
            this.mouseMovement(),
            this.addImages(),
            this.setImgPosition(),
            this.resize(),
            this.setupResize(),
            this.composerPass(),
            this.render()
        }
        addImages() {
            this.material = new Gn({
                uniforms: {
                    uTime: {
                        value: 0
                    },
                    uImage: {
                        value: 0
                    },
                    uHover: {
                        value: new ke(.5,.5)
                    },
                    hoverState: {
                        value: 0
                    }
                },
                fragmentShader: $v,
                vertexShader: jv
            }),
            this.materials = [],
            this.imagesStore = this.images.map(e=>{
                let t = e.getBoundingClientRect()
                  , n = new Ns(t.width,t.height,100,100)
                  , i = new Image;
                i.crossOrigin = "Anonymous",
                i.src = e.src;
                let r = e.cloneNode(!0)
                  , a = new on(r);
                a.needsUpdate = !0;
                let o = this.material.clone();
                e.addEventListener("mouseenter", ()=>{
                    Ct.to(o.uniforms.hoverState, {
                        duration: 1,
                        value: 1,
                        ease: Ii.easeOut
                    })
                }
                ),
                e.addEventListener("mouseout", ()=>{
                    Ct.to(o.uniforms.hoverState, {
                        duration: 1,
                        value: 0,
                        ease: Ii.easeOut
                    })
                }
                ),
                this.materials.push(o),
                o.uniforms.uImage.value = a;
                let c = new Bn(n,o);
                return this.scene.add(c),
                {
                    img: e,
                    mesh: c,
                    top: t.top,
                    left: t.left,
                    width: t.width,
                    height: t.height
                }
            }
            )
        }
        setImgPosition() {
            this.imagesStore.forEach(e=>{
                e.mesh.position.y = this.currentScroll - e.top + this.height / 2 - e.height / 2,
                e.mesh.position.x = e.left - this.width / 2 + e.width / 2
            }
            )
        }
        addObject() {
            this.bgGeometry = new Ns(2e3,2e3,100,100),
            this.bgMaterial = new Gn({
                vertexShader: qv,
                fragmentShader: Yv,
                wireframe: !1,
                uniforms: {
                    uTimes: {
                        value: 0
                    }
                }
            }),
            this.bgMesh = new Bn(this.bgGeometry,this.bgMaterial),
            this.bgMesh.position.z = -20
        }
        mouseMovement() {
            window.addEventListener("mousemove", e=>{
                this.mouse.x = e.clientX / this.width * 2 - 1,
                this.mouse.y = -(e.clientY / this.height) * 2 + 1,
                this.raycaster.setFromCamera(this.mouse, this.camera);
                const t = this.raycaster.intersectObjects(this.scene.children);
                if (t.length > 0) {
                    let n = t[0].object;
                    n.material.uniforms.uHover.value = t[0].uv
                }
            }
            , !1)
        }
        composerPass() {
            this.composer = new Wv(this.renderer),
            this.renderPass = new Xv(this.scene,this.camera),
            this.composer.addPass(this.renderPass),
            this.myEffect = {
                uniforms: {
                    tDiffuse: {
                        value: null
                    },
                    scrollSpeed: {
                        value: null
                    }
                },
                vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix 
            * modelViewMatrix 
            * vec4( position, 1.0 );
        }
        `,
                fragmentShader: `
        uniform sampler2D tDiffuse;
        uniform float scrollSpeed;
        varying vec2 vUv;
         
        void main(){
          vec2 newUV = vUv;
          float area = smoothstep(0.55 , 0.0 , vUv.y);
           
          newUV.x -= sin(vUv.x - 0.3) * .3 * area;
         gl_FragColor = texture2D (tDiffuse, newUV); 
         
        }
        `
            },
            this.customPass = new dc(this.myEffect),
            this.customPass.renderToScreen = !0,
            this.composer.addPass(this.customPass)
        }
        resize() {
            this.width = this.container.offsetWidth,
            this.height = this.container.offsetHeight,
            this.renderer.setSize(this.width, this.height),
            this.camera.aspect = this.width / this.height,
            this.camera.updateProjectionMatrix()
        }
        setupResize() {
            window.addEventListener("resize", this.resize.bind(this))
        }
        render() {
            this.time += .05,
            this.scroll.render(),
            this.currentScroll = this.scroll.scrollToRender,
            this.setImgPosition(),
            this.bgMaterial.uniforms.uTimes.value = this.time,
            this.materials.forEach(e=>{
                e.uniforms.uTime.value = this.time
            }
            ),
            this.composer.render(),
            window.requestAnimationFrame(this.render.bind(this))
        }
    }
    /*!
 * paths 3.10.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
    var Kv = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig
      , Jv = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig
      , Qv = Math.PI / 180
      , aa = Math.sin
      , la = Math.cos
      , Qs = Math.abs
      , eo = Math.sqrt
      , ey = function(e) {
        return typeof e == "number"
    }
      , Zh = 1e5
      , Bi = function(e) {
        return Math.round(e * Zh) / Zh || 0
    };
    function ty(s, e, t, n, i, r, a) {
        for (var o = s.length, c, l, u, f, h; --o > -1; )
            for (c = s[o],
            l = c.length,
            u = 0; u < l; u += 2)
                f = c[u],
                h = c[u + 1],
                c[u] = f * e + h * n + r,
                c[u + 1] = f * t + h * i + a;
        return s._dirty = 1,
        s
    }
    function ny(s, e, t, n, i, r, a, o, c) {
        if (!(s === o && e === c)) {
            t = Qs(t),
            n = Qs(n);
            var l = i % 360 * Qv
              , u = la(l)
              , f = aa(l)
              , h = Math.PI
              , m = h * 2
              , g = (s - o) / 2
              , d = (e - c) / 2
              , p = u * g + f * d
              , _ = -f * g + u * d
              , y = p * p
              , M = _ * _
              , x = y / (t * t) + M / (n * n);
            x > 1 && (t = eo(x) * t,
            n = eo(x) * n);
            var b = t * t
              , S = n * n
              , A = (b * S - b * M - S * y) / (b * M + S * y);
            A < 0 && (A = 0);
            var v = (r === a ? -1 : 1) * eo(A)
              , w = v * (t * _ / n)
              , L = v * -(n * p / t)
              , F = (s + o) / 2
              , V = (e + c) / 2
              , K = F + (u * w - f * L)
              , R = V + (f * w + u * L)
              , U = (p - w) / t
              , z = (_ - L) / n
              , W = (-p - w) / t
              , X = (-_ - L) / n
              , G = U * U + z * z
              , P = (z < 0 ? -1 : 1) * Math.acos(U / eo(G))
              , ee = (U * X - z * W < 0 ? -1 : 1) * Math.acos((U * W + z * X) / eo(G * (W * W + X * X)));
            isNaN(ee) && (ee = h),
            !a && ee > 0 ? ee -= m : a && ee < 0 && (ee += m),
            P %= m,
            ee %= m;
            var te = Math.ceil(Qs(ee) / (m / 4)), ie = [], ce = ee / te, Me = 4 / 3 * aa(ce / 2) / (1 + la(ce / 2)), H = u * t, Le = f * t, xe = f * -n, Ce = u * n, oe;
            for (oe = 0; oe < te; oe++)
                i = P + oe * ce,
                p = la(i),
                _ = aa(i),
                U = la(i += ce),
                z = aa(i),
                ie.push(p - Me * _, _ + Me * p, U + Me * z, z - Me * U, U, z);
            for (oe = 0; oe < ie.length; oe += 2)
                p = ie[oe],
                _ = ie[oe + 1],
                ie[oe] = p * H + _ * xe + K,
                ie[oe + 1] = p * Le + _ * Ce + R;
            return ie[oe - 2] = o,
            ie[oe - 1] = c,
            ie
        }
    }
    function iy(s) {
        var e = (s + "").replace(Jv, function(w) {
            var L = +w;
            return L < 1e-4 && L > -1e-4 ? 0 : L
        }).match(Kv) || [], t = [], n = 0, i = 0, r = 2 / 3, a = e.length, o = 0, c = "ERROR: malformed path: " + s, l, u, f, h, m, g, d, p, _, y, M, x, b, S, A, v = function(L, F, V, K) {
            y = (V - L) / 3,
            M = (K - F) / 3,
            d.push(L + y, F + M, V - y, K - M, V, K)
        };
        if (!s || !isNaN(e[0]) || isNaN(e[1]))
            return console.log(c),
            t;
        for (l = 0; l < a; l++)
            if (b = m,
            isNaN(e[l]) ? (m = e[l].toUpperCase(),
            g = m !== e[l]) : l--,
            f = +e[l + 1],
            h = +e[l + 2],
            g && (f += n,
            h += i),
            l || (p = f,
            _ = h),
            m === "M")
                d && (d.length < 8 ? t.length -= 1 : o += d.length),
                n = p = f,
                i = _ = h,
                d = [f, h],
                t.push(d),
                l += 2,
                m = "L";
            else if (m === "C")
                d || (d = [0, 0]),
                g || (n = i = 0),
                d.push(f, h, n + e[l + 3] * 1, i + e[l + 4] * 1, n += e[l + 5] * 1, i += e[l + 6] * 1),
                l += 6;
            else if (m === "S")
                y = n,
                M = i,
                (b === "C" || b === "S") && (y += n - d[d.length - 4],
                M += i - d[d.length - 3]),
                g || (n = i = 0),
                d.push(y, M, f, h, n += e[l + 3] * 1, i += e[l + 4] * 1),
                l += 4;
            else if (m === "Q")
                y = n + (f - n) * r,
                M = i + (h - i) * r,
                g || (n = i = 0),
                n += e[l + 3] * 1,
                i += e[l + 4] * 1,
                d.push(y, M, n + (f - n) * r, i + (h - i) * r, n, i),
                l += 4;
            else if (m === "T")
                y = n - d[d.length - 4],
                M = i - d[d.length - 3],
                d.push(n + y, i + M, f + (n + y * 1.5 - f) * r, h + (i + M * 1.5 - h) * r, n = f, i = h),
                l += 2;
            else if (m === "H")
                v(n, i, n = f, i),
                l += 1;
            else if (m === "V")
                v(n, i, n, i = f + (g ? i - n : 0)),
                l += 1;
            else if (m === "L" || m === "Z")
                m === "Z" && (f = p,
                h = _,
                d.closed = !0),
                (m === "L" || Qs(n - f) > .5 || Qs(i - h) > .5) && (v(n, i, f, h),
                m === "L" && (l += 2)),
                n = f,
                i = h;
            else if (m === "A") {
                if (S = e[l + 4],
                A = e[l + 5],
                y = e[l + 6],
                M = e[l + 7],
                u = 7,
                S.length > 1 && (S.length < 3 ? (M = y,
                y = A,
                u--) : (M = A,
                y = S.substr(2),
                u -= 2),
                A = S.charAt(1),
                S = S.charAt(0)),
                x = ny(n, i, +e[l + 1], +e[l + 2], +e[l + 3], +S, +A, (g ? n : 0) + y * 1, (g ? i : 0) + M * 1),
                l += u,
                x)
                    for (u = 0; u < x.length; u++)
                        d.push(x[u]);
                n = d[d.length - 2],
                i = d[d.length - 1]
            } else
                console.log(c);
        return l = d.length,
        l < 6 ? (t.pop(),
        l = 0) : d[0] === d[l - 2] && d[1] === d[l - 1] && (d.closed = !0),
        t.totalPoints = o + l,
        t
    }
    function ry(s) {
        ey(s[0]) && (s = [s]);
        var e = "", t = s.length, n, i, r, a;
        for (i = 0; i < t; i++) {
            for (a = s[i],
            e += "M" + Bi(a[0]) + "," + Bi(a[1]) + " C",
            n = a.length,
            r = 2; r < n; r++)
                e += Bi(a[r++]) + "," + Bi(a[r++]) + " " + Bi(a[r++]) + "," + Bi(a[r++]) + " " + Bi(a[r++]) + "," + Bi(a[r]) + " ";
            a.closed && (e += "z")
        }
        return e
    }
    /*!
 * CustomEase 3.10.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
    var tn, Kh, Jh = function() {
        return tn || typeof window != "undefined" && (tn = window.gsap) && tn.registerPlugin && tn
    }, Qh = function() {
        tn = Jh(),
        tn ? (tn.registerEase("_CE", xr.create),
        Kh = 1) : console.warn("Please gsap.registerPlugin(CustomEase)")
    }, sy = 1e20, ca = function(e) {
        return ~~(e * 1e3 + (e < 0 ? -.5 : .5)) / 1e3
    }, oy = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi, ay = /[cLlsSaAhHvVtTqQ]/g, ly = function(e) {
        var t = e.length, n = sy, i;
        for (i = 1; i < t; i += 6)
            +e[i] < n && (n = +e[i]);
        return n
    }, cy = function(e, t, n) {
        !n && n !== 0 && (n = Math.max(+e[e.length - 1], +e[1]));
        var i = +e[0] * -1, r = -n, a = e.length, o = 1 / (+e[a - 2] + i), c = -t || (Math.abs(+e[a - 1] - +e[1]) < .01 * (+e[a - 2] - +e[0]) ? ly(e) + r : +e[a - 1] + r), l;
        for (c ? c = 1 / c : c = -o,
        l = 0; l < a; l += 2)
            e[l] = (+e[l] + i) * o,
            e[l + 1] = (+e[l + 1] + r) * c
    }, uy = function s(e, t, n, i, r, a, o, c, l, u, f) {
        var h = (e + n) / 2, m = (t + i) / 2, g = (n + r) / 2, d = (i + a) / 2, p = (r + o) / 2, _ = (a + c) / 2, y = (h + g) / 2, M = (m + d) / 2, x = (g + p) / 2, b = (d + _) / 2, S = (y + x) / 2, A = (M + b) / 2, v = o - e, w = c - t, L = Math.abs((n - o) * w - (i - c) * v), F = Math.abs((r - o) * w - (a - c) * v), V;
        return u || (u = [{
            x: e,
            y: t
        }, {
            x: o,
            y: c
        }],
        f = 1),
        u.splice(f || u.length - 1, 0, {
            x: S,
            y: A
        }),
        (L + F) * (L + F) > l * (v * v + w * w) && (V = u.length,
        s(e, t, h, m, y, M, S, A, l, u, f),
        s(S, A, x, b, p, _, o, c, l, u, f + 1 + (u.length - V))),
        u
    }, xr = function() {
        function s(t, n, i) {
            Kh || Qh(),
            this.id = t,
            this.setData(n, i)
        }
        var e = s.prototype;
        return e.setData = function(n, i) {
            i = i || {},
            n = n || "0,0,1,1";
            var r = n.match(oy), a = 1, o = [], c = [], l = i.precision || 1, u = l <= 1, f, h, m, g, d, p, _, y, M;
            if (this.data = n,
            (ay.test(n) || ~n.indexOf("M") && n.indexOf("C") < 0) && (r = iy(n)[0]),
            f = r.length,
            f === 4)
                r.unshift(0, 0),
                r.push(1, 1),
                f = 8;
            else if ((f - 2) % 6)
                throw "Invalid CustomEase";
            for ((+r[0] != 0 || +r[f - 2] != 1) && cy(r, i.height, i.originY),
            this.segment = r,
            g = 2; g < f; g += 6)
                h = {
                    x: +r[g - 2],
                    y: +r[g - 1]
                },
                m = {
                    x: +r[g + 4],
                    y: +r[g + 5]
                },
                o.push(h, m),
                uy(h.x, h.y, +r[g], +r[g + 1], +r[g + 2], +r[g + 3], m.x, m.y, 1 / (l * 2e5), o, o.length - 1);
            for (f = o.length,
            g = 0; g < f; g++)
                _ = o[g],
                y = o[g - 1] || _,
                (_.x > y.x || y.y !== _.y && y.x === _.x || _ === y) && _.x <= 1 ? (y.cx = _.x - y.x,
                y.cy = _.y - y.y,
                y.n = _,
                y.nx = _.x,
                u && g > 1 && Math.abs(y.cy / y.cx - o[g - 2].cy / o[g - 2].cx) > 2 && (u = 0),
                y.cx < a && (y.cx ? a = y.cx : (y.cx = .001,
                g === f - 1 && (y.x -= .001,
                a = Math.min(a, .001),
                u = 0)))) : (o.splice(g--, 1),
                f--);
            if (f = 1 / a + 1 | 0,
            d = 1 / f,
            p = 0,
            _ = o[0],
            u) {
                for (g = 0; g < f; g++)
                    M = g * d,
                    _.nx < M && (_ = o[++p]),
                    h = _.y + (M - _.x) / _.cx * _.cy,
                    c[g] = {
                        x: M,
                        cx: d,
                        y: h,
                        cy: 0,
                        nx: 9
                    },
                    g && (c[g - 1].cy = h - c[g - 1].y);
                c[f - 1].cy = o[o.length - 1].y - h
            } else {
                for (g = 0; g < f; g++)
                    _.nx < g * d && (_ = o[++p]),
                    c[g] = _;
                p < o.length - 1 && (c[g - 1] = o[o.length - 2])
            }
            return this.ease = function(x) {
                var b = c[x * f | 0] || c[f - 1];
                return b.nx < x && (b = b.n),
                b.y + (x - b.x) / b.cx * b.cy
            }
            ,
            this.ease.custom = this,
            this.id && tn && tn.registerEase(this.id, this.ease),
            this
        }
        ,
        e.getSVGData = function(n) {
            return s.getSVGData(this, n)
        }
        ,
        s.create = function(n, i, r) {
            return new s(n,i,r).ease
        }
        ,
        s.register = function(n) {
            tn = n,
            Qh()
        }
        ,
        s.get = function(n) {
            return tn.parseEase(n)
        }
        ,
        s.getSVGData = function(n, i) {
            i = i || {};
            var r = i.width || 100, a = i.height || 100, o = i.x || 0, c = (i.y || 0) + a, l = tn.utils.toArray(i.path)[0], u, f, h, m, g, d, p, _, y, M;
            if (i.invert && (a = -a,
            c = 0),
            typeof n == "string" && (n = tn.parseEase(n)),
            n.custom && (n = n.custom),
            n instanceof s)
                u = ry(ty([n.segment], r, 0, 0, -a, o, c));
            else {
                for (u = [o, c],
                p = Math.max(5, (i.precision || 1) * 200),
                m = 1 / p,
                p += 2,
                _ = 5 / p,
                y = ca(o + m * r),
                M = ca(c + n(m) * -a),
                f = (M - c) / (y - o),
                h = 2; h < p; h++)
                    g = ca(o + h * m * r),
                    d = ca(c + n(h * m) * -a),
                    (Math.abs((d - M) / (g - y) - f) > _ || h === p - 1) && (u.push(y, M),
                    f = (d - M) / (g - y)),
                    y = g,
                    M = d;
                u = "M" + u.join(",")
            }
            return l && l.setAttribute("d", u),
            u
        }
        ,
        s
    }();
    Jh() && tn.registerPlugin(xr),
    xr.version = "3.10.4",
    (()=>{
        function s(...n) {
            const i = n.length;
            for (let r = 0; r < i; r++) {
                const a = n[r];
                a.nodeType === 1 || a.nodeType === 11 ? this.appendChild(a) : this.appendChild(document.createTextNode(String(a)))
            }
        }
        function e(...n) {
            for (; this.lastChild; )
                this.removeChild(this.lastChild);
            n.length && this.append(...n)
        }
        function t(...n) {
            const i = this.parentNode;
            let r = n.length;
            if (!!i)
                for (r || i.removeChild(this); r--; ) {
                    let a = n[r];
                    typeof a != "object" ? a = this.ownerDocument.createTextNode(a) : a.parentNode && a.parentNode.removeChild(a),
                    r ? i.insertBefore(this.previousSibling, a) : i.replaceChild(a, this)
                }
        }
        typeof Element != "undefined" && (Element.prototype.append || (Element.prototype.append = s,
        DocumentFragment.prototype.append = s),
        Element.prototype.replaceChildren || (Element.prototype.replaceChildren = e,
        DocumentFragment.prototype.replaceChildren = e),
        Element.prototype.replaceWith || (Element.prototype.replaceWith = t,
        DocumentFragment.prototype.replaceWith = t))
    }
    )();
    function vr(s, e) {
        return Object.getOwnPropertyNames(Object(s)).reduce((t,n)=>{
            const i = Object.getOwnPropertyDescriptor(Object(s), n)
              , r = Object.getOwnPropertyDescriptor(Object(e), n);
            return Object.defineProperty(t, n, r || i)
        }
        , {})
    }
    function to(s) {
        return typeof s == "string"
    }
    function pc(s) {
        return Array.isArray(s)
    }
    function ua(s={}) {
        const e = vr(s);
        let t;
        return e.types !== void 0 ? t = e.types : e.split !== void 0 && (t = e.split),
        t !== void 0 && (e.types = (to(t) || pc(t) ? String(t) : "").split(",").map(n=>String(n).trim()).filter(n=>/((line)|(word)|(char))/i.test(n))),
        (e.absolute || e.position) && (e.absolute = e.absolute || /absolute/.test(s.position)),
        e
    }
    function mc(s) {
        const e = to(s) || pc(s) ? String(s) : "";
        return {
            none: !e,
            lines: /line/i.test(e),
            words: /word/i.test(e),
            chars: /char/i.test(e)
        }
    }
    function fa(s) {
        return s !== null && typeof s == "object"
    }
    function fy(s) {
        return fa(s) && /^(1|3|11)$/.test(s.nodeType)
    }
    function hy(s) {
        return typeof s == "number" && s > -1 && s % 1 == 0
    }
    function dy(s) {
        return fa(s) && hy(s.length)
    }
    function yr(s) {
        return pc(s) ? s : s == null ? [] : dy(s) ? Array.prototype.slice.call(s) : [s]
    }
    function ed(s) {
        let e = s;
        return to(s) && (/^(#[a-z]\w+)$/.test(s.trim()) ? e = document.getElementById(s.trim().slice(1)) : e = document.querySelectorAll(s)),
        yr(e).reduce((t,n)=>[...t, ...yr(n).filter(fy)], [])
    }
    const {entries: py, keys: W1, values: X1} = Object
      , ha = "_splittype"
      , mi = {};
    let my = 0;
    function Kn(s, e, t) {
        if (!fa(s))
            return console.warn("[data.set] owner is not an object"),
            null;
        const n = s[ha] || (s[ha] = ++my)
          , i = mi[n] || (mi[n] = {});
        return t === void 0 ? !!e && Object.getPrototypeOf(e) === Object.prototype && (mi[n] = Vc(Vc({}, i), e)) : e !== void 0 && (i[e] = t),
        t
    }
    function br(s, e) {
        const t = fa(s) ? s[ha] : null
          , n = t && mi[t] || {};
        return e === void 0 ? n : n[e]
    }
    function td(s) {
        const e = s && s[ha];
        e && (delete s[e],
        delete mi[e])
    }
    function gy() {
        py(mi).forEach(([s,{isRoot: e, isSplit: t}])=>{
            (!e || !t) && (mi[s] = null,
            delete mi[s])
        }
        )
    }
    function _y(s, e=" ") {
        return (s ? String(s) : "").trim().replace(/\s+/g, " ").split(e)
    }
    const gc = "\\ud800-\\udfff"
      , nd = "\\u0300-\\u036f\\ufe20-\\ufe23"
      , id = "\\u20d0-\\u20f0"
      , rd = "\\ufe0e\\ufe0f"
      , xy = `[${gc}]`
      , _c = `[${nd}${id}]`
      , xc = "\\ud83c[\\udffb-\\udfff]"
      , vy = `(?:${_c}|${xc})`
      , sd = `[^${gc}]`
      , od = "(?:\\ud83c[\\udde6-\\uddff]){2}"
      , ad = "[\\ud800-\\udbff][\\udc00-\\udfff]"
      , ld = "\\u200d"
      , cd = `${vy}?`
      , ud = `[${rd}]?`
      , yy = "(?:" + ld + "(?:" + [sd, od, ad].join("|") + ")" + ud + cd + ")*"
      , by = ud + cd + yy
      , My = `(?:${[`${sd}${_c}?`, _c, od, ad, xy].join("|")}
)`
      , Sy = RegExp(`${xc}(?=${xc})|${My}${by}`, "g")
      , wy = RegExp(`[${[ld, gc, nd, id, rd].join("")}]`);
    function Ty(s) {
        return s.split("")
    }
    function fd(s) {
        return wy.test(s)
    }
    function Ey(s) {
        return s.match(Sy) || []
    }
    function Cy(s) {
        return fd(s) ? Ey(s) : Ty(s)
    }
    function Ay(s) {
        return s == null ? "" : String(s)
    }
    function Py(s, e="") {
        return s = Ay(s),
        s && to(s) && !e && fd(s) ? Cy(s) : s.split(e)
    }
    function vc(s, e) {
        const t = document.createElement(s);
        return e && Object.keys(e).forEach(n=>{
            const i = e[n]
              , r = to(i) ? i.trim() : i;
            r === null || r === "" || (n === "children" ? t.append(...yr(r)) : t.setAttribute(n, r))
        }
        ),
        t
    }
    var yc = {
        splitClass: "",
        lineClass: "line",
        wordClass: "word",
        charClass: "char",
        types: ["lines", "words", "chars"],
        absolute: !1,
        tagName: "div"
    };
    function Dy(s, e) {
        e = vr(yc, e);
        const t = mc(e.types)
          , n = e.tagName
          , i = s.nodeValue
          , r = document.createDocumentFragment();
        let a = []
          , o = [];
        return /^\s/.test(i) && r.append(" "),
        a = _y(i).reduce((c,l,u,f)=>{
            let h, m;
            return t.chars && (m = Py(l).map(g=>{
                const d = vc(n, {
                    class: `${e.splitClass} ${e.charClass}`,
                    style: "display: inline-block;",
                    children: g
                });
                return Kn(d, "isChar", !0),
                o = [...o, d],
                d
            }
            )),
            t.words || t.lines ? (h = vc(n, {
                class: `${e.wordClass} ${e.splitClass}`,
                style: `display: inline-block; ${t.words && e.absolute ? "position: relative;" : ""}`,
                children: t.chars ? m : l
            }),
            Kn(h, {
                isWord: !0,
                isWordStart: !0,
                isWordEnd: !0
            }),
            r.appendChild(h)) : m.forEach(g=>{
                r.appendChild(g)
            }
            ),
            u < f.length - 1 && r.append(" "),
            t.words ? c.concat(h) : c
        }
        , []),
        /\s$/.test(i) && r.append(" "),
        s.replaceWith(r),
        {
            words: a,
            chars: o
        }
    }
    function hd(s, e) {
        const t = s.nodeType
          , n = {
            words: [],
            chars: []
        };
        if (!/(1|3|11)/.test(t))
            return n;
        if (t === 3 && /\S/.test(s.nodeValue))
            return Dy(s, e);
        const i = yr(s.childNodes);
        if (i.length && (Kn(s, "isSplit", !0),
        !br(s).isRoot)) {
            s.style.display = "inline-block",
            s.style.position = "relative";
            const r = s.nextSibling
              , a = s.previousSibling
              , o = s.textContent || ""
              , c = r ? r.textContent : " "
              , l = a ? a.textContent : " ";
            Kn(s, {
                isWordEnd: /\s$/.test(o) || /^\s/.test(c),
                isWordStart: /^\s/.test(o) || /\s$/.test(l)
            })
        }
        return i.reduce((r,a)=>{
            const {words: o, chars: c} = hd(a, e);
            return {
                words: [...r.words, ...o],
                chars: [...r.chars, ...c]
            }
        }
        , n)
    }
    function Ly(s, e, t, n) {
        if (!t.absolute)
            return {
                top: e ? s.offsetTop : null
            };
        const i = s.offsetParent
          , [r,a] = n;
        let o = 0
          , c = 0;
        if (i && i !== document.body) {
            const d = i.getBoundingClientRect();
            o = d.x + r,
            c = d.y + a
        }
        const {width: l, height: u, x: f, y: h} = s.getBoundingClientRect()
          , m = h + a - c
          , g = f + r - o;
        return {
            width: l,
            height: u,
            top: m,
            left: g
        }
    }
    function dd(s) {
        br(s).isWord ? (td(s),
        s.replaceWith(...s.childNodes)) : yr(s.children).forEach(e=>dd(e))
    }
    const Ry = ()=>document.createDocumentFragment();
    function Iy(s, e, t) {
        const n = mc(e.types)
          , i = e.tagName
          , r = s.getElementsByTagName("*")
          , a = [];
        let o = [], c = null, l, u, f, h = [];
        const m = s.parentElement
          , g = s.nextElementSibling
          , d = Ry()
          , p = window.getComputedStyle(s)
          , _ = p.textAlign
          , M = parseFloat(p.fontSize) * .2;
        return e.absolute && (f = {
            left: s.offsetLeft,
            top: s.offsetTop,
            width: s.offsetWidth
        },
        u = s.offsetWidth,
        l = s.offsetHeight,
        Kn(s, {
            cssWidth: s.style.width,
            cssHeight: s.style.height
        })),
        yr(r).forEach(x=>{
            const b = x.parentElement === s
              , {width: S, height: A, top: v, left: w} = Ly(x, b, e, t);
            /^br$/i.test(x.nodeName) || (n.lines && b && ((c === null || v - c >= M) && (c = v,
            a.push(o = [])),
            o.push(x)),
            e.absolute && Kn(x, {
                top: v,
                left: w,
                width: S,
                height: A
            }))
        }
        ),
        m && m.removeChild(s),
        n.lines && (h = a.map(x=>{
            const b = vc(i, {
                class: `${e.splitClass} ${e.lineClass}`,
                style: `display: block; text-align: ${_}; width: 100%;`
            });
            Kn(b, "isLine", !0);
            const S = {
                height: 0,
                top: 1e4
            };
            return d.appendChild(b),
            x.forEach((A,v,w)=>{
                const {isWordEnd: L, top: F, height: V} = br(A)
                  , K = w[v + 1];
                S.height = Math.max(S.height, V),
                S.top = Math.min(S.top, F),
                b.appendChild(A),
                L && br(K).isWordStart && b.append(" ")
            }
            ),
            e.absolute && Kn(b, {
                height: S.height,
                top: S.top
            }),
            b
        }
        ),
        n.words || dd(d),
        s.replaceChildren(d)),
        e.absolute && (s.style.width = `${s.style.width || u}px`,
        s.style.height = `${l}px`,
        yr(r).forEach(x=>{
            const {isLine: b, top: S, left: A, width: v, height: w} = br(x)
              , L = br(x.parentElement)
              , F = !b && L.isLine;
            x.style.top = `${F ? S - L.top : S}px`,
            x.style.left = b ? `${f.left}px` : `${A - (F ? f.left : 0)}px`,
            x.style.height = `${w}px`,
            x.style.width = b ? `${f.width}px` : `${v}px`,
            x.style.position = "absolute"
        }
        )),
        m && (g ? m.insertBefore(s, g) : m.appendChild(s)),
        h
    }
    let ps = vr(yc, {});
    class ms {
        static get data() {
            return mi
        }
        static get defaults() {
            return ps
        }
        static set defaults(e) {
            ps = vr(ps, ua(e))
        }
        static setDefaults(e) {
            return ps = vr(ps, ua(e)),
            yc
        }
        static revert(e) {
            ed(e).forEach(t=>{
                const {isSplit: n, html: i, cssWidth: r, cssHeight: a} = br(t);
                n && (t.innerHTML = i,
                t.style.width = r || "",
                t.style.height = a || "",
                td(t))
            }
            )
        }
        static create(e, t) {
            return new ms(e,t)
        }
        constructor(e, t) {
            this.isSplit = !1,
            this.settings = vr(ps, ua(t)),
            this.elements = ed(e),
            this.revert(),
            this.elements.forEach(n=>{
                Kn(n, "html", n.innerHTML)
            }
            ),
            this.split()
        }
        split(e) {
            this.revert(),
            this.lines = [],
            this.words = [],
            this.chars = [];
            const t = [window.pageXOffset, window.pageYOffset];
            e !== void 0 && (this.settings = vr(this.settings, ua(e)));
            const n = mc(this.settings.types);
            n.none || (this.elements.forEach(i=>{
                Kn(i, "isRoot", !0);
                const {words: r, chars: a} = hd(i, this.settings);
                this.words = [...this.words, ...r],
                this.chars = [...this.chars, ...a]
            }
            ),
            this.elements.forEach(i=>{
                if (n.lines || this.settings.absolute) {
                    const r = Iy(i, this.settings, t);
                    this.lines = [...this.lines, ...r]
                }
            }
            ),
            this.isSplit = !0,
            window.scrollTo(t[0], t[1]),
            gy())
        }
        revert() {
            this.isSplit && (this.lines = null,
            this.words = null,
            this.chars = null,
            this.isSplit = !1),
            ms.revert(this.elements)
        }
    }
    Ct.registerPlugin(xr);
    const Fy = "M0,0 C0,0 0.05953,0.01446 0.08479,0.03162 0.10885,0.04796 0.12587,0.07005 0.14178,0.09628 0.15844,0.12375 0.16576,0.14707 0.17493,0.18024 0.19901,0.26736 0.20507,0.32213 0.22878,0.41107 0.24114,0.45741 0.24934,0.4852 0.26774,0.52828 0.28674,0.57279 0.30074,0.60138 0.32707,0.64127 0.35324,0.68091 0.37341,0.7064 0.40722,0.73958 0.4456,0.77724 0.4741,0.80016 0.51935,0.82993 0.56705,0.86132 0.60025,0.87841 0.65326,0.90146 0.71339,0.9276 0.75191,0.94064 0.81567,0.95876 0.88559,0.97863 1,1 1,1 ";
    new ms(".intro-text-one, .intro-text-one-abs, .intro-text-two, .intro-text-two-abs",{
        types: "words, chars, line",
        tagName: "span"
    });
    function zy() {
        $(".intro-trigger").click()
    }
    const Oy = document.querySelector(".intro-button");
    const Uy = "M0,0 C0,0 0.05953,0.01446 0.08479,0.03162 0.10885,0.04796 0.12587,0.07005 0.14178,0.09628 0.15844,0.12375 0.16576,0.14707 0.17493,0.18024 0.19901,0.26736 0.20507,0.32213 0.22878,0.41107 0.24114,0.45741 0.24934,0.4852 0.26774,0.52828 0.28674,0.57279 0.30074,0.60138 0.32707,0.64127 0.35324,0.68091 0.37341,0.7064 0.40722,0.73958 0.4456,0.77724 0.4741,0.80016 0.51935,0.82993 0.56705,0.86132 0.60025,0.87841 0.65326,0.90146 0.71339,0.9276 0.75191,0.94064 0.81567,0.95876 0.88559,0.97863 1,1 1,1 ";
    new ms(".intro-text-one, .intro-text-one-abs, .intro-text-two, .intro-text-two-abs",{
        types: "words, chars, line",
        tagName: "span"
    });
    function ky() {
        const s = Ct.timeline({
            delay: .5
        });
        s.to(".page-wrapper", {
            opacity: 1,
            duration: .2,
            ease: Ii.easeOut
        }, 0)
    }
    function pd(s, e) {
        for (var t = 0; t < e.length; t++) {
            var n = e[t];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(s, n.key, n)
        }
    }
    function By(s, e, t) {
        return e && pd(s.prototype, e),
        t && pd(s, t),
        s
    }
    /*!
 * Observer 3.10.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
    var Gt, bc, dn, Mr, Sr, gs, md, wr, no, gd, gi, Hn, _d = function() {
        return Gt || typeof window != "undefined" && (Gt = window.gsap) && Gt.registerPlugin && Gt
    }, xd = 1, _s = [], Ke = [], Jn = [], io = Date.now, Mc = function(e, t) {
        return t
    }, Gy = function() {
        var e = no.core
          , t = e.bridge || {}
          , n = e._scrollers
          , i = e._proxies;
        n.push.apply(n, Ke),
        i.push.apply(i, Jn),
        Ke = n,
        Jn = i,
        Mc = function(a, o) {
            return t[a](o)
        }
    }, Gi = function(e, t) {
        return ~Jn.indexOf(e) && Jn[Jn.indexOf(e) + 1][t]
    }, da = function(e) {
        return !!~gd.indexOf(e)
    }, nn = function(e, t, n, i, r) {
        return e.addEventListener(t, n, {
            passive: !i,
            capture: !!r
        })
    }, Vt = function(e, t, n, i) {
        return e.removeEventListener(t, n, !!i)
    }, pa = "scrollLeft", ma = "scrollTop", vd = function() {
        return gi && gi.isPressed || Ke.cache++
    }, ga = function(e, t) {
        var n = function i(r) {
            if (r || r === 0) {
                xd && (dn.history.scrollRestoration = "manual");
                var a = gi && gi.isPressed;
                r = i.v = Math.round(r) || (gi && gi.iOS ? 1 : 0),
                e(r),
                i.cacheID = Ke.cache,
                a && Mc("ss", r)
            } else
                (t || Ke.cache !== i.cacheID || Mc("ref")) && (i.cacheID = Ke.cache,
                i.v = e());
            return i.v + i.offset
        };
        return n.offset = 0,
        e && n
    }, Ht = {
        s: pa,
        p: "left",
        p2: "Left",
        os: "right",
        os2: "Right",
        d: "width",
        d2: "Width",
        a: "x",
        sc: ga(function(s) {
            return arguments.length ? dn.scrollTo(s, yt.sc()) : dn.pageXOffset || Mr[pa] || Sr[pa] || gs[pa] || 0
        })
    }, yt = {
        s: ma,
        p: "top",
        p2: "Top",
        os: "bottom",
        os2: "Bottom",
        d: "height",
        d2: "Height",
        a: "y",
        op: Ht,
        sc: ga(function(s) {
            return arguments.length ? dn.scrollTo(Ht.sc(), s) : dn.pageYOffset || Mr[ma] || Sr[ma] || gs[ma] || 0
        })
    }, rn = function(e) {
        return Gt.utils.toArray(e)[0] || (typeof e == "string" && Gt.config().nullTargetWarn !== !1 ? console.warn("Element not found:", e) : null)
    }, Vi = function(e, t) {
        var n = t.s
          , i = t.sc
          , r = Ke.indexOf(e)
          , a = i === yt.sc ? 1 : 2;
        return !~r && (r = Ke.push(e) - 1),
        Ke[r + a] || (Ke[r + a] = ga(Gi(e, n), !0) || (da(e) ? i : ga(function(o) {
            return arguments.length ? e[n] = o : e[n]
        })))
    }, Sc = function(e, t, n) {
        var i = e
          , r = e
          , a = io()
          , o = a
          , c = t || 50
          , l = Math.max(500, c * 3)
          , u = function(g, d) {
            var p = io();
            d || p - a > c ? (r = i,
            i = g,
            o = a,
            a = p) : n ? i += g : i = r + (g - r) / (p - o) * (a - o)
        }
          , f = function() {
            r = i = n ? 0 : i,
            o = a = 0
        }
          , h = function(g) {
            var d = o
              , p = r
              , _ = io();
            return (g || g === 0) && g !== i && u(g),
            a === o || _ - o > l ? 0 : (i + (n ? p : -p)) / ((n ? _ : a) - d) * 1e3
        };
        return {
            update: u,
            reset: f,
            getVelocity: h
        }
    }, ro = function(e, t) {
        return t && !e._gsapAllow && e.preventDefault(),
        e.changedTouches ? e.changedTouches[0] : e
    }, yd = function(e) {
        var t = Math.max.apply(Math, e)
          , n = Math.min.apply(Math, e);
        return Math.abs(t) >= Math.abs(n) ? t : n
    }, bd = function() {
        no = Gt.core.globals().ScrollTrigger,
        no && no.core && Gy()
    }, Md = function(e) {
        return Gt = e || _d(),
        Gt && typeof document != "undefined" && document.body && (dn = window,
        Mr = document,
        Sr = Mr.documentElement,
        gs = Mr.body,
        gd = [dn, Mr, Sr, gs],
        Gt.utils.clamp,
        wr = "onpointerenter"in gs ? "pointer" : "mouse",
        md = gt.isTouch = dn.matchMedia && dn.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart"in dn || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0,
        Hn = gt.eventTypes = ("ontouchstart"in Sr ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown"in Sr ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","),
        setTimeout(function() {
            return xd = 0
        }, 500),
        bd(),
        bc = 1),
        bc
    };
    Ht.op = yt,
    Ke.cache = 0;
    var gt = function() {
        function s(t) {
            this.init(t)
        }
        var e = s.prototype;
        return e.init = function(n) {
            bc || Md(Gt) || console.warn("Please gsap.registerPlugin(Observer)"),
            no || bd();
            var i = n.tolerance
              , r = n.dragMinimum
              , a = n.type
              , o = n.target
              , c = n.lineHeight
              , l = n.debounce
              , u = n.preventDefault
              , f = n.onStop
              , h = n.onStopDelay
              , m = n.ignore
              , g = n.wheelSpeed
              , d = n.event
              , p = n.onDragStart
              , _ = n.onDragEnd
              , y = n.onDrag
              , M = n.onPress
              , x = n.onRelease
              , b = n.onRight
              , S = n.onLeft
              , A = n.onUp
              , v = n.onDown
              , w = n.onChangeX
              , L = n.onChangeY
              , F = n.onChange
              , V = n.onToggleX
              , K = n.onToggleY
              , R = n.onHover
              , U = n.onHoverEnd
              , z = n.onMove
              , W = n.ignoreCheck
              , X = n.isNormalizer
              , G = n.onGestureStart
              , P = n.onGestureEnd
              , ee = n.onWheel
              , te = n.onEnable
              , ie = n.onDisable
              , ce = n.onClick
              , Me = n.scrollSpeed
              , H = n.capture
              , Le = n.allowClicks
              , xe = n.lockAxis
              , Ce = n.onLockAxis;
            this.target = o = rn(o) || Sr,
            this.vars = n,
            m && (m = Gt.utils.toArray(m)),
            i = i || 0,
            r = r || 0,
            g = g || 1,
            Me = Me || 1,
            a = a || "wheel,touch,pointer",
            l = l !== !1,
            c || (c = parseFloat(dn.getComputedStyle(gs).lineHeight) || 22);
            var oe, Ne, me, _e, qe, et, Xe, Y = this, Qe = 0, De = 0, pt = Vi(o, Ht), ft = Vi(o, yt), D = pt(), T = ft(), j = ~a.indexOf("touch") && !~a.indexOf("pointer") && Hn[0] === "pointerdown", re = da(o), ne = o.ownerDocument || Mr, le = [0, 0, 0], be = [0, 0, 0], C = 0, Q = function() {
                return C = io()
            }, se = function(J, ve) {
                return (Y.event = J) && m && ~m.indexOf(J.target) || ve && j && J.pointerType !== "touch" || W && W(J, ve)
            }, he = function() {
                Y._vx.reset(),
                Y._vy.reset(),
                Ne.pause(),
                f && f(Y)
            }, ue = function() {
                var J = Y.deltaX = yd(le)
                  , ve = Y.deltaY = yd(be)
                  , Ee = Math.abs(J) >= i
                  , Re = Math.abs(ve) >= i;
                F && (Ee || Re) && F(Y, J, ve, le, be),
                Ee && (b && Y.deltaX > 0 && b(Y),
                S && Y.deltaX < 0 && S(Y),
                w && w(Y),
                V && Y.deltaX < 0 != Qe < 0 && V(Y),
                Qe = Y.deltaX,
                le[0] = le[1] = le[2] = 0),
                Re && (v && Y.deltaY > 0 && v(Y),
                A && Y.deltaY < 0 && A(Y),
                L && L(Y),
                K && Y.deltaY < 0 != De < 0 && K(Y),
                De = Y.deltaY,
                be[0] = be[1] = be[2] = 0),
                (_e || me) && (z && z(Y),
                Ce && et && Ce(Y),
                me && (y(Y),
                me = !1),
                _e = et = !1),
                qe && (ee(Y),
                qe = !1),
                oe = 0
            }, we = function(J, ve, Ee) {
                le[Ee] += J,
                be[Ee] += ve,
                Y._vx.update(J),
                Y._vy.update(ve),
                l ? oe || (oe = requestAnimationFrame(ue)) : ue()
            }, Ue = function(J, ve) {
                Xe !== "y" && (le[2] += J,
                Y._vx.update(J, !0)),
                Xe !== "x" && (be[2] += ve,
                Y._vy.update(ve, !0)),
                xe && !Xe && (Y.axis = Xe = Math.abs(J) > Math.abs(ve) ? "x" : "y",
                et = !0),
                l ? oe || (oe = requestAnimationFrame(ue)) : ue()
            }, Te = function(J) {
                if (!se(J, 1)) {
                    J = ro(J, u);
                    var ve = J.clientX
                      , Ee = J.clientY
                      , Re = ve - Y.x
                      , bt = Ee - Y.y
                      , Oe = Y.isDragging;
                    Y.x = ve,
                    Y.y = Ee,
                    (Oe || Math.abs(Y.startX - ve) >= r || Math.abs(Y.startY - Ee) >= r) && (y && (me = !0),
                    Oe || (Y.isDragging = !0),
                    Ue(Re, bt),
                    Oe || p && p(Y))
                }
            }, I = Y.onPress = function(ze) {
                se(ze, 1) || (Y.axis = Xe = null,
                Ne.pause(),
                Y.isPressed = !0,
                ze = ro(ze),
                Qe = De = 0,
                Y.startX = Y.x = ze.clientX,
                Y.startY = Y.y = ze.clientY,
                Y._vx.reset(),
                Y._vy.reset(),
                nn(X ? o : ne, Hn[1], Te, u, !0),
                Y.deltaX = Y.deltaY = 0,
                M && M(Y))
            }
            , ae = function(J) {
                if (!se(J, 1)) {
                    Vt(X ? o : ne, Hn[1], Te, !0);
                    var ve = Y.isDragging && (Math.abs(Y.x - Y.startX) > 3 || Math.abs(Y.y - Y.startY) > 3)
                      , Ee = ro(J);
                    ve || (Y._vx.reset(),
                    Y._vy.reset(),
                    u && Le && Gt.delayedCall(.08, function() {
                        if (io() - C > 300 && !J.defaultPrevented) {
                            if (J.target.click)
                                J.target.click();
                            else if (ne.createEvent) {
                                var Re = ne.createEvent("MouseEvents");
                                Re.initMouseEvent("click", !0, !0, dn, 1, Ee.screenX, Ee.screenY, Ee.clientX, Ee.clientY, !1, !1, !1, !1, 0, null),
                                J.target.dispatchEvent(Re)
                            }
                        }
                    })),
                    Y.isDragging = Y.isGesturing = Y.isPressed = !1,
                    f && !X && Ne.restart(!0),
                    _ && ve && _(Y),
                    x && x(Y, ve)
                }
            }, q = function(J) {
                return J.touches && J.touches.length > 1 && (Y.isGesturing = !0) && G(J, Y.isDragging)
            }, de = function() {
                return (Y.isGesturing = !1) || P(Y)
            }, fe = function(J) {
                if (!se(J)) {
                    var ve = pt()
                      , Ee = ft();
                    we((ve - D) * Me, (Ee - T) * Me, 1),
                    D = ve,
                    T = Ee,
                    f && Ne.restart(!0)
                }
            }, Be = function(J) {
                if (!se(J)) {
                    J = ro(J, u),
                    ee && (qe = !0);
                    var ve = (J.deltaMode === 1 ? c : J.deltaMode === 2 ? dn.innerHeight : 1) * g;
                    we(J.deltaX * ve, J.deltaY * ve, 0),
                    f && !X && Ne.restart(!0)
                }
            }, st = function(J) {
                if (!se(J)) {
                    var ve = J.clientX
                      , Ee = J.clientY
                      , Re = ve - Y.x
                      , bt = Ee - Y.y;
                    Y.x = ve,
                    Y.y = Ee,
                    _e = !0,
                    (Re || bt) && Ue(Re, bt)
                }
            }, Ze = function(J) {
                Y.event = J,
                R(Y)
            }, sn = function(J) {
                Y.event = J,
                U(Y)
            }, tt = function(J) {
                return se(J) || ro(J, u) && ce(Y)
            };
            Ne = Y._dc = Gt.delayedCall(h || .25, he).pause(),
            Y.deltaX = Y.deltaY = 0,
            Y._vx = Sc(0, 50, !0),
            Y._vy = Sc(0, 50, !0),
            Y.scrollX = pt,
            Y.scrollY = ft,
            Y.isDragging = Y.isGesturing = Y.isPressed = !1,
            Y.enable = function(ze) {
                return Y.isEnabled || (nn(re ? ne : o, "scroll", vd),
                a.indexOf("scroll") >= 0 && nn(re ? ne : o, "scroll", fe, u, H),
                a.indexOf("wheel") >= 0 && nn(o, "wheel", Be, u, H),
                (a.indexOf("touch") >= 0 && md || a.indexOf("pointer") >= 0) && (nn(o, Hn[0], I, u, H),
                nn(ne, Hn[2], ae),
                nn(ne, Hn[3], ae),
                Le && nn(o, "click", Q, !1, !0),
                ce && nn(o, "click", tt),
                G && nn(ne, "gesturestart", q),
                P && nn(ne, "gestureend", de),
                R && nn(o, wr + "enter", Ze),
                U && nn(o, wr + "leave", sn),
                z && nn(o, wr + "move", st)),
                Y.isEnabled = !0,
                ze && ze.type && I(ze),
                te && te(Y)),
                Y
            }
            ,
            Y.disable = function() {
                Y.isEnabled && (_s.filter(function(ze) {
                    return ze !== Y && da(ze.target)
                }).length || Vt(re ? ne : o, "scroll", vd),
                Y.isPressed && (Y._vx.reset(),
                Y._vy.reset(),
                Vt(X ? o : ne, Hn[1], Te, !0)),
                Vt(re ? ne : o, "scroll", fe, H),
                Vt(o, "wheel", Be, H),
                Vt(o, Hn[0], I, H),
                Vt(ne, Hn[2], ae),
                Vt(ne, Hn[3], ae),
                Vt(o, "click", Q, !0),
                Vt(o, "click", tt),
                Vt(ne, "gesturestart", q),
                Vt(ne, "gestureend", de),
                Vt(o, wr + "enter", Ze),
                Vt(o, wr + "leave", sn),
                Vt(o, wr + "move", st),
                Y.isEnabled = Y.isPressed = Y.isDragging = !1,
                ie && ie(Y))
            }
            ,
            Y.kill = function() {
                Y.disable();
                var ze = _s.indexOf(Y);
                ze >= 0 && _s.splice(ze, 1),
                gi === Y && (gi = 0)
            }
            ,
            _s.push(Y),
            X && da(o) && (gi = Y),
            Y.enable(d)
        }
        ,
        By(s, [{
            key: "velocityX",
            get: function() {
                return this._vx.getVelocity()
            }
        }, {
            key: "velocityY",
            get: function() {
                return this._vy.getVelocity()
            }
        }]),
        s
    }();
    gt.version = "3.10.4",
    gt.create = function(s) {
        return new gt(s)
    }
    ,
    gt.register = Md,
    gt.getAll = function() {
        return _s.slice()
    }
    ,
    gt.getById = function(s) {
        return _s.filter(function(e) {
            return e.vars.id === s
        })[0]
    }
    ,
    _d() && Gt.registerPlugin(gt);
    /*!
 * ScrollTrigger 3.10.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
    var Ie, Tr, We, lt, _i, ct, Sd, _a, xa, xs, va, ya, Rt, ba, wc, Wt, wd, Td, vs, Ed, Tc, Cd, wn, Ad, Pd, Dd, Er, Ec, so = 1, Xt = Date.now, Cc = Xt(), Tn = 0, Ma = 0, Ld = function() {
        return ba = 1
    }, Rd = function() {
        return ba = 0
    }, Hi = function(e) {
        return e
    }, oo = function(e) {
        return Math.round(e * 1e5) / 1e5 || 0
    }, Id = function() {
        return typeof window != "undefined"
    }, Fd = function() {
        return Ie || Id() && (Ie = window.gsap) && Ie.registerPlugin && Ie
    }, Cr = function(e) {
        return !!~Sd.indexOf(e)
    }, zd = function(e) {
        return Gi(e, "getBoundingClientRect") || (Cr(e) ? function() {
            return Ua.width = We.innerWidth,
            Ua.height = We.innerHeight,
            Ua
        }
        : function() {
            return xi(e)
        }
        )
    }, Vy = function(e, t, n) {
        var i = n.d
          , r = n.d2
          , a = n.a;
        return (a = Gi(e, "getBoundingClientRect")) ? function() {
            return a()[i]
        }
        : function() {
            return (t ? We["inner" + r] : e["client" + r]) || 0
        }
    }, Hy = function(e, t) {
        return !t || ~Jn.indexOf(e) ? zd(e) : function() {
            return Ua
        }
    }, Wi = function(e, t) {
        var n = t.s
          , i = t.d2
          , r = t.d
          , a = t.a;
        return (n = "scroll" + i) && (a = Gi(e, n)) ? a() - zd(e)()[r] : Cr(e) ? (_i[n] || ct[n]) - (We["inner" + i] || _i["client" + i] || ct["client" + i]) : e[n] - e["offset" + i]
    }, Sa = function(e, t) {
        for (var n = 0; n < vs.length; n += 3)
            (!t || ~t.indexOf(vs[n + 1])) && e(vs[n], vs[n + 1], vs[n + 2])
    }, Qn = function(e) {
        return typeof e == "string"
    }, Wn = function(e) {
        return typeof e == "function"
    }, ao = function(e) {
        return typeof e == "number"
    }, wa = function(e) {
        return typeof e == "object"
    }, Ta = function(e) {
        return Wn(e) && e()
    }, Od = function(e, t) {
        return function() {
            var n = Ta(e)
              , i = Ta(t);
            return function() {
                Ta(n),
                Ta(i)
            }
        }
    }, lo = function(e, t, n) {
        return e && e.progress(t ? 0 : 1) && n && e.pause()
    }, Ac = function(e, t) {
        if (e.enabled) {
            var n = t(e);
            n && n.totalTime && (e.callbackAnimation = n)
        }
    }, ys = Math.abs, Nd = "left", Ud = "top", Pc = "right", Dc = "bottom", Ar = "width", Pr = "height", co = "Right", uo = "Left", fo = "Top", ho = "Bottom", _t = "padding", En = "margin", bs = "Width", Lc = "Height", qt = "px", ei = function(e) {
        return We.getComputedStyle(e)
    }, Wy = function(e) {
        var t = ei(e).position;
        e.style.position = t === "absolute" || t === "fixed" ? t : "relative"
    }, kd = function(e, t) {
        for (var n in t)
            n in e || (e[n] = t[n]);
        return e
    }, xi = function(e, t) {
        var n = t && ei(e)[wc] !== "matrix(1, 0, 0, 1, 0, 0)" && Ie.to(e, {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0
        }).progress(1)
          , i = e.getBoundingClientRect();
        return n && n.progress(0).kill(),
        i
    }, Rc = function(e, t) {
        var n = t.d2;
        return e["offset" + n] || e["client" + n] || 0
    }, Bd = function(e) {
        var t = [], n = e.labels, i = e.duration(), r;
        for (r in n)
            t.push(n[r] / i);
        return t
    }, Xy = function(e) {
        return function(t) {
            return Ie.utils.snap(Bd(e), t)
        }
    }, Ic = function(e) {
        var t = Ie.utils.snap(e)
          , n = Array.isArray(e) && e.slice(0).sort(function(i, r) {
            return i - r
        });
        return n ? function(i, r, a) {
            a === void 0 && (a = .001);
            var o;
            if (!r)
                return t(i);
            if (r > 0) {
                for (i -= a,
                o = 0; o < n.length; o++)
                    if (n[o] >= i)
                        return n[o];
                return n[o - 1]
            } else
                for (o = n.length,
                i += a; o--; )
                    if (n[o] <= i)
                        return n[o];
            return n[0]
        }
        : function(i, r, a) {
            a === void 0 && (a = .001);
            var o = t(i);
            return !r || Math.abs(o - i) < a || o - i < 0 == r < 0 ? o : t(r < 0 ? i - e : i + e)
        }
    }, qy = function(e) {
        return function(t, n) {
            return Ic(Bd(e))(t, n.direction)
        }
    }, Ea = function(e, t, n, i) {
        return n.split(",").forEach(function(r) {
            return e(t, r, i)
        })
    }, It = function(e, t, n, i, r) {
        return e.addEventListener(t, n, {
            passive: !i,
            capture: !!r
        })
    }, At = function(e, t, n, i) {
        return e.removeEventListener(t, n, !!i)
    }, Ca = function(e, t, n) {
        return n && n.wheelHandler && e(t, "wheel", n)
    }, Gd = {
        startColor: "green",
        endColor: "red",
        indent: 0,
        fontSize: "16px",
        fontWeight: "normal"
    }, Aa = {
        toggleActions: "play",
        anticipatePin: 0
    }, Pa = {
        top: 0,
        left: 0,
        center: .5,
        bottom: 1,
        right: 1
    }, Da = function(e, t) {
        if (Qn(e)) {
            var n = e.indexOf("=")
              , i = ~n ? +(e.charAt(n - 1) + 1) * parseFloat(e.substr(n + 1)) : 0;
            ~n && (e.indexOf("%") > n && (i *= t / 100),
            e = e.substr(0, n - 1)),
            e = i + (e in Pa ? Pa[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0)
        }
        return e
    }, La = function(e, t, n, i, r, a, o, c) {
        var l = r.startColor
          , u = r.endColor
          , f = r.fontSize
          , h = r.indent
          , m = r.fontWeight
          , g = lt.createElement("div")
          , d = Cr(n) || Gi(n, "pinType") === "fixed"
          , p = e.indexOf("scroller") !== -1
          , _ = d ? ct : n
          , y = e.indexOf("start") !== -1
          , M = y ? l : u
          , x = "border-color:" + M + ";font-size:" + f + ";color:" + M + ";font-weight:" + m + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
        return x += "position:" + ((p || c) && d ? "fixed;" : "absolute;"),
        (p || c || !d) && (x += (i === yt ? Pc : Dc) + ":" + (a + parseFloat(h)) + "px;"),
        o && (x += "box-sizing:border-box;text-align:left;width:" + o.offsetWidth + "px;"),
        g._isStart = y,
        g.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")),
        g.style.cssText = x,
        g.innerText = t || t === 0 ? e + "-" + t : e,
        _.children[0] ? _.insertBefore(g, _.children[0]) : _.appendChild(g),
        g._offset = g["offset" + i.op.d2],
        Ra(g, 0, i, y),
        g
    }, Ra = function(e, t, n, i) {
        var r = {
            display: "block"
        }
          , a = n[i ? "os2" : "p2"]
          , o = n[i ? "p2" : "os2"];
        e._isFlipped = i,
        r[n.a + "Percent"] = i ? -100 : 0,
        r[n.a] = i ? "1px" : 0,
        r["border" + a + bs] = 1,
        r["border" + o + bs] = 0,
        r[n.p] = t + "px",
        Ie.set(e, r)
    }, Ye = [], Fc = {}, zc, Vd = function() {
        return Xt() - Tn > 34 && _o()
    }, Ms = function() {
        (!wn || !wn.isPressed || wn.startX > ct.clientWidth) && (Ke.cache++,
        zc || (zc = requestAnimationFrame(_o)),
        Tn || Dr("scrollStart"),
        Tn = Xt())
    }, Hd = function() {
        Dd = We.innerWidth,
        Pd = We.innerHeight
    }, po = function() {
        Ke.cache++,
        !Rt && !Cd && !lt.fullscreenElement && !lt.webkitFullscreenElement && (!Ad || Dd !== We.innerWidth || Math.abs(We.innerHeight - Pd) > We.innerHeight * .25) && _a.restart(!0)
    }, mo = {}, Yy = [], ut = [], Ss, Wd, Xd = function(e) {
        var t = Ie.ticker.frame, n = [], i = 0, r;
        if (Wd !== t || so) {
            for (Ia(); i < ut.length; i += 4)
                r = We.matchMedia(ut[i]).matches,
                r !== ut[i + 3] && (ut[i + 3] = r,
                r ? n.push(i) : Ia(1, ut[i]) || Wn(ut[i + 2]) && ut[i + 2]());
            for (Yd(),
            i = 0; i < n.length; i++)
                r = n[i],
                Ss = ut[r],
                ut[r + 2] = ut[r + 1](e);
            Ss = 0,
            Tr && ws(0, 1),
            Wd = t,
            Dr("matchMedia")
        }
    }, qd = function s() {
        return At(je, "scrollEnd", s) || ws(!0)
    }, Dr = function(e) {
        return mo[e] && mo[e].map(function(t) {
            return t()
        }) || Yy
    }, Cn = [], Yd = function(e) {
        for (var t = 0; t < Cn.length; t += 5)
            (!e || Cn[t + 4] === e) && (Cn[t].style.cssText = Cn[t + 1],
            Cn[t].getBBox && Cn[t].setAttribute("transform", Cn[t + 2] || ""),
            Cn[t + 3].uncache = 1)
    }, Ia = function(e, t) {
        var n;
        for (Wt = 0; Wt < Ye.length; Wt++)
            n = Ye[Wt],
            (!t || n.media === t) && (e ? n.kill(1) : n.revert());
        t && Yd(t),
        t || Dr("revert")
    }, $d = function() {
        return Ke.cache++ && Ke.forEach(function(e) {
            return typeof e == "function" && (e.rec = 0)
        })
    }, go, Fa = 0, ws = function(e, t) {
        if (Tn && !e) {
            It(je, "scrollEnd", qd);
            return
        }
        go = !0;
        var n = Dr("refreshInit");
        Ed && je.sort(),
        t || Ia(),
        Ye.slice(0).forEach(function(i) {
            return i.refresh()
        }),
        Ye.forEach(function(i) {
            return i.vars.end === "max" && i.setPositions(i.start, Wi(i.scroller, i._dir))
        }),
        n.forEach(function(i) {
            return i && i.render && i.render(-1)
        }),
        $d(),
        _a.pause(),
        Fa++,
        go = !1,
        Dr("refresh")
    }, jd = 0, za = 1, Lr, _o = function() {
        if (!go) {
            je.isUpdating = !0,
            Lr && Lr.update(0);
            var e = Ye.length
              , t = Xt()
              , n = t - Cc >= 50
              , i = e && Ye[0].scroll();
            if (za = jd > i ? -1 : 1,
            jd = i,
            n && (Tn && !ba && t - Tn > 200 && (Tn = 0,
            Dr("scrollEnd")),
            va = Cc,
            Cc = t),
            za < 0) {
                for (Wt = e; Wt-- > 0; )
                    Ye[Wt] && Ye[Wt].update(0, n);
                za = 1
            } else
                for (Wt = 0; Wt < e; Wt++)
                    Ye[Wt] && Ye[Wt].update(0, n);
            je.isUpdating = !1
        }
        zc = 0
    }, Oc = [Nd, Ud, Dc, Pc, En + ho, En + co, En + fo, En + uo, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"], Oa = Oc.concat([Ar, Pr, "boxSizing", "max" + bs, "max" + Lc, "position", En, _t, _t + fo, _t + co, _t + ho, _t + uo]), $y = function(e, t, n) {
        xo(n);
        var i = e._gsap;
        if (i.spacerIsNative)
            xo(i.spacerState);
        else if (e.parentNode === t) {
            var r = t.parentNode;
            r && (r.insertBefore(e, t),
            r.removeChild(t))
        }
    }, Nc = function(e, t, n, i) {
        if (e.parentNode !== t) {
            for (var r = Oc.length, a = t.style, o = e.style, c; r--; )
                c = Oc[r],
                a[c] = n[c];
            a.position = n.position === "absolute" ? "absolute" : "relative",
            n.display === "inline" && (a.display = "inline-block"),
            o[Dc] = o[Pc] = a.flexBasis = "auto",
            a.overflow = "visible",
            a.boxSizing = "border-box",
            a[Ar] = Rc(e, Ht) + qt,
            a[Pr] = Rc(e, yt) + qt,
            a[_t] = o[En] = o[Ud] = o[Nd] = "0",
            xo(i),
            o[Ar] = o["max" + bs] = n[Ar],
            o[Pr] = o["max" + Lc] = n[Pr],
            o[_t] = n[_t],
            e.parentNode.insertBefore(t, e),
            t.appendChild(e)
        }
    }, jy = /([A-Z])/g, xo = function(e) {
        if (e) {
            var t = e.t.style, n = e.length, i = 0, r, a;
            for ((e.t._gsap || Ie.core.getCache(e.t)).uncache = 1; i < n; i += 2)
                a = e[i + 1],
                r = e[i],
                a ? t[r] = a : t[r] && t.removeProperty(r.replace(jy, "-$1").toLowerCase())
        }
    }, Na = function(e) {
        for (var t = Oa.length, n = e.style, i = [], r = 0; r < t; r++)
            i.push(Oa[r], n[Oa[r]]);
        return i.t = e,
        i
    }, Zy = function(e, t, n) {
        for (var i = [], r = e.length, a = n ? 8 : 0, o; a < r; a += 2)
            o = e[a],
            i.push(o, o in t ? t[o] : e[a + 1]);
        return i.t = e.t,
        i
    }, Ua = {
        left: 0,
        top: 0
    }, Zd = function(e, t, n, i, r, a, o, c, l, u, f, h, m) {
        Wn(e) && (e = e(c)),
        Qn(e) && e.substr(0, 3) === "max" && (e = h + (e.charAt(4) === "=" ? Da("0" + e.substr(3), n) : 0));
        var g = m ? m.time() : 0, d, p, _;
        if (m && m.seek(0),
        ao(e))
            o && Ra(o, n, i, !0);
        else {
            Wn(t) && (t = t(c));
            var y = e.split(" "), M, x, b, S;
            _ = rn(t) || ct,
            M = xi(_) || {},
            (!M || !M.left && !M.top) && ei(_).display === "none" && (S = _.style.display,
            _.style.display = "block",
            M = xi(_),
            S ? _.style.display = S : _.style.removeProperty("display")),
            x = Da(y[0], M[i.d]),
            b = Da(y[1] || "0", n),
            e = M[i.p] - l[i.p] - u + x + r - b,
            o && Ra(o, b, i, n - b < 20 || o._isStart && b > 20),
            n -= n - b
        }
        if (a) {
            var A = e + n
              , v = a._isStart;
            d = "scroll" + i.d2,
            Ra(a, A, i, v && A > 20 || !v && (f ? Math.max(ct[d], _i[d]) : a.parentNode[d]) <= A + 1),
            f && (l = xi(o),
            f && (a.style[i.op.p] = l[i.op.p] - i.op.m - a._offset + qt))
        }
        return m && _ && (d = xi(_),
        m.seek(h),
        p = xi(_),
        m._caScrollDist = d[i.p] - p[i.p],
        e = e / m._caScrollDist * h),
        m && m.seek(g),
        m ? e : Math.round(e)
    }, Ky = /(webkit|moz|length|cssText|inset)/i, Kd = function(e, t, n, i) {
        if (e.parentNode !== t) {
            var r = e.style, a, o;
            if (t === ct) {
                e._stOrig = r.cssText,
                o = ei(e);
                for (a in o)
                    !+a && !Ky.test(a) && o[a] && typeof r[a] == "string" && a !== "0" && (r[a] = o[a]);
                r.top = n,
                r.left = i
            } else
                r.cssText = e._stOrig;
            Ie.core.getCache(e).uncache = 1,
            t.appendChild(e)
        }
    }, Jd = function(e, t) {
        var n = Vi(e, t), i = "_scroll" + t.p2, r, a, o = function c(l, u, f, h, m) {
            var g = c.tween
              , d = u.onComplete
              , p = {};
            return f = f || n(),
            m = h && m || 0,
            h = h || l - f,
            g && g.kill(),
            r = Math.round(f),
            u[i] = l,
            u.modifiers = p,
            p[i] = function(_) {
                return _ = oo(n()),
                _ !== r && _ !== a && Math.abs(_ - r) > 2 && Math.abs(_ - a) > 2 ? (g.kill(),
                c.tween = 0) : _ = f + h * g.ratio + m * g.ratio * g.ratio,
                a = r,
                r = oo(_)
            }
            ,
            u.onComplete = function() {
                c.tween = 0,
                d && d.call(g)
            }
            ,
            g = c.tween = Ie.to(e, u),
            g
        };
        return e[i] = n,
        n.wheelHandler = function() {
            return o.tween && o.tween.kill() && (o.tween = 0)
        }
        ,
        It(e, "wheel", n.wheelHandler),
        o
    }, je = function() {
        function s(t, n) {
            Tr || s.register(Ie) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
            this.init(t, n)
        }
        var e = s.prototype;
        return e.init = function(n, i) {
            if (this.progress = this.start = 0,
            this.vars && this.kill(!0, !0),
            !Ma) {
                this.update = this.refresh = this.kill = Hi;
                return
            }
            n = kd(Qn(n) || ao(n) || n.nodeType ? {
                trigger: n
            } : n, Aa);
            var r = n, a = r.onUpdate, o = r.toggleClass, c = r.id, l = r.onToggle, u = r.onRefresh, f = r.scrub, h = r.trigger, m = r.pin, g = r.pinSpacing, d = r.invalidateOnRefresh, p = r.anticipatePin, _ = r.onScrubComplete, y = r.onSnapComplete, M = r.once, x = r.snap, b = r.pinReparent, S = r.pinSpacer, A = r.containerAnimation, v = r.fastScrollEnd, w = r.preventOverlaps, L = n.horizontal || n.containerAnimation && n.horizontal !== !1 ? Ht : yt, F = !f && f !== 0, V = rn(n.scroller || We), K = Ie.core.getCache(V), R = Cr(V), U = ("pinType"in n ? n.pinType : Gi(V, "pinType") || R && "fixed") === "fixed", z = [n.onEnter, n.onLeave, n.onEnterBack, n.onLeaveBack], W = F && n.toggleActions.split(" "), X = "markers"in n ? n.markers : Aa.markers, G = R ? 0 : parseFloat(ei(V)["border" + L.p2 + bs]) || 0, P = this, ee = n.onRefreshInit && function() {
                return n.onRefreshInit(P)
            }
            , te = Vy(V, R, L), ie = Hy(V, R), ce = 0, Me = 0, H = Vi(V, L), Le, xe, Ce, oe, Ne, me, _e, qe, et, Xe, Y, Qe, De, pt, ft, D, T, j, re, ne, le, be, C, Q, se, he, ue, we, Ue, Te, I, ae, q, de, fe, Be, st, Ze;
            if (P.media = Ss,
            P._dir = L,
            p *= 45,
            P.scroller = V,
            P.scroll = A ? A.time.bind(A) : H,
            oe = H(),
            P.vars = n,
            i = i || n.animation,
            "refreshPriority"in n && (Ed = 1,
            n.refreshPriority === -9999 && (Lr = P)),
            K.tweenScroll = K.tweenScroll || {
                top: Jd(V, yt),
                left: Jd(V, Ht)
            },
            P.tweenTo = Le = K.tweenScroll[L.p],
            P.scrubDuration = function(J) {
                I = ao(J) && J,
                I ? Te ? Te.duration(J) : Te = Ie.to(i, {
                    ease: "expo",
                    totalProgress: "+=0.001",
                    duration: I,
                    paused: !0,
                    onComplete: function() {
                        return _ && _(P)
                    }
                }) : (Te && Te.progress(1).kill(),
                Te = 0)
            }
            ,
            i && (i.vars.lazy = !1,
            i._initted || i.vars.immediateRender !== !1 && n.immediateRender !== !1 && i.render(0, !0, !0),
            P.animation = i.pause(),
            i.scrollTrigger = P,
            P.scrubDuration(f),
            we = 0,
            c || (c = i.vars.id)),
            Ye.push(P),
            x && ((!wa(x) || x.push) && (x = {
                snapTo: x
            }),
            "scrollBehavior"in ct.style && Ie.set(R ? [ct, _i] : V, {
                scrollBehavior: "auto"
            }),
            Ce = Wn(x.snapTo) ? x.snapTo : x.snapTo === "labels" ? Xy(i) : x.snapTo === "labelsDirectional" ? qy(i) : x.directional !== !1 ? function(J, ve) {
                return Ic(x.snapTo)(J, Xt() - Me < 500 ? 0 : ve.direction)
            }
            : Ie.utils.snap(x.snapTo),
            ae = x.duration || {
                min: .1,
                max: 2
            },
            ae = wa(ae) ? xs(ae.min, ae.max) : xs(ae, ae),
            q = Ie.delayedCall(x.delay || I / 2 || .1, function() {
                var J = H()
                  , ve = Xt() - Me < 500
                  , Ee = Le.tween;
                if ((ve || Math.abs(P.getVelocity()) < 10) && !Ee && !ba && ce !== J) {
                    var Re = (J - me) / De
                      , bt = i && !F ? i.totalProgress() : Re
                      , Oe = ve ? 0 : (bt - Ue) / (Xt() - va) * 1e3 || 0
                      , ht = Ie.utils.clamp(-Re, 1 - Re, ys(Oe / 2) * Oe / .185)
                      , E = Re + (x.inertia === !1 ? 0 : ht)
                      , O = xs(0, 1, Ce(E, P))
                      , k = Math.round(me + O * De)
                      , N = x
                      , Z = N.onStart
                      , ge = N.onInterrupt
                      , ye = N.onComplete;
                    if (J <= _e && J >= me && k !== J) {
                        if (Ee && !Ee._initted && Ee.data <= ys(k - J))
                            return;
                        x.inertia === !1 && (ht = O - Re),
                        Le(k, {
                            duration: ae(ys(Math.max(ys(E - bt), ys(O - bt)) * .185 / Oe / .05 || 0)),
                            ease: x.ease || "power3",
                            data: ys(k - J),
                            onInterrupt: function() {
                                return q.restart(!0) && ge && ge(P)
                            },
                            onComplete: function() {
                                P.update(),
                                ce = H(),
                                we = Ue = i && !F ? i.totalProgress() : P.progress,
                                y && y(P),
                                ye && ye(P)
                            }
                        }, J, ht * De, k - J - ht * De),
                        Z && Z(P, Le.tween)
                    }
                } else
                    P.isActive && ce !== J && q.restart(!0)
            }).pause()),
            c && (Fc[c] = P),
            h = P.trigger = rn(h || m),
            Ze = h && h._gsap && h._gsap.stRevert,
            Ze && (Ze = Ze(P)),
            m = m === !0 ? h : rn(m),
            Qn(o) && (o = {
                targets: h,
                className: o
            }),
            m && (g === !1 || g === En || (g = !g && ei(m.parentNode).display === "flex" ? !1 : _t),
            P.pin = m,
            n.force3D !== !1 && Ie.set(m, {
                force3D: !0
            }),
            xe = Ie.core.getCache(m),
            xe.spacer ? pt = xe.pinState : (S && (S = rn(S),
            S && !S.nodeType && (S = S.current || S.nativeElement),
            xe.spacerIsNative = !!S,
            S && (xe.spacerState = Na(S))),
            xe.spacer = T = S || lt.createElement("div"),
            T.classList.add("pin-spacer"),
            c && T.classList.add("pin-spacer-" + c),
            xe.pinState = pt = Na(m)),
            P.spacer = T = xe.spacer,
            ue = ei(m),
            C = ue[g + L.os2],
            re = Ie.getProperty(m),
            ne = Ie.quickSetter(m, L.a, qt),
            Nc(m, T, ue),
            D = Na(m)),
            X) {
                Qe = wa(X) ? kd(X, Gd) : Gd,
                Xe = La("scroller-start", c, V, L, Qe, 0),
                Y = La("scroller-end", c, V, L, Qe, 0, Xe),
                j = Xe["offset" + L.op.d2];
                var sn = rn(Gi(V, "content") || V);
                qe = this.markerStart = La("start", c, sn, L, Qe, j, 0, A),
                et = this.markerEnd = La("end", c, sn, L, Qe, j, 0, A),
                A && (st = Ie.quickSetter([qe, et], L.a, qt)),
                !U && !(Jn.length && Gi(V, "fixedMarkers") === !0) && (Wy(R ? ct : V),
                Ie.set([Xe, Y], {
                    force3D: !0
                }),
                se = Ie.quickSetter(Xe, L.a, qt),
                he = Ie.quickSetter(Y, L.a, qt))
            }
            if (A) {
                var tt = A.vars.onUpdate
                  , ze = A.vars.onUpdateParams;
                A.eventCallback("onUpdate", function() {
                    P.update(0, 0, 1),
                    tt && tt.apply(ze || [])
                })
            }
            P.previous = function() {
                return Ye[Ye.indexOf(P) - 1]
            }
            ,
            P.next = function() {
                return Ye[Ye.indexOf(P) + 1]
            }
            ,
            P.revert = function(J) {
                var ve = J !== !1 || !P.enabled
                  , Ee = Rt;
                ve !== P.isReverted && (ve && (P.scroll.rec || !Rt || !go || (P.scroll.rec = H()),
                fe = Math.max(H(), P.scroll.rec || 0),
                de = P.progress,
                Be = i && i.progress()),
                qe && [qe, et, Xe, Y].forEach(function(Re) {
                    return Re.style.display = ve ? "none" : "block"
                }),
                ve && (Rt = 1),
                P.update(ve),
                Rt = Ee,
                m && (ve ? $y(m, T, pt) : (!b || !P.isActive) && Nc(m, T, ei(m), Q)),
                P.isReverted = ve)
            }
            ,
            P.refresh = function(J, ve) {
                if (!((Rt || !P.enabled) && !ve)) {
                    if (m && J && Tn) {
                        It(s, "scrollEnd", qd);
                        return
                    }
                    !go && ee && ee(P),
                    Rt = 1,
                    Me = Xt(),
                    Le.tween && (Le.tween.kill(),
                    Le.tween = 0),
                    Te && Te.pause(),
                    d && i && i.time(-.01, !0).invalidate(),
                    P.isReverted || P.revert();
                    for (var Ee = te(), Re = ie(), bt = A ? A.duration() : Wi(V, L), Oe = 0, ht = 0, E = n.end, O = n.endTrigger || h, k = n.start || (n.start === 0 || !h ? 0 : m ? "0 0" : "0 100%"), N = P.pinnedContainer = n.pinnedContainer && rn(n.pinnedContainer), Z = h && Math.max(0, Ye.indexOf(P)) || 0, ge = Z, ye, Se, Fe, Ve, Ae, Pe, $e, Xn, vi, An; ge--; )
                        Pe = Ye[ge],
                        Pe.end || Pe.refresh(0, 1) || (Rt = 1),
                        $e = Pe.pin,
                        $e && ($e === h || $e === m) && !Pe.isReverted && (An || (An = []),
                        An.unshift(Pe),
                        Pe.revert()),
                        Pe !== Ye[ge] && (Z--,
                        ge--);
                    for (Wn(k) && (k = k(P)),
                    me = Zd(k, h, Ee, L, H(), qe, Xe, P, Re, G, U, bt, A) || (m ? -.001 : 0),
                    Wn(E) && (E = E(P)),
                    Qn(E) && !E.indexOf("+=") && (~E.indexOf(" ") ? E = (Qn(k) ? k.split(" ")[0] : "") + E : (Oe = Da(E.substr(2), Ee),
                    E = Qn(k) ? k : me + Oe,
                    O = h)),
                    _e = Math.max(me, Zd(E || (O ? "100% 0" : bt), O, Ee, L, H() + Oe, et, Y, P, Re, G, U, bt, A)) || -.001,
                    De = _e - me || (me -= .01) && .001,
                    Oe = 0,
                    ge = Z; ge--; )
                        Pe = Ye[ge],
                        $e = Pe.pin,
                        $e && Pe.start - Pe._pinPush < me && !A && Pe.end > 0 && (ye = Pe.end - Pe.start,
                        ($e === h || $e === N) && !ao(k) && (Oe += ye * (1 - Pe.progress)),
                        $e === m && (ht += ye));
                    if (me += Oe,
                    _e += Oe,
                    P._pinPush = ht,
                    qe && Oe && (ye = {},
                    ye[L.a] = "+=" + Oe,
                    N && (ye[L.p] = "-=" + H()),
                    Ie.set([qe, et], ye)),
                    m)
                        ye = ei(m),
                        Ve = L === yt,
                        Fe = H(),
                        le = parseFloat(re(L.a)) + ht,
                        !bt && _e > 1 && ((R ? ct : V).style["overflow-" + L.a] = "scroll"),
                        Nc(m, T, ye),
                        D = Na(m),
                        Se = xi(m, !0),
                        Xn = U && Vi(V, Ve ? Ht : yt)(),
                        g && (Q = [g + L.os2, De + ht + qt],
                        Q.t = T,
                        ge = g === _t ? Rc(m, L) + De + ht : 0,
                        ge && Q.push(L.d, ge + qt),
                        xo(Q),
                        U && H(fe)),
                        U && (Ae = {
                            top: Se.top + (Ve ? Fe - me : Xn) + qt,
                            left: Se.left + (Ve ? Xn : Fe - me) + qt,
                            boxSizing: "border-box",
                            position: "fixed"
                        },
                        Ae[Ar] = Ae["max" + bs] = Math.ceil(Se.width) + qt,
                        Ae[Pr] = Ae["max" + Lc] = Math.ceil(Se.height) + qt,
                        Ae[En] = Ae[En + fo] = Ae[En + co] = Ae[En + ho] = Ae[En + uo] = "0",
                        Ae[_t] = ye[_t],
                        Ae[_t + fo] = ye[_t + fo],
                        Ae[_t + co] = ye[_t + co],
                        Ae[_t + ho] = ye[_t + ho],
                        Ae[_t + uo] = ye[_t + uo],
                        ft = Zy(pt, Ae, b)),
                        i ? (vi = i._initted,
                        Tc(1),
                        i.render(i.duration(), !0, !0),
                        be = re(L.a) - le + De + ht,
                        De !== be && U && ft.splice(ft.length - 2, 2),
                        i.render(0, !0, !0),
                        vi || i.invalidate(),
                        Tc(0)) : be = De;
                    else if (h && H() && !A)
                        for (Se = h.parentNode; Se && Se !== ct; )
                            Se._pinOffset && (me -= Se._pinOffset,
                            _e -= Se._pinOffset),
                            Se = Se.parentNode;
                    An && An.forEach(function(Pn) {
                        return Pn.revert(!1)
                    }),
                    P.start = me,
                    P.end = _e,
                    oe = Ne = H(),
                    A || (oe < fe && H(fe),
                    P.scroll.rec = 0),
                    P.revert(!1),
                    q && (ce = -1,
                    P.isActive && H(me + De * de),
                    q.restart(!0)),
                    Rt = 0,
                    i && F && (i._initted || Be) && i.progress() !== Be && i.progress(Be, !0).render(i.time(), !0, !0),
                    (de !== P.progress || A) && (i && !F && i.totalProgress(de, !0),
                    P.progress = de,
                    P.update(0, 0, 1)),
                    m && g && (T._pinOffset = Math.round(P.progress * be)),
                    u && u(P)
                }
            }
            ,
            P.getVelocity = function() {
                return (H() - Ne) / (Xt() - va) * 1e3 || 0
            }
            ,
            P.endAnimation = function() {
                lo(P.callbackAnimation),
                i && (Te ? Te.progress(1) : i.paused() ? F || lo(i, P.direction < 0, 1) : lo(i, i.reversed()))
            }
            ,
            P.labelToScroll = function(J) {
                return i && i.labels && (me || P.refresh() || me) + i.labels[J] / i.duration() * De || 0
            }
            ,
            P.getTrailing = function(J) {
                var ve = Ye.indexOf(P)
                  , Ee = P.direction > 0 ? Ye.slice(0, ve).reverse() : Ye.slice(ve + 1);
                return (Qn(J) ? Ee.filter(function(Re) {
                    return Re.vars.preventOverlaps === J
                }) : Ee).filter(function(Re) {
                    return P.direction > 0 ? Re.end <= me : Re.start >= _e
                })
            }
            ,
            P.update = function(J, ve, Ee) {
                if (!(A && !Ee && !J)) {
                    var Re = P.scroll(), bt = J ? 0 : (Re - me) / De, Oe = bt < 0 ? 0 : bt > 1 ? 1 : bt || 0, ht = P.progress, E, O, k, N, Z, ge, ye, Se;
                    if (ve && (Ne = oe,
                    oe = A ? H() : Re,
                    x && (Ue = we,
                    we = i && !F ? i.totalProgress() : Oe)),
                    p && !Oe && m && !Rt && !so && Tn && me < Re + (Re - Ne) / (Xt() - va) * p && (Oe = 1e-4),
                    Oe !== ht && P.enabled) {
                        if (E = P.isActive = !!Oe && Oe < 1,
                        O = !!ht && ht < 1,
                        ge = E !== O,
                        Z = ge || !!Oe != !!ht,
                        P.direction = Oe > ht ? 1 : -1,
                        P.progress = Oe,
                        Z && !Rt && (k = Oe && !ht ? 0 : Oe === 1 ? 1 : ht === 1 ? 2 : 3,
                        F && (N = !ge && W[k + 1] !== "none" && W[k + 1] || W[k],
                        Se = i && (N === "complete" || N === "reset" || N in i))),
                        w && (ge || Se) && (Se || f || !i) && (Wn(w) ? w(P) : P.getTrailing(w).forEach(function(Pe) {
                            return Pe.endAnimation()
                        })),
                        F || (Te && !Rt && !so ? ((A || Lr && Lr !== P) && Te.render(Te._dp._time - Te._start),
                        Te.resetTo ? Te.resetTo("totalProgress", Oe, i._tTime / i._tDur) : (Te.vars.totalProgress = Oe,
                        Te.invalidate().restart())) : i && i.totalProgress(Oe, !!Rt)),
                        m) {
                            if (J && g && (T.style[g + L.os2] = C),
                            !U)
                                ne(oo(le + be * Oe));
                            else if (Z) {
                                if (ye = !J && Oe > ht && _e + 1 > Re && Re + 1 >= Wi(V, L),
                                b)
                                    if (!J && (E || ye)) {
                                        var Fe = xi(m, !0)
                                          , Ve = Re - me;
                                        Kd(m, ct, Fe.top + (L === yt ? Ve : 0) + qt, Fe.left + (L === yt ? 0 : Ve) + qt)
                                    } else
                                        Kd(m, T);
                                xo(E || ye ? ft : D),
                                be !== De && Oe < 1 && E || ne(le + (Oe === 1 && !ye ? be : 0))
                            }
                        }
                        x && !Le.tween && !Rt && !so && q.restart(!0),
                        o && (ge || M && Oe && (Oe < 1 || !Ec)) && xa(o.targets).forEach(function(Pe) {
                            return Pe.classList[E || M ? "add" : "remove"](o.className)
                        }),
                        a && !F && !J && a(P),
                        Z && !Rt ? (F && (Se && (N === "complete" ? i.pause().totalProgress(1) : N === "reset" ? i.restart(!0).pause() : N === "restart" ? i.restart(!0) : i[N]()),
                        a && a(P)),
                        (ge || !Ec) && (l && ge && Ac(P, l),
                        z[k] && Ac(P, z[k]),
                        M && (Oe === 1 ? P.kill(!1, 1) : z[k] = 0),
                        ge || (k = Oe === 1 ? 1 : 3,
                        z[k] && Ac(P, z[k]))),
                        v && !E && Math.abs(P.getVelocity()) > (ao(v) ? v : 2500) && (lo(P.callbackAnimation),
                        Te ? Te.progress(1) : lo(i, !Oe, 1))) : F && a && !Rt && a(P)
                    }
                    if (he) {
                        var Ae = A ? Re / A.duration() * (A._caScrollDist || 0) : Re;
                        se(Ae + (Xe._isFlipped ? 1 : 0)),
                        he(Ae)
                    }
                    st && st(-Re / A.duration() * (A._caScrollDist || 0))
                }
            }
            ,
            P.enable = function(J, ve) {
                P.enabled || (P.enabled = !0,
                It(V, "resize", po),
                It(R ? lt : V, "scroll", Ms),
                ee && It(s, "refreshInit", ee),
                J !== !1 && (P.progress = de = 0,
                oe = Ne = ce = H()),
                ve !== !1 && P.refresh())
            }
            ,
            P.getTween = function(J) {
                return J && Le ? Le.tween : Te
            }
            ,
            P.setPositions = function(J, ve) {
                m && (le += J - me,
                be += ve - J - De),
                P.start = me = J,
                P.end = _e = ve,
                De = ve - J,
                P.update()
            }
            ,
            P.disable = function(J, ve) {
                if (P.enabled && (J !== !1 && P.revert(),
                P.enabled = P.isActive = !1,
                ve || Te && Te.pause(),
                fe = 0,
                xe && (xe.uncache = 1),
                ee && At(s, "refreshInit", ee),
                q && (q.pause(),
                Le.tween && Le.tween.kill() && (Le.tween = 0)),
                !R)) {
                    for (var Ee = Ye.length; Ee--; )
                        if (Ye[Ee].scroller === V && Ye[Ee] !== P)
                            return;
                    At(V, "resize", po),
                    At(V, "scroll", Ms)
                }
            }
            ,
            P.kill = function(J, ve) {
                P.disable(J, ve),
                Te && !ve && Te.kill(),
                c && delete Fc[c];
                var Ee = Ye.indexOf(P);
                Ee >= 0 && Ye.splice(Ee, 1),
                Ee === Wt && za > 0 && Wt--,
                Ee = 0,
                Ye.forEach(function(Re) {
                    return Re.scroller === P.scroller && (Ee = 1)
                }),
                Ee || (P.scroll.rec = 0),
                i && (i.scrollTrigger = null,
                J && i.render(-1),
                ve || i.kill()),
                qe && [qe, et, Xe, Y].forEach(function(Re) {
                    return Re.parentNode && Re.parentNode.removeChild(Re)
                }),
                Lr === P && (Lr = 0),
                m && (xe && (xe.uncache = 1),
                Ee = 0,
                Ye.forEach(function(Re) {
                    return Re.pin === m && Ee++
                }),
                Ee || (xe.spacer = 0)),
                n.onKill && n.onKill(P)
            }
            ,
            P.enable(!1, !1),
            Ze && Ze(P),
            !i || !i.add || De ? P.refresh() : Ie.delayedCall(.01, function() {
                return me || _e || P.refresh()
            }) && (De = .01) && (me = _e = 0)
        }
        ,
        s.register = function(n) {
            return Tr || (Ie = n || Fd(),
            Id() && window.document && s.enable(),
            Tr = Ma),
            Tr
        }
        ,
        s.defaults = function(n) {
            if (n)
                for (var i in n)
                    Aa[i] = n[i];
            return Aa
        }
        ,
        s.disable = function(n, i) {
            Ma = 0,
            Ye.forEach(function(a) {
                return a[i ? "kill" : "disable"](n)
            }),
            At(We, "wheel", Ms),
            At(lt, "scroll", Ms),
            clearInterval(ya),
            At(lt, "touchcancel", Hi),
            At(ct, "touchstart", Hi),
            Ea(At, lt, "pointerdown,touchstart,mousedown", Ld),
            Ea(At, lt, "pointerup,touchend,mouseup", Rd),
            _a.kill(),
            Sa(At);
            for (var r = 0; r < Ke.length; r += 3)
                Ca(At, Ke[r], Ke[r + 1]),
                Ca(At, Ke[r], Ke[r + 2])
        }
        ,
        s.enable = function() {
            if (We = window,
            lt = document,
            _i = lt.documentElement,
            ct = lt.body,
            Ie && (xa = Ie.utils.toArray,
            xs = Ie.utils.clamp,
            Tc = Ie.core.suppressOverwrites || Hi,
            Ie.core.globals("ScrollTrigger", s),
            ct)) {
                Ma = 1,
                gt.register(Ie),
                s.isTouch = gt.isTouch,
                Er = gt.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),
                It(We, "wheel", Ms),
                Sd = [We, lt, _i, ct],
                s.matchMedia({
                    "(orientation: portrait)": function() {
                        return Hd(),
                        Hd
                    }
                }),
                It(lt, "scroll", Ms);
                var n = ct.style, i = n.borderTopStyle, r, a;
                for (n.borderTopStyle = "solid",
                r = xi(ct),
                yt.m = Math.round(r.top + yt.sc()) || 0,
                Ht.m = Math.round(r.left + Ht.sc()) || 0,
                i ? n.borderTopStyle = i : n.removeProperty("border-top-style"),
                ya = setInterval(Vd, 250),
                Ie.delayedCall(.5, function() {
                    return so = 0
                }),
                It(lt, "touchcancel", Hi),
                It(ct, "touchstart", Hi),
                Ea(It, lt, "pointerdown,touchstart,mousedown", Ld),
                Ea(It, lt, "pointerup,touchend,mouseup", Rd),
                wc = Ie.utils.checkPrefix("transform"),
                Oa.push(wc),
                Tr = Xt(),
                _a = Ie.delayedCall(.2, ws).pause(),
                vs = [lt, "visibilitychange", function() {
                    var o = We.innerWidth
                      , c = We.innerHeight;
                    lt.hidden ? (wd = o,
                    Td = c) : (wd !== o || Td !== c) && po()
                }
                , lt, "DOMContentLoaded", ws, We, "load", ws, We, "resize", po],
                Sa(It),
                Ye.forEach(function(o) {
                    return o.enable(0, 1)
                }),
                a = 0; a < Ke.length; a += 3)
                    Ca(At, Ke[a], Ke[a + 1]),
                    Ca(At, Ke[a], Ke[a + 2])
            }
        }
        ,
        s.config = function(n) {
            "limitCallbacks"in n && (Ec = !!n.limitCallbacks);
            var i = n.syncInterval;
            i && clearInterval(ya) || (ya = i) && setInterval(Vd, i),
            "ignoreMobileResize"in n && (Ad = s.isTouch === 1 && n.ignoreMobileResize),
            "autoRefreshEvents"in n && (Sa(At) || Sa(It, n.autoRefreshEvents || "none"),
            Cd = (n.autoRefreshEvents + "").indexOf("resize") === -1)
        }
        ,
        s.scrollerProxy = function(n, i) {
            var r = rn(n)
              , a = Ke.indexOf(r)
              , o = Cr(r);
            ~a && Ke.splice(a, o ? 6 : 2),
            i && (o ? Jn.unshift(We, i, ct, i, _i, i) : Jn.unshift(r, i))
        }
        ,
        s.matchMedia = function(n) {
            var i, r, a, o, c;
            for (r in n)
                a = ut.indexOf(r),
                o = n[r],
                Ss = r,
                r === "all" ? o() : (i = We.matchMedia(r),
                i && (i.matches && (c = o()),
                ~a ? (ut[a + 1] = Od(ut[a + 1], o),
                ut[a + 2] = Od(ut[a + 2], c)) : (a = ut.length,
                ut.push(r, o, c),
                i.addListener ? i.addListener(Xd) : i.addEventListener("change", Xd)),
                ut[a + 3] = i.matches)),
                Ss = 0;
            return ut
        }
        ,
        s.clearMatchMedia = function(n) {
            n || (ut.length = 0),
            n = ut.indexOf(n),
            n >= 0 && ut.splice(n, 4)
        }
        ,
        s.isInViewport = function(n, i, r) {
            var a = (Qn(n) ? rn(n) : n).getBoundingClientRect()
              , o = a[r ? Ar : Pr] * i || 0;
            return r ? a.right - o > 0 && a.left + o < We.innerWidth : a.bottom - o > 0 && a.top + o < We.innerHeight
        }
        ,
        s.positionInViewport = function(n, i, r) {
            Qn(n) && (n = rn(n));
            var a = n.getBoundingClientRect()
              , o = a[r ? Ar : Pr]
              , c = i == null ? o / 2 : i in Pa ? Pa[i] * o : ~i.indexOf("%") ? parseFloat(i) * o / 100 : parseFloat(i) || 0;
            return r ? (a.left + c) / We.innerWidth : (a.top + c) / We.innerHeight
        }
        ,
        s
    }();
    je.version = "3.10.4",
    je.saveStyles = function(s) {
        return s ? xa(s).forEach(function(e) {
            if (e && e.style) {
                var t = Cn.indexOf(e);
                t >= 0 && Cn.splice(t, 5),
                Cn.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), Ie.core.getCache(e), Ss)
            }
        }) : Cn
    }
    ,
    je.revert = function(s, e) {
        return Ia(!s, e)
    }
    ,
    je.create = function(s, e) {
        return new je(s,e)
    }
    ,
    je.refresh = function(s) {
        return s ? po() : (Tr || je.register()) && ws(!0)
    }
    ,
    je.update = _o,
    je.clearScrollMemory = $d,
    je.maxScroll = function(s, e) {
        return Wi(s, e ? Ht : yt)
    }
    ,
    je.getScrollFunc = function(s, e) {
        return Vi(rn(s), e ? Ht : yt)
    }
    ,
    je.getById = function(s) {
        return Fc[s]
    }
    ,
    je.getAll = function() {
        return Ye.filter(function(s) {
            return s.vars.id !== "ScrollSmoother"
        })
    }
    ,
    je.isScrolling = function() {
        return !!Tn
    }
    ,
    je.snapDirectional = Ic,
    je.addEventListener = function(s, e) {
        var t = mo[s] || (mo[s] = []);
        ~t.indexOf(e) || t.push(e)
    }
    ,
    je.removeEventListener = function(s, e) {
        var t = mo[s]
          , n = t && t.indexOf(e);
        n >= 0 && t.splice(n, 1)
    }
    ,
    je.batch = function(s, e) {
        var t = [], n = {}, i = e.interval || .016, r = e.batchMax || 1e9, a = function(l, u) {
            var f = []
              , h = []
              , m = Ie.delayedCall(i, function() {
                u(f, h),
                f = [],
                h = []
            }).pause();
            return function(g) {
                f.length || m.restart(!0),
                f.push(g.trigger),
                h.push(g),
                r <= f.length && m.progress(1)
            }
        }, o;
        for (o in e)
            n[o] = o.substr(0, 2) === "on" && Wn(e[o]) && o !== "onRefreshInit" ? a(o, e[o]) : e[o];
        return Wn(r) && (r = r(),
        It(je, "refresh", function() {
            return r = e.batchMax()
        })),
        xa(s).forEach(function(c) {
            var l = {};
            for (o in n)
                l[o] = n[o];
            l.trigger = c,
            t.push(je.create(l))
        }),
        t
    }
    ;
    var Qd = function(e, t, n, i) {
        return t > i ? e(i) : t < 0 && e(0),
        n > i ? (i - t) / (n - t) : n < 0 ? t / (t - n) : 1
    }, Uc = function s(e, t) {
        t === !0 ? e.style.removeProperty("touch-action") : e.style.touchAction = t === !0 ? "auto" : t ? "pan-" + t + (gt.isTouch ? " pinch-zoom" : "") : "none",
        e === _i && s(ct, t)
    }, ep = {
        auto: 1,
        scroll: 1
    }, Jy = function(e) {
        var t = e.event, n = e.target, i = e.axis, r = (t.changedTouches ? t.changedTouches[0] : t).target, a = r._gsap || Ie.core.getCache(r), o = Xt(), c;
        if (!a._isScrollT || o - a._isScrollT > 2e3) {
            for (; r && r.scrollHeight <= r.clientHeight; )
                r = r.parentNode;
            a._isScroll = r && !Cr(r) && r !== n && (ep[(c = ei(r)).overflowY] || ep[c.overflowX]),
            a._isScrollT = o
        }
        (a._isScroll || i === "x") && (t._gsapAllow = !0)
    }, tp = function(e, t, n, i) {
        return gt.create({
            target: e,
            capture: !0,
            debounce: !1,
            lockAxis: !0,
            type: t,
            onWheel: i = i && Jy,
            onPress: i,
            onDrag: i,
            onScroll: i,
            onEnable: function() {
                return n && It(lt, gt.eventTypes[0], ip, !1, !0)
            },
            onDisable: function() {
                return At(lt, gt.eventTypes[0], ip, !0)
            }
        })
    }, Qy = /(input|label|select|textarea)/i, np, ip = function(e) {
        var t = Qy.test(e.target.tagName);
        (t || np) && (e._gsapAllow = !0,
        np = t)
    }, e1 = function(e) {
        wa(e) || (e = {}),
        e.preventDefault = e.isNormalizer = e.allowClicks = !0,
        e.type || (e.type = "wheel,touch"),
        e.debounce = !!e.debounce,
        e.id = e.id || "normalizer";
        var t = e, n = t.normalizeScrollX, i = t.momentum, r = t.allowNestedScroll, a, o, c = rn(e.target) || _i, l = Ie.core.globals().ScrollSmoother, u = Er && (e.content && rn(e.content) || l && l.get() && l.get().content()), f = Vi(c, yt), h = Vi(c, Ht), m = 1, g = (gt.isTouch && We.visualViewport ? We.visualViewport.scale * We.visualViewport.width : We.outerWidth) / We.innerWidth, d = 0, p = Wn(i) ? function() {
            return i(a)
        }
        : function() {
            return i || 2.8
        }
        , _, y, M = tp(c, e.type, !0, r), x = function() {
            return _ = !1
        }, b = Hi, S = Hi, A = function() {
            o = Wi(c, yt),
            S = xs(Er ? 1 : 0, o),
            n && (b = xs(0, Wi(c, Ht))),
            y = Fa
        }, v = function() {
            if (_) {
                requestAnimationFrame(x);
                var U = oo(a.deltaY / 2)
                  , z = S(f.v - U);
                return u && z !== f.v + f.offset && (f.offset = z - f.v,
                u.style.transform = "translateY(" + -f.offset + "px)",
                u._gsap && (u._gsap.y = -f.offset + "px"),
                f.cacheID = Ke.cache,
                _o()),
                !0
            }
            u && (u.style.transform = "translateY(0px)",
            f.offset = f.cacheID = 0,
            u._gsap && (u._gsap.y = "0px")),
            _ = !0
        }, w, L, F, V, K = function() {
            A(),
            w.isActive() && w.vars.scrollY > o && (f() > o ? w.progress(1) && f(o) : w.resetTo("scrollY", o))
        };
        return e.ignoreCheck = function(R) {
            return Er && R.type === "touchmove" && v() || m > 1.05 && R.type !== "touchstart" || a.isGesturing || R.touches && R.touches.length > 1
        }
        ,
        e.onPress = function() {
            var R = m;
            m = oo((We.visualViewport && We.visualViewport.scale || 1) / g),
            w.pause(),
            R !== m && Uc(c, m > 1.01 ? !0 : n ? !1 : "x"),
            _ = !1,
            L = h(),
            F = f(),
            A(),
            y = Fa
        }
        ,
        e.onRelease = e.onGestureStart = function(R, U) {
            if (u && (u.style.transform = "translateY(0px)",
            f.offset = f.cacheID = 0,
            u._gsap && (u._gsap.y = "0px")),
            !U)
                V.restart(!0);
            else {
                Ke.cache++;
                var z = p(), W, X;
                n && (W = h(),
                X = W + z * .05 * -R.velocityX / .227,
                z *= Qd(h, W, X, Wi(c, Ht)),
                w.vars.scrollX = b(X)),
                W = f(),
                X = W + z * .05 * -R.velocityY / .227,
                z *= Qd(f, W, X, Wi(c, yt)),
                w.vars.scrollY = S(X),
                w.invalidate().duration(z).play(.01),
                (Er && w.vars.scrollY >= o || W >= o - 1) && Ie.to({}, {
                    onUpdate: K,
                    duration: z
                })
            }
        }
        ,
        e.onWheel = function() {
            w._ts && w.pause(),
            Xt() - d > 1e3 && (y = 0,
            d = Xt())
        }
        ,
        e.onChange = function(R, U, z, W, X) {
            Fa !== y && A(),
            U && n && h(b(W[2] === U ? L + (R.startX - R.x) : h() + U - W[1])),
            z && f(S(X[2] === z ? F + (R.startY - R.y) : f() + z - X[1])),
            _o()
        }
        ,
        e.onEnable = function() {
            Uc(c, n ? !1 : "x"),
            It(We, "resize", K),
            M.enable()
        }
        ,
        e.onDisable = function() {
            Uc(c, !0),
            At(We, "resize", K),
            M.kill()
        }
        ,
        a = new gt(e),
        a.iOS = Er,
        Er && !f() && f(1),
        V = a._dc,
        w = Ie.to(a, {
            ease: "power4",
            paused: !0,
            scrollX: n ? "+=0.1" : "+=0",
            scrollY: "+=0.1",
            onComplete: V.vars.onComplete
        }),
        a
    };
    je.sort = function(s) {
        return Ye.sort(s || function(e, t) {
            return (e.vars.refreshPriority || 0) * -1e6 + e.start - (t.start + (t.vars.refreshPriority || 0) * -1e6)
        }
        )
    }
    ,
    je.observe = function(s) {
        return new gt(s)
    }
    ,
    je.normalizeScroll = function(s) {
        if (typeof s == "undefined")
            return wn;
        if (s === !0 && wn)
            return wn.enable();
        if (s === !1)
            return wn && wn.kill();
        var e = s instanceof gt ? s : e1(s);
        return wn && wn.target === e.target && wn.kill(),
        Cr(e.target) && (wn = e),
        e
    }
    ,
    je.core = {
        _getVelocityProp: Sc,
        _inputObserver: tp,
        _scrollers: Ke,
        _proxies: Jn,
        bridge: {
            ss: function() {
                Tn || Dr("scrollStart"),
                Tn = Xt()
            },
            ref: function() {
                return Rt
            }
        }
    },
    Fd() && Ie.registerPlugin(je),
    Ct.registerPlugin(je),
    Ct.registerPlugin(xr),
    new ms(".p__trigger, .p__trigger-2, .p__trigger-3, .p__trigger-4, .p__trigger-5 ",{
        types: "words, chars, line",
        tagName: "span"
    });
    const t1 = Ct.utils.toArray(".p__trigger .line")
      , n1 = Ct.utils.toArray(".p__trigger-2 .line")
      , i1 = Ct.utils.toArray(".p__trigger-3 .line")
      , r1 = Ct.utils.toArray(".p__trigger-4 .line")
      , s1 = Ct.utils.toArray(".p__trigger-5 .line");
    new Zv({
        dom: document.getElementById("webgl-canvas")
    }),
    ky()
});
