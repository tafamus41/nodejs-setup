"use strict"
/* -------------------------------------------------------
    OOP & CLASSES
------------------------------------------------------- *
//? OOP: Object Oriented Programming
//? DRY: Don't Repeat Yourself
//? BLUEPRINT: Taslak (Mimarların kullandığı mavi şablon kağıdı)
//? CLASS: Obje türetmek için kullanılacak şablon.

//* Class Declaration:
// class PascalCaseClassName {
//     ...    
// }

//* Class Expression:
const PascalCaseClassName = class {

    propertyName = 'value' // property, attribute, field
    undefinedProperty // sadece tanımlama yapabiliriz. (değeri undefined olur.)

    methodName1() {
        return 'method'
    }

}

/* ------------------------------------------------------- */
// //? INSTANCE * Bir class'tan türetilen objedir.

// class Car {

//     isRunning = false

//     //* Class içine gönderilen parametreleri alabilmek için "contructor" methodu kullanılır.
//     constructor(brand, model, year) {
//         this.brand = brand
//         this.model = model
//         this.year = year
//     }

//     runEngine(param1) {
//         this.isRunning = true
//         console.log(param1)
//         return 'Motor Çalıştı'
//     }

// }

// const PascalCaseInstanceName = new Car() // Instance
// console.log(PascalCaseInstanceName)
// console.log(PascalCaseInstanceName.isRunning)
// console.log(PascalCaseInstanceName.runEngine('test-value'))

// const Ford = new Car('Ford', 'Mustang', 1967)
// console.log(Ford)

// const Mercedes = new Car('Mercedes', 'CLK200', 2010)
// console.log(Mercedes)

// console.log(Ford.isRunning)
// Ford.isRunning = true
// console.log(Ford.isRunning)
// console.log(Mercedes.isRunning)

// console.log(Ford.isRunning)
// console.log(Ford.runEngine())
// console.log(Mercedes)


/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */

/* ------------------------------------------------------- *
//? INHERITANCE: Miras Alma. Başka bir class'ın tüm özeelik/metodlarını devralma. (parent-child ilişkisi kurulur.)
//? SUPER: Parent (Üst) Class - THIS: Child (Alt) Class

class Vehicle {

    vehicleIsActive = false

    constructor (vehicleType) {
        this.vehicleType = vehicleType
    }

}

class Car extends Vehicle { // Inheritance

    isRunning = false

    constructor(brand, model, year, vehicleType = 'Car') {
        // super() parametresi parent-class'ı ifade eder. Her zaman üstte olmalı.
        super(vehicleType)
        this.brand = brand
        this.model = model
        this.year = year
    }

    runEngine(param1) {
        this.isRunning = true
        return 'Motor Çalıştı'
    }

}

// const Ford = new Car('Ford', 'Mustang', 1967)
// console.log(Ford)
// const Ford = new Car('Ford', 'Mustang', 1967, 'Car')
// console.log(Ford)

class Accessory extends Car {

    constructor(accessoryName, brand, model, year) {
        super(brand, model, year)
        this.accessoryName = accessoryName
    }

}

const FordClimate = new Accessory('Bosh Climate', 'Ford', 'Mustang', 1967)
console.log(FordClimate)



/* ------------------------------------------------------- */
//? POLYMORPHISM: Miras aldığımız class'ın özellik ve metodlarını yeniden yazılabilmesi.
//? - Override: Üst metodla aynı isim ve yapıda yeni bir method yazma. (ezme / iptal etme / önceliği alma)
//? - Overload: Üst metodla aynı isimde ama farklı yapıda yeni bir method yazma. (her ikisi de aynı anda aktif.) (JS Overload desteklemez.)

class Vehicle {

    vehicleIsActive = false

    constructor (vehicleType) {
        this.vehicleType = vehicleType
    }

}

class Car extends Vehicle { // Inheritance

    isRunning = false

    constructor(brand, model, year, vehicleType = 'Car') {
        super(vehicleType)
        this.brand = brand
        this.model = model
        this.year = year
    }

    runEngine(param1) {
        this.isRunning = true
        return 'Motor Çalıştı'
    }

}

const Ford = new Car('Ford', 'Mustang', 1967, 'Car')
console.log(Ford)


/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */