var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Classified Model
 * ==========
 */
var Classified = new keystone.List('Classified');

// noinspection JSLastCommaInObjectLiteral

Classified.add({
	title: { type: Types.Text, initial: true, required: true, index: true },
	type: { type: Types.Text, initial: true, required: true, index: true },
	topic: { type: Types.Text, initial: true, required: true, index: true },
	description: { type: Types.Textarea },
	price: { type: Types.Money, format: '0.0,00' },
	contact: { type: Types.Text, initial: true, required: true, index: true },
	pictures: { type: Types.CloudinaryImages },
	neighbourhood: { type: Types.Relationship, ref: 'Neighbourhood', index: true },
	author: { type: Types.Relationship, ref: 'Citizen', index: true },
	location: { type: Types.Location },
});

/**
 * Registration
 */
Classified.register();
