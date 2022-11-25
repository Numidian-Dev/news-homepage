import Image from "next/image"
import one from "../styles/images/image-gaming-growth.jpg"
import two from "../styles/images/image-retro-pcs.jpg"
import three from "../styles/images/image-top-laptops.jpg"
const topArticle = () => {
    return (
        <section className="top-article">
            <div className="container-top">
                <div className="top-img"><Image layout="fill" objectFit="cover" src={two} alt="" /></div>
                <div className="top">
                    <h1>01</h1>
                    <h2>Reviving Retro PCs</h2>
                    <p>What happens when old PCs are given modern upgrades?</p>
                </div>
            </div>
            <div className="container-top">
                <div className="top-img"><Image layout="fill" objectFit="cover" src={three} alt="" /></div>
                <div className="top">
                    <h1>02</h1>
                    <h2>Top 10 Laptops of 2022</h2>
                    <p>Our best picks for various needs and budgets.</p>
                </div>
            </div>
            <div className="container-top">
                <div className="top-img"><Image layout="fill" src={one} alt="" /></div>
                <div className="top">
                    <h1>03</h1>
                    <h2>The Growth of Gaming</h2>
                    <p>How the pandemic has sparked fresh opportunities.</p>
                </div>
            </div>
        </section>
    )
}

export default topArticle