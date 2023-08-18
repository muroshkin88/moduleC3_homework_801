// Функции
function HomeDevice(name, power) {
    this.name = name;
    this.power = power;
    // this.isPlugged = false;
}

// метод, который определяет прибор как включенный в розетку
HomeDevice.prototype.connectDevice = function() {
    if (this.isPlugged === false) {
        console.log(`Прибор - ${this.name} включен!`);
        this.isPlugged = true;
    } else {
        console.log(`Внимание! Прибор - ${this.name} уже подключён!`);
    }
};

// метод, который определяет прибор как выключеный из розетки
HomeDevice.prototype.disconnectDevice = function() {
    if (this.isPlugged === true) {
        console.log(`Прибор - ${this.name} отключён!`);
        this.isPlugged = false;
    } else {
        console.log(`Внимание! Прибор - ${this.name} уже отключён!`);
    }
};

// прибор №-1
function SmartDevice(name, brand, power, type, voiceAssistant) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.type = type;
    this.voiceAssistant = voiceAssistant;
    this.isPlugged = false;
}

SmartDevice.prototype = new HomeDevice();

// прибор №-2
function Computer(name, brand, power, type, functionality) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.type = type;
    this.functionality = functionality;
    this.isPlugged = false;
}

Computer.prototype = new HomeDevice();

// экземпляр умной колонки
const smartSpeakerSonosMove = new SmartDevice("Sonos Move", "Sonos", 15, "Smart Speaker", "Google Assistant");

// экземпляр компьютера
const amdPowerHomeComputer = new Computer("AMD Ryzen", "TopComp", 500, "stationary PC", "for game and  for work");

//проверим работоспособность нашей программы!



// ====================================================================================
//Выводим информацию о нашем первом приборе:
// ====================================================================================
console.log(smartSpeakerSonosMove)
//Подключаем 1-ый прибор
smartSpeakerSonosMove.connectDevice()
//Выводим информацию о нашем первом приборе:
console.log(smartSpeakerSonosMove)
//Отключаем наш 1-ый прибор
smartSpeakerSonosMove.disconnectDevice()
//Выводим информацию о нашем первом приборе:
console.log(smartSpeakerSonosMove)



// ====================================================================================
//Выводим информацию о нашем втором приборе:
// ====================================================================================
console.log(amdPowerHomeComputer)
//Подключаем 2-ой прибор
amdPowerHomeComputer.connectDevice()
//Выводим информацию о нашем втором приборе:
console.log(amdPowerHomeComputer)
//Отключаем наш 2-ой прибор
amdPowerHomeComputer.disconnectDevice()
//Выводим информацию о нашем втором приборе:
console.log(amdPowerHomeComputer)

// ====================================================================================
// Подсчёт общей мощности нашими приборами
// ====================================================================================
console.log(`Мощность первого прибора: ${smartSpeakerSonosMove.name} = ${smartSpeakerSonosMove.power} Ватт!`)
console.log(`Мощность второго прибора: ${amdPowerHomeComputer.name} = ${amdPowerHomeComputer.power} Ватт!`)
console.log(`Общая  потребляемая мощность этих двух приборов составляет: ${smartSpeakerSonosMove.power + amdPowerHomeComputer.power} Ватт!`)













