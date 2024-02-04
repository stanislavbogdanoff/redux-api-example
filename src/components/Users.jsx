import { useGetUserQuery } from "../redux/services/userApi";

const Users = () => {
  const { data: userData } = useGetUserQuery("55");

  console.log(userData);

  return (
    <div>
      Users:
      {userData && userData.length > 0 ? (
        userData.map((user) => {
          return (
            <div key={user.id} className="user">
              <p>#{user.id}</p>
              <h4>{user.name}</h4>
            </div>
          );
        })
      ) : (
        <>No users found</>
      )}
    </div>
  );
};

export default Users;
