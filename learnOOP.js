class Manusia {
    constructor(obj = {}){
        this.name = obj.name || '';
        this.age = obj.age || 1;
    }
    getNameAndAge(){
        return `${this.name} and ${this.age} Tahun`
    }
}

const budi = new Manusia({
    age: 18,
    name: "budi baikhati"
})
// console.log(budi)

class Pekerjaan extends Manusia{
    constructor(opt = {}){
        super(opt);
        this.pekerjaan = opt.pekerjaan || '';
        this.bekerjaSejak = opt.bekerjaSejak || '';
    }
    render(){
        let kerja = "masih bisa kerja";
        if (this.age >=50){
            kerja = "tidak boleh kerja keras"
        }
        return `
        <h1>${this.name}</h1>
        <h2>${kerja}</h2>
        `;
    }
}

const PakDe = new Pekerjaan({
    name: "pak de",
    age: 75,
    pekerjaan : " tukang pijat"
});

const BuDe = new Pekerjaan({
    name: "Jeng Juminten",
    age: 12,
    pekerjaan : " Chef"
});
console.log(PakDe);
PakDe.render();
BuDe.getNameAndAge();