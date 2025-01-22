export class Car {
    carId: number;
    brand: string;
    model: string;
    year: number = 0;
    color: string;
    dailyRate ?: number;
    carImage: string;
    regNo: string;


    constructor() {
        this.carId =  0;
        this.brand = "";
        this.model = "";
        // this.year = 0;
        this.color = "";
        // this.dailyRate = 0; // after adding ? mark we dont have to intinalise it
        this.carImage ="";
        this.regNo = "";
    }
}

export interface ICarList {
    carId: number,
    brand: string,
    model: string,
    year: number,
    color: string,
    dailyRate: number,
    carImage: string,
    regNo: string,

    //interface doesnot hav any constructor
}
