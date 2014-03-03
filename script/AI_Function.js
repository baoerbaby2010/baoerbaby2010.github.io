(function() {
	$.fn.extend({
		left: function(a) {
			if (typeof a != "undefined") return this.css("left", a + "px");
			var b = parseInt(this.css("left").replace("px", ""));
			return isNaN(b) ? 0 : b
		},
		top: function(a) {
			if (typeof a != "undefined") return this.css("top", a + "px");
			var b = parseInt(this.css("top").replace("px", ""));
			return isNaN(b) ? 0 : b
		},
		create: function(a) {
			return typeof a != "undefined" && a == 0 && this.hide(), this.appendTo(document.body)
		}
	})
})(jQuery);
var KAI = function() {
	function b(a) {
		if (a && a.constructor) {
			var b = a.constructor.toString(),
				c = b.substr(0, b.indexOf("("));
			return c = c.replace("function", ""), c.replace(/(^\s*)|(\s*$)/ig, "")
		}
		return typeof a
	}
	var a = "undefined",
		c = function(d, e) {
			if (typeof d != typeof e) return !1;
			var f = typeof d;
			if (f == "number" || f == "boolean" || f == "string") return d == e;
			if (d instanceof Array && e instanceof Array || b(d) == "Array" && b(e) == "Array") {
				if (d.length != e.length) return !1;
				for (var g in d) {
					if (typeof e[g] == a) return !1;
					if (!c(d[g], e[g])) return !1
				}
				return !0
			}
			return !1
		}, d = function(a, b) {
			for (var d in b)
				if (c(b[d], a)) return !0;
			return !1
		}, e = function(a, b) {
			b = b == null ? 1 : b;
			if (a instanceof Array) {
				if (a.length == 0) return new Array;
				var c = a.slice(0);
				typeof a.PxType == "number" ? c.PxType = a.PxType : c.PxType = 0;
				if (b == 0 || b == c.PxType) return c;
				if (c.PxType == 0 || c.PxType == 2 && b != 2) c.sort(function(a, b) {
					return a[0] < b[0] ? 1 : a[0] > b[0] ? -1 : a[1] < b[1] ? 1 : -1
				}), c.PxType = 1;
				if (b == 2 && c.PxType != 2) {
					var d = new Array,
						e = c.length;
					e >= 2 && c[0] && c[1] && c[0][0] == 17 && c[1][0] == 16 && (d.push(c[0]), d.push(c[1]), c[0] = null, c[1] = null);
					if (e >= 4)
						for (var f = 0; f < e - 3; f++) c[f] && c[f + 1] && c[f + 2] && c[f + 3] && c[f][0] == c[f + 1][0] && c[f + 1][0] == c[f + 2][0] && c[f + 2][0] == c[f + 3][0] && (d.push(c[f]), d.push(c[f + 1]), d.push(c[f + 2]), d.push(c[f + 3]), c[f] = null, c[f + 1] = null, c[f + 2] = null, c[f + 3] = null, f += 3);
					if (e >= 3)
						for (var f = 0; f < e - 2; f++) c[f] && c[f + 1] && c[f + 2] && c[f][0] == c[f + 1][0] && c[f + 1][0] == c[f + 2][0] && (d.push(c[f]), d.push(c[f + 1]), d.push(c[f + 2]), c[f] = null, c[f + 1] = null, c[f + 2] = null, f += 2);
					if (e >= 2)
						for (var f = 0; f < e - 1; f++) c[f] && c[f + 1] && c[f][0] == c[f + 1][0] && (d.push(c[f]), d.push(c[f + 1]), c[f] = null, c[f + 1] = null, f++);
					for (var f = 0; f < e; f++) c[f] && d.push(c[f]);
					return d.PxType = 2, d
				}
				return c
			}
			return new Array
		}, f = function(a) {
			if (a == null) return -1;
			var b = a.length;
			if (b == 0) return 0;
			if (b == 1) return 1;
			var c = e(a, 1);
			if (b == 2) {
				if (c[0][0] == 17 && c[1][0] == 16) return 14;
				if (c[0][0] == c[1][0]) return 2
			}
			if (b == 3 && c[0][0] == c[1][0] && c[1][0] == c[2][0]) return 3;
			var d = e(c, 2);
			if (b == 4) {
				if (c[0][0] == c[1][0] && c[1][0] == c[2][0] && c[2][0] == c[3][0]) return 13;
				if (d[0][0] == d[1][0] && d[1][0] == d[2][0] && d[2][0] != d[3][0]) return 4
			}
			if (b == 5 && d[0][0] == d[1][0] && d[1][0] == d[2][0] && d[2][0] != d[3][0] && d[3][0] == d[4][0]) return 5;
			if (b == 6 && d[0][0] == d[1][0] && d[1][0] == d[2][0] && d[2][0] == d[3][0] && d[3][0]) return 6;
			if (b == 8 && d[0][0] == d[1][0] && d[1][0] == d[2][0] && d[2][0] == d[3][0] && d[4][0] == d[5][0] && d[5][0] != d[6][0] && d[6][0] == d[7][0]) return 7;
			if (d[0][0] > 14) return -1;
			if (b == 10 || b == 15 || b == 20) {
				var f = !0,
					g = b - parseInt(b / 5) * 2;
				for (var h = 0; h < g - 3 && f; h += 3)
					if (d[h][0] - d[h + 3][0] != 1 || d[h][0] != d[h + 1][0] || d[h][0] != d[h + 2][0]) f = !1;
				for (var h = g; h < b - 2 && f; h += 2)
					if (d[h][0] == d[h + 2][0] || d[h][0] != d[h + 1][0] || d[h][0] == d[h - 1][0]) f = !1;
				if (f) return 12
			}
			if (b == 8 || b == 12 || b == 16 || b == 20) {
				var f = !0,
					g = b - parseInt(b / 4);
				for (var h = 0; h < g - 3 && f; h += 3)
					if (d[h][0] - d[h + 3][0] != 1 || d[h][0] != d[h + 1][0] || d[h][0] != d[h + 2][0]) f = !1;
				for (var h = g; h < b - 1 && f; h++)
					if (d[h][0] == d[h + 1][0] || d[h][0] == d[h - 1][0]) f = !1;
				if (f) return 11
			}
			if (b >= 6)
				if (b % 2 == 0) {
					var f = !0;
					for (var h = 0; h < b - 2 && f; h += 2)
						if (d[h][0] - d[h + 2][0] != 1 || d[h][0] != d[h + 1][0]) f = !1;
					if (f) return 9
				} else
			if (b % 3 == 0) {
				var f = !0;
				for (var h = 0; h < b - 3 && f; h += 3)
					if (d[h][0] - d[h + 3][0] != 1 || d[h][0] != d[h + 1][0] || d[h][0] != d[h + 2][0]) f = !1;
				if (f) return 10
			}
			if (b >= 5) {
				var f = !0;
				for (var h = 0; h < b - 1 && f; h++) d[h][0] - d[h + 1][0] != 1 && (f = !1);
				if (f) return 8
			}
			return -1
		}, g = function(a, b) {
			var c = f(a);
			if (b == null) return c > 0 ? !0 : !1;
			var d = f(b);
			return d == 14 ? !1 : c == 14 ? !0 : c == 13 ? d == 13 ? a[0][0] > b[0][0] ? !0 : !1 : !0 : a.length != b.length ? !1 : c != d ? !1 : (a = e(a, 2), b = e(b, 2), a[0][0] > b[0][0] ? !0 : !1)
		}, h = function() {
			function g(a, b) {
				var c = b.length - 1;
				for (var d = c; d >= 0; d--)
					if (b[d][0] == a) return b[d];
				return null
			}

			function h(a, b) {
				var c = b.length - 1;
				for (var d = c; d > 0; d--)
					if (b[d][0] == a && b[d - 1][0] == a) return [b[d - 1], b[d]];
				return null
			}

			function i(a, b) {
				var c = b.length - 1;
				for (var d = c; d > 1; d--)
					if (b[d][0] == a && b[d - 1][0] == a && b[d - 2][0] == a) return [b[d - 2], b[d - 1], b[d]];
				return null
			}

			function j(a, b) {
				var c = b.length - 1;
				for (var d = c; d > 2; d--)
					if (b[d][0] == a && b[d - 1][0] == a && b[d - 2][0] == a && b[d - 3][0] == a) return [b[d - 3], b[d - 2], b[d - 1], b[d]];
				return null
			}

			function k(a, b) {
				var c = b.slice(0),
					d = new Array,
					e = c.length - 1;
				for (var f = e; f >= 0; f--) {
					var g = f;
					if (c[g][0] <= a) continue;
					g - 1 >= 0 ? c[g][0] == c[g - 1][0] || c[g][0] == 16 && c[g - 1][0] == 17 ? (f--, g - 2 >= 0 && c[g][0] == c[g - 2][0] && f--, g - 3 >= 0 && c[g][0] == c[g - 3][0] && f--) : d.push([c[g]]) : e > 0 && (c[0][0] != 17 || c[1][0] != 16) ? d.push([c[g]]) : d.push([c[g]])
				}
				return d
			}

			function l(a, b, c) {
				var d = b.slice(0),
					e = new Array,
					f = d.length - 1;
				for (var g = f; g > 0; g--) {
					var h = g;
					if (d[h][0] <= a || d[h][0] >= 16) continue;
					h - 2 >= 0 ? d[h][0] == d[h - 2][0] ? (h - 3 >= 0 && d[h][0] == d[h - 3][0] && g--, g -= 2) : d[h][0] == d[h - 1][0] && (c == 1 && e.push([d[h]]), c == 2 && e.push([d[h - 1], d[h]])) : d[1][0] == d[0][0] && (c == 1 && e.push([d[1]]), c == 2 && e.push([d[0], d[1]]))
				}
				return e
			}

			function m(a, b, c) {
				var d = b.slice(0),
					e = new Array,
					f = d.length - 1;
				for (var g = f; g > 1; g--) {
					var h = g;
					if (d[h][0] <= a || d[h][0] >= 16) continue;
					g - 3 >= 0 ? d[h][0] == d[h - 3][0] ? g -= 3 : d[h][0] == d[h - 2][0] && (c == 1 && e.push([d[h]]), c == 2 && e.push([d[h - 1], d[h]]), c == 3 && e.push([d[h - 2], d[h - 1], d[h]])) : d[2][0] == d[0][0] && (c == 1 && e.push([d[2]]), c == 2 && e.push([d[1], d[2]]), c == 3 && e.push([d[0], d[1], d[2]]))
				}
				return e
			}

			function n(a, b, c) {
				var d = b.slice(0),
					e = new Array,
					f = d.length - 1;
				for (var g = f; g > 2; g--) {
					if (d[g][0] <= a || d[g][0] >= 16 || d[g][0] != d[g - 3][0]) continue;
					c == 1 && e.push([d[g]]), c == 2 && e.push([d[g - 1], d[g]]), c == 3 && e.push([d[g - 2], d[g - 1], d[g]]), c == 4 && e.push([d[g - 3], d[g - 2], d[g - 1], d[g]])
				}
				return e
			}

			function o(a, b) {
				var c = b.slice(0),
					d = new Array,
					e = c.length;
				if (e >= 2)
					for (var f = 1; f >= 0; f--) c[f][0] > a && c[1][0] == 16 && c[0][0] == 17 && d.push([c[f]]);
				return d
			}

			function p(a, b) {
				var c = b.slice(0),
					d = new Array,
					e = new Array,
					f = new Array;
				e = m(a, c, 3), e = e.concat(n(a, c, 3)), f = k(2, c), f = f.concat(l(2, c, 1)), f = f.concat(m(2, c, 1)), f = f.concat(n(2, c, 1)), f = f.concat(o(2, c));
				for (var g = 0; g < f.length; g++)
					for (var h = 0; h < e.length; h++) e[h][0][0] != f[g][0][0] && d.push([e[h][0], e[h][1], e[h][2], f[g][0]]);
				return d
			}

			function q(a, b) {
				var c = b.slice(0),
					d = new Array,
					e = new Array,
					f = new Array;
				e = m(a, c, 3), e = e.concat(n(a, c, 3)), f = l(2, c, 2), f = f.concat(m(2, c, 2)), f = f.concat(n(2, c, 2));
				for (var g = 0; g < e.length; g++)
					for (var h = 0; h < f.length; h++) e[g][0][0] != f[h][0][0] && d.push([e[g][0], e[g][1], e[g][2], f[h][0], f[h][1]]);
				return d
			}

			function r(a, b) {
				var c = b.slice(0),
					d = new Array,
					e = new Array,
					f = new Array;
				e = n(a, c, 4), f = k(2, c), f = f.concat(l(2, c, 1)), f = f.concat(m(2, c, 1)), f = f.concat(n(2, c, 1)), f = f.concat(o(2, c));
				for (var g = 0; g < f.length; g++)
					for (var h = g + 1; h < f.length; h++)
						for (var i = 0; i < e.length; i++) e[i][0][0] != f[g][0][0] && f[g][0][0] != f[h][0][0] && f[h][0][0] != e[i][0][0] && (f[h][0][0] != 17 || f[g][0][0] != 16) && d.push([e[i][0], e[i][1], e[i][2], e[i][3], f[h][0], f[g][0]]);
				return d
			}

			function s(a, b) {
				var c = b.slice(0),
					d = new Array,
					e = new Array,
					f = new Array;
				e = n(a, c, 4), f = l(2, c, 2), f = f.concat(m(2, c, 2)), f = f.concat(n(2, c, 2));
				for (var g = 0; g < f.length; g++)
					for (var h = g + 1; h < f.length; h++)
						for (var i = 0; i < e.length; i++) e[i][0][0] != f[g][0][0] && f[g][0][0] != f[h][0][0] && f[h][0][0] != e[i][0][0] && (f[h][0][0] != 17 || f[g][0][0] != 16) && d.push([e[i][0], e[i][1], e[i][2], e[i][3], f[h][0], f[h][1], f[g][0], f[g][1]]);
				return d
			}

			function t(a, b, c) {
				var d = b.slice(0),
					e = new Array,
					f = d.length;
				if (a == 14) return e;
				if (f < c) return e;
				for (var h = a + 1; h <= 14; h++) {
					var i = new Array;
					for (var j = 0; j < c; j++) {
						var k = h - j,
							l = g(k, d);
						if (l == null) break;
						i.push(l)
					}
					i.length == c && e.push(i)
				}
				return e
			}

			function u(a, b, c) {
				var d = b.slice(0),
					e = new Array,
					f = new Array,
					g = d.length;
				if (a == 14) return e;
				if (g < c) return e;
				for (var i = a + 1; i <= 14; i++) {
					var k = new Array;
					for (var l = 0; l < parseInt(c / 2); l++) {
						var m = i - l,
							n = h(m, d);
						if (n == null) break;
						k = k.concat(n)
					}
					if (k.length == c) {
						var o = !1;
						for (var p = 0; p < c; p += 2)
							if (j(k[p][0], d)) {
								o = !0;
								break
							}
						o ? f.push(k) : e.push(k)
					}
				}
				return e.concat(f)
			}

			function v(a, b, c) {
				var d = b.slice(0),
					e = new Array,
					f = new Array,
					g = d.length;
				if (a == 14) return e;
				if (g < c) return e;
				for (var h = a + 1; h <= 14; h++) {
					var k = new Array;
					for (var l = 0; l < parseInt(c / 3); l++) {
						var m = h - l,
							n = i(m, d);
						if (n == null) break;
						k = k.concat(n)
					}
					if (k.length == c) {
						var o = !1;
						for (var p = 0; p < c; p += 3)
							if (j(k[p][0], d)) {
								o = !0;
								break
							}
						o ? f.push(k) : e.push(k)
					}
				}
				return e.concat(f)
			}

			function w(a, b, c) {
				var d = b.slice(0),
					e = new Array,
					f = new Array,
					h = new Array,
					i = new Array;
				h = k(2, d), h = h.concat(l(2, d, 1)), h = h.concat(m(2, d, 1)), h = h.concat(n(2, d, 1)), h = h.concat(o(2, d));
				var j = d.length,
					p = parseInt(c / 4),
					q = p * 3;
				f = v(a, d, q);
				if (f.length == 0) return e;
				if (p == 2) {
					for (var r = 0; r < h.length; r++)
						for (var s = r + 1; s < h.length; s++)(h[r][0][1] != 4 || h[s][0][1] != 4) && i.push([h[s][0], h[r][0]]);
					for (var r = 0; r < i.length; r++)
						for (var t = 0; t < f.length; t++) g(i[r][0][0], f[t]) == null && g(i[r][1][0], f[t]) == null && e.push(f[t].concat(i[r]))
				}
				if (p == 3) {
					for (var t = 0; t < h.length; t++)
						for (var r = t + 1; r < h.length; r++)
							for (var s = r + 1; s < h.length; s++)(h[r][0][1] != 4 || h[s][0][1] != 4) && i.push([h[s][0], h[r][0], h[t][0]]);
					for (var r = 0; r < i.length; r++)
						for (var t = 0; t < f.length; t++) g(i[r][0][0], f[t]) == null && g(i[r][1][0], f[t]) == null && g(i[r][2][0], f[t]) == null && e.push(f[t].concat(i[r]))
				}
				if (p == 4) {
					for (var u = 0; u < h.length; u++)
						for (var t = u + 1; t < h.length; t++)
							for (var r = t + 1; r < h.length; r++)
								for (var s = r + 1; s < h.length; s++)(h[r][0][1] != 4 || h[s][0][1] != 4) && i.push([h[s][0], h[r][0], h[t][0], h[u][0]]);
					for (var r = 0; r < i.length; r++)
						for (var t = 0; t < f.length; t++) g(i[r][0][0], f[t]) == null && g(i[r][1][0], f[t]) == null && g(i[r][2][0], f[t]) == null && g(i[r][3][0], f[t]) == null && e.push(f[t].concat(i[r]))
				}
				if (p == 5) {
					for (var w = 0; w < h.length; w++)
						for (var u = w + 1; u < h.length; u++)
							for (var t = u + 1; t < h.length; t++)
								for (var r = t + 1; r < h.length; r++)
									for (var s = r + 1; s < h.length; s++)(h[r][0][1] != 4 || h[s][0][1] != 4) && i.push([h[s][0], h[r][0], h[t][0], h[u][0], h[w][0]]);
					for (var r = 0; r < i.length; r++)
						for (var t = 0; t < f.length; t++) g(i[r][0][0], f[t]) == null && g(i[r][1][0], f[t]) == null && g(i[r][2][0], f[t]) == null && g(i[r][3][0], f[t]) == nullIndex(i[r][4][0], f[t]) == null && e.push(f[t].concat(i[r]))
				}
				return e
			}

			function x(a, b, c) {
				var d = b.slice(0),
					e = new Array,
					f = new Array,
					h = new Array,
					i = new Array;
				h = l(2, d, 2), h = h.concat(m(2, d, 2)), h = h.concat(n(2, d, 2));
				var j = d.length,
					k = parseInt(c / 5),
					o = k * 3;
				f = v(a, d, o);
				if (f.length == 0) return e;
				if (k == 2) {
					for (var p = 0; p < h.length; p++)
						for (var q = p + 1; q < h.length; q++) i.push([h[q][0], h[q][1], h[p][0], h[p][1]]);
					for (var p = 0; p < i.length; p++)
						for (var r = 0; r < f.length; r++) g(i[p][0][0], f[r]) == null && g(i[p][2][0], f[r]) == null && e.push(f[r].concat(i[p]))
				}
				if (k == 3) {
					for (var r = 0; r < h.length; r++)
						for (var p = r + 1; p < h.length; p++)
							for (var q = p + 1; q < h.length; q++) i.push([h[q][0], h[q][1], h[p][0], h[p][1], h[r][0], h[r][1]]);
					for (var p = 0; p < i.length; p++)
						for (var r = 0; r < f.length; r++) g(i[p][0][0], f[r]) == null && g(i[p][2][0], f[r]) == null && g(i[p][4][0], f[r]) == null && e.push(f[r].concat(i[p]))
				}
				if (k == 4) {
					for (var s = 0; s < h.length; s++)
						for (var r = s + 1; r < h.length; r++)
							for (var p = r + 1; p < h.length; p++)
								for (var q = p + 1; q < h.length; q++) i.push([h[q][0], h[q][1], h[p][0], h[p][1], h[r][0], h[r][1], h[s][0], h[s][1]]);
					for (var p = 0; p < i.length; p++)
						for (var r = 0; r < f.length; r++) g(i[p][0][0], f[r]) == null && g(i[p][2][0], f[r]) == null && g(i[p][4][0], f[r]) == null && g(i[p][6][0], f[r]) == null && e.push(f[r].concat(i[p]))
				}
				return e
			}

			function y(a) {
				var b = new Array,
					c = g(16, a),
					d = g(17, a);
				return c && d && (b[0] = [c, d]), b
			}
			var a = null,
				b = new Array,
				d = 0,
				f = function(f, g, h) {
					var i = h == null ? !1 : h;
					if (i) {
						b.length = 0;
						var j = f == null ? new Array : e(f, 1);
						return b = b.concat(k(2, j)), b = b.concat(l(2, j, 1)), b = b.concat(m(2, j, 1)), b = b.concat(n(2, j, 1)), b = b.concat(o(2, j)), b[0]
					}
					if (!c(a, g)) {
						a = g, d = 0;
						var z = KAI.GetType(g),
							A = g == null ? new Array : e(g, 2),
							j = f == null ? new Array : e(f, 1),
							B = A.length,
							C = j.length;
						b.length = 0, B == 1 && (b = b.concat(k(A[0][0], j)), b = b.concat(l(A[0][0], j, 1)), b = b.concat(m(A[0][0], j, 1)), b = b.concat(n(A[0][0], j, 1)), b = b.concat(o(A[0][0], j))), B == 2 && z == 2 && (b = b.concat(l(A[0][0], j, 2)), b = b.concat(m(A[0][0], j, 2)), b = b.concat(n(A[0][0], j, 2))), B == 3 && z == 3 && (b = b.concat(m(A[0][0], j, 3)), b = b.concat(n(A[0][0], j, 3))), B == 4 && z == 4 && (b = p(A[0][0], j)), B == 5 && z == 5 && (b = q(A[0][0], j)), B == 6 && z == 6 && (b = r(A[0][0], j)), B == 8 && z == 7 && (b = s(A[0][0], j)), B >= 5 && z == 8 && (b = t(A[0][0], j, B)), B >= 6 && (z == 9 && (b = u(A[0][0], j, B)), z == 10 && (b = v(A[0][0], j, B))), B >= 8 && z == 11 && (b = w(A[0][0], j, B)), B >= 10 && z == 12 && (b = x(A[0][0], j, B)), z < 13 && (b = b.concat(n(2, j, 4))), z == 13 && (b = n(A[0][0], j, 4)), z != 14 && (b = b.concat(y(j)));
						if (b.length > 0) {
							var D = b[0];
							return d++, D
						}
						return null
					}
					if (b.length == 0) return null;
					if (b.length > d) {
						var D = b[d];
						return d++, D
					}
					var D = b[0];
					return d = 1, D
				};
			return {
				AutoTs: f
			}
		};
	return {
		PxFux: e,
		GetType: f,
		AutoObj: h,
		IsCanChu: g,
		Equal: c,
		inArray: d
	}
}(),
	AI = new function() {
		function o(a, b) {
			if (b == null || b.length == 0) return !0;
			if (b.length > a.length) return !1;
			var c = a.length;
			for (var d = 0; d < b.length; d++)
				for (var e = 0; e < a.length; e++)
					if (b[d][0] == a[e][0] && b[d][1] == a[e][1]) {
						a.splice(e, 1);
						break
					}
			return b.length + a.length != c ? !1 : !0
		}

		function p(a, b) {
			if (a == null || a.length == 0) return null;
			if (a.length > b.length) return null;
			var c = b.slice(0),
				d = new Array;
			for (var e = 0; e < a.length; e++)
				for (var f = 0; f < c.length; f++)
					if (a[e] == c[f][0]) {
						d.push(c[f]), c.splice(f, 1);
						break
					}
			return d.length != a.length || d.length + c.length != b.length ? null : {
				Splt: d,
				Less: c
			}
		}

		function q(a, b) {
			var c = new Array,
				d = new Array;
			for (var e = a; e >= b; e--) c.push(e);
			for (var f = c.length; f >= 5; f--)
				for (var e = 0; e <= c.length - f; e++) {
					var g = c.slice(e, e + f);
					d.push(g)
				}
			return d
		}

		function r(a, b) {
			var c = new Array,
				d = new Array;
			for (var e = a; e >= b; e--) c.push(e), c.push(e);
			var f = c.length / 2;
			for (var g = f; g >= 3; g--)
				for (var e = 0; e <= f - g; e++) {
					var h = c.slice(e * 2, (e + g) * 2);
					d.push(h)
				}
			return d
		}

		function s(a, b) {
			var c = new Array,
				d = new Array;
			for (var e = a; e >= b; e--) c.push(e), c.push(e), c.push(e);
			var f = c.length / 3;
			for (var g = f; g >= 2; g--)
				for (var e = 0; e <= f - g; e++) {
					var h = c.slice(e * 3, (e + g) * 3);
					d.push(h)
				}
			return d
		}

		function v(a) {
			var b = u(a.Less);
			if (b.Sun.length == 0) return null;
			var c = new Array;
			for (var d = 0; d < b.Sun.length; d++) {
				var e = b.Sun[d];
				for (var f = 0; f < e.val.length; f++) {
					var g = p(e.val[f], a.Less);
					if (g != null) {
						var h = {
							data: g.Splt,
							type: 8,
							max: g.Splt[0][0],
							len: g.Splt.length
						};
						g.Splt = a.Splt.concat([h]), c.push(g)
					}
				}
			}
			return c.length == 0 ? null : c
		}

		function w(a) {
			var b = u(a.Less);
			if (b.Sun2.length == 0) return null;
			var c = new Array;
			for (var d = 0; d < b.Sun2.length; d++) {
				var e = b.Sun2[d];
				for (var f = 0; f < e.val.length; f++) {
					var g = p(e.val[f], a.Less);
					if (g != null) {
						var h = {
							data: g.Splt,
							type: 9,
							max: g.Splt[0][0],
							len: g.Splt.length
						};
						g.Splt = a.Splt.concat([h]), c.push(g)
					}
				}
			}
			return c.length == 0 ? null : c
		}

		function x(a) {
			var b = u(a.Less);
			if (b.Sun3.length == 0) return null;
			var c = new Array;
			for (var d = 0; d < b.Sun3.length; d++) {
				var e = b.Sun3[d];
				for (var f = 0; f < e.val.length; f++) {
					var g = p(e.val[f], a.Less);
					if (g != null) {
						var h = {
							data: g.Splt,
							type: 10,
							max: g.Splt[0][0],
							len: g.Splt.length
						};
						g.Splt = a.Splt.concat([h]), c.push(g)
					}
				}
			}
			return c.length == 0 ? null : c
		}

		function y(a) {
			if (a.Less.length < 5) return null;
			var b = new Array,
				c = v(a);
			if (c != null) {
				b = b.concat(c);
				for (var d = 0; d < c.length; d++) {
					var e = y(c[d]);
					e != null && (b = b.concat(e))
				}
			}
			return b.length == 0 ? null : b
		}

		function z(a) {
			if (a.Less.length < 6) return null;
			var b = new Array,
				c = w(a);
			if (c != null) {
				b = b.concat(c);
				for (var d = 0; d < c.length; d++) {
					var e = z(c[d]);
					e != null && (b = b.concat(e))
				}
			}
			return b.length == 0 ? null : b
		}

		function A(a) {
			if (a.Less.length < 6) return null;
			var b = new Array,
				c = x(a);
			if (c != null) {
				b = b.concat(c);
				for (var d = 0; d < c.length; d++) {
					var e = A(c[d]);
					e != null && (b = b.concat(e))
				}
			}
			return b.length == 0 ? null : b
		}

		function B(a) {
			if (a.Less.length < 5) return null;
			var b = new Array,
				c = y(a);
			if (c != null) {
				b = b.concat(c);
				for (var d = 0; d < c.length; d++) {
					var e = B(c[d]);
					e != null && (b = b.concat(e))
				}
			}
			var c = z(a);
			if (c != null) {
				b = b.concat(c);
				for (var d = 0; d < c.length; d++) {
					var e = B(c[d]);
					e != null && (b = b.concat(e))
				}
			}
			var c = A(a);
			if (c != null) {
				b = b.concat(c);
				for (var d = 0; d < c.length; d++) {
					var e = B(c[d]);
					e != null && (b = b.concat(e))
				}
			}
			return b.length == 0 ? null : b
		}

		function C(a) {
			var b = a.Less.slice(0),
				c = a.Splt.slice(0);
			if (b.length == 0) return c;
			var d = u(a.Less);
			for (var e = 0; e < d.San.length; e++) {
				var f = d.San[e];
				if (f == 15) continue;
				var g = p([f, f, f], b);
				g != null && (c.push({
					data: g.Splt,
					type: 3,
					max: f,
					len: 3
				}), b = g.Less)
			}
			for (var e = 0; e < d.Dui.length; e++) {
				var f = d.Dui[e];
				if (f == 15) continue;
				var g = p([f, f], b);
				g != null && (c.push({
					data: g.Splt,
					type: 2,
					max: f,
					len: 2
				}), b = g.Less)
			}
			for (var e = 0; e < b.length; e++) c.push({
				data: [b[e]],
				type: 1,
				max: b[e][0],
				len: 1
			});
			return b.length = 0, c
		}

		function D(a) {
			var b = new Array;
			b.push(C(a));
			var c = B(a);
			if (c != null)
				for (var d = 0; d < c.length; d++) {
					var e = C(c[d]);
					b.push(e)
				}
			return b
		}

		function E(a, b) {
			for (var c = 0; c < b.length; c++)
				if (b[c].k == a) return c;
			return -1
		}

		function F(a, b) {
			for (var c = 0; c < a.length; c++) {
				var d = a[c],
					e = E(d[0], b);
				e == -1 ? b.push({
					k: d[0],
					n: 1
				}) : b[e].n = b[e].n + 1
			}
			return b
		}

		function G(a) {
			var b = [];
			b.push({
				k: 17,
				n: 1
			}), b.push({
				k: 16,
				n: 1
			});
			for (var c = 15; c >= 3; c--) b.push({
				k: c,
				n: 4
			});
			for (var d = b.length - 1; d >= 0; d--) {
				var e = E(b[d].k, a);
				e != -1 && (b[d].n = b[d].n - a[e].n, b[d].n == 0 && b.splice(d, 1))
			}
			return b
		}

		function I(a, b) {
			var c = 0;
			for (var d = 0; d < b.length; d++) {
				if (b[d].k <= a) break;
				c += b[d].n
			}
			return c
		}

		function J(a, b) {
			var c = 0;
			for (var d = 0; d < b.length; d++) {
				if (b[d].k <= a) break;
				b[d].n >= 2 && c++, b[d].n == 4 && c++
			}
			return c
		}

		function K(a, b) {
			var c = 0;
			for (var d = 0; d < b.length; d++) {
				if (b[d].k <= a) break;
				b[d].n >= 3 && c++
			}
			return c
		}

		function L(a, b, c) {
			var d = 0,
				e = a + b;
			for (var f = 0; f < c.length; f++) {
				if (c[f].k < e) break;
				var g = !0;
				for (var h = 0; h < b; h++) {
					var i = f + h;
					if (i >= c.length) {
						g = !1;
						break
					}
					var j = c[f].k - h;
					if (j == 15) {
						g = !1;
						break
					}
					if (!(c[i].k == j && c[i].n >= 3)) {
						g = !1;
						break
					}
				}
				g && d++
			}
			return d
		}

		function M(a, b, c) {
			var d = 0;
			for (var e = 0; e < c.length; e++) {
				if (c[e].k <= a) break;
				var f = 4;
				for (var g = 0; g < b; g++) {
					var h = e + g;
					if (h >= c.length) {
						f = 0;
						break
					}
					var i = c[e].k - g;
					if (i == 15) {
						f = 0;
						break
					}
					if (c[h].k == i && c[h].n >= 2) c[h].n < f && (f = c[h].n);
					else {
						f = 0;
						break
					}
				}
				f >= 2 && d++, f == 4 && d++
			}
			return d
		}

		function N(a, b, c) {
			var d = 0;
			for (var e = 0; e < c.length; e++) {
				if (c[e].k <= a) break;
				var f = 4;
				for (var g = 0; g < b; g++) {
					var h = e + g;
					if (h >= c.length) {
						f = 0;
						break
					}
					var i = c[e].k - g;
					if (i == 15) {
						f = 0;
						break
					}
					if (c[h].k == i && c[h].n >= 1) c[h].n < f && (f = c[h].n);
					else {
						f = 0;
						break
					}
				}
				f > 0 && (d += f)
			}
			return d
		}

		function O(a, b) {
			var c = 0,
				d = 0;
			for (var e = 0; e < b.length; e++) {
				if (b[e].k <= a) break;
				if (b[e].k == 17 && b[e].n == 1 || b[e].k == 16 && b[e].n == 1) {
					d++;
					continue
				}
				b[e].n == 4 && c++
			}
			return c + (d == 2 ? 1 : 0)
		}

		function P(a) {
			var b = 0,
				c = 0;
			for (var d = 0; d < a.length; d++) {
				if (a[d].k == 17 && a[d].n == 1 || a[d].k == 16 && a[d].n == 1) {
					c++;
					continue
				}
				a[d].n == 4 && b++
			}
			return b + (c == 2 ? 1 : 0)
		}

		function Q(a, b) {
			var c = 0,
				d = 0,
				e = P(b),
				f = 0,
				g = [],
				h = [],
				i = 0;
			for (var j = 0; j < a.length; j++) {
				var k = a[j];
				if (k.type == 1) {
					k.mpn = e + I(k.max, b), g.push(k.mpn), c += k.mpn, h.push(k.mpn);
					switch (k.max) {
						case 17:
							d -= 100;
							break;
						case 16:
							d -= 72;
							break;
						case 15:
							d -= 50;
							break;
						case 14:
							d -= 32;
							break;
						case 13:
							d -= 18;
							break;
						case 12:
							d -= 9;
							break;
						case 11:
							d -= 3;
							break;
						case 10:
							d += 0;
							break;
						case 9:
							d += 10;
							break;
						case 8:
							d += 25;
							break;
						case 7:
							d += 50;
							break;
						case 6:
							d += 70;
							break;
						case 5:
							d += 82;
							break;
						case 4:
							d += 96;
							break;
						case 3:
							d += 100
					}
				} else if (k.type == 2) {
					k.mpn = e + J(k.max, b), g.push(k.mpn), c += k.mpn, h.push(k.mpn);
					switch (k.max) {
						case 15:
							d -= 100;
							break;
						case 14:
							d -= 72;
							break;
						case 13:
							d -= 50;
							break;
						case 12:
							d -= 32;
							break;
						case 11:
							d -= 18;
							break;
						case 10:
							d -= 9;
							break;
						case 9:
							d -= 3;
							break;
						case 8:
							d += 0;
							break;
						case 7:
							d += 10;
							break;
						case 6:
							d += 25;
							break;
						case 5:
							d += 56;
							break;
						case 4:
							d += 82;
							break;
						case 3:
							d += 90;
							break;
						default:
							d -= 100
					}
				} else if (k.type == 3) {
					k.mpn = e + K(k.max, b), g.push(k.mpn), c += k.mpn, i++;
					switch (k.max) {
						case 15:
							d -= 100;
							break;
						case 14:
							d -= 90;
							break;
						case 13:
							d -= 82;
							break;
						case 12:
							d -= 74;
							break;
						case 11:
							d -= 66;
							break;
						case 10:
							d -= 60;
							break;
						case 9:
							d -= 54;
							break;
						case 8:
							d -= 49;
							break;
						case 7:
							d -= 44;
							break;
						case 6:
							d -= 40;
							break;
						case 5:
							d -= 37;
							break;
						case 4:
							d -= 34;
							break;
						case 3:
							d -= 32;
							break;
						default:
							d -= 100
					}
				} else if (k.type == 10) {
					var l = k.len / 3,
						m = 15 - l;
					k.max >= m ? k.mpn = e : k.mpn = e + L(k.max, l, b), g.push(k.mpn), c += k.mpn, i += l;
					var n = 0;
					switch (k.max) {
						case 15:
							n = 150;
							break;
						case 14:
							n = 136;
							break;
						case 13:
							n = 123;
							break;
						case 12:
							n = 111;
							break;
						case 11:
							n = 100;
							break;
						case 10:
							n = 90;
							break;
						case 9:
							n = 81;
							break;
						case 8:
							n = 73;
							break;
						case 7:
							n = 66;
							break;
						case 6:
							n = 60;
							break;
						case 5:
							n = 55;
							break;
						case 4:
							n = 51;
							break;
						case 3:
							n = 48;
							break;
						default:
							n = 150
					}
					n /= 2, k.len >= 15 ? d -= parseInt(125 + n) : k.len == 12 ? d -= parseInt(100 + n) : k.len == 9 ? d -= parseInt(75 + n) : k.len == 6 ? d -= parseInt(50 + n) : d -= parseInt(50 + n)
				} else if (k.type == 9) {
					var l = k.len / 2;
					k.mpn = e + M(k.max, l, b), g.push(k.mpn), c += k.mpn;
					var n = 0;
					switch (k.max) {
						case 15:
							n = 50;
							break;
						case 14:
							n = 50;
							break;
						case 13:
							n = 45;
							break;
						case 12:
							n = 40;
							break;
						case 11:
							n = 35;
							break;
						case 10:
							n = 30;
							break;
						case 9:
							n = 25;
							break;
						case 8:
							n = 20;
							break;
						case 7:
							n = 15;
							break;
						case 6:
							n = 10;
							break;
						case 5:
							n = 5;
							break;
						case 4:
							n = 0;
							break;
						case 3:
							n = 0;
							break;
						default:
							n = 0
					}
					var o = (l - 1) * 10 + n;
					d -= parseInt(o)
				} else if (k.type == 8) {
					k.mpn = e + N(k.max, k.len, b), g.push(k.mpn), c += k.mpn;
					var n = 0;
					switch (k.max) {
						case 15:
							n = 50;
							break;
						case 14:
							n = 50;
							break;
						case 13:
							n = 45;
							break;
						case 12:
							n = 40;
							break;
						case 11:
							n = 35;
							break;
						case 10:
							n = 30;
							break;
						case 9:
							n = 25;
							break;
						case 8:
							n = 20;
							break;
						case 7:
							n = 15;
							break;
						case 6:
							n = 10;
							break;
						case 5:
							n = 5;
							break;
						case 4:
							n = 0;
							break;
						case 3:
							n = 0;
							break;
						default:
							n = 0
					}
					var o = (k.len - 4) * 5 + n;
					d -= parseInt(o)
				} else k.type == 13 ? (k.mpn = O(k.max, b), g.push(k.mpn), k.mpn == 0 && f++, c += k.mpn, d -= 250) : k.type == 14 && (k.mpn = 0, f++, d -= 250, IsHJ = !0)
			}
			h.length >= 2 && h.sort(function(a, b) {
				return a < b ? 1 : -1
			});
			var p = 0;
			for (var j = 0; j < i && j < h.length; j++) {
				p += h[j];
				if (g.length > 0)
					for (var q = g.length - 1; q >= 0; q--) g[q] == h[j] && g.splice(q, 1)
			}
			for (var j = 0; j < f && j < g.length; j++) p += g[j];
			return c -= p, a.Pn = c < 0 ? 0 : c, a.oPn = parseInt(a.Pn * (1 + a.length / 17)), a.TPn = a.length * 80 + d, a
		}

		function R(a) {
			var b = a.length;
			a.Step = b, a.nDan = 0, a.xDan = 0, a.nDui = 0, a.xDui = 0, a.dDui = 0, a.nSan = 0, a.nZha = 0, a.nSun1 = 0, a.nSun2 = 0, a.nSun3 = 0, a.nHuo = 0, a.wDan = 0, a.nTow = 0;
			for (var c = 0; c < b; c++) a[c].type == 14 && (a.nHuo++, a.wDan--, a[c].max > 14 && (a.nTow += 2)), a[c].type == 1 && (a.nDan++, a[c].max <= 12 && (a.xDan++, a.wDan++), a[c].max > 14 && a.nTow++), a[c].type == 2 && (a.nDui++, a[c].max <= 11 ? (a.xDui++, a.wDan++) : a.dDui++, a[c].max > 14 && (a.nTow += 2)), a[c].type == 3 && (a.nSan++, a.wDan--, a[c].max > 14 && (a.nTow += 3)), a[c].type == 13 && (a.nZha++, a.wDan--, a[c].max > 14 && (a.nTow += 4)), a[c].type == 8 && a.nSun1++, a[c].type == 9 && a.nSun2++, a[c].type == 10 && (a.nSun3++, a.wDan -= a[c].len / 3)
		}

		function S(a, b) {
			var c = null,
				d = null;
			(a == null || a.length == 0) && alert("\u65e0\u724c\u53ef\u6512\uff01");
			for (var e = 0; e < a.length; e++) {
				var f = Q(a[e], b);
				if (c == null || f.oPn < c.oPn) c = f;
				if (d == null || f.TPn < d.TPn) d = f
			}
			return R(c), c
		}

		function V(a, b) {
			var c = 0;
			c += a.nDan, c -= a.nSan;
			for (var d = 0; d < a.Step; d++) a[d].type == 1 && a[d].max > b[0] && c--, a[d].type == 10 && (c -= parseInt(a[d].len / 3));
			return c <= 1 ? !0 : !1
		}

		function W(a) {
			if (a.nHuo + a.nZha == 0) return null;
			for (var b = a.Step - 1; b >= 0; b--)
				if (a[b].type == 13 || a[b].type == 14) return a[b].data.slice(0);
			return null
		}

		function X(a, b) {
			var c = a.Step,
				d = new Array,
				e = 0;
			for (var f = c - 1; f >= 0; f--)
				if (a[f].type == 1 && a[f].max <= 14) {
					d = d.concat(a[f].data), e++;
					if (e == b) break
				}
			return KAI.PxFux(d, 1)
		}

		function Y(a, b) {
			var c = a.Step,
				d = new Array,
				e = 0;
			for (var f = c - 1; f >= 0; f--)
				if (a[f].type == 2 && a[f].max <= 14) {
					d = d.concat(a[f].data), e++;
					if (e == b) break
				}
			return KAI.PxFux(d, 1)
		}

		function Z(a) {
			var b = a.Step;
			if (a.nSun3 > 0) {
				var c = null;
				for (var d = b - 1; d >= 0; d--)
					if (a[d].type == 10) {
						c = a[d].data;
						break
					}
				if (c == null) return null;
				var e = parseInt(c.length / 3),
					f = X(a, e);
				if (f.length == e) return c.concat(f);
				var g = Y(a, e);
				if (g.length == e * 2) return c.concat(g);
				if (e == 5)
					if (f.length * 2 > g.length) {
						if (f.length == 4) return c.slice(3).concat(f);
						if (f.length == 3) return c.slice(6).concat(f);
						if (f.length == 2) return c.slice(9).concat(f)
					} else {
						if (g.length == 8) return c.slice(3).concat(g);
						if (g.length == 6) return c.slice(6).concat(g);
						if (g.length == 4) return c.slice(9).concat(g)
					}
				if (e == 4)
					if (f.length * 2 > g.length) {
						if (f.length == 3) return c.slice(3).concat(f);
						if (f.length == 2) return c.slice(6).concat(f)
					} else {
						if (g.length == 6) return c.slice(3).concat(g);
						if (g.length == 4) return c.slice(6).concat(g)
					}
				if (e == 3)
					if (f.length * 2 > g.length) {
						if (f.length == 2) return c.slice(3).concat(f)
					} else
				if (g.length == 4) return c.slice(3).concat(g);
				return e == 2 && f.length == 1 && g.length == 2 ? (g = g.slice(1), f = f.concat(g), f = KAI.PxFux(f, 1), c.concat(f)) : c.slice(0)
			}
			return null
		}

		function _(a) {
			var b = a.Step;
			if (a.nSun2 > 0) {
				var c = null;
				for (var d = b - 1; d >= 0; d--)
					if (a[d].type == 9) {
						c = a[d].data;
						break
					}
				return c == null ? null : c.slice(0)
			}
			return null
		}

		function ba(a) {
			var b = a.Step;
			if (a.nSan > 0) {
				var c = null;
				for (var d = b - 1; d >= 0; d--)
					if (a[d].type == 3) {
						c = a[d].data;
						break
					}
				if (c == null) return null;
				var e = X(a, 1),
					f = Y(a, 1);
				return e.length == 1 && f.length == 2 ? e[0][0] - 1 <= f[0][0] ? c.concat(e) : c.concat(f) : e.length == 1 && f.length != 2 ? c.concat(e) : e.length != 1 && f.length == 2 ? c.concat(f) : c.slice(0)
			}
			return null
		}

		function bb(a) {
			var b = a.Step;
			if (a.nSun1 > 0) {
				var c = null;
				for (var d = b - 1; d >= 0; d--)
					if (a[d].type == 8) {
						c = a[d].data;
						break
					}
				return c == null ? null : c.slice(0)
			}
			return null
		}

		function bc(a) {
			var b = a.Step;
			if (a.nZha > 0) {
				var c = null;
				for (var d = b - 1; d >= 0; d--)
					if (a[d].type == 13) {
						c = a[d].data;
						break
					}
				return c == null ? null : c.slice(0)
			}
			return null
		}

		function bd(a) {
			var b = a.Step;
			if (a.nHuo > 0) {
				var c = null;
				for (var d = b - 1; d >= 0; d--)
					if (a[d].type == 14) {
						c = a[d].data;
						break
					}
				return c == null ? null : c.slice(0)
			}
			return null
		}

		function be(a) {
			var b = a.Step;
			if (a.nDui > 0) {
				var c = null;
				for (var d = b - 1; d >= 0; d--)
					if (a[d].type == 2) {
						c = a[d].data;
						break
					}
				return c == null ? null : c.slice(0)
			}
			return null
		}

		function bf(a) {
			var b = a.Step;
			if (a.nDan > 0) {
				var c = null;
				for (var d = b - 1; d >= 0; d--)
					if (a[d].type == 1) {
						c = a[d].data;
						break
					}
				return c == null ? null : c.slice(0)
			}
			return null
		}

		function bg(a) {
			var b = be(a),
				c = bf(a);
			if (c != null && b != null) return c[0][0] - 1 <= b[0][0] ? c : b;
			if (c != null) return c;
			if (b != null) return b
		}

		function bh(a, b, c, d) {
			if (a == 14 && b > 1) return null;
			if (c.length < b * 4) return null;
			var e = function(a) {
				var d = new Array;
				for (var e = 0; e < b; e++) d.push(a + 1 - e), d.push(a + 1 - e), d.push(a + 1 - e);
				var f = p(d, c);
				if (f != null) {
					var g = T(f.Less);
					return {
						Splt: f.Splt,
						Less: f.Less,
						PaiLu: g
					}
				}
				return null
			}, f = null,
				g = b == 1 ? 15 : 14;
			for (var h = a; h < g; h++) {
				var i = e(h);
				i != null && (f == null || i.PaiLu.TPn < f.PaiLu.TPn) && (f = i)
			}
			if (f == null) return null;
			var j = f.Splt,
				k = f.Less,
				l = f.PaiLu,
				m = new Array,
				n = function() {
					var a = null;
					if (l.nDui > 0)
						for (var b = l.Step - 1; b >= 0; b--)
							if (l[b].type == 2 && l[b].max < 15 && l[b].data.length > 0) {
								var c = p([l[b].max, l[b].max], k);
								if (c != null) {
									l[b].data.length -= 2, a = c.Splt, k = c.Less;
									break
								}
							}
					if (a == null && l.nSan > 0)
						for (var b = l.Step - 1; b >= 0; b--)
							if (l[b].type == 3 && l[b].max < 15 && l[b].data.length > 0) {
								var c = p([l[b].max, l[b].max], k);
								if (c != null) {
									l[b].data.length -= 2, a = c.Splt, k = c.Less;
									break
								}
							}
					if (a == null && l.nSun2 > 0)
						for (var b = l.Step - 1; b >= 0; b--)
							if (l[b].type == 9 && l[b].data.length > 0) {
								var d = l[b].data[l[b].data.length - 1][0],
									c = p([d, d], k);
								if (c != null) {
									l[b].data.length -= 2, a = c.Splt, k = c.Less;
									break
								}
							}
					if (a == null && l.nSun3 > 0)
						for (var b = l.Step - 1; b >= 0; b--)
							if (l[b].type == 10 && l[b].data.length > 0) {
								var d = l[b].data[l[b].data.length - 1][0],
									c = p([d, d], k);
								if (c != null) {
									l[b].data.length -= 2, a = c.Splt, k = c.Less;
									break
								}
							}
					if (a == null && l.nSan > 0)
						for (var b = l.Step - 1; b >= 0; b--)
							if (l[b].type == 3 && l[b].max == 15 && l[b].data.length > 0) {
								var c = p([15, 15], k);
								if (c != null) {
									l[b].data.length -= 2, a = c.Splt, k = c.Less;
									break
								}
							}
					if (a == null && l.nDui > 0)
						for (var b = l.Step - 1; b >= 0; b--)
							if (l[b].type == 2 && l[b].max == 15 && l[b].data.length > 0) {
								var c = p([15, 15], k);
								if (c != null) {
									l[b].data.length -= 2, a = c.Splt, k = c.Less;
									break
								}
							}
					return a
				};
			for (var h = 0; h < b; h++) {
				var o = n();
				if (o == null) return null;
				m = m.concat(o)
			}
			return j = j.concat(m), l = T(k), f.Splt = j, f.Less = k, f.PaiLu = l, f.IsCan = !1, f.IsYa = !1, f.PaiLu.TPn - d <= 0 && (f.IsCan = !0), f.PaiLu.TPn - d < 15 && (f.IsYa = !0), f.TPn = f.PaiLu.TPn, f
		}

		function bi(a, c, d, e) {
			if (a == 14 && c > 1) return null;
			if (d.length < c * 4) return null;
			var f = function(a) {
				var b = new Array;
				for (var e = 0; e < c; e++) b.push(a + 1 - e), b.push(a + 1 - e), b.push(a + 1 - e);
				var f = p(b, d);
				if (f != null) {
					var g = T(f.Less);
					return {
						Splt: f.Splt,
						Less: f.Less,
						PaiLu: g
					}
				}
				return null
			}, g = null,
				h = c == 1 ? 15 : 14;
			for (var i = a; i < h; i++) {
				var j = f(i);
				j != null && (g == null || j.PaiLu.TPn < g.PaiLu.TPn) && (g = j)
			}
			if (g == null) return null;
			var k = g.Splt,
				l = g.Less,
				m = g.PaiLu,
				n = new Array,
				o = function(a) {
					for (var c = 0; c < k.length / 3; c++)
						if (k[c * 3][0] == a) return !1;
					if (b) return !0;
					if (n.length == 0) return !0;
					for (var c = 0; c < n.length; c++)
						if (n[c][0] == a) return !1;
					return !0
				}, q = function() {
					var a = null;
					if (m.nDan > 0)
						for (var b = m.Step - 1; b >= 0; b--)
							if (m[b].type == 1 && m[b].max < 15 && o(m[b].max) && m[b].data.length > 0) {
								var c = p([m[b].max], l);
								if (c != null) {
									m[b].data.length--, a = c.Splt[0], l = c.Less;
									break
								}
							}
					if (a == null && m.nDui > 0)
						for (var b = m.Step - 1; b >= 0; b--)
							if (m[b].type == 2 && m[b].max < 15 && o(m[b].max) && m[b].data.length > 0) {
								var c = p([m[b].max], l);
								if (c != null) {
									m[b].data.length--, a = c.Splt[0], l = c.Less;
									break
								}
							}
					if (a == null && m.nSun1 > 0)
						for (var b = m.Step - 1; b >= 0; b--)
							if (m[b].type == 8 && m[b].data.length >= 6 && o(m[b].data[m[b].data.length - 1][0]) && m[b].data.length > 0) {
								var c = p([m[b].data[m[b].data.length - 1][0]], l);
								if (c != null) {
									m[b].data.length--, a = c.Splt[0], l = c.Less;
									break
								}
							}
					if (a == null && m.nSan > 0)
						for (var b = m.Step - 1; b >= 0; b--)
							if (m[b].type == 3 && m[b].max < 15 && o(m[b].max) && m[b].data.length > 0) {
								var c = p([m[b].max], l);
								if (c != null) {
									m[b].data.length--, a = c.Splt[0], l = c.Less;
									break
								}
							}
					if (a == null && m.nDan > 0)
						for (var b = m.Step - 1; b >= 0; b--)
							if (m[b].type == 1 && m[b].max >= 15 && o(m[b].max) && m[b].data.length > 0) {
								var c = p([m[b].max], l);
								if (c != null) {
									m[b].data.length--, a = c.Splt[0], l = c.Less;
									break
								}
							}
					if (a == null && m.nDui > 0)
						for (var b = m.Step - 1; b >= 0; b--)
							if (m[b].type == 2 && m[b].max == 15 && o(15) && m[b].data.length > 0) {
								var c = p([15], l);
								if (c != null) {
									m[b].data.length--, a = c.Splt[0], l = c.Less;
									break
								}
							}
					if (a == null && m.nSan > 0)
						for (var b = m.Step - 1; b >= 0; b--)
							if (m[b].type == 3 && m[b].max == 15 && o(15) && m[b].data.length > 0) {
								var c = p([15], l);
								if (c != null) {
									m[b].data.length--, a = c.Splt[0], l = c.Less;
									break
								}
							}
					if (a == null && m.nSun3 > 0)
						for (var b = m.Step - 1; b >= 0; b--)
							if (m[b].type == 10 && o(m[b].data[m[b].data.length - 1][0]) && m[b].data.length > 0) {
								var c = p([m[b].data[m[b].data.length - 1][0]], l);
								if (c != null) {
									m[b].data.length--, a = c.Splt[0], l = c.Less;
									break
								}
							}
					if (a == null && m.nSun2 > 0)
						for (var b = m.Step - 1; b >= 0; b--)
							if (m[b].type == 9 && o(m[b].data[m[b].data.length - 1][0]) && m[b].data.length > 0) {
								var c = p([m[b].data[m[b].data.length - 1][0]], l);
								if (c != null) {
									m[b].data.length--, a = c.Splt[0], l = c.Less;
									break
								}
							}
					if (a == null && m.nSun1 > 0)
						for (var b = m.Step - 1; b >= 0; b--)
							if (m[b].type == 8 && o(m[b].data[m[b].data.length - 1][0]) && m[b].data.length > 0) {
								var c = p([m[b].data[m[b].data.length - 1][0]], l);
								if (c != null) {
									m[b].data.length--, a = c.Splt[0], l = c.Less;
									break
								}
							}
					return a
				};
			for (var i = 0; i < c; i++) {
				var r = q();
				if (r == null) return null;
				n.push(r)
			}
			return k = k.concat(n), m = T(l), g.Splt = k, g.Less = l, g.PaiLu = m, g.IsCan = !1, g.IsYa = !1, g.PaiLu.TPn - e <= 0 && (g.IsCan = !0), g.PaiLu.TPn - e < 15 && (g.IsYa = !0), g.TPn = g.PaiLu.TPn, g
		}

		function bj(a, b, c, d) {
			if (a == 14 && b > 1) return null;
			if (c.length < b * 3) return null;
			var e = function(a) {
				var d = new Array;
				for (var e = 0; e < b; e++) d.push(a + 1 - e), d.push(a + 1 - e), d.push(a + 1 - e);
				var f = p(d, c);
				if (f != null) {
					var g = T(f.Less);
					return {
						Splt: f.Splt,
						Less: f.Less,
						PaiLu: g
					}
				}
				return null
			}, f = null,
				g = b == 1 ? 15 : 14;
			for (var h = a; h < g; h++) {
				var i = e(h);
				i != null && (f == null || i.PaiLu.TPn < f.PaiLu.TPn) && (f = i)
			}
			return f == null ? null : (f.IsCan = !1, f.IsYa = !1, f.PaiLu.TPn - d <= 0 && (f.IsCan = !0), f.PaiLu.TPn - d < 15 && (f.IsYa = !0), f.TPn = f.PaiLu.TPn, f)
		}

		function bk(a, b, c, d) {
			if (a == 14) return null;
			if (c.length < b * 2) return null;
			var e = function(a) {
				var d = new Array;
				for (var e = 0; e < b; e++) d.push(a + 1 - e), d.push(a + 1 - e);
				var f = p(d, c);
				if (f != null) {
					var g = T(f.Less);
					return {
						Splt: f.Splt,
						Less: f.Less,
						PaiLu: g
					}
				}
				return null
			}, f = T(c),
				g = null;
			for (var h = a; h < 14; h++) {
				var i = e(h);
				i != null && (g == null || i.PaiLu.TPn < g.PaiLu.TPn) && (g = i)
			}
			return g == null ? null : (g.IsCan = !1, g.IsYa = !1, g.PaiLu.TPn - d <= 0 && (g.IsCan = !0), g.PaiLu.TPn - d < 15 && (g.IsYa = !0), g.TPn = g.PaiLu.TPn, g)
		}

		function bl(a, b, c, d) {
			if (a == 14) return null;
			if (c.length < b) return null;
			var e = function(a) {
				var d = new Array;
				for (var e = 0; e < b; e++) d.push(a + 1 - e);
				var f = p(d, c);
				if (f != null) {
					var g = T(f.Less);
					return {
						Splt: f.Splt,
						Less: f.Less,
						PaiLu: g
					}
				}
				return null
			}, f = T(c),
				g = null;
			for (var h = a; h < 14; h++) {
				var i = e(h);
				i != null && (g == null || i.PaiLu.TPn < g.PaiLu.TPn) && (g = i)
			}
			return g == null ? null : (g.IsCan = !1, g.IsYa = !1, g.PaiLu.TPn - d <= 0 && (g.IsCan = !0), g.PaiLu.TPn - d < 15 && (g.IsYa = !0), g.TPn = g.PaiLu.TPn, g)
		}

		function bm(a, b, c) {
			if (a == 15) return null;
			if (b.length < 2) return null;
			var d = function(a) {
				var c = p([a + 1, a + 1], b);
				if (c != null) {
					var d = T(c.Less);
					return {
						Splt: c.Splt,
						Less: c.Less,
						PaiLu: d
					}
				}
				return null
			}, e = T(b),
				f = null;
			for (var g = a; g < 15; g++) {
				var h = d(g);
				h != null && (f == null || h.PaiLu.TPn < f.PaiLu.TPn) && (f = h)
			}
			return f == null ? null : (f.IsCan = !1, f.IsYa = !1, f.PaiLu.TPn - c <= 0 && (f.IsCan = !0), f.PaiLu.TPn - c < 15 && (f.IsYa = !0), f.Pn = f.PaiLu.TPn, f)
		}

		function bn(a, b, c) {
			if (a == 17) return null;
			if (b.length < 1) return null;
			var d = function(a) {
				var c = p([a + 1], b);
				if (c != null) {
					var d = T(c.Less);
					return {
						Splt: c.Splt,
						Less: c.Less,
						PaiLu: d
					}
				}
				return null
			}, e = T(b),
				f = null;
			for (var g = a; g < 17; g++) {
				var h = d(g);
				h != null && (f == null || h.PaiLu.TPn < f.PaiLu.TPn) && (f = h)
			}
			return f == null ? null : (f.IsCan = !1, f.IsYa = !1, f.PaiLu.TPn - c <= 0 && (f.IsCan = !0), f.PaiLu.TPn - c < 15 && (f.IsYa = !0), f.TPn = f.PaiLu.TPn, f)
		}

		function W(a) {
			if (a.nHuo + a.nZha == 0) return null;
			for (var b = a.Step - 1; b >= 0; b--)
				if (a[b].type == 13 || a[b].type == 14) return a[b].data.slice(0);
			return null
		}
		var a = "undefined",
			b = !1,
			c = 2e3,
			d = 17,
			e = 17,
			f = 71,
			g = 94,
			h = function(a, b, c) {
				var d = $('<div class="button"></div>');
				typeof a != "undefined" && d.addClass(a), d.click(c);
				var e = typeof b == "undefined" ? typeof BtnTags[a] == "undefined" ? "center" : BtnTags[a] : b;
				return d.css("background-position", "0px " + e), d.bind("mouseup mouseenter", function() {
					var a = $(this),
						b = a.width(),
						c = "-" + b + "px";
					a.css("background-position", c + " " + e)
				}), d.mousedown(function() {
					var a = $(this),
						b = a.width() * 2,
						c = "-" + b + "px";
					a.css("background-position", c + " " + e)
				}), d.mouseleave(function() {
					var a = $(this);
					a.css("background-position", "0px " + e)
				}), d
			}, i = function(a, b, c, d) {
				var e = null,
					f = $('<div class="clock"></div>');
				typeof d != "undefined" && f.addClass(d);
				var g = typeof a == "function" ? a : null,
					h = typeof c == "undefined" ? 30 : c,
					i = 0,
					j = typeof t == "undefined" ? !0 : b,
					k = !1;
				f.text(h);
				var l = function() {
					if (!k) return;
					f.text(h - i), i == h ? (typeof g == "function" && g(), m()) : (e != null && (window.clearTimeout(e), e = null), e = window.setTimeout(function() {
						l()
					}, 1e3)), i++
				}, m = f.End = function() {
						e != null && (window.clearTimeout(e), e = null), k = !1, f.hide()
					}, n = f.ShowStart = function(a) {
						g = a, f.show(), j && o()
					}, o = f.Start = function() {
						i = 0, k = !0, l()
					};
				return f.setcallback = function(a) {
					g = a
				}, f
			}, j = function(a, b) {
				var c = $('<div class="label"></div>');
				return typeof a != "undefined" && c.addClass(a), typeof b != "undefined" && c.css(b), c
			}, k = function(a, b, c) {
				var d = $('<div class="card"></div>');
				b == 1 && d.css("cursor", "pointer"), d.data("val", a);
				var e = 0;
				typeof b != "undefined" && b == 1 && (e = 17, d.top(e));
				var h = 0,
					i = 0,
					j = f * 13,
					k = g * 4;
				if (a == null || a[0] == 0 || c) i = -j, h = -(k - g * 2);
				else if (a[0] == 16) i = -j, h = 0;
				else if (a[0] == 17) i = -j, h = -g;
				else {
					h = -g * a[1];
					var l = a[0] > 13 ? a[0] - 13 : a[0];
					i = -f * l + f
				}
				var m = i + "px " + h + "px";
				d.css("background-position", i + "px " + h + "px");
				var n = !1,
					o = !1;
				d.getTop = function() {
					return n
				}, d.setTop = function(a) {
					n = a, a == 1 ? d.top(e - 17) : d.top(e)
				}, d.getVal = function() {
					return d.data("val")
				}, d.getSlc = function() {
					return o
				};
				if (typeof b != "undefined" && b == 1) {
					d.click(function() {
						n ? n = !1 : n = !0, d.setTop(n)
					});
					var p = $('<div class="select"></div>').appendTo(d).hide();
					d.PSelect = function(a) {
						if (a == o) return;
						o = a, o ? p.show() : p.hide()
					}
				}
				return d
			}, l = function(a, b, c, h, i, j, l) {
				var m = $('<div class="cardgroup"></div>');
				b == 1 && m.css("cursor", "pointer"), m.width(h.width), m.height(h.height);
				var n = a == null ? [] : a,
					o = c == null ? !0 : c,
					p = i == null ? !0 : i,
					q = new Array,
					r = l == null ? 1 : l,
					s = typeof j == "undefined" ? d : j;
				for (var t = 0; t < n.length; t++) q[t] = k(n[t], b, p).appendTo(m);
				m.setPx = function(a) {
					r = a, n = KAI.PxFux(n, r), u()
				};
				var u = function() {
					if (o) {
						var a = parseInt((h.width - (s * (q.length - 1) + f)) / 2);
						for (var b = 0; b < n.length; b++)
							for (var c = 0; c < q.length; c++) {
								var d = q[c].data("val");
								if (d[0] == n[b][0] && d[1] == n[b][1]) {
									q[c].left(a + b * s), q[c].css("z-index", b + 1);
									break
								}
							}
					} else {
						var a = parseInt((h.height - (e * (q.length - 1) + g)) / 2);
						for (var b = 0; b < n.length; b++)
							for (var c = 0; c < q.length; c++) {
								var d = q[c].data("val");
								if (d[0] == n[b][0] && d[1] == n[b][1]) {
									q[c].top(a + b * e), q[c].css("z-index", b + 1);
									break
								}
							}
					}
				};
				u();
				var v = m.DelCards = function(a) {
					var b = new Array;
					for (var c = 0; c < a.length; c++) {
						for (var d = n.length - 1; d >= 0; d--)
							if (n[d][0] == a[c][0] && n[d][1] == a[c][1]) {
								n.splice(d, 1);
								break
							}
						for (var d = q.length - 1; d >= 0; d--) {
							var e = q[d].data("val");
							if (e[0] == a[c][0] && e[1] == a[c][1]) {
								q[d].remove(), q.splice(d, 1);
								break
							}
						}
					}
					KAI.PxFux(n, r), u()
				}, w = m.AddCards = function(a) {
						for (var c = a.length - 1; c >= 0; c--)
							for (var d = 0; d < n.length; d++)
								if (n[d][0] == a[c][0] && n[d][1] == a[c][1]) {
									a.splice(c, 1);
									break
								}
						for (var c = 0; c < a.length; c++) n.push(a[c]);
						for (var c = 0; c < a.length; c++) q.push(k(a[c], b, p).appendTo(m));
						n.PxType = 0, n = KAI.PxFux(n, r), u()
					}, x = m.SetDown = function() {
						for (var a = 0; a < q.length; a++) q[a].setTop(!1)
					}, y = m.CleanAll = function() {
						for (var a = 0; a < q.length; a++) q[a].remove();
						n = [], q = []
					}, z = m.XianSHI = function() {
						p = !1;
						for (var a = 0; a < q.length; a++) q[a].remove();
						q = [];
						for (var a = 0; a < n.length; a++) q[a] = k(n[a], b, p).appendTo(m);
						u()
					}, A = m.SetCards = function(a) {
						y(), n = a;
						for (var c = 0; c < n.length; c++) q[c] = k(n[c], b, p).appendTo(m);
						u()
					};
				if (b) {
					var B = !1,
						C = 0,
						D = [],
						E = new KAI.AutoObj;
					m.mousedown(function(a) {
						C = m.left(), OldPX = a.pageX - C, B = !0, D = [];
						for (var b = 0; b < q.length; b++) {
							var c = q[b].data("val"),
								d = q[b].left();
							c[0] == n[n.length - 1][0] && c[1] == n[n.length - 1][1] ? D[b] = {
								left: d,
								right: d + f
							} : D[b] = {
								left: d,
								right: d + s
							}
						}
					}), m.mousemove(function(a) {
						if (!B) return;
						var b = a.pageX - C,
							c = Math.abs(b - OldPX);
						if (c < 8) return;
						var d = OldPX;
						b < OldPX && (d = b);
						var e = d + Math.abs(c);
						for (var f = 0; f < D.length; f++) D[f].right > d && D[f].left < e ? q[f].PSelect(!0) : q[f].PSelect(!1)
					}), m.mouseleave(function() {
						B = !1;
						for (var a = 0; a < q.length; a++) q[a].PSelect(!1)
					}), m.mouseup(function(a) {
						if (!B) return;
						OldPX = 0, B = !1;
						for (var b = 0; b < q.length; b++) q[b].getSlc() && (q[b].PSelect(!1), q[b].setTop(!q[b].getTop()))
					}), m.getSelect = function() {
						var a = [];
						for (var b = 0; b < q.length; b++) q[b].getTop() && (val = q[b].data("val"), a.push(val));
						return a
					}, m.AutoTishi = function(a, b) {
						var c = b == null ? !1 : b,
							d = E.AutoTs(n, a, c);
						x(), d == null && (d = []);
						for (var e = 0; e < d.length; e++)
							for (var f = 0; f < q.length; f++) {
								var g = q[f].data("val");
								if (d[e][0] == g[0] && d[e][1] == g[1]) {
									q[f].setTop(!0);
									break
								}
							}
					}
				}
				return m
			}, m = this.Poker = function() {
				var a = [];
				for (var b = 3; b <= 15; b++)
					for (var c = 0; c <= 3; c++) a.push([b, c]);
				return a.push([16, 4]), a.push([17, 4]), a
			}(),
			n = this.Shuffle = function(a, b, c, d) {
				var e = new Array,
					f = new Array,
					g = new Array,
					h = new Array,
					i = new Array;
				for (var j = 0; j < m.length; j++) {
					var k = new Object;
					k.run = Math.random(), k.data = m[j], e.push(k)
				}
				e.sort(function(a, b) {
					return a.run > b.run ? 1 : -1
				});
				for (var j = 0; j < 17; j++) {
					var l = j * 3;
					f.push(e[l].data), g.push(e[l + 1].data), h.push(e[l + 2].data)
				}
				i.push(e[51].data), i.push(e[52].data), i.push(e[53].data), a.Cards(f), b.Cards(g), c.Cards(h), d.Cards(i)
			}, u = function(a) {
				if (a == null || a.length == 0) return null;
				var b = a.length,
					c = KAI.PxFux(a, 1),
					d = !1,
					e = new Array,
					f = new Array,
					g = new Array,
					h = new Array,
					i = new Array,
					j = new Array,
					k = new Array;
				b > 1 && c[0][0] == 17 && c[1][0] == 16 && (d = !0);
				for (var l = 0; l < b; l++)(e.length == 0 || c[l][0] != e[e.length - 1]) && (!d || c[l][1] != 4) && e.push(c[l][0]);
				for (var l = 0; l < b - 1; l++) c[l][0] == c[l + 1][0] && ((f.length == 0 || c[l][0] != f[f.length - 1]) && f.push(c[l][0]), l++);
				for (var l = 0; l < b - 2; l++) c[l][0] == c[l + 1][0] && c[l + 2][0] == c[l][0] && ((g.length == 0 || c[l][0] != g[g.length - 1]) && g.push(c[l][0]), l += 2);
				for (var l = 0; l < b - 3; l++) c[l][0] == c[l + 1][0] && c[l + 2][0] == c[l][0] && c[l + 3][0] == c[l][0] && ((h.length == 0 || c[l][0] != h[h.length - 1]) && h.push(c[l][0]), l += 3);
				for (var l = 0; l < e.length; l++) {
					if (e[l] > 14) continue;
					if (e[l] < 7) break;
					for (var m = l; m < e.length; m++) {
						var n = m + 1;
						if (n == e.length || e[l] - e[n] != n - l) {
							var o = n - l;
							if (o > 4) {
								var p = q(e[l], e[m]);
								i.push({
									Max: e[l],
									Min: e[m],
									Len: o,
									nlen: o,
									val: p
								})
							}
							l = m;
							break
						}
					}
				}
				for (var l = 0; l < f.length; l++) {
					if (f[l] > 14) continue;
					if (f[l] < 5) break;
					for (var m = l; m < f.length; m++) {
						var n = m + 1;
						if (n == f.length || f[l] - f[n] != n - l) {
							var o = n - l;
							if (o > 2) {
								var p = r(f[l], f[m]);
								j.push({
									Max: f[l],
									Min: f[m],
									Len: o,
									nlen: o * 2,
									val: p
								})
							}
							l = m;
							break
						}
					}
				}
				for (var l = 0; l < g.length; l++) {
					if (g[l] > 14) continue;
					if (g[l] < 4) break;
					for (var m = l; m < g.length; m++) {
						var n = m + 1;
						if (n == g.length || g[l] - g[n] != n - l) {
							var o = n - l;
							if (o > 1) {
								var p = s(g[l], g[m]);
								k.push({
									Max: g[l],
									Min: g[m],
									Len: o,
									nlen: o * 3,
									val: p
								})
							}
							l = m;
							break
						}
					}
				}
				return {
					Huo: d,
					Dan: e,
					Dui: f,
					San: g,
					Siz: h,
					Sun: i,
					Sun2: j,
					Sun3: k
				}
			}, H = this.Keeper = function() {
				var a = [];
				return {
					add: function(b) {
						a = a.concat(b)
					},
					get: function() {
						return a
					},
					clean: function() {
						a = []
					},
					getMS: function() {
						return F(a, [])
					}
				}
			}(),
			T = this.ZhanPai = function(a) {
				if (a.length == 0) return [];
				var b = KAI.PxFux(a, 1),
					c = F(b, H.getMS());
				c.sort(function(a, b) {
					return a.k < b.k ? 1 : -1
				});
				var d = G(c),
					e = u(b),
					f = new Array;
				if (e.Huo) {
					var g = p([17, 16], b);
					g != null && (f.push({
						data: g.Splt,
						type: 14,
						max: 17,
						len: 2
					}), b = g.Less)
				}
				for (var h = 0; h < e.Siz.length; h++) {
					var i = e.Siz[h],
						g = p([i, i, i, i], b);
					g != null && (f.push({
						data: g.Splt,
						type: 13,
						max: i,
						len: 4
					}), b = g.Less)
				}
				if (e.San.length > 0 && e.San[0] == 15) {
					var g = p([15, 15, 15], b);
					g != null && (f.push({
						data: g.Splt,
						type: 3,
						max: 15,
						len: 3
					}), b = g.Less)
				}
				if (e.Dui.length > 0 && e.Dui[0] == 15) {
					var g = p([15, 15], b);
					g != null && (f.push({
						data: g.Splt,
						type: 2,
						max: 15,
						len: 2
					}), b = g.Less)
				}
				var j = {
					Splt: f,
					Less: b
				}, k = D(j),
					l = S(k, d);
				return l
			}, U = function() {
				var b = [],
					c = this.clear = function() {
						for (var a in b) b[a].remove();
						return b = [], this
					}, d = this.add = function(a, c) {
						return b[a] = c, b[a]
					}, e = this.get = function(c) {
						return typeof b[c] != a ? b[c] : $("<div></div>")
					}, f = this.hide = function() {
						for (var a in b) b[a].hide();
						return this
					}, g = this.show = function() {
						for (var a in b) b[a].show();
						return this
					}
			}, bo = function(b, d, e) {
				var f = this.ID = d,
					g = b,
					i = typeof e == a ? !1 : e,
					j = null,
					k = null,
					l = null,
					m = [],
					n = [],
					p = !1,
					q = 1,
					r = !1,
					s = null,
					t = 0,
					u = 0,
					v = null,
					w = null,
					x = !1,
					y = 0,
					z = new U,
					A = new U,
					B = null,
					C = !1,
					D = null,
					E = null,
					F = null,
					G = 0,
					I = this.Pn = function(b) {
						if (typeof b == a) return t;
						t = b
					}, J = this.TPn = function(b) {
						if (typeof b == a) return u;
						u = b
					}, K = this.IsWin = function(b) {
						if (typeof b == a) return C;
						C = b
					}, L = function() {
						s = T(m), I(s.oPn), J(s.TPn)
					};
				this.IsPlay = function() {
					return i
				}, this.IsJFen = function() {
					return x
				}, this.JFen = function() {
					return y
				}, this.ChuPaiTice = function() {
					return G
				}, this.SetPx = function(b) {
					if (typeof b == a) return q;
					q = b, l.setPx(q)
				}, this.Dizhu = function(b) {
					if (typeof b == a) return p;
					p = b, p && D.show()
				}, this.UpPlayer = function(b) {
					if (typeof b == a) return v;
					v = b
				}, this.DnPlayer = function(b) {
					if (typeof b == a) return w;
					w = b
				}, this.PaiLu = function(b) {
					if (typeof b == a) return s;
					s = b, I(s.oPn), J(s.TPn)
				}, this.OutedCards = function(b) {
					if (typeof b == a) return n;
					n = KAI.PxFux(b, 2)
				}, this.Cards = function(b) {
					if (typeof b == a) return m;
					m = KAI.PxFux(b, q), L()
				}, this.CardDiv = function(b) {
					return typeof b == a ? l : (l = b, l)
				}, this.OutCardDiv = function(b) {
					return typeof b == a ? B : (B = b, B)
				}, this.Clock = function(b) {
					return typeof b == a ? j : (j = b, j)
				}, this.Tishi = function(b) {
					return typeof b == a ? k : (k = b, k)
				}, this.DZDiv = function(b) {
					return typeof b == a ? D : (D = b, D)
				}, this.BtnPx = function(b) {
					return typeof b == a ? E : (E = b, E)
				}, this.MoneyDiv = function(b) {
					return typeof b == a ? F : (F = b, F)
				}, this.AddDiPai = function(a) {
					m = KAI.PxFux(m.concat(a), q), l.AddCards(a), L()
				};
				var M = this.OutCards = function(b) {
					typeof b == a && alert("err"), j.End();
					if (b.length == 0) n = [], k.text("\u4e0d\u51fa"), k.show(), i && l.SetDown();
					else {
						var c = o(m, b);
						c ? (H.add(b), n = KAI.PxFux(b, 2), KAI.GetType(n) >= 13 && g.AddZha(), B.SetCards(n), l.DelCards(n), B.show(), L(), G++) : alert("err")
					}
					i && (A.clear(), $(document).unbind("mousedown")), m.length == 0 ? (K(!0), v.IsWin(v.Dizhu() == p), w.IsWin(w.Dizhu() == p), g.OverGame()) : w.BiginChuPai()
				}, N = this.TimeOutChuPai = function() {
						if (i)
							if (v.OutedCards().length == 0 && w.OutedCards().length == 0) {
								l.AutoTishi(null, !0);
								var a = l.getSelect();
								M(a)
							} else M([])
					}, O = function() {
						var a = m.slice(0),
							b = 0,
							c = KAI.PxFux(a, 1),
							d = KAI.PxFux(c, 2);
						c[0][0] == 17 && c[1][0] == 16 ? b += 8 : c[0][0] == 17 ? b += 4 : c[0][0] == 16 && (b += 3);
						for (var e = 0; e < d.length - 3; e++) d[e][0] == d[e + 1][0] && d[e + 1][0] == d[e + 2][0] && d[e + 2][0] == d[e + 3][0] && (d[e][0] == 15 ? b += 0 : d[e][0] == 14 ? b += 3 : d[e][0] == 13 ? b += 7 : b += 6, e += 3);
						for (var e = 0; e < d.length; e++) d[e][0] == 15 && (b += 2), d[e][0] == 14 && (b += 1);
						return t > v.Pn() && t > w.Pn() && (b += 1), t > v.TPn() && t > w.TPn() && (b += 1), b >= 10 ? 3 : b >= 8 ? 2 : b >= 6 ? 1 : 0
					}, P = this.JiaoFen = function(a) {
						a == 0 ? k.text("\u4e0d\u53eb") : (k.text(a + "\u5206"), y = a, g.Fen(a)), j.End(), i && z.clear(), k.show(), x = !0, !w.IsJFen() && g.Fen() < 3 ? (w.Clock().ShowStart(function() {
							w.JiaoFen(0)
						}), w.BiginJiaoFen()) : g.SetDiZhu()
					}, Q = function() {
						var a = null,
							b = s,
							c = b.Step;
						if (b.Pn <= 0) {
							var d = 0;
							for (var e = 0; e < c; e++) {
								var f = b[e];
								(f.type == 13 && f.mpn == 0 || f.type == 14) && d++
							}
							var g = 0;
							p ? g = v.PaiLu().Step < w.PaiLu().Step ? v.PaiLu().Step : w.PaiLu().Step : g = v.Dizhu() ? v.PaiLu().Step : w.PaiLu().Step;
							if (p == v.Dizhu()) {
								var h = v.PaiLu();
								if (h.Step == 1 && (s.Step >= 2 || s.TPn > 10))
									for (var e = c - 1; e <= 0; e--)
										if (b[e].type == h[0].type && b[e].max < h[0].max) return b[e].data.slice(0)
							}
							if (c == 2) {
								if (b[0].type >= 13 && g > 1) return b[1].data.slice(0);
								if (b[0].type == 3) {
									if (b[1].type <= 2) return a = b[0].data.slice(0), a = a.concat(b[1].data.slice(0)), a
								} else if (b[1].type == 3 && b[0].type <= 2) return a = b[1].data.slice(0), a = a.concat(b[0].data.slice(0)), a
							}
							if (g > d && g != 1) return b[c - 1].data.slice(0);
							if (g == 1) {
								if (p) {
									var i = v.PaiLu(),
										j = w.PaiLu();
									if (i.Step == j.Step) {
										for (var e = c - 1; e >= 0; e--)
											if (b[e].type != i[0].type && b[e].type != j[0].type) return b[e].data.slice(0);
										for (var e = c - 1; e >= 0; e--)
											if (b[e].max >= i[0].max && b[e].max > j[0].max) return b[e].data.slice(0);
										for (var e = c - 1; e >= 0; e--)
											if (b[e].mpn == 0) return b[e].data.slice(0);
										return b[c - 1].data.slice(0)
									}
									YPaiLu = i.Step < j.Step ? i : j;
									for (var e = c - 1; e >= 0; e--)
										if (b[e].type != YPaiLu[0].type) return b[e].data.slice(0);
									for (var e = c - 1; e >= 0; e--)
										if (b[e].max >= YPaiLu[0].max) return b[e].data.slice(0);
									for (var e = c - 1; e >= 0; e--)
										if (b[e].mpn == 0) return b[e].data.slice(0);
									return b[c - 1].data.slice(0)
								}
								YPaiLu = v.Dizhu() ? v.PaiLu() : w.PaiLu();
								for (var e = c - 1; e >= 0; e--)
									if (b[e].type != YPaiLu[0].type) return b[e].data.slice(0);
								for (var e = c - 1; e >= 0; e--)
									if (b[e].max >= YPaiLu[0].max) return b[e].data.slice(0);
								for (var e = c - 1; e >= 0; e--)
									if (b[e].mpn == 0) return b[e].data.slice(0);
								return b[c - 1].data.slice(0)
							}
							var k = null;
							for (var e = c - 1; e >= 0; e--)
								if (b[e].type == 1 || b[e].type == 2)
									if (k == null || k.mpn < b[e].mpn) k = b[e];
							if (k != null && k.mpn != 0 && b.nSun3 > 0) {
								a = Z(b);
								if (a != null) return a
							}
							return a = _(b), a != null ? a : (a = bb(b), a != null ? a : (a = ba(b), a != null ? a : k != null ? k.data.slice(0) : b[c - 1].data.slice(0)))
						}
						if (c == 2) {
							if (b[0].type >= 13) return b[1].data.slice(0);
							if (b[0].type == 3) {
								if (b[1].type <= 2) return a = b[0].data.slice(0), a = a.concat(b[1].data.slice(0)), a
							} else if (b[1].type == 3 && b[0].type <= 2) return a = b[1].data.slice(0), a = a.concat(b[0].data.slice(0)), a
						}
						var g = 0;
						p ? g = v.PaiLu().Step < w.PaiLu().Step ? v.PaiLu().Step : w.PaiLu().Step : g = v.Dizhu() ? v.PaiLu().Step : w.PaiLu().Step;
						if (g == 1) {
							if (p) {
								var i = v.PaiLu(),
									j = w.PaiLu();
								if (i.Step == j.Step) {
									for (var e = c - 1; e >= 0; e--)
										if (b[e].type != i[0].type && b[e].type != j[0].type) return b[e].data.slice(0);
									for (var e = c - 1; e >= 0; e--)
										if (b[e].max >= i[0].max && b[e].max > j[0].max) return b[e].data.slice(0);
									for (var e = c - 1; e >= 0; e--)
										if (b[e].mpn == 0) return b[e].data.slice(0);
									return b[c - 1].data.slice(0)
								}
								YPaiLu = i.Step < j.Step ? i : j;
								for (var e = c - 1; e >= 0; e--)
									if (b[e].type != YPaiLu[0].type) return b[e].data.slice(0);
								for (var e = c - 1; e >= 0; e--)
									if (b[e].max >= YPaiLu[0].max) return b[e].data.slice(0);
								for (var e = c - 1; e >= 0; e--)
									if (b[e].mpn == 0) return b[e].data.slice(0);
								return b[c - 1].data.slice(0)
							}
							YPaiLu = v.Dizhu() ? v.PaiLu() : w.PaiLu();
							for (var e = c - 1; e >= 0; e--)
								if (b[e].type != YPaiLu[0].type) return b[e].data.slice(0);
							for (var e = c - 1; e >= 0; e--)
								if (b[e].max >= YPaiLu[0].max) return b[e].data.slice(0);
							for (var e = c - 1; e >= 0; e--)
								if (b[e].mpn == 0) return b[e].data.slice(0);
							return b[c - 1].data.slice(0)
						}
						if (g == 2 || g == 3) {
							var k = null;
							for (var e = c - 1; e >= 0; e--)
								if (b[e].type == 1 || b[e].type == 2)
									if (k == null || k.mpn < b[e].mpn) k = b[e];
							if (k != null && k.mpn != 0 && b.nSun3 > 0) {
								a = Z(b);
								if (a != null) return a
							}
							return a = _(b), a != null ? a : (a = bb(b), a != null ? a : (a = ba(b), a != null ? a : k != null ? k.data.slice(0) : b[c - 1].data.slice(0)))
						}
						var k = b.slice(0);
						k.sort(function(a, b) {
							return a.mpn < b.mpn ? 1 : -1
						});
						if (k[0].type == 3) {
							a = ba(b);
							if (a != null) return a
						} else if (k[0].type == 10) {
							a = Z(b);
							if (a != null) return a
						}
						if (b.Pn < 20 || b.wDan < 3) {
							a = _(b);
							if (a != null) return a;
							a = bb(b);
							if (a != null) return a
						}
						if (c >= 3) {
							if (b.wDan > 0 && k[0].max < 14) return k[0].data.slice(0);
							a = Z(b), a == null && (a = ba(b));
							if (a != null && a[0][0] < 7 && k[0].max < 14 && k[0].type <= 2) return a;
							if (a != null && a[0][0] < 6 && k[0].max < 15 && k[0].type <= 2) return a;
							if (a != null && a[0][0] < 5 && k[0].max < 16 && k[0].type <= 2) return a;
							if (a != null && a[0][0] < 4 && k[0].max < 17 && k[0].type <= 2) return a;
							if (a != null && k[0].max < 7 && k[0].type <= 2) {
								if (c <= 11 && a[0][0] < 8) return a;
								if (c <= 10 && a[0][0] < 9) return a;
								if (c <= 9 && a[0][0] < 10) return a;
								if (c <= 8 && a[0][0] < 11) return a;
								if (c <= 7 && a[0][0] < 12) return a;
								if (c <= 6 && a[0][0] < 13) return a;
								if (c <= 5 && a[0][0] < 14) return a;
								if (c <= 4 && a[0][0] < 15) return a
							} else if (a != null && k[0].max < 9 && k[0].type <= 2) {
								if (c <= 7 && a[0][0] < 12) return a;
								if (c <= 6 && a[0][0] < 13) return a;
								if (c <= 5 && a[0][0] < 14) return a;
								if (c <= 4 && a[0][0] < 15) return a
							} else if (a != null && k[0].max < 11 && k[0].type <= 2) {
								if (c <= 7 && a[0][0] < 11) return a;
								if (c <= 6 && a[0][0] < 12) return a;
								if (c <= 5 && a[0][0] < 13) return a;
								if (c <= 4 && a[0][0] < 14) return a;
								if (c <= 3 && a[0][0] < 15) return a
							}
							if (c == 3) {
								if (b[0].type == 3) {
									if (b[1].type <= 2 && b[2].type <= 2) return b[1].max < b[2].max ? b[2].mpn == 0 ? b[2].data.slice(0) : (a = b[0].data.slice(0), a = a.concat(b[1].data.slice(0)), a) : b[1].mpn == 0 ? b[1].data.slice(0) : (a = b[0].data.slice(0), a = a.concat(b[2].data.slice(0)), a);
									if (b[1].type <= 2 && b[2].type > 2) {
										if (b[2].mpn == 0) return b[2].data.slice(0);
										if (b[2].type >= 13 || b[1].max <= 13) return a = b[0].data.slice(0), a = a.concat(b[1].data.slice(0)), a
									} else if (b[2].type <= 2 && b[1].type > 2) {
										if (b[1].mpn == 0) return b[2].data.slice(0);
										if (b[1].type >= 13 || b[2].max <= 13) return a = b[0].data.slice(0), a = a.concat(b[2].data.slice(0)), a
									}
								}
								if (b[1].type == 3) {
									if (b[0].type <= 2 && b[2].type <= 2) return b[0].max < b[2].max ? b[2].mpn == 0 ? b[2].data.slice(0) : (a = b[1].data.slice(0), a = a.concat(b[0].data.slice(0)), a) : b[0].mpn == 0 ? b[0].data.slice(0) : (a = b[1].data.slice(0), a = a.concat(b[2].data.slice(0)), a);
									if (b[0].type <= 2 && b[2].type > 2) {
										if (b[2].mpn == 0) return b[2].data.slice(0);
										if (b[2].type >= 13 || b[0].max <= 13) return a = b[1].data.slice(0), a = a.concat(b[0].data.slice(0)), a
									} else if (b[2].type <= 2 && b[0].type > 2) {
										if (b[0].mpn == 0) return b[0].data.slice(0);
										if (b[0].type >= 13 || b[2].max <= 13) return a = b[1].data.slice(0), a = a.concat(b[2].data.slice(0)), a
									}
								}
								if (b[2].type == 3) {
									if (b[0].type <= 2 && b[1].type <= 2) return b[0].max < b[1].max ? b[1].mpn == 0 ? b[1].data.slice(0) : (a = b[2].data.slice(0), a = a.concat(b[0].data.slice(0)), a) : b[0].mpn == 0 ? b[0].data.slice(0) : (a = b[2].data.slice(0), a = a.concat(b[1].data.slice(0)), a);
									if (b[0].type <= 2 && b[1].type > 2) {
										if (b[1].mpn == 0) return b[1].data.slice(0);
										if (b[1].type >= 13 || b[0].max <= 13) return a = b[2].data.slice(0), a = a.concat(b[0].data.slice(0)), a
									} else if (b[1].type <= 2 && b[0].type > 2) {
										if (b[0].mpn == 0) return b[0].data.slice(0);
										if (b[0].type >= 13 || b[1].max <= 13) return a = b[2].data.slice(0), a = a.concat(b[1].data.slice(0)), a
									}
								}
							}
						}
						if (c == 2) {
							if (b[0].type >= 13) return b[1].data.slice(0);
							if (b[0].type == 3) {
								if (b[1].type <= 2) return a = b[0].data.slice(0), a = a.concat(b[1].data.slice(0)), a
							} else if (b[1].type == 3 && b[0].type <= 2) return a = b[1].data.slice(0), a = a.concat(b[0].data.slice(0)), a
						}
						if (c >= 2 && (k[0].max > 15 || k[0].type >= 13)) {
							if (k[1].type == 3) {
								a = ba(b);
								if (a != null) return a
							} else if (k[1].type == 10) {
								a = Z(b);
								if (a != null) return a
							}
							return k[1].data.slice(0)
						}
						return k[0].data.slice(0)
					}, R = function(a, b) {
						var c = KAI.GetType(a),
							d = a.length,
							e = s,
							f = e.Step;
						if (c == 14) return null;
						var g = 0;
						p ? g = v.PaiLu().Step < w.PaiLu().Step ? v.PaiLu().Step : w.PaiLu().Step : g = v.Dizhu() ? v.PaiLu().Step : w.PaiLu().Step;
						if (g == 1) {
							for (var h = 0; h < f; h++)
								if (e[h].type == c && e[h].max > a[0][0]) return e[h].data.slice(0);
							if (c < 13)
								for (var h = f - 1; h >= 0; h--)
									if (e[h].type >= 13) return e[h].data.slice(0)
						}
						if (f == 1) {
							if (c == 13 && e[0].type == 14) return e[0].data.slice(0);
							if (c == 13 && e[0].type == 13 && e[0].max > a[0][0]) return e[0].data.slice(0);
							if (c < 13 && e[0].type >= 13) return e[0].data.slice(0);
							if (c < 13 && e[0].type == c && e[0].max > a[0][0]) return e[0].data.slice(0);
							if (c == 1 && e[0].type == 2 && e[0].max > a[0][0]) return [e[0].data.slice(0)[1]];
							if (c == 2 && e[0].type == 3 && e[0].max > a[0][0]) {
								var i = e[0].data.slice(0);
								return [i[1], i[2]]
							}
						}
						if (m.length == a.length) {
							var j = KAI.PxFux(m, 2),
								k = KAI.GetType(j);
							if (k == c && j[0][0] > a[0][0]) return j
						}
						if (f == 2) {
							if (e[0].mpn == 0 && e[0].type == c && e[0].max > a[0][0]) return e[0].data.slice(0);
							if ((e[0].type == 13 || e[0].type == 14) && c < 13) return e[0].data.slice(0)
						}
						if (c == 13) {
							for (var h = e.Step - 1; h >= 0; h--)
								if ((e[h].type == 13 || e[h].type == 14) && e[h].max > a[0][0]) {
									if (e.Pn <= 0 || f <= 2) {
										if (f <= 2 && e[h].mpn == 0) return e[h].data.slice(0);
										if (f <= g && e[h].mpn == 0) return e[h].data.slice(0)
									}
									if (g <= 2) return e[h].data.slice(0);
									if (p == w.Dizhu() && w.PaiLu().Step == 1) {
										var l = w.PaiLu();
										for (var n = e.Step - 1; n >= 0; n--)
											if (e[n].type == l[0].type && e[n].max < l[0].max) return e[h].data.slice(0);
										if (l[0].type == 1)
											for (var n = m.length - 1; n >= 0; n--)
												if (m[n][0] < l[0].max && m[n][0] != e[h].max) return e[h].data.slice(0);
										if (l[0].type == 2)
											for (var n = m.length - 1; n >= 1; n--)
												if (m[n][0] == m[n - 1][0] && m[n][0] < l[0].max && m[n][0] != e[h].max) return e[h].data.slice(0)
									}
									if (p == w.Dizhu() && w.PaiLu().Step == 2) {
										var l = w.PaiLu();
										if (l.Pn <= 0)
											for (var n = l.Step - 1; n >= 0; n--) {
												var o = l[n];
												if (o.mpn == 0) {
													for (var q = e.Step - 1; q >= 0; q--)
														if (e[q].type == o.type && e[q].max < o.max) return e[h].data.slice(0);
													if (o.type == 1)
														for (var q = m.length - 1; q >= 0; q--)
															if (m[q][0] < o.max && m[q][0] != e[h].max) return e[h].data.slice(0);
													if (o.type == 2)
														for (var q = m.length - 1; q >= 1; q--)
															if (m[q][0] == m[q - 1][0] && m[q][0] < o.max && m[q][0] != e[h].max) return e[h].data.slice(0)
												}
											}
									}
								}
							return null
						}
						if (c == 12) {
							var r = d / 5,
								t = null;
							for (var h = e.Step - 1; h >= 0; h--)
								if (e[h].type == 10 && e[h].max > a[0][0] && e[h].len == r * 3) {
									t = e[h].data.slice(0);
									break
								}
							if (e.nZha == 0 && e.nHuo == 0 && t == null) return null;
							if (t != null) {
								var x = new Array,
									y = 0;
								for (var h = e.Step - 1; h >= 0; h--)
									if (e[h].type == 2 && e[h].max < 15) {
										x = x.concat(e[h].data), y++;
										if (y == r) break
									}
								if (x.length == r * 2) return b.Dizhu() == p ? e.Pn == 0 || f <= 2 ? t.concat(x) : null : t.concat(x);
								if (b.Dizhu() != p) {
									var z = bh(a[0][0], r, m, u);
									if (z != null) {
										if (b.PaiLu().Step <= 3 && z.IsCan) return z.Splt;
										if (b.PaiLu().Step <= 2 && z.IsYa) return z.Splt;
										if (b.PaiLu().Step == 1) return W(e) || z.Splt
									}
								}
							}
							return b.Dizhu() != p && b.PaiLu().Step == 1 ? W(e) : null
						}
						if (c == 11) {
							var r = d / 4,
								t = null;
							for (var h = e.Step - 1; h >= 0; h--)
								if (e[h].type == 10 && e[h].max > a[0][0] && e[h].len == r * 3) {
									t = e[h].data.slice(0);
									break
								}
							if (e.nZha == 0 && e.nHuo == 0 && t == null) return null;
							if (t != null) {
								var A = new Array,
									B = 0;
								for (var h = e.Step - 1; h >= 0; h--)
									if (e[h].type == 2 && e[h].max < 15) {
										A = A.concat(e[h].data), B++;
										if (B == r) break
									}
								if (A.length == r) return b.Dizhu() == p ? e.Pn == 0 || f <= 2 ? t.concat(A) : v.Dizhu() == p && b == v && v.PaiLu().Pn == 0 ? null : w.Dizhu() == p && b == w && w.PaiLu().Pn == 0 ? null : t : t.concat(A);
								if (b.Dizhu() != p) {
									var z = bi(a[0][0], r, m, u);
									if (z != null) {
										if (b.PaiLu().Step <= 3 && z.IsCan) return z.Splt;
										if (b.PaiLu().Step <= 2 && z.IsYa) return z.Splt;
										if (b.PaiLu().Step == 1) return W(e) || z.Splt
									}
								}
							}
							return b.Dizhu() != p && b.PaiLu().Step == 1 ? W(e) : null
						}
						if (c == 10) {
							var r = d / 3,
								t = null;
							for (var h = e.Step - 1; h >= 0; h--)
								if (e[h].type == 10 && e[h].max > a[0][0] && e[h].len == r * 3) {
									t = e[h].data.slice(0);
									break
								}
							if (t != null) return b.Dizhu() == p ? e.Pn == 0 || f <= 2 ? t : null : t;
							if (t == null && b.Dizhu() != p) {
								var z = bj(a[0][0], r, m, u);
								if (z != null) {
									if (b.PaiLu().Step <= 3 && z.IsCan) return z.Splt;
									if (b.PaiLu().Step <= 2 && z.IsYa) return z.Splt;
									if (b.PaiLu().Step == 1) return W(e) || z.Splt
								}
							}
							return e.nZha == 0 && e.nHuo == 0 && t == null ? null : b.Dizhu() != p && b.PaiLu().Step == 1 ? W(e) : null
						}
						if (c == 9) {
							var r = d / 2,
								t = null;
							for (var h = e.Step - 1; h >= 0; h--)
								if (e[h].type == 9 && e[h].max > a[0][0] && e[h].len == r * 2) {
									t = e[h].data.slice(0);
									break
								}
							if (t != null) return b.Dizhu() == p ? e.Pn == 0 || f <= 2 ? t : v.Dizhu() == p && b == v && v.PaiLu().Pn == 0 ? null : w.Dizhu() == p && b == w && w.PaiLu().Pn == 0 ? null : t : t;
							if (t == null && b.Dizhu() != p) {
								var z = bk(a[0][0], r, m, u);
								if (z != null) {
									if (b.PaiLu().Step <= 3 && z.IsCan) return z.Splt;
									if (b.PaiLu().Step <= 2 && z.IsYa) return z.Splt;
									if (b.PaiLu().Step == 1) return W(e) || z.Splt
								}
							}
							return e.nZha == 0 && e.nHuo == 0 && t == null ? null : b.Dizhu() != p && b.PaiLu().Step == 1 ? W(e) : null
						}
						if (c == 8) {
							var r = d,
								t = null;
							for (var h = e.Step - 1; h >= 0; h--)
								if (e[h].type == 8 && e[h].max > a[0][0] && e[h].len == r) {
									t = e[h].data.slice(0);
									break
								}
							if (t != null) return b.Dizhu() == p ? e.Pn == 0 || f <= 2 ? t : v.Dizhu() == p && b == v && v.PaiLu().Pn == 0 ? null : w.Dizhu() == p && b == w && w.PaiLu().Pn == 0 ? null : t : t;
							if (t == null && b.Dizhu() != p) {
								var z = bl(a[0][0], r, m, u);
								if (z != null) {
									if (b.PaiLu().Step <= 3 && z.IsCan) return z.Splt;
									if (b.PaiLu().Step <= 2 && z.IsYa) return z.Splt;
									if (b.PaiLu().Step == 1) return W(e) || z.Splt
								}
							}
							return e.nZha == 0 && e.nHuo == 0 && t == null ? null : b.Dizhu() != p && b.PaiLu().Step == 1 ? W(e) : null
						}
						if (c == 7 || c == 6) return b.Dizhu() != p && b.PaiLu().Step <= 2 ? W(e) : null;
						if (c == 5) {
							var t = null;
							for (var h = e.Step - 1; h >= 0; h--)
								if (e[h].type == 3 && e[h].max > a[0][0]) {
									t = e[h].data.slice(0);
									break
								}
							if (t != null) {
								var x = new Array;
								for (var h = e.Step - 1; h >= 0; h--)
									if (e[h].type == 2 && e[h].max < 15) {
										x = x.concat(e[h].data);
										break
									}
								if (x.length == 2) return b.Dizhu() == p ? e.Pn == 0 || f <= 2 ? t.concat(x) : v.Dizhu() == p && b == v && v.PaiLu().Pn == 0 ? null : w.Dizhu() == p && b == w && w.PaiLu().Pn == 0 ? null : t.concat(x) : t.concat(x)
							}
							if (b.Dizhu() != p) {
								var z = bh(a[0][0], r, m, u);
								if (z != null) {
									if (b.PaiLu().Step <= 3 && z.IsCan) return z.Splt;
									if (b.PaiLu().Step <= 2 && z.IsYa) return z.Splt;
									if (b.PaiLu().Step == 1) return W(e) || z.Splt
								}
							}
							return b.Dizhu() != p && b.PaiLu().Step == 1 ? W(e) : null
						}
						if (c == 4) {
							var t = null;
							for (var h = e.Step - 1; h >= 0; h--)
								if (e[h].type == 3 && e[h].max > a[0][0]) {
									t = e[h].data.slice(0);
									break
								}
							if (t != null) {
								var A = new Array;
								for (var h = e.Step - 1; h >= 0; h--)
									if (e[h].type == 1 && e[h].max < 15) {
										A = A.concat(e[h].data);
										break
									}
								if (A.length == 1) return b.Dizhu() == p ? e.Pn == 0 || f <= 2 ? t.concat(A) : v.Dizhu() == p && b == v && v.PaiLu().Pn == 0 ? null : w.Dizhu() == p && b == w && w.PaiLu().Pn == 0 ? null : t.concat(A) : t.concat(A)
							}
							if (b.Dizhu() != p) {
								var z = bi(a[0][0], r, m, u);
								if (z != null) {
									if (b.PaiLu().Step <= 3 && z.IsCan) return z.Splt;
									if (b.PaiLu().Step <= 2 && z.IsYa) return z.Splt;
									if (b.PaiLu().Step == 1) return W(e) || z.Splt
								}
							}
							return b.Dizhu() != p && b.PaiLu().Step == 1 ? W(e) : null
						}
						if (c == 3) {
							var t = null;
							for (var h = e.Step - 1; h >= 0; h--)
								if (e[h].type == 3 && e[h].max > a[0][0]) {
									t = e[h].data.slice(0);
									break
								}
							if (t != null) return b.Dizhu() == p ? e.Pn == 0 || f <= 2 ? t : v.Dizhu() == p && b == v && v.PaiLu().Pn == 0 ? null : w.Dizhu() == p && b == w && w.PaiLu().Pn == 0 ? null : t : t;
							if (b.Dizhu() != p) {
								var z = bi(a[0][0], r, m, u);
								if (z != null) {
									if (b.PaiLu().Step <= 3 && z.IsCan) return z.Splt;
									if (b.PaiLu().Step <= 2 && z.IsYa) return z.Splt;
									if (b.PaiLu().Step == 1) return W(e) || z.Splt
								}
							}
							return b.Dizhu() != p && b.PaiLu().Step == 1 ? W(e) : null
						}
						if (c == 2) {
							for (var h = e.Step - 1; h >= 0; h--)
								if (e[h].type == 2 && e[h].max > a[0][0] && e[h].max <= 15) {
									if (b.Dizhu() == p) return e.Pn == 0 || f <= 2 ? e[h].data.slice(0) : v.Dizhu() == p && b == v && v.PaiLu().Pn == 0 ? null : w.Dizhu() == p && b == w && w.PaiLu().Pn == 0 ? null : e[h].data.slice(0);
									if (e[h].max >= 15) {
										if (e.Pn == 0 || f <= 3 || b.PaiLu().Pn == 0 || b.PaiLu().Step <= 3) return e[h].data.slice(0);
										null
									}
									return e[h].data.slice(0)
								}
							if (b.Dizhu() != p) {
								var z = bm(a[0][0], m, u);
								if (z != null) {
									if (b.PaiLu().Step <= 3 && z.IsCan) return z.Splt;
									if (b.PaiLu().Step <= 2 && z.IsYa) return z.Splt;
									if (b.PaiLu().Step == 1) return W(e) || z.Splt
								}
							}
							return b.Dizhu() != p && b.PaiLu().Step == 1 ? W(e) : null
						}
						if (c == 1) {
							for (var h = e.Step - 1; h >= 0; h--)
								if (e[h].type == 1 && e[h].max > a[0][0] && e[h].max <= 15) return b.Dizhu() == p ? e.Pn == 0 || f <= 2 ? e[h].data.slice(0) : v.Dizhu() == p && b == v && v.PaiLu().Pn == 0 ? null : w.Dizhu() == p && b == w && w.PaiLu().Pn == 0 ? null : e[h].data.slice(0) : e[h].data.slice(0);
							if (b.Dizhu() != p) {
								var z = bn(a[0][0], m, u);
								if (z == null || e[0].max > z.Splt[0][0])
									for (var h = f - 1; h >= 0; h--)
										if (e[h].max > a[0][0] && e[h].type == 2) {
											var C = e[h].data.slice(0);
											return [C[0]]
										}
								if (z == null || z.Splt[0][0] >= 15)
									for (var h = f - 1; h >= 0; h--)
										if (e[h].max > a[0][0] && e[h].type == 2) {
											var C = e[h].data.slice(0);
											return [C[0]]
										}
								if (z != null) {
									if (b.PaiLu().Step <= 8 && z.IsCan) return z.Splt;
									if (b.PaiLu().Step <= 5 && z.IsYa) return z.Splt;
									if (b.PaiLu().Step == 1) return W(e) || z.Splt
								}
							}
							return b.Dizhu() != p && b.PaiLu().Step == 1 ? W(e) : null
						}
					}, S = function() {
						var a = v.OutedCards().length == 0 ? w : v,
							b = a.OutedCards();
						return b == null || b.length == 0 ? Q() : R(b, a)
					}, V = this.BiginJiaoFen = function() {
						var a = g.Fen();
						if (!i) window.setTimeout(function() {
							var b = O();
							b > a ? P(3) : P(0)
						}, c);
						else {
							var b = 180,
								d = 365;
							a == 0 ? (z.add("JF0", h("minbtn", "0px", function() {
								P(0)
							}).left(b).top(d).create(!0)), z.add("JF1", h("minbtn", "-30px", function() {
								P(1)
							}).left(b + 80).top(d).create(!0)), z.add("JF2", h("minbtn", "-60px", function() {
								P(2)
							}).left(b + 160).top(d).create(!0)), z.add("JF3", h("minbtn", "-90px", function() {
								P(3)
							}).left(b + 240).top(d).create(!0))) : a == 1 ? (b = 220, z.add("JF0", h("minbtn", "0px", function() {
								P(0)
							}).left(b).top(d).create(!0)), z.add("JF2", h("minbtn", "-60px", function() {
								P(2)
							}).left(b + 80).top(d).create(!0)), z.add("JF3", h("minbtn", "-90px", function() {
								P(3)
							}).left(b + 160).top(d).create(!0))) : (b = 260, z.add("JF0", h("minbtn", "0px", function() {
								P(0)
							}).left(b).top(d).create(!0)), z.add("JF3", h("minbtn", "-90px", function() {
								P(3)
							}).left(b + 80).top(d).create(!0)))
						}
					}, X = this.BiginChuPai = function() {
						k.hide(), B.hide();
						if (i) {
							j.ShowStart(function() {
								N()
							});
							var a = 200,
								b = 365;
							v.OutedCards().length == 0 && w.OutedCards().length == 0 ? (A.add("Btn2", h("actbtn", "-120px", function() {
								var a = l.getSelect();
								if (a.length == 0) {
									alert("\u8bf7\u9009\u62e9\u8981\u51fa\u7684\u724c\uff01");
									return
								}
								KAI.IsCanChu(a) ? M(a) : alert("\u8bf7\u9009\u62e9\u6b63\u786e\u7684\u51fa\u724c\uff01")
							}).left(a + 90).top(b).create(!0)), $(document).bind("mousedown", function(a) {
								if (3 != a.which) return;
								var b = l.getSelect();
								if (b.length == 0) {
									alert("\u8bf7\u9009\u62e9\u8981\u51fa\u7684\u724c\uff01");
									return
								}
								KAI.IsCanChu(b) ? M(b) : alert("\u8bf7\u9009\u62e9\u6b63\u786e\u7684\u51fa\u724c\uff01")
							})) : (a = 200, A.add("Btn1", h("actbtn", "-150px", function() {
								M([])
							}).left(a).top(b).create(!0)), A.add("Btn2", h("actbtn", "-120px", function() {
								var a = l.getSelect();
								if (a.length == 0) {
									alert("\u8bf7\u9009\u62e9\u8981\u51fa\u7684\u724c\uff01");
									return
								}
								var b = v.OutedCards().length == 0 ? w.OutedCards() : v.OutedCards();
								KAI.IsCanChu(a, b) ? M(a) : alert("\u8bf7\u9009\u62e9\u6b63\u786e\u7684\u51fa\u724c\uff01")
							}).left(a + 90).top(b).create(!0)), A.add("Btn3", h("actbtn", "-180px", function() {
								var a = v.OutedCards().length == 0 ? w.OutedCards() : v.OutedCards();
								l.AutoTishi(a);
								var b = l.getSelect();
								(b == null || b.length == 0) && M([])
							}).left(a + 180).top(b).create(!0)), $(document).bind("mousedown", function(a) {
								if (3 != a.which) return;
								var b = l.getSelect();
								if (b.length == 0) {
									alert("\u8bf7\u9009\u62e9\u8981\u51fa\u7684\u724c\uff01");
									return
								}
								var c = v.OutedCards().length == 0 ? w.OutedCards() : v.OutedCards();
								KAI.IsCanChu(b, c) ? M(b) : alert("\u8bf7\u9009\u62e9\u6b63\u786e\u7684\u51fa\u724c\uff01")
							}))
						} else j.ShowStart(null), window.setTimeout(function() {
							var a = S();
							a != null ? M(a) : M([])
						}, c)
					}
			}, bp = function() {
				var b = null,
					c = [];
				this.Cards = function(b) {
					if (typeof b == a) return c;
					c = b
				}, this.CardDiv = function(c) {
					return typeof c == a ? b : (b = c, b)
				}
			}, bq = this.TGame = function() {
				var b = this,
					d = 100,
					e = this.UserMy = null,
					f = this.UserDn = null,
					g = this.UserUp = null,
					k = null,
					m = this.Coms = new U,
					o = 0,
					p = null,
					q = 0;
				this.Fen = function(b) {
					if (typeof b == a) return o;
					o = b, m.get("mjifen").html("\u00d7" + o)
				}, this.AddZha = function() {
					q++, m.get("zhadan").html("\u00d7" + q)
				};
				var r = function() {
					var a = [{
						u: e,
						r: Math.random()
					}, {
						u: f,
						r: Math.random()
					}, {
						u: g,
						r: Math.random()
					}];
					return a.sort(function(a, b) {
						return a.r > b.r ? 1 : -1
					}), a[0].u
				}, s = function() {
						var a = [e, f, g];
						return a.sort(function(a, b) {
							return a.JFen() < b.JFen() ? 1 : -1
						}), a[0]
					}, t = this.NewGame = function() {
						e != null && delete e, f != null && delete f, g != null && delete g, k != null && delete k, e = b.UserMy = new bo(b, "UserMy", !0), f = b.UserDn = new bo(b, "UserDn"), g = b.UserUp = new bo(b, "UserUp"), p = null, k = new bp, e.UpPlayer(g), e.DnPlayer(f), f.UpPlayer(e), f.DnPlayer(g), g.UpPlayer(f), g.DnPlayer(e), m.clear(), H.clean(), o = 0, q = 0, n(g, e, f, k), m.add("mycard", e.CardDiv(l(e.Cards(), !0, !0, {
							width: 400,
							height: 111
						}, !1).left(140).top(400).create())), m.add("dncard", f.CardDiv(l(f.Cards(), !1, !1, {
							width: 71,
							height: 400
						}, !0).left(600).top(30).create())), m.add("upcard", g.CardDiv(l(g.Cards(), !1, !1, {
							width: 71,
							height: 400
						}, !0).left(10).top(30).create())), m.add("dicard", k.CardDiv(l(k.Cards(), !1, !0, {
							width: 120,
							height: 94
						}, !0, 80).left(280).top(10).create())), m.add("myclock", e.Clock(i(null).left(300).top(280).create(!1))), m.add("upclock", g.Clock(i(null).left(100).top(160).create(!1))), m.add("dnclock", f.Clock(i(null).left(515).top(160).create(!1))), m.add("mytip", e.Tishi(j("tip").left(290).top(330).create(!1))), m.add("uptip", g.Tishi(j("tip").left(100).top(160).create(!1))), m.add("dntip", f.Tishi(j("tip").left(475).top(160).create(!1))), m.add("myoutcard", e.OutCardDiv(l([], !1, !0, {
							width: 280,
							height: 94
						}, !1).left(200).top(300).create())), m.add("dnoutcard", f.OutCardDiv(l([], !1, !1, {
							width: 71,
							height: 300
						}, !1).left(500).top(80).create())), m.add("upoutcard", g.OutCardDiv(l([], !1, !1, {
							width: 71,
							height: 300
						}, !1).left(110).top(80).create())), m.add("mydizhu", e.DZDiv(j("dizhu").left(80).top(440).create(!1))), m.add("updizhu", g.DZDiv(j("dizhu").left(100).top(60).create(!1))), m.add("dndizhu", f.DZDiv(j("dizhu").left(510).top(60).create(!1))), m.add("mypxbtn", f.BtnPx(h("pxbtn", "-335px", function() {
							var a = e.SetPx();
							a == 2 ? e.SetPx(1) : e.SetPx(2)
						}).left(575).top(445).create(!0))), m.add("mymoney", f.MoneyDiv(j("mymoney").left(565).top(485).create())), m.add("zhadan", j("zhadan").left(85).top(10).create()), m.add("mjifen", j("mjifen").left(145).top(10).create()), m.get("zhadan").html("\u00d70"), m.get("mjifen").html("\u00d70");
						var a = m.get();
						m.get("mymoney").html(d);
						var c = r();
						c.Clock().ShowStart(function() {
							c.JiaoFen(0)
						}), c.BiginJiaoFen()
					}, u = this.SetDiZhu = function() {
						p = s(), p.JFen() == 0 ? (alert("\u6ca1\u6709\u4eba\u53eb\u5730\u4e3b\uff0c\u6e38\u620f\u7ed3\u675f\uff01"), t()) : (p.Dizhu(!0), p.AddDiPai(k.Cards()), k.CardDiv().XianSHI(), window.setTimeout(function() {
							e.Tishi().hide(), f.Tishi().hide(), g.Tishi().hide(), p.BiginChuPai()
						}, c))
					}, v = this.OverGame = function() {
						g.CardDiv().XianSHI(), f.CardDiv().XianSHI();
						var a = m.add("dlg", j("dlg").left(160).top(90).create());
						a.html('<table class="dltb" width="360" border="0" cellspacing="1" cellpadding="0"><tr><td height="52" colspan="3" id="ovtic" class="kktic">&nbsp;</td></tr><tr><td height="25" colspan="3" id="tojitic">&nbsp;</td></tr><tr><td  class="tic" height="25">\u73a9\u5bb6</td><td  class="tic">\u8f93\u8d62</td><td  class="tic">\u5f97\u5206</td></tr><tr><td width="110" height="25">\u672c\u5bb6</td><td width="108" id="mysy">&nbsp;</td><td width="138" id="mydf">&nbsp;</td></tr><tr><td height="25" >\u4e0a\u5bb6</td><td id="upsy">&nbsp;</td><td id="updf">&nbsp;</td></tr><tr><td height="25">\u4e0b\u5bb6</td><td id="dnsy">&nbsp;</td><td id="dndf">&nbsp;</td></tr><tr><td height="28" colspan="3" class="tongji">\u6210\u7ee9\uff1a<span class="red" id="chengji">0</span>&nbsp;&nbsp;\u6e38\u620f\u5e01\uff1a<span id="youxibi">0</span>&nbsp;&nbsp;</td></tr></table>');
						var b = o + "\u5206&nbsp;" + q + "\u70b8&nbsp;",
							c = 0;
						if (e.IsWin()) {
							a.find("#mysy").html("<span class=red><span class=red>\u80dc\u5229</span></span>"), m.add("winorloss", j("owin").left(320).top(75).create());
							var i = o;
							for (var k = 0; k < q; k++) i *= 2;
							c = i;
							if (e.Dizhu()) {
								a.find("#upsy").html("\u5931\u8d25"), a.find("#dnsy").html("\u5931\u8d25"), a.find("#ovtic").html("I'M \u5730\u4e3b"), i *= 2, g.ChuPaiTice() == 0 && f.ChuPaiTice() == 0 && (b += "1\u6625\u5929", i *= 2, c *= 2);
								var l = -i / 2;
								a.find("#mydf").html(i), a.find("#updf").html(l), a.find("#dndf").html(l), a.find("#chengji").html(i), i > 0 ? a.find("#chengji").attr("class", "red") : a.find("#chengji").attr("class", "bai"), d += i
							} else {
								a.find("#ovtic").html("I'M \u519c\u6c11");
								var n = g.Dizhu() ? g : f;
								n.ChuPaiTice() <= 1 && (b += "1\u53cd\u6625", i *= 2, c *= 2);
								if (g.Dizhu() == e.Dizhu()) {
									a.find("#upsy").html("<span class=red>\u80dc\u5229</span>"), a.find("#dnsy").html("\u5931\u8d25"), a.find("#updf").html(i);
									var l = -i * 2;
									a.find("#dndf").html(l)
								} else {
									a.find("#dnsy").html("<span class=red>\u80dc\u5229</span>"), a.find("#upsy").html("\u5931\u8d25"), a.find("#dndf").html(i);
									var l = -i * 2;
									a.find("#updf").html(l)
								}
								a.find("#mydf").html(i), a.find("#chengji").html(i), i > 0 ? a.find("#chengji").attr("class", "red") : a.find("#chengji").attr("class", "bai"), d += i
							}
						} else {
							a.find("#mysy").html("\u5931\u8d25"), m.add("winorloss", j("loss").left(320).top(75).create());
							var i = -o;
							for (var k = 0; k < q; k++) i *= 2;
							c = -i;
							if (e.Dizhu()) {
								a.find("#ovtic").html("I'M \u5730\u4e3b"), i *= 2, e.ChuPaiTice() <= 1 && (b += "1\u53cd\u6625", i *= 2, c *= 2);
								var l = -i / 2;
								a.find("#upsy").html("<span class=red>\u80dc\u5229</span>"), a.find("#dnsy").html("<span class=red>\u80dc\u5229</span>"), a.find("#mydf").html(i), a.find("#updf").html(l), a.find("#dndf").html(l), d += i, a.find("#chengji").html(i), i > 0 ? a.find("#chengji").attr("class", "red") : a.find("#chengji").attr("class", "bai")
							} else {
								a.find("#ovtic").html("I'M \u519c\u6c11");
								var p = g.Dizhu() ? f : g;
								e.ChuPaiTice() == 0 && p.ChuPaiTice() == 0 && (b += "1\u6625\u5929", i *= 2, c *= 2);
								if (g.Dizhu() == e.Dizhu()) {
									a.find("#upsy").html("\u5931\u8d25"), a.find("#dnsy").html("<span class=red>\u80dc\u5229</span>"), a.find("#updf").html(i);
									var l = -i * 2;
									a.find("#dndf").html(l)
								} else {
									a.find("#dnsy").html("\u5931\u8d25"), a.find("#upsy").html("<span class=red>\u80dc\u5229</span>"), a.find("#dndf").html(i);
									var l = -i * 2;
									a.find("#updf").html(l)
								}
								a.find("#mydf").html(i), a.find("#chengji").html(i), i > 0 ? a.find("#chengji").attr("class", "red") : a.find("#chengji").attr("class", "bai")
							}
							d += i
						}
						a.find("#tojitic").html(b + "&nbsp;\u57fa\u5206=" + c), a.find("#youxibi").html(d), d <= 0 && (alert("\u563f\u563f\uff01\u50bb\u903c\u673a\u5668\u4eba\u90fd\u73a9\u4e0d\u8fc7\u54e6\uff01~~~~ \u60b2\u54c0\u554a~\uff01\uff01"), location.reload()), m.add("beginbtn", h("beginbtn", "-210px", function() {
							t()
						}).left(270).top(320).create())
					};
				m.add("beginbtn", h("beginbtn", "-210px", function() {
					t()
				}).left(270).top(250).create())
			}
	}