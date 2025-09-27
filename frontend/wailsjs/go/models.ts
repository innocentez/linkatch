export namespace dto {
	
	export class ResourceData {
	    link: string;
	    title: string;
	    preview: string;
	
	    static createFrom(source: any = {}) {
	        return new ResourceData(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.link = source["link"];
	        this.title = source["title"];
	        this.preview = source["preview"];
	    }
	}

}

export namespace model {
	
	export class Category {
	    id: number;
	    parentCategory?: number;
	    name: string;
	    icon?: string;
	
	    static createFrom(source: any = {}) {
	        return new Category(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.id = source["id"];
	        this.parentCategory = source["parentCategory"];
	        this.name = source["name"];
	        this.icon = source["icon"];
	    }
	}
	export class Resource {
	    id: number;
	    category?: number;
	    link: string;
	    title: string;
	    preview: string;
	
	    static createFrom(source: any = {}) {
	        return new Resource(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.id = source["id"];
	        this.category = source["category"];
	        this.link = source["link"];
	        this.title = source["title"];
	        this.preview = source["preview"];
	    }
	}

}

export namespace payload {
	
	export class CreateCategory {
	    parentCategory?: number;
	    name: string;
	    icon?: string;
	
	    static createFrom(source: any = {}) {
	        return new CreateCategory(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.parentCategory = source["parentCategory"];
	        this.name = source["name"];
	        this.icon = source["icon"];
	    }
	}
	export class CreateResource {
	    category: number;
	    link: string;
	    title?: string;
	    preview?: string;
	
	    static createFrom(source: any = {}) {
	        return new CreateResource(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.category = source["category"];
	        this.link = source["link"];
	        this.title = source["title"];
	        this.preview = source["preview"];
	    }
	}
	export class LoadResourceData {
	    link: string;
	
	    static createFrom(source: any = {}) {
	        return new LoadResourceData(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.link = source["link"];
	    }
	}

}

