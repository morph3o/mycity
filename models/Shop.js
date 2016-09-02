var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Shop Model
 * ==========
 */
var Shop = new keystone.List('Shop');

// noinspection JSLastCommaInObjectLiteral

Shop.add({
	name: { type: Types.Text, required: true, index: true },
	type: { type: Types.Text },
	location: { type: Types.Location },
	website: { type: Types.Text },
	pictures: { type: Types.CloudinaryImages },
	neighbourhood: { type: Types.Relationship, ref: 'Neighbourhood', index: true },
});

/**
 * Registration
 */
Shop.register();
