(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{19:function(e,t,n){},20:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var i=n(1),s=n.n(i),c=n(6),r=n.n(c),a=(n(19),n(14)),o=n(2),l=(n(20),n(0));function d(){return Object(l.jsx)("div",{children:"Admin"})}var j=Object(i.createContext)({general:{},projectHighlights:[]}),h=function(e){var t=e.children,n={general:{name:"Giselle A.",description:"Full-stack Web Developer"},projectHighlights:[{imageUrl:"https://wallpaperaccess.com/full/2029165.jpg",title:"title 1",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},{imageUrl:"https://wallpaper.dog/large/20459082.jpg",title:"title 2",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},{imageUrl:"https://images8.alphacoders.com/926/thumb-1920-926492.jpg",title:"title 3",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},{imageUrl:"https://images.alphacoders.com/109/thumb-1920-1098034.jpg",title:"title 4",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},{imageUrl:"https://cdn.wallpapersafari.com/55/48/FM2C4X.jpg",title:"title 5",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}]};return Object(l.jsx)(j.Provider,{value:n,children:t})};n(22),n(23);function m(e){var t=e.project;return Object(l.jsxs)("div",{className:"project",children:[Object(l.jsx)("img",{src:t.imageUrl,alt:""}),Object(l.jsxs)("div",{className:"project-info",children:[Object(l.jsx)("h3",{children:t.title}),Object(l.jsx)("p",{children:t.description}),Object(l.jsxs)("div",{className:"project-cta",children:[Object(l.jsx)("button",{className:"project-live",children:"Live Demo"}),Object(l.jsx)("button",{className:"project-code",children:"See Code"})]})]})]})}function p(){var e=Object(i.useContext)(j),t=e.general,n=e.projectHighlights;return Object(l.jsxs)("section",{className:"portfolio-home",children:[Object(l.jsxs)("div",{className:"home-hero",children:[Object(l.jsx)("h1",{children:t.name}),Object(l.jsx)("h3",{children:t.description})]}),Object(l.jsxs)("div",{className:"home-highlights",children:[Object(l.jsxs)("div",{className:"highlights-control",children:[Object(l.jsx)("h3",{children:"Project Highlights"}),Object(l.jsxs)("h5",{children:["See more ",Object(l.jsx)("i",{className:"fas fa-arrow-right"})]})]}),Object(l.jsx)("div",{className:"highlights-carousel",children:n.map((function(e,t){return Object(l.jsx)(m,{project:e},t)}))})]})]})}var u=n(7),b=function(){var e=window;return{width:e.innerWidth,height:e.innerHeight}};n(24),n(25);function x(){return Object(l.jsxs)("ul",{className:"nav-normal",children:[Object(l.jsx)("li",{children:"Home"}),Object(l.jsx)("li",{children:"Projects"}),Object(l.jsx)("li",{children:"Skills"}),Object(l.jsx)("li",{children:"About"}),Object(l.jsx)("li",{children:"Contact"})]})}n(26);function O(e){var t=e.isNavOpen;return Object(l.jsxs)("ul",{className:"nav-responsive ".concat(t&&"nav-responsive-open"),children:[Object(l.jsx)("li",{children:"Home"}),Object(l.jsx)("li",{children:"Projects"}),Object(l.jsx)("li",{children:"Skills"}),Object(l.jsx)("li",{children:"About"}),Object(l.jsx)("li",{children:"Contact"})]})}function g(){var e=Object(i.useState)(!1),t=Object(u.a)(e,2),n=t[0],s=t[1],c=function(){var e=Object(i.useState)(b()),t=Object(u.a)(e,2),n=t[0],s=t[1];return Object(i.useEffect)((function(){function e(){s(b())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),n}(),a=c.width;return r.a.createPortal(Object(l.jsxs)("div",{className:"navigation",children:[Object(l.jsx)("h1",{className:"brand",children:"<jess />"}),a>600?Object(l.jsx)(x,{}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(O,{isNavOpen:n}),Object(l.jsxs)("div",{class:"burger ".concat(n&&"toggle"),onClick:function(){return s((function(e){return!e}))},children:[Object(l.jsx)("div",{class:"line1"}),Object(l.jsx)("div",{class:"line2"}),Object(l.jsx)("div",{class:"line3"})]})]})]}),document.getElementById("nav"))}n(27);function v(){return Object(l.jsx)(h,{children:Object(l.jsxs)("div",{className:"portfolio",children:[Object(l.jsx)(g,{}),Object(l.jsx)(p,{})]})})}var y=function(){return Object(l.jsx)(a.a,{children:Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{exact:!0,path:"/",component:v}),Object(l.jsx)(o.a,{exact:!0,path:"/admin",component:d})]})})};r.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(y,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.a592ab9d.chunk.js.map