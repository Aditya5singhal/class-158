AFRAME.registerComponent("cursor-listener",{
schema:{
    selectedItemId:{default:"",type:"string"},

},
init:function(){
this.handleMouseEnterEvent();
},
handlePlacesListState:function(){
const id= this.el.getAttribute("id");
const placesId=["taj-mahal","budapest","new-york-city","eiffel-tower"];
if(placesId.includes(id)){
    const placesContainer=document.querySelector("#places-container");
    placesContainer.setAttribute("cursor-listener",{
     selectedItemId:id,   
    });
    this.el.setAttribute("material",{
        opacity:1
    })
}
},
handleMouseEnterEvent:function(){
    this.el.addEventlistener("mouseenter", ()=> {
        this.handlePlacesListState();
    })

}
})
