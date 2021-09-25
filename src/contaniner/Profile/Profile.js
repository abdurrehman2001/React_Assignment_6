import './style.css'
import ProfileImg from '../../assets/profile.jpg'
function Profile(){
    return(
        <div className="profile-page">
            <img src={ProfileImg} alt="" />
            <p>User Name Is__________________</p>
            <p>Last Name Is__________________</p>
            <p>Your Contact Is________________</p>
        </div>
    )
}
export default Profile;