class EasyHTTP {
  async get(url) {
    let response = await fetch(url);
    let data = response.json();
    return data;
  }

  async post(url, inputData) {
    let response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(inputData)
    });
    let data = response.json();
    return data;
  }

  async put(url, inputData) {
    let response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(inputData)
    });
    let data = response.json();
    return data;
  }

  async delete(url) {
    let response = await fetch(url, { method: "DELETE" });
    let data = response.json();
    return data;
  }
}

export const http = new EasyHTTP();
