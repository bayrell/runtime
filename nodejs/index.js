/*!
* Bayrell
* https://github.com/bayrell/bayrell
* Copyright (c) 2016 Ildar Bikmamatov <vistoyn@gmail.com>
* Licensed under the Bayrell license (http://bayrell.org/license/bayrell.html)
*/


module.exports = {
	VERSION: '0.2.0',
	'Exceptions': {
		'AssertError': require("./Exceptions/AssertError.js"),
		'IndexOutOfRange': require("./Exceptions/IndexOutOfRange.js"),
		'KeyNotFound': require("./Exceptions/KeyNotFound.js"),
		'StopIterator': require("./Exceptions/StopIterator.js"),
		'UnknownError': require("./Exceptions/UnknownError.js"),
		'RuntimeException': require("./Exceptions/RuntimeException.js"),
	},
	'Interfaces': {
		'AssertInterface': require("./Interfaces/AssertInterface.js"),
		'ContextInterface': require("./Interfaces/ContextInterface.js"),
		'MapInterface': require("./Interfaces/MapInterface.js"),
	},
	'Lib': {
		'rtl': require("./Lib/rtl.js"),
		're': require("./Lib/re.js"),
	},
	'Providers': {
		'AssertProvider': require("./Providers/AssertProvider.js"),
	},
	'Types': {
		//'Iterator': require("./Types/Iterator.js"),
		'Map': require("./Types/Map.js"),
		'Vector': require("./Types/Vector.js"),
	},
	'Context': require("./Context.js"),
	'CoreObject': require("./CoreObject.js"),
	'RuntimeConstant': require("./RuntimeConstant.js"),
};


