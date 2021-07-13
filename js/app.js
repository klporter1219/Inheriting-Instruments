class Instrument {
    constructor(family, verb, loudness) {
        this.family = family;
        this.verb = verb;
        this.loudness = loudness;
    }

    play() {
        console.log(`${this.family} ${this.verb} at ${this.loudness}`);
    }
}

class WoodwindInstrument extends Instrument {
    constructor(loudness) {
        super('woodwind', 'blows', loudness);
    }
}

class PercussionInstrument extends Instrument {
    constructor(loudness) {
        super('percussion', 'strikes', loudness);
    }
}

class StringInstrument extends Instrument {
    constructor(loudness) {
        super('string', 'strums', loudness);
    }
}

var flute = new WoodwindInstrument(4);
var drum = new PercussionInstrument(10);
var guitar = new StringInstrument(7);

var instruments = [flute, drum, guitar];

for (var i = 0; i < instruments.length; i++) {
    instruments[i].play();
}

