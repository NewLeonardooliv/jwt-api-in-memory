
type UserProps = {
  id: number;
  username: string;
  password: string;
}

class User {
  private users: UserProps[] = [];

  constructor() { }

  public create(username: string, password: string): void {
    this.users.push({
      id: this.users.length + 1,
      username: username,
      password: password
    });

    console.log(this.users);
  }

  public findUserByUsername(username: string) {
    return this.users.find(user => user.username === username)
  }
}

export default User;
