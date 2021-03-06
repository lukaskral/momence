import { parseExchangeRates, parseExchangeRate } from "./rates";

describe("exchange rates api", () => {
  const mockResponse = `07.01.2022 #5
    země|měna|množství|kód|kurz
    Austrálie|dolar|1|AUD|15,462
    Brazílie|real|1|BRL|3,798
    Bulharsko|lev|1|BGN|12,495
    Čína|žen-min-pi|1|CNY|3,391
    Dánsko|koruna|1|DKK|3,286
    EMU|euro|1|EUR|24,440
    Filipíny|peso|100|PHP|42,094
    Hongkong|dolar|1|HKD|2,772
    Chorvatsko|kuna|1|HRK|3,250
    Indie|rupie|100|INR|29,098
    Indonesie|rupie|1000|IDR|1,506
    Island|koruna|100|ISK|16,740
    Izrael|nový šekel|1|ILS|6,955
    Japonsko|jen|100|JPY|18,668
    Jižní Afrika|rand|1|ZAR|1,384
    Kanada|dolar|1|CAD|17,000
    Korejská republika|won|100|KRW|1,796
    Maďarsko|forint|100|HUF|6,813
    Malajsie|ringgit|1|MYR|5,138
    Mexiko|peso|1|MXN|1,057
    MMF|ZPČ|1|XDR|30,243
    Norsko|koruna|1|NOK|2,437
    Nový Zéland|dolar|1|NZD|14,595
    Polsko|zlotý|1|PLN|5,372
    Rumunsko|leu|1|RON|4,942
    Rusko|rubl|100|RUB|28,659
    Singapur|dolar|1|SGD|15,912
    Švédsko|koruna|1|SEK|2,376
    Švýcarsko|frank|1|CHF|23,450
    Thajsko|baht|100|THB|64,204
    Turecko|lira|1|TRY|1,554
    USA|dolar|1|USD|21,626
    Velká Británie|libra|1|GBP|29,291
`;

  it("parses exchange rates", () => {
    const rates = parseExchangeRates(mockResponse);
    expect(rates.length).toBe(33);
  });

  it("parses single exchange rate", () => {
    const rate = parseExchangeRate("EMU|euro|1|EUR|24,440", [
      "země",
      "měna",
      "množství",
      "kód",
      "kurz",
    ]);
    expect(rate).toEqual({
      amount: 1,
      code: "EUR",
      country: "EMU",
      currency: "euro",
      rate: 24.44,
    });
  });

  it("fails parsing single exchange rate", () => {
    expect(() =>
      parseExchangeRate("EMU|euro|1|EUR|24,440", [
        "země",
        "měna",
        "množství",
        "kurz",
        "kód",
      ])
    ).toThrowError();
  });
});
