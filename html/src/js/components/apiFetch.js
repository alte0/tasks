const Method = {
  GET: `GET`,
  POST: `POST`,
  PUT: `PUT`,
  PATCH: `PATCH`,
  DELETE: `DELETE`
}

class ApiFetch {
  constructor () {
    this._baseUrl = location.origin
  }

  async _fetchRequest ({ url, method = Method.GET, body = null }) {
    const response = await fetch(`${this._baseUrl}/${url}`, {
      method,
      body
    })

    if (response.ok) {
      return response.json()
    } else {
      throw new Error(`Ошибка отправки данных. ${response.status}`)
    }
  }

  singInUser (formData) {
    return this._fetchRequest({ url: '/ajax/signin.php', method: Method.POST, body: formData })
  }

  singUpUser (formData) {
    return this._fetchRequest({ url: '/ajax/signup.php', method: Method.POST, body: formData })
  }

  logOutUser () {
    return this._fetchRequest({ url: '/ajax/logout.php?action=exit', cache: 'no-store' })
  }

  addTask (formData) {
    return this._fetchRequest({ url: '/ajax/add-task.php', method: Method.POST, body: formData })
  }

  taskExecute (url) {
    return this._fetchRequest({ url: url, cache: 'no-store' })
  }
}

export const apiFetch = new ApiFetch()
