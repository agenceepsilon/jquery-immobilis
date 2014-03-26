# jQuery Immobilis [![GitHub version](https://badge.fury.io/gh/agenceepsilon%2Fjquery-immobilis.png)](http://badge.fury.io/gh/agenceepsilon%2Fjquery-immobilis) [![Bower version](https://badge.fury.io/bo/jquery-immobilis.png)](http://badge.fury.io/bo/jquery-immobilis)

Easily place your content blocks on top or bottom of the page to scroll.

## Parameters

| Options       | Types   | Defaults  | Others            |
| ------------- | ------- | --------- | ----------------- |
| itemSelector  | string  | immobilis | Choose your class |
| css           | boolean | ``true``  | ``false``         |
| target        | string  | "top "    | "bottom"          |

## Initialize

    $(".mobilis").immobilis();

## Changelogs

### 1.2.0

* Options:
    * "mainClass" replaced by "itemSelector" ([#3](https://github.com/agenceepsilon/jquery-immobilis/issues/3))
* Code optimisation:
    * Code cleaning
    * outerHeight(); ([#4](https://github.com/agenceepsilon/jquery-immobilis/issues/4))

### 1.1.1

* innerHeight(); ([#2](https://github.com/agenceepsilon/jquery-immobilis/issues/2))
* Code optimisation

### 1.1.0

* Add ``target`` options ([#1](https://github.com/agenceepsilon/jquery-immobilis/issues/1))

### 1.0.0

* Initial release