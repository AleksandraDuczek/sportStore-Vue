const data = [
	{ id: 1, name: 'Kajak', category: 'Sporty wodne', },
	{ id: 2, name: 'Kamizelka ratunkowa', category: 'Sporty wodne', },
];

module.exports = function () {
	return {
		products: data,
		categories: [...new Set(data.map(products => products.category))].sort(),
		orders: [],
	}
};