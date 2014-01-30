;(function(){
var e = function() {
  function a(a) {
    return a * b.b()
  }
  function c() {
    return Math.random.b ? Math.random.b() : Math.random.call(null)
  }
  var b = null, b = function(b) {
    switch(arguments.length) {
      case 0:
        return c.call(this);
      case 1:
        return a.call(this, b)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.b = c;
  b.a = a;
  return b
}();
function k(a) {
  a = e.a(a);
  return 0 <= a ? Math.floor.a ? Math.floor.a(a) : Math.floor.call(null, a) : Math.ceil.a ? Math.ceil.a(a) : Math.ceil.call(null, a)
}
e = function() {
  function a(a) {
    return(Math.random.b ? Math.random.b() : Math.random.call(null)) * a
  }
  function c() {
    return b.a(1)
  }
  var b = null, b = function(b) {
    switch(arguments.length) {
      case 0:
        return c.call(this);
      case 1:
        return a.call(this, b)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.b = c;
  b.a = a;
  return b
}();
k = function(a) {
  return Math.floor.a ? Math.floor.a((Math.random.b ? Math.random.b() : Math.random.call(null)) * a) : Math.floor.call(null, (Math.random.b ? Math.random.b() : Math.random.call(null)) * a)
};
function l() {
  var a = m;
  return 3 * a * a + 81 * a >> 2 & 3
}
for(var u = function() {
  function a(a, b, c) {
    return(a >> c & 255) * b / 255 << c
  }
  function c(a, c) {
    return b.c(a, c, 0)
  }
  var b = null, b = function(b, t, I) {
    switch(arguments.length) {
      case 2:
        return c.call(this, b, t);
      case 3:
        return a.call(this, b, t, I)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.d = c;
  b.c = a;
  return b
}(), x = 2 * Math.PI, da = Math.PI / 2, C = document.getElementById("game").getContext("2d"), D = Array(262144), E = 0;;) {
  if(64 > E) {
    for(var F = 0;;) {
      if(64 > F) {
        for(var G = 0;;) {
          if(64 > G) {
            var J = G << 12 | F << 6 | E, K = 0.4 * (F - 32.5), L = 0.4 * (G - 32.5);
            D[J] = k(16);
            Math.random() > Math.sqrt(Math.sqrt(K * K + L * L)) - 0.8 && (D[J] = 0);
            G += 1
          }else {
            break
          }
        }
        F += 1
      }else {
        break
      }
    }
    E += 1
  }else {
    break
  }
}
for(var M = Array(12288), N = Array(1), O = Array(1), T = Array(1), U = 1;;) {
  if(16 > U) {
    O[0] = 255 - (96 * Math.random() | 0);
    for(var V = 0;;) {
      if(48 > V) {
        for(var m = 0;;) {
          if(16 > m) {
            N[0] = 9858122;
            4 === U && (N[0] = 8355711);
            if(4 !== U || 0 === (3 * Math.random() | 0)) {
              O[0] = 255 - (96 * Math.random() | 0)
            }
            1 === U && (V < l() + 18 ? N[0] = 6990400 : V < l() + 19 && (O[0] = 2 * O[0] / 3));
            if(7 === U) {
              if(N[0] = 6771249, 0 < m && 15 > m && (0 < V && 15 > V || 32 < V && 47 > V)) {
                N[0] = 12359778;
                var W = [m - 7], X = [(V & 15) - 7];
                0 > W[0] && (W[0] = 1 - W[0]);
                0 > X[0] && (X[0] = 1 - X[0]);
                X[0] > W[0] && (W[0] = X[0]);
                O[0] = 196 - k(32) - 32 * (W[0] % 3)
              }else {
                0 === k(2) && (O[0] = O[0] * (150 - 100 * (m & 1)) / 100)
              }
            }
            5 === U && (N[0] = 11876885, 0 === (m + 4 * (V >> 2)) % 8 || 0 === V % 4) && (N[0] = 12365733);
            9 === U && (N[0] = 4210943);
            T[0] = O[0];
            32 <= V && (T[0] /= 2);
            8 === U && (N[0] = 5298487, 0 === k(2) ? N[0] = 0 : T[0] = 255);
            var Y = N[0], Z = T[0];
            M[m + 16 * V + 768 * U] = u.c(Y, Z, 16) | u.c(Y, Z, 8) | u.d(Y, Z);
            m += 1
          }else {
            break
          }
        }
        V += 1
      }else {
        break
      }
    }
    U += 1
  }else {
    break
  }
}
function $(a) {
  for(var c = a.createImageData(424, 240), b = Date.now() % 1E4 / 1E4, B = 0.4 * Math.sin(b * x) + da, t = 0.4 * Math.cos(b * x), I = Math.cos(t), t = Math.sin(t), aa = Math.cos(B), B = Math.sin(B), b = 32.5 + 64 * b, P = Array(1), Q = Array(1), R = Array(1), y = Array(1), S = Array(1), n = 0;;) {
    if(101760 > n) {
      c.data[4 * n + 3] = 255, n += 1
    }else {
      break
    }
  }
  for(n = 0;;) {
    if(424 > n) {
      for(var ba = (n - 212) / 240, H = 0;;) {
        if(240 > H) {
          var r = (H - 120) / 240, s = 1 * I + r * t, r = r * I - 1 * t, z = ba * aa + s * B, s = s * aa - ba * B;
          P[0] = 0;
          Q[0] = 255;
          R[0] = 0;
          S[0] = 32;
          for(var d = 0;;) {
            if(3 > d) {
              var f = 0 === d ? z : 1 === d ? r : 2 === d ? s : null, v = 1 / (0 > f ? -f : f), A = z * v, w = r * v, ca = s * v, g = 0 === d ? b - (b | 0) : 1 === d ? 0.5 : 2 === d ? 0.5 : null, g = 0 < f ? 1 - g : g, p = b + A * g, p = 0 === d && 0 > f ? p - 1 : p, q = 32.5 + w * g, q = 1 === d && 0 > f ? q - 1 : q, h = 32.5 + ca * g, h = 2 === d && 0 > f ? h - 1 : h;
              y[0] = v * g;
              f = p;
              g = q;
              for(p = h;;) {
                if(y[0] < S[0]) {
                  q = D[(p & 63) << 12 | (g & 63) << 6 | f & 63], 0 < q && (1 === d ? (h = 16 * p & 15, h = 0 > w ? h + 32 : h) : h = (16 * g & 15) + 16, q = M[(1 === d ? 16 * f & 15 : 16 * (f + p) & 15) + 16 * h + 768 * q], h = (d + 2) % 3, 0 < q && (P[0] = q, R[0] = 255 - (255 * (y[0] / 32) | 0), Q[0] = 255 * (255 - 50 * h) / 255, S[0] = y[0])), y[0] += v, g += w, p += ca, f += A
                }else {
                  break
                }
              }
              d += 1
            }else {
              break
            }
          }
          r = Q[0];
          z = R[0];
          s = P[0];
          d = (s >> 8 & 255) * r * z / 65025;
          v = (s & 255) * r * z / 65025;
          A = c.data;
          w = 4 * (n + 424 * H);
          A[w + 0] = (s >> 16 & 255) * r * z / 65025;
          A[w + 1] = d;
          A[w + 2] = v;
          H += 1
        }else {
          break
        }
      }
      n += 1
    }else {
      break
    }
  }
  return a.putImageData(c, 0, 0)
}
setInterval(function() {
  return $.a ? $.a(C) : $.call(null, C)
}, 10);

})();
