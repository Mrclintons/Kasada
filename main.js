

class Encryption {
    constructor(browserArr) {
        this.browserArr = browserArr
        this.IndexA = 0
        this.IndexB = 0
    }


    #encryptionA(t, e) {
        this.IndexA++;
        return e *= 8, [t[e++] << 24 | t[e++] << 16 | t[e++] << 8 | t[e++] << 0, t[e++] << 24 | t[e++] << 16 | t[e++] << 8 | t[e++] << 0];
    }

    #encryptionB(t, _ref3, _ref4, i, u) {
        this.IndexB++;

        var _ref5;
        var e = _ref3[0],
            n = _ref3[1];
        var r = _ref4[0],
            o = _ref4[1];
        return (_ref5 = function (t, _ref6) {
            var e = _ref6[0],
                n = _ref6[1];
            var r = 0;
            for (var _o = 0; _o < 32; _o++) {
                e = e + ((n << 4 ^ n >> 5) + n ^ r + t[3 & r]) | 0, r = r + 2654435769 | 0, n = n + ((e << 4 ^ e >> 5) + e ^ r + t[r >> 11 & 3]) | 0;
            }
            return [e, n];
        }(t, [r ^ e, o ^ n]), r = _ref5[0], o = _ref5[1], _ref5),
            function (t, e, _ref7) {
                var n = _ref7[0],
                    r = _ref7[1];
                e *= 8, t[e++] = n >> 24 & 255, t[e++] = n >> 16 & 255, t[e++] = n >> 8 & 255, t[e++] = 255 & n, t[e++] = r >> 24 & 255, t[e++] = r >> 16 & 255, t[e++] = r >> 8 & 255, t[e++] = 255 & r;
            }(i, u, [r, o]), [r, o];
    }
    
    encryptionFlow() {
        var t = [764546723,48882271,891111464,-2904644]
        var _ref3 = [0,0]
        var _ref4 = [1715672781,-19575015]
        var i = []

        _ref3 = this.encryptionB(t, _ref3, _ref4, i, this.IndexB)
        this.encryptionA(this.browserArr, this.IndexA)
        this.encryptionA(this.browserArr, this.IndexA)
        this.encryptionA(this.browserArr, this.IndexA)
        this.encryptionA(this.browserArr, this.IndexA)
        while (IndexA <= 3609) {
            _ref3 = this.encryptionB(t, _ref3, _ref4, i, this.IndexB)
            this.encryptionA(this.browserArr, this.IndexA)
        }
        _ref3 = this.encryptionB(t, _ref3, _ref4, i, this.IndexB)
        _ref3 = this.encryptionB(t, _ref3, _ref4, i, this.IndexB)
        _ref3 = this.encryptionB(t, _ref3, _ref4, i, this.IndexB)
        _ref3 = this.encryptionB(t, _ref3, _ref4, i, this.IndexB)
        this.encryptionB(t, _ref3, _ref4, i, this.IndexB)

        return i;
    }
}

var browserArr = []

var a = new Encryption()
console.log(a.encryptionFlow())