(this["webpackJsonphealth-app"]=this["webpackJsonphealth-app"]||[]).push([[0],{51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){"use strict";n.r(t);var i,s,a,c,o,r,l,d,j,u=n(1),h=n.n(u),b=n(38),m=n.n(b),p=(n(51),n(52),n(15)),O=n(39),x=n.n(O),f=(n(53),n(7)),v=n(3),N=v.b.button(i||(i=Object(f.a)(["\n    border: 1px solid #616A94;\n    border-radius: 50px;\n    padding: 15px 30px;\n    text-decoration: none;\n    color: #616A94;\n    background-color: #161A31;\n    transition: 0.3s;\n\n    cursor: pointer;\n    outline: none;\n\n    &:hover {\n        color: white;\n        background-color: #616A94;\n    }\n"]))),g=N,y=n(0),w=v.b.div.withConfig({displayName:"Start__Intro",componentId:"ko9gio-0"})(["margin:20px 0px;text-align:center;font-size:20px;padding:auto;"]),k=Object(v.a)(s||(s=Object(f.a)(["\n    margin-top: 1.5em;\n"]))),S=Object(v.a)(a||(a=Object(f.a)(["\n  margin: 20px 0px;\n  text-align: center;\n  font-size: 60px;\n"]))),L=Object(v.b)("h1").withConfig({displayName:"Start___StyledH",componentId:"ko9gio-1"})(["",""],S),C=Object(v.b)(g).withConfig({displayName:"Start___StyledButton",componentId:"ko9gio-2"})(["",""],k),I=function(e){var t=e.props;return Object(y.jsxs)(w,{children:[Object(y.jsx)(L,{children:"Take the quiz "}),Object(y.jsx)(C,{onClick:function(){return t(!0)},children:"Begin"})]})},T=n(46),A=n(43),M=n.n(A),E=v.b.h1(c||(c=Object(f.a)(["\n    margin-top: 4em;\n    font-size: 30px;\n"]))),_=v.b.p(o||(o=Object(f.a)(["\n    font-size: 20px;\n    margin: 1em;\n"]))),H=function(e){var t=e.pts;return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(E,{children:"Game Over"}),Object(y.jsxs)(_,{children:["You did ",t," out of 5!"]}),Object(y.jsx)(N,{onClick:function(){return window.location.reload()},children:"Retry"})]})},D=v.b.div(r||(r=Object(f.a)(["\n    text-align: center;\n    font-size: 17px;\n    margin: 10px;\n    padding:auto;\n"]))),F=v.b.div(l||(l=Object(f.a)(["\n    display: flex;\n    flex-direction: column;\n\n    margin: auto;\n\n    @media screen and (min-width: 1180px) {\n        width: 90%;\n    }\n"]))),B=v.b.button(d||(d=Object(f.a)(["\n    display: block;\n    border: 1px solid #616A94;\n    border-radius: 15px;\n    padding: 15px 30px;\n    text-decoration: none;\n    color: #616A94;\n    background-color: #161A31;\n    transition: 0.3s;\n    font-size: 1em;\n    outline: none;\n    user-select: none;\n    margin-top: 1em;\n    cursor: pointer;\n    \n    @media screen and (min-width: 1180px) {\n        &:hover {\n            color: white;\n            background-color: #616A94;\n        }\n    }\n"]))),P=v.b.div(j||(j=Object(f.a)(["\n    width: 90%;\n    margin: 0 auto;\n"]))),z=function(){var e=Object(u.useState)([]),t=Object(p.a)(e,2),n=t[0],i=t[1],s=Object(u.useState)(0),a=Object(p.a)(s,2),c=a[0],o=a[1],r=Object(u.useState)(0),l=Object(p.a)(r,2),d=l[0],j=l[1],h=function(e){var t=e.target.outerText;n[c].answer===t&&j(d+1),o(c+1)};return Object(u.useEffect)((function(){M.a.get("https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple").then((function(e){i(e.data.results.map((function(e){return{question:e.question,options:(t=[].concat(Object(T.a)(e.incorrect_answers),[e.correct_answer]),t.sort((function(){return Math.random()-.5}))),answer:e.correct_answer};var t})))})).catch((function(e){return console.error(e)}))}),[]),Object(y.jsxs)(D,{children:[n[c]&&Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(P,{dangerouslySetInnerHTML:{__html:n[c].question}}),Object(y.jsx)(F,{children:n[c].options.map((function(e,t){return Object(y.jsx)(B,{dangerouslySetInnerHTML:{__html:e},onClick:h},t)}))})]}),5===c&&Object(y.jsx)(H,{pts:d})]})},V=(n(73),function(e){var t=e.title;return Object(y.jsx)("div",{className:"heading",children:t})});var X=function(){var e=Object(u.useState)(!1),t=Object(p.a)(e,2),n=t[0],i=t[1];return Object(y.jsxs)("div",{className:"game-container",id:"game",children:[Object(y.jsx)(V,{title:"Our Games"}),Object(y.jsxs)("div",{className:"game",children:[Object(y.jsx)("div",{className:"quiz",children:n?Object(y.jsx)(z,{}):Object(y.jsx)(I,{props:i})}),Object(y.jsx)(x.a,{})]})]})},G=(n(74),function(){return Object(y.jsxs)("div",{className:"about",children:[Object(y.jsx)(V,{title:"What is mental Health ?"}),Object(y.jsxs)("p",{children:["Mental health includes our emotional, psychological, and social well-being. It affects how we think, feel, and act. It also helps determine how we handle stress, relate to others, and make choices. Mental health is important at every stage of life, from childhood and adolescence through adulthood."," "]}),Object(y.jsx)("p",{children:"Over the course of your life, if you experience mental health problems, your thinking, mood, and behavior could be affected. Many factors contribute to mental health problems, including: Biological factors, such as genes or brain chemistry Life experiences, such as trauma or abuse Family history of mental health problems."})]})}),Y=(n(75),n(76),function(e){var t=e.Picture,n=e.Name,i=e.About;return Object(y.jsx)("div",{className:"profile-card",children:Object(y.jsxs)("div",{className:"card-container",children:[Object(y.jsx)("img",{className:"round",src:t,height:"200px",alt:"user"}),Object(y.jsx)("h3",{children:n}),Object(y.jsx)("h6",{children:"India"}),Object(y.jsx)("h4",{children:i})]})})}),q=n.p+"static/media/pp.eb84e9a2.jfif",R=function(){return Object(y.jsxs)("div",{className:"created-by",id:"created-by",children:[Object(y.jsx)(V,{title:"Proudly Created By"}),Object(y.jsx)("div",{className:"created-by-container",children:Object(y.jsx)(Y,{Picture:q,Name:"Ankit Singh",About:"Web Development"})})]})};n(77);var W=function(){return Object(y.jsxs)("div",{className:"landing",id:"home",children:[Object(y.jsx)("div",{className:"title",children:"KIND 2 MIND"}),Object(y.jsx)("div",{className:"tagline",children:"#GentleTowardsMental"})]})},Q=n(44),Z=n(11),J=n(12),K=n(5),U=n(14),$=n(13),ee=(n(78),function(e){Object(U.a)(n,e);var t=Object($.a)(n);function n(e){var i;return Object(Z.a)(this,n),(i=t.call(this,e)).state={Name:"",Age:"",Hobbies:"",Email:"",allFieldFilled:!1},i.handleChange=i.handleChange.bind(Object(K.a)(i)),i.handleSubmit=i.handleSubmit.bind(Object(K.a)(i)),i}return Object(J.a)(n,[{key:"handleSubmit",value:function(e){var t=this.state,n=t.Hobbies,i=t.Name,s=t.Age,a=t.Email;e.preventDefault(),n&&i&&s&&a&&console.log("sent")}},{key:"handleChange",value:function(e){this.setState(Object(Q.a)({allFieldFilled:e.target.value},e.target.name,e.target.value))}},{key:"render",value:function(){return Object(y.jsx)("div",{"data-aos":"zoom-out-down",children:Object(y.jsxs)("form",{onSubmit:this.handleSubmit,className:"form",children:[Object(y.jsx)(V,{title:"INTERACT"}),Object(y.jsxs)("div",{className:"form-grid",children:[Object(y.jsx)("textarea",{name:"Name",placeholder:"Name",value:this.state.Name,onChange:this.handleChange,className:"input-box"}),Object(y.jsx)("textarea",{name:"Hobbies",placeholder:"Hobbies",value:this.state.Hobbies,onChange:this.handleChange,className:"input-box"}),Object(y.jsx)("textarea",{name:"Age",placeholder:"Age",value:this.state.Age,onChange:this.handleChange,className:"input-box"}),Object(y.jsx)("textarea",{name:"Email",placeholder:"Email",value:this.state.Email,onChange:this.handleChange,className:"input-box"}),Object(y.jsx)("button",{className:"btn",disabled:this.setState.allFieldFilled,children:"Meet !"})]})]})})}}]),n}(u.Component)),te=(n(79),function(){return Object(y.jsx)("div",{className:"meet-container",id:"meet",children:Object(y.jsx)(ee,{})})}),ne=(n(80),function(){var e=Object(u.useState)(!1),t=Object(p.a)(e,2),n=t[0],i=t[1];return window.addEventListener("scroll",(function(){window.scrollY>=200?i(!0):i(!1)})),Object(y.jsx)("nav",{className:n?"navbar navbar-active stroke":"navbar stroke","data-aos":"ease in out",children:Object(y.jsxs)("ul",{children:[Object(y.jsx)("li",{children:Object(y.jsx)("a",{href:"#home",children:"Home"})}),Object(y.jsx)("li",{children:Object(y.jsx)("a",{href:"#about",children:"Mental health"})}),Object(y.jsx)("li",{children:Object(y.jsx)("a",{href:"#created-by",children:"About Us"})})]})})}),ie=(n(81),n(82),function(e){var t=e.url;return Object(y.jsx)("div",{className:"video-card",children:Object(y.jsx)("iframe",{src:t,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})})}),se=function(){return Object(y.jsxs)("div",{className:"pcl",id:"playlist",children:[Object(y.jsx)(V,{title:"Our Curated Playlist for you"}),Object(y.jsxs)("div",{className:"playlist-container",children:[Object(y.jsx)("div",{className:"heading",children:"Meditate"}),Object(y.jsxs)("div",{className:"video",children:[Object(y.jsx)(ie,{url:"https://www.youtube.com/embed/y7e-GC6oGhg?list=PLed9ILr_V6XCNlOdrBLBEhEXTQndkvzA-"}),Object(y.jsx)(ie,{url:"https://www.youtube.com/embed/xdfs4Bo3-Yw?list=PLed9ILr_V6XDTsTvce_MTzGLehZH2e9H7"}),Object(y.jsx)(ie,{url:"https://www.youtube.com/embed/EwQkfoKxRvo?list=PLed9ILr_V6XDTsTvce_MTzGLehZH2e9H7"}),Object(y.jsx)(ie,{url:"https://www.youtube.com/embed/KxgD9En6Vso?list=PLed9ILr_V6XDTsTvce_MTzGLehZH2e9H7"}),Object(y.jsx)(ie,{url:"https://www.youtube.com/embed/Lju6h-C37hE?list=PLed9ILr_V6XDTsTvce_MTzGLehZH2e9H7"}),Object(y.jsx)(ie,{url:"https://www.youtube.com/embed/cFfP7N8wpMA?list=PLed9ILr_V6XDTsTvce_MTzGLehZH2e9H7"})]})]}),Object(y.jsxs)("div",{className:"playlist-container",children:[Object(y.jsx)("div",{className:"heading",children:"Get Relaxed"}),Object(y.jsxs)("div",{className:"video",children:[Object(y.jsx)(ie,{url:"https://www.youtube.com/embed/TKqv5ekBjI0?list=PLed9ILr_V6XCNlOdrBLBEhEXTQndkvzA-"}),Object(y.jsx)(ie,{url:"https://www.youtube.com/embed/fBVJoIbNjdQ?list=PLed9ILr_V6XCNlOdrBLBEhEXTQndkvzA-"}),Object(y.jsx)(ie,{url:"https://www.youtube.com/embed/y7e-GC6oGhg"}),Object(y.jsx)(ie,{url:"https://www.youtube.com/embed/36YnV9STBqc?list=PLed9ILr_V6XCSvxHqojdFjiANqrlQLXS6"}),Object(y.jsx)(ie,{url:"https://www.youtube.com/embed/1itSqkbXIlU?list=PLed9ILr_V6XA2DcPIcD7tOEmTc-0TSuBZ"}),Object(y.jsx)(ie,{url:"https://www.youtube.com/embed/T52rBA2wh74?list=PLed9ILr_V6XCSvxHqojdFjiANqrlQLXS6"})]})]})]})},ae=n(17),ce=n(2),oe=n(16),re=n.n(oe),le={display:"none"},de=function(e){Object(U.a)(n,e);var t=Object($.a)(n);function n(e,i){var s;return Object(Z.a)(this,n),(s=t.call(this,e,i)).state={redirect:!1},s.saveNote=s.saveNote.bind(Object(K.a)(s)),s.deleteNote=s.deleteNote.bind(Object(K.a)(s)),s}return Object(J.a)(n,[{key:"saveNote",value:function(e){if(e.preventDefault(),""===this.title.value)alert("Title is needed");else{var t={id:Number(this.id.value),title:this.title.value,description:this.description.value};this.props.persistNote(t),this.setState({redirect:!0})}}},{key:"deleteNote",value:function(e){console.log("deleteNote"),e.preventDefault(),this.props.deleteNote(this.props.note.id)}},{key:"renderFormTitleAction",value:function(){return void 0!==this.props.note.id?"Edit Note":"Add Note"}},{key:"renderFormButtons",value:function(){return void 0!==this.props.note.id?Object(y.jsxs)("div",{children:[Object(y.jsx)("button",{type:"submit",className:"btn btn-success float-right",children:"Save Note"}),Object(y.jsx)("button",{onClick:this.deleteNote,className:"btn btn-danger",children:"Delete Note"})]}):Object(y.jsx)("button",{type:"submit",className:"btn btn-success float-right",children:"Save Note"})}},{key:"render",value:function(){var e=this;return this.state.redirect?this.props.note?Object(y.jsx)(ce.a,{push:!0,to:"/note/".concat(this.props.note.id)}):Object(y.jsx)(ce.a,{push:!0,to:"/"}):Object(y.jsxs)("div",{className:"card",children:[Object(y.jsx)("div",{className:"card-header",children:this.renderFormTitleAction()}),Object(y.jsx)("div",{className:"card-body",children:Object(y.jsxs)("form",{ref:"noteForm",onSubmit:this.saveNote,children:[Object(y.jsxs)("div",{className:"form-group",children:[Object(y.jsx)("p",{children:Object(y.jsx)("input",{className:"form-control",style:le,disabled:!0,ref:function(t){return e.id=t},defaultValue:this.props.note.id})}),Object(y.jsx)("p",{children:Object(y.jsx)("input",{className:"form-control",ref:function(t){return e.title=t},defaultValue:this.props.note.title,placeholder:"enter title"})}),Object(y.jsx)("p",{children:Object(y.jsx)("textarea",{className:"form-control",rows:"10",ref:function(t){return e.description=t},defaultValue:this.props.note.description,placeholder:"enter description"})})]}),this.renderFormButtons()]})})]})}}]),n}(u.Component),je=n(45),ue=n.n(je),he=function(e){Object(U.a)(n,e);var t=Object($.a)(n);function n(e,i){var s;return Object(Z.a)(this,n),(s=t.call(this,e,i)).state={redirect:!1},s.deleteNote=s.deleteNote.bind(Object(K.a)(s)),s.editNote=s.editNote.bind(Object(K.a)(s)),s}return Object(J.a)(n,[{key:"deleteNote",value:function(e){e.preventDefault(),this.props.deleteNote(this.props.note.id)}},{key:"editNote",value:function(e){e.preventDefault(),this.props.editNote(this.props.note.id)}},{key:"renderFormattedDate",value:function(){return"Last edited:"+re()(this.props.note.date).format("DD MMM YYYY [at] HH:mm")}},{key:"render",value:function(){return this.state.redirect||!this.props.note?Object(y.jsx)(ce.a,{push:!0,to:"/"}):Object(y.jsxs)("div",{className:"card",children:[Object(y.jsx)("div",{className:"card-header",children:Object(y.jsx)("h4",{children:this.props.note.title})}),Object(y.jsxs)("div",{className:"card-body",children:[Object(y.jsx)("p",{className:"text-center font-weight-light small text-muted",children:this.renderFormattedDate()}),Object(y.jsx)("p",{className:"card-text",children:ue()(this.props.note.description)}),Object(y.jsx)("button",{onClick:this.deleteNote,className:"btn btn-danger",children:"Delete Note"}),Object(y.jsx)("button",{onClick:this.editNote,className:"btn btn-success float-right",children:"Edit Note"})]})]})}}]),n}(u.Component),be=function(e){Object(U.a)(n,e);var t=Object($.a)(n);function n(){return Object(Z.a)(this,n),t.apply(this,arguments)}return Object(J.a)(n,[{key:"renderFormattedDate",value:function(e){return re()(e).format("DD MMM YYYY")}},{key:"render",value:function(){var e=this;if(!this.props.notes||0===this.props.notes.length)return Object(y.jsx)("div",{children:"There are no notes"});var t=this.props.notes.map((function(t){return Object(y.jsxs)(ae.c,{activeClassName:"active",to:"/note/".concat(t.id),className:"list-group-item",onClick:e.props.viewNote.bind(e,t.id),children:[Object(y.jsx)("div",{className:"text-truncate primary",children:t.title}),Object(y.jsx)("div",{className:"font-weight-light font-italic small",children:e.renderFormattedDate(t.date)})]},t.id.toString())}));return Object(y.jsx)("ul",{className:"list-group",children:t})}}]),n}(u.Component),me=function(e){Object(U.a)(n,e);var t=Object($.a)(n);function n(e){var i;Object(Z.a)(this,n),i=t.call(this,e);var s=localStorage.getItem("notes")?JSON.parse(localStorage.getItem("notes")):[];return i.state={notes:s,selectedNote:null,editMode:!1},i.getNotesNextId=i.getNotesNextId.bind(Object(K.a)(i)),i.addNote=i.addNote.bind(Object(K.a)(i)),i.viewNote=i.viewNote.bind(Object(K.a)(i)),i.openEditNote=i.openEditNote.bind(Object(K.a)(i)),i.saveEditedNote=i.saveEditedNote.bind(Object(K.a)(i)),i.deleteNote=i.deleteNote.bind(Object(K.a)(i)),i}return Object(J.a)(n,[{key:"getNotesNextId",value:function(){return this.state.notes.length>0?this.state.notes[this.state.notes.length-1].id+1:0}},{key:"persistNotes",value:function(e){localStorage.setItem("notes",JSON.stringify(e)),this.setState({notes:e})}},{key:"addNote",value:function(e){e.id=this.getNotesNextId(),e.date=re()();var t=this.state.notes;t.push(e),this.persistNotes(t),this.setState({selectedNote:null,editMode:!1})}},{key:"viewNote",value:function(e){var t=this.state.notes.findIndex((function(t){return t.id===e}));t>=0?this.setState({selectedNote:this.state.notes[t],editMode:!1}):console.warn("note with id "+e+" not found when trying to edit it")}},{key:"openEditNote",value:function(e){var t=this.state.notes.findIndex((function(t){return t.id===e}));t>=0?this.setState({selectedNote:this.state.notes[t],editMode:!0}):console.warn("note with id "+e+" not found when trying to open for edit")}},{key:"saveEditedNote",value:function(e){var t=this.state.notes,n=t.findIndex((function(t){return t.id===e.id}));n>=0?(e.date=re()(),t[n]=e,this.persistNotes(t)):console.warn("note with id "+e.id+" not found when trying to save the edited note"),this.setState({selectedNote:e,editMode:!1})}},{key:"deleteNote",value:function(e){var t=this.state.notes,n=t.findIndex((function(t){return t.id===e}));n>=0?window.confirm("Are you sure you want to delete this note?")&&(t.splice(n,1),this.persistNotes(t),this.setState({selectedNote:null,editMode:!1})):console.warn("note with id "+e+" not found when trying to delete it")}},{key:"getEmptyNote",value:function(){return{title:"",description:""}}},{key:"renderLeftMenu",value:function(){return Object(y.jsxs)("div",{className:"card",children:[this.renderHeader(),Object(y.jsx)("div",{className:"card-body",children:Object(y.jsx)(be,{notes:this.state.notes,viewNote:this.viewNote})})]})}},{key:"renderHeader",value:function(){return Object(y.jsxs)("div",{className:"card-header",children:[Object(y.jsx)(ce.b,{exact:!0,path:"/note",render:function(e){return Object(y.jsx)(ae.b,{to:"/",children:Object(y.jsx)("button",{type:"button",className:"btn btn-danger",children:"Close Add Note Form"})})}}),["/","/note/:id"].map((function(e){return Object(y.jsx)(ce.b,{exact:!0,path:e,render:function(e){return Object(y.jsx)(ae.b,{to:"/note",children:Object(y.jsx)("button",{type:"button",className:"btn btn-success",children:"Add Note"})})}},e)}))]})}},{key:"setMainAreaRoutes",value:function(){var e=this,t=this.state.editMode;return Object(y.jsxs)("div",{children:[t?Object(y.jsx)(ce.b,{exact:!0,path:"/note/:id",render:function(t){return Object(y.jsx)(de,{persistNote:e.saveEditedNote,deleteNote:e.deleteNote,note:e.state.selectedNote})}}):Object(y.jsx)(ce.b,{exact:!0,path:"/note/:id",render:function(t){return Object(y.jsx)(he,{editNote:e.openEditNote,deleteNote:e.deleteNote,note:e.state.selectedNote})}}),Object(y.jsx)(ce.b,{exact:!0,path:"/note",render:function(t){return Object(y.jsx)(de,{persistNote:e.addNote,note:e.getEmptyNote()})}})]})}},{key:"render",value:function(){return Object(y.jsx)("div",{className:"notesApp container-fluid",children:Object(y.jsxs)("div",{className:"row",children:[Object(y.jsx)("div",{className:"col-md-3",children:this.renderLeftMenu()}),Object(y.jsx)("div",{className:"col-md-9",children:this.setMainAreaRoutes()})]})})}}]),n}(u.Component),pe=(n(88),function(){return Object(y.jsxs)("div",{className:"note",children:[Object(y.jsxs)("div",{id:"note",children:[Object(y.jsx)(V,{title:"Notes App"}),Object(y.jsx)("hr",{})]}),Object(y.jsx)("p",{}),Object(y.jsx)("div",{className:"container-fluid",children:Object(y.jsx)(ae.a,{children:Object(y.jsx)(ce.b,{path:"/",component:me})})})]})}),Oe=(n(89),function(){return Object(y.jsxs)("div",{className:"suggestion",id:"suggestion",children:[Object(y.jsx)("h1",{children:"HOW TO LOOK AFTER YOUR MENTAL HEALTH ?"}),Object(y.jsx)("p",{children:"In the midst of managing a situation like the COVID-19 outbreak, it\u2019s easy to feel overwhelmed and worried. Focusing on how to slow the spread of the virus is important for our physical health, however, identifying ways to manage our mental health is also crucial."}),Object(y.jsx)("p",{children:"We may experience increased feelings of anxiety, powerlessness, impatience, irritability or frustration. We might also experience a sense of scarcity, or be concerned about increased stigmatization or xenophobia. We may feel uncertainty about the future or worry about isolation amidst rapidly changing schedules and social plans. While feeling worried is normal and expected, there are many ways we can increase our resilience during this time:"}),Object(y.jsx)("p",{children:Object(y.jsxs)("ul",{children:[Object(y.jsx)("li",{children:"Take breaks from the news."}),Object(y.jsx)("li",{children:"Take care of your body."}),Object(y.jsx)("li",{children:"Plan for coping with a potentially sudden drop in social contact"}),Object(y.jsx)("li",{children:"Create a new, adapted schedule taking cancellations into account."}),Object(y.jsx)("li",{children:"Write out all of your fears in a journal until your anxiety has dropped by half."})]})})]})}),xe=(n(90),function(){return Object(y.jsx)("div",{className:"nav",children:Object(y.jsxs)("ul",{children:[Object(y.jsx)("li",{children:Object(y.jsx)("a",{href:"#game",children:"Games"})}),Object(y.jsx)("li",{children:Object(y.jsx)("a",{href:"#playlist",children:"Playlist"})}),Object(y.jsx)("li",{children:Object(y.jsx)("a",{href:"#meet",children:"Meet"})}),Object(y.jsx)("li",{children:Object(y.jsx)("a",{href:"#note",children:"Notes"})})]})})});var fe=function(){return Object(y.jsxs)("div",{className:"App",children:[Object(y.jsx)(W,{}),Object(y.jsx)(xe,{}),Object(y.jsx)(G,{}),Object(y.jsx)(X,{}),Object(y.jsx)(se,{}),Object(y.jsx)(te,{}),Object(y.jsx)(pe,{}),Object(y.jsx)(Oe,{}),Object(y.jsx)(R,{}),Object(y.jsx)(ne,{})]})};m.a.render(Object(y.jsx)(h.a.StrictMode,{children:Object(y.jsx)(fe,{})}),document.getElementById("root"))}},[[91,1,2]]]);
//# sourceMappingURL=main.a47b6ae8.chunk.js.map