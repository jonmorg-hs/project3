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
        document.getElementById("root").className = "splash";
        return true;
      } else {
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
    localStorage.setItem("id_token", idToken);
    window.location.assign("/");
  }

  logout() {
    document.getElementById("root").className = "splash";
    localStorage.removeItem("id_token");
    window.location.assign("/");
  }
}

export default new AuthService();
