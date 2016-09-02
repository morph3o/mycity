var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Citizen Model
 * ==========
 */
var Citizen = new keystone.List('Citizen');

// noinspection JSLastCommaInObjectLiteral

Citizen.add({
	username: { type: Types.Text, initial: true, required: true, index: true },
	name: { type: Types.Name, initial: true, required: true, index: true },
	email: { type: Types.Email, initial: true, required: true, index: true },
	password: { type: Types.Password, initial: true, required: true },
	gender: { type: Types.Select, initial: true, options: 'male, female, undefined' },
	about: { type: Types.Textarea },
}, 'Permissions', {
	isAdmin: { type: Boolean, label: 'Can access Keystone', index: true },
});

// Provide access to Keystone
Citizen.schema.virtual('canAccessKeystone').get(function () {
	return this.isAdmin;
});


/**
 * Relationships
 */
Citizen.relationship({ ref: 'Post', path: 'posts', refPath: 'author' });


/**
 * Registration
 */
Citizen.defaultColumns = 'name, email, isAdmin';
Citizen.register();
