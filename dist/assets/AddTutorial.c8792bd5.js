import{T as m}from"./TutorialDataService.0c519ee4.js";import{_ as p,o as f,d as V,b as n,t as _,a as e,w as l,F as h,V as u,f as c}from"./index.44e6ce49.js";import{V as v}from"./VForm.6e4b7fb8.js";import{V as d}from"./VTextField.96abc495.js";import{a as T,V as s}from"./http-common.1acce954.js";const g={name:"add-tutorial",data(){return{tutorial:{id:null,title:"",description:"",published:!1},message:"Enter data and click save"}},methods:{saveTutorial(){var i={title:this.tutorial.title,description:this.tutorial.description};m.create(i).then(t=>{this.tutorial.id=t.data.id,console.log("add "+t.data),this.$router.push({name:"tutorials"})}).catch(t=>{this.message=t.response.data.message})},cancel(){this.$router.push({name:"tutorials"})}}},x=n("h1",null,"Tutorial Add",-1),k=c("Save"),C=c("Cancel");function b(i,t,B,F,a,r){return f(),V(h,null,[x,n("h4",null,_(a.message),1),e(v,null,{default:l(()=>[e(d,{label:"Title",modelValue:a.tutorial.title,"onUpdate:modelValue":t[0]||(t[0]=o=>a.tutorial.title=o)},null,8,["modelValue"]),e(d,{label:"Description",modelValue:a.tutorial.description,"onUpdate:modelValue":t[1]||(t[1]=o=>a.tutorial.description=o)},null,8,["modelValue"]),e(T,{justify:"center"},{default:l(()=>[e(s,{col:"2"}),e(s,{col:"2"},{default:l(()=>[e(u,{color:"success",onClick:t[2]||(t[2]=o=>r.saveTutorial())},{default:l(()=>[k]),_:1})]),_:1}),e(s,{col:"2"},{default:l(()=>[e(u,{color:"info",onClick:t[3]||(t[3]=o=>r.cancel())},{default:l(()=>[C]),_:1})]),_:1}),e(s,{col:"2"})]),_:1})]),_:1})],64)}var A=p(g,[["render",b]]);export{A as default};
