(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    5728: function (n, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return r(6106);
        },
      ]);
    },
    7320: function (n, t, r) {
      "use strict";
      var e = r(5893);
      t.Z = function (n) {
        let { title: t } = n;
        return (0, e.jsx)("h1", { children: t });
      };
    },
    8711: function (n, t, r) {
      "use strict";
      var e = r(5893),
        s = r(5675),
        c = r.n(s),
        i = r(1294),
        u = r.n(i);
      r(7294);
      var d = r(1664),
        o = r.n(d);
      t.Z = function (n) {
        let { productsItem: t } = n;
        return (0, e.jsx)(e.Fragment, {
          children: (0, e.jsx)("ul", {
            children: t.map((n) =>
              (0, e.jsx)(
                "li",
                {
                  className: u().productsItem,
                  children: (0, e.jsxs)(o(), {
                    href: "/products/".concat(n.id),
                    children: [
                      (0, e.jsx)(c(), {
                        src: n.imageUrl,
                        alt: n.name,
                        width: 300,
                        height: 300,
                      }),
                      (0, e.jsxs)("div", { children: ["상품명 : ", n.name] }),
                      (0, e.jsxs)("div", {
                        children: ["가격 : ", n.price, "$"],
                      }),
                    ],
                  }),
                },
                n.id
              )
            ),
          }),
        });
      };
    },
    6106: function (n, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          __N_SSP: function () {
            return d;
          },
        });
      var e = r(5893),
        s = r(7320),
        c = r(8711),
        i = r(1664),
        u = r.n(i),
        d = !0;
      t.default = function (n) {
        let { initialProducts: t } = n;
        return (0, e.jsxs)("div", {
          children: [
            (0, e.jsx)(s.Z, {
              className: "productContainer",
              title: "상품 요약 페이지",
            }),
            (0, e.jsx)(c.Z, { productsItem: t }),
            (0, e.jsx)(u(), {
              href: "/products",
              children: (0, e.jsx)("div", { children: "더 보기" }),
            }),
          ],
        });
      };
    },
    1294: function (n) {
      n.exports = { productsItem: "ProductsList_productsItem__4xWV8" };
    },
  },
  function (n) {
    n.O(0, [888, 774, 179], function () {
      return n((n.s = 5728));
    }),
      (_N_E = n.O());
  },
]);
