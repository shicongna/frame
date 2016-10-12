class Cat extends Animal{
	constructor(name,age){
		super(name);
		this.age = age;
	}

	shout(){
		alert("猫叫")
	}

}