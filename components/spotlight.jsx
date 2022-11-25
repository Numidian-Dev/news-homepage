import Image from "next/image"

const Spotlight = () => {
    return (
        <div className="container">
            <div className="container-spotlight">
                <div className="spot-img"></div>
                <div className="spot">

                    <h1>The Bright Future of Web 3.0?</h1>
                    <div className="spot-p">
                        <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
                            But is it really fulfilling its promise?</p>
                        <button>READ MORE</button>
                    </div>
                </div>

            </div>
            <div className="container-news">
                <div className="container_">
                    <h1>New</h1>
                    <div className="news">
                        <h2>Hydrogen VS Electric Cars</h2>
                        <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
                    </div>
                    <div className="hr" />
                    <div className="news">
                        <h2>The Downsides of AI Artistry</h2>
                        <p>What are the possible adverse effects of on-demand AI image generation?</p>
                    </div>
                    <div className="hr" />
                    <div className="news">
                        <h2>Is VC Funding Drying Up?</h2>
                        <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Spotlight