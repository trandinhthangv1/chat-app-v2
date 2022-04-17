const getSender = (userLogged, users) => {
  return users.find((user) => user._id !== userLogged._id);
};

export { getSender };
