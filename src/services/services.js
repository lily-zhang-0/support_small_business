const transformNetworkError = (err) => Promise.reject({
  code: 'network-issue',
  err
});

const rejectJsonError = (response) => {
  return response.json()
  .then(err => Promise.reject(err));
};

export const login = (username) => {
  return fetch('/session', {
    method: 'POST',
    headers: new Headers({
    'content-type': 'application/json',
    }),
    body: JSON.stringify({ username }),
  })
  .catch(transformNetworkError)
  .then(response => {
    if (!response.ok) {
    return rejectJsonError(response);
    }
    return;
  });
};

export const logout = () => {
  return fetch('/logout', {
    method: 'POST',
  })
  .catch(transformNetworkError)
  .then(response => {
    if (!response.ok) {
    return rejectJsonError(response);
    }
    return;
  });
}

export const fetchLists = () => {
  return fetch('/posts', {
    method: 'GET',
  })
  .catch(transformNetworkError)
  .then(response => {
    if (!response.ok) {
    return rejectJsonError(response);
    }
    return response.json();
  });
};

export const addPost = (post) => {
  return fetch('/posts', {
    method: 'POST',
    headers: { 
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      imagePath: post.imagePath,
      instruction: post.instruction,
    })
  })
    .catch(transformNetworkError)
    .then(response => {
      if (!response.ok) {
        return rejectJsonError(response);
      }
      return response.json();
    });
}