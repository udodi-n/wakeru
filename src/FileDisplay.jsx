import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'

function FileDisplay() {
    const { id } = useParams()

    const [src, setSrc] = useState(null)
    useEffect(() => {
        async function fetchFile() {
            try{
                const res = await fetch(`${import.meta.env.VITE_FETCH_URL || "http://localhost:3000/"}api/fetch?id=${id}`, {
                method: "GET",
            })
            const data = await res.json()
            const name = data.name;
            const type = data.type; 
            setSrc(data.url)
            } catch(error) {
                // console.log('fuckkk')
                console.log(error.message)
            }
            // console.log(data.type) // is it actually "image/png"?
            // console.log(data.buffer.data.length) // should be 134129
        }

        fetchFile()
    }, [])

    return(
        <>
        <div className="font-[Teletext] h-[100vh] px-5">
            <Header />
            <div className='mt-10 flex flex-col items-center'>
                <div className='p-3 border border-1' style={{
                    width: "calc(19rem + 1vh)"
                }}><img className=" object-cover" src={src} alt="" /></div>
                <a className="back-blue mt-10" href={src} download>Download Image</a>
            </div>
            <Footer />
        </div>
        
        </>
    )
}

export default FileDisplay