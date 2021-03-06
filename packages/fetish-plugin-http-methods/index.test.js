
import test from 'ava';

import {fetish} from 'fetish-nude';
import fetishMethods from '.';

const methods = [
	'connect',
	'delete',
	'get',
	'head',
	'options',
	'patch',
	'post',
	'put'
];

const requestMacro = async (t, method) => {
	t.plan(2);

	const fetch = (url, options) => {
		t.is(url, 'test');
		t.deepEqual(options, {method});
	};

	await fetish.with(fetishMethods)[method]({
		url: 'test',
		fetch
	});
};

methods.forEach(method => {
	test(`'${method}' some`, requestMacro, method);
});
