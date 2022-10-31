import  Zuri from "../images/Zuri.svg";
import I4G from "../images/I4G.svg";

const Footer = () => {
    return (
        <div className="Footer">
            <img id="Zuri-logo" src={Zuri} alt="Zuri Logo"/>
            <p>HNG Internship 9 Frontend Task</p>
            <img id="I4G-Logo" src={I4G} alt="Ingressive for Good Logo"/>
        </div>
    )
}

export default Footer