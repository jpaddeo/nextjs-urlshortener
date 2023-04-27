<p align="center">
  <a href="https://surl.jpaddeo.xyz/">
    <img src="/public/logo.png" height="96">
    <h3 align="center">Shortener URL App</h3>
  </a>
</p>

<p align="center">
This is not a <strong>common shortener url app</strong>. This is <a href="https://surl.jpaddeo.xyz/">THE SHORTENER URL APP</a>. Developed to apply real life system design concepts such as rate limit, cache, balancing, etcetera.</p>

<br/>

## Back of the envelope

Considerations about the application to define de system design concepts:

- Write operations: 1 million URLs generated per day.
- Write operations per second: 1 million / 24 / 3600 = **11.6 wo/s**.
- Read operations per second: assuming ratio of read operations to write operations is 10:1, then read operations per second = 11.6 * 10 => **116 ro/s**.
- Assuming the app will run for 3 years, this means we must support 1 million * 365 * 3 = **1.1 billion records**.
- Assuming the average URL length is 100, then **storage** requirement over 3 years: 1.1 billion * 100 bytes = **105 GB**.

## API Endpoints

- URL shortening: to create a new short URL.
  - POST api/v1/shorturl
    - request parameter: {longUrl: string}.
    - return shortUrl: string.
- URL redirecting: to redirect a short URL to original long URL.
  - GET api/v1/url
    - return longUrl for HTTP redirection

## Hash function
The _hashValue_ consists of characters from [0-9,a-z,A-Z] => containing 10 + 26 + 26 = 62 possible characters. To figure out the length of _hashValue_ we need to find the smallest _n_ to satisfy _62^n >= 1.1 billion_ (the app must support up to 1.1 billion URLs).

Then 62^**6** = 56,800,235,584 => then **_hashValue_ is 6**

### Base 62 conversion
We use base 62 conversion. The process is:
1. `longUrl` is the input
2. Check if the `longUrl` is in the DB.
3. If it is (then this `longUrl` was converted to `shortUrl` before), then fetch de `shortUrl` and return it to the client.
4. If not, the `longUrl` is new, then a new unique `ID` (PK) is generated.
5. Convert the `ID` to `shortUrl` with base 62 conversion.
6. Save `ID`, `shortUrl` and longUrl to DB and return `shortUrl`.