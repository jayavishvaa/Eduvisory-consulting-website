const BASE_URL = 1 ? 'http://localhost:5000' : 'http://www.eduvisory.com';

// export async function loginHandler(email, password) {
// 	const response = await axios.post(`${BASE_URL}/login`, { email: email, password: password, withCredentials: true });
// 	return response.data;
// }
export async function signupHandler(values) {
	const dataToSend = JSON.stringify({
		firstName: values.firstname,
		middleName: values.middlename,
		lastName: values.lastname,
		country: values.country,
		city: values.city,
		dateOfBirth: values.dateofbirth,
		phoneNumber: values.phonenumber,
		username: values.username,
		email: values.email,
		password: values.password
	});
	const response = await fetch(`${BASE_URL}/signup`, {
		method: 'post',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		credentials: 'include',
		body: dataToSend
	});
	return response.json();
}
