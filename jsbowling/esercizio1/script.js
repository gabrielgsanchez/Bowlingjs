// Definizione della classe Garage
class Garage {
    constructor() {
      // Lista di automobili con almeno 5 marche e 5 modelli
      this.cars = [
        { brand: 'Fiat', model: 'Panda' },
        { brand: 'Fiat', model: '500' },
        { brand: 'Ford', model: 'Fiesta' },
        { brand: 'Ford', model: 'Focus' },
        { brand: 'Toyota', model: 'Corolla' },
        { brand: 'Toyota', model: 'Yaris' },
        { brand: 'BMW', model: 'Serie 3' },
        { brand: 'BMW', model: 'Serie 5' },
        { brand: 'Audi', model: 'A3' },
        { brand: 'Audi', model: 'A4' }
      ];
    }
    
    // Metodo che, data una marca, restituisce i modelli presenti nel garage per quella marca
    getModelsByBrand(brand) {
      // Filtro case-insensitive
      const models = this.cars
        .filter(car => car.brand.toLowerCase() === brand.toLowerCase())
        .map(car => car.model);
      return models;
    }
  }
  
  // Creazione dell'oggetto garage
  const garage = new Garage();
  
  // Gestione dell'evento al click sul pulsante "Cerca modelli"
  document.getElementById('searchButton').addEventListener('click', () => {
    const brand = document.getElementById('brandInput').value.trim();
    const resultDiv = document.getElementById('result');
    
    if (brand === "") {
      resultDiv.innerHTML = "<p style='color:red;'>Per favore, inserisci una marca.</p>";
      return;
    }
    
    const models = garage.getModelsByBrand(brand);
    if (models.length > 0) {
      resultDiv.innerHTML = `<p>Modelli per la marca <strong>${brand}</strong>: ${models.join(', ')}</p>`;
    } else {
      resultDiv.innerHTML = `<p>Nessun modello trovato per la marca <strong>${brand}</strong>.</p>`;
    }
  });
  