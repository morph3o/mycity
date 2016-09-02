var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Neighbourhood Model
 * ==========
 */
var Neighbourhood = new keystone.List('Neighbourhood');

// noinspection JSLastCommaInObjectLiteral

Neighbourhood.add({
	name: { type: Types.Text, required: true, index: true, initial: true },
	postcode: { type: Types.Text, required: true, index: true, initial: true },
});

/**
 * Relationships
 */
Neighbourhood.relationship({ ref: 'Shop', path: 'shops', refPath: 'neighbourhood' });


/**
 * Registration
 */
Neighbourhood.register();
