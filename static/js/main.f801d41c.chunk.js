(this["webpackJsonpreact-task-tracker"]=this["webpackJsonpreact-task-tracker"]||[]).push([[0],{19:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(12),s=n.n(a),o=(n(19),n(10)),i=n(14),u=n(5),j=n.n(u),l=n(6),d=n(4),b=n(8),h=n(2),f=n(1),O=function(e){var t=e.color,n=e.text,r=e.onClick;return Object(f.jsx)("div",{children:Object(f.jsx)("button",{style:{backgroundColor:t},className:"btn",onClick:r,children:n})})},x=function(e){var t=e.title,n=e.onAdd,r=e.showAdd,c=Object(h.e)();return Object(f.jsxs)("header",{className:"header",children:[Object(f.jsx)("h1",{children:t}),"/"===c.pathname&&Object(f.jsx)(O,{color:r?"red":"green",text:r?"Close":"Add",onClick:n})]})};x.defaultProps={title:"TODO APP"};var p=x,k=function(){return Object(f.jsxs)("footer",{children:[Object(f.jsx)("p",{children:"Copyright \xa9 2021"}),Object(f.jsx)(b.b,{to:"/about",className:"link-about",children:"About"})]})},m=function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)("h4",{children:"Version 1.0.0"}),Object(f.jsx)(b.b,{to:"/",children:Object(f.jsx)(O,{text:"Go back",color:"#00aeff"})})]})},v=n(13),g=function(e){var t=e.task,n=e.onDelete,r=e.onToggle;return Object(f.jsxs)("div",{className:"task ".concat(t.reminder?"reminder":""),onDoubleClick:function(){return r(t.id)},children:[Object(f.jsxs)("h3",{children:[t.text," ",Object(f.jsx)(v.a,{style:{color:"red",cursor:"pointer"},onClick:function(){return n(t.id)}})]}),Object(f.jsx)("p",{children:t.day})]})},y=function(e){var t=e.tasks,n=e.onDelete,r=e.onToggle;return Object(f.jsx)(f.Fragment,{children:t.map((function(e){return Object(f.jsx)(g,{task:e,onDelete:n,onToggle:r},e.id)}))})},T=function(e){var t=e.onAdd,n=Object(r.useState)(""),c=Object(d.a)(n,2),a=c[0],s=c[1],o=Object(r.useState)(""),i=Object(d.a)(o,2),u=i[0],j=i[1],l=Object(r.useState)(!1),b=Object(d.a)(l,2),h=b[0],O=b[1];return Object(f.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),a||alert("Please add a text"),t({text:a,day:u,reminder:h}),s(""),j(""),O(!1)},children:[Object(f.jsxs)("div",{className:"form-control",children:[Object(f.jsx)("label",{children:"Task"}),Object(f.jsx)("input",{type:"text",placeholder:"Add task",value:a,onChange:function(e){return s(e.target.value)}})]}),Object(f.jsxs)("div",{className:"form-control",children:[Object(f.jsx)("label",{children:"Day & time"}),Object(f.jsx)("input",{type:"text",placeholder:"Add day & time",value:u,onChange:function(e){return j(e.target.value)}})]}),Object(f.jsxs)("div",{className:"form-control form-control-check",children:[Object(f.jsx)("label",{children:"Set reminder"}),Object(f.jsx)("input",{type:"checkbox",checked:h,value:h,onChange:function(e){return O(e.currentTarget.checked)}})]}),Object(f.jsx)("input",{type:"submit",value:"Save task",className:"btn btn-block"})]})};var w=function(e){var t=e.showAddTask,n=e.addTask,r=e.tasks,c=e.toggleReminder,a=e.deleteTask;return Object(f.jsxs)("div",{children:[t&&Object(f.jsx)(T,{onAdd:n}),r.length>0?Object(f.jsx)(y,{tasks:r,onDelete:a,onToggle:c}):"No Tasks To Show"]})},A=function(){var e=Object(r.useState)(!1),t=Object(d.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)([]),s=Object(d.a)(a,2),u=s[0],O=s[1];Object(r.useEffect)((function(){var e=function(){var e=Object(l.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:t=e.sent,O(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var x=function(){var e=Object(l.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/tasks");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(l.a)(j.a.mark((function e(t){var n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/tasks/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(l.a)(j.a.mark((function e(t){var n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/tasks",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(t)});case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,O([].concat(Object(i.a)(u),[r]));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(l.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/tasks/".concat(t),{method:"DELETE"});case 2:200===e.sent.status?O(u.filter((function(e){return e.id!==t}))):alert("Error Deleting This Task");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(l.a)(j.a.mark((function e(t){var n,r,c,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(t);case 2:return n=e.sent,r=Object(o.a)(Object(o.a)({},n),{},{reminder:!n.reminder}),e.next=6,fetch("http://localhost:5000/tasks/".concat(t),{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(r)});case 6:return c=e.sent,e.next=9,c.json();case 9:a=e.sent,O(u.map((function(e){return e.id===t?Object(o.a)(Object(o.a)({},e),{},{reminder:a.reminder}):e})));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsx)(b.a,{children:Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)(p,{onAdd:function(){return c(!n)},showAdd:n}),Object(f.jsxs)(h.c,{children:[Object(f.jsx)(h.a,{path:"/",exact:!0,element:Object(f.jsx)(w,{showAddTask:n,addTask:g,tasks:u,toggleReminder:T,deleteTask:y})}),Object(f.jsx)(h.a,{path:"/about",element:Object(f.jsx)(m,{})})]}),Object(f.jsx)(k,{})]})})};s.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(A,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.f801d41c.chunk.js.map