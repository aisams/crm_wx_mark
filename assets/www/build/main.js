webpackJsonp([26], {
    10: function (l, n, e) {
        "use strict";
        e.d(n, "a", function () {
            return a
        });
        var t = e(0), o = e(76), u = e(8), i = this && this.__decorate || function (l, n, e, t) {
            var o, u = arguments.length, i = u < 3 ? n : null === t ? t = Object.getOwnPropertyDescriptor(n, e) : t;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(l, n, e, t); else for (var r = l.length - 1; r >= 0; r--) (o = l[r]) && (i = (u < 3 ? o(i) : u > 3 ? o(n, e, i) : o(n, e)) || i);
            return u > 3 && i && Object.defineProperty(n, e, i), i
        }, r = this && this.__metadata || function (l, n) {
            if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(l, n)
        }, a = function () {
            function l(l, n, e, t) {
                this.http = l, this.alertCtrl = n, this.toastCtrl = e, this.loadingCtrl = t, this.DefautOspServiceUrl = "https://osp.huaxuntg.com/OspWebService.asmx", this.wsCache = new WebStorageCache
            }

            return l.prototype.GetsysConfig = function () {
                return {
                    appid: "wx7627b101a8b2f961",
                    wxauthorize: "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx7627b101a8b2f961&redirect_uri=http%3a%2f%2fweixin.huaxuntg.com%2fcrm%2findex.html&response_type=code&scope=snsapi_base&state=huaxuntg#wechat_redirect",
                    tgcWxService: "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx7627b101a8b2f961&redirect_uri=http%3a%2f%2fweixin.huaxuntg.com%2fstkpool%2f&response_type=code&scope=snsapi_userinfo&state=1&connect_redirect=1#wechat_redirect"
                }
            }, l.prototype.setMyGlobalVar = function (l) {
                this.myGlobalVar = l
            }, l.prototype.getMyGlobalVar = function () {
                return this.myGlobalVar
            }, l.prototype.setUserInfo = function (l) {
                this.UserInfo = l, localStorage ? localStorage.setItem("userInfo", JSON.stringify(l)) : this.showToast("浏览器内核不支持本地存储", 2e3)
            }, l.prototype.userInfo = function () {
                if (this.UserInfo) return this.UserInfo;
                var l = JSON.parse(localStorage.getItem("userInfo"));
                return l && l.EmpCode && l.RoleID ? this.UserInfo = l : localStorage.clear(), this.UserInfo
            }, l.prototype.setUserMenuRight = function (l) {
                this.UserMenuRight = l, localStorage ? localStorage.setItem("userMenuRight", JSON.stringify(l)) : this.showToast("浏览器内核不支持本地存储", 2e3)
            }, l.prototype.userMenuRight = function () {
                return this.UserMenuRight ? this.UserMenuRight : (this.UserMenuRight = JSON.parse(localStorage.getItem("userMenuRight")), this.UserMenuRight)
            }, l.prototype.executeOspService = function (l, n, e, t) {
                var o = "";
                this.UserInfo && (o = this.UserInfo.access_token);
                var u = "ServiceID=" + l + "&TemplateData=" + encodeURIComponent(n) + "&DataType=" + e + "&Version=" + t + "&access_token=" + o;
                return this.http.request(this.DefautOspServiceUrl + "/ExecuteServiceForJson?" + u)
            }, l.prototype.handLogin = function (l, n) {
                return this.executeOspService(10679, "pwd=" + n + "&EmpName=" + l, 4, 1)
            }, l.prototype.handMenuRight = function (l, n) {
                return this.executeOspService(10649, "p_pmenuid=" + l + "&p_roleid=" + n, 4, 1)
            }, l.prototype.getEmpList = function (l) {
                return this.executeOspService(10597, "EmpCode=" + l, 4, 1)
            }, l.prototype.GetTimeConfig = function (l) {
                return this.executeOspService(10520, "CacheData=1&p_reportid=" + l, 4, 2)
            }, l.prototype.GetReportData = function (l, n, e, t, o, u, i, r, a, s, c) {
                var _ = "p_reportid=" + l + "&p_timetype=" + n + "&p_timevalue=" + e + "&p_queryvalue=" + t + "&p_page=" + o + "&p_pagesize=" + u + "&p_empcode=" + i + "&p_menuid=" + r + "&p_viewtype=" + a + "&p_graphtype=" + s + "&p_data_displaytype=" + c;
                return _ += "&CacheData=1", this.executeOspService(10518, _, 4, 2)
            }, l.prototype.Getwechatdept = function () {
                return this.executeOspService(10891, "CacheData=1", 4, 2)
            }, l.prototype.GetReportDataTgwApp = function (l, n, e, t, o, u, i, r, a, s, c) {
                var _ = "p_reportid=" + l + "&p_beginDate=" + n + "&p_endDate=" + e + "&p_queryvalue=" + t + "&p_page=" + o + "&p_pagesize=" + u + "&p_empcode=" + i + "&p_menuid=" + r + "&p_viewtype=" + a + "&p_graphtype=" + s + "&p_data_displaytype=" + c;
                return _ += "&CacheData=1", this.executeOspService(10944, _, 4, 2)
            }, l.prototype.GetReportDataTGW = function (l, n, e, t, o, u, i, r, a, s) {
                var c = "p_timetype=" + l + "&p_timevalue=" + n + "&p_queryvalue=" + e + "&p_page=" + t + "&p_pagesize=" + o + "&p_empcode=" + u + "&p_menuid=" + i + "&p_viewtype=" + r + "&p_graphtype=" + a + "&p_data_displaytype=" + s;
                return c += "&CacheData=1", this.executeOspService(10877, c, 4, 2)
            }, l.prototype.GetReportDataUserSurvey = function (l, n, e, t, o, u, i, r, a, s) {
                return this.executeOspService(10928, "p_timetype=" + l + "&p_timevalue=" + n + "&p_queryvalue=" + e + "&p_page=" + t + "&p_pagesize=" + o + "&p_empcode=" + u + "&p_menuid=" + i + "&p_viewtype=" + r + "&p_graphtype=" + a + "&p_data_displaytype=" + s, 4, 2)
            }, l.prototype.GetTalkReportData = function (l, n, e, t, o, u, i, r, a, s, c) {
                var _ = "p_reportid=" + l + "&p_timetype=" + n + "&p_timevalue=" + e + "&p_queryvalue=" + t + "&p_page=" + o + "&p_pagesize=" + u;
                return _ += "&CacheData=1", this.executeOspService(10518, _, 4, 2)
            }, l.prototype.GetDayWeReportData = function (l) {
                var n = l;
                return n += "&CacheData=1", this.executeOspService(10819, n, 4, 1)
            }, l.prototype.Getperformance = function (l) {
                var n = l;
                return n += "&CacheData=1", this.executeOspService(10952, n, 4, 1)
            }, l.prototype.GetWeCompanyID = function (l) {
                var n = "EmpCode=" + l + "&returntype=json";
                return n += "&CacheData=1", this.executeOspService(10828, n, 4, 1)
            }, l.prototype.GetWeRole = function (l) {
                var n = "EmpCode=" + l + "&returntype=json";
                return n += "&CacheData=1", this.executeOspService(10829, n, 4, 1)
            }, l.prototype.isArray = function (l) {
                return "[object Array]" === Object.prototype.toString.call(l)
            }, l.prototype.showToast = function (l, n) {
                this.toastCtrl.create({message: l, duration: n}).present()
            }, l.prototype.showAlert = function (l) {
                this.alertCtrl.create({title: l, subTitle: "", buttons: ["确定"]}).present()
            }, l.prototype.showLoading = function (l) {
                var n = this.loadingCtrl.create({content: l});
                return n.present(), n
            }, l.prototype.getShortUrl = function (l) {
                return this.http.request("http://api.t.sina.com.cn/short_url/shorten.json?source=3271760578&url_long=https%3a%2f%2fopen.weixin.qq.com%2fconnect%2foauth2%2fauthorize%3fappid%3dwx37561a8b82134b4c%26redirect_uri%3dhttp%253a%252f%252fmarket.wx.huaxuntg.com%252fpay%252f106.html%253fempcode%253d" + l + "%26response_type%3dcode%26scope%3dsnsapi_base%26state%3d%23wechat_redirect")
            }, l
        }();
        a = i([Object(t.q)(), r("design:paramtypes", ["function" == typeof(s = void 0 !== o.d && o.d) && s || Object, "function" == typeof(c = void 0 !== u.a && u.a) && c || Object, "function" == typeof(_ = void 0 !== u.c && u.c) && _ || Object, "function" == typeof(p = void 0 !== u.b && u.b) && p || Object])], a);
        var s, c, _, p
    }, 106: function (l, n, e) {
        function t(l) {
            var n = o[l];
            return n ? e.e(n[1]).then(function () {
                return e(n[0])
            }) : Promise.reject(new Error("Cannot find module '" + l + "'."))
        }

        var o = {
            "../pages/rpt11000/rpt11000.module.ngfactory": [147, 3],
            "../pages/rpt11001/rpt11001.module.ngfactory": [148, 25],
            "../pages/rpt11002/rpt11002.module.ngfactory": [149, 0],
            "../pages/rpt11004/rpt11004.module.ngfactory": [150, 2],
            "../pages/rpt11005/rpt11005.module.ngfactory": [151, 24],
            "../pages/rpt11006/rpt11006.module.ngfactory": [152, 23],
            "../pages/rpt11007/rpt11007.module.ngfactory": [153, 22],
            "../pages/rpt11008/rpt11008.module.ngfactory": [154, 1],
            "../pages/rpt11009/rpt11009.module.ngfactory": [155, 21],
            "../pages/rpt11010/rpt11010.module.ngfactory": [156, 20],
            "../pages/rpt11011/rpt11011.module.ngfactory": [157, 19],
            "../pages/rpt11012/rpt11012.module.ngfactory": [158, 18],
            "../pages/rpt11017/rpt11017.module.ngfactory": [159, 9],
            "../pages/rpt11018/rpt11018.module.ngfactory": [160, 17],
            "../pages/rpt11019/rpt11019.module.ngfactory": [161, 16],
            "../pages/rpt11020/rpt11020.module.ngfactory": [162, 15],
            "../pages/rpt11021/rpt11021.module.ngfactory": [163, 14],
            "../pages/rpt11022/rpt11022.module.ngfactory": [164, 13],
            "../pages/rpt11023/rpt11023.module.ngfactory": [165, 12],
            "../pages/rpt11024/rpt11024.module.ngfactory": [166, 8],
            "../pages/rpt11025/rpt11025.module.ngfactory": [167, 11],
            "../pages/rpt11026/rpt11026.module.ngfactory": [168, 7],
            "../pages/rpt11027/rpt11027.module.ngfactory": [169, 6],
            "../pages/rpt11028/rpt11028.module.ngfactory": [170, 10],
            "../pages/rpt11029/rpt11029.module.ngfactory": [171, 5],
            "../pages/rpt11030/rpt11030.module.ngfactory": [172, 4]
        };
        t.keys = function () {
            return Object.keys(o)
        }, t.id = 106, l.exports = t
    }, 117: function (l, n, e) {
        "use strict";

        function t(l) {
            return w._30(0, [w._27(402653184, 1, {nav: 0}), (l()(), w._10(0, null, null, 2, "ion-nav", [], null, null, null, sl.b, sl.a)), w._9(4374528, [[1, 4], ["myNav", 4]], 0, cl.a, [[2, _l.a], [2, pl.a], J.a, hl.a, fl.a, w.l, w.B, w.H, w.k, q.h, ol.a, [2, dl.a], W.a, w.m], {root: [0, "root"]}, null), w._26(6144, null, ml.a, null, [cl.a]), (l()(), w._29(null, ["\n"]))], function (l, n) {
                l(n, 2, 0, n.component.rootPage)
            }, null)
        }

        function o(l) {
            return w._30(0, [(l()(), w._10(0, null, null, 42, "section", [], null, null, null, null, null)), (l()(), w._29(null, ["\n        "])), (l()(), w._10(0, null, null, 39, "form", [["class", "yanzhengCode"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (l, n, e) {
                var t = !0;
                return "submit" === n && (t = !1 !== w._23(l, 4).onSubmit(e) && t), "reset" === n && (t = !1 !== w._23(l, 4).onReset() && t), t
            }, null, null)), w._9(16384, null, 0, A.o, [], null, null), w._9(16384, null, 0, A.j, [[8, null], [8, null]], null, null), w._26(2048, null, A.b, null, [A.j]), w._9(16384, null, 0, A.i, [A.b], null, null), (l()(), w._29(null, ["\n            "])), (l()(), w._10(0, null, null, 11, "p", [["class", "input-group"]], null, null, null, null, null)), (l()(), w._29(null, ["\n                "])), (l()(), w._10(0, null, null, 1, "label", [["class", "input-group-addon"], ["for", "userTel"]], null, null, null, null, null)), (l()(), w._29(null, ["手机号码"])), (l()(), w._29(null, ["\n                "])), (l()(), w._10(0, null, null, 5, "input", [["class", "form-control"], ["id", "userTel"], ["name", "userphone"], ["placeholder", "请输入账号"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (l, n, e) {
                var t = !0, o = l.component;
                return "input" === n && (t = !1 !== w._23(l, 14)._handleInput(e.target.value) && t), "blur" === n && (t = !1 !== w._23(l, 14).onTouched() && t), "compositionstart" === n && (t = !1 !== w._23(l, 14)._compositionStart() && t), "compositionend" === n && (t = !1 !== w._23(l, 14)._compositionEnd(e.target.value) && t), "ngModelChange" === n && (t = !1 !== (o.userphone = e) && t), t
            }, null, null)), w._9(16384, null, 0, A.c, [w.H, w.l, [2, A.a]], null, null), w._26(1024, null, A.f, function (l) {
                return [l]
            }, [A.c]), w._9(671744, null, 0, A.k, [[2, A.b], [8, null], [8, null], [2, A.f]], {
                name: [0, "name"],
                model: [1, "model"]
            }, {update: "ngModelChange"}), w._26(2048, null, A.g, null, [A.k]), w._9(16384, null, 0, A.h, [A.g], null, null), (l()(), w._29(null, ["\n            "])), (l()(), w._29(null, ["\n            "])), (l()(), w._10(0, null, null, 13, "p", [["class", "input-code"]], null, null, null, null, null)), (l()(), w._29(null, ["\n                "])), (l()(), w._10(0, null, null, 1, "label", [["class", "verificationcode"], ["for", "userPwd"]], null, null, null, null, null)), (l()(), w._29(null, ["验证码  "])), (l()(), w._29(null, ["\n                "])), (l()(), w._10(0, null, null, 5, "input", [["class", "form-control"], ["id", "userPwd"], ["name", "userCode"], ["placeholder", "请输入验证码"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (l, n, e) {
                var t = !0, o = l.component;
                return "input" === n && (t = !1 !== w._23(l, 27)._handleInput(e.target.value) && t), "blur" === n && (t = !1 !== w._23(l, 27).onTouched() && t), "compositionstart" === n && (t = !1 !== w._23(l, 27)._compositionStart() && t), "compositionend" === n && (t = !1 !== w._23(l, 27)._compositionEnd(e.target.value) && t), "ngModelChange" === n && (t = !1 !== (o.userCode = e) && t), t
            }, null, null)), w._9(16384, null, 0, A.c, [w.H, w.l, [2, A.a]], null, null), w._26(1024, null, A.f, function (l) {
                return [l]
            }, [A.c]), w._9(671744, null, 0, A.k, [[2, A.b], [8, null], [8, null], [2, A.f]], {
                name: [0, "name"],
                model: [1, "model"]
            }, {update: "ngModelChange"}), w._26(2048, null, A.g, null, [A.k]), w._9(16384, null, 0, A.h, [A.g], null, null), (l()(), w._29(null, ["\n                "])), (l()(), w._10(0, null, null, 0, "input", [["class", "btn_mfyzm"], ["id", "getCode"], ["type", "button"], ["value", "获取验证码"]], [[8, "disabled", 0]], [[null, "click"]], function (l, n, e) {
                var t = !0;
                return "click" === n && (t = !1 !== l.component.btnCode() && t), t
            }, null, null)), (l()(), w._29(null, ["\n            "])), (l()(), w._29(null, ["\n            "])), (l()(), w._10(0, null, null, 1, "p", [["class", "cut"]], null, [[null, "click"]], function (l, n, e) {
                var t = !0;
                return "click" === n && (t = !1 !== l.component.CutName() && t), t
            }, null, null)), (l()(), w._29(null, ["\n                账号密码登录\n            "])), (l()(), w._29(null, ["\n            "])), (l()(), w._10(0, null, null, 1, "button", [["class", "btn btn-success"], ["id", "user"], ["type", "button"]], null, [[null, "click"]], function (l, n, e) {
                var t = !0;
                return "click" === n && (t = !1 !== l.component.logInCode() && t), t
            }, null, null)), (l()(), w._29(null, ["登录"])), (l()(), w._29(null, ["\n        "])), (l()(), w._29(null, ["\n    "]))], function (l, n) {
                var e = n.component;
                l(n, 16, 0, "userphone", e.userphone);
                l(n, 29, 0, "userCode", e.userCode)
            }, function (l, n) {
                var e = n.component;
                l(n, 2, 0, w._23(n, 6).ngClassUntouched, w._23(n, 6).ngClassTouched, w._23(n, 6).ngClassPristine, w._23(n, 6).ngClassDirty, w._23(n, 6).ngClassValid, w._23(n, 6).ngClassInvalid, w._23(n, 6).ngClassPending), l(n, 13, 0, w._23(n, 18).ngClassUntouched, w._23(n, 18).ngClassTouched, w._23(n, 18).ngClassPristine, w._23(n, 18).ngClassDirty, w._23(n, 18).ngClassValid, w._23(n, 18).ngClassInvalid, w._23(n, 18).ngClassPending), l(n, 26, 0, w._23(n, 31).ngClassUntouched, w._23(n, 31).ngClassTouched, w._23(n, 31).ngClassPristine, w._23(n, 31).ngClassDirty, w._23(n, 31).ngClassValid, w._23(n, 31).ngClassInvalid, w._23(n, 31).ngClassPending), l(n, 33, 0, e.isdisabled)
            })
        }

        function u(l) {
            return w._30(0, [(l()(), w._10(0, null, null, 40, "section", [], null, null, null, null, null)), (l()(), w._29(null, ["\n        "])), (l()(), w._10(0, null, null, 37, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (l, n, e) {
                var t = !0;
                return "submit" === n && (t = !1 !== w._23(l, 4).onSubmit(e) && t), "reset" === n && (t = !1 !== w._23(l, 4).onReset() && t), t
            }, null, null)), w._9(16384, null, 0, A.o, [], null, null), w._9(16384, null, 0, A.j, [[8, null], [8, null]], null, null), w._26(2048, null, A.b, null, [A.j]), w._9(16384, null, 0, A.i, [A.b], null, null), (l()(), w._29(null, ["\n            "])), (l()(), w._10(0, null, null, 11, "p", [["class", "input-group"]], null, null, null, null, null)), (l()(), w._29(null, ["\n                "])), (l()(), w._10(0, null, null, 1, "label", [["class", "input-group-addon"], ["for", "userTel"]], null, null, null, null, null)), (l()(), w._29(null, ["用户名"])), (l()(), w._29(null, ["\n                "])), (l()(), w._10(0, null, null, 5, "input", [["class", "form-control"], ["id", "userTel"], ["name", "username"], ["placeholder", "请输入账号"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (l, n, e) {
                var t = !0, o = l.component;
                return "input" === n && (t = !1 !== w._23(l, 14)._handleInput(e.target.value) && t), "blur" === n && (t = !1 !== w._23(l, 14).onTouched() && t), "compositionstart" === n && (t = !1 !== w._23(l, 14)._compositionStart() && t), "compositionend" === n && (t = !1 !== w._23(l, 14)._compositionEnd(e.target.value) && t), "ngModelChange" === n && (t = !1 !== (o.username = e) && t), t
            }, null, null)), w._9(16384, null, 0, A.c, [w.H, w.l, [2, A.a]], null, null), w._26(1024, null, A.f, function (l) {
                return [l]
            }, [A.c]), w._9(671744, null, 0, A.k, [[2, A.b], [8, null], [8, null], [2, A.f]], {
                name: [0, "name"],
                model: [1, "model"]
            }, {update: "ngModelChange"}), w._26(2048, null, A.g, null, [A.k]), w._9(16384, null, 0, A.h, [A.g], null, null), (l()(), w._29(null, ["\n            "])), (l()(), w._29(null, ["\n            "])), (l()(), w._10(0, null, null, 11, "p", [["class", "input-group"], ["for", "userPwd"]], null, null, null, null, null)), (l()(), w._29(null, ["\n                "])), (l()(), w._10(0, null, null, 1, "label", [["class", "input-group-addon"]], null, null, null, null, null)), (l()(), w._29(null, ["密码    "])), (l()(), w._29(null, ["\n                "])), (l()(), w._10(0, null, null, 5, "input", [["class", "form-control"], ["id", "userPwd"], ["name", "userPwd"], ["placeholder", "请输入密码"], ["type", "password"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (l, n, e) {
                var t = !0, o = l.component;
                return "input" === n && (t = !1 !== w._23(l, 27)._handleInput(e.target.value) && t), "blur" === n && (t = !1 !== w._23(l, 27).onTouched() && t), "compositionstart" === n && (t = !1 !== w._23(l, 27)._compositionStart() && t), "compositionend" === n && (t = !1 !== w._23(l, 27)._compositionEnd(e.target.value) && t), "ngModelChange" === n && (t = !1 !== (o.userPwd = e) && t), t
            }, null, null)), w._9(16384, null, 0, A.c, [w.H, w.l, [2, A.a]], null, null), w._26(1024, null, A.f, function (l) {
                return [l]
            }, [A.c]), w._9(671744, null, 0, A.k, [[2, A.b], [8, null], [8, null], [2, A.f]], {
                name: [0, "name"],
                model: [1, "model"]
            }, {update: "ngModelChange"}), w._26(2048, null, A.g, null, [A.k]), w._9(16384, null, 0, A.h, [A.g], null, null), (l()(), w._29(null, ["\n            "])), (l()(), w._29(null, ["\n            "])), (l()(), w._10(0, null, null, 1, "p", [["class", "cut"]], null, [[null, "click"]], function (l, n, e) {
                var t = !0;
                return "click" === n && (t = !1 !== l.component.CutCode() && t), t
            }, null, null)), (l()(), w._29(null, ["\n                短信验证登录\n            "])), (l()(), w._29(null, ["\n            "])), (l()(), w._10(0, null, null, 1, "button", [["class", "btn btn-success"], ["id", "user"], ["type", "button"]], null, [[null, "click"]], function (l, n, e) {
                var t = !0;
                return "click" === n && (t = !1 !== l.component.logIn() && t), t
            }, null, null)), (l()(), w._29(null, ["登录"])), (l()(), w._29(null, ["\n        "])), (l()(), w._29(null, ["\n    "]))], function (l, n) {
                var e = n.component;
                l(n, 16, 0, "username", e.username);
                l(n, 29, 0, "userPwd", e.userPwd)
            }, function (l, n) {
                l(n, 2, 0, w._23(n, 6).ngClassUntouched, w._23(n, 6).ngClassTouched, w._23(n, 6).ngClassPristine, w._23(n, 6).ngClassDirty, w._23(n, 6).ngClassValid, w._23(n, 6).ngClassInvalid, w._23(n, 6).ngClassPending), l(n, 13, 0, w._23(n, 18).ngClassUntouched, w._23(n, 18).ngClassTouched, w._23(n, 18).ngClassPristine, w._23(n, 18).ngClassDirty, w._23(n, 18).ngClassValid, w._23(n, 18).ngClassInvalid, w._23(n, 18).ngClassPending), l(n, 26, 0, w._23(n, 31).ngClassUntouched, w._23(n, 31).ngClassTouched, w._23(n, 31).ngClassPristine, w._23(n, 31).ngClassDirty, w._23(n, 31).ngClassValid, w._23(n, 31).ngClassInvalid, w._23(n, 31).ngClassPending)
            })
        }

        function i(l) {
            return w._30(0, [w._27(402653184, 1, {content: 0}), (l()(), w._10(0, null, null, 15, "div", [["id", "register"], ["style", "background: #424a6c;"]], null, null, null, null, null)), (l()(), w._29(null, ["\n    "])), (l()(), w._10(0, null, null, 6, "div", [["class", "BackGr"]], null, null, null, null, null)), (l()(), w._29(null, ["\n        "])), (l()(), w._10(0, null, null, 3, "div", [["class", "Grcontent"]], null, null, null, null, null)), (l()(), w._29(null, ["\n            "])), (l()(), w._10(0, null, null, 0, "img", [["alt", ""], ["src", "assets/images/login_logo.png"]], null, null, null, null, null)), (l()(), w._29(null, ["\n        "])), (l()(), w._29(null, ["\n    "])), (l()(), w._29(null, ["\n    "])), (l()(), w._6(16777216, null, null, 1, null, o)), w._9(16384, null, 0, B.h, [w.T, w.P], {ngIf: [0, "ngIf"]}, null), (l()(), w._29(null, ["\n    "])), (l()(), w._6(16777216, null, null, 1, null, u)), w._9(16384, null, 0, B.h, [w.T, w.P], {ngIf: [0, "ngIf"]}, null), (l()(), w._29(null, ["\n"]))], function (l, n) {
                var e = n.component;
                l(n, 12, 0, e.PhoneCode), l(n, 15, 0, e.usernamecode)
            }, null)
        }

        function r(l) {
            return w._30(0, [(l()(), w._10(0, null, null, 16, "div", [["class", "home_headface"]], null, null, null, null, null)), (l()(), w._29(null, ["\n                "])), (l()(), w._10(0, null, null, 10, "div", [["class", "home_faceimg"]], null, null, null, null, null)), (l()(), w._29(null, ["\n                    "])), (l()(), w._10(0, null, null, 0, "img", [["src", "assets/images/face.png"]], null, null, null, null, null)), (l()(), w._29(null, ["\n                    "])), (l()(), w._10(0, null, null, 5, "p", [["class", "home_info"]], null, null, null, null, null)), (l()(), w._10(0, null, null, 1, "span", [["class", "f20"]], null, null, null, null, null)), (l()(), w._29(null, ["", ""])), (l()(), w._29(null, ["", "\n                        "])), (l()(), w._10(0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), w._29(null, ["", "\n                    "])), (l()(), w._29(null, ["\n                "])), (l()(), w._29(null, ["\n                "])), (l()(), w._10(0, null, null, 1, "p", [["class", "my_profession"]], null, null, null, null, null)), (l()(), w._29(null, ["公司名称：", ""])), (l()(), w._29(null, ["\n            "]))], null, function (l, n) {
                var e = n.component;
                l(n, 8, 0, e.userInfo.EmpName), l(n, 9, 0, e.userInfo.PositionName), l(n, 11, 0, e.userInfo.TelNumber), l(n, 15, 0, e.userInfo.CompanyName)
            })
        }

        function a(l) {
            return w._30(0, [(l()(), w._10(0, null, null, 1, "i", [["class", "iconfont"]], null, null, null, null, null)), (l()(), w._29(null, [""]))], null, null)
        }

        function s(l) {
            return w._30(0, [(l()(), w._10(0, null, null, 1, "i", [["class", "iconfont"]], null, null, null, null, null)), (l()(), w._29(null, [""]))], null, null)
        }

        function c(l) {
            return w._30(0, [(l()(), w._10(0, null, null, 1, "i", [["class", "iconfont"]], null, null, null, null, null)), (l()(), w._29(null, [""]))], null, null)
        }

        function _(l) {
            return w._30(0, [(l()(), w._10(0, null, null, 1, "i", [["class", "iconfont"]], null, null, null, null, null)), (l()(), w._29(null, [""]))], null, null)
        }

        function p(l) {
            return w._30(0, [(l()(), w._10(0, null, null, 19, "li", [["class", "home_ttli"]], null, [[null, "click"]], function (l, n, e) {
                var t = !0;
                return "click" === n && (t = !1 !== l.component.openPage(l.context.$implicit) && t), t
            }, null, null)), (l()(), w._29(null, ["\n                    "])), (l()(), w._6(16777216, null, null, 1, null, a)), w._9(16384, null, 0, B.h, [w.T, w.P], {ngIf: [0, "ngIf"]}, null), (l()(), w._29(null, ["\n                    "])), (l()(), w._6(16777216, null, null, 1, null, s)), w._9(16384, null, 0, B.h, [w.T, w.P], {ngIf: [0, "ngIf"]}, null), (l()(), w._29(null, ["\n                    "])), (l()(), w._6(16777216, null, null, 1, null, c)), w._9(16384, null, 0, B.h, [w.T, w.P], {ngIf: [0, "ngIf"]}, null), (l()(), w._29(null, ["\n                    "])), (l()(), w._6(16777216, null, null, 1, null, _)), w._9(16384, null, 0, B.h, [w.T, w.P], {ngIf: [0, "ngIf"]}, null), (l()(), w._29(null, ["\n                    "])), (l()(), w._10(0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), w._29(null, ["   ", ""])), (l()(), w._29(null, ["\n                    "])), (l()(), w._10(0, null, null, 1, "i", [["class", "iconfont right"]], null, null, null, null, null)), (l()(), w._29(null, [""])), (l()(), w._29(null, ["\n                "]))], function (l, n) {
                l(n, 3, 0, "欢迎中心" == n.context.$implicit.title), l(n, 6, 0, "导入通讯录" == n.context.$implicit.title), l(n, 9, 0, "客户管理" == n.context.$implicit.title), l(n, 12, 0, "报表分析" == n.context.$implicit.title)
            }, function (l, n) {
                l(n, 15, 0, n.context.$implicit.title)
            })
        }

        function h(l) {
            return w._30(0, [w._27(402653184, 1, {nav: 0}), (l()(), w._10(0, null, null, 34, "ion-menu", [["class", "getting-home"], ["role", "navigation"]], null, null, null, xl.b, xl.a)), w._9(245760, null, 2, wl.a, [G.a, w.l, hl.a, fl.a, w.H, ll.a, q.h, W.a, J.a], {content: [0, "content"]}, null), w._27(335544320, 2, {menuContent: 0}), w._27(335544320, 3, {menuNav: 0}), w._26(6144, null, ml.a, null, [wl.a]), (l()(), w._29(0, ["\n    "])), (l()(), w._10(0, null, 0, 17, "section", [["class", "home_cnt"]], null, null, null, null, null)), (l()(), w._29(null, ["\n        "])), (l()(), w._10(0, null, null, 0, "img", [["class", "home_bgbg"], ["src", "assets/images/main_bg.jpg"]], null, null, null, null, null)), (l()(), w._29(null, ["\n        "])), (l()(), w._10(0, null, null, 12, "div", [["class", "home_head"]], null, null, null, null, null)), (l()(), w._29(null, ["\n            "])), (l()(), w._6(16777216, null, null, 1, null, r)), w._9(16384, null, 0, B.h, [w.T, w.P], {ngIf: [0, "ngIf"]}, null), (l()(), w._29(null, ["\n            "])), (l()(), w._10(0, null, null, 0, "div", [["style", "clear:both"]], null, null, null, null, null)), (l()(), w._29(null, ["\n            "])), (l()(), w._10(0, null, null, 4, "ul", [["class", "home_ttlist"]], null, null, null, null, null)), (l()(), w._29(null, ["\n                "])), (l()(), w._6(16777216, null, null, 1, null, p)), w._9(802816, null, 0, B.g, [w.T, w.P, w.u], {ngForOf: [0, "ngForOf"]}, null), (l()(), w._29(null, ["\n            "])), (l()(), w._29(null, ["\n        "])), (l()(), w._29(null, ["\n    "])), (l()(), w._29(0, ["\n    "])), (l()(), w._10(0, null, 0, 8, "div", [["class", "account_quit"], ["menuClose", ""]], null, [[null, "click"]], function (l, n, e) {
                var t = !0, o = l.component;
                return "click" === n && (t = !1 !== w._23(l, 27).close() && t), "click" === n && (t = !1 !== o.logOut() && t), t
            }, null, null)), w._9(16384, null, 0, Il.a, [G.a], {menuClose: [0, "menuClose"]}, null), (l()(), w._29(null, ["\n        "])), (l()(), w._10(0, null, null, 1, "i", [["class", "iconfont"]], null, null, null, null, null)), (l()(), w._29(null, [""])), (l()(), w._29(null, ["\n        "])), (l()(), w._10(0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), w._29(null, ["退出"])), (l()(), w._29(null, ["\n    "])), (l()(), w._29(0, ["\n"])), (l()(), w._29(null, ["\n"])), (l()(), w._10(0, null, null, 2, "ion-nav", [["swipeBackEnabled", "false"]], null, null, null, sl.b, sl.a)), w._9(4374528, [[1, 4], ["content", 4]], 0, cl.a, [[2, _l.a], [2, pl.a], J.a, hl.a, fl.a, w.l, w.B, w.H, w.k, q.h, ol.a, [2, dl.a], W.a, w.m], {
                swipeBackEnabled: [0, "swipeBackEnabled"],
                root: [1, "root"]
            }, null), w._26(6144, null, ml.a, null, [cl.a])], function (l, n) {
                var e = n.component;
                l(n, 2, 0, w._23(n, 38)), l(n, 14, 0, e.userInfo), l(n, 21, 0, e.pages);
                l(n, 27, 0, "");
                l(n, 38, 0, "false", e.rootPage)
            }, null)
        }

        function f(l) {
            return w._30(0, [(l()(), w._10(0, null, null, 9, "div", [["id", "Nav"]], null, null, null, null, null)), (l()(), w._29(null, ["\n   "])), (l()(), w._10(0, null, null, 1, "div", [["class", "Navleft"]], null, null, null, null, null)), (l()(), w._29(null, ["赢在CRM"])), (l()(), w._29(null, ["\n   "])), (l()(), w._10(0, null, null, 3, "div", [["class", "Navright"]], null, null, null, null, null)), (l()(), w._29(null, ["\n      "])), (l()(), w._10(0, null, null, 0, "img", [["height", "25px"], ["src", "assets/images/exit.png"], ["width", "25px"]], null, [[null, "click"]], function (l, n, e) {
                var t = !0;
                return "click" === n && (t = !1 !== l.component.ExitClear() && t), t
            }, null, null)), (l()(), w._29(null, ["\n   "])), (l()(), w._29(null, ["\n"])), (l()(), w._29(null, ["\n"])), (l()(), w._10(0, null, null, 51, "div", [["id", "Contenthandle"]], null, null, null, null, null)), (l()(), w._29(null, ["\n    "])), (l()(), w._10(0, null, null, 17, "div", [["class", "Banner"]], null, null, null, null, null)), (l()(), w._29(null, ["\n        "])), (l()(), w._10(0, null, null, 3, "div", [["class", "BannerTou"]], null, null, null, null, null)), (l()(), w._29(null, ["\n            "])), (l()(), w._10(0, null, null, 0, "img", [["alt", ""], ["height", "60px"], ["src", "assets/images/face.png"], ["width", "60px"]], null, null, null, null, null)), (l()(), w._29(null, ["\n        "])), (l()(), w._29(null, ["\n        "])), (l()(), w._10(0, null, null, 6, "div", [["class", "BannerName"]], null, null, null, null, null)), (l()(), w._29(null, ["\n            "])), (l()(), w._10(0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), w._29(null, ["", ""])), (l()(), w._10(0, null, null, 1, "span", [["class", "post"]], null, null, null, null, null)), (l()(), w._29(null, ["", ""])), (l()(), w._29(null, ["\n        "])), (l()(), w._29(null, ["\n        "])), (l()(), w._10(0, null, null, 1, "div", [["class", "branch"]], null, null, null, null, null)), (l()(), w._29(null, ["\n            ", "\n        "])), (l()(), w._29(null, ["\n    "])), (l()(), w._29(null, ["\n    "])), (l()(), w._10(0, null, null, 29, "div", [["class", "ContentInfo"]], null, null, null, null, null)), (l()(), w._29(null, ["\n      "])), (l()(), w._10(0, null, null, 26, "ul", [], null, null, null, null, null)), (l()(), w._29(null, ["\n        "])), (l()(), w._29(null, ["\n        "])), (l()(), w._10(0, null, null, 6, "li", [], null, [[null, "click"]], function (l, n, e) {
                var t = !0;
                return "click" === n && (t = !1 !== l.component.pushAnalyReport(1) && t), t
            }, null, null)), (l()(), w._29(null, ["\n            "])), (l()(), w._10(0, null, null, 0, "div", [["class", "Img iconfont icon-baobiao1"]], null, null, null, null, null)), (l()(), w._29(null, ["\n            "])), (l()(), w._10(0, null, null, 1, "span", [["class", "ContentInfoName"]], null, null, null, null, null)), (l()(), w._29(null, ["报表数据"])), (l()(), w._29(null, ["\n        "])), (l()(), w._29(null, ["\n        "])), (l()(), w._10(0, null, null, 6, "li", [], null, [[null, "click"]], function (l, n, e) {
                var t = !0;
                return "click" === n && (t = !1 !== l.component.pushCallphone(2) && t), t
            }, null, null)), (l()(), w._29(null, ["\n            "])), (l()(), w._10(0, null, null, 0, "div", [["class", "Img iconfont icon-jikediancanicon16"]], null, null, null, null, null)), (l()(), w._29(null, ["\n            "])), (l()(), w._10(0, null, null, 1, "span", [["class", "ContentInfoName"]], null, null, null, null, null)), (l()(), w._29(null, ["拨打电话"])), (l()(), w._29(null, ["\n        "])), (l()(), w._29(null, ["\n        "])), (l()(), w._10(0, null, null, 6, "li", [], null, [[null, "click"]], function (l, n, e) {
                var t = !0;
                return "click" === n && (t = !1 !== l.component.clearhistoy() && t), t
            }, null, null)), (l()(), w._29(null, ["\n            "])), (l()(), w._10(0, null, null, 0, "div", [["class", "Img iconfont icon-qinglihuancun"]], null, null, null, null, null)), (l()(), w._29(null, ["\n            "])), (l()(), w._10(0, null, null, 1, "span", [["class", "ContentInfoName"]], null, null, null, null, null)), (l()(), w._29(null, ["清理缓存"])), (l()(), w._29(null, ["\n        "])), (l()(), w._29(null, ["\n      "])), (l()(), w._29(null, ["\n    "])), (l()(), w._29(null, ["\n"])), (l()(), w._29(null, ["\n"])), (l()(), w._10(0, null, null, 10, "div", [["id", "Footer"]], null, null, null, null, null)), (l()(), w._29(null, ["\n  "])), (l()(), w._10(0, null, null, 7, "div", [["class", "FooterCon"]], null, null, null, null, null)), (l()(), w._29(null, ["\n    "])), (l()(), w._10(0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), w._10(0, null, null, 0, "img", [["alt", ""], ["src", "assets/images/logobt.png"]], null, null, null, null, null)), (l()(), w._29(null, ["\n    "])), (l()(), w._10(0, null, null, 1, "span", [["class", "Title"]], null, null, null, null, null)), (l()(), w._29(null, ["让业绩赢在CRM,祝您事业成功!"])), (l()(), w._29(null, ["\n  "])), (l()(), w._29(null, ["\n"]))], null, function (l, n) {
                var e = n.component;
                l(n, 23, 0, e.userinfo.EmpName), l(n, 25, 0, e.userinfo.PositionName), l(n, 29, 0, e.userinfo.DeptName)
            })
        }

        function d(l) {
            return w._30(0, [(l()(), w._10(0, null, null, 7, "div", [["class", "li_content"]], null, null, null, null, null)), (l()(), w._29(null, ["\n                        "])), (l()(), w._10(0, null, null, 4, "a", [], null, [[null, "click"]], function (l, n, e) {
                var t = !0;
                return "click" === n && (t = !1 !== l.component.gotoMenu(l.context.$implicit.targetUrl) && t), t
            }, null, null)), (l()(), w._29(null, ["\n                            "])), (l()(), w._10(0, null, null, 1, "p", [["style", "color: #fff;"]], null, null, null, null, null)), (l()(), w._29(null, ["\n                                ", "\n                            "])), (l()(), w._29(null, ["\n                        "])), (l()(), w._29(null, ["\n                    "]))], null, function (l, n) {
                l(n, 5, 0, n.context.$implicit.MenuName)
            })
        }

        function m(l) {
            return w._30(0, [(l()(), w._10(0, null, null, 15, "div", [["class", "fxbb_group"]], null, null, null, null, null)), (l()(), w._29(null, ["\n                    "])), (l()(), w._10(0, null, null, 9, "li", [["class", "li_title"]], null, null, null, null, null)), (l()(), w._29(null, ["\n                        "])), (l()(), w._10(0, null, null, 0, "i", [["class", "icon iconfont fxbb_icon  icon-xiaoshou"]], null, null, null, null, null)), (l()(), w._29(null, ["\n                        "])), (l()(), w._10(0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), w._29(null, ["", ""])), (l()(), w._29(null, ["\n                        "])), (l()(), w._10(0, null, null, 1, "i", [["class", "icon iconfont fxbb_arrow"]], null, null, null, null, null)), (l()(), w._29(null, [""])), (l()(), w._29(null, ["\n                    "])), (l()(), w._29(null, ["\n                    "])), (l()(), w._6(16777216, null, null, 1, null, d)), w._9(802816, null, 0, B.g, [w.T, w.P, w.u], {ngForOf: [0, "ngForOf"]}, null), (l()(), w._29(null, ["\n                "]))], function (l, n) {
                l(n, 14, 0, n.context.$implicit.Children.Item)
            }, function (l, n) {
                l(n, 7, 0, n.context.$implicit.MenuName)
            })
        }

        function g(l) {
            return w._30(0, [(l()(), w._29(null, [" "])), (l()(), w._29(null, ["\n "])), (l()(), w._10(0, null, null, 12, "div", [["class", "Header"]], null, null, null, null, null)), (l()(), w._29(null, ["\n    "])), (l()(), w._10(0, null, null, 9, "section", [["class", "nav_bar"]], null, null, null, null, null)), (l()(), w._29(null, ["\n        "])), (l()(), w._29(null, ["\n        "])), (l()(), w._10(0, null, null, 0, "div", [["class", "navbar_face iconfont icon-gengduo"]], null, [[null, "click"]], function (l, n, e) {
                var t = !0;
                return "click" === n && (t = !1 !== l.component.openMenu() && t), t
            }, null, null)), (l()(), w._29(null, ["   \n        "])), (l()(), w._10(0, null, null, 3, "p", [["class", "nav_titleA"]], null, null, null, null, null)), (l()(), w._29(null, ["报表分析"])), (l()(), w._10(0, null, null, 1, "i", [["class", "icon iconfont fxbb_arrow"], ["style", "float:right;margin-right:10px;font-size:22px"]], null, [[null, "click"]], function (l, n, e) {
                var t = !0;
                return "click" === n && (t = !1 !== l.component.GetOspService10649() && t), t
            }, null, null)), (l()(), w._29(null, [""])), (l()(), w._29(null, ["\n    "])), (l()(), w._29(null, ["\n"])), (l()(), w._29(null, ["\n"])), (l()(), w._10(0, null, null, 15, "ion-content", [], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, Dl.b, Dl.a)), w._9(4374528, null, 0, bl.a, [hl.a, fl.a, W.a, w.l, w.H, J.a, ll.a, w.B, [2, _l.a], [2, pl.a]], null, null), (l()(), w._29(1, ["\n    "])), (l()(), w._29(1, ["\n    "])), (l()(), w._10(0, null, 1, 10, "div", [["style", "background: #424a6c;position:absolute;top:44px;width:100%;height:100%;"]], null, null, null, null, null)), (l()(), w._29(null, ["\n        "])), (l()(), w._10(0, null, null, 7, "div", [["class", "fxbb_cnt"]], null, null, null, null, null)), (l()(), w._29(null, ["\n            "])), (l()(), w._10(0, null, null, 4, "ul", [], null, null, null, null, null)), (l()(), w._29(null, ["\n                "])), (l()(), w._6(16777216, null, null, 1, null, m)), w._9(802816, null, 0, B.g, [w.T, w.P, w.u], {ngForOf: [0, "ngForOf"]}, null), (l()(), w._29(null, ["\n            "])), (l()(), w._29(null, ["\n        "])), (l()(), w._29(null, ["\n    "])), (l()(), w._29(1, ["\n"])), (l()(), w._29(null, ["\n\n"]))], function (l, n) {
                l(n, 27, 0, n.component.NavInfo)
            }, function (l, n) {
                l(n, 16, 0, w._23(n, 17).statusbarPadding, w._23(n, 17)._hasRefresher)
            })
        }

        function y(l) {
            return w._30(0, [(l()(), w._10(0, null, null, 31, "div", [["class", "clientcontent"]], null, null, null, null, null)), (l()(), w._29(null, ["\n            "])), (l()(), w._10(0, null, null, 7, "div", [["class", "Employ"]], null, null, null, null, null)), (l()(), w._29(null, ["\n                "])), (l()(), w._10(0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), w._29(null, ["本人手机号码:"])), (l()(), w._29(null, ["\n                "])), (l()(), w._10(0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), w._29(null, ["", ""])), (l()(), w._29(null, ["\n            "])), (l()(), w._29(null, ["\n            "])), (l()(), w._10(0, null, null, 7, "div", [["class", "Identification"]], null, null, null, null, null)), (l()(), w._29(null, ["\n                "])), (l()(), w._10(0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), w._29(null, ["客户来电显示"])), (l()(), w._29(null, ["\n                "])), (l()(), w._10(0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), w._29(null, ["", ""])), (l()(), w._29(null, ["\n            "])), (l()(), w._29(null, ["\n            "])), (l()(), w._10(0, null, null, 10, "div", [["class", "Reminder"]], null, null, null, null, null)), (l()(), w._29(null, ["\n                "])), (l()(), w._10(0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), w._29(null, ["温馨提示:"])), (l()(), w._29(null, ["\n                "])), (l()(), w._10(0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), w._29(null, ["(1).请确保以上信息准确无误,如需修改请登录电脑端CRM进入【个人设置】页面进行修改。"])), (l()(), w._29(null, ["\n                "])), (l()(), w._10(0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), w._29(null, ["(2).本次呼叫完全年费且不耗费流量,费用将由呼叫中心统一支付!"])), (l()(), w._29(null, ["\n            "])), (l()(), w._29(null, ["\n        "]))], null, function (l, n) {
                var e = n.component;
                l(n, 8, 0, e.userinfo.TelNumber), l(n, 17, 0, e.userinfo.WorkGroup)
            })
        }

        function S(l) {
            return w._30(0, [(l()(), w._10(0, null, null, 30, "div", [["class", "SearchclientCon"]], null, null, null, null, null)), (l()(), w._29(null, ["\n            "])), (l()(), w._10(0, null, null, 1, "div", [["class", "SearchclientHeader"]], null, null, null, null, null)), (l()(), w._29(null, ["客户详情资料"])), (l()(), w._29(null, ["\n            "])), (l()(), w._10(0, null, null, 1, "div", [["class", "Resource"]], null, null, null, null, null)), (l()(), w._29(null, ["", "类资源"])), (l()(), w._29(null, ["\n            "])), (l()(), w._10(0, null, null, 21, "ul", [["class", "customerData"]], null, null, null, null, null)), (l()(), w._29(null, ["\n                "])), (l()(), w._10(0, null, null, 3, "li", [], null, null, null, null, null)), (l()(), w._10(0, null, null, 0, "span", [["class", "iconfont icon-zhucedenglushoujihao"]], null, null, null, null, null)), (l()(), w._10(0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), w._29(null, ["客户编号 : ", ""])), (l()(), w._29(null, ["\n                "])), (l()(), w._10(0, null, null, 3, "li", [], null, null, null, null, null)), (l()(), w._10(0, null, null, 0, "span", [["class", "iconfont icon-yonghu"]], null, null, null, null, null)), (l()(), w._10(0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), w._29(null, ["姓名 : ", "    ", ""])), (l()(), w._29(null, [" \n                "])), (l()(), w._10(0, null, null, 3, "li", [], null, null, null, null, null)), (l()(), w._10(0, null, null, 0, "span", [["class", "iconfont icon-system"]], null, null, null, null, null)), (l()(), w._10(0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), w._29(null, ["年龄 : ", ""])), (l()(), w._29(null, ["\n                "])), (l()(), w._10(0, null, null, 3, "li", [], null, null, null, null, null)), (l()(), w._10(0, null, null, 0, "span", [["class", "iconfont icon-laiyuan"]], null, null, null, null, null)), (l()(), w._10(0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), w._29(null, ["资金量 : ", "万元"])), (l()(), w._29(null, ["\n                \n            "])), (l()(), w._29(null, ["\n        "]))], null, function (l, n) {
                var e = n.component;
                l(n, 6, 0, e.CustomerType), l(n, 13, 0, e.CustomerID), l(n, 18, 0, e.Client, e.Customersex), l(n, 23, 0, e.CustomerAge), l(n, 28, 0, e.StockMoney)
            })
        }

        function b(l) {
            return w._30(0, [(l()(), w._10(0, null, null, 9, "div", [["class", "Nodata"]], null, null, null, null, null)), (l()(), w._29(null, ["\n            "])), (l()(), w._10(0, null, null, 6, "div", [["class", "NodataContent"]], null, null, null, null, null)), (l()(), w._29(null, ["\n                "])), (l()(), w._10(0, null, null, 0, "span", [["class", "iconfont icon-3dashuju"]], null, null, null, null, null)), (l()(), w._29(null, ["\n                "])), (l()(), w._10(0, null, null, 1, "span", [["class", "NodataTitle"]], null, null, null, null, null)), (l()(), w._29(null, ["暂无更多数据!"])), (l()(), w._29(null, ["\n            "])), (l()(), w._29(null, ["\n        "]))], null, null)
        }

        function v(l) {
            return w._30(0, [w._27(402653184, 1, {content: 0}), (l()(), w._10(0, null, null, 10, "ion-header", [], null, null, null, null, null)), w._9(16384, null, 0, Tl.a, [hl.a, w.l, w.H, [2, _l.a]], null, null), (l()(), w._29(null, ["\n    "])), (l()(), w._10(0, null, null, 6, "section", [["class", "nav_bar"]], null, null, null, null, null)), (l()(), w._29(null, ["\n        "])), (l()(), w._10(0, null, null, 0, "div", [["class", "navbar_face iconfont icon-gengduo"]], null, [[null, "click"]], function (l, n, e) {
                var t = !0;
                return "click" === n && (t = !1 !== l.component.openMenu() && t), t
            }, null, null)), (l()(), w._29(null, [" \n        "])), (l()(), w._10(0, null, null, 1, "p", [["class", "nav_title"]], null, null, null, null, null)), (l()(), w._29(null, ["电话外呼"])), (l()(), w._29(null, ["\n    "])), (l()(), w._29(null, ["\n"])), (l()(), w._29(null, ["\n"])), (l()(), w._10(0, null, null, 27, "ion-content", [["style", "background:#384064;"]], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, Dl.b, Dl.a)), w._9(4374528, [[1, 4]], 0, bl.a, [hl.a, fl.a, W.a, w.l, w.H, J.a, ll.a, w.B, [2, _l.a], [2, pl.a]], null, null), (l()(), w._29(1, ["\n    "])), (l()(), w._10(0, null, 1, 9, "div", [["class", "Srearch"]], null, null, null, null, null)), (l()(), w._29(null, ["\n        "])), (l()(), w._10(0, null, null, 6, "input", [["id", "optionSerach"], ["placeholder", "请输入客户编号/手机号码"], ["type", "number"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "change"]], function (l, n, e) {
                var t = !0, o = l.component;
                return "input" === n && (t = !1 !== w._23(l, 19)._handleInput(e.target.value) && t), "blur" === n && (t = !1 !== w._23(l, 19).onTouched() && t), "compositionstart" === n && (t = !1 !== w._23(l, 19)._compositionStart() && t), "compositionend" === n && (t = !1 !== w._23(l, 19)._compositionEnd(e.target.value) && t), "change" === n && (t = !1 !== w._23(l, 20).onChange(e.target.value) && t), "input" === n && (t = !1 !== w._23(l, 20).onChange(e.target.value) && t), "blur" === n && (t = !1 !== w._23(l, 20).onTouched() && t), "ngModelChange" === n && (t = !1 !== (o.username = e) && t), t
            }, null, null)), w._9(16384, null, 0, A.c, [w.H, w.l, [2, A.a]], null, null), w._9(16384, null, 0, A.n, [w.H, w.l], null, null), w._26(1024, null, A.f, function (l, n) {
                return [l, n]
            }, [A.c, A.n]), w._9(671744, null, 0, A.k, [[8, null], [8, null], [8, null], [2, A.f]], {model: [0, "model"]}, {update: "ngModelChange"}), w._26(2048, null, A.g, null, [A.k]), w._9(16384, null, 0, A.h, [A.g], null, null), (l()(), w._29(null, ["\n    "])), (l()(), w._29(1, ["\n    "])), (l()(), w._10(0, null, 1, 12, "div", [["class", "client"]], null, null, null, null, null)), (l()(), w._29(null, ["\n        "])), (l()(), w._29(null, ["\n        "])), (l()(), w._6(16777216, null, null, 1, null, y)), w._9(16384, null, 0, B.h, [w.T, w.P], {ngIf: [0, "ngIf"]}, null), (l()(), w._29(null, ["\n        "])), (l()(), w._29(null, ["\n        "])), (l()(), w._6(16777216, null, null, 1, null, S)), w._9(16384, null, 0, B.h, [w.T, w.P], {ngIf: [0, "ngIf"]}, null), (l()(), w._29(null, ["\n        "])), (l()(), w._6(16777216, null, null, 1, null, b)), w._9(16384, null, 0, B.h, [w.T, w.P], {ngIf: [0, "ngIf"]}, null), (l()(), w._29(null, ["\n    "])), (l()(), w._29(1, ["\n"])), (l()(), w._29(null, ["\n"])), (l()(), w._10(0, null, null, 11, "ion-footer", [], null, null, null, null, null)), w._9(16384, null, 0, Ll.a, [hl.a, w.l, w.H, [2, _l.a]], null, null), (l()(), w._29(null, ["\n    "])), (l()(), w._10(0, null, null, 7, "ul", [["class", "CallFooter"]], null, null, null, null, null)), (l()(), w._29(null, ["\n        "])), (l()(), w._10(0, null, null, 0, "li", [["class", "iconfont icon-sousuo"]], null, [[null, "click"]], function (l, n, e) {
                var t = !0;
                return "click" === n && (t = !1 !== l.component.SearchClick() && t), t
            }, null, null)), (l()(), w._29(null, ["\n        "])), (l()(), w._10(0, null, null, 0, "li", [["class", "iconfont icon-btnphone"]], null, [[null, "click"]], function (l, n, e) {
                var t = !0;
                return "click" === n && (t = !1 !== l.component.CallBack() && t), t
            }, null, null)), (l()(), w._29(null, ["\n        "])), (l()(), w._10(0, null, null, 0, "li", [["class", "iconfont icon-qingkong"]], null, [[null, "click"]], function (l, n, e) {
                var t = !0;
                return "click" === n && (t = !1 !== l.component.ClearInput() && t), t
            }, null, null)), (l()(), w._29(null, ["\n    "])), (l()(), w._29(null, ["\n"]))], function (l, n) {
                var e = n.component;
                l(n, 22, 0, e.username), l(n, 31, 0, e.clientcontent), l(n, 35, 0, e.SearchclientCon), l(n, 38, 0, e.NodataContent)
            }, function (l, n) {
                l(n, 13, 0, w._23(n, 14).statusbarPadding, w._23(n, 14)._hasRefresher), l(n, 18, 0, w._23(n, 24).ngClassUntouched, w._23(n, 24).ngClassTouched, w._23(n, 24).ngClassPristine, w._23(n, 24).ngClassDirty, w._23(n, 24).ngClassValid, w._23(n, 24).ngClassInvalid, w._23(n, 24).ngClassPending)
            })
        }

        function C(l) {
            return w._30(0, [(l()(), w._10(0, null, null, 69, "ion-menu", [["role", "navigation"]], null, null, null, xl.b, xl.a)), w._9(245760, null, 2, wl.a, [G.a, w.l, hl.a, fl.a, w.H, ll.a, q.h, W.a, J.a], {content: [0, "content"]}, null), w._27(335544320, 1, {menuContent: 0}), w._27(335544320, 2, {menuNav: 0}), w._26(6144, null, ml.a, null, [wl.a]), (l()(), w._29(0, ["\n    "])), (l()(), w._10(0, null, 0, 62, "div", [["style", "background:#424a6c"]], null, null, null, null, null)), (l()(), w._29(null, ["\n            "])), (l()(), w._10(0, null, null, 4, "div", [["id", "Nav"]], null, null, null, null, null)), (l()(), w._29(null, ["\n                "])), (l()(), w._10(0, null, null, 1, "div", [["class", "Navleft"]], null, null, null, null, null)), (l()(), w._29(null, ["赢在CRM"])), (l()(), w._29(null, ["\n            "])), (l()(), w._29(null, ["\n            "])), (l()(), w._10(0, null, null, 53, "div", [["id", "ContentMenu"]], null, null, null, null, null)), (l()(), w._29(null, ["\n                "])), (l()(), w._10(0, null, null, 17, "div", [["class", "Banner"]], null, null, null, null, null)), (l()(), w._29(null, ["\n                    "])), (l()(), w._10(0, null, null, 3, "div", [["class", "BannerTou"]], null, null, null, null, null)), (l()(), w._29(null, ["\n                        "])), (l()(), w._10(0, null, null, 0, "img", [["height", "60"], ["onerror", 'this.src="assets/images/face.png"'], ["width", "60"]], [[8, "src", 4]], null, null, null, null)), (l()(), w._29(null, ["\n                    "])), (l()(), w._29(null, ["\n                    "])), (l()(), w._10(0, null, null, 6, "div", [["class", "BannerName"]], null, null, null, null, null)), (l()(), w._29(null, ["\n                        "])), (l()(), w._10(0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), w._29(null, ["", ""])), (l()(), w._10(0, null, null, 1, "span", [["class", "post"]], null, null, null, null, null)), (l()(), w._29(null, ["", ""])), (l()(), w._29(null, ["\n                    "])), (l()(), w._29(null, ["\n                    "])), (l()(), w._10(0, null, null, 1, "div", [["class", "branch"]], null, null, null, null, null)), (l()(), w._29(null, ["\n                        ", "\n                    "])), (l()(), w._29(null, ["\n                "])), (l()(), w._29(null, ["\n                "])), (l()(), w._10(0, null, null, 20, "div", [["class", "MenuList"]], null, null, null, null, null)), (l()(), w._29(null, ["\n                    "])), (l()(), w._10(0, null, null, 17, "ul", [], null, null, null, null, null)), (l()(), w._29(null, ["\n                        "])), (l()(), w._10(0, null, null, 6, "li", [], null, [[null, "click"]], function (l, n, e) {
                var t = !0;
                return "click" === n && (t = !1 !== l.component.BaobiaoClick() && t), t
            }, null, null)), (l()(), w._29(null, ["\n                            "])), (l()(), w._10(0, null, null, 0, "span", [["class", "Icon iconfont icon-baobiao1"]], null, null, null, null, null)), (l()(), w._29(null, ["\n                            "])), (l()(), w._10(0, null, null, 1, "span", [["class", "MenuListTitle"]], null, null, null, null, null)), (l()(), w._29(null, ["报表数据"])), (l()(), w._29(null, ["\n                        "])), (l()(), w._29(null, ["\n                        "])), (l()(), w._10(0, null, null, 6, "li", [], null, [[null, "click"]], function (l, n, e) {
                var t = !0;
                return "click" === n && (t = !1 !== l.component.PushCallPhone() && t), t
            }, null, null)), (l()(), w._29(null, ["\n                            "])), (l()(), w._10(0, null, null, 0, "span", [["class", "Icon iconfont icon-jikediancanicon16"]], null, null, null, null, null)), (l()(), w._29(null, ["\n                            "])), (l()(), w._10(0, null, null, 1, "span", [["class", "MenuListTitle"]], null, null, null, null, null)), (l()(), w._29(null, ["电话外呼"])), (l()(), w._29(null, ["\n                        "])), (l()(), w._29(null, ["\n                    "])), (l()(), w._29(null, ["\n                "])), (l()(), w._29(null, ["\n                "])), (l()(), w._10(0, null, null, 9, "div", [["class", "ClearLocal"]], null, null, null, null, null)), (l()(), w._29(null, ["\n                    "])), (l()(), w._10(0, null, null, 6, "div", [["class", "ClearLocalCon"]], null, [[null, "click"]], function (l, n, e) {
                var t = !0;
                return "click" === n && (t = !1 !== l.component.ClearLocalCon() && t), t
            }, null, null)), (l()(), w._29(null, ["\n                        "])), (l()(), w._10(0, null, null, 0, "span", [["class", "iconfont icon-shanchu1"]], null, null, null, null, null)), (l()(), w._29(null, ["\n                        "])), (l()(), w._10(0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), w._29(null, ["清除缓存"])), (l()(), w._29(null, ["\n                    "])), (l()(), w._29(null, ["\n                "])), (l()(), w._29(null, ["\n            "])), (l()(), w._29(null, ["\n        "])), (l()(), w._29(0, ["\n"])), (l()(), w._29(null, ["\n"])), (l()(), w._10(0, null, null, 2, "ion-nav", [["id", "nav"]], null, null, null, sl.b, sl.a)), w._9(4374528, [["content", 4]], 0, cl.a, [[2, _l.a], [2, pl.a], J.a, hl.a, fl.a, w.l, w.B, w.H, w.k, q.h, ol.a, [2, dl.a], W.a, w.m], {root: [0, "root"]}, null), w._26(6144, null, ml.a, null, [cl.a])], function (l, n) {
                var e = n.component;
                l(n, 1, 0, w._23(n, 72)), l(n, 72, 0, e.rootPage)
            }, function (l, n) {
                var e = n.component;
                l(n, 20, 0, w._14(1, "", e.userinfo.avatar, "")), l(n, 26, 0, e.userinfo.EmpName), l(n, 28, 0, e.userinfo.PositionName), l(n, 32, 0, e.userinfo.DeptName)
            })
        }

        Object.defineProperty(n, "__esModule", {value: !0});
        var x = e(24), w = e(0), I = (e(8), e(49)), P = e(52), N = e(53), A = e(28), k = e(76), D = e(109), M = e(23),
            O = e(10), T = e(40), L = e(50), R = e(51), E = function () {
                return function (l, n, e, t, o) {
                    var u = this;
                    this.commonService = t, this.comm = o, l.ready().then(function () {
                        n.styleDefault(), e.hide();
                        var l = u.commonService.userInfo();
                        if (l && l.EmpCode && l.RoleID) u.rootPage = null != navigator.userAgent.match(/DingTalk\/([a-zA-Z0-9.-]+)/) || "huaxuntg" == u.comm.getUrlParam("state") ? R.a : T.a; else {
                            if (u.codes = o.getUrlParam("code"), u.state = o.getUrlParam("state"), "huaxuntg" == u.state && null == u.codes) return void(window.location.href = t.GetsysConfig().wxauthorize);
                            if ("huaxuntg" == u.state && null != u.codes) {
                                var i = "appid=" + t.GetsysConfig().appid + "&code=" + u.codes + "&state=" + u.state,
                                    r = "";
                                u.commonService.executeOspService(10515, i, 4, 1).subscribe(function (l) {
                                    var n = l.json();
                                    n || (r = "未获取到微信信息，请联系管理员！", n.userid = 0 == (n.userid + "").indexOf("E") ? (n.userid + "").substring(1) : -10086), t.executeOspService(10043, i = "EmpCode=" + n.userid, 4, 1).subscribe(function (l) {
                                        var e = l.json();
                                        e && e.EmpCode ? (e.userid = e.EmpCode, e.avatar = void 0 == n.avatar ? "" : n.avatar, u.commonService.setUserInfo(e), u.rootPage = R.a) : (u.commonService.showToast(r = n.userid + "未获取到账号信息，请联系管理员！", 2e3), u.rootPage = L.a)
                                    })
                                })
                            } else u.rootPage = L.a
                        }
                    })
                }
            }(), H = e(32), j = function () {
                function l(l) {
                    this.navCtrl = l, this.rootPage = H.a, this.pages = [{title: "报表分析", component: H.a}]
                }

                return l.prototype.openPage = function (l) {
                    "客户管理" != l.title ? this.nav.setRoot(l.component) : "客户管理" == l.title && this.nav.setRoot(l.component)
                }, l
            }(), z = e(78), F = function () {
                return function () {
                }
            }(), B = e(14), U = e(105), W = e(6), G = e(15), J = e(5), q = e(7), V = e(75), X = e(80), K = e(74), Y = e(26),
            $ = e(70), Z = e(71), Q = e(47), ll = e(13), nl = e(38), el = e(69), tl = e(67), ol = e(21), ul = e(112),
            il = e(113), rl = e(114), al = e(115), sl = e(79), cl = e(27), _l = e(4), pl = e(12), hl = e(1), fl = e(3),
            dl = e(20), ml = e(22), gl = w._8({encapsulation: 2, styles: [], data: {}}),
            yl = w._7("ng-component", E, function (l) {
                return w._30(0, [(l()(), w._10(0, null, null, 1, "ng-component", [], null, null, null, t, gl)), w._9(49152, null, 0, E, [fl.a, N.a, P.a, O.a, M.a], null, null)], null, null)
            }, {}, {}, []), Sl = e(11), bl = e(17), vl = w._8({encapsulation: 2, styles: [], data: {}}),
            Cl = w._7("ng-component", L.a, function (l) {
                return w._30(0, [(l()(), w._10(0, null, null, 2, "ng-component", [], null, null, null, i, vl)), w._9(49152, null, 0, L.a, [pl.a, Sl.a, O.a, Y.a, nl.a, M.a], null, null), w._26(135680, null, bl.a, bl.a, [hl.a, fl.a, W.a, w.l, w.H, J.a, ll.a, w.B, [2, _l.a], [2, pl.a]])], null, null)
            }, {}, {}, []), xl = e(111), wl = e(39), Il = e(66), Pl = w._8({encapsulation: 2, styles: [], data: {}}),
            Nl = w._7("page-home", j, function (l) {
                return w._30(0, [(l()(), w._10(0, null, null, 1, "page-home", [], null, null, null, h, Pl)), w._9(49152, null, 0, j, [pl.a], null, null)], null, null)
            }, {}, {}, []), Al = w._8({encapsulation: 2, styles: [], data: {}}),
            kl = w._7("ng-component", T.a, function (l) {
                return w._30(0, [(l()(), w._10(0, null, null, 2, "ng-component", [], null, null, null, f, Al)), w._9(49152, null, 0, T.a, [Sl.a, pl.a, I.c, O.a, Y.a, nl.a], null, null), w._26(135680, null, bl.a, bl.a, [hl.a, fl.a, W.a, w.l, w.H, J.a, ll.a, w.B, [2, _l.a], [2, pl.a]])], null, null)
            }, {}, {}, []), Dl = e(82), Ml = w._8({encapsulation: 2, styles: [], data: {}}),
            Ol = w._7("ng-component", H.a, function (l) {
                return w._30(0, [(l()(), w._10(0, null, null, 1, "ng-component", [], null, null, null, g, Ml)), w._9(49152, null, 0, H.a, [pl.a, Sl.a, O.a, M.a, G.a], null, null)], null, null)
            }, {}, {}, []), Tl = e(54), Ll = e(68), Rl = w._8({encapsulation: 2, styles: [], data: {}}),
            El = w._7("ng-component", z.a, function (l) {
                return w._30(0, [(l()(), w._10(0, null, null, 2, "ng-component", [], null, null, null, v, Rl)), w._9(49152, null, 0, z.a, [Sl.a, pl.a, O.a, Y.a, G.a], null, null), w._26(135680, null, bl.a, bl.a, [hl.a, fl.a, W.a, w.l, w.H, J.a, ll.a, w.B, [2, _l.a], [2, pl.a]])], null, null)
            }, {}, {}, []), Hl = w._8({encapsulation: 2, styles: [], data: {}}),
            jl = w._7("ng-component", R.a, function (l) {
                return w._30(0, [(l()(), w._10(0, null, null, 1, "ng-component", [], null, null, null, C, Hl)), w._9(49152, null, 0, R.a, [pl.a, Sl.a, O.a, Y.a, G.a], null, null)], null, null)
            }, {}, {}, []), zl = e(44), Fl = e(110), Bl = e(72), Ul = e(81), Wl = e(73), Gl = e(34),
            Jl = this && this.__extends || function () {
                var l = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (l, n) {
                    l.__proto__ = n
                } || function (l, n) {
                    for (var e in n) n.hasOwnProperty(e) && (l[e] = n[e])
                };
                return function (n, e) {
                    function t() {
                        this.constructor = n
                    }

                    l(n, e), n.prototype = null === e ? Object.create(e) : (t.prototype = e.prototype, new t)
                }
            }(), ql = new w.y(function (l) {
                function n(n) {
                    return l.call(this, n, [ul.a, il.a, rl.a, al.a, yl, Cl, Nl, kl, Ol, El, jl], [il.a]) || this
                }

                return Jl(n, l), Object.defineProperty(n.prototype, "_LOCALE_ID_28", {
                    get: function () {
                        return null == this.__LOCALE_ID_28 && (this.__LOCALE_ID_28 = w._21(this.parent.get(w.w, null))), this.__LOCALE_ID_28
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(n.prototype, "_NgLocalization_29", {
                    get: function () {
                        return null == this.__NgLocalization_29 && (this.__NgLocalization_29 = new B.i(this._LOCALE_ID_28)), this.__NgLocalization_29
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(n.prototype, "_APP_ID_30", {
                    get: function () {
                        return null == this.__APP_ID_30 && (this.__APP_ID_30 = w._12()), this.__APP_ID_30
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(n.prototype, "_IterableDiffers_31", {
                    get: function () {
                        return null == this.__IterableDiffers_31 && (this.__IterableDiffers_31 = w._18()), this.__IterableDiffers_31
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(n.prototype, "_KeyValueDiffers_32", {
                    get: function () {
                        return null == this.__KeyValueDiffers_32 && (this.__KeyValueDiffers_32 = w._20()), this.__KeyValueDiffers_32
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(n.prototype, "_DomSanitizer_33", {
                    get: function () {
                        return null == this.__DomSanitizer_33 && (this.__DomSanitizer_33 = new x.s(this.parent.get(x.b))), this.__DomSanitizer_33
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(n.prototype, "_Sanitizer_34", {
                    get: function () {
                        return null == this.__Sanitizer_34 && (this.__Sanitizer_34 = this._DomSanitizer_33), this.__Sanitizer_34
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(n.prototype, "_HAMMER_GESTURE_CONFIG_35", {
                    get: function () {
                        return null == this.__HAMMER_GESTURE_CONFIG_35 && (this.__HAMMER_GESTURE_CONFIG_35 = new K.a), this.__HAMMER_GESTURE_CONFIG_35
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(n.prototype, "_EVENT_MANAGER_PLUGINS_36", {
                    get: function () {
                        return null == this.__EVENT_MANAGER_PLUGINS_36 && (this.__EVENT_MANAGER_PLUGINS_36 = [new x.l(this.parent.get(x.b)), new x.p(this.parent.get(x.b)), new x.o(this.parent.get(x.b), this._HAMMER_GESTURE_CONFIG_35)]), this.__EVENT_MANAGER_PLUGINS_36
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(n.prototype, "_EventManager_37", {
                    get: function () {
                        return null == this.__EventManager_37 && (this.__EventManager_37 = new x.e(this._EVENT_MANAGER_PLUGINS_36, this.parent.get(w.B))), this.__EventManager_37
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(n.prototype, "_ɵDomSharedStylesHost_38", {
                    get: function () {
                        return null == this.__ɵDomSharedStylesHost_38 && (this.__ɵDomSharedStylesHost_38 = new x.n(this.parent.get(x.b))), this.__ɵDomSharedStylesHost_38
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(n.prototype, "_ɵDomRendererFactory2_39", {
                    get: function () {
                        return null == this.__ɵDomRendererFactory2_39 && (this.__ɵDomRendererFactory2_39 = new x.m(this._EventManager_37, this._ɵDomSharedStylesHost_38)), this.__ɵDomRendererFactory2_39
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(n.prototype, "_RendererFactory2_40", {
                    get: function () {
                        return null == this.__RendererFactory2_40 && (this.__RendererFactory2_40 = this._ɵDomRendererFactory2_39), this.__RendererFactory2_40
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(n.prototype, "_ɵSharedStylesHost_41", {
                    get: function () {
                        return null == this.__ɵSharedStylesHost_41 && (this.__ɵSharedStylesHost_41 = this._ɵDomSharedStylesHost_38), this.__ɵSharedStylesHost_41
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(n.prototype, "_Testability_42", {
                    get: function () {
                        return null == this.__Testability_42 && (this.__Testability_42 = new w.Q(this.parent.get(w.B))), this.__Testability_42
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(n.prototype, "_Meta_43", {
                    get: function () {
                        return null == this.__Meta_43 && (this.__Meta_43 = new x.h(this.parent.get(x.b))), this.__Meta_43
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(n.prototype, "_Title_44", {
                    get: function () {
                        return null == this.__Title_44 && (this.__Title_44 = new x.j(this.parent.get(x.b))), this.__Title_44
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(n.prototype, "_ɵi_45", {
                    get: function () {
                        return null == this.__ɵi_45 && (this.__ɵi_45 = new A.p), this.__ɵi_45
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(n.prototype, "_BrowserXhr_46", {
                    get: function () {
                        return null == this.__BrowserXhr_46 && (this.__BrowserXhr_46 = new k.c), this.__BrowserXhr_46
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(n.prototype, "_ResponseOptions_47", {
                    get: function () {
                        return null == this.__ResponseOptions_47 && (this.__ResponseOptions_47 = new k.b), this.__ResponseOptions_47
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(n.prototype, "_XSRFStrategy_48", {
                    get: function () {
                        return null == this.__XSRFStrategy_48 && (this.__XSRFStrategy_48 = k.n()), this.__XSRFStrategy_48
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(n.prototype, "_XHRBackend_49", {
                    get: function () {
                        return null == this.__XHRBackend_49 && (this.__XHRBackend_49 = new k.k(this._BrowserXhr_46, this._ResponseOptions_47, this._XSRFStrategy_48)), this.__XHRBackend_49
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(n.prototype, "_RequestOptions_50", {
                    get: function () {
                        return null == this.__RequestOptions_50 && (this.__RequestOptions_50 = new k.a), this.__RequestOptions_50
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(n.prototype, "_Http_51", {
                    get: function () {
                        return null == this.__Http_51 && (this.__Http_51 = k.o(this._XHRBackend_49, this._RequestOptions_50)), this.__Http_51
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(n.prototype, "_ɵg_52", {
                    get: function () {
                        return null == this.__ɵg_52 && (this.__ɵg_52 = new k.q), this.__ɵg_52
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(n.prototype, "_JSONPBackend_53", {
                    get: function () {
                        return null == this.__JSONPBackend_53 && (this.__JSONPBackend_53 = new k.m(this._ɵg_52, this._ResponseOptions_47)), this.__JSONPBackend_53
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(n.prototype, "_Jsonp_54", {
                    get: function () {
                        return null == this.__Jsonp_54 && (this.__Jsonp_54 = k.p(this._JSONPBackend_53, this._RequestOptions_50)), this.__Jsonp_54
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(n.prototype, "_FormBuilder_55", {
                    get: function () {
                        return null == this.__FormBuilder_55 && (this.__FormBuilder_55 = new A.d), this.__FormBuilder_55
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(n.prototype, "_AlertController_59", {
                    get: function () {
                        return null == this.__AlertController_59 && (this.__AlertController_59 = new Y.a(this._App_8, this._Config_5)), this.__AlertController_59
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(n.prototype, "_Events_60", {
                    get: function () {
                        return null == this.__Events_60 && (this.__Events_60 = new $.a), this.__Events_60
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(n.prototype, "_Form_61", {
                    get: function () {
                        return null == this.__Form_61 && (this.__Form_61 = new Z.a), this.__Form_61
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(n.prototype, "_Haptic_62", {
                    get: function () {
                        return null == this.__Haptic_62 && (this.__Haptic_62 = new Q.a(this._Platform_4)), this.__Haptic_62
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(n.prototype, "_Keyboard_63", {
                    get: function () {
                        return null == this.__Keyboard_63 && (this.__Keyboard_63 = new ll.a(this._Config_5, this._Platform_4, this.parent.get(w.B), this._DomController_6)), this.__Keyboard_63
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(n.prototype, "_LoadingController_64", {
                    get: function () {
                        return null == this.__LoadingController_64 && (this.__LoadingController_64 = new nl.a(this._App_8, this._Config_5)), this.__LoadingController_64
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(n.prototype, "_LocationStrategy_65", {
                    get: function () {
                        return null == this.__LocationStrategy_65 && (this.__LocationStrategy_65 = X.c(this.parent.get(B.p), this._APP_BASE_HREF_57, this._Config_5)), this.__LocationStrategy_65
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(n.prototype, "_Location_66", {
                    get: function () {
                        return null == this.__Location_66 && (this.__Location_66 = new B.d(this._LocationStrategy_65)), this.__Location_66
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(n.prototype, "_UrlSerializer_67", {
                    get: function () {
                        return null == this.__UrlSerializer_67 && (this.__UrlSerializer_67 = zl.d(this._DeepLinkConfigToken_10)), this.__UrlSerializer_67
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(n.prototype, "_DeepLinker_68", {
                    get: function () {
                        return null == this.__DeepLinker_68 && (this.__DeepLinker_68 = dl.b(this._App_8, this._UrlSerializer_67, this._Location_66, this._ModuleLoader_13, this.componentFactoryResolver)), this.__DeepLinker_68
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(n.prototype, "_TapClick_72", {
                    get: function () {
                        return null == this.__TapClick_72 && (this.__TapClick_72 = new el.a(this._Config_5, this._Platform_4, this._DomController_6, this._App_8, this._GestureController_9)), this.__TapClick_72
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(n.prototype, "_ToastController_73", {
                    get: function () {
                        return null == this.__ToastController_73 && (this.__ToastController_73 = new tl.a(this._App_8, this._Config_5)), this.__ToastController_73
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(n.prototype, "_TransitionController_74", {
                    get: function () {
                        return null == this.__TransitionController_74 && (this.__TransitionController_74 = new ol.a(this._Platform_4, this._Config_5)), this.__TransitionController_74
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(n.prototype, "_Storage_76", {
                    get: function () {
                        return null == this.__Storage_76 && (this.__Storage_76 = Fl.c(this._StorageConfigToken_75)), this.__Storage_76
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(n.prototype, "_StatusBar_77", {
                    get: function () {
                        return null == this.__StatusBar_77 && (this.__StatusBar_77 = new N.a), this.__StatusBar_77
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(n.prototype, "_SplashScreen_78", {
                    get: function () {
                        return null == this.__SplashScreen_78 && (this.__SplashScreen_78 = new P.a), this.__SplashScreen_78
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(n.prototype, "_CommonService_79", {
                    get: function () {
                        return null == this.__CommonService_79 && (this.__CommonService_79 = new O.a(this._Http_51, this._AlertController_59, this._ToastController_73, this._LoadingController_64)), this.__CommonService_79
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(n.prototype, "_Common_80", {
                    get: function () {
                        return null == this.__Common_80 && (this.__Common_80 = new M.a), this.__Common_80
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(n.prototype, "_Contacts_81", {
                    get: function () {
                        return null == this.__Contacts_81 && (this.__Contacts_81 = new I.c), this.__Contacts_81
                    }, enumerable: !0, configurable: !0
                }), n.prototype.createInternal = function () {
                    return this._CommonModule_0 = new B.b, this._ErrorHandler_1 = new U.a, this._ConfigToken_2 = null, this._PlatformConfigToken_3 = Bl.b(), this._Platform_4 = fl.b(this.parent.get(x.b), this._PlatformConfigToken_3, this.parent.get(w.B)), this._Config_5 = hl.c(this._ConfigToken_2, this._Platform_4), this._DomController_6 = new W.a(this._Platform_4), this._MenuController_7 = new G.a, this._App_8 = new J.a(this._Config_5, this._Platform_4, this._MenuController_7), this._GestureController_9 = new q.h(this._App_8), this._DeepLinkConfigToken_10 = {
                        links: [{
                            loadChildren: "../pages/rpt11000/rpt11000.module.ngfactory#rpt11000ModulePageNgFactory",
                            name: "rpt11000",
                            segment: "rpt11000",
                            priority: "low",
                            defaultHistory: []
                        }, {
                            loadChildren: "../pages/rpt11001/rpt11001.module.ngfactory#rpt11001ModulePageNgFactory",
                            name: "rpt11001",
                            segment: "rpt11001",
                            priority: "low",
                            defaultHistory: []
                        }, {
                            loadChildren: "../pages/rpt11002/rpt11002.module.ngfactory#rpt11000ModulePageNgFactory",
                            name: "rpt11002",
                            segment: "rpt11002",
                            priority: "low",
                            defaultHistory: []
                        }, {
                            loadChildren: "../pages/rpt11004/rpt11004.module.ngfactory#rpt11004ModulePageNgFactory",
                            name: "rpt11004",
                            segment: "rpt11004",
                            priority: "low",
                            defaultHistory: []
                        }, {
                            loadChildren: "../pages/rpt11005/rpt11005.module.ngfactory#rpt11005ModulePageNgFactory",
                            name: "rpt11005",
                            segment: "rpt11005",
                            priority: "low",
                            defaultHistory: []
                        }, {
                            loadChildren: "../pages/rpt11006/rpt11006.module.ngfactory#rpt11006ModulePageNgFactory",
                            name: "rpt11006",
                            segment: "rpt11006",
                            priority: "low",
                            defaultHistory: []
                        }, {
                            loadChildren: "../pages/rpt11007/rpt11007.module.ngfactory#rpt11007ModulePageNgFactory",
                            name: "rpt11007",
                            segment: "rpt11007",
                            priority: "low",
                            defaultHistory: []
                        }, {
                            loadChildren: "../pages/rpt11008/rpt11008.module.ngfactory#rpt11008ModulePageNgFactory",
                            name: "rpt11008",
                            segment: "rpt11008",
                            priority: "low",
                            defaultHistory: []
                        }, {
                            loadChildren: "../pages/rpt11009/rpt11009.module.ngfactory#rpt11009ModulePageNgFactory",
                            name: "rpt11009",
                            segment: "rpt11009",
                            priority: "low",
                            defaultHistory: []
                        }, {
                            loadChildren: "../pages/rpt11010/rpt11010.module.ngfactory#rpt11010ModulePageNgFactory",
                            name: "rpt11010",
                            segment: "rpt11010",
                            priority: "low",
                            defaultHistory: []
                        }, {
                            loadChildren: "../pages/rpt11011/rpt11011.module.ngfactory#rpt11011ModulePageNgFactory",
                            name: "rpt11011",
                            segment: "rpt11011",
                            priority: "low",
                            defaultHistory: []
                        }, {
                            loadChildren: "../pages/rpt11012/rpt11012.module.ngfactory#rpt11012ModulePageNgFactory",
                            name: "rpt11012",
                            segment: "rpt11012",
                            priority: "low",
                            defaultHistory: []
                        }, {
                            loadChildren: "../pages/rpt11017/rpt11017.module.ngfactory#rpt11017ModulePageNgFactory",
                            name: "rpt11017",
                            segment: "rpt11017",
                            priority: "low",
                            defaultHistory: []
                        }, {
                            loadChildren: "../pages/rpt11018/rpt11018.module.ngfactory#rpt11018ModulePageNgFactory",
                            name: "rpt11018",
                            segment: "rpt11018",
                            priority: "low",
                            defaultHistory: []
                        }, {
                            loadChildren: "../pages/rpt11019/rpt11019.module.ngfactory#rpt11019ModulePageNgFactory",
                            name: "rpt11019",
                            segment: "rpt11019",
                            priority: "low",
                            defaultHistory: []
                        }, {
                            loadChildren: "../pages/rpt11020/rpt11020.module.ngfactory#rpt11020ModulePageNgFactory",
                            name: "rpt11020",
                            segment: "rpt11020",
                            priority: "low",
                            defaultHistory: []
                        }, {
                            loadChildren: "../pages/rpt11021/rpt11021.module.ngfactory#rpt11021ModulePageNgFactory",
                            name: "rpt11021",
                            segment: "rpt11021",
                            priority: "low",
                            defaultHistory: []
                        }, {
                            loadChildren: "../pages/rpt11022/rpt11022.module.ngfactory#rpt11022ModulePageNgFactory",
                            name: "rpt11022",
                            segment: "rpt11022",
                            priority: "low",
                            defaultHistory: []
                        }, {
                            loadChildren: "../pages/rpt11023/rpt11023.module.ngfactory#rpt11023ModulePageNgFactory",
                            name: "rpt11023",
                            segment: "rpt11023",
                            priority: "low",
                            defaultHistory: []
                        }, {
                            loadChildren: "../pages/rpt11024/rpt11024.module.ngfactory#rpt11024ModulePageNgFactory",
                            name: "rpt11024",
                            segment: "rpt11024",
                            priority: "low",
                            defaultHistory: []
                        }, {
                            loadChildren: "../pages/rpt11025/rpt11025.module.ngfactory#rpt11025ModulePageNgFactory",
                            name: "rpt11025",
                            segment: "rpt11025",
                            priority: "low",
                            defaultHistory: []
                        }, {
                            loadChildren: "../pages/rpt11026/rpt11026.module.ngfactory#rpt11026ModulePageNgFactory",
                            name: "rpt11026",
                            segment: "rpt11026",
                            priority: "low",
                            defaultHistory: []
                        }, {
                            loadChildren: "../pages/rpt11027/rpt11027.module.ngfactory#rpt11027ModulePageNgFactory",
                            name: "rpt11027",
                            segment: "rpt11027",
                            priority: "low",
                            defaultHistory: []
                        }, {
                            loadChildren: "../pages/rpt11028/rpt11028.module.ngfactory#rpt11028ModulePageNgFactory",
                            name: "rpt11028",
                            segment: "rpt11028",
                            priority: "low",
                            defaultHistory: []
                        }, {
                            loadChildren: "../pages/rpt11029/rpt11029.module.ngfactory#rpt11029ModulePageNgFactory",
                            name: "rpt11029",
                            segment: "rpt11029",
                            priority: "low",
                            defaultHistory: []
                        }, {
                            loadChildren: "../pages/rpt11030/rpt11030.module.ngfactory#rpt11030ModulePageNgFactory",
                            name: "rpt11030",
                            segment: "rpt11030",
                            priority: "low",
                            defaultHistory: []
                        }]
                    }, this._Compiler_11 = new w.i, this._NgModuleLoader_12 = new V.a(this._Compiler_11), this._ModuleLoader_13 = Ul.c(this._NgModuleLoader_12, this), this._APP_INITIALIZER_14 = [w._24, x.r(this.parent.get(x.i, null), this.parent.get(w.A, null)), Wl.a(this._Config_5), $.b(this._Platform_4, this._DomController_6), el.b(this._Config_5, this._Platform_4, this._DomController_6, this._App_8, this._GestureController_9), Ul.d(this._Config_5, this._DeepLinkConfigToken_10, this._ModuleLoader_13, this.parent.get(w.B))], this._ApplicationInitStatus_15 = new w.d(this._APP_INITIALIZER_14), this._ɵf_16 = new w._11(this.parent.get(w.B), this.parent.get(w._3), this, this._ErrorHandler_1, this.componentFactoryResolver, this._ApplicationInitStatus_15), this._ApplicationRef_17 = this._ɵf_16, this._ApplicationModule_18 = new w.e(this._ApplicationRef_17), this._BrowserModule_19 = new x.a(this.parent.get(x.a, null)), this._ɵba_20 = new A.m, this._FormsModule_21 = new A.e, this._HttpModule_22 = new k.e, this._JsonpModule_23 = new k.h, this._ReactiveFormsModule_24 = new A.l, this._IonicModule_25 = new X.a, this._IonicStorageModule_26 = new D.a, this._AppModule_27 = new F, this._AppRootToken_56 = E, this._APP_BASE_HREF_57 = "/", this._StorageConfigToken_75 = null, this._AppModule_27
                }, n.prototype.getInternal = function (l, n) {
                    return l === B.b ? this._CommonModule_0 : l === w.m ? this._ErrorHandler_1 : l === hl.b ? this._ConfigToken_2 : l === Bl.a ? this._PlatformConfigToken_3 : l === fl.a ? this._Platform_4 : l === hl.a ? this._Config_5 : l === W.a ? this._DomController_6 : l === G.a ? this._MenuController_7 : l === J.a ? this._App_8 : l === q.h ? this._GestureController_9 : l === zl.a ? this._DeepLinkConfigToken_10 : l === w.i ? this._Compiler_11 : l === V.a ? this._NgModuleLoader_12 : l === Ul.b ? this._ModuleLoader_13 : l === w.c ? this._APP_INITIALIZER_14 : l === w.d ? this._ApplicationInitStatus_15 : l === w._11 ? this._ɵf_16 : l === w.f ? this._ApplicationRef_17 : l === w.e ? this._ApplicationModule_18 : l === x.a ? this._BrowserModule_19 : l === A.m ? this._ɵba_20 : l === A.e ? this._FormsModule_21 : l === k.e ? this._HttpModule_22 : l === k.h ? this._JsonpModule_23 : l === A.l ? this._ReactiveFormsModule_24 : l === X.a ? this._IonicModule_25 : l === D.a ? this._IonicStorageModule_26 : l === F ? this._AppModule_27 : l === w.w ? this._LOCALE_ID_28 : l === B.j ? this._NgLocalization_29 : l === w.b ? this._APP_ID_30 : l === w.u ? this._IterableDiffers_31 : l === w.v ? this._KeyValueDiffers_32 : l === x.c ? this._DomSanitizer_33 : l === w.L ? this._Sanitizer_34 : l === x.f ? this._HAMMER_GESTURE_CONFIG_35 : l === x.d ? this._EVENT_MANAGER_PLUGINS_36 : l === x.e ? this._EventManager_37 : l === x.n ? this._ɵDomSharedStylesHost_38 : l === x.m ? this._ɵDomRendererFactory2_39 : l === w.J ? this._RendererFactory2_40 : l === x.q ? this._ɵSharedStylesHost_41 : l === w.Q ? this._Testability_42 : l === x.h ? this._Meta_43 : l === x.j ? this._Title_44 : l === A.p ? this._ɵi_45 : l === k.c ? this._BrowserXhr_46 : l === k.j ? this._ResponseOptions_47 : l === k.l ? this._XSRFStrategy_48 : l === k.k ? this._XHRBackend_49 : l === k.i ? this._RequestOptions_50 : l === k.d ? this._Http_51 : l === k.q ? this._ɵg_52 : l === k.f ? this._JSONPBackend_53 : l === k.g ? this._Jsonp_54 : l === A.d ? this._FormBuilder_55 : l === Gl.a ? this._AppRootToken_56 : l === B.a ? this._APP_BASE_HREF_57 : l === Y.a ? this._AlertController_59 : l === $.a ? this._Events_60 : l === Z.a ? this._Form_61 : l === Q.a ? this._Haptic_62 : l === ll.a ? this._Keyboard_63 : l === nl.a ? this._LoadingController_64 : l === B.e ? this._LocationStrategy_65 : l === B.d ? this._Location_66 : l === zl.b ? this._UrlSerializer_67 : l === dl.a ? this._DeepLinker_68 : l === el.a ? this._TapClick_72 : l === tl.a ? this._ToastController_73 : l === ol.a ? this._TransitionController_74 : l === Fl.b ? this._StorageConfigToken_75 : l === Fl.a ? this._Storage_76 : l === N.a ? this._StatusBar_77 : l === P.a ? this._SplashScreen_78 : l === O.a ? this._CommonService_79 : l === M.a ? this._Common_80 : l === I.c ? this._Contacts_81 : n
                }, n.prototype.destroyInternal = function () {
                    this._ɵf_16.ngOnDestroy(), this.__ɵDomSharedStylesHost_38 && this._ɵDomSharedStylesHost_38.ngOnDestroy()
                }, n
            }(w._5), F);
        Object(w.X)(), Object(x.k)().bootstrapModuleFactory(ql)
    }, 23: function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", function () {
            return Common
        });
        var Common = function () {
            function Common() {
                this.wsCache = new WebStorageCache
            }

            return Common.prototype.contains = function (l, n) {
                for (var e = l.length; e--;) if (l[e] === n) return e;
                return -1
            }, Common.prototype.getSchemaList = function (l) {
                for (var n = [], e = 0, t = (l = this.IsOneDataByArray(l)).length; e < t; e++) {
                    var o = l[e];
                    if (0 == n.length) n.push(o); else {
                        var u = this.getParent(o, n);
                        u && (u.root ? u.root.push(o) : u.root = [o])
                    }
                }
                return n
            }, Common.prototype.getParent = function (l, n) {
                if (n) for (var e = 0, t = n.length; e < t; e++) {
                    var o = n[e];
                    if (o.DeptIDShortPath + "\\" + l.DeptID == l.DeptIDShortPath) return o;
                    if (o.root && l.DeptIDShortPath.indexOf(o.DeptIDShortPath) >= 0) return this.getParent(l, o.root)
                }
            }, Common.prototype.setCache = function (l, n, e) {
                try {
                    this.wsCache.set(l, n, {exp: e})
                } catch (l) {
                    "QuotaExceededError" == l.name && (alert("历史缓存数据超出界限，请退出重新访问系统，谢谢！"), this.wsCache.clear())
                }
            }, Common.prototype.getCache = function (l) {
                return this.wsCache.get(l)
            }, Common.prototype.getUrlParam = function (l) {
                var n = new RegExp("(^|&)" + l + "=([^&]*)(&|$)"), e = window.location.search.substr(1).match(n);
                return null != e ? decodeURI(e[2]) : null
            }, Common.prototype.getTemplateUrlForReport = function (l) {
                return "templates/rpt" + l.reportid + ".html"
            }, Common.prototype.replaceStr = function (input, param1, param2, IsAll) {
                var name = "";
                if (IsAll) {
                    var reg = eval("/" + param1 + "/g");
                    name = input.replace(reg, param2)
                } else name = input.replace(param1, param2);
                return name
            }, Common.prototype.DealDateForWeek = function (l, n) {
                var e = new Date(l.substr(0, 4) + "/" + l.substr(4, 2) + "/" + l.substr(6, 2)).getDay();
                if (n) return (t = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"))[e];
                var t = new Array("(日)", "(一)", "(二)", "(三)", "(四)", "(五)", "(六)");
                return t[e]
            }, Common.prototype.DateTimeByType = function (l) {
                switch (l) {
                    case"今日":
                    case"昨日":
                        return 1;
                    case"本周":
                    case"上周":
                        return 2;
                    case"本月":
                    case"上月":
                        return 3;
                    case"本季":
                    case"上季":
                        return 4;
                    case"本年":
                    case"去年":
                        return 5;
                    default:
                        return 1
                }
            }, Common.prototype.getWeekNum = function (l) {
                var n = 0, e = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
                if (e[1] = Math.round(l.getYear() / 4) == l.getYear() / 4 ? 29 : 28, 0 == l.getMonth()) n += l.getDate(); else {
                    for (var t = l.getMonth(), o = 1; o <= t; o++) n += e[o - 1];
                    n += l.getDate()
                }
                var u = Math.ceil(n / 7);
                return console.log(u), u
            }, Common.prototype.getNumWeekstartDay = function (l, n) {
                var e, t, o = l.getFullYear(), u = this.formatDate(l.getMonth() + 1),
                    i = this.formatDate(l.getDate()) - l.getDay() - 7 * n;
                return t = u - 1, (e = new Date(o, t, i)).getFullYear().toString() + this.formatDate(e.getMonth() + 1).toString() + this.formatDate(e.getDate()).toString()
            }, Common.prototype.getNumWeekendDay = function (l, n) {
                var e, t, o = l.getFullYear(), u = this.formatDate(l.getMonth() + 1),
                    i = this.formatDate(l.getDate()) - l.getDay() - 1 * n;
                return t = u - 1, (e = new Date(o, t, i)).getFullYear().toString() + this.formatDate(e.getMonth() + 1).toString() + this.formatDate(e.getDate()).toString()
            }, Common.prototype.formatDate = function (l) {
                return l < 10 && (l = "0" + l), l
            }, Common.prototype.getTimeData = function (l, n) {
                var e, t, o, u, i, r, a = [], s = new Date, c = s.getFullYear(), _ = this.formatDate(s.getMonth() + 1),
                    p = this.formatDate(s.getDate()), h = this.formatDate(s.getMonth()),
                    f = c.toString() + _.toString() + p.toString(),
                    d = (new Date(c, h, 0).getDate(), Math.floor(_ % 3 == 0 ? _ / 3 : _ / 3 + 1)), m = d,
                    g = s.getTime() - 864e5, y = new Date;
                y.setTime(g);
                var S = this.formatDate(y.getMonth() + 1), b = this.formatDate(y.getDate()),
                    v = y.getFullYear() + S.toString() + b.toString(), C = this.getNumWeekstartDay(s, 0),
                    x = this.getNumWeekstartDay(s, 1), w = this.getNumWeekendDay(s, 1), I = this.getWeekNum(s);
                console.log(I + "本周");
                new Date(c - 1, 11, 31);
                var P = I;
                P = P -= 1, console.log(P + "上周");
                var N, A, k, D, M, O = c.toString() + _.toString() + "01", T = c + "0101", L = c + "0101",
                    R = c.toString() + "0701";
                1 == n ? (N = C == f ? f : v, A = O == f ? f : v, k = T == f ? f : v, D = L == f ? f : v, M = R == f ? f : v) : (N = f, A = f, k = f, D = f, M = f);
                var E, H, j, z, F, B, U, W, G, J, q = _.toString() + p.toString();
                q < "0630" ? (E = M, j = c.toString() + "0101", z = M) : q <= "1231" && q >= "0630" && (E = c.toString() + "0101-" + c.toString() + "0630", j = c.toString() + "0101", z = c.toString() + "0630"), q <= "1231" && q >= "0701" && (H = c + "0701-" + M, F = c.toString() + "0701", B = M), 1 == m ? (U = c + "0101", W = k, G = c - 1 + "1001", J = c - 1 + "1231") : 2 == m ? (U = c + "0401", W = k, G = c + "0101", J = c + "0331") : 3 == m ? (U = c + "0701", W = k, G = c + "0401", J = c + "0630") : 4 == m && (U = c + "1001", W = k, G = c + "0701", J = c + "0930");
                for (var V = 0; V < l.length; V++) {
                    switch (l[V]) {
                        case"今日":
                            e = 1, t = l[V], u = f, o = f, i = f, r = f;
                            break;
                        case"昨日":
                            e = 1, t = l[V], u = y.getFullYear().toString() + S.toString() + b.toString(), o = y.getFullYear().toString() + S.toString() + b.toString(), i = y.getFullYear().toString() + S.toString() + b.toString(), r = y.getFullYear().toString() + S.toString() + b.toString();
                            break;
                        case"本周":
                            e = 2, t = l[V], u = c.toString() + (I > 10 ? I.toString() : "0" + I.toString()), o = C + " - " + N, i = C, r = N;
                            break;
                        case"上周":
                            e = 2, t = l[V], u = c.toString() + (P > 10 ? P.toString() : "0" + P.toString()), o = x + " - " + w, i = x, r = w;
                            break;
                        case"本月":
                            e = 3, t = l[V], u = c.toString() + _.toString(), o = c.toString() + _.toString() + "01 - " + A, i = c.toString() + _.toString() + "01", r = A;
                            break;
                        case"上月":
                            e = 3, t = l[V], u = 201712, o = "20171201 - 20171231", i = 20171201, r = 20171231;
                            break;
                        case"本季":
                            e = 4, t = l[V], u = c + "0" + d, o = "第" + d + "季度", i = U, r = W;
                            break;
                        case"上季":
                            e = 4, t = l[V], u = (1 == d ? c - 1 : c) + "0" + (1 == d ? 4 : d - 1), o = "第" + (1 == d ? 4 : d - 1) + "季度", i = G, r = J;
                            break;
                        case"本年":
                            e = 5, t = l[V], u = c, o = c + "0101 - " + D, i = c + "0101", r = D;
                            break;
                        case"上年":
                            e = 5, t = l[V], u = c - 1, o = c - 1 + "0101 - " + (c - 1) + "1231", i = c - 1 + "0101", r = c - 1 + "1231";
                            break;
                        case"上半年":
                            e = 6, t = l[V], u = E, o = E, i = j, r = z;
                            break;
                        case"下半年":
                            e = 6, t = l[V], u = H, o = H, i = F, r = B
                    }
                    a.push({CalID: e, CalName: t, CalValue: u, CalPeriod: o, DateStart: i, DateEnd: r})
                }
                return a
            }, Common.prototype.DataCharType = function (l) {
                for (var n = !0, e = 0; e < l.length; e++) if (2 == l[e].mode_id) {
                    if (n = !1, 3 == l[e].option_id) return 3;
                    if (2 == l[e].option_id) return 2;
                    if (1 == l[e].option_id) return 1
                }
                if (n) return 0
            }, Common.prototype.isCharDataShow = function (l, n) {
                for (var e = 0; e < l.length; e++) if (2 == l[e].mode_id) if (3 == l[e].option_id) echarts.init(document.getElementById("com_pie" + n)); else if (2 == l[e].option_id) echarts.init(document.getElementById("com_bar" + n)); else if (1 == l[e].option_id) echarts.init(document.getElementById("com_line" + n))
            }, Common.prototype.IsOneDataByArray = function (l) {
                return null != l && void 0 != l && l instanceof Array != 1 ? (l = "[" + JSON.stringify(l) + "]", JSON.parse(l)) : l
            }, Common.prototype.ShowPieChart = function (l) {
                var n = [], e = [];
                if (l.length > 0) for (var t = 0; t < l.length; t++) n.push(l[t].pieName), e.push({
                    value: l[t].pieNumber,
                    name: l[t].pieName
                });
                return {
                    tooltip: {show: !0, trigger: "item", formatter: "{b} : {c}"},
                    legend: {
                        y: "bottom",
                        textStyle: {color: "#fff", align: "left", fontSize: 12, fontWeight: 100},
                        padding: [0, 0, 16, 0],
                        itemWidth: 10,
                        itemHeight: 10,
                        data: n
                    },
                    series: [{
                        name: "类型",
                        type: "pie",
                        radius: "55%",
                        center: ["52%", "41%"],
                        data: e,
                        itemStyle: {
                            normal: {
                                color: function (l) {
                                    return ["#db6d3d", "#e3c162", "#3f7cd8", "#9ec4c5", "#a82491", "#bdb055", "#dc4782", "#4fcbe5", "#dd8165", "#80828a", "#ee5cc0", "#a39bba"][l.dataIndex]
                                },
                                label: {
                                    show: !0,
                                    formatter: "{d}%",
                                    textStyle: {color: "#FFF", fontSize: 12, fontWeight: 500}
                                }
                            }
                        }
                    }]
                }
            }, Common.prototype.ShowLineChartweixin = function (l) {
                var n = [];
                if (l.yAxis.length > 0) {
                    l.yAxis[0].columnName = "        " + l.yAxis[0].columnName;
                    for (o = 0; o < l.yAxis.length; o++) n.push({
                        type: "value",
                        name: l.yAxis[o].columnName,
                        min: 0,
                        max: l.yAxis[o].maxNumber,
                        interval: l.yAxis[o].interval,
                        splitLine: {lineStyle: {type: "dashed", color: "#70799d"}},
                        axisTick: {show: !1},
                        axisLabel: {formatter: "{value} ", textStyle: {color: "#fff", fontSize: 10}, margin: 5},
                        axisLine: {lineStyle: {color: "#70799d", width: 1, type: "dashed"}}
                    })
                }
                var e = [];
                if (l.fansNumber.length > 0) for (var t = 0, o = 0; o < l.fansNumber.length; o++) n.length > 1 && (t = o), e.push({
                    barWidth: "10",
                    name: l.fansNumber[o].columnName,
                    type: "line",
                    yAxisIndex: t,
                    symbol: "none",
                    lineStyle: {normal: {width: 1}},
                    itemStyle: {normal: {color: l.fansNumber[o].colors, width: 1}},
                    data: l.fansNumber[o].datas
                });
                return {
                    color: ["#ff5c41", "#f8d05e"],
                    title: {textStyle: {color: "#fff", align: "left", fontSize: 14, fontWeight: 100}},
                    tooltip: {trigger: "axis", axisPointer: {lineStyle: {color: "#fff"}}},
                    legend: {
                        y: "bottom",
                        data: [{
                            name: l.legend[0],
                            icon: "roundRect",
                            textStyle: {color: "#fff", fontSize: 12}
                        }, {name: l.legend[1], icon: "roundRect", textStyle: {color: "#fff", fontSize: 12}}],
                        textStyle: {color: "#fff", align: "left", fontSize: 12, fontWeight: 100},
                        itemWidth: 10,
                        itemHeight: 10
                    },
                    grid: {top: "35", left: "15%", right: "13%", bottom: "55"},
                    toolbox: {},
                    xAxis: {
                        type: "category",
                        data: l.xDataA,
                        splitLine: {lineStyle: {type: "dashed", color: "#70799d"}, interval: 5},
                        axisLabel: {show: !0, textStyle: {color: "#fff", align: "left", fontSize: 10}},
                        axisLine: {lineStyle: {color: "#70799d", width: 1, type: "dashed"}},
                        axisTick: {show: !1}
                    },
                    yAxis: n,
                    series: e
                }
            }, Common.prototype.ShowLineChart = function (l) {
                var n = [];
                if (l.yAxis.length > 0) {
                    l.yAxis[0].columnName = " " + l.yAxis[0].columnName;
                    for (o = 0; o < l.yAxis.length; o++) n.push({
                        type: "value",
                        name: l.yAxis[o].columnName,
                        min: 0,
                        max: l.yAxis[o].maxNumber,
                        interval: l.yAxis[o].interval,
                        splitLine: {lineStyle: {type: "dashed", color: "#70799d"}},
                        axisTick: {show: !1},
                        axisLabel: {formatter: "{value} ", textStyle: {color: "#fff", fontSize: 10}, margin: 5},
                        axisLine: {lineStyle: {color: "#70799d", width: 1, type: "dashed"}}
                    })
                }
                var e = [];
                if (l.series.length > 0) for (var t = 0, o = 0; o < l.series.length; o++) n.length > 1 && (t = o), e.push({
                    barWidth: "10",
                    name: l.series[o].columnName,
                    type: "line",
                    yAxisIndex: t,
                    symbol: "none",
                    lineStyle: {normal: {width: 1}},
                    itemStyle: {normal: {color: l.series[o].colors, width: 1}},
                    data: l.series[o].datas
                });
                return {
                    color: ["#ff5c41", "#f8d05e"],
                    title: {textStyle: {color: "#fff", align: "left", fontSize: 14, fontWeight: 100}},
                    tooltip: {trigger: "axis", axisPointer: {lineStyle: {color: "#fff"}}},
                    legend: {
                        y: "bottom",
                        data: [{
                            name: l.legend[0],
                            icon: "roundRect",
                            textStyle: {color: "#fff", fontSize: 12}
                        }, {name: l.legend[1], icon: "roundRect", textStyle: {color: "#fff", fontSize: 12}}],
                        textStyle: {color: "#fff", align: "left", fontSize: 12, fontWeight: 100},
                        itemWidth: 10,
                        itemHeight: 10
                    },
                    grid: {top: "35", left: "15%", right: "13%", bottom: "55"},
                    toolbox: {},
                    xAxis: {
                        type: "category",
                        data: l.xData,
                        splitLine: {lineStyle: {type: "dashed", color: "#70799d"}, interval: 5},
                        axisLabel: {show: !0, textStyle: {color: "#fff", align: "left", fontSize: 10}},
                        axisLine: {lineStyle: {color: "#70799d", width: 1, type: "dashed"}},
                        axisTick: {show: !1}
                    },
                    yAxis: n,
                    series: e
                }
            }, Common.prototype.ShowOneLineChart = function (l) {
                var n = [];
                if (l.yAxis.length > 0) {
                    l.yAxis[0].columnName = l.yAxis[0].columnName;
                    for (o = 0; o < l.yAxis.length; o++) n.push({
                        type: "value",
                        name: l.yAxis[o].columnName,
                        splitLine: {lineStyle: {type: "dashed", color: "#70799d"}},
                        axisTick: {show: !1},
                        axisLabel: {formatter: "{value} ", textStyle: {color: "#fff", fontSize: 10}, margin: 5},
                        axisLine: {lineStyle: {color: "#70799d", width: 1, type: "dashed"}}
                    })
                }
                var e = [];
                if (l.series.length > 0) for (var t = 0, o = 0; o < l.series.length; o++) n.length > 1 && (t = o), e.push({
                    barWidth: "10",
                    name: l.series[o].columnName,
                    type: "line",
                    yAxisIndex: t,
                    symbol: "none",
                    lineStyle: {normal: {width: 1}},
                    itemStyle: {normal: {color: l.series[o].colors, width: 1}},
                    data: l.series[o].datas
                });
                return {
                    color: ["#ff5c41", "#f8d05e"],
                    title: {textStyle: {color: "#fff", align: "left", fontSize: 10, fontWeight: 100}},
                    tooltip: {trigger: "axis", axisPointer: {lineStyle: {color: "#fff"}}},
                    legend: {
                        bottom: 5,
                        data: [{
                            name: l.legend[0],
                            icon: "roundRect",
                            textStyle: {color: "#fff", fontSize: 12}
                        }, {name: l.legend[1], icon: "roundRect", textStyle: {color: "#fff", fontSize: 12}}],
                        textStyle: {color: "#fff", align: "left", fontSize: 12, fontWeight: 100},
                        itemWidth: 10,
                        itemHeight: 10
                    },
                    grid: {top: "35", left: "15%", right: "5%", bottom: "55"},
                    toolbox: {},
                    xAxis: {
                        type: "category",
                        data: l.xData,
                        splitLine: {lineStyle: {type: "dashed", color: "#70799d"}, interval: 5},
                        axisLabel: {show: !0, textStyle: {color: "#fff", align: "left", fontSize: 10}},
                        axisLine: {lineStyle: {color: "#70799d", width: 1, type: "dashed"}},
                        axisTick: {show: !1}
                    },
                    yAxis: n,
                    series: e
                }
            }, Common.prototype.ShowLineChartSty = function (l) {
                var n = [];
                if (l.yAxis.length > 0) {
                    l.yAxis[0].columnName = " " + l.yAxis[0].columnName;
                    for (o = 0; o < l.yAxis.length; o++) n.push({
                        type: "value",
                        name: l.yAxis[o].columnName,
                        min: 0,
                        max: l.yAxis[o].maxNumber,
                        interval: l.yAxis[o].interval,
                        splitLine: {lineStyle: {type: "dashed", color: "#70799d"}},
                        axisTick: {show: !1},
                        axisLabel: {formatter: "{value} ", textStyle: {color: "#fff", fontSize: 10}, margin: 5},
                        axisLine: {lineStyle: {color: "#70799d", width: 1, type: "dashed"}}
                    })
                }
                var e = [];
                if (l.series.length > 0) for (var t = 0, o = 0; o < l.series.length; o++) n.length > 1 && (t = o), e.push({
                    barWidth: "10",
                    name: l.series[o].columnName,
                    type: "line",
                    yAxisIndex: t,
                    symbol: "none",
                    lineStyle: {normal: {width: 1}},
                    itemStyle: {normal: {color: l.series[o].colors, width: 1}},
                    data: l.series[o].datas
                });
                return {
                    color: ["#ff5c41", "#f8d05e"],
                    title: {textStyle: {color: "#fff", align: "left", fontSize: 14, fontWeight: 100}},
                    tooltip: {trigger: "axis", axisPointer: {lineStyle: {color: "#fff"}}},
                    legend: {
                        y: "bottom",
                        data: [{
                            name: l.legend[0],
                            icon: "roundRect",
                            textStyle: {color: "#fff", fontSize: 12}
                        }, {
                            name: l.legend[1],
                            icon: "roundRect",
                            textStyle: {color: "#fff", fontSize: 12}
                        }, {
                            name: l.legend[2],
                            icon: "roundRect",
                            textStyle: {color: "#fff", fontSize: 12}
                        }, {name: l.legend[3], icon: "roundRect", textStyle: {color: "#fff", fontSize: 12}}],
                        textStyle: {color: "#fff", align: "left", fontSize: 12, fontWeight: 100},
                        itemWidth: 10,
                        itemHeight: 10
                    },
                    grid: {top: "35", left: "15%", right: "13%", bottom: "55"},
                    toolbox: {},
                    xAxis: {
                        type: "category",
                        data: l.xData,
                        splitLine: {lineStyle: {type: "dashed", color: "#70799d"}, interval: 5},
                        axisLabel: {show: !0, textStyle: {color: "#fff", align: "left", fontSize: 10}},
                        axisLine: {lineStyle: {color: "#70799d", width: 1, type: "dashed"}},
                        axisTick: {show: !1}
                    },
                    yAxis: n,
                    series: e
                }
            }, Common.prototype.ShowOneLineChartCom = function (l) {
                var n = [];
                if (l.yAxis.length > 0) {
                    l.yAxis[0].columnName = l.yAxis[0].columnName;
                    for (o = 0; o < l.yAxis.length; o++) n.push(l.yAxis[o].maxNumber ? {
                        type: "value",
                        name: l.yAxis[o].columnName,
                        min: 0,
                        max: l.yAxis[o].maxNumber,
                        interval: l.yAxis[o].interval,
                        splitLine: {lineStyle: {type: "dashed", color: "#70799d"}},
                        axisTick: {show: !1},
                        axisLabel: {formatter: "{value} ", textStyle: {color: "#fff", fontSize: 10}, margin: 5},
                        axisLine: {lineStyle: {color: "#70799d", width: 1, type: "dashed"}}
                    } : {
                        type: "value",
                        name: l.yAxis[o].columnName,
                        splitLine: {lineStyle: {type: "dashed", color: "#70799d"}},
                        axisTick: {show: !1},
                        axisLabel: {formatter: "{value} ", textStyle: {color: "#fff", fontSize: 10}, margin: 5},
                        axisLine: {lineStyle: {color: "#70799d", width: 1, type: "dashed"}}
                    })
                }
                var e = [];
                if (l.series.length > 0) for (var t = 0, o = 0; o < l.series.length; o++) n.length > 1 && (t = o), e.push({
                    barWidth: "10",
                    name: l.series[o].columnName,
                    type: "line",
                    yAxisIndex: t,
                    symbol: "none",
                    lineStyle: {normal: {width: 1}},
                    itemStyle: {normal: {color: l.series[o].colors, width: 1}},
                    data: l.series[o].datas
                });
                var u = [];
                if (l.legend.length > 0) for (o = 0; o < l.legend.length; o++) u.push({
                    name: l.legend[o],
                    icon: "roundRect",
                    textStyle: {color: "#fff", fontSize: 12}
                });
                return {
                    color: ["#ff5c41", "#f8d05e"],
                    title: {textStyle: {color: "#fff", align: "left", fontSize: 10, fontWeight: 100}},
                    tooltip: {trigger: "axis", axisPointer: {lineStyle: {color: "#fff"}}},
                    legend: {
                        bottom: 3,
                        data: u,
                        textStyle: {color: "#fff", align: "left", fontSize: 12, fontWeight: 100},
                        itemWidth: 10,
                        itemHeight: 10
                    },
                    grid: l.gridInfo,
                    toolbox: l.toolboxInfo,
                    xAxis: {
                        type: "category",
                        data: l.xData,
                        splitLine: {lineStyle: {type: "dashed", color: "#70799d"}, interval: 5},
                        axisLabel: l.axisLabelInfo,
                        axisLine: l.axisLineInfo,
                        axisTick: {show: !1}
                    },
                    yAxis: n,
                    series: e
                }
            }, Common.prototype.ShowColumnChart = function (l) {
                var n = [];
                if (l.yAxis.length > 0) {
                    l.yAxis[0].columnName = "        " + l.yAxis[0].columnName;
                    for (t = 0; t < l.yAxis.length; t++) n.push({
                        type: "value",
                        name: l.yAxis[t].columnName,
                        min: 0,
                        max: l.yAxis[t].maxNumber,
                        interval: l.yAxis[t].interval,
                        splitLine: {lineStyle: {type: "dashed", color: "#70799d"}},
                        axisTick: {show: !1},
                        axisLabel: {
                            formatter: "{value} ",
                            inside: !0,
                            textStyle: {color: "#fff", fontSize: 10},
                            margin: 0
                        },
                        axisLine: {lineStyle: {color: "#70799d", width: 1, type: "dashed"}}
                    })
                }
                var e = [];
                if (l.series.length > 0) for (var t = 0; t < l.series.length; t++) e.push({
                    barWidth: "10",
                    name: l.series[t].columnName,
                    type: "bar",
                    yAxisIndex: t,
                    itemStyle: {normal: {color: l.series[t].colors}},
                    data: l.series[t].datas
                });
                var o = Math.ceil(l.xData.length / 3);
                o = Math.ceil(100 / o);
                return {
                    title: {textStyle: {color: "#fff", align: "left", fontSize: 14, fontWeight: 100}},
                    tooltip: {trigger: "axis"},
                    legend: {
                        data: l.legend,
                        y: "bottom",
                        textStyle: {color: "#fff", align: "right", fontSize: 10, fontWeight: 100},
                        padding: [0, 0, 10, 0],
                        itemWidth: 10,
                        itemHeight: 10
                    },
                    grid: {top: "40", left: "10%", right: "10%", bottom: "80"},
                    toolbox: {},
                    dataZoom: [{
                        type: "inside",
                        show: !0,
                        start: 0,
                        end: o,
                        backgroundColor: "#384064",
                        borderColor: "#fff",
                        fillerColor: "#fff",
                        handleSize: "100%",
                        top: "270",
                        bottom: "33",
                        textStyle: {color: "#384064", fontSize: 8},
                        startValue: 300,
                        endValue: 100
                    }, {
                        type: "slider",
                        show: !0,
                        start: 0,
                        end: o,
                        backgroundColor: "#384064",
                        borderColor: "#fff",
                        fillerColor: "#fff",
                        handleSize: "100%",
                        top: "270",
                        bottom: "33",
                        textStyle: {color: "#384064", fontSize: 8},
                        startValue: 300,
                        endValue: 100
                    }],
                    xAxis: {
                        type: "category",
                        data: l.xData,
                        splitLine: {lineStyle: {type: "dashed", color: "#70799d"}},
                        axisLabel: {show: !0, textStyle: {color: "#fff", width: 1, fontSize: 10}},
                        axisLine: {lineStyle: {color: "#70799d", width: 1, type: "dashed"}},
                        axisTick: {show: !1}
                    },
                    yAxis: n,
                    series: e
                }
            }, Common.prototype.ShowLandscapeColumnChart = function (l) {
                var n = [];
                if (l.xAxis.length > 0) {
                    l.xAxis[0].columnName = l.xAxis[0].columnName;
                    for (t = 0; t < l.xAxis.length; t++) n.push({
                        type: "value",
                        name: l.xAxis[t].columnName,
                        min: l.xAxis[t].minNumber,
                        max: l.xAxis[t].maxNumber,
                        interval: l.xAxis[t].interval,
                        splitLine: {lineStyle: {type: "dashed", color: "#70799d"}},
                        axisTick: {show: !1},
                        axisLabel: {formatter: "{value} ", textStyle: {color: "#fff", fontSize: 10}, margin: 5},
                        axisLine: {lineStyle: {color: "#70799d", width: 1, type: "dashed"}},
                        nameLocation: "start",
                        nameTextStyle: {verticalAlign: "bottom"}
                    })
                }
                var e = [];
                if (l.series.length > 0) for (var t = 0; t < l.series.length; t++) e.push({
                    name: l.series[t].columnName,
                    type: "bar",
                    xAxisIndex: l.series[t].xAxisIndex,
                    itemStyle: {normal: {color: l.series[t].colors}},
                    barWidth: l.series[t].barWidth,
                    data: l.series[t].datas
                });
                return {
                    tooltip: {trigger: "axis", axisPointer: {type: "shadow"}},
                    legend: {
                        data: l.legend.legendName,
                        y: l.legend.position,
                        textStyle: {color: "#fff", align: "right", fontSize: 10, fontWeight: 100},
                        padding: [20, 0, 10, 0],
                        itemWidth: 10,
                        itemHeight: 10
                    },
                    grid: {
                        left: l.grid.left,
                        right: l.grid.right,
                        bottom: l.grid.bottom,
                        top: l.grid.top,
                        containLabel: !0
                    },
                    yAxis: [{
                        type: "category",
                        axisTick: {show: !1},
                        splitLine: {lineStyle: {type: "dashed", color: "#70799d"}},
                        axisLabel: {show: !0, textStyle: {color: "#fff", width: 1, fontSize: 10}},
                        axisLine: {lineStyle: {color: "#70799d", width: 1, type: "dashed"}},
                        data: l.yData
                    }],
                    xAxis: n,
                    series: e
                }
            }, Common.prototype.ShowColumnLineChartCom = function (l) {
                var n = [];
                if (l.yAxis.length > 0) {
                    l.yAxis[0].columnName = "  " + l.yAxis[0].columnName;
                    for (t = 0; t < l.yAxis.length; t++) n.push({
                        type: "value",
                        name: l.yAxis[t].columnName,
                        min: l.yAxis[t].minNumber,
                        max: l.yAxis[t].maxNumber,
                        interval: l.yAxis[t].interval,
                        splitLine: {lineStyle: {type: "dashed", color: "#70799d"}},
                        axisTick: {show: !1},
                        axisLabel: {formatter: "{value} ", textStyle: {color: "#fff", fontSize: 10}, margin: 0},
                        axisLine: {lineStyle: {color: "#70799d", width: 1, type: "dashed"}}
                    })
                }
                var e = [];
                if (l.series.length > 0) for (var t = 0; t < l.series.length; t++) e.push({
                    name: l.series[t].columnName,
                    type: l.series[t].typeinfo,
                    data: l.series[t].datas,
                    yAxisIndex: l.series[t].yIndex,
                    barWidth: "10",
                    symbol: "none",
                    lineStyle: {normal: {width: 1}},
                    itemStyle: {normal: {color: l.series[t].colors}}
                });
                return {
                    tooltip: {trigger: "axis", axisPointer: {lineStyle: {color: "#fff"}}},
                    legend: {
                        data: l.legend,
                        y: "bottom",
                        textStyle: {color: "#fff", align: "left", fontSize: 12, fontWeight: 100},
                        padding: [0, 0, 15, 0],
                        itemWidth: 10,
                        itemHeight: 10
                    },
                    dataZoom: l.dataZoom,
                    grid: {
                        left: l.grid.left,
                        right: l.grid.right,
                        bottom: l.grid.bottom,
                        top: l.grid.top,
                        containLabel: !0
                    },
                    xAxis: [{
                        type: "category",
                        data: l.xData,
                        splitLine: {lineStyle: {type: "dashed", color: "#70799d"}},
                        axisLabel: {show: !0, textStyle: {color: "#fff", width: 1, fontSize: 10}},
                        axisLine: {lineStyle: {color: "#70799d", width: 1, type: "dashed"}},
                        axisTick: {show: !1}
                    }],
                    yAxis: n,
                    series: e
                }
            }, Common.prototype.ShowOneCloumnChart = function (l) {
                return {
                    backgroundColor: "#485381",
                    tooltip: {trigger: "axis", axisPointer: {lineStyle: {color: "#fff"}}},
                    legend: {
                        data: ["在期客户数"],
                        y: "bottom",
                        textStyle: {color: "#fff", align: "left", fontSize: 12, fontWeight: 100},
                        padding: [0, 0, 10, 0],
                        itemWidth: 10,
                        itemHeight: 10
                    },
                    xAxis: [{
                        type: "category",
                        data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
                        splitLine: {lineStyle: {type: "dashed", color: "#70799d"}},
                        axisLabel: {show: !0, textStyle: {color: "#fff", width: 1, fontSize: 10}},
                        axisLine: {lineStyle: {color: "#70799d", width: 1, type: "dashed"}},
                        axisTick: {show: !1}
                    }],
                    yAxis: [{
                        type: "value",
                        name: "在期客户数",
                        min: 0,
                        max: 250,
                        interval: 50,
                        splitLine: {lineStyle: {type: "dashed", color: "#70799d"}},
                        axisTick: {show: !1},
                        axisLabel: {formatter: "{value} ", textStyle: {color: "#fff", fontSize: 10}, margin: 0},
                        axisLine: {lineStyle: {color: "#70799d", width: 1, type: "dashed"}}
                    }],
                    grid: {top: "40", left: "40", right: "40", bottom: "50"},
                    series: [{
                        name: "在期客户数",
                        type: "bar",
                        data: [2, 4.9, 7, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20, 6.4, 3.3],
                        barWidth: "10",
                        yAxisIndex: 0,
                        itemStyle: {normal: {color: "#ff5c41"}}
                    }]
                }
            }, Common.prototype.ShowTablMessage = function (l) {
                for (var n = function (l) {
                    var n = function (l, n) {
                            for (var e = n - ("" + l).length, t = ""; e-- > 0;) t += "0";
                            return t + l
                        }, e = Math.floor(l / 3600), t = Math.floor(l % 3600 / 60), o = l % 60, u = n(e, 2), i = n(t, 2),
                        r = n(o, 2);
                    return "hh:mm:ss".replace(/hh/, u).replace(/mm/, i).replace(/ss/, r)
                }, e = [], t = 0; t < l.timedata.length; t++) e.push(Math.round(l.timedata[t] / 60));
                var o = Math.max.apply(null, e), u = Math.max.apply(null, l.countdata);
                o = 50 * Math.ceil(o / 50), u = 50 * Math.ceil(u / 50);
                var i = !0;
                return {
                    backgroundColor: "#4C547B",
                    color: ["#ff5c41 ", "#f8d05e"],
                    tooltip: {
                        showContent: i = !(l.timedata.length <= 0),
                        show: i,
                        trigger: "axis",
                        axisPointer: {type: "line", lineStyle: {color: "#fff"}},
                        formatter: function (t) {
                            var o = "";
                            o += t[0].name;
                            for (var u = 0; u < e.length; u++) if (l.date[u].value == t[0].name) {
                                o += " (" + l.week[u] + ")", o += "<br />", o += "有效时长:" + n(l.timedata[u]);
                                break
                            }
                            return o += "<br />", o += t[1].seriesName + ":" + t[1].value + "<br />"
                        }
                    },
                    legend: {
                        show: i,
                        top: "bottom",
                        selectedMode: !1,
                        data: [{
                            name: "有效时长",
                            icon: "roundRect",
                            textStyle: {color: "#fff", fontSize: 12}
                        }, {name: "有效次数", icon: "roundRect", textStyle: {color: "#fff", fontSize: 12}}],
                        textStyle: {color: "#fff", align: "left", fontSize: 14},
                        itemWidth: 10,
                        itemHeight: 10
                    },
                    grid: {top: "40px", left: "40px", right: "30px", bottom: "60px"},
                    xAxis: {
                        type: "category",
                        position: "bottom",
                        boundaryGap: !1,
                        splitLine: {show: !1},
                        data: l.date,
                        axisLine: {show: !0, lineStyle: {color: "#6f789c", width: 2, type: "solid"}},
                        axisTick: {show: !1}
                    },
                    yAxis: [{
                        name: "有效时长(分钟)",
                        type: "value",
                        min: 0,
                        max: o,
                        interval: o / 5,
                        splitLine: {lineStyle: {type: "dashed", color: "#6f789c"}},
                        axisLabel: {textStyle: {color: "#fff"}},
                        axisLine: {lineStyle: {color: "#6f789c", width: 2}},
                        axisTick: {show: !1}
                    }, {
                        name: "有效次数",
                        type: "value",
                        min: 0,
                        max: u,
                        interval: u / 5,
                        splitLine: {lineStyle: {type: "dashed", color: "#6f789c"}},
                        axisLabel: {textStyle: {color: "#fff"}},
                        axisLine: {lineStyle: {color: "#6f789c", width: 2}},
                        axisTick: {show: !1}
                    }],
                    series: [{
                        name: "有效时长",
                        type: "line",
                        symbol: "none",
                        lineStyle: {normal: {width: 1}},
                        data: e
                    }, {
                        name: "有效次数",
                        type: "line",
                        symbol: "none",
                        yAxisIndex: 1,
                        lineStyle: {normal: {width: 1}},
                        data: l.countdata
                    }]
                }
            }, Common.prototype.ShowOneLineChartComArea = function (l) {
                var n = [];
                if (l.legend.length > 0) for (t = 0; t < l.legend.length; t++) n.push({
                    name: l.legend[t],
                    icon: "roundRect",
                    textStyle: {color: "#fff", fontSize: 12}
                });
                var e = [];
                if (l.yAxis.length > 0) {
                    l.yAxis[0].columnName = l.yAxis[0].columnName;
                    for (var t = 0; t < l.yAxis.length; t++) e.push({
                        type: "value",
                        name: l.yAxis[t].columnName,
                        min: 0,
                        max: l.yAxis[t].maxNumber,
                        interval: l.yAxis[t].interval,
                        splitLine: {lineStyle: {type: "dotted", color: "#70799d"}},
                        axisTick: {show: !1},
                        axisLabel: {formatter: "{value} ", textStyle: {color: "#fff", fontSize: 10}, margin: 5},
                        axisLine: {lineStyle: {color: "#ffffff", width: 1, type: "solid"}}
                    })
                }
                var o = [];
                if (l.series.length > 0) for (var u = 0, i = 0; i < l.series.length; i++) e.length > 1 && (u = i), o.push({
                    barWidth: "10",
                    name: l.series[i].columnName,
                    type: "line",
                    yAxisIndex: u,
                    stack: "总量",
                    areaStyle: {normal: {}},
                    lineStyle: {normal: {width: 1}},
                    itemStyle: {normal: {color: l.series[i].colors, width: 1}},
                    data: l.series[i].datas
                });
                return {
                    color: ["#ff5c41", "#f8d05e"],
                    title: {textStyle: {color: "#fff", align: "left", fontSize: 10, fontWeight: 100}},
                    tooltip: {trigger: "axis", axisPointer: {lineStyle: {color: "#fff"}}},
                    legend: {
                        bottom: 3,
                        data: n,
                        textStyle: {color: "#fff", align: "left", fontSize: 12, fontWeight: 100},
                        itemWidth: 10,
                        itemHeight: 10
                    },
                    grid: l.gridInfo,
                    toolbox: l.toolboxInfo,
                    xAxis: {
                        type: "category",
                        boundaryGap: !1,
                        data: l.xData.map(function (l) {
                            return l.slice(0, 4) + "\n" + l.slice(4, 8)
                        }),
                        splitLine: {lineStyle: {type: "solid", color: "#70799d"}, interval: 5},
                        axisLabel: l.axisLabelInfo,
                        axisLine: l.axisLineInfo,
                        axisTick: {show: !1}
                    },
                    yAxis: e,
                    series: o
                }
            }, Common.prototype.addZero = function (l) {
                return l < 10 ? "0" + l : "" + l
            }, Common.prototype.IsArray = function (l) {
                return l instanceof Array
            }, Common.prototype.Seekinterval = function (l) {
                if (l < 5) return 1;
                if (l >= 5 && l < 10) return 2;
                if (10 == l) return 3;
                if (l.toString().length >= 2) {
                    var n = parseInt(l.toString().substring(0, 2)), e = n / 5;
                    5 * (e = Math.ceil(e)) == n && (e += 1);
                    for (var t = e.toString(), o = 1; o <= l.toString().length - 2; o++) t += "0";
                    return parseInt(t)
                }
            }, Common.prototype.createIDB = function (l, n) {
                this.request = indexedDB.open(l, 1), this.request.onerror = function () {
                    console.log("打开数据库失败:")
                }, this.request.onsuccess = function (l) {
                    console.log("打开数据库成功!"), this.db = l.target.result;
                    this.db.transaction(n, "readwrite").objectStore(n)
                }, this.request.onupgradeneeded = function (l) {
                    this.db = l.target.result;
                    this.db.createObjectStore(n)
                }
            }, Common.prototype.addIDB = function (l, n, e) {
                if (!this.request.db) return !1;
                this.request.db.transaction(l, "readwrite").objectStore(l).add(n, e)
            }, Common
        }()
    }, 32: function (l, n, e) {
        "use strict";
        e.d(n, "a", function () {
            return u
        });
        e(0), e(8);
        var t = e(23), o = (e(10), e(40)), u = function () {
            function l(l, n, e, t, o) {
                var u = this;
                this.navCtrl = l, this.navParams = n, this.commonService = e, this.comm = t, this.menuCtrl = o, this.searchQuery = "", this.Backtitle = !0, this.userinfo = this.commonService.userInfo();
                var i = "UserMenu" + this.userinfo.EmpCode;
                null != this.comm.getCache(i) && void 0 != this.comm.getCache(i) ? this.LoadReportMenu(this.comm.getCache(i)) : this.GetOspService10649(), this.codes = t.getUrlParam("code"), this.state = t.getUrlParam("state"), this.Backtitle = null == this.state && null == this.codes;
                var r = "P_EmpCode=" + this.userinfo.EmpCode + "&P_RoleID=" + this.userinfo.RoleID + "&P_Remark=1";
                this.commonService.executeOspService(10856, r += "&CacheData=1", 4, 1).subscribe(function (l) {
                    var n = l.json();
                    sessionStorage.setItem("SchemaData", JSON.stringify(u.comm.getSchemaList(n)))
                })
            }

            return l.prototype.openMenu = function () {
                this.menuCtrl.open()
            }, l.prototype.Backapphome = function () {
                this.navCtrl.push(o.a)
            }, l.prototype.GetOspService10649 = function () {
                var l = this, n = "p_roleid=" + this.userinfo.RoleID + "&p_pmenuid=1283";
                this.commonService.executeOspService(10649, n += "&CacheData=1", 4, 1).subscribe(function (n) {
                    var e = n.json();
                    l.LoadReportMenu(e)
                })
            }, l.prototype.LoadReportMenu = function (l) {
                var n = "UserMenu" + this.userinfo.EmpCode;
                if (null != l && null != l.Item && null != l.Item.Children && "" != l.Item.Children && void 0 != l.Item.Children) {
                    l.Item.Children.Item instanceof Array != 1 && (l.Item.Children.Item = "[" + JSON.stringify(l.Item.Children.Item) + "]", l.Item.Children.Item = JSON.parse(l.Item.Children.Item)), this.comm.setCache(n, l, 3600);
                    var e = [];
                    if (l.Item.Children.Item.length > 0) for (var t = 0; t < l.Item.Children.Item.length; t++) e.push({
                        imgUrl: "icon-baobiao1",
                        PMenuId: l.Item.Children.Item[t].PMenuId,
                        targetUrl: "/app/menu/Home/fxbb",
                        menuName: l.Item.Children.Item[t].MenuName,
                        menuId: l.Item.Children.Item[t].menuId
                    });
                    this.LeftMenus = e, this.Menus = l.Item.Children.Item, this.NavInfo = [];
                    var o;
                    this.Menus instanceof Array != 1 ? (o = "[" + JSON.stringify(this.Menus) + "]", o = JSON.parse(o)) : o = this.Menus;
                    for (var u = 0; u < o.length; u++) if (1284 == o[u].menuId) {
                        if (null != o[u].Children && "" != o[u].Children && void 0 != o[u].Children) if (o[u].Children.Item instanceof Array != 1 && "" != o[u].Children.Item && void 0 != o[u].Children.Item) {
                            a = "[" + JSON.stringify(o[u].Children.Item) + "]";
                            this.NavInfo = JSON.parse(a)
                        } else for (var i = 0; i < o[u].Children.Item.length; i++) null != o[u].Children.Item[i].Children && void 0 != o[u].Children.Item[i].Children && this.NavInfo.push(o[u].Children.Item[i]);
                        o[u].Children.Item instanceof Array != 1 && null == o[u].Children.Item.Children && (this.NavInfo = [])
                    }
                    if (this.NavInfo instanceof Array != 1) {
                        a = "[" + JSON.stringify(this.NavInfo) + "]";
                        this.NavInfo = JSON.parse(a)
                    }
                    for (var r = 0; r < this.NavInfo.length; r++) if (this.NavInfo[r].Children.Item instanceof Array != 1) {
                        var a = "[" + JSON.stringify(this.NavInfo[r].Children.Item) + "]";
                        this.NavInfo[r].Children.Item = JSON.parse(a)
                    }
                } else alert("未获取到权限栏目,请联系管理员!")
            }, l.prototype.gotoMenu = function (l) {
                var n = (new t.a).replaceStr(l, "#/reportview/", "", !1);
                this.navCtrl.push("rpt" + n, this.userinfo)
            }, l
        }()
    }, 40: function (l, n, e) {
        "use strict";
        e.d(n, "a", function () {
            return i
        });
        e(0), e(10), e(8);
        var t = e(49), o = e(50), u = e(51), i = function () {
            function l(l, n, e, t, o, u) {
                this.navParams = l, this.navCtrl = n, this.contacts = e, this.commonService = t, this.alertCtrl = o, this.loadingCtrl = u, this.userinfo = this.commonService.userInfo()
            }

            return l.prototype.pushAnalyReport = function () {
                this.navCtrl.push(u.a, {Trendpage: 1})
            }, l.prototype.pushCallphone = function () {
                this.navCtrl.push(u.a, {Trendpage: 2})
            }, l.prototype.pushToContactsManager = function () {
                this.showPrompt()
            }, l.prototype.clearhistoy = function () {
                localStorage.getItem("userInfo");
                var l = sessionStorage.getItem("SchemaData");
                localStorage.clear(), sessionStorage.clear(), localStorage.setItem("userInfo", JSON.stringify(this.userinfo)), sessionStorage.setItem("SchemaData", l), this.showAlert("", "清理成功!"), this.userinfo = this.commonService.userInfo(), this.commonService.executeOspService(10043, "EmpCode=" + this.userinfo.EmpCode, 4, 1).subscribe(function (l) {
                    var n = l.json();
                    localStorage.setItem("userInfo", JSON.stringify(n))
                })
            }, l.prototype.showPrompt = function () {
                var l = this;
                this.alertCtrl.create({
                    title: "提示", message: "是否清空原通讯录!", buttons: [{
                        text: "否", handler: function (n) {
                            l.ServeData()
                        }
                    }, {
                        text: "是", handler: function (n) {
                            var e = new t.b;
                            l.contacts.find(["displayName"], e).then(function (n) {
                                for (var e = n.length - 1; e >= 0; e--) n[e].remove();
                                l.ServeData()
                            }, function (n) {
                                return l.importresult = n
                            })
                        }
                    }]
                }).present()
            }, l.prototype.ServeData = function () {
                var l = this;
                this.userpwd = localStorage.getItem("ms_pwd"), this.commonService.executeOspService(10021, "TelNumber=" + this.userinfo.TelNumber + "&pwd=" + this.userpwd + "&num=50", 4, 1).subscribe(function (n) {
                    var e = n.json();
                    if (console.log(e), e.errDesc) l.importresult = e.errDesc, l.showAlert("导入失败", e.errDesc); else for (var o = e.length - 1; o >= 0; o--) {
                        var u = l.contacts.create();
                        u.displayName = e[o].CustomerID, u.phoneNumbers = [new t.a("mobile", e[o].CustomerTel)], u.save(), l.importresult = "保存通讯录成功，共导入" + e.length + "个资源!", l.showAlert("导入成功", l.importresult)
                    }
                })
            }, l.prototype.showAlert = function (l, n) {
                this.alertCtrl.create({title: l, subTitle: n, buttons: ["OK"]}).present()
            }, l.prototype.ExitClear = function () {
                this.ExitUser()
            }, l.prototype.presentLoading = function () {
                var l = this;
                this.loadingCtrl.create({content: "正在退出中...", duration: 1500}).present(), setTimeout(function () {
                    l.navCtrl.push(o.a)
                }, 1500)
            }, l.prototype.ExitUser = function () {
                var l = this;
                this.alertCtrl.create({
                    title: "退出", message: "是否退出当前账号!", buttons: [{
                        text: "取消", handler: function (l) {
                        }
                    }, {
                        text: "确定", handler: function (n) {
                            localStorage.clear(), l.presentLoading()
                        }
                    }]
                }).present()
            }, l
        }()
    }, 50: function (l, n, e) {
        "use strict";
        e.d(n, "a", function () {
            return r
        });
        e(0), e(8), e(10), e(23);
        var t = e(40), o = e(144), u = (e.n(o), e(32)), i = e(86), r = (e.n(i), function () {
            function l(l, n, e, t, o, u) {
                this.navCtrl = l, this.navParams = n, this.commonService = e, this.alertCtrl = t, this.loadingCtrl = o, this.comm = u, this.PhoneCode = !0, this.usernamecode = !1, this.isdisabled = !1
            }

            return l.prototype.dataMeunsLink = function () {
                this.navCtrl.pop()
            }, l.prototype.showAlert = function (l, n) {
                this.alertCtrl.create({title: l, subTitle: n, buttons: ["OK"]}).present()
            }, l.prototype.presentLoading = function () {
                var l = this;
                this.loadingCtrl.create({
                    content: "正在登录中...",
                    duration: 1500
                }).present(), "huaxuntg" == this.comm.getUrlParam("code") ? setTimeout(function () {
                    l.navCtrl.push(u.a)
                }, 1500) : setTimeout(function () {
                    l.navCtrl.push(t.a, {userpwd: l.userPwd})
                }, 1500)
            }, l.prototype.logIn = function () {
                var l = this, n = "";
                "" != this.userPwd && null != this.userPwd && void 0 != this.userPwd && (n = o.Md5.hashStr(this.userPwd).toString()), this.commonService.executeOspService(10043, "EmpName=" + this.username + "&Password=" + n, 4, 1).subscribe(function (n) {
                    var e = n.json();
                    return null == e || void 0 == e ? (l.showAlert("账号密码错误!", "请联系管理员获取登录权限或者检查账号密码!"), !1) : (localStorage.setItem("EmpName", e.EmpName), e.userid = e.EmpCode, e.avatar = "", l.commonService.setUserInfo(e), "" == e.TelNumber || "" == l.userPwd ? (l.showAlert("信息错误!", "手机号码不存在或密码错误，请登录CRM完善信息或重试!"), !1) : void(e.EmpCode && l.presentLoading()))
                }), localStorage.setItem("ms_pwd", n), document.cookie = "ms_pwd=" + n
            }, l.prototype.btnCode = function () {
                var l = this, n = this.userphone;
                void 0 != n && /^1[1|3|5|7|8]\d{9}$/.test(n) ? (this.resetCode(), this.commonService.executeOspService(10452, "Mobile=" + this.userphone + "&SendType=1", 4, 1).subscribe(function (n) {
                    var e = n.json();
                    l.ValidateCode = e.ValidateCode, console.log(l.ValidateCode)
                })) : this.showAlert("", "请输入有效的手机号码！")
            }, l.prototype.resetCode = function () {
                var l = 60;
                this.isdisabled = !0;
                var n = window.setInterval(function () {
                    l--, i("#getCode").val(l + "秒"), 0 == l && (this.isdisabled = !1, i("#getCode").val("获取验证码"), window.clearInterval(n))
                }, 1e3)
            }, l.prototype.logInCode = function () {
                var l = this, n = "Mobile=" + this.userphone + "&ValidateCode=" + this.userCode;
                this.commonService.executeOspService(10948, n, 4, 1).subscribe(function (e) {
                    var t = e.json();
                    console.log(n), localStorage.setItem("userInfo", JSON.stringify(t)), t.Msg ? l.showAlert("登录失败", "验证码有误!") : l.presentLoading()
                })
            }, l.prototype.CutName = function () {
                this.usernamecode = !0, this.PhoneCode = !1
            }, l.prototype.CutCode = function () {
                this.usernamecode = !1, this.PhoneCode = !0
            }, l
        }())
    }, 51: function (l, n, e) {
        "use strict";
        e.d(n, "a", function () {
            return u
        });
        e(0), e(8), e(10);
        var t = e(32), o = e(78), u = function () {
            function l(l, n, e, u, i) {
                this.navCtrl = l, this.navParams = n, this.commonService = e, this.alertCtrl = u, this.menuCtrl = i, this.searchQuery = "", this.rootPage = t.a, this.userinfo = this.commonService.userInfo(), this.Trendpage = this.navParams.data.Trendpage, 1 == this.Trendpage && (this.rootPage = t.a), 2 == this.Trendpage && (this.rootPage = o.a)
            }

            return l.prototype.openMenu = function () {
                this.menuCtrl.open()
            }, l.prototype.BaobiaoClick = function () {
                this.rootPage = t.a, this.menuCtrl.close()
            }, l.prototype.ClearLocalCon = function () {
                localStorage.getItem("userInfo");
                var l = sessionStorage.getItem("SchemaData");
                localStorage.clear(), sessionStorage.clear(), localStorage.setItem("userInfo", JSON.stringify(this.userinfo)), sessionStorage.setItem("SchemaData", l), this.showAlert("", "清理成功!"), this.userinfo = this.commonService.userInfo(), this.commonService.executeOspService(10043, "EmpCode=" + this.userinfo.EmpCode, 4, 1).subscribe(function (l) {
                    var n = l.json();
                    localStorage.setItem("userInfo", JSON.stringify(n))
                })
            }, l.prototype.PushCallPhone = function () {
                this.rootPage = o.a, this.menuCtrl.close()
            }, l.prototype.showAlert = function (l, n) {
                this.alertCtrl.create({title: l, subTitle: n, buttons: ["OK"]}).present()
            }, l
        }()
    }, 78: function (l, n, e) {
        "use strict";
        e.d(n, "a", function () {
            return o
        });
        e(0), e(10), e(8);
        var t = e(86), o = (e.n(t), function () {
            function l(l, n, e, o, u) {
                this.navParams = l, this.navCtrl = n, this.commonService = e, this.alertCtrl = o, this.menuCtrl = u, this.clientcontent = !0, this.SearchclientCon = !1, this.NodataContent = !1, this.userinfo = this.commonService.userInfo(), this.username = t("#optionSerach").val()
            }

            return l.prototype.openMenu = function () {
                this.menuCtrl.open()
            }, l.prototype.SearchClick = function () {
                var l = this;
                "" != t("#optionSerach").val() ? this.commonService.executeOspService(10946, "EmpCode=" + this.userinfo.EmpCode + "&QueryValue=" + this.username, 4, 1).subscribe(function (n) {
                    var e = n.json();
                    if (null == e || "" == e) return l.clientcontent = !1, l.SearchclientCon = !1, void(l.NodataContent = !0);
                    l.Client = e.CustomerName, l.Customersex = e.CustomerSex, l.StockMoney = e.StockMoney, l.CustomerType = e.CustomerType, l.CustomerAge = e.CustomerAge, l.TraceTime = e.TraceTime, l.TraceMode = e.TraceMode, l.CustomerID = e.CustomerID, "" != e && (l.clientcontent = !1, l.SearchclientCon = !0, l.NodataContent = !1)
                }) : this.showAlert("错误", "客户编号、手机号码输入有误！")
            }, l.prototype.CallBack = function () {
                var l = this, n = t("#optionSerach").val();
                "" != n ? this.commonService.executeOspService(10022, "EmpCode=" + this.userinfo.EmpCode + "&CallCenterServer=" + this.userinfo.CallCenterServer + "&WorkGroup=" + this.userinfo.WorkGroup + "&DirectDialing=" + this.userinfo.DirectDialing + "&EmpName=" + this.userinfo.EmpName + "&EmpTel=" + this.userinfo.EmpTel + "&TelNumber=" + this.userinfo.TelNumber + "&TakeCallNumber=" + n, 4, 1).subscribe(function (n) {
                    var e = n.json();
                    l.showAlert("", e.data)
                }) : this.showAlert("错误", "客户编号、手机号码输入有误！")
            }, l.prototype.ClearInput = function () {
                t("#optionSerach").val(""), this.clientcontent = !0, this.SearchclientCon = !1
            }, l.prototype.showAlert = function (l, n) {
                this.alertCtrl.create({title: l, subTitle: n, buttons: ["OK"]}).present()
            }, l
        }())
    }, 96: function (l, n) {
        function e(l) {
            return Promise.resolve().then(function () {
                throw new Error("Cannot find module '" + l + "'.")
            })
        }

        e.keys = function () {
            return []
        }, e.resolve = e, l.exports = e, e.id = 96
    }
}, [117]);