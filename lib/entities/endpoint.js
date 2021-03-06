
class Endpoint {
	constructor(name) {
		this._id = null;
		this.name = name;
		this.description = '';
		this.tags = [];
		this.request = {};
		this.request.pathParams = {};
		this.request.bodies = [];
		this.request.headers = '{}';
		this.responses = [];
		this.produces;
		this.consumes;
		this.middlewareBefore = '';
		this.middlewareAfter = '';
		// this.securedBy = {
		// 	none: true
		// };
		this.public = true;
		this.deprecated = null;
		this.externalDocs = null;
	}
	
	SetOperationId(operationId) {
		if (operationId)
			this.operationId = operationId;
	}
	
	get Id() {
		return this._id;
	}
	
	set Id(id) {
		this._id = id;
	}
	
	get Path() {
		return this.request.path;
	}
	
	set Path(path) {
		this.request.path = path;
	}
	
	get Method() {
		return this.request.method;
	}
	
	set Method(requestMethod) {
		this.request.method = requestMethod.toLowerCase();
	}
	
	set Name(name) {
		if (!name) {
			return;
		}
		if (name.length > 120) {
			this.name = name.substring(0, 119);
		}
		else {
			this.name = name;
		}
	}
	
	get Name() {
		return this.name || '';
	}
	
	get Consumes() {
		return this.consumes;
	}
	
	set Consumes(consumes) {
		this.consumes = consumes;
	}
	
	get Produces() {
		return this.produces;
	}
	
	set Produces(produces) {
		this.produces = produces;
	}
	
	get Headers() {
		return this.request.headers;
	}
	
	set Headers(headers) {
		this.request.headers = headers;
	}
	
	get Before() {
		return this.middlewareBefore;
	}
	
	set Before(before) {
		this.middlewareBefore = before;
	}
	
	get After() {
		return this.middlewareAfter;
	}
	
	set After(after) {
		this.middlewareAfter = after;
	}
	
	set Body(body) {
		this.request.bodies.push(body);
	}
	
	get Body() {
		if (Array.isArray(this.request.bodies) && this.request.bodies.length > 0) {
			return this.request.bodies;
		}
		return {};
	}
	
	set QueryString(queryString) {
		this.request.queryString = queryString;
	}
	
	get QueryString() {
		if (!this.request.queryString) {
			this.request.queryString = {};
		}
		return this.request.queryString;
	}
	
	set PathParams(uriParams) {
		this.request.pathParams = uriParams;
	}
	
	get PathParams() {
		if (!this.request.pathParams) {
			this.request.pathParams = {};
		}
		return this.request.pathParams;
	}
	
	set Responses(res) {
		this.responses = res;
	}
	
	get Responses() {
		return this.responses;
	}
	
	set SLData(data) {
		for (const key in data) {
			if (!data.hasOwnProperty(key)) continue;
			this[key] = data[key];
		}
	}
	
	set Description(desc) {
		this.description = desc;
	}
	
	get Description() {
		return this.description || '';
	}
	
	get Tags() {
		return this.tags;
	}
	
	set Tags(tags) {
		this.tags = tags;
	}
	
	set Summary(desc) {
		this.summary = desc;
	}
	
	get Summary() {
		return this.summary || '';
	}
	
	set SecuredBy(security) {
		this.securedBy = security;
	}
	
	get SecuredBy() {
		return this.securedBy;
	}
	
	// get Request() {
	// 	return this.request;
	// };
	get Public() {
		return this.public;
	}
	
	set Public(p) {
		this.public = p;
	}
	
	get Deprecated() {
		return this.deprecated;
	}
	
	set Deprecated(deprecated) {
		this.deprecated = deprecated;
	}
	
	get ExternalDocs() {
		return this.externalDocs;
	}
	
	set ExternalDocs(externalDocs) {
		this.externalDocs = externalDocs;
	}
	
}

module.exports = Endpoint;
