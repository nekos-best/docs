# Haskell

---

## Installation

The [nekos-best](https://hackage.haskell.org/package/nekos-best) package is available on Hackage and can be added to the .cabal file

```
 build-depends:
    nekos-best ^>= 0.2.0.0,
    ...
```

## Usage

Get a neko image

```haskell
import NekosBest.API (getNbImage)
import qualified NekosBest.Category as C

main = do
    res <- getNbImage C.Neko
    print res
```

___

For random images use `randomNbImage` passing a `RandomGen` value

```haskell
import NekosBest.API (randomNbImage)
import qualified NekosBest.Category as C

main = do
    gen <- getStdGen
    (res, gen') <- randomNbImage gen
    print res

```
___

Downloading an image

```haskell
import NekosBest.API (getNbImage, downloadNbImage)
import qualified NekosBest.Category as C

main = do
    res <- getNbImage C.Neko
    mapM_ (\x -> downloadNbImage x "filename") res
```

## About

> Example added by: [**xQuantx**](https://github.com/xquantxz)
>
> The source code is available at [**GitHub**](https://github.com/xquantxz/nekos-best.hs)
>
> ![NekosBest](https://img.shields.io/hackage/v/nekos-best.svg) ![NekosBest](https://img.shields.io/github/license/xquantxz/nekos-best%2ehs.svg) ![NekoBest](https://img.shields.io/github/issues/xquantxz/nekos-best%2ehs.svg)