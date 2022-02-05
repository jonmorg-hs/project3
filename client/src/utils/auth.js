import decode from "jwt-decode";

class AuthService {
  getProfile() {
    return decode(this.getToken());
  }

  loggedIn() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token); // handwaiving here
  }

  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        window.login = false;
        document.getElementById("root").className = "splash";
        return true;
      } else {
        window.login = true;
        document.getElementById("root").className = "menu";
        return false;
      }
    } catch (err) {
      return false;
    }
  }

  getToken() {
    return localStorage.getItem("id_token");
  }

  login(idToken) {
    document.getElementById("root").className = "menu";
    window.login = true;
    localStorage.setItem("id_token", idToken);
    window.location.assign("/");
  }

  logout() {
    document.getElementById("root").className = "splash";
    window.login = false;
    localStorage.removeItem("id_token");
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    localStorage.setItem("bh_database", "false");
    window.location.assign("/");
  }
}

export default new AuthService();
