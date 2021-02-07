import { CgProfile } from 'react-icons/cg';

const Profile = (user) => {
  return (
    <section className='profile'>
      <CgProfile className='image' size={70} />
      <p className='name'>{user.firstName + ' ' + user.secondName}</p>
    </section>
  );
};

export default Profile;
