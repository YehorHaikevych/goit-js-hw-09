import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const e={email:"",message:""},a=document.querySelector(".feedback-form"),m=a.elements.email,l=a.elements.message,o=()=>{e.email=m.value,e.message=l.value,localStorage.setItem("feedback-form-state",JSON.stringify(e))};a.addEventListener("input",o);const r=()=>{const t=localStorage.getItem("feedback-form-state");if(t){const s=JSON.parse(t);e.email=s.email,e.message=s.message,m.value=e.email,l.value=e.message}};r();a.addEventListener("submit",t=>{if(t.preventDefault(),!e.email||!e.message){alert("Fill please all fields");return}console.log(e),localStorage.removeItem("feedback-form-state"),e.email="",e.message="",a.reset()});
//# sourceMappingURL=commonHelpers2.js.map
