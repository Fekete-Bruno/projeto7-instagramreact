import React from "react";
import Topo from "./Topo";
import Curtidas from "./Curtidas";

export default function Post(props){

    const [like, setLike] = React.useState("hidden");
    let firstIcon = (like==="hidden") ? "" : "hidden";
    const mainIconClass = " md hydrated"
    
    function likePost(){
        if(like === "hidden"){
            setLike("red");
            firstIcon = "hidden";
        }else{
             setLike("hidden");
             firstIcon = "";
        }
    }

    function checkContentType(type){
    if(type==="image"){
        return(<img src={props.postImg} />);
    } else if(type==="video"){
        return(
            <video autoPlay muted loop>
                <source src={props.postVideo + ".mp4"} type="video/mp4" />
                    <source src={props.postVideo + ".ogg"} type="video/ogg" />
                Your browser does not support the video tag.
            </video>
        );
        }   
    }

    return(
        <div class="post">
            <Topo userName={props.userName} userImg={props.userImg}/>

            <div class="conteudo" onClick={()=>setLike("red")}>
                {checkContentType(props.type)}
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon class={firstIcon + mainIconClass} onClick={likePost} name="heart-outline"></ion-icon>
                        <ion-icon class={like + mainIconClass} onClick={likePost} name="heart"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <Curtidas likedByImg={props.likedByImg} likedBy={props.likedBy} likesNumber={props.likesNumber} />
            </div>
        </div>
    )
}