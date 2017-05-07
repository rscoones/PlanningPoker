class LoginWebApi {
  login(username, password) {
    return fetch('/api/users/login?include=user', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username, password})
    }).then(response => {
      return response.text();
    }).then(body => {
      return JSON.parse(body);
    });
  }

  logout() {
    return fetch('/api/users/logout').then(response => {
      return response.text();
    }).then(body => {
      return JSON.parse(body);
    });
  }

  register(username, email, password) {
    return fetch('/api/users', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username, email, password})
    }).then(response => {
      return response.text();
    }).then(body => {
      return JSON.parse(body);
    });
  }
}

export default new LoginWebApi();
