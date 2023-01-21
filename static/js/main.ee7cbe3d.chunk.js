(this.webpackJsonpreminder=this.webpackJsonpreminder||[]).push([[0],{22:function(e,t,a){e.exports=a(48)},30:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),o=a.n(c),l=(a(30),a(21)),u=a(5),i=a(6),s=a(7),m=a.n(s),f=a(19),d=a(2),p=a(20),E=a.n(p),b={sports:21,history:23,politics:24},h=r.a.createContext(),v=function(e){var t=e.children,a=Object(n.useState)(!0),c=Object(d.a)(a,2),o=c[0],l=c[1],s=Object(n.useState)(!1),p=Object(d.a)(s,2),v=p[0],y=p[1],g=Object(n.useState)([]),O=Object(d.a)(g,2),j=O[0],N=O[1],S=Object(n.useState)(0),w=Object(d.a)(S,2),q=w[0],x=w[1],C=Object(n.useState)(0),M=Object(d.a)(C,2),k=M[0],z=M[1],_=Object(n.useState)(!1),F=Object(d.a)(_,2),Q=F[0],A=F[1],I=Object(n.useState)(!1),D=Object(d.a)(I,2),H=D[0],J=D[1],L=Object(n.useState)({amount:10,category:"sports",difficulty:"easy"}),P=Object(d.a)(L,2),T=P[0],B=P[1],R=function(){var e=Object(f.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(!0),l(!1),e.next=4,E.a.get(t).catch((function(e){return console.log(e)}));case 4:(a=e.sent)?(n=a.data.results).length>0?(N(n),y(!1),l(!1),A(!1)):(l(!0),A(!0)):o(!0);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Y=function(){x((function(e){var t=e+1;return t>j.length-1?(G(),0):t}))},G=function(){J(!0)};return r.a.createElement(h.Provider,{value:{waiting:o,loading:v,questions:j,index:q,correct:k,error:Q,isModalOpen:H,nextQuestion:Y,checkAnswer:function(e){e&&z((function(e){return e+1})),Y()},closeModal:function(){l(!0),z(0),J(!1)},quiz:T,handleChange:function(e){var t=e.target.name,a=e.target.value;B(Object(i.a)(Object(i.a)({},T),{},Object(u.a)({},t,a)))},handleSubmit:function(e){e.preventDefault();var t=T.amount,a=T.category,n=T.difficulty,r="".concat("https://opentdb.com/api.php?","amount=").concat(t,"&category=").concat(b[a],"&difficulty=").concat(n,"&type=multiple");R(r)}}},t)},y=function(){return Object(n.useContext)(h)},g=function(){var e=y(),t=e.quiz,a=e.handleChange,n=e.handleSubmit,c=e.error;return r.a.createElement("main",null,r.a.createElement("section",{className:"quiz quiz-small"},r.a.createElement("form",{className:"setup-form",onSubmit:n},r.a.createElement("h2",null,"Setup Quiz"),r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{htmlFor:"amount"},"Number of Questions:"),r.a.createElement("input",{type:"number",id:"amount",name:"amount",onChange:a,value:t.amount,className:"form-input",min:0,max:50})),r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{htmlFor:"category"},"Category:"),r.a.createElement("select",{id:"category",name:"category",className:"form-input",value:t.category,onChange:a},r.a.createElement("option",{value:"sports"},"sports"),r.a.createElement("option",{value:"history"},"history"),r.a.createElement("option",{value:"politics"},"politics"))),r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{htmlFor:"difficulty"},"Difficulty:"),r.a.createElement("select",{id:"difficulty",name:"difficulty",className:"form-input",value:t.difficulty,onChange:a},r.a.createElement("option",{value:"easy"},"easy"),r.a.createElement("option",{value:"medium"},"medium"),r.a.createElement("option",{value:"hard"},"hard"))),c&&r.a.createElement("p",{className:"error"},"can't generate questions, please try different options"),r.a.createElement("button",{type:"submit",className:"submit-btn"},"Start"))))},O=function(){return r.a.createElement("main",null,r.a.createElement("div",{className:"loading"}))},j=function(){var e=y(),t=e.isModalOpen,a=e.closeModal,n=e.correct,c=e.questions;return r.a.createElement("div",{className:"".concat(t?"modal-container isOpen":"modal-container")},r.a.createElement("div",{className:"modal-content"},r.a.createElement("h2",null,"Congrats!"),r.a.createElement("p",{className:""},"You answered ",(n/c.length*100).toFixed(0),"% of questions correctly"),r.a.createElement("button",{className:"close-btn",onClick:function(){return a()}},"Play Again")))};var N=function(){var e=y(),t=e.waiting,a=e.loading,n=e.questions,c=e.index,o=e.correct,u=e.nextQuestion,i=e.checkAnswer;if(e.closeModal,t)return r.a.createElement(g,null);if(a)return r.a.createElement(O,null);var s=n[c],m=s.question,f=s.incorrect_answers,d=s.correct_answer,p=Object(l.a)(f),E=Math.floor(4*Math.random());return 3===E?p.push(d):(p.push(p[E]),p[E]=d),r.a.createElement("main",null,r.a.createElement(j,null),r.a.createElement("section",{className:"quiz"},r.a.createElement("p",{className:"correct-answers"},"correct answers: ",o,"/",c),r.a.createElement("article",{className:"container"},r.a.createElement("h2",{dangerouslySetInnerHTML:{__html:m}}),r.a.createElement("div",null,p.map((function(e,t){return r.a.createElement("button",{key:t,onClick:function(){return i(d===e)},dangerouslySetInnerHTML:{__html:e},className:"answer-btn"})})))),r.a.createElement("button",{onClick:function(){return u()},className:"next-question"},"next question")))};o.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null,r.a.createElement(N,null))))}},[[22,1,2]]]);
//# sourceMappingURL=main.ee7cbe3d.chunk.js.map