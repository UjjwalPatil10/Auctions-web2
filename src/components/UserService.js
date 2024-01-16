import APIS from "../api/APIS";
import endpoints from "../api/endpoints";

class UserService {
  static createUser(user) {
    return APIS.post(endpoints?.api?.auctions?.create, user)
  }
  static updateUser(id, user) {
    const url = endpoints?.api?.auctions?.update + id;
    console.log('Update URL:', url);
    return APIS.put(url, user);
    // return APIS.put(endpoints?.api?.auctions?.update + id, user);
  }
  static deleteUser( id) {
    return APIS.delete(endpoints?.api?.auctions?.delete + id);
  }
  static getOneUser(user, id) {
    return APIS.get(endpoints?.api?.auctions?.getOne + id, user);
  }
  static getAllUsers() {
    return APIS.get(endpoints?.api?.auctions?.getAll);
  }
}

export default UserService;




