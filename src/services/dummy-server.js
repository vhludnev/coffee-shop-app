export default class DummyServer {

    // _imageBase = 'https://aromistico.coffee/img';

    // getResource = async (url) => {
    //   const res = await fetch(`${this._imageBase}${url}`);

    //   if (!res.ok) {
    //     throw new Error(`Could not fetch ${url}` +
    //       `, received ${res.status}`)
    //   }
    //   return await res.json();
    // };

    _cards = [
      {
        id: 1,
        name: 'AROMISTICO Firenze 1 kg',
        origin: 'Brazil',
        price: '6.99$',
        image: 'https://aromistico.coffee/img/Aro_Firenze-4773-01.jpeg',
        desc: 'Naturally decaffeinated with water and steam, no dissolvents/chemicals. The well-rounded aroma of this decaf offers a caffeine free experience.'
      }, 
      {
        id: 2,
        name: 'AROMISTICO Garda 1 kg',
        origin: 'Kenya',
        price: '6.99$',
        image: 'https://aromistico.coffee/img/GardaInsidePopUP.jpeg',
        desc: 'With its original bold flavours, in this incredible blend we have incorporated the strength of our passion for coffee, as well as our gratitude to hard working communities of coffee growers all around the world.'
      },
      {
        id: 3,
        name: 'AROMISTICO Napoli 1 kg',
        origin: 'Columbia',
        price: '6.99$',
        image: 'https://aromistico.coffee/img/Napoli-01.jpg',
        desc: 'This full-bodied coffee has a richly intense toasted flavour. It has a long lasting aftertaste and releases notes of malt and dark chocolate.'
      },
      {
        id: 4,
        name: 'AROMISTICO Roma 1 kg',
        origin: 'Brazil',
        price: '6.99$',
        image: 'https://aromistico.coffee/img/Aromistico_RomaColour-8074-01.jpeg',
        desc: 'This rich arabica hand-roasted coffee has a hint of hazelnut, a full body and an intense colour. It gives a dense flavour while at the same time releases a sharpness, so that taste and fragrance persist.'
      },
      {
        id: 5,
        name: 'AROMISTICO Venezia 1 kg',
        origin: 'Brazil',
        price: '6.99$',
        image: 'https://aromistico.coffee/img/VeneziaColourPop-5908-01.jpeg',
        desc: 'This blend has a fragrant aroma, an intense crema and delightful tones of honey. It is a blonde roast coffee with sweet berry-like taste.'
      },
      {
        id: 6,
        name: 'AROMISTICO Gift Set 1 kg',
        origin: 'Brazil',
        price: '6.99$',
        image: 'https://aromistico.coffee/img/GiftSetsPopUpCP.jpeg',
        desc: 'Full selection of our gourmet coffees in a stunning gift set. Perfect for coffee lovers. Also available in LUXURY version, with each individual bag beautifully wrapped in colored paper and the gift box is tied with satin ribbons.'
      },
    ];
  
    getAllCards = async () => {
      return this._cards;
    };
  
    getCard = async (id) => {
      return this._cards[id-1];
    };

    // getAllCards = async () => {
    //   const res = await this.getResource();
    //   return res.results
    // };
    
  }