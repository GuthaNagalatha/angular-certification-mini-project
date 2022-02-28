export class Forcast {
    constructor(
        public city:Object,
        public cnt:number,
        public cod:string,
        public list:Array<Object>,
        public message:number
    ){}
}
