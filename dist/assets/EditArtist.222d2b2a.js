import{_ as u,A as a,r as _,o as l,c,a as s,w as p,v as h,b as m,d as A,t as b,p as g,e as v}from"./index.abe72c4f.js";const f={name:"artist",data(){return{currentArtist:null,message:""}},methods:{getArtist(t){a.get(t).then(e=>{this.currentArtist=e.data,console.log(e.data)}).catch(e=>{console.log(e)})},updateArtist(){a.update(this.currentArtist.id,this.currentArtist).then(t=>{console.log(t.data),this.message="The artist was updated successfully!"}).catch(t=>{console.log(t)})},deleteArtist(){a.delete(this.currentArtist.id).then(t=>{console.log(t.data),this.$router.push({name:"artists"})}).catch(t=>{console.log(t)})}},mounted(){this.message="",this.getArtist(this.$route.params.id)}},r=t=>(g("data-v-4ac6b700"),t=t(),v(),t),k={key:0,class:"edit-form"},y=r(()=>s("h2",null,"Artists",-1)),x={class:"form-group"},w=r(()=>s("label",{for:"title"},"Title",-1)),S=r(()=>s("button",{class:"btn btn-sm btn-secondary m-1"},"back",-1)),C={key:1},D=r(()=>s("br",null,null,-1)),I=r(()=>s("p",null,"Please click on a Artist...",-1)),B=[D,I];function E(t,e,T,V,i,n){const d=_("RouterLink");return i.currentArtist?(l(),c("div",k,[y,s("form",null,[s("div",x,[w,p(s("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":e[0]||(e[0]=o=>i.currentArtist.title=o)},null,512),[[h,i.currentArtist.title]])])]),s("button",{class:"btn btn-sm btn-danger m-1",onClick:e[1]||(e[1]=(...o)=>n.deleteArtist&&n.deleteArtist(...o))}," Delete "),s("button",{type:"submit",class:"btn btn-sm btn-success m-1",onClick:e[2]||(e[2]=(...o)=>n.updateArtist&&n.updateArtist(...o))}," Update "),m(d,{to:"/artists"},{default:A(()=>[S]),_:1}),s("p",null,b(i.message),1)])):(l(),c("div",C,B))}var N=u(f,[["render",E],["__scopeId","data-v-4ac6b700"]]);export{N as default};