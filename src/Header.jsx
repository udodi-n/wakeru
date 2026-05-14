function Header() {
    return(
        <>
        <div className="h-10 lg:text-2xl mt-4 flex justify-center"
        >
            <ul className="flex   py-2" style={{
            gap: "calc(4rem + 1vh)"
        }}>
                <li><a href=""></a>Wakeru</li>
                <li className="back-blue"><a className="prim-blue" href="https://github.com/udodi-n"></a>Built By Udodi</li>
            </ul>
        </div>
        </>
    )
}
export default Header