import { CiSettings } from "react-icons/ci";
import '../styles.css';

const ProfileUp = () => {
  return (
    <div className="profile-container">
      <h2>Профиль</h2>

      <img
        src="/image.png"
        alt="Фото профиля"
        className="profile-image"
      />

      <div className="settings-link">
        <CiSettings size={24} />
        <p className="ms-2 mb-0">Настройки</p>
      </div>
    </div>
  );
};

export default ProfileUp;
