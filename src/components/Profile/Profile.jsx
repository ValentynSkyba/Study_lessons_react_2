const Profile = ({ user }) => {
  const { firstName, lastName, age, email, image, address } = user;
  return (
    <div>
      ,<img width="200" src={image} alt="user avatar" />
      <h1>
        {firstName} {lastName}
      </h1>
      <p>{age}</p>
      <p>Status: {age > 18 ? "Adult" : "Young"}</p>
      <p>{email}</p>
      <p>Address: {address.city}</p>
    </div>
  );
};

export default Profile;
