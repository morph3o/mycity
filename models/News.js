var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * News Model
 * ==========
 */
var News = new keystone.List('News');

// noinspection JSLastCommaInObjectLiteral

News.add({
	title: { type: Types.Text, initial: true, required: true, index: true },
	topics: { type: Types.Text, initial: true, required: true, index: true },
	content: { type: Types.Textarea },
	pictures: { type: Types.CloudinaryImages },
	neighbourhood: { type: Types.Relationship, ref: 'Neighbourhood', index: true },
	author: { type: Types.Relationship, ref: 'Citizen', index: true },
});

/**
 * Registration
 */
News.register();
