(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{35:function(e,t,n){e.exports=n(63)},40:function(e,t,n){},41:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(32),c=n.n(r),i=(n(40),n(6)),l=n(7),s=n(9),u=n(8),h=n(10),d=(n(41),n(16)),m=n(11),f=n(15),v=n(18);var p=function(e){return o.a.createElement("div",null,o.a.createElement("button",{name:e.name,onClick:e.onClick,title:e.title,authors:e.authors,description:e.description,value:e.buttonValue},e.name))};var b=function(e){return o.a.createElement("div",null,o.a.createElement("input",{placeholder:e.placeholder,name:e.name,onChange:e.onChange}))},k=n(14),g=n.n(k),w={searchBooks:function(e){var t=e.split(" ").join("+");return g.a.get("https://www.googleapis.com/books/v1/volumes?q="+t)},getBooks:function(){return g.a.get("/api/books")},saveBook:function(e){return g.a.post("/api/books",e)},deleteBook:function(e){return g.a.delete("/api/books",e)}};var E=function(e){var t,n,a;switch(console.log(e),a=e.authors?e.authors.length:0,null!=e.src&&e.src,a){case 1:t="Author:",n=e.authors;break;case 0:t="No authors found",n="";break;default:t="Authors:",n=e.authors.join(", ")}return o.a.createElement("div",null,o.a.createElement("h2",null,"Title: ",e.title),o.a.createElement("h4",null,t," ",n),o.a.createElement("p",null,"Description: ",e.description),o.a.createElement("span",null,o.a.createElement("img",{src:e.src,alt:e.title})),o.a.createElement(p,Object.assign({},e,{name:e.buttonName})))},j=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={search:"",books:[]},n.buttonClickApi=function(e){console.log(n.state),w.searchBooks(n.state.search).then(function(e){console.log(e.data),n.setState(Object(v.a)({},n.state,{books:e.data.items})),console.log("state:",n.state)})},n.updateSearch=function(e){var t=e.currentTarget.name,a=e.currentTarget.value;n.setState(Object(v.a)({},n.state,Object(f.a)({},t,a)))},n.saveToDatabase=function(e,t,n,a){var o={title:e,description:t,authors:n,imageSrc:a};w.saveBook(o)},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.state.books;return o.a.createElement("div",null,o.a.createElement(b,{placeholder:"Search for a book!",name:"search",onChange:this.updateSearch}),o.a.createElement(p,{name:"search",onClick:this.buttonClickApi}),t.length>0?t.map(function(t){return o.a.createElement(E,{title:t.volumeInfo.title,key:t.id,onClick:function(){e.saveToDatabase(t.volumeInfo.title,t.volumeInfo.description,t.volumeInfo.authors,t.volumeInfo.imageLinks.thumbnail)},authors:t.volumeInfo.authors,src:t.volumeInfo.imageLinks.thumbnail,description:t.volumeInfo.description,buttonName:"save"})}):"No Results Yet")}}]),t}(o.a.Component),O=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={savedBooks:[]},n.loadBooks=function(){w.getBooks().then(function(e){console.log(e.data),n.setState({savedBooks:e.data})})},n.deleteBook=function(e){w.deleteBook(e.target.value).then(n.loadBooks)},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.loadBooks()}},{key:"render",value:function(){var e=this,t=this.state.savedBooks;return o.a.createElement("div",null,t.length>0?t.map(function(t){return o.a.createElement(E,{title:t.title,authors:t.authors,src:t.imageSrc,buttonName:"delete",description:t.description,buttonValue:t._id,onClick:e.deleteBook})}):"nothing here yet")}}]),t}(o.a.Component);var B=function(){return o.a.createElement(d.a,null,o.a.createElement("div",null,o.a.createElement(d.b,{to:"/search"},"Search"),o.a.createElement(d.b,{to:"/saved"},"Saved"),o.a.createElement("hr",null),o.a.createElement(m.a,{exact:!0,path:"/search",component:j}),o.a.createElement(m.a,{exact:!0,path:"/saved",component:O})))},y=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={path:""},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(B,null))}}]),t}(o.a.Component),C=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(y,null)}}]),t}(a.Component),S=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function I(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(o.a.createElement(C,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");S?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):I(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):I(e)})}}()}},[[35,1,2]]]);
//# sourceMappingURL=main.ebf83444.chunk.js.map