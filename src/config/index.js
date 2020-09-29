require('dotenv').config();

const config = {
	url: {
		people: `'${process.env.PEOPLE}'`,
		films: `process.env.FILMS`,
		planets: `process.env.PLANETS`,
		species: `process.env.SPECIES`,
		starchips: `process.env.STARSHIPS`,
		vehicles: `process.env.VEHICLES`,
	},
};
module.exports = config;
