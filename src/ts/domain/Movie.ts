import Purchased from './Purchased';

export default class Movie implements Purchased {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly year: number,
        readonly country: string,
        readonly slogan: string,
        readonly genre: string,
        readonly duration: string,
        readonly price: number,
    ) { }
}
