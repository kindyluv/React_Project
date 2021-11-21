import Top_Nav from "./Top_Nav"
import Top_Circle from "./Top_Circle"
import Bottom_Circle from "./Bottom_Circle"
import HomeContainer from "./HomeContainer"

const Mobile_Frame = () => {
    return (
        <div className="mobile_frame">
            <Top_Nav />
            <Top_Circle />
            <HomeContainer />
            <Bottom_Circle />
        </div>
    )
}

export default Mobile_Frame
