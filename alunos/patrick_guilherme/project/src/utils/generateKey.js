export function generateKey(len) {
	let characters = 'abcdeefghijklmnopqrstuvwxyz1234567890!@#$%¨&*()_+'

	characters = characters.replace(' ', '')
	let key = ''

	for (let i = 0; i < len; i++) {
		key += characters[Math.round(Math.random() * characters.length )]
	}

	return key
}