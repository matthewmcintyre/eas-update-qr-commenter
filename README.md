# EAS Update QR Commenter

Note this currently only works on Pull Request events.

This action prints QR codes for iOS and Android expo builds. It is extremely simple given it combines strings and comments..

## Inputs

## `ios-build-id`

**Required** iOS build id

## `android-build-id`

**Required** Android build id

## `repo-token`

**Required** Repo token

## Example usage

```yml
uses: matthewmcintyre/eas-update-qr-commenter@v1.4
with:
  ios-build-id: "${{ secrets.GITHUB_TOKEN }}"
  android-build-id: "${{ secrets.GITHUB_TOKEN }}"
  repo-token: "${{ secrets.GITHUB_TOKEN }}"
```
