(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{14:function(e,n,t){e.exports=t(37)},19:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(0),u=t.n(a),r=t(13),c=t.n(r),o=(t(19),t(2)),l=t(3),i=t.n(l),m="api/persons",f=function(){return i.a.get(m)},s=function(e){return i.a.post(m,e)},d=function(e,n){return i.a.put("".concat(m,"/").concat(e),n)},b=function(e){return i.a.delete("".concat(m,"/").concat(e))},h=function(e){var n=e.message;return null===n?null:u.a.createElement("div",{className:"success"},n)},v=function(e){var n=e.message;return null===n?null:u.a.createElement("div",{className:"error"},n)},E=function(e){var n=e.onChange,t=e.filterValue;return u.a.createElement("div",null,"filter shown with ",u.a.createElement("input",{onChange:n,value:t}))},p=function(e){var n=e.onSubmit,t=e.onNameChange,a=e.nameValue,r=e.onNumberChange,c=e.numberValue;return u.a.createElement("form",{onSubmit:n},u.a.createElement("div",null,"name: ",u.a.createElement("input",{onChange:t,value:a})),u.a.createElement("div",null,"number: ",u.a.createElement("input",{onChange:r,value:c})),u.a.createElement("div",null,u.a.createElement("button",{type:"submit"},"add")))},g=function(e){var n=e.contacts,t=e.deleteContact;return u.a.createElement("div",null,n.map((function(e){return u.a.createElement("div",{key:e.name},e.name," ",e.number," ",u.a.createElement("button",{onClick:function(){return t(e.name)}},"Delete"))})))},C=function(){var e=Object(a.useState)([]),n=Object(o.a)(e,2),t=n[0],r=n[1],c=Object(a.useState)(""),l=Object(o.a)(c,2),i=l[0],m=l[1],C=Object(a.useState)(""),j=Object(o.a)(C,2),O=j[0],w=j[1],S=Object(a.useState)(""),k=Object(o.a)(S,2),N=k[0],V=k[1],y=Object(a.useState)(null),T=Object(o.a)(y,2),D=T[0],I=T[1],x=Object(a.useState)(null),J=Object(o.a)(x,2),U=J[0],A=J[1];Object(a.useEffect)((function(){f().then((function(e){r(e.data)}))}),[]);var B=""===N?t:t.filter((function(e){return e.name.toUpperCase().includes(N.toUpperCase())}));return u.a.createElement("div",null,u.a.createElement("h2",null,"Phonebook"),u.a.createElement(h,{message:D}),u.a.createElement(v,{message:U}),u.a.createElement(E,{onChange:function(e){V(e.target.value)},filterValue:N}),u.a.createElement("h3",null,"add a new"),u.a.createElement(p,{onSubmit:function(e){e.preventDefault();var n={name:i,number:O,id:t.length+1},a=t.find((function(e){return e.name===i}));a?window.confirm("".concat(a.name," is already added to phonebook, replace the old number with a new one?"))&&(n.id=a.id,d(a.id,n).then((function(e){var u=t.findIndex((function(e){return e.name===a.name}));t.splice(u,1,n),console.log(u),m(""),w(""),r(t),I("Changed ".concat(n.name)),setTimeout((function(){return I(null)}),5e3)})).catch((function(e){A(e),setTimeout((function(){return A(null)}),5e3),r(t.filter((function(e){return e.name!==n.name})))}))):s(n).then((function(e){r(t.concat(n)),m(""),w(""),I("Added ".concat(n.name)),setTimeout((function(){return I(null)}),5e3)}))},onNameChange:function(e){m(e.target.value)},nameValue:i,onNumberChange:function(e){w(e.target.value)},numberValue:O}),u.a.createElement("h3",null,"Numbers"),u.a.createElement(g,{contacts:B,deleteContact:function(e){return function(e){if(window.confirm("Delete ".concat(e,"?"))){var n=t.find((function(n){return n.name===e})).id;b(n).then((function(n){r(t.filter((function(n){return n.name!==e})))})).catch((function(n){A("Information of ".concat(e," has already been removed from server")),setTimeout((function(){return A(null)}),5e3),r(t.filter((function(n){return n.name!==e})))}))}}(e)}}))};c.a.render(u.a.createElement(C,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.41465c84.chunk.js.map