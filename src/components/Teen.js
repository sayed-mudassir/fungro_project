import "../styles/teen.css"
import IntroTeenPage from "./introTeenPage";
import MoreInfo from "./moreInfor";
import TeenFooter from "./teenFooter";
import WorkCategory from "./workCategory";
import Featured from "./Featured.js";
import SharkTank from "./SharkTank.js"
const Teen=()=>{
    return(
        <div className="teen" >
            <IntroTeenPage/>
            <MoreInfo/>
            <WorkCategory/>
            <Featured/>
            <SharkTank/>
            <div className=""></div>
            <div className=""></div>
            <div className=""></div>
            <div className=""></div>
            <div className=""></div>
            <div className=""></div>
            <div className=""></div>
            <div className=""></div>
            <TeenFooter/>
        </div>
    )
}
export default Teen;