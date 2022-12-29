import { Curl } from "../curl";
import path from "path";
import { Scraper, ScraperRequestError } from "..";
describe("Curl", () => {
  const curl = new Curl();
  const scraper = new Scraper(curl);
  it("can access blur", async () => {
    const testUrl = "https://core-api.prod.blur.io/auth/challenge";
    const res = await scraper.post(
      testUrl,
      {
        walletAddress: "0xdb9ece7aab0ddbb78b59f44b0bef9539cfeaf203",
      },
      {
        headers: {
          "content-type": "application/json",
        },
      }
    );
    expect(res.status).toEqual(201);
  });

  it(`Can use auth proxy`, async () => {
    scraper.useProxy("http://jnunknlz:bhs71x4u0ay8@45.41.177.87:5737");
    const { data } = await scraper.get<string>("https://www.showmyip.com");
    expect(data.includes("45.41.177.87")).toBeTruthy();
  });
  it(`can use rotating proxy`, async () => {
    scraper.useProxy("http://69.46.80.226:8150");
    const { data } = await scraper.get("https://www.showmyip.com");
  });
  it("Can handle proxy error", async () => {
    scraper.useProxy("http://jnsunknlz:bhs71x4u0ay8@45.41.177.87:5737");
    await expect(scraper.get("https://www.showmyip.com")).rejects.toThrow();
  });

  it("can handle bad request", async () => {
    scraper.useProxy("http://jnunknlz:bhs71x4u0ay8@192.241.94.76:7631");
    const testUrl = "https://core-api.prod.blur.io/auth/challenge";
    try {
      await scraper.post(
        testUrl,
        {
          walletAddress: "wrong addres",
        },
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
    } catch (err) {
      expect(err instanceof ScraperRequestError).toBeTruthy();
    }
  });
});
