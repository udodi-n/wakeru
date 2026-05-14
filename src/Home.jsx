import { useState, useEffect } from 'react'
import Header from './Header'

function Home() {
    const [value, setValue] = useState()
    const [name, setName] = useState('')
    const [check, setCheck] = useState(false)
    const [url, setUrl] = useState('')
    const [textval, setVal] = useState()
    const [serviceMsg, setServiceMsg] = useState('')
    const root = window.location.href
    async function uploadImage(e) {
        e.preventDefault()
        if(!value) return
        let dots = 0;

        const arrayBuffer = await value.arrayBuffer();
        console.log(value.type)
        const res = await fetch(`${import.meta.env.VITE_FETCH_URL}api/upload`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/octet-stream',
                'X-File-Name': (value.name).split('.')[0],
                'X-File-Type': (value.type),
            },
            body: arrayBuffer
        })
        .then(res => res.text())
        .then(textData => {
            const id = textData
            setVal(`${root}file/${id}`)
            console.log(textData)
        })
        setCheck(true)
        // const interval = setInterval(() => {
            
        //     dots = (dots + 1) % 4;
        //     setServiceMsg(`Loading` + '.'.repeat(dots))
        //                     console.log("oi");
        //                     console.log(check)

        //     // if(!check) {
        //     //     console.log('oi')
        //     //     clearInterval(interval)
        //     // }
        // }, 4000)
    }
    return(
        <>
        <div className="h-[100vh] px-5 w-full flex flex-col font-[Teletext] items-center">
            <Header />
            <div className='w-full border borer-black h-90 flex justify-center items-center'>
                <form className={`h-full w-full flex flex-col justify-center items-center`} onSubmit={(e) => uploadImage(e)} action="">
                    <div className={`border border-black h-10 w-80 ${check? "flex":"hidden"}`}>
                            <textarea className='prim-blue w-full text-[14px]' value= {textval} onChange={(e) => setVal(e.target.value)}/>
                        </div>
                    <div className={`px-20 text-center flex justify-center items-center ${check? "hidden" : "flex"}`}>
                        
                        <label htmlFor="fileSent">Click here to upload a file...</label>
                        <input style={{
                            display: "none",
                        }} 
                        className='' onChange={(e) => {setValue(e.target.files[0]); setName(e.target.files[0].name)}} type="file" name="file" id="fileSent" accept="image/*"/>

                        </div>
                        <div className={`flex flex-col ${check? "hidden" : "flex"}`}>
                            <p className="prim-blue mt-8 text-[0.9rem] italic underline">{name}</p>
                            <button className=" mt-5 back-blue ">submit</button>
                        </div>
                </form>
            </div>
            <p>{serviceMsg}</p>
        </div>
        </>
    )
}

export default Home