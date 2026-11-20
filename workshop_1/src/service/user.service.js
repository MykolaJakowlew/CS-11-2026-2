export const userLogin = async (email, password) => {

  if (!email || email.length === 0 || !email.length) {
    throw new Error('Email is empty')
  }

  
  if (!password || !password.length) {
    throw new Error('Password is empty')
  }

  const data = {
    username: email,
    password: password,
  }
  const response = await fetch('https://dummyjson.com/user/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })

  // 100 - 500: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status
  // 200 -- запит виконався успішно, але ми не створювали жодних записів
  // 201 -- запит виконався успішно, але ми створили запис
  // 204 -- запит виконався успішно, але немає що повернути
  // if (response.status === 200 || response.status === 201 || ... )

  const result = await response.json()

  if (response.ok) {
    return result
  }

  throw Error(result.message)

}

export const userRegister = async () => {
  
}