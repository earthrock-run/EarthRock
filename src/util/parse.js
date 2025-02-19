export const json = (v) => {
	if (typeof v !== `string`) return v

	if (v.indexOf(`.`) === -1 && v.indexOf(`,`) === -1) {
		const n = parseInt(v)
		if (typeof n === `number` && !isNaN(n)) {
			return n
		}
	}

	return JSON.parse(v)
}
