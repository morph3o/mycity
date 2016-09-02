var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Neighbourhood Model
 * ==========
 */
var Neighbourhood = new keystone.List('Neighbourhood');

// noinspection JSLastCommaInObjectLiteral

Neighbourhood.add({
	name: { type: Types.Name, required: true, index: true },
	postcode: { type: Types.Text, required: true, index: true },
});

/**
 * Registration
 */
Neighbourhood.register();
