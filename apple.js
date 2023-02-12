class Apple {
    constructor(){
        this.weight = 10;
    }

    getWeight(){

    }
    descrease(){
        this.weight = this.weight - 1;
    }
    isEmpty() {
        return this.weight == 0;
    }
}
class Human {
    constructor(){

    }
    setName(name) {
        this.name = name;
    }
    getName(){
        return this.name
    }
    setGender(gendervalue){
        this.gender = gender;
    }
    isMale(){
        return this.gender;
    }
    setWeight(w){
        this.weight = w;
    }
    getWeight(){
        return this.weight; 
    }

    say(helo){
        console.log(helo);
    }
    eat(apple){
        if(!apple.isEmpty()){
            this.setWeight(this.weight + 1);

            apple.descrease();

        }
    }
    checkApple(apple){
        return apple.getWeight() > 0;
    }

}