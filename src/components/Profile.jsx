import profile_img from "../images/profile_img.svg";

const Profile = () => {
    return (
        <div>
            <img id="profile_img" src={profile_img} alt="Profile Image" className="Profile-Image"/>

            <br />

            <strong id="twitter">only1franchesco</strong>
            <p id="slack" hidden>Ginika Chinonso</p>
        </div>
    )
}

export default Profile