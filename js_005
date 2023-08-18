// Функции
class HomeDevice {
    constructor(name, power) {
        this.name = name;
        this.power = power;
        this.isPlugged = false;
    }
    connectDevice() {
        if (this.isPlugged === false) {
            this.isPlugged = true;
            console.log(`Прибор - ${this.name} включён!`);
        } else {
            console.log(`Внимание! Прибор - ${this.name} уже включен!`);
        }
    }
    disconnectDevice() {
        if (this.isPlugged === true) {
            this.isPlugged = false;
            console.log(`Прибор - ${this.name} отключён!`);
        } else {
            console.log(`Внимание! Прибор - ${this.name} уже отключён!`);
        }
    }
}


// прибор №-1
class SmartDevice extends HomeDevice {
    constructor(name, power, brand, type, voiceAssistant) {
        super(name, power);
        this.brand = brand;
        this.type = type;
        this.voiceAssistant = voiceAssistant;
        this.isPlugged = false;
    }
}

// прибор №-2
class Computer extends HomeDevice {
    constructor(name, power, brand, type, voiceAssistant) {
        super(name, power);
        this.brand = brand;
        this.type = type;
        this.voiceAssistant = voiceAssistant;
        this.isPlugged = false;
    }
}


//создаём экземпляр умной колонки Smart Device
const smartSpeakerSonosMove = new SmartDevice("Sonos Move", 15, "Sonos", "Smart Speaker", "Google Assistant");
//создаём экземпляр домашнего компьютера (Home PC table)
const amdPowerHomeComputer = new Computer("AMD Ryzen", 500, "TopComp", "stationary PC", "for game and for work");


// ====================================================================================
//Выводим информацию о работе наших приборов!
// ====================================================================================

// прибор №-1
console.log(smartSpeakerSonosMove)
console.log(smartSpeakerSonosMove.connectDevice())
console.log(smartSpeakerSonosMove)
console.log(smartSpeakerSonosMove.disconnectDevice())
console.log(smartSpeakerSonosMove)
console.log(smartSpeakerSonosMove.connectDevice())
console.log(smartSpeakerSonosMove)

// прибор №-2
console.log(amdPowerHomeComputer)
console.log(amdPowerHomeComputer.connectDevice())
console.log(amdPowerHomeComputer)
console.log(amdPowerHomeComputer.disconnectDevice())
console.log(amdPowerHomeComputer)
console.log(amdPowerHomeComputer.connectDevice())
console.log(amdPowerHomeComputer)















