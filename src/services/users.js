export async function userSignIn(email, password) {
  const response = await fetch(
    'https://procrastinator-api.herokuapp.com/signin',
    {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        password,
      }),
    }
  );
  if (response.ok) {
    const json = await response.json();
    return json;
  }
  throw response;
}

export async function registerUser(email, password, name) {
  const response = await fetch(
    'https://procrastinator-api.herokuapp.com/register',
    {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        password,
        name,
      }),
    }
  );

  if (response.ok) {
    const json = await response.json();
    return json;
  }
  throw response;
}

export async function userFetchByToken(token) {
  const response = await fetch(
    'https://procrastinator-api.herokuapp.com/user',
    {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': token,
      },
    }
  );

  if (response.ok) {
    const json = await response.json();
    return json;
  }
  throw response;
}

export async function updateUserBookmarks(userId, newBookmarks) {
  const response = await fetch(
    'https://procrastinator-api.herokuapp.com/bookmark',
    {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: userId,
        bookmarks: newBookmarks,
      }),
    }
  );

  if (response.ok) {
    const json = await response.json();
    return json;
  }
  throw response;
}
