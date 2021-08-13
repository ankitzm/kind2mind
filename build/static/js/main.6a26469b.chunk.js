(this["webpackJsonphealth-app"]=this["webpackJsonphealth-app"]||[]).push([[0],{105:function(e,t,n){},106:function(e,t,n){},107:function(e,t,n){},108:function(e,t,n){},109:function(e,t,n){},110:function(e,t,n){},111:function(e,t,n){},112:function(e,t,n){},118:function(e,t,n){},119:function(e,t,n){},120:function(e,t,n){},177:function(e,t){},178:function(e,t){},191:function(e,t,n){},192:function(e,t,n){},193:function(e,t,n){"use strict";n.r(t);var i,s,a,c,r,o,d,l,j,u=n(1),h=n(66),b=n.n(h),p=(n(80),n(81),n(82),n(16)),m=(n(83),n(7)),x=n(3),O=x.b.button(i||(i=Object(m.a)(["\n    border: 1px solid #616A94;\n    border-radius: 50px;\n    padding: 15px 30px;\n    text-decoration: none;\n    color: #616A94;\n    background-color: #161A31;\n    transition: 0.3s;\n\n    cursor: pointer;\n    outline: none;\n\n    &:hover {\n        color: white;\n        background-color: #616A94;\n    }\n"]))),f=O,v=n(0),N=x.b.div.withConfig({displayName:"Start__Intro",componentId:"sc-4hdf8h-0"})(["margin:20px 0px;text-align:center;font-size:20px;padding:auto;"]),g=Object(x.a)(s||(s=Object(m.a)(["\n    margin-top: 1.5em;\n"]))),y=Object(x.a)(a||(a=Object(m.a)(["\n  margin: 20px 0px;\n  text-align: center;\n  font-size: 60px;\n"]))),w=function(e){var t=e.props;return Object(v.jsxs)(N,{children:[Object(v.jsx)(k,{children:"Take the quiz "}),Object(v.jsx)(S,{onClick:function(){return t(!0)},children:"Begin"})]})},k=Object(x.b)("h1").withConfig({displayName:"Start___StyledH",componentId:"sc-4hdf8h-1"})(["",""],y),S=Object(x.b)(f).withConfig({displayName:"Start___StyledButton",componentId:"sc-4hdf8h-2"})(["",""],g),C=n(75),L=n(70),A=n.n(L),I=x.b.h1(c||(c=Object(m.a)(["\n    margin-top: 4em;\n    font-size: 30px;\n"]))),T=x.b.p(r||(r=Object(m.a)(["\n    font-size: 20px;\n    margin: 1em;\n"]))),M=function(e){var t=e.pts;return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(I,{children:"Game Over"}),Object(v.jsxs)(T,{children:["You did ",t," out of 5!"]}),Object(v.jsx)(O,{onClick:function(){return window.location.reload()},children:"Retry"})]})},E=x.b.div(o||(o=Object(m.a)(["\n    text-align: center;\n    font-size: 17px;\n    margin: 10px;\n    padding:auto;\n"]))),H=x.b.div(d||(d=Object(m.a)(["\n    display: flex;\n    flex-direction: column;\n\n    margin: auto;\n\n    @media screen and (min-width: 1180px) {\n        width: 90%;\n    }\n"]))),_=x.b.button(l||(l=Object(m.a)(["\n    display: block;\n    border: 1px solid #616A94;\n    border-radius: 15px;\n    padding: 15px 30px;\n    text-decoration: none;\n    color: #616A94;\n    background-color: #161A31;\n    transition: 0.3s;\n    font-size: 1em;\n    outline: none;\n    user-select: none;\n    margin-top: 1em;\n    cursor: pointer;\n    \n    @media screen and (min-width: 1180px) {\n        &:hover {\n            color: white;\n            background-color: #616A94;\n        }\n    }\n"]))),D=x.b.div(j||(j=Object(m.a)(["\n    width: 90%;\n    margin: 0 auto;\n"]))),B=function(){var e=Object(u.useState)([]),t=Object(p.a)(e,2),n=t[0],i=t[1],s=Object(u.useState)(0),a=Object(p.a)(s,2),c=a[0],r=a[1],o=Object(u.useState)(0),d=Object(p.a)(o,2),l=d[0],j=d[1],h=function(e){var t=e.target.outerText;n[c].answer===t&&j(l+1),r(c+1)};return Object(u.useEffect)((function(){A.a.get("https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple").then((function(e){i(e.data.results.map((function(e){return{question:e.question,options:(t=[].concat(Object(C.a)(e.incorrect_answers),[e.correct_answer]),t.sort((function(){return Math.random()-.5}))),answer:e.correct_answer};var t})))})).catch((function(e){return console.error(e)}))}),[]),Object(v.jsxs)(E,{children:[n[c]&&Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(D,{dangerouslySetInnerHTML:{__html:n[c].question}}),Object(v.jsx)(H,{children:n[c].options.map((function(e,t){return Object(v.jsx)(_,{dangerouslySetInnerHTML:{__html:e},onClick:h},t)}))})]}),5===c&&Object(v.jsx)(M,{pts:l})]})},F=(n(105),function(e){var t=e.title;return Object(v.jsx)("div",{className:"heading",children:t})});var V=function(){var e=Object(u.useState)(!1),t=Object(p.a)(e,2),n=t[0],i=t[1];return Object(v.jsxs)("div",{className:"game-container",id:"game",children:[Object(v.jsx)(F,{title:"Our Games"}),Object(v.jsx)("div",{className:"game",children:Object(v.jsx)("div",{className:"quiz",children:n?Object(v.jsx)(B,{}):Object(v.jsx)(w,{props:i})})})]})},P=(n(106),function(){return Object(v.jsxs)("div",{className:"about",children:[Object(v.jsx)(F,{title:"What is mental Health ?"}),Object(v.jsx)("p",{children:"Mental health includes our emotional, psychological, and social well-being. It affects how we think, feel, and act. It also helps determine how we handle stress, relate to others, and make choices. Mental health is important at every stage of life, from childhood and adolescence through adulthood."}),Object(v.jsx)("p",{children:"Over the course of your life, if you experience mental health problems, your thinking, mood, and behavior could be affected. Many factors contribute to mental health problems, including: Biological factors, such as genes or brain chemistry Life experiences, such as trauma or abuse Family history of mental health problems."})]})}),X=(n(107),n(108),function(e){var t=e.Picture,n=e.Name,i=e.About;return Object(v.jsx)("div",{className:"profile-card",children:Object(v.jsxs)("div",{className:"card-container",children:[Object(v.jsx)("img",{className:"round",src:t,height:"200px",alt:"user"}),Object(v.jsx)("h3",{children:n}),Object(v.jsx)("h6",{children:"India"}),Object(v.jsx)("h4",{children:i})]})})}),z=n.p+"static/media/pp.eb84e9a2.jfif",G=function(){return Object(v.jsxs)("div",{className:"created-by",id:"created-by",children:[Object(v.jsx)(F,{title:"Proudly Created By"}),Object(v.jsx)("div",{className:"created-by-container",children:Object(v.jsx)(X,{Picture:z,Name:"Ankit Singh",About:"Web Development"})})]})};n(109);var Y=function(){return Object(v.jsxs)("div",{className:"landing",id:"home",children:[Object(v.jsx)("div",{className:"title",children:"KIND 2 MIND"}),Object(v.jsx)("div",{className:"tagline",children:"#GentleTowardsMental"})]})},q=(n(110),function(){var e=Object(u.useState)(!1),t=Object(p.a)(e,2),n=t[0],i=t[1];return window.addEventListener("scroll",(function(){window.scrollY>=10?i(!0):i(!1)})),Object(v.jsx)("nav",{className:n?"navbar navbar-active stroke":"navbar stroke","data-aos":"ease in out",children:Object(v.jsxs)("ul",{children:[Object(v.jsx)("li",{children:Object(v.jsx)("a",{href:"#home",children:"Home"})}),Object(v.jsx)("li",{children:Object(v.jsx)("a",{href:"#about",children:"Mental health"})}),Object(v.jsx)("li",{children:Object(v.jsx)("a",{href:"#created-by",children:"About Us"})})]})})}),W=(n(111),n(112),function(e){var t=e.url;return Object(v.jsx)("div",{className:"video-card",children:Object(v.jsx)("iframe",{src:t,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})}),R=function(){return Object(v.jsxs)("div",{className:"pcl",id:"playlist",children:[Object(v.jsx)(F,{title:"Our Curated Playlist for you"}),Object(v.jsxs)("div",{className:"playlist-container",children:[Object(v.jsx)("div",{className:"heading",children:"Meditate"}),Object(v.jsxs)("div",{className:"video",children:[Object(v.jsx)(W,{url:"https://www.youtube.com/embed/y7e-GC6oGhg?list=PLed9ILr_V6XCNlOdrBLBEhEXTQndkvzA-"}),Object(v.jsx)(W,{url:"https://www.youtube.com/embed/xdfs4Bo3-Yw?list=PLed9ILr_V6XDTsTvce_MTzGLehZH2e9H7"}),Object(v.jsx)(W,{url:"https://www.youtube.com/embed/EwQkfoKxRvo?list=PLed9ILr_V6XDTsTvce_MTzGLehZH2e9H7"}),Object(v.jsx)(W,{url:"https://www.youtube.com/embed/KxgD9En6Vso?list=PLed9ILr_V6XDTsTvce_MTzGLehZH2e9H7"}),Object(v.jsx)(W,{url:"https://www.youtube.com/embed/Lju6h-C37hE?list=PLed9ILr_V6XDTsTvce_MTzGLehZH2e9H7"}),Object(v.jsx)(W,{url:"https://www.youtube.com/embed/cFfP7N8wpMA?list=PLed9ILr_V6XDTsTvce_MTzGLehZH2e9H7"})]})]}),Object(v.jsxs)("div",{className:"playlist-container",children:[Object(v.jsx)("div",{className:"heading",children:"Get Relaxed"}),Object(v.jsxs)("div",{className:"video",children:[Object(v.jsx)(W,{url:"https://www.youtube.com/embed/TKqv5ekBjI0?list=PLed9ILr_V6XCNlOdrBLBEhEXTQndkvzA-"}),Object(v.jsx)(W,{url:"https://www.youtube.com/embed/fBVJoIbNjdQ?list=PLed9ILr_V6XCNlOdrBLBEhEXTQndkvzA-"}),Object(v.jsx)(W,{url:"https://www.youtube.com/embed/y7e-GC6oGhg"}),Object(v.jsx)(W,{url:"https://www.youtube.com/embed/36YnV9STBqc?list=PLed9ILr_V6XCSvxHqojdFjiANqrlQLXS6"}),Object(v.jsx)(W,{url:"https://www.youtube.com/embed/1itSqkbXIlU?list=PLed9ILr_V6XA2DcPIcD7tOEmTc-0TSuBZ"}),Object(v.jsx)(W,{url:"https://www.youtube.com/embed/T52rBA2wh74?list=PLed9ILr_V6XCSvxHqojdFjiANqrlQLXS6"})]})]})]})},K=n(10),Q=n(2),Z=n(12),J=n(13),U=n(5),$=n(15),ee=n(14),te=n(19),ne=n.n(te),ie={display:"none"},se=function(e){Object($.a)(n,e);var t=Object(ee.a)(n);function n(e,i){var s;return Object(Z.a)(this,n),(s=t.call(this,e,i)).state={redirect:!1},s.saveNote=s.saveNote.bind(Object(U.a)(s)),s.deleteNote=s.deleteNote.bind(Object(U.a)(s)),s}return Object(J.a)(n,[{key:"saveNote",value:function(e){if(e.preventDefault(),""===this.title.value)alert("Title is needed");else{var t={id:Number(this.id.value),title:this.title.value,description:this.description.value};this.props.persistNote(t),this.setState({redirect:!0})}}},{key:"deleteNote",value:function(e){console.log("deleteNote"),e.preventDefault(),this.props.deleteNote(this.props.note.id)}},{key:"renderFormTitleAction",value:function(){return void 0!==this.props.note.id?"Edit Note":"Add Note"}},{key:"renderFormButtons",value:function(){return void 0!==this.props.note.id?Object(v.jsxs)("div",{children:[Object(v.jsx)("button",{type:"submit",className:"btn btn-success float-right",children:"Save Note"}),Object(v.jsx)("button",{onClick:this.deleteNote,className:"btn btn-danger",children:"Delete Note"})]}):Object(v.jsx)("button",{type:"submit",className:"btn btn-success float-right",children:"Save Note"})}},{key:"render",value:function(){var e=this;return this.state.redirect?this.props.note?Object(v.jsx)(Q.a,{push:!0,to:"/note/".concat(this.props.note.id)}):Object(v.jsx)(Q.a,{push:!0,to:"/"}):Object(v.jsxs)("div",{className:"card",children:[Object(v.jsx)("div",{className:"card-header",children:this.renderFormTitleAction()}),Object(v.jsx)("div",{className:"card-body",children:Object(v.jsxs)("form",{ref:"noteForm",onSubmit:this.saveNote,children:[Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("p",{children:Object(v.jsx)("input",{className:"form-control",style:ie,disabled:!0,ref:function(t){return e.id=t},defaultValue:this.props.note.id})}),Object(v.jsx)("p",{children:Object(v.jsx)("input",{className:"form-control",ref:function(t){return e.title=t},defaultValue:this.props.note.title,placeholder:"enter title"})}),Object(v.jsx)("p",{children:Object(v.jsx)("textarea",{className:"form-control",rows:"10",ref:function(t){return e.description=t},defaultValue:this.props.note.description,placeholder:"enter description"})})]}),this.renderFormButtons()]})})]})}}]),n}(u.Component),ae=n(71),ce=n.n(ae),re=function(e){Object($.a)(n,e);var t=Object(ee.a)(n);function n(e,i){var s;return Object(Z.a)(this,n),(s=t.call(this,e,i)).state={redirect:!1},s.deleteNote=s.deleteNote.bind(Object(U.a)(s)),s.editNote=s.editNote.bind(Object(U.a)(s)),s}return Object(J.a)(n,[{key:"deleteNote",value:function(e){e.preventDefault(),this.props.deleteNote(this.props.note.id)}},{key:"editNote",value:function(e){e.preventDefault(),this.props.editNote(this.props.note.id)}},{key:"renderFormattedDate",value:function(){return"Last edited:"+ne()(this.props.note.date).format("DD MMM YYYY [at] HH:mm")}},{key:"render",value:function(){return this.state.redirect||!this.props.note?Object(v.jsx)(Q.a,{push:!0,to:"/"}):Object(v.jsxs)("div",{className:"card",children:[Object(v.jsx)("div",{className:"card-header",children:Object(v.jsx)("h4",{children:this.props.note.title})}),Object(v.jsxs)("div",{className:"card-body",children:[Object(v.jsx)("p",{className:"text-center font-weight-light small text-muted",children:this.renderFormattedDate()}),Object(v.jsx)("p",{className:"card-text",children:ce()(this.props.note.description)}),Object(v.jsx)("button",{onClick:this.deleteNote,className:"btn btn-danger",children:"Delete Note"}),Object(v.jsx)("button",{onClick:this.editNote,className:"btn btn-success float-right",children:"Edit Note"})]})]})}}]),n}(u.Component),oe=function(e){Object($.a)(n,e);var t=Object(ee.a)(n);function n(){return Object(Z.a)(this,n),t.apply(this,arguments)}return Object(J.a)(n,[{key:"renderFormattedDate",value:function(e){return ne()(e).format("DD MMM YYYY")}},{key:"render",value:function(){var e=this;if(!this.props.notes||0===this.props.notes.length)return Object(v.jsx)("div",{children:"There are no notes"});var t=this.props.notes.map((function(t){return Object(v.jsxs)(K.c,{activeClassName:"active",to:"/note/".concat(t.id),className:"list-group-item",onClick:e.props.viewNote.bind(e,t.id),children:[Object(v.jsx)("div",{className:"text-truncate primary",children:t.title}),Object(v.jsx)("div",{className:"font-weight-light font-italic small",children:e.renderFormattedDate(t.date)})]},t.id.toString())}));return Object(v.jsx)("ul",{className:"list-group",children:t})}}]),n}(u.Component),de=function(e){Object($.a)(n,e);var t=Object(ee.a)(n);function n(e){var i;Object(Z.a)(this,n),i=t.call(this,e);var s=localStorage.getItem("notes")?JSON.parse(localStorage.getItem("notes")):[];return i.state={notes:s,selectedNote:null,editMode:!1},i.getNotesNextId=i.getNotesNextId.bind(Object(U.a)(i)),i.addNote=i.addNote.bind(Object(U.a)(i)),i.viewNote=i.viewNote.bind(Object(U.a)(i)),i.openEditNote=i.openEditNote.bind(Object(U.a)(i)),i.saveEditedNote=i.saveEditedNote.bind(Object(U.a)(i)),i.deleteNote=i.deleteNote.bind(Object(U.a)(i)),i}return Object(J.a)(n,[{key:"getNotesNextId",value:function(){return this.state.notes.length>0?this.state.notes[this.state.notes.length-1].id+1:0}},{key:"persistNotes",value:function(e){localStorage.setItem("notes",JSON.stringify(e)),this.setState({notes:e})}},{key:"addNote",value:function(e){e.id=this.getNotesNextId(),e.date=ne()();var t=this.state.notes;t.push(e),this.persistNotes(t),this.setState({selectedNote:null,editMode:!1})}},{key:"viewNote",value:function(e){var t=this.state.notes.findIndex((function(t){return t.id===e}));t>=0?this.setState({selectedNote:this.state.notes[t],editMode:!1}):console.warn("note with id "+e+" not found when trying to edit it")}},{key:"openEditNote",value:function(e){var t=this.state.notes.findIndex((function(t){return t.id===e}));t>=0?this.setState({selectedNote:this.state.notes[t],editMode:!0}):console.warn("note with id "+e+" not found when trying to open for edit")}},{key:"saveEditedNote",value:function(e){var t=this.state.notes,n=t.findIndex((function(t){return t.id===e.id}));n>=0?(e.date=ne()(),t[n]=e,this.persistNotes(t)):console.warn("note with id "+e.id+" not found when trying to save the edited note"),this.setState({selectedNote:e,editMode:!1})}},{key:"deleteNote",value:function(e){var t=this.state.notes,n=t.findIndex((function(t){return t.id===e}));n>=0?window.confirm("Are you sure you want to delete this note?")&&(t.splice(n,1),this.persistNotes(t),this.setState({selectedNote:null,editMode:!1})):console.warn("note with id "+e+" not found when trying to delete it")}},{key:"getEmptyNote",value:function(){return{title:"",description:""}}},{key:"renderLeftMenu",value:function(){return Object(v.jsxs)("div",{className:"card",children:[this.renderHeader(),Object(v.jsx)("div",{className:"card-body",children:Object(v.jsx)(oe,{notes:this.state.notes,viewNote:this.viewNote})})]})}},{key:"renderHeader",value:function(){return Object(v.jsxs)("div",{className:"card-header",children:[Object(v.jsx)(Q.b,{exact:!0,path:"/note",render:function(e){return Object(v.jsx)(K.b,{to:"/",children:Object(v.jsx)("button",{type:"button",className:"btn btn-danger",children:"Close Add Note Form"})})}}),["/","/note/:id"].map((function(e){return Object(v.jsx)(Q.b,{exact:!0,path:e,render:function(e){return Object(v.jsx)(K.b,{to:"/note",children:Object(v.jsx)("button",{type:"button",className:"btn btn-success",children:"Add Note"})})}},e)}))]})}},{key:"setMainAreaRoutes",value:function(){var e=this,t=this.state.editMode;return Object(v.jsxs)("div",{children:[t?Object(v.jsx)(Q.b,{exact:!0,path:"/note/:id",render:function(t){return Object(v.jsx)(se,{persistNote:e.saveEditedNote,deleteNote:e.deleteNote,note:e.state.selectedNote})}}):Object(v.jsx)(Q.b,{exact:!0,path:"/note/:id",render:function(t){return Object(v.jsx)(re,{editNote:e.openEditNote,deleteNote:e.deleteNote,note:e.state.selectedNote})}}),Object(v.jsx)(Q.b,{exact:!0,path:"/note",render:function(t){return Object(v.jsx)(se,{persistNote:e.addNote,note:e.getEmptyNote()})}})]})}},{key:"render",value:function(){return Object(v.jsx)("div",{className:"notesApp container-fluid",children:Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)("div",{className:"col-md-3",children:this.renderLeftMenu()}),Object(v.jsx)("div",{className:"col-md-9",children:this.setMainAreaRoutes()})]})})}}]),n}(u.Component),le=(n(118),function(){return Object(v.jsxs)("div",{className:"note",children:[Object(v.jsxs)("div",{id:"note",children:[Object(v.jsx)(F,{title:"Notes App"}),Object(v.jsx)("hr",{})]}),Object(v.jsx)("p",{}),Object(v.jsx)("div",{className:"container-fluid",children:Object(v.jsx)(K.a,{children:Object(v.jsx)(Q.b,{path:"/",component:de})})})]})}),je=(n(119),function(){return Object(v.jsxs)("div",{className:"suggestion",id:"suggestion",children:[Object(v.jsx)(F,{title:"HOW TO LOOK AFTER YOUR MENTAL HEALTH ?"}),Object(v.jsx)("p",{children:"In the midst of managing a situation like the COVID-19 outbreak, it\u2019s easy to feel overwhelmed and worried. Focusing on how to slow the spread of the virus is important for our physical health, however, identifying ways to manage our mental health is also crucial."}),Object(v.jsx)("p",{children:"We may experience increased feelings of anxiety, powerlessness, impatience, irritability or frustration. We might also experience a sense of scarcity, or be concerned about increased stigmatization or xenophobia. We may feel uncertainty about the future or worry about isolation amidst rapidly changing schedules and social plans. While feeling worried is normal and expected, there are many ways we can increase our resilience during this time:"}),Object(v.jsxs)("ul",{children:[Object(v.jsx)("li",{children:"Take breaks from the news."}),Object(v.jsx)("li",{children:"Take care of your body."}),Object(v.jsx)("li",{children:"Plan for coping with a potentially sudden drop in social contact"}),Object(v.jsx)("li",{children:"Create a new, adapted schedule taking cancellations into account."}),Object(v.jsx)("li",{children:"Write out all of your fears in a journal until your anxiety has dropped by half."})]})]})}),ue=(n(120),function(){return Object(v.jsx)("div",{className:"nav",children:Object(v.jsxs)("ul",{children:[Object(v.jsx)("li",{children:Object(v.jsx)("a",{href:"#game",children:"Games"})}),Object(v.jsx)("li",{children:Object(v.jsx)("a",{href:"#playlist",children:"Playlist"})}),Object(v.jsx)("li",{children:Object(v.jsx)("a",{href:"#meet",children:"Meet"})}),Object(v.jsx)("li",{children:Object(v.jsx)("a",{href:"#note",children:"Notes"})})]})})}),he=n(72),be=n(73),pe=new(n.n(be).a)({apiKey:"keydeGoy3ssDpI3l9"}).base("appS2M8WHeyGXjUXD"),me=(n(191),function(e){Object($.a)(n,e);var t=Object(ee.a)(n);function n(e){var i;return Object(Z.a)(this,n),(i=t.call(this,e)).state={Name:"",Age:"",Hobbies:"",Email:""},i.handleChange=i.handleChange.bind(Object(U.a)(i)),i.handleSubmit=i.handleSubmit.bind(Object(U.a)(i)),i}return Object(J.a)(n,[{key:"handleSubmit",value:function(e){var t=this.state,n=t.Hobbies,i=t.Name,s=t.Age,a=t.Email;e.preventDefault(),pe("Kind2Mind").create({Name:i,Email:a,Age:s,Hobbies:n},(function(e,t){e&&console.error(e)}))}},{key:"handleChange",value:function(e){this.setState(Object(he.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return Object(v.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(v.jsx)(F,{title:"INTERACT"}),Object(v.jsxs)("div",{className:"form-grid",children:[Object(v.jsx)("textarea",{name:"Name",placeholder:"Name",value:this.state.Name,onChange:this.handleChange,className:"input-box"}),Object(v.jsx)("textarea",{name:"Hobbies",placeholder:"Hobbies",value:this.state.Hobbies,onChange:this.handleChange,className:"input-box"}),Object(v.jsx)("textarea",{name:"Age",placeholder:"Age",value:this.state.Age,onChange:this.handleChange,className:"input-box"}),Object(v.jsx)("textarea",{name:"Email",placeholder:"Email",value:this.state.Email,onChange:this.handleChange,className:"input-box"}),Object(v.jsx)(K.b,{to:"/VideoCall",children:Object(v.jsx)("button",{disabled:""===this.state.Name||""===this.state.Age||""===this.state.Hobbies||""===this.state.Email,children:"Meet !"})})]})]})}}]),n}(u.Component));var xe=function(){return Object(v.jsxs)("div",{className:"Homepage",children:[Object(v.jsx)(q,{}),Object(v.jsx)(Y,{}),Object(v.jsx)(ue,{}),Object(v.jsx)(P,{}),Object(v.jsx)(me,{}),Object(v.jsx)(V,{}),Object(v.jsx)(R,{}),Object(v.jsx)(le,{}),Object(v.jsx)(je,{}),Object(v.jsx)(G,{})]})},Oe=n(74),fe=(n(192),function(){return Object(v.jsxs)("div",{className:"video-call",children:[Object(v.jsx)("h2",{children:"Meeting in progress"}),Object(v.jsx)(Oe.a,{containerStyle:{width:"90vw",height:"85vh",margin:"40px 0px",padding:"20px",backgroundColor:"rgba(255, 255, 255, 0.426)",backdropFilter:"blur(2px)"}})]})});var ve=function(){return Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)(Q.b,{exact:!0,path:"/",component:xe}),Object(v.jsx)(Q.b,{exact:!0,path:"/VideoCall",component:fe})]})};b.a.render(Object(v.jsx)(K.a,{children:Object(v.jsx)(ve,{})}),document.getElementById("root"))},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){}},[[193,1,2]]]);
//# sourceMappingURL=main.6a26469b.chunk.js.map