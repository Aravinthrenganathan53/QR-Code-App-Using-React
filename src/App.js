import { useState } from "react"
export const Qrcode = () => {
    const [img, setImg] = useState("")
    const [Loading, setLoading] = useState(false)
    const [data, setData] = useState("https://youtube.com/")
    const [valuek, setValuek] = useState("400")


    async function Generateqr() {
        setLoading(true)
        try {
            const url = `https://api.qrserver.com/v1/create-qr-code/?size=${valuek}x${valuek}&data=${encodeURIComponent(data)}`
            setImg(url)

        } catch (error) {
            console.error("image error ", error)
        }
        finally {
            setLoading(false)

        }

    }
    function Downloadqr() {
        fetch(img).then((response) => response.blob()).then((blob) => {
            const link = document.createElement("a")
            link.href = URL.createObjectURL(blob)
            link.download = "Qrcode.png"
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)

        })

    }



    function app() { }
    return (
        <div className="app">
            <h3>QR CODE GENERATOR</h3>
            {Loading && <h5>Loading.....</h5>}
            {img && <img src={img} />}
            <label htmlFor="inputj">URL for Qrcode </label>
            <input type="text" id="inputj" value={data} onChange={(e) => setData(e.target.value)} />

            <label htmlFor="inputk">Image Size </label>
            <input type="text" id="inputk" value={valuek} onChange={(e) => setValuek(e.target.value)} />
            <div className="two">
                <button id="btn" onClick={Generateqr}>Generate QR Code</button>
                <button id="btnk" onClick={Downloadqr}>Download QR Code</button>
            </div>
            <h5>Designed By <a href="">Front-end Developer</a></h5>


        </div>
    )


}
export default Qrcode