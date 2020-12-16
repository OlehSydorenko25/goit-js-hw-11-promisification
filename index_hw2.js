const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];


const toggleUserState = (allUsers, userName) => {
    return Promise.resolve(
    allUsers.map((user) =>
      user.name === userName ? { ...user, active: !user.active } : user
    )
  );
}

const loggerUser = updatedUsers => console.table(updatedUsers);

/*
 * Сейчас работает так
 */
// toggleUserState(users, 'Mango', loggerUser);
// toggleUserState(users, 'Lux', loggerUser);

/*
 * Должно работать так
 */
toggleUserState(users, 'Mango').then(loggerUser);
toggleUserState(users, 'Lux').then(loggerUser);