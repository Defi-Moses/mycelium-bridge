(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [7260],
  {
    67891: function (e, t) {
      var n, i, s;
      (i = [t]),
        void 0 ===
          (s =
            "function" ==
            typeof (n = function (e) {
              "use strict";
              function t(e) {
                if (Array.isArray(e)) {
                  for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                  return n;
                }
                return Array.from(e);
              }
              Object.defineProperty(e, "__esModule", { value: !0 });
              var n = !1;
              if ("undefined" != typeof window) {
                var i = {
                  get passive() {
                    n = !0;
                  },
                };
                window.addEventListener("testPassive", null, i), window.removeEventListener("testPassive", null, i);
              }
              var s =
                  "undefined" != typeof window &&
                  window.navigator &&
                  window.navigator.platform &&
                  /iP(ad|hone|od)/.test(window.navigator.platform),
                a = [],
                o = !1,
                r = -1,
                l = void 0,
                c = void 0,
                h = function (e) {
                  return a.some(function (t) {
                    return !(!t.options.allowTouchMove || !t.options.allowTouchMove(e));
                  });
                },
                d = function (e) {
                  var t = e || window.event;
                  return !!h(t.target) || 1 < t.touches.length || (t.preventDefault && t.preventDefault(), !1);
                },
                u = function () {
                  setTimeout(function () {
                    void 0 !== c && ((document.body.style.paddingRight = c), (c = void 0)),
                      void 0 !== l && ((document.body.style.overflow = l), (l = void 0));
                  });
                };
              (e.disableBodyScroll = function (e, i) {
                if (s) {
                  if (!e)
                    return void console.error(
                      "disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices."
                    );
                  if (
                    e &&
                    !a.some(function (t) {
                      return t.targetElement === e;
                    })
                  ) {
                    var u = { targetElement: e, options: i || {} };
                    (a = [].concat(t(a), [u])),
                      (e.ontouchstart = function (e) {
                        1 === e.targetTouches.length && (r = e.targetTouches[0].clientY);
                      }),
                      (e.ontouchmove = function (t) {
                        var n, i, s, a;
                        1 === t.targetTouches.length &&
                          ((i = e),
                          (a = (n = t).targetTouches[0].clientY - r),
                          !h(n.target) &&
                            ((i && 0 === i.scrollTop && 0 < a) ||
                            ((s = i) && s.scrollHeight - s.scrollTop <= s.clientHeight && a < 0)
                              ? d(n)
                              : n.stopPropagation()));
                      }),
                      o || (document.addEventListener("touchmove", d, n ? { passive: !1 } : void 0), (o = !0));
                  }
                } else {
                  (g = i),
                    setTimeout(function () {
                      if (void 0 === c) {
                        var e = !!g && !0 === g.reserveScrollBarGap,
                          t = window.innerWidth - document.documentElement.clientWidth;
                        e &&
                          0 < t &&
                          ((c = document.body.style.paddingRight), (document.body.style.paddingRight = t + "px"));
                      }
                      void 0 === l && ((l = document.body.style.overflow), (document.body.style.overflow = "hidden"));
                    });
                  var m = { targetElement: e, options: i || {} };
                  a = [].concat(t(a), [m]);
                }
                var g;
              }),
                (e.clearAllBodyScrollLocks = function () {
                  s
                    ? (a.forEach(function (e) {
                        (e.targetElement.ontouchstart = null), (e.targetElement.ontouchmove = null);
                      }),
                      o && (document.removeEventListener("touchmove", d, n ? { passive: !1 } : void 0), (o = !1)),
                      (a = []),
                      (r = -1))
                    : (u(), (a = []));
                }),
                (e.enableBodyScroll = function (e) {
                  if (s) {
                    if (!e)
                      return void console.error(
                        "enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices."
                      );
                    (e.ontouchstart = null),
                      (e.ontouchmove = null),
                      (a = a.filter(function (t) {
                        return t.targetElement !== e;
                      })),
                      o &&
                        0 === a.length &&
                        (document.removeEventListener("touchmove", d, n ? { passive: !1 } : void 0), (o = !1));
                  } else
                    1 === a.length && a[0].targetElement === e
                      ? (u(), (a = []))
                      : (a = a.filter(function (t) {
                          return t.targetElement !== e;
                        }));
                });
            })
              ? n.apply(t, i)
              : n) || (e.exports = s);
    },
    33214: (e) => {
      e.exports = {
        loader: "loader-38qh0l_K",
        static: "static-38qh0l_K",
        item: "item-38qh0l_K",
        "tv-button-loader": "tv-button-loader-38qh0l_K",
        black: "black-38qh0l_K",
        white: "white-38qh0l_K",
        gray: "gray-38qh0l_K",
        primary: "primary-38qh0l_K",
        "loader-initial": "loader-initial-38qh0l_K",
        "loader-appear": "loader-appear-38qh0l_K",
      };
    },
    90324: (e) => {
      e.exports = { button: "button-2pZNJ24z", hover: "hover-2pZNJ24z", inner: "inner-2pZNJ24z" };
    },
    80088: (e) => {
      e.exports = {
        toolbar: "toolbar-2yU8ifXU",
        dateRangeWrapper: "dateRangeWrapper-2yU8ifXU",
        seriesControlWrapper: "seriesControlWrapper-2yU8ifXU",
        dateRangeExpanded: "dateRangeExpanded-2yU8ifXU",
        dateRangeCollapsed: "dateRangeCollapsed-2yU8ifXU",
        item: "item-2yU8ifXU",
        first: "first-2yU8ifXU",
        last: "last-2yU8ifXU",
        inline: "inline-2yU8ifXU",
        timezone: "timezone-2yU8ifXU",
        session: "session-2yU8ifXU",
        icon: "icon-2yU8ifXU",
        hidden: "hidden-2yU8ifXU",
        collapsed: "collapsed-2yU8ifXU",
      };
    },
    39123: (e) => {
      e.exports = { button: "button-15caiVtH", separator: "separator-15caiVtH" };
    },
    81882: (e) => {
      e.exports = { button: "button-yLOygoSG", hover: "hover-yLOygoSG", icon: "icon-yLOygoSG" };
    },
    49876: (e) => {
      e.exports = { separator: "separator-13-1nlsQ" };
    },
    46305: (e) => {
      e.exports = { button: "button-2-onvH7F" };
    },
    18411: (e) => {
      e.exports = {
        item: "item-3SbREAgE",
        hover: "hover-3SbREAgE",
        isActive: "isActive-3SbREAgE",
        isFirst: "isFirst-3SbREAgE",
        isLast: "isLast-3SbREAgE",
      };
    },
    66766: (e) => {
      e.exports = { slider: "slider-3GYrNsPp", inner: "inner-3GYrNsPp" };
    },
    63187: (e) => {
      e.exports = { sliderRow: "sliderRow-1emAA4_D" };
    },
    30160: (e) => {
      e.exports = {
        item: "item-f5BaKrKq",
        interactive: "interactive-f5BaKrKq",
        hovered: "hovered-f5BaKrKq",
        disabled: "disabled-f5BaKrKq",
        active: "active-f5BaKrKq",
        shortcut: "shortcut-f5BaKrKq",
        normal: "normal-f5BaKrKq",
        big: "big-f5BaKrKq",
        iconCell: "iconCell-f5BaKrKq",
        icon: "icon-f5BaKrKq",
        checkmark: "checkmark-f5BaKrKq",
        content: "content-f5BaKrKq",
        label: "label-f5BaKrKq",
        checked: "checked-f5BaKrKq",
        toolbox: "toolbox-f5BaKrKq",
        showToolboxOnHover: "showToolboxOnHover-f5BaKrKq",
        arrowIcon: "arrowIcon-f5BaKrKq",
        subMenu: "subMenu-f5BaKrKq",
        invisibleHotkey: "invisibleHotkey-f5BaKrKq",
      };
    },
    85848: (e) => {
      e.exports = {
        item: "item-1-SF84yU",
        emptyIcons: "emptyIcons-1-SF84yU",
        loading: "loading-1-SF84yU",
        disabled: "disabled-1-SF84yU",
        interactive: "interactive-1-SF84yU",
        hovered: "hovered-1-SF84yU",
        normal: "normal-1-SF84yU",
        big: "big-1-SF84yU",
        icon: "icon-1-SF84yU",
        label: "label-1-SF84yU",
        title: "title-1-SF84yU",
        nested: "nested-1-SF84yU",
        shortcut: "shortcut-1-SF84yU",
        remove: "remove-1-SF84yU",
      };
    },
    68552: (e) => {
      e.exports = { separator: "separator-3No0pWrk" };
    },
    66549: (e) => {
      e.exports = {
        "tablet-small-breakpoint": "screen and (max-width: 428px)",
        item: "item-2IihgTnv",
        hovered: "hovered-2IihgTnv",
        isDisabled: "isDisabled-2IihgTnv",
        isActive: "isActive-2IihgTnv",
        shortcut: "shortcut-2IihgTnv",
        toolbox: "toolbox-2IihgTnv",
        withIcon: "withIcon-2IihgTnv",
        icon: "icon-2IihgTnv",
        labelRow: "labelRow-2IihgTnv",
        label: "label-2IihgTnv",
        showOnHover: "showOnHover-2IihgTnv",
      };
    },
    78706: (e) => {
      e.exports = {
        separator: "separator-eqcGT_ow",
        small: "small-eqcGT_ow",
        normal: "normal-eqcGT_ow",
        large: "large-eqcGT_ow",
      };
    },
    16929: (e) => {
      e.exports = {
        tabs: "tabs-3I2ohC86",
        tab: "tab-3I2ohC86",
        noBorder: "noBorder-3I2ohC86",
        disabled: "disabled-3I2ohC86",
        active: "active-3I2ohC86",
        defaultCursor: "defaultCursor-3I2ohC86",
        slider: "slider-3I2ohC86",
        content: "content-3I2ohC86",
      };
    },
    73226: (e, t, n) => {
      "use strict";
      n.d(t, { Loader: () => c });
      var i,
        s = n(67294),
        a = n(94184),
        o = n(8596),
        r = n(33214),
        l = n.n(r);
      !(function (e) {
        (e[(e.Initial = 0)] = "Initial"), (e[(e.Appear = 1)] = "Appear"), (e[(e.Active = 2)] = "Active");
      })(i || (i = {}));
      class c extends s.PureComponent {
        constructor(e) {
          super(e), (this._stateChangeTimeout = null), (this.state = { state: i.Initial });
        }
        render() {
          const { className: e, color: t = "black", staticPosition: n } = this.props,
            i = a(l().item, { [l()[t]]: Boolean(t) });
          return s.createElement(
            "span",
            { className: a(l().loader, n && l().static, e, this._getStateClass()) },
            s.createElement("span", { className: i }),
            s.createElement("span", { className: i }),
            s.createElement("span", { className: i })
          );
        }
        componentDidMount() {
          this.setState({ state: i.Appear }),
            (this._stateChangeTimeout = setTimeout(() => {
              this.setState({ state: i.Active });
            }, 2 * o.dur));
        }
        componentWillUnmount() {
          this._stateChangeTimeout && (clearTimeout(this._stateChangeTimeout), (this._stateChangeTimeout = null));
        }
        _getStateClass() {
          switch (this.state.state) {
            case i.Initial:
              return l()["loader-initial"];
            case i.Appear:
              return l()["loader-appear"];
            default:
              return "";
          }
        }
      }
    },
    74818: (e, t, n) => {
      "use strict";
      function i(e) {
        return a(e, o);
      }
      function s(e) {
        return a(e, r);
      }
      function a(e, t) {
        const n = Object.entries(e).filter(t),
          i = {};
        for (const [e, t] of n) i[e] = t;
        return i;
      }
      function o(e) {
        const [t, n] = e;
        return 0 === t.indexOf("data-") && "string" == typeof n;
      }
      function r(e) {
        return 0 === e[0].indexOf("aria-");
      }
      n.d(t, {
        filterDataProps: () => i,
        filterAriaProps: () => s,
        filterProps: () => a,
        isDataAttribute: () => o,
        isAriaAttribute: () => r,
      });
    },
    99740: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { BottomToolbarRenderer: () => Ye });
      var i = n(67294),
        s = n(73935),
        a = n(79881),
        o = n(45697),
        r = n(94184),
        l = n(5383),
        c = n(27490),
        h = n(67842),
        d = n(19330),
        u = n(79424),
        m = n(68521),
        g = n(95860),
        p = n(10869),
        v = n(16282),
        b = n(87438),
        _ = n(53178),
        f = n(5729),
        C = n.n(f),
        y = n(74645);
      class E {
        constructor(e) {
          (this._state = { ranges: [] }),
            (this._change = new (C())()),
            (this._rangeChangedListenerBound = this._onRangeChanged.bind(this));
          const { chartWidget: t } = (this._context = e);
          t.withModel(null, () => {
            const e = t.model(),
              n = e.mainSeries();
            n.onStatusChanged().subscribe(this, this._updateAvailableRanges),
              c.enabled("update_timeframes_set_on_symbol_resolve") &&
                n.dataEvents().symbolResolved().subscribe(this, this._updateAvailableRanges),
              n.priceScale().properties().childs().lockScale.subscribe(this, this._updateAvailableRanges);
            const i = e.model().appliedTimeFrame();
            i.subscribe(this._rangeChangedListenerBound),
              this._rangeChangedListenerBound(i.value()),
              this._updateAvailableRanges();
          });
        }
        state() {
          return this._state;
        }
        onChange() {
          return this._change;
        }
        selectRange(e) {
          this._setState({ activeRange: e.value.value });
          const { chartWidgetCollection: t } = this._context,
            n = { val: e.value, res: e.targetResolution };
          t.setTimeFrame(n);
        }
        destroy() {
          const { chartWidget: e } = this._context;
          e.withModel(null, () => {
            const t = e.model(),
              n = t.mainSeries();
            n.onStatusChanged().unsubscribe(this, this._updateAvailableRanges),
              c.enabled("update_timeframes_set_on_symbol_resolve") &&
                n.dataEvents().symbolResolved().unsubscribe(this, this._updateAvailableRanges),
              n.priceScale().properties().childs().lockScale.unsubscribe(this, this._updateAvailableRanges),
              t.model().appliedTimeFrame().unsubscribe(this._rangeChangedListenerBound);
          }),
            this._change.destroy();
        }
        _setState(e) {
          (this._state = Object.assign({}, this._state, e)), this._change.fire(this._state);
        }
        _onRangeChanged(e) {
          let t;
          null !== e && "period-back" === e.val.type && (t = e.val.value), this._setState({ activeRange: t });
        }
        _updateAvailableRanges() {
          const { availableTimeFrames: e, chartWidget: t } = this._context;
          if (!t.hasModel()) return;
          const n = t.model().mainSeries(),
            i = n.status();
          if (i === y.STATUS_LOADING || i === y.STATUS_RESOLVING) return;
          const s = e(n.symbolInfo(), n.status());
          0 !== s.length && this._setState({ ranges: s });
        }
      }
      const S = (0, _.registryContextType)();
      function x(e) {
        var t;
        return (
          ((t = class extends i.PureComponent {
            constructor(e, t) {
              super(e, t),
                (this._handleUpdate = (e) => {
                  this.setState(e);
                }),
                (this._handleSelectRange = (e) => {
                  var t, n;
                  (0, b.trackEvent)("GUI", "Chart Bottom Toolbar", "range " + e.value),
                    null === (n = (t = this.props).onSelectRange) || void 0 === n || n.call(t, e),
                    this._binding.selectRange(e);
                }),
                (0, _.validateRegistry)(t, {
                  availableTimeFrames: o.any.isRequired,
                  chartWidgetCollection: o.any.isRequired,
                  chartWidget: o.any.isRequired,
                }),
                M.has(t.chartWidget) || M.set(t.chartWidget, new E(t));
              const n = (this._binding = (0, v.ensureDefined)(M.get(t.chartWidget)));
              this.state = n.state();
            }
            componentDidMount() {
              this._binding.onChange().subscribe(this, this._handleUpdate);
            }
            componentWillUnmount() {
              this._binding.onChange().unsubscribe(this, this._handleUpdate);
            }
            render() {
              return i.createElement(e, {
                goToDateButton: this.props.goToDateButton,
                className: this.props.className,
                ranges: this.state.ranges,
                activeRange: this.state.activeRange,
                onSelectRange: this._handleSelectRange,
              });
            }
          }).contextType = S),
          t
        );
      }
      const M = new WeakMap();
      var w = n(98737),
        k = n(90590),
        R = n(10284),
        T = n(22675),
        A = n(14561),
        N = n(39123);
      function B(e) {
        const { ranges: t, activeRange: n, onSelectRange: s } = e;
        return i.createElement(
          i.Fragment,
          null,
          t.map((e) =>
            i.createElement(k.ContextMenuItem, {
              key: e.value.value,
              label: e.description || e.text,
              active: n === e.value.value,
              checked: n === e.value.value,
              checkable: !0,
              disabled: !1,
              onClick: a.bind(null, e),
              doNotCloseOnClick: !1,
              subItems: [],
            })
          )
        );
        function a(e) {
          e && s && s(e), (0, u.globalCloseMenu)();
        }
      }
      function W(e) {
        const { onGoToDateClick: t } = e;
        return i.createElement(
          i.Fragment,
          null,
          i.createElement(R.Separator, { className: N.separator }),
          i.createElement(k.ContextMenuItem, {
            icon: A,
            label: (0, T.appendEllipsis)((0, a.t)("Go to")),
            onClick: t,
            active: !1,
            checked: !1,
            checkable: !1,
            disabled: !1,
            doNotCloseOnClick: !1,
            subItems: [],
          })
        );
      }
      const L = { title: (0, a.t)("Date Range"), goToDate: (0, T.appendEllipsis)((0, a.t)("Go to")) },
        D = (0, _.registryContextType)();
      class I extends i.PureComponent {
        constructor(e, t) {
          super(e, t),
            (this._handleGoToDateClick = () => {
              const { chartWidget: e } = this.context;
              (0, w.showGoToDateDialog)(e), (0, u.globalCloseMenu)();
            }),
            (this._handleRangeSelect = (e) => {
              e && this.props.onSelectRange && this.props.onSelectRange(e), (0, u.globalCloseMenu)();
            }),
            (this._renderChildren = (e) => {
              const { ranges: t, activeRange: n, goToDateButton: s } = this.props;
              return e
                ? i.createElement(
                    i.Fragment,
                    null,
                    i.createElement(B, { ranges: t, activeRange: n, onSelectRange: this._handleRangeSelect }),
                    s && i.createElement(W, { onGoToDateClick: this._handleGoToDateClick })
                  )
                : i.createElement(
                    i.Fragment,
                    null,
                    t.map((e) =>
                      i.createElement(g.PopupMenuItem, {
                        key: e.value.value,
                        label: e.description || e.text,
                        isActive: n === e.value.value,
                        onClick: this._handleRangeSelect,
                        onClickArg: e,
                      })
                    ),
                    s && i.createElement(p.PopupMenuSeparator, null),
                    s && i.createElement(g.PopupMenuItem, { label: L.goToDate, onClick: this._handleGoToDateClick })
                  );
            }),
            (0, _.validateRegistry)(t, { chartWidget: o.any.isRequired });
        }
        render() {
          return i.createElement(m.MatchMedia, { rule: "screen and (max-width: 428px)" }, (e) =>
            i.createElement(
              h.ToolWidgetMenu,
              {
                className: N.button,
                content: L.title,
                arrow: !0,
                verticalAttachEdge: d.VerticalAttachEdge.Top,
                verticalDropDirection: d.VerticalDropDirection.FromBottomToTop,
                horizontalMargin: 4,
                "data-name": "date-ranges-menu",
                isDrawer: e,
                onClick: this._trackClick,
              },
              this._renderChildren(e)
            )
          );
        }
        _trackClick() {
          0;
        }
      }
      I.contextType = D;
      const z = x(I);
      var P = n(41445),
        F = n(18411);
      function U(e) {
        const t = r(e.className, F.item, { [F.isActive]: e.isActive, [F.isFirst]: e.isFirst, [F.isLast]: e.isLast });
        return i.createElement("div", { className: t, onClick: e.onClick, ref: e.reference }, e.children);
      }
      var H = n(4598),
        O = n(66766);
      const q = (0, H.mergeThemes)(P.DEFAULT_SLIDER_THEME, O);
      var K = n(63187);
      const j = (0, P.factory)(function (e) {
        return i.createElement(
          "div",
          { className: r(e.className, q.slider), ref: e.reference },
          i.createElement("div", { className: q.inner })
        );
      });
      const G = x(function (e) {
        const { className: t, ranges: n, activeRange: s, onSelectRange: a } = e;
        return i.createElement(
          j,
          { className: r(K.sliderRow, t), "data-name": "date-ranges-tabs" },
          n.map((e, t) =>
            i.createElement(
              U,
              {
                key: e.value.value,
                value: e.value.value,
                isFirst: 0 === t,
                isLast: t === n.length - 1,
                isActive: s === e.value.value,
                onClick: a && a.bind(null, e),
              },
              i.createElement("div", { title: e.description || e.text, className: "apply-common-tooltip" }, e.text)
            )
          )
        );
      });
      var V = n(49775),
        X = n(19598),
        Z = n(42998),
        Y = n(51496),
        J = n(81882);
      const $ = (0, X.hotKeySerialize)({
          keys: [(0, Z.humanReadableModifiers)(Z.Modifiers.Alt, !1), "G"],
          text: "{0} + {1}",
        }),
        Q = (0, _.registryContextType)();
      class ee extends i.PureComponent {
        constructor(e, t) {
          super(e, t),
            (this._handleClick = () => {
              const { chartWidget: e } = this.context;
              (0, b.trackEvent)("GUI", "Chart Bottom Toolbar", "go to"), (0, w.showGoToDateDialog)(e);
            }),
            (0, _.validateRegistry)(t, { chartWidget: o.any.isRequired });
        }
        render() {
          const { className: e, ranges: t } = this.props;
          return (
            t.length > 0 &&
            i.createElement(
              "div",
              {
                className: r("apply-common-tooltip", J.button, e),
                "data-name": "go-to-date",
                "data-tooltip-hotkey": $,
                onClick: this._handleClick,
                title: (0, a.t)("Go to"),
              },
              i.createElement(V.Icon, { className: J.icon, icon: Y })
            )
          );
        }
      }
      ee.contextType = Q;
      const te = x(ee);
      var ne = n(90324);
      function ie(e) {
        const { reference: t, className: n, children: s, ...a } = e;
        return i.createElement(
          "button",
          { ...a, className: r(n, ne.button), ref: t },
          i.createElement("span", { className: ne.inner }, s)
        );
      }
      var se = n(48729),
        ae = n(18675),
        oe = n(46374),
        re = n(6799);
      class le extends i.PureComponent {
        constructor(e) {
          super(e),
            (this._element = null),
            (this._menuShown = !1),
            (this._preventShowingMenu = !1),
            (this._handleRef = (e) => {
              this._element = e;
            }),
            (this._onMouseDown = () => {
              this._preventShowingMenu = this._menuShown;
            }),
            (this._showMenu = () => {
              if (this._preventShowingMenu) return void re.ContextMenuManager.hideAll();
              const { getActions: e } = this.props,
                t = (0, v.ensureNotNull)(this._element),
                n = e();
              if (0 === n.length) return;
              const i = t.getBoundingClientRect();
              re.ContextMenuManager.showMenu(
                n,
                { clientX: i.left, clientY: i.top, attachToYBy: "bottom" },
                void 0,
                { menuName: "TimezoneMenuContextMenu" },
                () => {
                  this._menuShown = !1;
                }
              ).then(() => {
                this._menuShown = !0;
              });
            });
        }
        render() {
          const { children: e } = this.props;
          return i.createElement(
            "span",
            { onClick: this._showMenu, onMouseDown: this._onMouseDown, ref: this._handleRef },
            e
          );
        }
      }
      var ce = n(84540),
        he = n(46305);
      const de = { hint: (0, a.t)("Timezone") };
      const ue = (0, _.registryContextType)();
      class me extends i.PureComponent {
        constructor(e, t) {
          super(e, t),
            (this._timeFormatter = new ae.TimeFormatter()),
            (this._tickInterval = void 0),
            (this._tickClock = () => {
              const { chartApiInstance: e } = this.context;
              if (void 0 !== this._timezone) {
                const t = (0, ce.utc_to_cal)(this._timezone, e.serverTime());
                this.setState({ time: this._timeFormatter.format(t) });
              }
            }),
            (this._getActions = () => {
              if (!this.props.withMenu) return [];
              const { chartWidget: e } = this.context;
              return (function (e) {
                e.updateActions();
                const t = e.actions();
                return t && t.applyTimeZone instanceof oe.Action ? t.applyTimeZone.getSubItems() : [];
              })(e);
            }),
            (0, _.validateRegistry)(t, { chartWidget: o.any.isRequired, chartApiInstance: o.any.isRequired }),
            (this.state = { time: "" });
        }
        componentDidMount() {
          const { chartWidget: e } = this.context;
          (this._tickInterval = setInterval(this._tickClock, 1e3)),
            e.withModel(null, () => {
              const t = e.model();
              t.model().mainSeries().dataEvents().symbolResolved().subscribe(this, this.updateTimezonesButton),
                t.model().properties().childs().timezone.subscribe(this, this.updateTimezonesButton);
            });
        }
        componentWillUnmount() {
          const { chartWidget: e } = this.context;
          clearInterval(this._tickInterval),
            e.withModel(null, () => {
              const t = e.model();
              t.model().mainSeries().dataEvents().symbolResolved().unsubscribe(this, this.updateTimezonesButton),
                t.model().properties().childs().timezone.unsubscribe(this, this.updateTimezonesButton);
            });
        }
        render() {
          const { className: e, withMenu: t } = this.props,
            { time: n } = this.state,
            s = void 0 !== this._timezone ? (0, se.parseTzOffset)(this._timezone.name()).string : null;
          return i.createElement(
            le,
            { getActions: this._getActions },
            i.createElement(
              ie,
              {
                className: r(e, he.button, "apply-common-tooltip"),
                title: t ? de.hint : void 0,
                disabled: !t,
                "data-name": "time-zone-menu",
              },
              n && s && `${n} (${s})`
            )
          );
        }
        updateTimezonesButton() {
          const { chartWidget: e } = this.context;
          if (!e.hasModel()) return;
          if (null === e.model().mainSeries().symbolInfo()) return;
          let t = e.model().model().timezone();
          if ("exchange" === t) {
            const n = (0, v.ensureNotNull)(e.model().mainSeries().symbolInfo()).timezone;
            n && (t = n);
          }
          (this._timezone = (0, ce.get_timezone)(t)), this._tickClock();
        }
      }
      me.contextType = ue;
      var ge = n(49876);
      function pe(e) {
        return i.createElement("span", { className: r(ge.separator, e.className) });
      }
      var ve = n(47218),
        be = n(90963),
        _e = n(43367);
      class fe {
        constructor(e, t, n) {
          (this._highlighted = !1),
            (this._chartWidget = e),
            (this._priceScaleGetter = t),
            (this._owner = n),
            (this._setHighlight = this._setHighlight.bind(this)),
            (this._removeHighlight = this._removeHighlight.bind(this));
        }
        destroy() {
          this._highlighted && this._removeHighlight();
        }
        handlers() {
          const e = _e.CheckMobile.any();
          return { onMouseEnter: e ? void 0 : this._setHighlight, onMouseLeave: e ? void 0 : this._removeHighlight };
        }
        _setHighlight() {
          const e = this._chartWidget.model().model(),
            t = e.paneForSource(e.mainSeries()),
            n = this._priceScaleGetter();
          if (null === t || null === n) return;
          const i = this._chartWidget.paneByState(t);
          if (null !== i) {
            const t = i.rightPriceAxisesContainer().findAxisWidgetForScale(n);
            let s = null;
            null !== t && (s = t.axisInfo());
            const a = i.leftPriceAxisesContainer().findAxisWidgetForScale(n);
            null !== a && (s = a.axisInfo());
            const o = i.highlightedPriceAxis();
            null !== s &&
              o.value().axis !== s &&
              (o.setValue({ owner: this._owner, axis: s }), e.lightUpdate(), (this._highlighted = !0));
          }
        }
        _removeHighlight() {
          const e = this._chartWidget.model().model(),
            t = e.paneForSource(e.mainSeries());
          if (null === t) return;
          const n = this._chartWidget.paneByState(t);
          if (null !== n) {
            const t = n.highlightedPriceAxis(),
              i = t.value();
            null !== i.axis &&
              i.owner === this._owner &&
              (t.setValue({ owner: this._owner, axis: null }), e.lightUpdate(), (this._highlighted = !1));
          }
        }
      }
      const Ce = (0, _.registryContextType)(),
        ye = new be.TranslatedString("toggle log scale", (0, a.t)("toggle log scale"));
      const Ee = (0, _.registryContextType)(),
        Se = new be.TranslatedString("toggle auto scale", (0, a.t)("toggle auto scale"));
      const xe = (0, _.registryContextType)(),
        Me = new be.TranslatedString("toggle percentage scale", (0, a.t)("toggle percentage scale"));
      const we = (0, _.registryContextType)();
      var ke = n(87230),
        Re = n(39197),
        Te = n(93410),
        Ae = n(17806),
        Ne = n(80088);
      const Be = {
          extLabel: (0, a.t)("ext"),
          extHint: (0, a.t)("Extended Hours is available only for intraday charts"),
          percentageHint: (0, a.t)("Toggle Percentage"),
          logLabel: (0, a.t)("log", { context: "scale" }),
          logHint: (0, a.t)("Toggle Log Scale"),
          autoLabel: (0, a.t)("auto", { context: "scale" }),
          autoHint: (0, a.t)("Toggle Auto Scale"),
          fullscreenHint: (0, a.t)("Toggle Maximize Chart"),
          adjLabel: (0, a.t)("adj", { context: "adjustments" }),
          adjHint: (0, a.t)("Adjust data for dividends"),
          adjForDividendsOnlyHint: (0, a.t)("Main symbol data is adjusted for dividends only"),
          adjForSplitsOnlyHint: (0, a.t)("Main symbol data is adjusted for splits only"),
          backAdjustLabel: (0, a.t)("b-adj", { context: "adjustments" }),
          backAdjustHint: (0, a.t)("Adjust for contract changes"),
          settlementAsCloseLabel: (0, a.t)("set", { context: "adjustments" }),
          settlementAsCloseHint: (0, a.t)("Use settlement as close on daily interval"),
        },
        We =
          ((Le = (e) =>
            i.createElement(ve.ToolWidgetButton, {
              text: Be.logLabel,
              title: Be.logHint,
              className: e.className,
              isActive: e.isLogarithm,
              isGrouped: !0,
              onClick: Ke(e.onClick, "log", e.isLogarithm),
              onMouseEnter: e.onMouseEnter,
              onMouseLeave: e.onMouseLeave,
              "data-name": "logarithm",
            })),
          ((De = class extends i.PureComponent {
            constructor(e, t) {
              super(e, t),
                (this._priceScale = null),
                (this._handleSelect = () => {
                  const e = this.context.chartWidget.model(),
                    t = (0, v.ensureNotNull)(this.state.series),
                    n = t.priceScale(),
                    i = n.mode();
                  t.priceScale().isLockScale() || e.setPriceScaleMode({ log: !i.log }, n, ye);
                }),
                (0, _.validateRegistry)(t, { chartWidget: o.any.isRequired }),
                (this.state = { isActive: !1, series: null }),
                (this._priceAxisHighlighter = new fe(this.context.chartWidget, () => this._priceScale, "logarithm"));
            }
            componentDidMount() {
              const e = this.context.chartWidget;
              e.withModel(null, () => {
                const t = e.model().mainSeries(),
                  n = t.priceScale();
                this._handleMainSeriesPriceScaleChanged(n),
                  t.priceScaleChanged().subscribe(this, this._handleMainSeriesPriceScaleChanged),
                  this._handleModeChanged({}, n.mode()),
                  this.setState({ isActive: t.priceScale().isLog(), series: t });
              });
            }
            componentWillUnmount() {
              const e = this.context.chartWidget;
              e.withModel(null, () => {
                e.model().mainSeries().priceScaleChanged().unsubscribe(this, this._handleMainSeriesPriceScaleChanged);
              }),
                null !== this._priceScale &&
                  (this._priceScale.modeChanged().unsubscribeAll(this), (this._priceScale = null)),
                this._priceAxisHighlighter.destroy();
            }
            render() {
              const { className: e } = this.props,
                { isActive: t, series: n } = this.state;
              return i.createElement(Le, {
                ...this._priceAxisHighlighter.handlers(),
                className: e,
                isLogarithm: t,
                isDisabled: null === n,
                onClick: this._handleSelect,
              });
            }
            _handleMainSeriesPriceScaleChanged(e) {
              null !== this._priceScale && this._priceScale.modeChanged().unsubscribe(this, this._handleModeChanged),
                (this._priceScale = e),
                this._priceScale.modeChanged().subscribe(this, this._handleModeChanged),
                this._handleModeChanged({}, e.mode());
            }
            _handleModeChanged(e, t) {
              Boolean(t.log) !== this.state.isActive && this.setState({ isActive: Boolean(t.log) });
            }
          }).contextType = Ce),
          De);
      var Le, De;
      const Ie = (function (e) {
          var t;
          return (
            ((t = class extends i.PureComponent {
              constructor(e, t) {
                super(e, t),
                  (this._priceScale = null),
                  (this._handleSelect = () => {
                    const e = this.context.chartWidget.model(),
                      t = (0, v.ensureNotNull)(this.state.series).priceScale(),
                      n = t.mode();
                    e.setPriceScaleMode({ autoScale: !n.autoScale }, t, Se);
                  }),
                  (0, _.validateRegistry)(t, { chartWidget: o.any.isRequired }),
                  (this.state = { isActive: !1, series: null }),
                  (this._priceAxisHighlighter = new fe(this.context.chartWidget, () => this._priceScale, "auto"));
              }
              componentDidMount() {
                const e = this.context.chartWidget;
                e.withModel(null, () => {
                  const t = e.model().mainSeries(),
                    n = t.priceScale();
                  this._handleMainSeriesPriceScaleChanged(n),
                    t.priceScaleChanged().subscribe(this, this._handleMainSeriesPriceScaleChanged),
                    this._handleModeChanged({}, n.mode()),
                    this.setState({ isActive: t.priceScale().isAutoScale(), series: t });
                });
              }
              componentWillUnmount() {
                const e = this.context.chartWidget;
                e.withModel(null, () => {
                  e.model().mainSeries().priceScaleChanged().unsubscribe(this, this._handleMainSeriesPriceScaleChanged);
                }),
                  null !== this._priceScale &&
                    (this._priceScale.modeChanged().unsubscribeAll(this), (this._priceScale = null)),
                  this._priceAxisHighlighter.destroy();
              }
              render() {
                const { className: t } = this.props,
                  { isActive: n, series: s } = this.state;
                return i.createElement(e, {
                  ...this._priceAxisHighlighter.handlers(),
                  className: t,
                  isAuto: n,
                  isDisabled: null === s,
                  onClick: this._handleSelect,
                });
              }
              _handleMainSeriesPriceScaleChanged(e) {
                null !== this._priceScale && this._priceScale.modeChanged().unsubscribe(this, this._handleModeChanged),
                  (this._priceScale = e),
                  this._priceScale.modeChanged().subscribe(this, this._handleModeChanged),
                  this._handleModeChanged({}, e.mode());
              }
              _handleModeChanged(e, t) {
                Boolean(t.autoScale) !== this.state.isActive && this.setState({ isActive: Boolean(t.autoScale) });
              }
            }).contextType = Ee),
            t
          );
        })((e) =>
          i.createElement(ve.ToolWidgetButton, {
            text: Be.autoLabel,
            title: Be.autoHint,
            className: e.className,
            isActive: e.isAuto,
            isGrouped: !0,
            onClick: Ke(e.onClick, "auto", e.isAuto),
            onMouseEnter: e.onMouseEnter,
            onMouseLeave: e.onMouseLeave,
            "data-name": "auto",
          })
        ),
        ze = (function (e) {
          var t;
          return (
            ((t = class extends i.PureComponent {
              constructor(e, t) {
                super(e, t),
                  (this._priceScale = null),
                  (this._handleSelect = () => {
                    const e = this.context.chartWidget.model(),
                      t = (0, v.ensureNotNull)(this.state.series),
                      n = t.priceScale(),
                      i = n.mode();
                    t.priceScale().isLockScale() || e.setPriceScaleMode({ percentage: !i.percentage }, n, Me);
                  }),
                  (0, _.validateRegistry)(t, { chartWidget: o.any.isRequired }),
                  (this.state = { isActive: !1, series: null }),
                  (this._priceAxisHighlighter = new fe(this.context.chartWidget, () => this._priceScale, "percentage"));
              }
              componentDidMount() {
                const e = this.context.chartWidget;
                e.withModel(null, () => {
                  const t = e.model().mainSeries(),
                    n = t.priceScale();
                  this._handleMainSeriesPriceScaleChanged(n),
                    t.priceScaleChanged().subscribe(this, this._handleMainSeriesPriceScaleChanged),
                    this._handleScaleChange({}, n.mode()),
                    this.setState({ isActive: t.priceScale().isPercentage(), series: t });
                });
              }
              componentWillUnmount() {
                const e = this.context.chartWidget;
                e.withModel(null, () => {
                  e.model().mainSeries().priceScaleChanged().unsubscribe(this, this._handleMainSeriesPriceScaleChanged);
                }),
                  null !== this._priceScale &&
                    (this._priceScale.modeChanged().unsubscribeAll(this), (this._priceScale = null)),
                  this._priceAxisHighlighter.destroy();
              }
              render() {
                const { className: t } = this.props,
                  { isActive: n, series: s } = this.state;
                return i.createElement(e, {
                  ...this._priceAxisHighlighter.handlers(),
                  className: t,
                  isPercentage: n,
                  isDisabled: null === s,
                  onClick: this._handleSelect,
                });
              }
              _handleMainSeriesPriceScaleChanged(e) {
                null !== this._priceScale && this._priceScale.modeChanged().unsubscribe(this, this._handleScaleChange),
                  (this._priceScale = e),
                  this._priceScale.modeChanged().subscribe(this, this._handleScaleChange),
                  this._handleScaleChange({}, e.mode());
              }
              _handleScaleChange(e, t) {
                Boolean(t.percentage) !== this.state.isActive && this.setState({ isActive: Boolean(t.percentage) });
              }
            }).contextType = xe),
            t
          );
        })((e) =>
          i.createElement(ve.ToolWidgetButton, {
            icon: Te,
            title: Be.percentageHint,
            className: e.className,
            isActive: e.isPercentage,
            isDisabled: e.isDisabled,
            isGrouped: !0,
            onClick: Ke(e.onClick, "percent", e.isPercentage),
            onMouseEnter: e.onMouseEnter,
            onMouseLeave: e.onMouseLeave,
            "data-name": "percentage",
          })
        );
      const Pe = (0, X.hotKeySerialize)({
          keys: [(0, Z.humanReadableModifiers)(Z.Modifiers.Alt, !1), "Enter"],
          text: "{0} + {1}",
        }),
        Fe = (function (e) {
          var t;
          return (
            ((t = class extends i.PureComponent {
              constructor(e, t) {
                super(e, t),
                  (this._handleClick = (e) => {
                    const { resizerDetacher: t, chartWidgetCollection: n } = this.context;
                    e.shiftKey && t.detachable.value()
                      ? t.detach()
                      : this.state.isFullscreen
                      ? t.exitFullscreen()
                      : t.requestFullscreen();
                  }),
                  (this._handleLayoutChange = (e) => {
                    this.setState({ isFullscreen: e });
                  }),
                  (this._handlePhoneSize = () => {
                    0;
                  }),
                  (0, _.validateRegistry)(t, {
                    chartWidgetCollection: o.any.isRequired,
                    resizerDetacher: o.any.isRequired,
                  });
                const { resizerDetacher: n } = t;
                this.state = { isFullscreen: n.fullscreen.value(), isChangeLayoutButton: this._isChangeLayoutButton() };
              }
              componentDidMount() {
                const { resizerDetacher: e, chartWidgetCollection: t } = this.context,
                  { mobileChangeLayoutEnabled: n } = this.props;
                e.fullscreen.subscribe(this._handleLayoutChange);
              }
              componentWillUnmount() {
                const { resizerDetacher: e, chartWidgetCollection: t } = this.context,
                  { mobileChangeLayoutEnabled: n } = this.props;
                e.fullscreen.unsubscribe(this._handleLayoutChange);
              }
              render() {
                const { className: t } = this.props,
                  { isFullscreen: n, isChangeLayoutButton: s } = this.state;
                return i.createElement(e, { className: t, isFullscreen: n, onClick: this._handleClick });
              }
              _isChangeLayoutButton() {
                return !1;
              }
            }).contextType = we),
            t
          );
        })((e) =>
          i.createElement(ve.ToolWidgetButton, {
            icon: Ae,
            title: Be.fullscreenHint,
            className: e.className,
            isActive: e.isFullscreen,
            onClick: Ke(e.onClick, "maximize chart", e.isFullscreen),
            "data-tooltip-hotkey": Pe,
            "data-name": "fullscreen",
          })
        ),
        Ue = { properties: !0, fullscreen: !0, preventPhoneLayout: !0 },
        He = {
          fullscreen: Number.MIN_SAFE_INTEGER,
          preventPhoneLayout: Number.MIN_SAFE_INTEGER,
          properties: Number.MIN_SAFE_INTEGER,
          separator: -2,
          timeZones: -1,
          auto: 0,
          logarithm: 1,
          percentage: 2,
          session: 3,
          adj: 4,
          backAdj: 5,
          settlementAsClose: 6,
        },
        Oe = (() => {
          const e = new Map();
          return e.set(We, "logarithm"), e.set(ze, "percentage"), e.set(Ie, "auto"), e.set(Fe, "fullscreen"), e;
        })();
      function qe(e) {
        0;
      }
      function Ke(e, t, n) {
        return (t) => {
          e(t);
        };
      }
      const je = {
          dateRangeMode: "hidden",
          separator: !0,
          timeZones: !0,
          fullscreen: !0,
          preventPhoneLayout: !0,
          properties: !0,
          auto: !0,
          logarithm: !0,
          percentage: !0,
          session: !0,
          adj: !0,
          backAdj: !0,
          settlementAsClose: !0,
        },
        Ge = (0, _.registryContextType)();
      class Ve extends i.PureComponent {
        constructor(e, t) {
          var n, a;
          super(e, t),
            (this._timezoneButtonRef = null),
            (this._layout = Object.assign({}, je)),
            (this._raf = null),
            (this._toolbar = null),
            (this._rangeExpanded = null),
            (this._rangeCollapsed = null),
            (this._seriesComponents = {}),
            (this._injector =
              ((n = () => this._layout),
              (a = (e, t) => (this._seriesComponents[t] = e)),
              (e, t, s) => {
                if (i.isValidElement(e) && "string" != typeof e.type) {
                  const { props: o } = e;
                  if ("string" == typeof o.className) {
                    const l = { className: r(o.className, 0 === t && Ne.first, t === s.length - 1 && Ne.last) },
                      c = n(),
                      h = (0, v.ensureDefined)(Oe.get(e.type));
                    return i.createElement(
                      "div",
                      {
                        key: null === e.key ? void 0 : e.key,
                        className: r(Ne.inline, c[h] && Ne.collapsed),
                        ref: (e) => a(e, h),
                        onClick: () => qe(),
                      },
                      i.cloneElement(e, l)
                    );
                  }
                }
                return e;
              })),
            (this._updateButtonsVisibility = () => {
              0;
            }),
            (this._handleResize = () => {
              null === this._raf &&
                (this._raf = requestAnimationFrame(() => {
                  const e = this._layout,
                    t = (0, v.ensureNotNull)(this._toolbar),
                    n = (0, v.ensureNotNull)(this._rangeExpanded),
                    i =
                      ((a = (function (e) {
                        const t = {};
                        return (
                          Object.keys(e).forEach((n) => {
                            const i = e[n];
                            if (null !== i) {
                              const e = s.findDOMNode(i);
                              null !== e && (t[n] = e);
                            }
                          }),
                          t
                        );
                      })(this._seriesComponents)),
                      Object.keys(a)
                        .map((e) => ({ name: e, width: a[e].offsetWidth }))
                        .sort((e, t) => He[e.name] - He[t.name]));
                  var a;
                  const o = t.offsetWidth,
                    r = i.reduce((e, t) => e + t.width, 0),
                    l = n.offsetWidth,
                    c = !Boolean(n.textContent) || o - r - l <= 0 ? "collapsed" : "expanded";
                  if ((Object.assign(e, { dateRangeMode: c }), "expanded" !== c)) {
                    const t = o - (0, v.ensureNotNull)(this._rangeCollapsed).offsetWidth - 0;
                    let n = 0,
                      s = 0;
                    for (const a of i)
                      (n += a.width),
                        a.name in Ue
                          ? ((s += a.width), Object.assign(e, { [a.name]: !1 }))
                          : Object.assign(e, { [a.name]: t <= n });
                    t <= s && Object.assign(e, { dateRangeMode: "hidden" });
                  } else
                    Object.assign(e, {
                      separator: !1,
                      timeZones: !1,
                      fullscreen: !1,
                      preventPhoneLayout: !1,
                      properties: !1,
                      auto: !1,
                      logarithm: !1,
                      percentage: !1,
                      session: !1,
                      adj: !1,
                      settlementAsClose: !1,
                      backAdj: !1,
                    });
                  this._applyResizing(), (this._raf = null);
                }));
            }),
            (this._handleTimezoneButtonRef = (e) => {
              this._timezoneButtonRef = e;
            }),
            (this._handleMeasure = () => {
              null !== this._toolbar && this.resizeUI();
            }),
            (this._handleFullscreenableChange = (e) => {
              this._setStateWithResize({ isFullscreenable: e });
            }),
            (this._handlePreventPhoneLayoutButtonVisibility = () => {
              0;
            }),
            (this._handleToolbarRef = (e) => (this._toolbar = e)),
            (this._handleRangeCollapsedRef = (e) => (this._rangeCollapsed = e)),
            (this._handleRangeExpandedRef = (e) => (this._rangeExpanded = e)),
            (this._handleTimeZonesRef = (e) => {
              this._seriesComponents.timeZones = e;
            }),
            (this._handleSessionsRef = (e) => {
              this._seriesComponents.session = e;
            }),
            (this._handleSeparatorRef = (e) => {
              this._seriesComponents.separator = e;
            }),
            (0, _.validateRegistry)(t, {
              onContentBoxChanged: o.any.isRequired,
              chartApiInstance: o.any.isRequired,
              chartWidget: o.any.isRequired,
              chartWidgetCollection: o.any.isRequired,
              resizerDetacher: o.any.isRequired,
            });
          const { resizerDetacher: l } = this.context;
          this.state = {
            isFullscreenable: l.fullscreenable.value(),
            isPreventPhoneLayoutButton: this._isPreventPhoneLayoutButton(),
          };
        }
        componentDidMount() {
          const { onContentBoxChanged: e, resizerDetacher: t, chartWidgetCollection: n, chartWidget: i } = this.context;
          e.subscribe(this, this._handleResize),
            t.fullscreenable.subscribe(this._handleFullscreenableChange),
            this.updateTimezonesButton(),
            this.resizeUI();
        }
        componentWillUnmount() {
          const { onContentBoxChanged: e, resizerDetacher: t, chartWidgetCollection: n, chartWidget: i } = this.context;
          e.unsubscribe(this, this._handleResize),
            t.fullscreenable.unsubscribe(this._handleFullscreenableChange),
            null !== this._raf && (cancelAnimationFrame(this._raf), (this._raf = null));
        }
        render() {
          const e = this._layout,
            {
              timeFramesWidgetEnabled: t,
              timeWidgetEnabled: n,
              percentageScaleButtonEnabled: s,
              logScaleButtonEnabled: a,
              autoScaleButtonEnabled: o,
              fullscreenButtonEnabled: h,
            } = this.props;
          return i.createElement(
            "div",
            { className: Ne.toolbar, ref: this._handleToolbarRef, onContextMenu: Re.preventDefault },
            t &&
              i.createElement(
                ke.FragmentMap,
                null,
                i.createElement(
                  "div",
                  {
                    className: r(Ne.dateRangeWrapper, "collapsed" !== e.dateRangeMode && Ne.collapsed),
                    ref: this._handleRangeCollapsedRef,
                  },
                  i.createElement(
                    "div",
                    { className: r(Ne.dateRangeCollapsed) },
                    i.createElement(z, { goToDateButton: this.props.goToDateEnabled })
                  )
                ),
                i.createElement(
                  l,
                  { onMeasure: this._handleMeasure },
                  i.createElement(
                    "div",
                    {
                      className: r(Ne.dateRangeWrapper, "expanded" !== e.dateRangeMode && Ne.collapsed),
                      ref: this._handleRangeExpandedRef,
                    },
                    i.createElement(
                      "div",
                      { className: r(Ne.dateRangeExpanded) },
                      i.createElement(G, { onSelectRange: this._trackRangeButtonClick }),
                      this.props.goToDateEnabled && i.createElement(pe, null),
                      this.props.goToDateEnabled && i.createElement(te, null)
                    )
                  )
                )
              ),
            i.createElement(
              "div",
              { className: Ne.seriesControlWrapper },
              n &&
                i.createElement(
                  l,
                  { onMeasure: this._handleMeasure },
                  i.createElement(
                    "div",
                    { className: r(Ne.inline, e.timeZones && Ne.collapsed), ref: this._handleTimeZonesRef },
                    i.createElement(
                      "div",
                      { className: Ne.inline, onClick: this._trackTimezonesButtonClick },
                      i.createElement(me, {
                        className: Ne.timezone,
                        withMenu: this.props.timezoneMenuEnabled,
                        ref: this._handleTimezoneButtonRef,
                      })
                    )
                  )
                ),
              !1,
              i.createElement(
                "div",
                { ref: this._handleSeparatorRef, className: r(Ne.inline, e.separator && Ne.collapsed) },
                i.createElement(pe, null)
              ),
              i.createElement(
                ke.FragmentMap,
                { map: this._injector },
                !1,
                !1,
                !1,
                s && !c.enabled("fundamental_widget") && i.createElement(ze, { className: Ne.icon }),
                a && i.createElement(We, { className: Ne.item }),
                o && i.createElement(Ie, { className: Ne.item }),
                h &&
                  this.state.isFullscreenable &&
                  i.createElement(Fe, {
                    className: Ne.icon,
                    mobileChangeLayoutEnabled: this.props.mobileChangeLayoutEnabled,
                  }),
                !1
              )
            )
          );
        }
        updateTimezonesButton() {
          null !== this._timezoneButtonRef && this._timezoneButtonRef.updateTimezonesButton();
        }
        resizeUI() {
          this._handleResize();
        }
        _trackRangeButtonClick(e) {
          0;
        }
        _trackTimezonesButtonClick() {
          qe();
        }
        _setStateWithResize(e) {
          Object.assign(this._layout, je), this._applyResizing(), this.setState(e, () => this._handleResize());
        }
        _applyResizing() {
          const { dateRangeMode: e, ...t } = this._layout;
          this._rangeExpanded && this._rangeExpanded.classList.toggle(Ne.collapsed, "expanded" !== e),
            this._rangeCollapsed && this._rangeCollapsed.classList.toggle(Ne.collapsed, "collapsed" !== e),
            Object.keys(t).forEach((e) => {
              const n = e,
                i = this._seriesComponents[n];
              i && i.classList.toggle(Ne.collapsed, t[n]);
            });
        }
        _isPreventPhoneLayoutButton() {
          return !1;
        }
      }
      Ve.contextType = Ge;
      const Xe = {
        onContentBoxChanged: o.any,
        computeContentBox: o.any,
        chartWidget: o.any,
        chartApiInstance: o.any,
        chartWidgetCollection: o.any,
        resizerDetacher: o.any,
        availableTimeFrames: o.any,
      };
      class Ze extends i.PureComponent {
        constructor(e) {
          super(e),
            (this._setActiveChart = (e) => {
              this._defineRegistry(e), this.setState({ chartWidget: e });
            });
          const t = this.props.chartWidgetCollection.activeChartWidget.value();
          (this.state = { chartWidget: t }), this._defineRegistry(t);
        }
        componentDidMount() {
          this.props.chartWidgetCollection.activeChartWidget.subscribe(this._setActiveChart);
        }
        componentWillUnmount() {
          this.props.chartWidgetCollection.activeChartWidget.unsubscribe(this._setActiveChart);
        }
        render() {
          const { chartWidget: e } = this.state;
          if (!e) return null;
          const { options: t } = this.props,
            n = {
              timeFramesWidgetEnabled: t.timeFramesWidgetEnabled,
              goToDateEnabled: t.timeFramesWidget.goToDateEnabled,
              timeWidgetEnabled: t.timeWidgetEnabled,
              timezoneMenuEnabled: t.timeWidget && t.timeWidget.timezoneMenuEnabled,
              sessionIdButtonEnabled: t.sessionIdButtonEnabled,
              backAdjustmentButtonEnabled: t.backAdjustmentButtonEnabled,
              settlementAsCloseButtonEnabled: t.settlementAsCloseButtonEnabled,
              adjustForDividendsButtonEnabled: t.adjustForDividendsButtonEnabled,
              logScaleButtonEnabled: t.logScaleButtonEnabled,
              percentageScaleButtonEnabled: t.percentageScaleButtonEnabled,
              autoScaleButtonEnabled: t.autoScaleButtonEnabled,
              fullscreenButtonEnabled: t.fullscreenButtonEnabled,
              mobileChangeLayoutEnabled: t.mobileChangeLayoutEnabled,
            };
          return i.createElement(
            _.RegistryProvider,
            { validation: Xe, value: this._registry },
            i.createElement(Ve, { key: e.id(), ...n })
          );
        }
        _defineRegistry(e) {
          const {
              onContentBoxChanged: t,
              computeContentBox: n,
              chartApiInstance: i,
              chartWidgetCollection: s,
              options: { timeFramesWidgetEnabled: a, timeFramesWidget: o },
            } = this.props,
            r = a ? o.availableTimeFrames : void 0;
          this._registry = {
            onContentBoxChanged: t,
            computeContentBox: n,
            chartWidget: e,
            availableTimeFrames: r,
            chartApiInstance: i,
            chartWidgetCollection: s,
            resizerDetacher: e.getResizerDetacher(),
          };
        }
      }
      class Ye {
        constructor(e, t, n, a, o, r, l) {
          this._container = e;
          const c = i.createElement(Ze, {
            onContentBoxChanged: t,
            computeContentBox: n,
            chartWidgetCollection: a,
            chartApiInstance: o,
            chartWidgetOptions: r,
            options: l,
          });
          s.render(c, e), e.setAttribute("data-initialized", "true");
        }
        destroy() {
          s.unmountComponentAtNode(this._container), this._container.removeAttribute("data-initialized");
        }
      }
    },
    53178: (e, t, n) => {
      "use strict";
      n.d(t, { validateRegistry: () => r, RegistryProvider: () => l, registryContextType: () => c });
      var i = n(67294),
        s = n(45697),
        a = n.n(s);
      const o = i.createContext({});
      function r(e, t) {
        a().checkPropTypes(t, e, "context", "RegistryContext");
      }
      function l(e) {
        const { validation: t, value: n } = e;
        return r(n, t), i.createElement(o.Provider, { value: n }, e.children);
      }
      function c() {
        return o;
      }
    },
    59726: (e, t, n) => {
      "use strict";
      function i(e, t, n, i, s) {
        function a(s) {
          if (e > s.timeStamp) return;
          const a = s.target;
          void 0 !== n && null !== t && null !== a && a.ownerDocument === i && (t.contains(a) || n(s));
        }
        return (
          s.click && i.addEventListener("click", a, !1),
          s.mouseDown && i.addEventListener("mousedown", a, !1),
          s.touchEnd && i.addEventListener("touchend", a, !1),
          s.touchStart && i.addEventListener("touchstart", a, !1),
          () => {
            i.removeEventListener("click", a, !1),
              i.removeEventListener("mousedown", a, !1),
              i.removeEventListener("touchend", a, !1),
              i.removeEventListener("touchstart", a, !1);
          }
        );
      }
      n.d(t, { addOutsideEventListener: () => i });
    },
    87230: (e, t, n) => {
      "use strict";
      n.d(t, { FragmentMap: () => s });
      var i = n(67294);
      function s(e) {
        if (e.map) {
          return i.Children.toArray(e.children).map(e.map);
        }
        return e.children;
      }
    },
    57330: (e, t, n) => {
      "use strict";
      n.d(t, { Hint: () => r });
      var i = n(67294),
        s = n(94184),
        a = n.n(s),
        o = n(30160);
      function r(e) {
        const { text: t = "", className: n } = e;
        return i.createElement("span", { className: a()(o.shortcut, n) }, t);
      }
    },
    90590: (e, t, n) => {
      "use strict";
      n.d(t, { ContextMenuItem: () => g });
      var i = n(67294),
        s = n(94184),
        a = n.n(s),
        o = n(49775),
        r = n(73226),
        l = n(23060),
        c = n(57330),
        h = n(12343),
        d = n(655),
        u = n(37978),
        m = n(85848);
      function g(e) {
        const {
            isTitle: t,
            isLoading: n,
            isHovered: s,
            active: g,
            checkable: p,
            disabled: v,
            checked: b,
            icon: _,
            iconChecked: f,
            hint: C,
            subItems: y,
            label: E,
            onClick: S,
            children: x,
            toolbox: M,
            jsxLabel: w,
            size: k = "normal",
          } = e,
          R = (0, i.useContext)(l.EmptyIconsContext),
          T = !!y.length;
        return n
          ? i.createElement("li", { className: a()(m.item, m.loading, m[k]) }, i.createElement(r.Loader, null))
          : i.createElement(
              "li",
              {
                className: a()(
                  m.item,
                  m.interactive,
                  t && m.title,
                  v && m.disabled,
                  s && m.hovered,
                  g && m.active,
                  R && m.emptyIcons,
                  m[k]
                ),
                onClick: S,
              },
              i.createElement(o.Icon, {
                className: a()(m.icon),
                icon: (function () {
                  if (p && b) return f || _ || h;
                  return _;
                })(),
              }),
              i.createElement("span", { className: a()(m.label) }, null != w ? w : E),
              !!M &&
                i.createElement(o.Icon, {
                  onClick: function () {
                    M && M.action();
                  },
                  className: m.remove,
                  icon: u,
                }),
              !T && C && i.createElement(c.Hint, { className: m.shortcut, text: C }),
              T && i.createElement(o.Icon, { className: m.nested, icon: d }),
              x
            );
      }
    },
    23060: (e, t, n) => {
      "use strict";
      n.d(t, { EmptyIconsContext: () => i });
      const i = n(67294).createContext(!1);
    },
    10284: (e, t, n) => {
      "use strict";
      n.d(t, { Separator: () => o });
      var i = n(67294),
        s = n(94184),
        a = n(68552);
      function o(e) {
        return i.createElement("div", { className: s(a.separator, e.className) });
      }
    },
    95860: (e, t, n) => {
      "use strict";
      n.d(t, { DEFAULT_POPUP_MENU_ITEM_THEME: () => c, PopupMenuItem: () => u });
      var i = n(67294),
        s = n(94184),
        a = n(79424),
        o = n(87438),
        r = n(74818),
        l = n(66549);
      const c = l;
      function h(e) {
        const { reference: t, ...n } = e,
          s = { ...n, ref: t };
        return i.createElement(e.href ? "a" : "div", s);
      }
      function d(e) {
        e.stopPropagation();
      }
      function u(e) {
        const {
            id: t,
            role: n,
            "aria-selected": c,
            className: u,
            title: m,
            labelRowClassName: g,
            labelClassName: p,
            shortcut: v,
            forceShowShortcuts: b,
            icon: _,
            isActive: f,
            isDisabled: C,
            isHovered: y,
            appearAsDisabled: E,
            label: S,
            link: x,
            showToolboxOnHover: M,
            target: w,
            rel: k,
            toolbox: R,
            reference: T,
            onMouseOut: A,
            onMouseOver: N,
            suppressToolboxClick: B = !0,
            theme: W = l,
          } = e,
          L = (0, r.filterDataProps)(e),
          D = (0, i.useRef)(null);
        return i.createElement(
          h,
          {
            ...L,
            id: t,
            role: n,
            "aria-selected": c,
            className: s(u, W.item, _ && W.withIcon, { [W.isActive]: f, [W.isDisabled]: C || E, [W.hovered]: y }),
            title: m,
            href: x,
            target: w,
            rel: k,
            reference: function (e) {
              (D.current = e), "function" == typeof T && T(e);
              "object" == typeof T && (T.current = e);
            },
            onClick: function (t) {
              const { dontClosePopup: n, onClick: i, onClickArg: s, trackEventObject: r } = e;
              if (C) return;
              r && (0, o.trackEvent)(r.category, r.event, r.label);
              i && i(s, t);
              n || (0, a.globalCloseMenu)();
            },
            onContextMenu: function (t) {
              const { trackEventObject: n, trackRightClick: i } = e;
              n && i && (0, o.trackEvent)(n.category, n.event, n.label + "_rightClick");
            },
            onMouseUp: function (t) {
              const { trackEventObject: n, trackMouseWheelClick: i } = e;
              if (1 === t.button && x && n) {
                let e = n.label;
                i && (e += "_mouseWheelClick"), (0, o.trackEvent)(n.category, n.event, e);
              }
            },
            onMouseOver: N,
            onMouseOut: A,
          },
          void 0 !== _ && i.createElement("div", { className: W.icon, dangerouslySetInnerHTML: { __html: _ } }),
          i.createElement(
            "div",
            { className: s(W.labelRow, g) },
            i.createElement("div", { className: s(W.label, p) }, S)
          ),
          (void 0 !== v || b) && i.createElement("div", { className: W.shortcut }, (I = v) && I.split("+").join(" + ")),
          void 0 !== R &&
            i.createElement("div", { onClick: B ? d : void 0, className: s(W.toolbox, { [W.showOnHover]: M }) }, R)
        );
        var I;
      }
    },
    10869: (e, t, n) => {
      "use strict";
      n.d(t, { PopupMenuSeparator: () => r });
      var i = n(67294),
        s = n(94184),
        a = n.n(s),
        o = n(78706);
      function r(e) {
        const { size: t = "normal", className: n } = e;
        return i.createElement("div", {
          className: a()(
            o.separator,
            "small" === t && o.small,
            "normal" === t && o.normal,
            "large" === t && o.large,
            n
          ),
        });
      }
    },
    76420: (e, t, n) => {
      "use strict";
      n.d(t, { PopupMenu: () => c });
      var i = n(67294),
        s = n(73935),
        a = n(4735),
        o = n(90901),
        r = n(94884),
        l = n(47165);
      function c(e) {
        const {
            controller: t,
            children: n,
            isOpened: c,
            closeOnClickOutside: h = !0,
            doNotCloseOn: d,
            onClickOutside: u,
            onClose: m,
            ...g
          } = e,
          p = (0, i.useContext)(r.CloseDelegateContext),
          v = (0, l.useOutsideEvent)({
            handler: function (e) {
              u && u(e);
              if (!h) return;
              if (d && e.target instanceof Node) {
                const t = s.findDOMNode(d);
                if (t instanceof Node && t.contains(e.target)) return;
              }
              m();
            },
            mouseDown: !0,
            touchStart: !0,
          });
        return c
          ? i.createElement(
              a.Portal,
              { top: "0", left: "0", right: "0", bottom: "0", pointerEvents: "none" },
              i.createElement(
                "span",
                { ref: v, style: { pointerEvents: "auto" } },
                i.createElement(
                  o.Menu,
                  {
                    ...g,
                    onClose: m,
                    onScroll: function (t) {
                      const { onScroll: n } = e;
                      n && n(t);
                    },
                    customCloseDelegate: p,
                    ref: t,
                  },
                  n
                )
              )
            )
          : null;
      }
    },
    41445: (e, t, n) => {
      "use strict";
      n.d(t, { DEFAULT_SLIDER_THEME: () => r, SliderItem: () => l, factory: () => c });
      var i = n(67294),
        s = n(94184),
        a = n(16282),
        o = n(16929);
      const r = o;
      function l(e) {
        const t = s(e.className, o.tab, {
          [o.active]: e.isActive,
          [o.disabled]: e.isDisabled,
          [o.defaultCursor]: !!e.shouldUseDefaultCursor,
          [o.noBorder]: !!e.noBorder,
        });
        return i.createElement(
          "div",
          {
            className: t,
            onClick: e.onClick,
            ref: e.reference,
            "data-type": "tab-item",
            "data-value": e.value,
            "data-name": "tab-item-" + e.value.toString().toLowerCase(),
          },
          e.children
        );
      }
      function c(e) {
        return class extends i.PureComponent {
          constructor() {
            super(...arguments), (this.activeTab = { current: null });
          }
          componentDidUpdate() {
            ((0, a.ensureNotNull)(this._slider).style.transition = "transform 350ms"), this._componentDidUpdate();
          }
          componentDidMount() {
            this._componentDidUpdate();
          }
          render() {
            const { className: t } = this.props,
              n = this._generateTabs();
            return i.createElement(
              "div",
              { className: s(t, o.tabs), "data-name": this.props["data-name"] },
              n,
              i.createElement(e, {
                reference: (e) => {
                  this._slider = e;
                },
              })
            );
          }
          _generateTabs() {
            return (
              (this.activeTab.current = null),
              i.Children.map(this.props.children, (e) => {
                const t = e,
                  n = Boolean(t.props.isActive),
                  s = {
                    reference: (e) => {
                      n && (this.activeTab.current = e), t.props.reference && t.props.reference(e);
                    },
                  };
                return i.cloneElement(t, s);
              })
            );
          }
          _componentDidUpdate() {
            const e = (0, a.ensureNotNull)(this._slider).style;
            if (this.activeTab.current) {
              const t = this.activeTab.current.offsetWidth,
                n = this.activeTab.current.offsetLeft;
              (e.transform = `translateX(${n}px)`), (e.width = t + "px"), (e.opacity = "1");
            } else e.opacity = "0";
          }
        };
      }
      c(function (e) {
        return i.createElement("div", { className: o.slider, ref: e.reference });
      });
    },
    4598: (e, t, n) => {
      "use strict";
      function i(e, t, n = {}) {
        const i = Object.assign({}, t);
        for (const s of Object.keys(t)) {
          const a = n[s] || s;
          a in e && (i[s] = [e[a], t[s]].join(" "));
        }
        return i;
      }
      function s(e, t, n = {}) {
        return Object.assign({}, e, i(e, t, n));
      }
      n.d(t, { weakComposeClasses: () => i, mergeThemes: () => s });
    },
    655: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path stroke="currentColor" d="M8 5l3.5 3.5L8 12"/></svg>';
    },
    17806: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="none" stroke="currentColor" d="M11 1.5h3.5a2 2 0 0 1 2 2V7m0 5v2.5a2 2 0 0 1-2 2H11m-4 0H3.5a2 2 0 0 1-2-2V11m0-4V3.5a2 2 0 0 1 2-2H7"/></svg>';
    },
    93410: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"><g fill="none" stroke="currentColor"><circle cx="3.5" cy="3.5" r="2"/><circle cx="10.5" cy="10.5" r="2"/><path stroke-linecap="square" d="M9.5 1.5l-5 11"/></g></svg>';
    },
    12343: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7 15l5 5L23 9"/></svg>';
    },
    37978: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M9.7 9l4.65-4.65-.7-.7L9 8.29 4.35 3.65l-.7.7L8.29 9l-4.64 4.65.7.7L9 9.71l4.65 4.64.7-.7L9.71 9z"/></svg>';
    },
    14561: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" d="M5.5 13v-2.5m8.5 11h6.5a2 2 0 0 0 2-2v-9m-17 0v-2c0-1.1.9-2 2-2h13a2 2 0 0 1 2 2v2m-17 0h17"/><path fill="currentColor" d="M10 4h1v4h-1V4zM17 4h1v4h-1V4z"/><path stroke="currentColor" d="M4 18.5h7.5m0 0L8 22m3.5-3.5L8 15"/></svg>';
    },
    51496: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path stroke="currentColor" d="M1.5 8V6.5m7.5 9h5.5a2 2 0 0 0 2-2v-7m-15 0v-2c0-1.1.9-2 2-2h11a2 2 0 0 1 2 2v2m-15 0h15"/><path fill="currentColor" d="M5 1h1v3H5V1zM12 1h1v3h-1V1z"/><path stroke="currentColor" d="M0 12.5h7.5m0 0L4 16m3.5-3.5L4 9"/></svg>';
    },
  },
]);
