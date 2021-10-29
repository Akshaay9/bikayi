import NobelPriceData from "../TestData/NobelPrice.json";
import { filterData, getMultipleNobelPriceData } from "../utils/NobelUtils";

describe("should test multiple noble price winner function", () => {
  test("should get only 4 peoples data who got multiple nobel prices", () => {
    expect(getMultipleNobelPriceData(NobelPriceData)).toEqual([
      {
        id: "222",
        firstname: "Frederick",
        surname: "Sanger",
        motivation:
          '"for his work on the structure of proteins, especially that of insulin"',
        share: "1",
      },
      {
        id: "66",
        firstname: "John",
        surname: "Bardeen",
        motivation:
          '"for their researches on semiconductors and their discovery of the transistor effect"',
        share: "3",
      },
      {
        id: "217",
        firstname: "Linus",
        surname: "Pauling",
        motivation:
          '"for his research into the nature of the chemical bond and its application to the elucidation of the structure of complex substances"',
        share: "1",
      },
      {
        id: "6",
        firstname: "Marie",
        surname: "Curie",
        motivation:
          '"in recognition of the extraordinary services they have rendered by their joint researches on the radiation phenomena discovered by Professor Henri Becquerel"',
        share: "4",
      },
    ]);
  });
});

describe("should test filter function", () => {
  test("should filter data of physics category at 1903", () => {
    expect(filterData("1903", "physics", NobelPriceData)).toEqual([
      {
        year: "1903",
        category: "physics",
        laureates: [
          {
            id: "4",
            firstname: "Henri",
            surname: "Becquerel",
            motivation:
              '"in recognition of the extraordinary services he has rendered by his discovery of spontaneous radioactivity"',
            share: "2",
          },
          {
            id: "5",
            firstname: "Pierre",
            surname: "Curie",
            motivation:
              '"in recognition of the extraordinary services they have rendered by their joint researches on the radiation phenomena discovered by Professor Henri Becquerel"',
            share: "4",
          },
          {
            id: "6",
            firstname: "Marie",
            surname: "Curie",
            motivation:
              '"in recognition of the extraordinary services they have rendered by their joint researches on the radiation phenomena discovered by Professor Henri Becquerel"',
            share: "4",
          },
        ],
      },
    ]);
  });
  //
  test("should get data of 2011", () => {
    expect(filterData("2011", "default", NobelPriceData)).toEqual([
      {
        year: "2011",
        category: "chemistry",
        laureates: [
          {
            id: "867",
            firstname: "Dan",
            surname: "Shechtman",
            motivation: '"for the discovery of quasicrystals"',
            share: "1",
          },
        ],
      },
      {
        year: "2011",
        category: "economics",
        laureates: [
          {
            id: "872",
            firstname: "Thomas J.",
            surname: "Sargent",
            motivation:
              '"for their empirical research on cause and effect in the macroeconomy"',
            share: "2",
          },
          {
            id: "873",
            firstname: "Christopher A.",
            surname: "Sims",
            motivation:
              '"for their empirical research on cause and effect in the macroeconomy"',
            share: "2",
          },
        ],
      },
      {
        year: "2011",
        category: "literature",
        laureates: [
          {
            id: "868",
            firstname: "Tomas",
            surname: "Tranströmer",
            motivation:
              '"because, through his condensed, translucent images, he gives us fresh access to reality"',
            share: "1",
          },
        ],
      },
      {
        year: "2011",
        category: "peace",
        laureates: [
          {
            id: "869",
            firstname: "Ellen",
            surname: "Johnson Sirleaf",
            motivation:
              '"for their non-violent struggle for the safety of women and for women\'s rights to full participation in peace-building work"',
            share: "3",
          },
          {
            id: "870",
            firstname: "Leymah",
            surname: "Gbowee",
            motivation:
              '"for their non-violent struggle for the safety of women and for women\'s rights to full participation in peace-building work"',
            share: "3",
          },
          {
            id: "871",
            firstname: "Tawakkol",
            surname: "Karman",
            motivation:
              '"for their non-violent struggle for the safety of women and for women\'s rights to full participation in peace-building work"',
            share: "3",
          },
        ],
      },
      {
        year: "2011",
        category: "physics",
        laureates: [
          {
            id: "864",
            firstname: "Saul",
            surname: "Perlmutter",
            motivation:
              '"for the discovery of the accelerating expansion of the Universe through observations of distant supernovae"',
            share: "2",
          },
          {
            id: "865",
            firstname: "Brian P.",
            surname: "Schmidt",
            motivation:
              '"for the discovery of the accelerating expansion of the Universe through observations of distant supernovae"',
            share: "4",
          },
          {
            id: "866",
            firstname: "Adam G.",
            surname: "Riess",
            motivation:
              '"for the discovery of the accelerating expansion of the Universe through observations of distant supernovae"',
            share: "4",
          },
        ],
      },
      {
        year: "2011",
        category: "medicine",
        laureates: [
          {
            id: "861",
            firstname: "Bruce A.",
            surname: "Beutler",
            motivation:
              '"for their discoveries concerning the activation of innate immunity"',
            share: "4",
          },
          {
            id: "862",
            firstname: "Jules A.",
            surname: "Hoffmann",
            motivation:
              '"for their discoveries concerning the activation of innate immunity"',
            share: "4",
          },
          {
            id: "863",
            firstname: "Ralph M.",
            surname: "Steinman",
            motivation:
              '"for his discovery of the dendritic cell and its role in adaptive immunity"',
            share: "2",
          },
        ],
      },
    ]);
  });
});
