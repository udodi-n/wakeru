import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Header from './Header'

function FileDisplay() {
    const { id } = useParams()
    const [src, setSrc] = useState(null)
    useEffect(() => {
        async function fetchFile() {
            const res = await fetch(`http://localhost:3000/api/fetch?id=${id}`)
            const data = await res.json()
            const name = data.name;
            const type = data.type; 
            console.log(type)
            const base64 = data.buffer;

            const url = `data:${type};base64,${base64}`
            setSrc(url)
            // console.log(data.type) // is it actually "image/png"?
            // console.log(data.buffer.data.length) // should be 134129
        }

        return () => fetchFile()
    }, [])

    return(
        <>
        <div className="font-[Teletext] h-[100vh] px-5">
            <Header />
            <div className='mt-10 flex flex-col items-center'>
                <div className='p-3 border border-1'><img class src={src} alt="" /></div>
                <a className="back-blue mt-10" href={src} download>Download Image</a>
            </div>
        </div>
        
        </>
    )
}

export default FileDisplay