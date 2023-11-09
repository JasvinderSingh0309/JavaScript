var getUserRole = function (name , role) {

	switch(role) {
		case 'admin':
			return `${name}, is admin with full access`;
		case 'subAdmin':
			return `${name}, is Sub-admin with access to create/delete courses`;
		case 'testPrep':
			return `${name}, is test-prep with access to create/delete tests`;
		case 'user'	:
			return `${name}, is user to consume contents`;
		default:
			return `Access Denied!!`;
	}

}
console.log(getUserRole('Jasvinder Singh','subAdmin'));