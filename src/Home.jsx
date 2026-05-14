import { useState, useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'

function Home() {
    const [value, setValue] = useState()
    const [name, setName] = useState('')
    const [check, setCheck] = useState(false)
    const [url, setUrl] = useState('')
    const [textval, setVal] = useState()
    const [serviceMsg, setServiceMsg] = useState('submit')
    const [disable, setDisable] = useState(false)
    const root = window.location.href
    async function uploadImage(e) {
        e.preventDefault()
        if(!value) return
        let dots = 0;
        setServiceMsg("Uploading...")
        setDisable(true)
        const arrayBuffer = await value.arrayBuffer();
        if(!(value.type).includes('image')) return

        
        console.log(value.type)
        const res = await fetch(`${import.meta.env.VITE_FETCH_URL || "http://localhost:3000/"}api/upload`, {
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
        
    }
    return(
        <>
        <div className="h-fit px-5 w-full flex flex-col font-[Teletext] items-center">
            <Header />
            <div className='w-full border border-black lg:w-190 mt-5 flex justify-center items-center'
            style={{
                height: "calc(20rem + 2vh)",
            }}>
                <form className={`h-full w-full lg:text-2xl flex flex-col justify-center items-center`} onSubmit={(e) => uploadImage(e)} action="">
                    <div className={`border border-black h-10 sm:w-90 lg:w-120 ${check? "flex":"hidden"}`}>
                            <textarea className='prim-blue overflow-x-scroll whitespace-nowrap w-full text-[14px]' value= {textval} onChange={(e) => setVal(e.target.value)}/>
                        </div>
                    <div className={`px-20  text-center flex justify-center items-center ${check? "hidden" : "flex"}`}>
                        
                        <label htmlFor="fileSent" className="">Click here to upload a file...</label>
                        <input style={{
                            display: "none",
                        }} 
                        className='' onChange={(e) => {setValue(e.target.files[0]); setName(e.target.files[0].name); setDisable(false); setServiceMsg("Upload")}} type="file" name="file" id="fileSent" accept="image/*"/>

                        </div>
                        <div className={`flex flex-col ${check? "hidden" : "flex"}`}>
                            <p className="prim-blue mt-8 text-[0.9rem] italic underline">{name}</p>
                            <button className={`mt-5 back-blue ${disable? 'cursor-not-allowed opacity-60' : ''}`}>{serviceMsg}</button>
                        </div>
                </form>
            </div>
            <div className='flex flex-1 flex-col w-full items-center justify-top mt-10 '>
                <h1 className=';g:w-190 mb-10 text-4xl'>Nothing beats <br /> simplicity</h1>
                <img className='lg:w-190' src="https://res.cloudinary.com/dqiywjlwt/image/upload/n5td8f9bacf4sa0x9yxk?_a=BAMAPqWQ0" alt="" />
                <p className='text-[11px] prim-blue'>Hosted with Wakeru</p>
            </div>
            <Footer />
        </div>
        </>
    )
}

export default Home