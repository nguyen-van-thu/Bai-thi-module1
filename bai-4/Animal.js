
class Animal{
    constructor(name,weight) {
        this._name=name;
        this._weight=weight
    }

    getName() {
        return this._name;
    }

    setName(value) {
        this._name = value;
    }

    getWeight() {
        return this._weight;
    }

    setWeight(value) {
        this._weight = value;
    }

    toString(){
        return`Đây là con: ${this.name} có cân nặng là: ${this.weight}`
    }
}
