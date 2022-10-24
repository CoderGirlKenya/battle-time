import { apiBaseUrl, Question } from "@battle-time/common";
import { useEffect, useState } from "react";
import { BarsIcon } from "../components/BarsIcon";
import Logo from '../components/Logo';
import { apiHandler} from "./_app";

export function Index() {

     const [data, setData] =useState([]);
      
    useEffect(()=>{
        let m=true;
        (async ()=>{

            const response=await fetch(`${apiBaseUrl}questions`);
            if(!m){return;}

            const questions:Question[]=await response.json();
            if(!m){return;}

           
            console.log('Questions',questions)

        })();
        return ()=>{
            m=false;
        }
    },[])

    // const list = this.questions.map(function(val, index){
    //     console.log(list);

    //   })
    const buttons = document.createElement('button')

    buttons.id = 'btn'

    const button = getElementById('btn');

    button?.addEventListener('click', function handleButtonClick(event) {
        console.log('button clicked');
    })


        

    return (
        <div className="Index">
{/* Added div to separate image and text */}
            <div>
            <h1>Prepare for Battle</h1>

            <h2>Take a moment to make a few selections and get ready to play!</h2>

            {/* blue background with with white text */}

            <button id={"btn"} onClick={this.handleButtonClick}> Let's get ready</button>

            {/* underlined grey text */}
            <p>System Requirements</p>

            </div>

            {/* <BarsIcon/> */}

            {/* <Logo/> */}


            <img alt="Silly kids 👩🏼‍🚀" src="/images/image-1.png"/>
{/* change image and text size */}
            <style jsx>{`
                .Index{
                    display:flex;
                    {/* flex-direction:column; */}
                    flex-direction:row;
                    flex:1; 
                    align-items:center;
                    {/* gap:20px; */}
                    padding: 0px;
                }
                h1{
                    color:#4EAF90;
                    font size: 30px;
                    {/* margin:40px 0 0 0 */}

                }
                h2{
                    margin:0;
                }
                img{
                    width:20vw;
                    height:20vh;
                    object-fit:contain;
                }
            `}</style>
        </div>
    );
}

export default Index;
