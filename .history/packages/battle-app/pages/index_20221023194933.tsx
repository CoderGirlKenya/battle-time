import { apiBaseUrl, Question } from "@battle-time/common";
import { useEffect } from "react";
import { BarsIcon } from "../components/BarsIcon";
import Logo from '../components/Logo';

export function Index() {

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

    return (
        <div className="Index">
{/* Added div to separate image and text */}
            <div>
            <h1>Prepare for Battle</h1>

            <h2>Take a moment to make a few selections and get ready to play!</h2>

            <button style={{backgroundColor: "blue"{{}}>Let's get ready</button>

            <p>System Requirements</p>

            </div>

            {/* <BarsIcon/> */}

            {/* <Logo/> */}


            <img alt="Silly kids 👩🏼‍🚀" src="/images/image-1.png"/>

            <style jsx>{`
                .Index{
                    display:flex;
                    {/* flex-direction:column; */}
                    flex-direction:row;
                    flex:1; 
                    align-items:center;
                    {/* gap:20px; */}
                
                }
                h1{
                    color:#4EAF90;
                    margin:40px 0 0 0
                }
                p{
                    margin:0;
                }
                img{
                    width:50vw;
                    height:50vh;
                    object-fit:contain;
                }
            `}</style>
        </div>
    );
}

export default Index;
