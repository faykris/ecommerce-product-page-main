export class Product {
	constructor(
	    public id: number,
	    public company: string,
		public name: string,
		public description: string,
		public price: number,
		public discount: number,
		public count: number,
		public images: string[],
		public thumbnails: string[]
	){}
}

/*
		public imgUrl1: string,
		public imgUrlT1: string,
		public imgUrl2: string,
		public imgUrlT2: string,
		public imgUrl3: string,
		public imgUrlT3: string,
		public imgUrl4: string,
		public imgUrlT4: string,
		*/