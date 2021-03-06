<?php

/*!
 *  Bayrell Runtime Library
 *
 *  (c) Copyright 2016-2020 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

namespace Runtime;

class Callback 
{
	protected $obj;
	protected $name;
	function __construct($obj_name, $name)
	{
		$obj = null;
		if (gettype($obj_name) == "string")
		{
			$obj = \Runtime\rtl::find_class($obj_name);
			if (!class_exists($obj))
			{
				throw new \Exception("Class " . $obj . " not found ");
			}
			if (!method_exists($obj, $name))
			{
				throw new \Exception("Method '" . $name . "' not found in " . $obj);
			}
		}
		else if (is_object($obj_name))
		{
			$obj = $obj_name;
		}
		else
		{
			throw new \Exception("Wrong object name");
		}
		$this->obj = $obj;
		$this->name = $name;
	}
		
	function __invoke()
	{
		return call_user_func_array([$this->obj, $this->name], func_get_args());
	}
	
	function invokeArgs($args)
	{
		return call_user_func_array([$this->obj, $this->name], $args);
	}
}
