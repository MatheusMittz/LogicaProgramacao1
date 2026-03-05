class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo.toLowerCase();
  }

  atacar() {
    let ataque = "";

    switch (this.tipo) {
      case "mago":
        ataque = "magia";
        break;
      case "guerreiro":
        ataque = "espada";
        break;
      case "monge":
        ataque = "artes marciais";
        break;
      case "ninja":
        ataque = "shuriken";
        break;
      default:
        ataque = "um ataque desconhecido";
    }

    console.log(`o ${this.tipo} atacou usando ${ataque}`);
  }
}

const herois = [
  new Heroi("Gandalf", 2000, "Mago"),
  new Heroi("Conan", 35, "Guerreiro"),
  new Heroi("Aang", 112, "Monge"),
  new Heroi("Naruto", 17, "Ninja")
];

console.log("--- Iniciando os ataques ---");
for (const heroi of herois) {
  heroi.atacar();
}