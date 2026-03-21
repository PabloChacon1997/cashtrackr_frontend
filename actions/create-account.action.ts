"use server"


export async function register(formData: FormData) {
  const registerData = {
    email: formData.get('email'),
    name: formData.get('name'),
    password: formData.get('password'),
  }
  console.log(registerData)
}
