# Changelog

## [1.11.2](https://github.com/cheminfo/filelist-utils/compare/v1.11.1...v1.11.2) (2024-09-28)


### Bug Fixes

* allow relativePath as alternative to webkitRelativePath ([e5fd102](https://github.com/cheminfo/filelist-utils/commit/e5fd1028cd769bcb59c9e319987ca825d1e24caf))

## [1.11.1](https://github.com/cheminfo/filelist-utils/compare/v1.11.0...v1.11.1) (2024-07-14)


### Bug Fixes

* remove cross-fetch ([9a2207a](https://github.com/cheminfo/filelist-utils/commit/9a2207a30e22f6e78b516f19c629d0a00294b7ca))

## [1.11.0](https://github.com/cheminfo/filelist-utils/compare/v1.10.2...v1.11.0) (2024-01-20)


### Features

* allow WebSource to have options ([1b1a436](https://github.com/cheminfo/filelist-utils/commit/1b1a436988aec57c925ab55a09da2e9dcbc946c4))

## [1.10.2](https://github.com/cheminfo/filelist-utils/compare/v1.10.1...v1.10.2) (2023-08-17)


### Bug Fixes

* update dependencies ([29af319](https://github.com/cheminfo/filelist-utils/commit/29af3198ce40508a3ce3ee67679ced6759d0fc6d))

## [1.10.1](https://github.com/cheminfo/filelist-utils/compare/v1.10.0...v1.10.1) (2023-08-03)


### Bug Fixes

* read file path ([#89](https://github.com/cheminfo/filelist-utils/issues/89)) ([639b633](https://github.com/cheminfo/filelist-utils/commit/639b6331d8f536e217959050f55d853260ce037f))

## [1.10.0](https://github.com/cheminfo/filelist-utils/compare/v1.9.0...v1.10.0) (2023-06-12)


### Features

* add a parameter to allow or not recursive unzip (true by default) ([82ccd18](https://github.com/cheminfo/filelist-utils/commit/82ccd182776021bfe42245a35b0f41e35efb8191))
* add logger (to warn when trying to unzip non zip file) ([82ccd18](https://github.com/cheminfo/filelist-utils/commit/82ccd182776021bfe42245a35b0f41e35efb8191))
* we expose now 'Options' type for all the options in the various functions. In includes `logger` `unzip` `ungzip` `filter` ([82ccd18](https://github.com/cheminfo/filelist-utils/commit/82ccd182776021bfe42245a35b0f41e35efb8191))


### Bug Fixes

* unzip only if not ignored ([82ccd18](https://github.com/cheminfo/filelist-utils/commit/82ccd182776021bfe42245a35b0f41e35efb8191))
* unzip only if not ignored ([82ccd18](https://github.com/cheminfo/filelist-utils/commit/82ccd182776021bfe42245a35b0f41e35efb8191))


### Documentation

* correct jsdoc from maybeFilter ([f89d850](https://github.com/cheminfo/filelist-utils/commit/f89d8502606287463d1621284c10f011b4095e64))

## [1.9.0](https://github.com/cheminfo/filelist-utils/compare/v1.8.1...v1.9.0) (2023-05-11)

### Features

- add cache option for fileCollectionFromWebSource ([41c0c6b](https://github.com/cheminfo/filelist-utils/commit/41c0c6bb78b70d58a692168e0292d2ca77dc2327))
- if arrayBuffer is cached we convert it to text if required ([01d2ea2](https://github.com/cheminfo/filelist-utils/commit/01d2ea2f85ceea94aa6b9f83c19b378a9f523528))

## [1.8.1](https://github.com/cheminfo/filelist-utils/compare/v1.8.0...v1.8.1) (2023-04-24)

### Bug Fixes

- do not fetch twice for unzip ([#82](https://github.com/cheminfo/filelist-utils/issues/82)) ([8a07606](https://github.com/cheminfo/filelist-utils/commit/8a07606387b41ae12e4c8b13e30cecc604ffb781))

## [1.8.0](https://github.com/cheminfo/filelist-utils/compare/v1.7.1...v1.8.0) (2023-03-01)

### Features

- publish project on lactame.com ([aefe82b](https://github.com/cheminfo/filelist-utils/commit/aefe82b73a7281328b1bbace70ce482980fd086f))

### Documentation

- example of file or folder upload ([890f215](https://github.com/cheminfo/filelist-utils/commit/890f21555b9d0618982178867f178772ea23ca6d))

## [1.7.1](https://github.com/cheminfo/filelist-utils/compare/v1.7.0...v1.7.1) (2023-02-17)

### Bug Fixes

- fallback to location.href ([1c4dac4](https://github.com/cheminfo/filelist-utils/commit/1c4dac40c71a123fd4450c6716af0ef7d5a196f5))

### Documentation

- add comments in index.js ([bc449d5](https://github.com/cheminfo/filelist-utils/commit/bc449d5036be13f16c79f14b61e0f07368054403))

## [1.7.0](https://github.com/cheminfo/filelist-utils/compare/v1.6.0...v1.7.0) (2023-02-06)

### Features

- add filter options to fileCollectionFromZip ([#74](https://github.com/cheminfo/filelist-utils/issues/74)) ([e36ab0d](https://github.com/cheminfo/filelist-utils/commit/e36ab0d4bc55310b5b1df06742dc4401e66ca680))

## [1.6.0](https://github.com/cheminfo/filelist-utils/compare/v1.5.1...v1.6.0) (2023-02-03)

### Features

- add fileCollectionToZip ([d31f6b9](https://github.com/cheminfo/filelist-utils/commit/d31f6b9da744e139e45d2d60ef1f77d239dad178))
- allow to 'zip' a fileCollection instance ([6962cf6](https://github.com/cheminfo/filelist-utils/commit/6962cf6f9b9b34e5c4f867e8b0f95383ef7bbb28))

## [1.5.1](https://github.com/cheminfo/filelist-utils/compare/v1.5.0...v1.5.1) (2023-01-19)

### Bug Fixes

- export BaseFile type ([#70](https://github.com/cheminfo/filelist-utils/issues/70)) ([e5b32d2](https://github.com/cheminfo/filelist-utils/commit/e5b32d2d64e0ee2bd048207297fc249b72a1882a))

## [1.5.0](https://github.com/cheminfo/filelist-utils/compare/v1.4.1...v1.5.0) (2022-12-15)

### Features

- fileCollectionFromFileArray as optional baseURL in options ([c452721](https://github.com/cheminfo/filelist-utils/commit/c452721eb0a15f15831776cb28822d363bda54ea))

## [1.4.1](https://github.com/cheminfo/filelist-utils/compare/v1.4.0...v1.4.1) (2022-12-14)

### Bug Fixes

- baseURL become optional in fileCollectionFromFileArray ([#67](https://github.com/cheminfo/filelist-utils/issues/67)) ([64a7024](https://github.com/cheminfo/filelist-utils/commit/64a7024aa1e144b2f60c11b6eaa375b3ec1e02e6))

## [1.4.0](https://github.com/cheminfo/filelist-utils/compare/v1.3.0...v1.4.0) (2022-12-05)

### Features

- ensure a fileCollection result is always sorted ([3c2bdff](https://github.com/cheminfo/filelist-utils/commit/3c2bdff71e1c92fc30d456c48665125d7ac2f874))

## [1.3.0](https://github.com/cheminfo/filelist-utils/compare/v1.2.0...v1.3.0) (2022-12-02)

### Features

- add fileCollectionFromFileArray ([#64](https://github.com/cheminfo/filelist-utils/issues/64)) ([d066bc5](https://github.com/cheminfo/filelist-utils/commit/d066bc5a09388b651233ece1e402ef48ad575f3f))
- add fileCollectionFromZipURL ([#63](https://github.com/cheminfo/filelist-utils/issues/63)) ([98e8289](https://github.com/cheminfo/filelist-utils/commit/98e8289c6b6ccdd48e80706f9b28436a203b5d0c))

### Documentation

- add webservice example in html ([06f3e96](https://github.com/cheminfo/filelist-utils/commit/06f3e967e25bfd2c5995fea41b73d9b10a36fe23))

## [1.2.0](https://github.com/cheminfo/filelist-utils/compare/v1.1.1...v1.2.0) (2022-11-06)

### Features

- add fileCollectionFromPaths ([cb71b52](https://github.com/cheminfo/filelist-utils/commit/cb71b522efbc61d9c226c94e49db37f2cf565a2a))

### Bug Fixes

- relativePath should always contain file.name and not '.' ([#49](https://github.com/cheminfo/filelist-utils/issues/49)) ([bfd802c](https://github.com/cheminfo/filelist-utils/commit/bfd802c1f31ae14e82570c53c580881dc0c96631))

## [1.1.1](https://github.com/cheminfo/filelist-utils/compare/v1.1.0...v1.1.1) (2022-10-27)

### Bug Fixes

- ignore dotFolder and included files ([9d0c6b4](https://github.com/cheminfo/filelist-utils/commit/9d0c6b47958e48a259a76dc72122d2aa27595b85))

## [1.1.0](https://github.com/cheminfo/filelist-utils/compare/v1.0.1...v1.1.0) (2022-10-27)

### Features

- filter out .dotFiles by default ([3f4622f](https://github.com/cheminfo/filelist-utils/commit/3f4622f6a797a297e9b4ad68b37bd3898d59505c))

## [1.0.1](https://github.com/cheminfo/filelist-utils/compare/v1.0.0...v1.0.1) (2022-10-15)

### Bug Fixes

- ungzip from nodejs ([206b156](https://github.com/cheminfo/filelist-utils/commit/206b156cc2f13a7f23589d5b342357283d6c2e1b))

## [1.0.0](https://github.com/cheminfo/filelist-utils/compare/v0.12.0...v1.0.0) (2022-10-14)

### Features

- add FileCollection.filter ([#41](https://github.com/cheminfo/filelist-utils/issues/41)) ([aca9e48](https://github.com/cheminfo/filelist-utils/commit/aca9e486d435fe23e46c6259e40dfad2ff47fd43))
- release as stable ([05e7ef6](https://github.com/cheminfo/filelist-utils/commit/05e7ef6295f330a6712b6a50e34a2187b78acd7e))

## [0.12.0](https://github.com/cheminfo/filelist-utils/compare/v0.11.0...v0.12.0) (2022-10-13)

### Features

- add fileCollectionFromFiles ([de54391](https://github.com/cheminfo/filelist-utils/commit/de543910f3f12562fcb06f07bdb1858e9aa46ff7))
- allow the absence of webkitRelativePath in FromFileList ([b1f371b](https://github.com/cheminfo/filelist-utils/commit/b1f371b07e8dadc8c9d8b0dbc1e41bf9701661eb))

## [0.11.0](https://github.com/cheminfo/filelist-utils/compare/v0.10.0...v0.11.0) (2022-09-29)

### ⚠ BREAKING CHANGES

- replace .items by .files

### Miscellaneous Chores

- replace .items by .files ([87c8cf6](https://github.com/cheminfo/filelist-utils/commit/87c8cf68e7754033256bd3b4df29884dc6fc879b))

## [0.10.0](https://github.com/cheminfo/filelist-utils/compare/v0.9.1...v0.10.0) (2022-09-29)

chore!: rename FileList to FileCollection
chore!: rename File to FileCollectionItem
chore!: rename webkitRelativePath to relativePath
feat: add fileCollectionFromFileList
refactor: remove baseName option and fix on Windows
feat: default unzip ungzip using fromFileList and fromWebService

### ⚠ BREAKING CHANGES

- rename FileList to FileCollection
- rename File to FileCollectionItem
- rename webkitRelativePath to relativePath
- create internal class containing items

### Features

- add fileCollectionFromFileList
- add fileCollectionFromPath
- add fileCollectionFromWebservice
- add fileCollectionFromZip

### Miscellaneous Chores

- create internal class containing items ([4633c4a](https://github.com/cheminfo/filelist-utils/commit/4633c4ac96595abbd6fc480ed7678728249740e7))

## [0.9.1](https://github.com/cheminfo/filelist-utils/compare/v0.9.0...v0.9.1) (2022-09-22)

### Bug Fixes

- force string for fetch ([5b19f07](https://github.com/cheminfo/filelist-utils/commit/5b19f07a4fefc0fdee13cbac00415e42874cf523))

## [0.9.0](https://github.com/cheminfo/filelist-utils/compare/v0.8.0...v0.9.0) (2022-09-22)

### ⚠ BREAKING CHANGES

- rename fileCollectionFromWS to fileCollectionFromWebservice

### Miscellaneous Chores

- rename fileCollectionFromWS to fileCollectionFromWebservice ([df98fac](https://github.com/cheminfo/filelist-utils/commit/df98fac8c55f701d3fb1a1b585b1b9cc42bdb24b))

## [0.8.0](https://github.com/cheminfo/filelist-utils/compare/v0.7.1...v0.8.0) (2022-09-19)

### Features

- add fileCollectionFromWS ([ccd0c8b](https://github.com/cheminfo/filelist-utils/commit/ccd0c8bead9d8bc808a4825e212f32e19cdf093c))

## [0.7.1](https://github.com/cheminfo/filelist-utils/compare/v0.7.0...v0.7.1) (2022-08-24)

### Bug Fixes

- keep ebkitRelativePath after gunzip and only change the name ([05eacf1](https://github.com/cheminfo/filelist-utils/commit/05eacf1671a9c2a8e48a1da93384e716ee19b8c6))

## [0.7.0](https://github.com/cheminfo/filelist-utils/compare/v0.6.0...v0.7.0) (2022-08-24)

### Features

- ungzip using native nodejs ([20d3afb](https://github.com/cheminfo/filelist-utils/commit/20d3afbe51bacf895086892c1368934e93748a5f))

## [0.6.0](https://github.com/cheminfo/filelist-utils/compare/v0.5.0...v0.6.0) (2022-08-19)

### ⚠ BREAKING CHANGES

- fileCollectionFromPath is now async and ungzip and unzip

### Features

- fileCollectionFromPath is now async and ungzip and unzip ([8245843](https://github.com/cheminfo/filelist-utils/commit/8245843b15f45f9beef71ed8a86e4134a7b8123c))
- first implementation of stream ([2c060da](https://github.com/cheminfo/filelist-utils/commit/2c060dad2102466b391bd2364a9d2ff88806bc3d))
- implementation of stream ([59e182c](https://github.com/cheminfo/filelist-utils/commit/59e182c6649ebcf39df7880b47482190b18ac2b3))

## [0.5.0](https://github.com/cheminfo/filelist-utils/compare/v0.4.0...v0.5.0) (2022-04-13)

### Features

- add fileCollectionItemsUngzip ([c09e3d5](https://github.com/cheminfo/filelist-utils/commit/c09e3d507ab388c57aa79eb5b9786e305694cfd9))

## [0.4.0](https://github.com/cheminfo/filelist-utils/compare/v0.3.0...v0.4.0) (2022-04-08)

### Features

- add groupFiles ([4d16f7b](https://github.com/cheminfo/filelist-utils/commit/4d16f7b231937d0b9f792e70a70805047721e025))
- expose FileItem and FileCollection ([c451ac3](https://github.com/cheminfo/filelist-utils/commit/c451ac37f011df433e47e4b51becfe702dd242ae))

## [0.3.0](https://github.com/cheminfo/filelist-utils/compare/v0.2.4...v0.3.0) (2022-03-18)

### Features

- add fileCollectionItemUnzip method ([#13](https://github.com/cheminfo/filelist-utils/issues/13)) ([4876215](https://github.com/cheminfo/filelist-utils/commit/487621596f3fc795cbcdd84e0a42be3136d13d63))

### [0.2.4](https://github.com/cheminfo/filelist-utils/compare/v0.2.3...v0.2.4) (2022-03-08)

### Bug Fixes

- fileCollectionFromPath and relativePath ([2e3b7f1](https://github.com/cheminfo/filelist-utils/commit/2e3b7f102159fdf55e1668d51583356617e3b12c))
- fileCollectionFromZip and correct relativePath ([a136530](https://github.com/cheminfo/filelist-utils/commit/a13653063f13f6d4d389ceef4017506b64746963))

### [0.2.3](https://github.com/cheminfo/filelist-utils/compare/v0.2.2...v0.2.3) (2022-03-03)

### Bug Fixes

- replace back in relativePath ([#8](https://github.com/cheminfo/filelist-utils/issues/8)) ([84ae282](https://github.com/cheminfo/filelist-utils/commit/84ae28242285084a5ea720ed5c497d63fe05838e))

### [0.2.2](https://github.com/cheminfo/filelist-utils/compare/v0.2.1...v0.2.2) (2022-03-02)

### Bug Fixes

- correctly return a filelist from zip ([b579d2a](https://github.com/cheminfo/filelist-utils/commit/b579d2aa373e1835229f96ea4947d06b20446acc))

### [0.2.1](https://github.com/cheminfo/filelist-utils/compare/v0.2.0...v0.2.1) (2022-03-01)

### Bug Fixes

- export the type FileCollection ([818a69c](https://github.com/cheminfo/filelist-utils/commit/818a69c51c757f2d085c3ca0c31fa319efce48b9))

## [0.2.0](https://github.com/cheminfo/filelist-utils/compare/v0.1.0...v0.2.0) (2022-02-28)

### Features

- expose ZipFileContent type ([c478ae7](https://github.com/cheminfo/filelist-utils/commit/c478ae7804ad8553a7b53b0c4c251d4698602785))

### Bug Fixes

- File with omited properties ([9d5ecb8](https://github.com/cheminfo/filelist-utils/commit/9d5ecb84329ae3e548055c2026b14c594e407f37))
- lastModified set to milliseconds since unix epoch ([#3](https://github.com/cheminfo/filelist-utils/issues/3)) ([de58110](https://github.com/cheminfo/filelist-utils/commit/de58110a0528a90b0d8ab07c8f11bba6c21458e4))

## 0.1.0 (2022-02-25)

### Features

- first implementation ([0a74b71](https://www.github.com/cheminfo/filelist-utils/commit/0a74b71cd1838859852339933279ebc67a6bf495))
