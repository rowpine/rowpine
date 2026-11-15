# License (rowpine 1.0.2)

Set the license key and read what it covers. The check runs in the browser and makes no network calls.

## setLicenseKey (function)

Set the license key. Call once, before the first export or pivot. Clears
the cached status, so the next check verifies the new key and may log its
notice again.
```ts
setLicenseKey(value: string | null | undefined) => void
```
- `value`: `string | null | undefined` The key, `RP1.<payload>.<signature>`. Whitespace around it is trimmed; null, undefined or '' removes the key.
- returns `void`

## getLicenseStatus (function)

The current license status. The key is verified once and the result cached until `setLicenseKey` is called again. Logs nothing.
```ts
getLicenseStatus() => Promise<LicenseStatus>
```
- returns `Promise<LicenseStatus>`

## LicenseStatus (type)

The result of checking the license key. `buildDate` is this build's date,
YYYY-MM-DD. When `licensed` is false, `reason` says why: 'missing' (no key
set), 'malformed' (not `RP1.<payload>.<signature>`, or the payload does not
decode as JSON), 'invalid' (the signature does not verify, or `v` is not 1), or
'updates-ended' (this build is dated after the key's `upd` day; `payload`
is included).
```ts
type LicenseStatus = { licensed: true; payload: LicensePayload; buildDate: string; } | { licensed: false; reason: 'missing' | 'malformed' | 'invalid' | 'updates-ended'; payload?: LicensePayload; buildDate: string; }
```

## LicensePayload (type)

What a license key holds: the signed JSON payload between the two dots.
- `v`: `1` Payload format version. A key with any other value is 'invalid'.
- `sub`: `string` Licensee name or company.
- `plan`: `"developer" | "team"` The plan the key was issued for. Recorded in the key; the check does not read it.
- `seats`: `number` Number of seats. Recorded in the key; the check does not count them.
- `upd`: `string` Last day of the update period, YYYY-MM-DD.
- `iat`: `string` Issue date, YYYY-MM-DD.
- `id`: `string` Order or license id.
