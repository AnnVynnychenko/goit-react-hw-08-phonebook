const UserMenu = () => {
  return (
    <>
      <p>Welcome, user</p>
      <button type="button">Logout</button>
    </>
  );
};

export default UserMenu;

// export const UserMenu = () => {
//   const dispatch = useDispatch();
//   const { user } = useAuth();

//   return (
//     <div className={css.wrapper}>
//       <p className={css.username}>Welcome, {user.name}</p>
//       <button type="button" onClick={() => dispatch(logOut())}>
//         Logout
//       </button>
//     </div>
//   );
// };
