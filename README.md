# EAS Update QR Commenter

This action prints QR codes for iOS and Android expo builds.

## Inputs

## `ios-build-id`

**Required** iOS build id

## `android-build-id`

**Required** Android build id

## `repo-token`

**Required** Repo token

## Example usage

uses: matthewmcintyre/eas-update-qr-commenter@v1.0
with:
  ios-build-id: "${{ secrets.GITHUB_TOKEN }}"
  android-build-id: "${{ secrets.GITHUB_TOKEN }}"
  repo-token: "${{ secrets.GITHUB_TOKEN }}"
