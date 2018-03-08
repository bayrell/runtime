var bayrell_rtl = require('bayrell_rtl');
var rtl = bayrell_rtl.rtl;


base_path = '';
if (typeof __dirname != 'undefined') base_path = rtl.clone(__dirname);
else if (typeof global.__dirname != 'undefined') base_path = rtl.clone(global.__dirname);


module.exports = {
	'type': 1,
	'base_path': base_path,
	'files': [
		'Descriptions/ModuleRequireDescription',
		'Descriptions/ProviderDescription',
		'Descriptions/ProviderFactoryDescription',
		'Exceptions/AssertError',
		'Exceptions/IndexOutOfRange',
		'Exceptions/KeyNotFound',
		'Exceptions/StopIterator',
		'Exceptions/UnknownError',
		'Exceptions/RuntimeException',
		'Interfaces/AssertInterface',
		'Interfaces/ContextInterface',
		'Interfaces/FactoryInterface',
		'Interfaces/MapInterface',
		'Interfaces/ModuleDescriptionInterface',
		'Interfaces/SerializeInterface',
		'Interfaces/SerializeStringInterface',
		'Types/Iterator',
		'Types/Map',
		'Types/Vector',
		'Lib/re',
		'Lib/rs',
		'Lib/rtl',
		'Providers/AssertProvider',
		'Context',
		'CoreObject',
		'ContextObject',
		'RuntimeConstant',
		'ModuleDescription',
	],
};
